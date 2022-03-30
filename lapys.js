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
    var version     = "'who knows…'";

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

      "__proto__": null,
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

  /* Global */
    /* Constants */
    var Constants = {
      MAXIMUM_BITWISE_INTEGER          : null,
      MAXIMUM_SAFE_INTEGER             : null,
      MAXIMUM_NUMBER                   : null,
      NATIVE_FUNCTION_OBFUSCATED_SOURCE: null,
      TYPE_ERROR                       : null
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
      constructorIsNative       : null,
      functionApply             : null,
      functionAssertApply       : null,
      functionBind              : null,
      functionIsNative          : null,
      functionToString          : null,
      inspectFeature            : null,
      numberFromDigit           : null,
      numberIsFinite            : null,
      numberIsInteger           : null,
      numberIsNaN               : null,
      numberIsSafe              : null,
      numberIsSafeInteger       : null,
      numberToFraction          : null,
      numberToString            : null,
      objectDefineProperty      : null,
      objectGetPrototype        : null,
      objectRemoveProperty      : null,
      objectSetPrototype        : null,
      stringAt                  : null,
      stringFrom                : null,
      stringIs                  : null,
      stringIsDigit             : null,
      stringIsIdentifier        : null,
      stringIsIdentifierContinue: null,
      stringIsIdentifierStart   : null,
      stringIsReservedIdentifier: null,
      stringIsSpace             : null
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
      gcd           : null,
      hermite       : null,
      iabs          : null,
      icbrt         : null,
      ipow          : null,
      iroot         : null,
      isqrt         : null,
      jsf           : null,
      knuth_b       : null,
      laguerre      : null,
      lcg           : null,
      legendre      : null,
      lerp          : null,
      ln            : null,
      log           : null,
      maximum       : null,
      minimum       : null,
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

        toImproper: function toImproper() { if (+0 !== this.whole) { this.numerator += this.denominator * this.whole; this.whole = +0 } return this },
        toMixed   : function toMixed() { if (+0 === this.whole) { var fraction = Functions.numberToFraction(this.numerator / this.denominator); this.denominator = fraction.denominator; this.numerator = fraction.numerator; this.whole = fraction.whole } return this }
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

    // Inspector ...
    function InspectorCallback(callback, assert) {
      this.assert   = assert;
      this.callback = callback
    }
      InspectorCallback.prototype = {
        assert  : false,
        callback: null
      };

    function Inspector(identifier, object) {
      this.callbacks.length = +0;
      this.identifier = identifier;
      this.object     = object
    }
      Inspector.prototype = {
        callbacks : new StaticArray(null, null, null, null, null, null, null, null),
        identifier: null,
        object    : null,

        assert: function assert(assertion) {
          this.callbacks[this.callbacks.length++] = new InspectorCallback(assertion, true);
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
                    if (control & Enumerations.GETTER) { if ("get" in descriptor) throw new Error(Enumerations.GETTER, "Expected the `" + identifierSource + "` " + typeSource + " to not be a getter of " + objectSource) }
                    if (control & Enumerations.SETTER) { if ("set" in descriptor) throw new Error(Enumerations.SETTER, "Expected the `" + identifierSource + "` " + typeSource + " to not be a setter of " + objectSource) }

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
          this.callbacks[this.callbacks.length++] = new InspectorCallback(callback, false);
          return this
        }
      };

  /* Modification */
    /* Constants > ... */
    Constants.TYPE_ERROR                        = (function TypeError() { try { null() } catch (error) { return ERROR = error } })();
    Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE = [
      /* --> "[Command Line API]" */ new StaticString('[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'),
      /* --> "[native code]"      */ new StaticString('[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')
    ];
    Constants.MAXIMUM_SAFE_INTEGER    = 9007199254740991;                                                                                                                                                                                                                                                                                                      // --> (1 << 53) - 1
    Constants.MAXIMUM_NUMBER          = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368; // --> 1 << 1024
    Constants.MAXIMUM_BITWISE_INTEGER = 2147483647;                                                                                                                                                                                                                                                                                                            // --> (1 << 31) - 1

    /* Functions > ... */
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

    Functions.functionIsNative = GLOBAL.native = function functionIsNative(functor, name) {
      if ("function" === typeof functor || "object" === typeof functor) {
        // var name   = null === name ? "" : name;
        // var source = false === Supports.Function$prototype$apply ? "" + functor : Functions.functionToString(functor);

        // /* ... */
        // Functions.stringAt = function stringAt(string, index) { return string[index] };
        // // if (false === Supports.String$prototype$charAt) {
        // //   for (var index = Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE.length; index; ) {
        // //     var obfuscatedSource = Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE[--index];

        // //     if (
        // //       source === "function " +   name + "() { " +      obfuscatedSource + " }"  ||
        // //       source === "function " +   name + "() {\n    " + obfuscatedSource + "\n}" ||
        // //       source === "\nfunction " + name + "() {\n    " + obfuscatedSource + "\n}\n"
        // //     ) return true
        // //   }
        // // }

        // if (Functions.stringIs(source, "function", +0, +0, 8)) {
        //   var delimit      = false;
        //   var parameterize = false;

        //   for (var index = 8, length = source.length; index !== length; ++index) {
        //     var character = Functions.stringAt(source, index);

        //     // ...
        //     if (character === '\n' || Functions.stringIsSpace(character)) continue;
        //     if (character === '(') { parameterize = true; continue }

        //     for (var obfuscatedSourceIndex = Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE.length; obfuscatedSourceIndex; ) {
        //       var obfuscatedSource       = Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE[--obfuscatedSourceIndex];
        //       var obfuscatedSourceLength = obfuscatedSource.length;

        //       // ...
        //       if (obfuscatedSourceLength <= length - index && Functions.stringIs(source, obfuscatedSource, index, +0)) {
        //         for (var subindex = index + obfuscatedSourceLength; length !== subindex; ++subindex) {
        //           character = Functions.stringAt(source, subindex);
        //           if (character === '\n' || Functions.stringIsSpace(character)) continue;
        //           if (character === '}')
        //         }
        //       }
        //     }
        //   }
        //   /* UPDATE (Lapys) ->> Parse the function */
        // }
      }

      return false
    };

    Functions.functionToString = function functionToString(functor) {
       return Functions.functionApply(Natives.Function$prototype$toString, functor)
    };

    Functions.inspectFeature = function inspectFeature(object, identifier) {
       return new Inspector(identifier, object)
    };

    Functions.numberFromDigit = function numberFromDigit(digit) {
      switch (digit) {
        case 0: case '0': return +0;
        case 1: case '1': return 1;
        case 2: case '2': return 2;
        case 3: case '3': return 3;
        case 4: case '4': return 4;
        case 5: case '5': return 5;
        case 6: case '6': return 6;
        case 7: case '7': return 7;
        case 8: case '8': return 8;
        case 9: case '9': return 9
      }
    };

    Functions.numberIsFinite      = function numberIsFinite     (number) { return Infinity !== number && -Infinity !== number };
    Functions.numberIsInteger     = function numberIsInteger    (number) { return number === Mathematics.trunc(number) };
    Functions.numberIsNaN         = function numberIsNaN        (number) { return number !== number };
    Functions.numberIsSafe        = function numberIsSafe       (number) { return -Constants.MAXIMUM_NUMBER <= number && number <= Constants.MAXIMUM_NUMBER && Functions.numberIsFinite(number) && false === Functions.numberIsNaN(number) };
    Functions.numberIsSafeInteger = function numberIsSafeInteger(number) { return -Constants.MAXIMUM_SAFE_INTEGER <= number && number <= Constants.MAXIMUM_SAFE_INTEGER && Functions.numberIsInteger(number) };

    Functions.numberToFraction = function numberToFraction(number) {
      var integer = Mathematics.trunc(number);

      if (integer === numerator)
      return new Fraction(integer, 1, 1);

      // ...
      var denominator = 1;
      var numerator   = number - integer;
      var divisor;

      while (false === Functions.numberIsInteger(numerator)) {
        var next = numerator * 10.0;

        if (false === Functions.numberIsSafe(next)) break;
        denominator *= 10;
        numerator    = next
      }

      divisor      = Mathematics.gcd(denominator, numerator);
      denominator /= divisor;
      numerator   /= divisor;

      return new Fraction(integer, numerator, denominator)
    };

    Functions.numberToString = function numberToString(number) {
      return number + ""
    };

    Functions.objectDefineProperty = null;
    Functions.objectGetPrototype = null;
    Functions.objectSetPrototype = null;

    Functions.objectRemoveProperty = function objectRemoveProperty(object, identifier, redefine) {
      if (true === redefine) Functions.objectDefineProperty(object, identifier, {configurable: true, value: null, writable: true});
      try { return delete object[identifier] } catch (error) {}

      return false === (identifier in object)
    };

    Functions.stringAt = function stringAt(string, index) {
      return "string" === typeof string ? null : string[index]
    };

    Functions.stringFrom = null;

    Functions.stringIs = function stringIs(stringA, stringB, indexA, indexB, count) {
      var indexA = arguments.length > 2 ? indexA : +0;
      var indexB = arguments.length > 3 ? indexB : +0;
      var count  = arguments.length > 4 ? count : Mathematics.minimum(stringA.length - indexA, stringB.length - indexB);

      // ...
      while (count--) {
        if (Functions.stringAt(stringA, indexA++) !== Functions.stringAt(stringB, indexB++))
        return false
      }

      return arguments.length > 2 || stringA.length === stringB.length
    };

    Functions.stringIsDigit = function stringIsDigit(character) {
      return character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9'
    };

    Functions.stringIsIdentifier = function stringIsIdentifier(string) {
      var stringLength  = string.length;
      var stringIndex   = Functions.stringIsIdentifierStart(Functions.stringAt(string, +0)) ? 1 : stringIsUnicode(startCodes, +0) ? 6 : +0;
      var startCodes    = [new StaticString('0', '0', 'A', 'A'), new StaticString('0', '0', 'B', '5'), new StaticString('0', '0', 'B', 'A'), new StaticString('0', '0', 'C', '0'), new StaticString('0', '0', 'D', '6'), new StaticString('0', '0', 'D', '8'), new StaticString('0', '0', 'F', '6'), new StaticString('0', '0', 'F', '8'), new StaticString('0', '2', 'C', '1'), new StaticString('0', '2', 'C', '6'), new StaticString('0', '2', 'D', '1'), new StaticString('0', '2', 'E', '0'), new StaticString('0', '2', 'E', '4'), new StaticString('0', '2', 'E', 'C'), new StaticString('0', '2', 'E', 'E'), new StaticString('0', '3', '7', '0'), new StaticString('0', '3', '7', '4'), new StaticString('0', '3', '7', '6'), new StaticString('0', '3', '7', '7'), new StaticString('0', '3', '7', 'A'), new StaticString('0', '3', '7', 'D'), new StaticString('0', '3', '8', '6'), new StaticString('0', '3', '8', '8'), new StaticString('0', '3', '8', 'A'), new StaticString('0', '3', '8', 'C'), new StaticString('0', '3', '8', 'E'), new StaticString('0', '3', 'A', '1'), new StaticString('0', '3', 'A', '3'), new StaticString('0', '3', 'F', '5'), new StaticString('0', '3', 'F', '7'), new StaticString('0', '4', '8', '1'), new StaticString('0', '4', '8', 'A'), new StaticString('0', '5', '2', '7'), new StaticString('0', '5', '3', '1'), new StaticString('0', '5', '5', '6'), new StaticString('0', '5', '5', '9'), new StaticString('0', '5', '6', '1'), new StaticString('0', '5', '8', '7'), new StaticString('0', '5', 'D', '0'), new StaticString('0', '5', 'E', 'A'), new StaticString('0', '5', 'F', '0'), new StaticString('0', '5', 'F', '2'), new StaticString('0', '6', '2', '0'), new StaticString('0', '6', '4', 'A'), new StaticString('0', '6', '6', 'E'), new StaticString('0', '6', '6', 'F'), new StaticString('0', '6', '7', '1'), new StaticString('0', '6', 'D', '3'), new StaticString('0', '6', 'D', '5'), new StaticString('0', '6', 'E', '5'), new StaticString('0', '6', 'E', '6'), new StaticString('0', '6', 'E', 'E'), new StaticString('0', '6', 'E', 'F'), new StaticString('0', '6', 'F', 'A'), new StaticString('0', '6', 'F', 'C'), new StaticString('0', '6', 'F', 'F'), new StaticString('0', '7', '1', '0'), new StaticString('0', '7', '1', '2'), new StaticString('0', '7', '2', 'F'), new StaticString('0', '7', '4', 'D'), new StaticString('0', '7', 'A', '5'), new StaticString('0', '7', 'B', '1'), new StaticString('0', '7', 'C', 'A'), new StaticString('0', '7', 'E', 'A'), new StaticString('0', '7', 'F', '4'), new StaticString('0', '7', 'F', '5'), new StaticString('0', '7', 'F', 'A'), new StaticString('0', '8', '0', '0'), new StaticString('0', '8', '1', '5'), new StaticString('0', '8', '1', 'A'), new StaticString('0', '8', '2', '4'), new StaticString('0', '8', '2', '8'), new StaticString('0', '8', '4', '0'), new StaticString('0', '8', '5', '8'), new StaticString('0', '8', 'A', '0'), new StaticString('0', '8', 'A', '2'), new StaticString('0', '8', 'A', 'C'), new StaticString('0', '9', '0', '4'), new StaticString('0', '9', '3', '9'), new StaticString('0', '9', '3', 'D'), new StaticString('0', '9', '5', '0'), new StaticString('0', '9', '5', '8'), new StaticString('0', '9', '6', '1'), new StaticString('0', '9', '7', '1'), new StaticString('0', '9', '7', '7'), new StaticString('0', '9', '7', '9'), new StaticString('0', '9', '7', 'F'), new StaticString('0', '9', '8', '5'), new StaticString('0', '9', '8', 'C'), new StaticString('0', '9', '8', 'F'), new StaticString('0', '9', '9', '0'), new StaticString('0', '9', '9', '3'), new StaticString('0', '9', 'A', '8'), new StaticString('0', '9', 'A', 'A'), new StaticString('0', '9', 'B', '0'), new StaticString('0', '9', 'B', '2'), new StaticString('0', '9', 'B', '6'), new StaticString('0', '9', 'B', '9'), new StaticString('0', '9', 'B', 'D'), new StaticString('0', '9', 'C', 'E'), new StaticString('0', '9', 'D', 'C'), new StaticString('0', '9', 'D', 'D'), new StaticString('0', '9', 'D', 'F'), new StaticString('0', '9', 'E', '1'), new StaticString('0', '9', 'F', '0'), new StaticString('0', '9', 'F', '1'), new StaticString('0', 'A', '0', '5'), new StaticString('0', 'A', '0', 'A'), new StaticString('0', 'A', '0', 'F'), new StaticString('0', 'A', '1', '0'), new StaticString('0', 'A', '1', '3'), new StaticString('0', 'A', '2', '8'), new StaticString('0', 'A', '2', 'A'), new StaticString('0', 'A', '3', '0'), new StaticString('0', 'A', '3', '2'), new StaticString('0', 'A', '3', '3'), new StaticString('0', 'A', '3', '5'), new StaticString('0', 'A', '3', '6'), new StaticString('0', 'A', '3', '8'), new StaticString('0', 'A', '3', '9'), new StaticString('0', 'A', '5', '9'), new StaticString('0', 'A', '5', 'C'), new StaticString('0', 'A', '5', 'E'), new StaticString('0', 'A', '7', '2'), new StaticString('0', 'A', '7', '4'), new StaticString('0', 'A', '8', '5'), new StaticString('0', 'A', '8', 'D'), new StaticString('0', 'A', '8', 'F'), new StaticString('0', 'A', '9', '1'), new StaticString('0', 'A', '9', '3'), new StaticString('0', 'A', 'A', '8'), new StaticString('0', 'A', 'A', 'A'), new StaticString('0', 'A', 'B', '0'), new StaticString('0', 'A', 'B', '2'), new StaticString('0', 'A', 'B', '3'), new StaticString('0', 'A', 'B', '5'), new StaticString('0', 'A', 'B', '9'), new StaticString('0', 'A', 'B', 'D'), new StaticString('0', 'A', 'D', '0'), new StaticString('0', 'A', 'E', '0'), new StaticString('0', 'A', 'E', '1'), new StaticString('0', 'B', '0', '5'), new StaticString('0', 'B', '0', 'C'), new StaticString('0', 'B', '0', 'F'), new StaticString('0', 'B', '1', '0'), new StaticString('0', 'B', '1', '3'), new StaticString('0', 'B', '2', '8'), new StaticString('0', 'B', '2', 'A'), new StaticString('0', 'B', '3', '0'), new StaticString('0', 'B', '3', '2'), new StaticString('0', 'B', '3', '3'), new StaticString('0', 'B', '3', '5'), new StaticString('0', 'B', '3', '9'), new StaticString('0', 'B', '3', 'D'), new StaticString('0', 'B', '5', 'C'), new StaticString('0', 'B', '5', 'D'), new StaticString('0', 'B', '5', 'F'), new StaticString('0', 'B', '6', '1'), new StaticString('0', 'B', '7', '1'), new StaticString('0', 'B', '8', '3'), new StaticString('0', 'B', '8', '5'), new StaticString('0', 'B', '8', 'A'), new StaticString('0', 'B', '8', 'E'), new StaticString('0', 'B', '9', '0'), new StaticString('0', 'B', '9', '2'), new StaticString('0', 'B', '9', '5'), new StaticString('0', 'B', '9', '9'), new StaticString('0', 'B', '9', 'A'), new StaticString('0', 'B', '9', 'C'), new StaticString('0', 'B', '9', 'E'), new StaticString('0', 'B', '9', 'F'), new StaticString('0', 'B', 'A', '3'), new StaticString('0', 'B', 'A', '4'), new StaticString('0', 'B', 'A', '8'), new StaticString('0', 'B', 'A', 'A'), new StaticString('0', 'B', 'A', 'E'), new StaticString('0', 'B', 'B', '9'), new StaticString('0', 'B', 'D', '0'), new StaticString('0', 'C', '0', '5'), new StaticString('0', 'C', '0', 'C'), new StaticString('0', 'C', '0', 'E'), new StaticString('0', 'C', '1', '0'), new StaticString('0', 'C', '1', '2'), new StaticString('0', 'C', '2', '8'), new StaticString('0', 'C', '2', 'A'), new StaticString('0', 'C', '3', '3'), new StaticString('0', 'C', '3', '5'), new StaticString('0', 'C', '3', '9'), new StaticString('0', 'C', '3', 'D'), new StaticString('0', 'C', '5', '8'), new StaticString('0', 'C', '5', '9'), new StaticString('0', 'C', '6', '0'), new StaticString('0', 'C', '6', '1'), new StaticString('0', 'C', '8', '5'), new StaticString('0', 'C', '8', 'C'), new StaticString('0', 'C', '8', 'E'), new StaticString('0', 'C', '9', '0'), new StaticString('0', 'C', '9', '2'), new StaticString('0', 'C', 'A', '8'), new StaticString('0', 'C', 'A', 'A'), new StaticString('0', 'C', 'B', '3'), new StaticString('0', 'C', 'B', '5'), new StaticString('0', 'C', 'B', '9'), new StaticString('0', 'C', 'B', 'D'), new StaticString('0', 'C', 'D', 'E'), new StaticString('0', 'C', 'E', '0'), new StaticString('0', 'C', 'E', '1'), new StaticString('0', 'C', 'F', '1'), new StaticString('0', 'C', 'F', '2'), new StaticString('0', 'D', '0', '5'), new StaticString('0', 'D', '0', 'C'), new StaticString('0', 'D', '0', 'E'), new StaticString('0', 'D', '1', '0'), new StaticString('0', 'D', '1', '2'), new StaticString('0', 'D', '3', 'A'), new StaticString('0', 'D', '3', 'D'), new StaticString('0', 'D', '4', 'E'), new StaticString('0', 'D', '6', '0'), new StaticString('0', 'D', '6', '1'), new StaticString('0', 'D', '7', 'A'), new StaticString('0', 'D', '7', 'F'), new StaticString('0', 'D', '8', '5'), new StaticString('0', 'D', '9', '6'), new StaticString('0', 'D', '9', 'A'), new StaticString('0', 'D', 'B', '1'), new StaticString('0', 'D', 'B', '3'), new StaticString('0', 'D', 'B', 'B'), new StaticString('0', 'D', 'B', 'D'), new StaticString('0', 'D', 'C', '0'), new StaticString('0', 'D', 'C', '6'), new StaticString('0', 'E', '0', '1'), new StaticString('0', 'E', '3', '0'), new StaticString('0', 'E', '3', '2'), new StaticString('0', 'E', '3', '3'), new StaticString('0', 'E', '4', '0'), new StaticString('0', 'E', '4', '6'), new StaticString('0', 'E', '8', '1'), new StaticString('0', 'E', '8', '2'), new StaticString('0', 'E', '8', '4'), new StaticString('0', 'E', '8', '7'), new StaticString('0', 'E', '8', '8'), new StaticString('0', 'E', '8', 'A'), new StaticString('0', 'E', '8', 'D'), new StaticString('0', 'E', '9', '4'), new StaticString('0', 'E', '9', '7'), new StaticString('0', 'E', '9', '9'), new StaticString('0', 'E', '9', 'F'), new StaticString('0', 'E', 'A', '1'), new StaticString('0', 'E', 'A', '3'), new StaticString('0', 'E', 'A', '5'), new StaticString('0', 'E', 'A', '7'), new StaticString('0', 'E', 'A', 'A'), new StaticString('0', 'E', 'A', 'B'), new StaticString('0', 'E', 'A', 'D'), new StaticString('0', 'E', 'B', '0'), new StaticString('0', 'E', 'B', '2'), new StaticString('0', 'E', 'B', '3'), new StaticString('0', 'E', 'B', 'D'), new StaticString('0', 'E', 'C', '0'), new StaticString('0', 'E', 'C', '4'), new StaticString('0', 'E', 'C', '6'), new StaticString('0', 'E', 'D', 'C'), new StaticString('0', 'E', 'D', 'F'), new StaticString('0', 'F', '0', '0'), new StaticString('0', 'F', '4', '0'), new StaticString('0', 'F', '4', '7'), new StaticString('0', 'F', '4', '9'), new StaticString('0', 'F', '6', 'C'), new StaticString('0', 'F', '8', '8'), new StaticString('0', 'F', '8', 'C'), new StaticString('1', '0', '0', '0'), new StaticString('1', '0', '2', 'A'), new StaticString('1', '0', '3', 'F'), new StaticString('1', '0', '5', '0'), new StaticString('1', '0', '5', '5'), new StaticString('1', '0', '5', 'A'), new StaticString('1', '0', '5', 'D'), new StaticString('1', '0', '6', '1'), new StaticString('1', '0', '6', '5'), new StaticString('1', '0', '6', '6'), new StaticString('1', '0', '6', 'E'), new StaticString('1', '0', '7', '0'), new StaticString('1', '0', '7', '5'), new StaticString('1', '0', '8', '1'), new StaticString('1', '0', '8', 'E'), new StaticString('1', '0', 'A', '0'), new StaticString('1', '0', 'C', '5'), new StaticString('1', '0', 'C', '7'), new StaticString('1', '0', 'C', 'D'), new StaticString('1', '0', 'D', '0'), new StaticString('1', '0', 'F', 'A'), new StaticString('1', '0', 'F', 'C'), new StaticString('1', '2', '4', '8'), new StaticString('1', '2', '4', 'A'), new StaticString('1', '2', '4', 'D'), new StaticString('1', '2', '5', '0'), new StaticString('1', '2', '5', '6'), new StaticString('1', '2', '5', '8'), new StaticString('1', '2', '5', 'A'), new StaticString('1', '2', '5', 'D'), new StaticString('1', '2', '6', '0'), new StaticString('1', '2', '8', '8'), new StaticString('1', '2', '8', 'A'), new StaticString('1', '2', '8', 'D'), new StaticString('1', '2', '9', '0'), new StaticString('1', '2', 'B', '0'), new StaticString('1', '2', 'B', '2'), new StaticString('1', '2', 'B', '5'), new StaticString('1', '2', 'B', '8'), new StaticString('1', '2', 'B', 'E'), new StaticString('1', '2', 'C', '0'), new StaticString('1', '2', 'C', '2'), new StaticString('1', '2', 'C', '5'), new StaticString('1', '2', 'C', '8'), new StaticString('1', '2', 'D', '6'), new StaticString('1', '2', 'D', '8'), new StaticString('1', '3', '1', '0'), new StaticString('1', '3', '1', '2'), new StaticString('1', '3', '1', '5'), new StaticString('1', '3', '1', '8'), new StaticString('1', '3', '5', 'A'), new StaticString('1', '3', '8', '0'), new StaticString('1', '3', '8', 'F'), new StaticString('1', '3', 'A', '0'), new StaticString('1', '3', 'F', '4'), new StaticString('1', '4', '0', '1'), new StaticString('1', '6', '6', 'C'), new StaticString('1', '6', '6', 'F'), new StaticString('1', '6', '7', 'F'), new StaticString('1', '6', '8', '1'), new StaticString('1', '6', '9', 'A'), new StaticString('1', '6', 'A', '0'), new StaticString('1', '6', 'E', 'A'), new StaticString('1', '6', 'E', 'E'), new StaticString('1', '6', 'F', '0'), new StaticString('1', '7', '0', '0'), new StaticString('1', '7', '0', 'C'), new StaticString('1', '7', '0', 'E'), new StaticString('1', '7', '1', '1'), new StaticString('1', '7', '2', '0'), new StaticString('1', '7', '3', '1'), new StaticString('1', '7', '4', '0'), new StaticString('1', '7', '5', '1'), new StaticString('1', '7', '6', '0'), new StaticString('1', '7', '6', 'C'), new StaticString('1', '7', '6', 'E'), new StaticString('1', '7', '7', '0'), new StaticString('1', '7', '8', '0'), new StaticString('1', '7', 'B', '3'), new StaticString('1', '7', 'D', '7'), new StaticString('1', '7', 'D', 'C'), new StaticString('1', '8', '2', '0'), new StaticString('1', '8', '7', '7'), new StaticString('1', '8', '8', '0'), new StaticString('1', '8', 'A', '8'), new StaticString('1', '8', 'A', 'A'), new StaticString('1', '8', 'B', '0'), new StaticString('1', '8', 'F', '5'), new StaticString('1', '9', '0', '0'), new StaticString('1', '9', '1', 'C'), new StaticString('1', '9', '5', '0'), new StaticString('1', '9', '6', 'D'), new StaticString('1', '9', '7', '0'), new StaticString('1', '9', '7', '4'), new StaticString('1', '9', '8', '0'), new StaticString('1', '9', 'A', 'B'), new StaticString('1', '9', 'C', '1'), new StaticString('1', '9', 'C', '7'), new StaticString('1', 'A', '0', '0'), new StaticString('1', 'A', '1', '6'), new StaticString('1', 'A', '2', '0'), new StaticString('1', 'A', '5', '4'), new StaticString('1', 'A', 'A', '7'), new StaticString('1', 'B', '0', '5'), new StaticString('1', 'B', '3', '3'), new StaticString('1', 'B', '4', '5'), new StaticString('1', 'B', '4', 'B'), new StaticString('1', 'B', '8', '3'), new StaticString('1', 'B', 'A', '0'), new StaticString('1', 'B', 'A', 'E'), new StaticString('1', 'B', 'A', 'F'), new StaticString('1', 'B', 'B', 'A'), new StaticString('1', 'B', 'E', '5'), new StaticString('1', 'C', '0', '0'), new StaticString('1', 'C', '2', '3'), new StaticString('1', 'C', '4', 'D'), new StaticString('1', 'C', '4', 'F'), new StaticString('1', 'C', '5', 'A'), new StaticString('1', 'C', '7', 'D'), new StaticString('1', 'C', 'E', '9'), new StaticString('1', 'C', 'E', 'C'), new StaticString('1', 'C', 'E', 'E'), new StaticString('1', 'C', 'F', '1'), new StaticString('1', 'C', 'F', '5'), new StaticString('1', 'C', 'F', '6'), new StaticString('1', 'D', '0', '0'), new StaticString('1', 'D', 'B', 'F'), new StaticString('1', 'E', '0', '0'), new StaticString('1', 'F', '1', '5'), new StaticString('1', 'F', '1', '8'), new StaticString('1', 'F', '1', 'D'), new StaticString('1', 'F', '2', '0'), new StaticString('1', 'F', '4', '5'), new StaticString('1', 'F', '4', '8'), new StaticString('1', 'F', '4', 'D'), new StaticString('1', 'F', '5', '0'), new StaticString('1', 'F', '5', '7'), new StaticString('1', 'F', '5', '9'), new StaticString('1', 'F', '5', 'B'), new StaticString('1', 'F', '5', 'D'), new StaticString('1', 'F', '5', 'F'), new StaticString('1', 'F', '7', 'D'), new StaticString('1', 'F', '8', '0'), new StaticString('1', 'F', 'B', '4'), new StaticString('1', 'F', 'B', '6'), new StaticString('1', 'F', 'B', 'C'), new StaticString('1', 'F', 'B', 'E'), new StaticString('1', 'F', 'C', '2'), new StaticString('1', 'F', 'C', '4'), new StaticString('1', 'F', 'C', '6'), new StaticString('1', 'F', 'C', 'C'), new StaticString('1', 'F', 'D', '0'), new StaticString('1', 'F', 'D', '3'), new StaticString('1', 'F', 'D', '6'), new StaticString('1', 'F', 'D', 'B'), new StaticString('1', 'F', 'E', '0'), new StaticString('1', 'F', 'E', 'C'), new StaticString('1', 'F', 'F', '2'), new StaticString('1', 'F', 'F', '4'), new StaticString('1', 'F', 'F', '6'), new StaticString('1', 'F', 'F', 'C'), new StaticString('2', '0', '7', '1'), new StaticString('2', '0', '7', 'F'), new StaticString('2', '0', '9', '0'), new StaticString('2', '0', '9', 'C'), new StaticString('2', '1', '0', '2'), new StaticString('2', '1', '0', '7'), new StaticString('2', '1', '0', 'A'), new StaticString('2', '1', '1', '3'), new StaticString('2', '1', '1', '5'), new StaticString('2', '1', '1', '9'), new StaticString('2', '1', '1', 'D'), new StaticString('2', '1', '2', '4'), new StaticString('2', '1', '2', '6'), new StaticString('2', '1', '2', '8'), new StaticString('2', '1', '2', 'A'), new StaticString('2', '1', '2', 'D'), new StaticString('2', '1', '2', 'F'), new StaticString('2', '1', '3', '9'), new StaticString('2', '1', '3', 'C'), new StaticString('2', '1', '3', 'F'), new StaticString('2', '1', '4', '5'), new StaticString('2', '1', '4', '9'), new StaticString('2', '1', '4', 'E'), new StaticString('2', '1', '6', '0'), new StaticString('2', '1', '8', '8'), new StaticString('2', 'C', '0', '0'), new StaticString('2', 'C', '2', 'E'), new StaticString('2', 'C', '3', '0'), new StaticString('2', 'C', '5', 'E'), new StaticString('2', 'C', '6', '0'), new StaticString('2', 'C', 'E', '4'), new StaticString('2', 'C', 'E', 'B'), new StaticString('2', 'C', 'E', 'E'), new StaticString('2', 'C', 'F', '2'), new StaticString('2', 'C', 'F', '3'), new StaticString('2', 'D', '0', '0'), new StaticString('2', 'D', '2', '5'), new StaticString('2', 'D', '2', '7'), new StaticString('2', 'D', '2', 'D'), new StaticString('2', 'D', '3', '0'), new StaticString('2', 'D', '6', '7'), new StaticString('2', 'D', '6', 'F'), new StaticString('2', 'D', '8', '0'), new StaticString('2', 'D', '9', '6'), new StaticString('2', 'D', 'A', '0'), new StaticString('2', 'D', 'A', '6'), new StaticString('2', 'D', 'A', '8'), new StaticString('2', 'D', 'A', 'E'), new StaticString('2', 'D', 'B', '0'), new StaticString('2', 'D', 'B', '6'), new StaticString('2', 'D', 'B', '8'), new StaticString('2', 'D', 'B', 'E'), new StaticString('2', 'D', 'C', '0'), new StaticString('2', 'D', 'C', '6'), new StaticString('2', 'D', 'C', '8'), new StaticString('2', 'D', 'C', 'E'), new StaticString('2', 'D', 'D', '0'), new StaticString('2', 'D', 'D', '6'), new StaticString('2', 'D', 'D', '8'), new StaticString('2', 'D', 'D', 'E'), new StaticString('2', 'E', '2', 'F'), new StaticString('3', '0', '0', '5'), new StaticString('3', '0', '0', '7'), new StaticString('3', '0', '2', '1'), new StaticString('3', '0', '2', '9'), new StaticString('3', '0', '3', '1'), new StaticString('3', '0', '3', '5'), new StaticString('3', '0', '3', '8'), new StaticString('3', '0', '3', 'C'), new StaticString('3', '0', '4', '1'), new StaticString('3', '0', '9', '6'), new StaticString('3', '0', '9', 'D'), new StaticString('3', '0', '9', 'F'), new StaticString('3', '0', 'A', '1'), new StaticString('3', '0', 'F', 'A'), new StaticString('3', '0', 'F', 'C'), new StaticString('3', '0', 'F', 'F'), new StaticString('3', '1', '0', '5'), new StaticString('3', '1', '2', 'D'), new StaticString('3', '1', '3', '1'), new StaticString('3', '1', '8', 'E'), new StaticString('3', '1', 'A', '0'), new StaticString('3', '1', 'B', 'A'), new StaticString('3', '1', 'F', '0'), new StaticString('3', '1', 'F', 'F'), new StaticString('3', '4', '0', '0'), new StaticString('4', 'D', 'B', '5'), new StaticString('4', 'E', '0', '0'), new StaticString('9', 'F', 'C', 'C'), new StaticString('A', '0', '0', '0'), new StaticString('A', '4', '8', 'C'), new StaticString('A', '4', 'D', '0'), new StaticString('A', '4', 'F', 'D'), new StaticString('A', '5', '0', '0'), new StaticString('A', '6', '0', 'C'), new StaticString('A', '6', '1', '0'), new StaticString('A', '6', '1', 'F'), new StaticString('A', '6', '2', 'A'), new StaticString('A', '6', '2', 'B'), new StaticString('A', '6', '4', '0'), new StaticString('A', '6', '6', 'E'), new StaticString('A', '6', '7', 'F'), new StaticString('A', '6', '9', '7'), new StaticString('A', '6', 'A', '0'), new StaticString('A', '6', 'E', 'F'), new StaticString('A', '7', '1', '7'), new StaticString('A', '7', '1', 'F'), new StaticString('A', '7', '2', '2'), new StaticString('A', '7', '8', '8'), new StaticString('A', '7', '8', 'B'), new StaticString('A', '7', '8', 'E'), new StaticString('A', '7', '9', '0'), new StaticString('A', '7', '9', '3'), new StaticString('A', '7', 'A', '0'), new StaticString('A', '7', 'A', 'A'), new StaticString('A', '7', 'F', '8'), new StaticString('A', '8', '0', '1'), new StaticString('A', '8', '0', '3'), new StaticString('A', '8', '0', '5'), new StaticString('A', '8', '0', '7'), new StaticString('A', '8', '0', 'A'), new StaticString('A', '8', '0', 'C'), new StaticString('A', '8', '2', '2'), new StaticString('A', '8', '4', '0'), new StaticString('A', '8', '7', '3'), new StaticString('A', '8', '8', '2'), new StaticString('A', '8', 'B', '3'), new StaticString('A', '8', 'F', '2'), new StaticString('A', '8', 'F', '7'), new StaticString('A', '8', 'F', 'B'), new StaticString('A', '9', '0', 'A'), new StaticString('A', '9', '2', '5'), new StaticString('A', '9', '3', '0'), new StaticString('A', '9', '4', '6'), new StaticString('A', '9', '6', '0'), new StaticString('A', '9', '7', 'C'), new StaticString('A', '9', '8', '4'), new StaticString('A', '9', 'B', '2'), new StaticString('A', '9', 'C', 'F'), new StaticString('A', 'A', '0', '0'), new StaticString('A', 'A', '2', '8'), new StaticString('A', 'A', '4', '0'), new StaticString('A', 'A', '4', '2'), new StaticString('A', 'A', '4', '4'), new StaticString('A', 'A', '4', 'B'), new StaticString('A', 'A', '6', '0'), new StaticString('A', 'A', '7', '6'), new StaticString('A', 'A', '7', 'A'), new StaticString('A', 'A', '8', '0'), new StaticString('A', 'A', 'A', 'F'), new StaticString('A', 'A', 'B', '1'), new StaticString('A', 'A', 'B', '5'), new StaticString('A', 'A', 'B', '6'), new StaticString('A', 'A', 'B', '9'), new StaticString('A', 'A', 'B', 'D'), new StaticString('A', 'A', 'C', '0'), new StaticString('A', 'A', 'C', '2'), new StaticString('A', 'A', 'D', 'B'), new StaticString('A', 'A', 'D', 'D'), new StaticString('A', 'A', 'E', '0'), new StaticString('A', 'A', 'E', 'A'), new StaticString('A', 'A', 'F', '2'), new StaticString('A', 'A', 'F', '4'), new StaticString('A', 'B', '0', '1'), new StaticString('A', 'B', '0', '6'), new StaticString('A', 'B', '0', '9'), new StaticString('A', 'B', '0', 'E'), new StaticString('A', 'B', '1', '1'), new StaticString('A', 'B', '1', '6'), new StaticString('A', 'B', '2', '0'), new StaticString('A', 'B', '2', '6'), new StaticString('A', 'B', '2', '8'), new StaticString('A', 'B', '2', 'E'), new StaticString('A', 'B', 'C', '0'), new StaticString('A', 'B', 'E', '2'), new StaticString('A', 'C', '0', '0'), new StaticString('D', '7', 'A', '3'), new StaticString('D', '7', 'B', '0'), new StaticString('D', '7', 'C', '6'), new StaticString('D', '7', 'C', 'B'), new StaticString('D', '7', 'F', 'B'), new StaticString('F', '9', '0', '0'), new StaticString('F', 'A', '6', 'D'), new StaticString('F', 'A', '7', '0'), new StaticString('F', 'A', 'D', '9'), new StaticString('F', 'B', '0', '0'), new StaticString('F', 'B', '0', '6'), new StaticString('F', 'B', '1', '3'), new StaticString('F', 'B', '1', '7'), new StaticString('F', 'B', '1', 'D'), new StaticString('F', 'B', '1', 'F'), new StaticString('F', 'B', '2', '8'), new StaticString('F', 'B', '2', 'A'), new StaticString('F', 'B', '3', '6'), new StaticString('F', 'B', '3', '8'), new StaticString('F', 'B', '3', 'C'), new StaticString('F', 'B', '3', 'E'), new StaticString('F', 'B', '4', '0'), new StaticString('F', 'B', '4', '1'), new StaticString('F', 'B', '4', '3'), new StaticString('F', 'B', '4', '4'), new StaticString('F', 'B', '4', '6'), new StaticString('F', 'B', 'B', '1'), new StaticString('F', 'B', 'D', '3'), new StaticString('F', 'D', '3', 'D'), new StaticString('F', 'D', '5', '0'), new StaticString('F', 'D', '8', 'F'), new StaticString('F', 'D', '9', '2'), new StaticString('F', 'D', 'C', '7'), new StaticString('F', 'D', 'F', '0'), new StaticString('F', 'D', 'F', 'B'), new StaticString('F', 'E', '7', '0'), new StaticString('F', 'E', '7', '4'), new StaticString('F', 'E', '7', '6'), new StaticString('F', 'E', 'F', 'C'), new StaticString('F', 'F', '2', '1'), new StaticString('F', 'F', '3', 'A'), new StaticString('F', 'F', '4', '1'), new StaticString('F', 'F', '5', 'A'), new StaticString('F', 'F', '6', '6'), new StaticString('F', 'F', 'B', 'E'), new StaticString('F', 'F', 'C', '2'), new StaticString('F', 'F', 'C', '7'), new StaticString('F', 'F', 'C', 'A'), new StaticString('F', 'F', 'C', 'F'), new StaticString('F', 'F', 'D', '2'), new StaticString('F', 'F', 'D', '7'), new StaticString('F', 'F', 'D', 'A'), new StaticString('F', 'F', 'D', 'C')];
      var continueCodes = [new StaticString('0', '3', '0', '0'), new StaticString('0', '3', '6', 'F'), new StaticString('0', '4', '8', '3'), new StaticString('0', '4', '8', '7'), new StaticString('0', '5', '9', '1'), new StaticString('0', '5', 'B', 'D'), new StaticString('0', '5', 'B', 'F'), new StaticString('0', '5', 'C', '1'), new StaticString('0', '5', 'C', '2'), new StaticString('0', '5', 'C', '4'), new StaticString('0', '5', 'C', '5'), new StaticString('0', '5', 'C', '7'), new StaticString('0', '6', '1', '0'), new StaticString('0', '6', '1', 'A'), new StaticString('0', '6', '4', 'B'), new StaticString('0', '6', '6', '9'), new StaticString('0', '6', '7', '0'), new StaticString('0', '6', 'D', '6'), new StaticString('0', '6', 'D', 'C'), new StaticString('0', '6', 'D', 'F'), new StaticString('0', '6', 'E', '4'), new StaticString('0', '6', 'E', '7'), new StaticString('0', '6', 'E', '8'), new StaticString('0', '6', 'E', 'A'), new StaticString('0', '6', 'E', 'D'), new StaticString('0', '6', 'F', '0'), new StaticString('0', '6', 'F', '9'), new StaticString('0', '7', '1', '1'), new StaticString('0', '7', '3', '0'), new StaticString('0', '7', '4', 'A'), new StaticString('0', '7', 'A', '6'), new StaticString('0', '7', 'B', '0'), new StaticString('0', '7', 'C', '0'), new StaticString('0', '7', 'C', '9'), new StaticString('0', '7', 'E', 'B'), new StaticString('0', '7', 'F', '3'), new StaticString('0', '8', '1', '6'), new StaticString('0', '8', '1', '9'), new StaticString('0', '8', '1', 'B'), new StaticString('0', '8', '2', '3'), new StaticString('0', '8', '2', '5'), new StaticString('0', '8', '2', '7'), new StaticString('0', '8', '2', '9'), new StaticString('0', '8', '2', 'D'), new StaticString('0', '8', '5', '9'), new StaticString('0', '8', '5', 'B'), new StaticString('0', '8', 'E', '4'), new StaticString('0', '8', 'F', 'E'), new StaticString('0', '9', '0', '0'), new StaticString('0', '9', '0', '3'), new StaticString('0', '9', '3', 'A'), new StaticString('0', '9', '3', 'C'), new StaticString('0', '9', '3', 'E'), new StaticString('0', '9', '4', 'F'), new StaticString('0', '9', '5', '1'), new StaticString('0', '9', '5', '7'), new StaticString('0', '9', '6', '2'), new StaticString('0', '9', '6', '3'), new StaticString('0', '9', '6', '6'), new StaticString('0', '9', '6', 'F'), new StaticString('0', '9', '8', '1'), new StaticString('0', '9', '8', '3'), new StaticString('0', '9', 'B', 'C'), new StaticString('0', '9', 'B', 'E'), new StaticString('0', '9', 'C', '4'), new StaticString('0', '9', 'C', '7'), new StaticString('0', '9', 'C', '8'), new StaticString('0', '9', 'C', 'B'), new StaticString('0', '9', 'C', 'D'), new StaticString('0', '9', 'D', '7'), new StaticString('0', '9', 'E', '2'), new StaticString('0', '9', 'E', '3'), new StaticString('0', '9', 'E', '6'), new StaticString('0', '9', 'E', 'F'), new StaticString('0', 'A', '0', '1'), new StaticString('0', 'A', '0', '3'), new StaticString('0', 'A', '3', 'C'), new StaticString('0', 'A', '3', 'E'), new StaticString('0', 'A', '4', '2'), new StaticString('0', 'A', '4', '7'), new StaticString('0', 'A', '4', '8'), new StaticString('0', 'A', '4', 'B'), new StaticString('0', 'A', '4', 'D'), new StaticString('0', 'A', '5', '1'), new StaticString('0', 'A', '6', '6'), new StaticString('0', 'A', '7', '1'), new StaticString('0', 'A', '7', '5'), new StaticString('0', 'A', '8', '1'), new StaticString('0', 'A', '8', '3'), new StaticString('0', 'A', 'B', 'C'), new StaticString('0', 'A', 'B', 'E'), new StaticString('0', 'A', 'C', '5'), new StaticString('0', 'A', 'C', '7'), new StaticString('0', 'A', 'C', '9'), new StaticString('0', 'A', 'C', 'B'), new StaticString('0', 'A', 'C', 'D'), new StaticString('0', 'A', 'E', '2'), new StaticString('0', 'A', 'E', '3'), new StaticString('0', 'A', 'E', '6'), new StaticString('0', 'A', 'E', 'F'), new StaticString('0', 'B', '0', '1'), new StaticString('0', 'B', '0', '3'), new StaticString('0', 'B', '3', 'C'), new StaticString('0', 'B', '3', 'E'), new StaticString('0', 'B', '4', '4'), new StaticString('0', 'B', '4', '7'), new StaticString('0', 'B', '4', '8'), new StaticString('0', 'B', '4', 'B'), new StaticString('0', 'B', '4', 'D'), new StaticString('0', 'B', '5', '6'), new StaticString('0', 'B', '5', '7'), new StaticString('0', 'B', '6', '2'), new StaticString('0', 'B', '6', '3'), new StaticString('0', 'B', '6', '6'), new StaticString('0', 'B', '6', 'F'), new StaticString('0', 'B', '8', '2'), new StaticString('0', 'B', 'B', 'E'), new StaticString('0', 'B', 'C', '2'), new StaticString('0', 'B', 'C', '6'), new StaticString('0', 'B', 'C', '8'), new StaticString('0', 'B', 'C', 'A'), new StaticString('0', 'B', 'C', 'D'), new StaticString('0', 'B', 'D', '7'), new StaticString('0', 'B', 'E', '6'), new StaticString('0', 'B', 'E', 'F'), new StaticString('0', 'C', '0', '1'), new StaticString('0', 'C', '0', '3'), new StaticString('0', 'C', '3', 'E'), new StaticString('0', 'C', '4', '4'), new StaticString('0', 'C', '4', '6'), new StaticString('0', 'C', '4', '8'), new StaticString('0', 'C', '4', 'A'), new StaticString('0', 'C', '4', 'D'), new StaticString('0', 'C', '5', '5'), new StaticString('0', 'C', '5', '6'), new StaticString('0', 'C', '6', '2'), new StaticString('0', 'C', '6', '3'), new StaticString('0', 'C', '6', '6'), new StaticString('0', 'C', '6', 'F'), new StaticString('0', 'C', '8', '2'), new StaticString('0', 'C', '8', '3'), new StaticString('0', 'C', 'B', 'C'), new StaticString('0', 'C', 'B', 'E'), new StaticString('0', 'C', 'C', '4'), new StaticString('0', 'C', 'C', '6'), new StaticString('0', 'C', 'C', '8'), new StaticString('0', 'C', 'C', 'A'), new StaticString('0', 'C', 'C', 'D'), new StaticString('0', 'C', 'D', '5'), new StaticString('0', 'C', 'D', '6'), new StaticString('0', 'C', 'E', '2'), new StaticString('0', 'C', 'E', '3'), new StaticString('0', 'C', 'E', '6'), new StaticString('0', 'C', 'E', 'F'), new StaticString('0', 'D', '0', '2'), new StaticString('0', 'D', '0', '3'), new StaticString('0', 'D', '3', 'E'), new StaticString('0', 'D', '4', '4'), new StaticString('0', 'D', '4', '6'), new StaticString('0', 'D', '4', '8'), new StaticString('0', 'D', '4', 'A'), new StaticString('0', 'D', '4', 'D'), new StaticString('0', 'D', '5', '7'), new StaticString('0', 'D', '6', '2'), new StaticString('0', 'D', '6', '3'), new StaticString('0', 'D', '6', '6'), new StaticString('0', 'D', '6', 'F'), new StaticString('0', 'D', '8', '2'), new StaticString('0', 'D', '8', '3'), new StaticString('0', 'D', 'C', 'A'), new StaticString('0', 'D', 'C', 'F'), new StaticString('0', 'D', 'D', '4'), new StaticString('0', 'D', 'D', '6'), new StaticString('0', 'D', 'D', '8'), new StaticString('0', 'D', 'D', 'F'), new StaticString('0', 'D', 'F', '2'), new StaticString('0', 'D', 'F', '3'), new StaticString('0', 'E', '3', '1'), new StaticString('0', 'E', '3', '4'), new StaticString('0', 'E', '3', 'A'), new StaticString('0', 'E', '4', '7'), new StaticString('0', 'E', '4', 'E'), new StaticString('0', 'E', '5', '0'), new StaticString('0', 'E', '5', '9'), new StaticString('0', 'E', 'B', '1'), new StaticString('0', 'E', 'B', '4'), new StaticString('0', 'E', 'B', '9'), new StaticString('0', 'E', 'B', 'B'), new StaticString('0', 'E', 'B', 'C'), new StaticString('0', 'E', 'C', '8'), new StaticString('0', 'E', 'C', 'D'), new StaticString('0', 'E', 'D', '0'), new StaticString('0', 'E', 'D', '9'), new StaticString('0', 'F', '1', '8'), new StaticString('0', 'F', '1', '9'), new StaticString('0', 'F', '2', '0'), new StaticString('0', 'F', '2', '9'), new StaticString('0', 'F', '3', '5'), new StaticString('0', 'F', '3', '7'), new StaticString('0', 'F', '3', '9'), new StaticString('0', 'F', '3', 'E'), new StaticString('0', 'F', '3', 'F'), new StaticString('0', 'F', '7', '1'), new StaticString('0', 'F', '8', '4'), new StaticString('0', 'F', '8', '6'), new StaticString('0', 'F', '8', '7'), new StaticString('0', 'F', '8', 'D'), new StaticString('0', 'F', '9', '7'), new StaticString('0', 'F', '9', '9'), new StaticString('0', 'F', 'B', 'C'), new StaticString('0', 'F', 'C', '6'), new StaticString('1', '0', '2', 'B'), new StaticString('1', '0', '3', 'E'), new StaticString('1', '0', '4', '0'), new StaticString('1', '0', '4', '9'), new StaticString('1', '0', '5', '6'), new StaticString('1', '0', '5', '9'), new StaticString('1', '0', '5', 'E'), new StaticString('1', '0', '6', '0'), new StaticString('1', '0', '6', '2'), new StaticString('1', '0', '6', '4'), new StaticString('1', '0', '6', '7'), new StaticString('1', '0', '6', 'D'), new StaticString('1', '0', '7', '1'), new StaticString('1', '0', '7', '4'), new StaticString('1', '0', '8', '2'), new StaticString('1', '0', '8', 'D'), new StaticString('1', '0', '8', 'F'), new StaticString('1', '0', '9', 'D'), new StaticString('1', '3', '5', 'D'), new StaticString('1', '3', '5', 'F'), new StaticString('1', '7', '1', '2'), new StaticString('1', '7', '1', '4'), new StaticString('1', '7', '3', '2'), new StaticString('1', '7', '3', '4'), new StaticString('1', '7', '5', '2'), new StaticString('1', '7', '5', '3'), new StaticString('1', '7', '7', '2'), new StaticString('1', '7', '7', '3'), new StaticString('1', '7', 'B', '4'), new StaticString('1', '7', 'D', '3'), new StaticString('1', '7', 'D', 'D'), new StaticString('1', '7', 'E', '0'), new StaticString('1', '7', 'E', '9'), new StaticString('1', '8', '0', 'B'), new StaticString('1', '8', '0', 'D'), new StaticString('1', '8', '1', '0'), new StaticString('1', '8', '1', '9'), new StaticString('1', '8', 'A', '9'), new StaticString('1', '9', '2', '0'), new StaticString('1', '9', '2', 'B'), new StaticString('1', '9', '3', '0'), new StaticString('1', '9', '3', 'B'), new StaticString('1', '9', '4', '6'), new StaticString('1', '9', '4', 'F'), new StaticString('1', '9', 'B', '0'), new StaticString('1', '9', 'C', '0'), new StaticString('1', '9', 'C', '8'), new StaticString('1', '9', 'C', '9'), new StaticString('1', '9', 'D', '0'), new StaticString('1', '9', 'D', '9'), new StaticString('1', 'A', '1', '7'), new StaticString('1', 'A', '1', 'B'), new StaticString('1', 'A', '5', '5'), new StaticString('1', 'A', '5', 'E'), new StaticString('1', 'A', '6', '0'), new StaticString('1', 'A', '7', 'C'), new StaticString('1', 'A', '7', 'F'), new StaticString('1', 'A', '8', '9'), new StaticString('1', 'A', '9', '0'), new StaticString('1', 'A', '9', '9'), new StaticString('1', 'B', '0', '0'), new StaticString('1', 'B', '0', '4'), new StaticString('1', 'B', '3', '4'), new StaticString('1', 'B', '4', '4'), new StaticString('1', 'B', '5', '0'), new StaticString('1', 'B', '5', '9'), new StaticString('1', 'B', '6', 'B'), new StaticString('1', 'B', '7', '3'), new StaticString('1', 'B', '8', '0'), new StaticString('1', 'B', '8', '2'), new StaticString('1', 'B', 'A', '1'), new StaticString('1', 'B', 'A', 'D'), new StaticString('1', 'B', 'B', '0'), new StaticString('1', 'B', 'B', '9'), new StaticString('1', 'B', 'E', '6'), new StaticString('1', 'B', 'F', '3'), new StaticString('1', 'C', '2', '4'), new StaticString('1', 'C', '3', '7'), new StaticString('1', 'C', '4', '0'), new StaticString('1', 'C', '4', '9'), new StaticString('1', 'C', '5', '0'), new StaticString('1', 'C', '5', '9'), new StaticString('1', 'C', 'D', '0'), new StaticString('1', 'C', 'D', '2'), new StaticString('1', 'C', 'D', '4'), new StaticString('1', 'C', 'E', '8'), new StaticString('1', 'C', 'E', 'D'), new StaticString('1', 'C', 'F', '2'), new StaticString('1', 'C', 'F', '4'), new StaticString('1', 'D', 'C', '0'), new StaticString('1', 'D', 'E', '6'), new StaticString('1', 'D', 'F', 'C'), new StaticString('1', 'D', 'F', 'F'), new StaticString('2', '0', '0', 'C'), new StaticString('2', '0', '0', 'D'), new StaticString('2', '0', '3', 'F'), new StaticString('2', '0', '4', '0'), new StaticString('2', '0', '5', '4'), new StaticString('2', '0', 'D', '0'), new StaticString('2', '0', 'D', 'C'), new StaticString('2', '0', 'E', '1'), new StaticString('2', '0', 'E', '5'), new StaticString('2', '0', 'F', '0'), new StaticString('2', 'C', 'E', 'F'), new StaticString('2', 'C', 'F', '1'), new StaticString('2', 'D', '7', 'F'), new StaticString('2', 'D', 'E', '0'), new StaticString('2', 'D', 'F', 'F'), new StaticString('3', '0', '2', 'A'), new StaticString('3', '0', '2', 'F'), new StaticString('3', '0', '9', '9'), new StaticString('3', '0', '9', 'A'), new StaticString('A', '6', '2', '0'), new StaticString('A', '6', '2', '9'), new StaticString('A', '6', '6', 'F'), new StaticString('A', '6', '7', '4'), new StaticString('A', '6', '7', 'D'), new StaticString('A', '6', '9', 'F'), new StaticString('A', '6', 'F', '0'), new StaticString('A', '6', 'F', '1'), new StaticString('A', '8', '0', '2'), new StaticString('A', '8', '0', '6'), new StaticString('A', '8', '0', 'B'), new StaticString('A', '8', '2', '3'), new StaticString('A', '8', '2', '7'), new StaticString('A', '8', '8', '0'), new StaticString('A', '8', '8', '1'), new StaticString('A', '8', 'B', '4'), new StaticString('A', '8', 'C', '4'), new StaticString('A', '8', 'D', '0'), new StaticString('A', '8', 'D', '9'), new StaticString('A', '8', 'E', '0'), new StaticString('A', '8', 'F', '1'), new StaticString('A', '9', '0', '0'), new StaticString('A', '9', '0', '9'), new StaticString('A', '9', '2', '6'), new StaticString('A', '9', '2', 'D'), new StaticString('A', '9', '4', '7'), new StaticString('A', '9', '5', '3'), new StaticString('A', '9', '8', '0'), new StaticString('A', '9', '8', '3'), new StaticString('A', '9', 'B', '3'), new StaticString('A', '9', 'C', '0'), new StaticString('A', '9', 'D', '0'), new StaticString('A', '9', 'D', '9'), new StaticString('A', 'A', '2', '9'), new StaticString('A', 'A', '3', '6'), new StaticString('A', 'A', '4', '3'), new StaticString('A', 'A', '4', 'C'), new StaticString('A', 'A', '4', 'D'), new StaticString('A', 'A', '5', '0'), new StaticString('A', 'A', '5', '9'), new StaticString('A', 'A', '7', 'B'), new StaticString('A', 'A', 'B', '0'), new StaticString('A', 'A', 'B', '2'), new StaticString('A', 'A', 'B', '4'), new StaticString('A', 'A', 'B', '7'), new StaticString('A', 'A', 'B', '8'), new StaticString('A', 'A', 'B', 'E'), new StaticString('A', 'A', 'B', 'F'), new StaticString('A', 'A', 'C', '1'), new StaticString('A', 'A', 'E', 'B'), new StaticString('A', 'A', 'E', 'F'), new StaticString('A', 'A', 'F', '5'), new StaticString('A', 'A', 'F', '6'), new StaticString('A', 'B', 'E', '3'), new StaticString('A', 'B', 'E', 'A'), new StaticString('A', 'B', 'E', 'C'), new StaticString('A', 'B', 'E', 'D'), new StaticString('A', 'B', 'F', '0'), new StaticString('A', 'B', 'F', '9'), new StaticString('F', 'B', '1', 'E'), new StaticString('F', 'E', '0', '0'), new StaticString('F', 'E', '0', 'F'), new StaticString('F', 'E', '2', '0'), new StaticString('F', 'E', '2', '6'), new StaticString('F', 'E', '3', '3'), new StaticString('F', 'E', '3', '4'), new StaticString('F', 'E', '4', 'D'), new StaticString('F', 'E', '4', 'F'), new StaticString('F', 'F', '1', '0'), new StaticString('F', 'F', '1', '9'), new StaticString('F', 'F', '3', 'F')];

      // ...
      function stringIsUnicode(codes, index) {
        if (index + 5 < stringLength && '\\' === Functions.stringAt(string, index++) && 'u' === Functions.stringAt(string, index++))
        for (var codesIndex = codes.length; codesIndex; ) {
          var code = codes[--codesIndex];

          for (var subindex = 4; subindex--; ) {
            if (code[subindex] !== Functions.stringAt(string, index + subindex)) break;
            if (+0 === subindex) return true
          }
        }

        return false
      }

      // ...
      if (+0 === stringIndex)
      return false;

      while (stringIndex !== stringLength) {
        if (Functions.stringIsIdentifierContinue(Functions.stringAt(string, stringIndex))) ++stringIndex;
        else if (stringIsUnicode(continueCodes, stringIndex)) stringIndex += 6;
        else return false
      }

      return true
    };

    Functions.stringIsIdentifierContinue = function stringIsIdentifierContinue(character) /* UPDATE (Lapys) -> Not exhaustive enough */ {
      return (
        Functions.stringIsDigit(character) ||
        Functions.stringIsIdentifierStart(character) ||
        character === '\u0300' || character === '\u036F' || character === '\u0483' || character === '\u0487' || character === '\u0591' || character === '\u05BD' || character === '\u05BF' || character === '\u05C1' || character === '\u05C2' || character === '\u05C4' || character === '\u05C5' || character === '\u05C7' || character === '\u0610' || character === '\u061A' || character === '\u064B' || character === '\u0669' || character === '\u0670' || character === '\u06D6' || character === '\u06DC' || character === '\u06DF' || character === '\u06E4' || character === '\u06E7' || character === '\u06E8' || character === '\u06EA' || character === '\u06ED' || character === '\u06F0' || character === '\u06F9' || character === '\u0711' || character === '\u0730' || character === '\u074A' || character === '\u07A6' || character === '\u07B0' || character === '\u07C0' || character === '\u07C9' || character === '\u07EB' || character === '\u07F3' || character === '\u0816' || character === '\u0819' || character === '\u081B' || character === '\u0823' || character === '\u0825' || character === '\u0827' || character === '\u0829' || character === '\u082D' || character === '\u0859' || character === '\u085B' || character === '\u08E4' || character === '\u08FE' || character === '\u0900' || character === '\u0903' || character === '\u093A' || character === '\u093C' || character === '\u093E' || character === '\u094F' || character === '\u0951' || character === '\u0957' || character === '\u0962' || character === '\u0963' || character === '\u0966' || character === '\u096F' || character === '\u0981' || character === '\u0983' || character === '\u09BC' || character === '\u09BE' || character === '\u09C4' || character === '\u09C7' || character === '\u09C8' || character === '\u09CB' || character === '\u09CD' || character === '\u09D7' || character === '\u09E2' || character === '\u09E3' || character === '\u09E6' || character === '\u09EF' || character === '\u0A01' || character === '\u0A03' || character === '\u0A3C' || character === '\u0A3E' || character === '\u0A42' || character === '\u0A47' || character === '\u0A48' || character === '\u0A4B' || character === '\u0A4D' || character === '\u0A51' || character === '\u0A66' || character === '\u0A71' || character === '\u0A75' || character === '\u0A81' || character === '\u0A83' || character === '\u0ABC' || character === '\u0ABE' || character === '\u0AC5' || character === '\u0AC7' || character === '\u0AC9' || character === '\u0ACB' || character === '\u0ACD' || character === '\u0AE2' || character === '\u0AE3' || character === '\u0AE6' || character === '\u0AEF' || character === '\u0B01' || character === '\u0B03' || character === '\u0B3C' || character === '\u0B3E' || character === '\u0B44' || character === '\u0B47' || character === '\u0B48' || character === '\u0B4B' || character === '\u0B4D' || character === '\u0B56' || character === '\u0B57' || character === '\u0B62' || character === '\u0B63' || character === '\u0B66' || character === '\u0B6F' || character === '\u0B82' || character === '\u0BBE' || character === '\u0BC2' || character === '\u0BC6' || character === '\u0BC8' || character === '\u0BCA' || character === '\u0BCD' || character === '\u0BD7' || character === '\u0BE6' || character === '\u0BEF' || character === '\u0C01' || character === '\u0C03' || character === '\u0C3E' || character === '\u0C44' || character === '\u0C46' || character === '\u0C48' || character === '\u0C4A' || character === '\u0C4D' || character === '\u0C55' || character === '\u0C56' || character === '\u0C62' || character === '\u0C63' || character === '\u0C66' || character === '\u0C6F' || character === '\u0C82' || character === '\u0C83' || character === '\u0CBC' || character === '\u0CBE' || character === '\u0CC4' || character === '\u0CC6' || character === '\u0CC8' || character === '\u0CCA' || character === '\u0CCD' || character === '\u0CD5' || character === '\u0CD6' || character === '\u0CE2' || character === '\u0CE3' || character === '\u0CE6' || character === '\u0CEF' || character === '\u0D02' || character === '\u0D03' || character === '\u0D3E' || character === '\u0D44' || character === '\u0D46' || character === '\u0D48' || character === '\u0D4A' || character === '\u0D4D' || character === '\u0D57' || character === '\u0D62' || character === '\u0D63' || character === '\u0D66' || character === '\u0D6F' || character === '\u0D82' || character === '\u0D83' || character === '\u0DCA' || character === '\u0DCF' || character === '\u0DD4' || character === '\u0DD6' || character === '\u0DD8' || character === '\u0DDF' || character === '\u0DF2' || character === '\u0DF3' || character === '\u0E31' || character === '\u0E34' || character === '\u0E3A' || character === '\u0E47' || character === '\u0E4E' || character === '\u0E50' || character === '\u0E59' || character === '\u0EB1' || character === '\u0EB4' || character === '\u0EB9' || character === '\u0EBB' || character === '\u0EBC' || character === '\u0EC8' || character === '\u0ECD' || character === '\u0ED0' || character === '\u0ED9' || character === '\u0F18' || character === '\u0F19' || character === '\u0F20' || character === '\u0F29' || character === '\u0F35' || character === '\u0F37' || character === '\u0F39' || character === '\u0F3E' || character === '\u0F3F' || character === '\u0F71' || character === '\u0F84' || character === '\u0F86' || character === '\u0F87' || character === '\u0F8D' || character === '\u0F97' || character === '\u0F99' || character === '\u0FBC' || character === '\u0FC6' || character === '\u102B' || character === '\u103E' || character === '\u1040' || character === '\u1049' || character === '\u1056' || character === '\u1059' || character === '\u105E' || character === '\u1060' || character === '\u1062' || character === '\u1064' || character === '\u1067' || character === '\u106D' || character === '\u1071' || character === '\u1074' || character === '\u1082' || character === '\u108D' || character === '\u108F' || character === '\u109D' || character === '\u135D' || character === '\u135F' || character === '\u1712' || character === '\u1714' || character === '\u1732' || character === '\u1734' || character === '\u1752' || character === '\u1753' || character === '\u1772' || character === '\u1773' || character === '\u17B4' || character === '\u17D3' || character === '\u17DD' || character === '\u17E0' || character === '\u17E9' || character === '\u180B' || character === '\u180D' || character === '\u1810' || character === '\u1819' || character === '\u18A9' || character === '\u1920' || character === '\u192B' || character === '\u1930' || character === '\u193B' || character === '\u1946' || character === '\u194F' || character === '\u19B0' || character === '\u19C0' || character === '\u19C8' || character === '\u19C9' || character === '\u19D0' || character === '\u19D9' || character === '\u1A17' || character === '\u1A1B' || character === '\u1A55' || character === '\u1A5E' || character === '\u1A60' || character === '\u1A7C' || character === '\u1A7F' || character === '\u1A89' || character === '\u1A90' || character === '\u1A99' || character === '\u1B00' || character === '\u1B04' || character === '\u1B34' || character === '\u1B44' || character === '\u1B50' || character === '\u1B59' || character === '\u1B6B' || character === '\u1B73' || character === '\u1B80' || character === '\u1B82' || character === '\u1BA1' || character === '\u1BAD' || character === '\u1BB0' || character === '\u1BB9' || character === '\u1BE6' || character === '\u1BF3' || character === '\u1C24' || character === '\u1C37' || character === '\u1C40' || character === '\u1C49' || character === '\u1C50' || character === '\u1C59' || character === '\u1CD0' || character === '\u1CD2' || character === '\u1CD4' || character === '\u1CE8' || character === '\u1CED' || character === '\u1CF2' || character === '\u1CF4' || character === '\u1DC0' || character === '\u1DE6' || character === '\u1DFC' || character === '\u1DFF' || character === '\u200C' || character === '\u200D' || character === '\u203F' || character === '\u2040' || character === '\u2054' || character === '\u20D0' || character === '\u20DC' || character === '\u20E1' || character === '\u20E5' || character === '\u20F0' || character === '\u2CEF' || character === '\u2CF1' || character === '\u2D7F' || character === '\u2DE0' || character === '\u2DFF' || character === '\u302A' || character === '\u302F' || character === '\u3099' || character === '\u309A' || character === '\uA620' || character === '\uA629' || character === '\uA66F' || character === '\uA674' || character === '\uA67D' || character === '\uA69F' || character === '\uA6F0' || character === '\uA6F1' || character === '\uA802' || character === '\uA806' || character === '\uA80B' || character === '\uA823' || character === '\uA827' || character === '\uA880' || character === '\uA881' || character === '\uA8B4' || character === '\uA8C4' || character === '\uA8D0' || character === '\uA8D9' || character === '\uA8E0' || character === '\uA8F1' || character === '\uA900' || character === '\uA909' || character === '\uA926' || character === '\uA92D' || character === '\uA947' || character === '\uA953' || character === '\uA980' || character === '\uA983' || character === '\uA9B3' || character === '\uA9C0' || character === '\uA9D0' || character === '\uA9D9' || character === '\uAA29' || character === '\uAA36' || character === '\uAA43' || character === '\uAA4C' || character === '\uAA4D' || character === '\uAA50' || character === '\uAA59' || character === '\uAA7B' || character === '\uAAB0' || character === '\uAAB2' || character === '\uAAB4' || character === '\uAAB7' || character === '\uAAB8' || character === '\uAABE' || character === '\uAABF' || character === '\uAAC1' || character === '\uAAEB' || character === '\uAAEF' || character === '\uAAF5' || character === '\uAAF6' || character === '\uABE3' || character === '\uABEA' || character === '\uABEC' || character === '\uABED' || character === '\uABF0' || character === '\uABF9' || character === '\uFB1E' || character === '\uFE00' || character === '\uFE0F' || character === '\uFE20' || character === '\uFE26' || character === '\uFE33' || character === '\uFE34' || character === '\uFE4D' || character === '\uFE4F' || character === '\uFF10' || character === '\uFF19' || character === '\uFF3F'
      )
    };

    Functions.stringIsIdentifierStart = function stringIsIdentifierStart(character) /* UPDATE (Lapys) -> Not exhaustive enough */ {
      return (
        character === 'A' || character === 'B' || character === 'C' || character === 'D' || character === 'E' || character === 'F' || character === 'G' || character === 'H' || character === 'I' || character === 'J' || character === 'K' || character === 'L' || character === 'M' || character === 'N' || character === 'O' || character === 'P' || character === 'Q' || character === 'R' || character === 'S' || character === 'T' || character === 'U' || character === 'V' || character === 'W' || character === 'X' || character === 'Y' || character === 'Z' ||
        character === 'a' || character === 'b' || character === 'c' || character === 'd' || character === 'e' || character === 'f' || character === 'g' || character === 'h' || character === 'i' || character === 'j' || character === 'k' || character === 'l' || character === 'm' || character === 'n' || character === 'o' || character === 'p' || character === 'q' || character === 'r' || character === 's' || character === 't' || character === 'u' || character === 'v' || character === 'w' || character === 'x' || character === 'y' || character === 'z' ||
        character === '_' ||
        character === '\u02C1' || character === '\u02C6' || character === '\u02D1' || character === '\u02E0' || character === '\u02E4' || character === '\u02EC' || character === '\u02EE' || character === '\u0370' || character === '\u0374' || character === '\u0376' || character === '\u0377' || character === '\u037A' || character === '\u037D' || character === '\u0386' || character === '\u0388' || character === '\u038A' || character === '\u038C' || character === '\u038E' || character === '\u03A1' || character === '\u03A3' || character === '\u03F5' || character === '\u03F7' || character === '\u0481' || character === '\u048A' || character === '\u0527' || character === '\u0531' || character === '\u0556' || character === '\u0559' || character === '\u0561' || character === '\u0587' || character === '\u05D0' || character === '\u05EA' || character === '\u05F0' || character === '\u05F2' || character === '\u0620' || character === '\u064A' || character === '\u066E' || character === '\u066F' || character === '\u0671' || character === '\u06D3' || character === '\u06D5' || character === '\u06E5' || character === '\u06E6' || character === '\u06EE' || character === '\u06EF' || character === '\u06FA' || character === '\u06FC' || character === '\u06FF' || character === '\u0710' || character === '\u0712' || character === '\u072F' || character === '\u074D' || character === '\u07A5' || character === '\u07B1' || character === '\u07CA' || character === '\u07EA' || character === '\u07F4' || character === '\u07F5' || character === '\u07FA' || character === '\u0800' || character === '\u0815' || character === '\u081A' || character === '\u0824' || character === '\u0828' || character === '\u0840' || character === '\u0858' || character === '\u08A0' || character === '\u08A2' || character === '\u08AC' || character === '\u0904' || character === '\u0939' || character === '\u093D' || character === '\u0950' || character === '\u0958' || character === '\u0961' || character === '\u0971' || character === '\u0977' || character === '\u0979' || character === '\u097F' || character === '\u0985' || character === '\u098C' || character === '\u098F' || character === '\u0990' || character === '\u0993' || character === '\u09A8' || character === '\u09AA' || character === '\u09B0' || character === '\u09B2' || character === '\u09B6' || character === '\u09B9' || character === '\u09BD' || character === '\u09CE' || character === '\u09DC' || character === '\u09DD' || character === '\u09DF' || character === '\u09E1' || character === '\u09F0' || character === '\u09F1' || character === '\u0A05' || character === '\u0A0A' || character === '\u0A0F' || character === '\u0A10' || character === '\u0A13' || character === '\u0A28' || character === '\u0A2A' || character === '\u0A30' || character === '\u0A32' || character === '\u0A33' || character === '\u0A35' || character === '\u0A36' || character === '\u0A38' || character === '\u0A39' || character === '\u0A59' || character === '\u0A5C' || character === '\u0A5E' || character === '\u0A72' || character === '\u0A74' || character === '\u0A85' || character === '\u0A8D' || character === '\u0A8F' || character === '\u0A91' || character === '\u0A93' || character === '\u0AA8' || character === '\u0AAA' || character === '\u0AB0' || character === '\u0AB2' || character === '\u0AB3' || character === '\u0AB5' || character === '\u0AB9' || character === '\u0ABD' || character === '\u0AD0' || character === '\u0AE0' || character === '\u0AE1' || character === '\u0B05' || character === '\u0B0C' || character === '\u0B0F' || character === '\u0B10' || character === '\u0B13' || character === '\u0B28' || character === '\u0B2A' || character === '\u0B30' || character === '\u0B32' || character === '\u0B33' || character === '\u0B35' || character === '\u0B39' || character === '\u0B3D' || character === '\u0B5C' || character === '\u0B5D' || character === '\u0B5F' || character === '\u0B61' || character === '\u0B71' || character === '\u0B83' || character === '\u0B85' || character === '\u0B8A' || character === '\u0B8E' || character === '\u0B90' || character === '\u0B92' || character === '\u0B95' || character === '\u0B99' || character === '\u0B9A' || character === '\u0B9C' || character === '\u0B9E' || character === '\u0B9F' || character === '\u0BA3' || character === '\u0BA4' || character === '\u0BA8' || character === '\u0BAA' || character === '\u0BAE' || character === '\u0BB9' || character === '\u0BD0' || character === '\u0C05' || character === '\u0C0C' || character === '\u0C0E' || character === '\u0C10' || character === '\u0C12' || character === '\u0C28' || character === '\u0C2A' || character === '\u0C33' || character === '\u0C35' || character === '\u0C39' || character === '\u0C3D' || character === '\u0C58' || character === '\u0C59' || character === '\u0C60' || character === '\u0C61' || character === '\u0C85' || character === '\u0C8C' || character === '\u0C8E' || character === '\u0C90' || character === '\u0C92' || character === '\u0CA8' || character === '\u0CAA' || character === '\u0CB3' || character === '\u0CB5' || character === '\u0CB9' || character === '\u0CBD' || character === '\u0CDE' || character === '\u0CE0' || character === '\u0CE1' || character === '\u0CF1' || character === '\u0CF2' || character === '\u0D05' || character === '\u0D0C' || character === '\u0D0E' || character === '\u0D10' || character === '\u0D12' || character === '\u0D3A' || character === '\u0D3D' || character === '\u0D4E' || character === '\u0D60' || character === '\u0D61' || character === '\u0D7A' || character === '\u0D7F' || character === '\u0D85' || character === '\u0D96' || character === '\u0D9A' || character === '\u0DB1' || character === '\u0DB3' || character === '\u0DBB' || character === '\u0DBD' || character === '\u0DC0' || character === '\u0DC6' || character === '\u0E01' || character === '\u0E30' || character === '\u0E32' || character === '\u0E33' || character === '\u0E40' || character === '\u0E46' || character === '\u0E81' || character === '\u0E82' || character === '\u0E84' || character === '\u0E87' || character === '\u0E88' || character === '\u0E8A' || character === '\u0E8D' || character === '\u0E94' || character === '\u0E97' || character === '\u0E99' || character === '\u0E9F' || character === '\u0EA1' || character === '\u0EA3' || character === '\u0EA5' || character === '\u0EA7' || character === '\u0EAA' || character === '\u0EAB' || character === '\u0EAD' || character === '\u0EB0' || character === '\u0EB2' || character === '\u0EB3' || character === '\u0EBD' || character === '\u0EC0' || character === '\u0EC4' || character === '\u0EC6' || character === '\u0EDC' || character === '\u0EDF' || character === '\u0F00' || character === '\u0F40' || character === '\u0F47' || character === '\u0F49' || character === '\u0F6C' || character === '\u0F88' || character === '\u0F8C' || character === '\u1000' || character === '\u102A' || character === '\u103F' || character === '\u1050' || character === '\u1055' || character === '\u105A' || character === '\u105D' || character === '\u1061' || character === '\u1065' || character === '\u1066' || character === '\u106E' || character === '\u1070' || character === '\u1075' || character === '\u1081' || character === '\u108E' || character === '\u10A0' || character === '\u10C5' || character === '\u10C7' || character === '\u10CD' || character === '\u10D0' || character === '\u10FA' || character === '\u10FC' || character === '\u1248' || character === '\u124A' || character === '\u124D' || character === '\u1250' || character === '\u1256' || character === '\u1258' || character === '\u125A' || character === '\u125D' || character === '\u1260' || character === '\u1288' || character === '\u128A' || character === '\u128D' || character === '\u1290' || character === '\u12B0' || character === '\u12B2' || character === '\u12B5' || character === '\u12B8' || character === '\u12BE' || character === '\u12C0' || character === '\u12C2' || character === '\u12C5' || character === '\u12C8' || character === '\u12D6' || character === '\u12D8' || character === '\u1310' || character === '\u1312' || character === '\u1315' || character === '\u1318' || character === '\u135A' || character === '\u1380' || character === '\u138F' || character === '\u13A0' || character === '\u13F4' || character === '\u1401' || character === '\u166C' || character === '\u166F' || character === '\u167F' || character === '\u1681' || character === '\u169A' || character === '\u16A0' || character === '\u16EA' || character === '\u16EE' || character === '\u16F0' || character === '\u1700' || character === '\u170C' || character === '\u170E' || character === '\u1711' || character === '\u1720' || character === '\u1731' || character === '\u1740' || character === '\u1751' || character === '\u1760' || character === '\u176C' || character === '\u176E' || character === '\u1770' || character === '\u1780' || character === '\u17B3' || character === '\u17D7' || character === '\u17DC' || character === '\u1820' || character === '\u1877' || character === '\u1880' || character === '\u18A8' || character === '\u18AA' || character === '\u18B0' || character === '\u18F5' || character === '\u1900' || character === '\u191C' || character === '\u1950' || character === '\u196D' || character === '\u1970' || character === '\u1974' || character === '\u1980' || character === '\u19AB' || character === '\u19C1' || character === '\u19C7' || character === '\u1A00' || character === '\u1A16' || character === '\u1A20' || character === '\u1A54' || character === '\u1AA7' || character === '\u1B05' || character === '\u1B33' || character === '\u1B45' || character === '\u1B4B' || character === '\u1B83' || character === '\u1BA0' || character === '\u1BAE' || character === '\u1BAF' || character === '\u1BBA' || character === '\u1BE5' || character === '\u1C00' || character === '\u1C23' || character === '\u1C4D' || character === '\u1C4F' || character === '\u1C5A' || character === '\u1C7D' || character === '\u1CE9' || character === '\u1CEC' || character === '\u1CEE' || character === '\u1CF1' || character === '\u1CF5' || character === '\u1CF6' || character === '\u1D00' || character === '\u1DBF' || character === '\u1E00' || character === '\u1F15' || character === '\u1F18' || character === '\u1F1D' || character === '\u1F20' || character === '\u1F45' || character === '\u1F48' || character === '\u1F4D' || character === '\u1F50' || character === '\u1F57' || character === '\u1F59' || character === '\u1F5B' || character === '\u1F5D' || character === '\u1F5F' || character === '\u1F7D' || character === '\u1F80' || character === '\u1FB4' || character === '\u1FB6' || character === '\u1FBC' || character === '\u1FBE' || character === '\u1FC2' || character === '\u1FC4' || character === '\u1FC6' || character === '\u1FCC' || character === '\u1FD0' || character === '\u1FD3' || character === '\u1FD6' || character === '\u1FDB' || character === '\u1FE0' || character === '\u1FEC' || character === '\u1FF2' || character === '\u1FF4' || character === '\u1FF6' || character === '\u1FFC' || character === '\u2071' || character === '\u207F' || character === '\u2090' || character === '\u209C' || character === '\u2102' || character === '\u2107' || character === '\u210A' || character === '\u2113' || character === '\u2115' || character === '\u2119' || character === '\u211D' || character === '\u2124' || character === '\u2126' || character === '\u2128' || character === '\u212A' || character === '\u212D' || character === '\u212F' || character === '\u2139' || character === '\u213C' || character === '\u213F' || character === '\u2145' || character === '\u2149' || character === '\u214E' || character === '\u2160' || character === '\u2188' || character === '\u2C00' || character === '\u2C2E' || character === '\u2C30' || character === '\u2C5E' || character === '\u2C60' || character === '\u2CE4' || character === '\u2CEB' || character === '\u2CEE' || character === '\u2CF2' || character === '\u2CF3' || character === '\u2D00' || character === '\u2D25' || character === '\u2D27' || character === '\u2D2D' || character === '\u2D30' || character === '\u2D67' || character === '\u2D6F' || character === '\u2D80' || character === '\u2D96' || character === '\u2DA0' || character === '\u2DA6' || character === '\u2DA8' || character === '\u2DAE' || character === '\u2DB0' || character === '\u2DB6' || character === '\u2DB8' || character === '\u2DBE' || character === '\u2DC0' || character === '\u2DC6' || character === '\u2DC8' || character === '\u2DCE' || character === '\u2DD0' || character === '\u2DD6' || character === '\u2DD8' || character === '\u2DDE' || character === '\u2E2F' || character === '\u3005' || character === '\u3007' || character === '\u3021' || character === '\u3029' || character === '\u3031' || character === '\u3035' || character === '\u3038' || character === '\u303C' || character === '\u3041' || character === '\u3096' || character === '\u309D' || character === '\u309F' || character === '\u30A1' || character === '\u30FA' || character === '\u30FC' || character === '\u30FF' || character === '\u3105' || character === '\u312D' || character === '\u3131' || character === '\u318E' || character === '\u31A0' || character === '\u31BA' || character === '\u31F0' || character === '\u31FF' || character === '\u3400' || character === '\u4DB5' || character === '\u4E00' || character === '\u9FCC' || character === '\uA000' || character === '\uA48C' || character === '\uA4D0' || character === '\uA4FD' || character === '\uA500' || character === '\uA60C' || character === '\uA610' || character === '\uA61F' || character === '\uA62A' || character === '\uA62B' || character === '\uA640' || character === '\uA66E' || character === '\uA67F' || character === '\uA697' || character === '\uA6A0' || character === '\uA6EF' || character === '\uA717' || character === '\uA71F' || character === '\uA722' || character === '\uA788' || character === '\uA78B' || character === '\uA78E' || character === '\uA790' || character === '\uA793' || character === '\uA7A0' || character === '\uA7AA' || character === '\uA7F8' || character === '\uA801' || character === '\uA803' || character === '\uA805' || character === '\uA807' || character === '\uA80A' || character === '\uA80C' || character === '\uA822' || character === '\uA840' || character === '\uA873' || character === '\uA882' || character === '\uA8B3' || character === '\uA8F2' || character === '\uA8F7' || character === '\uA8FB' || character === '\uA90A' || character === '\uA925' || character === '\uA930' || character === '\uA946' || character === '\uA960' || character === '\uA97C' || character === '\uA984' || character === '\uA9B2' || character === '\uA9CF' || character === '\uAA00' || character === '\uAA28' || character === '\uAA40' || character === '\uAA42' || character === '\uAA44' || character === '\uAA4B' || character === '\uAA60' || character === '\uAA76' || character === '\uAA7A' || character === '\uAA80' || character === '\uAAAF' || character === '\uAAB1' || character === '\uAAB5' || character === '\uAAB6' || character === '\uAAB9' || character === '\uAABD' || character === '\uAAC0' || character === '\uAAC2' || character === '\uAADB' || character === '\uAADD' || character === '\uAAE0' || character === '\uAAEA' || character === '\uAAF2' || character === '\uAAF4' || character === '\uAB01' || character === '\uAB06' || character === '\uAB09' || character === '\uAB0E' || character === '\uAB11' || character === '\uAB16' || character === '\uAB20' || character === '\uAB26' || character === '\uAB28' || character === '\uAB2E' || character === '\uABC0' || character === '\uABE2' || character === '\uAC00' || character === '\uD7A3' || character === '\uD7B0' || character === '\uD7C6' || character === '\uD7CB' || character === '\uD7FB' || character === '\uF900' || character === '\uFA6D' || character === '\uFA70' || character === '\uFAD9' || character === '\uFB00' || character === '\uFB06' || character === '\uFB13' || character === '\uFB17' || character === '\uFB1D' || character === '\uFB1F' || character === '\uFB28' || character === '\uFB2A' || character === '\uFB36' || character === '\uFB38' || character === '\uFB3C' || character === '\uFB3E' || character === '\uFB40' || character === '\uFB41' || character === '\uFB43' || character === '\uFB44' || character === '\uFB46' || character === '\uFBB1' || character === '\uFBD3' || character === '\uFD3D' || character === '\uFD50' || character === '\uFD8F' || character === '\uFD92' || character === '\uFDC7' || character === '\uFDF0' || character === '\uFDFB' || character === '\uFE70' || character === '\uFE74' || character === '\uFE76' || character === '\uFEFC' || character === '\uFF21' || character === '\uFF3A' || character === '\uFF41' || character === '\uFF5A' || character === '\uFF66' || character === '\uFFBE' || character === '\uFFC2' || character === '\uFFC7' || character === '\uFFCA' || character === '\uFFCF' || character === '\uFFD2' || character === '\uFFD7' || character === '\uFFDA' || character === '\uFFDC' || character === '\xAA' || character === '\xB5' || character === '\xBA' || character === '\xC0' || character === '\xD6' || character === '\xD8' || character === '\xF6' || character === '\xF8'
      )
    };

    Functions.stringIsReservedIdentifier = function stringIsReservedIdentifier(string) {
      return string === "arguments" || string === "break" || string === "case" || string === "catch" || string === "class" || string === "const" || string === "continue" || string === "debugger" || string === "default" || string === "delete" || string === "do" || string === "else" || string === "enum" || string === "eval" || string === "export" || string === "extends" || string === "false" || string === "finally" || string === "for" || string === "function" || string === "if" || string === "implements" || string === "import" || string === "in" || string === "instanceof" || string === "interface" || string === "let" || string === "NaN" || string === "new" || string === "null" || string === "package" || string === "private" || string === "protected" || string === "public" || string === "return" || string === "static" || string === "super" || string === "switch" || string === "this" || string === "throw" || string === "true" || string === "try" || string === "typeof" || string === "undefined" || string === "var" || string === "void" || string === "while" || string === "with" || string === "yield"
    };

    Functions.stringIsSpace = function stringIsSpace(character) {
      return character === ' ' || character === '\f' || character === '\t' || character === '\u00A0' || character === '\u1680' || character === '\u2000' || character === '\u2001' || character === '\u2002' || character === '\u2003' || character === '\u2004' || character === '\u2005' || character === '\u2006' || character === '\u2007' || character === '\u2008' || character === '\u2009' || character === '\u200A' || character === '\u202F' || character === '\u205F' || character === '\u3000' || character === '\uFEFF' || character === '\v'
    };

    /* Mathematics > ... */
    Mathematics.gcd = function greatest_common_divisor(numbers) {
      var divisor = arguments[0];

      // ...
      for (var index = arguments.length; index; ) {
        var number = arguments[--index];

        for (var remainder; 0 !== number % divisor; ) {
          remainder = number % divisor;
          number    = divisor;
          divisor   = remainder
        }
      }

      return divisor
    };

    Mathematics.ipow = function integer_power(base, exponent) {
      var power = 1;

      for (var base = base, exponent = exponent; ; ) {
        var odd = exponent % 2;

        if (odd) power *= base;
        exponent = (exponent / 2) - (odd ? 0.5 : 0.0);
        if (0 === exponent) break; base *= base
      }

      return power
    };

    Mathematics.maximum = function maximum(numbers) {
      var maximum = -Constants.MAXIMUM_NUMBER;

      // ...
      for (var index = arguments.length; index; ) {
        var number = arguments[--index];
        maximum = number > maximum ? number : maximum
      }

      return maximum
    };

    Mathematics.minimum = function minimum(numbers) {
      var minimum = +Constants.MAXIMUM_NUMBER;

      // ...
      for (var index = arguments.length; index; ) {
        var number = arguments[--index];
        minimum = number < minimum ? number : minimum
      }

      return minimum
    };

    Mathematics.round = function round(number) {
      var characteristics = Mathematics.trunc(number);
      return characteristics + (number - characteristics >= 0.5)
    };

    Mathematics.trunc = function truncate(number) {
      if (-1.0 < number && number < +1.0)
      return +0;

      // ... ->> Bitwise arithmetic truncates `Number`s to their integer form
      if (-Constants.MAXIMUM_BITWISE_INTEGER <= number && number <= Constants.MAXIMUM_BITWISE_INTEGER)
      return number | +0;

      // ... ->> Parse `number`'s source
      if (Supports.String$prototype$charAt) {
        var string               = Functions.numberToString(number);
        var signedness           = Functions.stringAt(string, +0) === '-';
        var scientificSignedness = false;
        var scientificExponent   = +0;
        var mantissaIndex        = +0;
        var mantissaEnd          = +0;
        var characteristics      = +0;

        // ...
        for (var index = +signedness, length = string.length; index !== length; ++index) {
          var character = Functions.stringAt(string, index);

          // ...
          if (+0 === mantissaIndex) {
            if (character === '.') { mantissaEnd = length; mantissaIndex = ++index; continue }
            else if (Functions.stringIsDigit(character)) { characteristics = Functions.numberFromDigit(character) + (characteristics * 10); continue }
          }

          if (character === 'e') {
            mantissaEnd          = index;
            scientificSignedness = Functions.stringAt(string, ++index) === '-';
            while (++index !== length) scientificExponent = Functions.numberFromDigit(Functions.stringAt(string, index)) + (scientificExponent * 10);

            break
          }
        }

        while (scientificExponent--) {
          if (scientificSignedness) { if (characteristics < 10) { characteristics = 0; break } characteristics /= 10 }
          else { characteristics *= 10; if (mantissaEnd !== mantissaIndex) characteristics += Functions.numberFromDigit(Functions.stringAt(string, mantissaIndex++)) }
        }

        return characteristics
      }

      // ... ->> "Count" up to `number`
      var Modes = {ADD: 0b000001, EXPONENTIATE: 0b000010, INCREMENT: 0b000100, MULTIPLY: 0b001000, RADIX: 0b010000, SELF: 0b100000};
      var increment  = +0, nextIncrement;
      var integer    = 1,  nextInteger;
      var modes      = [Modes.SELF | Modes.EXPONENTIATE, Modes.SELF | Modes.MULTIPLY, Modes.SELF | Modes.RADIX, Modes.SELF | Modes.ADD, Modes.EXPONENTIATE, Modes.MULTIPLY, Modes.RADIX, Modes.ADD, Modes.INCREMENT]; // ->> in order of progression
      var precision  = 1;    // WARN (Lapys) -> Speeds get pessimistic if greater than `1` ->> Greater than `1` if `number` is large enough i.e.: `number === number + 1`
      var radix      = 10;
      var self       = true; // NOTE (Lapys) -> Allow increments by updating the `integer` only, not its `increment`
      var signedness = number < +0.0;

      // ...
      for (var index = +0; integer < number; self = self && (modes[index] & Modes.SELF)) {
        switch (modes[index]) {
          case Modes.ADD         : nextIncrement = increment + increment;                  break;
          case Modes.EXPONENTIATE: nextIncrement = Mathematics.ipow(increment, increment); break;
          case Modes.INCREMENT   : nextIncrement = increment + precision;                  break;
          case Modes.MULTIPLY    : nextIncrement = increment * increment;                  break;
          case Modes.RADIX       : nextIncrement = increment * radix;                      break;

          case Modes.SELF | Modes.ADD         : nextInteger = integer + integer;                  break;
          case Modes.SELF | Modes.EXPONENTIATE: nextInteger = Mathematics.ipow(integer, integer); break;
          case Modes.SELF | Modes.MULTIPLY    : nextInteger = integer * integer;                  break;
          case Modes.SELF | Modes.RADIX       : nextInteger = integer * radix
        }

        // ...
        if (self) {
          // ... ->> `integer` progression too large or redundant
          if (nextInteger === integer || nextInteger > number || false === Functions.numberIsSafe(nextInteger)) {
            if (++index === modes.length) break;
            continue
          }

          index -= +0 !== index
        }

        else {
          self = false;

          // ... ->> `increment` progression too large or redundant
          if (nextIncrement === increment || false === Functions.numberIsSafe(nextIncrement)) {
            if (++index === modes.length) break;
            continue
          }

          // ... ->> `integer` progression too large or redundant
          nextInteger = nextIncrement + integer;

          if (nextInteger === integer || nextInteger > number || false === Functions.numberIsSafe(nextInteger)) {
            if (++index === modes.length) {
              if (+0 === increment && false === Functions.numberIsSafe(precision *= 2)) break;
              for (increment = index = +0; modes[index] & Modes.SELF; ++index) continue
            }

            continue
          }

          increment = nextIncrement;
          index    -= +0 !== index && +0 === (modes[index - 1] & Modes.SELF)
        }

        integer = nextInteger
      }

      return signedness ? -integer : integer
    }
})();
