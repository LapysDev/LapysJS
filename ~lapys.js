/* Global ...
    --- NOTE ---
        #Lapys:
          - Code standard built for all JavaScript versions.
          - Native features are validated, or internally shimmed otherwise.

    --- RULES ---
        #Lapys:
          - Code indirection should be minimal.
          - Function arguments/ parameters count to a maximum of 255.
          - Prefer named function arguments over indices from the exotic `arguments` object.
*/
function LapysDevelopmentKit() { /* [private code] */ return '[' + LapysJS.version + "]: " + LapysJS.description }
var LapysJS = null;

/* [Lapys Development Kit] ... ->> Library SDK (private interface) */
(function() {
    /* Polyfill */
    var Infinity = 1 / +0;
    var NaN = +0 / +0;
    var undefined = void +0;

    /* Definition ->>
        `null` depicts functions & objects, whilst
        `undefined` represents all else.
    */
    LapysDevelopmentKit.prototype = {
        // [Components]
        Components: {},

        // [Constants]
        Constants: {
            ARABIC_DIGITS: null,
            MAXIMUM_BITWISE_INTEGER: undefined,
            MAXIMUM_INTEGER: undefined,
            MAXIMUM_SAFE_INTEGER: undefined,
            NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE: null,
            RANDOMIZER: null,
            TYPE_ERROR: null
        },

        // [Directives]
        Directives: {
            ANY: {}, // ->> Represents a non-unique value. (though its value is distinct)
            ERROR: {}, // ->> Represents an exception instance. (always a unique value)
            GLOBAL: "undefined" === typeof frames ? ("undefined" === typeof self ? ("undefined" === typeof window ? ("undefined" === typeof global ? ("undefined" === typeof globalThis ? (function() { return this })() : globalThis) : global) : window) : self) : frames
        },

        // [Errors]
        Errors: {
            Error: null,

            GETTER: 0x01,
            INACCESSIBLE: 0x02,
            INHERITED: 0x04,
            MISSING: 0x08,
            MODIFIED: 0x10,
            SETTER: 0x20
        },

        // [Functions]
        Functions: {
            functionBind: null,
            functionCall: null,
            functionRebind: null,
            functionToString: null,
            inspectFeature: null, "CONSTRUCTOR": 0x1, "METHOD": 0x2,
            isNativeFunction: null,
            numberIsFinite: null,
            numberIsNaN: null,
            numberIsSafe: null,
            numberIsSafeInteger: null,
            numberToFraction: null,
            numberToString: null,
            objectGetPrototype: null,
            objectSetPrototype: null,
            stringAt: null,
            toString: null
        },

        // [Mathematics]
        Mathematics: {
            E: 2.718281828459045,
            ETA: 245850922 / 156513558,
            LN10: 2.302585092994046,
            PI: 245850922 / 78256779,

            abs: null,
            acos: null,
            acosh: null,
            acot: null,
            acoth: null,
            acsc: null,
            acsch: null,
            asec: null,
            asech: null,
            asin: null,
            asinh: null,
            atan: null,
            atanh: null,
            cbrt: null,
            ceil: null,
            clamp: null,
            cot: null,
            coth: null,
            cos: null,
            csc: null,
            csch: null,
            fact: null,
            exp: null,
            floor: null,
            iabs: null,
            icbrt: null,
            imax: null,
            imin: null,
            ipow: null,
            iroot: null,
            isqrt: null,
            itrunc: null,
            lerp: null,
            ln: null,
            log: null,
            max: null,
            min: null,
            mod: null,
            perc: null,
            pow: null,
            random: null,
            root: null,
            round: null,
            sec: null,
            sech: null,
            sin: null,
            sinh: null,
            sqrt: null,
            tan: null,
            tanh: null,
            trunc: null,
            wrap: null
        },

        // [Natives]
        Natives: {
            Function$prototype$call: null,
            Function$prototype$bind: null,
            Function$prototype$toString: null,
            Object$create: null,
            Object$defineProperty: null,
            Object$getOwnPropertyDescriptor: null,
            Object$getPrototypeOf: null,
            Object$setPrototypeOf: null,
            Object$prototype$hasOwnProperty: null,
            Object$prototype$__defineGetter__: null,
            Object$prototype$__defineSetter__: null,
            Object$prototype$__lookupGetter__: null,
            Object$prototype$__lookupSetter__: null,
            String$prototype$charAt: null
        },

        // [Supports]
        Supports: {
            Element$defineProperty: false,
            Element$getOwnPropertyDescriptor: false,
            Function$prototype$call: false,
            Function$prototype$bind: false,
            Object$create: false,
            Object$defineProperty: false,
            Object$getOwnPropertyDescriptor: false,
            Object$getPrototypeOf: false,
            Object$setPrototypeOf: false,
            Object$prototype$hasOwnProperty: false,
            Object$prototype$__defineGetter__: false,
            Object$prototype$__defineSetter__: false,
            Object$prototype$__lookupGetter__: false,
            Object$prototype$__lookupSetter__: false,
            Object$prototype$__proto__: false,
            String$prototype$charAt: false
        }
    };

    /* Shorthand */
    var LDK = LapysDevelopmentKit.prototype; {
        var LDKC = LDK.Constants;
        var LDKE = LDK.Errors;
        var LDKF = LDK.Functions;
        var LDKM = LDK.Mathematics;
        var LDKN = LDK.Natives;
        var LDKU = LDK.Components;
        var LDKS = LDK.Supports
    }

    /* ... */
    with (LDK) with (Directives) {
        /* Class > ... --- REDACT (Lapys) */
            /* Error */
            function Error(name, message) {
                // ... Update > Error
                ERROR = LDKC.TYPE_ERROR; {
                    ERROR.message = null === message ? "" : message;
                    ERROR.name = name
                }

                switch (name) {
                    case LDKE.GETTER | LDKE.SETTER: ERROR.name = "UnexpectedPropertyError"; break;

                    // ...
                    case LDKE.GETTER: ERROR.name = "UnexpectedGetterError"; break;
                    case LDKE.INACCESSIBLE: ERROR.name = "InaccessiblePropertyError"; break;
                    case LDKE.INHERITED: ERROR.name = "InheritedPropertyError"; break;
                    case LDKE.MISSING: ERROR.name = "MissingFeatureError"; break;
                    case LDKE.MODIFIED: ERROR.name = "ModifiedFeatureError"; break;
                    case LDKE.SETTER: ERROR.name = "UnexpectedSetterError"; break;

                    // ...
                    case 0x0: ERROR.name = Error.prototype.name
                }

                // Return
                return ERROR
            }
                Error.prototype = {
                    message: null, name: "Error",
                    toString: function toString() { return '[' + this.name + ']' + (null !== this.message ? ": " + this.message : "") }
                };

            /* Fraction */
            function Fraction(whole, numerator, denominator) {
                this.denominator = denominator;
                this.numerator = numerator;
                this.whole = whole
            }
                Fraction.prototype = {
                    denominator: +0, numerator: +0, whole: +0,

                    toImproper: function toImproper() { this.numerator += this.denominator * this.whole; this.whole = +0; return this },
                    toMixed: function toMixed() { this.whole = this.numerator; this.numerator %= this.denominator; this.whole -= this.numerator; return this }
                };

            /* [Property] Inspector --- NOTE (Lapys) -> Evaluated by the `Functions.inspectFeature(...)` function. */
            function Inspector(identifier, object) {
                this.assertions.length = +0;
                this.identifier = identifier;
                this.object = object
            }
                Inspector.prototype = {
                    assertions: new function AssertionList() { return new StaticArray(+0, 8, null) },
                    forwards: new function ForwardList() { return new StaticArray(+0, 8, null) },
                    identifier: null, object: null,

                    // ...
                    assert: function assert(callback) { this.assertions[this.assertions.length++] = callback; return this },
                    then: function then(callback) { this.forwards[this.forwards.length++] = callback; return this },

                    evaluate: function evaluate(code, type, syntax) {
                        // Constant > (Identifier, Object)
                        // : Initialization > (... Source, Value)
                        var identifier = this.identifier, object = this.object;

                        var objectSource = "", propertySource = "", propertyType = "feature";
                        var value = ERROR;

                        // ... Update
                        // : ... Source
                        if (null === syntax) {
                            objectSource = "the global object";
                            propertySource = "symbol" === typeof identifier ? LDKF.toString(identifier) : identifier
                        }

                        else {
                            for (var iterator = syntax.length - 2; ~iterator; --iterator)
                            objectSource = syntax[iterator] + (objectSource.length ? '.' : "") + objectSource;

                            // ...
                            propertySource = objectSource + '.' + syntax[syntax.length - 1];
                            switch (type) {
                                case LDKF.CONSTRUCTOR: propertySource += "()"; break;
                                case LDKF.METHOD: propertySource += "(...)"
                            }
                        }

                        // : Property Type
                        switch (type) {
                            case LDKF.CONSTRUCTOR: propertyType = "constructor"; break;
                            case LDKF.METHOD: propertyType = "method"
                        }

                        // Logic > ...
                        if (identifier in object) {
                            // Logic
                            // : [Inherited] ->> Ensure that `identifier` is not an inherited property of `object`.
                            if ((code & LDKE.INHERITED)) {
                                // Initialization > Asserted
                                var asserted = false;

                                // Update > Error; ...
                                ERROR = new LDKE.Error(LDKE.INHERITED, "Expected the `" + propertySource + "` " + propertyType + " to be an own-property value of " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`')); {
                                    if (LDKS.Object$prototype$hasOwnProperty) { asserted = true; if (false !== LDKF.functionCall(LDKN.Object$prototype$hasOwnProperty, object, 1, identifier)) throw ERROR }
                                    else if (LDKS.Object$getOwnPropertyDescriptor) { asserted = true; if (undefined !== LDKN.Object$getOwnPropertyDescriptor(object, identifier)) throw ERROR }
                                    else {
                                        var prototype = ERROR;

                                        // ... Update > Prototype
                                        if (LDKS.Object$prototype$__proto__) prototype = object.__proto__;
                                        else if (LDKS.Object$getPrototypeOf) prototype = LDKN.Object$getPrototypeOf(object);

                                        // ...
                                        if (ERROR !== prototype) { asserted = true; if (false === (identifier in object) && (null !== prototype && identifier in prototype)) throw ERROR }
                                    }
                                }

                                ERROR = new LDKE.Error(0x0, "Support required for asserting own-property of objects i.e.:\n\t`Object.getOwnPropertyDescriptor`, `Object.getPrototypeOf`, `Object.prototype.__proto__`, or `Object.prototype.hasOwnProperty` features must be available (and un-modified)");
                                if (false === asserted) throw ERROR
                            }

                            // : [Getter/ Setter] ->> Ensure that `identifier` is not an accessor/ mutator property of `object`.
                            if ((code & LDKE.GETTER) || (code & LDKE.SETTER)) {
                                // Initialization > Asserted
                                var asserted = false;

                                // Update > Error; ...
                                ERROR = [
                                    new LDKE.Error(LDKE.GETTER, "Expected the `" + propertySource + "` " + propertyType + " to be a data property and not a getter of " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`')),
                                    new LDKE.Error(LDKE.SETTER, "Expected the `" + propertySource + "` " + propertyType + " to be a data property and not a setter of " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`'))
                                ]; {
                                    if (code & LDKE.GETTER) { if (LDKS.Object$prototype$__lookupGetter__) { asserted = true; if (undefined === LDKF.functionCall(LDKN.Object$prototype$__lookupGetter__, object, 1, identifier)) throw ERROR[0] } }
                                    if (code & LDKE.SETTER) { if (LDKS.Object$prototype$__lookupSetter__) { asserted = true; if (undefined === LDKF.functionCall(LDKN.Object$prototype$__lookupSetter__, object, 1, identifier)) throw ERROR[1] } }
                                    if (false === asserted && LDKS.Object$getOwnPropertyDescriptor) {
                                        var descriptor, prototype = object;

                                        // ...
                                        asserted = true;
                                        while (null !== prototype) {
                                            descriptor = LDKN.Object$getOwnPropertyDescriptor(prototype, identifier);

                                            // ...
                                            if (undefined === descriptor) {
                                                if (LDKS.Object$prototype$__proto__) prototype = prototype.__proto__;
                                                else if (LDKS.Object$getPrototypeOf) prototype = LDKN.Object$getPrototypeOf(prototype);
                                                else { asserted = false; break }
                                            }

                                            else {
                                                if (code & LDKE.GETTER) { if ("get" in descriptor) throw ERROR[0] }
                                                if (code & LDKE.SETTER) { if ("set" in descriptor) throw ERROR[1] }

                                                break
                                            }
                                        }
                                    }
                                }

                                ERROR = new LDKE.Error(LDKE.GETTER | LDKE.SETTER, "Support required for asserting getter/ setter object property attributes i.e.:\n\t`Object.getOwnPropertyDescriptor, Object.getPrototypeOf`, `Object.prototype.__lookupGetter__`, `Object.prototype.__lookupSetter__` features must be available (and un-modified) for assertion");
                                if (false === asserted) throw ERROR
                            }

                            // Error Handling
                            try { value = object[identifier] }
                            catch (error) {
                                // Logic > Error
                                if ((code & LDKE.INACCESSIBLE))
                                throw new LDKE.Error(LDKE.INACCESSIBLE, "Expected the `" + propertySource + "` " + propertyType + " to be an accessible property of " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`') + ":\n\t\"" + error.message + '"')
                            }

                            // ...
                            for (var iterator = +0; iterator != this.assertions.length; ++iterator)
                            if (false === this.assertions[iterator](value, identifier, object)) { value = ERROR; break }

                            for (var iterator = +0; iterator != this.forwards.length; ++iterator)
                            this.forwards[iterator](value)
                        }

                        // ... Error
                        else if (code & LDKE.MISSING)
                        throw new LDKE.Error(LDKE.MISSING, "Expected the `" + propertySource + "` " + propertyType + " to be available within " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`'));

                        // Return
                        return value
                    }
                };

            /* [Pseudo] Random Number Generator ->> 256-bit XOR-shift-rotate */
            function RNG(seed) {
                this.seed = new StaticArray(+0, 4, +0);

                for (var index = 4, state; index; ) {
                    state = seed + (0x9E3779B9 * (index >> 1)); {
                        state ^= state >> 15; state *= 0x85EBCA6B;
                        state ^= state >> 13; state *= 0xC2B2AE35;
                        state ^= state >> 16
                    }

                    this.seed[--index] = state;
                    this.seed[--index] = LDKM.trunc(state / /* --> 2 ** 32 */ 4294967296)
                }
            }
                RNG.prototype = {
                    seed: null,
                    next: function next() {
                        var evaluation = this.seed[0] + this.seed[3];
                        var subevaluation = this.seed[1] << 17;

                        this.seed[2] ^= this.seed[0];
                        this.seed[3] ^= this.seed[1];
                        this.seed[1] ^= this.seed[2];
                        this.seed[0] ^= this.seed[3];

                        this.seed[2] ^= subevaluation;
                        this.seed[3] = (this.seed[3] << 45) | (this.seed[3] >> 19);

                        return evaluation
                    }
                };

            /* Static Array */
            function StaticArray(length, maximum, fill, /* ... */ elements) {
                var iterator = maximum;

                this.length = length;

                while (iterator !== length) this[--iterator] = fill;
                while (iterator--) this[iterator] = arguments[iterator + 3]
            }
                StaticArray.prototype = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

            /* Static String */
            function StaticString(length, /* ... */ characters) {
                while (length !== this.length)
                this[this.length] = arguments[++this.length]
            }
                StaticString.prototype = {
                    0: '\0', 1: '\0', 2: '\0', 3: '\0', 4: '\0', 5: '\0', 6: '\0', 7: '\0', 8: '\0', 9: '\0', 10: '\0', 11: '\0', 12: '\0', 13: '\0', 14: '\0', 15: '\0', 16: '\0', 17: '\0', 18: '\0', 19: '\0', 20: '\0', 21: '\0', 22: '\0', 23: '\0', 24: '\0', 25: '\0', 26: '\0', 27: '\0', 28: '\0', 29: '\0', 30: '\0', 31: '\0', 32: '\0', 33: '\0', 34: '\0', 35: '\0', 36: '\0', 37: '\0', 38: '\0', 39: '\0', 40: '\0', 41: '\0', 42: '\0', 43: '\0', 44: '\0', 45: '\0', 46: '\0', 47: '\0', 48: '\0', 49: '\0', 50: '\0', 51: '\0', 52: '\0', 53: '\0', 54: '\0', 55: '\0', 56: '\0', 57: '\0', 58: '\0', 59: '\0', 60: '\0', 61: '\0', 62: '\0', 63: '\0', 64: '\0', 65: '\0', 66: '\0', 67: '\0', 68: '\0', 69: '\0', 70: '\0', 71: '\0', 72: '\0', 73: '\0', 74: '\0', 75: '\0', 76: '\0', 77: '\0', 78: '\0', 79: '\0', 80: '\0', 81: '\0', 82: '\0', 83: '\0', 84: '\0', 85: '\0', 86: '\0', 87: '\0', 88: '\0', 89: '\0', 90: '\0', 91: '\0', 92: '\0', 93: '\0', 94: '\0', 95: '\0', 96: '\0', 97: '\0', 98: '\0', 99: '\0', 100: '\0', 101: '\0', 102: '\0', 103: '\0', 104: '\0', 105: '\0', 106: '\0', 107: '\0', 108: '\0', 109: '\0', 110: '\0', 111: '\0', 112: '\0', 113: '\0', 114: '\0', 115: '\0', 116: '\0', 117: '\0', 118: '\0', 119: '\0', 120: '\0', 121: '\0', 122: '\0', 123: '\0', 124: '\0', 125: '\0', 126: '\0', 127: '\0', 128: '\0', 129: '\0', 130: '\0', 131: '\0', 132: '\0', 133: '\0', 134: '\0', 135: '\0', 136: '\0', 137: '\0', 138: '\0', 139: '\0', 140: '\0', 141: '\0', 142: '\0', 143: '\0', 144: '\0', 145: '\0', 146: '\0', 147: '\0', 148: '\0', 149: '\0', 150: '\0', 151: '\0', 152: '\0', 153: '\0', 154: '\0', 155: '\0', 156: '\0', 157: '\0', 158: '\0', 159: '\0', 160: '\0', 161: '\0', 162: '\0', 163: '\0', 164: '\0', 165: '\0', 166: '\0', 167: '\0', 168: '\0', 169: '\0', 170: '\0', 171: '\0', 172: '\0', 173: '\0', 174: '\0', 175: '\0', 176: '\0', 177: '\0', 178: '\0', 179: '\0', 180: '\0', 181: '\0', 182: '\0', 183: '\0', 184: '\0', 185: '\0', 186: '\0', 187: '\0', 188: '\0', 189: '\0', 190: '\0', 191: '\0', 192: '\0', 193: '\0', 194: '\0', 195: '\0', 196: '\0', 197: '\0', 198: '\0', 199: '\0', 200: '\0', 201: '\0', 202: '\0', 203: '\0', 204: '\0', 205: '\0', 206: '\0', 207: '\0', 208: '\0', 209: '\0', 210: '\0', 211: '\0', 212: '\0', 213: '\0', 214: '\0', 215: '\0', 216: '\0', 217: '\0', 218: '\0', 219: '\0', 220: '\0', 221: '\0', 222: '\0', 223: '\0', 224: '\0', 225: '\0', 226: '\0', 227: '\0', 228: '\0', 229: '\0', 230: '\0', 231: '\0', 232: '\0', 233: '\0', 234: '\0', 235: '\0', 236: '\0', 237: '\0', 238: '\0', 239: '\0', 240: '\0', 241: '\0', 242: '\0', 243: '\0', 244: '\0', 245: '\0', 246: '\0', 247: '\0', 248: '\0', 249: '\0', 250: '\0', 251: '\0', 252: '\0', 253: '\0', 254: '\0', 255: '\0',
                    length: +0,

                    toString: function toString() { return this.valueOf() },
                    valueOf: function valueOf() { var value = ""; for (var iterator = this.length - 1; ~iterator; --iterator) value = this[iterator] + value; return value }
                };

        /* Modification > ... */
            /* Constants */
            Constants.ARABIC_DIGITS = new StaticArray(10, 10, +0, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
            Constants.MAXIMUM_BITWISE_INTEGER = 2147483647; // --> (2 ** 31) - 1
            Constants.MAXIMUM_INTEGER = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368; // --> 2 ** 1024
            Constants.MAXIMUM_SAFE_INTEGER = 9007199254740991; // --> 2 ** 53
            Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE = [
                /* --> "[Command Line API]" */ new StaticString(18, '[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'),
                /* --> "[native code]"      */ new StaticString(13, '[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')
            ];
            Constants.TYPE_ERROR = (function TypeError() { try { null() } catch (error) { return error } })();

            /* Errors */
            Errors.Error = Error;

            /* Functions */
            Functions.functionBind = function functionBind(functor, thisArg) { return LDKF.functionCall(LDKN.Function$prototype$bind, functor, 1, thisArg /* , ... */) };
            Functions.functionCall = function functionCall(functor, thisArg, count, argument1, argument2, argument3, argument4, argument5, argument6, argument7, argument8, argument9, argument10, argument11, argument12, argument13, argument14, argument15, argument16, argument17, argument18, argument19, argument20, argument21, argument22, argument23, argument24, argument25, argument26, argument27, argument28, argument29, argument30, argument31, argument32, argument33, argument34, argument35, argument36, argument37, argument38, argument39, argument40, argument41, argument42, argument43, argument44, argument45, argument46, argument47, argument48, argument49, argument50, argument51, argument52, argument53, argument54, argument55, argument56, argument57, argument58, argument59, argument60, argument61, argument62, argument63, argument64, argument65, argument66, argument67, argument68, argument69, argument70, argument71, argument72, argument73, argument74, argument75, argument76, argument77, argument78, argument79, argument80, argument81, argument82, argument83, argument84, argument85, argument86, argument87, argument88, argument89, argument90, argument91, argument92, argument93, argument94, argument95, argument96, argument97, argument98, argument99, argument100, argument101, argument102, argument103, argument104, argument105, argument106, argument107, argument108, argument109, argument110, argument111, argument112, argument113, argument114, argument115, argument116, argument117, argument118, argument119, argument120, argument121, argument122, argument123, argument124, argument125, argument126, argument127, argument128, argument129, argument130, argument131, argument132, argument133, argument134, argument135, argument136, argument137, argument138, argument139, argument140, argument141, argument142, argument143, argument144, argument145, argument146, argument147, argument148, argument149, argument150, argument151, argument152, argument153, argument154, argument155, argument156, argument157, argument158, argument159, argument160, argument161, argument162, argument163, argument164, argument165, argument166, argument167, argument168, argument169, argument170, argument171, argument172, argument173, argument174, argument175, argument176, argument177, argument178, argument179, argument180, argument181, argument182, argument183, argument184, argument185, argument186, argument187, argument188, argument189, argument190, argument191, argument192, argument193, argument194, argument195, argument196, argument197, argument198, argument199, argument200, argument201, argument202, argument203, argument204, argument205, argument206, argument207, argument208, argument209, argument210, argument211, argument212, argument213, argument214, argument215, argument216, argument217, argument218, argument219, argument220, argument221, argument222, argument223, argument224, argument225, argument226, argument227, argument228, argument229, argument230, argument231, argument232, argument233, argument234, argument235, argument236, argument237, argument238, argument239, argument240, argument241, argument242, argument243, argument244, argument245, argument246, argument247, argument248, argument249, argument250, argument251, argument252) {
                // ... Return ->> As simultaneously DRY & optimized as this gets.
                LDKF.functionRebindCall();
                switch (count | +0) {
                    case +0: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg); break;
                    case 1: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1); break;
                    case 2: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2); break;
                    case 3: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2, argument3) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2, argument3); break;
                    case 4: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2, argument3, argument4) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2, argument3, argument4); break;
                    case 5: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2, argument3, argument4, argument5) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2, argument3, argument4, argument5); break;
                    case 6: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2, argument3, argument4, argument5, argument6) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2, argument3, argument4, argument5, argument6); break;
                    case 7: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2, argument3, argument4, argument5, argument6, argument7) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2, argument3, argument4, argument5, argument6, argument7); break;
                    case 8: return LDKS.Function$prototype$bind ? LDKN.Function$prototype$call(functor, thisArg, argument1, argument2, argument3, argument4, argument5, argument6, argument7, argument8) : LDKN.Function$prototype$call.call(LDKN.Function$prototype$call, functor, thisArg, argument1, argument2, argument3, argument4, argument5, argument6, argument7, argument8); break;
                }
            };

            Functions.functionRebindCall = function functionRebindCall() {
                // Logic ... ->> Asserts that `Function.prototype.call.call(...)` works as intended.
                if (false === LDKS.Function$prototype$bind) {
                    ERROR = new LDKE.Error(LDKE.MODIFIED, "Expected the `Function.prototype.call(...)` method to be evaluable & un-modified");

                    if (false === delete LDKN.Function.prototype["call"]) throw ERROR;
                    if ("call" in LDKN.Function$prototype$call && "call" in {}) throw ERROR;

                    LDKN.Function.prototype.call = LDKN.Function$prototype$call
                }
            };

            Functions.functionToString = function functionToString(functor) { return LDKF.functionCall(LDKN.Function$prototype$toString, functor) };
            Functions.inspectFeature = function inspectFeature(object, identifier) { return new Inspector(identifier, object) };
            Functions.isNativeFunction = function isNativeFunction(functor, name) {
                // Logic
                if ("function" === typeof functor || "object" === typeof functor) {
                    // Constant > Source
                    var source = false === LDKS.Function$prototype$call ? "" + functor : LDKF.functionToString(functor);

                    // Logic > ... ->> Presume the `functor` source
                    if (false === LDKS.String$prototype$charAt) {
                        for (var iterator = LDKC.NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE.length - 1; ~iterator; --iterator)
                        if (
                            source === "function " + (null === name ? "" : name) + "() { " + LDKC.NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE[iterator] + " }" ||
                            source === "function " + (null === name ? "" : name) + "() {\n    " + LDKC.NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE[iterator] + "\n}" ||
                            source === "\nfunction " + (null === name ? "" : name) + "() {\n    " + LDKC.NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE[iterator] + "\n}\n"
                        ) return true
                    }

                    else { /* PENDING (Lapys) */ }
                }

                // Return
                return false
            };

            Functions.numberIsFinite = function numberIsFinite(number) { return Infinity !== number && -Infinity !== number };
            Functions.numberIsNaN = function numberIsNaN(number) { return number !== number };
            Functions.numberIsSafe = function numberIsSafe(number) { return LDKF.numberIsFinite(number) && false === LDKF.numberIsNaN(number) };
            Functions.numberIsSafeInteger = function numberIsSafeInteger(number) { return -LDKC.MAXIMUM_SAFE_INTEGER <= number && number <= LDKC.MAXIMUM_SAFE_INTEGER };
            Functions.numberToFraction = function numberToFraction(number) {
                var fraction = new Fraction(LDKM.trunc(number), +0, 1);
                var mantissa = number - fraction.whole;

                // Logic
                if (0.0 !== mantissa) {
                    var divisor, precision = 1e15;

                    // ... Update > Divisor
                    for (var a = precision, b = LDKM.round(mantissa * precision); ; divisor = a ? a : b) {
                        if (+0 === a || +0 === b) break;
                        a < b ? b %= a : a %= b
                    }

                    // Modification > Fraction > (Denominator, Numerator)
                    fraction.denominator = precision / divisor;
                    fraction.numerator = LDKM.round(fraction.denominator * mantissa)
                }

                // Return
                return fraction
            };

            Functions.numberToString = function numberToString(number) {
                var characteristics = number, mantissa = number * 10;
                var string = "";

                // ...
                if (characteristics < 1) string = '0';
                while (characteristics >= 1) {
                    var digit = characteristics % 10;

                    if (digit < 1) string = '0' + string;
                    else if (digit < 2) string = '1' + string;
                    else if (digit < 3) string = '2' + string;
                    else if (digit < 4) string = '3' + string;
                    else if (digit < 5) string = '4' + string;
                    else if (digit < 6) string = '5' + string;
                    else if (digit < 7) string = '6' + string;
                    else if (digit < 8) string = '7' + string;
                    else if (digit < 9) string = '8' + string;
                    else string = '9' + string;

                    // ...
                    characteristics /= 10
                }

                // ...
                for (var iterator = 15, trail = +0, whole = true; iterator; --iterator) {
                    var digit = mantissa % 10;

                    if (+0 !== digit) {
                        if (whole) { string += '.'; whole = false }
                        while (trail--) string = string + '0';

                        if (digit < 2) string = string + '1';
                        else if (digit < 3) string = string + '2';
                        else if (digit < 4) string = string + '3';
                        else if (digit < 5) string = string + '4';
                        else if (digit < 6) string = string + '5';
                        else if (digit < 7) string = string + '6';
                        else if (digit < 8) string = string + '7';
                        else if (digit < 9) string = string + '8';
                        else string = string + '9'
                    }

                    // ...
                    mantissa *= 10;
                    trail = (+0 === digit) * (1 + trail)
                }

                // ...
                return string
            };

            Functions.objectGetPrototype = function objectGetPrototype(object) {
                if (LDKS.Object$prototype$__proto__) return object.__proto__;
                else if (LDKS.Object$getPrototypeOf) return LDKN.Object$getPrototypeOf(object);

                return ERROR
            };

            Functions.objectSetPrototype = function objectSetPrototype(object, prototype) {
                if (LDKS.Object$prototype$__proto__) object.__proto__ = prototype;
                else if (LDKS.Object$setPrototypeOf) LDKN.Object$setPrototypeOf(object, prototype);

                return ERROR
            };

            /* Mathematics */
            Mathematics.abs = function abs(number) { return number < +0 ? -number : number };
            Mathematics.acos = function acos(number) { return LDKM.ETA - LDKM.asin(number) };
            Mathematics.acosh = function acosh(number) { return LDKM.ln(number + LDKM.sqrt((number * number) - 1)) };
            Mathematics.acot = function acot(number) { return LDKM.ETA - LDKM.atan(number) };
            Mathematics.acoth = function acoth(number) { return LDKM.ln((number + 1) / (number - 1)) / 2 };
            Mathematics.acsc = function acsc(number) { return LDKM.ETA - LDKM.asec(number) };
            Mathematics.acsch = function acsch(number) { return LDKM.ln((1 + LDKM.sqrt((1 + number) * (1 + number))) / number) };
            Mathematics.asec = function asec(number) { return LDKM.acos(1 / number) };
            Mathematics.asech = function asech(number) { return LDKM.ln((1 + LDKM.sqrt((1 - number) * (1 - number))) / number) };
            Mathematics.asin = function asin(number) {
                var evaluation = number;

                var currentTermDenominator = 1, currentTermNumerand = number, currentTermNumerator = 1;
                var recent;

                // ...
                for (var iterator = +0; ; ) {
                    currentTermNumerator *= ++iterator;
                    currentTermNumerand *= number * number;
                    currentTermDenominator *= ++iterator;

                    recent = evaluation;
                    evaluation += (currentTermNumerator / currentTermDenominator) * (currentTermNumerand / (iterator + 1));

                    // UPDATE (Lapys) -> Requires a better halt to the series used here.
                    if (false === LDKF.numberIsSafe(evaluation)) { evaluation = recent; break }
                }

                // ...
                return evaluation
            };

            Mathematics.asinh = function asinh(number) { return LDKM.ln(number + LDKM.sqrt((number * number) + 1)) };
            Mathematics.atan = function atan(number) { return LDKM.asin(number / LDKM.sqrt((number * number) + 1)) };
            Mathematics.atanh = function atanh(number) { return LDKM.ln((1 + number) / (1 - number)) / 2 };
            Mathematics.cbrt = function cbrt(number) { return LDKM.iroot(number, 3) };
            Mathematics.ceil = function ceil(number) { return LDKM.trunc(number) + (number >= +0) };
            Mathematics.clamp = function clamp(number, minimum, maximum) { return LDKM.imin(maximum, LDKM.imax(number, minimum)) };
            Mathematics.cos = function cos(number) { return LDKM.sin(LDKM.ETA - number) };
            Mathematics.cot = function cot(number) { return 1 / LDKM.tan(number) };
            Mathematics.coth = function coth(number) { return 1 / LDKM.tanh(number) };
            Mathematics.csc = function csc(number) { return 1 / LDKM.sin(number) };
            Mathematics.csch = function csch(number) { return 1 / LDKM.sinh(number) };
            Mathematics.fact = function fact(number) { var evaluation = 1; for (var number = number; number; --number) evaluation *= number; return evaluation };
            Mathematics.exp = function exp(number) {
                if (number > 1) {
                    var currentTermDenominator = 1, currentTermNumerator = 1, recentTerm = 0;
                    var number = number, recent, signed = number < +0;

                    var evaluation = +0;

                    // ...
                    if (signed) number = -number;
                    for (var iterator = 1; ; ++iterator) {
                        recent = evaluation;
                        recentTerm = currentTermNumerator / currentTermDenominator;

                        // ...
                        evaluation += recentTerm;
                        if (false === LDKF.numberIsSafe(evaluation)) { evaluation = recent; break }

                        // ...
                        currentTermNumerator *= number;
                        currentTermDenominator *= iterator
                    }

                    return signed ? 1 / evaluation : evaluation
                }

                return LDKM.pow(LDKM.E, number)
            };

            Mathematics.floor = function floor(number) { return LDKM.trunc(number) - (number < +0) };
            Mathematics.iabs = function integer_abs(integer) { return (integer ^ (integer >> 31)) - (integer >> 31) };
            Mathematics.icbrt = function integer_cbrt(integer) {
                var evaluation = Infinity;

                for (
                    var approximation = 2048; approximation < evaluation;
                    approximation = ((2 * evaluation) + (integer / (evaluation * evaluation))) / 3
                ) evaluation = approximation;

                return evaluation
            };

            Mathematics.imax = function integer_max(numberA, numberB) { return numberA > numberB ? numberA : numberB };
            Mathematics.imin = function integer_min(numberA, numberB) { return numberA < numberB ? numberA : numberB };
            Mathematics.ipow = function integer_pow(base, exponent) {
                var evaluation = 1;
                var signed = exponent < +0;

                if (signed) exponent = -exponent;
                while (true) {
                    if (exponent % 2) evaluation *= base;
                    exponent = LDKM.trunc(exponent / 2);

                    if (+0 === exponent) break;
                    base *= base
                }

                return signed ? 1 / evaluation : evaluation
            };

            Mathematics.iroot = function integer_root(number, exponent) {
                var currentTerm = 1, signed = exponent < +0;
                var evaluation = +0;

                if (signed) exponent = -exponent;
                for (var exponent = --exponent; ; currentTerm = evaluation) {
                    evaluation = ((currentTerm * exponent) + (number / LDKM.ipow(currentTerm, exponent))) / (exponent + 1);
                    if (1e-15 > LDKM.abs(evaluation - currentTerm)) break
                }

                return signed ? 1 / evaluation : evaluation
            };

            Mathematics.isqrt = function isqrt(integer) {
                var evaluation = +0;

                for (var shift = 32; shift; ) {
                    shift -= 2;

                    evaluation <<= 1;
                    evaluation |= 1;
                    evaluation ^= evaluation * evaluation > (integer >> shift);
                }

                return evaluation
            };

            Mathematics.itrunc = function itrunc(integer) { return integer | +0 };
            Mathematics.lerp = function lerp(ratio, start, end) { return start + (ratio * (end - start)) };
            Mathematics.ln = function ln(number) {
                if (+0 !== number) {
                    var evaluation = +0;
                    var currentTerm, currentTermNumerator, recentTerm = +0;
                    var number = number, factor = +0 /* ->> of 10. */, within = true /* --> 0 > x < 2 */;

                    // ...
                    while (number <= 1e-1) { --factor; number *= 10 }
                    while (number >= 1e+1) { ++factor; number /= 10 }

                    if (number >= 2) { number = 1 / number; within = false }
                    --number;

                    // ...
                    currentTerm = number;
                    currentTermNumerator = number;

                    for (var iterator = 2; 1e-15 < LDKM.abs(currentTerm - recentTerm); ++iterator) {
                        evaluation += currentTerm * (iterator % 2 ? -1 : 1);

                        recentTerm = currentTerm;
                        currentTerm = (currentTermNumerator *= number) / iterator
                    }

                    // ...
                    return (LDKM.LN10 * factor) + (evaluation * (within ? 1 : -1))
                }

                return Infinity
            };

            Mathematics.log = function log(number, base) { return LDKM.ln(number) / (undefined === base || LDKM.E === base ? 1 : LDKM.ln(base)) };
            Mathematics.max = function max() {
                var evaluation = -Infinity;

                for (var iterator = arguments.length - 1; ~iterator; --iterator)
                evaluation = LDKM.imax(evaluation, arguments[iterator]);

                return evaluation
            };

            Mathematics.min = function min() {
                var evaluation = Infinity;

                for (var iterator = arguments.length - 1; ~iterator; --iterator)
                evaluation = LDKM.imin(evaluation, arguments[iterator]);

                return evaluation
            };

            Mathematics.mod = function mod(dividend, divisor) { return ((dividend % divisor) + divisor) % divisor };
            Mathematics.perc = function perc(number, exponent) { return number * ((undefined === exponent ? 1 : exponent) / 100) };
            Mathematics.pow = function pow(number, exponent) { return exponent % 1 ? LDKM.root(number, 1 / exponent) : LDKM.ipow(number, exponent) };
            Mathematics.random = function random() { return LDKC.RANDOMIZER.next() };
            Mathematics.root = function root(number, exponent) {
                if (+0 === ((1 / exponent) % 1)) return LDKM.ipow(number, 1 / exponent);
                else if (exponent % 1) {
                    with (LDKF.numberToFraction(exponent).toImproper())
                    while (true) {
                        var evaluation = LDKM.ipow(number, denominator);
                        if (Infinity !== evaluation) return LDKM.iroot(evaluation, numerator);

                        denominator = LDKM.trunc(denominator / 10);
                        numerator = LDKM.trunc(numerator / 10)
                    }
                }

                return LDKM.iroot(number, exponent)
            };

            Mathematics.round = function round(number) {
                var characteristics = LDKM.trunc(number);
                var mantissa = number - characteristics;

                if (mantissa >= 0.5) return characteristics + 1;
                if (mantissa < -0.5) return characteristics - 1;

                return characteristics
            };

            Mathematics.sec = function sec(number) { return 1 / LDKM.cos(number) };
            Mathematics.sech = function sech(number) { return 1 / LDKM.cosh(number) };
            Mathematics.sin = function sin(number) {
                var evaluation = +0;

                var iterator = 1, signed = -1 === LDKM.ipow(-1, LDKM.trunc(number / LDKM.PI)), number = number % LDKM.PI;
                var currentTerm, currentTermDenominator = 1, currentTermNumerator = number;

                // ...
                do {
                    currentTerm = evaluation;
                    evaluation += (currentTermNumerator / currentTermDenominator) * (signed ? -1 : 1);

                    currentTermDenominator *= ++iterator;
                    currentTermDenominator *= ++iterator;
                    currentTermNumerator *= number * number;
                    signed = false === signed
                } while (1e-15 < LDKM.abs(currentTerm - evaluation));

                // ...
                return evaluation
            };

            Mathematics.sinh = function sinh(number) { return (LDKM.exp(number) - LDKM.exp(-number)) / 2 };
            Mathematics.sqrt = function sqrt(number) { return LDKM.iroot(number, 2) };
            Mathematics.tan = function tan(number) { return LDKM.sin(number) / LDKM.cos(number) };
            Mathematics.tanh = function tanh(number) { return LDKM.sinh(number) / LDKM.cosh(number) };
            Mathematics.trunc = function trunc(number) {
                var evaluation;
                var counter = 1, signed = number < +0;

                // ...
                if (signed) number = -number;

                while (counter < number) counter *= 2;
                for (evaluation = +0; counter >= 1; counter /= 2) evaluation += counter * (number >= counter + evaluation)

                // ...
                return evaluation * (signed ? -1 : 1)
            };

            Mathematics.wrap = function wrap(number, start, end) { return LDKM.mod(number - start, end - (start - 1)) };

            /* Natives */
            Natives.Function = LDKF.inspectFeature(GLOBAL, "Function")
                .assert(function functor(Function) {
                    try { return new Function("Function", "return Function instanceof Function")(Function) }
                    catch (error) {}

                    /* PENDING (Lapys) */
                })
            .evaluate(LDKE.INACCESSIBLE | LDKE.MISSING, LDKF.CONSTRUCTOR, null);

            Natives.Function$prototype$toString = LDKF.inspectFeature(LDKN.Function.prototype, "toString")
                .assert(function(toString) {
                    try { if ("function" === typeof toString && false === ("prototype" in toString) && toString === toString.toString && LDKF.isNativeFunction(toString, "toString")) { try { toString() } catch (error) { toString = null } if (null === toString) return true } }
                    catch (error) { /* Do nothing... */ }

                    throw new LDKE.Error(LDKE.MODIFIED, "Expected the `Function.prototype.toString(...)` method to be evaluable & un-modified")
                })
            .evaluate(LDKE.INACCESSIBLE | LDKE.MISSING, LDKF.METHOD, ["Function", "prototype", "toString"]);

            Natives.Function$prototype$call = LDKF.inspectFeature(LDKN.Function.prototype, "call")
                .assert(function(call) {
                    try { if ("function" === typeof call && call.toString === LDKN.Function$prototype$toString && LDKF.isNativeFunction(call, "call")) return true }
                    catch (error) { /* Do nothing... */ }

                    throw new LDKE.Error(LDKE.MODIFIED, "Expected the `Function.prototype.call(...)` method to be evaluable & un-modified")
                })
                .then(function() { LDKS.Function$prototype$call = true })
            .evaluate(LDKE.INACCESSIBLE | LDKE.MISSING, LDKF.METHOD, ["Function", "prototype", "call"]);

            Natives.Function$prototype$bind = LDKF.inspectFeature(LDKN.Function.prototype, "bind")
                .assert(LDKF.isNativeFunction)
                .then(function(bind) {
                    LDKF.functionRebindCall = function functionRebindCall() {};

                    LDKN.Function$prototype$bind = bind;
                    LDKN.Function$prototype$call = LDKF.functionBind(LDKN.Function$prototype$call, LDKN.Function$prototype$call);

                    LDKS.Function$prototype$bind = true
                })
            .evaluate(LDKE.INACCESSIBLE, LDKF.METHOD, ["Function", "prototype", "bind"]);

            /* Supports */
            Supports.Object$prototype$__proto__ = (function() {
                var object = {__proto__: ANY};

                delete object["__proto__"];
                return ANY === object.__proto__
            })();

        /* ... */
        Constants.RANDOMIZER = new RNG(0x45);
        if (LDKS.Object$prototype$__proto__ || LDKS.Object$setPrototypeOf) {
            LDKF.objectSetPrototype(LapysDevelopmentKit, null)
        }
    }
})();

/* [LapysJS] ... --- NOTE (Lapys) -> Library object (public interface) */
LapysJS = new (
    (function(prototype) {
        function LapysJS() {}

        LapysJS.prototype = prototype;
        delete prototype["constructor"];
        delete prototype["__proto__"];

        return LapysJS
    })({
        author: "",
        description: "",
        version: "",

        Components: {},
        __proto__: null
    })
);

/* Modification > ... */
with (LapysDevelopmentKit.prototype)
with (Directives) (function(LDKF, LDKM, LDKN) {

})(Functions, Mathematics, Natives);

/* Debugging */
var LDK = LapysDevelopmentKit.prototype; {
    var LDKC = LDK.Constants;
    var LDKE = LDK.Errors;
    var LDKF = LDK.Functions;
    var LDKM = LDK.Mathematics;
    var LDKN = LDK.Natives;
    var LDKU = LDK.Components;
    var LDKS = LDK.Supports;
}

/* Deletion */
LapysDevelopmentKit.prototype = null;

// (function() {
//     if (
//         "toString" in Function.prototype && (
//             "function" === typeof Function.prototype.toString && (
//                 "" + Function.prototype.toString == "function toString() { [native code] }" ||
//                 "" + Function.prototype.toString == "function toString() {\n    [native code]\n}" ||
//                 "" + Function.prototype.toString == "\nfunction toString() {\n    [native code]\n}\n"
//             )
//         )
//     ) if (
//         "call" in Function.prototype.toString && (
//             "function" === typeof Function.prototype.toString.call && (
//                 "" + Function.prototype.toString.call == "function call() { [native code] }" ||
//                 "" + Function.prototype.toString.call == "function call() {\n    [native code]\n}" ||
//                 "" + Function.prototype.toString.call == "\nfunction call() {\n    [native code]\n}\n"
//             )
//         )
//     ) if ("function" === typeof Object && (
//         Function.prototype.toString.call(Object) == "function Object() { [native code] }" ||
//         Function.prototype.toString.call(Object) == "function Object() {\n    [native code]\n}" ||
//         Function.prototype.toString.call(Object) == "\nfunction Object() {\n    [native code]\n}\n"
//     )) {
//         var HAS_CREATE_ELEMENT_METHOD = false;

//         if (
//             "toString" in Object.prototype && (
//                 "function" === typeof Object.prototype.toString && (
//                     Function.prototype.toString.call(Object.prototype.toString) == "function toString() { [native code] }" ||
//                     Function.prototype.toString.call(Object.prototype.toString) == "function toString() {\n    [native code]\n}" ||
//                     Function.prototype.toString.call(Object.prototype.toString) == "\nfunction toString() {\n    [native code]\n}\n"
//                 )
//             )
//         ) if (
//             "call" in Object.prototype.toString && (
//                 "function" === typeof Object.prototype.toString.call && (
//                     Function.prototype.toString.call(Object.prototype.toString.call) == "function call() { [native code] }" ||
//                     Function.prototype.toString.call(Object.prototype.toString.call) == "function call() {\n    [native code]\n}" ||
//                     Function.prototype.toString.call(Object.prototype.toString.call) == "\nfunction call() {\n    [native code]\n}\n"
//                 )
//             )
//         ) {
//             if ("object" === typeof document && (
//                 Object.prototype.toString.call(document) == "[object]" ||
//                 Object.prototype.toString.call(document) == "[object Document]" ||
//                 Object.prototype.toString.call(document) == "[object HTMLDocument]"
//             )) HAS_CREATE_ELEMENT_METHOD = "createElement" in document && (
//                 "function" === typeof document.createElement && (
//                     Function.prototype.toString.call(document.createElement) == "function createElement() { [native code] }" ||
//                     Function.prototype.toString.call(document.createElement) == "function createElement() {\n    [native code]\n}" ||
//                     Function.prototype.toString.call(document.createElement) == "\nfunction createElement() {\n    [native code]\n}\n"
//                 )
//             )
//         }

//         Supports.Object$prototype$__defineGetter__ = "function" === typeof __defineGetter__ && (
//             Function.prototype.toString.call(__defineGetter__) == "function __defineGetter__() { [native code] }" ||
//             Function.prototype.toString.call(__defineGetter__) == "function __defineGetter__() {\n    [native code]\n}" ||
//             Function.prototype.toString.call(__defineGetter__) == "\nfunction __defineGetter__() {\n    [native code]\n}\n"
//         );

//         Supports.Object$prototype$__defineSetter__ = "function" === typeof __defineSetter__ && (
//             Function.prototype.toString.call(__defineSetter__) == "function __defineSetter__() { [native code] }" ||
//             Function.prototype.toString.call(__defineSetter__) == "function __defineSetter__() {\n    [native code]\n}" ||
//             Function.prototype.toString.call(__defineSetter__) == "\nfunction __defineSetter__() {\n    [native code]\n}\n"
//         );

//         Supports.Object$prototype$__lookupGetter__ = "function" === typeof __lookupGetter__ && (
//             Function.prototype.toString.call(__lookupGetter__) == "function __lookupGetter__() { [native code] }" ||
//             Function.prototype.toString.call(__lookupGetter__) == "function __lookupGetter__() {\n    [native code]\n}" ||
//             Function.prototype.toString.call(__lookupGetter__) == "\nfunction __lookupGetter__() {\n    [native code]\n}\n"
//         );

//         Supports.Object$prototype$__lookupSetter__ = "function" === typeof __lookupSetter__ && (
//             Function.prototype.toString.call(__lookupSetter__) == "function __lookupSetter__() { [native code] }" ||
//             Function.prototype.toString.call(__lookupSetter__) == "function __lookupSetter__() {\n    [native code]\n}" ||
//             Function.prototype.toString.call(__lookupSetter__) == "\nfunction __lookupSetter__() {\n    [native code]\n}\n"
//         );

//         "create" in Object && (
//             "function" === typeof Object.create && (
//                 Function.prototype.toString.call(Object.create) == "function create() { [native code] }" ||
//                 Function.prototype.toString.call(Object.create) == "function create() {\n    [native code]\n}" ||
//                 Function.prototype.toString.call(Object.create) == "\nfunction create() {\n    [native code]\n}\n"
//             )
//         ) && (function assertion() {
//             var count = +0;
//             for (var i in Object.create(null)) ++count;
//             Supports.Object$create = +0 == count
//         })();

//         "defineProperty" in Object && (
//             "function" === typeof Object.defineProperty && (
//                 Function.prototype.toString.call(Object.defineProperty) == "function defineProperty() { [native code] }" ||
//                 Function.prototype.toString.call(Object.defineProperty) == "function defineProperty() {\n    [native code]\n}" ||
//                 Function.prototype.toString.call(Object.defineProperty) == "\nfunction defineProperty() {\n    [native code]\n}\n"
//             )
//         ) && (function assertion() {
//             Supports.Element$defineProperty = true;
//             Supports.Object$defineProperty = true;

//             try { Object.defineProperty({}, "", {configurable: true, enumerable: true, value: undefined, writable: true}) }
//             catch (error) { Supports.Object$defineProperty = false }

//             if (HAS_CREATE_ELEMENT_METHOD) {
//                 try {
//                     Object.defineProperty(document.createElement('a'), "", {configurable: true, enumerable: true, value: undefined, writable: true}),
//                     Object.defineProperty(document.createElement('a'), "", {configurable: true, enumerable: false, get: function() {}, set: function() {}})
//                 } catch (error) { Supports.Element$defineProperty = false }
//             }
//         })();

//         "getOwnPropertyDescriptor" in Object && (
//             "function" === typeof Object.getOwnPropertyDescriptor && (
//                 Function.prototype.toString.call(Object.getOwnPropertyDescriptor) == "function getOwnPropertyDescriptor() { [native code] }" ||
//                 Function.prototype.toString.call(Object.getOwnPropertyDescriptor) == "function getOwnPropertyDescriptor() {\n    [native code]\n}" ||
//                 Function.prototype.toString.call(Object.getOwnPropertyDescriptor) == "\nfunction getOwnPropertyDescriptor() {\n    [native code]\n}\n"
//             )
//         ) && (function assertion() {
//             Supports.Element$getOwnPropertyDescriptor = true;
//             Supports.Object$getOwnPropertyDescriptor = true;

//             try { Object.getOwnPropertyDescriptor({}, "") }
//             catch (error) { Supports.Object$getOwnPropertyDescriptor = false }

//             if (HAS_CREATE_ELEMENT_METHOD) {
//                 try { Object.getOwnPropertyDescriptor(document.createElement('a'), "") }
//                 catch (error) { Supports.Element$getOwnPropertyDescriptor = false }
//             }
//         })()
//     }
// })()
