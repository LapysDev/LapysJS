/** Function > Main
    @author: Lapys Dev Team
    @description: LapysJS is a JavaScript library designed to challenge the status quo of the JavaScript language and its other related vendors.
    @version: 0.0.3
    @url: https://www.lapysjs.com

    --- RULES ---
        #lapys:
            - All event callbacks will not be arrow functions and will use the `event` parameter if necessary.
            - Do not use ambiguous function/ variable names e.g.: `aFunctionWithAReallyLongFunctionName`.
            - Do not use custom LapysJS functions and variables within the LapysJS Script.
            - Do not use template strings from ES6 and above.
            - Do not use the `__proto__` syntax, defer to the `constructor.prototype` set instead.
            - Do not use the `~-` syntax for non-safe numerals, defer to `-1` instead.
            - Do not use the `-~` syntax for non-safe numerals, defer to `+1` instead.
            - The use of function parameters are heavily restricted.
*/
(function Main(argc, argv) {
    /* {Global Object Test} Logic
            [if:else if:else statement]

        > Return
    */
    if (!window)
        return;

    /* Initialization
            --- NOTE ---
                #lapys: Variables defined here are definitely global.

            --- WARN ---
                #lapys: Do not change the value of these variables.
    */
        // Animation Cycle Interval
        var ANIMATION_CYCLE_INTERVAL = 1 / 60,

        // Clipboard
        CLIPBOARD = '',

        /* Conversion Table
                --- UPDATE REQUIRED ---
                    #lapys: The set here is still incomplete.
        */
        CONVERSION_TABLE = {
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
        },

        // Features
        FEATURES = ['data-focus', 'html-javascript'],

        // Version
        VERSION = '0.0.3';

    // Error Handling
    try {
        /* Execute
                --- NOTE ---
                    #lapys: Provide a set of acceptable syntaxes to check
                        if LapysJS can be run.
        */
            // {Evaluation Function}
            eval;

            // {Alternative for Statement}
            eval('(function() { for (;true;) continue })');

            // {Default Function Parameters}
            eval('(function(a = 0) {})');

            // {delete Keyword}
            eval('!1 || delete ({a: 0}).a');

            // {in Keyword}
            eval("'document' in window; 'length' in []");

            // {Memory Allocation}
            eval("(a = 'a' in window ? a : (function() { setTimeout(function() { delete a }); return 0 })(), function() { const b = 1; let c = 2 })()");

            // {Method Shorthand}
            eval('({a() {}})');

            // {Spread Operator}
            eval('[...[]]');

            // {Syntax}
            eval('~0');

        /* Function > Initialize */
        (function Init(window = window.parent, document = window.parent.document, global = typeof global != 'undefined' ? global : null, undefined = window.parent.undefined || void 0) {
            /* Logic
                    [if:else if:else statement]

                    --- WARN ---
                        #lapys: Prevent LapysJS from redefining itself.
            */
            if (typeof LapysJS == 'undefined' || (window.LapysJS || new (function LapysJSObject() {})).ready === !1) {
                // Initialization
                    // Maximum Call Stack Size
                    let maximumCallStackSize = 0;
                        // Function > Main
                        (function main() {
                            // Error Handling
                            try {
                                // Update > Maximum Call Stack Size
                                maximumCallStackSize += 1;

                                // Main
                                main()
                            }

                            catch (error) {}
                        })();

                    // Processing Time
                    let processingTime = 0;
                        // Error Handling
                        try {
                            // Update > Processing Time
                            processingTime = performance.now()
                        }

                        catch (error) {
                            // Update > Performance > Now
                            (window.performance=window.performance||{}).now=function now(){return Date.now?Date.now():+new Date;(function(){if(!1=="performance"in window&&(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!1=="now"in window.performance){var a=Date.now();performance.timing&&performance.timing.navigationStart&&(a=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-a}}})()};

                            // Update > Processing Time
                            processingTime = performance.now()
                        }

                /* Cache/ Polyfill
                        --- NOTE ---
                            #lapys:
                                - Cache: Allow memory allocated to variables to be as
                                    minimal and quickly accessible as possible.

                                - Polyfill: Prevent issues with legacy browsers or non-supporting
                                    browsers.
                */
                    // Boolean
                    let boolean = Boolean,
                        // Prototype
                        booleanProto = Boolean.prototype,

                    // Document
                    doc = Document,
                        // Create Attribute
                        docCreateAttr = function createAttribute() { return document.createAttribute.apply(document, [...arguments]) },

                        // Create Comment
                        docCreateComment = function createComment() { return document.createComment.apply(document, [...arguments]) },

                        // Create Document Fragment
                        docCreateDocFrag = function createDocumentFragment() { return document.createDocumentFragment.apply(document, [...arguments]) },

                        // Create Element
                        docCreateElement = function createElement() { return document.createElement.apply(document, [...arguments]) },

                        // Create Event
                        docCreateEvent = function createEvent() { return document.createEvent.apply(document, [...arguments]) },

                        // Create Range
                        docCreateRange = function createRange() { return document.createRange.apply(document, [...arguments]) },

                        // Create Text
                        docCreateTextNode = function createTextNode() { return document.createTextNode.apply(document, [...arguments]) },

                        // Execute Command
                        docExecCom = function execCommand() { return document.execCommand.apply(document, [...arguments]) },

                        // Get Elements By Class Name
                        docGetEleByClass = function getElementsByClassName() { return document.getElementsByClassName.apply(document, [...arguments]) },

                        // Get Element By ID
                        docGetEleById = function getElementById() { return document.getElementById.apply(document, [...arguments]) },

                        // Get Elements By Tag Name
                        docGetEleByTag = function getElementsByTagName() { return document.getElementsByTagName.apply(document, [...arguments]) },

                        // Query Command Enabled
                        docQueryComEnabled = function queryCommandEnabled() { return document.queryCommandEnabled.apply(document, [...arguments]) },

                        // Query Command Supported
                        docQueryComSupported = function queryCommandSupported() { return document.queryCommandSupported.apply(document, [...arguments]) },

                        // Query Selector
                        docQuerySel = function querySelector() { return document.querySelector.apply(document, [...arguments]) },

                        // Query Selector All
                        docQuerySelAll = function querySelectorAll() { return document.querySelectorAll.apply(document, [...arguments]) },

                        // Prototype
                        docProto = doc.prototype,

                    // Document Fragment
                    docFrag = DocumentFragment,
                        // Prototype
                        docFragProto = docFrag.prototype,

                    // Error
                    error = Error,
                        // Prototype
                        errorProto = error.prototype,

                    // False
                    False = !1,

                    // File
                    _file = File,

                    // HTML All Collection
                    htmlAllCollection = HTMLAllCollection,
                        // Prototype
                        htmlAllCollectionProto = htmlAllCollection.prototype,

                    // HTML Collection
                    htmlCollection = HTMLCollection,
                        // Prototype
                        htmlCollectionProto = htmlCollection.prototype,

                    // Infinity
                    infinity = 1 / 0;

                    // Math
                        // Cube Root
                        'cbrt'in Math||(Math.cbrt=function cbrt(a){var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b});

                    // Not A Number (NaN)
                    let nan = NaN,

                    // Node List
                    nodeList = NodeList,
                        // Prototype
                        nodeListProto = nodeList.prototype,

                    // Null
                    Null = null,

                    // Number
                    _number = Number,
                        // Is Finite
                        _numberIsFinite = function isFinite() {
                            // Return
                            return _number.isFinite.apply(_number, [...arguments])
                        },

                        // Is NaN
                        _numberIsNaN = function isNaN() {
                            // Return
                            return _number.isNaN.apply(_number, [...arguments])
                        },

                        // Maximum Safe Integer
                        _numberMaxSafeInteger = _number.MAX_SAFE_INTEGER,

                        // Maximum Value
                        _numberMaxValue = _number.MAX_VALUE,

                        // Minimum Safe Integer
                        _numberMinSafeInteger = _number.Min_SAFE_INTEGER,

                        // Minimum Value
                        _numberMinValue = _number.MIN_VALUE,

                        // Parse Measurement
                        _numberParseMeasurement = function parseMeasurement() {
                            // Return
                            return _number.parseMeasurement.apply(_number, [...arguments])
                        },

                        // Parse Number
                        _numberParseNumber = function parseNumber() {
                            // Return
                            return _number.parseNumber.apply(_number, [...arguments])
                        },

                        // Prototype
                        _numberProto = _number.prototype,

                    // Object
                    object = Object,
                        // Create
                        objectCreate = object.create,

                        // Define Properties
                        objectDefProps = object.defineProperties,

                        // Define Property
                        objectDefProp = object.defineProperty,

                        // Get Own Property Descriptor
                        objectGetOwnPropDesc = object.getOwnPropertyDescriptor,

                        // Keys
                        objectKeys = object.keys;

                        // Values
                        (typeof object.values=='function')||objectDefProp(object, 'values',{configurable:!0,value:function values(){let a=arguments[0],b=Object.keys(a),c=[];for(let d of b)c.push(a[d]);return c},writable:!0});
                        let objectValues = object.values;

                        // Assign
                        (typeof object.assign=='function')||objectDefProp(object,'assign',{configurable:!0,value:function assign(){'use strict';if(arguments[0]==null)throw typeError('Cannot convert undefined or null to object');var to=object(arguments[0]);for(var index=1;index<arguments.length;index+=1){var nextSource=arguments[index];if(nextSource!=null)for(var nextKey in nextSource){if(object.prototype.hasOwnProperty.call(nextSource,nextKey))to[nextKey]=nextSource[nextKey]}return to}},writable:!0});

                        // Is
                        (typeof object.is=='function')||(object.is=function is(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b});

                        // Assign
                        let objectAssign = object.assign,

                        // Is
                        objectIs = object.is,

                        // Prototype
                        objectProto = object.prototype;

                    // Function
                    let funct = Function,
                        // Prototype
                        functProto = funct.prototype;
                            // Bind
                            (typeof functProto=='function')||objectDefProp(functProto,'bind',{value:function bind(){return this}});

                    // Mutation Observer
                    if(typeof MutationObserver!='function')if(typeof WebKitMutationObserver=='function')objectDefProp(window,'MutationObserver',{value:WebKitMutationObserver});

                    // Element
                    let element = docCreateElement('lapysjs-element'),
                    ele = Element,
                        // Prototype
                        eleProto = ele.prototype;

                        // Text Content
                        objectDefProp&&objectGetOwnPropDesc&&objectGetOwnPropDesc(eleProto,'textContent')&&!objectGetOwnPropDesc(eleProto,'textContent').get&&function(){var a=objectGetOwnPropDesc(eleProto,'innerText');objectDefProp(eleProto,'textContent',{get:function(){return a.get.call(this)},set:function(b){return a.set.call(this,b)}})}();

                    // HTML Table Element
                    let htmlTableEle = HTMLTableElement,
                        htmlTableEleProto = htmlTableEle.prototype,

                    // Regular Expression
                    regExp = RegExp,
                        // Prototype
                        regExpProto = regExp.prototype,

                    // String
                    string = String,
                        // Prototype
                        stringProto = string.prototype,

                    // Symbol
                    symbol = Symbol,
                        // Prototype
                        symbolProto = symbol.prototype,

                    // True
                    True = !0,

                    // Type Error
                    typeError = TypeError,

                    // Undefined
                    Undefined = [][0],

                    // Array
                    array = Array,
                        // Prototype
                        arrayProto = array.prototype;

                        // From
                        (typeof array.from == 'function') || objectDefProp(array, 'from', {
                            // Value
                            value: function from(){var a=objectProto.toString,b=function(f){return'function'==typeof f||'[object Function]'===a.call(f)},c=function(f){var g=+f;return isNaN(g)?0:0!=g&&isFinite(g)?(0<g?1:-1)*Math.floor(Math.abs(g)):g},d=Math.pow(2,53)-1,e=function(f){var g=c(f);return Math.min(Math.max(g,0),d)};return function(g){var h=this,i=object(g);if(null==g)throw new typeError('Array.from requires an array-like object - not null or undefined');var l,j=1<arguments.length?arguments[1]:void 0;if('undefined'!=typeof j){if(!b(j))throw new typeError('Array.from: when provided, the second argument must be a function');2<arguments.length&&(l=arguments[2])}for(var p,m=e(i.length),n=b(h)?object(new h(m)):array(m),o=0;o<m;)p=i[o],n[o]=j?'undefined'==typeof l?j(p,o):j.call(l,p,o):p,o+=1;return n.length=m,n}}(),

                            // Writable
                            writable: True
                        });

                        // Index Of
                        (typeof arrayProto.indexOf == 'function') || objectDefProp(arrayProto, 'indexOf', {
                            // Value
                            value: function indexOf(){if(this===Null)throw typeError("'this' is null or not defined");var a,c=object(this),b=c.length>>>0;if(0===b)return -1;a=parseFloat(arguments[1])||0;infinity===Math.abs(a)&&(a=0);if(a>=b)return -1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===arguments[0])return a;a += 1}return -1},

                            // Writable
                            writable: True
                        });

                        // Last Index Of
                        (typeof arrayProto.lastIndexOf == 'function') || objectDefProp(arrayProto, 'lastIndexOf', {
                            // Value
                            value: function lastIndexOf(){if(this===Undefined||this===Null)throw typeError();var n,k,t=object(this),len=t.length>>>0;if(len===0){return -1}n=len-1;if(arguments.length>1){n=Number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==(1/0)&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}}for(k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k -= 1){if(k in t&&t[k]===arguments[0]){return k}}return -1},

                            // Writable
                            writable: True
                        });

                        // From
                        let arrayFrom = array.from,

                    // Node
                    node = Node,
                        // Prototype
                        nodeProto = node.prototype;

                    /* Promise
                            --- NOTE ---
                                #lapys: https://www.promisejs.org/polyfills/promise-7.0.4.min.js
                    */
                    !function b(g,j,k){function m(z,A){if(!j[z]){if(!g[z]){var B='function'==typeof require&&require;if(!A&&B)return B(z,!0);if(q)return q(z,!0);var C=new error("Cannot find module '"+z+"'");throw C.code='MODULE_NOT_FOUND',C}var D=j[z]={exports:{}};g[z][0].call(D.exports,function(E){var F=g[z][1][E];return m(F?F:E)},D,D.exports,b,g,j,k)}return j[z].exports}for(var q='function'==typeof require&&require,x=0;x<k.length;x+=1)m(k[x]);return m}({1:[function(b,g){'use strict';function k(){}function m(K){try{return K.then}catch(L){return I=L,J}}function q(K,L){try{return K(L)}catch(M){return I=M,J}}function x(K,L,M){try{K(L,M)}catch(N){return I=N,J}}function z(K){if('object'!=typeof this)throw new typeError('Promises must be constructed via new');if('function'!=typeof K)throw new typeError('not a function');this._37=0,this._12=null,this._59=[],K!==k&&G(K,this)}function A(K,L,M){return new K.constructor(function(N,O){var P=new z(k);P.then(N,O),B(K,new F(L,M,P))})}function B(K,L){for(;3===K._37;)K=K._12;return 0===K._37?void K._59.push(L):void H(function(){var M=1===K._37?L.onFulfilled:L.onRejected;if(null===M)return void(1===K._37?C(L.promise,K._12):D(L.promise,K._12));var N=q(M,K._12);N===J?D(L.promise,I):C(L.promise,N)})}function C(K,L){if(L===K)return D(K,new typeError('A promise cannot be resolved with itself.'));if(L&&('object'==typeof L||'function'==typeof L)){var M=m(L);if(M===J)return D(K,I);if(M===K.then&&L instanceof z)return K._37=3,K._12=L,void E(K);if('function'==typeof M)return void G(M.bind(L),K)}K._37=1,K._12=L,E(K)}function D(K,L){K._37=2,K._12=L,E(K)}function E(K){for(var L=0;L<K._59.length;L+=1)B(K,K._59[L]);K._59=null}function F(K,L,M){this.onFulfilled='function'==typeof K?K:Null,this.onRejected='function'==typeof L?L:Null,this.promise=M}function G(K,L){var M=!1,N=x(K,function(O){M||(M=!0,C(L,O))},function(O){M||(M=!0,D(L,O))});M||N!==J||(M=!0,D(L,I))}var H=b('asap/raw'),I=Null,J={};g.exports=z,z._99=k,z.prototype.then=function(K,L){if(this.constructor!==z)return A(this,K,L);var M=new z(k);return B(this,new F(K,L,M)),M}},{'asap/raw':4}],2:[function(b,g){'use strict';function k(D){var E=new m(m._99);return E._37=1,E._12=D,E}var m=b('./core.js');g.exports=m;var q=k(!0),x=k(!1),z=k(null),A=k(void 0),B=k(0),C=k('');m.resolve=function(D){if(D instanceof m)return D;if(Null===D)return z;if(void 0===D)return A;if(!0===D)return q;if(!1===D)return x;if(0===D)return B;if(''===D)return C;if('object'==typeof D||'function'==typeof D)try{var E=D.then;if('function'==typeof E)return new m(E.bind(D))}catch(F){return new m(function(G,H){H(F)})}return k(D)},m.all=function(D){var E=_temporaryData.slice.call(D);return new m(function(F,G){function H(K,L){if(L&&('object'==typeof L||'function'==typeof L)){if(L instanceof m&&L.then===m.prototype.then){for(;3===L._37;)L=L._12;return 1===L._37?H(K,L._12):(2===L._37&&G(L._12),void L.then(function(O){H(K,O)},G))}var M=L.then;if('function'==typeof M){var N=new m(M.bind(L));return void N.then(function(O){H(K,O)},G)}}E[K]=L,0==--I&&F(E)}if(0===E.length)return F([]);for(var I=E.length,J=0;J<E.length;J+=1)H(J,E[J])})},m.reject=function(D){return new m(function(E,F){F(D)})},m.race=function(D){return new m(function(E,F){D.forEach(function(G){m.resolve(G).then(E,F)})})},m.prototype['catch']=function(D){return this.then(Null,D)}},{'./core.js':1}],3:[function(b,g){'use strict';function m(C){var D;D=z.length?z.pop():new q,D.task=C,x(D)}function q(){this.task=Null}var x=b('./raw'),z=[],A=[],B=x.makeRequestCallFromTimer(function(){if(A.length)throw A.shift()});g.exports=m,q.prototype.call=function(){try{this.task.call()}catch(C){m.onerror?m.onerror(C):(A.push(C),B())}finally{this.task=null,z[z.length]=this}}},{'./raw':4}],4:[function(b,g){(function(k){'use strict';function m(G){B.length||(A(),C=!0),B[B.length]=G}function q(){for(;D<B.length;){var G=D;if(D+=1,B[G].call(),D>1024){for(var H=0,I=B.length-D;I>H;H+=1)B[H]=B[H+D];B.length-=D,D=0}}B.length=0,D=0,C=!1}function z(G){return function(){function H(){clearTimeout(I),clearInterval(J),G()}var I=setTimeout(H,0),J=setInterval(H,50)}}g.exports=m;var A,B=[],C=!1,D=0,F=k.MutationObserver||k.WebKitMutationObserver;A='function'==typeof F?function(G){var H=1,I=new F(G),J=docCreateTextNode('');return I.observe(J,{characterData:!0}),function(){H=-H,J.data=H}}(q):z(q),m.requestFlush=A,m.makeRequestCallFromTimer=z}).call(this,'undefined'==typeof window?'undefined'==typeof self?'undefined'==typeof window?{}:window:self:window)},{}],5:[function(){'function'!=typeof Promise.prototype.done&&(Promise.prototype.done=function(){var q=arguments.length?this.then.apply(this,arguments):this;q.then(null,function(x){setTimeout(function(){throw x},0)})})},{}],6:[function(b){b('asap'),'undefined'==typeof Promise&&(Promise=b('./lib/core.js'),b('./lib/es6-extensions.js')),b('./polyfill-done.js')},{'./lib/core.js':1,'./lib/es6-extensions.js':2,'./polyfill-done.js':5,asap:3}]},{},[6]);
                    let promise = Promise,
                        // Prototype
                        promiseProto = promise.prototype,

                    // Window
                    win = Window,
                        // Prototype
                        winProto = win.prototype;

                /* Function */
                    // Get Constructor
                    function getConstructor() {
                        // Initialization > Data
                        let data = arguments[0];

                        // Return
                        return data === Null || data === Undefined ? tmp : data.constructor
                    }

                    // Get Empty HTML Collection
                    function getEmptyHTMLCollection() {
                        // Return
                        return (function() {
                            // Initialization > (Metadata, Data)
                            let metadata = 'a',
                                data = docGetEleByTag(metadata);

                            /* Loop
                                    [do:while statement]

                                > Update > Data
                            */
                            while (data.length)
                                data = docGetEleByTag(metadata += 'a');

                            // Return
                            return data
                        })()
                    }

                    // Get Empty Node List
                    function getEmptyNodeList() {
                        // Return
                        return (function() {
                            // Initialization > (Metadata, Data)
                            let metadata = 'a',
                                data = docQuerySelAll(metadata);

                            /* Loop
                                    [do:while statement]

                                > Update > Data
                            */
                            while (data.length)
                                data = docQuerySelAll(metadata += 'a');

                            // Return
                            return data
                        })()
                    }

                    // Get Event Coordinate
                    function getEventCoord() {
                        /* Initialization > (Arguments, Data, Metadata, Alpha)
                                --- NOTE ---
                                    #lapys: Where Alpha represents the default value.
                        */
                        let args = [...arguments],
                            data = [],
                            metadata = event || new Event(''),
                            alpha = 0;

                        /* Loop
                                Index Arguments.

                            > Update > Data
                        */
                        for (let i of args)
                            data.push(when(
                                // X
                                i === 0 || string(i).toLowerCase() == 'x', function() {
                                    // Return
                                    return when(
                                        'clientX' in metadata, function() { return metadata.clientX },
                                        'changedTouches' in metadata, function() { return metadata.changedTouches[0].clientX },
                                        True, function() { return alpha }
                                    )
                                },

                                // Y
                                i === 1 || string(i).toLowerCase() == 'y', function() {
                                    // Return
                                    return when(
                                        'clientY' in metadata, function() { return metadata.clientY },
                                        'changedTouches' in metadata, function() { return metadata.changedTouches[0].clientY },
                                        True, function() { return alpha }
                                    )
                                },

                                // Z
                                i === 2 || string(i).toLowerCase() == 'z', function() {
                                    // Return
                                    return alpha
                                }
                            ));

                        // Return
                        return data.length > 1 ? data : data[0]
                    }

                    // Get Event Target
                    function getEventTarget() {
                        // Return
                        return event.target || event.srcElement
                    }

                    // Get Safe Random String
                    function getSafeRandomString() {
                        // Return
                        return LapysJS.perm.regexSet.randomize()
                    }

                    // Is Array
                    function isArray() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == array
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Boolean
                    function isBoolean() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == boolean
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Array Like
                    function isArrayLike() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == array ||
                            data.constructor == htmlAllCollection ||
                            data.constructor == htmlCollection ||
                            data.constructor == NamedNodeMap ||
                            data.constructor == nodeList
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Document
                    function isDocument() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == doc ||
                            data.constructor == HTMLDocument ||
                            data.constructor == XMLDocument
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Document Like
                    function isDocumentLike() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            isDocument(data) ||
                            data.constructor == docFrag
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Element
                    function isElement() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.nodeType == 1 &&
                            typeof data.outerHTML == 'string'
                        ) ? (args.length > 1 ? (typeof metadata == 'function' ? metadata() : metadata) : True) : False)
                    }

                    // Is Function
                    function isFunction() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == funct
                        ) ? (args.length > 1 ? (typeof metadata == 'function' ? metadata() : metadata) : True) : False)
                    }

                    // Is Non-Constructible
                    function isNonConstructable() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? True : ((
                            data === Null || data === Undefined
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Object
                    function isObject() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor != array &&
                            data.constructor != boolean &&
                            data.constructor != funct &&
                            data.constructor != _number &&
                            data.constructor != regExp &&
                            data.constructor != string &&
                            data.constructor != symbol
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Strictly Array Like
                    function isStrictlyArrayLike() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == htmlAllCollection ||
                            data.constructor == htmlCollection ||
                            data.constructor == NamedNodeMap ||
                            data.constructor == nodeList
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Is Window
                    function isWindow() {
                        // Initialization > (Arguments, Data, Metadata)
                        let args = [...arguments],
                            data = args[0],
                            metadata = args[1];

                        // Return
                        return data === Null || data === Undefined ? False : ((
                            data.constructor == win
                        ) ? (args.length > 1 ? (isFunction(metadata) ? metadata() : metadata) : True) : False)
                    }

                    // Pass
                    function pass() {}

                    // To Array
                    function toArray() {
                        // Initialization > (Arguments, Data)
                        let args = [...arguments],
                            data = [];

                        /* Loop
                                Index Arguments.

                            > Update > Data
                        */
                        for (let i of args)
                            isArrayLike(i) ? (function() {
                                // (...)
                                for (let j of arrayFrom(i))
                                    data.push(j)
                            })() : data.push(i);

                        // Return
                        return data
                    }

                /* {Window} Global Data */
                    // Default
                    let Default = new (function DefaultValue() {
                        // Initialization > Target
                        let that = this,
                            _that = that.constructor.prototype;

                        // Modification > Target
                            // Array
                            objectDefProp(that, 'array', {value: []});

                            // Boolean
                            objectDefProp(that, 'boolean', {value: False});

                            // Function
                            objectDefProp(that, 'function', {value: (function() {})});

                            // HTML All Collection
                            objectDefProp(that, 'htmlAllCollection', {value: document.all});

                            // HTML Collection
                            objectDefProp(that, 'htmlCollection', {value: getEmptyHTMLCollection()});

                            // Node List
                            objectDefProp(that, 'nodeList', {value: getEmptyNodeList()});

                            // Number
                            objectDefProp(that, 'number', {value: 0});

                            // Null
                            objectDefProp(that, 'null', {value: Null});

                            // Object
                            objectDefProp(that, 'object', {value: {}});

                            // Regular Expression
                            objectDefProp(that, 'regex', {value: /(?:)/});

                            // String
                            objectDefProp(that, 'string', {value: ''});

                            // Symbol
                            objectDefProp(that, 'symbol', {value: Symbol()});

                            // Undefined
                            objectDefProp(that, 'undefined', {value: Undefined});

                            /* Unknown
                                    --- NOTE ---
                                        #lapys: This is for unknown value types.
                            */
                            objectDefProp(_that, 'unknown', {
                                // Value
                                value: function unknown() {
                                    // Initialization > (Data, Metadata)
                                    let data = arguments[0],
                                        metadata = arguments[0];

                                    /* Logic
                                            [if:else if:else statement]

                                        > Error Handling > Update > Metadata
                                    */
                                    if (!isNonConstructable(data))
                                        try {
                                            metadata = new data.constructor
                                        }

                                        catch (error) {
                                            metadata = eval('new (function ' + data.constructor.name + '(){})')
                                        }

                                    // Return
                                    return metadata
                                }
                            })
                    }),

                    // Plugin Class List
                    pluginClassList = ['accordion', 'carousel', 'dropdown', 'dynamic-text', 'dynamic-time', 'marquee', 'media', 'option-box', 'placeholder', 'roulette', 'select-box'],

                    // Random Element List
                    randomElementList = ['a', 'audio', 'br', 'button', 'canvas', 'caption', 'div', 'dl', 'element', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'img', 'input', 'li', 'ol', 'p', 'q', 'script', 'style', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video', 'lapysjs-element'],

                    // Temporary Data
                    tmp = new (function LapysJSObject() {});

                    /* LapysJS */
                        // Initialization > Temporary Data
                        _tmp = 0;

                        // Definition
                        ((window.LapysJS || tmp).constructor.name == 'LapysJS') || (function LapysJS() {
                            /* Error Handling
                                    --- NOTE ---
                                        #lapys:
                                            - The global LapysJS object is meant to have a recursive prototype.
                                                This is a false way of mimicking such.

                                            - In a sense, you could say this cooks up the LapysJS object.
                            */
                            try {
                                // Update > Temporary Data
                                _tmp += .0005;

                                // LapysJS
                                LapysJS()
                            }

                            catch (error) {
                                // Update > Temporary Data
                                _tmp = parseInt(_tmp);

                                /* Initialization > (Data, (...))
                                        --- NOTE ---
                                            #lapys: The LapysJS object is made here.
                                */
                                let console = window.console,
                                    data = eval('new' + '(class LapysJS extends '.repeat(_tmp) + '(class LapysJS {})' + '{})'.repeat(_tmp)),
                                    _data = data.constructor.prototype,
                                    features = FEATURES,
                                    lapys = _data,
                                    _warn = console.warn,
                                    version = VERSION;

                                // Modification > Data
                                    // Error
                                    objectDefProp(_data, 'error', {
                                        // Value
                                        value: function error() {
                                            // Initialization > (...)
                                            let args = [...arguments],
                                                data = '',
                                                metadata = args[0],
                                                alpha = args[1],
                                                beta = args[2];

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (args.length) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (
                                                    getConstructor(metadata) == DOMError ||
                                                    getConstructor(metadata) == EvalError ||
                                                    getConstructor(metadata) == Error ||
                                                    getConstructor(metadata).name == 'FileError' ||
                                                    getConstructor(metadata) == MediaError ||
                                                    getConstructor(metadata).name == 'LapysJSError' ||
                                                    getConstructor(metadata).name == 'OverconstrainedError' ||
                                                    getConstructor(metadata) == RangeError ||
                                                    getConstructor(metadata) == ReferenceError ||
                                                    getConstructor(metadata).name == 'SpeechRecognitionError' ||
                                                    getConstructor(metadata) == SyntaxError ||
                                                    getConstructor(metadata) == TypeError ||
                                                    getConstructor(metadata) == URIError
                                                )
                                                    // Update > Data
                                                    data = 'message' in metadata ? metadata.message : string(metadata);

                                                else if (args.length == 1)
                                                    // Update > Data
                                                    data = string(metadata);

                                                else if (args.length > 1)
                                                    /* Logic
                                                            [switch:case:default statement]

                                                        > Update > Data
                                                    */
                                                    switch (alpha) {
                                                        // Must
                                                        case 'must':
                                                            data = "'" + string(metadata) + "' must be " + (isArray(beta) ? (string(beta[0]).trim()[0].match(/[aeiou]/) === Null ? 'a' : 'an') + ' ' + beta.slice(0, -1).join(', ') + ' or ' + string(beta[~-beta.length]) : (beta.trim()[0].match(/[aeiou]/) === Null ? 'a' : 'an') + ' ' + string(beta)) + '.';
                                                            break;

                                                        // Not
                                                        case 'not':
                                                            data = "'" + string(metadata) + "' is not " + (isArray(beta) ? (string(beta[0]).trim()[0].match(/[aeiou]/) === Null ? 'a' : 'an') + ' ' + beta.slice(0, -1).join(', ') + ' or ' + string(beta[~-beta.length]) : (beta.trim()[0].match(/[aeiou]/) === Null ? 'a' : 'an') + ' ' + string(beta)) + '.';
                                                            break;

                                                        // Only
                                                        case 'only':
                                                            data = "'" + string(metadata) + "' can only be of value" + (isArray(beta) ? 's ' + beta.slice(0, -1).join(', ') + ' or ' + string(beta[~-beta.length]) : ' ' + string(beta))
                                                    }

                                                /* Return
                                                        --- NOTE ---
                                                            #lapys: Prevent redaction by compressors or minifiers.
                                                */
                                                return eval("new (class LapysJSError extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,LapysJSError)}})('" + data.replace(/'/g, "\\'") + "\\r')")
                                            }
                                        }
                                    });

                                    // Miscellaneous
                                    objectDefProp(_data, 'miscellaneous', {
                                        // Configurable
                                        configurable: False,

                                        // Enumerable
                                        enumerable: False,

                                        // Value
                                        value: new (function LapysJSMiscellaneousData() {
                                            // Initialization > Target
                                            let that = this,
                                                _that = that.constructor.prototype;

                                            // Modification > Target
                                                // Custom Event
                                                objectDefProp(_that, 'customEvent', {
                                                    // Value
                                                    value: function customEvent() {
                                                        // Initialization > (Arguments, Data, Metadata)
                                                        let args = [...arguments],
                                                            data = string(args[0]),
                                                            metadata = args[1];

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (args.length) {
                                                            // Error Handling
                                                            try {
                                                                // Execute
                                                                eval('(function ' + data + '() {})')
                                                            }

                                                            catch (error) {
                                                                // Error
                                                                throw lapys.error("Invalid event name '" + data + "'.")
                                                            }

                                                            // Initialization > Alpha
                                                            let alpha = (function() {
                                                                // Initialization > (Metadata, Alpha, Beta)
                                                                let metadata = lapys.namedObject(data + 'Event'),
                                                                    _metadata = metadata.constructor.prototype,
                                                                    alpha = Event.prototype,
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
                                                                    metadata.__proto__ = objectCreate(alpha);

                                                                // Return
                                                                return metadata
                                                            })();

                                                            // Return
                                                            return alpha
                                                        }

                                                        // Return
                                                        return new Event('')
                                                    }
                                                });

                                                // Import
                                                objectDefProp(_that, 'import', {
                                                    // Value
                                                    value: function Import() {
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
                                                                return that.import.css.apply(that, argSet);
                                                                break;

                                                            // File
                                                            case 'file':
                                                                return that.import.file.apply(that, argSet);
                                                                break;

                                                            // Font
                                                            case 'font':
                                                                return that.import.font.apply(that, argSet);
                                                                break;

                                                            // JavaScript
                                                            case 'js':
                                                                return that.import.js.apply(that, argSet)
                                                        }

                                                        // Error
                                                        throw LapysJS.error(data, 'not', 'valid option');

                                                        /* Return
                                                                --- NOTE ---
                                                                    #lapys: Returning a `null` response.
                                                        */
                                                        return Null
                                                    }
                                                });
                                                    // Modification > Import
                                                        // CSS
                                                        objectDefProp(_that.import, 'css', {
                                                            // Value
                                                            value: function css() {
                                                                // Initialization > Arguments
                                                                let args = [...arguments];

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (args.length) {
                                                                    /* Logic
                                                                            [switch:case:default statement]

                                                                        > (External | Internal | Error)
                                                                    */
                                                                    switch (args[0]) {
                                                                        case 'external':
                                                                            return external();
                                                                            break;

                                                                        case 'internal':
                                                                            return internal();
                                                                            break;

                                                                        default:
                                                                            throw lapys.error(args[0], 'only', ["'external'", "'internal'"])
                                                                    }

                                                                    // Function
                                                                        // External
                                                                        function external() {
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (typeof args[1] != 'string')
                                                                                throw lapys.error(args[1], 'not', 'valid URL.');

                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (!isObject(args[2]) && args.length > 2)
                                                                                throw lapys.error(args[2], 'must', 'JSON object.');

                                                                            // Target > Request
                                                                            _that.request('GET', string(args[1]), {
                                                                                // On Load End
                                                                                onloadend: function(event) {
                                                                                    // Initialization > Target
                                                                                    let that = this;

                                                                                    /* Logic
                                                                                            [if:else if:Else statement]
                                                                                    */
                                                                                    if (that.status == 200) {
                                                                                        // Initialization > (Data, Metadata, Alpha, Beta, Delta)
                                                                                        let data = document.body || document.head || document.documentElement,
                                                                                            metadata = docQuerySelAll('script')[~-docQuerySelAll('script').length] || docQuerySelAll('style')[~-docQuerySelAll('style').length] || docQuerySelAll('link')[~-docQuerySelAll('link').length] || element,
                                                                                            alpha = metadata == element ? '' : (metadata.previousSibling || tmp).constructor == Text ? (metadata.previousSibling.wholeText + 'E').getChar(/[ \n\t]{0,}([^ \n\t]|E)/).slice(0, -1) : '\r',
                                                                                            beta = docCreateElement('link'),
                                                                                            delta = args[2];

                                                                                        /* Logic
                                                                                                [if:else if:else statement]
                                                                                        */
                                                                                        if (args.length > 2)
                                                                                            /* Loop
                                                                                                    Index Delta.
                                                                                            */
                                                                                            for (let i in delta)
                                                                                                /* Logic
                                                                                                        [if:else if:else statement]
                                                                                                */
                                                                                                if (i == 'media' || i == 'rel' || i == 'type')
                                                                                                    // Modification > Beta > [Loop Counter]
                                                                                                    beta[i] = delta[i];

                                                                                                else
                                                                                                    // Lapys > Warn
                                                                                                    lapys.warn("'"+  i + "'", 'not', 'valid option, so it has been ignored.');

                                                                                        // Modification > Beta
                                                                                            // Hyperlink Reference
                                                                                            beta.href = args[1];

                                                                                            // Media
                                                                                            !delta || 'media' in delta || (beta.media = 'all');
                                                                                            beta.hasAttribute('media') || (beta.media = 'all');

                                                                                            // Relationship
                                                                                            !delta || 'rel' in delta || (beta.rel = 'stylesheet');
                                                                                            beta.hasAttribute('rel') || (beta.rel = 'stylesheet');

                                                                                            // Type
                                                                                            !delta || 'type' in delta || (beta.type = 'text/css');
                                                                                            beta.hasAttribute('type') || (beta.type = 'text/css');

                                                                                        // Insertion
                                                                                        data.appendChild(beta);
                                                                                        (data != document.head) || beta.insertAdjacentHTML('beforebegin', alpha)
                                                                                    }

                                                                                    else
                                                                                        // Lapys > Warn
                                                                                        lapys.warn('Requested stylesheet does not exist.')
                                                                                }
                                                                            })
                                                                        }

                                                                        // Internal
                                                                        function internal() {
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (!isObject(args[1]) && args.length > 2)
                                                                                throw lapys.error(args[1], 'must', 'JSON object.');

                                                                            // Initialization > (Data, Metadata, Alpha, Beta, Delta)
                                                                            let data = document.body || document.head || document.documentElement,
                                                                                metadata = docQuerySelAll('script')[~-docQuerySelAll('script').length] || docQuerySelAll('style')[~-docQuerySelAll('style').length] || docQuerySelAll('link')[~-docQuerySelAll('link').length] || element,
                                                                                alpha = metadata == element ? '' : (metadata.previousSibling || tmp).constructor == Text ? (metadata.previousSibling.wholeText + 'E').getChar(/[ \n\t]{0,}([^ \n\t]|E)/).slice(0, -1) : '\r',
                                                                                beta = docCreateElement('style'),
                                                                                delta = args[1];

                                                                            /* Logic
                                                                                    [if:else if:else statement]
                                                                            */
                                                                            if (args.length > 1)
                                                                                /* Loop
                                                                                        Index Delta.
                                                                                */
                                                                                for (let i in delta)
                                                                                    /* Logic
                                                                                            [if:else if:else statement]
                                                                                    */
                                                                                    if (i == 'content')
                                                                                        // Modification > Beta > Inner HTML
                                                                                        beta.innerHTML = (function() { return delta[i] = string(delta[i]) })().indexOf('\n') > -1 ? delta[i] : ' ' + delta[i].trim() + ' ';

                                                                                    else if (i == 'media' || i == 'rel' || i == 'type')
                                                                                        // Modification > Beta > [Loop Counter]
                                                                                        beta[i] = delta[i];

                                                                                    else
                                                                                        // Lapys > Warn
                                                                                        lapys.warn("'"+  i + "'", 'not', 'valid option, so it has been ignored.');

                                                                            // Modification > Beta
                                                                                // Content
                                                                                beta.innerHTML = (delta || {content: ' '}).content || ' ';

                                                                                // Media
                                                                                !delta || 'media' in delta || (beta.media = 'all');
                                                                                beta.hasAttribute('media') || (beta.media = 'all');

                                                                                // Relationship
                                                                                !delta || 'rel' in delta || (beta.rel = 'stylesheet');
                                                                                beta.hasAttribute('rel') || (beta.rel = 'stylesheet');

                                                                                // Type
                                                                                !delta || 'type' in delta || (beta.type = 'text/css');
                                                                                beta.hasAttribute('type') || (beta.type = 'text/css');

                                                                            // Insertion
                                                                            data.appendChild(beta);
                                                                            (data != document.head) || beta.insertAdjacentHTML('beforebegin', alpha)
                                                                        }
                                                                }

                                                                // Return
                                                                return Null
                                                            }
                                                        });

                                                        // File
                                                        objectDefProp(_that.import, 'file', {
                                                            // Value
                                                            value: function file() {
                                                                // Initialization > Data
                                                                let data = window.file;

                                                                // Return
                                                                return data.read.apply(data, [...arguments])
                                                            }
                                                        });

                                                        // Font
                                                        objectDefProp(_that.import, 'font', {
                                                            // Value
                                                            value: function font() {
                                                                // Initialization > (Arguments, Data, Metadata)
                                                                let args = [...arguments],
                                                                    data = string(args[0]),
                                                                    metadata = args[1];

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (args.length) {
                                                                    // Initialization > (Alpha, Beta, Delta)
                                                                    let alpha = docCreateElement('style'),
                                                                        beta = document.head || document.body || document.documentElement,
                                                                        delta = (beta.querySelectorAll('link') || beta.querySelectorAll('script') || beta.querySelectorAll('style')).lastElement || element;

                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Error
                                                                    */
                                                                    if (args.length < 2)
                                                                        throw LapysJS.error("Failed to execute 'font': 2 arguments required, but only " + args.length + " present.");

                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Error
                                                                    */
                                                                    if (typeof data != 'string')
                                                                        throw LapysJS.error('The first argument', 'must', 'string');

                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Error
                                                                    */
                                                                    if (!isObject(metadata))
                                                                        throw LapysJS.error('The second argument', 'must', 'JSON object');

                                                                    /* Loop
                                                                            Index Metadata.

                                                                        > Lapys > Warn
                                                                    */
                                                                    for (let i in metadata)
                                                                        !(i !== 'format' && i !== 'src') || lapys.warn("'" + i + "' is not a valid option, so it has been ignored.");

                                                                    /* Loop
                                                                            Index Metadata.

                                                                        > Modification > Metadata > [Loop Counter]
                                                                    */
                                                                    for (let i in metadata)
                                                                        metadata[i] = string(metadata[i]);

                                                                    // Modification > Alpha > Inner HTML
                                                                    alpha.innerHTML =
                                                                        ' @font-face { ' +
                                                                            'font-family: ' + (data.indexOf(' ') > -1 ? "'" + data + "'" : data) + '; ' +
                                                                            'src: url("' + metadata.src + '")' + ('format' in metadata ? " format('" + metadata.format + "')" : '') + ' ' +
                                                                        '} ';

                                                                    // Insertion
                                                                    beta.appendChild(alpha);
                                                                    alpha.insertAdjacentHTML('beforebegin', (delta.previousSibling || tmp).constructor == Text ? (delta.previousSibling.wholeText + 'EOL').getChar(/[ \n]{0,}([^ \n]|EOL)/).slice(0, -('EOL'.length + 1)) : '\r');

                                                                    // Return
                                                                    return alpha
                                                                }

                                                                // Return
                                                                return False
                                                            }
                                                        });

                                                        // JavaScript
                                                        objectDefProp(_that.import, 'js', {
                                                            // Value
                                                            value: function javascript() {
                                                                // Initialization > Arguments
                                                                let args = [...arguments];

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (args.length) {
                                                                    /* Logic
                                                                            [switch:case:default statement]

                                                                        > (External | Internal | Error)
                                                                    */
                                                                    switch (args[0]) {
                                                                        case 'external':
                                                                            return external();
                                                                            break;

                                                                        case 'internal':
                                                                            return internal();
                                                                            break;

                                                                        default:
                                                                            throw lapys.error(args[0], 'only', ["'external'", "'internal'"])
                                                                    }

                                                                    // Function
                                                                        // External
                                                                        function external() {
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (typeof args[1] != 'string')
                                                                                throw lapys.error(args[1], 'not', 'valid URL.');

                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (!isObject(args[2]) && args.length > 2)
                                                                                throw lapys.error(args[2], 'must', 'JSON object.');

                                                                            // Target > Request
                                                                            _that.request('GET', string(args[1]), {
                                                                                // On Load End
                                                                                onloadend: function(event) {
                                                                                    // Initialization > Target
                                                                                    let that = this;

                                                                                    /* Logic
                                                                                            [if:else if:Else statement]
                                                                                    */
                                                                                    if (that.status == 200) {
                                                                                        // Initialization > (Data, Metadata, Alpha, Beta, Delta)
                                                                                        let data = document.body || document.head || document.documentElement,
                                                                                            metadata = docQuerySelAll('script')[~-docQuerySelAll('script').length] || docQuerySelAll('style')[~-docQuerySelAll('style').length] || docQuerySelAll('link')[~-docQuerySelAll('link').length] || element,
                                                                                            alpha = metadata == element ? '' : (metadata.previousSibling || tmp).constructor == Text ? (metadata.previousSibling.wholeText + 'E').getChar(/[ \n\t]{0,}([^ \n\t]|E)/).slice(0, -1) : '\r',
                                                                                            beta = docCreateElement('script'),
                                                                                            delta = args[2];

                                                                                        /* Logic
                                                                                                [if:else if:else statement]
                                                                                        */
                                                                                        if (args.length > 2)
                                                                                            /* Loop
                                                                                                    Index Delta.
                                                                                            */
                                                                                            for (let i in delta)
                                                                                                /* Logic
                                                                                                        [if:else if:else statement]
                                                                                                */
                                                                                                if (i == 'async' || i == 'defer')
                                                                                                    // Modification > Beta > [Loop Counter]
                                                                                                    beta[i] = !!delta[i];

                                                                                                else if (i == 'lang' || i == 'language')
                                                                                                    // Modification > Beta > Language
                                                                                                    beta.setAttribute('language', delta[i]);

                                                                                                else if (i == 'type')
                                                                                                    // Modification > Beta > [Loop Counter]
                                                                                                    beta[i] = delta[i];

                                                                                                else
                                                                                                    // Lapys > Warn
                                                                                                    lapys.warn("'"+  i + "'", 'not', 'valid option, so it has been ignored.');

                                                                                        // Modification > Beta
                                                                                            // Asynchronous
                                                                                            !delta || 'async' in delta || (beta.async = beta.async);

                                                                                            // Defer
                                                                                            !delta || 'defer' in delta || (beta.defer = beta.defer);

                                                                                            // Language
                                                                                            !delta || 'language' in delta ||
                                                                                            beta.hasAttribute('language') || beta.setAttribute('language', 'javascript');

                                                                                            // Type
                                                                                            !delta || 'type' in delta || (beta.type = 'text/javascript');
                                                                                            beta.hasAttribute('type') || (beta.type = 'text/javascript');

                                                                                            // Source
                                                                                            beta.src = args[1];

                                                                                        // Insertion
                                                                                        data.appendChild(beta);
                                                                                        (data != document.head) || beta.insertAdjacentHTML('beforebegin', alpha)
                                                                                    }

                                                                                    else
                                                                                        // Lapys > Warn
                                                                                        lapys.warn('Requested script does not exist.')
                                                                                }
                                                                            })
                                                                        }

                                                                        // Internal
                                                                        function internal() {
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (!isObject(args[1]) && args.length > 2)
                                                                                throw lapys.error(args[1], 'must', 'JSON object.');

                                                                            // Initialization > (Data, Metadata, Alpha, Beta, Delta)
                                                                            let data = document.body || document.head || document.documentElement,
                                                                                metadata = docQuerySelAll('script')[~-docQuerySelAll('script').length] || docQuerySelAll('style')[~-docQuerySelAll('style').length] || docQuerySelAll('link')[~-docQuerySelAll('link').length] || element,
                                                                                alpha = metadata == element ? '' : (metadata.previousSibling || tmp).constructor == Text ? (metadata.previousSibling.wholeText + 'E').getChar(/[ \n\t]{0,}([^ \n\t]|E)/).slice(0, -1) : '\r',
                                                                                beta = docCreateElement('script'),
                                                                                delta = args[1];

                                                                            /* Logic
                                                                                    [if:else if:else statement]
                                                                            */
                                                                            if (args.length > 1)
                                                                                /* Loop
                                                                                        Index Delta.
                                                                                */
                                                                                for (let i in delta)
                                                                                    /* Logic
                                                                                            [if:else if:else statement]
                                                                                    */
                                                                                    if (i == 'async' || i == 'defer')
                                                                                        // Modification > Beta > [Loop Counter]
                                                                                        beta[i] = !!delta[i];

                                                                                    else if (i == 'content')
                                                                                        // Modification > Beta > Inner HTML
                                                                                        beta.innerHTML = (function() { return delta[i] = string(delta[i]) })().indexOf('\n') > -1 ? delta[i] : ' ' + delta[i].trim() + ' ';

                                                                                    else if (i == 'lang' || i == 'language')
                                                                                        // Modification > Beta > Language
                                                                                        beta.setAttribute('language', delta[i]);

                                                                                    else if (i == 'type')
                                                                                        // Modification > Beta > [Loop Counter]
                                                                                        beta[i] = delta[i];

                                                                                    else
                                                                                        // Lapys > Warn
                                                                                        lapys.warn("'"+  i + "'", 'not', 'valid option, so it has been ignored.');

                                                                            // Modification > Beta
                                                                                // Asynchronous
                                                                                !delta || 'async' in delta || (beta.async = beta.async);

                                                                                // Content
                                                                                beta.innerHTML = (delta || {content: ' '}).content || ' ';

                                                                                // Defer
                                                                                !delta || 'defer' in delta || (beta.defer = beta.defer);

                                                                                // Language
                                                                                !delta || 'language' in delta || beta.setAttribute('language', 'javascript');
                                                                                beta.hasAttribute('language') || beta.setAttribute('language', 'javascript');

                                                                                // Type
                                                                                !delta || 'type' in delta || (beta.type = 'text/javascript');
                                                                                beta.hasAttribute('type') || (beta.type = 'text/javascript');

                                                                            // Insertion
                                                                            data.appendChild(beta);
                                                                            (data != document.head) || beta.insertAdjacentHTML('beforebegin', alpha)
                                                                        }
                                                                }

                                                                // Return
                                                                return Null
                                                            }
                                                        });

                                                // Named Array
                                                objectDefProp(_that, 'namedArray', {
                                                    // Value
                                                    value: function namedArray() {
                                                        // Initialization > Arguments
                                                        let args = [...arguments];

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (args.length) {
                                                            // Initialization > Data
                                                            let data = args[0];

                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Error
                                                            */
                                                            if (typeof data != 'string')
                                                                throw lapys.error(data, 'not', 'string');

                                                            // Error Handling
                                                            try {
                                                                // Execute
                                                                eval('(function ' + data + '() {})')
                                                            }

                                                            catch (error) {
                                                                // Error
                                                                throw lapys.error("Invalid array name '" + data + "'.")
                                                            }

                                                            // Return
                                                            return (function() {
                                                                // Initialization > Alpha
                                                                let alpha = eval(
                                                                    // Function > [Data]
                                                                    'function ' + data + '() {' +
                                                                        // Modification > Target > (Splice, Length)
                                                                        'this.constructor.prototype.splice = arrayProto.splice;' +
                                                                        'this.length = arrayProto.length' +
                                                                    '}' +

                                                                    // Initialization > Metadata
                                                                    'let metadata = new ' + data + ';' +

                                                                    // Modification > Metadata > (...)
                                                                    'metadata.__proto__ = objectCreate(arrayProto);' +
                                                                    'metadata'
                                                                );

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
                                                        return Default.array
                                                    }
                                                });

                                                // Named Object
                                                objectDefProp(_that, 'namedObject', {
                                                    // Value
                                                    value: function namedObject() {
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (arguments.length) {
                                                            // Initialization > (Data, Metadata)
                                                            let data = arguments[0],
                                                                metadata = arguments[1];

                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Error
                                                            */
                                                            if (typeof data != 'string')
                                                                throw lapys.error(data, 'not', 'string');

                                                            // Error Handling
                                                            try {
                                                                // Update > Data
                                                                data = eval('new (function ' + data + '() {})')
                                                            }

                                                            catch (error) {
                                                                // Error
                                                                throw lapys.error("Invalid object name '" + data + "'.")
                                                            }

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
                                                        return Default.object
                                                    }
                                                });

                                                // Request
                                                objectDefProp(_that, 'request', {
                                                    // Value
                                                    value: function request() {
                                                        // Initialization > (Arguments, Data, Metadata, Alpha, Beta)
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
                                                            data.open(metadata, alpha, True);

                                                        else if ('XDomainRequest' in window)
                                                            // Data > Open
                                                            (data = new XDomainRequest).open(metadata, alpha);

                                                        else {
                                                            // Update > Data
                                                            data = Null;

                                                            // LapysJS > Warn
                                                            LapysJS.warn('CORS is not supported by this browser.')
                                                        }

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (data !== Null) {
                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (isObject(beta))
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
                                        }),

                                        // Writable
                                        writable: False
                                    });
                                        // Definition
                                        objectDefProps(_data, new (function Object() {
                                            // Initialization > Data
                                            let data = function miscellaneous() {
                                                // Return
                                                return this.miscellaneous
                                            },
                                                that = this;

                                            // Modification > Target > (...)
                                            that.$ = {get: data};
                                            that.misc = {get: data}
                                        }));

                                    // Custom Event
                                    objectDefProp(_data, 'customEvent', {
                                        // Value
                                        value: function customEvent() {
                                            // Return
                                            return this.misc.customEvent.apply(this.misc, [...arguments])
                                        }
                                    });

                                    // Named Array
                                    objectDefProp(_data, 'namedArray', {
                                        // Value
                                        value: function namedArray() {
                                            // Return
                                            return this.misc.namedArray.apply(this.misc, [...arguments])
                                        }
                                    });

                                    // Named Object
                                    objectDefProp(_data, 'namedObject', {
                                        // Value
                                        value: function namedObject() {
                                            // Return
                                            return this.misc.namedObject.apply(this.misc, [...arguments])
                                        }
                                    });

                                    // Debug
                                    objectDefProp(_data, 'debug', {
                                        // Value
                                        value: (function debug() {
                                            // Initialization > (Data, (...))
                                            let data = function LapysJSDebugger() {},
                                                identifyAllTemporaryData = lapys.namedArray('LapysJSDebuggerIdentifyAllCommandTemporaryData');

                                            // Modification > Data
                                                // Hello
                                                objectDefProp(data, 'hello', {
                                                    // Value
                                                    value: function hello() {
                                                        // Console > Log
                                                        console.log('Hello, World!')
                                                    }
                                                });

                                                // Identify All
                                                objectDefProp(data, 'identifyAll', {
                                                    // Value
                                                    value: function identifyAll() {
                                                        // Initialization > Data
                                                        let data = window;

                                                        /* Loop
                                                                [for:of statement]
                                                        */
                                                        for (let i of toArray(docQuerySelAll('[id'))) {
                                                            let metadata = i.id;

                                                            // Update > Identify All Temporary Data
                                                            identifyAllTemporaryData.push({object: data, propertyName: metadata, property: metadata in data ? data[metadata] : tmp});

                                                            // Modification > Data > [Metadata]
                                                            data[metadata] = i;

                                                            /* Loop
                                                                    [for:of statement]
                                                            */
                                                            for (let j of toArray(i.querySelectorAll('[id'))) {
                                                                // Update > Metadata
                                                                metadata = j.id;

                                                                // Update > Identify All Temporary Data
                                                                identifyAllTemporaryData.push({object: i, propertyName: metadata, property: metadata in i ? i[metadata] : tmp});

                                                                // Modification > [Loop Counter] > [Metadata]
                                                                i[metadata] = j
                                                            }
                                                        }

                                                        // Return
                                                        return True
                                                    }
                                                });

                                                // Misidentify All
                                                objectDefProp(data, 'misidentifyAll', {
                                                    // Value
                                                    value: function misidentifyAll() {
                                                        // Initialization > Data
                                                        let data = window;

                                                        /* Loop
                                                                Index Identify All Temporary Data.

                                                            > (...)
                                                        */
                                                        for (let i of identifyAllTemporaryData)
                                                            i.property == tmp ? i.object.undef(i.propertyName) : i.object[i.propertyName] = i.property;

                                                        // Return
                                                        return False
                                                    }
                                                });

                                                // Format Text
                                                objectDefProp(data, 'formatText', {
                                                    // Value
                                                    value: function formatText() {
                                                        // Initialization > (Arguments, Data, Metadata)
                                                        let args = [...arguments],
                                                            data = args[0],
                                                            metadata = args[1];

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (args.length) {
                                                            // When
                                                            when(
                                                                // List
                                                                metadata == 1 || metadata == 'list', function() {
                                                                    // Update > Data
                                                                    data = (isArray(data) ? data.join(' ') : string(data)).trim();

                                                                    /* Loop
                                                                            [do:while statement]

                                                                        > Update > Data
                                                                    */
                                                                    while (data.hasChar('  '))
                                                                        data = data.replace(/  /g, ' ');

                                                                    // Update > Data
                                                                    data = data.trim().split(' ')
                                                                },

                                                                // [Default]
                                                                True, function() {
                                                                    // Update > Data
                                                                    data = (isArray(data) ? data.join(' ') : string(data)).trim();

                                                                    /* Loop
                                                                            [do:while statement]

                                                                        > Update > Data
                                                                    */
                                                                    while (data.hasChar('  '))
                                                                        data = data.replace(/  /g, ' ');

                                                                    // Update > Data
                                                                    data = data.trim()
                                                                }
                                                            );

                                                            // Return
                                                            return data
                                                        }

                                                        // Return
                                                        return Default.string
                                                    }
                                                });

                                            // Return
                                            return data
                                        })()
                                    });

                                    // Escape Sequence
                                    objectDefProp(_data, 'escSequenceSet', {
                                        // Get
                                        get: function escSequenceSet() {
                                            // Return
                                            return lapys.perm.escapeSequenceSet
                                        }
                                    });

                                    // Features
                                    objectDefProp(_data, 'features', {
                                        // Value
                                        value: lapys.namedArray('LapysJSFeatures')
                                    });

                                    // Hello
                                    objectDefProp(_data, 'hello', {
                                        // Get
                                        get: function hello() {
                                            // Return
                                            return lapys.debug.hello
                                        }
                                    });

                                    // Permanent Data
                                    objectDefProp(_data, 'permanentData', {
                                        // Configurable
                                        configurable: False,

                                        // Enumerable
                                        enumerable: False,

                                        // Value
                                        value: new (function LapysJSPermanentData() {
                                            // Initialization > (Target, (...))
                                            let that = this,
                                                _that = that.constructor.prototype,
                                                data = {
                                                    // Title
                                                    title: ''
                                                };

                                            // Modification > Target
                                                // Cooler
                                                objectDefProp(_that, 'cooler', {
                                                    // Value
                                                    value: lapys.namedArray('LapysJSCooler')
                                                });

                                                // Coordinates
                                                objectDefProp(_that, 'coordinates', {
                                                    // Value
                                                    value: (function() {
                                                        // Initialization > (Data, Metadata, Alpha, Beta)
                                                        let data = lapys.namedArray('LapysJSCoordinates'),
                                                            metadata = {
                                                                // Get
                                                                get: function getX() {
                                                                    // Return
                                                                    return beta[0]
                                                                },

                                                                // Set
                                                                set: function setX() {
                                                                    // Update > Beta
                                                                    beta[0] = arguments[0]
                                                                }
                                                            },
                                                            alpha = {
                                                                // Get
                                                                get: function getY() {
                                                                    // Return
                                                                    return beta[1]
                                                                },

                                                                // Set
                                                                set: function setY() {
                                                                    // Update > Beta
                                                                    beta[1] = arguments[0]
                                                                }
                                                            },
                                                            beta = lapys.namedArray('LapysJSCoordinates', 0, 0);

                                                        // Modification > Data > (...)
                                                        objectDefProps(data, {
                                                            0: metadata,
                                                            x: metadata,

                                                            1: alpha,
                                                            y: alpha
                                                        });

                                                        // Return
                                                        return data
                                                    })()
                                                });

                                                // Current Element Title
                                                objectDefProp(_that, 'currentElementTitle', {
                                                    // Get
                                                    get: function getCurrentElementTitle() {
                                                        // Return
                                                        return data.title
                                                    },

                                                    // Set
                                                    set: function setCurrentElementTitle() {
                                                        // Update > Data > Title
                                                        data.title = string(arguments[0])
                                                    }
                                                });

                                                // Escape Sequence
                                                (typeof _that.escapeSequenceSet == 'string') || objectDefProp(_that, 'escapeSequenceSet', {
                                                    // Value
                                                    value: 'bcdfnrstvwx0'
                                                });

                                                // Events Element List
                                                objectDefProp(_that, 'eventElementList', {
                                                    // Value
                                                    value: lapys.namedArray('LapysJSEventElementList')
                                                });

                                                // Fullscreen Element
                                                objectDefProp(_that, 'fullscreenElement', {
                                                    // Value
                                                    value: Null,

                                                    // Writable
                                                    writable: True
                                                });

                                                // Modified Components List
                                                objectDefProp(_that, 'modifiedComponentsList', {
                                                    // Get
                                                    get: function modifiedComponentsList() {
                                                        // Return
                                                        return _that.modifiedElementList.components
                                                    }
                                                });

                                                // Modified Element List
                                                objectDefProp(_that, 'modifiedElementList', {
                                                    value: (function() {
                                                        // Initialization > Data
                                                        let data = lapys.namedObject('LapysJSModifiedElementList'),
                                                            _data = data.constructor.prototype;

                                                        // Modification > Data
                                                            // Components
                                                            objectDefProp(_data, 'components', {
                                                                // Value
                                                                value: lapys.namedArray('LapysJSModifiedComponentElementList')
                                                            });

                                                            // Plugins
                                                            objectDefProp(_data, 'plugins', {
                                                                // Value
                                                                value: lapys.namedArray('LapysJSModifiedPluginElementList')
                                                            });

                                                        // Return
                                                        return data
                                                    })()
                                                });

                                                // Modified Plugins List
                                                objectDefProp(_that, 'modifiedPluginsList', {
                                                    // Get
                                                    get: function modifiedPluginsList() {
                                                        // Return
                                                        return _that.modifiedElementList.plugins
                                                    }
                                                });

                                                // Plugins
                                                objectDefProp(_that, 'plugins', {
                                                    // Value
                                                    value: (function() {
                                                        // Initialization > Data
                                                        let data = lapys.namedArray('LapysJSPlugins');

                                                        // Modification > Data
                                                            // Carousel
                                                            objectDefProp(data, 'Carousel', {
                                                                // Enumerable
                                                                enumerable: True,

                                                                // Value
                                                                value: class Carousel {
                                                                    // Constructor
                                                                    constructor() {
                                                                        // Initialization > (Arguments, Data, Metadata, Alpha)
                                                                        let args = [...arguments],
                                                                            data = docCreateElement('div'),
                                                                            metadata = object(args[0]),
                                                                            alpha = object(args[1]);

                                                                        /* Loop
                                                                                Index Metadata.
                                                                        */
                                                                        for (let i in metadata)
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (i != 'buttons' && i != 'drag' && i != 'direction' && i != 'indicators' && i != 'interval' && i != 'selectable' && i != 'slides' && i != 'touch')
                                                                                throw lapys.error(i, 'not', 'valid option');

                                                                        // Modification > Data
                                                                            // Data Buttons
                                                                            !('buttons' in metadata) || !metadata.buttons || data.setAttribute('data-buttons', '') || (data.hasButtons = True);

                                                                            // Data Direction
                                                                            !('direction' in metadata) || !metadata.direction || data.setAttribute('data-direction', string(metadata.direction));

                                                                            // Data Indicators
                                                                            !('indicators' in metadata) || !metadata.indicators || data.setAttribute('data-indicators', '') || (data.hasIndicators = True);

                                                                            // Data Interval
                                                                            !('interval' in metadata) || !metadata.interval || data.setAttribute('data-interval', _number(metadata.interval));

                                                                            // Drag
                                                                            !('drag' in metadata) || (data.allowDragEvent = !!metadata.drag);

                                                                            // Drag Length
                                                                            !('dragLength' in metadata) || (data.dragLength = _numberParseNumber(metadata.dragLength));

                                                                            // Selectable
                                                                            !('selectable' in metadata) || (data.selectable = !!metadata.selectable);

                                                                            // Slides
                                                                                /* Logic
                                                                                        [if:else if:else statement]
                                                                                */
                                                                                if ('slides' in metadata)
                                                                                    /* Loop
                                                                                            [for:of statement]

                                                                                        > Insertion
                                                                                    */
                                                                                    for (let i of toArray(metadata.slides))
                                                                                        isElement(i) ? data.appendChild(i) : data.appendChild(createElement('div:', string(i)));

                                                                            // Touch
                                                                            !('touch' in metadata) || (data.allowTouchEvent = !!metadata.touch);

                                                                            // Swipe Length
                                                                            !('swipeLength' in metadata) || (data.swipeLength = _numberParseNumber(metadata.swipeLength));

                                                                        /* Loop
                                                                                Index Alpha.

                                                                            > Modification > Data > [Loop Counter]
                                                                        */
                                                                        for (let i in alpha)
                                                                            data[i] = alpha[i];

                                                                        // Modification > Data > Class
                                                                        data.setAttribute('class', 'carousel');

                                                                        // Return
                                                                        return data
                                                                    }
                                                                }
                                                            });

                                                            // Marquee
                                                            objectDefProp(data, 'Marquee', {
                                                                // Enumerable
                                                                enumerable: True,

                                                                // Value
                                                                value: class Marquee {
                                                                    // Constructor
                                                                    constructor() {
                                                                        // Initialization > (Arguments, Data, Metadata, Alpha)
                                                                        let args = [...arguments],
                                                                            data = docCreateElement('div'),
                                                                            metadata = object(args[0]),
                                                                            alpha = object(args[1]);

                                                                        /* Loop
                                                                                Index Metadata.
                                                                        */
                                                                        for (let i in metadata)
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (i != 'direction' && i != 'iterationCount' && i != 'speed')
                                                                                throw lapys.error(i, 'not', 'valid option');

                                                                        // Modification > Data
                                                                            // Data Direction
                                                                            !('direction' in metadata) || data.setAttribute('data-direction', metadata.direction == 'left' ? 'left' : 'right');

                                                                            // Data Iteration Count
                                                                            !('iterationCount' in metadata) || data.setAttribute('data-iteration-count', _numberIsNaN(_numberParseNumber(metadata.iterationCount)) ? 0 : _numberParseNumber(metadata.iterationCount));

                                                                            // Data Speed
                                                                            !('speed' in metadata) || data.setAttribute('data-speed', _numberParseNumber(metadata.speed) || 0);

                                                                        /* Loop
                                                                                Index Alpha.

                                                                            > Modification > Data > [Loop Counter]
                                                                        */
                                                                        for (let i in alpha)
                                                                            data[i] = alpha[i];

                                                                        // Modification > Data > Class
                                                                        data.setAttribute('class', 'marquee');

                                                                        // Return
                                                                        return data
                                                                    }
                                                                }
                                                            });

                                                            // Roulette
                                                            objectDefProp(data, 'Roulette', {
                                                                // Enumerable
                                                                enumerable: True,

                                                                // Value
                                                                value: class Roulette {
                                                                    // Constructor
                                                                    constructor() {
                                                                        // Initialization > (Arguments, Data, Metadata, Alpha)
                                                                        let args = [...arguments],
                                                                            data = docCreateElement('div'),
                                                                            metadata = object(args[0]),
                                                                            alpha = object(args[1]);

                                                                        /* Loop
                                                                                Index Metadata.
                                                                        */
                                                                        for (let i in metadata)
                                                                            /* Logic
                                                                                    [if:else if:else statement]

                                                                                > Error
                                                                            */
                                                                            if (i != 'buttons' && i != 'drag' && i != 'direction' && i != 'interval' && i != 'selectable' && i != 'slides' && i != 'touch')
                                                                                throw lapys.error(i, 'not', 'valid option');

                                                                        // Modification > Data
                                                                            // Data Buttons
                                                                            !('buttons' in metadata) || !metadata.buttons || data.setAttribute('data-buttons', '') || (data.hasButtons = True);

                                                                            // Data Direction
                                                                            !('direction' in metadata) || !metadata.direction || data.setAttribute('data-direction', string(metadata.direction));

                                                                            // Data Interval
                                                                            !('interval' in metadata) || !metadata.interval || data.setAttribute('data-interval', _number(metadata.interval));

                                                                            // Drag
                                                                            !('drag' in metadata) || (data.allowDragEvent = !!metadata.drag);

                                                                            // Drag Length
                                                                            !('dragLength' in metadata) || (data.dragLength = _numberParseNumber(metadata.dragLength));

                                                                            // Selectable
                                                                            !('selectable' in metadata) || (data.selectable = !!metadata.selectable);

                                                                            // Slides
                                                                                /* Logic
                                                                                        [if:else if:else statement]
                                                                                */
                                                                                if ('cards' in metadata)
                                                                                    /* Loop
                                                                                            [for:of statement]

                                                                                        > Insertion
                                                                                    */
                                                                                    for (let i of toArray(metadata.cards))
                                                                                        isElement(i) ? data.appendChild(i) : data.appendChild(createElement('div:', string(i)));

                                                                            // Touch
                                                                            !('touch' in metadata) || (data.allowTouchEvent = !!metadata.touch);

                                                                            // Swipe Length
                                                                            !('swipeLength' in metadata) || (data.swipeLength = _numberParseNumber(metadata.swipeLength));

                                                                        /* Loop
                                                                                Index Alpha.

                                                                            > Modification > Data > [Loop Counter]
                                                                        */
                                                                        for (let i in alpha)
                                                                            data[i] = alpha[i];

                                                                        // Modification > Data > Class
                                                                        data.setAttribute('class', 'roulette');

                                                                        // Return
                                                                        return data
                                                                    }
                                                                }
                                                            });

                                                            // Screen Tip
                                                            objectDefProp(data, 'ScreenTip', {
                                                                // Enumerable
                                                                enumerable: True,

                                                                // Value
                                                                value: class ScreenTip extends HTMLElement {
                                                                    // Constructor
                                                                    constructor() {
                                                                        // Return
                                                                        return registerElement() ? void 0 : docCreateElement('screen-tip')
                                                                    }
                                                                }
                                                            });

                                                            // Toast
                                                            objectDefProp(data, 'Toast', {
                                                                // Enumerable
                                                                enumerable: True,

                                                                // Value
                                                                value: class Toast extends HTMLElement {
                                                                    // Constructor
                                                                    constructor() {
                                                                        // Return
                                                                        return registerElement() ? void 0 : docCreateElement('screen-toast')
                                                                    }
                                                                }
                                                            });

                                                        /* Loop
                                                                Index Data.

                                                            > Update > Data
                                                        */
                                                        for (let i in data)
                                                            (i == 'length') || data.push(data[i]);

                                                        // Return
                                                        return data
                                                    })()
                                                });

                                                // Regular Expression Set
                                                (typeof _that.regularExpressionSet == 'string') || objectDefProp(_that, 'regularExpressionSet', {
                                                    // Value
                                                    value: '�'
                                                });

                                                // Screen Tip Element List
                                                'screenTipElementList' in _that || objectDefProp(_that, 'screenTipElementList', {
                                                    // Value
                                                    value: lapys.namedArray('LapysJSScreenTipElementList')
                                                });

                                                // Strictly Watched Elements
                                                'strictlyWatchedElements' in _that || objectDefProp(_that, 'strictlyWatchedElements', {
                                                    // Value
                                                    value: lapys.namedArray('LapysJSStrictWatchList')
                                                });

                                                // Written Elements
                                                'writtenElements' in _that || objectDefProp(_that, 'writtenElements', {
                                                    // Value
                                                    value: lapys.namedArray('LapysJSWrittenElementList')
                                                })
                                        }),

                                        // Writable
                                        writable: False
                                    });
                                        // Definition
                                        objectDefProp(_data, 'perm', {
                                            // Get
                                            get: function permanentData() {
                                                // Return
                                                return this.permanentData
                                            }
                                        });

                                    // Plugins
                                    objectDefProp(_data, 'plugins', {
                                        // Get
                                        get: function plugins() {
                                            // Return
                                            return lapys.perm.plugins
                                        }
                                    });

                                    // Regular Expression Set
                                    objectDefProp(_data, 'regexSet', {
                                        // Get
                                        get: function regularExpressionSet() {
                                            // Return
                                            return lapys.perm.regularExpressionSet
                                        }
                                    });

                                    // Script
                                    objectDefProp(_data, 'script', {
                                        // Get
                                        value: document.currentScript || docQuerySel("script[src*='lapys.js'], script[src*='lapys.min.js']") || document.scripts[~-document.scripts.length] || docCreateElement('script')
                                    });
                                        // Function > Script
                                            // Disable LapysJS Feature
                                            objectDefProp(_data.script, 'disableLapysJSFeature', {
                                                // Value
                                                value: function disableFeature() {
                                                    // Initialization > Arguments
                                                    let args = [...arguments];

                                                    /* Loop
                                                            Index Arguments.

                                                        > Update > (Lapys > Features)
                                                    */
                                                    for (let i of args)
                                                        features.indexOf(i) > -1 ? lapys.features.removeElement(i) : lapys.warn("'" + string(i) + "' is not a valid feature of LapysJS.");

                                                    // Initialization > Data
                                                    let data = lapys.features.removeDuplicatedElements().removeFalsyElements().sort();

                                                    // Modification > (Lapys > Script) > Data Lapys Features
                                                    lapys.script.setAttribute('data-lapys-features', data.join(' '));
                                                    lapys.script.getAttribute('data-lapys-features') || lapys.script.removeAttribute('data-lapys-features');

                                                    // Return
                                                    return data
                                                }
                                            });

                                            // Enable LapysJS Feature
                                            objectDefProp(_data.script, 'enableLapysJSFeature', {
                                                // Value
                                                value: function enableFeature() {
                                                    // Initialization > Arguments
                                                    let args = [...arguments];

                                                    /* Loop
                                                            Index Arguments.

                                                        > Update > (Lapys > Features)
                                                    */
                                                    for (let i of args)
                                                        features.indexOf(i) > -1 ? lapys.features.push(i) : lapys.warn("'" + string(i) + "' is not a valid feature of LapysJS.");

                                                    // Initialization > Data
                                                    let data = lapys.features.removeDuplicatedElements().removeFalsyElements().sort();

                                                    // Modification > (Lapys > Script) > Data Lapys Features
                                                    lapys.script.setAttribute('data-lapys-features', data.join(' '));

                                                    // Return
                                                    return data
                                                }
                                            });

                                    // Temporary Data
                                    objectDefProp(_data, 'temporaryData', {
                                        // Value
                                        value: Null,

                                        // Writable
                                        writable: True
                                    });
                                        // Definition
                                        objectDefProp(_data, 'tmp', {
                                            // Get
                                            get: function getTemporaryData() {
                                                // Return
                                                return this.temporaryData
                                            },

                                            set: function setTemporaryData() {
                                                // Return
                                                return this.temporaryData = arguments[0]
                                            }
                                        });

                                    // Warn
                                    objectDefProp(_data, 'warn', {
                                        // Value
                                        value: function warn() {
                                            // Warn
                                            arguments[0] == tmp ? _warn.apply(console, ['This feature is still in development.']) : _warn.apply(console, [...arguments])
                                        }
                                    });

                                    // Version
                                    objectDefProp(_data, 'version', {
                                        // Value
                                        value: version
                                    });

                                // Definition > LapysJS
                                objectDefProp(window, 'LapysJS', {
                                    // Configurable
                                    configurable: False,

                                    // Enumerable
                                    enumerable: False,

                                    // Value
                                    value: data,

                                    // Writable
                                    writable: False
                                })
                            }
                        })();

                        // Update > Temporary Data
                        _tmp = window;

                    // Absolute
                    isFunction(_tmp.abs) || objectDefProp(_tmp, 'abs', {
                        // Value
                        value: function abs() {
                            // Return
                            return Math.abs.apply(Math, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Ancestor Query Selector
                    isFunction(_tmp.$_) || objectDefProp(_tmp, '$_', {
                        // Value
                        value: function LapysJSAncestorQuerySelector() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = $$.apply(window, args.filter(data => {
                                    // Return
                                    return typeof data != 'number'
                                })),
                                metadata = [],
                                that = this,
                                _that = (isDocumentLike(that) || isWindow(that) ? (document.documentElement || document.children[0]) : that).parentPath.slice(1);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length && !isDocumentLike(_that[0]) && !isWindow(_that)) {
                                // Update > Data
                                !isElement(data) || (data = [data]);

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ('length' in object(data))
                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data))
                                        (_that.indexOf(i) < 0) || metadata.push(i);

                                // Update > Metadata
                                !(!metadata.length && data !== Null) || (metadata = data);
                                !(typeof args[1] == 'number' || typeof args[2] == 'number') || (metadata = metadata[typeof args[1] == 'number' ? args[1] : args[2]]);

                                // Return
                                return 'length' in object(metadata) ? (function() {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments
                                    */
                                    for (let i in args)
                                        args[i] = string(args[i]).trim();

                                    // Return
                                    return (args.indexOf('array') > -1 ? metadata : (metadata.length > 1 ? metadata : metadata[0])) || Null
                                })() : metadata
                            }

                            // Return
                            return Null
                        }
                    });
                        // Definition
                        isFunction(docProto.$_) || objectDefProp(docProto, '$_', {value: $_});
                        isFunction(docFragProto.$_) || objectDefProp(docFragProto, '$_', {value: $_});
                        isFunction(eleProto.$_) || objectDefProp(eleProto, '$_', {value: $_});

                    // Application
                    'app' in _tmp || objectDefProp(_tmp, 'app', {
                        // Value
                        value: (function() {
                            // Initialization > Data
                            let data = LapysJS.namedObject('Application'),
                                _data = isFunction(window.Application) ? data : data.constructor.prototype;

                            // Modification > Data
                                // Application
                                objectDefProp(_data, 'app', {
                                    // Value
                                    value: data
                                });

                                // Author
                                objectDefProp(_data, 'author', {
                                    // Get
                                    get: function getAuthor() {
                                        // Return
                                        return (docQuerySel('meta[name=author') || data).content || Null
                                    },

                                    // Set
                                    set: function setAuthor() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[name=author') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[name=author') || (document.head.innerHTML += "\r<meta content='" + arg + "' name=author>")
                                    }
                                });

                                // Cache Control
                                objectDefProp(_data, 'cacheControl', {
                                    // Get
                                    get: function getCacheControl() {
                                        // Return
                                        return (docQuerySel('meta[http-equiv=cache-control') || data).content || Null
                                    },

                                    // Set
                                    set: function setCacheControl() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[http-equiv=cache-control') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[http-equiv=cache-control') || (document.head.innerHTML += "\r<meta content='" + arg + "' http-equiv=cache-control>")
                                    }
                                });

                                // Character Set
                                'charset' in _data || objectDefProp(_data, 'charset', {
                                    // Get
                                    get: function getCharset() {
                                        // Return
                                        return (docQuerySel('meta[charset') || {getAttribute: function() {}}).getAttribute('charset') || document.characterSet
                                    },

                                    // Set
                                    set: function setCharset() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Character Set
                                        (docQuerySel('meta[charset') || {setAttribute: function() {}}).setAttribute('charset', arg);

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[charset') || (document.head.innerHTML += "\r<meta charset='" + arg + "'>")
                                    }
                                });

                                // Connection
                                !('connection' in navigator) || 'connection' in _data || objectDefProp(_data, 'connection', {
                                    // Get
                                    get: function connection() {
                                        // Return
                                        return navigator.connection
                                    }
                                });

                                // Cookies
                                'cookies' in _data || objectDefProp(_data, 'cookies', {
                                    // Get
                                    get: function cookies() {
                                        // Return
                                        return document.cookie
                                    }
                                });

                                // Copyright
                                'copyright' in _data || objectDefProp(_data, 'copyright', {
                                    // Get
                                    get: function getCopyright() {
                                        // Return
                                        return (docQuerySel('meta[name=copyright') || data).content || Null
                                    },

                                    // Set
                                    set: function setCopyright() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[name=copyright') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[name=copyright') || (document.head.innerHTML += "\r<meta content='" + arg + "' name=copyright>")
                                    }
                                });

                                // Description
                                'description' in _data || objectDefProp(_data, 'description', {
                                    // Get
                                    get: function getDescription() {
                                        // Return
                                        return (docQuerySel('meta[name=description') || data).content || Null
                                    },

                                    // Set
                                    set: function setDescription() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[name=description') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[name=description') || (document.head.innerHTML += "\r<meta content='" + arg + "' name=description>")
                                    }
                                });

                                // Device Pixel Ratio
                                !('devicePixelRatio' in window) || 'dpRatio' in _data || objectDefProp(_data, 'dpRatio', {
                                    // Get
                                    get: function devicePixelRatio() {
                                        // Return
                                        return devicePixelRatio
                                    }
                                });

                                // Do Not Track
                                !('doNotTrack' in navigator) || 'doNotTrack' in _data || objectDefProp(_data, 'doNotTrack', {
                                    // Get
                                    get: function doNotTrack() {
                                        // Return
                                        return navigator.doNotTrack
                                    }
                                });

                                // Height
                                'height' in _data || objectDefProp(_data, 'height', {
                                    // Get
                                    get: function getHeight() {
                                        // Return
                                        return _data.viewport.height
                                    },

                                    // Set
                                    set: function setHeight() {
                                        // Return
                                        return _data.viewport.height = arguments[0]
                                    }
                                });

                                // Keywords
                                'keywords' in _data || objectDefProp(_data, 'keywords', {
                                    // Get
                                    get: function getKeywords() {
                                        // Return
                                        return (docQuerySel('meta[name=keywords') || data).content || Null
                                    },

                                    // Set
                                    set: function setKeywords() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[name=keywords') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[name=keywords') || (document.head.innerHTML += "\r<meta content='" + arg + "' name=keywords>")
                                    }
                                });

                                // Minimal UI
                                'minimalUI' in _data || objectDefProp(_data, 'minimalUI', {
                                    // Get
                                    get: function getMinimalUI() {
                                        // Return
                                        return _data.viewport.minimalUI
                                    },

                                    // Set
                                    set: function setMinimalUI() {
                                        // Return
                                        return _data.viewport.minimalUI = arguments[0]
                                    }
                                });

                                // Name
                                'name' in _data || objectDefProp(_data, 'name', {
                                    // Get
                                    get: function getName() {
                                        // Return
                                        return window.short_name || window.name || document.title
                                    },

                                    // Set
                                    set: function setName() {
                                        // Initialization > Data
                                        let data = arguments[0];

                                        // Modification
                                            // Document > Title
                                            document.title = data;

                                            // Window
                                                // Name
                                                window.name = data;

                                                // Short Name
                                                window.short_name = data
                                    }
                                });

                                // Navigator
                                'nav' in _data || objectDefProp(_data, 'nav', {
                                    // Get
                                    get: function navigator() {
                                        // Return
                                        return window.navigator
                                    }
                                });

                                // Languages
                                'lang' in _data || objectDefProp(_data, 'lang', {
                                    // Get
                                    get: function language() {
                                        // Return
                                        return navigator.languages || []
                                    }
                                });

                                // Online
                                !('onLine' in navigator) || 'online' in _data || objectDefProp(_data, 'online', {
                                    // Get
                                    get: function online() {
                                        // Return
                                        return navigator.onLine
                                    }
                                });

                                // Platform
                                !('platform' in navigator) || 'platform' in _data || objectDefProp(_data, 'platform', {
                                    // Get
                                    get: function platform() {
                                        // Return
                                        return navigator.platform
                                    }
                                });

                                // Plug-Ins
                                !('plugins' in navigator) || 'plugins' in _data || objectDefProp(_data, 'plugins', {
                                    // Get
                                    get: function plugins() {
                                        // Return
                                        return navigator.plugins
                                    }
                                });

                                // Robots
                                'robots' in _data || objectDefProp(_data, 'robots', {
                                    // Get
                                    get: function getRobots() {
                                        // Return
                                        return (docQuerySel('meta[name=robots') || data).content || Null
                                    },

                                    // Set
                                    set: function setRobots() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[name=robots') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[name=robots') || (document.head.innerHTML += "\r<meta content='" + arg + "' name=robots>")
                                    }
                                });

                                // Theme Color
                                'themeColor' in _data || objectDefProp(_data, 'themeColor', {
                                    // Get
                                    get: function getThemeColor() {
                                        // Return
                                        return (docQuerySel('meta[name=theme-color') || data).content || Null
                                    },

                                    // Set
                                    set: function setThemeColor() {
                                        // Initialization > Argument
                                        let arg = string(arguments[0]);

                                        // Modification > [Element] > Content
                                        (docQuerySel('meta[name=theme-color') || data).content = arg;

                                        // Deletion
                                        delete data.content;

                                        // Modification > <head> > Inner HTML
                                        docQuerySel('meta[name=theme-color') || (document.head.innerHTML += "\r<meta content='" + arg + "' name=theme-color>")
                                    }
                                });

                                // User Agent
                                !('userAgent' in navigator) || 'userAgent' in _data || objectDefProp(_data, 'userAgent', {
                                    // Get
                                    get: function userAgent() {
                                        // Return
                                        return navigator.userAgent
                                    }
                                });

                                // User Scalable
                                'userScalable' in _data || objectDefProp(_data, 'userScalable', {
                                    // Get
                                    get: function getUserScalable() {
                                        // Return
                                        return _data.viewport.userScalable
                                    },

                                    // Set
                                    set: function setUserScalable() {
                                        // Return
                                        return _data.viewport.userScalable = arguments[0]
                                    }
                                });

                                // Vendor
                                !('vendor' in navigator) || 'vendor' in _data || objectDefProp(_data, 'vendor', {
                                    // Get
                                    get: function vendor() {
                                        // Return
                                        return navigator.vendor
                                    }
                                });

                                // Viewport
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (!('viewport' in _data)) {
                                        // Initialization > Metadata
                                        let metadata = LapysJS.namedObject('ApplicationViewport'),
                                            _metadata = isFunction(window.ApplicationViewport) ? metadata : metadata.constructor.prototype;

                                        // Height
                                        'height' in _metadata || objectDefProp(_metadata, 'height', {
                                            // Get
                                            get: function getHeight() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').getAfterChar('height').getBeforeChar(',').replace('=', '')
                                            },

                                            // Set
                                            set: function setHeight() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = string(arguments[0]),
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        metadata.content.replace(regexSetQuasiAlt, regexSetAlt).hasChar(/height {0,}=/) ?
                                                            (metadata.content.replace(regexSetQuasiAlt, regexSetAlt) + regexSet).replace(regExp('height {0,}=[^,]{0,}(,|' + regexSet + ')', 'g'), 'height=' + arg + ',').replace(regExp(regexSet, 'g'), '') :
                                                            metadata.content + ', height=' + arg
                                                    ).replace(regExp(regexSetAlt, 'g'), regexSet).trimRightChar(/,| /)) :
                                                    document.head.innerHTML += "\r<meta content='height=" + arg + "' name=viewport>"
                                            }
                                        });

                                        // Initial Scale
                                        'initialScale' in _metadata || objectDefProp(_metadata, 'initialScale', {
                                            // Get
                                            get: function getInitialScale() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').getAfterChar('initial-scale').getBeforeChar(',').replace('=', '')
                                            },

                                            // Set
                                            set: function setInitialScale() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = parseNumber(arguments[0]),
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        metadata.content.replace(regexSetQuasiAlt, regexSetAlt).hasChar(/initial-scale {0,}=/) ?
                                                            (metadata.content.replace(regexSetQuasiAlt, regexSetAlt) + regexSet).replace(regExp('initial-scale {0,}=[^,]{0,}(,|' + regexSet + ')', 'g'), 'initial-scale=' + arg + ',').replace(regExp(regexSet, 'g'), '') :
                                                            metadata.content + ', initial-scale=' + arg
                                                    ).replace(regExp(regexSetAlt, 'g'), regexSet).trimRightChar(/,| /)) :
                                                    document.head.innerHTML += "\r<meta content='initial-scale=" + arg + "' name=viewport>"
                                            }
                                        });

                                        // Maximum Scale
                                        'maximumScale' in _metadata || objectDefProp(_metadata, 'maximumScale', {
                                            // Get
                                            get: function getMaximumScale() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').getAfterChar('maximum-scale').getBeforeChar(',').replace('=', '')
                                            },

                                            // Set
                                            set: function setMaximumScale() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = parseNumber(arguments[0]),
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        metadata.content.replace(regexSetQuasiAlt, regexSetAlt).hasChar(/maximum-scale {0,}=/) ?
                                                            (metadata.content.replace(regexSetQuasiAlt, regexSetAlt) + regexSet).replace(regExp('maximum-scale {0,}=[^,]{0,}(,|' + regexSet + ')', 'g'), 'maximum-scale=' + arg + ',').replace(regExp(regexSet, 'g'), '') :
                                                            metadata.content + ', maximum-scale=' + arg
                                                    ).replace(regExp(regexSetAlt, 'g'), regexSet).trimRightChar(/,| /)) :
                                                    document.head.innerHTML += "\r<meta content='maximum-scale=" + arg + "' name=viewport>"
                                            }
                                        });

                                        // Minimal UI
                                        'minimalUI' in _metadata || objectDefProp(_metadata, 'minimalUI', {
                                            // Get
                                            get: function getMinimalUI() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').indexOf('minimal-ui') > -1
                                            },

                                            // Set
                                            set: function setMinimalUI() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = arguments[0] === True ? True : !1,
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        arg ?
                                                            (metadata.content.indexOf('minimal-ui') > -1 ? metadata.content : metadata.content + ', minimal-ui') :
                                                            metadata.content.replace(/, {0,}minimal-ui/, '').replace(/  /g, ' ')
                                                    )) :
                                                    document.head.innerHTML += "\r<meta content=minimal-ui name=viewport>"
                                            }
                                        });

                                        // Minimum Scale
                                        'minimumScale' in _metadata || objectDefProp(_metadata, 'minimumScale', {
                                            // Get
                                            get: function getMinimumScale() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').getAfterChar('minimum-scale').getBeforeChar(',').replace('=', '')
                                            },

                                            // Set
                                            set: function setMinimumScale() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = parseNumber(arguments[0]),
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        metadata.content.replace(regexSetQuasiAlt, regexSetAlt).hasChar(/minimum-scale {0,}=/) ?
                                                            (metadata.content.replace(regexSetQuasiAlt, regexSetAlt) + regexSet).replace(regExp('minimum-scale {0,}=[^,]{0,}(,|' + regexSet + ')', 'g'), 'minimum-scale=' + arg + ',').replace(regExp(regexSet, 'g'), '') :
                                                            metadata.content + ', minimum-scale=' + arg
                                                    ).replace(regExp(regexSetAlt, 'g'), regexSet).trimRightChar(/,| /)) :
                                                    document.head.innerHTML += "\r<meta content='minimum-scale=" + arg + "' name=viewport>"
                                            }
                                        });

                                        // Target Density DPI
                                        'targetDensityDPI' in _metadata || objectDefProp(_metadata, 'targetDensityDPI', {
                                            // Get
                                            get: function getTargetDensityDPI() {
                                                // Return
                                                return parseFloat((docQuerySel('meta[name=viewport') || {getAttribute: function() { return 0 }}).getAttribute('target-densitydpi'))
                                            },

                                            set: function setTargetDensityDPI() {
                                                // Modification > Viewport Metadata Element > Target Density DPI
                                                (docQuerySel('meta[name=viewport') || omega).setAttribute('target-densitydpi', arguments[0])
                                            }
                                        });

                                        // User Scalable
                                        'userScalable' in _metadata || objectDefProp(_metadata, 'userScalable', {
                                            // Get
                                            get: function getUserScalable() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').getAfterChar('minimum-scale').getBeforeChar(',').replace('=', '') == 'yes' ? !0 : !1
                                            },

                                            // Set
                                            set: function setUserScalable() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = arguments[0] === True || arguments[0] == 'yes' ? 'yes' : 'no',
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        metadata.content.replace(regexSetQuasiAlt, regexSetAlt).hasChar(/user-scalable {0,}=/) ?
                                                            (metadata.content.replace(regexSetQuasiAlt, regexSetAlt) + regexSet).replace(regExp('user-scalable {0,}=[^,]{0,}(,|' + regexSet + ')', 'g'), 'user-scalable=' + arg + ',').replace(regExp(regexSet, 'g'), '') :
                                                            metadata.content + ', user-scalable=' + arg
                                                    ).replace(regExp(regexSetAlt, 'g'), regexSet).trimRightChar(/,| /)) :
                                                    document.head.innerHTML += "\r<meta content='user-scalable=" + arg + "' name=viewport>"
                                            }
                                        });

                                        // Width
                                        'width' in _metadata || objectDefProp(_metadata, 'width', {
                                            // Get
                                            get: function getWidth() {
                                                // Return
                                                return ((docQuerySel('meta[name=viewport') || data).content || '').getAfterChar('width').getBeforeChar(',').replace('=', '')
                                            },

                                            // Set
                                            set: function setWidth() {
                                                // Initialization > (Argument, Metadata, Regular Expression Set (...))
                                                let arg = string(arguments[0]),
                                                    metadata = docQuerySel('meta[name=viewport'),
                                                    regexSet = LapysJS.regexSet.randomize(),
                                                    regexSetAlt = LapysJS.regexSet.randomize(),
                                                    regexSetQuasiAlt = regExp(regexSet, 'g');

                                                /* > (...)
                                                        --- NOTE ---
                                                            #lapys: The syntax is a bit long to prevent the value from changing multiple times
                                                                or creating a cache variable.
                                                */
                                                metadata ?
                                                    (metadata.content = (
                                                        metadata.content.replace(regexSetQuasiAlt, regexSetAlt).hasChar(/width {0,}=/) ?
                                                            (metadata.content.replace(regexSetQuasiAlt, regexSetAlt) + regexSet).replace(regExp('width {0,}=[^,]{0,}(,|' + regexSet + ')', 'g'), 'width=' + arg + ',').replace(regExp(regexSet, 'g'), '') :
                                                            metadata.content + ', width=' + arg
                                                    ).replace(regExp(regexSetAlt, 'g'), regexSet).trimRightChar(/,| /)) :
                                                    document.head.innerHTML += "\r<meta content='width=" + arg + "' name=viewport>"
                                            }
                                        });

                                        // Viewport
                                        objectDefProp(_data, 'viewport', {
                                            // Get
                                            get: function viewport() {
                                                // Return
                                                return metadata
                                            }
                                        })
                                    }

                                // Version
                                'version' in _data || objectDefProp(_data, 'version', {
                                    // Get
                                    get: function getVersion() {
                                        // Return
                                        return version
                                    },

                                    // Set
                                    set: function setVersion() {
                                        // Update > Version
                                        version = string(arguments[0])
                                    }
                                });

                                // Width
                                'width' in _data || objectDefProp(_data, 'width', {
                                    // Get
                                    get: function getWidth() {
                                        // Return
                                        return _data.viewport.width
                                    },

                                    // Set
                                    set: function setWidth() {
                                        // Return
                                        return _data.viewport.width = arguments[0]
                                    }
                                });

                            // Return
                            return data
                        })()
                    });

                    // Array
                    isFunction(_tmp.array) || objectDefProp(_tmp, 'array', {
                        // Value
                        value: function Array() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return array.apply(window, [...arguments])
                                }),
                                metadata = [];

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                isArrayLike(i) ? metadata.addElementToFront.apply(metadata, arrayFrom(i)) : metadata.addElementToFront((function() {
                                    // Initialization > Alpha
                                    let alpha = i;

                                    /* Logic
                                            [switch:case:default statement]

                                        > Update > Alpha
                                    */
                                    switch ((isNonConstructable(alpha) ? tmp : alpha).constructor) {
                                        // Function
                                        case funct:
                                            alpha = alpha.getArguments()
                                    }

                                    // Return
                                    return alpha
                                })());

                            // Return
                            return args.length > 0 ? metadata : Default.array
                        }
                    });

                    // Attempt
                    isFunction(_tmp.attempt) || objectDefProp(_tmp, 'attempt', {
                        // Value
                        value: function attempt() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data;

                            /* Loop
                                    Index Arguments.

                                > Error Handling
                            */
                            for (let i of args)
                                try {
                                    // Update > Data
                                    data = isFunction(i) ? i() : i
                                }

                                catch (error) {
                                    // Return
                                    return False
                                }

                            // Return
                            return args.length > 1 ? Undefined : (isFunction(args[0]) ? data : args[0])
                        }
                    });

                    // Average
                    isFunction(_tmp.avg) || objectDefProp(_tmp, 'avg', {
                        // Value
                        value: function average() {
                            // Return
                            return Math.avg.apply(Math, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Boolean
                    isFunction(_tmp.bool) || objectDefProp(_tmp, 'bool', {
                        // Value
                        value: function Boolean() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return window.Boolean.apply(window, [...arguments])
                                }),
                                metadata = [];

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                metadata.push((function() {
                                    // Initialization > Alpha
                                    let alpha = i;

                                    /* Logic
                                            [switch:case:default statement]

                                        > Update > Alpha
                                    */
                                    switch ((isNonConstructable(alpha) ? tmp : alpha).constructor) {
                                        case htmlAllCollection:
                                            alpha = True;
                                            break;

                                        // [Default]
                                        default:
                                            alpha = data(alpha)
                                    }

                                    // Return
                                    return alpha
                                })());

                            // Return
                            return args.length > 0 ? metadata.indexOf(False) < 0 : Default.boolean
                        }
                    });

                    // Browser
                    'browser' in _tmp || objectDefProp(_tmp, 'browser', {
                        // Value
                        value: (function() {
                            let data = LapysJS.namedObject('LapysJSBrowserInformation'),
                                _data = data.constructor.prototype;

                            // Modification > Target
                                // Chrome
                                'chrome' in _data || Object.defineProperty(_data, 'chrome', {
                                    // Configurable
                                    configurable: True,

                                    // Enumerable
                                    enumerable: True,

                                    // Get
                                    get: function chrome() {
                                        // Return
                                        return !!(window.chrome && window.chrome.webstore)
                                    }
                                });

                                // Firefox
                                'firefox' in _data || Object.defineProperty(_data, 'firefox', {
                                    // Configurable
                                    configurable: True,

                                    // Enumerable
                                    enumerable: True,

                                    // Get
                                    get: function firefox() {
                                        // Return
                                        return typeof InstallTrigger != 'undefined'
                                    }
                                });

                                // Internet Explorer
                                'ie' in _data || Object.defineProperty(_data, 'ie', {
                                    // Configurable
                                    configurable: True,

                                    // Enumerable
                                    enumerable: True,

                                    // Get
                                    get: function internetExplorer() {
                                        // Return
                                        return !!document.documentMode
                                    }
                                });

                                // Opera
                                'opera' in _data || Object.defineProperty(_data, 'opera', {
                                    // Configurable
                                    configurable: True,

                                    // Enumerable
                                    enumerable: True,

                                    // Get
                                    get: function opera() {
                                        // Return
                                        return !!((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf('OPR/') > -1)
                                    }
                                });

                                // Primitive Value
                                Object.defineProperty(_data, '[[PrimitiveValue]]', {
                                    // Get
                                    get: function() {
                                        // Initialization > (Data, Metadata)
                                        let data = [],
                                            metadata = [];

                                        /* Loop
                                                Index Target.

                                            > Update
                                        */
                                        for (let i in _data) {
                                            // Data
                                            data.push(i);

                                            // Metadata
                                            metadata.push(_data[i])
                                        }

                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (metadata.count(True) > 1)
                                            return;

                                        else if (metadata.indexOf(True) > -1)
                                            return data[metadata.indexOf(True)];

                                        // Return
                                        return Null
                                    }
                                });

                                // Safari
                                'safari' in _data || Object.defineProperty(_data, 'safari', {
                                    // Configurable
                                    configurable: True,

                                    // Enumerable
                                    enumerable: True,

                                    // Get
                                    get: function safari() {
                                        // Return
                                        return !!(/constructor/i.test(HTMLElement) || string(!window.safari || safari.pushNotification) == '[object SafariRemoteNotification]')
                                    }
                                });

                            // Return
                            return data
                        })()
                    });

                    // Cube Root
                    isFunction(_tmp.cbrt) || objectDefProp(_tmp, 'cbrt', {
                        // Value
                        value: function cbrt() {
                            // Return
                            return Math.cbrt.apply(Math, [...arguments])
                        }
                    });

                    // Chain
                    isFunction(_tmp.chain) || objectDefProp(_tmp, 'chain', {
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
                                delta = typeof Promise == 'function' ? function main(callbackA, callbackB) {
                                    // Initialization > Gamma
                                    let gamma = data() - alpha;

                                    // Update > Alpha
                                    alpha = data();

                                    // Callback A
                                    callbackA(beta += gamma);

                                    !isFunction(callbackB) || (new Promise(function() {
                                        // Argument (0, 1)
                                        arguments[0](null);
                                        arguments[1](null)
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
                                    !isFunction(callbackB) || createElement('*', '', '', {onclick: function() {
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
                                (typeof args[i] != 'string') || (args[i] = func(args[i]));

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isFunction(i))
                                    throw LapysJS.error(i, 'not', ['evaluation string', 'function']);

                            // Delta
                            !args.length || delta(args[metadata], args[metadata + 1]);

                            // Return
                            return alpha
                        }
                    });

                    // Check
                    isFunction(_tmp.check) || objectDefProp(_tmp, 'check', {
                        // Value
                        value: function check() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                alpha = args[2];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Initialization > Beta
                                let beta = LapysJS.namedObject('LapysJSDynamicCondition');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (args.length > 1 && (!isFunction(metadata) && typeof metadata != 'string'))
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                else if (args.length > 2 && (!isFunction(alpha) && typeof alpha != 'string'))
                                    throw LapysJS.error(alpha, 'not', ['evaluation string', 'function']);

                                // Update > (Metadata, Alpha)
                                (typeof metadata != 'string') || (metadata = func('onsuccess', '', metadata));
                                (typeof alpha != 'string') || (alpha = func('onfail', '', alpha));

                                // Modification > Beta
                                    // Condition
                                    beta.condition = data;

                                    // Fail
                                    beta.fail = args.length < 3 ? 0 : alpha;

                                    // Success
                                    beta.success = args.length < 2 ? 1 : metadata;

                                    // Value
                                    objectDefProp(beta, 'value', {
                                        // Get
                                        get: function value() {
                                            // Return
                                            return isFunction(this.condition) ? !!this.condition() : !!this.condition
                                        }
                                    });

                                // Function > Test
                                (function test() {
                                    // Beta > (Success | Fail)
                                    beta.value ? ((typeof beta.success != 'function') || beta.success()) : ((typeof beta.fail != 'function') || beta.fail());

                                    // Request Animation Frame
                                    beta.value || requestAnimationFrame(test)
                                })()

                                return beta
                            }

                            // Return
                            return new (function LapysJSDynamicCondition() {
                                let that = this,
                                    _that = that.constructor.prototype;

                                // Modification > Target
                                    // Condition
                                    _that.condition = False;

                                    // Fail
                                    _that.fail = function onfail() {};

                                    // Success
                                    _that.success = function onsuccess() {};

                                    // Value
                                    objectDefProp(_that, 'value', {
                                        // Get
                                        get: function value() {
                                            // Return
                                            return isFunction(this.condition) ? !!this.condition() : !!this.condition
                                        }
                                    })
                            })
                        }
                    });

                    // Clear
                    isFunction(_tmp.clear) || objectDefProp(_tmp, 'clear', {
                        // Configurable
                        configurable: True,

                        // Enumerable
                        enumerable: True,

                        // Get
                        get: function clear() {
                            // Console > Clear
                            console.clear();

                            // Return
                            return function clear() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // Console > Clear
                                console.clear.apply(console, args);

                                // Return
                                return args.length > 1 ? args : args[0]
                            }
                        }
                    });

                    // Copy
                    isFunction(_tmp.copy) || objectDefProp(_tmp, 'copy', {
                        // Value
                        value: function copy() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = args[0];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (docQueryComEnabled('copy') && docQueryComSupported('copy')) {
                                    // Update > Data
                                    !isElement(data) || (data = data.innerHTML);
                                    data = (CLIPBOARD = string(data));

                                    // Initialization > (Metadata, Alpha)
                                    let metadata = document.designMode,
                                        alpha = docCreateElement('textarea');

                                    // Modification > Document > Design Mode
                                    document.designMode = 'on';

                                    // Modification > Alpha
                                        // Content Editable
                                        alpha.contentEditable = True;

                                        // Value
                                        alpha.setAttribute('value', alpha.value = data);

                                    // Insertion
                                    document.children[0].appendChild(alpha);

                                    // Alpha > Focus
                                    alpha.focus();

                                    // Select
                                    select(alpha);

                                    // Document Execute Command
                                    docExecCom('copy', False, Null);

                                    // Alpha > Blur
                                    alpha.blur();

                                    // Deletion
                                    alpha.remove();

                                    // Modification > Document > Design Mode
                                    document.designMode = metadata
                                }

                                else
                                    // Error
                                    throw LapysJS.error("Query command 'copy' can not be executed.");

                            // Return
                            return arguments[0] || Null
                        }
                    });

                    // Cut
                    isFunction(_tmp.cut) || objectDefProp(_tmp, 'cut', {
                        // Value
                        value: function cut() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = args[0];

                            if (args.length)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (docQueryComEnabled('cut') && docQueryComSupported('cut')) {
                                    // Update > Clipboard
                                    CLIPBOARD = string(isElement(data) ? ('value' in data ? data.value : data.innerHTML) : data);

                                    // Initialization > Metadata
                                    let metadata = document.designMode;

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isElement(data)) {
                                        // Initialization > Alpha
                                        let alpha = data.contentEditable;

                                        // Modification > Document > Design Mode
                                        document.designMode = 'on';

                                        // Modification > Data > Content Editable
                                        data.contentEditable = True;

                                        // Data > Focus
                                        data.focus();

                                        // Select
                                        select(data);

                                        // Document Execute Command
                                        docExecCom('cut', False, Null);

                                        // Data > Blur
                                        data.blur();

                                        // Modification > Data > Content Editable
                                        data.contentEditable = alpha
                                    }

                                    // Modification > Document > Design Mode
                                    document.designMode = metadata
                                }

                                else
                                    // Error
                                    throw LapysJS.error("Query command 'cut' can not be executed.");

                            // Return
                            return arguments[0]
                        }
                    });

                    // Create Document Fragment
                    isFunction(_tmp.createDocumentFragment) || objectDefProp(_tmp, 'createDocumentFragment', {
                        // Value
                        value: function createDocumentFragment() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = docCreateDocFrag(),
                                metadata = docCreateElement(args.length > 1 ? string(args[1]) : 'lapysjs-element'),
                                alpha = args[0];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Insertion
                                data.appendChild(metadata);

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (typeof alpha == 'string') {
                                    // Modification > Metadata > Inner HTML
                                    metadata.innerHTML = alpha;

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (metadata.children[0])
                                        /* Loop
                                                [for:of statement]

                                            > Insertion
                                        */
                                        for (let i of toArray(metadata.children))
                                            data.appendChild(i);

                                    else
                                        // Modification > Data > Text Content
                                        data.textContent = alpha;

                                    // Deletion
                                    metadata.remove()
                                }

                                else
                                    // Error Handling
                                    try {
                                        // Insertion
                                        metadata.innerHTML = alpha.outerHTML;

                                        /* Loop
                                                [for:of statement]

                                            > Insertion
                                        */
                                        for (let i of toArray(metadata.children))
                                            data.appendChild(i);

                                        // Deletion
                                        metadata.remove()
                                    }

                                    catch (error) {
                                        // Error
                                        throw LapysJS.error(alpha, 'not', ['element', 'string'])
                                    }
                            }

                            // Return
                            return data
                        }
                    });

                    // Create Element
                    isFunction(_tmp.createElement) || objectDefProp(_tmp, 'createElement', {
                        // Value
                        value: function createElement() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = args.slice(1);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Update > Argument 0
                                args[0] = string(args[0]);
                                (args[0] != '*') || (args[0] = randomElementList.randomElement);

                                // Initialization > ((...), Element)
                                let metadata = args[0].trimRightChar(':'),
                                    alpha = args[0].endsWith(':') ? 'innerHTML' : 'CSSSelector',
                                    beta = data[0],
                                    delta = data[1],
                                    gamma = data[2],
                                    epsilon = data[3],
                                    element;

                                // Error Handling
                                try {
                                    // Update > Element
                                    element = docCreateElement(metadata)
                                }

                                catch (error) {
                                    // Error
                                    throw LapysJS.error("Invalid element name '" + metadata + "'.")
                                }

                                // Function > Update
                                function update() {
                                    // Return
                                    return arguments[0].replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    })
                                }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (args.length < 3)
                                    // Modification > Element > [Alpha]
                                    element[alpha] = beta;

                                else {
                                    // Modification > Element > (CSS Selector, Inner HTML)
                                    element.CSSSelector = beta;
                                    element.innerHTML = delta;

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isBoolean(epsilon) || args.length < 5)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (epsilon)
                                            /* Loop
                                                    Index Gamma.

                                                > Modification > Element > [Loop Counter]
                                            */
                                            for (let i in gamma)
                                                i in element ? element[i] = gamma[i] : element.setAttribute(update(i), string(gamma[i]));

                                        else
                                            /* Loop
                                                    Index Gamma.
                                            */
                                            for (let i in gamma)
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (isObject(gamma[i]))
                                                    /* Loop
                                                            [for:in statement]

                                                        > Modification > Element > [Loop Counter]
                                                    */
                                                    for (let j in gamma[i])
                                                        j in (element[i] || {}) ? element[i][j] = gamma[i][j] : element.setAttribute(update(i) + '-' + update(j), string(gamma[i][j]));

                                                else
                                                    // Modification > Element > [Loop Counter]
                                                    i in element ? element[i] = gamma[i] : element.setAttribute(update(i), string(gamma[i]))
                                }

                                // Return
                                return element
                            }

                            // Return
                            return docCreateElement('div')
                        }
                    });

                    // Descendant Query Selector
                    isFunction(_tmp._$) || objectDefProp(_tmp, '_$', {
                        // Value
                        value: function LapysJSDescendantQuerySelector() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = $$.apply(this, args.filter(data => {
                                    // Return
                                    return typeof data != 'number'
                                })),
                                metadata = [],
                                that = this,
                                _that = toArray((isWindow(that) ? document : that).children);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Update > Data
                                !isElement(data) || (data = [data]);

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ('length' in object(data))
                                    /* Loop
                                            Index Data.

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data))
                                        (_that.indexOf(i) < 0) || metadata.push(i);

                                // Update > Metadata
                                !(typeof args[1] == 'number' || typeof args[2] == 'number') || (metadata = metadata[typeof args[1] == 'number' ? args[1] : args[2]]);

                                // Return
                                return 'length' in object(metadata) && !isElement(metadata) ? (function() {
                                    /* Loop
                                            Index Arguments.

                                        > Update > Arguments
                                    */
                                    for (let i in args)
                                        args[i] = string(args[i]).trim();

                                    // Return
                                    return (args.indexOf('array') > -1 ? metadata : (metadata.length > 1 ? metadata : metadata[0])) || Null
                                })() : metadata
                            }

                            // Return
                            return Null
                        }
                    });
                        // Definition
                        isFunction(docProto._$) || objectDefProp(docProto, '_$', {value: _$});
                        isFunction(docFragProto._$) || objectDefProp(docFragProto, '_$', {value: _$});
                        isFunction(eleProto._$) || objectDefProp(eleProto, '_$', {value: _$});

                    // Error
                    isFunction(_tmp.error) || objectDefProp(_tmp, 'error', {
                        value: function error() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Console > Error
                            console.error.apply(console, args);

                            // Return
                            return args.length > 1 ? args : args[0]
                        },

                        // Writable
                        writable: True
                    });

                    // Execute
                    isFunction(_tmp.exec) || objectDefProp(_tmp, 'exec', {
                        // Value
                        value: function execute() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                try {
                                    // Execute
                                    eval(typeof i == 'string' ? "(function(){" + i + "})" : i)
                                }

                                catch (error) {
                                    // Return
                                    return False
                                }

                            // Return
                            return True
                        }
                    });

                    // File
                    isFunction(winProto.file) || objectDefProp(winProto, 'file', {
                        // Value
                        value: function File() {
                            // Return
                            return LapysJS.warn(_tmp)
                        }
                    });
                        // Modification > File
                            // Create
                            isFunction(file.create) || objectDefProp(file, 'create', {
                                // Value
                                value: function create() {
                                    // Return
                                    return LapysJS.warn(_tmp)
                                }
                            });

                            // Open
                            isFunction(file.open) || objectDefProp(file, 'open', {
                                // Value
                                value: function open() {
                                    // Return
                                    return LapysJS.warn(_tmp)
                                }
                            });

                            // Read
                            isFunction(file.read) || objectDefProp(file, 'read', {
                                // Value
                                value: function read() {
                                    // Initialization > Arguments
                                    let args = [...arguments];

                                    // Return
                                    return LapysJS.misc.request.apply(LapysJS.misc, ['GET', string(args[0])].concat(args.slice(1)))
                                }
                            });

                            // Write
                            isFunction(file.write) || objectDefProp(file, 'write', {
                                // Value
                                value: function write() {
                                    // Return
                                    return LapysJS.warn(_tmp)
                                }
                            });

                    // First Element Child
                        // Update > Temporary Data
                        _tmp = function firstElementChild() {
                            // Return
                            return (isWindow(this) ? document : this).firstElementChild
                        };

                        // Initialization
                        isFunction(window.$1) || objectDefProp(window, '$1', {
                            // Configurable
                            configurable: True,

                            // Get
                            get: _tmp
                        });

                        // Definition
                        isFunction(docProto.$1) || objectDefProp(docProto, '$1', {configurable: True, get: _tmp});
                        isFunction(docFragProto.$1) || objectDefProp(docFragProto, '$1', {configurable: True, get: _tmp});
                        isFunction(eleProto.$1) || objectDefProp(eleProto, '$1', {configurable: True, get: _tmp});

                        // Update > Temporary Data
                        _tmp = window;

                    // Float
                    isFunction(_tmp.float) || objectDefProp(_tmp, 'float', {
                        // Value
                        value: function float() {
                            // Return
                            return Number.parseFloat.apply(Number, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Function
                    isFunction(_tmp.func) || objectDefProp(_tmp, 'func', {
                        // Value
                        value: function Function() {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (arguments.length)
                                /* Logic
                                        [if:else if:Else statement]
                                */
                                if (typeof arguments[0] != 'function' && typeof arguments[1] != 'function' && typeof arguments[2] != 'function')
                                    // Error Handling
                                    try {
                                        // Return
                                        return arguments.length > 2 ? eval('(function' + (arguments[0] ? ' ' + string(arguments[0]) : '') + '(' + (isArray(arguments[1]) ? arguments[1].join(', ') : string(arguments[1])) + ') {' + string(arguments[2]) + '})') : (arguments.length == 2 ? eval('(function(' + (isArray(arguments[0]) ? arguments[0].join(', ') : string(arguments[0])) + ') {' + string(arguments[1]) + '})') : eval('(function() {' + string(arguments[0]) + '})'))
                                    }

                                    catch (error) {
                                        // Error Handling
                                        try {
                                            // Return
                                            return arguments.length > 2 ? eval('(function' + (arguments[0] ? ' ' + string(arguments[0]) : '') + '(' + (isArray(arguments[1]) ? arguments[1].join(', ') : string(arguments[1])) + '\n) {' + string(arguments[2]) + '})') : (arguments.length == 2 ? eval('(function(' + (isArray(arguments[0]) ? arguments[0].join(', ') : string(arguments[0])) + '\n) {' + string(arguments[1]) + '})') : eval('(function() {' + string(arguments[0]) + '})'))
                                        }

                                        catch (error) {
                                            // Error Handling
                                            try {
                                                // Return
                                                return arguments.length > 2 ? eval('(function' + (arguments[0] ? ' ' + string(arguments[0]) : '') + '(' + (isArray(arguments[1]) ? arguments[1].join(', ') : string(arguments[1])) + ') {' + string(arguments[2]) + '\n})') : (arguments.length == 2 ? eval('(function(' + (isArray(arguments[0]) ? arguments[0].join(', ') : string(arguments[0])) + ') {' + string(arguments[1]) + '\n})') : eval('(function() {' + string(arguments[0]) + '\n})'))
                                            }

                                            catch (error) {
                                                // Return
                                                return arguments.length > 2 ? eval('(function' + (arguments[0] ? ' ' + string(arguments[0]) : '') + '(' + (isArray(arguments[1]) ? arguments[1].join(', ') : string(arguments[1])) + '\n) {' + string(arguments[2]) + '\n})') : (arguments.length == 2 ? eval('(function(' + (isArray(arguments[0]) ? arguments[0].join(', ') : string(arguments[0])) + '\n) {' + string(arguments[1]) + '\n})') : eval('(function() {' + string(arguments[0]) + '\n})'))
                                            }
                                        }
                                    }

                                else
                                    // Return
                                    return arguments.length == 1 ? arguments[0] : (function() { LapysJS.warn('Dynamic function manipulation using function values is still in development.') });

                            // Return
                            return Default.function
                        }
                    });

                    // Get Elements By Attribute
                    isFunction(_tmp.$a) || objectDefProp(_tmp, '$a', {
                        // Value
                        value: function LapysJSGetElementsByAttribute() {
                            // Return
                            return $$.apply(this, [arguments[0], arguments[1]].concat([...arguments].slice(2)))
                        }
                    });
                        // Definition
                        isFunction(docProto.$a) || objectDefProp(docProto, '$a', {value: $a});
                        isFunction(docFragProto.$a) || objectDefProp(docFragProto, '$a', {value: $a});
                        isFunction(eleProto.$a) || objectDefProp(eleProto, '$a', {value: $a});
                        isFunction(_tmp.$A) || objectDefProp(_tmp, '$A', {value: $a, writable: True});
                        isFunction(docProto.$A) || objectDefProp(docProto, '$A', {value: $a, writable: True});
                        isFunction(docFragProto.$A) || objectDefProp(docFragProto, '$A', {value: $a, writable: True});
                        isFunction(eleProto.$A) || objectDefProp(eleProto, '$A', {value: $a, writable: True});

                    // Get Elements By Class Name
                    isFunction(_tmp.$c) || objectDefProp(_tmp, '$c', {
                        // Value
                        value: function LapysJSGetElementsByClassName() {
                            // Return
                            return $$.apply(this, [arguments[0]].concat('class').concat([...arguments].slice(1)))
                        }
                    });
                        // Definition
                        isFunction(docProto.$c) || objectDefProp(docProto, '$c', {value: $c});
                        isFunction(docFragProto.$c) || objectDefProp(docFragProto, '$c', {value: $c});
                        isFunction(eleProto.$c) || objectDefProp(eleProto, '$c', {value: $c});
                        isFunction(_tmp.$C) || objectDefProp(_tmp, '$C', {value: $c, writable: True});
                        isFunction(docProto.$C) || objectDefProp(docProto, '$C', {value: $c, writable: True});
                        isFunction(docFragProto.$C) || objectDefProp(docFragProto, '$C', {value: $c, writable: True});
                        isFunction(eleProto.$C) || objectDefProp(eleProto, '$C', {value: $c, writable: True});

                    // Get Element By ID
                    isFunction(_tmp.$i) || objectDefProp(_tmp, '$i', {
                        // Value
                        value: function LapysJSGetElementById() {
                            // Return
                            return $$.apply(this, [arguments[0]].concat('id').concat([...arguments].slice(1)))
                        }
                    });
                        // Definition
                        isFunction(docProto.$i) || objectDefProp(docProto, '$i', {value: $i});
                        isFunction(docFragProto.$i) || objectDefProp(docFragProto, '$i', {value: $i});
                        isFunction(eleProto.$i) || objectDefProp(eleProto, '$i', {value: $i});
                        isFunction(_tmp.$I) || objectDefProp(_tmp, '$I', {value: $i, writable: True});
                        isFunction(docProto.$I) || objectDefProp(docProto, '$I', {value: $i, writable: True});
                        isFunction(docFragProto.$I) || objectDefProp(docFragProto, '$I', {value: $i, writable: True});
                        isFunction(eleProto.$I) || objectDefProp(eleProto, '$I', {value: $i, writable: True});

                    // Get Elements By Tag Name
                    isFunction(_tmp.$t) || objectDefProp(_tmp, '$t', {
                        // Value
                        value: function LapysJSGetElementsByTagName() {
                            // Return
                            return $$.apply(this, [arguments[0]].concat('tag-name').concat([...arguments].slice(1)))
                        }
                    });
                        // Definition
                        isFunction(docProto.$t) || objectDefProp(docProto, '$t', {value: $t});
                        isFunction(docFragProto.$t) || objectDefProp(docFragProto, '$t', {value: $t});
                        isFunction(eleProto.$t) || objectDefProp(eleProto, '$t', {value: $t});
                        isFunction(_tmp.$T) || objectDefProp(_tmp, '$T', {value: $t, writable: True});
                        isFunction(docProto.$T) || objectDefProp(docProto, '$T', {value: $t, writable: True});
                        isFunction(docFragProto.$T) || objectDefProp(docFragProto, '$T', {value: $t, writable: True});
                        isFunction(eleProto.$T) || objectDefProp(eleProto, '$T', {value: $t, writable: True});

                    // Generate Key
                    isFunction(_tmp.generateKey) || objectDefProp(_tmp, 'generateKey', {
                        // Value
                        value: function generateKey() {
                            // Initialization > (Data, Metadata, Alpha)
                            let data = string(arguments[0]),
                                metadata = _numberParseNumber(arguments[1]),
                                alpha = '';

                            /* Loop
                                    Iterate over Metadata.

                                > Update > Alpha
                            */
                            for (let i = 0 ; i < metadata; i += 1)
                                alpha += data.randomChar;

                            // Return
                            return alpha
                        },

                        // Writable
                        writable: True
                    });

                    // Get Type
                    isFunction(_tmp.getType) || objectDefProp(_tmp, 'getType', {
                        // Value
                        value: function getType() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = args[0];

                            /* Logic
                                    If
                                        there is an Argument.
                            */
                            if (args.length && (data !== Null && data !== Undefined)) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (isFunction(data.constructor.constructor))
                                    // Return
                                    return data.constructor.name.replace(/([A-Z]){2,}/g, data => {
                                        // Return
                                        return data.toLowerCase().slice(0, -1) + '-' + data[~-data.length].toLowerCase()
                                    }).replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    }).trimChar('-').replace('lapysj-s', 'lapys-js').replace('reg-exp', 'regex')
                            }

                            else if (args.length && (data === Null || data === Undefined))
                                // Return
                                return string(data);

                            // Return
                            return ''
                        }
                    });

                    // Integer
                    isFunction(_tmp.int) || objectDefProp(_tmp, 'int', {
                        // Value
                        value: function integer() {
                            // Return
                            return Number.parseInt.apply(Number, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Interval
                    isFunction(_tmp.interval) || objectDefProp(_tmp, 'interval', {
                        // Value
                        value: function interval() {
                            // Initialization > (Arguments, Data, Metadata, Alpha, Beta)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[args.length - 2],
                                alpha = args[~-args.length],
                                beta = 0;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length == 1) {
                                // Update > (Metadata, Alpha)
                                metadata = Null;
                                alpha = infinity
                            }

                            else if (args.length == 2) {
                                // Update > (Metadata, Alpha, Arguments)
                                metadata = args[1];
                                alpha = infinity;
                                args = args.slice(0, -1)
                            }

                            else
                                // Update > Arguments
                                args = args.slice(0, -2);

                            // Update > (Metadata, Alpha)
                            (metadata === Null) || (metadata = _numberParseNumber(metadata));
                            (alpha === infinity) || (alpha = _numberParseNumber(alpha));
                            alpha += 1;

                            /* Loop
                                    Index Arguments.

                                > Update > Argument
                            */
                            for (let i in args)
                                (typeof args[i] != 'string') || (args[i] = func(args[i]));

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isFunction(i))
                                    throw LapysJS.error(i, 'not', ['evaluation string', 'function']);

                            // Function > Main
                            (function main() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (beta < alpha && beta > 0)
                                    /* Loop
                                            Index Arguments.

                                        > [Loop Counter]
                                    */
                                    for (let i of args)
                                        i(metadata, beta);

                                // Set Timeout
                                (beta > alpha - 1) || (metadata === Null ? setTimeout(main) : setTimeout(main, metadata));

                                // Update > Beta
                                beta += 1
                            })();

                            // Return
                            return 0
                        }
                    });

                    /* Lapys Query Selector
                            --- NOTE ---
                                #lapys: Available codes are:
                                    :title, :title-class, :title-coord, :title-style => Denotes titled elements.
                                    :title('x'), :title-class('x'), :title-coord('x'), :title-style('x') => Denotes specifically titled elements.
                    */
                    isFunction(_tmp.$l) || objectDefProp(_tmp, '$l', {
                        // Value
                        value: function LapysQuerySelector() {
                            // Initialization > Data
                            let data = arguments[0];

                            // Update > Data
                            data = string(data).replace(/:title(\-class|\-coord|\-style|)\('[^']{0,}'\)|:title(\-class|\-coord|\-style|)\("[^"]{0,}"\)/g, data => {
                                // Initialization > (Metadata, Alpha)
                                let metadata = data.slice(':'.length).getBeforeChar('('),
                                    alpha = data.getAfterChar('(').slice(0, -')'.length);

                                // Update > Alpha
                                !((alpha.endsWith('"') && alpha.startsWith('"')) || (alpha.endsWith("'") && alpha.startsWith("'"))) || (alpha = alpha.slice(1, -1));

                                // Return
                                return metadata.indexOf('-') < 0 ? "[data-title='" + alpha + "'], [title='" + alpha + "']" : '[data-' + metadata + "='" + alpha + "']"
                            }).replace(/:title(\-class|\-coord|\-style|)/g, data => {
                                // Initialization > Metadata
                                let metadata = data.slice(':'.length);

                                // Return
                                return metadata.indexOf('-') < 0 ? '[data-title], [title]' : '[data-' + metadata + ']'
                            });

                            // Return
                            return $$.apply(this, [data].concat([...arguments].slice(1)))
                        }
                    });
                        // Definition
                        isFunction(docProto.$l) || objectDefProp(docProto, '$l', {value: $l});
                        isFunction(docFragProto.$l) || objectDefProp(docFragProto, '$l', {value: $l});
                        isFunction(eleProto.$l) || objectDefProp(eleProto, '$l', {value: $l});
                        isFunction(_tmp.$L) || objectDefProp(_tmp, '$L', {value: $l, writable: True});
                        isFunction(docProto.$L) || objectDefProp(docProto, '$L', {value: $l, writable: True});
                        isFunction(docFragProto.$L) || objectDefProp(docFragProto, '$L', {value: $l, writable: True});
                        isFunction(eleProto.$L) || objectDefProp(eleProto, '$L', {value: $l, writable: True});

                    // Last Element Child
                        // Update > Temporary Data
                        _tmp = function lastElementChild() {
                            // Return
                            return (isWindow(this) ? document : this).lastElementChild
                        };

                        // Initialization
                        isFunction(window.$n) || objectDefProp(window, '$n', {
                            // Configurable
                            configurable: True,

                            // Get
                            get: _tmp
                        });

                        // Definition
                        isFunction(docProto.$n) || objectDefProp(docProto, '$n', {configurable: True, get: _tmp});
                        isFunction(docFragProto.$n) || objectDefProp(docFragProto, '$n', {configurable: True, get: _tmp});
                        isFunction(eleProto.$n) || objectDefProp(eleProto, '$n', {configurable: True, get: _tmp});
                        isFunction(_tmp.$N) || objectDefProp(_tmp, '$N', {value: $n, writable: True});
                        isFunction(docProto.$N) || objectDefProp(docProto, '$N', {value: $n, writable: True});
                        isFunction(docFragProto.$N) || objectDefProp(docFragProto, '$N', {value: $n, writable: True});
                        isFunction(eleProto.$N) || objectDefProp(eleProto, '$N', {value: $n, writable: True});

                        // Update > Temporary Data
                        _tmp = window;

                    // Log
                    isFunction(_tmp.log) || objectDefProp(_tmp, 'log', {
                        value: function log() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Console > Log
                            console.log.apply(console, args);

                            // Return
                            return args.length > 1 ? args : args[0]
                        },

                        // Writable
                        writable: True
                    });

                    // Math
                        // Average
                        isFunction(Math.avg) || objectDefProp(Math, 'avg', {
                            // Value
                            value: function avg() {
                                // Return
                                return Math.stat.aMean.apply(Math.stat, [...arguments])
                            },

                            // Writable
                            writable: True
                        });

                        // Invert
                        isFunction(Math.invert) || objectDefProp(Math, 'invert', {
                            // Value
                            value: function invert() {
                                // Error Handling > Return
                                try {
                                    return 1 / arguments[0]
                                }

                                catch (error) {
                                    return 1 / _number(string(arguments[0]))
                                }
                            },

                            // Writable
                            writable: True
                        });

                        // Random > Range
                        isFunction(Math.random.range) || objectDefProp(Math.random, 'range', {
                            // Value
                            value: function range() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = this() * (max(parseFloat(args[0]), parseFloat(args[1])) - min(parseFloat(args[0]), parseFloat(args[1]))) + min(parseFloat(args[0]), parseFloat(args[1]));

                                // Return
                                return +string((data < (max(parseFloat(args[0]), parseFloat(args[1]))) + 1) || max(parseFloat(args[0]), parseFloat(args[1]))).replace('true', string((data > ~-min(parseFloat(args[0]), parseFloat(args[1]))) || min(parseFloat(args[0]), parseFloat(args[1]))).replace('true', data))
                            }
                        });

                        // Range
                        isFunction(Math.range) || objectDefProp(Math, 'range', {
                            // Value
                            value: function range() {
                                // Return
                                return max.apply(window, [...arguments]) - min.apply(window, [...arguments])
                            },

                            // Writable
                            writable: True
                        });

                        // Root
                        isFunction(Math.root) || objectDefProp(Math, 'root', {
                            // Value
                            value: function root() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // Return
                                return Math.pow(parseFloat(args[0]), (1 / parseFloat(args[1])))
                            },

                            // Writable
                            writable: True
                        });

                        // Statistics
                        'stat' in Math || objectDefProp(Math, 'stat', {
                            // Value
                            value: (function() {
                                // Initialization > Data
                                let data = LapysJS.namedObject('MathStatistics');

                                /* Modification > Data
                                        --- NOTE ---
                                            #lapys: Only for non-frequency data.
                                */
                                    // Arithmetic Mean
                                    objectDefProp(data, 'aMean', {
                                        // Value
                                        value: function arithmeticMean() {
                                            // Initialization > (Arguments, Data)
                                            let args = [...arguments],
                                                data = 0;

                                            /* Loop
                                                    [for statement]

                                                > Update > Data
                                            */
                                            for (let i of args)
                                                data += i;

                                            // Return
                                            return data / args.length
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Geometric Mean
                                    objectDefProp(data, 'gMean', {
                                        // Value
                                        value: function geometicMean() {
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
                                            return Math.pow(data, 1 / metadata)
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Harmonic Mean
                                    objectDefProp(data, 'hMean', {
                                        // Value
                                        value: function harmonicMean() {
                                            // Initialization > (Arguments, Data, Metadata)
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

                                        // Writable
                                        writable: True
                                    });

                                    // Mean Absolute Deviation
                                    objectDefProp(data, 'mad', {
                                        // Value
                                        value: function meanAbsoluteDeviation() {
                                            // Initialization > (Arguments, Data, Metadata)
                                            let args = [...arguments],
                                                data = 0,
                                                metadata = this.aMean.apply(this, args);

                                            /* Loop
                                                    [for statement]

                                                > Update > Data
                                            */
                                            for (let i of args)
                                                data += Math.abs(i - metadata);

                                            // Return
                                            return data / args.length
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Median
                                    objectDefProp(data, 'median', {
                                        // Value
                                        value: function median() {
                                            // Initialization > Arguments
                                            let args = [...arguments];

                                            // Return
                                            return args.sort()[parseInt(args.length / 2)]
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Mode
                                    objectDefProp(data, 'mode', {
                                        // Value
                                        value: function mode() {
                                            // Initialization > Data
                                            let data = [...arguments].getCommonElements();

                                            // Return
                                            return data.length > 1 ? data : data[0]
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Skew Coefficient
                                    objectDefProp(data, 'skewCoeff', {
                                        // Value
                                        value: function skewnessCoefficient() {
                                            // Initialization > (Arguments, Target)
                                            let args = [...arguments],
                                                that = this;

                                            // Return
                                            return [(that.aMean.apply(that, args) - that.mode.apply(that, args)) / that.sDev.apply(that, args), (3 * (that.aMean.apply(that, args) - that.median.apply(that, args))) / that.sDev.apply(that, args)]
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Standard Deviation
                                    objectDefProp(data, 'sDev', {
                                        // Value
                                        value: function standardDeviation() {
                                            // Initialization > Target
                                            let that = this;

                                            // Return
                                            return Math.sqrt(that.var.apply(that, [...arguments]))
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Variance
                                    objectDefProp(data, 'var', {
                                        // Value
                                        value: function variance() {
                                            // Initialization > (Arguments, Data, Metadata)
                                            let args = [...arguments],
                                                data = 0,
                                                metadata = this.aMean.apply(this, args);

                                            /* Loop
                                                    [for statement]

                                                > Update > Data
                                            */
                                            for (let i of args)
                                                data += Math.pow(i - metadata, 2);

                                            // Return
                                            return data / ~-args.length
                                        },

                                        // Writable
                                        writable: True
                                    });

                                    // Variation Coefficient
                                    objectDefProp(data, 'varCoeff', {
                                        // Value
                                        value: function variationCoefficient() {
                                            // Initialization > (Arguments, Target)
                                            let args = [...arguments],
                                                that = this;

                                            // Return
                                            return (that.var.apply(that, args) / that.aMean.apply(that, args)) * 100
                                        },

                                        // Writable
                                        writable: True
                                    });

                                // Return
                                return data
                            })(),

                            // Writable
                            writable: True
                        });

                    // Maximum
                    isFunction(_tmp.max) || objectDefProp(_tmp, 'max', {
                        // Value
                        value: function maximum() {
                            // Initialization > (Arguments, Result)
                            let args = [...arguments],
                                result = args[0];

                            /* Logic
                                    [if:else if:else statement]
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
                                    if ((isNaN(data) && typeof data == 'number') || isNonConstructable(data) || typeof data == 'symbol')
                                        metadata = 0;

                                    else if (isArrayLike(data) || isObject(data))
                                        metadata = 'length' in data ? data.length : objectKeys(data).length;

                                    else if (isBoolean(data))
                                        metadata = data ? 1: 0;

                                    else if (isFunction(data) || typeof data == 'string')
                                        metadata = 'length' in object(data) ? data.length : data();

                                    else if (data.constructor == regExp)
                                        metadata = data.source.length;

                                    else if (!isFinite(data))
                                        return infinity;

                                    else
                                        metadata = _numberParseNumber(data);

                                    // Return
                                    return _numberParseNumber(metadata)
                                }

                                /* Loop
                                        Index Arguments.

                                    > Update > Result
                                */
                                for (let i of args)
                                    (test(i) < -~test(result)) || (result = i);

                                // Return
                                return test(result)
                            }

                            // Return
                            return 0
                        }
                    });

                    // Maximum (Get) Object
                    isFunction(_tmp.maxg) || objectDefProp(_tmp, 'maxg', {
                        // Value
                        value: function maximumObject() {
                            // Initialization > (Arguments, Result)
                            let args = [...arguments],
                                result = args[0];

                            /* Logic
                                    [if:else if:else statement]
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
                                    if ((isNaN(data) && typeof data == 'number') || isNonConstructable(data) || typeof data == 'symbol')
                                        metadata = 0;

                                    else if (isArrayLike(data) || isObject(data))
                                        metadata = 'length' in data ? data.length : objectKeys(data).length;

                                    else if (isBoolean(data))
                                        metadata = data ? 1: 0;

                                    else if (isFunction(data) || typeof data == 'string')
                                        metadata = 'length' in object(data) ? data.length : data();

                                    else if (data.constructor == regExp)
                                        metadata = data.source.length;

                                    else if (!isFinite(data))
                                        return infinity;

                                    else
                                        metadata = _numberParseNumber(data);

                                    // Return
                                    return _numberParseNumber(metadata)
                                }

                                /* Loop
                                        Index Arguments.

                                    > Update > Result
                                */
                                for (let i of args)
                                    (test(i) < -~test(result)) || (result = i);

                                // Return
                                return result
                            }

                            // Return
                            return 0
                        }
                    });

                    // Minimum
                    isFunction(_tmp.min) || objectDefProp(_tmp, 'min', {
                        // Value
                        value: function minimum() {
                            // Initialization > (Arguments, Result)
                            let args = [...arguments],
                                result = args[0];

                            /* Logic
                                    [if:else if:else statement]
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
                                    if ((isNaN(data) && typeof data == 'number') || isNonConstructable(data) || typeof data == 'symbol')
                                        metadata = 0;

                                    else if (isArrayLike(data) || isObject(data))
                                        metadata = 'length' in data ? data.length : objectKeys(data).length;

                                    else if (isBoolean(data))
                                        metadata = data ? 1: 0;

                                    else if (isFunction(data) || typeof data == 'string')
                                        metadata = 'length' in object(data) ? data.length : data();

                                    else if (data.constructor == regExp)
                                        metadata = data.source.length;

                                    else if (!isFinite(data))
                                        return infinity;

                                    else
                                        metadata = _numberParseNumber(data);

                                    // Return
                                    return _numberParseNumber(metadata)
                                }

                                /* Loop
                                        Index Arguments.

                                    > Update > Result
                                */
                                for (let i of args)
                                    (test(i) > ~-test(result)) || (result = i);

                                // Return
                                return test(result)
                            }

                            // Return
                            return 0
                        }
                    });

                    // Minimum (Get) Object
                    isFunction(_tmp.ming) || objectDefProp(_tmp, 'ming', {
                        // Value
                        value: function minimumObject() {
                            // Initialization > (Arguments, Result)
                            let args = [...arguments],
                                result = args[0];

                            /* Logic
                                    [if:else if:else statement]
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
                                    if ((isNaN(data) && typeof data == 'number') || isNonConstructable(data) || typeof data == 'symbol')
                                        metadata = 0;

                                    else if (isArrayLike(data) || isObject(data))
                                        metadata = 'length' in data ? data.length : objectKeys(data).length;

                                    else if (isBoolean(data))
                                        metadata = data ? 1: 0;

                                    else if (isFunction(data) || typeof data == 'string')
                                        metadata = 'length' in object(data) ? data.length : data();

                                    else if (data.constructor == regExp)
                                        metadata = data.source.length;

                                    else if (!isFinite(data))
                                        return infinity;

                                    else
                                        metadata = _numberParseNumber(data);

                                    // Return
                                    return _numberParseNumber(metadata)
                                }

                                /* Loop
                                        Index Arguments.

                                    > Update > Result
                                */
                                for (let i of args)
                                    (test(i) > ~-test(result)) || (result = i);

                                // Return
                                return result
                            }

                            // Return
                            return 0
                        }
                    });

                    // Named Array
                    isFunction(_tmp.namedArray) || objectDefProp(_tmp, 'namedArray', {
                        // Value
                        value: function namedArray() {
                            // Return
                            return LapysJS.namedArray.apply(LapysJS, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Named Object
                    isFunction(_tmp.namedObject) || objectDefProp(_tmp, 'namedObject', {
                        // Value
                        value: function namedObject() {
                            // Return
                            return LapysJS.namedObject.apply(LapysJS, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Number
                    isFunction(_tmp.number) || objectDefProp(_tmp, 'number', {
                        // Value
                        value: function Number() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return parseNumber.apply(Number, [...arguments])
                                }),
                                metadata = 0;

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                metadata += (function() {
                                    // Initialization > Alpha
                                    let alpha = i;

                                    // Update > alpha
                                    typeof data(alpha) == 'number' ? alpha = data(alpha) : alpha = bool(alpha);

                                    // Return
                                    return alpha
                                })();

                            // Return
                            return args.length > 0 ? metadata : Default.number
                        }
                    });
                        // Definition
                        isFunction(_tmp.num) || objectDefProp(_tmp, 'num', {
                            // Value
                            value: function Number() {
                                // Return
                                return number.apply(window, [...arguments])
                            },

                            // Writable
                            writable: True
                        });

                    // Object
                    isFunction(_tmp.object) || objectDefProp(_tmp, 'object', {
                        // Value
                        value: function Object() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return object.apply(window, [...arguments])
                                }),
                                metadata = {};

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                metadata = objectAssign(metadata, (function() {
                                    // Initialization > Alpha
                                    let alpha = i;

                                    // Update > Alpha
                                    alpha = data(alpha);

                                    // Return
                                    return alpha
                                })());

                            // Return
                            return args.length > 0 ? metadata : Default.object
                        }
                    });
                        // Definition
                        isFunction(_tmp.obj) || objectDefProp(_tmp, 'obj', {
                            // Value
                            value: function Object() {
                                // Return
                                return window.object.apply(window, [...arguments])
                            },

                            // Writable
                            writable: True
                        });

                    // On DOM Change
                    isFunction(_tmp.onDOMChange) || objectDefProp(_tmp, 'onDOMChange', {
                        // Value
                        value: function onDOMChange() {
                            // Return
                            return onNodeChange.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Element Added
                    isFunction(_tmp.onDOMElementAdded) || objectDefProp(_tmp, 'onDOMElementAdded', {
                        // Value
                        value: function onDOMElementAdded() {
                            // Return
                            return onNodeElementAdded.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Element Count Change
                    isFunction(_tmp.onDOMElementCountChange) || objectDefProp(_tmp, 'onDOMElementCountChange', {
                        // Value
                        value: function onDOMElementCountChange() {
                            // Return
                            return onNodeElementCountChange.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Element Removed
                    isFunction(_tmp.onDOMElementRemoved) || objectDefProp(_tmp, 'onDOMElementRemoved', {
                        // Value
                        value: function onDOMElementRemoved() {
                            // Return
                            return onNodeElementRemoved.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Node Added
                    isFunction(_tmp.onDOMNodeAdded) || objectDefProp(_tmp, 'onDOMNodeAdded', {
                        // Value
                        value: function onDOMNodeAdded() {
                            // Return
                            return onNodeAdded.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Node Count Change
                    isFunction(_tmp.onDOMNodeCountChange) || objectDefProp(_tmp, 'onDOMNodeCountChange', {
                        // Value
                        value: function onDOMNodeCountChange() {
                            // Return
                            return onNodeCountChange.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Node Removed
                    isFunction(_tmp.onDOMNodeRemoved) || objectDefProp(_tmp, 'onDOMNodeRemoved', {
                        // Value
                        value: function onDOMNodeRemoved() {
                            // Return
                            return onNodeRemoved.apply(window, [document.documentElement].concat([...arguments]))
                        }
                    });

                    // On DOM Ready
                    isFunction(_tmp.onDOMReady) || objectDefProp(_tmp, 'onDOMReady', {
                        // Value
                        value: function onDOMReady() {
                            // Initialization > (Arguments, Data, Metadata, Alpha, Beta)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                alpha = False,
                                beta = True;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isFunction(data) && typeof data != 'string')
                                    throw this.error(data, 'not', ['evaluation string', 'function']);

                                // Update > Data
                                (typeof data != 'string') || (data = func(data));

                                // Function
                                    // Main
                                    function main() {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (beta) {
                                            // Update > Alpha
                                            alpha = True;

                                            // Data
                                            data.apply(document, [objectAssign(LapysJS.customEvent('DOMReady'), {
                                                // Current Target
                                                currentTarget: document,

                                                // Path
                                                path: [document, window],

                                                // Source Element
                                                srcElement: document.documentElement,

                                                // Target
                                                target: document
                                            })].concat(args.slice(2)));

                                            // Event > Document > (DOM Content Loaded | Ready State Change)
                                            typeof addEventListener == 'function' ? document.removeEventListener('DOMContentLoaded', ready) : document.detachEvent('onreadystatechange', ready);

                                            // Update > Beta
                                            beta = False
                                        }
                                    }

                                    // Ready
                                    function ready() {
                                        // Set Timeout | Main
                                        args.length > 1 ? setTimeout(main, metadata) : main()
                                    }

                                    // Test
                                    function test() {
                                        // Return
                                        return document.readyState == 'complete'
                                    }

                                // Ready | (Event > Document > (DOM Content Loaded | Ready State Change))
                                test() ? ready() : (typeof addEventListener == 'function' ? document.addEventListener('DOMContentLoaded', ready) : document.attachEvent('onreadystatechange', main))

                                // Check
                                check(test, function() {
                                    // Ready
                                    alpha || ready()
                                })
                            }
                        }
                    });

                    // On Node Added
                    isFunction(_tmp.onNodeAdded) || objectDefProp(_tmp, 'onNodeAdded', {
                        // Value
                        value: function onNodeAdded() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Function > Get Child Nodes
                                function getChildNodes() {
                                    // Initialization > (Data, Metadata)
                                    let data = arguments[0],
                                        metadata = [];

                                    /* Loop
                                            [for:of statement]

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data.childNodes))
                                        metadata.push(i);

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of toArray(data.querySelectorAll('*')))
                                        /* Loop
                                                [for:of statement]

                                            > Update > Metadata
                                        */
                                        for (let j of toArray(i.childNodes))
                                            (metadata.indexOf(j) > -1) || metadata.push(j);

                                    // Return
                                    return metadata
                                }

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeAdded() {
                                            // Metadata
                                            (beta > ~-getChildNodes(data).length) || metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAdded'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                            // Update > Beta
                                            (beta == getChildNodes(data).length) || (beta = getChildNodes(data).length)
                                        }),
                                            beta = getChildNodes(data).length;

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Child Nodes Length
                                        childNodesLength: getChildNodes(data).length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAdded'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        // Initialize
                                        (alpha.childNodesLength > ~-getChildNodes(data).length) || init();

                                        // Update > Alpha > Child Nodes Length
                                        (alpha.childNodesLength == getChildNodes(data).length) || (alpha.childNodesLength = getChildNodes(data).length)

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Attribute Added
                    isFunction(_tmp.onNodeAttributeAdded) || objectDefProp(_tmp, 'onNodeAttributeAdded', {
                        // Value
                        value: function onNodeAttributeAdded() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeAttributeAdded() {
                                            // Metadata
                                            (beta > ~-data.attributes.length) || metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributeAdded'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                            // Update > Alpha > Attributes Length
                                            (beta == data.attributes.length) || (beta = data.attributes.length)
                                        }),
                                            beta = data.attributes.length;

                                        // Alpha > Observe
                                        alpha.observe(data, {attributes: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Attributes Length
                                        attributesLength: data.attributes.length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributeAdded'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        // Initialize
                                        (alpha.attributesLength > ~-data.attributes.length) || init();

                                        // Update > Alpha > Attributes Length
                                        (alpha.attributesLength == data.attributes.length) || (alpha.attributesLength = data.attributes.length)

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Attributes Change
                    isFunction(_tmp.onNodeAttributesChange) || objectDefProp(_tmp, 'onNodeAttributesChange', {
                        // Value
                        value: function onNodeAttributesChange() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeAttributesChange() {
                                            // Metadata
                                            metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributesChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                        });

                                        // Alpha > Observe
                                        alpha.observe(data, {attributes: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Attributes
                                        attributes: getAttributes(data)
                                    };

                                    // Function
                                        // Get Attributes
                                        function getAttributes() {
                                            // Initialization > (Data, Metadata)
                                            let data = arguments[0],
                                                metadata = '';

                                            /* Loop
                                                    [for:of statement]

                                                > Update > Metadata
                                            */
                                            for (let i of data.attributes)
                                                metadata += i.name + "='" + i.value + "' ";

                                            // Return
                                            return metadata.trim()
                                        }

                                        // Initialization
                                        function init() {
                                            // Metadata
                                            metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributesChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                        }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha.attributes != getAttributes(data)) {
                                            // Initialize
                                            init();

                                            // Update > Alpha > Attributes
                                            alpha.attributes = getAttributes(data)
                                        }

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Attributes Count Change
                    isFunction(_tmp.onNodeAttributeCountChange) || objectDefProp(_tmp, 'onNodeAttributeCountChange', {
                        // Value
                        value: function onNodeAttributeCountChange() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeAttributeCountChange() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (beta != data.attributes.length) {
                                                // Metadata
                                                metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributeCountChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                                // Update > Beta
                                                beta = data.attributes.length
                                            }
                                        }),
                                            beta = data.attributes.length;

                                        // Alpha > Observe
                                        alpha.observe(data, {attributes: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Attributes Length
                                        attributesLength: data.attributes.length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributeCountChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha.attributesLength != data.attributes.length) {
                                            // Initialize
                                            init();

                                            // Update > Alpha > Attributes Length
                                            alpha.attributesLength = data.attributes.length
                                        }

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Attribute Removed
                    isFunction(_tmp.onNodeAttributeRemoved) || objectDefProp(_tmp, 'onNodeAttributeRemoved', {
                        // Value
                        value: function onNodeAttributeRemoved() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1]
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeAttributeRemoved() {
                                            // Metadata
                                            (beta < -~data.attributes.length) || metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributeRemoved'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                            // Update > Alpha > Attributes Length
                                            (beta == data.attributes.length) || (beta = data.attributes.length)
                                        }),
                                            beta = data.attributes.length;

                                        // Alpha > Observe
                                        alpha.observe(data, {attributes: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Attributes Length
                                        attributesLength: data.attributes.length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeAttributeRemoved'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        // Initialize
                                        (alpha.attributesLength < -~data.attributes.length) || init();

                                        // Update > Alpha > Attributes Length
                                        (alpha.attributesLength == data.attributes.length) || (alpha.attributesLength = data.attributes.length)

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Change
                    isFunction(_tmp.onNodeChange) || objectDefProp(_tmp, 'onNodeChange', {
                        // Value
                        value: function onNodeChange() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeChange() {
                                            // Metadata
                                            metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                        });

                                        // Alpha > Observe
                                        alpha.observe(data, {attributes: True, childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Outer HTML
                                        outerHTML: data.outerHTML
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha.outerHTML != data.outerHTML) {
                                            // Initialize
                                            init();

                                            // Update > Alpha > Outer HTML
                                            alpha.outerHTML = data.outerHTML
                                        }

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Count Change
                    isFunction(_tmp.onNodeCountChange) || objectDefProp(_tmp, 'onNodeCountChange', {
                        // Value
                        value: function onNodeCountChange() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Function > Get Child Nodes
                                function getChildNodes() {
                                    // Initialization > (Data, Metadata)
                                    let data = arguments[0],
                                        metadata = [];

                                    /* Loop
                                            [for:of statement]

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data.childNodes))
                                        metadata.push(i);

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of toArray(data.querySelectorAll('*')))
                                        /* Loop
                                                [for:of statement]

                                            > Update > Metadata
                                        */
                                        for (let j of toArray(i.childNodes))
                                            (metadata.indexOf(j) > -1) || metadata.push(j);

                                    // Return
                                    return metadata
                                }

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeCountChange() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (beta != getChildNodes(data).length) {
                                                // Metadata
                                                metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeCountChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                                // Update > Beta
                                                beta = getChildNodes(data).length
                                            }
                                        }),
                                            beta = getChildNodes(data).length;

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Child Nodes Length
                                        childNodesLength: getChildNodes(data).length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeCountChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha.childNodesLength != getChildNodes(data).length) {
                                            // Initialize
                                            init();

                                            // Update > Alpha > Attributes Length
                                            alpha.childNodesLength = getChildNodes(data).length
                                        }

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Element Added
                    isFunction(_tmp.onNodeElementAdded) || objectDefProp(_tmp, 'onNodeElementAdded', {
                        // Value
                        value: function onNodeElementAdded() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Function > Get Children
                                function getChildren() {
                                    // Initialization > (Data, Metadata)
                                    let data = arguments[0],
                                        metadata = [];

                                    /* Loop
                                            [for:of statement]

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data.children))
                                        metadata.push(i);

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of toArray(data.querySelectorAll('*')))
                                        /* Loop
                                                [for:of statement]

                                            > Update > Metadata
                                        */
                                        for (let j of toArray(i.children))
                                            (metadata.indexOf(j) > -1) || metadata.push(j);

                                    // Return
                                    return metadata
                                }

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeElementAdded() {
                                            // Metadata
                                            (beta > ~-getChildren(data).length) || metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeElementAdded'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                            // Update > Beta
                                            (beta == getChildren(data).length) || (beta = getChildren(data).length)
                                        }),
                                            beta = getChildren(data).length;

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Children Length
                                        childrenLength: getChildren(data).length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeElementAdded'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        // Initialize
                                        (alpha.childrenLength > ~-getChildren(data).length) || init();

                                        // Update > Alpha > Children Length
                                        (alpha.childrenLength == getChildren(data).length) || (alpha.childrenLength = getChildren(data).length)

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Element Count Change
                    isFunction(_tmp.onNodeElementCountChange) || objectDefProp(_tmp, 'onNodeElementCountChange', {
                        // Value
                        value: function onNodeElementCountChange() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Function > Get Children
                                function getChildren() {
                                    // Return
                                    return toArray(arguments[0].querySelectorAll('*'))
                                }

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeElementCountChange() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (beta != getChildren(data).length) {
                                                // Metadata
                                                metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeElementCountChange'), {
                                                    // Current Target
                                                    currentTarget: data,

                                                    // Path
                                                    path: data.parentPath,

                                                    // Source Element
                                                    srcElement: data,

                                                    // Target
                                                    target: data
                                                })].concat(args.slice(2)));

                                                // Update > Beta
                                                beta = getChildren(data).length
                                            }
                                        }),
                                            beta = getChildren(data).length;

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Children Length
                                        childrenLength: getChildren(data).length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeElementCountChange'), {
                                            // Current Target
                                            currentTarget: data,

                                            // Path
                                            path: data.parentPath,

                                            // Source Element
                                            srcElement: data,

                                            // Target
                                            target: data
                                        })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha.childrenLength != getChildren(data).length) {
                                            // Initialize
                                            init();

                                            // Update > Alpha > Attributes Length
                                            alpha.childrenLength = getChildren(data).length
                                        }

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Element Removed
                    isFunction(_tmp.onNodeElementRemoved) || objectDefProp(_tmp, 'onNodeElementRemoved', {
                        // Value
                        value: function onNodeElementRemoved() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Function > Get Children
                                function getChildren() {
                                    // Initialization > (Data, Metadata)
                                    let data = arguments[0],
                                        metadata = [];

                                    /* Loop
                                            [for:of statement]

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data.children))
                                        metadata.push(i);

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of toArray(data.querySelectorAll('*')))
                                        /* Loop
                                                [for:of statement]

                                            > Update > Metadata
                                        */
                                        for (let j of toArray(i.children))
                                            (metadata.indexOf(j) > -1) || metadata.push(j);

                                    // Return
                                    return metadata
                                }

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeElementRemoved() {
                                            // Metadata
                                            (beta < -~getChildren(data).length) || metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeElementRemoved'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                            // Update > Beta
                                            (beta == getChildren(data).length) || (beta = getChildren(data).length)
                                        }),
                                            beta = getChildren(data).length;

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Children Length
                                        childrenLength: getChildren(data).length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeElementRemoved'), {
                                            // Current Target
                                            currentTarget: data,

                                            // Path
                                            path: data.parentPath,

                                            // Source Element
                                            srcElement: data,

                                            // Target
                                            target: data
                                        })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        // Initialize
                                        (alpha.childrenLength < -~getChildren(data).length) || init();

                                        // Update > Alpha > Children Length
                                        (alpha.childrenLength == getChildren(data).length) || (alpha.childrenLength = getChildren(data).length)

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Inner HTML Change
                    isFunction(_tmp.onNodeInnerHTMLChange) || objectDefProp(_tmp, 'onNodeInnerHTMLChange', {
                        // Value
                        value: function onNodeInnerHTMLChange() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeInnerHTMLChange() {
                                            // Metadata
                                            metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeInnerHTMLChange'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                        });

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Inner HTML
                                        innerHTML: data.innerHTML
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeInnerHTMLChange'), {
                                            // Current Target
                                            currentTarget: data,

                                            // Path
                                            path: data.parentPath,

                                            // Source Element
                                            srcElement: data,

                                            // Target
                                            target: data
                                        })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha.innerHTML != data.innerHTML) {
                                            // Initialize
                                            init();

                                            // Update > Alpha > Inner HTML
                                            alpha.innerHTML = data.innerHTML
                                        }

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // On Node Removed
                    isFunction(_tmp.onNodeRemoved) || objectDefProp(_tmp, 'onNodeRemoved', {
                        // Value
                        value: function onNodeRemoved() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                else if (!isFunction(metadata) && typeof metadata != 'string')
                                    throw LapysJS.error(metadata, 'not', ['evaluation string', 'function']);

                                // Update > Metadata
                                (typeof metadata != 'string') || (metadata = func(metadata));

                                // Function > Get Child Nodes
                                function getChildNodes() {
                                    // Initialization > (Data, Metadata)
                                    let data = arguments[0],
                                        metadata = [];

                                    /* Loop
                                            [for:of statement]

                                        > Update > Metadata
                                    */
                                    for (let i of toArray(data.childNodes))
                                        metadata.push(i);

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of toArray(data.querySelectorAll('*')))
                                        /* Loop
                                                [for:of statement]

                                            > Update > Metadata
                                        */
                                        for (let j of toArray(i.childNodes))
                                            (metadata.indexOf(j) > -1) || metadata.push(j);

                                    // Return
                                    return metadata
                                }

                                // Error Handling
                                try {
                                    // Mutation Observer
                                    MutationObserver;

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function() {
                                        // Initialization > Alpha
                                        let alpha = new MutationObserver(function onNodeRemoved() {
                                            // Metadata
                                            (beta < -~getChildNodes(data).length) || metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeRemoved'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)));

                                            // Update > Beta
                                            (beta == getChildNodes(data).length) || (beta = getChildNodes(data).length)
                                        }),
                                            beta = getChildNodes(data).length;

                                        // Alpha > Observe
                                        alpha.observe(data, {childList: True, outerHTML: True, subtree: True});

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Alpha > Disconnect
                                            alpha.disconnect()
                                        })
                                    })
                                }

                                catch (error) {
                                    // Initialization > Alpha
                                    let alpha = {
                                        // Child Nodes Length
                                        childNodesLength: getChildNodes(data).length
                                    };

                                    // Function > Initialization
                                    function init() {
                                        // Metadata
                                        metadata.apply(that === window ? document : data, [objectAssign(LapysJS.customEvent('nodeRemoved'), {
                                                // Current Target
                                                currentTarget: data,

                                                // Path
                                                path: data.parentPath,

                                                // Source Element
                                                srcElement: data,

                                                // Target
                                                target: data
                                            })].concat(args.slice(2)))
                                    }

                                    // Check
                                    check(function() {
                                        // Return
                                        return data
                                    }, function main() {
                                        // Initialization > Beta
                                        let beta = False;

                                        // Initialize
                                        (alpha.childNodesLength < -~getChildNodes(data).length) || init();

                                        // Update > Alpha > Child Nodes Length
                                        (alpha.childNodesLength == getChildNodes(data).length) || (alpha.childNodesLength = getChildNodes(data).length)

                                        // Check
                                        check(function() {
                                            // Return
                                            return !data
                                        }, function() {
                                            // Update > Beta
                                            beta = True
                                        });

                                        // Request Animation Frame
                                        beta || requestAnimationFrame(main)
                                    })
                                }
                            }
                        }
                    });

                    // Overload
                    isFunction(_tmp.overload) || objectDefProp(_tmp, 'overload', {
                        // Value
                        value: function overload() {
                            /* Loop
                                    [for statement]

                                > Continue
                            */
                            for (;True;)
                                continue
                        },

                        // Writable
                        writable: True
                    });

                    // Parse Measurement
                    isFunction(_tmp.parseMeasurement) || objectDefProp(_tmp, 'parseMeasurement', {
                        // Value
                        value: function parseMeasurement() {
                            // Return
                            return _number.parseMeasurement.apply(_number, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Parse Number
                    isFunction(_tmp.parseNumber) || objectDefProp(_tmp, 'parseNumber', {
                        // Value
                        value: function parseNumber() {
                            // Return
                            return _number.parseNumber.apply(_number, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Paste
                    isFunction(_tmp.paste) || objectDefProp(_tmp, 'paste', {
                        // Value
                        value: function paste() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = args[0];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (docQueryComEnabled('paste') && docQueryComSupported('paste')) {
                                    // Initialization > (Metadata, Alpha)
                                    let metadata = document.designMode,
                                        alpha = string((window.clipboardData || {getData: function() {}}).getData('Text') || CLIPBOARD);

                                    // Modification > Data > (Value | Inner HTML)
                                    !isElement(data) || ('value' in data ? data.value = alpha : data.innerHTML = alpha);

                                    // Modification > Document > Design Mode
                                    document.designMode = metadata
                                }

                                else
                                    // Error
                                    throw LapysJS.error("Query command 'paste' can not be executed.");

                            // Return
                            return arguments[0]
                        }
                    });

                    // Penultimate Element Child
                        // Update > Temporary Data
                        _tmp = function penultimateElementChild() {
                            // Initialization > Data
                            let data = (isWindow(this) ? document : this).children;

                            // Return
                            return data[data.length - 2] || Null
                        };

                        // Initialization
                        isFunction(window.$n1) || objectDefProp(window, '$n1', {
                            // Configurable
                            configurable: True,

                            // Get
                            get: _tmp
                        });

                        // Definition
                        isFunction(docProto.$n1) || objectDefProp(docProto, '$n1', {configurable: True, get: _tmp});
                        isFunction(docFragProto.$n1) || objectDefProp(docFragProto, '$n1', {configurable: True, get: _tmp});
                        isFunction(eleProto.$n1) || objectDefProp(eleProto, '$n1', {configurable: True, get: _tmp});
                        isFunction(_tmp.$N1) || objectDefProp(_tmp, '$N1', {value: $n1, writable: True});
                        isFunction(docProto.$N1) || objectDefProp(docProto, '$N1', {value: $n1, writable: True});
                        isFunction(docFragProto.$N1) || objectDefProp(docFragProto, '$N1', {value: $n1, writable: True});
                        isFunction(eleProto.$N1) || objectDefProp(eleProto, '$N1', {value: $n1, writable: True});

                        // Update > Temporary Data
                        _tmp = window;

                    // Power
                    isFunction(_tmp.pow) || objectDefProp(_tmp, 'pow', {
                        // Value
                        value: function pow() {
                            // Return
                            return Math.pow.apply(Math, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Query Indexer
                    isFunction(_tmp.$x) || objectDefProp(_tmp, '$x', {
                        // Value
                        value: function LapysJSQueryIndexer() {
                            // Error Handling
                            try {
                                // Return
                                return (this.constructor == Window ? document : this).children[arguments[0]] || Null
                            }

                            catch (error) {
                                // LapysJS > Error
                                LapysJS.error(error)
                            }
                        }
                    });
                        // Definition
                        isFunction(docProto.$x) || objectDefProp(docProto, '$x', {value: $x});
                        isFunction(docFragProto.$x) || objectDefProp(docFragProto, '$x', {value: $x});
                        isFunction(eleProto.$x) || objectDefProp(eleProto, '$x', {value: $x});
                        isFunction(_tmp.$X) || objectDefProp(_tmp, '$X', {value: $c, writable: True});
                        isFunction(docProto.$X) || objectDefProp(docProto, '$X', {value: $c, writable: True});
                        isFunction(docFragProto.$X) || objectDefProp(docFragProto, '$X', {value: $c, writable: True});
                        isFunction(eleProto.$X) || objectDefProp(eleProto, '$X', {value: $c, writable: True});

                    // Query Selector
                    isFunction(_tmp.$$) || objectDefProp(_tmp, '$$', {
                        // Value
                        value: function LapysJSQuerySelector() {
                            // Initialization > (Arguments, Arguments Length, Data, Metadata, Target)
                            let args = [...arguments],
                                argsLength = args.length,
                                data = string(args[0]),
                                metadata = typeof args[1] == 'number' ? parseInt(args[1]) : string(args[1]),
                                that = isWindow(this) ? document : (this.constructor == docFrag ? (this.querySelector('head + body') || this.children[0]) : this) || document,
                                _that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (_that.constructor == docFrag) {
                                    // Insertion
                                    _that.appendChild(docCreateElement('lapysjs-element'));

                                    // Initialization > Sigma
                                    let sigma = _that.lastElementChild;

                                    /* Loop
                                            [do:while statement]

                                        > Insertion
                                    */
                                    while (_that.children.length > 1)
                                        sigma.appendChild(_that.children[0]);

                                    // Update > Target
                                    that = sigma;

                                    // Set Timeout
                                    setTimeout(function() {
                                        /* Loop
                                                [do:while statement]

                                            > Insertion
                                        */
                                        while (sigma.children[0])
                                            _that.appendChild(sigma.children[0]);

                                        // Deletion
                                        sigma.remove()
                                    })
                                }

                                // Function
                                    // Result
                                    function result() {
                                        // Initialization > Arguments
                                        let args = [...arguments];

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (args[2].trim() == '*')
                                            /* Logic
                                                    [switch:case:default statement]
                                            */
                                            switch (args[1]) {
                                                // Get Elements By Class Name
                                                case 'getElementsByClassName':
                                                    (function() {
                                                        // Update > (Arguments (1, 2))
                                                        args[1] = 'querySelectorAll';
                                                        args[2] = '[class'
                                                    })();
                                                    break;

                                                // Get Element By ID
                                                case 'getElementById':
                                                    (function() {
                                                        // Update > (Arguments (1, 2))
                                                        args[1] = 'querySelectorAll';
                                                        args[2] = '[id'
                                                    })()
                                            }

                                        // Initialization > Data
                                        let data = (function() {
                                            // Initialization > Data
                                            let data = args[0][args[1]](args[2]);

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (data) {
                                                // Update > Data
                                                isArrayLike(data) || (data = toArray(data));

                                                /* Logic
                                                        [switch:case:default statement]

                                                    > Return
                                                */
                                                switch (args[3]) {
                                                    // Array
                                                    case 'array':
                                                        return data;
                                                        break;

                                                    // Length
                                                    case 'length':
                                                        return data.length;
                                                        break;

                                                    // (Decremented) Length
                                                    case '~length':
                                                        return ~-data.length
                                                }

                                                /* Logic
                                                        [if:else if:else statement]

                                                    > Return
                                                */
                                                if (typeof args[3] == 'number')
                                                    return data[args[3]];

                                                else if (args[3] == 'numeral' && typeof args[4] == 'number')
                                                    return data[args[4]];

                                                // Return
                                                return data.length > 1 ? data : data[0]
                                            }
                                        })();

                                        // Update > Data
                                        !(data !== 0 && !data) || (data = Null);

                                        // Return
                                        return data
                                    }

                                    // Test
                                    function test() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = arguments[1];

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (typeof metadata == 'string')
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (metadata) {
                                                // Array
                                                case 'array':
                                                    return data;
                                                    break;

                                                // Length
                                                case 'length':
                                                    return data.length;
                                                    break;

                                                // (Decremented) Length
                                                case '~length':
                                                    return ~-data.length
                                            }

                                        else if (typeof metadata == 'number')
                                            // Return
                                            return data[metadata];

                                        // Return
                                        return data
                                    }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (argsLength > 0 && typeof that.querySelector == 'function') {
                                    // Initialization > Alpha
                                    let alpha = 'querySelectorAll';

                                    /* Logic
                                            [if:else if:else statement]

                                        > Update > Alpha
                                    */
                                    if (metadata == 'c' || metadata == 'class')
                                        alpha = 'getElementsByClassName';

                                    else if (metadata == 'i' || metadata == 'id')
                                        alpha = 'getElementById';

                                    else if (metadata == 't' || metadata == 'tag-name')
                                        alpha = 'getElementsByTagName';

                                    // Update > Metadata
                                    (alpha == 'querySelectorAll') || (args.length > 2 ? (metadata = typeof args[2] == 'number' ? parseInt(args[2]) : string(args[2])) : metadata = Null);

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (argsLength == 2 || argsLength == 3)
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (typeof metadata == 'number')
                                            return result(that, alpha, data, 'numeral', metadata);

                                        else
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (metadata) {
                                                // Array
                                                case 'array':
                                                    return result(that, alpha, data, 'array');
                                                    break;

                                                // Length
                                                case 'length':
                                                    return result(that, alpha, data, 'length');
                                                    break;

                                                // (Decremented) Length
                                                case '~length':
                                                    return result(that, alpha, data, '~length')
                                            }

                                    /* Logic
                                            [if:else if:else statement]

                                        > Return
                                    */
                                    if (argsLength == 1 || alpha != 'querySelectorAll' || metadata == Null)
                                        return result(that, alpha, data, 'default');

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (metadata.trim().startsWith('attr') && metadata.trim().slice('attr'.length).trim()[0].hasChar(/\*|=/)) {
                                        // Initialization > (Beta, Delta, Gamma)
                                        let beta = metadata.trim().getAfterChar(/\*|=/).trimLeftChar('=').trim(),
                                            delta = metadata.trim().getBeforeChar(/\*|=/),
                                            gamma = typeof args[2] == 'number' ? parseInt(args[2]) : string(args[2]);

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (beta == '*') {
                                            // Initialization > (Epsilon, Upsilon, Omega)
                                            let epsilon = [],
                                                upsilon = [...document.getElementsByTagName('*')],
                                                omega = [...document.querySelectorAll(data)];

                                            /* Loop
                                                    Index Upsilon.

                                                > Update > Epsilon
                                            */
                                            for (let i of upsilon)
                                                !i.attributes.length || (omega.indexOf(i) < 0) || epsilon.push(i);

                                            // Return
                                            return test(epsilon.length > 1 ? epsilon : epsilon[0], args[2])
                                        }

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (data.trim() == '*')
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (beta) {
                                                // Class
                                                case 'class':
                                                    return result(that, 'getElementsByClassName', data, gamma);
                                                    break;

                                                // ID
                                                case 'id':
                                                    return result(that, 'getElementById', data, gamma);
                                                    break;

                                                // [Default]
                                                default:
                                                    return result(that, alpha, '[' + beta, gamma)
                                            }

                                        // Update > Data
                                        (data.trim() != '\\*') || (data = '*');

                                        // Return
                                        return result(that, alpha, '[' + beta + (metadata.indexOf('*=') > -1 ? '*=' : '=') + "'" + data + "'", gamma)
                                    }
                                }
                            }

                            // Return
                            return Null
                        }
                    });
                        // Definition
                        isFunction(docProto.$$) || objectDefProp(docProto, '$$', {value: $$});
                        isFunction(docFragProto.$$) || objectDefProp(docFragProto, '$$', {value: $$});
                        isFunction(eleProto.$$) || objectDefProp(eleProto, '$$', {value: $$});

                    // Random
                    isFunction(_tmp.rand) || objectDefProp(_tmp, 'rand', {
                        // Value
                        value: function random() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = typeof args[~-args.length] == 'string' ? args.slice(0, -1) : args,
                                metadata = args.length > 1 ? args[~-args.length] : Null,
                                alpha = Math.random();

                            // Function > Test
                            function test() {
                                // Return
                                return data.length > 1 ? Math.random.range(maxg.apply(min, data), ming.apply(min, data)) : Math.random.range(data[0] - 1, -~data[0])
                            };

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (typeof metadata == 'string')
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

                    // Register Element
                    isFunction(_tmp.registerElement) || objectDefProp(_tmp, 'registerElement', {
                        // Value
                        value: function registerElement() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = isArray(args[0]) ? args[0][0] : args[0];

                            // Function > Execute
                            function execute() {
                                // Initialization > Metadata
                                let metadata = arguments[0];

                                // (Custom Elements > Define) | Document > Register Element
                                'define' in (window.customElements || tmp) ?
                                    customElements.define.apply(customElements, metadata) :
                                    (isFunction(document.registerElement) ?
                                        document.registerElement.apply(document, metadata) :
                                        LapysJS.error(data + 'could not be added to the `CustomElementRegistry` because CustomElements are not yet supported in this browser')
                                    )
                            };

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (
                                    !isArray(args[0]) &&
                                    !isArray(args[1])
                                ) {
                                    // Initialization > Argument Set
                                    let argSet = [string(args[0]), args[1] || class HTMLCustomElement extends HTMLElement {}, args[2] || Undefined];

                                    // Update > Argument Set
                                    argSet.addElementToFront.apply(argSet, args.slice(3));

                                    // Execute
                                    execute(argSet)
                                }

                                else if (
                                    isArray(args[0]) &&
                                    isArray(args[1])
                                )
                                    /* Loop
                                            [for statement]
                                    */
                                    for (let i = 0; i < max(args[0], args[1]); i += 1) {
                                        // Initialization > (Argument Set, Metadata, Alpha)
                                        let argSet = [string(args[0][i]), args[1][i] || class HTMLCustomElement extends HTMLElement {}, (args[2] || [])[i]],
                                            metadata = [],
                                            alpha = args.slice(3);

                                        /* Loop
                                                [for statement]
                                        */
                                        for (let j in alpha)
                                            metadata.push(alpha[j][i]);

                                        // Update > Argument Set
                                        argSet.addElementToFront.apply(argSet, metadata);

                                        // Execute
                                        execute(argSet)
                                    }

                                else if (
                                    isArray(args[0]) &&
                                    !isArray(args[1])
                                )
                                    /* Loop
                                            [for statement]
                                    */
                                    for (let i in args[0]) {
                                        // Initialization > Argument Set
                                        let argSet = [string(args[0][i]), args[1] || class HTMLCustomElement extends HTMLElement {}, args[2]];

                                        // Update > Argument Set
                                        argSet.addElementToFront.apply(argSet, args.slice(3));

                                        // Execute
                                        execute(argSet)
                                    }
                            }

                            // Return
                            return !!window.CustomElementRegistry
                        }
                    });

                    // Regular Expression
                    isFunction(_tmp.regex) || objectDefProp(_tmp, 'regex', {
                        // Value
                        value: function RegExp() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return regExp.apply(window, [...arguments])
                                }),
                                metadata = '';

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length > 1)
                                /* Loop
                                        Index Arguments.

                                    > Update > Metadata
                                */
                                for (let i of args.slice(0, -1))
                                    metadata += (function() {
                                        // Initialization > Alpha
                                        let alpha = i;

                                        // Update > Alpha
                                        alpha = str(alpha);

                                        // Return
                                        return alpha
                                    })();

                            else
                                // Update > Metadata
                                metadata = str(args[0]);

                            // Return
                            return args.length > 0 ? data(metadata, args.length > 1 ? args[~-args.length] : '') : Default.regex
                        }
                    });

                    // Release Input
                    isFunction(_tmp.releaseInput) || objectDefProp(_tmp, 'releaseInput', {
                        // Value
                        value: function releaseInput() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                alpha = args.length > 2 ? args[2] : (function() {
                                    // Modification > Data > Value
                                    data.value = data.value.replace((function() {
                                        // Initialization > Data
                                        let data = metadata;

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (data.constructor != regExp && typeof data != 'string')
                                            data = string(isFunction(data) ? data() : data);

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (typeof data == 'string')
                                            data = regExp('[^' + ('\\' + data.replace(/(?:)/g, '\\').slice('\\'.length, -'\\'.length)).replace(/\\./g, '$&|').slice(0, -'|'.length).replace(regExp('[' + LapysJS.escSequenceSet.replace(/(?:)/g, '\\\\').slice(0, -'\\\\'.length) + ']', 'g'), data => {
                                                // Return
                                                return data.replace('\\', '')
                                            }) + ']', 'g');

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (data.constructor == regExp)
                                            data = regExp('[^' + data.source + ']', data.flags.replace('g', '') + 'g');

                                        // Return
                                        return data
                                    })(), '')
                                });

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (data.tagName.toLowerCase() != 'input' && data.tagName.toLowerCase() != 'textarea')
                                    throw LapysJS.error(data, 'not', 'observable element');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (args.length < 2)
                                    throw LapysJS.error('Input to match not given.');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (isNonConstructable(metadata))
                                    throw LapysJS.error(metadata, 'not', 'valid match input');

                                else if (isArrayLike(metadata) || isObject(metadata) || typeof metadata == 'symbol')
                                    throw LapysJS.error(metadata, 'not', ['valid match input']);

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isFunction(alpha) && typeof alpha != 'string')
                                    throw LapysJS.error(alpha, 'not', ['evaluation string', 'function']);

                                // Update > Alpha
                                (typeof alpha != 'string') || (alpha = func(alpha));

                                /* Loop
                                        [for:in statement]
                                */
                                for (let i in LapysJS.perm.strictlyWatchedElements) {
                                    // Initialization > Beta
                                    let beta = LapysJS.perm.strictlyWatchedElements[i];

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (
                                        (
                                            beta.element == data &&
                                            (beta.match.flags == metadata.flags && beta.match.source == metadata.source)
                                        ) || (
                                            string(beta.callback) == string(alpha) &&
                                            beta.element == data &&
                                            (beta.match.flags == metadata.flags && beta.match.source == metadata.source)
                                        )
                                    ) {
                                        // Update > (LapysJS > Permanent Data > Strictly Watched Elements)
                                        LapysJS.perm.strictlyWatchedElements.removeElement(beta);

                                        // Break
                                        break
                                    }
                                }
                            }

                            // Return
                            return isElement(data) ? data : Null
                        }
                    });

                    // Repeat
                    isFunction(_tmp.repeat) || objectDefProp(_tmp, 'repeat', {
                        // Value
                        value: function repeat() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                alpha = args[2];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Update > Data
                                (typeof data != 'string') || (data = func(data));

                                // Initialization > Beta
                                let beta = {index: 0};

                                /* Logic
                                        [if:else if:else statement]

                                    > Modification > Beta > (...)
                                */
                                if (isArray(metadata)) {
                                    beta.limit = (beta.keys = objectKeys(metadata).build(data => {
                                        // Return
                                        return +data
                                    })).length;
                                    beta.values = objectValues(metadata)
                                }

                                else if (isObject(metadata) || isStrictlyArrayLike(metadata)) {
                                    beta.limit = (beta.keys = objectKeys(metadata)).length;
                                    beta.values = objectValues(metadata)
                                }

                                else if (args.length < 2 || !_numberIsFinite(metadata) || _numberIsNaN(metadata)) {
                                    beta.keys = beta.values = [];
                                    beta.limit = _numberMaxValue
                                }

                                else if (metadata === True || isFunction(metadata) || typeof metadata == 'number' || typeof metadata == 'string') {
                                    beta.keys = beta.values = [];
                                    beta.limit = _numberParseNumber(isFunction(metadata) ? metadata() : metadata)
                                }

                                // Modification > Beta > Data
                                beta.data = metadata;

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ('limit' in beta)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (alpha == 'async' || !Number.isSafeInteger(beta.limit))
                                        // Function > Iterate
                                        (function iterate() {
                                            // Data
                                            data(beta.index, beta.limit, beta.data, beta.keys[beta.index], beta.values[beta.index]);

                                            // Request Animation Frame
                                            ((beta.index += 1) > beta.limit - 1) || requestAnimationFrame(iterate)
                                        })();

                                    else if (alpha == 'defer' || Number.isSafeInteger(beta.limit))
                                        /* Loop
                                                [do:while statement]
                                        */
                                        while (beta.index < beta.limit) {
                                            // Data
                                            data(beta.index, beta.limit, beta.data, beta.keys[beta.index], beta.values[beta.index]);

                                            // Update > Beta > Index
                                            beta.index += 1
                                        }
                            }
                        }
                    });

                    // Root
                    isFunction(_tmp.root) || objectDefProp(_tmp, 'root', {
                        // Value
                        value: function root() {
                            // Return
                            return Math.root.apply(Math, [...arguments])
                        },

                        // Writable
                        writable: True
                    });

                    // Second Element Child
                        // Update > Temporary Data
                        _tmp = function secondElementChild() {
                            // Return
                            return (isWindow(this) ? document : this).children[1]
                        };

                        // Initialization
                        isFunction(window.$2) || objectDefProp(window, '$2', {
                            // Configurable
                            configurable: True,

                            // Get
                            get: _tmp
                        });

                        // Definition
                        isFunction(docProto.$2) || objectDefProp(docProto, '$2', {configurable: True, get: _tmp});
                        isFunction(docFragProto.$2) || objectDefProp(docFragProto, '$2', {configurable: True, get: _tmp});
                        isFunction(eleProto.$2) || objectDefProp(eleProto, '$2', {configurable: True, get: _tmp});

                        // Update > Temporary Data
                        _tmp = window;

                    // Select
                    isFunction(_tmp.select) || objectDefProp(_tmp, 'select', {
                        // Value
                        value: function select() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Initialization > Data
                                let data = args[0];

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ((data || tmp).nodeType == 1)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (typeof getSelection == 'function') {
                                        // Initialization > (Metadata, Alpha)
                                        let metadata = docCreateRange(),
                                            alpha = getSelection();

                                        // Metadata > Select Node Contents
                                        metadata.selectNodeContents(data);

                                        // Alpha > (Remove All Ranges, Add Range)
                                        alpha.removeAllRanges();
                                        alpha.addRange(metadata);

                                        // Data > Select
                                        !isFunction(data.select) || data.select();

                                        // Return
                                        return data
                                    }
                            }

                            // Return
                            return Null
                        }
                    });

                    // Square Root
                    isFunction(_tmp.sqrt) || objectDefProp(_tmp, 'sqrt', {
                        // Value
                        value: function sqrt() {
                            // Return
                            return Math.sqrt.apply(Math, [...arguments])
                        }
                    });

                    // Strict Input
                    isFunction(_tmp.strictInput) || objectDefProp(_tmp, 'strictInput', {
                        // Value
                        value: function strictInput() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                alpha = args.length > 2 ? args[2] : (function() {
                                    // Modification > Data > Value
                                    data.value = data.value.replace((function() {
                                        // Initialization > Data
                                        let data = metadata;

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (data.constructor != regExp && typeof data != 'string')
                                            data = string(isFunction(data) ? data() : data);

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (typeof data == 'string')
                                            data = regExp('[^' + ('\\' + data.replace(/(?:)/g, '\\').slice('\\'.length, -'\\'.length)).replace(/\\./g, '$&|').slice(0, -'|'.length).replace(/[\\b\\c\\d\\f\\n\\r\\s\\t\\v\\w\\x\\0]/g, data => {
                                                // Return
                                                return data.replace('\\', '')
                                            }) + ']', 'g');

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (data.constructor == regExp)
                                            data = regExp('[^' + data.source + ']', data.flags.replace('g', '') + 'g');

                                        // Return
                                        return data
                                    })(), '')
                                });

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isElement(data))
                                    throw LapysJS.error(data, 'not', 'element');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (data.tagName.toLowerCase() != 'input' && data.tagName.toLowerCase() != 'textarea')
                                    throw LapysJS.error(data, 'not', 'observable element');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (args.length < 2)
                                    throw LapysJS.error('Input to match not given.');

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (isNonConstructable(metadata))
                                    throw LapysJS.error(metadata, 'not', 'valid match input');

                                else if (isArrayLike(metadata) || isObject(metadata) || typeof metadata == 'symbol')
                                    throw LapysJS.error(metadata, 'not', ['valid match input']);

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isFunction(alpha) && typeof alpha != 'string')
                                    throw LapysJS.error(alpha, 'not', ['evaluation string', 'function']);

                                // Update > Alpha
                                (typeof alpha != 'string') || (alpha = func(alpha));

                                // Initialization > (Beta, Delta)
                                let beta = (function() {
                                    /* Logic
                                            [if:else if:else statement]

                                        > Alpha
                                    */
                                    if (data.value.replace((function() {
                                        // Initialization > Data
                                        let data = metadata;

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (data.constructor != regExp && typeof data != 'string')
                                            data = string(isFunction(data) ? data() : data);

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (typeof data == 'string')
                                            data = regExp('[' + ('\\' + data.replace(/(?:)/g, '\\').slice('\\'.length, -'\\'.length)).replace(/\\./g, '$&|').slice(0, -'|'.length).replace(/[\\b\\c\\d\\f\\n\\r\\s\\t\\v\\w\\x\\0]/g, data => {
                                                return data.replace('\\', '')
                                            }) + ']', 'g');

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update > Data
                                        */
                                        if (data.constructor == regExp)
                                            data = regExp(data.source, data.flags.replace('g', '') + 'g');

                                        // Return
                                        return data
                                    })(), ''))
                                        alpha.call(data, data.value)
                                }),
                                    delta = data.value;

                                // Update > (LapysJS > Permanent Data > Strictly Watched Elements)
                                LapysJS.perm.strictlyWatchedElements.push({callback: alpha, element: data, match: metadata});

                                // Function > Main
                                (function main() {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (
                                        LapysJS.perm.strictlyWatchedElements.build(data => { return data.element }).indexOf(data) > -1 &&
                                        LapysJS.perm.strictlyWatchedElements.build(data => { return data.match }).indexOf(metadata) > -1 &&
                                        LapysJS.perm.strictlyWatchedElements.build(data => { return data.callback }).indexOf(alpha) > -1
                                    ) {
                                        /* Logic
                                                The element`s value has changed.
                                        */
                                        if (delta != data.value) {
                                            // Beta
                                            beta();

                                            // Update > Delta
                                            delta = data.value
                                        }

                                        // Request Animation Frame
                                        requestAnimationFrame(main)
                                    }
                                })()
                            }

                            // Return
                            return isElement(data) ? data : Null
                        }
                    });

                    // Sequence
                    isFunction(_tmp.sequence) || objectDefProp(_tmp, 'sequence', {
                        // Value
                        value: function sequence() {
                            // Initialization > (Arguments, Data, Metadata, Alpha)
                            let args = [...arguments],
                                data = args.slice(0, -1),
                                metadata = args[~-args.length],
                                alpha = [];

                            // Function
                                // Decode
                                function decode() {
                                    // Update > Alpha
                                    alpha.push(decodeURIComponent(string(arguments[0])))
                                }

                                // Encode
                                function encode() {
                                    // Update > Alpha
                                    alpha.push(encodeURIComponent(string(arguments[0])))
                                }

                                // HTML
                                function html() {
                                    // Update > Alpha
                                    alpha.push(createElement('lapysjs-element:', string(arguments[0])).textContent)
                                }

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Logic
                                        [switch:case:default statement]

                                    > ((...), Return)
                                */
                                switch (metadata) {
                                    // Decode
                                    case 'decode':
                                        decode(i);
                                        break;

                                    // Encode
                                    case 'encode':
                                        encode(i);
                                        break;

                                    // HTML
                                    case 'html':
                                        html(i);
                                        break;

                                    // HTML
                                    case 'HTML':
                                        html(i);
                                        break;

                                    // [Default]
                                    default:
                                        return (function() {
                                            // LapysJS > Warn
                                            LapysJS.warn("'" + i + "' is not a valid option.");

                                            // Return
                                            return Null
                                        })()
                                }

                            // Return
                            return alpha.length > 1 ? alpha : (alpha[0] || Null)
                        },

                        // Writable
                        writable: True
                    });

                    /* Set Immediate
                            --- NOTE ---
                                #lapys: This function is gotten from 'https://github.com/LapysDev/IntervalJS'
                                    in its polyfill form and inspired by multiple third-party developers.
                    */
                    (function(a,b){"use strict";function c(t){"function"!=typeof t&&(t=new Function(""+t));for(var u=Array(arguments.length-1),v=0;v<u.length;v++)u[v]=arguments[v+1];var w={callback:t,arguments:u};return o[n]=w,r(n),n++}function d(t){delete o[t]}function e(t){var u=t.callback,v=t.arguments;switch(v.length){case 0:u();break;case 1:u(v[0]);break;case 2:u(v[0],v[1]);break;case 3:u(v[0],v[1],v[2]);break;default:u.apply(b,v)}}function f(t){if(p)setTimeout(f,0,t);else{var u=o[t];if(u){p=!0;try{e(u)}finally{d(t),p=!1}}}}function g(){r=function(t){process.nextTick(function(){f(t)})}}function h(){if(a.postMessage&&!a.importScripts){var t=!0,u=a.onmessage;return a.onmessage=function(){t=!1},a.postMessage("","*"),a.onmessage=u,t}}function j(){var t="setImmediate$"+Math.random()+"$",u=function(v){v.source===a&&"string"==typeof v.data&&0===v.data.indexOf(t)&&f(+v.data.slice(t.length))};a.addEventListener?a.addEventListener("message",u,!1):a.attachEvent("onmessage",u),r=function(v){a.postMessage(t+v,"*")}}function k(){var t=new MessageChannel;t.port1.onmessage=function(u){var v=u.data;f(v)},r=function(u){t.port2.postMessage(u)}}function l(){var t=q.documentElement;r=function(u){var v=q.createElement("script");v.onreadystatechange=function(){f(u),v.onreadystatechange=null,t.removeChild(v),v=null},t.appendChild(v)}}function m(){r=function(t){setTimeout(f,0,t)}}if(!a.setImmediate){var r,n=1,o={},p=!1,q=a.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(a);s=s&&s.setTimeout?s:a,"[object process]"==={}.toString.call(a.process)?g():h()?j():a.MessageChannel?k():q&&"onreadystatechange"in q.createElement("script")?l():m(),s.setImmediate=c,s.clearImmediate=d}})("undefined"==typeof self?"undefined"==typeof global?this:global:self);

                    // Sleep
                    isFunction(_tmp.sleep) || objectDefProp(_tmp, 'sleep', {
                        // Value
                        value: function sleep() {
                            // Initialization > (Data, Metadata)
                            let data = arguments[0],
                                metadata = new Date().getTime();

                            /* Loop
                                    [for statement]
                            */
                            for (let i = 0; i < 1e7; i += 1)
                                /* Logic
                                        [if:else if:else statement]

                                    > Break
                                */
                                if ((new Date().getTime() - metadata) > data)
                                    break;
                        }
                    });

                    // String
                    isFunction(_tmp.str) || objectDefProp(_tmp, 'str', {
                        // Value
                        value: function String() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return string.apply(window, [...arguments])
                                }),
                                metadata = '';

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                metadata += (function() {
                                    // Initialization > Alpha
                                    let alpha = i;

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isNonConstructable(alpha))
                                        // Update > Alpha
                                        alpha = data(alpha);

                                    else
                                        /* Logic
                                                [switch:case:default statement]

                                            > Update > Alpha
                                        */
                                        switch (alpha.constructor) {
                                            // Attribute
                                            case Attr:
                                                alpha = alpha.value;
                                                break;

                                            // Document Type
                                            case DocumentType:
                                                alpha = (function stringify() {
                                                    // Initialization > (Target, (Public, System) ID)
                                                    let that = this,
                                                        publicID = that.publicID,
                                                        systemID = that.systemId;

                                                    // Return
                                                    return data(!that || data(('<!DOCTYPE ' + that.name + (publicID ? (" PUBLIC '" + publicID + "'") : '') + (!publicID && systemID ? ' SYSTEM' : '') + (systemID ? (" '" + systemID + "'") : '') + '>'))).replace('true', '')
                                                }).call(alpha);
                                                break;

                                            // Object
                                            case object:
                                                alpha = JSON.stringify(alpha);
                                                break;

                                            // Regular Expression
                                            case regExp:
                                                alpha = alpha.source;
                                                break;

                                            // [Default]
                                            default:
                                                alpha = data(alpha)
                                        }

                                    // Return
                                    return alpha
                                })();

                            // Return
                            return metadata || Default.string
                        }
                    });

                    /* Stringify
                            --- NOTE ---
                                #lapys: For special string conversion functions e.g.:
                                    Converting an integer array to a string array.
                    */
                    isFunction(_tmp.stringify) || objectDefProp(_tmp, 'stringify', {
                        // Value
                        value: function stringify() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = [];

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i in args) {
                                // Initialization > Metadata
                                let metadata = args[i];

                                /* Logic
                                        [if:else if:else statement]

                                    > Update > Data
                                */
                                if (isNonConstructable(metadata))
                                    data.push(string(metadata))

                                else
                                    // When
                                    when(
                                        // {Array-Like Object}
                                        isArrayLike(metadata), function() {
                                            /* Loop
                                                    [for:in statement]

                                                > Modification > Metadata > [Loop Counter]
                                            */
                                            for (let j in metadata = isArray(metadata) ? [...metadata] : LapysJS.namedArray.apply(LapysJS, [metadata.constructor.name].concat(toArray(metadata))))
                                                (j == 'length') || (metadata[j] = string(metadata[j]));

                                            // Update > Data
                                            data.push(metadata.removeElements(''))
                                        },

                                        // {Object}
                                        isObject(metadata), function() {
                                            /* Loop
                                                    [for:in statement]

                                                > Modification > Metadata > [Loop Counter]
                                            */
                                            for (let j in metadata = objectAssign(LapysJS.namedObject(metadata.constructor.name), metadata))
                                                metadata[j] = string(metadata[j]);

                                            // Update > Data
                                            data.push(metadata)
                                        },

                                        // {[Default]}
                                        True, function() {
                                            /* Loop
                                                    Index Metadata.

                                                > Modification > Metadata > [Loop Counter]
                                            */
                                            for (let j in metadata = object(metadata))
                                                metadata[j] = string(metadata[j]);

                                            // Update > Data
                                            data.push(metadata)
                                        }
                                    )
                            }

                            // Return
                            return data.length > 1 ? data : data[0]
                        }
                    });

                    // Symbol
                    isFunction(_tmp.sym) || objectDefProp(_tmp, 'sym', {
                        // Value
                        value: function Symbol() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = (function() {
                                    // Return
                                    return window.Symbol.apply(window, [...arguments])
                                }),
                                metadata = args[0];

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args.slice(1))
                                metadata += i;

                            // Return
                            return args.length > 0 ? data(metadata) : Default.symbol
                        }
                    });

                    // Timeout
                    isFunction(_tmp.timeout) || objectDefProp(_tmp, 'timeout', {
                        // Value
                        value: function timeout() {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (arguments.length) {
                                // Initialization > (Arguments, Metadata, Data)
                                let args = [...arguments],
                                    metadata = _numberParseNumber(args[1]),
                                    data = isFunction(args[0]) || typeof args[0] == 'string' ? (typeof args[0] == 'string' ? func('(function(){' + args[0] + '})(' + metadata + ', 1)') : (function() {
                                        // Argument 0
                                        args[0](metadata, 1)
                                    })) : args[0];

                                // Set Timeout
                                setTimeout(data, metadata)
                            }

                            // Return
                            return 0
                        }
                    });

                    // Warn
                    isFunction(_tmp.warn) || objectDefProp(_tmp, 'warn', {
                        value: function warn() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Console > Warn
                            console.warn.apply(console, args);

                            // Return
                            return args.length > 1 ? args : args[0]
                        },

                        // Writable
                        writable: True
                    });

                    // When
                    isFunction(_tmp.when) || objectDefProp(_tmp, 'when', {
                        // Value
                        value: function when() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = 'switch (True) {';

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        Index Arguments.

                                    > Update > Argument
                                */
                                for (let i in args)
                                    !(i % 2) || (typeof args[i] != 'string') || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    (i % 2) || !(args[+i + 1]) || (data += 'case !!args[' + i + ']:args[' + (+i + 1) + ']();break;');

                                // Return
                                return args.filter(data => {
                                    // Return
                                    return !isFunction(data)
                                }).indexOf(True) < 0 ? Null : eval(data + '}');
                            }

                            // Return
                            return Null
                        }
                    });

                /* Array Data */
                    // Add Element
                    isFunction(arrayProto.addElement) || objectDefProp(arrayProto, 'addElement', {
                        // Value
                        value: function addElement() {
                            // Initialization > (Arguments, Target)
                            let args =[...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments of Element.

                                > Update > Array
                            */
                            for (let i = ~-args.length; i > -1; i -= 1)
                                that.unshift(args[i]);

                            // Return
                            return that
                        }
                    });

                    // Add Element To Back
                    isFunction(arrayProto.addElementToBack) || objectDefProp(arrayProto, 'addElementToBack', {
                        // Value
                        value: function addElementToBack() {
                            // Initialization > (Arguments, Target)
                            let args =[...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments of Element.

                                > Update > Array
                            */
                            for (let i = ~-args.length; i > -1; i -= 1)
                                that.unshift(args[i]);

                            // Return
                            return that
                        }
                    });

                    // Add Element To Front
                    isFunction(arrayProto.addElementToFront) || objectDefProp(arrayProto, 'addElementToFront', {
                        // Value
                        value: function addElementToFront() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments.

                                > Update > Array
                            */
                            for (let i of args)
                                that.push(i);

                            // Return
                            return that
                        }
                    });

                    // Build
                    isFunction(arrayProto.build) || objectDefProp(arrayProto, 'build', {
                        // Value
                        value: function build() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = [...this];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        Index Arguments.

                                    > Update > Argument
                                */
                                for (let i in args)
                                    (typeof args[i] != 'string') || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Logic
                                            [if:else if:else statement]

                                        > Error
                                    */
                                    if (!isFunction(i) && typeof i != 'string')
                                        throw LapysJS.error("Improper argument '" + string(i) + "' passed.");

                                /* Loop
                                        Index Target.
                                */
                                for (let i in that)
                                    /* Loop
                                            Index Arguments.

                                        > Update > Target
                                    */
                                    for (let j of args)
                                        that[i] = j.call(that, that[i])
                            }

                            // Return
                            return that
                        }
                    });

                    // Collate
                    isFunction(arrayProto.collate) || objectDefProp(arrayProto, 'collate', {
                        // Value
                        value: function collate() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments].slice(1),
                                data = arguments[0];
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        Index Arguments.

                                    > Update > Argument
                                */
                                for (let i in args)
                                    (typeof args[i] != 'string') || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Logic
                                            [if:else if:else statement]

                                        > Error
                                    */
                                    if (!isFunction(i) && typeof i != 'string')
                                        throw LapysJS.error("Improper argument '" + string(i) + "' passed.");

                                /* Loop
                                        Index Target.
                                */
                                for (let i of that)
                                    /* Loop
                                            Index Arguments.

                                        > Update > Target
                                    */
                                    for (let j of args)
                                        data = j.call(that, data, i);
                            }

                            // Return
                            return data
                        }
                    });

                    // Convert
                    isFunction(arrayProto.convert) || objectDefProp(arrayProto, 'convert', {
                        // Value
                        value: function convert() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = [...this];

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        Index Arguments.

                                    > Update > Argument
                                */
                                for (let i in args)
                                    (typeof args[i] != 'string') || (args[i] = func(args[i]));

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Logic
                                            [if:else if:else statement]

                                        > Error
                                    */
                                    if (!isFunction(i) && typeof i != 'string')
                                        throw LapysJS.error("Improper argument '" + string(i) + "' passed.");

                                /* Loop
                                        Index Target.
                                */
                                for (let i in that)
                                    /* Loop
                                            Index Arguments.

                                        > Update > Target
                                    */
                                    for (let j of args)
                                        that[i] = j.call(that, that[i]);

                                // Modification > Target > Length
                                this.length = 0;

                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let i of that)
                                    this.push(i);
                            }

                            // Return
                            return this
                        }
                    });

                    // Count
                    isFunction(arrayProto.count) || objectDefProp(arrayProto, 'count', {
                        // Value
                        value: function count() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = 0,
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Loop
                                        Index Target.

                                    > Update > Data
                                */
                                for (let j of that)
                                    (i !== j) || (data += 1);

                            // Return
                            return data
                        }
                    });

                    // Filled With
                    isFunction(arrayProto.filledWith) || objectDefProp(arrayProto, 'filledWith', {
                        // Value
                        value: function filledWith() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = [];

                            /* Loop
                                    Index Target.

                                > Update > Data
                            */
                            for (let i of this)
                                data.push(args.indexOf(i) > -1);

                            // Return
                            return data.length > 0 && data.indexOf(False) < 0
                        }
                    });

                    // Filled With Array Elements
                    isFunction(arrayProto.filledWithArrayElements) || objectDefProp(arrayProto, 'filledWithArrayElements', {
                        // Value
                        value: function filledWithArrayElements() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = [],
                                metadata = [];

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                !isArray(i) || (metadata = metadata.concat(i));

                            /* Loop
                                    Index Metadata.

                                > Update > Data
                            */
                            for (let i of this)
                                data.push(metadata.indexOf(i) > -1);

                            // Return
                            return data.length > 0 && data.indexOf(False) < 0
                        }
                    });

                    // First Element
                    'firstElement' in arrayProto || objectDefProp(arrayProto, 'firstElement', _tmp = {
                        // Get
                        get: function firstElement() {
                            // Return
                            return this[0]
                        }
                    });
                        // Definition
                        'firstElement' in htmlAllCollectionProto || objectDefProp(htmlAllCollectionProto, 'firstElement', _tmp);
                        'firstElement' in htmlCollectionProto || objectDefProp(htmlCollectionProto, 'firstElement', _tmp);
                        'firstElement' in nodeListProto || objectDefProp(nodeListProto, 'firstElement', _tmp);

                    // Free
                    isFunction(arrayProto.free) || objectDefProp(arrayProto, 'free', {
                        // Value
                        value: function free() {
                            // Initialization > Target
                            let that = this;

                            /* Loop
                                    Index Target.

                                > Update > Target
                            */
                            for (let i in that)
                                that[i] = Undefined;

                            // Update > Target
                            that = that.filter(Boolean);

                            // Modification > Target > Length
                            that.length = 0;

                            // Return
                            return that
                        }
                    });

                    // Get Common Elements
                    isFunction(arrayProto.getCommonElements) || objectDefProp(arrayProto, 'getCommonElements', {
                        // Value
                        value: function getCommonElements() {
                            // Initialization > (Data, Metadata, Alpha, Target)
                            let data = [],
                                alpha = [],
                                that = [...this],
                                metadata = that.count(that[0]);

                            /* Loop
                                    Index Target.

                                > Update > Data
                            */
                            for (let i of that)
                                data.push({frequency: that.count(i), object: i});

                            /* Loop
                                    Index Data.

                                > Update > Metadata
                            */
                            for (let i of data)
                                (i.frequency < -~metadata) || (metadata = i.frequency);

                            /* Loop
                                    Index Data.

                                > Update > Alpha
                            */
                            for (let i of data)
                                (i.frequency != metadata) || alpha.push(i.object);

                            // Return
                            return alpha.removeDuplicatedElements()
                        }
                    });

                    // Get Duplicated Elements
                    isFunction(arrayProto.getDuplicatedElements) || objectDefProp(arrayProto, 'getDuplicatedElements', {
                        // Value
                        value: function getDuplicatedElements() {
                            // Return
                            return this.getRepeatedElements().removeDuplicatedElements()
                        }
                    });

                    // Get Repeated Elements
                    isFunction(arrayProto.getRepeatedElements) || objectDefProp(arrayProto, 'getRepeatedElements', {
                        // Value
                        value: function getRepeatedElements() {
                            // Initialization > (Data, Target)
                            let data = [],
                                that = this;

                            /* Loop
                                    Index members of the Target.
                            */
                            for (let i = 0; i < ~-that.length; i += 1) {
                                // Initialization > Metadata
                                let metadata = that.slice().sort();

                                // Update > Data
                                (metadata[-~i] !== metadata[i]) || data.push(metadata[i])
                            }

                            // Return
                            return data
                        }
                    });

                    // Get Uncommon Elements
                    isFunction(arrayProto.getUncommonElements) || objectDefProp(arrayProto, 'getUncommonElements', {
                        // Value
                        value: function getUncommonElements() {
                            // Initialization > (Data, Metadata, Alpha, Target)
                            let data = [],
                                alpha = [],
                                that = [...this],
                                metadata = that.count(that[0]);

                            /* Loop
                                    Index Target.

                                > Update > Data
                            */
                            for (let i of that)
                                data.push({frequency: that.count(i), object: i});

                            /* Loop
                                    Index Data.

                                > Update > Metadata
                            */
                            for (let i of data)
                                (i.frequency > ~-metadata) || (metadata = i.frequency);

                            /* Loop
                                    Index Data.

                                > Update > Alpha
                            */
                            for (let i of data)
                                (i.frequency != metadata) || alpha.push(i.object);

                            // Return
                            return alpha.removeDuplicatedElements()
                        }
                    });

                    // Has Array Elements
                    isFunction(arrayProto.hasArrayElements) || objectDefProp(arrayProto, 'hasArrayElements', {
                        // Value
                        value: function hasArrayElements() {
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = [],
                                metadata = [];

                            /* Loop
                                    Index Arguments.

                                > Update > Metadata
                            */
                            for (let i of args)
                                !isArray(i) || (metadata = metadata.concat(i));

                            /* Loop
                                    Index Metadata.

                                > Update > Data
                            */
                            for (let i of metadata)
                                data.push(this.indexOf(i) > -1);

                            // Return
                            return data.length > 0 && data.indexOf(False) < 0
                        }
                    });

                    // Has Element
                    isFunction(arrayProto.hasElement) || objectDefProp(arrayProto, 'hasElement', {
                        // Value
                        value: function hasElement() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = [];

                            /* Loop
                                    Index Arguments.

                                > Update > Data
                            */
                            for (let i of args)
                                data.push(this.indexOf(i) > -1);

                            // Return
                            return data.length > 0 && data.indexOf(False) < 0
                        }
                    });

                    // Last Element
                    'lastElement' in arrayProto || objectDefProp(arrayProto, 'lastElement', _tmp = {
                        // Get
                        get: function lastElement() {
                            // Return
                            return this[~-this.length]
                        }
                    });
                        // Definition
                        'lastElement' in htmlAllCollectionProto || objectDefProp(htmlAllCollectionProto, 'lastElement', _tmp);
                        'lastElement' in htmlCollectionProto || objectDefProp(htmlCollectionProto, 'lastElement', _tmp);
                        'lastElement' in nodeListProto || objectDefProp(nodeListProto, 'lastElement', _tmp);

                    // Random Element
                    'randomElement' in arrayProto || objectDefProp(arrayProto, 'randomElement', {
                        // Get
                        get: function randomElement() {
                            // Return
                            return this[parseInt(Math.random() * this.length)]
                        }
                    });

                    // Remove Common Elements
                    isFunction(arrayProto.removeCommonElements) || objectDefProp(arrayProto, 'removeCommonElements', {
                        // Value
                        value: function removeCommonElements() {
                            // Initialization > (Target, Data)
                            let that = this,
                                data = that.getCommonElements();

                            /* Loop
                                    Index Data.

                                > Update > Target
                            */
                            for (let i of data)
                                that.removeElements(i);

                            return that
                        }
                    });

                    // Remove Duplicated Element
                    isFunction(arrayProto.removeDuplicatedElement) || objectDefProp(arrayProto, 'removeDuplicatedElement', {
                        // Value
                        value: function removeDuplicatedElement() {
                            // Update > Target
                            this.removeElement(this.getDuplicatedElements()[0]);

                            // Return
                            return this
                        }
                    });

                    // Remove Duplicated Element From Back
                    isFunction(arrayProto.removeDuplicatedElementFromBack) || objectDefProp(arrayProto, 'removeDuplicatedElementFromBack', {
                        // Value
                        value: function removeDuplicatedElementFromBack() {
                            // Update > Target
                            this.removeElementFromBack(this.getDuplicatedElements()[0]);

                            // Return
                            return this
                        }
                    });

                    // Remove Duplicated Element From Front
                    isFunction(arrayProto.removeDuplicatedElementFromFront) || objectDefProp(arrayProto, 'removeDuplicatedElementFromFront', {
                        // Value
                        value: function removeDuplicatedElementFromFront() {
                            // Update > Target
                            this.reverse().removeElement(this.getDuplicatedElements()[0]).reverse();

                            // Return
                            return this
                        }
                    });

                    // Remove Duplicated Elements
                    isFunction(arrayProto.removeDuplicatedElements) || objectDefProp(arrayProto, 'removeDuplicatedElements', {
                        // Value
                        value: function removeDuplicatedElements() {
                            // Initialization > (Data, Metadata)
                            let that = this,
                                data = [...that],
                                metadata = data.getRepeatedElements();

                            /* Loop
                                    Index Metadata.

                                > Update > Data
                            */
                            for (let i of metadata)
                                data = data.replaceElement(i, new (function tmp() { this.value = i })).removeElements(i);

                            // Modification > Target > Length
                            that.length = 0;

                            /* Loop
                                    Index Data.

                                > Update
                            */
                            for (let i = 0; i < data.length; i += 1) {
                                // Data
                                (data[i].constructor.name != 'tmp') || (data[i] = data[i].value);

                                // Target
                                that.push(data[i])
                            }

                            // Return
                            return data
                        }
                    });

                    // Remove Duplicated Elements From Back
                    isFunction(arrayProto.removeDuplicatedElementsFromBack) || objectDefProp(arrayProto, 'removeDuplicatedElementsFromBack', {
                        // Value
                        value: function removeDuplicatedElementsFromBack() {
                            // Initialization > (Data, Metadata)
                            let that = this,
                                data = [...that],
                                metadata = data.getRepeatedElements();

                            /* Loop
                                    Index Metadata.

                                > Update > Data
                            */
                            for (let i of metadata)
                                data = data.replaceElementFromBack(i, new (function tmp() { this.value = i })).removeElements(i);

                            // Modification > Target > Length
                            that.length = 0;

                            /* Loop
                                    Index Data.

                                > Update
                            */
                            for (let i = 0; i < data.length; i += 1) {
                                // Data
                                (data[i].constructor.name != 'tmp') || (data[i] = data[i].value);

                                // Target
                                that.push(data[i])
                            }

                            // Return
                            return data
                        }
                    });

                    // Remove Duplicated Elements From Front
                    isFunction(arrayProto.removeDuplicatedElementsFromFront) || objectDefProp(arrayProto, 'removeDuplicatedElementsFromFront', {
                        // Value
                        value: function removeDuplicatedElementsFromFront() {
                            // Initialization > (Data, Metadata)
                            let that = this,
                                data = [...that],
                                metadata = data.getRepeatedElements();

                            /* Loop
                                    Index Metadata.

                                > Update > Data
                            */
                            for (let i of metadata)
                                data = data.replaceElementFromFront(i, new (function tmp() { this.value = i })).removeElements(i);

                            // Modification > Target > Length
                            that.length = 0;

                            /* Loop
                                    Index Data.

                                > Update
                            */
                            for (let i = 0; i < data.length; i += 1) {
                                // Data
                                (data[i].constructor.name != 'tmp') || (data[i] = data[i].value);

                                // Target
                                that.push(data[i])
                            }

                            // Return
                            return data
                        }
                    });

                    // Remove Element
                    isFunction(arrayProto.removeElement) || objectDefProp(arrayProto, 'removeElement', {
                        // Value
                        value: function removeElement() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                // Update > Target
                                (that.indexOf(i) < 0) || that.splice(that.indexOf(i), 1);

                            // Return
                            return that
                        }
                    });

                    // Remove Element From Back
                    isFunction(arrayProto.removeElementFromBack) || objectDefProp(arrayProto, 'removeElementFromBack', {
                        // Value
                        value: function removeElementFromBack() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                // Update > Target
                                (that.indexOf(i) < 0) || that.splice(that.indexOf(i), 1);

                            // Return
                            return that
                        }
                    });

                    // Remove Element From Front
                    isFunction(arrayProto.removeElementFromFront) || objectDefProp(arrayProto, 'removeElementFromFront', {
                        // Value
                        value: function removeElementFromFront() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                // Update > Target
                                (that.lastIndexOf(i) < 0) || that.splice(that.lastIndexOf(i), 1);

                            // Return
                            return that
                        }
                    });

                    // Remove Elements
                    isFunction(arrayProto.removeElements) || objectDefProp(arrayProto, 'removeElements', {
                        // Value
                        value: function removeElements() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            // Function > Remove Element
                            (function removeElement() {
                                /* Loop
                                        Index elements of Element.
                                */
                                for (let i in args) {
                                    // Update > Target
                                    (that.indexOf(args[0]) < 0) || that.splice(that.indexOf(args[0]), 1);

                                    // Break
                                    break
                                };

                                // Function > Remove Element
                                (that.indexOf(args[0]) < 0) || removeElement()
                            })();

                            // Return
                            return that
                        }
                    });

                    // Remove Falsy Elements
                    isFunction(arrayProto.removeFalsyElements) || objectDefProp(arrayProto, 'removeFalsyElements', {
                        // Value
                        value: function removeFalsyElements() {
                            // Return
                            return this.transform(Boolean)
                        }
                    });

                    // Remove Repeated Elements
                    isFunction(array.removeRepeatedElements) || objectDefProp(arrayProto, 'removeRepeatedElements', {
                        // Value
                        value: function removeRepeatedElements() {
                            // Initialization > (Target, Data)
                            let that = this,
                                data = that.getRepeatedElements();

                            /* Loop
                                    Index Data.

                                > Update > Target
                            */
                            for (let i of data)
                                that.removeElements(i);

                            // Return
                            return that
                        }
                    });

                    // Remove Truthy Elements
                    isFunction(arrayProto.removeTruthyElements) || objectDefProp(arrayProto, 'removeTruthyElements', {
                        // Value
                        value: function removeTruthyElements() {
                            // Return
                            return this.transform(data => { return dat })
                        }
                    });

                    // Remove Uncommon Elements
                    isFunction(arrayProto.removeUncommonElements) || objectDefProp(arrayProto, 'removeUncommonElements', {
                        // Value
                        value: function removeUncommonElements() {
                            // Initialization > (Target, Data)
                            let that = this,
                                data = that.getUncommonElements();

                            /* Loop
                                    Index Data.

                                > Update > Target
                            */
                            for (let i of data)
                                that.removeElements(i);

                            return that
                        }
                    });

                    // Repeat
                    isFunction(arrayProto.repeat) || objectDefProp(arrayProto, 'repeat', {
                        // Value
                        value: function repeat() {
                            // Initialization > (Data, Target, Metadata)
                            let data = parseInt(arguments[0]),
                                that = this,
                                metadata = [...that];

                            /* Loop
                                    [for statement]

                                > Update > Target
                            */
                            for (let i = 0; i < ~-data; i += 1)
                                    that = that.concat(metadata);

                            // Update > Metadata
                            metadata = [...that];

                            // Modification > Target > Length
                            this.length = 0;

                            /* Loop
                                    Index Metadata.

                                > Update > Target
                            */
                            for (let i of metadata)
                                this.push(i);

                            // Return
                            return this
                        }
                    });

                    // Repeat Element
                    isFunction(arrayProto.repeatElement) || objectDefProp(arrayProto, 'repeatElement', {
                        // Value
                        value: function repeatElement() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = parseInt(args[1]),
                                that = this;

                            /* Loop
                                    [for statement]

                                > Update > Target
                            */
                            for (let i = 0; i < metadata; i += 1)
                                that.unshift(data);

                            // Return
                            return that
                        }
                    });

                    // Repeat Element To Back
                    isFunction(arrayProto.repeatElementToBack) || objectDefProp(arrayProto, 'repeatElementToBack', {
                        // Value
                        value: function repeatElementToBack() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = parseInt(args[1]),
                                that = this;

                            /* Loop
                                    [for statement]

                                > Update > Target
                            */
                            for (let i = 0; i < metadata; i += 1)
                                that.unshift(data);

                            // Return
                            return that
                        }
                    });

                    // Repeat Element To Front
                    isFunction(arrayProto.repeatElementToFront) || objectDefProp(arrayProto, 'repeatElementToFront', {
                        // Value
                        value: function repeatElementToFront() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = parseInt(args[1]),
                                that = this;

                            /* Loop
                                    [for statement]

                                > Update > Target
                            */
                            for (let i = 0; i < metadata; i += 1)
                                that.push(data);

                            // Return
                            return that
                        }
                    });

                    // Repeat Element Set
                    isFunction(arrayProto.repeatElementSet) || objectDefProp(arrayProto, 'repeatElementSet', {
                        // Value
                        value: function repeatElementSet() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args.slice(0, -1),
                                metadata = parseInt(arguments[~-args.length]),
                                that = this;

                            /* Loop
                                    [for statement]
                            */
                            for (let i = 0; i < metadata; i += 1)
                                /* Loop
                                        [for statement]

                                    > Update > Target
                                */
                                for (let j = ~-data.length; j > -1; j -= 1)
                                    that.unshift(data[j]);

                            // Return
                            return that
                        }
                    });

                    // Repeat Element Set To Back
                    isFunction(arrayProto.repeatElementSetToBack) || objectDefProp(arrayProto, 'repeatElementSetToBack', {
                        // Value
                        value: function repeatElementSetToBack() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args.slice(0, -1),
                                metadata = parseInt(arguments[~-args.length]),
                                that = this;

                            /* Loop
                                    [for statement]
                            */
                            for (let i = 0; i < metadata; i += 1)
                                /* Loop
                                        [for statement]

                                    > Update > Target
                                */
                                for (let j = ~-data.length; j > -1; j -= 1)
                                    that.unshift(data[j]);

                            // Return
                            return that
                        }
                    });

                    // Repeat Element Set To Front
                    isFunction(arrayProto.repeatElementSetToFront) || objectDefProp(arrayProto, 'repeatElementSetToFront', {
                        // Value
                        value: function repeatElementSetToFront() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args.slice(0, -1),
                                metadata = parseInt(arguments[~-args.length]),
                                that = this;

                            /* Loop
                                    [for statement]
                            */
                            for (let i = 0; i < metadata; i += 1)
                                /* Loop
                                        [for statement]

                                    > Update > Target
                                */
                                for (let j = 0; j < data.length; j += 1)
                                    that.push(data[j]);

                            // Return
                            return that
                        }
                    });

                    // Replace Common Elements
                    isFunction(arrayProto.replaceCommonElements) || objectDefProp(arrayProto, 'replaceCommonElements', {
                        // Value
                        value: function replaceCommonElements() {
                            // Initialization > (Target, Data, Metadata)
                            let that = this,
                                data = that.getCommonElements(),
                                metadata = arguments[0];

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let j = 0; j < that.length; j += 1)
                                    (that[j] !== i) || (that[j] = metadata);

                            // Return
                            return that
                        }
                    });

                    // Replace Duplicated Element
                    isFunction(arrayProto.replaceDuplicatedElement) || objectDefProp(arrayProto, 'replaceDuplicatedElement', {
                        // Value
                        value: function replaceDuplicatedElement() {
                            // Initialization > (Target, Data, Metadata, Alpha, Beta)
                            let that = this,
                                data = that.getDuplicatedElements(),
                                metadata = arguments[0],
                                alpha = [],
                                beta = [...that];

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > (Target | Alpha)
                                */
                                for (let j = 0; j < that.length; j += 1) {
                                    !(alpha.indexOf(beta[j]) < 0 && beta[j] === i) || (that[j] = metadata);
                                    alpha.push(beta[j])
                                }

                            // Return
                            return that
                        }
                    });

                    // Replace Duplicated Element From Back
                    isFunction(arrayProto.replaceDuplicatedElementFromBack) || objectDefProp(arrayProto, 'replaceDuplicatedElementFromBack', {
                        // Value
                        value: function replaceDuplicatedElementFromBack() {
                            // Initialization > (Target, Data, Metadata, Alpha, Beta)
                            let that = this,
                                data = that.getDuplicatedElements(),
                                metadata = arguments[0],
                                alpha = [],
                                beta = [...that];

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > (Target | Alpha)
                                */
                                for (let j = 0; j < that.length; j += 1) {
                                    !(alpha.indexOf(beta[j]) < 0 && beta[j] === i) || (that[j] = metadata);
                                    alpha.push(beta[j])
                                }

                            // Return
                            return that
                        }
                    });

                    // Replace Duplicated Element From Front
                    isFunction(arrayProto.replaceDuplicatedElementFromFront) || objectDefProp(arrayProto, 'replaceDuplicatedElementFromFront', {
                        // Value
                        value: function replaceDuplicatedElementFromFront() {
                            // Initialization > (Target, Data, Metadata, Alpha, Beta)
                            let that = this,
                                data = that.getDuplicatedElements(),
                                metadata = arguments[0],
                                alpha = [],
                                beta = [...that].reverse();

                            // Update > Target
                            that.reverse();

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > (Target | Alpha)
                                */
                                for (let j = 0; j < that.length; j += 1) {
                                    !(alpha.indexOf(beta[j]) < 0 && beta[j] === i) || (that[j] = metadata);
                                    alpha.push(beta[j])
                                }

                            // Update > Target
                            that.reverse();

                            // Return
                            return that
                        }
                    });

                    // Replace Duplicated Elements
                    isFunction(arrayProto.replaceDuplicatedElements) || objectDefProp(arrayProto, 'replaceDuplicatedElements', {
                        // Value
                        value: function replaceDuplicatedElements() {
                            // Initialization > (Target, Data, Metadata, Alpha)
                            let that = this,
                                data = that.getDuplicatedElements(),
                                metadata = arguments[0],
                                alpha = [];

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > (Target | Alpha)
                                */
                                for (let j = 0; j < that.length; j += 1)
                                    alpha.indexOf(that[j]) > -1 && that[j] === i ? that[j] = metadata :  alpha.push(that[j]);

                            // Return
                            return that
                        }
                    });

                    // Replace Duplicated Elements From Back
                    isFunction(arrayProto.replaceDuplicatedElementsFromBack) || objectDefProp(arrayProto, 'replaceDuplicatedElementsFromBack', {
                        // Value
                        value: function replaceDuplicatedElementsFromBack() {
                            // Initialization > (Target, Data, Metadata, Alpha)
                            let that = this,
                                data = that.getDuplicatedElements(),
                                metadata = arguments[0],
                                alpha = [];

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > (Target | Alpha)
                                */
                                for (let j = 0; j < that.length; j += 1)
                                    alpha.indexOf(that[j]) > -1 && that[j] === i ? that[j] = metadata :  alpha.push(that[j]);

                            // Return
                            return that
                        }
                    });

                    // Replace Duplicated Elements From Front
                    isFunction(arrayProto.replaceDuplicatedElementsFromFront) || objectDefProp(arrayProto, 'replaceDuplicatedElementsFromFront', {
                        // Value
                        value: function replaceDuplicatedElementsFromFront() {
                            // Initialization > (Target, Data, Metadata, Alpha)
                            let that = this,
                                data = that.getDuplicatedElements(),
                                metadata = arguments[0],
                                alpha = [];

                            // Target > Reverse
                            that.reverse();

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > (Target | Alpha)
                                */
                                for (let j = 0; j < that.length; j += 1)
                                    alpha.indexOf(that[j]) > -1 && that[j] === i ? that[j] = metadata :  alpha.push(that[j]);

                            // Target > Reverse
                            that.reverse();

                            // Return
                            return that
                        }
                    });

                    // Replace Element
                    isFunction(arrayProto.replaceElement) || objectDefProp(arrayProto, 'replaceElement', {
                        // Value
                        value: function replaceElement() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = args[~-args.length],
                                that = this;

                            // Update > Arguments
                            args = args.slice(0, -1);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i = 0; i < args.length; i += 1)
                                /* Logic
                                        If
                                            the Argument 0 is within the Array.

                                    > Target > Update
                                */
                                if (that.indexOf(args[i]) > -1) {
                                    that.splice(that.indexOf(args[i]), 0, data);
                                    that.splice(that.indexOf(args[i]), 1)
                                }

                            // Return
                            return that
                        }
                    });

                    // Replace Element From Back
                    isFunction(arrayProto.replaceElementFromBack) || objectDefProp(arrayProto, 'replaceElementFromBack', {
                        // Value
                        value: function replaceElementFromBack() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = args[~-args.length],
                                that = this;

                            // Update > Arguments
                            args = args.slice(0, -1);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i = 0; i < args.length; i += 1)
                                /* Logic
                                        If
                                            the Argument 0 is within the Array.

                                    > Target > Update
                                */
                                if (that.indexOf(args[i]) > -1) {
                                    that.splice(that.indexOf(args[i]), 0, data);
                                    that.splice(that.indexOf(args[i]), 1)
                                }

                            // Return
                            return that
                        }
                    });

                    // Replace Element From Front
                    isFunction(arrayProto.replaceElementFromFront) || objectDefProp(arrayProto, 'replaceElementFromFront', {
                        // Value
                        value: function replaceElementFromFront() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = args[~-args.length],
                                that = this;

                            // Update > Arguments
                            args = args.slice(0, -1);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i = 0; i < args.length; i += 1)
                                /* Logic
                                        If
                                            the Argument 0 is within the Array.

                                    > Target > Update
                                */
                                if (that.lastIndexOf(args[i]) > -1) {
                                    that.splice(that.lastIndexOf(args[i]), 0, data);
                                    that.splice(that.lastIndexOf(args[i]), 1)
                                }

                            // Return
                            return that
                        }
                    });

                    // Replace Elements
                    isFunction(arrayProto.replaceElements) || objectDefProp(arrayProto, 'replaceElements', {
                        // Value
                        value: function replaceElements() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = args[~-args.length],
                                that = this;

                            // Update > Arguments
                            args = args.slice(0, -1);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i = 0; i < args.length; i += 1)
                                /* Loop
                                        While
                                            The Argument 0 is still detected.

                                    > Update > Target
                                */
                                while (that.indexOf(args[i]) > -1) {
                                    that.splice(that.indexOf(args[i]), 0, data);
                                    that.splice(that.indexOf(args[i]), 1)
                                }

                            // Return
                            return that
                        }
                    });

                    // Replace Falsy Elements
                    isFunction(arrayProto.replaceFalsyElements) || objectDefProp(arrayProto, 'replaceFalsyElements', {
                        // Value
                        value: function replaceFalsyElements() {
                            // Initialization > Data
                            let data = arguments[0];

                            // Return
                            return this.convert(metadata => {
                                // Return
                                return metadata ? metadata : data
                            })
                        }
                    });

                    // Replace Repeated Elements
                    isFunction(arrayProto.replaceRepeatedElements) || objectDefProp(arrayProto, 'replaceRepeatedElements', {
                        // Value
                        value: function replaceRepeatedElements() {
                            // Initialization > (Data, Target, Metadata)
                            let data = arguments[0],
                                that = this,
                                metadata = that.getRepeatedElements();

                            /* Loop
                                    Index Metadata.

                                > Update > Target
                            */
                            for (let i of metadata)
                                that.replaceElements(i, data);

                            // Return
                            return that
                        }
                    });

                    // Replace Truthy Elements
                    isFunction(arrayProto.replaceTruthyElements) || objectDefProp(arrayProto, 'replaceTruthyElements', {
                        // Value
                        value: function replaceTruthyElements() {
                            // Initialization > Data
                            let data = arguments[0];

                            // Return
                            return this.convert(metadata => {
                                // Return
                                return metadata ? data : metadata
                            })
                        }
                    });

                    // Replace Uncommon Elements
                    isFunction(arrayProto.replaceUncommonElements) || objectDefProp(arrayProto, 'replaceUncommonElements', {
                        // Value
                        value: function replaceUncommonElements() {
                            // Initialization > (Target, Data, Metadata)
                            let that = this,
                                data = that.getUncommonElements(),
                                metadata = arguments[0];

                            /* Loop
                                    Index Data.
                            */
                            for (let i of data)
                                /* Loop
                                        Index Target.

                                    > Update > Target
                                */
                                for (let j = 0; j < that.length; j += 1)
                                    (that[j] !== i) || (that[j] = metadata);

                            // Return
                            return that
                        }
                    });

                    // Stretch
                    isFunction(arrayProto.stretch) || objectDefProp(arrayProto, 'stretch', {
                        // Value
                        value: function stretch() {
                            // Initialization > (Data, Target)
                            let data = parseInt(arguments[0]),
                                that = this;

                            // Modification > Target > Length
                            data < 0 && that.length + data < 0 ? that.length = 0 : that.length += data;

                            // Return
                            return that
                        }
                    });

                    // Transform
                    isFunction(arrayProto.transform) || objectDefProp(arrayProto, 'transform', {
                        // Value
                        value: function transform() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = this;
                                that = this.filter.apply(this, args);

                            // Modification > Data > Length
                            data.length = 0;

                            /* Loop
                                    Index Target.

                                > Update > Data
                            */
                            for (let i of that)
                                data.push(i);

                            // Return
                            return data
                        }
                    });

                    // Trim Element
                    isFunction(arrayProto.trimElement) || objectDefProp(arrayProto, 'trimElement', {
                        // Value
                        value: function trimElement() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return this.trimLeftElement.apply(this.trimRightElement.apply(this, args), args)
                        }
                    });

                    // Trim Left Element
                    isFunction(arrayProto.trimLeftElement) || objectDefProp(arrayProto, 'trimLeftElement', {
                        // Value
                        value: function trimLeftElement() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = True,
                                metadata = [...this],
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Loop
                                        Index Metadata.

                                    > (Modification > Metadata > [Loop Counter] | Data)
                                */
                                for (let j = 0; j < metadata.length; j += 1)
                                    metadata[j] === i && data ? metadata[j] = tmp : data = False;

                            // Update > Metadata
                            metadata = metadata.filter(data => {
                                // Return
                                return data !== tmp
                            });

                            // Modification > Target > Length
                            that.length = 0;

                            /* Loop
                                    Index Metadata.

                                > Update > Target
                            */
                            for (let i of metadata)
                                that.push(i);

                            // Return
                            return that
                        }
                    });

                    // Trim Right Element
                    isFunction(arrayProto.trimRightElement) || objectDefProp(arrayProto, 'trimRightElement', {
                        // Value
                        value: function trimRightElement() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = True,
                                metadata = [...this],
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Loop
                                        Index Metadata.

                                    > (Modification > Metadata > [Loop Counter] | Data)
                                */
                                for (let j = ~-metadata.length; j > -1; j -= 1)
                                    metadata[j] === i && data ? metadata[j] = tmp : data = False;

                            // Update > Metadata
                            metadata = metadata.filter(data => {
                                // Return
                                return data !== tmp
                            });

                            // Modification > Target > Length
                            that.length = 0;

                            /* Loop
                                    Index Metadata.

                                > Update > Target
                            */
                            for (let i of metadata)
                                that.push(i);

                            // Return
                            return that
                        }
                    });

                /* Document Data */
                    // Main Element
                    isFunction(docProto.mainElement) || objectDefProp(docProto, 'mainElement', {
                        // Configurable
                        configurable: True,

                        // Get
                        get: function mainElement() {
                            // Return
                            return docQuerySel('main')
                        }
                    });

                    // Title Element
                    isFunction(docProto.titleElement) || objectDefProp(docProto, 'titleElement', {
                        // Configurable
                        configurable: True,

                        // Get
                        get: function titleElement() {
                            // Return
                            return docQuerySel('title')
                        }
                    });

                /* Element Data */
                    // Add Class
                    isFunction(eleProto.addClass) || objectDefProp(eleProto, 'addClass', {
                        // Value
                        value: function addClass() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Logic
                                    [if:Else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        Index all Arguments.

                                    > Modification > Arguments
                                */
                                for (let i in args)
                                    args[i] = isArray(args[i]) ? args[i].join(' ').replace(/  /g, ' ').trim() : string(args[i]);

                                // Modification > Target > Class
                                that.setAttribute('class', ((that.getAttribute('class') ? that.getAttribute('class') + ' ' : '') + args.join(' ')).trim().split(' ').removeDuplicatedElements().removeFalsyElements().sort().join(' '))
                            }

                            // Return
                            return that.attributes.class || Null
                        }
                    });

                    // Attribute
                    isFunction(eleProto.attr) || objectDefProp(eleProto, 'attr', {
                        // Value
                        value: function attribute() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            // Return
                            return isArray(args[0]) || isObject(args[0]) || args.length > 1 ? eleProto.setAttr.apply(that, args) : eleProto.getAttr.apply(that, args)
                        }
                    });

                    // CSS Selector
                    'CSSSelector' in eleProto || objectDefProp(eleProto, 'CSSSelector', {
                        // Get
                        get: function getCSSSelector() {
                            // Initialization > Data
                            let data = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (data == eleProto)
                                // Return
                                return Null;

                            else {
                                // Initialization > (Metadata, Alpha, Beta, Delta)
                                let metadata = '',
                                    alpha = data.attributes,
                                    beta = data.getAttribute('class'),
                                    delta = LapysJS.regexSet.randomChar;

                                // Update > Metadata
                                !('class' in alpha) || (metadata += beta.hasChar(/[^\w\-\$_ ]/) || beta.hasChar(/ [0-9]/) ? '[class=' + (beta.hasChar(' ') ? "'" + beta + "'" : beta) + ']' : '.' + LapysJS.debug.formatText(beta, 1).join('.'));
                                (data.id == '') || (metadata += (data.id.hasChar(' ') ? "[id='" + data.id + "']" : '#' + data.id));

                                /* Loop
                                        Index Alpha.
                                */
                                for (let i = 0; i < alpha.length; i += 1) {
                                    // Initialization > Beta
                                    let beta = alpha[i];

                                    // Update > Metadata
                                    !(beta.name != 'class' && beta.name != 'id') || (metadata += '[' + beta.name + "=" + (beta.value.hasChar(' ') ? "'" + beta.value + "'" : beta.value) + ']')
                                }

                                // Return
                                return metadata
                            }
                        },

                        // Set
                        set: function setCSSSelector() {
                            // Initialization > (Data, Alpha, Beta, Delta, Epsilon, Target)
                            let data = string(arguments[0]) + ' ',
                                alpha = [],
                                beta = [],
                                delta = getSafeRandomString(),
                                epsilon = getSafeRandomString(),
                                that = this;

                            // Update > Data
                            data = data.replace(/'[^']{0,}'/g, data => {
                                // Update > Alpha
                                alpha.push(data);

                                // Return
                                return delta
                            }).replace(/"[^"]{0,}"/g, data => {
                                // Update > Beta
                                beta.push(data);

                                // Return
                                return epsilon
                            });

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (data.hasChar('.')) {
                                // Initialization > Metadata
                                let metadata = /\.[a-zA-Z_][\w\-_]{0,}/;

                                /* Loop
                                        [do:while statement]
                                */
                                while (data.count(metadata)) {
                                    // Modification > Target > Class
                                    that.addClass(data.getChar(metadata).slice('.'.length));

                                    // Update > Data
                                    data = data.replace(metadata, '')
                                }
                            }

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (data.hasChar('#')) {
                                // Initialization > Metadata
                                let metadata = /#[a-zA-Z_][\w\-_]{0,}/;

                                /* Loop
                                        [do:while statement]
                                */
                                while (data.count(metadata)) {
                                    // Modification > Target > ID
                                    that.id = data.getChar(metadata).slice('#'.length);

                                    // Update > Data
                                    data = data.replace(metadata, '')
                                }
                            }

                            // Update > Data
                            data += ' ';

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (data.hasChar('[')) {
                                // Initialization > (Metadata, Delta, Gamma)
                                let metadata = /\[[^=]{1,}(=[^\]]{1,}|)\]|\[[^=]{1,}(=[^\]]{1,}|) /g,
                                    delta = '',
                                    gamma = getSafeRandomString();

                                /* Loop
                                        [for:of statement]

                                    > Update > Data
                                */
                                for (let i of data.match(metadata))
                                    delta += i + gamma;

                                // Update > Data
                                data = delta;

                                /* Loop
                                        [for:of statement]

                                    > Update > Data
                                */
                                for (let i of beta)
                                    data = data.replace(epsilon, i);

                                /* Loop
                                        [for:of statement]

                                    > Update > Data
                                */
                                for (let i of alpha)
                                    data = data.replace(delta, i);

                                /* Loop
                                        [for:of statement]
                                */
                                for (let i of data.split(gamma))
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (i.trim()) {
                                        // Initialization > (Alpha, Beta, Delta)
                                        let alpha = i.trim(),
                                            beta = alpha.getBeforeChar('=').trim(),
                                            delta = alpha.getAfterChar('=');

                                        // Update > Delta(, Beta)
                                        !(delta.hasChar(' ') && (!delta.endsWith('"') && !delta.endsWith("'") && !delta.startsWith('"') && !delta.startsWith("'"))) || (delta = "'" + delta.trimLeft().getBeforeChar(' ', True) + "'");
                                        !(!delta.hasChar(' ') && (!delta.endsWith('"') && !delta.endsWith("'") && !delta.startsWith('"') && !delta.startsWith("'"))) || (delta = "'" + delta + "'");
                                        !(!delta.endsWith('"') && !delta.endsWith("'") && !delta.startsWith('"') && !delta.startsWith("'")) || (delta = "'" + delta + "'");
                                        (beta[0] != '[') || (beta = beta.slice('['.length));
                                        (delta.lastChar != ']') || (delta = delta.slice(0, -']'.length));

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if ((delta.endsWith('"') && delta.startsWith('"')) || (delta.endsWith("'") && delta.startsWith("'"))) {
                                            // Update > Delta
                                            delta = delta.slice(1, -1);

                                            // Modification > Target > [Beta]
                                            that.setAttribute(beta, delta)
                                        }
                                    }
                            }
                        }
                    });

                    // Delete
                    isFunction(eleProto.delete) || objectDefProp(eleProto, 'delete', {
                        value: function Delete() {
                            // Initialization > Target
                            let that = this;

                            // Deletion
                            isFunction(that.remove) ? that.remove() : (that.parentElement || that.parentNode).removeChild(that)
                        }
                    });

                    // Delete Attribute
                    isFunction(eleProto.delAttr) || objectDefProp(eleProto, 'delAttr', {
                        // Value
                        value: function removeAttribute() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args[0] == '/all')
                                /* Loop
                                        [do:while statement]

                                    > Modification > Target > (...)
                                */
                                while (that.attributes[0])
                                    that.removeAttribute(that.attributes[0].name);

                            else
                                /* Loop
                                        Index Arguments.

                                    > Modification > Target > (...)
                                */
                                for (let i of args)
                                    isNonConstructable(i) || that.removeAttribute(i.constructor == Attr ? i.name : string(i));

                            // Return
                            return that
                        }
                    });

                    // Delete Class
                    isFunction(eleProto.delClass) || objectDefProp(eleProto, 'delClass', {
                        // Value
                        value: function removeClass() {
                            // Initialization > (Arguments, Target, Data)
                            let args = [...arguments],
                                that = this,
                                data = LapysJS.debug.formatText(that.getAttribute('class') || '', 1);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (that.getAttribute('class')) {
                                /* Loop
                                        index Arguments.
                                */
                                for (let i of args)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if ((i || tmp).constructor == regExp) {
                                        // Initialization > (Metadata, Alpha)
                                        let metadata = regExp(i.source, i.flags.replace('g', '')),
                                            alpha = '';

                                        // Update > Metadata
                                        metadata = (data.join(' ').match(metadata) || tmp).index === Undefined ? Null : (data.join(' ').match(metadata) || tmp).index;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (metadata) {
                                            // Update > Data
                                            data = data.join(' ');

                                            // Update > Alpha
                                            alpha = [...data][metadata];

                                            /* Logic
                                                    [do:while statement]

                                                > Update > Alpha
                                            */
                                            while ([...data][metadata += 1] != ' ' && [...data][metadata])
                                                alpha += data[metadata];

                                            // Update > Data
                                            data = data.split(' ')
                                        }

                                        // Update > Data
                                        data.removeElement(alpha)
                                    }

                                    else
                                        // Update > Data
                                        data.removeElement(string(i));

                                // Modification > Target > Class
                                that.setAttribute('class', data.join(' '))
                            }

                            // Return
                            return that.attributes.class || Null
                        }
                    });

                    // Delete Event
                    isFunction(eleProto.delEvent) || objectDefProp(eleProto, 'delEvent', _tmp = {
                        // Value
                        value: function removeEvent() {
                            // Initialization > (Arguments, Data, Metadata, Alpha, Target)
                            let args = [...arguments],
                                data = isArray(args[0]) ? args[0].join(' ') : args[0],
                                metadata = args.slice(1),
                                alpha = typeof removeEventListener == 'function' ? (function() {
                                    // Return
                                    return arguments[0].removeEventListener.apply(arguments[0], [...arguments].slice(1))
                                }) : (function() {
                                    // Return
                                    return arguments[0].detachEvent.apply(arguments[0], ['on' + string(arguments[1])].concat([...arguments].slice(2)))
                                }),
                                that = this;

                            /* Loop
                                    Index Metadata.

                                > Update > Metadata
                            */
                            for (let i in metadata)
                                (typeof metadata[i] != 'string') || (metadata[i] = func(metadata[i]));

                            // Initialization > Omega
                            let omega = [];

                            /* Loop
                                    Index Metadata.

                                > Update > Omega
                            */
                            for (let i of metadata)
                                omega.push(isFunction(i));

                            // Update > Omega
                            omega = omega.indexOf(False) < 0;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Update > Beta
                                beta = [];

                                /* Loop
                                        Index Arguments.

                                    > Update > Beta
                                */
                                for (let i of args)
                                    beta.push(typeof i == 'string');

                                // Update > Beta
                                beta = beta.indexOf(False) < 0;

                                /* Loop
                                        [for:of statement]
                                */
                                for (let i of LapysJS.debug.formatText(data, 1))
                                    /* Loop
                                            [for statement]
                                    */
                                    for (let j of that.getEvent(i) || []) {
                                        // Initialization > Omega
                                        let omega = j.listener;

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (beta)
                                            // Alpha
                                            alpha(that, i, j.listener);

                                        else if (omega)
                                            /* Loop
                                                    [for:of statement]
                                            */
                                            for (let k of metadata) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (omega.name == k.name && string(omega) == string(k)) {
                                                    // Alpha
                                                    alpha(that, i, omega);

                                                    // Break
                                                    break
                                                }
                                            }

                                        else
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (omega.name == metadata[0].name && string(omega) == string(metadata[0])) {
                                                // Alpha
                                                alpha(that, i, omega);

                                                // Break
                                                break
                                            }
                                    }
                            }
                        }
                    });
                        // Definition
                        isFunction(docProto.delEvent) || objectDefProp(docProto, 'delEvent', _tmp);
                        isFunction(winProto.delEvent) || objectDefProp(winProto, 'delEvent', _tmp);

                    // Delete Style
                    isFunction(eleProto.delStyle) || objectDefProp(eleProto, 'delStyle', {
                        // Value
                        value: function removeStyle() {
                            // Initialization > (Arguments, Target, Data)
                            let args = [...arguments].build(data => {
                                // Return
                                return isArray(data) ? data : (isStrictlyArrayLike(data) ? [] : [data])
                            }).build(data => {
                                /* Loop
                                        Index Data.

                                    > Update > Data
                                */
                                for (let i in data)
                                    data[i] = string(data[i]);

                                // Return
                                return data
                            }),
                                that = this,
                                data = that.getAttribute('style') || '';

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Function
                                    // Modify
                                    function modify() {
                                        // Return
                                        return arguments[1] ? string(arguments[0]).replace(/\-[a-z]/g, data => {
                                            // Return
                                            return data.slice('-'.length).toUpperCase()
                                        }) : string(arguments[0]).replace(/[A-Z]/g, data => {
                                            // Return
                                            return '-' + data.toLowerCase()
                                        })
                                    }

                                    // Process
                                    function process() {
                                        // Initialization > (Metadata, Alpha)
                                        let metadata = arguments[0],
                                            alpha = '';

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (metadata == 'animation' || metadata == 'background' || metadata == 'border' || metadata == 'flex' || metadata == 'font' || metadata == 'overflow' || metadata == 'transition')
                                            // Style > Target > [Metadata]
                                            that.style[metadata] = '';

                                        else
                                            // Modification > Target > Style
                                            that.setAttribute('style',
                                                data = data.replace(
                                                    (alpha = ((function() {
                                                        // Initialization > (Alpha, Beta)
                                                        let alpha = [': ', ' :', ' : ', ':'],
                                                            beta = modify(metadata);

                                                        /* Loop
                                                                Index Alpha.
                                                        */
                                                        for (let i of alpha)
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Return
                                                            */
                                                            if (data.indexOf(beta + i) > -1)
                                                                return beta + i;

                                                        // Return
                                                        return ''
                                                    })() +
                                                    (function() {
                                                        // Initialization > (Alpha, Beta)
                                                        let alpha = ['; ', ' ;', ' ; ', ';', ''],
                                                            beta = result(that, modify(metadata));

                                                        /* Loop
                                                                Index Alpha.
                                                        */
                                                        for (let i of alpha)
                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (beta.trim())
                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Return
                                                                */
                                                                if (data.indexOf(beta + '!important' + i) > -1)
                                                                    return beta + '!important' + i;

                                                                else if (data.indexOf(beta + ' !important' + i) > -1)
                                                                    return beta + ' !important' + i;

                                                                else if (data.indexOf(beta + i) > -1)
                                                                    return beta + i;

                                                        // Return
                                                        return ''
                                                    })())).getAfterChar(':').trim() ? alpha : '',
                                                    ''
                                                )
                                            )
                                    }

                                    // Result
                                    function result() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = arguments[1];

                                        // Return
                                        return typeof getComputedStyle == 'function' ? data.style[metadata] || getComputedStyle(data).getPropertyValue(metadata) : data.style[metadata]
                                    }

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i of args)
                                    /* Loop
                                            Index Loop Counter.

                                        > Process
                                    */
                                    for (let j of i)
                                        process(string(j));

                                // Modification > Target > Style
                                that.setAttribute('style', (that.getAttribute('style') || '').trimRightChar(/ |\n|;/))
                                that.getAttribute('style') || that.removeAttribute('style');

                                // Return
                                return that.attributes.style || Null
                            }

                            // Return
                            return that
                        }
                    });

                    // Descendant Index
                    'descendantIndex' in eleProto || objectDefProp(eleProto, 'descendantIndex', {
                        // Get
                        get: function descendantIndex() {
                            // Return
                            return toArray((this.parentElement || this.parentNode).children).indexOf(this)
                        }
                    });

                    // Get Attribute
                    isFunction(eleProto.getAttr) || objectDefProp(eleProto, 'getAttr', {
                        // Value
                        value: function getAttribute() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = LapysJS.namedArray('LapysJSNamedNodeMap'),
                                that = this;

                            // Update > Arguments
                            (args[0] != '/all') || (args = toArray(that.attributes).build(data => {
                                // Return
                                return data.name
                            }));

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args) {
                                // Initialization > Metadata
                                let metadata = i.constructor == Attr ? i.name : string(i);

                                // Update > Data
                                isNonConstructable(i) || (data.push(that.getAttribute(metadata)), data[metadata] = that.getAttribute(metadata));
                            }

                            // Return
                            return data.length > 1 ? data : data[0]
                        }
                    });

                    // Get CSS
                    isFunction(eleProto.getCSS) || objectDefProp(eleProto, 'getCSS', {
                        // Value
                        value: function getCSS() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = LapysJS.namedArray('CSSStyleList'),
                                that = this;

                            /* Loop
                                    Index Arguments.

                                > Update > Data
                            */
                            for (let i of args)
                                data.push(that.style[i.replace(/[A-Z]/g, data => {
                                    // Return
                                    return '-' + data.toLowerCase()
                                })] || getComputedStyle(that).getPropertyValue(i.replace(/[A-Z]/g, data => {
                                    // Return
                                    return '-' + data.toLowerCase()
                                })));

                            // Return
                            return data.length > 1 ? data : data[0]
                        }
                    });

                    // Get CSS Animation Length
                    isFunction(eleProto.getCSSAnimationLength) || objectDefProp(eleProto, 'getCSSAnimationLength', {
                        // Value
                        value: function getCSSAnimationLength() {
                            // Initialization > (Arguments, (...))
                            let args = [...arguments],
                                data = arguments[0],
                                that = this,
                                alpha = 1e3,
                                metadata = '',
                                delay = (function() { return metadata = that.getCSS('animation-delay') })().endsWith('ms') ?
                                    _numberParseMeasurement(metadata) / alpha :
                                    _numberParseMeasurement(metadata),
                                duration = (function() { return metadata = that.getCSS('animation-duration') })().endsWith('ms') ?
                                    _numberParseMeasurement(metadata) / alpha :
                                    _numberParseMeasurement(metadata);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length)
                                /* Logic
                                        [switch:case:default statement]

                                    > Return
                                */
                                switch (data) {
                                    // Delay
                                    case 'delay':
                                        return delay;
                                        break;

                                    // Duration
                                    case 'duration':
                                        return duration
                                }

                            // Return
                            return delay + duration
                        }
                    });

                    // Get CSS Transition Length
                    isFunction(eleProto.getCSSTransitionLength) || objectDefProp(eleProto, 'getCSSTransitionLength', {
                        // Value
                        value: function getCSSTransitionLength() {
                            // Initialization > (Arguments, (...))
                            let args = [...arguments],
                                data = arguments[0],
                                that = this,
                                alpha = 1e3,
                                metadata = '',
                                delay = (function() { return metadata = that.getCSS('transition-delay') })().endsWith('ms') ?
                                    _numberParseMeasurement(metadata) / alpha :
                                    _numberParseMeasurement(metadata),
                                duration = (function() { return metadata = that.getCSS('transition-duration') })().endsWith('ms') ?
                                    _numberParseMeasurement(metadata) / alpha :
                                    _numberParseMeasurement(metadata);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length)
                                /* Logic
                                        [switch:case:default statement]

                                    > Return
                                */
                                switch (data) {
                                    // Delay
                                    case 'delay':
                                        return delay;
                                        break;

                                    // Duration
                                    case 'duration':
                                        return duration
                                }

                            // Return
                            return delay + duration
                        }
                    });

                    // Get Element By ID
                    isFunction(eleProto.getElementById) || objectDefProp(eleProto, 'getElementById', {
                        // Value
                        value: function getElementById() {
                            // Error Handling
                            try {
                                // Return
                                return this.querySelector('#' + string(arguments[0]))
                            }

                            catch (error) {
                                // Return
                                return Null
                            }
                        }
                    });

                    // Get Event
                    isFunction(eleProto.getEvent) || objectDefProp(eleProto, 'getEvent', _tmp = {
                        // Value
                        value: function getEvent() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            // Return
                            return (args.length > 1 ? (that.getEvents()[string(args[0])] ? that.getEvents()[string(args[0])][args[1]] : Null) : that.getEvents()[string(args[0])]) || Null
                        }
                    });
                        // Definition
                        isFunction(docProto.getEvent) || objectDefProp(docProto, 'getEvent', _tmp);
                        isFunction(winProto.getEvent) || objectDefProp(winProto, 'getEvent', _tmp);

                    // Get Events
                    isFunction(eleProto.getEvents) || objectDefProp(eleProto, 'getEvents', _tmp = {
                        // Value
                        value: function getEvents() {
                            // Initialization > (Target, Data)
                            let that = this,
                                data = typeof getEventListeners == 'function' ?
                                    new (function LapysJSEventMap() {
                                        /* Loop
                                                [for statement]

                                            > Modification > Target > [Loop Counter]
                                        */
                                        for (let i in getEventListeners(that))
                                            this[i] = getEventListeners(that)[i]
                                    }) : (function() {
                                        // Initialization > (Metadata, Alpha)
                                        let metadata = [],
                                            alpha = new (function LapysJSEventMap() {});

                                        /* Loop
                                                [for statement]

                                            > Update > Metadata
                                        */
                                        for (let i of LapysJS.perm.eventElementList)
                                            (i.node !== that) || metadata.push({listener: i.listener, node: i.node, type: i.type});

                                        /* Loop
                                                [for statement]

                                            > Update > [Object]
                                        */
                                        for (let i of metadata)
                                            i.type in alpha ? alpha[i.type].push({listener: i.listener, type: i.type}) : alpha[i.type] = [{listener: i.listener, type: i.type}];

                                        // Return
                                        return alpha
                                    })();

                            // Return
                            return data
                        }
                    });
                        // Definition
                        isFunction(docProto.getEvents) || objectDefProp(docProto, 'getEvents', _tmp);
                        isFunction(winProto.getEvents) || objectDefProp(winProto, 'getEvents', _tmp);

                    // Has Attribute
                    isFunction(eleProto.hasAttr) || objectDefProp(eleProto, 'hasAttr', {
                        // Value
                        value: function hasAttribute() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = [],
                                that = this;

                            /* Loop
                                    Index Arguments.

                                > Update > Data
                            */
                            for (let i of args)
                                data.push(that.hasAttribute(string(i)));

                            // Return
                            return data.indexOf(False) < 0
                        }
                    });

                    // Has Class
                    isFunction(eleProto.hasClass) || objectDefProp(eleProto, 'hasClass', {
                        // Value
                        value: function hasClass() {
                            // Initialization > (Arguments, Target, Data)
                            let args = [...arguments],
                                that = this,
                                data = LapysJS.debug.formatText(that.getAttribute('class') || '', 1);

                            // Return
                            return args.length ? that.getAttribute('class') ? data.hasArrayElements(args) : False : Null
                        }
                    });

                    // Height
                    'width' in eleProto || objectDefProp(eleProto, 'height', {
                        // Get
                        get: function getHeight() {
                            // Return
                            return this.getBoundingClientRect().height
                        },

                        // Set
                        set: function setHeight() {
                            // Target > Style > Height
                            this.style.height = _numberParseNumber(arguments[0]) + 'px'
                        }
                    });

                    // In Fullscreen
                    isFunction(eleProto.inFullscreen) || objectDefProp(eleProto, 'inFullscreen', {
                        // Value
                        value: function inFullscreen() {
                            // Return
                            return screen.height != innerHeight ? this == LapysJS.perm.fullscreenElement : False
                        }
                    });

                    // Insert After
                    isFunction(eleProto.insertAfter) || objectDefProp(eleProto, 'insertAfter', {
                        // Value
                        value: function insertAfter() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            // Error Handling
                            try {
                                // Insertion
                                that.insertBefore(args[1], args[0]);
                                that.insertBefore(args[0], args[1])
                            }

                            catch (error) {
                                // Error
                                throw LapysJS.error("Failed to execute 'insertAfter' on 'Node': The node after which the new node is to be inserted is not a child of this node.")
                            }

                            // Return
                            return args[1]
                        }
                    });

                    // Insert Child
                    isFunction(eleProto.insertChild) || objectDefProp(eleProto, 'insertChild', _tmp = {
                        // Value
                        value: function insertChild() {
                            // Initialization > (Arguments, Argument Set, Data, Metadata, Target)
                            let args = [...arguments],
                                argSet = args.slice(1),
                                data = string(args[0]),
                                metadata = [],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]

                                > Update
                            */
                            if (isArrayLike(args[0]) || isElement(args[0])) {
                                // Data
                                data = 'end';

                                // Argument Set
                                argSet.addElementToBack(args[0])
                            }

                            /* Logic
                                    [if:else if:else statement]

                                > Error
                            */
                            if (data != 'begin' && data != 'end' && args.length)
                                throw LapysJS.error(data, 'only', ["'begin'", "'end'"]);

                            /* Loop
                                    Index Argument Set.
                            */
                            for (let i in argSet)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (isArrayLike(argSet[i]))
                                    /* Loop
                                            Index Argument Set.

                                        > Update > Metadata
                                    */
                                    for (let j of argSet[i])
                                        metadata.push(j);

                                else
                                    // Update > Metadata
                                    metadata.push(argSet[i]);

                            // Update > Argument Set
                            argSet = metadata;

                            /* Loop
                                    Index Argument Set.

                                > Error Handling
                            */
                            for (let i of argSet)
                                try {
                                    /* Logic
                                            [switch:case:default statement]

                                        > Insertion
                                    */
                                    switch (data) {
                                        // Begin
                                        case 'begin':
                                            isFunction(that.prepend) ? that.prepend(i) : (function() {
                                                that.appendChild(i);
                                                !that.firstElementChild || that.insertBefore(i, that.firstElementChild)
                                            })();
                                            break;

                                        // End
                                        case 'end':
                                            isFunction(that.append) ? that.append(i) : that.appendChild(i)
                                    }
                                }

                                catch (error) {
                                    // Error
                                    throw LapysJS.error(i, 'not', 'element')
                                }

                            // Return
                            return args.length > 2 ? argSet : args[1]
                        }
                    });
                        // Definition
                        isFunction(docProto.insertChild) || objectDefProp(docProto, 'insertChild', _tmp);
                        isFunction(docFragProto.insertChild) || objectDefProp(docFragProto, 'insertChild', _tmp);

                    // Invoke Event
                    isFunction(eleProto.invokeEvent) || objectDefProp(eleProto, 'invokeEvent', _tmp = {
                        // Value
                        value: function invokeEvent() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            // Target > (Add, Run) Event
                            isFunction(that.addEvent) ? that.addEvent.apply(that, args) : that.setEvent.apply(that, args);
                            that.runEvent.apply(that, args)
                        }
                    });
                        // Definition
                        isFunction(docProto.invokeEvent) || objectDefProp(docProto, 'invokeEvent', _tmp);
                        isFunction(winProto.invokeEvent) || objectDefProp(winProto, 'invokeEvent', _tmp);

                    // Next Element Siblings
                    isFunction(eleProto.nextElementSiblings) || objectDefProp(eleProto, 'nextElementSiblings', {
                        // Get
                        get: function nextElementSiblings() {
                            // Initialization > Target
                            let that = this;

                            /* Logic
                                    [if:else if:else statement]

                                > Return
                            */
                            if (that == eleProto)
                                return Null;

                            else {
                                // Initialization > Data
                                let data = [];

                                /* Loop
                                        [for:of statement]

                                    > Update > Data
                                */
                                for (let i of toArray((that.parentElement || that.parentNode).children))
                                    (i.descendantIndex < -~that) || data.push(i);

                                // Return
                                return data.removeElement(that)
                            }
                        }
                    });

                    // Observe Event
                    isFunction(eleProto.observeEvent) || objectDefProp(eleProto, 'observeEvent', _tmp = {
                        // Value
                        value: function observeEvent() {
                            // Initialization > (Arguments, Argument Set, Data, Target)
                            let args = [...arguments],
                                argSet = args.slice(1),
                                data = isArrayLike(args[0]) ? toArray(args[0]) : [args[0]],
                                that = isWindow(this) ? (this.document || document) : this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isArrayLike(args[0]) && !isElement(args[0]))
                                    throw LapysJS.error(args[0], 'not', ['array-like object', 'element']);

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isArray(argSet[0]) && typeof argSet[0] != 'string')
                                    throw LapysJS.error(argSet[0], 'not', ['array', 'string']);

                                /* Loop
                                        Index Argument Set.

                                    > Update > Argument Set
                                */
                                for (let i in argSet)
                                    (i == 0) || (typeof argSet[i] != 'string') || (argSet[i] = func(argSet[i]));

                                /* Loop
                                        Index Argument Set.
                                */
                                for (let i in argSet)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isFunction(argSet[i])) {
                                        // Initialization > Metadata
                                        let metadata = argSet[i].bind({});

                                        // Update > Argument Set
                                        argSet[i] = (function(event) {
                                            // Metadata
                                            !(data.indexOf(getEventTarget()) > -1 && that.contains(getEventTarget())) || metadata()
                                        })
                                    }

                                // Event > Target > [Argument Set]
                                that.setEvent.apply(that, argSet)
                            }
                        }
                    });
                        // Definition
                        isFunction(docProto.observeEvent) || objectDefProp(docProto, 'observeEvent', _tmp);
                        isFunction(winProto.observeEvent) || objectDefProp(winProto, 'observeEvent', _tmp);

                    // Observe Event By Query Selector
                    isFunction(eleProto.observeEventByQuerySelector) || objectDefProp(eleProto, 'observeEventByQuerySelector', _tmp = {
                        // Value
                        value: function observeEventByQuerySelector() {
                            // Initialization > (Arguments, Argument Set, Data, Target)
                            let args = [...arguments],
                                argSet = args.slice(1),
                                data = string(args[0]),
                                that = isWindow(this) ? (this.document || document) : this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isArray(argSet[0]) && typeof argSet[0] != 'string')
                                    throw LapysJS.error(argSet[0], 'not', ['array', 'string']);

                                /* Loop
                                        Index Argument Set.

                                    > Update > Argument Set
                                */
                                for (let i in argSet)
                                    (i == 0) || (typeof argSet[i] != 'string') || (argSet[i] = func(argSet[i]));

                                /* Loop
                                        Index Argument Set.
                                */
                                for (let i in argSet)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isFunction(argSet[i])) {
                                        // Initialization > Metadata
                                        let metadata = argSet[i].bind({});

                                        // Update > Argument Set
                                        argSet[i] = (function(event) {
                                            // Error Handling
                                            try {
                                                // Target > Query Selector All
                                                that.querySelectorAll(data)
                                            }

                                            catch (error) {
                                                // Error
                                                throw LapysJS.error("Invalid selection query '" + data + "'.")
                                            }

                                            // Metadata
                                            !(toArray(that.querySelectorAll(data)).indexOf(getEventTarget()) > -1 && that.contains(getEventTarget())) || metadata()
                                        })
                                    }

                                // Event > Target > [Argument Set]
                                that.setEvent.apply(that, argSet)
                            }
                        }
                    });
                        // Definition
                        isFunction(docProto.observeEventByQuerySelector) || objectDefProp(docProto, 'observeEventByQuerySelector', _tmp);
                        isFunction(winProto.observeEventByQuerySelector) || objectDefProp(winProto, 'observeEventByQuerySelector', _tmp);

                    // Offset
                    'offset' in eleProto || objectDefProp(eleProto, 'offset', {
                        // Get
                        get: function offset() {
                            // Initialization > (Data, Target, Metadata)
                            let data = LapysJS.namedObject('LapysJSBoundingBox'),
                                that = this,
                                metadata = that.getBoundingClientRect();

                            /* Loop
                                    Index Metadata.

                                > Modification > Data > [Property Name]
                            */
                            for (let i in metadata)
                                (typeof metadata[i] != 'number') || objectDefProp(data, i, {
                                    // Get
                                    get: function() {
                                        // Return
                                        return metadata[i]
                                    },

                                    // Set
                                    set: function() {
                                        // Style > Target > [Property Name]
                                        that.style[i] = arguments[0] + 'px'
                                    }
                                });

                            // Return
                            return data
                        }
                    });

                    // Parent
                    'parent' in eleProto || objectDefProp(eleProto, 'parent', {
                        // Get
                        get: function parent() {
                            // Return
                            return this == eleProto ? Undefined : (this.parentElement || this.parentNode)
                        }
                    });

                    // Parent Path
                    'parentPath' in eleProto || objectDefProp(eleProto, 'parentPath', {
                        // Get
                        get: function parentPath() {
                            // Initialization
                                // Target
                                let that = this;

                                // Parent Nodes
                                let parents = [];

                            /* Logic
                                    While
                                        the Target is still defined.
                            */
                            while (that) {
                                // Update
                                    // Parent Nodes
                                    parents.push(that);

                                    // Target
                                    that = that.parentNode || that.parentElement
                            };

                            // Update > Parent Nodes
                            parents.push(window);

                            // Return
                            return parents
                        }
                    });

                    // Previous Element Siblings
                    isFunction(eleProto.previousElementSiblings) || objectDefProp(eleProto, 'previousElementSiblings', {
                        // Get
                        get: function previousElementSiblings() {
                            // Initialization > Target
                            let that = this;

                            /* Logic
                                    [if:else if:else statement]

                                > Return
                            */
                            if (that == eleProto)
                                return Null;

                            else {
                                // Initialization > Data
                                let data = [];

                                /* Loop
                                        [for:of statement]

                                    > Update > Data
                                */
                                for (let i of toArray((that.parentElement || that.parentNode).children))
                                    (i.descendantIndex > ~-that) || data.push(i);

                                // Return
                                return data.removeElement(that)
                            }
                        }
                    });

                    // Replace Attribute
                    isFunction(eleProto.replAttr) || objectDefProp(eleProto, 'replAttr', {
                        // Value
                        value: function replaceAttribute() {
                                // Initialization > (Arguments, Data, Target)
                                let args = [...arguments],
                                    data = [],
                                    that = this;

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data.push(isArray(i));

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (data.indexOf(True) > -1) {
                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i of args)
                                        /* Logic
                                                [if:else if:else statement]

                                            > Error
                                        */
                                        if (!isArray(i))
                                            throw LapysJS.error(i, 'not', 'array');

                                    /* Loop
                                            Index Arguments.
                                    */
                                    for (let i of args)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (!isNonConstructable(i[0]) && !isNonConstructable(i[1])) {
                                            // Initialization > Metadata
                                            let metadata = i[0].constructor == Attr ? i[0].name : string(i[0]);

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (that.hasAttribute(metadata)) {
                                                // Modification > Target > (...)
                                                that.removeAttribute(metadata);
                                                that.setAttribute(i[1].constructor == Attr ? i[1].name : string(i[1]), 2 in i ? i[2] : '')
                                            }

                                            else {
                                                // LapysJS > Warn
                                                LapysJS.warn('Please specify an existing attribute.');

                                                // Break
                                                break
                                            }
                                        }
                                }

                                else {
                                    // Modification > Arguments > Length
                                    args.length = 3;

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (!isNonConstructable(args[0]) && !isNonConstructable(args[1])) {
                                        // Initialization > Metadata
                                        let metadata = args[0].constructor == Attr ? args[0].name : string(args[0]);

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (that.hasAttribute(metadata)) {
                                            // Modification > Target > (...)
                                            that.removeAttribute(metadata);
                                            that.setAttribute(args[1].constructor == Attr ? args[1].name : string(args[1]), 2 in args ? args[2] : '')
                                        }

                                        else
                                            // LapysJS > Warn
                                            LapysJS.warn('Please specify an existing attribute.')
                                    }
                                }

                                // Return
                                return that
                        }
                    });

                    // Run Event
                    isFunction(eleProto.runEvent) || objectDefProp(eleProto, 'runEvent', _tmp = {
                        // Value
                        value: function runEvent() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments.

                                > Update > Arguments
                            */
                            for (let i in args)
                                args[i] = string(args[i]);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (isFunction(document.createEvent)) {
                                    // Initialization > Data
                                    let data = docCreateEvent('HTMLEvents');

                                    // Data > Initialize Event
                                    data.initEvent(i, False, True);

                                    // Target > Dispatch Event
                                    that.dispatchEvent(data)
                                }

                                else
                                    // Target > Fire Event
                                    that.fireEvent('on' + i)
                        }
                    });
                        // Definition
                        isFunction(docProto.runEvent) || objectDefProp(docProto, 'runEvent', _tmp);
                        isFunction(winProto.runEvent) || objectDefProp(winProto, 'runEvent', _tmp);

                    // Set Attribute
                    isFunction(eleProto.setAttr) || objectDefProp(eleProto, 'setAttr', {
                        // Value
                        value: function setAttribute() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isArray(data) && !isObject(data) && typeof data != 'string')
                                    throw LapysJS.error(data, 'not', ['array', 'object', 'string']);

                                // Function > Update
                                function update() {
                                    // Return
                                    return string(arguments[0]).replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    })
                                }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (isObject(data)) {
                                    // LapysJS > Warn
                                    (args.length < 2) || LapysJS.warn('Only 1 argument required in this case, all other arguments will be ignored');

                                    /* Loop
                                            Index Data.

                                        > Modification > Target > [Loop Counter]
                                    */
                                    for (let i in data)
                                        that.setAttribute(update(i), data[i]);

                                    // Return
                                    return objectKeys(data).length > 1 ? LapysJS.namedArray('LapysJSNamedNodeMap').concat(objectKeys(data)).build(data => {
                                        // Return
                                        return that.getAttributeNode(update(data))
                                    }).removeElementFromBack(Null) : that.getAttributeNode(update(objectKeys(data)[0]))
                                }

                                else if (typeof data == 'string' && args.length == 1) {
                                    // Modification > Target > [Data]
                                    that.setAttribute(data, '');

                                    // Return
                                    return that.getAttributeNode(data)
                                }

                                else if (typeof data == 'string' && !isArray(metadata)) {
                                    // Modification > Target > [Data]
                                    that.setAttribute(data, metadata);

                                    // Return
                                    return that.getAttributeNode(data)
                                }

                                else if (typeof data == 'string' && isArray(metadata)) {
                                    // Modification > Target > [Data]
                                    that.setAttribute(data, metadata.randomElement);

                                    // Return
                                    return that.getAttributeNode(data)
                                }

                                else if (isArray(data) && args.length == 1) {
                                    /* Loop
                                            Index Data.

                                        > Modification > Target > [Loop Counter]
                                    */
                                    for (let i of data)
                                        that.setAttribute(string(i), '');

                                    // Return
                                    return data.build(data => {
                                        // Return
                                        return that.getAttributeNode(string(data))
                                    })
                                }

                                else if (isArray(data) && !isArray(metadata)) {
                                    /* Loop
                                            Index Data.

                                        > Modification > Target > [Loop Counter]
                                    */
                                    for (let i of data)
                                        that.setAttribute(string(i), metadata);

                                    // Return
                                    return data.build(data => {
                                        // Return
                                        return that.getAttributeNode(string(data))
                                    })
                                }

                                else if (isArray(data) && isArray(metadata)) {
                                    /* Loop
                                            Index Data.

                                        > Modification > Target > [Loop Counter]
                                    */
                                    for (let i of data)
                                        that.setAttribute(string(i), i in metadata ? metadata[i] : '');

                                    // Return
                                    return data.build(data => {
                                        // Return
                                        return that.getAttributeNode(string(data))
                                    })
                                }
                            }

                            // Return
                            return that
                        }
                    });

                    // Set CSS
                    isFunction(eleProto.setCSS) || objectDefProp(eleProto, 'setCSS', {
                        // Value
                        value: function setCSS() {
                            // Initialization > (Arguments, (...))
                            let args = [...arguments],
                                data = args[0],
                                defaultValue = 'initial',
                                metadata = args[1],
                                propertyName = [],
                                propertyValue = [],
                                syntax = '',
                                that = this;

                            // LapysJS > Warn
                            (args.length < 3) || LapysJS.warn('Only 2 arguments required in this case, all other arguments will be ignored');

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Function
                                    // Modify
                                    function modify() {
                                        // Return
                                        return arguments[1] ? string(arguments[0]).replace(/\-[a-z]/g, data => {
                                            // Return
                                            return data.slice('-'.length).toUpperCase()
                                        }) : string(arguments[0]).replace(/[A-Z]/g, data => {
                                            // Return
                                            return '-' + data.toLowerCase()
                                        })
                                    }

                                    // Process
                                    function process() {
                                        // Initialization > (Data, Metadata)
                                        let data = modify(string(arguments[0])),
                                            metadata = update(arguments[1], data);

                                        /* Logic
                                                [if:else if:else statement]

                                            > Update
                                        */
                                        if (data.indexOf(':') && data.indexOf(':') > -1 && data.length > data.indexOf(':'))
                                            // Syntax
                                            syntax += data;

                                        else {
                                            // Property (Name, Value)
                                            propertyName.push(data);
                                            propertyValue.push(metadata)
                                        }
                                    }

                                    // Update
                                    function update() {
                                        // Initialization > (Data, Metadata)
                                        let data = arguments[0],
                                            metadata = arguments[1];

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (data === '')
                                            // Update > Data
                                            data = defaultValue;

                                        else if (typeof data == 'number')
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Update > Data
                                            */
                                            if (
                                                metadata == 'animation-delay' || metadata == 'animation-duration' ||
                                                metadata == 'transition-delay' || metadata == 'transition-duration'
                                            )
                                                data += 's';

                                            else if (
                                                metadata == 'background-position' || metadata == 'background-position-x' || metadata == 'background-position-y' || metadata == 'background-size' || metadata == 'block-size' || metadata == 'border-bottom-left-radius' || metadata == 'border-bottom-right-radius' || metadata == 'border-bottom-width' || metadata == 'border-image-outset' || metadata == 'border-left-width' || metadata == 'border-right-width' || metadata == 'border-top-left-radius' || metadata == 'border-top-right-radius' || metadata == 'border-top-width' || metadata == 'border-width' || metadata == 'bottom' ||
                                                metadata == 'column-rule-width' ||
                                                metadata == 'font-size' ||
                                                metadata == 'grid-column-gap' || metadata == 'grid-row-gap' ||
                                                metadata == 'height' ||
                                                metadata == 'inline-size' ||
                                                metadata == 'left' || metadata == 'line-height-step' ||
                                                metadata == 'margin' || metadata == 'margin-bottom' || metadata == 'margin-left' || metadata == 'margin-right' || metadata == 'margin-top' || metadata == 'max-block-size' || metadata == 'max-height' || metadata == 'max-inline-size' || metadata == 'max-width' || metadata == 'min-block-size' || metadata == 'min-height' || metadata == 'min-inline-size' || metadata == 'min-width' ||
                                                metadata == 'padding' || metadata == 'padding-bottom' || metadata == 'padding-left' || metadata == 'padding-right' || metadata == 'padding-top' || metadata == 'perspective' || metadata == 'perspective-origin' ||
                                                metadata == 'r' || metadata == 'rx' || metadata == 'ry' || metadata == 'right' ||
                                                metadata == 'shape-margin' || metadata == 'stroke-dash-offset' || metadata == 'stroke-width' ||
                                                metadata == 'text-indent' || metadata == 'top' ||
                                                metadata == 'x' ||
                                                metadata == 'y' ||
                                                metadata == 'width'
                                            )
                                                data += 'px';

                                        // Return
                                        return data
                                    }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (isObject(data)) {
                                    // LapysJS > Warn
                                    (args.length < 2) || LapysJS.warn('Only 1 argument required in this case, all other arguments will be ignored');

                                    /* Loop
                                            Index Data.
                                    */
                                    for (let i in data) {
                                        // Initialization > Metadata
                                        let metadata = data[i];

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (isObject(metadata))
                                            /* Loop
                                                    Index Metadata.
                                            */
                                            for (let j in metadata) {
                                                // Initialization > Alpha
                                                let alpha = metadata[j];

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (isObject(alpha))
                                                    /* Loop
                                                            Index Alpha.
                                                    */
                                                    for (let k in alpha) {
                                                        // Initialization > Beta
                                                        let beta = alpha[k];

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (isObject(beta))
                                                            /* Loop
                                                                    Index Beta.
                                                            */
                                                            for (let l in beta) {
                                                                // Initialization > Delta
                                                                let delta = beta[l];

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (isObject(delta))
                                                                    /* Loop
                                                                            Index Delta.
                                                                    */
                                                                    for (let m in delta) {
                                                                        // Initialization > Epsilon
                                                                        let epsilon = delta[m];

                                                                        // Update > Property (Name, Value)
                                                                        propertyName.push(modify(i) + '-' + modify(j) + '-' + modify(k) + '-' + modify(l) + '-' + modify(m));
                                                                        propertyValue.push(update(epsilon, modify(i) + '-' + modify(j) + '-' + modify(k) + '-' + modify(l) + '-' + modify(m)))
                                                                    }

                                                                else {
                                                                    // Update > Property (Name, Value)
                                                                    propertyName.push(modify(i) + '-' + modify(j) + '-' + modify(k) + '-' + modify(l));
                                                                    propertyValue.push(update(delta, modify(i) + '-' + modify(j) + '-' + modify(k) + '-' + modify(l)))
                                                                }
                                                            }

                                                        else {
                                                            // Update > Property (Name, Value)
                                                            propertyName.push(modify(i) + '-' + modify(j) + '-' + modify(k));
                                                            propertyValue.push(update(beta, modify(i) + '-' + modify(j) + '-' + modify(k)))
                                                        }
                                                    }

                                                else {
                                                    // Update > Property (Name, Value)
                                                    propertyName.push(modify(i) + '-' + modify(j));
                                                    propertyValue.push(update(alpha, modify(i) + '-' + modify(j)))
                                                }
                                            }

                                        else {
                                            // Update > Property (Name, Value)
                                            propertyName.push(modify(i));
                                            propertyValue.push(update(metadata, modify(i)))
                                        }
                                    }
                                }

                                else if (isArray(data) && args.length == 1)
                                    /* Loop
                                            Index Data.

                                        > Process
                                    */
                                    for (let i of data)
                                        process(string(i), defaultValue);

                                else if (typeof data == 'string' && args.length == 1)
                                    // Process
                                    process(data, defaultValue);

                                else if (isArray(data) && !isArray(metadata))
                                    /* Loop
                                            Index Data.

                                        > Process
                                    */
                                    for (let i of data)
                                        process(string(i), update(metadata, string(i)));

                                else if (isArray(data) && isArray(metadata))
                                    /* Loop
                                            Index Data.

                                        > Process
                                    */
                                    for (let i in data)
                                        process(string(data[i]), update(metadata[i], string(data[i])));

                                else if (typeof data == 'string' && !isArray(metadata))
                                    // Process
                                    process(data, update(metadata, data));

                                else if (typeof data == 'string' && isArray(metadata))
                                    // Process
                                    process(data, update(metadata.randomElement, data));

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (syntax !== '') {
                                    // Initialization > (Data, Metadata, Alpha, Beta, Delta)
                                    let data = [],
                                        metadata = [],
                                        alpha = getSafeRandomString(),
                                        beta = getSafeRandomString(),
                                        delta = getSafeRandomString();

                                    // Update > Syntax
                                    syntax = syntax.replace(/'[^']{0,}'/g, metadata => {
                                        // Update > Data
                                        data.push(metadata);

                                        // Return
                                        return alpha
                                    }).replace(/"[^"]{0,}"/g, data => {
                                        // Update > Metadata
                                        metadata.push(data);

                                        // Return
                                        return beta
                                    }).split(';').build(data => {
                                        // Return
                                        return data.trim()
                                    }).join(delta);

                                    /* Loop
                                            Index Metadata.

                                        > Update > Syntax
                                    */
                                    for (let i of metadata)
                                        syntax = syntax.replace(beta, i);

                                    /* Loop
                                            Index Data.

                                        > Update > Syntax
                                    */
                                    for (let i of data)
                                        syntax = syntax.replace(alpha, i);

                                    // Update > Syntax
                                    syntax = syntax.split(delta);

                                    /* Loop
                                            Index Syntax.
                                    */
                                    for (let i of syntax)
                                        /* Logic
                                                [if:else if:else statement]

                                            > Update
                                        */
                                        if (i.getAfterChar(':').trim()) {
                                            // Property Name
                                            propertyName.push(i.getBeforeChar(':').trim());

                                            // Property Value
                                            propertyValue.push(i.getAfterChar(':').trim())
                                        }
                                }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (propertyName.convert(data => { return string(data) }).length == propertyValue.length)
                                    /* Loop
                                            Index Property Name.

                                        > ((...) | (Style > Target > [Property Name]))
                                    */
                                    for (let i in propertyName)
                                        string(propertyValue[i]).trimRight().endsWith('!important') ?
                                            (function() {
                                                // Style > Target > [Property Name]
                                                that.delStyle(propertyName[i]);

                                                // Modification > Target > Style
                                                that.setAttribute('style', (that.getAttribute('style') || '').trimRightChar(/ |\n|;/) + '; ' + propertyName[i] + ': ' + propertyValue[i] + ';')
                                            })() :
                                            that.style[modify(propertyName[i], True)] = string(propertyValue[i]);

                                // Modification > Target > Style
                                that.setAttribute('style', (that.getAttribute('style') || '').trimChar(/ |\n|;/));
                                that.getAttribute('style') || that.removeAttribute('style');

                                // Return
                                return that.attributes.style || Null
                            }

                            // Return
                            return that
                        }
                    });

                    // Set Event
                    isFunction(eleProto.setEvent) || objectDefProp(eleProto, 'setEvent', _tmp = {
                        // Value
                        value: function setEvent() {
                            // Initialization > (Arguments, Data, Metadata, Alpha, Target)
                            let args = [...arguments],
                                data = (args[0] || tmp).constructor == Array ? args[0].join(' ') : args[0],
                                metadata = args.slice(1),
                                alpha = typeof addEventListener == 'function' ? (function() {
                                    // Initialization > Beta
                                    let beta = LapysJS.perm.eventElementList;

                                    /* Loop
                                            [for:in statement]
                                    */
                                    for (let i in beta) {
                                        // Initialization > Delta
                                        let delta = beta[i];

                                        /* Logic
                                                [if:else if:else statement]

                                            > Deletion
                                        */
                                        if (
                                            delta.node === arguments[0] &&
                                            delta.type == arguments[1] &&
                                            (
                                                delta.listener.name == arguments[2].name &&
                                                string(delta.listener) == string(arguments[2])
                                            )
                                        )
                                            delete beta[i]
                                    }

                                    // Update > (LapysJS > Permanent Data > Event Elements List)
                                    beta.removeFalsyElements().push({
                                        // Listener
                                        listener: arguments[2],

                                        // Node
                                        node: arguments[0],

                                        // Type
                                        type: arguments[1]
                                    });

                                    // Return
                                    return arguments[0].addEventListener.apply(arguments[0], [...arguments].slice(1))
                                }) : (function() {
                                    // Initialization > Beta
                                    let beta = LapysJS.perm.eventElementList;

                                    /* Loop
                                            [for:in statement]
                                    */
                                    for (let i in beta) {
                                        // Initialization > Delta
                                        let delta = beta[i];

                                        /* Logic
                                                [if:else if:else statement]

                                            > Deletion
                                        */
                                        if (
                                            delta.node === arguments[0] &&
                                            delta.type == arguments[1] &&
                                            (
                                                delta.listener.name == arguments[2].name &&
                                                string(delta.listener) == string(arguments[2])
                                            )
                                        )
                                            delete beta[i]
                                    }

                                    // Update > (LapysJS > Permanent Data > Event Elements List)
                                    beta.removeFalsyElements().push({
                                        // Listener
                                        listener: arguments[2],

                                        // Node
                                        node: arguments[0],

                                        // Type
                                        type: arguments[1]
                                    });

                                    // Return
                                    return arguments[0].attachEvent.apply(arguments[0], ['on' + string(arguments[1])].concat([...arguments].slice(2)))
                                }),
                                that = this;

                            /* Loop
                                    Index Metadata.

                                > Update > Metadata
                            */
                            for (let i in metadata)
                                (typeof metadata[i] != 'string') || (metadata[i] = func(metadata[i]));

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        [for:in statement]
                                */
                                for (let i in metadata)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isFunction(metadata[i]))
                                        // Error Handling
                                        try {
                                            // Initialization > Beta
                                            let beta = [];

                                            /* Loop
                                                    [for statement]

                                                > Update > Beta
                                            */
                                            for (let j of metadata[i].getArguments())
                                                beta.push(i.name);

                                            // Update > Beta
                                            beta = (beta[0] || '').trim();

                                            // Error Handling > Update > Metadata
                                            try {
                                                metadata[i] = beta == 'event' ? (metadata[i].name ? func(metadata[i].name, 'event', '(' + metadata[i] + ')()') : func('event', '(' + metadata[i] + ')()')) : metadata[i]
                                            }

                                            catch (error) {
                                                metadata[i] = beta == 'event' ? (metadata[i].name ? func(metadata[i].name, 'event', '(' + metadata[i] + '\n)()') : func('event', '(' + metadata[i] + '\n)()')) : metadata[i]
                                            }
                                        }

                                        catch (error) {
                                            // LapysJS > Warn
                                            LapysJS.warn((metadata[i].name ? '`' + metadata[i].name + '` ' : 'The function ') + 'could not be modified for the automated `event` parameter.')
                                        }

                                    else if (typeof metadata[i] == 'string')
                                        // Update > Metadata
                                        metadata[i] = func(metadata[i]);

                                // Initialization > Beta
                                let beta = [];

                                /* Loop
                                        Index Metadata.

                                    > Update > Beta
                                */
                                for (let i of metadata)
                                    beta.push(isFunction(i));

                                // Update > Beta
                                beta = beta.indexOf(False) < 0;

                                /* Loop
                                        [for:of statement]
                                */
                                for (let i of LapysJS.debug.formatText(data, 1))
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (beta)
                                        /* Loop
                                                [for statement]

                                            > Alpha
                                        */
                                        for (let j of metadata)
                                            alpha(that, string(i), j);

                                    else
                                        // Alpha
                                        alpha.apply(that, [that, string(i)].concat(metadata))
                            }
                        }
                    });
                        // Definition
                        isFunction(docProto.setEvent) || objectDefProp(docProto, 'setEvent', _tmp);
                        isFunction(winProto.setEvent) || objectDefProp(winProto, 'setEvent', _tmp);

                    // Toggle Fullscreen
                    isFunction(eleProto.toggleFullscreen) || objectDefProp(eleProto, 'toggleFullscreen', {
                        // Value
                        value: function toggleFullscreen() {
                            // Initialization > Target
                            let that = isWindow(this) ? document.documentElement : (this || document.documentElement);

                            // Error Handling
                            try {
                                /* Logic
                                        If
                                            the document is not in Fullscreen.
                                */
                                if (screen.height == innerHeight) {
                                    // Initialization > Data
                                    let data = document;

                                    // Update > (LapysJS > Permanent Data > Fullscreen Element)
                                    (screen.height == innerHeight) || (LapysJS.perm.fullscreenElement = Null);

                                    // When > [Function]
                                    when(
                                        isFunction(data.exitFullscreen), function() { data.exitFullscreen() },
                                        isFunction(data.mozCancelFullScreen), function() { data.mozCancelFullScreen() },
                                        isFunction(data.msExitFullscreen), function() { data.msExitFullscreen() },
                                        isFunction(data.webkitCancelFullScreen), function() { data.webkitCancelFullScreen() }
                                    )
                                }

                                else {
                                    // Alert
                                    !arguments[0] || alert('[LapysJS ' + VERSION + "] => Press the 'Esc' key to exit fullscreen.");

                                    // Update > (LapysJS > Permanent Data > Fullscreen Element)
                                    (screen.height != innerHeight) || (LapysJS.perm.fullscreenElement = that);

                                    // When > [Function]
                                    when(
                                        isFunction(that.requestFullscreen), function() { that.requestFullscreen() },
                                        isFunction(that.mozRequestFullScreen), function() { that.mozRequestFullScreen() },
                                        isFunction(that.msRequestFullscreen), function() { that.msRequestFullscreen() },
                                        isFunction(that.webkitRequestFullScreen), function() { that.webkitRequestFullScreen() }
                                    )
                                }
                            }

                            catch (error) {
                                // LapysJS > Error
                                LapysJS.error(error)
                            }
                        }
                    });

                    // Trigger Event
                    isFunction(eleProto.triggerEvent) || objectDefProp(eleProto, 'triggerEvent', {
                        // Value
                        value: function triggerEvent() {
                            // Initialization > (Arguments, Argument Set, Data, Target)
                            let args = [...arguments],
                                argSet = args.slice(1),
                                data = args[0],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Loop
                                        Index Argument Set.

                                    > Error Handling
                                */
                                for (let i in argSet)
                                    try {
                                        // Update > Argument Set
                                        (typeof argSet[i] != 'string') || (argSet[i] = func(argSet[i]))
                                    }

                                    catch (error) {
                                        // Return
                                        return False
                                    }

                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isArray(data) && typeof data != 'string')
                                    throw LapysJS.error(data, 'not', ['array', 'string']);

                                // Update > Data
                                isArray(data) || (data = [data]);

                                // Function > Set
                                function set() {
                                    /* Loop
                                            Index Argument Set.

                                        > Argument 0
                                    */
                                    for (let i of argSet)
                                        arguments[0]()
                                }

                                /* Loop
                                        Index Data.
                                */
                                for (let i of data) {
                                    // Update > LapysJS > Temporary Data
                                    LapysJS.tmp = True;

                                    /* Logic
                                            [switch:case:default statement]

                                        > Set | (...)
                                    */
                                    switch (i) {
                                        // Click
                                        case 'click':
                                            set(function() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (LapysJS.tmp) {
                                                    // Event > Target > Mouse (Down, Up, Enter, Move, Leave, Wheel)
                                                    (argSet.length < 1) || that.setEvent('mousedown', argSet[0]);
                                                    (argSet.length < 2) || that.setEvent('mouseup', argSet[1]);
                                                    (argSet.length < 3) || that.setEvent('mouseenter', argSet[2]);
                                                    (argSet.length < 4) || that.setEvent('mousemove', argSet[3]);
                                                    (argSet.length < 5) || that.setEvent('mouseleave', argSet[4]);
                                                    (argSet.length < 6) || that.setEvent('mousewheel', argSet[5]);

                                                    // Update > LapysJS > Temporary Data
                                                    LapysJS.tmp = False
                                                }
                                            });
                                            break;

                                        /* Hello
                                                --- NOTE ---
                                                    #lapys: For development purposes only ;P
                                        */
                                        case 'hello':
                                            set(function() {
                                                // Event > Target > Click
                                                that.setEvent('click', function helloWorld(event) {
                                                    // Console > Log
                                                    console.log('Hello, World!')
                                                })
                                            })
                                            break;

                                        // Input
                                        case 'input':
                                            set(function() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (LapysJS.tmp) {
                                                    // Initialization > (Metadata, Alpha)
                                                    let metadata = argSet[0],
                                                        alpha = True;

                                                    /* Update > Argument Set 0
                                                            --- NOTE ---
                                                                #lapys: Just in case...
                                                    */
                                                    argSet[0] = (function() {
                                                        // Metadata
                                                        metadata.apply(this, [...arguments])
                                                    });

                                                    // Event > Target > (Change, Input, Key Press)
                                                    (argSet.length < 1) || that.setEvent('change', argSet[0]);
                                                    (argSet.length < 1) || that.setEvent('input', argSet[0]);
                                                    (argSet.length < 2) || that.setEvent('keypress', argSet[1]);

                                                    // Update > LapysJS > Temporary Data
                                                    LapysJS.tmp = False
                                                }
                                            });
                                            break;

                                        // Touch
                                        case 'touch':
                                            set(function() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (LapysJS.tmp) {
                                                    // Event > Target > Touch (Start, Move, End, Cancel)
                                                    (argSet.length < 1) || that.setEvent('touchstart', argSet[0]);
                                                    (argSet.length < 2) || that.setEvent('touchmove', argSet[1]);
                                                    (argSet.length < 3) || that.setEvent('touchend', argSet[2]);
                                                    (argSet.length < 4) || that.setEvent('touchcancel', argSet[3]);

                                                    // Update > LapysJS > Temporary Data
                                                    LapysJS.tmp = False
                                                }
                                            });
                                            break;

                                        // [Default]
                                        default:
                                            LapysJS.warn("'" + string(i) + "' is not a trigger event.")
                                    }
                                }
                            }
                        }
                    });

                    // Width
                    'width' in eleProto || objectDefProp(eleProto, 'width', {
                        // Get
                        get: function getWidth() {
                            // Return
                            return this.getBoundingClientRect().width
                        },

                        // Set
                        set: function setWidth() {
                            // Target > Style > Width
                            this.style.width = _numberParseNumber(arguments[0]) + 'px'
                        }
                    });

                    // Write
                    isFunction(eleProto.write) || objectDefProp(eleProto, 'write', {
                        // Value
                        value: function write() {
                            // Initialization > (Data, Target)
                            let data = createElement('lapysjs-element:', string(arguments[0])).innerHTML,
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (LapysJS.perm.writtenElements.indexOf(that) < 0) {
                                // Modification > Target > Inner HTML
                                that.innerHTML = data;

                                // Update > (LapysJS > Permanent Data > Written Elements)
                                LapysJS.perm.writtenElements.push(that)
                            }

                            else
                                // Modification > Target > Inner HTML
                                that.innerHTML += data
                        }
                    });

                /* Function Data */
                    /* Get Arguments
                            --- UPDATE REQUIRED ---
                                #lapys: Should be able to parse
                                    default, multiple-argument functions.
                    */
                    isFunction(functProto.getArguments) || objectDefProp(functProto, 'getArguments', {
                        // Value
                        value: function getArguments() {
                            // Initialization > (Arguments, Target)
                            let Arguments = LapysJS.namedArray('Arguments'),
                                _Arguments = getArguments,
                                that = this;

                            // Modification > Arguments > Callee
                            Arguments.callee = (function getArguments() {
                                // Return
                                return _Arguments.call(that)
                            });

                            // Function
                                // Get Source Code
                                function getSourceCode() {
                                    // Return
                                    return string(arguments[0])
                                }

                                // Has Character Set
                                function hasCharacterSet() {
                                    // Initialization > (Data, Metadata)
                                    let data = string(arguments[0]),
                                        metadata = arguments[1];

                                    /* Logic
                                            [switch:case:default statement]
                                    */
                                    switch (True) {
                                        // 0
                                        case metadata == 0 || arguments.length < 2:
                                            // Return
                                            return data == 'a' || data == 'b' || data == 'c' || data == 'd' || data == 'e' || data == 'f' || data == 'g' || data == 'h' || data == 'i' || data == 'j' || data == 'k' || data == 'l' || data == 'm' || data == 'n' || data == 'o' || data == 'p' || data == 'q' || data == 'r' || data == 's' || data == 't' || data == 'u' || data == 'v' || data == 'w' || data == 'x' || data == 'y' || data == 'z' ||
                                                data == 'A' || data == 'B' || data == 'C' || data == 'D' || data == 'E' || data == 'F' || data == 'G' || data == 'H' || data == 'I' || data == 'J' || data == 'K' || data == 'L' || data == 'M' || data == 'N' || data == 'O' || data == 'P' || data == 'Q' || data == 'R' || data == 'S' || data == 'T' || data == 'U' || data == 'W' || data == 'X' || data == 'Y' || data == 'Z' ||
                                                data == 0 || data == 1 || data == 2 || data == 3 || data == 4 || data == 5 || data == 6 || data == 7 || data == 8 || data == 9 ||
                                                data == '_'
                                    }
                                }

                                // Remove Delimited Code --- CHECKPOINT ---
                                function removeDelimitedCode() {
                                    let data = isFunction(arguments[0]) ? getSourceCode(arguments[0]) : string(arguments[0]);

                                    if (data.startsWith('function'))
                                        data = data.replace(/function( |)/, '');

                                    else
                                        if (data[0] != '(')
                                            data = '(' + data.replace(/[a-zA-Z_\$]/, '$&)');

                                    /*
                                            --- NOTE ---
                                                #lapys: Where Metadata is the function body.
                                    */
                                    let countEnd = 0,
                                        countStart = 0,
                                        end, start,
                                        metadata = (' ' + data).slice(' '.length).reverse();

                                    for (let i in metadata) {
                                        if (metadata[i] == '}') {
                                            countStart += 1;
                                            start || (start = i)
                                        }

                                        else if (metadata[i] == '{') {
                                            countEnd += 1;
                                            end = i
                                        }

                                        if (countEnd == countStart && countEnd) {
                                            metadata = metadata.reverse().slice(metadata.length - end - 1, metadata.length - start).reverse();
                                            break;
                                        }
                                    }

                                    return data.reverse().replace(metadata, '').reverse().trim().slice('('.length, -')'.length).replace(/\[(.|^.|\c|\d|\f|\n|\r|\t|\v){0,}\]/g, '').replace(/\{(.|^.|\c|\d|\f|\n|\r|\t|\v){0,}\}/g, '').replace(/\((.|^.|\c|\d|\f|\n|\r|\t|\v){0,}\)/g, '')//.replace(/'[^']{0,}'/g, '').replace(/"[^"]{0,}"/g, '').replace(/`[^`]{0,}`/g, '')
                                }

                            /* Logic
                                    If
                                        the function`s source code is a function.
                            */
                            if (getSourceCode(this)[0].hasChar(/[a-zA-Z_\$\(]/)) {
                                // Initialization > (Target, Data, Metadata)
                                let that = this,
                                    data = getSourceCode(that),
                                    metadata = {
                                        // {Temporary Array}
                                        a: {
                                            a: [], b: [], c: [], d: [], e: [], f: [], g: []
                                        },

                                        // {Temporary String}
                                        b: {
                                            a: LapysJS.regexSet.randomize(),
                                            b: LapysJS.regexSet.randomize(),
                                            c: LapysJS.regexSet.randomize(),
                                            d: LapysJS.regexSet.randomize(),
                                            e: LapysJS.regexSet.randomize(),
                                            f: LapysJS.regexSet.randomize(),
                                            g: LapysJS.regexSet.randomize()
                                        }
                                    };

                                /* Logic
                                        If
                                            the function source code is not an arrow function,
                                            convert it to one.
                                */
                                if (data.startsWith('function')) {
                                    // Update > Data
                                    data = data.replace(/function[^\(]{0,}\(/, data => {
                                        // Return
                                        return metadata.b.d + data[~-data.length]
                                    }).replace(/\([^\(\)]{0,}\)/g, data => {
                                        // Update > (Metadata > {Temporary Array} > (...))
                                        metadata.a.a.push(data);

                                        // Return
                                        return metadata.b.a
                                    }).replace(/\[[^\[\]]{0,}\]/g, data => {
                                        // Update > (Metadata > {Temporary Array} > (...))
                                        metadata.a.b.push(data);

                                        // Return
                                        return metadata.b.b
                                    }).replace(/\{[^\{\}]{0,}\}/g, data => {
                                        // Update > (Metadata > {Temporary Array} > (...))
                                        metadata.a.c.push(data);

                                        // Return
                                        return metadata.b.c
                                    }).replace(/\([^\(\)]{0,}\)/g, data => {
                                        // Update > (Metadata > {Temporary Array} > (...))
                                        metadata.a.g.push(data);

                                        // Return
                                        return metadata.b.g
                                    }).replace(/ /g, '=>').replace(/\n/g, '=>').replace('=>', metadata.b.f).replace(/=>/g, '').replace(metadata.b.f, '=>');

                                    /* Loop
                                            [for:of statement]

                                        > Data
                                    */
                                    for (let i of metadata.a.g)
                                        data = data.replace(metadata.b.g, i);

                                    /* Loop
                                            [for:of statement]

                                        > Data
                                    */
                                    for (let i of metadata.a.c)
                                        data = data.replace(metadata.b.c, i);

                                    /* Loop
                                            [for:of statement]

                                        > Data
                                    */
                                    for (let i of metadata.a.b)
                                        data = data.replace(metadata.b.b, i);

                                    /* Loop
                                            [for:of statement]

                                        > Data
                                    */
                                    for (let i of metadata.a.a)
                                        data = data.replace(metadata.b.a, i)
                                }

                                // Update > Data
                                data = data.startsWith(metadata.b.d) ? data.replace(metadata.b.d, metadata.b.e) : metadata.b.e + data;
                                data = data.replace(regExp(metadata.b.e + '\\((.|\n){0,}\\)[ |\n]{0,}=>'), data => {
                                    // Return
                                    return data.hasChar(regExp(metadata.b.e + '\\([ |\\n]{0,}([a-zA-Z_\\$]{1,}[\\w_\\$]{0,})[ |\\n]{0,}\\)[ |\n]{0,}=>')) ?
                                        data.slice(metadata.b.e.length).slice('('.length, -'=>'.length).trimRightChar(/ |\n/).slice(0, -')'.length) + '=>' :
                                        data.slice(metadata.b.e.length)
                                });

                                /* Logic
                                        If
                                            the function has no arguments,

                                        else if
                                            the function is a single-argument function,

                                        else if
                                            the function is a dual-argument function,

                                        else if
                                            the function is a multiple-argument function.
                                */
                                console.log(removeDelimitedCode(data));
                                if (data.replace(/ /g, '').replace(/\n/g, '').startsWith('()'))
                                    // Pass
                                    pass();

                                else if ((data.hasChar(/([a-zA-Z_\$]{1,}[\w_\$]{0,})[ |\n]{0,}=>/) || (data.replace(/\([^\(\)]{0,}\)/, data => { return data.slice('('.length, -')'.length) }).replace(/\([^\(\)]{0,}\)/g, '').replace(/\[[^\[\]]{0,}\]/g, '').replace(/\{[^\{\}]{0,}\}/g, '').replace(/\([^\(\)]{0,}\)/g, '').getBeforeChar('=>', True).hasChar('=')) && (!data.replace(/\([^\(\)]{0,}\)/, data => { return data.slice('('.length, -')'.length) }).replace(/\([^\(\)]{0,}\)/g, '').replace(/\[[^\[\]]{0,}\]/g, '').replace(/\{[^\{\}]{0,}\}/g, '').replace(/\([^\(\)]{0,}\)/g, '').getBeforeChar('=>', True).hasChar(','))) && hasCharacterSet(data.trimLeftChar(/ |\n|\(/)[0])) {
                                    /* Logic
                                            If
                                                the function has default argument(s),

                                            else if
                                                the function has non-default argument(s).
                                    */
                                    if (data.getBeforeChar('=>', True).hasChar('=')) {
                                        /* Initialization > (Label, Value)
                                                --- NOTE ---
                                                    #lapys: Each collected parameter becomes a `Parameter` object
                                                        with a `name`, `value` and primitive value.
                                        */
                                        let label = data.getBeforeChar('=>', True).slice('('.length, -')'.length).getBeforeChar('=').trim(),
                                            _label = data.getBeforeChar('=>', True).slice('('.length, -')'.length).trim(),
                                            value = data.getBeforeChar('=>', True).slice('('.length, -')'.length).getAfterChar('=').trim();

                                        // Update > Arguments
                                        Arguments.push(LapysJS.namedObject('Parameter', {name: label, value: value, '[[PrimitiveValue]]': _label}))
                                    }

                                    else {
                                        /* Initialization > Label
                                                --- NOTE ---
                                                    #lapys: Each collected parameter becomes a `Parameter` object
                                                        with a `name` and primitive value.
                                        */
                                        let label = data.getBeforeChar('=>', True).trim();

                                        // Update > Arguments
                                        Arguments.push(LapysJS.namedObject('Parameter', {name: label, '[[PrimitiveValue]]': label}))
                                    }
                                }

                                else if (removeDelimitedCode(that).count(',') == 1) {
                                    /* Logic
                                            If
                                                the function has default argument(s),

                                           else if
                                                the function has non-default argument(s).
                                    */
                                    if (removeDelimitedCode(that).indexOf('=') > -1) {
                                        // --- CHECKPOINT --- Work for functions in strings as well.
                                        data = getSourceCode(that);

                                        let countEnd = 0,
                                            countStart = 0,
                                            metadata = {a: [], b: [], c: [], d: LapysJS.regexSet.randomize(), e: LapysJS.regexSet.randomize(), f: LapysJS.regexSet.randomize(), g: LapysJS.regexSet.randomize(), h: LapysJS.regexSet.randomize()},
                                            end, start;

                                        for (let i in data) {
                                            if (data[i] == '(') {
                                                countStart += 1;
                                                start || (start = i)
                                            }

                                            else if (data[i] == ')') {
                                                countEnd += 1;
                                                end = i
                                            }

                                            if (countEnd == countStart && countEnd) {
                                                data = data.slice(start, -~end).trim().slice('('.length, -')'.length);
                                                break;
                                            }
                                        }

                                        data = data.replace(regExp(metadata.d, 'g'), metadata.e).replace(/\[(.|^.|\c|\d|\f|\n|\r|\t|\v){0,}\]/g, data => {
                                            metadata.a.push(data);
                                            return metadata.f
                                        }).replace(/\{(.|^.|\c|\d|\f|\n|\r|\t|\v){0,}\}/g, data => {
                                            metadata.b.push(data);
                                            return metadata.g
                                        }).replace(/\((.|^.|\c|\d|\f|\n|\r|\t|\v){0,}\)/g, data => {
                                            metadata.c.push(data);
                                            return metadata.h
                                        }).replace(/,/g, metadata.d).replace(regExp(metadata.e, 'g'), metadata.d);

                                        for (let i of metadata.c)
                                            data = data.replace(metadata.h, i);

                                        for (let i of metadata.b)
                                            data = data.replace(metadata.g, i);

                                        for (let i of metadata.a)
                                            data = data.replace(metadata.f, i);

                                        console.log(data);
                                        data = data.split(metadata.d).build(data => { return data.trim() });

                                        for (let i of data) {
                                            let label = i.getBeforeChar('=').trim(),
                                                _label = i,
                                                value = i.getAfterChar('=').trim();

                                            // Update > Arguments
                                            Arguments.push(LapysJS.namedObject('Parameter', {name: label, value: value, '[[PrimitiveValue]]': _label}))
                                        }
                                    }

                                    else {
                                        // Update > Data
                                        data = data.getBeforeChar('=>').trim().slice('('.length, -')'.length).split(',').build(data => { return data.trim() });

                                        /* Loop
                                                Index Data.
                                        */
                                        for (let i of data) {
                                            // Initialization > Label
                                            let label = i;

                                            // Update > Arguments
                                            Arguments.push(LapysJS.namedObject('Parameter', {name: i, '[[PrimitiveValue]]': i}))
                                        }
                                    }
                                }

                                else if (removeDelimitedCode(that).count(',') > 1) {
                                    /* Logic
                                            If
                                                the function has default argument(s),

                                            else if
                                                the function has non-default argument(s).
                                    */
                                    if (removeDelimitedCode(that).indexOf('=') > -1) {
                                        // Update > Data
                                        data = string(that);

                                        // LapysJS > Warn
                                        LapysJS.warn('Dynamic function information accessibility at this level is still in development.')
                                    }

                                    else {
                                        // Update > Data
                                        data = data.getBeforeChar('=>').trim().slice('('.length, -')'.length).split(',').build(data => { return data.trim() });

                                        /* Loop
                                                Index Data.
                                        */
                                        for (let i of data) {
                                            // Initialization > Label
                                            let label = i;

                                            // Update > Arguments
                                            Arguments.push(LapysJS.namedObject('Parameter', {name: i, '[[PrimitiveValue]]': i}))
                                        }
                                    }
                                }
                            }

                            /* Initialization > (Arguments, Data)
                                    --- NOTE ---
                                        #lapys: Modify the results from
                                            this function.
                            */
                            let args = [...arguments].build(_numberParseNumber),
                                data = LapysJS.namedArray('ParameterList');

                            /* Loop
                                    Index Arguments.

                                > Update > Data
                            */
                            for (let i of args)
                                data.push(Arguments[i] || LapysJS.namedObject('Parameter', {'[[PrimitiveValue]]': Null}));

                            // Return
                            return args.length ? (args.length > 1 ? data : data[0]) : Arguments
                        }
                    });

                    // Get Body
                    isFunction(functProto.getBody) || objectDefProp(functProto, 'getBody', {
                        // Value
                        value: function getBody() {
                            // LapysJS > Warn
                            LapysJS.warn(tmp)
                        }
                    });

                    // Get Head
                    isFunction(functProto.getHead) || objectDefProp(functProto, 'getHead', {
                        // Value
                        value: function getHead() {
                            // LapysJS > Warn
                            LapysJS.warn(tmp)
                        }
                    });

                /* HTML Table Element Data */
                    // Body
                    'body' in htmlTableEleProto || objectDefProp(htmlTableEleProto, 'body', {
                        // Configurable
                        configurable: True,

                        // Enumerable
                        enumerable: True,

                        // Get
                        get: function body() {
                            // Initialization > Data
                            let data = toArray(this.children);

                            /* Loop
                                    [for statement]
                            */
                            for (let i of data)
                                /* Logic
                                        [if:else if:else statement]

                                    > Return
                                */
                                if (i.tagName == 'TBODY')
                                    return i;

                            // Return
                            return Null
                        }
                    });

                    // Footer
                    'footer' in htmlTableEleProto || objectDefProp(htmlTableEleProto, 'footer', {
                        // Configurable
                        configurable: True,

                        // Enumerable
                        enumerable: True,

                        // Get
                        get: function footer() {
                            // Initialization > Data
                            let data = toArray(this.children);

                            /* Loop
                                    [for statement]
                            */
                            for (let i of data)
                                /* Logic
                                        [if:else if:else statement]

                                    > Return
                                */
                                if (i.tagName == 'TFOOT')
                                    return i;

                            // Return
                            return Null
                        }
                    });

                    // Head
                    'head' in htmlTableEleProto || objectDefProp(htmlTableEleProto, 'head', {
                        // Configurable
                        configurable: True,

                        // Enumerable
                        enumerable: True,

                        // Get
                        get: function head() {
                            // Initialization > Data
                            let data = toArray(this.children);

                            /* Loop
                                    [for statement]
                            */
                            for (let i of data)
                                /* Logic
                                        [if:else if:else statement]

                                    > Return
                                */
                                if (i.tagName == 'THEAD')
                                    return i;

                            // Return
                            return Null
                        }
                    });

                /* Number Data */
                    /* Parse Measurement
                            --- NOTE ---
                                #lapys: Also developed to convert common measurements.
                    */
                    isFunction(_number.parseMeasurement) || objectDefProp(_number, 'parseMeasurement', {
                        // Value
                        value: function parseMeasurement() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments].build(data => {
                                // Return
                                return typeof data == 'symbol' ? string(data) : data
                            }),
                                data = args[0],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Function > Parse
                                function parse() {
                                    // Initialization > (Data, Metadata, Alpha)
                                    let data = arguments[0],
                                        metadata = (data = string(data)).indexOf('.'),
                                        alpha = LapysJS.regexSet.randomize();

                                    // Update > Data
                                    data = data.replace(/[^0-9\.](e|x)/g, '').replace(/(e|x)[^0-9\.]/g, '').replace(/[^ex0-9]/g, '').replace('e', alpha).replace(/e/g, '').replace(alpha, 'e').replace('x', alpha).replace(/x/g, '').replace(alpha, 'x');
                                    (metadata < 0) || (data = data.getBeforeChar(metadata) + '.' + data.charAt(metadata) + data.getAfterChar(metadata));

                                    // Return
                                    return that.parseNumber(data)
                                }

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (args.length == 1)
                                    // Return
                                    return parse(data);

                                else if (args.length == 2)
                                    // Return
                                    return parse(data) + string(args[1]);

                                else {
                                    // Update > Data
                                    data = parse(data);

                                    // Initialization > (Metadata, Alpha, Beta, Delta, Epsilon)
                                    let metadata = string(args[1]),
                                        alpha = '',
                                        beta = string(args[2]),
                                        delta = '',
                                        epsilon = (function() {
                                            // Initialization > (Data, Metadata)
                                            let data = objectValues(CONVERSION_TABLE),
                                                metadata = [];

                                            /* Loop
                                                    Index Data.

                                                > Update > Metadata
                                            */
                                            for (let i of data)
                                                metadata = metadata.concat(i);

                                            // Return
                                            return metadata
                                        })();

                                    /* Logic
                                            [if:else if:else statement]

                                        > Error
                                    */
                                    if (epsilon.indexOf(metadata) < 0)
                                        throw LapysJS.error(metadata, 'not', 'valid conversion unit');

                                    /* Logic
                                            [if:else if:else statement]

                                        > Error
                                    */
                                    if (epsilon.indexOf(beta) < 0)
                                        throw LapysJS.error(beta, 'not', 'valid conversion unit');

                                    /* Loop
                                            Index Conversion Table.
                                    */
                                    for (let i in CONVERSION_TABLE)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (CONVERSION_TABLE[i].indexOf(metadata) > -1) {
                                            // Update > Alpha
                                            alpha = i;

                                            // Break
                                            break
                                        }

                                    /* Loop
                                            Index Conversion Table.
                                    */
                                    for (let i in CONVERSION_TABLE)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (CONVERSION_TABLE[i].indexOf(beta) > -1) {
                                            // Update > Delta
                                            delta = i;

                                            // Break
                                            break
                                        }

                                    // Function > Convert
                                    function convert() {
                                        // Return
                                        return eval(arguments[0] + arguments[1] + arguments[2])
                                    }

                                    // Initialization > Operators
                                    let operators = {
                                        // Add
                                        add: {oppositeValue: '-', value: '+'},

                                        // Multiply
                                        multiply: {oppositeValue: '/', value: '*'}
                                    };

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (alpha == delta)
                                        // Return
                                        return (function() {
                                            /* Initialization > (Gamma, Upsilon)
                                                    --- NOTE ---
                                                        #lapys:
                                                            - 2 cups make 1 pint.
                                                            - Ridiculously long conversion table list ahead.

                                                    --- UPDATE REQUIRED ---
                                                        #lapys: The set here is still incomplete.
                                            */
                                            let gamma = [
                                                [['c', 'cup', 'cups'], ['pint', 'pints', 'pt'], operators.multiply, 2],
                                                [['centi'], ['deci'], operators.multiply, 10],
                                                [['centi'], ['deka'], operators.multiply, 1e3],
                                                [['centi'], ['giga'], operators.multiply, 1e11],
                                                [['centi'], ['hecto'], operators.multiply, 1e4],
                                                [['centi'], ['kilo'], operators.multiply, 1e5],
                                                [['centi'], ['mega'], operators.multiply, 1e8],
                                                [['centi'], ['tera'], operators.multiply, 1e14],
                                                [['centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm'], ['m', 'meter', 'meters', 'metre', 'metres'], operators.multiply, 100],
                                                [['centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm'], ['em', 'rel unit', 'relative unit'], operators.multiply, .42],
                                                [['centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm'], ['millimeter', 'millimeters', 'millimetre', 'millimetres', 'mm'], operators.multiply, 10],
                                                [['centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm'], ['pixel', 'pixels', 'px'], operators.multiply, 6.72],
                                                [['day', 'days', 'dy', 'dys'], ['week', 'weeks', 'wk', 'wks'], operators.multiply, 7],
                                                [['day', 'days', 'dy', 'dys'], ['year', 'years', 'yr'], operators.multiply, 365],
                                                [['deci'], ['deka'], operators.multiply, 100],
                                                [['deci'], ['giga'], operators.multiply, 1e10],
                                                [['deci'], ['hecto'], operators.multiply, 1e3],
                                                [['deci'], ['kilo'], operators.multiply, 1e4],
                                                [['deci'], ['mega'], operators.multiply, 1e7],
                                                [['deci'], ['tera'], operators.multiply, 1e13],
                                                [['deka'], ['giga'], operators.multiply, 1e8],
                                                [['deka'], ['hecto'], operators.multiply, 10],
                                                [['deka'], ['kilo'], operators.multiply, 100],
                                                [['deka'], ['mega'], operators.multiply, 1e5],
                                                [['deka'], ['tera'], operators.multiply, 1e11],
                                                [['em', 'rel unit', 'relative unit'], ['pc', 'pica', 'picas'], operators.multiply, 1],
                                                [['hecto'], ['giga'], operators.multiply, 1e7],
                                                [['hecto'], ['kilo'], operators.multiply, 10],
                                                [['hecto'], ['mega'], operators.multiply, 1e4],
                                                [['hecto'], ['tera'], operators.multiply, 1e10],
                                                [['in', 'inch', 'inches', 'inchs'], ['feet', 'ft', 'foot'], operators.multiply, 12],
                                                [['feet', 'ft', 'foot'], ['mile', 'miles', 'mi'], operators.multiply, 5280],
                                                [['feet', 'ft', 'foot'], ['yard', 'yards', 'yd'], operators.multiply, 3],
                                                [['fl oz', 'fluid ounce', 'fluid ounces'], ['c', 'cup', 'cups'], operators.multiply, 3],
                                                [['g', 'gram', 'grams'], ['kilogram', 'kilograms', 'kg'], operators.multiply, 1e3],
                                                [['gal', 'gallon', 'gallons'], ['peck', 'pecks'], operators.multiply, 2],
                                                [['giga'], ['tera'], operators.multiply, 1e3],
                                                [['hour', 'hours', 'hr', 'hrs'], ['day', 'days', 'dy', 'dys'], operators.multiply, 24],
                                                [['in', 'inch', 'inches', 'inchs'], ['centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm'], operators.multiply, .0714],
                                                [['in', 'inch', 'inches', 'inchs'], ['em', 'rel unit', 'relative unit'], operators.multiply, .17],
                                                [['kilo'], ['giga'], operators.multiply, 1e6],
                                                [['kilo'], ['mega'], operators.multiply, 1e3],
                                                [['kilo'], ['tera'], operators.multiply, 1e9],
                                                [['lb', 'pound', 'pounds'], ['t', 'ton', 'tons'], operators.multiply, 2e3],
                                                [['m', 'meter', 'meters', 'metre', 'metres'], ['kilometer', 'kilometers', 'kilometre', 'kilometres', 'km'], operators.multiply, 1e3],
                                                [['mega'], ['giga'], operators.multiply, 1e3],
                                                [['mega'], ['tera'], operators.multiply, 1e6],
                                                [['micro'], ['centi'], operators.multiply, 1e3],
                                                [['micro'], ['deci'], operators.multiply, 1e4],
                                                [['micro'], ['deka'], operators.multiply, 1e6],
                                                [['micro'], ['giga'], operators.multiply, 1e14],
                                                [['micro'], ['hecto'], operators.multiply, 1e7],
                                                [['micro'], ['kilo'], operators.multiply, 1e8],
                                                [['micro'], ['mega'], operators.multiply, 1e11],
                                                [['micro'], ['milli'], operators.multiply, 100],
                                                [['micro'], ['tera'], operators.multiply, 1e17],
                                                [['milli'], ['centi'], operators.multiply, 10],
                                                [['milli'], ['deci'], operators.multiply, 100],
                                                [['milli'], ['deka'], operators.multiply, 1e4],
                                                [['milli'], ['giga'], operators.multiply, 1e12],
                                                [['milli'], ['hecto'], operators.multiply, 1e5],
                                                [['milli'], ['kilo'], operators.multiply, 1e6],
                                                [['milli'], ['mega'], operators.multiply, 1e9],
                                                [['milli'], ['tera'], operators.multiply, 1e15],
                                                [['min'], ['hour', 'hours', 'hr', 'hrs'], operators.multiply, 60],
                                                [['milligram', 'milligrams', 'mg'], ['g', 'gram', 'grams'], operators.multiply, 1000],
                                                [['milliliter', 'milliliters', 'millilitre', 'millilitres', 'ml', 'mL'], ['liter', 'liters', 'litre', 'litres', 'l', 'L'], operators.multiply, 1000],
                                                [['millimeter', 'millimeters', 'millimetre', 'millimetres', 'mm'], ['em', 'rel unit', 'relative unit'], operators.multiply, 4.2],
                                                [['millimeter', 'millimeters', 'millimetre', 'millimetres', 'mm'], ['m', 'meter', 'meters', 'metre', 'metres'], operators.multiply, 1000],
                                                [['millisecond', 'milliseconds', 'ms', 'msec', 'msecs'], ['s', 'sec', 'secs', 'second', 'seconds'], operators.multiply, 1000],
                                                [['mo', 'month', 'months'], ['year', 'years', 'yr'], operators.multiply, 12],
                                                [['nano'], ['centi'], operators.multiply, 1e5],
                                                [['nano'], ['deci'], operators.multiply, 1e6],
                                                [['nano'], ['deka'], operators.multiply, 1e10],
                                                [['nano'], ['giga'], operators.multiply, 1e18],
                                                [['nano'], ['hecto'], operators.multiply, 1e11],
                                                [['nano'], ['kilo'], operators.multiply, 1e12],
                                                [['nano'], ['mega'], operators.multiply, 1e15],
                                                [['nano'], ['micro'], operators.multiply, 100],
                                                [['nano'], ['milli'], operators.multiply, 1e4],
                                                [['nano'], ['tera'], operators.multiply, 1e21],
                                                [['ounce', 'ounces', 'oz'], ['lb', 'pound', 'pounds'], operators.multiply, 16],
                                                [['pc', 'pica', 'picas'], ['in', 'inch', 'inches', 'inchs'], operators.multiply, 6],
                                                [['peck', 'pecks'], ['bushel', 'bushels'], operators.multiply, 4],
                                                [['point', 'points', 'pt'], ['em', 'rel unit', 'relative unit'], operators.multiply, 12],
                                                [['point', 'points', 'pt'], ['pc', 'pica', 'picas'], operators.multiply, 12],
                                                [['pixel', 'pixels', 'px'], ['centimeter', 'centimeters', 'centimetre', 'centimetres', 'cm'], operators.multiply, 37.8],
                                                [['pixel', 'pixels', 'px'], ['em', 'rel unit', 'relative unit'], operators.multiply, 16],
                                                [['pixel', 'pixels', 'px'], ['millimeter', 'millimeters', 'millimetre', 'millimetres', 'mm'], operators.multiply, 3.78],
                                                [['point', 'points', 'pt'], ['qt'], operators.multiply, 2],
                                                [['qt'], ['gal', 'gallon', 'gallons'], operators.multiply, 4],
                                                [['kilogram', 'kilograms', 'kg'], ['t', 'ton', 'tons'], operators.multiply, 1e3],
                                                [['s', 'sec', 'secs', 'second', 'seconds'], ['min', 'mins', 'minute', 'minutes'], operators.multiply, 60],
                                                [['teaspoon', 'teaspoons', 'tsp'], ['tablespoon', 'tablespoons', 'tbsp'], operators.multiply, 3],
                                                [['week', 'weeks', 'wk', 'wks'], ['mo', 'month', 'months'], operators.multiply, 4 || 4.345238095238096],
                                                [['yard', 'yards', 'yd'], ['mile', 'miles', 'mi'], operators.multiply, 1760],
                                                [['year', 'years', 'yr'], ['decade', 'decades'], operators.multiply, 10],
                                                [['year', 'years', 'yr'], ['century', 'centuries'], operators.multiply, 100],
                                                [['year', 'years', 'yr'], ['millennia', 'millennium', 'millennium', 'millenary'], operators.multiply, 1000]
                                            ],
                                                upsilon = 'if (metadata == beta) return data;';

                                            /* Loop
                                                    Index Gamma.
                                            */
                                            for (let i of gamma)
                                                /* Loop
                                                        [for:in statement]
                                                */
                                                for (let j in i[0])
                                                    /* Loop
                                                            [for:in statement]

                                                        > Update > Upsilon
                                                    */
                                                    for (let k in i[1])
                                                        upsilon += "else if (metadata == '" + i[0][j] + "' && beta == '" + i[1][k] + "') return convert(data, '" + i[2].oppositeValue +"', " + i[3] + ");" +
                                                            "else if (metadata == '" + i[1][k] + "' && beta == '" + i[0][j] + "') return convert(data, '" + i[2].value +"', " + i[3] + ");";

                                            // Return
                                            return eval('(function() {' + upsilon + ' else return NaN })()')
                                        })();

                                    else
                                        // Error
                                        throw LapysJS.error('Conversion can not be done with varying measurement types.')
                                }
                            }

                            // Return
                            return Default.number
                        }
                    });

                    // Parse Number
                    isFunction(_number.parseNumber) || objectDefProp(_number, 'parseNumber', {
                        // Value
                        value: function parseNumber() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Function > Parse
                                function parse() {
                                    // Return
                                    return args.length > 1 ? parseFloat.apply(_number, [...arguments]) : parseFloat(typeof arguments[0] == 'string' ? +arguments[0].trim() : arguments[0])
                                }

                                /* Logic
                                        [if:else if:else statement]

                                    > Return
                                */
                                if (isNaN(data) || isNonConstructable(data) || typeof data == 'symbol')
                                    return 0;

                                else if (!isFinite(data))
                                    return 1;

                                else if (typeof data == 'boolean')
                                    return data ? 1 : 0;

                                else if (typeof data == 'number' || typeof data == 'string')
                                    return parse(data) || 0;

                                else if (isArray(data) || isObject(data))
                                    return objectKeys(data).length;

                                else if (isFunction(data))
                                    return data.length
                            }

                            // Return
                            return Null
                        }
                    });

                /* Object Data */
                    // Clone
                    isFunction(objectProto.clone) || objectDefProp(objectProto, 'clone', {
                        // Value
                        value: function clone() {
                            // Initialization > (Data, Deep, Target)
                            let data,
                                deep = arguments.length ? arguments[0] : False,
                                that = this == document.all ? this : (this || window);

                            /* Logic
                                    If
                                        Target is a clone-able node.
                            */
                            if (isFunction(that.cloneNode))
                                // Update > Data
                                data = that.cloneNode(deep);

                            else {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (typeof that == 'object' && deep)
                                    // Return
                                    return objectAssign(that, {});

                                else
                                    /* Logic
                                            Switch case to
                                                Target's data type.
                                    */
                                    switch (getType(that)) {
                                        // Array
                                        case 'array':
                                            // Update > Data
                                            data = that.slice();
                                            break;

                                        // Boolean
                                        case 'boolean':
                                            // Update > Data
                                            data = !!that;
                                            break;

                                        // Function
                                        case 'function':
                                            // Update > Data
                                            data = that.bind({});
                                            break;

                                        // Number
                                        case 'number':
                                            // Update > Data
                                            data = +(that + '');
                                            break;

                                        // Object
                                        case 'object':
                                            data = objectAssign({}, that);
                                            break;

                                        // Regular Expression
                                        case 'regex':
                                            // Update > Data
                                            data = regExp((' ' + that.source).slice(' '.length), that.flags);
                                            break;

                                        // String
                                        case 'string':
                                            // Update > Data
                                            data = (' ' + that).slice(' '.length);
                                            break;

                                        // [Default]
                                        default:
                                            // Update > Data
                                            data = !isNonConstructable(that) ? (isArrayLike(that) ? LapysJS.namedArray(that.constructor.name) : LapysJS.namedObject(that.constructor.name)) : that
                                    }
                            }

                            /* Logic
                                    If
                                        Data is constructible.
                            */
                            if (!isNonConstructable(data))
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (!isFunction(data.cloneNode)) {
                                    // Initialization > Metadata
                                    let metadata = that.constructor.prototype;

                                    /* Loop
                                            Index Target properties.

                                        > Error Handling
                                    */
                                    for (let i in that)
                                        try {
                                            // Update > Data
                                            data[i] = that[i];
                                        }

                                        catch (error) {}

                                    /* Loop
                                            Index Target`s constructor properties.

                                        > Error Handling
                                    */
                                    for (let i in metadata)
                                        try {
                                            // Update > Data
                                            data[i] = metadata[i]
                                        }

                                        catch (error) {}
                                }

                            // Return
                            return data
                        }
                    });

                    // Define
                    isFunction(objectProto.def) || objectDefProp(objectProto, 'def', {
                        // Value
                        value: function defineProperty() {
                            // Initialization > (Arguments, Data, Metadata, Target, Beta)
                            let args = [...arguments],
                                data = args[0],
                                metadata = isObject(args[1]) ? args[1] : {value: args[1], writable: True},
                                that = this || window,
                                beta;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                // Update > Data
                                data = isArray(data) ? data : LapysJS.debug.formatText(string(data), 1);

                                /* Loop
                                        Index Data.
                                */
                                for (let i of data) {
                                    /* Loop
                                            Index Metadata.
                                    */
                                    for (let j in metadata) {
                                        // Initialization > Alpha
                                        let alpha = j;

                                        // Deletion
                                        !('configurable' in metadata || 'enumerable' in metadata || 'get' in metadata || 'set' in metadata || 'value' in metadata || 'writable' in metadata) ||
                                        !(alpha != 'configurable' && alpha != 'enumerable' && alpha != 'get' && alpha != 'set' && alpha != 'value' && alpha != 'writable') ||
                                        delete metadata[j]
                                    }

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if ('get' in metadata || 'set' in metadata) {
                                        // Deletion
                                        delete metadata.value;
                                        delete metadata.writable;

                                        // Update > Metadata > (Configurable, Enumerable)
                                        'configurable' in metadata || (metadata.configurable = True);
                                        'enumerable' in metadata || (metadata.enumerable = True);

                                        // (...)
                                        objectDefProp(that, string(i), metadata)
                                    }

                                    else if ('value' in metadata) {
                                        // Deletion
                                        delete metadata.get;
                                        delete metadata.set;

                                        // Update > Metadata > Writable
                                        ('writable' in metadata) || (metadata.writable = False);

                                        // (...)
                                        objectDefProp(that, string(i), metadata)
                                    }

                                    else if ('writable' in metadata) {
                                        // Deletion
                                        delete metadata.get;
                                        delete metadata.set;

                                        // Update > Metadata > Value
                                        metadata.value = Undefined;

                                        // (...)
                                        objectDefProp(that, string(i), metadata)
                                    }

                                    else if (!('configurable' in metadata) && !('enumerable' in metadata) && !('get' in metadata) && !('set' in metadata) && !('value' in metadata) && !('writable' in metadata))
                                        // (...)
                                        objectDefProp(that, string(i), beta = {value: metadata, writable: True})
                                }

                                // Return
                                return isNonConstructable(beta) ? ('value' in metadata ? metadata.value : Undefined) : beta.value
                            }

                            // Return
                            return that
                        }
                    });

                    // Define Properties
                    isFunction(objectProto.defProps) || objectDefProp(objectProto, 'defProps', {
                        // Value
                        value: function defineProperties() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = args[0],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length) {
                                /* Logic
                                        [if:else if:else statement]

                                    > Error
                                */
                                if (!isArray(data) && !isObject(data))
                                    throw LapysJS.error(data, 'not', 'object');

                                // LapysJS > Warn
                                (args.length < 2) || LapysJS.warn('Only 1 argument needed, other given arguments will be ignored.');

                                /* Loop
                                        Index Data.

                                    > Modification > Target > [Loop Counter]
                                */
                                for (let i in data)
                                    that.def(i, data[i]);

                                // Return
                                return objectValues(data).lastElement
                            }

                            // Return
                            return that
                        }
                    });

                    // Freeze
                    isFunction(objectProto.freeze) || objectDefProp(objectProto, 'freeze', {
                        // Value
                        value: function freeze() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = LapysJS.perm.cooler,
                                that = this;

                            /* Loop
                                    Index Arguments.

                                > Update > Argument
                            */
                            for (let i in args)
                                args[i] = string(args[i]);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args) {
                                // Initialization > (Metadata, Alpha)
                                let metadata = that[i].constructor.name.camel().replace('hTML', 'html'),
                                    alpha = metadata.toLowerCase();

                                // Update > Data
                                data.push({object: that, property: that[i], propertyName: i});

                                // Modification > Target > [Loop Counter]
                                that[i] = metadata in Default ? Default[metadata] : (alpha in Default ? Default[alpha] : Default.unknown(that[i]))
                            }

                            // Return
                            return args.length > 1 ? that : that[args[0]]
                        }
                    });

                    // Melt
                    isFunction(objectProto.melt) || objectDefProp(objectProto, 'melt', {
                        // Value
                        value: function melt() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = LapysJS.perm.cooler,
                                that = this;

                            /* Loop
                                    Index Arguments.

                                > Update > Argument
                            */
                            for (let i in args)
                                args[i] = string(args[i]);

                            /* Loop
                                    Index Data.
                            */
                            for (let i = 0; i < data.length; i += 1) {
                                // Initialization > Metadata
                                let metadata = data[i];

                                /* Loop
                                        Index Arguments.
                                */
                                for (let j of args)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (metadata.object == that && metadata.propertyName == j) {
                                        // Modification > Data > [Metadata > Property Name]
                                        that[metadata.propertyName] = metadata.property;

                                        // Update > Data
                                        data.removeElement(data[i])
                                    }
                            }

                            // Return
                            return args.length > 1 ? that : that[args[0]]
                        }
                    });

                    // Undefine
                    isFunction(objectProto.undef) || objectDefProp(objectProto, 'undef', {
                        // Value
                        value: function undefine() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (args.length)
                                /* Logic
                                        [if:else if:else statement]

                                    > Loop
                                            [for:of statement]

                                        > Logic
                                                [if:else if:else statement]
                                */
                                if (string(args[0]).trimRight() != '/all')
                                    for (let i of args)
                                        if (isArray(i))
                                            /* Loop
                                                    [for:of statement]

                                                > Deletion
                                            */
                                            for (let j of i) {
                                                that[string(j)] = Undefined;
                                                delete that[string(j)]
                                            }

                                        else {
                                            // Deletion
                                            that[string(i)] = Undefined;
                                            delete that[string(i)]
                                        }

                                else
                                    for (let i in object(that)) {
                                        that[i] = Undefined;
                                        delete that[i]
                                    }

                            // Return
                            return this
                        }
                    });

                /* Screen Data */
                    // Update > Temporary Data
                    _tmp = Screen.prototype;

                    // Size
                    typeof _tmp.size == 'number' || objectDefProp(_tmp, 'size', {
                        // Configurable
                        configurable: True,

                        // Enumerable
                        enumerable: True,

                        // Get
                        get: function getScreenSize() {
                            // Return
                            return Math.sqrt(Math.pow(screen.height, 2) + Math.pow(screen.width, 2))
                        }
                    });

                    // Tip
                    isElement(_tmp.tip) || objectDefProp(_tmp, 'tip', {
                        // Get
                        get: function getScreenTip() {
                            // Return
                            return docQuerySel('screen-tip#screenTip')
                        }
                    });

                    // Toast
                    isElement(_tmp.toast) || objectDefProp(_tmp, 'toast', {
                        // Get
                        get: function getScreenToast() {
                            // Return
                            return docQuerySel('screen-toast#screenToast')
                        }
                    });

                /* String Data */
                    // Camel
                    isFunction(stringProto.camel) || objectDefProp(stringProto, 'camel', {
                        // Value
                        value: function camel() {
                            // Initialization > Data
                            let data = this.replace(/\b\w/g, data => {
                                // Return
                                return data.toUpperCase()
                            });

                            // Update > Data
                            data = data[0].toLowerCase() + data.slice(data[0].length);

                            // Return
                            return data
                        }
                    });

                    // Count
                    isFunction(stringProto.count) || objectDefProp(stringProto, 'count', {
                        // Value
                        value: function count() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments],
                                data = 0,
                                that = (' ' + this).slice(' '.length);

                            /* Loop
                                    Index Arguments.

                                > Update > Arguments
                            */
                            for (let i in args)
                                args[i] = isNonConstructable(args[i]) ? args.removeElement(args[i]) : args[i] = (args[i].constructor == regExp ? regExp(args[i].source, args[i].flags.replace('g', '')) : string(args[i]));

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (i)
                                    /* Loop
                                            [do:while statement]
                                    */
                                    while (that && that.hasChar(i)) {
                                        // Update
                                            // Target
                                            that = that.replace(i, '');

                                            // Data
                                            data += 1
                                    }

                                else
                                    // Update > Data
                                    data = that.length;

                            // Return
                            return data
                        }
                    });

                    // First Character
                    'firstChar' in stringProto || objectDefProp(stringProto, 'firstChar', {
                        // Get
                        get: function firstChar() {
                            // Return
                            return this[0] || ''
                        }
                    });

                    // Get After Character
                    isFunction(stringProto.getAfterChar) || objectDefProp(stringProto, 'getAfterChar', {
                        // Value
                        value: function getAfterChar() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            // Function > Reverse
                            function reverse() {
                                // Initialization > Data
                                let data = arguments[0];

                                /* Logic
                                        [if:else if:else statement]

                                    > Update > Data
                                */
                                if (isArray(data))
                                    data = data.reverse();

                                else if (typeof data == 'string')
                                    data = data.split('').reverse().join('');

                                // Return
                                return data
                            };

                            // Update > Data
                            ((data || tmp).constructor != regExp) || (data = (metadata ? reverse(that.split(''))[(reverse(that).match(regExp(data.source, data.flags.replace('g', ''))) || []).index] : [...that][(that.match(regExp(data.source, data.flags.replace('g', ''))) || []).index]) || Null);

                            /* Logic
                                    Switch Argument 0 data type case to
                                        'number' and 'string'.
                            */
                            switch (typeof data) {
                                // Number
                                case 'number':
                                    // Return
                                    return metadata ? that.slice(-data) : that.slice(-~data);
                                    break;

                                // String
                                case 'string':
                                    // Return
                                    return (metadata ? that.lastIndexOf : that.indexOf).call(that, data) > -1 ? that.slice((metadata ? that.lastIndexOf : that.indexOf).call(that, data) + data.length) : ''
                            }

                            // Return
                            return ''
                        }
                    });

                    // Get Before Character
                    isFunction(stringProto.getBeforeChar) || objectDefProp(stringProto, 'getBeforeChar', {
                        // Value
                        value: function getBeforeChar() {
                            // Initialization > (Arguments, Data, Metadata, Target)
                            let args = [...arguments],
                                data = args[0],
                                metadata = args[1],
                                that = this;

                            // Function > Reverse
                            function reverse() {
                                // Initialization > Data
                                let data = arguments[0];

                                /* Logic
                                        [if:else if:else statement]

                                    > Update > Data
                                */
                                if (isArray(data))
                                    data = data.reverse();

                                else if (typeof data == 'string')
                                    data = data.split('').reverse().join('');

                                // Return
                                return data
                            };

                            // Update > Data
                            ((data || tmp).constructor != regExp) || (data = (metadata ? reverse(that.split(''))[(reverse(that).match(regExp(data.source, data.flags.replace('g', ''))) || []).index] : [...that][(that.match(regExp(data.source, data.flags.replace('g', ''))) || []).index]) || Null);

                            /* Logic
                                    Switch Argument 0 data type case to
                                        'number' and 'string'.

                                > Return
                            */
                            switch (typeof data) {
                                // Number
                                case 'number':
                                    return metadata ? that.slice(0, -data - 2) : that.slice(0, data);
                                    break;

                                // String
                                case 'string':
                                    // Return
                                    return (metadata ? that.lastIndexOf : that.indexOf).call(that, data) > -1 ? that.slice(0, (metadata ? that.lastIndexOf : that.indexOf).call(that, data)) : that
                            }

                            // Return
                            return string(that)
                        }
                    });

                    // Get Character
                    isFunction(stringProto.getChar) || objectDefProp(stringProto, 'getChar', {
                        // Value
                        value: function getChar() {
                            // Initialization > (Arguments, Data, Target)
                            let args = [...arguments].removeFalsyElements(),
                                data = '',
                                that = (' ' + this).slice(' '.length);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i in args)
                                args[i] = args[i].constructor == regExp ? args[i] : string(args[i]);

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i of args)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ((i == '') || (i.constructor == regExp && !that.match(i)))
                                    // Update > Data
                                    data += '';

                                else if (i.constructor == regExp && !(that.match(i) || []).removeFalsyElements().length) {
                                    // Update > Data
                                    data = that;

                                    // Break
                                    break
                                }

                                else if (that.match(i)) {
                                    // Update
                                        // Data
                                        data += that.match(i).join('');

                                        // Target
                                        that = that.replace(i, '')
                                }

                            // Return
                            return data
                        }
                    });

                    // Has Character
                    isFunction(stringProto.hasChar) || objectDefProp(stringProto, 'hasChar', {
                        // Value
                        value: function hasChar() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = [];

                            /* Loop
                                    Index Arguments.

                                > Update > Data
                            */
                            for (let i of args) {
                                ((i || tmp).constructor !== regExp) || data.push(this.match(i) !== Null ? ('index' in this.match(i) ? this.match(i).index > -1 : this.match(i).length) : False);
                                (typeof i != 'string') || data.push(!((this.indexOf(i) < 0) || False));
                            }

                            // Return
                            return data.length > 0 && data.indexOf(False) < 0
                        }
                    });

                    // HTML
                    'html' in stringProto || objectDefProp(stringProto, 'html', {
                        // Get
                        get: function html() {
                            // Return
                            return createElement(this)
                        }
                    });

                    // Last Character
                    'lastChar' in stringProto || objectDefProp(stringProto, 'lastChar', {
                        // Get
                        get: function lastChar() {
                            // Return
                            return this[~-this.length] || ''
                        }
                    });

                    // Lower
                    isFunction(stringProto.lower) || objectDefProp(stringProto, 'lower', {
                        // Value
                        value: function lower() {
                            // Return
                            return this.toLowerCase()
                        }
                    });

                    // Random Character
                    'randomChar' in stringProto || objectDefProp(stringProto, 'randomChar', {
                        // Get
                        get: function randomChar() {
                            // Return
                            return this[parseInt(Math.random() * this.length)]
                        }
                    });

                    // Randomize
                    isFunction(stringProto.randomize) || objectDefProp(stringProto, 'randomize', {
                        // Value
                        value: function randomize() {
                            let data = '',
                                metadata = (' ' + this).slice(' '.length);

                            /* Loop
                                    [for statement]
                            */
                            for (let i = 0; i < this.length; i += 1) {
                                // Initialization > Alpha
                                let alpha = parseInt(rand(0, metadata.length));

                                /* Loop
                                        [do:while statement]

                                    > Update > Alpha
                                */
                                while (!(alpha in [...metadata]))
                                    alpha = parseInt(rand(0, metadata.length));

                                // Update > Data
                                data += metadata[alpha];

                                // Deletion
                                metadata = metadata.replace(metadata[alpha], '')
                            }

                            // Return
                            return data
                        }
                    });

                    // Remove Character
                    isFunction(stringProto.removeChar) || objectDefProp(stringProto, 'removeChar', {
                        // Value
                        value: function removeChar() {
                            // Initialization > (Arguments, Data)
                            let args = [...arguments],
                                data = (' ' + this).slice(' '.length);

                            /* Logic
                                    If there are Arguments.
                            */
                            if (args[0] && args.length)
                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i of args)
                                    data = data.replace(i.constructor == regExp ? i : regExp(i), '');

                            // Return
                            return data
                        }
                    });

                    // Reverse
                    isFunction(stringProto.reverse) || objectDefProp(stringProto, 'reverse', {
                        // Value
                        value: function reverse() {
                            // Return
                            return this.split('').reverse().join('')
                        }
                    });

                    // Trim Character
                    isFunction(stringProto.trimChar) || objectDefProp(stringProto, 'trimChar', {
                        // Value
                        value: function trimChar() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return this.trimLeftChar.apply(this.trimRightChar.apply(this, args), args)
                        }
                    });

                    // Trim Left Character
                    isFunction(stringProto.trimLeftChar) || objectDefProp(stringProto, 'trimLeftChar', {
                        // Value
                        value: function trimLeftChar() {
                            // Initialization > (Data, Target)
                            let data = arguments[0],
                                that = (' ' + this).slice(' '.length);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (arguments.length && !isNonConstructable(data) && data) {
                                // Update > Data
                                data = data.constructor == regExp ? regExp(data.source, data.flags.replace('g', '') + 'g') : string(data);

                                /* Loop
                                        [do:while statement]

                                    > Update > Target
                                */
                                while (that.firstChar == data || that.firstChar.match(data) !== Null)
                                    that = that.slice(1)
                            }

                            // Return
                            return that
                        }
                    });

                    // Trim Right Character
                    isFunction(stringProto.trimRightChar) || objectDefProp(stringProto, 'trimRightChar', {
                        // Value
                        value: function trimRightChar() {
                            // Initialization > (Data, Target)
                            let data = arguments[0],
                                that = (' ' + this).slice(' '.length);

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (arguments.length && !isNonConstructable(data) && data) {
                                // Update > Data
                                data = data.constructor == regExp ? regExp(data.source, data.flags.replace('g', '') + 'g') : string(data);

                                /* Loop
                                        [do:while statement]

                                    > Update > Target
                                */
                                while (that.lastChar == data || that.lastChar.match(data) !== Null)
                                    that = that.slice(0, -1)
                            }

                            // Return
                            return that
                        }
                    });

                    // Upper
                    isFunction(stringProto.upper) || objectDefProp(stringProto, 'upper', {
                        // Value
                        value: function upper() {
                            // Return
                            return this.toUpperCase()
                        }
                    });

                // Update > Temporary Data
                _tmp = (function() {
                    // Initialization > (Data, Metadata)
                    let data = LapysJS.script.parent,
                         metadata = [];

                    // Function > Ascend
                    function ascend() {
                        // Initialization > Data
                        let data = arguments[0];

                        // Return
                        return data ? data.parentElement || data.parentNode || data.ownerDocument : Null
                    }

                    /* Loop
                            [do:while statement]

                        > Update
                    */
                    while (data && ascend(data) != data && !isWindow(data)) {
                        // Metadata
                        metadata.push(data);

                        // Data
                        data = ascend(data)
                    }

                    // Update > Metadata
                    metadata.addElementToFront(ascend(data) || window).removeDuplicatedElements();

                    // Return
                    return isWindow(metadata[~-metadata.length]) ? metadata[~-metadata.length] : window
                })();

                /* Features */
                    // HTML JavaScript
                    (function HTMLJavaScript() {
                        // Check
                        check(function() {
                            // Initialization > Data
                            let data = LapysJS.features;

                            // Return
                            return data.indexOf('all') > -1 || data.indexOf('html-javascript') > -1
                        }, function() {
                            // Check
                            check(function() {
                                // Initialization > Data
                                let data = LapysJS.features;

                                // Return
                                return data.indexOf('all') < 0 && data.indexOf('html-javascript') < 0
                            }, HTMLJavaScript);

                            // Function
                                // Script
                                function script() {
                                    // Function > Update
                                    function update() {
                                        // Initialization > Data
                                        let data = arguments[0];

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (data.hasAttribute('script'))
                                            // Modification > Data > Script
                                            isFunction(data.script) || objectDefProp(data, 'script', {
                                                // Configurable
                                                configurable: True,

                                                // Enumerable
                                                enumerable: True,

                                                // Get
                                                get: function getScript() {
                                                    // Initialization > (Current Script, Target)
                                                    let currentScript,
                                                        that = {
                                                            // Element
                                                            element: this
                                                        };

                                                    // Update > Current Script
                                                    eval(
                                                        'currentScript=function script() {' +
                                                            // Initialization > Script
                                                            '\n\tlet script = new (function AttributeScript(){' +
                                                                // Modification > Target
                                                                    // Current Element
                                                                    '\n\t\tthis.currentElement = that.element;' +

                                                                    // Element List
                                                                    "\n\t\tthis.elementList = LapysJS.namedArray.apply(LapysJS, arrayProto.addElementToFront.apply(['LapysJSScriptElementList'], LapysJS.perm.modifiedComponentsList))" +
                                                            '});' +

                                                            // Update > Arguments
                                                            "\n\targuments = that = new Error(\"'arguments' is not defined\");" +
                                                            '\n\n\t/* Element script here... */' +
                                                            '\n\t' + data.getAttribute('script') +
                                                        '\n}'
                                                    );

                                                    // Return
                                                    return currentScript
                                                },

                                                // Set
                                                set: function setScript() {
                                                    // Initialization > Metadata
                                                    let metadata = arguments[0];

                                                    // Error Handling
                                                    try {
                                                        // Execution
                                                        eval('(function() {' + metadata + '\n})');

                                                        // Modification > Data > Script
                                                        data.setAttribute('script', metadata)
                                                    }

                                                    catch (error) {
                                                        // Error
                                                        throw LapysJS.error('Invalid script given:\n\t' + error.message)
                                                    }
                                                }
                                            });

                                        else {
                                            // Deletion
                                            delete data.script;

                                            // Update > (LapysJS > Permanent Data > Modified Components List)
                                            LapysJS.perm.modifiedComponentsList.removeElement(data)
                                        }
                                    }

                                    /* Loop
                                            [for:of statement]
                                    */
                                    for (let i of toArray(docQuerySelAll('[script')))
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (LapysJS.perm.modifiedComponentsList.indexOf(i) < 0) {
                                            // Update
                                            onNodeChange(i, function() { update(i) }) || update(i);

                                            // [Loop Counter] > Script
                                            !isFunction(i.script) || onNodeAttributesChange(i, function() {
                                                // [Loop Counter] > Script
                                                !isFunction(i.script) || (i.script != i.script) || i.script.call(i)
                                            }) || i.script.call(i);

                                            // Update > (LapysJS > Permanent Data > Modified Components List)
                                            LapysJS.perm.modifiedComponentsList.push(i)
                                        }
                                }

                                // Script
                                onDOMChange(script) || script();
                        })
                    })();

                    // On DOM Ready
                    onDOMReady(function scriptLapysJSFeatures() {
                        // Initialization > Data
                        let data = LapysJS.script;

                        /* Logic
                                [if:else if:else statement]
                        */
                        if (data.hasAttribute('data-lapys-features')) {
                            // Modification > Data > Data Lapys Features
                            data.setAttribute('data-lapys-features', LapysJS.debug.formatText((data.getAttribute('data-lapys-features') || ''), 1));

                            // Initialization > Metadata
                            let metadata = data.getAttribute('data-lapys-features');

                            /* Loop
                                    [for:of statement]

                                > ((Data > Enable LapysJS Feature) | (LapysJS > Warn))
                            */
                            for (let i of LapysJS.debug.formatText(metadata, 1))
                                FEATURES.indexOf(i) > -1 ? (!isFunction(data.enableLapysJSFeature) || data.enableLapysJSFeature(i)) : LapysJS.warn(i, 'not', 'valid feature of LapysJS')
                        }
                    });

                /* Plugins */
                    /* Function > Correct Plugins
                            --- NOTE ---
                                #lapys: Prevent all plug-ins from being merged.
                    */
                    function correctPlugins() {
                        /* Loop
                                [for:of statement]
                        */
                        for (let i of toArray(docQuerySelAll('.' + pluginClassList.join(', .')))) {
                            // Initialization > Data
                            let data = '';

                            /* Loop
                                    Index Plugin Class List.
                            */
                            for (let j of pluginClassList)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (i.getAttribute('class').indexOf(j) > -1) {
                                    // Update > Data
                                    data = j;

                                    // Break
                                    break
                                }

                            /* Loop
                                    Index Plugin Class List.

                                > Modification > [Loop Counter] > Class
                            */
                            for (let j of pluginClassList)
                                i.delClass(j);

                            // Modification > [Loop Counter] > Class
                            i.addClass(data)
                        }
                    };
                    correctPlugins();
                    onDOMElementAdded(correctPlugins);
                    onDOMReady(correctPlugins);

                    // Carousel
                        // Function > Carousel
                        function carousel(event) {
                            /* Loop
                                    [for:of statement]
                            */
                            for (let i of toArray(this.getElementsByClassName('carousel'))) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (LapysJS.perm.modifiedPluginsList.indexOf(i) < 0) {
                                    // Initialization > Constructed
                                    let constructed = True;

                                    // Function
                                        // Construct
                                        function construct() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (constructed) {
                                                // Initialization > (Data, (...))
                                                let data = arguments[0],
                                                    metadata = [
                                                        // Drag Slide Down
                                                        function dragSlideDown(event) {
                                                            // Update > (LapysJS > Permanent Data > Coordinates) > X
                                                            !this.allowDragEvent || (LapysJS.perm.coordinates.x = getEventCoord('x'))
                                                        },

                                                        // Drag Slide Up
                                                        function dragSlideUp(event) {
                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (this.allowDragEvent) {
                                                                // Initialization > (Alpha, Drag Length, Metadata)
                                                                let alpha = LapysJS.perm.coordinates.x,
                                                                    dragLength = data.dragLength,
                                                                    metadata = getEventCoord('x');

                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Data > Toggle (Previous | Next) Slide
                                                                */
                                                                if (metadata > alpha && metadata - alpha > dragLength)
                                                                    data.togglePreviousSlide();

                                                                else if (metadata < alpha && alpha - metadata > dragLength)
                                                                    data.toggleNextSlide()
                                                            }
                                                        }
                                                    ],
                                                    beta = [
                                                        // Swipe Slide Down
                                                        function swipeSlideDown(event) {
                                                            // Update > (LapysJS > Permanent Data > Coordinates) > X
                                                            !this.allowTouchEvent || (LapysJS.perm.coordinates.x = getEventCoord('x'))
                                                        },

                                                        // Swipe Slide Move
                                                        function swipeSlideMove(event) {},

                                                        // Swipe Slide Up
                                                        function swipeSlideUp(event) {
                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (this.allowTouchEvent) {
                                                                // Initialization > (Alpha, Swipe Length, Metadata)
                                                                let alpha = LapysJS.perm.coordinates.x,
                                                                    swipeLength = data.swipeLength,
                                                                    metadata = getEventCoord('x');

                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Data > Toggle (Previous | Next) Slide
                                                                */
                                                                if (metadata > alpha && metadata - alpha > swipeLength)
                                                                    data.togglePreviousSlide();

                                                                else if (metadata < alpha && alpha - metadata > swipeLength)
                                                                    data.toggleNextSlide()
                                                            }
                                                        }
                                                    ];

                                                // On Node (Attributes, Count) Change
                                                onNodeAttributesChange(data, update) || update();
                                                onNodeChange(data, content) || updatePluginList() || content();
                                                onNodeChange(data, updatePluginList);
                                                onNodeCountChange(data, correct);

                                                // Modification > Data > Inner HTML
                                                data.innerHTML =
                                                    // Slides Container
                                                    '<div class=container data-id=slidesContainer>' +
                                                        (function(data) {
                                                            // Initialization > (Metadata, Alpha)
                                                            let metadata = data.childNodes,
                                                                alpha = [],
                                                                beta = 0;

                                                            /* Loop
                                                                    Index Metadata.
                                                            */
                                                            for (let i = 0; i < metadata.length; i += 1) {
                                                                // Initialization > Delta
                                                                let delta = metadata[i];

                                                                // (Modification > Delta > Class) | (Update > Alpha)
                                                                isElement(delta) ? delta.addClass('slide', 'slide-' + beta) : alpha.push(delta);

                                                                // Update > Beta
                                                                !isElement(delta) || (beta += 1)
                                                            }

                                                            /* Loop
                                                                    [do:while statement]
                                                            */
                                                            while (alpha[0]) {
                                                                // Deletion
                                                                alpha[0].remove();

                                                                // Update > Alpha
                                                                alpha = alpha.slice(1)
                                                            }

                                                            // Return
                                                            return data.innerHTML
                                                        })(data) +
                                                    '</div>' +

                                                    // Buttons Container
                                                    '<div class=container data-id=buttonsContainer>' +
                                                        // Left
                                                        "<button class='button button-0' data-id=left onclick=this.carousel.togglePreviousSlide()>" + (data.hasAttribute('data-buttons-left-html') ? data.getAttribute('data-buttons-left-html') : '&lt;') + '</button>' +

                                                        // Right
                                                        "<button class='button button-1' data-id=right onclick=this.carousel.toggleNextSlide()>" + (data.hasAttribute('data-buttons-right-html') ? data.getAttribute('data-buttons-right-html') : '&gt;') + '</button>' +
                                                    '</div>' +

                                                    // Indicators Container
                                                    '<div class=container data-id=indicatorsContainer>' +
                                                        (function(data) {
                                                            // Initialization > (Metadata, Alpha, Beta, Delta)
                                                            let metadata = data.children,
                                                                alpha = '',
                                                                beta = data.hasAttribute('data-indicators-html'),
                                                                delta = data.getAttribute('data-indicators-html');

                                                            /* Loop
                                                                    [for statement]

                                                                > Update > Alpha
                                                            */
                                                            for (let i = 0; i < metadata.length; i += 1)
                                                                alpha += "<a class='indicator indicator-" + i + "' onclick=this.carousel.toggleSlide(this.descendantIndex)>" + (beta ? delta : '&nbsp;') + '</a>';

                                                            // Return
                                                            return alpha
                                                        })(data) +
                                                    '</div>';

                                                // Event > Data > (Drag, Touch)
                                                eleProto.triggerEvent.apply(data, ['click'].concat(metadata).removeElements(Undefined));
                                                eleProto.triggerEvent.apply(data, ['touch'].concat(beta).removeElements(Undefined));

                                                (tmp = -ANIMATION_CYCLE_INTERVAL, function main() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if ((data.attributes.class || {value: ''}).value.match(/\bcarousel\b/)) {
                                                        // Update > Temporary Data
                                                        tmp += ANIMATION_CYCLE_INTERVAL;

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (tmp > data.interval && data.interval > 0) {
                                                            // Update > Temporary Data
                                                            tmp = 0;

                                                            // Data > Toggle (Previous, Next) Slide
                                                            data.direction == 'left' ? data.togglePreviousSlide() : data.toggleNextSlide()
                                                        }

                                                        // Request Animation Frame
                                                        requestAnimationFrame(main)
                                                    }
                                                })();

                                                // Set Timeout
                                                setTimeout(function() {
                                                    // Initialization > (Metadata, Alpha)
                                                    let metadata = [],
                                                        alpha = toArray(data.slides);

                                                    /* Loop
                                                            Index Alpha.

                                                            --- NOTE ---
                                                                #lapys: Prevent the slides from being animated
                                                                    to position.
                                                    */
                                                    for (let i of alpha) {
                                                        // Update > Metadata
                                                        metadata.push(i.style.transitionDelay + ', ' + i.style.transitionDuration);

                                                        // Set Timeout
                                                        setTimeout(function() {
                                                            /* Loop
                                                                    Index Metadata.

                                                                > (...)
                                                            */
                                                            for (let j in metadata)
                                                                metadata[j] == ', ' ? i.delStyle('transition') : (function() {
                                                                    // Initialization > Beta
                                                                    let beta = data.slides;

                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Style > Beta
                                                                    */
                                                                    if (alpha.length == beta.length) {
                                                                        // Transition Delay
                                                                        beta[j].style.transitionDelay = metadata[j].getBeforeChar(',');

                                                                        // Transition Duration
                                                                        beta[j].style.transitionDuration = metadata[j].getAfterChar(',').slice(' '.length)
                                                                    }
                                                                })()
                                                        }, i.getCSSTransitionLength() * 1e3);

                                                        // Style > [Loop Counter] > Transition
                                                        i.setCSS('transition', 'none')
                                                    }

                                                    // Data > Toggle Slide
                                                    data.toggleSlide(data.activeSlideIndex)
                                                });

                                                // Update > Constructed
                                                constructed = False
                                            }
                                        }
                                        construct(i);

                                        // Correct
                                        function correct() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (i.hasClass('carousel')) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i._$(':not([data-id*=Container])')) {
                                                    // Initialization > Data
                                                    let data = i._$(':not([data-id*=Container])', 'array');

                                                    /* Loop
                                                            Index Data.

                                                        > Deletion
                                                    */
                                                    for (let j = 0; j < data.length; j += 1)
                                                        data[j].remove()
                                                }

                                                // Insertion
                                                i.slidesContainer || i.insertChild('begin', i.slidesContainer =  createElement('div', '.container[data-id=slidesContainer', "<div class='slide slide-0'></div>"));

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (!i.buttonsContainer) {
                                                    // Update > [Loop Counter] > Buttons Container
                                                    i.buttonsContainer = createElement('div', '.container[data-id=buttonsContainer', "<button class='button button-0' data-id=left onclick=this.carousel.togglePreviousSlide()>" + (i.hasAttribute('data-buttons-left-html') ? i.getAttribute('data-buttons-left-html') : '&lt;') + '</button>' + "<button class='button button-1' data-id=right onclick=this.carousel.toggleNextSlide()>" + (i.hasAttribute('data-buttons-right-html') ? i.getAttribute('data-buttons-right-html') : '&gt;') + '</button>');

                                                    // Insertion
                                                    i.indicatorsContainer ? i.insertBefore(i.buttonsContainer, i.indicatorsContainer) : (i.slidesContainer ? i.insertAfter(i.slidesContainer, i.buttonsContainer) : i.appendChild(i.buttonsContainer))
                                                }

                                                /* Logic
                                                        [if:else if:else statement]

                                                    > Insertion
                                                */
                                                if (!i.indicatorsContainer)
                                                    i.insertChild(i.indicatorsContainer = createElement('div', '.container[data-id=indicatorsContainer', (function(data) {
                                                        // Initialization > (Metadata, Alpha, Beta, Delta)
                                                        let metadata = data.slidesContainer.children,
                                                            alpha = '',
                                                            beta = data.hasAttribute('data-indicators-html'),
                                                            delta = data.getAttribute('data-indicators-html');

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Alpha
                                                        */
                                                        for (let i = 0; i < metadata.length; i += 1)
                                                            alpha += "<a class='indicator indicator-" + i + "' onclick=this.carousel.toggleSlide(this.descendantIndex)>" + (beta ? delta : '&nbsp;') + '</a>';

                                                        // Return
                                                        return alpha
                                                    })(i)));

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.buttonsContainer._$(':not(.button)')) {
                                                    // Initialization > Data
                                                    let data = toArray(i.buttonsContainer._$(':not(.button)', 'array'));

                                                    /* Loop
                                                            Index Data.

                                                        > Deletion
                                                    */
                                                    for (let j of data)
                                                        j.remove()
                                                }

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.indicatorsContainer._$(':not(.indicator)')) {
                                                    // Initialization > Data
                                                    let data = toArray(i.indicators);

                                                    /* Loop
                                                            Index Data.
                                                    */
                                                    for (let j in data) {
                                                        // Initialization > Metadata
                                                        let metadata = data[j];

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (metadata.hasAttribute('class')) {
                                                            // Modification > Metadata > Class
                                                            metadata.delClass('indicator');
                                                            metadata.setAttribute('class', metadata.getAttribute('class').replace(/indicator\-[0-9]/, ''))
                                                        }

                                                        // Modification > Metadata > Class
                                                        metadata.addClass('indicator', 'indicator-' + j)
                                                    }
                                                }

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.slidesContainer._$(':not(.slide)')) {
                                                    // Initialization > (Data, Metadata)
                                                    let data = [],
                                                        metadata = toArray(i.slides);

                                                    /* Loop
                                                            Index Metadata.

                                                        > Update > Data
                                                    */
                                                    for (let j = 0; j < metadata.length; j += 1)
                                                        data.push(((metadata[j].getAttribute('class') || '').getChar(/slide\-[0-9]/) || '').slice('slide-'.length));

                                                    // Update > Data
                                                    data.convert(data => {
                                                        // Return
                                                        return _numberParseNumber(data)
                                                    });

                                                    /* Loop
                                                            Index Metadata.
                                                    */
                                                    for (let j in metadata) {
                                                        // Initialization > Alpha
                                                        let alpha = metadata[j];

                                                        /* Logic
                                                                [if:else if:else statement]

                                                            > Modification > Metadata > Class
                                                        */
                                                        if (alpha.hasAttribute('class')) {
                                                            alpha.delClass('slide');
                                                            alpha.setAttribute('class', alpha.getAttribute('class').replace(/slide\-[0-9]/, ''))
                                                        }

                                                        // Modification > Metadata > Class
                                                        alpha.addClass('slide', 'slide-' + j)
                                                    }
                                                }

                                                // Modification > ([Loop Counter] > Buttons Container) > Inner HTML
                                                i.buttons.length || (i.buttonsContainer.innerHTML = "<button class='button button-0' data-id=left onclick=this.carousel.togglePreviousSlide()>" + (i.hasAttribute('data-buttons-left-html') ? i.getAttribute('data-buttons-left-html') : '&lt;') + '</button>' + "<button class='button button-1' data-id=right onclick=this.carousel.toggleNextSlide()>" + (i.hasAttribute('data-buttons-right-html') ? i.getAttribute('data-buttons-right-html') : '&gt;') + '</button>');

                                                // Modification > ([Loop Counter] > Buttons) > (Left, Right)
                                                i.buttons.left = (i.containers.button || '*'.html).querySelector('[data-id=left');
                                                i.buttons.right = (i.containers.button || '*'.html).querySelector('[data-id=right');

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.indicators.length < i.slides.length) {
                                                    // Initialization > (Data, Metadata, Alpha)
                                                    let data = [],
                                                        metadata = toArray(i.indicators),
                                                        alpha = i.indicatorsContainer;

                                                    /* Loop
                                                            Index Metadata.

                                                        > Update > Data
                                                    */
                                                    for (let j = 0; j < metadata.length; j += 1)
                                                        data.push(((metadata[j].getAttribute('class') || '').getChar(/indicator\-[0-9]/) || '').slice('indicator-'.length));

                                                    // Update > Data
                                                    data.convert(data => {
                                                        // Return
                                                        return _numberParseNumber(data)
                                                    });

                                                    /* Loop
                                                            Index Metadata.
                                                    */
                                                    for (let j in metadata) {
                                                        // Initialization > Alpha
                                                        let alpha = metadata[j];

                                                        /* Logic
                                                                [if:else if:else statement]

                                                            > Modification > Alpha > Class
                                                        */
                                                        if (alpha.hasAttribute('class')) {
                                                            alpha.delClass('indicator');
                                                            alpha.setAttribute('class', alpha.getAttribute('class').replace(/indicator\-[0-9]/, ''))
                                                        }

                                                        // Modification > Alpha > Class
                                                        alpha.addClass('indicator', 'indicator-' + j)
                                                    }

                                                    /* Loop
                                                            [for statement]

                                                        > Insertion
                                                    */
                                                    for (let j = 0; j < i.slides.length - metadata.length; j += 1)
                                                        alpha.appendChild(createElement('a', '.indicator.indicator-' + (metadata.length + j) + '[onclick="this.carousel.toggleSlide(toArray(this.parentElement.children).indexOf(this))"', '&nbsp;'))
                                                }

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.indicators.length > i.slides.length) {
                                                    // Initialization > (Data, Metadata, Alpha)
                                                    let data = [],
                                                        metadata = toArray(i.indicators),
                                                        alpha = i.indicatorsContainer;

                                                    /* Loop
                                                            [for statement]

                                                        > Deletion
                                                    */
                                                    for (let j = 0; j < metadata.length - i.slides.length; j += 1)
                                                        alpha.removeChild(metadata.lastElement);

                                                    /* Loop
                                                            Index Metadata.

                                                        > Update > Data
                                                    */
                                                    for (let j = 0; j < metadata.length; j += 1)
                                                        data.push(((metadata[j].getAttribute('class') || '').getChar(/indicator\-[0-9]/) || '').slice('indicator-'.length));

                                                    // Update > Data
                                                    data.convert(data => {
                                                        // Return
                                                        return _numberParseNumber(data)
                                                    });

                                                    /* Loop
                                                            Index Metadata.
                                                    */
                                                    for (let j in metadata) {
                                                        // Initialization > Alpha
                                                        let alpha = metadata[j];

                                                        /* Logic
                                                                [if:else if:else statement]

                                                            > Modification > Alpha > Class
                                                        */
                                                        if (alpha.hasAttribute('class')) {
                                                            alpha.delClass('indicator');
                                                            alpha.setAttribute('class', alpha.getAttribute('class').replace(/indicator\-[0-9]/, ''))
                                                        }

                                                        // Modification > Alpha > Class
                                                        alpha.addClass('indicator', 'indicator-' + j)
                                                    }
                                                }
                                            }

                                            else {
                                                // Initialization > Data
                                                let data = i._$('[data-id*=slidesContainer');

                                                // Deletion
                                                !i._$('[data-id*=buttonsContainer') || i._$('[data-id*=buttonsContainer').remove();
                                                !i._$('[data-id*=indicatorsContainer') || i._$('[data-id*=indicatorsContainer').remove();

                                                /* Loop
                                                        [do:while statement]

                                                    > Insertion
                                                */
                                                while (data && data.firstElementChild)
                                                    i.appendChild(data.firstElementChild)
                                            }
                                        }

                                        // Content
                                        function content() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (i.hasClass('carousel')) {
                                                // Modification > [Loop Counter]
                                                    // Containers
                                                    i.containers = namedArray('LapysJSCarouselContainersList').addElement(
                                                        i.buttonsContainer = i._$('[data-id*=buttonsContainer'),
                                                        i.indicatorsContainer = i._$('[data-id*=indicatorsContainer'),
                                                        i.slidesContainer = i._$('[data-id*=slidesContainer')
                                                    ).filter(Boolean);
                                                        // Button
                                                        i.containers.button = i.buttonsContainer;

                                                        // Indicator
                                                        i.containers.indicator = i.indicatorsContainer;

                                                        // Slide
                                                        i.containers.slide = i.slidesContainer;

                                                    // Buttons
                                                    i.buttons = (i.containers.button || '*'.html).children;
                                                        // Left
                                                        i.buttons.left = (i.containers.button || '*'.html).querySelector('[data-id=left');

                                                        // Right
                                                        i.buttons.right = (i.containers.button || '*'.html).querySelector('[data-id=right');

                                                    // Indicators
                                                    i.indicators = (i.containers.indicator || '*'.html).children;

                                                    // Slides
                                                    i.slides = (i.containers.slide || '*'.html).children;

                                                    // Blur Select
                                                    i.blurSelect = function blurSelect() {
                                                        // Return
                                                        return this.removeAttribute('data-selected')
                                                    };

                                                    // Focus Select
                                                    i.focusSelect = function focusSelect() {
                                                        // Return
                                                        return this.setAttribute('data-selected', '')
                                                    };

                                                    // Toggle Previous Slide
                                                    i.togglePreviousSlide = function togglePreviousSlide() {
                                                        // Initialization > (Target, Data)
                                                        let that = this,
                                                            data = ~-that.activeSlideIndex;

                                                        // Target > Toggle Slide
                                                        that.toggleSlide(data < 0 ? ~-that.slides.length : data);

                                                        // Return
                                                        return that.activeSlideIndex
                                                    };

                                                    // Toggle Next Slide
                                                    i.toggleNextSlide = function toggleNextSlide() {
                                                        // Initialization > (Target, Data)
                                                        let that = this,
                                                            data = -~that.activeSlideIndex;

                                                        // Target > Toggle Slide
                                                        that.toggleSlide(data > ~-that.slides.length ? 0 : data);

                                                        // Return
                                                        return that.activeSlideIndex
                                                    };

                                                    // Toggle Slide
                                                    i.toggleSlide = function toggleSlide() {
                                                        // Initialization > (Data, Target)
                                                        let data = arguments[0],
                                                            that = this;

                                                        // Initialization > Metadata
                                                        let metadata = that.activeSlide = that.slides[that.activeSlideIndex = data];

                                                        /* Loop
                                                                [for:of statement]

                                                            > Modification > [Loop Counter] > Data Active
                                                        */
                                                        for (let i of toArray(that.slides))
                                                            i.removeAttribute('data-active');

                                                        // Modification > Metadata > Data Active
                                                        metadata.setAttribute('data-active', '');

                                                        // Function > Coordinate
                                                        function coord() {
                                                            // Initialization > (Data, Metadata, Alpha)
                                                            let data = arguments[0],
                                                                metadata = arguments[1],
                                                                alpha = 0;

                                                            // When > Update > Alpha
                                                            when(
                                                                // X
                                                                metadata === 0 || string(metadata).toLowerCase() == 'x', function() {
                                                                    alpha = data.descendantIndex > that.activeSlideIndex ? that.offset.width : -that.offset.width
                                                                },

                                                                // Y
                                                                metadata === 1 || string(metadata).toLowerCase() == 'y', function() {
                                                                    alpha = -data.offset.height * data.descendantIndex
                                                                }
                                                            );

                                                            // Return
                                                            return alpha
                                                        }

                                                        /* Loop
                                                                [for:of statement]

                                                            > Style > [Loop Counter]
                                                        */
                                                        for (let i of toArray(that.slidesContainer._$(':not([data-active])', 'array')))
                                                            i.setCSS({
                                                                // Opacity
                                                                opacity: 0,

                                                                // Pointer Events
                                                                pointerEvents: 'none',

                                                                // Transform
                                                                transform: 'translate(' + coord(i, 'x') + 'px, ' + coord(i, 'y') + 'px) !important',

                                                                // Z-Index
                                                                zIndex: '1 !important'
                                                            });

                                                        // Style > Metadata
                                                            // Opacity, Pointer Events
                                                            metadata.delStyle('opacity', 'pointer-events');
                                                            metadata.setCSS({
                                                                // Transform
                                                                transform: 'translate(' + 0 + 'px, ' + coord(metadata, 'y') + 'px) !important',

                                                                // Z-Index
                                                                zIndex: '2 !important'
                                                            });

                                                        // Return
                                                        return that.activeSlideIndex
                                                    };

                                                /* Loop
                                                        [for:of statement]

                                                    > Modification > [Loop Counter] > [Loop Counter]
                                                */
                                                for (let j of i.containers.concat(toArray(i.buttons), toArray(i.indicators), toArray(i.slides)))
                                                    (j.carousel == i) || (j.carousel = i)
                                            }

                                            else
                                                // Deletion
                                                i.undef('blurSelect', ['buttons', 'buttonsContainer'], 'containers', 'focusSelect', ['indicators', 'indicatorsContainer'], ['slides', 'slidesContainer'], ['togglePreviousSlide', 'toggleNextSlide', 'toggleSlide'])
                                        }

                                        // Update
                                        function update() {
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Modification > [Loop Counter]
                                            */
                                            if (i.hasClass('carousel')) {
                                                // Active Slide Index
                                                i.activeSlideIndex = 'activeSlideIndex' in i ? parseInt(i.activeSlideIndex) : 0;

                                                // Allow (Drag, Game Pad, Touch)
                                                'allowDragEvent' in i ? i.allowDragEvent = !!i.allowDragEvent : i.allowDragEvent = True;
                                                'allowGamePadEvent' in i ? i.allowGamePadEvent = !!i.allowGamePadEvent : i.allowGamePadEvent = True;
                                                'allowTouchEvent' in i ? i.allowTouchEvent = !!i.allowTouchEvent : i.allowTouchEvent = True;

                                                // Direction
                                                i.direction = i.getAttribute('data-direction') == 'left' ? 'left' : 'right';

                                                // Drag Length
                                                i.dragLength = 'dragLength' in i ? _numberParseNumber(i.dragLength) : 100;

                                                // Has (Buttons, Indicators)
                                                i.hasButtons = i.hasAttribute('data-buttons');
                                                i.hasIndicators = i.hasAttribute('data-indicators');

                                                // Interval
                                                i.interval = _numberParseNumber(i.getAttribute('data-interval'));

                                                // Selectable
                                                i.selectable = 'selectable' in i ? !!i.selectable : True;

                                                // Swipe Length
                                                i.swipeLength = 'swipeLength' in i ? _numberParseNumber(i.swipeLength) : 100
                                            }

                                            else
                                                // Deletion
                                                i.undef(['activeSlide', 'activeSlideIndex'], ['allowDragEvent', 'allowGamePadEvent', 'allowTouchEvent'], 'direction', 'dragLength', ['hasButtons', 'hasIndicators'], 'interval', 'selectable', 'swipeLength')
                                        }

                                        // Update Plug-In List
                                        function updatePluginList() {
                                            // Update > (LapysJS > Permanent Data > Modified Plugins List)
                                            i.hasClass('carousel') || LapysJS.perm.modifiedPluginsList.removeElement(i).removeFalsyElements()
                                        }
                                }

                                // Update > (LapysJS > Permanent Data > Modified Plugins List)
                                (i.hasClass('carousel') ? LapysJS.perm.modifiedPluginsList.addElement(i) : LapysJS.perm.modifiedPluginsList.removeElement(i)).removeDuplicatedElements()
                            }
                        };
                        carousel.call(document);

                        // Definition
                        objectDefProp(LapysJS.perm.plugins, 'scriptCarousel', {
                            // Value
                            value: function scriptCarousel() {
                                // Carousel
                                carousel.call(document)
                            }
                        });

                    // Marquee
                        // Function > Marquee
                        function marquee(event) {
                            /* Loop
                                    [for:of statement]
                            */
                            for (let i of toArray(this.getElementsByClassName('marquee'))) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (LapysJS.perm.modifiedPluginsList.indexOf(i) < 0) {
                                    // Initialization > Constructed
                                    let constructed = True;

                                    // Function
                                        // Construct
                                        function construct() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (constructed) {
                                                // Initialization > Data
                                                let data = arguments[0],
                                                    metadata = _numberParseMeasurement(data.getCSS('transform').getAfterChar('translateX(').getBeforeChar(')'));

                                                // On Node (Attributes) Change
                                                onNodeAttributesChange(data, update) || update();
                                                onNodeChange(data, updatePluginList);

                                                // Function > Main
                                                (tmp = [metadata, 0], function main() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if ((data.attributes.class || {value: ''}).value.match(/\bmarquee\b/)) {
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.iterationCount > 0 && data.speed > 0)) {
                                                            // Initialization > Alpha
                                                            let alpha = data.direction == 'left';

                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Style > Data > Transform
                                                            */
                                                            if (tmp[1] < parseIterationCount(data.iterationCount))
                                                                (alpha ? data.offset.right < 0 : data.offset.left > innerWidth) ?
                                                                    data.style.transform = 'translateX(' + (tmp[1] += 1, alpha ? tmp[0] = metadata + data.offset.width : tmp[0] = metadata - data.offset.width) + 'px)' :
                                                                    data.style.transform = 'translateX(' + (alpha ? tmp[0] -= data.speed : tmp[0] += data.speed) + 'px)';

                                                            else {
                                                                // Update > Temporary Data
                                                                tmp[1] = 0;

                                                                // Modification > Data > Iteration Count
                                                                data.iterationCount = 0;

                                                                // Style > Data > Transform
                                                                data.style.transform = 'translateX(' + (tmp[0] = metadata) + 'px)'
                                                            }
                                                        }

                                                        else
                                                            // Style > Data > Transform
                                                            data.style.transform = 'translateX(' + tmp[0] + 'px)';

                                                        // Request Animation Frame
                                                        requestAnimationFrame(main)
                                                    }
                                                })();

                                                // Update > Constructed
                                                constructed = False
                                            }
                                        };
                                        construct(i);

                                        // Function > Parse Iteration Count
                                        function parseIterationCount() {
                                            // Initialization > Data
                                            let data = arguments[0];

                                            /* Logic
                                                    [if:else if:else statement]

                                                > Update > Data
                                            */
                                            if (data == 'infinite')
                                                data = infinity;

                                            else if (typeof data != 'number')
                                                data = _numberParseNumber(data);

                                            // Return
                                            return _numberIsNaN(data) ? 0 : data
                                        }

                                        // Update
                                        function update() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (i.hasClass('marquee')) {
                                                // Modification > [Loop Counter]
                                                    // Direction
                                                    i.direction = 'direction' in i ? (i.direction == 'left' ? 'left' : 'right') : (i.hasAttribute('data-direction') ? (i.getAttribute('data-direction') == 'left' ? 'left' : 'right') : 'left');

                                                    // Iteration Count
                                                    i.iterationCount = 'iterationCount' in i ? parseIterationCount(i.iterationCount) : (i.hasAttribute('data-iteration-count') ? parseIterationCount(i.getAttribute('data-iteration-count')) : 0);

                                                    // Speed
                                                    i.speed = 'speed' in i ? _numberParseNumber(i.speed) : (i.hasAttribute('data-speed') ? _numberParseNumber(i.getAttribute('data-speed')) : 1)
                                            }

                                            else
                                                // Deletion
                                                i.undef('direction', 'iterationCount', 'speed')
                                        }

                                        // Update Plug-In List
                                        function updatePluginList() {
                                            // Update > (LapysJS > Permanent Data > Modified Plugins List)
                                            i.hasClass('marquee') || LapysJS.perm.modifiedPluginsList.removeElement(i).removeFalsyElements()
                                        }

                                        // Update > Constructed
                                        constructed = False
                                }

                                // Update > (LapysJS > Permanent Data > Modified Plugins List)
                                (i.hasClass('marquee') ? LapysJS.perm.modifiedPluginsList.addElement(i) : LapysJS.perm.modifiedPluginsList.removeElement(i)).removeDuplicatedElements()
                            }
                        };
                        marquee.call(document);

                        // Definition
                        objectDefProp(LapysJS.perm.plugins, 'scriptMarquee', {
                            // Value
                            value: function scriptMarquee() {
                                // Carousel
                                marquee.call(document)
                            }
                        });

                    /* Roulette
                            --- UPDATE REQUIRED ---
                                #lapys: Make functional and smooth like Carousel.
                    */
                        // Function > Roulette
                        function roulette(event) {
                            /* Loop
                                    [for:of statement]
                            */
                            for (let i of toArray(this.getElementsByClassName('roulette'))) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (LapysJS.perm.modifiedPluginsList.indexOf(i) < 0) {
                                    // Initialization > Constructed
                                    let constructed = True;

                                    // Function
                                        // Construct
                                        function construct() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (constructed) {
                                                // Initialization > (Data, (...))
                                                let data = arguments[0],
                                                    metadata = [
                                                        // Drag Slide Down
                                                        function dragSlideDown(event) {
                                                            // Update > (LapysJS > Permanent Data > Coordinates) > X
                                                            !this.allowDragEvent || (LapysJS.perm.coordinates.x = getEventCoord('x'))
                                                        },

                                                        // Drag Slide Up
                                                        function dragSlideUp(event) {
                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (this.allowDragEvent) {
                                                                // Initialization > (Alpha, Drag Length, Metadata)
                                                                let alpha = LapysJS.perm.coordinates.x,
                                                                    dragLength = data.dragLength,
                                                                    metadata = getEventCoord('x');

                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Data > Toggle (Previous | Next) Slide
                                                                */
                                                                if (metadata > alpha && metadata - alpha > dragLength)
                                                                    data.shiftBackward(rand(dragLength, data.defaultBackwardShiftLength));

                                                                else if (metadata < alpha && alpha - metadata > dragLength)
                                                                    data.shiftForward(rand(dragLength, data.defaultForwardShiftLength))
                                                            }
                                                        }
                                                    ],
                                                    beta = [
                                                        // Swipe Slide Down
                                                        function swipeSlideDown(event) {
                                                            // Update > (LapysJS > Permanent Data > Coordinates) > X
                                                            !this.allowTouchEvent || (LapysJS.perm.coordinates.x = getEventCoord('x'))
                                                        },

                                                        // Swipe Slide Move
                                                        function swipeSlideMove(event) {},

                                                        // Swipe Slide Up
                                                        function swipeSlideUp(event) {
                                                            /* Logic
                                                                    [if:else if:else statement]
                                                            */
                                                            if (this.allowTouchEvent) {
                                                                // Initialization > (Alpha, Swipe Length, Metadata)
                                                                let alpha = LapysJS.perm.coordinates.x,
                                                                    swipeLength = data.swipeLength,
                                                                    metadata = getEventCoord('x');

                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Data > Toggle (Previous | Next) Slide
                                                                */
                                                                if (metadata > alpha && metadata - alpha > swipeLength)
                                                                    data.shiftBackward(rand(swipeLength, data.defaultBackwardShiftLength));

                                                                else if (metadata < alpha && alpha - metadata > swipeLength)
                                                                    data.shiftForward(rand(swipeLength, data.defaultForwardShiftLength))
                                                            }
                                                        }
                                                    ];

                                                // On Node (Attributes, Count) Change
                                                onNodeAttributesChange(data, update) || update();
                                                onNodeChange(data, content) || updatePluginList() || content();
                                                onNodeChange(data, updatePluginList);
                                                onNodeCountChange(data, correct);

                                                // Modification > Data > Inner HTML
                                                data.innerHTML =
                                                    // Cards Container
                                                    '<div class=container data-id=cardsContainer>' +
                                                        (function(data) {
                                                            // Initialization > (Metadata, Alpha)
                                                            let metadata = data.childNodes,
                                                                alpha = [],
                                                                beta = 0;

                                                            /* Loop
                                                                    Index Metadata.
                                                            */
                                                            for (let i = 0; i < metadata.length; i += 1) {
                                                                // Initialization > Delta
                                                                let delta = metadata[i];

                                                                // (Modification > Delta > Class) | (Update > Alpha)
                                                                isElement(delta) ? delta.addClass('card', 'card-' + beta) : alpha.push(delta);

                                                                // Update > Beta
                                                                !isElement(delta) || (beta += 1)
                                                            }

                                                            /* Loop
                                                                    [do:while statement]
                                                            */
                                                            while (alpha[0]) {
                                                                // Deletion
                                                                alpha[0].remove();

                                                                // Update > Alpha
                                                                alpha = alpha.slice(1)
                                                            }

                                                            // Return
                                                            return data.innerHTML
                                                        })(data) +
                                                    '</div>' +

                                                    // Buttons Container
                                                    '<div class=container data-id=buttonsContainer>' +
                                                        // Left
                                                        "<button class='button button-0' data-id=left onclick=this.roulette.shiftBackward(this.roulette.defaultBackwardShiftLength)>" + (data.hasAttribute('data-buttons-left-html') ? data.getAttribute('data-buttons-left-html') : '&lt;') + '</button>' +

                                                        // Right
                                                        "<button class='button button-1' data-id=right onclick=this.roulette.shiftForward(this.roulette.defaultForwardShiftLength)>" + (data.hasAttribute('data-buttons-right-html') ? data.getAttribute('data-buttons-right-html') : '&gt;') + '</button>' +
                                                    '</div>';

                                                // Event > Data > (Drag, Touch)
                                                eleProto.triggerEvent.apply(data, ['click'].concat(metadata).removeElements(Undefined));
                                                eleProto.triggerEvent.apply(data, ['touch'].concat(beta).removeElements(Undefined));

                                                // Function > Main
                                                (tmp = -ANIMATION_CYCLE_INTERVAL, function main() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if ((data.attributes.class || {value: ''}).value.match(/\broulette\b/)) {
                                                        // Update > Temporary Data
                                                        tmp += ANIMATION_CYCLE_INTERVAL;

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (tmp > data.interval && data.interval > 0) {
                                                            // Update > Temporary Data
                                                            tmp = 0;

                                                            // Data > Toggle (Previous, Next) Slide
                                                            data.direction == 'left' ? data.shiftBackward(data.defaultBackwardShiftLength) : data.shiftForward(data.defaultForwardShiftLength)
                                                        }

                                                        // Request Animation Frame
                                                        requestAnimationFrame(main)
                                                    }
                                                })();

                                                // Set Timeout
                                                setTimeout(function() {
                                                    // Data > Shift To Start
                                                    data.shiftToStart()
                                                });

                                                // Update > Constructed
                                                constructed = False
                                            }
                                        }
                                        construct(i);

                                        // Correct
                                        function correct() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (i.hasClass('roulette')) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i._$(':not([data-id*=Container])')) {
                                                    // Initialization > Data
                                                    let data = i._$(':not([data-id*=Container])', 'array');

                                                    /* Loop
                                                            Index Data.

                                                        > Deletion
                                                    */
                                                    for (let j = 0; j < data.length; j += 1)
                                                        data[j].remove()
                                                }

                                                // Insertion
                                                i.cardsContainer || i.insertChild('begin', i.cardsContainer =  createElement('div', '.container[data-id=cardsContainer', "<div class='card card-0'></div>"));
                                                i.buttonsContainer || i.appendChild(i.buttonsContainer = createElement('div', '.container[data-id=buttonsContainer', "<button class='button button-0' data-id=left onclick=this.carousel.togglePreviousSlide()>" + (i.hasAttribute('data-buttons-left-html') ? i.getAttribute('data-buttons-left-html') : '&lt;') + '</button>' + "<button class='button button-1' data-id=right onclick=this.carousel.toggleNextSlide()>" + (i.hasAttribute('data-buttons-right-html') ? i.getAttribute('data-buttons-right-html') : '&gt;') + '</button>'));

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.buttonsContainer._$(':not(.button)')) {
                                                    // Initialization > Data
                                                    let data = toArray(i.buttonsContainer._$(':not(.button)', 'array'));

                                                    /* Loop
                                                            Index Data.

                                                        > Deletion
                                                    */
                                                    for (let j of data)
                                                        j.remove()
                                                }

                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (i.cardsContainer._$(':not(.card)')) {
                                                    // Initialization > (Data, Metadata)
                                                    let data = [],
                                                        metadata = toArray(i.cards);

                                                    /* Loop
                                                            Index Metadata.

                                                        > Update > Data
                                                    */
                                                    for (let j = 0; j < metadata.length; j += 1)
                                                        data.push(((metadata[j].getAttribute('class') || '').getChar(/card\-[0-9]/) || '').slice('card-'.length));

                                                    // Update > Data
                                                    data.convert(data => {
                                                        // Return
                                                        return _numberParseNumber(data)
                                                    });

                                                    /* Loop
                                                            Index Metadata.
                                                    */
                                                    for (let j in metadata) {
                                                        // Initialization > Alpha
                                                        let alpha = metadata[j];

                                                        /* Logic
                                                                [if:else if:else statement]

                                                            > Modification > Metadata > Class
                                                        */
                                                        if (alpha.hasAttribute('class')) {
                                                            alpha.delClass('card');
                                                            alpha.setAttribute('class', alpha.getAttribute('class').replace(/card\-[0-9]/, ''))
                                                        }

                                                        // Modification > Metadata > Class
                                                        alpha.addClass('card', 'card-' + j)
                                                    }
                                                }

                                                // Modification > ([Loop Counter] > Buttons Container) > Inner HTML
                                                i.buttons.length || (i.buttonsContainer.innerHTML = "<button class='button button-0' data-id=left onclick=this.roulette.shiftBackward(this.roulette.defaultBackwardShiftLength)>" + (i.hasAttribute('data-buttons-left-html') ? i.getAttribute('data-buttons-left-html') : '&lt;') + '</button>' + "<button class='button button-1' data-id=right onclick=this.roulette.shiftForward(this.roulette.defaultForwardShiftLength)>" + (i.hasAttribute('data-buttons-right-html') ? i.getAttribute('data-buttons-right-html') : '&gt;') + '</button>');

                                                // Modification > ([Loop Counter] > Buttons) > (Left, Right)
                                                i.buttons.left = (i.containers.button || '*'.html).querySelector('[data-id=left');
                                                i.buttons.right = (i.containers.button || '*'.html).querySelector('[data-id=right')
                                            }

                                            else {
                                                // Initialization > Data
                                                let data = i._$('[data-id*=cardsContainer');

                                                // Deletion
                                                !i._$('[data-id*=buttonsContainer') || i._$('[data-id*=buttonsContainer').remove();

                                                /* Loop
                                                        [do:while statement]

                                                    > Insertion
                                                */
                                                while (data && data.firstElementChild)
                                                    i.appendChild(data.firstElementChild)
                                            }
                                        }

                                        // Content
                                        function content() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (i.hasClass('roulette')) {
                                                // Modification > [Loop Counter]
                                                    // Containers
                                                    i.containers = namedArray('LapysJSCarouselContainersList').addElement(
                                                        i.buttonsContainer = i._$('[data-id*=buttonsContainer'),
                                                        i.cardsContainer = i._$('[data-id*=cardsContainer')
                                                    ).filter(Boolean);
                                                        // Button
                                                        i.containers.button = i.buttonsContainer;

                                                        // Card
                                                        i.containers.card = i.cardsContainer;

                                                    // Buttons
                                                    i.buttons = (i.containers.button || '*'.html).children;
                                                        // Left
                                                        i.buttons.left = (i.containers.button || '*'.html).querySelector('[data-id=left');

                                                        // Right
                                                        i.buttons.right = (i.containers.button || '*'.html).querySelector('[data-id=right');

                                                    // Cards
                                                    i.cards = (i.containers.card || '*'.html).children;

                                                    // Blur Select
                                                    i.blurSelect = function blurSelect() {
                                                        // Return
                                                        return this.removeAttribute('data-selected')
                                                    };

                                                    // Focus Select
                                                    i.focusSelect = function focusSelect() {
                                                        // Return
                                                        return this.setAttribute('data-selected', '')
                                                    };

                                                    // Shift Backward
                                                    i.shiftBackward = function shiftBackward() {
                                                        // Console > Log
                                                        console.log('LISTENER #0000: Shifted roulette backwards...');

                                                        // Return
                                                        return 0
                                                    };

                                                    // Shift Forward
                                                    i.shiftForward = function shiftForward() {
                                                        // Console > Log
                                                        console.log('LISTENER #0001: Shifted roulette forwards...');

                                                        // Return
                                                        return 0
                                                    };

                                                    // Shift To End
                                                    i.shiftToEnd = function shiftToEnd() {
                                                        // Console > Log
                                                        console.log('LISTENER #0002: Shifted roulette to end...');

                                                        // Return
                                                        return 0
                                                    };

                                                    // Shift To Start
                                                    i.shiftToStart = function shiftToStart() {
                                                        // Console > Log
                                                        console.log('LISTENER #0003: Shifted roulette to start...');

                                                        // Return
                                                        return 0
                                                    };

                                                /* Loop
                                                    [for:of statement]

                                                    > Modification > [Loop Counter] > [Loop Counter]
                                                */
                                                for (let j of i.containers.concat(toArray(i.buttons), toArray(i.cards)))
                                                    (j.roulette == i) || (j.roulette = i)
                                            }

                                            else
                                                // Deletion
                                                i.undef('blurSelect', ['buttons', 'buttonsContainer'], ['cards', 'cardsContainer'], 'containers', 'correctShift', 'focusSelect', ['shiftBackward', 'shiftForward'])
                                        }

                                        // Update
                                        function update() {
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Modification > [Loop Counter]
                                            */
                                            if (i.hasClass('roulette')) {
                                                // Allow (Drag, Game Pad, Touch)
                                                'allowDragEvent' in i ? i.allowDragEvent = !!i.allowDragEvent : i.allowDragEvent = True;
                                                'allowGamePadEvent' in i ? i.allowGamePadEvent = !!i.allowGamePadEvent : i.allowGamePadEvent = True;
                                                'allowTouchEvent' in i ? i.allowTouchEvent = !!i.allowTouchEvent : i.allowTouchEvent = True;

                                                // Default Backward Shift Length
                                                i.defaultBackwardShiftLength = i.hasAttribute('data-backward-shift') ? _numberParseNumber(i.getAttribute('data-backward-shift')) : _numberParseNumber(i.defaultBackwardShiftLength) || 100;

                                                // Default Forward Shift Length
                                                i.defaultForwardShiftLength = i.hasAttribute('data-forward-shift') ? _numberParseNumber(i.getAttribute('data-forward-shift')) : _numberParseNumber(i.defaultForwardShiftLength) || 100;

                                                // Direction
                                                i.direction = i.getAttribute('data-direction') == 'left' ? 'left' : 'right';

                                                // Drag Length
                                                i.dragLength = 'dragLength' in i ? _numberParseNumber(i.dragLength) : 250;

                                                // Has (Buttons, Indicators)
                                                i.hasButtons = i.hasAttribute('data-buttons');

                                                // Interval
                                                i.interval = _numberParseNumber(i.getAttribute('data-interval'));

                                                // Selectable
                                                i.selectable = 'selectable' in i ? !!i.selectable : True;

                                                // Swipe Length
                                                i.swipeLength = 'swipeLength' in i ? _numberParseNumber(i.swipeLength) : 250
                                            }

                                            else
                                                // Deletion
                                                i.undef(['allowDragEvent', 'allowGamePadEvent', 'allowTouchEvent'], 'direction', 'dragLength', 'hasButtons', 'interval', 'selectable', 'swipeLength')
                                        }

                                        // Update Plug-In List
                                        function updatePluginList() {
                                            // Update > (LapysJS > Permanent Data > Modified Plugins List)
                                            i.hasClass('roulette') || LapysJS.perm.modifiedPluginsList.removeElement(i).removeFalsyElements()
                                        }
                                }

                                // Update > (LapysJS > Permanent Data > Modified Plugins List)
                                (i.hasClass('roulette') ? LapysJS.perm.modifiedPluginsList.addElement(i) : LapysJS.perm.modifiedPluginsList.removeElement(i)).removeDuplicatedElements()
                            }
                        };
                        roulette.call(document);

                        // Definition
                        objectDefProp(LapysJS.perm.plugins, 'scriptRoulette', {
                            // Value
                            value: function scriptRoulette() {
                                // Roulette
                                roulette.call(document)
                            }
                        });

                    // Screen Tip
                        // Function > Screen Tip
                        function screentip(event) {
                            // Initialization > Beta
                            let data = docQuerySel('screen-tip#screenTip');

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (!document.children[0].contains(docQuerySel('screen-tip#screenTip'))) {
                                // Initialization > (Metadata, Alpha, Beta)
                                let metadata = document.documentElement || document.children[0],
                                    alpha = metadata ? metadata.querySelector('body') || metadata.querySelector('main') || metadata || element : element,
                                    beta;

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (alpha == element) {
                                    // Update > Metadata
                                    metadata || (metadata = document.appendChild(docCreateElement('html')));

                                    // Insertion
                                    metadata.appendChild(alpha = docCreateElement('body'));
                                }

                                // Update > (Alpha, Beta)
                                (data = beta = docCreateElement('screen-tip')).id = 'screenTip';

                                // Insertion
                                alpha.appendChild(beta);

                                // Modification > Alpha > Inner HTML
                                beta.innerHTML = ''
                            }

                            // Modification > Data > Hide
                            isFunction(data.hide) || objectDefProp(data, 'hide', {
                                // Value
                                value: function hide() {
                                    // Set Timeout
                                    setTimeout(function() {
                                        // Modification > Data
                                            // Class
                                            data.removeAttribute('class');

                                            // Inner HTML
                                            data.innerHTML = '';

                                            // Style
                                            data.removeAttribute('style')
                                    }, (data.getCSSTransitionLength() * 1e3) + 100);

                                    // Style > Data > Opacity
                                    data.setCSS('opacity', '0 !important')
                                }
                            });

                            // Data > Hide
                            data.hide();

                            // Initialization > (Delta, (Conceal, Display) Tip)
                            let delta = LapysJS.perm.screenTipElementList,
                                concealTip = function concealTip(event) {
                                    // Initialization > Target
                                    let that = this;

                                    // Data > Hide
                                    data.hide();

                                    // Modification > Target > Title
                                    !LapysJS.perm.currentElementTitle || (that.title = LapysJS.perm.currentElementTitle.getBeforeChar(LapysJS.regexSet, true))
                                },
                                displayTip = function displayTip(event) {
                                    // Initialization > (Target, (...))
                                    let that = this,
                                        metadata = that.hasAttribute('data-title') ? that.getAttribute('data-title') : '',
                                        alpha = that.hasAttribute('data-title-coord') ? LapysJS.debug.formatText(that.getAttribute('data-title-coord'), 1).filter(data => {
                                            // Return
                                            return data == 'bottom' || data == 'center' || data == 'left' || data == 'right' || data == 'top'
                                        }).sort() : [],
                                        beta = that.hasAttribute('data-title-class') ? LapysJS.debug.formatText(that.getAttribute('data-title-class'), 1) : [],
                                        delta = that.hasAttribute('data-title-style') ? that.getAttribute('data-title-style') : '',
                                        epsilon = that.hasAttribute('title') ? that.title : Null;

                                    // Modification > Data
                                        // Inner HTML
                                        data.innerHTML = metadata;

                                        // Class
                                        eleProto.addClass.apply(data, beta);

                                        // Style
                                        data.setAttribute('style', delta);

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (epsilon !== Null) {
                                        // Update > (LapysJS > Permanent Data) > Current Element Title
                                        LapysJS.perm.currentElementTitle = epsilon + LapysJS.regexSet;

                                        // Modification > Target > Title
                                        that.removeAttribute('title')
                                    }

                                    // Set Timeout
                                    setTimeout(function() {
                                        // Style > Data > (Opacity, Transition)
                                        data.delStyle('opacity', 'transition')
                                    }, data.getCSSTransitionLength() * 1e3);

                                    // Style > Data
                                    data.setCSS({
                                        // Opacity
                                        opacity: '0 !important',

                                        // Transition
                                        transition: 'none !important'
                                    });

                                    // Initialization > (Mu, Nu)
                                    let mu = getEventCoord('x'),
                                        nu = getEventCoord('y');

                                    // Function > Correct
                                    function correct() {
                                        /* Do something... */
                                    }

                                    /* Logic
                                            If
                                                there are coordinates.
                                    */
                                    if (alpha.length) {
                                        // Modification > Alpha > Length
                                        alpha.length = 2;

                                        // Update > Alpha
                                        alpha.removeFalsyElements();
                                        alpha.removeDuplicatedElements();

                                        // Style > Data > (Left, Top)
                                        data.style.left = (mu + 5) + 'px';
                                        data.style.top = (nu + 10) + 'px';

                                        // Set Timeout
                                        setTimeout(function() {
                                            /* Logic
                                                    [switch:case:default statement]

                                                    --- NOTE ---
                                                        #lapys: Could have also done this using an `if, else if, else statement`.

                                                > Style > Data > (Left; Top)
                                            */
                                            switch (True) {
                                                // Bottom
                                                case alpha.indexOf('bottom') > -1:
                                                    /* Logic
                                                            [switch:case:default statement]
                                                    */
                                                    switch (True) {
                                                        // Bottom Only
                                                        case alpha.length == 1:
                                                            data.style.top = (that.offset.bottom + 10) + 'px';
                                                            break;

                                                        // Bottom + [Coordinate]
                                                        default:
                                                            // Style > Data > (...)
                                                            data.style.top = (that.offset.bottom + 10) + 'px';

                                                            /* Logic
                                                                    [switch:case:default statement]
                                                            */
                                                            switch (True) {
                                                                // Bottom + Center
                                                                case alpha.indexOf('center') > -1:
                                                                    data.style.left = (that.offset.left + ((that.offset.width / 2) - (data.offset.width / 2))) + 'px';
                                                                    break;

                                                                // Bottom + Left
                                                                case alpha.indexOf('left') > -1:
                                                                    data.style.left = (that.offset.left - data.offset.width) + 'px';
                                                                    break;

                                                                // Bottom + Right
                                                                case alpha.indexOf('right') > -1:
                                                                    data.style.left = (that.offset.right) + 'px'
                                                            }
                                                    }
                                                    break;

                                                // Center
                                                case alpha.indexOf('center') > -1 && alpha.indexOf('top') < 0:
                                                    /* Logic
                                                            [switch:case:default statement]
                                                    */
                                                    switch (True) {
                                                        // Center Only
                                                        case alpha.length == 1:
                                                            data.style.left = (that.offset.left + ((that.offset.width / 2) - (data.offset.width / 2))) + 'px';
                                                            data.style.top = (that.offset.top + ((that.offset.height / 2) - (data.offset.height / 2))) + 'px';
                                                            break;

                                                        // Center + [Coordinate]
                                                        default:
                                                            // Style > Data > (...)
                                                            data.style.top = (that.offset.top + ((that.offset.height / 2) - (data.offset.height / 2))) + 'px';

                                                            /* Logic
                                                                    [switch:case:default statement]
                                                            */
                                                            switch (True) {
                                                                // Center + Left
                                                                case alpha.indexOf('left') > -1:
                                                                    data.style.left = (that.offset.left - data.offset.width) + 'px';
                                                                    break;

                                                                // Center + Right
                                                                case alpha.indexOf('right') > -1:
                                                                    data.style.left = (that.offset.right) + 'px'
                                                            }
                                                    }
                                                    break;

                                                // Left Only
                                                case alpha.indexOf('left') && alpha.length == 1:
                                                    data.style.left = (that.offset.right) + 'px';
                                                    break;

                                                // Right Only
                                                case alpha.indexOf('right') && alpha.length == 1:
                                                    data.style.left = (that.offset.left - data.offset.width) + 'px';
                                                    break;

                                                // Top
                                                case alpha.indexOf('top') > -1:
                                                    /* Logic
                                                            [switch:case:default statement]
                                                    */
                                                    switch (True) {
                                                        // Top Only
                                                        case alpha.length == 1:
                                                            data.style.top = (that.offset.top - data.offset.height - 10) + 'px';
                                                            break;

                                                        // Top + [Coordinate]
                                                        default:
                                                            // Style > Data > (...)
                                                            data.style.top = (that.offset.top - data.offset.height - 10) + 'px';

                                                            /* Logic
                                                                    [switch:case:default statement]
                                                            */
                                                            switch (True) {
                                                                // Top + Center
                                                                case alpha.indexOf('center') > -1:
                                                                    data.style.left = (that.offset.left + ((that.offset.width / 2) - (data.offset.width / 2))) + 'px';
                                                                    break;

                                                                // Top + Left
                                                                case alpha.indexOf('left') > -1:
                                                                    data.style.left = (that.offset.left - data.offset.width) + 'px';
                                                                    break;

                                                                // Top + Right
                                                                case alpha.indexOf('right') > -1:
                                                                    data.style.left = (that.offset.right) + 'px'
                                                            }
                                                    }
                                            }

                                            // Correct
                                            correct()
                                        }, data.getCSSTransitionLength() * 1e3)
                                    }

                                    else {
                                        // Style > Data > (Left, Top)
                                        data.style.left = (mu + 5) + 'px';
                                        data.style.top = (nu + 10) + 'px';

                                        // Correct
                                        correct()
                                    }
                                };

                            // Function > Update
                            function update() {
                                /* Loop
                                        Index Delta.
                                */
                                for (let i = 0; i < delta.length; i += 1)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (!delta[i].hasAttribute('data-title')) {
                                        // Initialization > Epsilon
                                        let epsilon = delta[i];

                                        // Event > Epsilon
                                            // Mouse Leave
                                            !epsilon.getEvent('mouseleave') || epsilon.delEvent('mouseleave', concealTip);

                                            // Click
                                            !epsilon.getEvent('click') || epsilon.delEvent('click', displayTip);

                                            // Mouse Over
                                            !epsilon.getEvent('mouseover') || epsilon.delEvent('mouseover', displayTip);

                                        // Update > Delta
                                        delta[i] = Null
                                    }

                                // Update > Delta
                                delta.removeFalsyElements()
                            }

                            /* Loop
                                    Index Delta.

                                > On Node Attribute Removed
                            */
                            for (let i of delta)
                                onNodeAttributeRemoved(i, update) || update();

                            /* Loop
                                    [for:of statement]
                            */
                            for (let i of toArray(docQuerySelAll('[data-title')))
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (delta.indexOf(i) < 0) {
                                    // Event > [Loop Counter]
                                        // Click
                                        i.setEvent('click', displayTip);

                                        // Mouse
                                            // Leave
                                            i.setEvent('mouseleave', concealTip);

                                            // Over
                                            i.setEvent('mouseover', displayTip);

                                    // Update > Delta
                                    delta.push(i)
                                }
                        };
                        onDOMElementCountChange(screentip);
                        onDOMReady(screentip);

                        // Definition
                        objectDefProp(LapysJS.perm.plugins, 'scriptScreenTip', {
                            // Value
                            value: function scriptScreenTip() {
                                // Screen Tip
                                screentip.call(document)
                            }
                        });

                /* Event */
                    // Window
                        // Event > (Window)
                            // Blur
                            _tmp.setEvent('blur', function(event) {
                                // (Screen > Tip) > Hide
                                !isElement(screen.tip) || screen.tip.hide()
                            });

                            // Click
                            _tmp.setEvent('click', function(event) {
                                // Initialization > Data
                                let data = getEventTarget();

                                /* Loop
                                        [for:of statement]

                                    > Modification > [Loop Counter] > Data Selected
                                */
                                for (let i of toArray(docQuerySelAll('.carousel, .roulette')))
                                    (i === data || toArray(data.parentPath).indexOf(i) > -1) && i.selectable ? i.setAttribute('data-selected', '') : i.removeAttribute('data-selected');

                                // (Screen > Tip) > Hide
                                !isElement(data) || !(!data.hasAttribute('data-title') || !toArray(data.parentPath).hasArrayElements(toArray(docQuerySelAll('[data-title')))) || !isElement(screen.tip) || screen.tip.hide()
                            });

                            // Key Down
                            _tmp.setEvent('keydown', function(event) {
                                // (Screen > Tip) > Hide
                                !isElement(screen.tip) || screen.tip.hide()
                            });

                            // Key Up
                            _tmp.setEvent('keyup', function(event) {
                                // Initialization > Target
                                let that = this,
                                    _that = that.document;

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (_that.querySelector('.carousel[data-selected], .roulette[data-selected]')) {
                                    // Initialization > Data
                                    let data = event.code;

                                    // Function
                                        // Toggle Backward
                                        function toggleBackward() {
                                            /* Loop
                                                    [for:of statement]

                                                > [Loop Counter] > (Toggle Previous Slide | Shift Backward)
                                            */
                                            for (let i of toArray(_that.querySelector('.carousel[data-selected], .roulette[data-selected]')))
                                                i.hasClass('carousel') ? i.togglePreviousSlide() : i.shiftBackward(i.defaultBackwardShiftLength)
                                        }

                                        // Toggle End
                                        function toggleEnd() {
                                            /* Loop
                                                    [for:of statement]

                                                > [Loop Counter] > (Toggle Slide | Shift To End)
                                            */
                                            for (let i of toArray(_that.querySelector('.carousel[data-selected], .roulette[data-selected]')))
                                                i.hasClass('carousel') ? i.toggleSlide(~-i.slides.length) : i.shiftToEnd()
                                        }

                                        // Toggle Forward
                                        function toggleForward() {
                                            /* Loop
                                                    [for:of statement]

                                                > [Loop Counter] > (Toggle Next Slide | Shift Forward)
                                            */
                                            for (let i of toArray(_that.querySelector('.carousel[data-selected], .roulette[data-selected]')))
                                                i.hasClass('carousel') ? i.toggleNextSlide() : i.shiftForward(i.defaultForwardShiftLength)
                                        }

                                        // Toggle Slide
                                        function toggleSlide() {
                                            // Initialization > Data
                                            let data = arguments[0];

                                            /* Loop
                                                    [for:of statement]

                                                > [Loop Counter] > Toggle Slide
                                            */
                                            for (let i of toArray(_that.querySelectorAll('.carousel[data-selected')))
                                                !i.slides[data] || i.toggleSlide(data < 0 ? 0 : data)
                                        }

                                        // Toggle Start
                                        function toggleStart() {
                                            /* Loop
                                                    [for:of statement]

                                                > [Loop Counter] > (Toggle Slide | Shift To Start)
                                            */
                                            for (let i of toArray(_that.querySelector('.carousel[data-selected], .roulette[data-selected]')))
                                                i.hasClass('carousel') ? i.toggleSlide(0) : i.shiftToStart()
                                        }

                                    /* Logic
                                            [switch:case:default statement]
                                    */
                                    switch (True) {
                                        // {Digit | Numpad}
                                        case (data.startsWith('Digit') && +data.replace('Digit', '') > -1) || (data.startsWith('Numpad') && +data.replace('Numpad', '') > -1):
                                            // Toggle Slide
                                            toggleSlide(~-+data.replace(/Digit|Numpad/g, ''));
                                            break;

                                        // {Arrow Left | Key A}
                                        case data == 'ArrowLeft' || data == 'KeyA':
                                            // Toggle Backward
                                            toggleBackward();
                                            break;

                                        // {Arrow Right | Key D}
                                        case data == 'ArrowRight' || data == 'KeyD':
                                            // Toggle Forward
                                            toggleForward();
                                            break;

                                        // End
                                        case data == 'End':
                                            // Toggle End
                                            toggleEnd();
                                            break;

                                        // Home
                                        case data == 'Home':
                                            // Toggle Start
                                            toggleStart()
                                    }
                                }
                            });

                            // Mouse Wheel
                            _tmp.setEvent('mousewheel', function(event) {
                                // (Screen > Tip) > Hide
                                !isElement(screen.tip) || screen.tip.hide()
                            });

                            // Resize
                            _tmp.setEvent('resize', function(event) {
                                /* Loop
                                        [for:of statement]

                                        --- NOTE ---
                                            #lapys: For now all Roulettes will be shifted to the end.

                                    > [Loop Counter] > Shift To End
                                */
                                for (let i of toArray(docGetEleByClass('roulette')))
                                    i.shiftToEnd(True);

                                // (Screen > Tip) > Hide
                                !isElement(screen.tip) || screen.tip.hide()
                            });

                            // Scroll
                            _tmp.setEvent('scroll', function(event) {
                                // (Screen > Tip) > Hide
                                !isElement(screen.tip) || screen.tip.hide()
                            });

                /* Modification */
                    // LapysJS > Ready
                    objectDefProp(LapysJS, 'ready', {value: True});

                /* Function */
                    // On DOM Change
                    onDOMChange(function() {
                        // Initialization > Target
                        let that = this;

                        // Carousel, Marquee, Roulette
                        carousel.call(that);
                        marquee.call(that);
                        roulette.call(that);

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while (docQuerySelAll('screen-toast#toast')[1])
                            docQuerySelAll('screen-toast#toast')[1].remove();

                        /* Loop
                                [do:while statement]

                            > Deletion
                        */
                        while (docQuerySelAll('screen-tip#screenTip')[1])
                            docQuerySelAll('screen-tip#screenTip')[1].remove()
                    });

                    // Console > (...)
                    console.group('LapysJS v' + LapysJS.version);
                        console.log('LapysJS.ready', LapysJS.ready);
                        console.log('LapysJS.totalProcessingTime', (function() {
                            // Modification > LapysJS > Total Processing Time
                            objectDefProp(LapysJS, 'totalProcessingTime', {
                                // Value
                                value: performance.now() - processingTime
                            });

                            // Return
                            return LapysJS.totalProcessingTime
                        })());
                    console.groupEnd()
            }
        })(window.parent, window.parent.document, typeof global != 'undefined' ? global : null, window.undefined || void 0)
    }

    catch (error) {
        // Console > Error
        console.error('[LapysJS v' + VERSION + '] => LapysJS is not compatible with this browser.\n\tLapysJSScriptError: ' + error.message + '\r');

        /* Return
                --- NOTE ---
                    #lapys: There was an error with installing the framework.
        */
        return 0
    }

    /* Return
            --- NOTE ---
                #lapys: The library installed smoothly.
    */
    return 1
})(Number(), [String()])
