/** Function > Main
    @author: Lapys Dev Team
    @description: LapysJS is a JavaScript library designed to challenge the status quo of the JavaScript language and its other related vendors.
    @version: 0.0.3
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #lapys:
            - Returns 1 if there`s an error, returns 0 otherwise.
            - Its only parameters are string arguments and other miscellaneous variables.
*/
(function Main(argc, argv) {
    /* Global Data */
        // Author
        var AUTHOR = 'Lapys Dev Team',

        // Description
        DESCRIPTION = 'LapysJS is a JavaScript library designed to challenge the status quo of the JavaScript language and its other related vendors.',

        // URL
        URL = 'https://www.github.com/LapysDev/LapysJS',

        // Version
        VERSION = '0.0.4',

        // LapysJS Development Kit
        LapysJSDevelopmentKit = {
            // Information
            info: {
                // Browser Incompatibility Error Message
                browserIncompatibilityErrorMessage: 'LapysJS is not compatible with this browser',

                // Error Message Prefix
                errorMessagePrefix: '[LapysJS v' + VERSION + '] => '
            },

            // Storage
            storage: {
                // Functions
                functions: {
                    // Set Timeout
                    setTimeout: (function() {
                        /* Error Handling
                                --- NOTE --
                                    #Lapys: Just in case 'setTimeout' is corrupted.
                        */
                        try {
                            // Initialization > Set Timeout
                            var $setTimeout = setTimeout;

                            // Return
                            return function setTimeout(callback, delay) {
                                /* Return
                                        --- NOTE ---
                                            #Lapys: Because the global object has not been tested for yet,
                                                we can not refer to it directly.
                                */
                                return $setTimeout.call(undefined, callback, delay)
                            }
                        } catch (error) {}

                        // Return
                        return function setTimeout(callback, delay) { callback() }
                    })()
                },

                // Objects
                objects: {
                    // Coordinates
                    coordinates: [0, 0]
                }
            }
        };

    /* Logic
            --- NOTE ---
                #Lapys: Do not re-install the library.
    */
    if (typeof LapysJS == 'undefined') {
        // Error Handling
        try {
            /* {Requirements} Error Handling */
                // {Error Constructor}
                if (typeof Error != 'function')
                    throw "'Error' must be a constructor object.";

                // {Evaluation Function}
                if (typeof eval != 'function') {
                    // Initialization > (Message, Error)
                    var message = "'eval' must be a native function.",
                        error = new Error(message);

                    // Error
                    throw error.constructor == Error ? error : message
                }

                // {ECMAScript 2015 Class Objects}
                try { eval('(function(){class hello{}})()') }
                catch (error) {
                    // Function > LapysJS Error
                    function LapysJSError(message) { return Error.call(this, message) }

                    // Modification > LapysJS Error > Prototype (> Constructor)
                    LapysJSError.prototype = Object.create(Error.prototype);
                    LapysJSError.prototype.constructor = LapysJSError;

                    // Error
                    throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Keyword 'class' must be valid.");
                }

            /* Global Data
                    --- NOTE ---
                        #Lapys: Prevent the error names from being
                            redacted or truncated by compressors or minifiers
                            using evaluation strings.
            */
                // LapysJS Error
                var LapysJSError = eval("(class LapysJSError extends Error { constructor(message) { super(message); try { Error.captureStackTrace(this, LapysJSError) } catch (error) { this.name = 'LapysJSError' } } })"),

                // LapysJS Browser Incompatibility Error
                LapysJSBrowserIncompatibilityError = eval("(class LapysJSBrowserIncompatibilityError extends LapysJSError { constructor(message) { super(message); this.name = 'LapysJSBrowserIncompatibilityError' } })"),

                // LapysJS Phase Shift Error
                LapysJSPhaseShiftError = eval("(class LapysJSPhaseShiftError extends LapysJSError { constructor(message) { super(message); this.name = 'LapysJSPhaseShiftError' } })");

            /* {Requirements} Error Handling, Logic */
                // {Global Object Test}
                if (!window)
                    throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Can not find global object 'window'.");

                // {'const' and 'let' Keywords}
                try { eval('const a=0;let b=1') }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Keywords 'const' and 'let' must be valid syntaxes.") }

                // {'argument' Object}
                if ((function(){try{arguments}catch(error){return 1}})())
                    throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Function objects must have the locally-defined 'arguments' object.");

                // {Arrow Functions}
                try { if (typeof eval('(()=>{})') != 'function') throw Error }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Function objects must have the locally-defined 'arguments' object.") }

                // {'delete' Keyword}
                try { eval('delete ({}).a') }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Keyword 'delete' must be valid syntax.") }

                // {'in' Keyword}
                try { eval("'a'in {};for(a in {})continue") }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Keyword 'in' must be valid syntax.") }

                // {AND Operator}
                try { function error() { throw Error } !1 && error() }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Binary AND operator (&&) is not compatible with LapysJS.") }

                // {OR Operator}
                try { function error() { throw Error } !0 || error() }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Binary OR operator (||) is not compatible with LapysJS.") }

                // {Number Operator}
                try { if (typeof eval("+'a'") != 'number') throw Error }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Number operator (+<non-numeric object>) must be valid syntax.") }

                // {Spread Operator}
                try { eval('[...[]]') }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": Spread operator ([...<array-like object>]) must be valid syntax.") }

                // {'Object.getOwnPropertyDescriptors' Method}
                try { if (typeof Object.getOwnPropertyDescriptors({}) != 'object') throw Error }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": 'Object.getOwnPropertyDescriptors' must be native method.") }

                // {'console' Object}
                try { if (typeof console != 'object' || (console + '' != '[object console]' && console + '' != '[object Console]' && console + '' != '[object Object]')) throw Error }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": 'console' object should not be altered.") }

                // {'Math' Object}
                try { if (typeof Math != 'object' || Math + '' != '[object Math]') throw Error }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": 'Math' object should not be altered.") }

                // {'performance' Object}
                try { if (typeof performance != 'object' || performance + '' != '[object Performance]') throw Error }
                catch (error) { throw new LapysJSError(LapysJSDevelopmentKit.info.errorMessagePrefix + LapysJSDevelopmentKit.info.browserIncompatibilityErrorMessage + ": 'performance' object should not be altered.") }

            /* Global Data */
                // LapysJS Development Kit
                const LDK = LapysJSDevelopmentKit;

            /* Polyfills */
                // Object
                    /* Create
                            --- NOTE ---
                                #Lapys: Sourced from `https://gist.github.com/lavoiesl/6642066`.
                    */
                    'function'!=typeof Object.create&&(Object.create=function(){var a=arguments[0],b=arguments[1];function c(){}if(c.prototype=a,'object'==typeof b)for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return new c});

                    /* Define Property
                            --- NOTE ---
                                #Lapys: Sourced from `https://gist.github.com/afuggini/85b02644491f130879a8e789a5b1cea8`.
                    */
                    'function'!=typeof Object.defineProperty&&((function(a,b){'use strict';'function'==typeof define&&define.amd?define(b):'object'==typeof exports?module.exports=b():a.returnExports=b()})(this,function(){var f,g,h,i,a=Function.call,b=Object.prototype,c=a.bind(b.hasOwnProperty),d=a.bind(b.propertyIsEnumerable),e=a.bind(b.toString),j=c(b,'__defineGetter__');j&&(f=a.bind(b.__defineGetter__),g=a.bind(b.__defineSetter__),h=a.bind(b.__lookupGetter__),i=a.bind(b.__lookupSetter__));var k=function(F){return null==F||'object'!=typeof F&&'function'!=typeof F};Object.getPrototypeOf||(Object.getPrototypeOf=function(F){var G=F.__proto__;return G||null===G?G:'[object Function]'===e(F.constructor)?F.constructor.prototype:F instanceof Object?b:null});var l=function(F){try{return F.sentinel=0,0===Object.getOwnPropertyDescriptor(F,'sentinel').value}catch(G){return!1}};if(Object.defineProperty){var m=l({}),n='undefined'==typeof document||l(document.createElement('div'));if(!n||!m)var p=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||p){Object.getOwnPropertyDescriptor=function(F,G){if(k(F))throw new TypeError('Object.getOwnPropertyDescriptor called on a non-object: '+F);if(p)try{return p.call(Object,F,G)}catch(M){}var H;if(!c(F,G))return H;if(H={enumerable:d(F,G),configurable:!0},j){var I=F.__proto__,J=F!==b;J&&(F.__proto__=b);var K=h(F,G),L=i(F,G);if(J&&(F.__proto__=I),K||L)return K&&(H.get=K),L&&(H.set=L),H}return H.value=F[G],H.writable=!0,H}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(F){return Object.keys(F)}),!Object.create){var r,s=!({__proto__:null}instanceof Object),t=function(){if(!document.domain)return!1;try{return!!new ActiveXObject('htmlfile')}catch(F){return!1}},u=function(){var F,G;G=new ActiveXObject('htmlfile');var H='script';return G.write('<'+H+'></'+H+'>'),G.close(),F=G.parentWindow.Object.prototype,G=null,F},v=function(){var H,F=document.createElement('iframe'),G=document.body||document.documentElement;return F.style.display='none',G.appendChild(F),F.src='javascript:',H=F.contentWindow.Object.prototype,G.removeChild(F),F=null,H};r=s||'undefined'==typeof document?function(){return{__proto__:null}}:function(){var E=t()?u():v();delete E.constructor,delete E.hasOwnProperty,delete E.propertyIsEnumerable,delete E.isPrototypeOf,delete E.toLocaleString,delete E.toString,delete E.valueOf;var F=function(){};return F.prototype=E,r=function(){return new F},new F},Object.create=function(F,G){var H,I=function(){};if(null===F)H=r();else{if(null!==F&&k(F))throw new TypeError('Object prototype may only be an Object or null');I.prototype=F,H=new I,H.__proto__=F}return void 0!==G&&Object.defineProperties(H,G),H}}var w=function(F){try{return Object.defineProperty(F,'sentinel',{}),'sentinel'in F}catch(G){return!1}};if(Object.defineProperty){var x=w({}),y='undefined'==typeof document||w(document.createElement('div'));if(!x||!y)var z=Object.defineProperty,A=Object.defineProperties}if(!Object.defineProperty||z){Object.defineProperty=function(F,G,H){if(k(F))throw new TypeError('Object.defineProperty called on non-object: '+F);if(k(H))throw new TypeError('Property description must be an object: '+H);if(z)try{return z.call(Object,F,G,H)}catch(L){}if(!('value'in H)){var J='get'in H,K='set'in H;if(!j&&(J||K))throw new TypeError('getters & setters can not be defined on this javascript engine');J&&f(F,G,H.get),K&&g(F,G,H.set)}else if(j&&(h(F,G)||i(F,G))){var I=F.__proto__;F.__proto__=b,delete F[G],F[G]=H.value,F.__proto__=I}else F[G]=H.value;return F}}(!Object.defineProperties||A)&&(Object.defineProperties=function(F,G){if(A)try{return A.call(Object,F,G)}catch(H){}return Object.keys(G).forEach(function(H){'__proto__'!==H&&Object.defineProperty(F,H,G[H])}),F}),Object.seal||(Object.seal=function(F){if(Object(F)!==F)throw new TypeError('Object.seal can only be called on Objects.');return F}),Object.freeze||(Object.freeze=function(F){if(Object(F)!==F)throw new TypeError('Object.freeze can only be called on Objects.');return F});try{Object.freeze(function(){})}catch(E){Object.freeze=function(F){return function(H){return'function'==typeof H?H:F(H)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(F){if(Object(F)!==F)throw new TypeError('Object.preventExtensions can only be called on Objects.');return F}),Object.isSealed||(Object.isSealed=function(F){if(Object(F)!==F)throw new TypeError('Object.isSealed can only be called on Objects.');return!1}),Object.isFrozen||(Object.isFrozen=function(F){if(Object(F)!==F)throw new TypeError('Object.isFrozen can only be called on Objects.');return!1}),Object.isExtensible||(Object.isExtensible=function(F){if(Object(F)!==F)throw new TypeError('Object.isExtensible can only be called on Objects.');for(var G='';c(F,G);)G+='?';F[G]=!0;var H=c(F,G);return delete F[G],H})}));

                    /* Assign
                            --- NOTE ---
                                #Lapys: Sourced from `https://gist.github.com/spiralx/68cf40d7010d829340cb`.
                    */
                    'function'!=typeof Object.assign&&(Object.defineProperty(Object,'assign',{enumerable:!1,configurable:!0,writable:!0,value:function(a){'use strict';if(a===void 0||null===a)throw new TypeError('Cannot convert first argument to object');for(var d,b=Object(a),c=1;c<arguments.length;c++)if(d=arguments[c],void 0!==d&&null!==d){d=Object(d);for(var e=Object.keys(Object(d)),f=0,g=e.length;f<g;f++){var h=e[f],j=Object.getOwnPropertyDescriptor(d,h);void 0!==j&&j.enumerable&&(b[h]=d[h])}}return b}}));

                    /* Is
                            --- NOTE ---
                                #Lapys: Sourced from `https://gist.github.com/matthewp/2036428`.
                    */
                    'function'!=typeof Object.is&&(Object.defineProperty(Object,'is',{value:function(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b},configurable:!0,enumerable:!1,writable:!0}));

                    /* Get Own Property Descriptor
                            --- NOTE ---
                                #Lapys: Sourced from `https://gist.github.com/jhermsmeier/9a34b06a107bbf5d2c91`.
                    */
                    'function'!=typeof Object.getOwnPropertyDescriptor&&(Object.getOwnPropertyDescriptor=function(a,b){var c='function'==typeof a.__lookupGetter__&&'function'==typeof a.__lookupSetter__,d=c?a.__lookupGetter__(b)||a.__lookupSetter__(b):null;return null==d?{configurable:!0,writable:!0,enumerable:!0,value:a[b]}:{configurable:!0,enumerable:!0,get:a.__lookupGetter__(b),set:a.__lookupSetter__(b)}});

                // Array
                    /* Index Of
                            --- NOTE ---
                                #Lapys: Sourced from `https://gist.github.com/revolunet/1908355`.
                    */
                    'function'!=typeof Array.prototype.indexOf&&(Array.prototype.indexOf=function(a){var b=this.length>>>0,c=+arguments[1]||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);c<b;c++)if(c in this&&this[c]===a)return c;return-1});

                    /* Last Index Of
                            --- NOTE ---
                                #Lapys: Sourced from `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#Polyfill`.
                    */
                    'function'!=typeof Array.prototype.lastIndexOf&&(Array.prototype.lastIndexOf=function(a){'use strict';if(void 0===this||null===this)throw new TypeError;var b,c,d=Object(this),e=d.length>>>0;if(0==e)return-1;for(b=e-1,1<arguments.length&&(b=+arguments[1],b==b?0!=b&&b!=1/0&&b!=-(1/0)&&(b=(0<b||-1)*Math.floor(Math.abs(b))):b=0),c=0<=b?Math.min(b,e-1):e-Math.abs(b);0<=c;c--)if(c in d&&d[c]===a)return c;return-1});

                // {Child Node} (...)
                    // Remove
                    (function(a){a.forEach(function(b){b.hasOwnProperty('remove')||Object.defineProperty(b,'remove',{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);

            /* Definition */
                // LapysJS Development Kit Functions
                const LDKF = LDK.storage.functions,

                // LapysJS Development Kit Objects
                LDKO = LDK.storage.objects;

            /* Modification */
                // LapysJS Development Kit
                    // Constants
                    LDK.constants = {
                        // Animation Tick Speed
                        animationTickSpeed: 1 / 60,

                        // Character Arrays
                        characterArrays: [
                            // Alpha-numerals
                            '0123456789abcdefghijklmnopqrstuvwxyz',

                            // Special Characters
                            '~!@#$%^&*()_{}|:"<>?[]\\;\',./*-+'
                        ],

                        // Clipboard
                        clipboard: {content: null},

                        // Metrics Table
                        metricsTable: {
                            // Angle
                            angle: [],

                            // CSS
                            css: [],

                            // Distance
                            distance: [],

                            // Frequency
                            frequency: [],

                            // Metric Prefixes
                            metricPrefixes: [],

                            // Resolution
                            resolution: [],

                            // Speed
                            speed: [],

                            // Temperature
                            temperature: [],

                            // Time
                            time: [],

                            // Volume
                            volume: [],

                            // Weight
                            weight: []
                        },

                        // Features
                        features: (function() {
                            // Initialization > LapysJS Features
                            let LapysJSFeatures = ['focus', 'script-attribute'];

                            // Modification > LapysJS Features > Active
                            LapysJSFeatures.active = [];

                            // Return
                            return LapysJSFeatures
                        })(),

                        // Random Element Tag Names
                        randomElementTagNames: ['a', 'audio', 'br', 'button', 'canvas', 'caption', 'div', 'dl', 'element', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'img', 'input', 'li', 'ol', 'p', 'q', 'script', 'style', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video', 'lapysjs-element'],

                        // Special Characters
                        specialCharacters: '�'
                    };

                    // Global
                    LDK.global = {
                        // Author
                        AUTHOR: AUTHOR,

                        // Description
                        DESCRIPTION: DESCRIPTION,

                        // Uniform Resource Location
                        'URL': URL,

                        // Version
                        VERSION: VERSION
                    };

                    // Temporary Data
                    LDK.tmp = {
                        // Objects
                        objects: [],

                        // Value Of
                        valueOf: (function() {
                            // Initialization
                            let tmp = new (function() {});

                            // Return
                            return function valueOf() { return tmp }
                        })()
                    };

            /* Definition */
                // LapysJS Development Kit Constants
                const LDKC = LDK.constants,

                // LapysJS Development Kit Global
                LDKG = LDK.global,

                // LapysJS Development Kit Information
                LDKI = LDK.info,

                // Temporary Data
                tmp = LDK.tmp.valueOf(),

                // Temporary Object
                tmpObject = LDK.tmp.objects;

            /* Modification */
                // LapysJS Development Kit
                    // Temporary Data
                        // Objects
                            // Document Description
                            tmpObject.documentDescription = Object.getOwnPropertyDescriptor(window, 'document');

                            // Location Description
                            tmpObject.locationDescription = Object.getOwnPropertyDescriptor(window, 'location');

                            // Navigator Description
                            tmpObject.navigatorDescription = Object.getOwnPropertyDescriptor(window, 'navigator');

                            // Performance Description
                            tmpObject.performanceDescription = Object.getOwnPropertyDescriptor(window, 'performance');

                    // Storage
                        // Functions
                            // Clone Object
                            LDKF.cloneObject = function clone() {
                                // Initialization > Object
                                let object = arguments[0];

                                // Logic > Return
                                if (LDKF.isNonConstructible(object))
                                    return LDKF.isNull(object) ? null : undefined;

                                // Initialization > (Object Constructor (Name), Clone)
                                let objectConstructor = object.constructor,
                                    objectConstructorName = objectConstructor.name,
                                    clone = LDKF.customObject(objectConstructorName);

                                // Function
                                    // Clone Array
                                    function cloneArray() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone;

                                        // Error Handling > Update > Clone
                                        try { clone = [...object] }
                                        catch (error) { clone = LDKF.arrayFrom(object) }

                                        // Return
                                        return clone
                                    }

                                    // Clone Boolean
                                    function cloneBoolean() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone = !!object;

                                        // Return
                                        return clone
                                    }

                                    // Clone Function
                                    function cloneFunction() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone;

                                        // Error Handling > Update > Clone
                                        try { clone = LDKF.bindFunction(object) }
                                        catch (error) { clone = LDKF.$func(object.name, object.parameters, object.body, !0) }

                                        // Return
                                        return clone
                                    }

                                    // Clone Number
                                    function cloneNumber() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone = +(object + '');

                                        // Return
                                        return clone
                                    }

                                    // Clone Object
                                    function cloneObject() {
                                        // Initialization > Object
                                        let object = arguments[0];

                                        // Error Handling
                                        try {
                                            // Initialization > (Clone, Assigned Clone, Iterator, Object Property Descriptors (Keys (Length)))
                                            let clone = LDKF.customObject(objectConstructorName),
                                                assignedClone = LDKF.objectAssign({}, object),
                                                iterator = 0,
                                                objectPropertyDescriptors = LDKF.objectGetOwnPropertyDescriptors(object),
                                                objectPropertyDescriptorsKeys = LDKF.objectKeys(objectPropertyDescriptors),
                                                objectPropertyDescriptorsKeysLength = objectPropertyDescriptorsKeys.length;

                                            /* Loop
                                                    Iterate over Object Property Descriptors Keys Length.
                                            */
                                            for (iterator = 0; iterator < objectPropertyDescriptorsKeysLength; iterator += 1) {
                                                // Initialization > Object Property Descriptors Key
                                                let objectPropertyDescriptorsKey = objectPropertyDescriptorsKeys[iterator];

                                                // Error Handling
                                                try {
                                                    // Modification > Assigned Clone > [Object Property Descriptors Key]
                                                    LDKF.objectDefineProperty(assignedClone, objectPropertyDescriptorsKey, objectPropertyDescriptors[objectPropertyDescriptorsKey])
                                                } catch (error) {
                                                    // Warn
                                                    LDKF.warn("Could not clone property '" + objectPropertyDescriptorsKey + "'")
                                                }
                                            }

                                            // Initialization > Assigned Clone Descriptors (Keys (Length))
                                            let assignedCloneDescriptors = LDKF.objectGetOwnPropertyDescriptors(assignedClone),
                                                assignedCloneDescriptorsKeys = LDKF.objectKeys(assignedCloneDescriptors),
                                                assignedCloneDescriptorsKeysLength = assignedCloneDescriptorsKeys.length;

                                            /* Loop
                                                    Iterate over Assigned Clone Descriptors Key Length.
                                            */
                                            for (iterator = 0; iterator < assignedCloneDescriptorsKeysLength; iterator += 1) {
                                                // Initialization > Assigned Clone Descriptors Key
                                                let assignedCloneDescriptorsKey = assignedCloneDescriptorsKeys[iterator];

                                                // Modification > Clone > [Assigned Clone Descriptors Key]
                                                LDKF.objectDefineProperty(clone, assignedCloneDescriptorsKey, assignedCloneDescriptors[assignedCloneDescriptorsKey])
                                            }

                                            // Modification > Clone > (Constructor > Prototype)
                                            clone.__proto__ = LDKF.objectCreate(objectConstructor.prototype);

                                            // Return
                                            return clone
                                        } catch (error) {}

                                        // Error Handling
                                        try {
                                            // Initialization > Clone
                                            let clone = clonePrototype(object);

                                            // Return
                                            return clone
                                        } catch (error) {}

                                        // Error
                                        LDKF.error(["'clone'", "'" + objectConstructorName + "'"], 'argument')
                                    }

                                    // Clone Prototype
                                    function clonePrototype() {
                                        // Initialization > (Object, Clone, Code, Iterator, Prototypes)
                                        let object = arguments[0],
                                            clone = object,
                                            code = 'new(class ' + objectConstructorName,
                                            iterator = 0,
                                            prototypes = [],
                                            $prototypes = LapysJS.tmp.prototypes;

                                        // Function > Generate Property Descriptors Code
                                        function generatePropertyDescriptorsCode() {
                                            // Initialization > (Code, Iterator, Prototype (Descriptor (Keys (Length))))
                                            let code = 'let that=this;',
                                                iterator = 0,
                                                prototype = arguments[0],
                                                prototypeDescriptor = LDKF.objectGetOwnPropertyDescriptors(prototype),
                                                prototypeDescriptorKeys = LDKF.objectKeys(prototypeDescriptor),
                                                prototypeDescriptorKeysLength = prototypeDescriptorKeys.length;

                                            /* Loop
                                                    Iterate over Prototype Descriptor Keys Length.
                                            */
                                            for (iterator; iterator < prototypeDescriptorKeysLength; iterator += 1) {
                                                // Initialization > Prototype Descriptor Key
                                                let prototypeDescriptorKey = prototypeDescriptorKeys[iterator];

                                                // Update > Code
                                                code += "try{LDKF.objectDefineProperty(that,'" + prototypeDescriptorKey + "',LDKF.objectGetOwnPropertyDescriptor(LapysJS.tmp.prototypes[" + (function() {
                                                    // Initialization > (Index, Prototypes, Prototypes Length)
                                                    let index = 0,
                                                        prototypes = $prototypes,
                                                        prototypesLength = prototypes.length;

                                                    /* Loop
                                                            Index Prototypes.
                                                    */
                                                    for (index; index < prototypesLength; index += 1)
                                                        // Logic > Return
                                                        if (prototypes[index] === prototype)
                                                            return index
                                                })() + "],'" + prototypeDescriptorKey + "'))}catch(error){}"
                                            }

                                            // Update > Code
                                            code += 'return that';

                                            // Return
                                            return code
                                        }

                                        /* Loop
                                                [while statement]

                                            > Update > Prototypes
                                        */
                                        while (clone)
                                            prototypes[prototypes.length] = clone = clone.__proto__;

                                        // Initialization > Prototypes Length
                                        let prototypesLength = (prototypes.length -= 1) - 1;

                                        /* Loop
                                                Index Prototypes Length.

                                            > Update > Code
                                        */
                                        for (iterator; iterator < prototypesLength; iterator += 1) {
                                            let prototype = prototypes[iterator];
                                            code += ' extends(class ' + prototype.constructor.name
                                        }

                                        // Update > Prototypes
                                        $prototypes = LapysJS.tmp.prototypes = [object];
                                        LDKF.$pushArray($prototypes, prototypes);

                                        // Update > Code
                                        code += '{constructor(){' + (function() {
                                            // Initialization > Prototypes Length
                                            let prototypesLength = prototypes.length;

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (!prototypesLength)
                                                // Return
                                                return '';

                                            else if (prototypesLength == 1)
                                                // Return
                                                return generatePropertyDescriptorsCode(object);

                                            else {
                                                // Initialization > Prototype
                                                let prototype = prototypes[prototypes.length - 2];

                                                // Logic > Return
                                                if (prototype.constructor.name != 'Object')
                                                    return generatePropertyDescriptorsCode(prototype)
                                            }
                                        })() + '}})';

                                        /* Loop
                                                Iterate over Prototypes Length.

                                            > Update > Code
                                        */
                                        for (iterator = 0; iterator < prototypesLength; iterator += 1)
                                            code += '{constructor(){super();' + generatePropertyDescriptorsCode(prototypes[prototypesLength - iterator - 2] || object) + '}})';

                                        // Update > Clone
                                        clone = LDKF.eval(code);

                                        // Modification > LapysJS > Temporary Data > Prototypes
                                        LapysJS.tmp.prototypes = [];

                                        // Return
                                        return clone
                                    }

                                    // Clone Regular Expression
                                    function cloneRegex() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone = LDKF.regex(LDKF.get.regexSource(object), LDKF.get.regexFlags(object));

                                        // Return
                                        return clone
                                    }

                                    // Clone String
                                    function cloneString() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone = '';

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (object) {
                                            // Initialization > Object Length
                                            let objectLength = object.length,
                                                $objectLength = objectLength + 1;

                                            /* Loop
                                                    [while statement]

                                                > Update > Clone
                                            */
                                            while ($objectLength != 1)
                                                clone += object[objectLength - ($objectLength -= 1)]
                                        }

                                        // Return
                                        return clone
                                    }

                                    // Clone Symbol
                                    function cloneSymbol() {
                                        // Initialization > (Object, Clone)
                                        let object = arguments[0],
                                            clone = LDKF.symbol(LDKF.sliceString(LDKF.string(object), 'Symbol('.length, -')'.length));

                                        // Return
                                        return clone
                                    }

                                /* Logic
                                        [if:else statement]
                                */
                                if (LDKF.isNode(object))
                                    // Error Handling > Update > Clone
                                    try { clone = LDKF.cloneNode(object, !0) }
                                    catch (error) { clone = clonePrototype(object) }

                                else {
                                    // Initialization > (Detect JavaScript Value Type, Iterator, LapysJS Development Kit Objects Keys (Length))
                                    let detectJavaScriptValueType = !0,
                                        iterator = 0,
                                        LDKO_Keys = LDKF.objectKeys ? LDKF.objectKeys(LDKO) : LDKO.object.keys(LDKO),
                                        LDKO_KeysLength = LDKO_Keys.length;

                                    /* Loop
                                            Iterate over LapysJS Development Kit Objects Keys while
                                            Detect JavaScript Value Type is still truthy.
                                    */
                                    for (iterator = 0; iterator < LDKO_KeysLength && detectJavaScriptValueType; iterator += 1) {
                                        // Initialization > (LapysJS Development Kit Objects Key (Length))
                                        let LDKO_Key = LDKO_Keys[iterator],
                                            LDKO_KeyLength = LDKO_Key.length;

                                        /* Logic
                                                If
                                                    the current indexed key is a presumed prototype-valued property.
                                        */
                                        if (
                                            LDKO_Key[LDKO_KeyLength - 5] == 'P' &&
                                            LDKO_Key[LDKO_KeyLength - 4] == 'r' &&
                                            LDKO_Key[LDKO_KeyLength - 3] == 'o' &&
                                            LDKO_Key[LDKO_KeyLength - 2] == 't' &&
                                            LDKO_Key[LDKO_KeyLength - 1] == 'o'
                                        )
                                            /* Logic
                                                    If
                                                        the Object is the prototype we`ve stored in LapysJS Development Kit Objects.

                                                > Error Handling
                                            */
                                            if (object === LDKO[LDKO_Key])
                                                try {
                                                    // Update > (Detect JavaScript Value Type, Clone)
                                                    detectJavaScriptValueType = !1;
                                                    clone = clonePrototype(object)
                                                } catch (error) {
                                                    throw error;
                                                    // Error
                                                    LDKF.error(["'clone'", "'" + objectConstructorName + ".prototype'"], 'argument')
                                                }
                                    }

                                    /* Logic
                                            [if statement]
                                    */
                                    if (detectJavaScriptValueType)
                                        /* Logic
                                                [if:else if:else statement]

                                            > (Update > Clone | Error)
                                        */
                                            // {Array}
                                            if (LDKF.isArray(object))
                                                clone = cloneArray(object);

                                            // {Boolean}
                                            else if (LDKF.isBoolean(object))
                                                clone = cloneBoolean(object);

                                            // {Function}
                                            else if (LDKF.isFunction(object))
                                                clone = cloneFunction(object);

                                            // {Number}
                                            else if (LDKF.isNumber(object))
                                                clone = cloneNumber(object);

                                            // {Regular Expression}
                                            else if (LDKF.isRegex(object))
                                                clone = cloneRegex(object);

                                            // {String}
                                            else if (LDKF.isString(object))
                                                clone = cloneString(object);

                                            // {Symbol}
                                            else if (LDKF.isSymbol(object))
                                                clone = cloneSymbol(object);

                                            // {Object}
                                            else if (LDKF.isObject(object))
                                                clone = cloneObject(object);

                                            else
                                                // Error
                                                LDKF.error(["'clone'", "'" + objectConstructorName + "'"], 'argument', 'JavaScript object type not determinable')
                                }

                                // Return
                                return clone
                            };

                            // Console Group
                            LDKF.consoleGroup = console.group;

                            // Console Group End
                            LDKF.consoleGroupEnd = console.groupEnd;

                            // Console Log
                            LDKF.consoleLog = console.log;

                            // Create Element
                            LDKF.createElement = function createElement() {
                                // Initialization > (Element, Content, Properties, Selector, Tag Name, Length, Random Element Tag Names)
                                let element = null,
                                    content = '',
                                    properties = {},
                                    selector = '',
                                    tagName = LDKF.string(arguments[0]),
                                    length = arguments.length,
                                    randomElementTagNames = LDKC.randomElementTagNames;

                                /* Logic
                                        [if statement]
                                */
                                if (length) {
                                    /* Logic
                                            [if:else statement]

                                        > Update > (Content, Properties, Selector, Tag Name) | (Content, Properties, Selector)
                                    */
                                    if (tagName[0] == ':') {
                                        content = length > 1 ? LDKF.string(arguments[1]) : '';
                                        properties = length > 2 ? LDKF.object(arguments[2]) : {};
                                        selector = '';
                                        tagName = LDKF.sliceString(tagName, 1)
                                    }

                                    else {
                                        content = length > 2 ? LDKF.string(arguments[2]) : '';
                                        properties = length > 3 ? LDKF.object(arguments[3]) : {};
                                        selector = length > 1 ? LDKF.string(arguments[1]) : ''
                                    }

                                    // Update > Tag Name
                                    (tagName == '*') && (tagName = randomElementTagNames[LDKF.numberParseInt(LDKF.mathRandom() * randomElementTagNames.length)]);

                                    // Error Handling
                                    try {
                                        // Update > Element
                                        element = LDKF.createElementDocument(tagName)
                                    } catch (error) {
                                        // Error
                                        LDKF.error("'createElement'", 'argument', 'The tag name provided ' + LDKF.debugMessage("'" + tagName + "'", ['not', 'a'], 'valid name'))
                                    }

                                    // Modification > Element > (Inner HTML, Selector)
                                    LDKF.set.elementInnerHTML(element, content);
                                    LDKF.set.htmlElementSelector(element, selector);

                                    // LapysJS Development Kit Function > Iterate Object
                                    LDKF.iterateObject((key, value) => {
                                        // Modification > Element > Key
                                        element[key] = value
                                    }, properties)
                                }

                                // Return
                                return element
                            };

                            // Custom Array
                            LDKF.customArray = function customArray() {
                                // Initialization > (Array, Items, Length, Properties)
                                let array = LDKF.customObject.call(customArray, arguments[0], {}, LDKO.arrayProto),
                                    items = LDKF.toArray(arguments[1]),
                                    length = arguments.length,
                                    properties = LDKF.object(arguments[2]);

                                // LapysJS Development Kit Functions
                                    // (Push, Pop) Array
                                    LDKF.pushArray(array, 1);
                                    LDKF.popArray(array, 1);
                                    (length > 1) && LDKF.$pushArray(array, items);

                                    // Iterate Object
                                    (length > 2) && LDKF.iterateObject(function(key, value, description) {
                                        // Modification > Array > [Key]
                                        LDKF.objectDefineProperty(array, key, description)
                                    }, properties);

                                // Return
                                return array
                            };

                            // Custom Object
                            LDKF.customObject = function customObject() {
                                // Initialization > (Length, Name, Object, Properties, Prototype, Target)
                                let length = arguments.length,
                                    name = arguments[0],
                                    object = {},
                                    properties = arguments[1],
                                    prototype = arguments[2],
                                    that = this;

                                // Error Handling > ((Update > Object) | Error)
                                try { object = new (eval('(function ' + name + '(){})')) }
                                catch (error) { LDKF.error(that == LDKF.customArray ? "'customArray'" : "'customObject'", 'argument', LDKF.debugMessage("'" + LDKF.string(name) + "'", ['must', 'a'], 'valid constructor name')) }

                                // Modification > Object > (Constructor > Prototype)
                                (length > 2) && (object.__proto__ = LDKF.objectCreate(prototype));

                                /* Logic
                                        [if statement]
                                */
                                if (length > 1) {
                                    // Update > Properties
                                    properties = LDKF.object(properties);

                                    // LapysJS Development Kit Functions > Iterate Object
                                    LDKF.iterateObject((key, value, description) => {
                                        // Modification > Object > [Key]
                                        LDKF.objectDefineProperty(object, key, description)
                                    }, properties)
                                }

                                // Return
                                return object
                            };

                            // Debug Message
                            LDKF.debugMessage = function debugMessage() {
                                // Initialization > (Affix, Length, Message, Format)
                                let affix = arguments[3],
                                    length = arguments.length,
                                    message = arguments[0],
                                    format = [message, arguments[1], arguments[2]];

                                /* Logic
                                        [if statement]
                                */
                                if (length == 1)
                                    // Return
                                    return LDKF.string(message);

                                else {
                                    // Update > Format
                                    LDKF.isArray(format[0]) || (format[0] = [format[0]]);
                                    LDKF.isArray(format[1]) || (format[1] = [format[1]]);
                                    LDKF.isArray(format[2]) || (format[2] = [format[2]]);

                                    // LapysJS Development Kit Functions > Error
                                    format[0].length || LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 0', ['must', 'a'], 'non-empty array')));
                                    format[1].length || LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 1', ['must', 'a'], 'non-empty array')));
                                    format[2].length || LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 2', ['must', 'a'], 'non-empty array')));

                                    // LapysJS Development Kit Functions > Iterate Array
                                    LDKF.iterateArray(function(key, value) {
                                        // Modification > Target > Key
                                        this[key] = LDKF.string(value)
                                    }, format[0], format[1], format[2]);

                                    /* Function > Argument Format Prefix
                                            --- NOTE ---
                                                #Lapys:
                                                    - Prevent repetition of code.
                                                    - Inject these functions where needed as necessary.
                                    */
                                    function argumentFormatPrefix() {
                                        // LapysJS Development Kit Functions > Error
                                        (format[0].length > 2) && LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 0', 'only', ['string', 'single-unit array', 'dual-unit array'])));

                                        // Update > Message
                                        message = 'Failed to execute ' + (format[0].length == 1 ? format[0][0] : format[0][0] + ' on ' + format[0][1])
                                    }

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (length == 2) {
                                        /* Logic
                                                [if:else statement]
                                        */
                                            // {Argument}
                                            if (format[1][0] == 'argument') {
                                                // Argument Format Prefix
                                                argumentFormatPrefix();

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (format[1].length == 2)
                                                    /* Logic
                                                            [switch:case statement]

                                                        > Update > Message
                                                    */
                                                    switch (format[1][1]) {
                                                        // Required
                                                        case 'required':
                                                            message += ': Number of arguments required is ' + join(format[2], ',', 'or')
                                                    }
                                            }

                                        else
                                            // LapysJS Development Kit Functions > Error
                                            LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 1', ['only', 'values'], ["'argument'"])))
                                    }

                                    else if (length > 2) {
                                        // Function
                                            // Is Alphabet
                                            function isAlphabet() {
                                                /* Function > Test
                                                        --- NOTE ---
                                                            #Lapys: This is an extreme example of strictly avoiding
                                                                prototype methods and properties.
                                                */
                                                let character = arguments[0];

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
                                            }

                                            // Is Vowel
                                            function isVowel() {
                                                // Initialization > Character
                                                let character = LDKF.string(arguments[0]);

                                                /* Loop
                                                        [while statement]

                                                        --- NOTE ---
                                                            #Lapys: Alternative to trimming leading text.

                                                    > Update > Character
                                                */
                                                while (!isAlphabet(character[0]) && character)
                                                    character = (function() {
                                                        // Initialization > (Character Length, Iterator, String)
                                                        let characterLength = character.length,
                                                            iterator = 1,
                                                            string = '';

                                                        /* Loop
                                                                --- NOTE ---
                                                                    #Lapys: Alternative to slicing text.

                                                            > Update > String
                                                        */
                                                        for (iterator = 1; iterator < characterLength; iterator += 1)
                                                            string += character[iterator];

                                                        // Return
                                                        return string
                                                    })();

                                                // Update > Character
                                                character = character[0];

                                                // Return
                                                return character == 'a' || character == 'A' ||
                                                    character == 'e' || character == 'E' ||
                                                    character == 'i' || character == 'I' ||
                                                    character == 'o' || character == 'O' ||
                                                    character == 'u' || character == 'U'
                                            }

                                            // Join
                                            function join() {
                                                // Initialization > (Length, Array, Grammatical Terminator, Iterator, Separation Character, String)
                                                let length = arguments.length,
                                                    array = arguments[0],
                                                    grammaticalTerminator = length > 2 ? LDKF.string(arguments[2]) : '',
                                                    iterator = 1,
                                                    separationCharacter = length > 1 ? LDKF.string(arguments[1]) : '',
                                                    string = '';

                                                // LapysJS Development Kit Functions > Error
                                                LDKF.isArray(array) || LDKF.error(debugMessage(["'join'", "'debugMessage'"], 'argument', debugMessage('Argument 0', 'must', 'array')));

                                                // Initialization > (Decremented) Array Length
                                                let arrayLength = array.length,
                                                    decrementedArrayLength = arrayLength - 1;

                                                // Update > String
                                                string += array[0];

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (arrayLength > 1) {
                                                    /* Loop
                                                            Iterate over Decremented Array Length.

                                                        > Update > String
                                                    */
                                                    for (iterator = 1; iterator < decrementedArrayLength; iterator += 1)
                                                        string += separationCharacter + ' ' + array[iterator];

                                                    // Update > String
                                                    string += ' ' + grammaticalTerminator + ' ' + array[decrementedArrayLength]
                                                }

                                                // Return
                                                return string
                                            }

                                        // LapysJS Development Kit Functions > Error
                                        (format[1].length > 2) && LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 1', 'only', ['string', 'single-unit array', 'dual-unit array'])));

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                            // {Argument}
                                            if (format[1][0] == 'argument') {
                                                // Argument Format Prefix
                                                argumentFormatPrefix();

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (format[1].length == 2)
                                                    /* Logic
                                                            [switch:case statement]

                                                        > Update > Message
                                                    */
                                                    switch (format[1][1]) {
                                                        // Required
                                                        case 'required':
                                                            message += ': Number of arguments required is ' + join(format[2], ',', 'or')
                                                    }

                                                else {
                                                    // LapysJS Development Kit Functions > Error
                                                    (format[2].length > 2) && LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 2', 'only', ['string', 'single-unit array', 'dual-unit array'])));

                                                    // Update > Message
                                                    message += ': ';

                                                    /* Logic
                                                            [if:else statement]
                                                    */
                                                    if (format[2].length == 1)
                                                        // Update > Message
                                                        message += format[2][0];

                                                    else {
                                                        // Initialization > (Expectation, Reality)
                                                        let expectation = format[2][0],
                                                            reality = format[2][1];

                                                        // Function > Anglicize Numeral
                                                        function anglicizeNumeral() {
                                                            // Initialization > Numeral
                                                            let numeral = arguments[0];

                                                            /* Logic
                                                                    [if statement]

                                                                > Return
                                                            */
                                                            if (LDKF.isNumber(numeral))
                                                                return numeral < 0 ? 'negative ' + LDKF.abs(numeral) : numeral;

                                                            // Return
                                                            return numeral
                                                        }

                                                        // Update > Message
                                                        message += anglicizeNumeral(expectation) + ' argument' + (+expectation+'' == 'NaN' ? ' set' : (+expectation > 1 ? 's' : (+expectation < -1 ? 's' : ''))) + ' required, but only ' + anglicizeNumeral(reality) + ' present'
                                                    }
                                                }
                                            }

                                            // {Must}
                                            else if (format[1][0] == 'must') {
                                                // Initialization > Format Type
                                                let formatType = format[1][1];

                                                // Update > Message
                                                message = join(format[0], ',', 'and') + ' must be ';

                                                /* Logic
                                                        [if statement]

                                                    > Update > Message
                                                */
                                                    // {Vowel Prefix}
                                                    if (formatType == 'a' || formatType == 'an')
                                                        message += isVowel(format[2][0]) ? 'an ' : (isAlphabet(format[2][0][0]) ? 'a ' : '');

                                                // Update > Message
                                                message += join(format[2], ',', 'or')
                                            }

                                            // {Not}
                                            else if (format[1][0] == 'not') {
                                                // Initialization > Format Type
                                                let formatType = format[1][1];

                                                // Update > Message
                                                message = join(format[0], ',', 'and') + ' is not ';

                                                /* Logic
                                                        [if statement]

                                                    > Update > Message
                                                */
                                                    // {Vowel Prefix}
                                                    if (formatType == 'a' || formatType == 'an')
                                                        message += isVowel(format[2][0]) ? 'an ' : (isAlphabet(format[2][0][0]) ? 'a ' : '');

                                                // Update > Message
                                                message += join(format[2], ',', 'or')
                                            }

                                            // {Only}
                                            else if (format[1][0] == 'only') {
                                                // Initialization > Format Type
                                                let formatType = format[1][1];

                                                // Update > Message
                                                message = join(format[0], ',', 'and') + ' can only be ';

                                                /* Logic
                                                        [if:else statement]

                                                    > Update > Message
                                                */
                                                    // {Vowel Prefix}
                                                    if (formatType == 'a' || formatType == 'an')
                                                        message += isVowel(format[2][0]) ? 'an ' : (isAlphabet(format[2][0][0]) ? 'a ' : '');

                                                    // {Value Specifier}
                                                    else if (formatType == 'values')
                                                        message += 'of values ';

                                                // Update > Message
                                                message += join(format[2], ',', 'and')
                                            }

                                            else
                                                // LapysJS Development Kit Functions > Error
                                                LDKF.error(debugMessage("'debugMessage'", 'argument', debugMessage('Argument 1', ['only', 'values'], ["'argument'", "'must'", "'not'", "'only'"])))
                                    }

                                    else
                                        // Return
                                        return '';

                                    // Update > Message
                                    (length == 4) && (message += LDKF.string(affix));

                                    // Return
                                    return message
                                }
                            };

                            // Error
                            LDKF.error = function error() {
                                // Error
                                throw new LapysJSError(LDK.info.errorMessagePrefix + LDKF.debugMessage.apply(LDKF, LDKF.toArray(arguments)))
                            };

                            // Evaluate
                            LDKF.eval = (function() {
                                // Initialization > Method
                                let method = eval;

                                // Return
                                return function Eval() { return method.call(window, arguments[0]) }
                            })();

                            LDKF.$eval = (function() {
                                // Initialization > Method
                                let method = eval;

                                // Return
                                return function Eval() { return method.call(this, arguments[0]) }
                            })();

                            // Function
                            LDKF.$func = function Function() {
                                // Initialization > (Length, (...), Format)
                                let length = arguments.length,
                                    $0 = arguments[0],
                                    $1 = arguments[1],
                                    $2 = arguments[2],
                                    $3 = arguments[3],
                                    format = {
                                        // Body
                                        body: (function() {
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (length) {
                                                case 1: return $0; break;
                                                case 2: return $1; break;
                                                case 3: return $2; break;
                                                case 4: return $2; break;
                                                default: return ''
                                            }
                                        })(),

                                        // Name
                                        name: (function() {
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (length) {
                                                case 3: return $0; break;
                                                case 4: return $0; break;
                                                default: return ''
                                            }
                                        })(),

                                        // Parameters
                                        parameters: (function() {
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (length) {
                                                case 2: return $0; break;
                                                case 3: return $1; break;
                                                case 4: return $1; break;
                                                default: return ''
                                            }
                                        })(),

                                        // Type
                                        type: (function() {
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Return
                                            */
                                            switch (length) {
                                                case 4: return $3;
                                                default: return !1
                                            }
                                        })()
                                    };

                                /* Logic
                                        [if:else statement]
                                */
                                if (length) {
                                    // Error
                                    (length > 4) && LDKF.error("'Function'", ['argument', 'required'], [1, 2, 3, 4]);

                                    // Initialization > (Body, Name, Parameters, Type, Code)
                                    let body = format.body,
                                        name = format.name,
                                        parameters = format.parameters,
                                        type = format.type,
                                        code = type ? '=>' : '(function';

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isNativeFunction(body))
                                        // LapysJS Development Kit Functions > Error
                                        LDKF.error("'Function'", 'argument', 'Can not query source code of native functions');

                                    else {
                                        // Update
                                            // Body
                                            LDKF.isFunction(body) && (body = LDKF.get.functionBody(body));
                                            LDKF.isString(body) || (body = 'return ' + LDKF.string(body));

                                            // Name
                                            LDKF.isFunction(name) && (name = name.name);
                                            name = LDKF.string(name);

                                            // Parameters
                                            LDKF.isFunction(parameters) && (parameters = LDKF.get.functionParameters(parameters));
                                            LDKF.isArray(parameters) && (parameters = (a=>{let $a=a.length,_a=$a-1,b='';for(let c=0;c<$a;c+=1){let d=a[c],e='';b+=(e=LDKF.isObject(d)?('address'in d?LDKF.string(d.address):'')+('value'in d?'='+LDKF.string(d.value):''):LDKF.string(d));e&&(b+=c==_a?'':', ')};return b})(parameters));
                                            parameters = LDKF.string(parameters);

                                            // Code
                                            code = type ? '(' + parameters + ') ' + code : code + (name ? ' ' + name : '') + '(' + parameters + ') ';
                                            code += type ? ((a=>{let $a=a.length,d=!0;for(let b=0;b<$a;b+=1){let e=a[b];(d&&e!=' ')&&(d=!1);if(!d&&e==' ')return!0}return!1})(body) ? ' {' + body + '}' : body) : '{' + body + '}';
                                            code = type ? '(' + code + ')' : code + ')';

                                        // Return
                                        return LDKF.eval(code)
                                    }
                                }

                                else
                                    // Return
                                    return (function() {})
                            };

                            // Is Array
                            LDKF.isArray = function isArray() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Initialization > Value Constructor
                                    let valueConstructor = LDKF.isConstructible(value) ? value.constructor : null;

                                    // Update > Result
                                    (
                                        result &&
                                        (valueConstructor == LDKO.array && test(value) == '[object Array]') &&
                                        typeof value == 'object'
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Array-Like
                            LDKF.isArrayLike = function isArrayLike() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Initialization > Value Constructor
                                    let valueConstructor = LDKF.isConstructible(value) ? value.constructor : null;

                                    // Update > Result
                                    (
                                        result &&
                                        (
                                            (valueConstructor == LDKO.array && test(value) == '[object Array]') ||
                                            (valueConstructor == LDKO.htmlAllCollection && test(value) == '[object HTMLAllCollection]') ||
                                            (valueConstructor == LDKO.htmlCollection && test(value) == '[object HTMLCollection]') ||
                                            (valueConstructor == LDKO.nodeList && test(value) == '[object NodeList]')
                                        ) &&
                                        (typeof value == 'object' || typeof value == 'undefined')
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Boolean
                            LDKF.isBoolean = function isBoolean() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = !0;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && typeof value != 'boolean') && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Character Data
                            LDKF.isCharacterData = function isCharacterData() {
                                // Initialization > (Arguments, Result, Test)
                                let args = LDKF.toArray(arguments),
                                    result = !0,
                                    test = (function() {
                                        // Initialization > (Object, Result)
                                        let object = arguments[0],
                                            result = !1;

                                        // Logic > Return
                                        if (LDKF.isNonConstructible(object))
                                            return result;

                                        // Initialization > Result
                                        let results = [object.__proto__];

                                        /* Loop
                                                [while statement]
                                        */
                                        while (!LDKF.isNull(results[results.length - 1])) {
                                            // Update > (Object, Results)
                                            object = object.__proto__;
                                            results[results.length] = object.__proto__
                                        }

                                        // LapysJS Development Kit Functions > Iterate Array
                                        LDKF.iterateArray((key, value) => {
                                            // Update > Result
                                            (!result && value == LDKO.characterDataProto) && (result = !0)
                                        }, results);

                                        // Return
                                        return result
                                    });

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && !test(value)) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Constructible
                            LDKF.isConstructible = function isConstructible() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        (test(value) == '[object Null]' || test(value) == '[object Undefined]') &&
                                        (typeof value == 'object' || typeof value == 'undefined')
                                    ) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Document Type
                            LDKF.isDocumentType = function isDocumentType() {
                                // Initialization > (Arguments, Result, Test)
                                let args = LDKF.toArray(arguments),
                                    result = !0,
                                    test = (function() {
                                        // Initialization > (Object, Result)
                                        let object = arguments[0],
                                            result = !1;

                                        // Logic > Return
                                        if (LDKF.isNonConstructible(object))
                                            return result;

                                        // Initialization > Result
                                        let results = [object.__proto__];

                                        /* Loop
                                                [while statement]
                                        */
                                        while (!LDKF.isNull(results[results.length - 1])) {
                                            // Update > (Object, Results)
                                            object = object.__proto__;
                                            results[results.length] = object.__proto__
                                        }

                                        // LapysJS Development Kit Functions > Iterate Array
                                        LDKF.iterateArray((key, value) => {
                                            // Update > Result
                                            (!result && value == LDKO.documentTypeProto) && (result = !0)
                                        }, results);

                                        // Return
                                        return result
                                    });

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && !test(value)) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Element
                            LDKF.isElement = function isElement() {
                                // Initialization > (Arguments, Result, Test)
                                let args = LDKF.toArray(arguments),
                                    result = !0,
                                    test = (function() {
                                        // Initialization > (Object, Result)
                                        let object = arguments[0],
                                            result = !1;

                                        // Logic > Return
                                        if (LDKF.isNonConstructible(object))
                                            return result;

                                        // Initialization > Result
                                        let results = [object.__proto__];

                                        /* Loop
                                                [while statement]
                                        */
                                        while (!LDKF.isNull(results[results.length - 1])) {
                                            // Update > (Object, Results)
                                            object = object.__proto__;
                                            results[results.length] = object.__proto__
                                        }

                                        // LapysJS Development Kit Functions > Iterate Array
                                        LDKF.iterateArray((key, value) => {
                                            // Update > Result
                                            (!result && value == LDKO.elementProto) && (result = !0)
                                        }, results);

                                        // Return
                                        return result
                                    });

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && !test(value)) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Finite
                            LDKF.isFinite = function isFinite() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        LDKF.numberIsFinite(value) &&
                                        LDKF.isNumber(value)
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Function
                            LDKF.isFunction = function isFunction() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = !0;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && typeof value != 'function') && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is HTML Element
                            LDKF.isHtmlElement = function isHtmlElement() {
                                // Initialization > (Arguments, Result, Test)
                                let args = LDKF.toArray(arguments),
                                    result = !0,
                                    test = (function() {
                                        // Initialization > (Object, Result)
                                        let object = arguments[0],
                                            result = !1;

                                        // Logic > Return
                                        if (LDKF.isNonConstructible(object))
                                            return result;

                                        // Initialization > Result
                                        let results = [object.__proto__];

                                        /* Loop
                                                [while statement]
                                        */
                                        while (!LDKF.isNull(results[results.length - 1])) {
                                            // Update > (Object, Results)
                                            object = object.__proto__;
                                            results[results.length] = object.__proto__
                                        }

                                        // LapysJS Development Kit Functions > Iterate Array
                                        LDKF.iterateArray((key, value) => {
                                            // Update > Result
                                            (!result && value == LDKO.htmlElementProto) && (result = !0)
                                        }, results);

                                        // Return
                                        return result
                                    });

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && !test(value)) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is HTML Head Element
                            LDKF.isHtmlHeadElement = function isHtmlHeadElement() {
                                // Initialization > (Arguments, Result, Test)
                                let args = LDKF.toArray(arguments),
                                    result = !0,
                                    test = (function() {
                                        // Initialization > (Object, Result)
                                        let object = arguments[0],
                                            result = !1;

                                        // Logic > Return
                                        if (LDKF.isNonConstructible(object))
                                            return result;

                                        // Initialization > Result
                                        let results = [object.__proto__];

                                        /* Loop
                                                [while statement]
                                        */
                                        while (!LDKF.isNull(results[results.length - 1])) {
                                            // Update > (Object, Results)
                                            object = object.__proto__;
                                            results[results.length] = object.__proto__
                                        }

                                        // LapysJS Development Kit Functions > Iterate Array
                                        LDKF.iterateArray((key, value) => {
                                            // Update > Result
                                            (!result && value == LDKO.htmlHeadElementProto) && (result = !0)
                                        }, results);

                                        // Return
                                        return result
                                    });

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && !test(value)) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Infinite
                            LDKF.isInfinite = function isInfinite() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        !LDKF.numberIsFinite(value) &&
                                        LDKF.isNumber(value)
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Native Function
                            LDKF.isNativeFunction = function isNativeFunction() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = !0;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        !(function() {
                                            // Initialization > (Allow Parsing, Code (Iterator, Length), Matches (Iterator, Length), Parse-Lock Character, Stream, Strikes, Word)
                                            let allowParsing = !0,
                                                code = LDKF.isFunction(value) ? LDKF.toFunctionString(value) : '',
                                                codeIterator = 0,
                                                codeLength = code.length,
                                                matches = ['[Command Line API]', '[native code]'],
                                                matchesIterator = 0,
                                                matchesLength = matches.length,
                                                parseLockCharacter = '',
                                                stream = '',
                                                strikes = 0,
                                                word = '';

                                            // Logic > Return
                                            if (!codeLength)
                                                return !1;

                                            /* Loop
                                                    Index Matches.
                                            */
                                            for (matchesIterator; matchesIterator < matchesLength; matchesIterator += 1)
                                                /* Logic
                                                        [if statement]
                                                */
                                                if (codeLength < matches[matchesIterator].length) {
                                                    // Update > Strikes
                                                    strikes += 1;

                                                    // Logic > Return
                                                    if (strikes == matchesLength)
                                                        return !1
                                                }

                                            /* Loop
                                                    Index Matches.
                                            */
                                            for (matchesIterator = 0; matchesIterator < matchesLength; matchesIterator += 1) {
                                                // Initialization > Match (Length)
                                                let match = matches[matchesIterator],
                                                    matchLength = match.length;

                                                /* Update > Stream
                                                        --- NOTE ---
                                                            #Lapys: The Stream variable is unnecessary to this code.
                                                */
                                                stream && (stream += '\n');

                                                /* Loop
                                                        Iterate through the Code.
                                                */
                                                for (codeIterator = 0; codeIterator < codeLength; codeIterator += 1) {
                                                    // Initialization > ((Next) Character, Match Iterator)
                                                    let character = code[codeIterator],
                                                        nextCharacter = code[codeIterator + 1],
                                                        matchIterator = 0;

                                                    /* Logic
                                                            [if:else if statement]
                                                    */
                                                    if (allowParsing) {
                                                        // Update > Stream
                                                        stream += character;

                                                        // Logic > Update
                                                            // Allow Parsing
                                                            if (
                                                                character == '/' &&
                                                                (nextCharacter == '*' || nextCharacter == '/')
                                                            )
                                                                allowParsing = !1;

                                                            // Allow Parsing, Parse-Lock Character
                                                            if (character == '"' || character == "'" || character == '`') {
                                                                allowParsing = !1;
                                                                parseLockCharacter = character
                                                            }

                                                        // Logic > Return
                                                        if (word == match)
                                                            return !0;

                                                        /* Logic
                                                                Iterate through the current Match.
                                                        */
                                                        for (matchIterator; matchIterator < matchLength; matchIterator += 1) {
                                                            // Initialization > Match Character
                                                            let matchCharacter = match[matchIterator];

                                                            // Update > Word
                                                            (character == matchCharacter && word == LDKF.sliceString(match, 0, matchIterator)) && (word += match[word.length])
                                                        }
                                                    }

                                                    else if (
                                                        character == '\n' ||
                                                        (character == '*' && nextCharacter == '/') ||
                                                        (
                                                            (character == '"' || character == "'" || character == '`') &&
                                                            character == parseLockCharacter
                                                        )
                                                    )
                                                        // Update > Allow Parsing
                                                        allowParsing = !0
                                                }
                                            }

                                            /* Return
                                                    --- NOTE ---
                                                        #Lapys: The return value here is also not necessary.
                                            */
                                            return !1
                                        })()
                                    ) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Not a Number
                            LDKF.isNaN = function isNaN() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        LDKF.numberIsNaN(value) &&
                                        LDKF.isNumber(value)
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Node
                            LDKF.isNode = function isNode() {
                                // Initialization > (Arguments, Result, Test)
                                let args = LDKF.toArray(arguments),
                                    result = !0,
                                    test = (function() {
                                        // Initialization > (Object, Result)
                                        let object = arguments[0],
                                            result = !1;

                                        // Logic > Return
                                        if (LDKF.isNonConstructible(object))
                                            return result;

                                        // Initialization > Result
                                        let results = [object.__proto__];

                                        /* Loop
                                                [while statement]
                                        */
                                        while (!LDKF.isNull(results[results.length - 1])) {
                                            // Update > (Object, Results)
                                            object = object.__proto__;
                                            results[results.length] = object.__proto__
                                        }

                                        // LapysJS Development Kit Functions > Iterate Array
                                        LDKF.iterateArray((key, value) => {
                                            // Update > Result
                                            (!result && value == LDKO.nodeProto) && (result = !0)
                                        }, results);

                                        // Return
                                        return result
                                    });

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && !test(value)) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Non-Constructible
                            LDKF.isNonConstructible = function isNonConstructible() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        (test(value) == '[object Null]' || test(value) == '[object Undefined]') &&
                                        (typeof value == 'object' || typeof value == 'undefined')
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Null
                            LDKF.isNull = function isNull() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        test(value) == '[object Null]' &&
                                        typeof value == 'object'
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Number
                            LDKF.isNumber = function isNumber() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = !0;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && typeof value != 'number') && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Object
                            LDKF.isObject = function isObject() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = !0;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        (
                                            LDKF.isArray(value) || LDKF.isBoolean(value) || LDKF.isFunction(value) ||
                                            LDKF.isNumber(value) || LDKF.isRegex(value) || LDKF.isString(value) || LDKF.isSymbol(value) ||
                                            LDKF.isNonConstructible(value)
                                        )
                                    ) && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Regular Expression
                            LDKF.isRegex = function isRegex() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Initialization > Value Constructor
                                    let valueConstructor = LDKF.isConstructible(value) ? value.constructor : null;

                                    // Update > Result
                                    (
                                        result &&
                                        (valueConstructor == LDKO.regex && test(value) == '[object RegExp]') &&
                                        typeof value == 'object'
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Safe Integer
                            LDKF.isSafeInteger = function isSafeInteger() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        LDKF.numberIsSafeInteger(value) &&
                                        LDKF.isNumber(value)
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Safe Number
                            LDKF.isSafeNumber = function isSafeNumber() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        LDKF.isFinite(value) &&
                                        LDKF.isNumber(value)
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Strictly Array-Like
                            LDKF.isStrictlyArrayLike = function isStrictlyArrayLike() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Initialization > Value Constructor
                                    let valueConstructor = LDKF.isConstructible(value) ? value.constructor : null;

                                    // Update > Result
                                    (
                                        result &&
                                        (
                                            (valueConstructor == LDKO.htmlAllCollection && test(value) == '[object HTMLAllCollection]') ||
                                            (valueConstructor == LDKO.htmlCollection && test(value) == '[object HTMLCollection]') ||
                                            (valueConstructor == LDKO.nodeList && test(value) == '[object NodeList]')
                                        ) &&
                                        (typeof value == 'object' || typeof value == 'undefined')
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is String
                            LDKF.isString = function isString() {
                                // Initialization > (Arguments, Result)
                                let args = [...arguments],
                                    result = !0;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (result && typeof value != 'string') && (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Symbol
                            LDKF.isSymbol = function isSymbol() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Initialization > Value Constructor
                                    let valueConstructor = LDKF.isConstructible(value) ? value.constructor : null;

                                    // Update > Result
                                    (
                                        result &&
                                        (valueConstructor == LDKO.symbol && test(value) == '[object Symbol]') &&
                                        typeof value == 'symbol'
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            // Is Undefined
                            LDKF.isUndefined = function isUndefined() {
                                // Initialization > (Arguments, Result, Test)
                                let args = [...arguments],
                                    result = !0,
                                    test = LDKF.toObjectString;

                                // Logic > Return
                                if (!args.length)
                                    return !1;

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Update > Result
                                    (
                                        result &&
                                        test(value) == '[object Undefined]' &&
                                        typeof value == 'undefined'
                                    ) || (result = !1)
                                }, args);

                                // Return
                                return result
                            };

                            /* Iterate Array
                                    --- NOTE ---
                                        #Lapys: The only downsides to this method:
                                            - Slower than syntax-wise approaches using keywords.
                                            - Can not be stopped without an error.
                            */
                            LDKF.iterateArray = function iterateArray() {
                                // Initialization > (Arrays, Callback)
                                let arrays = LDKF.sliceArray || LDKO.arrayProto.slice,
                                    callback = arguments[0];

                                // Update > Arrays
                                arrays = arrays == LDKO.arrayProto.slice ? arrays.call(LDKF.arrayFrom(arguments), 1) : arrays(LDKF.arrayFrom(arguments), 1);

                                /* Function > Iterate
                                        --- NOTE ---
                                            #Lapys: Iterate one array.
                                */
                                function iterate() {
                                    // Initialization > (Array (Length), Callback, Iterator)
                                    let array = arguments[1],
                                        arrayLength,
                                        callback = arguments[0],
                                        iterator = 0;

                                    // Error Handling
                                    try { arrayLength = LDKO.string(array) }
                                    catch (error) { arrayLength = 0 }

                                    // Update > Array (Length)
                                    arrayLength = arrayLength == 'null' || arrayLength == 'undefined' ? 0 : array.length;
                                    (typeof arrayLength == 'number') || (arrayLength = 0);
                                    (
                                        LDKF.toObjectString(array) == '[object Array]' ||
                                        LDKF.toObjectString(array) == '[object HTMLAllCollection]' ||
                                        LDKF.toObjectString(array) == '[object HTMLCollection]' ||
                                        LDKF.toObjectString(array) == '[object NodeList]'
                                    ) || (array = []);

                                    // Function > Call
                                    function call() {
                                        // Return
                                        return callback.call(array, arguments[0], arguments[1])
                                    }

                                    /* Loop
                                            Iterate over Array Length.

                                        > Call
                                    */
                                    for (iterator = 0; iterator < arrayLength; iterator += 1)
                                        call(iterator, array[iterator]);

                                    /* Loop
                                            Index Array.

                                        > Call
                                    */
                                    for (iterator in array)
                                        (+iterator+'' == 'NaN') && call(iterator, array[iterator])
                                }

                                // Iterate
                                iterate(function(key, value) {
                                    // Iterate
                                    iterate(callback, value)
                                }, arrays)
                            };

                            /* Iterate Object
                                    --- NOTE ---
                                        #Lapys: The only downsides to this method:
                                            - Slower than syntax-wise approaches using keywords.
                                            - Can not be stopped without an error.
                            */
                            LDKF.iterateObject = function iterateObject() {
                                // Initialization > (Allow Error Messages, Callback, Force Iteration, Objects)
                                let allowErrorMessages = !!arguments[3],
                                    callback = arguments[0],
                                    forceIteration = !!arguments[2],
                                    objects = LDKF.sliceArray(LDKF.toArray(arguments), 1);

                                // Function > Iterate
                                function iterate() {
                                    // Initialization > (Callback, Iterator, Object (Property Descriptors (Keys (Length))))
                                    let callback = arguments[0],
                                        iterator = 0,
                                        object = LDKF.object(arguments[1]),
                                        objectPropertyDescriptors = LDKF.objectGetOwnPropertyDescriptors(object),
                                        objectPropertyDescriptorsKeys = LDKF.objectKeys(objectPropertyDescriptors),
                                        objectPropertyDescriptorsKeysLength = objectPropertyDescriptorsKeys.length;

                                    // Function > Call
                                    function call() {
                                        // Return
                                        return callback.apply(object, LDKF.toArray(arguments))
                                    }

                                    /* Loop
                                            Iterate over Object Property Descriptors Keys Length.
                                    */
                                    for (iterator = 0; iterator < objectPropertyDescriptorsKeysLength; iterator += 1) {
                                        // Initialization > (Object Property (Descriptors Key, Description), Value)
                                        let objectPropertyDescriptorsKey = objectPropertyDescriptorsKeys[iterator],
                                            objectPropertyDescription = objectPropertyDescriptors[objectPropertyDescriptorsKey],
                                            value;

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (LDKF.isNonConstructible(objectPropertyDescription.get) && LDKF.isNonConstructible(objectPropertyDescription.set))
                                            // Update > Value
                                            value = objectPropertyDescription.value;

                                        else
                                            // Error Handling
                                            try {
                                                value = objectPropertyDescription.get.call(object)
                                            } catch (error) {
                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (forceIteration)
                                                    // Warn
                                                    allowErrorMessages && LDKF.warn('Error in iterating object property:\n\t' + error.message);

                                                else
                                                    // Logic > Error
                                                    if (allowErrorMessages)
                                                        LDKF.error("'iterateObject'", 'argument', 'Unable to iterate through object:\n\t' + error.message);

                                                    else
                                                        throw new LapysJSError
                                            }

                                        // Call
                                        call(objectPropertyDescriptorsKey, value, objectPropertyDescription)
                                    }
                                }

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray(function(key, value) {
                                    // Iterate
                                    iterate(callback, value)
                                }, objects)
                            };

                            // Performance Now
                            LDKF.performanceNow = function performanceNow() {
                                // Return
                                return LDKF.performanceProtoNow.call(LDKO.$performance)
                            };

                            // To Array
                            LDKF.toArray = function toArray() {
                                // Initialization > (Array, Arguments)
                                let array = [],
                                    args = LDKF.arrayFrom(arguments);

                                // LapysJS Development Kit Functions > Iterate Array
                                LDKF.iterateArray((key, value) => {
                                    // Logic > Error Handling > Update > Value
                                    if (!LDKF.isArrayLike(value))
                                        try { value = [...value] }
                                        catch (error) { value = [value] }

                                    // LapysJS Development Kit Functions > Iterate Array
                                    LDKF.iterateArray((key, value) => {
                                        // Modification > Array > (Key, Array > Length)
                                        array[+key+'' == 'NaN' ? key : array.length] = value
                                    }, value)
                                }, args);

                                // Return
                                return array
                            };

                            /* Query Line
                                    --- UPDATE REQUIRED ---
                                        #Lapys: Modify for other browsers as well.
                                            Modification up-to-date already:
                                                - Google Chrome
                                                - Internet Explorer (pending... -_-)
                                                - Microsoft Edge (pending)
                                                - Mozilla Firefox
                                                - Opera (pending)
                                                - Safari (pending)
                            */
                            LDKF.queryLine = function queryLine() {
                                // Initialization > (Error (Message, Stack), Iterator, Line, Protocol)
                                let browser = LDKO.browser.valueOf(),
                                    errorMessage = '',
                                    errorStack = '',
                                    iterator = 0,
                                    line = '',
                                    protocol = LDKO.locationProtocol;

                                // Error Handling
                                try {
                                    // Error
                                    throw new LDKO.error
                                } catch (error) {
                                    /* Initialization > Stack
                                            --- WARN ---
                                                #Lapys: Stack should be equivocal to Chrome`s `Error` object stack.
                                                    This is if the browser is not Chrome of course.
                                    */
                                    let stack = error.stack;

                                    // Update > (Error (Message, Stack), Line)
                                    errorMessage = error.constructor.name + ': ' + error.message;
                                    errorStack = line = stack
                                }

                                // Logic
                                if (browser != 'chrome')
                                    /* Logic
                                            [switch:case statement]

                                        > Update > Line
                                    */
                                    switch (browser) {
                                        // Firefox
                                        case 'firefox':
                                            line = errorMessage + '\n' + LDKF.sliceString(LDKF.replaceString('\n' + line, /\n[^@]{0,}@/g, match => {
                                                return '\n    at ' + LDKF.replaceString(LDKF.sliceString(match, '\n'.length), '@', '') + ' '
                                            }), '\n'.length)
                                    }

                                // Initialization > (Line Length, (Detect) Newline Quantity, Stream)
                                let lineLength = line.length,
                                    detectNewlineQuantity = 0,
                                    newlineQuantity = 0,
                                    stream = '';

                                // Logic > Update > Line
                                while (line[line.length - 1] == '\n') line = LDKF.sliceString(line, 0, -1);

                                /* Loop
                                        Iterate through Line.

                                    > Update > Newline Quantity
                                */
                                for (iterator; iterator < lineLength; iterator += 1)
                                    (line[iterator] == '\n') && (newlineQuantity += 1);

                                // Update > Newline Quantity
                                newlineQuantity -= 1;

                                /* Loop
                                        Iterate through Line.
                                */
                                for (iterator = 0; iterator < lineLength; iterator += 1) {
                                    // Initialization > Character
                                    let character = line[iterator];

                                    // Update > (Stream, Detect Newline Quantity)
                                    character && (detectNewlineQuantity > newlineQuantity) && (stream += character);
                                    (character == '\n') && (detectNewlineQuantity += 1)
                                }

                                // (Loop > Update > Stream, Update > Stream)
                                while (stream[0] == ' ') stream = LDKF.sliceString(stream, 1);
                                stream = LDKF.sliceString(stream, 'at'.length);
                                while (stream[0] == ' ') stream = LDKF.sliceString(stream, 1);
                                while (stream[stream.length - 1] == '\n') stream = LDKF.sliceString(stream, 0, -1);

                                /* Logic
                                        [if statement]
                                */
                                if (
                                    browser == 'edge' &&
                                    (
                                        stream[0] != 'e' && stream[1] != 'v' && stream[2] != 'a' && stream[3] != 'l' &&
                                        stream[4] != ' ' &&
                                        stream[5] != 'c' && stream[6] != 'o' && stream[7] != 'd' && stream[8] != 'e'
                                    )
                                ) {
                                    // Loop > Update > Stream
                                    while (
                                        stream &&
                                        (function() {
                                            // Initialization > (Iterator, Protocol Length)
                                            let iterator = 0,
                                                protocolLength = protocol.length;

                                            /* Loop
                                                    Iterate through Protocol.

                                                > Logic > Return
                                            */
                                            for (iterator; iterator < protocolLength; iterator += 1)
                                                if (stream[iterator] != protocol[iterator])
                                                    return !0;

                                            // Return
                                            return !1
                                        })()
                                    ) stream = LDKF.sliceString(stream, 1);
                                    while (stream[stream.length - 1] == ')') stream = LDKF.sliceString(stream, 0, -1)
                                }

                                // Initialization > (Stream Length, Row-Column, Allow Parsing, Source Code)
                                let streamLength = stream.length,
                                    rowColumn = (function() {
                                        // Initialization > (Decremented Stream Length, Reverse Stream, Match, Row-Column)
                                        let decrementedStreamLength = streamLength - 1,
                                            reverseStream = '',
                                            match = '',
                                            rowColumn = '';

                                        /* Loop
                                                Iterate through Stream.

                                            > Update > Reverse Stream
                                        */
                                        for (iterator = decrementedStreamLength; iterator > -1; iterator -= 1)
                                            reverseStream += stream[iterator];

                                        // Initialization > Reverse Stream Length
                                        let reverseStreamLength = reverseStream.length;

                                        /* Loop
                                                Iterate through Reverse Stream.
                                        */
                                        for (iterator = 0; iterator < reverseStreamLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = reverseStream[iterator];

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (
                                                character == '0' || character == '1' || character == '2' || character == '3' || character == '4' || character == '5' || character == '6' || character == '7' || character == '8' || character == '9' ||
                                                character == ':'
                                            )
                                                // Update > Match
                                                match += character;

                                            else
                                                // Break
                                                break
                                        }

                                        // Initialization > Decremented Match Length
                                        let decrementedMatchLength = match.length - 1;

                                        /* Loop
                                                Iterate through Match.

                                            > Update > Row Column.
                                        */
                                        for (iterator = decrementedMatchLength; iterator > -1; iterator -= 1)
                                            (iterator == decrementedMatchLength) || (rowColumn += match[iterator]);

                                        // Initialization > (Array, Split, Row-Column Length)
                                        let array = ['', ''],
                                            split = !1,
                                            rowColumnLength = rowColumn.length;

                                        /* Loop
                                                Iterate through Row-Column.
                                        */
                                        for (iterator = 0; iterator < rowColumnLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = rowColumn[iterator];

                                            // Update > (Split, Array)
                                            (character == ':') && (split = !0);
                                            array[split ? 1 : 0] += character
                                        }

                                        // Update > Array
                                        array[0] = +array[0];
                                        array[1] = +LDKF.sliceString(array[1], 1);

                                        // Return
                                        return array
                                    })(), allowParsing = !0,
                                    sourceCode = '';

                                /* Loop
                                        Iterate through Stream.
                                */
                                for (iterator = 0; iterator < streamLength; iterator += 1) {
                                    // Initialization > Character
                                    let character = stream[iterator];

                                    // Update > (Allow Parsing, Source Code)
                                    (
                                        allowParsing && character == ':' &&
                                        (function() {
                                            // Initialization > (Row Column (Iterator, Length))
                                            let rowColumnIterator = 0,
                                                $rowColumn = ':' + rowColumn[0] + ':' + rowColumn[1],
                                                rowColumnLength = rowColumn.length;

                                            /* Loop
                                                    Iterate through Row Column.

                                                > Logic > Return
                                            */
                                            for (rowColumnIterator; rowColumnIterator < rowColumnLength; rowColumnIterator += 1)
                                                if (stream[iterator + rowColumnIterator] != $rowColumn[rowColumnIterator])
                                                    return !1;

                                            // Return
                                            return !0
                                        })()
                                    ) && (allowParsing = !1);
                                    allowParsing && (sourceCode += character)
                                }

                                // Update > (Source Code, Line)
                                sourceCode = sourceCode == '<anonymous>' || sourceCode == 'debugger eval code' ? null : LDKF.requestFile('GET', sourceCode, {}, !1);
                                line = LDKF.customObject('Line', new (function Object() {
                                    // Initialization > Target
                                    let that = this;

                                    // Modification > Target
                                        // Code
                                        LDKF.objectDefineProperty(that, 'code', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function code() {
                                                // Initialization > (Allow Parsing, Code (Length), Iterator, Newline (Index, Quantity), Stream)
                                                let allowParsing = !1,
                                                    code = LDKF.isNull(sourceCode) ? '' : (sourceCode.constructor == LDKO.xmlHttpRequest ? LDKF.get.xmlHttpRequestResponseText(sourceCode) : LDKF.get.xDomainRequestResponseText(sourceCode)),
                                                    codeLength = code.length,
                                                    iterator = 0,
                                                    newlineIndex = rowColumn[0] - 1,
                                                    newlineQuantity = 0,
                                                    stream = '';

                                                /* Loop
                                                        Iterate through Code.
                                                */
                                                for (iterator; iterator < codeLength; iterator += 1) {
                                                    // Initialization > Character
                                                    let character = code[iterator];

                                                    // Update > Newline Quantity
                                                    (character == '\n') && (newlineQuantity += 1);

                                                    // Logic > Return
                                                    if (newlineQuantity > newlineIndex)
                                                        return stream;

                                                    /* Logic
                                                            [if:else if statement]

                                                        > Update
                                                    */
                                                    if (allowParsing)
                                                        // Stream
                                                        stream += character;

                                                    else if (newlineQuantity == newlineIndex)
                                                        // Allow Parsing
                                                        allowParsing = !0
                                                }

                                                // Return
                                                return stream
                                            }
                                        });

                                        // Column
                                        that.column = rowColumn[1];

                                        // Row
                                        that.row = rowColumn[0];

                                        // Source
                                        that.src = stream;

                                        // Stack
                                        that.stack = (a=>{while(a[0]=='\n')a=LDKF.sliceString(a,1);while(a[a.length-1]=='\n')a=LDKF.sliceString(a,0,-1);return a})(LDKF.replaceString(errorStack,errorMessage,''));

                                    // Return
                                    return that
                                }), new (function() {
                                    // Initialization > Target
                                    let that = this;

                                    // Modification > Target > Value Of
                                    LDKF.objectDefineProperty(that, 'valueOf', {value: function valueOf() { return sourceCode }});

                                    // Return
                                    return that
                                }));

                                // Return
                                return line
                            };

                            // Request File
                            LDKF.requestFile = function requestFile() {
                                // Initialization > (Allow (Request, Warnings), Browser, Length, Host (Name), Properties, Protocol, Protocol Schemes, Match Protocol, Source, Request (Type))
                                let allowRequest = !0,
                                    allowWarnings = !arguments[3],
                                    browser = LDKO.browser.valueOf(),
                                    length = arguments.length,
                                    host = LDKO.locationHost,
                                    hostName = LDKO.locationHostname,
                                    properties = length > 2 ? LDKF.objectAssign({}, LDKF.object(arguments[2])) : {},
                                    protocol = LDKF.replaceString(LDKO.locationProtocol, /[^a-zA-Z]/g, ''),
                                    protocolSchemes = ['about', 'data', 'http', 'https'],
                                    matchProtocol = LDKF.indexOfArray(protocolSchemes, protocol) == -1 ? !1 : !0,
                                    source = length > 1 ? LDKF.string(arguments[1]) : '#',
                                    requestType = LDKF.string(arguments[0]),
                                    request = new LDKO.xmlHttpRequest;

                                /* Logic
                                        [if statement]
                                */
                                if (
                                    (
                                        matchProtocol ||
                                        (!matchProtocol && (browser == 'edge' || browser == 'ie'))
                                    ) &&
                                    !(
                                        browser == 'edge' &&
                                        (
                                            (host == 'localhost' || hostName == '127.0.0.1') ||
                                            (hostName == 'localhost' || hostName == '127.0.0.1')
                                        )
                                    )
                                ) {
                                    /* Logic
                                            [if statement]
                                    */
                                    if (length) {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (LDKF.isBoolean(request.withCredentials))
                                            // LapysJS Development Kit Functions > Open XML HTTP Request
                                            LDKF.openXmlHttpRequest(request, requestType, source, !0);

                                        else if (LDKF.isFunction(window.XDomainRequest) || LDKF.isObject(window.XDomainRequest))
                                            // LapysJS Development Kit Functions > Open X Domain Request
                                            LDKF.openXDomainRequest(request = new LDKO.xDomainRequest, requestType, source, !0);

                                        else {
                                            // Update > (Allow) Request
                                            allowRequest = !1;
                                            request = new LDKO.xmlHttpRequest;

                                            // Warn
                                            LDKF.warn('Cross-origin Resource Sharing (CORS) is not supported by this browser.')
                                        }

                                        /* Logic
                                                [if statement]
                                        */
                                        if (allowRequest) {
                                            // LapysJS Development Kit Functions
                                                // Iterate Object
                                                LDKF.iterateObject((key, value, description) => {
                                                    // Modification > Request > [Key]
                                                    'value' in description && (request[key] = value)
                                                }, properties);

                                                // Send (XML HTTP, X Domain) Request
                                                request.constructor == LDKO.xmlHttpRequest ? LDKF.sendXmlHttpRequest(request) : LDKF.sendXDomainRequest(request)
                                        }

                                        // Return
                                        return request
                                    }
                                }

                                else
                                    // Warn
                                    allowWarnings || LDKF.warn("'requestFile'", 'argument', "The current protocol must match the following ones: " + (a=>{a=LDKF.cloneObject(a);let $a=a.length,_a=$a-1,__a=_a-1,b=0,c='';for(b;b<$a;b+=1)c+="'"+a[b]+"'"+(b==_a?'':(b==__a?' and ':', '));return c})(protocolSchemes) + '; Or the server may understand the request and not support it');

                                // Return
                                return null
                            };

                            // To Function String
                            LDKF.toFunctionString = function toFunctionString() {
                                // Initialization > (Data, Parser, String)
                                let data = arguments[0],
                                    parser = LDKF.funcProtoToString || LDKO.$funcProto.toString,
                                    string = LDKF.string(data),
                                    $string = LDKF.replaceString(LDKF.replaceString(string, /'[^']{0,}'|"[^"]{0,}"|`[^`]{0,}`|\/\/[^\n]{0,}\n|(\/\*[^\*]{0,}\*\/|\/\*[^\/]{0,}\*\/)/g, ''), /'[^']{0,}'|"[^"]{0,}"|`[^`]{0,}`|\/\/[^\n]{0,}\n|(\/\*[^\*]{0,}\*\/|\/\*[^\/]{0,}\*\/)/g, '');

                                // Function > Parse
                                function parse() { return parser.call(data) }

                                /* Logic
                                        [if:else statement]

                                        --- NOTE ---
                                            #Lapys: Not the best test for if the function is native or not, but it will do.
                                */
                                if (
                                    LDKF.indexOfString(parse(), '[native code]') != -1 ||
                                    (
                                        LDKF.indexOfString($string, '[Command Line API]') != -1 ||
                                        LDKF.indexOfString($string, '[native code]') != -1
                                    )
                                )
                                    // Error Handling
                                    try {
                                        // Update > String
                                        string = LDKF.eval(string);
                                        string = typeof string == 'function' ? LDKF.string(string) : parse()
                                    }

                                    catch (error) {
                                        // Update > String
                                        string = LDKF.string(data);

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (error.constructor === LDKO.syntaxError) {
                                            // Initialization > ((Allow, Continued, Stopped) Parsing, Iterator, Stream, String Length)
                                            let allowParsing = !0,
                                                iterator = 0,
                                                continuedParsing = iterator,
                                                stoppedParsing = iterator,
                                                stream = '',
                                                stringLength = string.length;

                                            /* Loop
                                                    Iterate through String.
                                            */
                                            for (iterator; iterator < stringLength; iterator += 1) {
                                                // Initialization > (Next, Previous) Character
                                                let character = string[iterator],
                                                    nextCharacter = string[iterator + 1],
                                                    previousCharacter = string[iterator - 1];

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (allowParsing) {
                                                    // Logic > Update
                                                        // (Allow, Stopped) Parsing
                                                        if (
                                                            character == '/' &&
                                                            (nextCharacter == '*' || nextCharacter == '/')
                                                        ) {
                                                            allowParsing = !1;
                                                            stoppedParsing += 1
                                                        }

                                                        // (Allow, Stopped) Parsing, Parse-Lock Character
                                                        if (character == '"' || character == "'" || character == '`') {
                                                            allowParsing = !1;
                                                            parseLockCharacter = character;
                                                            stoppedParsing += 1
                                                        }

                                                    /* Update > Stream
                                                            --- NOTE ---
                                                                #Lapys: Prevent ignored & delimited code such as
                                                                    comments and strings to be added to Stream.
                                                    */
                                                    (
                                                        continuedParsing == stoppedParsing &&
                                                        (character != '/' && previousCharacter != '*')
                                                    ) && (stream += character)
                                                }

                                                else if (
                                                    character == '\n' ||
                                                    (character == '*' && nextCharacter == '/') ||
                                                    (
                                                        (character == '"' || character == "'" || character == '`') &&
                                                        character == parseLockCharacter
                                                    )
                                                ) {
                                                    // Update > Allow Parsing
                                                    allowParsing = !0;
                                                    continuedParsing += 1
                                                }
                                            }

                                            // Update > String
                                            string = stream;

                                            // Error Handling
                                            try {
                                                // Execution
                                                LDKF.eval(string);

                                                // Update > String
                                                string = LDKF.string(string)
                                            } catch (error) {
                                                // Update > String
                                                string = error.constructor === LDKO.syntaxError && error.message == 'Unexpected identifier' ? LDKF.string(string) : parse()
                                            }
                                        }

                                        else
                                            // Update > String
                                            string = parse()
                                    }

                                else
                                    // Error Handling > Update > String
                                    try {
                                        string = LDKF.eval(string);
                                        string = typeof string == 'function' ? LDKF.string(string) : parse()
                                    } catch (error) { string = parse() }

                                // Return
                                return string
                            };

                            // To Object String
                            LDKF.toObjectString = function toObjectString() {
                                // Initialization > Data
                                let data = arguments[0];

                                // Return
                                return (LDKF.objectProtoToString || LDKO.$objectProto.toString).call(data)
                            };

                            // Warn
                            LDKF.warn = function warn() {
                                // Error
                                LDKF.consoleWarn(LDK.info.errorMessagePrefix + LDKF.debugMessage.apply(LDKF, LDKF.toArray(arguments)))
                            };

                        /* Objects
                                --- NOTE ---
                                    #Lapys: Backup all necessary objects and methods.
                        */
                            // Array
                            LDKO.array = Array;
                                // Prototype
                                LDKO.arrayProto = LDKO.array.prototype;
                                LDKO.$arrayProto = LDKO.arrayProto;
                                LDKF.setTimeout(function() { LDKO.$arrayProto = LDKF.cloneObject(LDKO.$arrayProto) });

                            // Attribute
                            LDKO.attr = Attr;
                                // Prototype
                                LDKO.attrProto = LDKO.attr.prototype;
                                LDKO.$attrProto = LDKO.attrProto;
                                LDKF.setTimeout(function() { LDKO.$attrProto = LDKF.cloneObject(LDKO.$attrProto) });

                            // Boolean
                            LDKO.boolean = Boolean;
                                // Prototype
                                LDKO.booleanProto = LDKO.boolean.prototype;

                            // Character Data
                            LDKO.characterData = CharacterData;
                                // Prototype
                                LDKO.characterDataProto = LDKO.characterData.prototype;

                            // Document
                            LDKO.document = Document;
                            Object.defineProperty(LDKO, '$document', {get: function document() { return tmpObject.documentDescription.get.call(window) }});
                                // Prototype
                                LDKO.documentProto = LDKO.document.prototype;
                                LDKO.$documentProto = LDKO.documentProto;
                                LDKF.setTimeout(function() { LDKO.$documentProto = LDKF.cloneObject(LDKO.$documentProto) });

                            // Document Type
                            LDKO.documentType = DocumentType;
                                // Prototype
                                LDKO.documentTypeProto = LDKO.documentType.prototype;

                            // DOM Exception
                            LDKO.domException = DOMException;

                            // Element
                            LDKO.element = Element;
                                // Prototype
                                LDKO.elementProto = LDKO.element.prototype;
                                LDKO.$elementProto = LDKO.elementProto;
                                LDKF.setTimeout(function() { LDKO.$elementProto = LDKF.cloneObject(LDKO.$elementProto) });

                            // Error
                            LDKO.error = Error;
                                // Prototype
                                LDKO.errorProto = LDKO.error.prototype;

                            // File
                            LDKO.file = File;

                            // Function
                            LDKO.func = Function;
                                // Prototype
                                LDKO.funcProto = LDKO.func.prototype;
                                LDKO.$funcProto = LDKO.funcProto;
                                LDKF.setTimeout(function() { LDKO.$funcProto = LDKF.cloneObject(LDKO.$funcProto) });

                            // HTML All Collection
                            LDKO.htmlAllCollection = HTMLAllCollection;
                                // Prototype
                                LDKO.htmlAllCollectionProto = LDKO.htmlAllCollection.prototype;

                            // HTML Collection
                            LDKO.htmlCollection = HTMLCollection;
                                // Prototype
                                LDKO.htmlCollectionProto = LDKO.htmlCollection.prototype;

                            // HTML Document
                            LDKO.htmlDocument = HTMLDocument;
                                // Prototype
                                LDKO.htmlDocumentProto = LDKO.htmlDocument.prototype;

                            // HTML Element
                            LDKO.htmlElement = HTMLElement;
                                // Prototype
                                LDKO.htmlElementProto = LDKO.htmlElement.prototype;
                                LDKO.$htmlEleProto = LDKO.htmlElementProto;
                                LDKF.setTimeout(function() { LDKO.$htmlEleProto = LDKF.cloneObject(LDKO.$htmlEleProto) });

                            // HTML Head Element
                            LDKO.htmlHeadElement = HTMLHeadElement;
                                // Prototype
                                LDKO.htmlHeadElementProto = LDKO.htmlHeadElement.prototype;

                            // HTML Meta Element
                            LDKO.htmlMetaElement = HTMLMetaElement;
                                // Prototype
                                LDKO.htmlMetaElementProto = LDKO.htmlMetaElement.prototype;

                            // HTML Script Element
                            LDKO.htmlScriptElement = HTMLScriptElement;
                                // Prototype
                                LDKO.htmlScriptElementProto = LDKO.htmlScriptElement.prototype;

                            // Location
                            Object.defineProperty(LDKO, '$location', {get: function location() { let data = tmpObject.locationDescription; return 'value' in data ? data.value : data.get.call(window) }});
                                // Host
                                LDKO.locationHost = LDKO.$location.host;

                                // Host Name
                                LDKO.locationHostname = LDKO.$location.hostname;

                                // Protocol
                                LDKO.locationProtocol = LDKO.$location.protocol;

                            // Named Node Map
                            LDKO.namedNodeMap = NamedNodeMap;
                                // Prototype
                                LDKO.namedNodeMapProto = LDKO.namedNodeMap.prototype;
                                LDKO.$namedNodeMapProto = LDKO.namedNodeMapProto;
                                LDKF.setTimeout(function() { LDKO.$namedNodeMapProto = LDKF.cloneObject(LDKO.$namedNodeMapProto) });

                            // Navigator
                            LDKO.navigator = Navigator;
                            Object.defineProperty(LDKO, '$navigator', {get: function navigator() { return tmpObject.navigatorDescription.get.call(window) }});
                                // Prototype
                                LDKO.navigatorProto = LDKO.navigator.prototype;
                                LDKO.$navigatorProto = LDKO.navigatorProto;
                                LDKF.setTimeout(function() { LDKO.$navigatorProto = LDKF.cloneObject(LDKO.$navigatorProto) });

                            // Node
                            LDKO.node = Node;
                                // Prototype
                                LDKO.nodeProto = LDKO.node.prototype;
                                LDKO.$nodeProto = LDKO.nodeProto;
                                LDKF.setTimeout(function() { LDKO.$nodeProto = LDKF.cloneObject(LDKO.$nodeProto) });

                            // Node List
                            LDKO.nodeList = NodeList;
                                // Prototype
                                LDKO.nodeListProto = LDKO.nodeList.prototype;

                            // Number
                            LDKO.number = Number;

                            // Object
                            LDKO.object = Object;
                                // Prototype
                                LDKO.objectProto = LDKO.object.prototype;
                                LDKO.$objectProto = LDKO.objectProto;
                                LDKF.setTimeout(function() { LDKO.$objectProto = LDKF.cloneObject(LDKO.$objectProto) });

                            // Performance
                            LDKO.performance = Performance;
                            Object.defineProperty(LDKO, '$performance', {get: function performance() { return tmpObject.performanceDescription.get.call(window) }});
                                // Prototype
                                LDKO.performanceProto = LDKO.performance.prototype;
                                LDKO.$performanceProto = LDKO.performanceProto;
                                LDKF.setTimeout(function() { LDKO.$performanceProto = LDKF.cloneObject(LDKO.$performanceProto) });

                            // Date
                            LDKO.date = Date;
                                // Polyfill > Date
                                    /* Now
                                            --- NOTE ---
                                                #Lapys: Sourced from `https://gist.github.com/paulirish/5438650`.
                                    */
                                    'function'!=typeof Date.now&&(Date.now=Date.now||function(){return new Date().getTime()});

                                // Function > Date
                                    // Now
                                    LDKF.dateNow = Date.now;

                                // Modification > Date
                                    // Now
                                    LDKO.dateNow = Date.now();
                                    (performance.timing && performance.timing.navigationStart)&&(LDKO.dateNow=performance.timing.navigationStart);

                            // Performance
                                // Polyfill > Now
                                'function'!=typeof Performance.prototype.now&&(Object.defineProperty(Performance.prototype,'now',{configurable:!0,enumerable:!0,value:function now(){if(this!=performance)throw TypeError('Illegal invocation');return LDKF.dateNow()-LDKO.dateNow},writable:!0}));

                            // Regular Expression
                            LDKO.regex = RegExp;
                                // Prototype
                                LDKO.regexProto = LDKO.regex.prototype;
                                LDKO.$regexProto = LDKO.regexProto;
                                LDKF.setTimeout(function() { LDKO.$regexProto = LDKF.cloneObject(LDKO.$regexProto) });

                            // String
                            LDKO.string = String;
                                // Prototype
                                LDKO.stringProto = LDKO.string.prototype;
                                LDKO.$stringProto = LDKO.stringProto;
                                LDKF.setTimeout(function() { LDKO.$stringProto = LDKF.cloneObject(LDKO.$stringProto) });

                            // Symbol
                            LDKO.symbol = window.Symbol;
                                // Prototype
                                LDKO.symbolProto = LDKO.symbol.prototype;

                            // Syntax Error
                            LDKO.syntaxError = SyntaxError;

                            // {Cross-Domain Request} X Domain Request
                            LDKO.xDomainRequest = window.XDomainRequest || function XDomainRequest() {};
                                // Prototype
                                LDKO.xDomainRequestProto = LDKO.xDomainRequest.prototype;
                                LDKO.$xDomainRequestProto = LDKO.xDomainRequestProto;
                                LDKF.setTimeout(function() { LDKO.$xDomainRequestProto = LDKF.cloneObject(LDKO.$xDomainRequestProto) });

                            // XML Document
                            LDKO.xmlDocument = XMLDocument;

                            // XML HTTP Request
                            LDKO.xmlHttpRequest = XMLHttpRequest;
                                // Prototype
                                LDKO.xmlHttpRequestProto = LDKO.xmlHttpRequest.prototype;
                                LDKO.$xmlHttpRequestProto = LDKO.xmlHttpRequestProto;
                                LDKF.setTimeout(function() { LDKO.$xmlHttpRequestProto = LDKF.cloneObject(LDKO.$xmlHttpRequestProto) });

                            /* Browser */
                            LDKO.browser = new (function Object() {
                                // Initialization > (Define, Target)
                                let define = window.Object.defineProperty,
                                    that = this;

                                // Modification > Target
                                    // {Google} Chrome
                                    define(that, 'chrome', {
                                        configurable: !0, enumerable: !0,
                                        get: function chrome() {return!!(LDKF.isObject(window.chrome)&&LDKF.isObject((window.chrome||tmp.object).webstore))}
                                    });

                                    // {Microsoft} Edge
                                    define(that, 'edge', {
                                        configurable: !0, enumerable: !0,
                                        get: function edge() {return LDKF.isObject(window.msCredentials)}
                                    });

                                    // {Mozilla} Firefox
                                    define(that, 'firefox', {
                                        configurable: !0, enumerable: !0,
                                        get: function firefox() {return LDKF.isObject(window.InstallTrigger)}
                                    });

                                    // {Microsoft} Internet Explorer
                                    define(that, 'ie', {
                                        configurable: !0, enumerable: !0,
                                        get: function internetExplorer() {let a=(LDKF.objectGetOwnPropertyDescriptor||Object.getOwnPropertyDescriptor)(LDKO.$documentProto,'documentMode')||(LDKF.objectGetOwnPropertyDescriptor||Object.getOwnPropertyDescriptor)(LDKO.$documentProto,'documentMode');return LDKF.isNumber(LDKF.isUndefined(a)?LDKO.$document.documentMode:a.get.call(LDK.$doc))}
                                    });

                                    // Opera
                                    define(that, 'opera', {
                                        configurable: !0, enumerable: !0,
                                        get: function opera() {return!!((!!window.opr&&!!window.opr.addons)||!!window.opera||LDKF.indexOfString(LDKO.$navigator.userAgent,'OPR/')>-1)}
                                    });

                                    // Safari
                                    define(that, 'safari', {
                                        configurable: !0, enumerable: !0,
                                        get: function safari() {return!!(LDKF.testRegex(/constructor/i,LDKO.htmlElement)||LDKF.toObjectString(!window.safari||window.safari.pushNotification)=='[object SafariRemoteNotification]')}
                                    });

                                    // Constructor > Prototype
                                    that.__proto__ = new (function() {
                                        // Modification > Target > Value Of
                                        define(this, 'valueOf', {
                                            // Value
                                            value: function valueOf() {
                                                // Initialization > Current Browser
                                                let currentBrowser = null;

                                                // LapysJS Development Kit Functions > Iterate Object
                                                LDKF.iterateObject((key, value) => {
                                                    // Update > Current Browser
                                                    (!currentBrowser && value) && (currentBrowser = key)
                                                }, that);

                                                // Return
                                                return currentBrowser
                                            }
                                        });

                                        // Return
                                        return this
                                    });

                                // Return
                                return that
                            });

                        // Functions
                            // Absolute
                            LDKF.abs = Math.abs;

                            // Append Child Node
                            LDKF.appendChildNode = (function() {
                                // Initialization > Method
                                let method = LDKO.$nodeProto.appendChild;

                                // Return
                                return function appendChildNode() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Append Child Document
                            LDKF.appendChildDocument = (function() {
                                // Initialization > Method
                                let method = LDKO.$documentProto.appendChild;

                                // Return
                                return function appendChildDocument() { return method.call(LDKO.$document, arguments[0]) }
                            })();

                            /* Array From
                                    --- NOTE ---
                                        #Lapys: Sourced from `https://gist.github.com/brettz9/4212262`.
                            */
                            'function'!=typeof Array.from&&(Array.from=function(a){return LDKF.sliceArray(a)});
                            LDKF.arrayFrom = LDKO.array.from;

                            // Bind Function
                            LDKF.bindFunction = (function() {
                                // Initialization > (Method, Slice Array)
                                let method = LDKO.$funcProto.bind,
                                    sliceArray = (function() {
                                        // Initialization > Method
                                        let method = LDKO.$arrayProto.slice;

                                        // Return
                                        return function sliceArray() { return method.apply(arguments[0], method.call(LDKF.arrayFrom(arguments), 1)) }
                                    })();

                                // Return
                                return function bindFunction() { return method.apply(arguments[0], sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Clone Node
                            LDKF.cloneNode = (function() {
                                // Initialization > Method
                                let method = LDKO.$nodeProto.cloneNode;

                                // Return
                                return function cloneNode() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Console Warn
                            LDKF.consoleWarn = console.warn;

                            // Create Element Document
                            LDKF.createElementDocument = (function() {
                                // Initialization > Method
                                let method = LDKO.$documentProto.createElement;

                                // Return
                                return function createElementDocument() { return method.call(LDKO.$document, arguments[0]) }
                            })();

                            // Function Prototype To String
                            LDKF.funcProtoToString = LDKO.$funcProto.toString;

                            // Get Attribute Element
                            LDKF.getAttributeElement = (function() {
                                // Initialization > Method
                                let method = Object.getOwnPropertyDescriptor(LDKO.$elementProto, 'getAttribute').value;

                                // Return
                                return function getAttributeElement() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Has Attribute Element
                            LDKF.hasAttributeElement = (function() {
                                // Initialization > Method
                                let method = Object.getOwnPropertyDescriptor(LDKO.$elementProto, 'hasAttribute').value;

                                // Return
                                return function hasAttributeElement() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Index Of Array
                            LDKF.indexOfArray = (function() {
                                // Initialization > Method
                                let method = LDKO.$arrayProto.indexOf;

                                // Return
                                return function indexOf() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Index Of String
                            LDKF.indexOfString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.indexOf;

                                // Return
                                return function indexOfString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Last Index Of Array
                            LDKF.lastIndexOfArray = (function() {
                                // Initialization > Method
                                let method = LDKO.$arrayProto.lastIndexOf;

                                // Return
                                return function lastIndexOf() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Last Index Of String
                            LDKF.lastIndexOfString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.lastIndexOf;

                                // Return
                                return function lastIndexOfString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Match String
                            LDKF.matchString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.match;

                                // Return
                                return function matchString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Math Random
                            LDKF.mathRandom = Math.random;

                            // Number
                            LDKF.number = LDKF.cloneObject(Number);

                            // Number Is Finite
                            LDKF.numberIsFinite = LDKO.number.isFinite;

                            // Number Is Not a Number
                            LDKF.numberIsNaN = LDKO.number.isNaN;

                            // Number Is Safe Integer
                            LDKF.numberIsSafeInteger = LDKO.number.isSafeInteger;

                            // Number Parse Int
                            LDKF.numberParseInt = LDKO.number.parseInt;

                            // Object
                            LDKF.object = LDKF.cloneObject(Object);

                            // Object Assign
                            LDKF.objectAssign = LDKO.object.assign;

                            // Object Create
                            LDKF.objectCreate = LDKO.object.create;

                            // Define Property
                            LDKF.objectDefineProperty = LDKO.object.defineProperty;

                            // Object Get Own Property Descriptor
                            LDKF.objectGetOwnPropertyDescriptor = LDKO.object.getOwnPropertyDescriptor;

                            // Object Get Own Property Descriptors
                            LDKF.objectGetOwnPropertyDescriptors = LDKO.object.getOwnPropertyDescriptors;

                            // Object Is
                            LDKF.objectIs = LDKO.object.is;

                            // Object Keys
                            LDKF.objectKeys = LDKO.object.keys;

                            // Object Prototype To String
                            LDKF.objectProtoToString = LDKO.$objectProto.toString;

                            // Object Values
                            LDKF.objectValues = LDKO.object.values;

                           // Open X Domain Request
                            LDKF.openXDomainRequest = (function() {
                                // Initialization > Method
                                let method = LDKO.$xDomainRequestProto.open;

                                // Return
                                return function openXDomainRequest() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Open XML HTTP Request
                            LDKF.openXmlHttpRequest = (function() {
                                // Initialization > Method
                                let method = LDKO.$xmlHttpRequestProto.open;

                                // Return
                                return function openXmlHttpRequest() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Performance Prototype Now
                            LDKF.performanceProtoNow = LDKO.$performanceProto.now;

                            // Pop Array
                            LDKF.popArray = (function() {
                                // Initialization > Method
                                let method = LDKO.$arrayProto.pop;

                                // Return
                                return function popArray() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Push Array
                            LDKF.pushArray = (function() {
                                // Initialization > (Method, Slice Array)
                                let method = LDKO.$arrayProto.push,
                                    sliceArray = (function() {
                                        // Initialization > Method
                                        let method = LDKO.$arrayProto.slice;

                                        // Return
                                        return function sliceArray() { return method.apply(arguments[0], method.call(LDKF.arrayFrom(arguments), 1)) }
                                    })();

                                // Return
                                return function pushArray() { return method.apply(arguments[0], sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Push Array
                            LDKF.$pushArray = (function() {
                                // Initialization > Method
                                let method = LDKO.$arrayProto.push;

                                // Return
                                return function $pushArray() { return method.apply(arguments[0], arguments[1]) }
                            })();

                            // Query Selector Document
                            LDKF.querySelectorDocument = (function() {
                                // Initialization > Method
                                let method = LDKO.$documentProto.querySelector;

                                // Return
                                return function querySelectorDocument() { return method.call(LDKO.$document, arguments[0]) }
                            })();

                            // Regular Expression
                            LDKF.regex = LDKF.cloneObject(RegExp);

                            // Remove Child Node
                            LDKF.removeChildNode = (function() {
                                // Initialization > Method
                                let method = LDKO.$nodeProto.removeChild;

                                // Return
                                return function removeChildNode() { return method.call(arguments[0], arguments[1]) }
                            })();

                            // Remove Child Node
                            LDKF.remove$ChildNode = (function() {
                                // Initialization > Method
                                let method = {
                                    // Character Data
                                    characterData: LDKO.characterDataProto.remove,

                                    // Document Type
                                    documentType: LDKO.documentTypeProto.remove,

                                    // Element
                                    element: LDKO.$elementProto.remove
                                };

                                // Return
                                return function removeChildNode() {
                                    // Initialization > Data
                                    let data = arguments[0];

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (LDKF.isCharacterData(data))
                                        method.characterData.call(data);

                                    else if (LDKF.isDocumentType(data))
                                        method.documentType.call(data);

                                    else if (LDKF.isElement(data))
                                        method.element.call(data)
                                }
                            })();

                            // Replace String
                            LDKF.replaceString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.replace;

                                // Return
                                return function replaceString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Send X Domain Request
                            LDKF.sendXDomainRequest = (function() {
                                // Initialization > Method
                                let method = LDKO.$xDomainRequestProto.send;

                                // Return
                                return function sendXDomainRequest() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Send XML HTTP Request
                            LDKF.sendXmlHttpRequest = (function() {
                                // Initialization > Method
                                let method = LDKO.$xmlHttpRequestProto.send;

                                // Return
                                return function sendXmlHttpRequest() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Set Attribute Element
                            LDKF.setAttributeElement = (function() {
                                // Initialization > Method
                                let method = Object.getOwnPropertyDescriptor(LDKO.$elementProto, 'setAttribute').value;

                                // Return
                                return function setAttributeElement() { return method.call(arguments[0], arguments[1], arguments[2]) }
                            })();

                            // Slice Array
                            LDKF.sliceArray = (function() {
                                // Initialization > Method
                                let method = LDKO.$arrayProto.slice;

                                // Return
                                return function sliceArray() { return method.apply(arguments[0], method.call(LDKF.arrayFrom(arguments), 1)) }
                            })();

                            // Slice String
                            LDKF.sliceString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.slice;

                                // Return
                                return function sliceString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // String
                            LDKF.string = LDKF.cloneObject(String);

                            // Symbol
                            LDKF.symbol = LDKF.cloneObject(Symbol);

                            // Test Regular Expression
                            LDKF.testRegex = (function() {
                                // Initialization > Method
                                let method = LDKO.$regexProto.test;

                                // Return
                                return function testRegex() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // To Lower Case String
                            LDKF.toLowerCaseString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.toLowerCase;

                                // Return
                                return function toLowerCaseString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // To Upper Case String
                            LDKF.toUpperCaseString = (function() {
                                // Initialization > Method
                                let method = LDKO.$stringProto.toUpperCase;

                                // Return
                                return function toUpperCaseString() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            // Unshift Array
                            LDKF.unshiftArray = (function() {
                                // Initialization > Method
                                let method = LDKO.$arrayProto.unshift;

                                // Return
                                return function unshiftArray() { return method.apply(arguments[0], LDKF.sliceArray(LDKF.toArray(arguments), 1)) }
                            })();

                            /* Get */
                            LDKF.get = {
                                // Attribute
                                    // Value
                                    attributeValue: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$attrProto, 'value').get;

                                        // Return
                                        return function attributeValue() { return method.call(arguments[0]) }
                                    })(),

                                // Document
                                    // Children
                                    documentChildren: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$documentProto, 'children').get;

                                        // Return
                                        return function documentChildren() { return method.call(arguments[0]) }
                                    })(),

                                    // Current Script
                                    documentCurrentScript: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$documentProto, 'currentScript').get;

                                        // Return
                                        return function documentCurrentScript() { return method.call(arguments[0]) }
                                    })(),

                                    // Head
                                    documentHead: (function() {
                                        // Initialization > Data
                                        let data = LDKO.$document.head;

                                        // Update > Data
                                        LDKF.isHtmlHeadElement(data) || (data = null);

                                        // Initialization > Method
                                        let method = (LDKF.objectGetOwnPropertyDescriptor(LDKO.$documentProto, 'head') || {get: function() { return data }}).get;

                                        // Return
                                        return function documentHead() { return method.call(LDKO.$document) }
                                    })(),

                                    // Title
                                    documentTitle: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$documentProto, 'title').get;

                                        // Return
                                        return function documentTitle() { return method.call(arguments[0]) }
                                    })(),

                                // Element
                                    // Attributes
                                    elementAttributes: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$elementProto, 'attributes').get;

                                        // Return
                                        return function elementAttributes() { return method.call(arguments[0]) }
                                    })(),

                                    // ID
                                    elementId: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$elementProto, 'id').get;

                                        // Return
                                        return function elementId() { return method.call(arguments[0]) }
                                    })(),

                                    // Tag Name
                                    elementTagName: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$elementProto, 'tagName').get;

                                        // Return
                                        return function elementId() { return method.call(arguments[0]) }
                                    })(),

                                // Function
                                    // Body
                                    functionBody: function functionBody() { return (tmpObject.functionPrototypeBodyDescription || LDKF.objectGetOwnPropertyDescriptor(LDKO.$funcProto, 'body')).get.call(arguments[0]) },

                                    // Head
                                    functionHead: function functionHead() { return (tmpObject.functionPrototypeHeadDescription || LDKF.objectGetOwnPropertyDescriptor(LDKO.$funcProto, 'params')).get.call(arguments[0]) },

                                    // Parameters
                                    functionParameters: function functionParameters() { return (tmpObject.functionPrototypeParametersDescription || LDKF.objectGetOwnPropertyDescriptor(LDKO.$funcProto, 'params')).get.call(arguments[0]) },

                                // HTML Collection
                                    // Length
                                    htmlCollectionLength: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlCollectionProto, 'length').get;

                                        // Return
                                        return function htmlCollectionLength() { return method.call(arguments[0]) }
                                    })(),

                                // HTML Meta Element
                                    // Content
                                    htmlMetaElementContent: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlMetaElementProto, 'content').get;

                                        // Return
                                        return function htmlMetaElementContent() { return method.call(arguments[0]) }
                                    })(),

                                // HTML Script Element
                                    // Source
                                    htmlScriptElementSrc: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlScriptElementProto, 'src').get;

                                        // Return
                                        return function htmlScriptElementSrc() { return method.call(arguments[0]) }
                                    })(),

                                // Named Node Map
                                    // Length
                                    namedNodeMapLength: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$namedNodeMapProto, 'length').get;

                                        // Return
                                        return function namedNodeMapLength() { return method.call(arguments[0]) }
                                    })(),

                                // Node
                                    // Parent Node
                                    nodeParentNode: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$nodeProto, 'parentNode').get;

                                        // Return
                                        return function nodeParentNode() { return method.call(arguments[0]) }
                                    })(),

                                // Regular Expression
                                    // Flags
                                    regexFlags: (function() {
                                        // Initialization > Method
                                        let method = (LDKF.objectGetOwnPropertyDescriptor(LDKO.$regexProto, 'flags') || LDKF.objectGetOwnPropertyDescriptor(LDKO.$regexProto, 'options')).get;

                                        // Return
                                        return function regexFlags() { return method.call(arguments[0]) }
                                    })(),

                                    // Source
                                    regexSource: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$regexProto, 'source').get;

                                        // Return
                                        return function regexSource() { return method.call(arguments[0]) }
                                    })(),

                                // X Domain Request
                                    // Response Text
                                    xDomainRequestResponseText: (function() {
                                        // Initialization > Method
                                        let method = (LDKF.objectGetOwnPropertyDescriptor(LDKO.xDomainRequestProto, 'responseText') || {get: function responseText() { return '' }}).get;

                                        // Return
                                        return function xDomainRequestResponseText() { return method.call(arguments[0]) }
                                    })(),

                                // XML HTTP Request
                                    // Response Text
                                    xmlHttpRequestResponseText: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.xmlHttpRequestProto, 'responseText').get;

                                        // Return
                                        return function xmlHttpRequestResponseText() { return method.call(arguments[0]) }
                                    })(),

                                // Window
                                    // Name
                                    windowName: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(window, 'name').get;

                                        // Return
                                        return function windowName() { return method.call(window) }
                                    })()
                            };

                            /* Set */
                            LDKF.set = {
                                // Document
                                    // Title
                                    documentTitle: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$documentProto, 'title').set;

                                        // Return
                                        return function documentTitle() { return method.call(arguments[0], arguments[1]) }
                                    })(),

                                // Element
                                    // ID
                                    elementId: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$elementProto, 'id').set;

                                        // Return
                                        return function elementId() { return method.call(arguments[0], arguments[1]) }
                                    })(),

                                    // Inner HTML
                                    elementInnerHTML: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.$elementProto, 'innerHTML').set;

                                        // Return
                                        return function elementInnerHTML() { return method.call(arguments[0], arguments[1]) }
                                    })(),

                                // HTML Element
                                    // Selector
                                    htmlElementSelector: function htmlElementSelector() { return (tmpObject.htmlElePrototypeSelectorDescription || LDKF.objectGetOwnPropertyDescriptor(LDKO.$htmlEleProto, 'selector')).set.call(arguments[0], arguments[1]) },

                                // HTML Meta Element
                                    // Content
                                    htmlMetaElementContent: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlMetaElementProto, 'content').set;

                                        // Return
                                        return function htmlMetaElementContent() { return method.call(arguments[0], arguments[1]) }
                                    })(),

                                    // Name
                                    htmlMetaElementName: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(LDKO.htmlMetaElementProto, 'name').set;

                                        // Return
                                        return function htmlMetaElementName() { return method.call(arguments[0], arguments[1]) }
                                    })(),

                                // Window
                                    // Name
                                    windowName: (function() {
                                        // Initialization > Method
                                        let method = LDKF.objectGetOwnPropertyDescriptor(window, 'name').set;

                                        // Return
                                        return function windowName() { return method.call(window, arguments[0]) }
                                    })()
                            };

            /* Phase */
                // Initialization
                function init() {
                    /* Global Data */
                        // LapysJS
                        LDKF.objectDefineProperty(window, 'LapysJS', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: (function() {
                                // Function > LapysJS
                                function LapysJS() {
                                    // Initialization > LapysJS
                                    let _LapysJS = LapysJS;
                                        LapysJS = new (class LapysJS { constructor() { return this } }),
                                        $LapysJS = LapysJS.__proto__ = LDKF.objectCreate(LapysJS.__proto__);

                                    // Modification > LapysJS > (LapysJS > Value Of)
                                    LDKF.objectDefineProperty($LapysJS, 'LapysJS', {value: LapysJS});
                                    LDKF.objectDefineProperty($LapysJS, 'valueOf', {value: function valueOf() { return LapysJSDevelopmentKit }});

                                    // Return
                                    return LapysJS
                                }

                                // Return
                                return new LapysJS
                            })(),

                            // Writable
                            writable: !1
                        });
                            // Modification
                                // LapysJS Development Kit > LapysJS
                                const LapysJSProto = (LDKG.LapysJS = LapysJS).__proto__;

                                // LapysJS (Prototype)
                                    // Script
                                    LDKF.objectDefineProperty(LapysJSProto, 'script', {value: LDKF.get.documentCurrentScript(LDKO.$document)});

                                    // Temporary Data
                                    LDKF.objectDefineProperty(LapysJSProto, 'tmp', {
                                        // Value
                                        value: new (function() {
                                            // Initialization > Target
                                            let that = this;

                                            // Modification > Target
                                                // Processing Duration
                                                that.processingDuration = LDKF.performanceNow();

                                                /* Prototypes
                                                        --- NOTE ---
                                                            #Lapys: Public external storage for cloning prototypes.
                                                */
                                                that.prototypes = [];

                                            // Return
                                            return that
                                        })
                                    });

                        // File
                        LDKF.objectDefineProperty(window, 'file', {
                            // Configurable
                            configurable: !0,

                            // Get
                            get: function() { return LDKO.file }
                        });
                            // Create
                            LDKF.objectDefineProperty(file, 'create', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Value
                                value: function create() {}
                            });

                            // Open
                            LDKF.objectDefineProperty(file, 'open', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Value
                                value: function open() {}
                            });

                            // Read
                            LDKF.objectDefineProperty(file, 'read', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Value
                                value: function read() {
                                    // Initialization > Arguments
                                    let args = LDKF.toArray(arguments);

                                    // Update > Arguments
                                    LDKF.unshiftArray(args, 'GET');

                                    // Return
                                    return LDKF.requestFile.call(LDKF, args)
                                }
                            });

                            // Write
                            LDKF.objectDefineProperty(file, 'write', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Value
                                value: function write() {}
                            });

                        // Temporary Object
                            // Script Source
                            tmpObject.scriptSource = LDKF.get.htmlScriptElementSrc(LapysJS.script);

                        // Window
                            // Absolute
                            LDKF.objectDefineProperty(window, 'abs', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: LDKF.abs,

                                // Writable
                                writable: !0
                            });

                            // Application
                            LDKF.objectDefineProperty(window, 'app', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: (function() {
                                    // Initialization > (Window) Application
                                    let winApp = window.Application,
                                        app = LDKF.customObject('Application'),
                                        $app = app.constructor.prototype;

                                    // Initialization > Application Storage
                                    let appStorage = {
                                        // Connection
                                        connection: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'connection'),

                                        // Cookie
                                        cookie: LDKF.objectGetOwnPropertyDescriptor(LDKO.$documentProto, 'cookie') || ({get: function cookie() { return LDKF.string(LDKO.$document.cookie) }, set: function cookie() { return arguments[0] }}),

                                        // Device Pixel Ratio
                                        devicePixelRatio: LDKF.objectGetOwnPropertyDescriptor(window, 'devicePixelRatio'),

                                        // Do Not Track
                                        doNotTrack: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'doNotTrack'),

                                        // Language
                                        language: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'language'),

                                        // Languages
                                        languages: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'languages'),

                                        // Online
                                        online: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'onLine'),

                                        // Platform
                                        platform: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'platform'),

                                        // Plugins
                                        plugins: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'plugins'),

                                        // User Agent
                                        userAgent: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'userAgent'),

                                        // Vendor
                                        vendor: LDKF.objectGetOwnPropertyDescriptor(LDKO.$navigatorProto, 'vendor'),

                                        /* Viewport */
                                        viewport: new (function ApplicationViewport() {
                                            // Initialization > Target
                                            let that = this;

                                            // Modification > Target
                                                // Height
                                                LDKF.objectDefineProperty(that, 'height', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getHeight() {},

                                                    // Set
                                                    set: function setHeight() {}
                                                });

                                                // Initial Scale
                                                LDKF.objectDefineProperty(that, 'initialScale', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getInitialScale() {},

                                                    // Set
                                                    set: function setInitialScale() {}
                                                });

                                                // Maximum Scale
                                                LDKF.objectDefineProperty(that, 'maximumScale', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getMaximumScale() {},

                                                    // Set
                                                    set: function setMaximumScale() {}
                                                });

                                                // Minimal User Interface
                                                LDKF.objectDefineProperty(that, 'minimalUI', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getMinimalUI() {},

                                                    // Set
                                                    set: function setMinimalUI() {}
                                                });

                                                // Minimum Scale
                                                LDKF.objectDefineProperty(that, 'minimumScale', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getMinimumScale() {},

                                                    // Set
                                                    set: function setMinimumScale() {}
                                                });

                                                // Target Density Pixels
                                                LDKF.objectDefineProperty(that, 'targetDensityDPI', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getTargetDensityDPI() {
                                                        // Initialization > (Element, Data)
                                                        let element = LDKF.querySelectorDocument('meta[name=viewport'),
                                                            data = element ? LDKF.getAttributeElement(element, 'targetdensity-dpi') : null;

                                                        // Return
                                                        return !LDKF.isNaN(+data) ? +data : data
                                                    },

                                                    // Set
                                                    set: function setTargetDensityDPI() {
                                                        // Return
                                                        return setContent('meta[name=viewport', getContent('meta[name=viewport'), {name: 'viewport', targetdensityDpi: LDKF.string(arguments[0])})
                                                    }
                                                });

                                                // User Scalable
                                                LDKF.objectDefineProperty(that, 'userScalable', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getUserScalable() {},

                                                    // Set
                                                    set: function setUserScalable() {}
                                                });

                                                // Width
                                                LDKF.objectDefineProperty(that, 'width', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getWidth() {},

                                                    // Set
                                                    set: function setWidth() {}
                                                });

                                            // Return
                                            return that
                                        })
                                    };

                                    // Function
                                        // Get Content
                                        function getContent() {
                                            // Initialization > (Query, Element, Specifier Attribute)
                                            let query = arguments[0],
                                                element = LDKF.querySelectorDocument(query),
                                                specifierAttribute = arguments[1];

                                            // Return
                                            return element ? (arguments.length > 1 ? LDKF.getAttributeElement(element, specifierAttribute) : LDKF.get.htmlMetaElementContent(element)) : null
                                        }

                                        // Set Content
                                        function setContent() {
                                            // Initialization > (Data, Properties, Query, Element (Tag Name))
                                            let data = arguments[1],
                                                properties = LDKF.object(arguments[2]),
                                                query = LDKF.string(arguments[0]),
                                                element = LDKF.querySelectorDocument(query),
                                                elementTagName = this == window ? 'meta' : this;

                                            // Function > Iterate Properties
                                            function iterateProperties() {
                                                // LapysJS Development Kit Functions > Iterate Object
                                                LDKF.iterateObject((key, value) => {
                                                    /* Logic
                                                            [switch:case:default statement]

                                                        > Modification > Element > (...)
                                                    */
                                                    switch (key) {
                                                        // Name
                                                        case 'name':
                                                            LDKF.set.htmlMetaElementName(element, value);
                                                            break;

                                                        // [Default]
                                                        default:
                                                            LDKF.setAttributeElement(element, LDKF.replaceString(key, /[A-Z]/g, a=>{return'-'+LDKF.toLowerCaseString(a)}), value)
                                                    }
                                                }, properties)
                                            }

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (element)
                                                // (Iterate Properties) | (Modification > Element > Content)
                                                LDKF.isNull(data) ?
                                                    iterateProperties() :
                                                    LDKF.set.htmlMetaElementContent(element, data);

                                            else {
                                                // Update > Element
                                                element = LDKF.createElementDocument(elementTagName);

                                                // Modification > Element > Content
                                                LDKF.isNull(data) || LDKF.set.htmlMetaElementContent(element, data);

                                                // Iterate Properties
                                                iterateProperties();

                                                // Initialization > Parent
                                                let parent = LDKF.get.documentHead();

                                                /* Logic
                                                        [if:else statement]
                                                */
                                                if (parent)
                                                    // Insertion
                                                    LDKF.appendChildNode(parent, element);

                                                else
                                                    // Error Handling
                                                    try {
                                                        // Insertion
                                                        LDKF.appendChildDocument(element)
                                                    } catch (error) {
                                                        /* Logic
                                                                [if:else statement]
                                                        */
                                                        if (error.constructor == LDKO.domException) {
                                                            // Initialization > Children
                                                            let children = LDKF.get.documentChildren(LDKO.$document);

                                                            /* Logic
                                                                    [if statement]

                                                                > Insertion
                                                            */
                                                            if (LDKF.get.htmlCollectionLength(children))
                                                                LDKF.appendChildNode(children[0], element)
                                                        }

                                                        else
                                                            // Error
                                                            throw error
                                                    }
                                            }

                                            // Return
                                            return LDKF.get.htmlMetaElementContent(element)
                                        }

                                    // Modification > Application
                                        // Abstract
                                        LDKF.objectDefineProperty($app, 'abstract', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getAbstract() {
                                                // Return
                                                return getContent('meta[name=abstract')
                                            },

                                            // Set
                                            set: function setAbstract() {
                                                // Return
                                                return setContent('meta[name=abstract', LDKF.string(arguments[0]), {name: 'abstract'})
                                            }
                                        });

                                        // Application
                                        LDKF.objectDefineProperty($app, 'app', {value: app});

                                        // Author
                                        LDKF.objectDefineProperty($app, 'author', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getAuthor() {
                                                // Return
                                                return getContent('meta[name=author')
                                            },

                                            // Set
                                            set: function setAuthor() {
                                                // Return
                                                return setContent('meta[name=author', LDKF.string(arguments[0]), {name: 'author'})
                                            }
                                        });

                                        // Cache Control
                                        LDKF.objectDefineProperty($app, 'cacheControl', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getCacheControl() {
                                                // Return
                                                return getContent('meta[http-equiv=Cache-Control], meta[http-equiv=cache-control]')
                                            },

                                            // Set
                                            set: function setCacheControl() {
                                                // Return
                                                return setContent('meta[http-equiv=Cache-Control], meta[http-equiv=cache-control]', LDKF.string(arguments[0]), {httpEquiv: 'cache-control'})
                                            }
                                        });

                                        // Category
                                        LDKF.objectDefineProperty($app, 'category', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getCategory() {
                                                // Return
                                                return getContent('meta[name=category')
                                            },

                                            // Set
                                            set: function setCategory() {
                                                // Return
                                                return setContent('meta[name=category', LDKF.string(arguments[0]), {name: 'category'})
                                            }
                                        });

                                        // Character Set
                                        LDKF.objectDefineProperty($app, 'charset', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getCharacterSet() {
                                                // Return
                                                return getContent('meta[charset', 'charset')
                                            },

                                            // Set
                                            set: function setCharacterSet() {
                                                // Return
                                                return setContent('meta[charset', null, {charset: LDKF.string(arguments[0])})
                                            }
                                        });

                                        // Connection
                                        appStorage.connection && LDKF.objectDefineProperty($app, 'connection', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function connection() {
                                                // Return
                                                return appStorage.connection.get.call(LDKO.$navigator)
                                            }
                                        });

                                        // Classification
                                        LDKF.objectDefineProperty($app, 'classification', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getClassification() {
                                                // Return
                                                return getContent('meta[name=Classification], meta[name=classification]')
                                            },

                                            // Set
                                            set: function setClassification() {
                                                // Return
                                                return setContent('meta[name=Classification], meta[name=classification]', LDKF.string(arguments[0]), {name: 'Classification'})
                                            }
                                        });

                                        // Cookies
                                        LDKF.objectDefineProperty($app, 'cookies', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function cookies() {
                                                // Return
                                                return appStorage.cookie.get.call(LDKO.$document)
                                            },

                                            // Get
                                            set: function cookies() {
                                                // Return
                                                return appStorage.cookie.set.call(LDKO.$document, arguments[0])
                                            }
                                        });

                                        // Copyright
                                        LDKF.objectDefineProperty($app, 'copyright', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getCopyright() {
                                                // Return
                                                return getContent('meta[name=copyright')
                                            },

                                            // Set
                                            set: function setCopyright() {
                                                // Return
                                                return setContent('meta[name=copyright', LDKF.string(arguments[0]), {name: 'copyright'})
                                            }
                                        });

                                        // Coverage
                                        LDKF.objectDefineProperty($app, 'coverage', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getCoverage() {
                                                // Return
                                                return getContent('meta[name=coverage')
                                            },

                                            // Set
                                            set: function setCoverage() {
                                                // Return
                                                return setContent('meta[name=coverage', LDKF.string(arguments[0]), {name: 'coverage'})
                                            }
                                        });

                                        // Description
                                        LDKF.objectDefineProperty($app, 'description', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getDescription() {
                                                // Return
                                                return getContent('meta[name=description')
                                            },

                                            // Set
                                            set: function setDescription() {
                                                // Return
                                                return setContent('meta[name=description', LDKF.string(arguments[0]), {name: 'description'})
                                            }
                                        });

                                        // Designer
                                        LDKF.objectDefineProperty($app, 'designer', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getDesigner() {
                                                // Return
                                                return getContent('meta[name=designer')
                                            },

                                            // Set
                                            set: function setDesigner() {
                                                // Return
                                                return setContent('meta[name=designer', LDKF.string(arguments[0]), {name: 'designer'})
                                            }
                                        });

                                        // Device Pixel Ratio
                                        appStorage.devicePixelRatio && LDKF.objectDefineProperty($app, 'dpRatio', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getDevicePixelRatio() {
                                                // Return
                                                return appStorage.devicePixelRatio.get.call(LDKO.window)
                                            },

                                            // Set
                                            set: function setDevicePixelRatio() {
                                                // Return
                                                return appStorage.devicePixelRatio.set.call(LDKO.window, arguments[0])
                                            }
                                        });

                                        // Directory
                                        LDKF.objectDefineProperty($app, 'directory', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getDirectory() {
                                                // Return
                                                return getContent('meta[name=directory')
                                            },

                                            // Set
                                            set: function setDirectory() {
                                                // Return
                                                return setContent('meta[name=directory', LDKF.string(arguments[0]), {name: 'directory'})
                                            }
                                        });

                                        // Distribution
                                        LDKF.objectDefineProperty($app, 'distribution', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getDistribution() {
                                                // Return
                                                return getContent('meta[name=distribution')
                                            },

                                            // Set
                                            set: function setDistribution() {
                                                // Return
                                                return setContent('meta[name=distribution', LDKF.string(arguments[0]), {name: 'distribution'})
                                            }
                                        });

                                        // Do Not Track
                                        LDKF.objectDefineProperty($app, 'doNotTrack', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function doNotTrack() {
                                                // Return
                                                return appStorage.doNotTrack.get.call(LDKO.$navigator)
                                            }
                                        });

                                        // Expires
                                        LDKF.objectDefineProperty($app, 'expires', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getExpires() {
                                                // Return
                                                return getContent('meta[http-equiv=Expires], meta[http-equiv=expires]')
                                            },

                                            // Set
                                            set: function setExpires() {
                                                // Return
                                                return setContent('meta[http-equiv=Expires], meta[http-equiv=expires]', LDKF.string(arguments[0]), {httpEquiv: 'Expires'})
                                            }
                                        });

                                        // Height
                                        LDKF.objectDefineProperty($app, 'height', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getHeight() {
                                                // Return
                                                return appStorage.viewport.height
                                            },

                                            // Set
                                            set: function setHeight() {
                                                // Return
                                                return appStorage.viewport.height = arguments[0]
                                            }
                                        });

                                        // Identifier URL
                                        LDKF.objectDefineProperty($app, 'identifierURL', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getIdentifierURL() {
                                                // Return
                                                return getContent('meta[name=identifier-URL], meta[name=identifier-url]')
                                            },

                                            // Set
                                            set: function setIdentifierURL() {
                                                // Return
                                                return setContent('meta[name=identifier-URL], meta[name=identifier-url]', LDKF.string(arguments[0]), {name: 'identifier-URL'})
                                            }
                                        });

                                        // Keywords
                                        LDKF.objectDefineProperty($app, 'keywords', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getKeywords() {
                                                // Return
                                                return getContent('meta[name=keywords')
                                            },

                                            // Set
                                            set: function setKeywords() {
                                                // Return
                                                return setContent('meta[name=keywords', LDKF.string(arguments[0]), {name: 'keywords'})
                                            }
                                        });

                                        // Language
                                        LDKF.objectDefineProperty($app, 'lang', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getLanguage() {
                                                // Return
                                                return getContent('meta[name=language')
                                            },

                                            // Set
                                            set: function setLanguage() {
                                                // Return
                                                return setContent('meta[name=language', LDKF.string(arguments[0]), {name: 'language'})
                                            }
                                        });

                                        // Languages
                                        LDKF.objectDefineProperty($app, 'langs', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function langs() {
                                                // Initialization > Array
                                                let array = LDKF.customArray('ApplicationLanguages', appStorage.languages.get.call(LDKO.$navigator));

                                                // Modification > Array > Length
                                                LDKF.objectDefineProperty(array, 'language', {value: appStorage.language.get.call(LDKO.$navigator)});

                                                // Return
                                                return array
                                            }
                                        });

                                        // Name
                                        LDKF.objectDefineProperty($app, 'name', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getName() {
                                                // Return
                                                return LDKF.get.windowName()
                                            },

                                            // Set
                                            set: function setName() {
                                                // Initialization > (Document, Name)
                                                let $document = LDKO.$document,
                                                    name = LDKF.string(arguments[0]);

                                                // Modification
                                                    // Document > Title
                                                    LDKF.set.documentTitle($document, name);

                                                    // Window > Name
                                                    LDKF.set.windowName(LDKF.get.documentTitle($document));

                                                // Return
                                                return LDKF.get.windowName()
                                            }
                                        });

                                        // Navigator
                                        LDKF.objectDefineProperty($app, 'nav', {
                                            // Configurable
                                            configurable: !1,

                                            // Get
                                            get: function navigator() {
                                                // Initialization > Navigator
                                                let nav = LDKF.customObject('ApplicationNavigator', {}, LDKO.$navigatorProto),
                                                    $nav = LDKO.$navigator;

                                                /* LapysJS Development Kit Functions > Iterate Object
                                                        --- WARN ---
                                                            #Lapys: Indexing the `Navigator.prototype` object returns error,
                                                                but we are shorting it off to access its properties.
                                                */
                                                LDKF.iterateObject((key, value, description) => {
                                                    /* Logic
                                                            [if:else statement]

                                                        > Modification > Navigator > [Key]
                                                    */
                                                    if ('get' in description)
                                                        LDKF.objectDefineProperty(nav, key, {
                                                            // Configurable
                                                            configurable: description.configurable,

                                                            // Enumerable
                                                            enumerable: description.enumerable,

                                                            // Get
                                                            get: (function() {
                                                                // Initialization > Method
                                                                let method = description.get;

                                                                // Return
                                                                return (function() { return method.call($nav) })
                                                            })(),

                                                            // Set
                                                            set: (function() {
                                                                // Initialization > Method
                                                                let method = description.set;

                                                                // Return
                                                                return (function() { return method.call($nav, arguments[0]) })
                                                            })()
                                                        });

                                                    else
                                                        nav[key] = value
                                                }, nav.constructor.prototype, !0, !1);

                                                // Return
                                                return nav
                                            }
                                        });

                                        // Online
                                        LDKF.objectDefineProperty($app, 'online', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function online() {
                                                // Return
                                                return appStorage.online.get.call(LDKO.$navigator)
                                            }
                                        });

                                        // Owner
                                        LDKF.objectDefineProperty($app, 'owner', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getOwner() {
                                                // Return
                                                return getContent('meta[name=owner')
                                            },

                                            // Set
                                            set: function setOwner() {
                                                // Return
                                                return setContent('meta[name=owner', LDKF.string(arguments[0]), {name: 'owner'})
                                            }
                                        });

                                        // Platform
                                        LDKF.objectDefineProperty($app, 'platform', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function platform() {
                                                // Return
                                                return appStorage.platform.get.call(LDKO.$navigator)
                                            }
                                        });

                                        // Plugins
                                        LDKF.objectDefineProperty($app, 'plugins', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function plugins() {
                                                // Return
                                                return appStorage.plugins.get.call(LDKO.$navigator)
                                            }
                                        });

                                        // Pragma
                                        LDKF.objectDefineProperty($app, 'pragma', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getPragma() {
                                                // Return
                                                return getContent('meta[http-equiv=Pragma], meta[http-equiv=pragma]')
                                            },

                                            // Set
                                            set: function setPragma() {
                                                // Return
                                                return setContent('meta[http-equiv=Pragma], meta[http-equiv=pragma]', LDKF.string(arguments[0]), {httpEquiv: 'Pragma'})
                                            }
                                        });

                                        // Rating
                                        LDKF.objectDefineProperty($app, 'rating', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getRating() {
                                                // Return
                                                return getContent('meta[name=rating')
                                            },

                                            // Set
                                            set: function setRating() {
                                                // Return
                                                return setContent('meta[name=rating', LDKF.string(arguments[0]), {name: 'rating'})
                                            }
                                        });

                                        // Reply To
                                        LDKF.objectDefineProperty($app, 'reply-to', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getReplyTo() {
                                                // Return
                                                return getContent('meta[name=reply-to')
                                            },

                                            // Set
                                            set: function setReplyTo() {
                                                // Return
                                                return setContent('meta[name=reply-to', LDKF.string(arguments[0]), {name: 'reply-to'})
                                            }
                                        });

                                        // Revised
                                        LDKF.objectDefineProperty($app, 'revised', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getRevised() {
                                                // Return
                                                return getContent('meta[name=revised')
                                            },

                                            // Set
                                            set: function setRevised() {
                                                // Return
                                                return setContent('meta[name=revised', LDKF.string(arguments[0]), {name: 'revised'})
                                            }
                                        });

                                        // RevisitAfter
                                        LDKF.objectDefineProperty($app, 'revisitAfter', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getRevisitAfter() {
                                                // Return
                                                return getContent('meta[name=revisit-after')
                                            },

                                            // Set
                                            set: function setRevisitAfter() {
                                                // Return
                                                return setContent('meta[name=revisit-after', LDKF.string(arguments[0]), {name: 'revisit-after'})
                                            }
                                        });

                                        // Robots
                                        LDKF.objectDefineProperty($app, 'robots', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getRobots() {
                                                // Return
                                                return getContent('meta[name=robots')
                                            },

                                            // Set
                                            set: function setRobots() {
                                                // Return
                                                return setContent('meta[name=robots', LDKF.string(arguments[0]), {name: 'robots'})
                                            }
                                        });

                                        // Summary
                                        LDKF.objectDefineProperty($app, 'summary', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getSummary() {
                                                // Return
                                                return getContent('meta[name=summary')
                                            },

                                            // Set
                                            set: function setSummary() {
                                                // Return
                                                return setContent('meta[name=summary', LDKF.string(arguments[0]), {name: 'summary'})
                                            }
                                        });

                                        // Theme Color
                                        LDKF.objectDefineProperty($app, 'themeColor', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getThemeColor() {
                                                // Return
                                                return getContent('meta[name=theme-color')
                                            },

                                            // Set
                                            set: function setThemeColor() {
                                                // Return
                                                return setContent('meta[name=theme-color', LDKF.string(arguments[0]), {name: 'theme-color'})
                                            }
                                        });

                                        // Topic
                                        LDKF.objectDefineProperty($app, 'topic', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getTopic() {
                                                // Return
                                                return getContent('meta[name=topic')
                                            },

                                            // Set
                                            set: function setTopic() {
                                                // Return
                                                return setContent('meta[name=topic', LDKF.string(arguments[0]), {name: 'topic'})
                                            }
                                        });

                                        // URL
                                        LDKF.objectDefineProperty($app, 'url', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getURL() {
                                                // Return
                                                return getContent('meta[name=url')
                                            },

                                            // Set
                                            set: function setURL() {
                                                // Return
                                                return setContent('meta[name=url', LDKF.string(arguments[0]), {name: 'url'})
                                            }
                                        });

                                        // User Agent
                                        LDKF.objectDefineProperty($app, 'userAgent', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function userAgent() {
                                                // Return
                                                return appStorage.userAgent.get.call(LDKO.$navigator)
                                            }
                                        });

                                        // Vendor
                                        LDKF.objectDefineProperty($app, 'vendor', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function vendor() {
                                                // Return
                                                return appStorage.vendor.get.call(LDKO.$navigator)
                                            }
                                        });

                                        /* Viewport */
                                        LDKF.objectDefineProperty($app, 'viewport', {
                                            // Get
                                            get: function viewport() { return appStorage.viewport }
                                        });

                                        // Width
                                        LDKF.objectDefineProperty($app, 'width', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getWidth() {
                                                // Return
                                                return appStorage.viewport.width
                                            },

                                            // Set
                                            set: function setWidth() {
                                                // Return
                                                return appStorage.viewport.width = arguments[0]
                                            }
                                        });

                                        // X-UA Compatible
                                        LDKF.objectDefineProperty(app, 'xUA_Compatible', {
                                            // Configurable
                                            configurable: !0,

                                            // Get
                                            get: function getXUACompatible() {
                                                // Return
                                                return app.services.internetExplorer.xUA_Compatible
                                            },

                                            // Set
                                            set: function setXUACompatible() {
                                                // Return
                                                return app.services.internetExplorer.xUA_Compatible = arguments[0]
                                            }
                                        });

                                        /* Custom */
                                        LDKF.objectDefineProperty(app, 'custom', {
                                            // Value
                                            value: new (function Custom() {
                                                // Initialization
                                                let that = this;

                                                // Modification > Target
                                                    // Remove
                                                    LDKF.objectDefineProperty(that, 'remove', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Value
                                                        value: function remove() {
                                                            // Initialization > Name
                                                            let name = LDKF.string(arguments[0]);

                                                            // Error
                                                            arguments.length || LDKF.error("'remove'", 'argument', [1, 0]);

                                                            // Initialization > Element
                                                            let element = LDKF.querySelectorDocument("meta[name='" + name + "'");

                                                            /* Logic
                                                                    [if statement]
                                                            */
                                                            if (element) {
                                                                // Initialization > (Data, Parent Node)
                                                                let data = !0,
                                                                    parentNode = LDKF.get.nodeParentNode(element);

                                                                try {
                                                                    // Deletion
                                                                    parentNode ?
                                                                        LDKF.removeChildNode(parentNode, element) :
                                                                        LDKF.remove$ChildNode(element);
                                                                } catch (error) {
                                                                    // Update > Data
                                                                    data = !1
                                                                }

                                                                // Return
                                                                return data
                                                            }

                                                            // Return
                                                            return !1
                                                        }
                                                    });

                                                    // Set
                                                    LDKF.objectDefineProperty(that, 'set', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Value
                                                        value: function set() {
                                                            // Initialization > (Content, Name)
                                                            let content = arguments.length > 1 ? LDKF.string(arguments[1]) : '',
                                                                name = LDKF.string(arguments[0]);

                                                            // Error
                                                            arguments.length || LDKF.error("'set'", ['argument', 'required'], [1, 2]);

                                                            // Return
                                                            return setContent("meta[name='" + name + "'", content, {name: name})
                                                        }
                                                    });

                                                // Return
                                                return that
                                            }),

                                            // Writable
                                            writable: !1
                                        });

                                        /* Open Graph */
                                        LDKF.objectDefineProperty(app, 'openGraph', {
                                            // Value
                                            value: new (function ApplicationOpenGraph() {
                                                // Initialization > Target
                                                let that = this;

                                                // Modification > Target
                                                    // Audio
                                                    LDKF.objectDefineProperty(that, 'audio', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getAudio() {
                                                            // Return
                                                            return getContent('meta[name=og:audio')
                                                        },

                                                        // Set
                                                        set: function setAudio() {
                                                            // Return
                                                            return setContent('meta[name=og:audio', LDKF.string(arguments[0]), {name: 'og:audio'})
                                                        }
                                                    });
                                                        // Album
                                                        LDKF.objectDefineProperty(that, 'audioAlbum', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getAlbum() {
                                                                // Return
                                                                return getContent('meta[name=og:audio:album')
                                                            },

                                                            // Set
                                                            set: function setAlbum() {
                                                                // Return
                                                                return setContent('meta[name=og:audio:album', LDKF.string(arguments[0]), {name: 'og:audio:album'})
                                                            }
                                                        });

                                                        // Artist
                                                        LDKF.objectDefineProperty(that, 'audioArtist', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getArtist() {
                                                                // Return
                                                                return getContent('meta[name=og:audio:artist')
                                                            },

                                                            // Set
                                                            set: function setArtist() {
                                                                // Return
                                                                return setContent('meta[name=og:audio:artist', LDKF.string(arguments[0]), {name: 'og:audio:artist'})
                                                            }
                                                        });

                                                        // Title
                                                        LDKF.objectDefineProperty(that, 'audioTitle', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getTitle() {
                                                                // Return
                                                                return getContent('meta[name=og:audio:title')
                                                            },

                                                            // Set
                                                            set: function setTitle() {
                                                                // Return
                                                                return setContent('meta[name=og:audio:title', LDKF.string(arguments[0]), {name: 'og:audio:title'})
                                                            }
                                                        });

                                                        // Type
                                                        LDKF.objectDefineProperty(that, 'audioType', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getType() {
                                                                // Return
                                                                return getContent('meta[name=og:audio:type')
                                                            },

                                                            // Set
                                                            set: function setType() {
                                                                // Return
                                                                return setContent('meta[name=og:audio:type', LDKF.string(arguments[0]), {name: 'og:audio:type'})
                                                            }
                                                        });

                                                    // Country Name
                                                    LDKF.objectDefineProperty(that, 'countryName', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getCountryName() {
                                                            // Return
                                                            return getContent('meta[name=og:country-name')
                                                        },

                                                        // Set
                                                        set: function setCountryName() {
                                                            // Return
                                                            return setContent('meta[name=og:country-name', LDKF.string(arguments[0]), {name: 'og:country-name'})
                                                        }
                                                    });

                                                    // Description
                                                    LDKF.objectDefineProperty(that, 'description', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getDescription() {
                                                            // Return
                                                            return getContent('meta[name=og:description')
                                                        },

                                                        // Set
                                                        set: function setDescription() {
                                                            // Return
                                                            return setContent('meta[name=og:description', LDKF.string(arguments[0]), {name: 'og:description'})
                                                        }
                                                    });

                                                    // Email
                                                    LDKF.objectDefineProperty(that, 'email', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getEmail() {
                                                            // Return
                                                            return getContent('meta[name=og:email')
                                                        },

                                                        // Set
                                                        set: function setEmail() {
                                                            // Return
                                                            return setContent('meta[name=og:email', LDKF.string(arguments[0]), {name: 'og:email'})
                                                        }
                                                    });

                                                    // Fax Number
                                                    LDKF.objectDefineProperty(that, 'faxNumber', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getFaxNumber() {
                                                            // Return
                                                            return getContent('meta[name=og:fax_number')
                                                        },

                                                        // Set
                                                        set: function setFaxNumber() {
                                                            // Return
                                                            return setContent('meta[name=og:fax_number', LDKF.string(arguments[0]), {name: 'og:fax_number'})
                                                        }
                                                    });

                                                    // Image
                                                    LDKF.objectDefineProperty(that, 'image', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getImage() {
                                                            // Return
                                                            return getContent('meta[name=og:image')
                                                        },

                                                        // Set
                                                        set: function setImage() {
                                                            // Return
                                                            return setContent('meta[name=og:image', LDKF.string(arguments[0]), {name: 'og:image'})
                                                        }
                                                    });

                                                    // Latitude
                                                    LDKF.objectDefineProperty(that, 'latitude', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getLatitude() {
                                                            // Return
                                                            return getContent('meta[name=og:latitude')
                                                        },

                                                        // Set
                                                        set: function setLatitude() {
                                                            // Return
                                                            return setContent('meta[name=og:latitude', LDKF.string(arguments[0]), {name: 'og:latitude'})
                                                        }
                                                    });

                                                    // Locality
                                                    LDKF.objectDefineProperty(that, 'locality', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getLocality() {
                                                            // Return
                                                            return getContent('meta[name=og:locality')
                                                        },

                                                        // Set
                                                        set: function setLocality() {
                                                            // Return
                                                            return setContent('meta[name=og:locality', LDKF.string(arguments[0]), {name: 'og:locality'})
                                                        }
                                                    });

                                                    // Longitude
                                                    LDKF.objectDefineProperty(that, 'longitude', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getLongitude() {
                                                            // Return
                                                            return getContent('meta[name=og:longitude')
                                                        },

                                                        // Set
                                                        set: function setLongitude() {
                                                            // Return
                                                            return setContent('meta[name=og:longitude', LDKF.string(arguments[0]), {name: 'og:longitude'})
                                                        }
                                                    });

                                                    // Page ID
                                                    LDKF.objectDefineProperty(that, 'pageId', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getPageID() {
                                                            // Return
                                                            return getContent('meta[name=fb:page_id')
                                                        },

                                                        // Set
                                                        set: function setPageID() {
                                                            // Return
                                                            return setContent('meta[name=fb:page_id', LDKF.string(arguments[0]), {name: 'fb:page_id'})
                                                        }
                                                    });

                                                    // Phone Number
                                                    LDKF.objectDefineProperty(that, 'phoneNumber', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getPhoneNumber() {
                                                            // Return
                                                            return getContent('meta[name=og:phone_number')
                                                        },

                                                        // Set
                                                        set: function setPhoneNumber() {
                                                            // Return
                                                            return setContent('meta[name=og:phone_number', LDKF.string(arguments[0]), {name: 'og:phone_number'})
                                                        }
                                                    });

                                                    // Points
                                                    LDKF.objectDefineProperty(that, 'points', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getPoints() {
                                                            // Return
                                                            return getContent('meta[name=og:points')
                                                        },

                                                        // Set
                                                        set: function setPoints() {
                                                            // Return
                                                            return setContent('meta[name=og:points', LDKF.string(arguments[0]), {name: 'og:points'})
                                                        }
                                                    });

                                                    // Postal Code
                                                    LDKF.objectDefineProperty(that, 'postalCode', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getPostalCode() {
                                                            // Return
                                                            return getContent('meta[name=og:postal-code')
                                                        },

                                                        // Set
                                                        set: function setPostalCode() {
                                                            // Return
                                                            return setContent('meta[name=og:postal-code', LDKF.string(arguments[0]), {name: 'og:postal-code'})
                                                        }
                                                    });

                                                    // Region
                                                    LDKF.objectDefineProperty(that, 'region', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getRegion() {
                                                            // Return
                                                            return getContent('meta[name=og:region')
                                                        },

                                                        // Set
                                                        set: function setRegion() {
                                                            // Return
                                                            return setContent('meta[name=og:region', LDKF.string(arguments[0]), {name: 'og:region'})
                                                        }
                                                    });

                                                    // Site Name
                                                    LDKF.objectDefineProperty(that, 'siteName', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getSiteName() {
                                                            // Return
                                                            return getContent('meta[name=og:site_name')
                                                        },

                                                        // Set
                                                        set: function setSiteName() {
                                                            // Return
                                                            return setContent('meta[name=og:site_name', LDKF.string(arguments[0]), {name: 'og:site_name'})
                                                        }
                                                    });

                                                    // Street Address
                                                    LDKF.objectDefineProperty(that, 'streetAddress', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getStreetAddress() {
                                                            // Return
                                                            return getContent('meta[name=og:street-address')
                                                        },

                                                        // Set
                                                        set: function setStreetAddress() {
                                                            // Return
                                                            return setContent('meta[name=og:street-address', LDKF.string(arguments[0]), {name: 'og:street-address'})
                                                        }
                                                    });

                                                    // Title
                                                    LDKF.objectDefineProperty(that, 'title', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getTitle() {
                                                            // Return
                                                            return getContent('meta[name=og:title')
                                                        },

                                                        // Set
                                                        set: function setTitle() {
                                                            // Return
                                                            return setContent('meta[name=og:title', LDKF.string(arguments[0]), {name: 'og:title'})
                                                        }
                                                    });

                                                    // Type
                                                    LDKF.objectDefineProperty(that, 'type', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getType() {
                                                            // Return
                                                            return getContent('meta[name=og:type')
                                                        },

                                                        // Set
                                                        set: function setType() {
                                                            // Return
                                                            return setContent('meta[name=og:type', LDKF.string(arguments[0]), {name: 'og:type'})
                                                        }
                                                    });

                                                    // URL
                                                    LDKF.objectDefineProperty(that, 'url', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getURL() {
                                                            // Return
                                                            return getContent('meta[name=og:url')
                                                        },

                                                        // Set
                                                        set: function setURL() {
                                                            // Return
                                                            return setContent('meta[name=og:url', LDKF.string(arguments[0]), {name: 'og:url'})
                                                        }
                                                    });

                                                    // Video
                                                    LDKF.objectDefineProperty(that, 'video', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Get
                                                        get: function getVideo() {
                                                            // Return
                                                            return getContent('meta[name=og:video')
                                                        },

                                                        // Set
                                                        set: function setVideo() {
                                                            // Return
                                                            return setContent('meta[name=og:video', LDKF.string(arguments[0]), {name: 'og:video'})
                                                        }
                                                    });
                                                        // Height
                                                        LDKF.objectDefineProperty(that, 'videoHeight', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getVideoHeight() {
                                                                // Return
                                                                return getContent('meta[name=og:video:height')
                                                            },

                                                            // Set
                                                            set: function setVideoHeight() {
                                                                // Return
                                                                return setContent('meta[name=og:video:height', LDKF.string(arguments[0]), {name: 'og:video:height'})
                                                            }
                                                        });

                                                        // Type
                                                        LDKF.objectDefineProperty(that, 'videoType', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getVideoType() {
                                                                // Return
                                                                return getContent('meta[name=og:video:type')
                                                            },

                                                            // Set
                                                            set: function setVideoType() {
                                                                // Return
                                                                return setContent('meta[name=og:video:type', LDKF.string(arguments[0]), {name: 'og:video:type'})
                                                            }
                                                        });

                                                        // Width
                                                        LDKF.objectDefineProperty(that, 'videoWidth', {
                                                            // Configurable
                                                            configurable: !0,

                                                            // Get
                                                            get: function getVideoWidth() {
                                                                // Return
                                                                return getContent('meta[name=og:video:width')
                                                            },

                                                            // Set
                                                            set: function setVideoWidth() {
                                                                // Return
                                                                return setContent('meta[name=og:video:width', LDKF.string(arguments[0]), {name: 'og:video:width'})
                                                            }
                                                        });

                                                // Return
                                                return that
                                            }),

                                            // Writable
                                            writable: !1
                                        });

                                        /* Services */
                                        LDKF.objectDefineProperty(app, 'services', {
                                            // Value
                                            value: new (function ApplicationServices() {
                                                // Initialization > Target
                                                let that = this;

                                                // Modification > Target
                                                    // Apple
                                                    LDKF.objectDefineProperty(that, 'apple', {
                                                        // Configurable
                                                        configurable: !1,

                                                        // Value
                                                        value: new (function Object() {
                                                            // Initialization > Target
                                                            let that = this;

                                                            // Modification > Target
                                                                // Format Detection
                                                                LDKF.objectDefineProperty(that, 'formatDetection', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getFormatDetection() {
                                                                        // Return
                                                                        return getContent('meta[name=format-detection')
                                                                    },

                                                                    // Set
                                                                    set: function setFormatDetection() {
                                                                        // Return
                                                                        return setContent('meta[name=format-detection', LDKF.string(arguments[0]), {name: 'format-detection'})
                                                                    }
                                                                });

                                                                // Mobile Web App Capable
                                                                LDKF.objectDefineProperty(that, 'mobileWebAppCapable', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMobileWebAppCapable() {
                                                                        // Return
                                                                        return getContent('meta[name=apple-mobile-web-app-capable')
                                                                    },

                                                                    // Set
                                                                    set: function setMobileWebAppCapable() {
                                                                        // Return
                                                                        return setContent('meta[name=apple-mobile-web-app-capable', LDKF.string(arguments[0]), {name: 'apple-mobile-web-app-capable'})
                                                                    }
                                                                });

                                                                /* Mobile Web App Status Bar Style
                                                                        --- NOTE ---
                                                                            #Lapys: Believe it or not, this is just asking for a color.
                                                                */
                                                                LDKF.objectDefineProperty(that, 'mobileWebAppStatusBarStyle', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMobileWebAppStatusBarStyle() {
                                                                        // Return
                                                                        return getContent('meta[name=apple-mobile-web-app-status-bar-style')
                                                                    },

                                                                    // Set
                                                                    set: function setMobileWebAppStatusBarStyle() {
                                                                        // Return
                                                                        return setContent('meta[name=apple-mobile-web-app-status-bar-style', LDKF.string(arguments[0]), {name: 'apple-mobile-web-app-status-bar-style'})
                                                                    }
                                                                });

                                                                // Touch Fullscreen
                                                                LDKF.objectDefineProperty(that, 'touchFullScreen', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getTouchFullscreen() {
                                                                        // Return
                                                                        return getContent('meta[name=apple-touch-fullscreen')
                                                                    },

                                                                    // Set
                                                                    set: function setTouchFullscreen() {
                                                                        // Return
                                                                        return setContent('meta[name=apple-touch-fullscreen', LDKF.string(arguments[0]), {name: 'apple-touch-fullscreen'})
                                                                    }
                                                                });

                                                                // Viewport
                                                                LDKF.objectDefineProperty(that, 'viewport', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getViewport() {
                                                                        // Return
                                                                        return getContent('meta[name=viewport')
                                                                    },

                                                                    // Set
                                                                    set: function setViewport() {
                                                                        // Return
                                                                        return setContent('meta[name=viewport', LDKF.string(arguments[0]), {name: 'viewport'})
                                                                    }
                                                                });

                                                            // Return
                                                            return that
                                                        }),

                                                        // Writable
                                                        writable: !1
                                                    });

                                                    // Blog Catalog
                                                    LDKF.objectDefineProperty(that, 'blogCatalog', {
                                                        // Configurable
                                                        configurable: !1,

                                                        // Value
                                                        value: new (function Object() {
                                                            // Initialization > Target
                                                            let that = this;

                                                            // Modification > Target
                                                                // Blog Catalog
                                                                LDKF.objectDefineProperty(that, 'blogCatalog', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getTitle() {
                                                                        // Return
                                                                        return !!LDKF.querySelectorDocument('meta[name=blog-catalog')
                                                                    },

                                                                    // Set
                                                                    set: function setTitle() {
                                                                        // Return
                                                                        return setContent('meta[name=blog-catalog', null, {name: 'blog-catalog'})
                                                                    }
                                                                });

                                                            // Return
                                                            return that
                                                        }),

                                                        // Writable
                                                        writable: !1
                                                    });

                                                    // Claim ID
                                                    LDKF.objectDefineProperty(that, 'claimID', {
                                                        // Configurable
                                                        configurable: !1,

                                                        // Value
                                                        value: new (function Object() {
                                                            // Initialization > Target
                                                            let that = this;

                                                            // Modification > Target
                                                                // Micro ID
                                                                LDKF.objectDefineProperty(that, 'microID', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicroId() {
                                                                        // Return
                                                                        return getContent('meta[name=microid')
                                                                    },

                                                                    // Set
                                                                    set: function setMicroId() {
                                                                        // Return
                                                                        return setContent('meta[name=microid', LDKF.string(arguments[0]), {name: 'microid'})
                                                                    }
                                                                });

                                                            // Return
                                                            return that
                                                        }),

                                                        // Writable
                                                        writable: !1
                                                    });

                                                    // Internet Explorer
                                                    LDKF.objectDefineProperty(that, 'internetExplorer', {
                                                        // Configurable
                                                        configurable: !1,

                                                        // Value
                                                        value: new (function Object() {
                                                            // Initialization > Target
                                                            let that = this;

                                                            // Modification > Target
                                                                // Application Name
                                                                LDKF.objectDefineProperty(that, 'appName', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getApplicationName() {
                                                                        // Return
                                                                        return getContent('meta[name=application-name')
                                                                    },

                                                                    // Set
                                                                    set: function setApplicationName() {
                                                                        // Return
                                                                        return setContent('meta[name=application-name', LDKF.string(arguments[0]), {name: 'application-name'})
                                                                    }
                                                                });

                                                                // Microsoft Application Navigation Button Color
                                                                LDKF.objectDefineProperty(that, 'msAppNavButtonColor', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicrosoftApplicationWindow() {
                                                                        // Return
                                                                        return getContent('meta[name=msapplication-navbutton-color')
                                                                    },

                                                                    // Set
                                                                    set: function setMicrosoftApplicationWindow() {
                                                                        // Return
                                                                        return setContent('meta[name=msapplication-navbutton-color', LDKF.string(arguments[0]), {name: 'msapplication-navbutton-color'})
                                                                    }
                                                                });

                                                                // Microsoft Application Start URL
                                                                LDKF.objectDefineProperty(that, 'msAppStartURL', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicrosoftApplicationStartURL() {
                                                                        // Return
                                                                        return getContent('meta[name=msapplication-starturl')
                                                                    },

                                                                    // Set
                                                                    set: function setMicrosoftApplicationStartURL() {
                                                                        // Return
                                                                        return setContent('meta[name=msapplication-starturl', LDKF.string(arguments[0]), {name: 'msapplication-starturl'})
                                                                    }
                                                                });

                                                                // Microsoft Application Task
                                                                LDKF.objectDefineProperty(that, 'msAppTask', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicrosoftApplicationTask() {
                                                                        // Return
                                                                        return getContent('meta[name=msapplication-task')
                                                                    },

                                                                    // Set
                                                                    set: function setMicrosoftApplicationTask() {
                                                                        // Return
                                                                        return setContent('meta[name=msapplication-task', LDKF.string(arguments[0]), {name: 'msapplication-task'})
                                                                    }
                                                                });

                                                                // Microsoft Application Tooltip
                                                                LDKF.objectDefineProperty(that, 'msAppTooltip', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicrosoftApplicationTooltip() {
                                                                        // Return
                                                                        return getContent('meta[name=msapplication-tooltip')
                                                                    },

                                                                    // Set
                                                                    set: function setMicrosoftApplicationTooltip() {
                                                                        // Return
                                                                        return setContent('meta[name=msapplication-tooltip', LDKF.string(arguments[0]), {name: 'msapplication-tooltip'})
                                                                    }
                                                                });

                                                                // Microsoft Application Window
                                                                LDKF.objectDefineProperty(that, 'msAppWindow', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicrosoftApplicationWindow() {
                                                                        // Return
                                                                        return getContent('meta[name=msapplication-window')
                                                                    },

                                                                    // Set
                                                                    set: function setMicrosoftApplicationWindow() {
                                                                        // Return
                                                                        return setContent('meta[name=msapplication-window', LDKF.string(arguments[0]), {name: 'msapplication-window'})
                                                                    }
                                                                });

                                                                // Microsoft Smart Tags Prevent Parsing
                                                                LDKF.objectDefineProperty(that, 'msSmartTagsPreventParsing', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getMicrosoftSmartTagsPreventParsing() {
                                                                        // Return
                                                                        return getContent('meta[name=mssmarttagspreventparsing')
                                                                    },

                                                                    // Set
                                                                    set: function setMicrosoftSmartTagsPreventParsing() {
                                                                        // Return
                                                                        return setContent('meta[name=mssmarttagspreventparsing', LDKF.string(arguments[0]), {name: 'mssmarttagspreventparsing'})
                                                                    }
                                                                });

                                                                // Page Enter
                                                                LDKF.objectDefineProperty(that, 'pageEnter', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getPageEnter() {
                                                                        // Return
                                                                        return getContent('meta[http-equiv=Page-Enter')
                                                                    },

                                                                    // Set
                                                                    set: function setPageEnter() {
                                                                        // Return
                                                                        return setContent('meta[http-equiv=Page-Enter', LDKF.string(arguments[0]), {httpEquiv: 'Page-Enter'})
                                                                    }
                                                                });

                                                                // Page Exit
                                                                LDKF.objectDefineProperty(that, 'pageExit', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getPageExit() {
                                                                        // Return
                                                                        return getContent('meta[http-equiv=Page-Exit')
                                                                    },

                                                                    // Set
                                                                    set: function setPageExit() {
                                                                        // Return
                                                                        return setContent('meta[http-equiv=Page-Exit', LDKF.string(arguments[0]), {httpEquiv: 'Page-Exit'})
                                                                    }
                                                                });

                                                                // X-UA Compatible
                                                                LDKF.objectDefineProperty(that, 'xUA_Compatible', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getXUACompatible() {
                                                                        // Return
                                                                        return getContent('meta[http-equiv=X-UA-Compatible')
                                                                    },

                                                                    // Set
                                                                    set: function setXUACompatible() {
                                                                        // Return
                                                                        return setContent('meta[http-equiv=X-UA-Compatible', LDKF.string(arguments[0]), {httpEquiv: 'X-UA-Compatible'})
                                                                    }
                                                                });

                                                            // Return
                                                            return that
                                                        }),

                                                        // Writable
                                                        writable: !1
                                                    });

                                                    // Rails
                                                    LDKF.objectDefineProperty(that, 'rails', {
                                                        // Configurable
                                                        configurable: !1,

                                                        // Value
                                                        value: new (function Object() {
                                                            // Initialization > Target
                                                            let that = this;

                                                            // Modification > Target
                                                                // CSRF Parameter
                                                                LDKF.objectDefineProperty(that, 'csrfParam', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getCSRFParameter() {
                                                                        // Return
                                                                        return getContent('meta[name=csrf-parameter')
                                                                    },

                                                                    // Set
                                                                    set: function setCSRFParameter() {
                                                                        // Return
                                                                        return setContent('meta[name=csrf-parameter', LDKF.string(arguments[0]), {name: 'csrf-parameter'})
                                                                    }
                                                                });

                                                                // CSRF Token
                                                                LDKF.objectDefineProperty(that, 'csrfToken', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getCSRFToken() {
                                                                        // Return
                                                                        return getContent('meta[name=csrf-token')
                                                                    },

                                                                    // Set
                                                                    set: function setCSRFToken() {
                                                                        // Return
                                                                        return setContent('meta[name=csrf-token', LDKF.string(arguments[0]), {name: 'csrf-token'})
                                                                    }
                                                                });

                                                            // Return
                                                            return that
                                                        }),

                                                        // Writable
                                                        writable: !1
                                                    });

                                                    // Tweet Meme
                                                    LDKF.objectDefineProperty(that, 'tweetMeme', {
                                                        // Configurable
                                                        configurable: !1,

                                                        // Value
                                                        value: new (function Object() {
                                                            // Initialization > Target
                                                            let that = this;

                                                            // Modification > Target
                                                                // Title
                                                                LDKF.objectDefineProperty(that, 'title', {
                                                                    // Configurable
                                                                    configurable: !0,

                                                                    // Get
                                                                    get: function getTitle() {
                                                                        // Return
                                                                        return getContent('meta[name=tweetmeme-title')
                                                                    },

                                                                    // Set
                                                                    set: function setTitle() {
                                                                        // Return
                                                                        return setContent('meta[name=tweetmeme-title', LDKF.string(arguments[0]), {name: 'tweetmeme-title'})
                                                                    }
                                                                });

                                                            // Return
                                                            return that
                                                        }),

                                                        // Writable
                                                        writable: !1
                                                    });

                                                // Return
                                                return that
                                            }),

                                            // Writable
                                            writable: !1
                                        });

                                    // Return
                                    return app
                                })(),

                                // Writable
                                writable: !0
                            });

                            // Browser
                            LDKF.objectDefineProperty(window, 'browser', {
                                // Configurable
                                configurable: !0,

                                // Value
                                value: (function() {
                                    // Initialization > Browser
                                    let $browser = LDKO.browser,
                                        browser = LDKF.customObject('Browser', $browser, {valueOf: function valueOf() { return $browser.valueOf() }});

                                    // Return
                                    return browser
                                })()
                            })

                    /* Function Data */
                        // Apply
                        LDKF.objectDefineProperty(LDKO.funcProto, 'apply', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: LDKF.objectGetOwnPropertyDescriptor(LDKO.funcProto, 'apply').value,

                            // Writable
                            writable: !1
                        });

                        // Body
                        LDKF.objectDefineProperty(LDKO.funcProto, 'body', new (function Object() {
                            // Initialization > Target
                            let $that = this;

                            // Modification > Target
                                // Configurable
                                $that.configurable = !0;

                                // Enumerable
                                $that.enumerable = !1;

                                // Get
                                $that.get = function getBody() {
                                    // Initialization > (Target, Allow Parsing, Code (Length), (Function Head (Last)) Index, (First, Parse-Lock) Character, (Update) Stream)
                                    let that = this,
                                        allowParsing = !0,
                                        code = LDKF.toFunctionString(that),
                                        codeLength = code.length,
                                        functionHeadIndex = -1,
                                        functionHeadLastIndex = functionHeadIndex,
                                        index = 0,
                                        firstCharacter = code[index],
                                        parseLockCharacter = '',
                                        stream = '',
                                        updateStream = !1;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (firstCharacter == 'f' || firstCharacter == '(')
                                        /* Loop
                                                Iterate through Code.
                                        */
                                        for (index; index < codeLength; index += 1) {
                                            // Initialization > (Character, Next Character)
                                            let character = code[index],
                                                nextCharacter = code[index + 1];

                                            // Update > Stream
                                            updateStream && (stream += character);

                                            if (allowParsing) {
                                                // Logic > Update
                                                    // Allow Parsing
                                                    if (
                                                        character == '/' &&
                                                        (nextCharacter == '*' || nextCharacter == '/')
                                                    )
                                                        allowParsing = !1;

                                                    // Allow Parsing, Parse-Lock Character
                                                    if (character == '"' || character == "'" || character == '`') {
                                                        allowParsing = !1;
                                                        parseLockCharacter = character
                                                    }

                                                /* Logic
                                                        [if statement]
                                                */
                                                if (!updateStream) {
                                                    // Update > (Function Head (Last) Index. Update Stream)
                                                    (character == '(') && (functionHeadIndex += 1);
                                                    (character == ')') && (functionHeadLastIndex += 1);
                                                    (functionHeadIndex == functionHeadLastIndex && functionHeadLastIndex != -1) && (updateStream = !0)
                                                }
                                            }

                                            else if (
                                                character == '\n' ||
                                                (character == '*' && nextCharacter == '/') ||
                                                (
                                                    (character == '"' || character == "'" || character == '`') &&
                                                    character == parseLockCharacter
                                                )
                                            )
                                                // Update > Allow Parsing
                                                allowParsing = !0
                                        }

                                    else
                                        /* Loop
                                                Iterate through Code.
                                        */
                                        for (index; index < codeLength; index += 1) {
                                            // Initialization > Character
                                            let character = code[index];

                                            /* Logic
                                                    [if:else statement]
                                            */
                                            if (updateStream)
                                                // Update > Stream
                                                stream += character;

                                            else
                                                // Update > Update Stream
                                                (code[index - 2] == '=' && code[index - 1] == '>') && (updateStream = !0)
                                        }

                                    // Return
                                    return stream
                                };

                                // Set
                                $that.set = function setBody() {
                                    // Initialization > (Allow Parsing, Target, Code (Length), Body, Iterator)
                                    let allowParsing = !1,
                                        that = this,
                                        code = $that.get.call(that),
                                        codeLength = code.length,
                                        body = '',
                                        iterator = +allowParsing;

                                    /* Logic
                                            If
                                                the function body is delimited.
                                    */
                                    if ((code => {
                                        for (iterator = 0; iterator < codeLength; iterator += 1) {
                                            let character = code[iterator];

                                            if (character != '{' && character != ' ')
                                                return !1;

                                            else if (character == '{')
                                                return !0
                                        }
                                    })(code)) {
                                        /* Loop
                                                Iterate through Code.
                                        */
                                        for (iterator = 0; iterator < codeLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = code[iterator];

                                            /* Logic
                                                    [if:else if statement]

                                                > Update > (Body, Allow Parsing)
                                            */
                                            if (allowParsing)
                                                body += character;

                                            else if (character == '{')
                                                allowParsing = !0
                                        }

                                        /* Loop
                                                [while statement]

                                                --- NOTE ---
                                                    #Lapys: Trim trailing characters (in an expensive way: slicing).

                                            > Update > Body
                                        */
                                        while (
                                            body[body.length - 1] == '}' ||
                                            body[body.length - 1] == ' '
                                        )
                                            body = LDKF.sliceString(body, 0, -1);
                                    }

                                    else
                                        // Update > Body
                                        body = code;

                                    // Return
                                    return LDKF.$func(that.name, LDKF.get.functionParameters(that), arguments[0], (code => {
                                        /* Loop
                                                Iterate through Code.

                                                --- NOTE ---
                                                    #Lapys: Determine if the function is an arrow function or not.
                                        */
                                        for (iterator = 0; iterator < codeLength; iterator += 1) {
                                            // Initialization > ((Next) Character, Index)
                                            let character = code[iterator],
                                                index = LDKF.indexOfString(code, body),
                                                nextCharacter = code[iterator + 1];

                                            // Logic > Return
                                            if (character == '=' && nextCharacter == '>' && iterator < index)
                                                return !0
                                        }
                                    })(code))
                                };

                            // Return
                            return tmpObject.functionPrototypeBodyDescription = $that
                        }));

                        // Call
                        LDKF.objectDefineProperty(LDKO.funcProto, 'call', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: LDKF.objectGetOwnPropertyDescriptor(LDKO.funcProto, 'call').value,

                            // Writable
                            writable: !1
                        });

                        // Head
                        LDKF.objectDefineProperty(LDKO.funcProto, 'head', new (function Object() {
                            // Initialization > Target
                            let $that = this;

                            // Modification > Target
                                // Configurable
                                $that.configurable = !0;

                                // Enumerable
                                $that.enumerable = !1;

                                // Get
                                $that.get = function getHead() {
                                    // Initialization > (Target, Allow Parsing, Code (Length), (Function Head (Last)) Index, (First, Parse-Lock) Character, (Update) Stream)
                                    let that = this,
                                        code = LDKF.toFunctionString(that),
                                        codeLength = code.length,
                                        index = 0,
                                        firstCharacter = code[index],
                                        functionHeadIndex = -1,
                                        functionHeadLastIndex = functionHeadIndex,
                                        preStream = '',
                                        stream = preStream;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (firstCharacter == 'f' || firstCharacter == '(') {
                                        /* Loop
                                                Iterate through Code.
                                        */
                                        for (index; index < codeLength; index += 1) {
                                            // Initialization > (Next) Character
                                            let character = code[index],
                                                nextCharacter = code[index + 1];

                                            // Update > (Function Head (Last) Index, (Stream | Pre-Stream))
                                            (character == '(') && (functionHeadIndex += 1);
                                            functionHeadIndex != functionHeadLastIndex ? stream += character : preStream += character;
                                            (character == ')') && (functionHeadLastIndex += 1);

                                            /* Logic
                                                    [if statement]

                                                > Break
                                            */
                                            if (functionHeadIndex == functionHeadLastIndex && functionHeadIndex != -1)
                                                break
                                        }

                                        // Update > Stream
                                        (firstCharacter == 'f') && (stream = preStream + stream)
                                    }

                                    else
                                        /* Loop
                                                Iterate through Code.
                                        */
                                        for (index; index < codeLength; index += 1) {
                                            // Initialization > (Next) Character
                                            let character = code[index],
                                                nextCharacter = code[index + 1];

                                            /* Logic
                                                    [if statement]

                                                > Break
                                            */
                                            if (
                                                character == ' ' ||
                                                character == '=' && nextCharacter == '>'
                                            )
                                                break;

                                            // Update > Stream
                                            stream += character
                                        }

                                    // Return
                                    return stream
                                };

                                // Set
                                $that.set = function setHead() {
                                    // Initialization > Target
                                    let that = this;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isNativeFunction(that))
                                        // Error
                                        LDKF.error("'setHead'", 'argument', 'Can not generate new functions from native ones');

                                    else {
                                        // Initialization > (Head, Code)
                                        let head = $that.get.call(that),
                                            code = LDKF.replaceString(LDKF.toFunctionString(that), head, LDKF.string(arguments[0]));

                                        // Return
                                        return LDKF.eval(code)
                                    }
                                };

                            // Return
                            return tmpObject.functionPrototypeHeadDescription = $that
                        }));

                        // Parameters
                        LDKF.objectDefineProperty(LDKO.funcProto, 'params', new (function Object() {
                            // Initialization > (Parameter Prototype, Target)
                            let parameterPrototype = LDKF.customObject('Parameter').constructor.prototype,
                                $that = this;

                            // Modification > Target
                                // Configurable
                                $that.configurable = !0;

                                // Enumerable
                                $that.enumerable = !1;

                                // Get
                                $that.get = function getParameters() {
                                    // Initialization > (Target, Allow Splits, Head, Iterator, Name, Parameters, Special Character (Length), Split-Lock Character, Stream)
                                    let that = this,
                                        allowSplits = !0,
                                        head = tmpObject.functionPrototypeHeadDescription.get.call(that),
                                        iterator = 0,
                                        name = that.name,
                                        parameters = LDKF.customArray('FunctionParametersList'),
                                        specialCharacter = LDKC.specialCharacters,
                                        specialCharacterLength = specialCharacter.length,
                                        splitLockCharacter = '',
                                        stream = '';

                                    // (Loop > Update > Head, Update > Head)
                                    (head[0] == 'f' && head[1] == 'u' && head[2] == 'n' && head[3] == 'c' && head[4] == 't' && head[5] == 'i' && head[6] == 'o' && head[7] == 'n') && (head = LDKF.sliceString(head, 'function'.length));
                                    (LDKF.indexOfString(head, name) < LDKF.indexOfString(head, '(')) && (head = LDKF.replaceString(head, name, ''));
                                    while (head[iterator] == ' ') head = LDKF.sliceString(head, 1);
                                    (head[iterator] == '(') && (head = LDKF.sliceString(head, 1));
                                    while (head[iterator] == ' ') head = LDKF.sliceString(head, 1);
                                    while (head[head.length - 1] == ' ') head = LDKF.sliceString(head, 0, -1);
                                    (head[head.length - 1] == ')') && (head = LDKF.sliceString(head, 0, -1));
                                    while (head[head.length - 1] == ' ') head = LDKF.sliceString(head, 0, -1);

                                    // Initialization > Head Length
                                    let headLength = head.length;

                                    /* Loop
                                            Iterate through Head.
                                    */
                                    for (iterator = 0; iterator < headLength; iterator += 1) {
                                        // Initialization > Character
                                        let character = head[iterator];

                                        /* Logic
                                                [if:else if statement]
                                        */
                                        if (allowSplits) {
                                            // Logic > Update
                                                // Allow Splits
                                                if (
                                                    character == '/' &&
                                                    (nextCharacter == '*' || nextCharacter == '/')
                                                )
                                                    allowSplits = !1;

                                                // Allow Splits, Split Character
                                                if (character == '"' || character == "'" || character == '`') {
                                                    allowSplits = !1;
                                                    splitLockCharacter = character
                                                }

                                            // Update > Stream
                                            stream += character == ',' ? specialCharacter : character
                                        }

                                        else if (
                                            character == '\n' ||
                                            (character == '*' && nextCharacter == '/') ||
                                            (
                                                (character == '"' || character == "'" || character == '`') &&
                                                character == parseLockCharacter
                                            )
                                        )
                                            // Update > Allow Splits
                                            allowSplits = !0
                                    }

                                    // Update > Stream
                                    stream += specialCharacter;

                                    // Initialization > (Stream Length, Sub Stream, Split Count)
                                    let streamLength = stream.length,
                                        subStream = '',
                                        splitCount = 0;

                                    /* Loop
                                            Iterate through Stream.
                                    */
                                    for (iterator = 0; iterator < streamLength; iterator += 1) {
                                        // Initialization > Character
                                        let character = stream[iterator];

                                        /* Logic
                                                If
                                                    Character is the Special Character
                                                        or
                                                    the next set of characters is the Special Character.
                                        */
                                        if (
                                            character == specialCharacter ||
                                            (function() {
                                                let specialCharacterIterator = 0;

                                                for (specialCharacterIterator; specialCharacterIterator < specialCharacterLength; specialCharacterIterator += 1)
                                                    if (stream[iterator + specialCharacterIterator] != specialCharacter[specialCharacterIterator])
                                                        return !1;

                                                return !0
                                            })()
                                        ) {
                                            // Update > (Iterator, Parameters, Sub Stream, Split Count)
                                            (character == specialCharacter) || (iterator += specialCharacterLength);
                                            LDKF.pushArray(parameters, subStream);
                                            subStream = '';
                                            splitCount += 1
                                        }

                                        // Update > Sub Stream
                                        subStream += stream[iterator]
                                    }

                                    // Initialization > Parameters Length
                                    let parametersLength = parameters.length;

                                    // Function > Trim
                                    function trim() {
                                        // Initialization > String
                                        let string = arguments[0];

                                        // Loop > Update > String
                                        while (string[0] == ' ' || string[0] == '\n') string = LDKF.sliceString(string, 1);
                                        while (string[string.length - 1] == ' ' || string[string.length - 1] == '\n') string = LDKF.sliceString(string, 0, -1);

                                        // Return
                                        return string
                                    }

                                    /* Loop
                                            Index Parameters.
                                    */
                                    for (iterator = 0; iterator < parametersLength; iterator += 1) {
                                        // Initialization > Parameter
                                        let parameter = parameters[iterator];

                                        // Update > Parameters
                                        parameters[iterator] = LDKF.customObject('FunctionParameter', {
                                            // Address
                                            address: (parameter => {
                                                // Initialization > (Allow (Stream), Parameter (Iterator, Length))
                                                let allowStream = !0,
                                                    parameterIterator = 0,
                                                    parameterLength = (parameter = trim(parameter)).length,
                                                    stream = '';

                                                /* Loop
                                                        [for statement]
                                                */
                                                for (parameterIterator; parameterIterator < parameterLength; parameterIterator += 1) {
                                                    // Initialization > Character
                                                    let character = parameter[parameterIterator];

                                                    // Update > Allow Stream
                                                    (character == '=') && (allowStream = !1);

                                                    /* Logic
                                                            [if:else statement]
                                                    */
                                                    if (allowStream)
                                                        // Update > Stream
                                                        stream += character;

                                                    else
                                                        // Break
                                                        break
                                                }

                                                // Return
                                                return trim(stream)
                                            })(parameter),

                                            // Value
                                            value: (parameter => {
                                                // Initialization > (Allow (Stream), Parameter (Iterator, Length))
                                                let allowStream = !1,
                                                    parameterIterator = 0,
                                                    parameterLength = (parameter = trim(parameter)).length,
                                                    stream = '';

                                                /* Loop
                                                        [for statement]
                                                */
                                                for (parameterIterator; parameterIterator < parameterLength; parameterIterator += 1) {
                                                    // Initialization > Character
                                                    let character = parameter[parameterIterator];

                                                    // Update > Allow (Stream)
                                                    allowStream && (stream += character);
                                                    (character == '=') && (allowStream = !0)
                                                }

                                                // Initialization > Data
                                                let data = trim(stream);

                                                // Error Handling > Update > Data
                                                try { data = data ? LDKF.eval(data) : null }
                                                catch (error) {}

                                                // Return
                                                return data
                                            })(parameter)
                                        }, parameterPrototype);

                                        // Modification > {Parameter} > (To String, Value Of)
                                        LDKF.objectDefineProperty(parameters[iterator].__proto__, 'toString', {value: function toString() { return parameter }});
                                        LDKF.objectDefineProperty(parameters[iterator].__proto__, 'valueOf', {value: function valueOf() { return parameter }})
                                    }

                                    // Return
                                    return parameters
                                };

                                // Set
                                $that.set = function setParameters() {
                                    // Initialization > Target
                                    let that = this;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (LDKF.isNativeFunction(that))
                                        // Error
                                        LDKF.error("'setParameters'", 'argument', 'Can not generate new functions from native ones');

                                    else {
                                        // Initialization > (Head, Parameters)
                                        let head = $that.get.call(that),
                                            parameters = arguments[0];

                                        // (Loop > Update > Head, Update > Head)
                                        (head[0] == 'f' && head[1] == 'u' && head[2] == 'n' && head[3] == 'c' && head[4] == 't' && head[5] == 'i' && head[6] == 'o' && head[7] == 'n') && (head = LDKF.sliceString(head, 'function'.length));
                                        (LDKF.indexOfString(head, name) < LDKF.indexOfString(head, '(')) && (head = LDKF.replaceString(head, name, ''));
                                        while (head[iterator] == ' ') head = LDKF.sliceString(head, 1);
                                        (head[iterator] == '(') && (head = LDKF.sliceString(head, 1));
                                        while (head[iterator] == ' ') head = LDKF.sliceString(head, 1);
                                        while (head[head.length - 1] == ' ') head = LDKF.sliceString(head, 0, -1);
                                        (head[head.length - 1] == ')') && (head = LDKF.sliceString(head, 0, -1));
                                        while (head[head.length - 1] == ' ') head = LDKF.sliceString(head, 0, -1);

                                        // Initialization > Code
                                        let code = LDKF.replaceString(LDKF.toFunctionString(that), head, (parameters => {
                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (LDKF.isString(parameters))
                                                // Return
                                                return parameters;

                                            else if (LDKF.isArray(parameters)) {
                                                // Initialization > (Code, Length, Parameters Length, Decremented Parameters Length)
                                                let code = '',
                                                    iterator = 0,
                                                    parametersLength = parameters.length,
                                                    decrementedParametersLength = parametersLength - 1;

                                                /* Loop
                                                        Index Parameters.
                                                */
                                                for (iterator; iterator < parametersLength; iterator += 1) {
                                                    // Initialization > Parameter
                                                    let parameter = parameters[iterator];

                                                    /* Logic
                                                            [if:else statement]

                                                        > Update > Parameters
                                                    */
                                                    if (parameter.__proto__ === parameterPrototype)
                                                        parameters[iterator] = parameterPrototype.valueOf.call(parameter);

                                                    else
                                                        parameters[iterator] = LDKF.isObject(parameter) ?
                                                            ('address' in parameter ? LDKF.string(parameter.address) : '') + ('value' in parameter ? '=' + LDKF.string(parameter.value) : '') :
                                                            LDKF.string(parameter);

                                                    // Update > (Parameter, Code)
                                                    parameter = parameters[iterator];
                                                    code += parameter + (iterator == decrementedParametersLength ? '' : ',')
                                                }

                                                // Return
                                                return code
                                            }
                                        })(parameters));

                                        // Return
                                        return LDKF.eval(code)
                                    }
                                };

                            // Return
                            return tmpObject.functionPrototypeParametersDescription = $that
                        }));

                    /* HTML Element Data */
                        // Selector
                        LDKF.objectDefineProperty(LDKO.htmlElementProto, 'selector', tmpObject.htmlElePrototypeSelectorDescription = {
                            // Configurable
                            configurable: !0,

                            // Get
                            get: function getSelector() {
                                // Initialization > (Target, Attributes, Class, ID, Selector)
                                let that = this,
                                    attributes = LDKF.get.elementAttributes(that),
                                    $class = LDKF.getAttributeElement(that, 'class') || '',
                                    id = LDKF.get.elementId(that),
                                    selector = '';

                                // Function
                                    /* Contains White-Space
                                            --- NOTE ---
                                                #Lapys: Checks for a given length of white-space characters;
                                                    Default length is 1.
                                    */
                                    function containsWhiteSpace() {
                                        // Initialization > (Length, Iterator, String (Length))
                                        let length = arguments.length > 1 ? arguments[1] : 1,
                                            iterator = 0,
                                            string = arguments[0],
                                            stringLength = string.length;

                                        /* Loop
                                                Iterate through String.

                                            > Logic > Return
                                        */
                                        for (iterator; iterator < stringLength; iterator += 1)
                                            if (
                                                string[iterator] == ' ' &&
                                                (function() {
                                                    /* Logic
                                                            [if statement]
                                                    */
                                                    if (length > 0) {
                                                        // Initialization > Length Iterator
                                                        let lengthIterator = 0;

                                                        /* Loop
                                                                Iterate through String via Length.

                                                            > Logic > Return
                                                        */
                                                        for (lengthIterator; lengthIterator < length; lengthIterator += 1)
                                                            if (string[iterator + lengthIterator] != ' ')
                                                                return !1;

                                                        // Return
                                                        return !0
                                                    }

                                                    // Return
                                                    return !0
                                                })()
                                            )
                                                return !0
                                    }

                                    // Nullify Character
                                    function nullifyCharacter() {
                                        // Initialization > (Iterator, Match Character, Stream, String (Length))
                                        let iterator = 0,
                                            matchCharacter = arguments[1],
                                            stream = '',
                                            string = arguments[0],
                                            stringLength = string.length;

                                        /* Loop
                                                Iterate through String.
                                        */
                                        for (iterator; iterator < stringLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = string[iterator];

                                            // Update > Stream
                                            stream += character == matchCharacter ? '\\\\' + character : character
                                        }

                                        // Return
                                        return stream
                                    }

                                /* Logic
                                        [if statement]
                                */
                                if ($class) {
                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (containsWhiteSpace($class, 2))
                                        // Update > Selector
                                        selector += "[class='" + nullifyCharacter($class, "'") + "']";

                                    else {
                                        /* Loop > Update > Class
                                                --- NOTE ---
                                                    #Lapys: String trimming...
                                        */
                                        while ($class[0] == ' ' || $class[0] == '\n') $class = LDKF.sliceString($class, 1);
                                        while ($class[$class.length - 1] == ' ' || $class[$class.length - 1] == '\n') $class = LDKF.sliceString($class, 0, -1);

                                        // Initialization > (Class Length, Iterator, Special Character (Length), Stream)
                                        let classLength = $class.length,
                                            iterator = 0,
                                            specialCharacter = LDKC.specialCharacters,
                                            specialCharacterLength = specialCharacter.length,
                                            stream = '';

                                        /* Loop
                                                Iterate through Class.
                                        */
                                        for (iterator; iterator < classLength; iterator += 1) {
                                            // Initialization > (Character, Next Character)
                                            let character = $class[iterator],
                                                nextCharacter = $class[iterator + 1];

                                            // Update > (Character, Stream)
                                            (character == ' ' && nextCharacter == ' ') && (character = '');
                                            stream += character == ' ' ? specialCharacter : character
                                        }

                                        // Initialization > (Classes, Split Count, Stream Length)
                                        let classes = [],
                                            splitCount = 0,
                                            streamLength = stream.length;

                                        /* Loop
                                                Iterate through Stream.
                                        */
                                        for (iterator = 0; iterator < streamLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = stream[iterator];

                                            // Update > (Classes, Split Count)
                                            (
                                                character == specialCharacter ||
                                                (function() {
                                                    let specialCharacterIterator = 0;

                                                    for (specialCharacterIterator; specialCharacterIterator < specialCharacterLength; specialCharacterIterator += 1)
                                                        if (stream[iterator + specialCharacterIterator] != specialCharacter[specialCharacterIterator])
                                                            return !1;

                                                    stream = LDKF.sliceString(stream, specialCharacterLength);
                                                    streamLength = stream.length;
                                                    character = stream[iterator];
                                                    return !0
                                                })()
                                            ) && (splitCount += 1);
                                            LDKF.isUndefined(classes[splitCount]) ? classes[splitCount] = character : classes[splitCount] += character
                                        }

                                        // Initialization > Class Length
                                        let classesLength = classes.length;

                                        /* Loop
                                                Update > Selector
                                        */
                                        for (iterator = 0; iterator < classesLength; iterator += 1)
                                            selector += '.' + classes[iterator]
                                    }
                                }

                                // Update > Selector
                                id && (selector += !!containsWhiteSpace(id) ? "[id='" + nullifyCharacter(id, "'") + "']" : '#' + id);

                                /* Logic
                                        [if statement]
                                */
                                if (LDKF.get.namedNodeMapLength(attributes)) {
                                    // Function > Contains Character
                                    function containsCharacter() {
                                        // Initialization > (Iterator, Match Character, String (Length))
                                        let iterator = 0,
                                            matchCharacter = arguments[1],
                                            string = arguments[0],
                                            stringLength = string.length;

                                        /* Loop
                                                Iterate through String.

                                            > Logic > Return
                                        */
                                        for (iterator; iterator < stringLength; iterator += 1)
                                            if (string[iterator] == matchCharacter)
                                                return !0
                                    }

                                    // LapysJS Development Kit Functions > Iterate Object
                                    LDKF.iterateObject((key, value) => {
                                        /* Logic
                                                [if statement]
                                        */
                                        if (
                                            (key != 'class' && key != 'id') &&
                                            LDKF.isNaN(+key)
                                        ) {
                                            // Update > Value
                                            value = LDKF.get.attributeValue(value);

                                            // Initialization > Test
                                            let test = containsWhiteSpace(value);

                                            // Update > Selector
                                            selector += '[' + key + '=' + (test ? "'" : '') + (containsCharacter(value, "'") ? nullifyCharacter(value, "'") : value) + (test ? "'" : '') + ']'
                                        }
                                    }, attributes)
                                }

                                // Return
                                return LDKF.toLowerCaseString(LDKF.get.elementTagName(that)) + selector
                            },

                            // Set
                            set: function setSelector() {
                                // Initialization > (Iterator, Selector (Length), Target)
                                let iterator = 0,
                                    selector = arguments[0],
                                    selectorLength = selector.length,
                                    that = this;

                                /* Logic
                                        [if statement]
                                */
                                if (selector && LDKF.isString(selector)) {
                                    // Initialization > (Attributes (Length), Class (Length), ID)
                                    let attributes = [],
                                        attributesLength = -1,
                                        $class = [],
                                        classLength = -1,
                                        id = '';

                                    // Initialization > (Allow (Alternatives, Parsing), (Closing, Opening) Character Duplications, Parse-Lock Character, State)
                                    let allowAlternatives = !0,
                                        allowParsing = !0,
                                        closingCharacterDuplications = 0,
                                        openingCharacterDuplications = 0,
                                        parseLockCharacter = '',
                                        state = '';

                                    /* Loop
                                            Iterate through Selector.
                                    */
                                    for (iterator; iterator < selectorLength; iterator += 1) {
                                        // Initialization > Character
                                        let character = selector[iterator];

                                        // Update > Allow Alternatives
                                        (character == '[') && (allowAlternatives = !1);

                                        /* Logic
                                                If
                                                    Alternatives are disallowed,
                                                    check if they can be allowed again.
                                        */
                                        if (!allowAlternatives) {
                                            // Update > (Closing, Opening) Character Duplications
                                            (character == '[') && (openingCharacterDuplications += 1);
                                            (character == ']') && (closingCharacterDuplications += 1);

                                            // Update > Allow Alternatives
                                            (
                                                character == ']' &&
                                                closingCharacterDuplications == openingCharacterDuplications
                                            ) && (allowAlternatives = !0)
                                        }

                                        /* Logic
                                                [if statement]
                                                    --- NOTE ---
                                                        #Lapys: Checking for parsing even though no part of the stream
                                                            is ignored allows us to explicitly get string text and append it to our
                                                            Attributes array.
                                        */
                                        if (allowParsing) {
                                            /* Logic
                                                    [if statement]

                                                > Update > (Allow Parsing, Parse-Lock Character)
                                            */
                                            if (character == '"' || character == "'") {
                                                allowParsing = !1;
                                                parseLockCharacter = character
                                            }

                                            /* Logic
                                                    [if statement]

                                                > Update > (Attributes Length, State)
                                            */
                                            if (character == '[') {
                                                attributesLength += 1;
                                                state = 'attributes'
                                            }

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (allowAlternatives) {
                                                /* Logic
                                                        [if statement]

                                                    > Update > (Class Length, State)
                                                */
                                                if (character == '.') {
                                                    classLength += 1;
                                                    state = 'class'
                                                }

                                                // Update > State
                                                (character == '#') && (state = 'id')
                                            }

                                            /* Logic
                                                    [if statement]
                                                        --- NOTE ---
                                                            #Lapys: Attributes will always be checked for
                                                                since that`s what the Allow Alternatives variable segregates for.
                                            */
                                            if (state == 'attributes' && attributesLength > -1)
                                                // Logic > Update > Attributes
                                                if (character != '[' && character != ']')
                                                    LDKF.isUndefined(attributes[attributesLength]) ?
                                                        attributes[attributesLength] = character :
                                                        attributes[attributesLength] += character;

                                            /* Logic
                                                    [if statement]
                                                        --- NOTE ---
                                                            #Lapys: Do not pay attention to Classes or IDs
                                                                if Alternatives are disallowed.
                                            */
                                            if (allowAlternatives) {
                                                /* Logic
                                                        [if:else if statement]
                                                */
                                                if (state == 'class' && classLength > -1) {
                                                    // Logic > Update > Class
                                                    if (character != '.')
                                                        LDKF.isUndefined($class[classLength]) ?
                                                            $class[classLength] = character :
                                                            $class[classLength] += character
                                                }

                                                else if (state == 'id')
                                                    // Update > ID
                                                    id += character
                                            }
                                        }

                                        else {
                                            /* Logic
                                                    [if statement]

                                                > Update > Attributes
                                            */
                                            if (attributesLength > -1)
                                                LDKF.isUndefined(attributes[attributesLength]) ?
                                                    attributes[attributesLength] = character :
                                                    attributes[attributesLength] += character;

                                            // Update > Allow Parsing
                                            (
                                                (
                                                    (character == '"' || character == "'") &&
                                                    character == parseLockCharacter
                                                )
                                            ) && (allowParsing = !0)
                                        }
                                    }

                                    // Update > (Attributes, Class) Length
                                    attributesLength += 1;
                                    classLength += 1;

                                    /* Logic
                                            If
                                                there are Attributes.
                                    */
                                    if (attributesLength)
                                        /* Loop
                                                Index Attributes.
                                        */
                                        for (iterator = 0; iterator < attributesLength; iterator += 1) {
                                            // Initialization > Attribute
                                            let attribute = attributes[iterator];

                                            /* Logic
                                                    [if statement]
                                            */
                                            if (attribute) {
                                                // Initialization > (Attribute (Length, Iterator), Name, Split, Value)
                                                let attributeLength = attribute.length,
                                                    attributeIterator = 0,
                                                    name = '',
                                                    split = !1,
                                                    value = '';

                                                /* Loop
                                                        Iterate through Attribute.
                                                */
                                                for (attributeIterator; attributeIterator < attributeLength; attributeIterator += 1) {
                                                    // Initialization > Character
                                                    let character = attribute[attributeIterator];

                                                    // Update > (Split | (Value | Name))
                                                    character == '=' ?
                                                        split = !0 :
                                                        split ? value += character : name += character
                                                }

                                                // Loop > Update > Name
                                                while (name[0] == ' ' || name[0] == '\n') name = LDKF.sliceString(name, 1);
                                                while (name[name.length - 1] == ' ' || name[name.length - 1] == '\n') name = LDKF.sliceString(name, 0, -1);

                                                /* Logic
                                                        If
                                                            there was any Value.
                                                */
                                                if (split) {
                                                    // Loop > Update > Value
                                                    while (value[0] == ' ' || value[0] == '\n') value = LDKF.sliceString(value, 1);
                                                    while (value[value.length - 1] == ' ' || value[value.length - 1] == '\n') value = LDKF.sliceString(value, 0, -1);

                                                    // Initialization > Value Match Character
                                                    let valueMatchCharacter = value[0];

                                                    /* Logic
                                                            [if statement]

                                                            --- NOTE ---
                                                                #Lapys: Remove string delimiters.
                                                    */
                                                    if (valueMatchCharacter == '"' || valueMatchCharacter == "'") {
                                                        // Initialization > (New Value, Value (Iterator, Length), Decremented Value Length)
                                                        let newValue = '',
                                                            valueIterator = 0,
                                                            valueLength = value.length,
                                                            decrementedValueLength = valueLength - 1;

                                                        // Loop > Update > New Value
                                                        for (valueIterator; valueIterator < valueLength; valueIterator += 1)
                                                            valueIterator && ((valueIterator == decrementedValueLength) || (newValue += value[valueIterator]));

                                                        // Update > Value
                                                        value = newValue
                                                    }

                                                    // Modification > Target > [Name]
                                                    LDKF.setAttributeElement(that, name, value)
                                                }

                                                else
                                                    // Modification > Target > [Name]
                                                    LDKF.setAttributeElement(that, name, '')
                                            }
                                        }

                                    /* Logic
                                            [if statement]
                                    */
                                    if (id) {
                                        // Initialization > ID (Length, Penalty Count, Stream)
                                        let idLength = id.length,
                                            idPenaltyCount = 0,
                                            idStream = '';

                                        /* Loop
                                                Iterate through ID.
                                        */
                                        for (iterator = 0; iterator < idLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = id[iterator];

                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (character == '#' && idPenaltyCount)
                                                // Break
                                                break;

                                            else if (character != '#')
                                                // Update > ID Stream
                                                idStream += character;

                                            // Update > ID Penalty Count
                                            (character == '#') && (idPenaltyCount += 1)
                                        }

                                        // Modification > Target > ID
                                        LDKF.set.elementId(that, id = idStream)
                                    }

                                    /* Logic
                                            [if statement]
                                    */
                                    if (classLength) {
                                        // Initialization > Class
                                        let _class = LDKF.getAttributeElement(that, 'class') || '';

                                        /* Loop
                                                Index Class.
                                        */
                                        for (iterator = 0; iterator < classLength; iterator += 1) {
                                            // Initialization > Class
                                            let $_class = $class[iterator];

                                            // Update > Class
                                            $_class && (_class += ' ' + $_class)
                                        }

                                        // Loop > Update > Class
                                        while (_class[0] == ' ') _class = LDKF.sliceString(_class, 1);
                                        while (_class[_class.length - 1] == ' ') _class = LDKF.sliceString(_class, 0, -1);

                                        // Modification > Target > Class
                                        LDKF.setAttributeElement(that, 'class', _class)
                                    }
                                }

                                // Return
                                return arguments[0]
                            }
                        });

                    /* Object Data */
                        // To String
                        LDKF.objectDefineProperty(LDKO.objectProto, 'toString', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: LDKF.objectGetOwnPropertyDescriptor(LDKO.objectProto, 'toString').value,

                            // Writable
                            writable: !1
                        });

                        // Value Of
                        LDKF.objectDefineProperty(LDKO.objectProto, 'valueOf', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: LDKF.objectGetOwnPropertyDescriptor(LDKO.objectProto, 'valueOf').value,

                            // Writable
                            writable: !1
                        });

                    /* String Data */
                        // Get After Character
                        LDKF.objectDefineProperty(LDKO.stringProto, 'getAfterChar', {
                            // Configurable
                            configurable: !0,

                            // Value
                            value: function getAfterChar() {
                                // Initialization > (Iterator, Length, Match, Order, String (Length), Sub String)
                                let iterator = 0,
                                    length = arguments.length,
                                    match = arguments[0],
                                    order = arguments[1],
                                    string = LDKF.string(this),
                                    stringLength = string.length,
                                    substring = '';

                                /* Logic
                                        [if statement]
                                */
                                if (length) {
                                    // Update > Order
                                    order = order == 'first' ? !0 : order == 'last' ? !1 : !order;

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (LDKF.isNumber(match)) {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (match in LDKF.object(string))
                                            // Update > Match
                                            match = order ? string[match] : string[stringLength - match - 1];

                                        else if (match > stringLength - 1)
                                            // Return
                                            return '';

                                        // Return
                                        return string
                                    }

                                    else if (LDKF.isRegex(match)) {
                                        // Update > Match
                                        match = LDKF.matchString(string, LDKF.regex(LDKF.get.regexSource(match), LDKF.replaceString(LDKF.get.regexFlags(match), 'g', '') + 'g'));

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (match)
                                            // Update > Match
                                            match = order ? match[0] : match[match.length - 1];

                                        else
                                            // Return
                                            return ''
                                    }

                                    else
                                        // Update > Match
                                        match = LDKF.string(match);

                                    // Logic > Return
                                    if (!LDKF.matchString(string, match))
                                        return substring;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (order) {
                                        // Initialization > Allow Stream
                                        let allowStream = !1;

                                        /* Loop
                                                Iterate through String.
                                        */
                                        for (iterator; iterator < stringLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = string[iterator];

                                            /* Logic
                                                    [if:else if statement]
                                            */
                                            if (allowStream)
                                                // Update > Sub String
                                                substring += character;

                                            else if (
                                                character == match ||
                                                (function() {
                                                    // Initialization > Match (Iterator, Length)
                                                    let matchIterator = 0,
                                                        matchLength = match.length;

                                                    /* Loop
                                                            Iterate through Match.

                                                        > Logic > Return
                                                    */
                                                    for (matchIterator; matchIterator < matchLength; matchIterator += 1)
                                                        if (string[iterator + matchIterator] != match[matchIterator])
                                                            return !1;

                                                    // Update > Iterator
                                                    iterator += matchLength - 1;

                                                    // Return
                                                    return !0
                                                })()
                                            )
                                                // Update > Allow Stream
                                                allowStream = !0
                                        }
                                    }

                                    else {
                                        // Initialization > (Decremented String Length)
                                        let matchIndex = -1,
                                            decrementedStringLength = stringLength - 1;

                                        /* Loop
                                                Iterate through String backwards.
                                        */
                                        for (iterator = decrementedStringLength; iterator > -1; iterator -= 1)
                                            /* Logic
                                                    If
                                                        a Match has been found.
                                            */
                                            if (
                                                string[iterator] == match ||
                                                (function() {
                                                    // Initialization > (Decremented Match Length, Match Iterator)
                                                    let decrementedMatchLength = match.length - 1,
                                                        matchIterator = 0;

                                                    /* Loop
                                                            Iterate through Match backwards.

                                                        > Logic > Return
                                                    */
                                                    for (matchIterator = decrementedMatchLength; matchIterator > -1; matchIterator -= 1)
                                                        if (string[iterator + matchIterator] != match[matchIterator])
                                                            return !1;

                                                    // Return
                                                    return !0
                                                })()
                                            ) {
                                                // Update > Match Index
                                                matchIndex = iterator + match.length;

                                                /* Loop
                                                        Iterate through String.
                                                */
                                                for (iterator = 0; iterator < stringLength; iterator += 1)
                                                    (matchIndex > iterator) || (substring += string[iterator]);

                                                // Break
                                                break
                                            }
                                    }

                                    return substring
                                }

                                // Return
                                return string
                            },

                            // Writable
                            writable: !0
                        });

                        // Get Before Character
                        LDKF.objectDefineProperty(LDKO.stringProto, 'getBeforeChar', {
                            // Configurable
                            configurable: !0,

                            // Value
                            value: function getBeforeChar() {
                                // Initialization > (Iterator, Length, Match, Order, String (Length), Sub String)
                                let iterator = 0,
                                    length = arguments.length,
                                    match = arguments[0],
                                    order = arguments[1],
                                    string = LDKF.string(this),
                                    stringLength = string.length,
                                    substring = '';

                                /* Logic
                                        [if statement]
                                */
                                if (length) {
                                    // Update > Order
                                    order = order == 'first' ? !0 : order == 'last' ? !1 : !order;

                                    /* Logic
                                            [if:else if statement]
                                    */
                                    if (LDKF.isNumber(match)) {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (match in LDKF.object(string))
                                            // Update > Match
                                            match = order ? string[match] : string[stringLength - match - 1];

                                        else if (match > stringLength - 1)
                                            // Return
                                            return '';

                                        // Return
                                        return string
                                    }

                                    else if (LDKF.isRegex(match)) {
                                        // Update > Match
                                        match = LDKF.matchString(string, LDKF.regex(LDKF.get.regexSource(match), LDKF.replaceString(LDKF.get.regexFlags(match), 'g', '') + 'g'));

                                        /* Logic
                                                [if:else statement]
                                        */
                                        if (match)
                                            // Update > Match
                                            match = order ? match[0] : match[match.length - 1];

                                        else
                                            // Return
                                            return ''
                                    }

                                    else
                                        // Update > Match
                                        match = LDKF.string(match);

                                    // Logic > Return
                                    if (!LDKF.matchString(string, match))
                                        return string;

                                    /* Logic
                                            [if:else statement]
                                    */
                                    if (order) {
                                        // Initialization > Allow Stream
                                        let allowStream = !0;

                                        /* Loop
                                                Iterate through String.
                                        */
                                        for (iterator; iterator < stringLength; iterator += 1) {
                                            // Initialization > Character
                                            let character = string[iterator];

                                            /* Logic
                                                    [if statement]

                                                > Update > (Allow Stream, Sub String)
                                            */
                                            if (allowStream) {
                                                (
                                                    character == match ||
                                                    (function() {
                                                        // Initialization > Match (Iterator, Length)
                                                        let matchIterator = 0,
                                                            matchLength = match.length;

                                                        /* Loop
                                                                Iterate through Match.

                                                            > Logic > Return
                                                        */
                                                        for (matchIterator; matchIterator < matchLength; matchIterator += 1)
                                                            if (string[iterator + matchIterator] != match[matchIterator])
                                                                return !1;

                                                        // Update > Sub String
                                                        substring = LDKF.sliceString(substring, 0, iterator);

                                                        // Return
                                                        return !0
                                                    })()
                                                ) && (allowStream = !1);
                                                allowStream && (substring += character)
                                            }
                                        }
                                    }

                                    else {
                                        // Initialization > (Decremented String Length)
                                        let matchIndex = -1,
                                            decrementedStringLength = stringLength - 1;

                                        /* Loop
                                                Iterate through String backwards.
                                        */
                                        for (iterator = decrementedStringLength; iterator > -1; iterator -= 1) {
                                            /* Logic
                                                    If
                                                        a Match has been found.

                                                > Break
                                            */
                                            if (
                                                string[iterator] == match ||
                                                (function() {
                                                    // Initialization > (Decremented Match Length, Match Iterator)
                                                    let decrementedMatchLength = match.length - 1,
                                                        matchIterator = 0;

                                                    /* Loop
                                                            Iterate through Match backwards.

                                                        > Logic > Return
                                                    */
                                                    for (matchIterator = decrementedMatchLength; matchIterator > -1; matchIterator -= 1)
                                                        if (string[iterator + matchIterator] != match[matchIterator])
                                                            return !1;

                                                    // Return
                                                    return !0
                                                })()
                                            ) {
                                                // Update > Match Index
                                                matchIndex = iterator;

                                                /* Loop
                                                        Iterate through String.
                                                */
                                                for (iterator = 0; iterator < stringLength; iterator += 1)
                                                    (matchIndex > iterator) && (substring += string[iterator]);

                                                // Break
                                                break
                                            }
                                        }
                                    }

                                    return substring
                                }

                                // Return
                                return string
                            },

                            // Writable
                            writable: !0
                        });
                }

                // Update
                function update() {}

                // Termination
                function terminate() {
                    // Initialization > Processing Duration
                    let processingDuration = LDKF.performanceNow() - LapysJS.tmp.processingDuration;

                    // LapysJS Development Kit Functions > Set Timeout
                    LDKF.setTimeout(function() {
                        // Initialization > Script Source (Length)
                        let scriptSource = tmpObject.scriptSource,
                            scriptSourceLength = scriptSource.length;

                        // Update > Script Source
                        (scriptSourceLength > 150) && (scriptSource = LDKF.sliceString(scriptSource, 0, 150)) + '…';

                        // LapysJS Development Kit Functions > Console (Group (End), Log)
                        LDKF.consoleGroup('LapysJS | ' + scriptSource + ' (by ' + LDKG.AUTHOR + ')');
                            LDKF.consoleLog('    LapysJS.processingDuration =', (LDKF.objectDefineProperty(LapysJS, 'processingDuration', {value: processingDuration}), LapysJS.processingDuration));
                            LDKF.consoleLog('    LapysJS.ready =', (LDKF.objectDefineProperty(LapysJS, 'ready', {value: !0}), delete LapysJS.tmp.processingDuration));
                        LDKF.consoleGroupEnd()
                    })
                }

            /* Modification > Window
                    --- UPDATE REQUIRED ---
                        #Lapys: Remove this when done.
            */
            window.LapysJSError = LapysJSError;
            window.LDK = LDK;
            window.LDKC = LDKC;
            window.LDKF = LDKF;
            window.LDKG = LDKG;
            window.LDKI = LDKI;
            window.LDKO = LDKO;

            // Error Handling
            try {
                // Initialization
                init();

                // Update > Initialization
                init = 0
            } catch (error) {
                // Initialization > Error
                let $error = new LapysJSError(LDKI.errorMessagePrefix + LDKF.debugMessage('LapysJS encountered an error during the installation process.\n\t' + error.message));

                // Modification > Error > Stack
                $error.stack = error.stack;

                // Error
                throw $error
            }

            try {
                /* Logic
                        If
                            Initialization ran properly.
                */
                if (!init) {
                    // Update
                    update.call(init);

                    // Update > Update
                    update = 0
                }
            } catch (error) {
                // Initialization > Error
                let $error = new LapysJSError(LDKI.errorMessagePrefix + LDKF.debugMessage('LapysJS could not install library services.\n\t' + error.message));

                // Modification > Error > Stack
                $error.stack = error.stack;

                // Error
                throw $error
            }

            try {
                /* Logic
                        If
                            Update ran properly.
                */
                if (!update) {
                    // Terminate
                    terminate.call(update);

                    // Update > Terminate
                    terminate = 0
                }
            } catch (error) {
                // Initialization > Error
                let $error = new LapysJSError(LDKI.errorMessagePrefix + LDKF.debugMessage(error.message));

                // Modification > Error > Stack
                $error.stack = error.stack;

                // Error
                throw $error
            }

            // Return
            return terminate
        } catch (error) {
            // Initialization > Allow Error
            var allowError = !1;

            // Error Handling
            try {
                // Logic > Error
                if (typeof error == 'string') throw error;

                // Initialization > Error (Message, Name)
                var errorMessage = error.message,
                    errorName = error.constructor.name;

                // Logic > Error
                if (errorMessage == "'eval' must be a native function.")
                    throw new Error('[LapysJS v' + VERSION + '] => ' + errorMessage);

                /* Logic
                        If
                            the error is a LapysJSError variant.

                        --- NOTE ---
                            #Lapys: Try to mitigate the use of prototype methods & properties
                                in an insecure environment.

                    > Error
                */
                if (
                    (
                        typeof errorMessage != 'string' ||
                        typeof errorName != 'string'
                    ) ||
                    (
                        errorMessage[0] == '[' && errorMessage[1] == 'L' && errorMessage[2] == 'a' && errorMessage[3] == 'p' && errorMessage[4] == 'y' && errorMessage[5] == 's' && errorMessage[6] == ' ' && errorMessage[7] == 'v' &&
                        errorMessage[8] == '0' && errorMessage[9] == '.' && errorMessage[10] == '0' && errorMessage[11] == '.' && errorMessage[12] == '4' &&
                        errorMessage[13] == ']'
                    ) ||
                    (
                        errorName[0] == 'L' && errorName[1] == 'a' && errorName[2] == 'p' && errorName[3] == 'y' && errorName[4] == 's' &&
                        errorName[5] == 'J' && errorName[6] == 'S'
                    )
                ) {
                    allowError = !0;
                    throw error
                }
            } catch (error) {
                // Error
                throw allowError ? error : ('LapysJSError: [LapysJS v' + VERSION + '] => ' + (typeof error == 'string' ? error : 'Unable to parse errors, therefore LapysJS is not compatible with this browser.'))
            }

            // Return
            return 1
        }
    }

    else
        /* Return
                --- NOTE ---
                    #Lapys: There was an exception in running this script.
        */
        return 1;

    /* Return
            --- NOTE ---
                #Lapys: The script ran perfectly.
    */
    return 0
})([''], [])
