/* Global ...
    --- NOTE ---
        #Lapys:
          - Code standard built for all JavaScript versions.
          - Native features are validated, or internally shimmed otherwise.

    --- RULES ---
        #Lapys:
          - Code indirection should be minimal.
          - Private functions should not rely on the exotic `arguments` object.
*/
function LapysDevelopmentKit() { /* [private code] */ return '[' + LapysJS.version + "]: " + LapysJS.description }
var LapysJS = null;

/* [Lapys Development Kit] ... ->> Library SDK (private interface) */
(function() {
    /* Polyfill */
    var Infinity = 1 / +0;
    var NaN = +0 / +0;
    var undefined = void +0;

    /* Definition ->> `null` depicts functions & objects, whilst `undefined` represents all else. */
    LapysDevelopmentKit.prototype = {
        // [Components]
        Components: {},

        // [Constants]
        Constants: {
            ArabicNumeralDigits: null,
            NativeFunctionObfuscatedSourceCode: null
        },

        // [Directives]
        Directives: {
            ANY: {}, // ->> Represents a non-unique value. (though its value is distinct)
            CURRENT: null, // ->> Represents a local dummy or temporary.
            ERROR: {}, // ->> Represents a non-halting, non-throwable, silent exception. (always a unique value)
            FLAG: null, // ->> Identifies default or meta-arguments to functions.
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
            functionApply: null,
            functionBind: null,
            functionToString: null,
            inspectFeature: null, "CONSTRUCTOR": 0x1, "METHOD": 0x2,
            isNativeFunction: null,
            numberToInteger: null, "BITWISE": 0x1,
            numberToString: null, "DECIMAL": 0x1, "SIGNED": 0x2, "UNSIGNED": 0x3,
            stringAt: null,
            toString: null
        },

        // [Mathematics]
        Mathematics: {},

        // [Natives]
        Natives: {
            Function$prototype$apply: null,
            Function$prototype$bind: null,
            Function$prototype$toString: null,
            Object$create: null,
            Object$defineProperty: null,
            Object$getOwnPropertyDescriptor: null,
            Object$getPrototypeOf: null,
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
            Function$prototype$apply: false,
            Function$prototype$bind: false,
            Object$create: false,
            Object$defineProperty: false,
            Object$getOwnPropertyDescriptor: false,
            Object$getPrototypeOf: false,
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
        /* Constant > ... ->> Constants which have only have functional meaning. */
        var APPLIED_ARGUMENTS = [null, null], ARGUMENTS = [];
        var TYPE_ERROR = (function() { try { null() } catch (error) { return error } })();

        /* Class > ... --- REDACT (Lapys) */
            /* Error */
            function Error(name, message) {
                // ... Update > Error
                ERROR = TYPE_ERROR; {
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

                    evaluate: function evaluate(code) {
                        // Constant > ((Identifier, Object), (Syntax, Type))
                        // : Initialization > (... Source, Value)
                        var identifier = this.identifier, object = this.object;
                        var syntax = arguments[2], type = arguments[1];

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
                            if (false === this.assertions[iterator](CURRENT = value, identifier, object)) { value = ERROR; break }

                            for (var iterator = +0; iterator != this.forwards.length; ++iterator)
                            (CURRENT = value), this.forwards[iterator]()
                        }

                        // ... Error
                        else if (code & LDKE.MISSING)
                        throw new LDKE.Error(LDKE.MISSING, "Expected the `" + propertySource + "` " + propertyType + " to be available within " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`'));

                        // Return
                        return value
                    }
                };

            /* Static Array */
            function StaticArray(length, maximum, fill, /* ... */ elements) {
                var iterator = maximum;

                this.length = length;

                while (iterator ^ length) this[--iterator] = fill;
                while (iterator--) this[iterator] = arguments[iterator + 3]
            }
                StaticArray.prototype = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

            /* Static String */
            function StaticString(length, /* ... */ characters) {
                while (length ^ this.length)
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
            Constants.ArabicNumeralDigits = new StaticArray(10, 10, +0, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
            Constants.NativeFunctionObfuscatedSourceCode = [
                /* --> "[Command Line API]" */ new StaticString(18, '[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'),
                /* --> "[native code]"      */ new StaticString(13, '[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')
            ];

            /* Errors */
            Errors.Error = Error;

            /* Functions */
            Functions.functionApply = function functionApply(functor, thisArg) {
                // Initialization > Count
                var count = arguments[2] | +0;

                // Update > (Applied) Arguments ->> Were `ARGUMENTS` allowed not to be an `Array` instance, a single `StaticArray` object would have otherwise been used.
                if (ARGUMENTS.length > count) { while (count--) ARGUMENTS[count] = arguments[count + 3] }
                else switch (count) {
                    case +0: ARGUMENTS.length = +0; break;
                    case 1: ARGUMENTS = [arguments[3]]; break;
                    case 2: ARGUMENTS = [arguments[3], arguments[4]]; break;
                    case 3: ARGUMENTS = [arguments[3], arguments[4], arguments[5]]; break;
                    case 4: ARGUMENTS = [arguments[3], arguments[4], arguments[5], arguments[6]]; break;
                    case 5: ARGUMENTS = [arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]]; break;
                    case 6: ARGUMENTS = [arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]]; break;
                    case 7: ARGUMENTS = [arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]]; break;
                    case 8: ARGUMENTS = [arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[8], arguments[10]]; break;
                    /* WARN (Lapys) -> Maximum of `255 - 3` allowed arguments... */
                }

                APPLIED_ARGUMENTS[+0] = thisArg;
                APPLIED_ARGUMENTS[1] = ARGUMENTS;

                // Logic
                if (false === LDKS.Function$prototype$bind) {
                    ERROR = new LDKE.Error(LDKE.MODIFIED, "Expected the `Function.prototype.apply(...)` method to be evaluable & un-modified"); {
                        if (false === delete LDKN.Function.prototype["apply"]) throw ERROR;
                        if ("apply" in LDKN.Function$prototype$apply && "apply" in {}) throw ERROR
                    }

                    LDKN.Function.prototype.apply = LDKN.Function$prototype$apply;
                    return LDKN.Function$prototype$apply.apply(functor, APPLIED_ARGUMENTS)
                }

                // Return
                return LDKN.Function$prototype$apply(functor, APPLIED_ARGUMENTS)
            };

            Functions.functionBind = function functionBind(functor, thisArg) { return LDKF.functionApply(LDKN.Function$prototype$bind, functor, 1, thisArg /* , ... */) };
            Functions.functionToString = function functionToString(functor) { return LDKF.functionApply(LDKN.Function$prototype$toString, functor) };
            Functions.inspectFeature = function inspectFeature(object, identifier) { return new Inspector(identifier, object) };

            Functions.isNativeFunction = function isNativeFunction(functor, name) {
                // Logic
                if ("function" === typeof functor || "object" === typeof functor) {
                    // Constant > Source
                    var source = false === LDKS.Function$prototype$apply ? "" + functor : LDKF.functionToString(functor);

                    // Logic > ... ->> Presume the `functor` source
                    if (false === LDKS.String$prototype$charAt) {
                        for (var iterator = LDKC.NativeFunctionObfuscatedSourceCode.length - 1; ~iterator; --iterator)
                        if (
                            source === "function " + (null === name ? "" : name) + "() { " + LDKC.NativeFunctionObfuscatedSourceCode[iterator] + " }" ||
                            source === "function " + (null === name ? "" : name) + "() {\n    " + LDKC.NativeFunctionObfuscatedSourceCode[iterator] + "\n}" ||
                            source === "\nfunction " + (null === name ? "" : name) + "() {\n    " + LDKC.NativeFunctionObfuscatedSourceCode[iterator] + "\n}\n"
                        ) return true
                    }
                }

                // Return
                return false
            };

            /* Natives */
            Natives.Function = LDKF.inspectFeature(GLOBAL, "Function")
                .assert(function functor() {
                    try { return new CURRENT("Function", "return Function instanceof Function")(CURRENT) }
                    catch (error) {}

                    /* ... */
                })
            .evaluate(LDKE.INACCESSIBLE | LDKE.MISSING, FLAG = LDKF.CONSTRUCTOR, FLAG = null);

            Natives.Function$prototype$toString = LDKF.inspectFeature(LDKN.Function.prototype, "toString")
                .assert(function() {
                    try { if ("function" === typeof CURRENT && false === ("prototype" in CURRENT) && CURRENT === CURRENT.toString && LDKF.isNativeFunction(CURRENT, "toString")) { try { CURRENT() } catch (error) { CURRENT = null } if (null === CURRENT) return true } }
                    catch (error) { /* Do nothing... */ }

                    throw new LDKE.Error(LDKE.MODIFIED, "Expected the `Function.prototype.toString(...)` method to be evaluable & un-modified")
                })
            .evaluate(LDKE.INACCESSIBLE | LDKE.MISSING, FLAG = LDKF.METHOD, FLAG = ["Function", "prototype", "toString"]);

            Natives.Function$prototype$apply = LDKF.inspectFeature(LDKN.Function.prototype, "apply")
                .assert(function() {
                    try { if ("function" === typeof CURRENT && CURRENT.toString === LDKN.Function$prototype$toString && LDKF.isNativeFunction(CURRENT, "apply")) return true }
                    catch (error) { /* Do nothing... */ }

                    throw new LDKE.Error(LDKE.MODIFIED, "Expected the `Function.prototype.apply(...)` method to be evaluable & un-modified")
                })
                .then(function() { LDKS.Function$prototype$apply = true })
            .evaluate(LDKE.INACCESSIBLE | LDKE.MISSING, FLAG = LDKF.METHOD, FLAG = ["Function", "prototype", "apply"]);

            Natives.Function$prototype$bind = LDKF.inspectFeature(LDKN.Function.prototype, "bind")
                .assert(LDKF.isNativeFunction)
                .then(function() {
                    LDKN.Function$prototype$bind = CURRENT;
                    LDKN.Function$prototype$apply = LDKF.functionBind(LDKN.Function$prototype$apply, LDKN.Function$prototype$apply);

                    LDKS.Function$prototype$bind = true
                })
            .evaluate(LDKE.INACCESSIBLE, FLAG = LDKF.METHOD, FLAG = ["Function", "prototype", "bind"]);

            /* Supports */
            Supports.Object$prototype$__proto__ = (function() {
                CURRENT = {__proto__: ANY};

                delete CURRENT["__proto__"];
                return ANY === CURRENT.__proto__
            })()
    }
})();

/* [LapysJS] ... -
    >> Library oLDKF.isNativeFunction          LapysJS.prototype = prototype;
        delete prototype["constructor"];
        delete prototype["__proto__"];

        return LapysJS
    })({
        author: "Lapys",
        description: "LapysJS is a minimal, universal JavaScript library running off the (pedantic) LDK (Lapys Development Kit)",
        version: null,

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
