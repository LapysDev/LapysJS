/* Global > Lapys
  --- NOTE ---
    #Lapys:
      • Code standard built for all JavaScript versions
      • Native features are validated, or internally shimmed otherwise

  --- RULES ---
    #Lapys:
      • Code indirection should be minimal (due to prototype-chain lookup)
      • Function arity is a maximum of 255
      • Prefer declared function arguments over the exotic `arguments` object
*/
var Lapys = new (
  (function() {
    var author      = "Lapys";
    var description = "General-purpose standard library for JavaScript";
    var version     = "‘who knows…’";

    return (function(prototype) {
      function Lapys() {}

      Lapys.prototype = prototype;
      delete prototype["constructor"];
      delete prototype["__proto__"];

      return Lapys
    })({
      author     : author,
      description: description,
      version    : version,

      "__proto__": null
      toString   : function() { /* [private code] */ return "Lapys v" + version + "]: " + description }
    })
  })()
);

/* ... */
(function() {
  /* Constant > ... */
  var ANY    = {};                                                                                      // ->> Represents a non-unique value (though its value is distinct)
  var ERROR  = {message: "", name: "Error", toString: function toString() { return "Uncaught Error" }}; // ->> Represents an exception instance (always a unique value)
  var GLOBAL = "undefined" === typeof frames ? ("undefined" === typeof self ? ("undefined" === typeof window ? ("undefined" === typeof global ? ("undefined" === typeof globalThis ? (function() { return this })() : globalThis) : global) : window) : self) : frames;

  /* Polyfill ->> Only here to critique why this is allowed */
  var Infinity  = 1 / +0;
  var NaN       = +0 / +0;

  /* Global */
    /* Constants */
    var Constants = {
      MAXIMUM_BITWISE_INTEGER               : null,
      MAXIMUM_NUMBER                        : null,
      MAXIMUM_INTEGER                       : null,
      NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE: null,
      TYPE_ERROR                            : null
    };

    /* Enumerations ->> Constant used for conditional control flow */
    var Enumerations = {
      GETTER      : 0b000001,
      INACCESSIBLE: 0b000010,
      INHERITED   : 0b000100,
      MISSING     : 0b001000,
      MODIFIED    : 0b010000,
      SETTER      : 0b100000,

      INSPECT_CONSTRUCTOR: 0b01,
      INSPECT_METHOD     : 0b10
    };

    /* Functions ->> Convenience/ safe abstractions over native features */
    var Functions = {
      characterAt         : null,
      constructorIsNative : null,
      functionApply       : null,
      functionAssertApply : null,
      functionBind        : null,
      functionIsNative    : null,
      functionToString    : null,
      inspectFeature      : null,
      numberIsFinite      : null,
      numberIsNaN         : null,
      numberIsSafe        : null,
      numberIsSafeInteger : null,
      numberToFraction    : null,
      numberToString      : null,
      objectDefineProperty: null,
      objectGetPrototype  : null,
      objectRemoveProperty: null,
      objectSetPrototype  : null,
      stringFrom          : null
    };

    /* Mathematics */
    var Mathematics = {
      E      : 2.718281828459045,
      E_GAMMA: 0.57721566490153286060651209008240243104215933593992,
      ETA    : 245850922 / 156513558,
      LN10   : 2.302585092994046,
      LN2    : 0.6931471805599453,
      LOG10E : 0.4342944819032518,
      LOG2E  : 1.4426950408889634,
      PHI    : 1.618033988749894848204586834,
      PI     : 245850922 / 78256779,
      SQRT2  : 665857 / 470832,
      SQRT3  : 97 / 56,
      SQRT5  : 51841 / 23184,

      abs           : null,
      acos          : null,
      acosh         : null,
      acot          : null,
      acoth         : null,
      acsc          : null,
      acsch         : null,
      asec          : null,
      asech         : null,
      asin          : null,
      asinh         : null,
      atan          : null,
      atanh         : null,
      beta          : null,
      cbrt          : null,
      ceil          : null,
      clamp         : null,
      cos           : null,
      cot           : null,
      coth          : null,
      csc           : null,
      csch          : null,
      cyl_bessel    : null,
      cyl_neumann   : null,
      ellint        : null,
      exp           : null,
      expint        : null,
      fact          : null,
      floor         : null,
      hermite       : null,
      iabs          : null,
      icbrt         : null,
      imax          : null,
      imin          : null,
      ipow          : null,
      iroot         : null,
      isqrt         : null,
      itrunc        : null,
      jsf           : null,
      knuth_b       : null,
      laguerre      : null,
      lcg           : null,
      legendre      : null,
      lerp          : null,
      ln            : null,
      log           : null,
      max           : null,
      min           : null,
      mod           : null,
      mt            : null,
      mt32          : null,
      mt64          : null,
      mulberry      : null,
      mulberry32    : null,
      perc          : null,
      pow           : null,
      randint       : null,
      random        : null,
      riemann_zeta  : null,
      root          : null,
      round         : null,
      sec           : null,
      sech          : null,
      sin           : null,
      sinh          : null,
      sph_bessel    : null,
      sph_legendre  : null,
      sph_neumann   : null,
      sqrt          : null,
      tan           : null,
      tanh          : null,
      trunc         : null,
      wrap          : null,
      xorshift      : null,
      xorshift128   : null,
      xorshift128_p : null, // ->> Default random number generation seed
      xorshift128_s : null,
      xorshift256   : null,
      xorshift256_p : null,
      xorshift256_ss: null,
      xorshift_p    : null,
      xorshift_s    : null,
      xorshift_ss   : null,
      xorwow        : null
    };

    /* Natives ->> Native APIs and features */
    var Natives = {
      Function                         : null,
      Function$prototype$apply         : null,
      Function$prototype$bind          : null,
      Function$prototype$toString      : null,
      Object$create                    : null,
      Object$defineProperty            : null,
      Object$getOwnPropertyDescriptor  : null,
      Object$getPrototypeOf            : null,
      Object$setPrototypeOf            : null,
      Object$prototype$hasOwnProperty  : null,
      Object$prototype$__defineGetter__: null,
      Object$prototype$__defineSetter__: null,
      Object$prototype$__lookupGetter__: null,
      Object$prototype$__lookupSetter__: null,
      String$prototype$charAt          : null
    };

    /* Supports ->> Supported native APIs and features */
    var Supports = {
      Element$defineProperty           : false,
      Element$getOwnPropertyDescriptor : false,
      Function$prototype$apply         : false,
      Function$prototype$bind          : false,
      Object$create                    : false,
      Object$defineProperty            : false,
      Object$getOwnPropertyDescriptor  : false,
      Object$getPrototypeOf            : false,
      Object$setPrototypeOf            : false,
      Object$prototype$hasOwnProperty  : false,
      Object$prototype$__defineGetter__: false,
      Object$prototype$__defineSetter__: false,
      Object$prototype$__lookupGetter__: false,
      Object$prototype$__lookupSetter__: false,
      Object$prototype$__proto__       : false,
      String$prototype$charAt          : false
    };

  /* Class > ... */
    // Error
    function Error(name, message) {
      ERROR.message = null === message ? "" : message;

      switch (name) {
        case Enumerations.GETTER                      : ERROR.name = "UnexpectedGetterError";     break;
        case Enumerations.GETTER | Enumerations.SETTER: ERROR.name = "UnexpectedPropertyError";   break;
        case Enumerations.INACCESSIBLE                : ERROR.name = "InaccessiblePropertyError"; break;
        case Enumerations.INHERITED                   : ERROR.name = "InheritedPropertyError";    break;
        case Enumerations.MISSING                     : ERROR.name = "MissingFeatureError";       break;
        case Enumerations.MODIFIED                    : ERROR.name = "ModifiedFeatureError";      break;
        case Enumerations.SETTER                      : ERROR.name = "UnexpectedSetterError";     break;
        case 0x0                                      : ERROR.name = Error.prototype.name;        break;
        default                                       : ERROR.name = name
      }

      return ERROR
    }
      Error.prototype = {
        message: null,
        name   : "Error",

        toString: function toString() { return '[' + ERROR.name + ']' + (null === ERROR.message || "" === ERROR.message ? "" : ": ") + ERROR.message }
      };

    // Fraction
    function Fraction(whole, numerator, denominator) {
      this.denominator = denominator;
      this.numerator   = numerator;
      this.whole       = whole
    }
      Fraction.prototype = {
        denominator: +0,
        numerator  : +0,
        whole      : +0,

        toImproper: function toImproper() { this.numerator += this.denominator * this.whole; this.whole = +0; return this },
        toMixed   : function toMixed() { this.whole = this.numerator; this.numerator %= this.denominator; this.whole -= this.numerator; return this }
      };

    // Static Array
    function StaticArray(elements) {
      for (var index = (this.length = arguments.length); index--; )
      this[index] = arguments[index]
    }
      StaticArray.prototype = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

    // Static String
    function StaticString(characters) {
      for (var index = (this.length = arguments.length); index--; )
      this[index] = arguments[index]
    }
      StaticString.prototype = {
        0: '\0', 1: '\0', 2: '\0', 3: '\0', 4: '\0', 5: '\0', 6: '\0', 7: '\0', 8: '\0', 9: '\0', 10: '\0', 11: '\0', 12: '\0', 13: '\0', 14: '\0', 15: '\0', 16: '\0', 17: '\0', 18: '\0', 19: '\0', 20: '\0', 21: '\0', 22: '\0', 23: '\0', 24: '\0', 25: '\0', 26: '\0', 27: '\0', 28: '\0', 29: '\0', 30: '\0', 31: '\0', 32: '\0', 33: '\0', 34: '\0', 35: '\0', 36: '\0', 37: '\0', 38: '\0', 39: '\0', 40: '\0', 41: '\0', 42: '\0', 43: '\0', 44: '\0', 45: '\0', 46: '\0', 47: '\0', 48: '\0', 49: '\0', 50: '\0', 51: '\0', 52: '\0', 53: '\0', 54: '\0', 55: '\0', 56: '\0', 57: '\0', 58: '\0', 59: '\0', 60: '\0', 61: '\0', 62: '\0', 63: '\0', 64: '\0', 65: '\0', 66: '\0', 67: '\0', 68: '\0', 69: '\0', 70: '\0', 71: '\0', 72: '\0', 73: '\0', 74: '\0', 75: '\0', 76: '\0', 77: '\0', 78: '\0', 79: '\0', 80: '\0', 81: '\0', 82: '\0', 83: '\0', 84: '\0', 85: '\0', 86: '\0', 87: '\0', 88: '\0', 89: '\0', 90: '\0', 91: '\0', 92: '\0', 93: '\0', 94: '\0', 95: '\0', 96: '\0', 97: '\0', 98: '\0', 99: '\0', 100: '\0', 101: '\0', 102: '\0', 103: '\0', 104: '\0', 105: '\0', 106: '\0', 107: '\0', 108: '\0', 109: '\0', 110: '\0', 111: '\0', 112: '\0', 113: '\0', 114: '\0', 115: '\0', 116: '\0', 117: '\0', 118: '\0', 119: '\0', 120: '\0', 121: '\0', 122: '\0', 123: '\0', 124: '\0', 125: '\0', 126: '\0', 127: '\0', 128: '\0', 129: '\0', 130: '\0', 131: '\0', 132: '\0', 133: '\0', 134: '\0', 135: '\0', 136: '\0', 137: '\0', 138: '\0', 139: '\0', 140: '\0', 141: '\0', 142: '\0', 143: '\0', 144: '\0', 145: '\0', 146: '\0', 147: '\0', 148: '\0', 149: '\0', 150: '\0', 151: '\0', 152: '\0', 153: '\0', 154: '\0', 155: '\0', 156: '\0', 157: '\0', 158: '\0', 159: '\0', 160: '\0', 161: '\0', 162: '\0', 163: '\0', 164: '\0', 165: '\0', 166: '\0', 167: '\0', 168: '\0', 169: '\0', 170: '\0', 171: '\0', 172: '\0', 173: '\0', 174: '\0', 175: '\0', 176: '\0', 177: '\0', 178: '\0', 179: '\0', 180: '\0', 181: '\0', 182: '\0', 183: '\0', 184: '\0', 185: '\0', 186: '\0', 187: '\0', 188: '\0', 189: '\0', 190: '\0', 191: '\0', 192: '\0', 193: '\0', 194: '\0', 195: '\0', 196: '\0', 197: '\0', 198: '\0', 199: '\0', 200: '\0', 201: '\0', 202: '\0', 203: '\0', 204: '\0', 205: '\0', 206: '\0', 207: '\0', 208: '\0', 209: '\0', 210: '\0', 211: '\0', 212: '\0', 213: '\0', 214: '\0', 215: '\0', 216: '\0', 217: '\0', 218: '\0', 219: '\0', 220: '\0', 221: '\0', 222: '\0', 223: '\0', 224: '\0', 225: '\0', 226: '\0', 227: '\0', 228: '\0', 229: '\0', 230: '\0', 231: '\0', 232: '\0', 233: '\0', 234: '\0', 235: '\0', 236: '\0', 237: '\0', 238: '\0', 239: '\0', 240: '\0', 241: '\0', 242: '\0', 243: '\0', 244: '\0', 245: '\0', 246: '\0', 247: '\0', 248: '\0', 249: '\0', 250: '\0', 251: '\0', 252: '\0', 253: '\0', 254: '\0', 255: '\0',
        length: +0,

        toString: function toString() { var string = ""; for (var index = this.length; index; ) string = this[--index] + string; return string },
        valueOf : function valueOf() { return this.toString() }
      };

    // Inspector
    function Inspector(identifier, object) {
      function Callback() {}
      this.callbacks.length = +0;
      this.identifier = identifier;
      this.object     = object
    }
      Inspector.prototype = {
        callbacks : new StaticArray(null, null, null, null, null, null, null, null),
        identifier: null,
        object    : null,

        assert: function assert(assertion) {
          this.callbacks[this.callbacks.length++] = {assert: true, callback: assertion};
          return this
        },

        evaluate: function evaluate(control, type, source) {
          var callbacks  = this.callbacks;
          var evaluation = ERROR;
          var identifier = this.identifier;
          var object     = this.object;

          var identifierSource = "symbol" === typeof this.identifier ? Functions.stringFrom(this.identifier) : this.identifier;
          var objectSource     = "the global object";
          var typeSource       = Enumerations.INSPECT_CONSTRUCTOR === type ? "constructor" : Enumerations.INSPECT_METHOD === type ? "method" : "";

          // ... ->> build source strings
          if (null !== source) {
            objectSource     = '`' + source + '`';
            identifierSource = source + '.' + identifierSource;

            switch (type) {
              case Enumerations.INSPECT_CONSTRUCTOR: identifierSource += "()"; break;
              case Enumerations.INSPECT_METHOD:      identifierSource += "(…)"
            }
          }

          // ...
          if (identifier in object) {
            // ... ->> Assert `identifier`` is owned by `object``
            if (control & Enumerations.INHERITED)
            do {
              var prototype = new Error(Enumerations.INHERITED, "Expected the `" + identifierSource + "` " + typeSource + " to be owned by " + objectSource);

              // ...
              if (Supports.Object$prototype$__proto__) prototype = object.__proto__;
              else if (Supports.Object$getPrototypeOf) prototype = Natives.Object$getPrototypeOf(object);

              // ...
              if (Supports.Object$prototype$hasOwnProperty) { if (false === Functions.functionApply(Natives.Object$prototype$hasOwnProperty, object, [identifier])) throw ERROR; break }
              if (Supports.Object$getOwnPropertyDescriptor) { if (undefined === Natives.Object$getOwnPropertyDescriptor(object, identifier)) throw ERROR; break }
              if (ERROR !== prototype) { if (null === prototype ? false === (identifier in object) : identifier in prototype) throw ERROR; break }

              throw new Error(Enumerations.INHERITED, "Features for asserting owned property of objects i.e.:\n\t`Object.getOwnPropertyDescriptor(…)`, `Object.getPrototypeOf(…)`, `Object.prototype.__proto__`, and/ or `Object.prototype.hasOwnProperty(…)` must be supported")
            } while (false);

            // ... ->> Assert `identifier` is neither an accessor nor mutator of `object`
            if ((control & Enumerations.GETTER) || (control & Enumerations.SETTER))
            do {
              if (control & Enumerations.GETTER) { if (Supports.Object$prototype$__lookupGetter__) { if (undefined === Functions.functionApply(Natives.Object$prototype$__lookupGetter__, object, [identifier])) throw new Error(Enumerations.GETTER, "Expected the `" + identifierSource + "` " + typeSource + " to not be a getter of " + objectSource); break } }
              if (control & Enumerations.SETTER) { if (Supports.Object$prototype$__lookupSetter__) { if (undefined === Functions.functionApply(Natives.Object$prototype$__lookupSetter__, object, [identifier])) throw new Error(Enumerations.SETTER, "Expected the `" + identifierSource + "` " + typeSource + " to not be a setter of " + objectSource); break } }
              if (Supports.Object$getOwnPropertyDescriptor && (Supports.Object$prototype$__proto__ || Supports.Object$getPrototypeOf)) {
                for (var prototype = object; null !== prototype; ) {
                  var descriptor = Natives.Object$getOwnPropertyDescriptor(prototype, identifier);

                  // ...
                  if (undefined !== descriptor) {
                    if (control & Enumerations.GETTER) { if ("get" in descriptor) throw throw new Error(Enumerations.GETTER, "Expected the `" + identifierSource + "` " + typeSource + " to not be a getter of " + objectSource) }
                    if (control & Enumerations.SETTER) { if ("set" in descriptor) throw throw new Error(Enumerations.SETTER, "Expected the `" + identifierSource + "` " + typeSource + " to not be a setter of " + objectSource) }

                    break
                  }

                  if (Supports.Object$prototype$__proto__) prototype = object.__proto__;
                  else if (Supports.Object$getPrototypeOf) prototype = Natives.Object$getPrototypeOf(object)
                }

                break
              }

              throw new Error((control & Enumerations.GETTER ? Enumerations.GETTER : 0x0) | (control & Enumerations.SETTER ? Enumerations.SETTER : 0x0), "Features for asserting getter/ setter property of objects i.e.:\n\t`Object.getOwnPropertyDescriptor(…)`, `Object.getPrototypeOf(…)`, `Object.prototype.__lookupGetter__`, `Object.prototype.__lookupSetter__`, and/ or `Object.prototype.__proto__` must be supported")
            } while (false);

            // ...
            try { evaluation = object[identifier]; }
            catch (error) { if (control & Enumerations.INACCESSIBLE) throw new Error(Enumerations.MISSING, "Expected the `" + identifierSource + "` " + typeSource + " to be accessible from " + objectSource) }

            for (var index = +0, length = callbacks.length; index !== length; ++index) {
              var assertion = callbacks[index].callback(evaluation, identifier, object);
              if (false === assertion && callbacks[index].assert) { evaluation = ERROR; break }
            }
          }

          else if (control & Enumerations.MISSING)
          throw new Error(Enumerations.MISSING, "Expected the `" + identifierSource + "` " + typeSource + " to be available within " + objectSource);

          return evaluation
        },

        then: function then(callback) {
          this.callbacks[this.callbacks.length++] = {assert: false, callback: callback};
          return this
        }
      };

  /* Modification */
    /* Constants > ... */
    Constants.TYPE_ERROR                            = (function TypeError() { try { null() } catch (error) { return ERROR = error } })();
    Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE_CODE = [
      /* --> "[Command Line API]" */ new StaticString('[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'),
      /* --> "[native code]"      */ new StaticString('[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')
    ];
    Constants.MAXIMUM_SAFE_INTEGER                   = 9007199254740991;                                                                                                                                                                                                                                                                                                      // --> (1 << 53) - 1
    Constants.MAXIMUM_NUMBER                         = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368; // --> 1 << 1024
    Constants.MAXIMUM_BITWISE_INTEGER                = 2147483647;                                                                                                                                                                                                                                                                                                            // --> (1 << 31) - 1

    /* Functions > ... */
    Functions.characterAt = null;
    Functions.constructorIsNative = null;

    Functions.functionApply = function functionApply(functor, that, arguments) {
      if (Supports.Function$prototype$bind)
      return Natives.Function$prototype$apply(functor, [that, arguments]);

      Functions.functionAssertApply();
      return Natives.Function$prototype$apply.apply(functor, [that, arguments])
    };

    Functions.functionAssertApply = function functionAssertApply() {
      new Error(Enumerations.MODIFIED, "Unexpected `Function.prototype.apply(…)` method");

      if (false === Functions.objectRemoveProperty(Natives.Function$prototype$apply, "apply")) throw ERROR;
      Natives.Function$prototype$apply.apply = Natives.Function$prototype$apply
    };

    Functions.functionBind = function functionBind(functor, that) {
      var bound = new StaticArray(that);

      // ...
      for (var index = arguments.length; index-- !== 2; )
      bound[index - 1] = arguments[index];

      return Functions.functionApply(Natives.Function$prototype$bind, functor, bound)
    };

    Functions.functionIsNative = null;

    Functions.functionToString = function functionToString(functor) {
       return Functions.functionApply(Natives.Function$prototype$toString, functor)
    };

    Functions.inspectFeature = function inspectFeature(object, identifier) {
       return new Inspector(identifier, object)
    };

    Functions.numberIsFinite = function numberIsFinite(number) {
      return Infinity !== number && -Infinity !== number
    };

    Functions.numberIsNaN = null;
    Functions.numberIsSafe = null;
    Functions.numberIsSafeInteger = null;
    Functions.numberToFraction = null;
    Functions.numberToString = null;
    Functions.objectDefineProperty = null;
    Functions.objectGetPrototype = null;
    Functions.objectSetPrototype = null;

    Functions.objectRemoveProperty = function objectRemoveProperty(object, identifier, redefine) {
      if (true === redefine) Functions.objectDefineProperty(object, identifier, {configurable: true, value: null, writable: true});
      try { return delete object[identifier] } catch (error) {}

      return false === (identifier in object)
    };


    Functions.stringFrom = null
})();
