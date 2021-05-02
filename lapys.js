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
            ERROR: null, // ->> Represents a non-halting, non-throwable, silent exception. (always a unique value)
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
            SETTER: 0x10
        },

        // [Functions]
        Functions: {
            functionCall: null,
            functionIsNative: null,
            functionToString: null,
            inspectFeature: null,
            numberToInteger: null, "BITWISE": 0x1,
            numberToString: null, "DECIMAL": 0x1, "SIGNED": 0x2, "UNSIGNED": 0x3,
            stringAt: null
        },

        // [Mathematics]
        Mathematics: {},

        // [Natives]
        Natives: {
            Function$prototype$call: null,
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
            Function: false,
            Function$prototype$call: false,
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
        /* Class */
            /* Error */
            function Error(name, message) {
                // ... Update > Error ->> Use either the `new`'ed or `catch`'ed `Error` object.
                try { ERROR = this; (function() {}).prototype() }
                catch (error) { ERROR = error }

                // ... Modification > Error > (Message, Name)
                ERROR.message = null === message ? "" : message;
                ERROR.name = name;

                switch (name) {
                    case LDKE.GETTER | LDKE.SETTER: ERROR.name = "UnexpectedPropertyError"; break;

                    // ...
                    case LDKE.GETTER: ERROR.name = "UnexpectedGetterError"; break;
                    case LDKE.INACCESSIBLE: ERROR.name = "InaccessiblePropertyError"; break;
                    case LDKE.INHERITED: ERROR.name = "InheritedPropertyError"; break;
                    case LDKE.MISSING: ERROR.name = "MissingFeatureError"; break;
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

            /* [Property] Inspector --- REDACT (Lapys) ->> Evaluated by the `Functions.inspectFeature(...)` function. */
            function Inspector(identifier, object) {
                this.assertions.length = +0;
                this.identifier = identifier;
                this.object = object
            }
                Inspector.prototype = {
                    assertions: new function AssertionList() { return new StaticArray(+0, 8, null) },
                    identifier: null, object: null,

                    assert: function assert(asserter) { this.assertions[this.assertions.length++] = asserter },
                    evaluate: function evaluate(code) {
                        // Constant > ((Identifier, Object), (Syntax, Type))
                        // : Initialization > (... Source, Value)
                        var identifier = this.identifier, object = this.object;
                        var syntax = arguments[2], type = arguments[1];

                        var objectSource = "", propertySource = "", propertyType = "feature";
                        var value = ERROR;

                        // Logic > Update > ...
                        if (null !== syntax) {
                            for (var iterator = syntax.length - 2; ~iterator; --iterator)
                            objectSource = syntax[iterator] + (objectSource.length ? '.' : "") + objectSource;

                            // ...
                            propertySource = objectSource + '.' + syntax[syntax.length - 1];
                            switch (type) {
                                case LDKF.CONSTRUCTOR: propertySource += "()"; propertyType = "constructor"; break;
                                case LDKF.METHOD: propertySource += "(...)"; propertyType = "method"
                            }
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

                            // Loop > Assertion > ...
                            for (var iterator = +0; iterator != this.assertions.length; ++iterator)
                            if (false === this.assertions[iterator](object, identifier, value)) { value = ERROR; break }
                        }

                        // ... Error
                        if (code & LDKE.MISSING)
                        throw new LDKE.Error(LDKE.MISSING, "Expected the `" + propertySource + "` " + propertyType + " to be available within " + (GLOBAL === object ? "the global object" : '`' + objectSource + '`'));

                        // Return
                        return value
                    }
                };

            /* Static Array --- REDACT (Lapys) */
            function StaticArray(length, maximum, fill, /* ... */ elements) {
                var iterator = maximum;

                this.length = length;

                while (iterator !== length) this[--iterator] = fill;
                while (iterator--) this[iterator] = arguments[iterator + 3]
            }
                StaticArray.prototype = {
                    0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, 6: undefined, 7: undefined, 8: undefined, 9: undefined, 10: undefined, 11: undefined, 12: undefined, 13: undefined, 14: undefined, 15: undefined, 16: undefined, 17: undefined, 18: undefined, 19: undefined, 20: undefined, 21: undefined, 22: undefined, 23: undefined, 24: undefined, 25: undefined, 26: undefined, 27: undefined, 28: undefined, 29: undefined, 30: undefined, 31: undefined, 32: undefined, 33: undefined, 34: undefined, 35: undefined, 36: undefined, 37: undefined, 38: undefined, 39: undefined, 40: undefined, 41: undefined, 42: undefined, 43: undefined, 44: undefined, 45: undefined, 46: undefined, 47: undefined, 48: undefined, 49: undefined, 50: undefined, 51: undefined, 52: undefined, 53: undefined, 54: undefined, 55: undefined, 56: undefined, 57: undefined, 58: undefined, 59: undefined, 60: undefined, 61: undefined, 62: undefined, 63: undefined, 64: undefined, 65: undefined, 66: undefined, 67: undefined, 68: undefined, 69: undefined, 70: undefined, 71: undefined, 72: undefined, 73: undefined, 74: undefined, 75: undefined, 76: undefined, 77: undefined, 78: undefined, 79: undefined, 80: undefined, 81: undefined, 82: undefined, 83: undefined, 84: undefined, 85: undefined, 86: undefined, 87: undefined, 88: undefined, 89: undefined, 90: undefined, 91: undefined, 92: undefined, 93: undefined, 94: undefined, 95: undefined, 96: undefined, 97: undefined, 98: undefined, 99: undefined, 100: undefined, 101: undefined, 102: undefined, 103: undefined, 104: undefined, 105: undefined, 106: undefined, 107: undefined, 108: undefined, 109: undefined, 110: undefined, 111: undefined, 112: undefined, 113: undefined, 114: undefined, 115: undefined, 116: undefined, 117: undefined, 118: undefined, 119: undefined, 120: undefined, 121: undefined, 122: undefined, 123: undefined, 124: undefined, 125: undefined, 126: undefined, 127: undefined, 128: undefined, 129: undefined, 130: undefined, 131: undefined, 132: undefined, 133: undefined, 134: undefined, 135: undefined, 136: undefined, 137: undefined, 138: undefined, 139: undefined, 140: undefined, 141: undefined, 142: undefined, 143: undefined, 144: undefined, 145: undefined, 146: undefined, 147: undefined, 148: undefined, 149: undefined, 150: undefined, 151: undefined, 152: undefined, 153: undefined, 154: undefined, 155: undefined, 156: undefined, 157: undefined, 158: undefined, 159: undefined, 160: undefined, 161: undefined, 162: undefined, 163: undefined, 164: undefined, 165: undefined, 166: undefined, 167: undefined, 168: undefined, 169: undefined, 170: undefined, 171: undefined, 172: undefined, 173: undefined, 174: undefined, 175: undefined, 176: undefined, 177: undefined, 178: undefined, 179: undefined, 180: undefined, 181: undefined, 182: undefined, 183: undefined, 184: undefined, 185: undefined, 186: undefined, 187: undefined, 188: undefined, 189: undefined, 190: undefined, 191: undefined, 192: undefined, 193: undefined, 194: undefined, 195: undefined, 196: undefined, 197: undefined, 198: undefined, 199: undefined, 200: undefined, 201: undefined, 202: undefined, 203: undefined, 204: undefined, 205: undefined, 206: undefined, 207: undefined, 208: undefined, 209: undefined, 210: undefined, 211: undefined, 212: undefined, 213: undefined, 214: undefined, 215: undefined, 216: undefined, 217: undefined, 218: undefined, 219: undefined, 220: undefined, 221: undefined, 222: undefined, 223: undefined, 224: undefined, 225: undefined, 226: undefined, 227: undefined, 228: undefined, 229: undefined, 230: undefined, 231: undefined, 232: undefined, 233: undefined, 234: undefined, 235: undefined, 236: undefined, 237: undefined, 238: undefined, 239: undefined, 240: undefined, 241: undefined, 242: undefined, 243: undefined, 244: undefined, 245: undefined, 246: undefined, 247: undefined, 248: undefined, 249: undefined, 250: undefined, 251: undefined, 252: undefined, 253: undefined, 254: undefined, 255: undefined,
                    length: +0,

                    splice: function splice() {}, // ->> For Chrome Dev Tools to display `StaticArray`s as array primitives.
                    toString: null, valueOf: null
                };

            /* Static String --- REDACT (Lapys) */
            function StaticString(length, /* ... */ characters) {
                var string = new StaticArray(length, length, '\0', arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20], arguments[21], arguments[22], arguments[23], arguments[24], arguments[25], arguments[26], arguments[27], arguments[28], arguments[29], arguments[30], arguments[31], arguments[32], arguments[33], arguments[34], arguments[35], arguments[36], arguments[37], arguments[38], arguments[39], arguments[40], arguments[41], arguments[42], arguments[43], arguments[44], arguments[45], arguments[46], arguments[47], arguments[48], arguments[49], arguments[50], arguments[51], arguments[52], arguments[53], arguments[54], arguments[55], arguments[56], arguments[57], arguments[58], arguments[59], arguments[60], arguments[61], arguments[62], arguments[63], arguments[64], arguments[65], arguments[66], arguments[67], arguments[68], arguments[69], arguments[70], arguments[71], arguments[72], arguments[73], arguments[74], arguments[75], arguments[76], arguments[77], arguments[78], arguments[79], arguments[80], arguments[81], arguments[82], arguments[83], arguments[84], arguments[85], arguments[86], arguments[87], arguments[88], arguments[89], arguments[90], arguments[91], arguments[92], arguments[93], arguments[94], arguments[95], arguments[96], arguments[97], arguments[98], arguments[99], arguments[100], arguments[101], arguments[102], arguments[103], arguments[104], arguments[105], arguments[106], arguments[107], arguments[108], arguments[109], arguments[110], arguments[111], arguments[112], arguments[113], arguments[114], arguments[115], arguments[116], arguments[117], arguments[118], arguments[119], arguments[120], arguments[121], arguments[122], arguments[123], arguments[124], arguments[125], arguments[126], arguments[127], arguments[128], arguments[129], arguments[130], arguments[131], arguments[132], arguments[133], arguments[134], arguments[135], arguments[136], arguments[137], arguments[138], arguments[139], arguments[140], arguments[141], arguments[142], arguments[143], arguments[144], arguments[145], arguments[146], arguments[147], arguments[148], arguments[149], arguments[150], arguments[151], arguments[152], arguments[153], arguments[154], arguments[155], arguments[156], arguments[157], arguments[158], arguments[159], arguments[160], arguments[161], arguments[162], arguments[163], arguments[164], arguments[165], arguments[166], arguments[167], arguments[168], arguments[169], arguments[170], arguments[171], arguments[172], arguments[173], arguments[174], arguments[175], arguments[176], arguments[177], arguments[178], arguments[179], arguments[180], arguments[181], arguments[182], arguments[183], arguments[184], arguments[185], arguments[186], arguments[187], arguments[188], arguments[189], arguments[190], arguments[191], arguments[192], arguments[193], arguments[194], arguments[195], arguments[196], arguments[197], arguments[198], arguments[199], arguments[200], arguments[201], arguments[202], arguments[203], arguments[204], arguments[205], arguments[206], arguments[207], arguments[208], arguments[209], arguments[210], arguments[211], arguments[212], arguments[213], arguments[214], arguments[215], arguments[216], arguments[217], arguments[218], arguments[219], arguments[220], arguments[221], arguments[222], arguments[223], arguments[224], arguments[225], arguments[226], arguments[227], arguments[228], arguments[229], arguments[230], arguments[231], arguments[232], arguments[233], arguments[234], arguments[235], arguments[236], arguments[237], arguments[238], arguments[239], arguments[240], arguments[241], arguments[242], arguments[243], arguments[244], arguments[245], arguments[246], arguments[247], arguments[248], arguments[249], arguments[250], arguments[251], arguments[252], arguments[253], arguments[254], arguments[255]);

                string.toString = function toString() { return string.valueOf() };
                string.valueOf = function valueOf() { var value = ""; for (var iterator = this.length - 1; ~iterator; --iterator) value = this[iterator] + value; return value };

                return string
            }

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
            Functions.inspectFeature = function inspectFeature(object, identifier) { return new Inspector(identifier, object) };

            /* Supports */
            Supports.Object$prototype$__proto__ = (function() {
                CURRENT = {__proto__: ANY};

                delete CURRENT.__proto__;
                return ANY === CURRENT.__proto__
            })()
    }
})();

/* [LapysJS] ... ->> Library object (public interface) */
LapysJS = new (
    (function(prototype) {
        function LapysJS() {}

        LapysJS.prototype = prototype;
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
