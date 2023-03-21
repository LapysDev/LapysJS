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
  var ANY    = new function() {};                                                                       // ->> Represents a non-unique value (though its value is distinct)
  var ERROR  = {message: "", name: "Error", toString: function toString() { return "Uncaught Error" }}; // ->> Represents an exception instance (always a unique value)
  var GLOBAL = "undefined" === typeof frames ? ("undefined" === typeof self ? ("undefined" === typeof window ? ("undefined" === typeof global ? ("undefined" === typeof globalThis ? (function() { return this })() : globalThis) : global) : window) : self) : frames;

  /* Global */
    /* Constants */
    var Constants = {
      JS_ENVIRONMENT                   : null,
        JS__NODE__ENVIRONMENT  : 0x1,
        JS_BROWSER_ENVIRONMENT : 0x2,
        JS_TERMINAL_ENVIRONMENT: 0x4,
        JS_WORKER_ENVIRONMENT  : 0x8,
      MAXIMUM_BITWISE_INTEGER          : null,
      MAXIMUM_DEPTH_ARRAY_DEPTH        : null,
      MAXIMUM_DEPTH_ARRAY_LENGTH       : null,
      MAXIMUM_NUMBER                   : null,
      MAXIMUM_SAFE_INTEGER             : null,
      MAXIMUM_STATIC_ARRAY_LENGTH      : null,
      MAXIMUM_STATIC_STRING_LENGTH     : null,
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
      stringCompare             : null,
      stringFrom                : null,
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
    // Depth Array
    window.DepthArray = DepthArray;
    Object.defineProperty(Constants, "MAXIMUM_DEPTH_ARRAY_DEPTH", {get: function() { return 3 }});
    Object.defineProperty(Constants, "MAXIMUM_DEPTH_ARRAY_LENGTH", {get: function() { return 3 }});
    function DepthArray(elements) {
      for (var index = +0, length = arguments.length; index !== length; ++index)
      this.add(arguments[index])
    }
      DepthArray.prototype = {
        0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, 6: undefined, 7: undefined, 8: undefined, 9: undefined, 10: undefined, 11: undefined, 12: undefined, 13: undefined, 14: undefined, 15: undefined, 16: undefined, 17: undefined, 18: undefined, 19: undefined, 20: undefined, 21: undefined, 22: undefined, 23: undefined, 24: undefined, 25: undefined, 26: undefined, 27: undefined, 28: undefined, 29: undefined, 30: undefined, 31: undefined, 32: undefined, 33: undefined, 34: undefined, 35: undefined, 36: undefined, 37: undefined, 38: undefined, 39: undefined, 40: undefined, 41: undefined, 42: undefined, 43: undefined, 44: undefined, 45: undefined, 46: undefined, 47: undefined, 48: undefined, 49: undefined, 50: undefined, 51: undefined, 52: undefined, 53: undefined, 54: undefined, 55: undefined, 56: undefined, 57: undefined, 58: undefined, 59: undefined, 60: undefined, 61: undefined, 62: undefined, 63: undefined, 64: undefined, 65: undefined, 66: undefined, 67: undefined, 68: undefined, 69: undefined, 70: undefined, 71: undefined, 72: undefined, 73: undefined, 74: undefined, 75: undefined, 76: undefined, 77: undefined, 78: undefined, 79: undefined, 80: undefined, 81: undefined, 82: undefined, 83: undefined, 84: undefined, 85: undefined, 86: undefined, 87: undefined, 88: undefined, 89: undefined, 90: undefined, 91: undefined, 92: undefined, 93: undefined, 94: undefined, 95: undefined, 96: undefined, 97: undefined, 98: undefined, 99: undefined, 100: undefined, 101: undefined, 102: undefined, 103: undefined, 104: undefined, 105: undefined, 106: undefined, 107: undefined, 108: undefined, 109: undefined, 110: undefined, 111: undefined, 112: undefined, 113: undefined, 114: undefined, 115: undefined, 116: undefined, 117: undefined, 118: undefined, 119: undefined, 120: undefined, 121: undefined, 122: undefined, 123: undefined, 124: undefined, 125: undefined, 126: undefined, 127: undefined, 128: undefined, 129: undefined, 130: undefined, 131: undefined, 132: undefined, 133: undefined, 134: undefined, 135: undefined, 136: undefined, 137: undefined, 138: undefined, 139: undefined, 140: undefined, 141: undefined, 142: undefined, 143: undefined, 144: undefined, 145: undefined, 146: undefined, 147: undefined, 148: undefined, 149: undefined, 150: undefined, 151: undefined, 152: undefined, 153: undefined, 154: undefined, 155: undefined, 156: undefined, 157: undefined, 158: undefined, 159: undefined, 160: undefined, 161: undefined, 162: undefined, 163: undefined, 164: undefined, 165: undefined, 166: undefined, 167: undefined, 168: undefined, 169: undefined, 170: undefined, 171: undefined, 172: undefined, 173: undefined, 174: undefined, 175: undefined, 176: undefined, 177: undefined, 178: undefined, 179: undefined, 180: undefined, 181: undefined, 182: undefined, 183: undefined, 184: undefined, 185: undefined, 186: undefined, 187: undefined, 188: undefined, 189: undefined, 190: undefined, 191: undefined, 192: undefined, 193: undefined, 194: undefined, 195: undefined, 196: undefined, 197: undefined, 198: undefined, 199: undefined, 200: undefined, 201: undefined, 202: undefined, 203: undefined, 204: undefined, 205: undefined, 206: undefined, 207: undefined, 208: undefined, 209: undefined, 210: undefined, 211: undefined, 212: undefined, 213: undefined, 214: undefined, 215: undefined, 216: undefined, 217: undefined, 218: undefined, 219: undefined, 220: undefined, 221: undefined, 222: undefined, 223: undefined, 224: undefined, 225: undefined, 226: undefined, 227: undefined, 228: undefined, 229: undefined, 230: undefined, 231: undefined, 232: undefined, 233: undefined, 234: undefined, 235: undefined, 236: undefined, 237: undefined, 238: undefined, 239: undefined, 240: undefined, 241: undefined, 242: undefined, 243: undefined, 244: undefined, 245: undefined, 246: undefined, 247: undefined, 248: undefined, 249: undefined, 250: undefined, 251: undefined, 252: undefined, 253: undefined, 254: undefined, 255: undefined,
        depth : +0,
        length: +0,

        add: function add(elements) {
          for (var index = +0, length = arguments.length; index !== length; ++index) {
            var next = this.next();

            // ...
            // console.log("...", next);
            if (null === next || Constants.MAXIMUM_DEPTH_ARRAY_LENGTH === next.length) {
              var array = new DepthArray();

              // ...
              if (Constants.MAXIMUM_DEPTH_ARRAY_DEPTH === this.depth) return null;
              for (var count = ++this.depth; count; --count) { array.add(new DepthArray()); array = array[0] }

              array.add(arguments[index]);
              this[0]     = new DepthArray(this[0], this[1], this[2]/*, this[3], this[4], this[5], this[6], this[7], this[8], this[9], this[10], this[11], this[12], this[13], this[14], this[15], this[16], this[17], this[18], this[19], this[20], this[21], this[22], this[23], this[24], this[25], this[26], this[27], this[28], this[29], this[30], this[31], this[32], this[33], this[34], this[35], this[36], this[37], this[38], this[39], this[40], this[41], this[42], this[43], this[44], this[45], this[46], this[47], this[48], this[49], this[50], this[51], this[52], this[53], this[54], this[55], this[56], this[57], this[58], this[59], this[60], this[61], this[62], this[63], this[64], this[65], this[66], this[67], this[68], this[69], this[70], this[71], this[72], this[73], this[74], this[75], this[76], this[77], this[78], this[79], this[80], this[81], this[82], this[83], this[84], this[85], this[86], this[87], this[88], this[89], this[90], this[91], this[92], this[93], this[94], this[95], this[96], this[97], this[98], this[99], this[100], this[101], this[102], this[103], this[104], this[105], this[106], this[107], this[108], this[109], this[110], this[111], this[112], this[113], this[114], this[115], this[116], this[117], this[118], this[119], this[120], this[121], this[122], this[123], this[124], this[125], this[126], this[127], this[128], this[129], this[130], this[131], this[132], this[133], this[134], this[135], this[136], this[137], this[138], this[139], this[140], this[141], this[142], this[143], this[144], this[145], this[146], this[147], this[148], this[149], this[150], this[151], this[152], this[153], this[154], this[155], this[156], this[157], this[158], this[159], this[160], this[161], this[162], this[163], this[164], this[165], this[166], this[167], this[168], this[169], this[170], this[171], this[172], this[173], this[174], this[175], this[176], this[177], this[178], this[179], this[180], this[181], this[182], this[183], this[184], this[185], this[186], this[187], this[188], this[189], this[190], this[191], this[192], this[193], this[194], this[195], this[196], this[197], this[198], this[199], this[200], this[201], this[202], this[203], this[204], this[205], this[206], this[207], this[208], this[209], this[210], this[211], this[212], this[213], this[214], this[215], this[216], this[217], this[218], this[219], this[220], this[221], this[222], this[223], this[224], this[225], this[226], this[227], this[228], this[229], this[230], this[231], this[232], this[233], this[234], this[235], this[236], this[237], this[238], this[239], this[240], this[241], this[242], this[243], this[244], this[245], this[246], this[247], this[248], this[249], this[250], this[251], this[252], this[253], this[254], this[255]*/);
              this[1]     = array;
              this[2]     = ANY;
              this.length = 2;

              break
            }

            next[next.length++] = arguments[index]
          }

          return this
        },

        at: function at(index) {},
        includes: function includes(element) {},
        next: function next() {
          var index   = this.depth - 1;
          var indexes = new Array(this.depth).fill(0);//new StaticArray().fill(+0, this.depth);

          // ...
          for (var count = 20; count; --count) {
            var array = this;

            // ...
            // console.log("...", [...indexes]);
            for (var depth = this.depth, subindex = +0; depth; --depth) array = array[indexes[subindex++]];

            if (ANY === array) {
              var count = this.depth;
              var subarray = this;
              var dubdub = new DepthArray(), dubdubdub = dubdub;

              for (var depth = this.depth, subindex = +0; --depth; ) {
                dubdubdub.add(new DepthArray());
                dubdubdub = dubdubdub[0];
                subarray = subarray[indexes[subindex++]]
              }
              subarray[indexes[this.depth - 1]] = dubdub;
              if (Constants.MAXIMUM_DEPTH_ARRAY_LENGTH - 1 !== indexes[this.depth - 1]) subarray[++indexes[this.depth - 1]] = ANY;

              return dubdub
            }
            if (+0 === this.depth || Constants.MAXIMUM_DEPTH_ARRAY_LENGTH !== array.length) return array;
            if (Constants.MAXIMUM_DEPTH_ARRAY_LENGTH - 1 === indexes[index]) { if (+0 === index) return array; --index; continue }

            ++indexes[index]
          }

          return null
        }
      };

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

    // Static Array ->> Arrays whose elements are already defined on its `prototype`
    function StaticArray(elements) {
      var length = arguments.length;

      for (var index = (this.length = length < 255 ? length : 255); index--; )
      this[index] = arguments[index]
    }
      StaticArray.prototype = {
        0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, 6: undefined, 7: undefined, 8: undefined, 9: undefined, 10: undefined, 11: undefined, 12: undefined, 13: undefined, 14: undefined, 15: undefined, 16: undefined, 17: undefined, 18: undefined, 19: undefined, 20: undefined, 21: undefined, 22: undefined, 23: undefined, 24: undefined, 25: undefined, 26: undefined, 27: undefined, 28: undefined, 29: undefined, 30: undefined, 31: undefined, 32: undefined, 33: undefined, 34: undefined, 35: undefined, 36: undefined, 37: undefined, 38: undefined, 39: undefined, 40: undefined, 41: undefined, 42: undefined, 43: undefined, 44: undefined, 45: undefined, 46: undefined, 47: undefined, 48: undefined, 49: undefined, 50: undefined, 51: undefined, 52: undefined, 53: undefined, 54: undefined, 55: undefined, 56: undefined, 57: undefined, 58: undefined, 59: undefined, 60: undefined, 61: undefined, 62: undefined, 63: undefined, 64: undefined, 65: undefined, 66: undefined, 67: undefined, 68: undefined, 69: undefined, 70: undefined, 71: undefined, 72: undefined, 73: undefined, 74: undefined, 75: undefined, 76: undefined, 77: undefined, 78: undefined, 79: undefined, 80: undefined, 81: undefined, 82: undefined, 83: undefined, 84: undefined, 85: undefined, 86: undefined, 87: undefined, 88: undefined, 89: undefined, 90: undefined, 91: undefined, 92: undefined, 93: undefined, 94: undefined, 95: undefined, 96: undefined, 97: undefined, 98: undefined, 99: undefined, 100: undefined, 101: undefined, 102: undefined, 103: undefined, 104: undefined, 105: undefined, 106: undefined, 107: undefined, 108: undefined, 109: undefined, 110: undefined, 111: undefined, 112: undefined, 113: undefined, 114: undefined, 115: undefined, 116: undefined, 117: undefined, 118: undefined, 119: undefined, 120: undefined, 121: undefined, 122: undefined, 123: undefined, 124: undefined, 125: undefined, 126: undefined, 127: undefined, 128: undefined, 129: undefined, 130: undefined, 131: undefined, 132: undefined, 133: undefined, 134: undefined, 135: undefined, 136: undefined, 137: undefined, 138: undefined, 139: undefined, 140: undefined, 141: undefined, 142: undefined, 143: undefined, 144: undefined, 145: undefined, 146: undefined, 147: undefined, 148: undefined, 149: undefined, 150: undefined, 151: undefined, 152: undefined, 153: undefined, 154: undefined, 155: undefined, 156: undefined, 157: undefined, 158: undefined, 159: undefined, 160: undefined, 161: undefined, 162: undefined, 163: undefined, 164: undefined, 165: undefined, 166: undefined, 167: undefined, 168: undefined, 169: undefined, 170: undefined, 171: undefined, 172: undefined, 173: undefined, 174: undefined, 175: undefined, 176: undefined, 177: undefined, 178: undefined, 179: undefined, 180: undefined, 181: undefined, 182: undefined, 183: undefined, 184: undefined, 185: undefined, 186: undefined, 187: undefined, 188: undefined, 189: undefined, 190: undefined, 191: undefined, 192: undefined, 193: undefined, 194: undefined, 195: undefined, 196: undefined, 197: undefined, 198: undefined, 199: undefined, 200: undefined, 201: undefined, 202: undefined, 203: undefined, 204: undefined, 205: undefined, 206: undefined, 207: undefined, 208: undefined, 209: undefined, 210: undefined, 211: undefined, 212: undefined, 213: undefined, 214: undefined, 215: undefined, 216: undefined, 217: undefined, 218: undefined, 219: undefined, 220: undefined, 221: undefined, 222: undefined, 223: undefined, 224: undefined, 225: undefined, 226: undefined, 227: undefined, 228: undefined, 229: undefined, 230: undefined, 231: undefined, 232: undefined, 233: undefined, 234: undefined, 235: undefined, 236: undefined, 237: undefined, 238: undefined, 239: undefined, 240: undefined, 241: undefined, 242: undefined, 243: undefined, 244: undefined, 245: undefined, 246: undefined, 247: undefined, 248: undefined, 249: undefined, 250: undefined, 251: undefined, 252: undefined, 253: undefined, 254: undefined, 255: undefined,
        length: +0,

        add: function add(elements) {
          var length = arguments.length;

          //...
          if (length + this.length > 255) return null;
          for (var index = +0; index !== length; ++index) this[this.length++] = arguments[index];

          return this
        },

        empty: function empty() {
          this.length = +0;
          return this
        },

        fill: function fill(value, count) {
          if (count < 255) {
            for (var index = (this.length = +0); count !== index; ++index)
            this[index] = value;

            return this
          }

          return null
        }
      };

    // Static String ->> Immutable strings; forgoes the use of the `String.prototype.charAt(…)` method
    function StaticString(characters) {
      var length = arguments.length;

      for (var index = (this.length = length < 255 ? length : 255); index--; )
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
    Constants.JS_ENVIRONMENT                    = "object" === typeof process && "function" === typeof require ? JS__NODE__ENVIRONMENT : "object" === typeof window ? JS_BROWSER_ENVIRONMENT : "function" === typeof importScripts ? JS_WORKER_ENVIRONMENT : JS_TERMINAL_ENVIRONMENT; // UPDATE (Lapys)
    Constants.MAXIMUM_BITWISE_INTEGER           = 2147483647;                                                                                                                                                                                                                                                                                                            // --> (1 << 31) - 1
    Constants.MAXIMUM_DEPTH_ARRAY_DEPTH         = 255;
    Constants.MAXIMUM_DEPTH_ARRAY_LENGTH        = 255;
    Constants.MAXIMUM_NUMBER                    = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368; // --> 1 << 1024
    Constants.MAXIMUM_SAFE_INTEGER              = 9007199254740991;                                                                                                                                                                                                                                                                                                      // --> (1 << 53) - 1
    Constants.MAXIMUM_STATIC_ARRAY_LENGTH       = 255;
    Constants.MAXIMUM_STATIC_STRING_LENGTH      = 255;
    Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE = [
      /* --> "[Command Line API]" */ new StaticString('[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'),
      /* --> "[native code]"      */ new StaticString('[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')
    ];
    Constants.TYPE_ERROR = (function TypeError() { try { null() } catch (error) { return ERROR = error } })();

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
      for (var index = 2, length = arguments.length; index < length; ++index)
      bound.add(arguments[index]);

      return Functions.functionApply(Natives.Function$prototype$bind, functor, bound)
    };

    Functions.functionIsNative = function functionIsNative(functor, name) {
      var name   = null === name ? "" : name;
      var source = false === Supports.Function$prototype$apply ? "" + functor : Functions.functionToString(functor);

      // ... ->> Ensure `functor` is of same type as native functions
      if ("function" !== typeof functor && "object" !== typeof functor)
      return false;

      // ... ->> Basic source comparison to verify if `functor` is native
      for (var index = Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE.length; index; ) {
        var obfuscatedSource = Constants.NATIVE_FUNCTION_OBFUSCATED_SOURCE[--index];

        if (
          source === "function() { "                     + obfuscatedSource + " }"    ||
          source === "function() {\n    "                + obfuscatedSource + "\n}"   ||
          source === "\nfunction() {\n    "              + obfuscatedSource + "\n}\n" ||
          source === "function "   + name + "() { "      + obfuscatedSource + " }"    ||
          source === "function "   + name + "() {\n    " + obfuscatedSource + "\n}"   ||
          source === "\nfunction " + name + "() {\n    " + obfuscatedSource + "\n}\n"
        ) return true
      }

      // ... ->> Basic parse to evaluate if `functor` is native
      if (Supports.String$prototype$charAt && Functions.stringCompare(source, "function", +0, +0, 8)) {
        var Modes   = {BODY: 0x01, HEAD: 0x02, NAME: 0x04, PARAMETERS: 0x08, PARAMETER_DESTRUCTURED_NAME: 0x10, PARAMETER_DEFAULT: 0x20, PARAMETER_NAME: 0x40, PARAMETER_VALUE: 0x80};
        var depths  = new StaticArray();
        var mode    = Modes.HEAD;

        // ...
        for (var index = 8, offset = +0, length = source.length; index < length; ++index) {
          var character = Functions.stringAt(source, index);

          // ...
          if (character === '/') { while ('*' !== Functions.stringAt(source, index) && '/' !== Functions.stringAt(source, index + 1)) ++index; continue }
          if (Functions.stringIsSpace(character)) continue;

          // ...
          if (mode & Modes.BODY) {}

          // ... ->> Parse function parameters
          else if (mode & Modes.PARAMETERS) {
            // if (character === ')') { if (+0 !== depths.length) return false; mode |= Modes.BODY; mode &= ~(Modes.PARAMETERS | Modes.PARAMETER_DEFAULT | Modes.PARAMETER_DESTRUCTURED_NAME | Modes.PARAMETER_NAME | Modes.PARAMETER_VALUE); continue }
            // if (character === ',') { if (niladic) return false; mode &= ~(Modes.PARAMETER_DEFAULT | Modes.PARAMETER_DESTRUCTURED_NAME | Modes.PARAMETER_NAME | Modes.PARAMETER_VALUE); continue }

            // // ...
            // if (mode & Modes.PARAMETER_DEFAULT) {}

            // else if (mode & Modes.PARAMETER_DESTRUCTURED_NAME) {
            //   if (character === '=') {
            //     if (+0 === offset) return false;
            //   }
            //   if (false === Functions.stringIsIdentifierStart(character)) return false;
            //   mode |= Modes.PARAMETER_NAME;

            //   ++offset
            // }

            // else if (mode & Modes.PARAMETER_NAME) {
            //   if (character === '=') { mode &= ~Modes.PARAMETER_NAME; mode |= Modes.PARAMETER_DEFAULT; }
            //   else if (false === Functions.stringIsIdentifierContinue(character)) return false;

            //   ++offset
            // }

            // else {
            //   mode    |= Modes.PARAMETER_NAME;
            //   niladic  = false;

            //   if (false === Functions.stringIsIdentifierStart(character)) {
            //     if (character === '[') {
            //       while (true) {
            //         if (index++ === length)
            //         return false;

            //         if ('[' === Functions.stringAt(source, index++)) {
            //           if (Constants.MAXIMUM_STATIC_ARRAY_LENGTH === depths.length) return false;
            //           depths[depths.length++] = '['
            //         }

            //         break
            //       }
            //     }

            //     else if (character === '{') { depths[0] = '{'; depths.length = 1 }
            //     else return false;

            //     mode |= Modes.PARAMETER_DESTRUCTURED_NAME;
            //     mode &= ~Modes.PARAMETER_NAME
            //   }
            // }
          }

          else if ('(' === character)
            mode |= Modes.PARAMETERS;

          else if ("" !== name && Functions.stringCompare(source, name, index, +0)) {
            index += name.length;
            mode  |= Modes.NAME
          }

          return "bruh :v"
        }
      }

      // ...
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

    Functions.stringCompare = function stringCompare(stringA, stringB, indexA, indexB, count) {
      var indexA = arguments.length > 2 ? indexA : +0;
      var indexB = arguments.length > 2 ? indexB : +0;
      var count  = arguments.length > 4 ? count : Mathematics.minimum(stringA.length - indexA, stringB.length - indexB);

      // ...
      while (count--) {
        if (Functions.stringAt(stringA, indexA++) !== Functions.stringAt(stringB, indexB++))
        return false
      }

      return arguments.length > 2 || stringA.length === stringB.length
    };

    Functions.stringFrom = null;

    Functions.stringIsDigit = function stringIsDigit(character) {
      return character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9'
    };

    Functions.stringIsIdentifier = function stringIsIdentifier(string) {
      var continueCodes = [new StaticString('0', '3', '0', '0'), new StaticString('0', '3', '6', 'F'), new StaticString('0', '4', '8', '3'), new StaticString('0', '4', '8', '7'), new StaticString('0', '5', '9', '1'), new StaticString('0', '5', 'B', 'D'), new StaticString('0', '5', 'B', 'F'), new StaticString('0', '5', 'C', '1'), new StaticString('0', '5', 'C', '2'), new StaticString('0', '5', 'C', '4'), new StaticString('0', '5', 'C', '5'), new StaticString('0', '5', 'C', '7'), new StaticString('0', '6', '1', '0'), new StaticString('0', '6', '1', 'A'), new StaticString('0', '6', '4', 'B'), new StaticString('0', '6', '6', '9'), new StaticString('0', '6', '7', '0'), new StaticString('0', '6', 'D', '6'), new StaticString('0', '6', 'D', 'C'), new StaticString('0', '6', 'D', 'F'), new StaticString('0', '6', 'E', '4'), new StaticString('0', '6', 'E', '7'), new StaticString('0', '6', 'E', '8'), new StaticString('0', '6', 'E', 'A'), new StaticString('0', '6', 'E', 'D'), new StaticString('0', '6', 'F', '0'), new StaticString('0', '6', 'F', '9'), new StaticString('0', '7', '1', '1'), new StaticString('0', '7', '3', '0'), new StaticString('0', '7', '4', 'A'), new StaticString('0', '7', 'A', '6'), new StaticString('0', '7', 'B', '0'), new StaticString('0', '7', 'C', '0'), new StaticString('0', '7', 'C', '9'), new StaticString('0', '7', 'E', 'B'), new StaticString('0', '7', 'F', '3'), new StaticString('0', '8', '1', '6'), new StaticString('0', '8', '1', '9'), new StaticString('0', '8', '1', 'B'), new StaticString('0', '8', '2', '3'), new StaticString('0', '8', '2', '5'), new StaticString('0', '8', '2', '7'), new StaticString('0', '8', '2', '9'), new StaticString('0', '8', '2', 'D'), new StaticString('0', '8', '5', '9'), new StaticString('0', '8', '5', 'B'), new StaticString('0', '8', 'E', '4'), new StaticString('0', '8', 'F', 'E'), new StaticString('0', '9', '0', '0'), new StaticString('0', '9', '0', '3'), new StaticString('0', '9', '3', 'A'), new StaticString('0', '9', '3', 'C'), new StaticString('0', '9', '3', 'E'), new StaticString('0', '9', '4', 'F'), new StaticString('0', '9', '5', '1'), new StaticString('0', '9', '5', '7'), new StaticString('0', '9', '6', '2'), new StaticString('0', '9', '6', '3'), new StaticString('0', '9', '6', '6'), new StaticString('0', '9', '6', 'F'), new StaticString('0', '9', '8', '1'), new StaticString('0', '9', '8', '3'), new StaticString('0', '9', 'B', 'C'), new StaticString('0', '9', 'B', 'E'), new StaticString('0', '9', 'C', '4'), new StaticString('0', '9', 'C', '7'), new StaticString('0', '9', 'C', '8'), new StaticString('0', '9', 'C', 'B'), new StaticString('0', '9', 'C', 'D'), new StaticString('0', '9', 'D', '7'), new StaticString('0', '9', 'E', '2'), new StaticString('0', '9', 'E', '3'), new StaticString('0', '9', 'E', '6'), new StaticString('0', '9', 'E', 'F'), new StaticString('0', 'A', '0', '1'), new StaticString('0', 'A', '0', '3'), new StaticString('0', 'A', '3', 'C'), new StaticString('0', 'A', '3', 'E'), new StaticString('0', 'A', '4', '2'), new StaticString('0', 'A', '4', '7'), new StaticString('0', 'A', '4', '8'), new StaticString('0', 'A', '4', 'B'), new StaticString('0', 'A', '4', 'D'), new StaticString('0', 'A', '5', '1'), new StaticString('0', 'A', '6', '6'), new StaticString('0', 'A', '7', '1'), new StaticString('0', 'A', '7', '5'), new StaticString('0', 'A', '8', '1'), new StaticString('0', 'A', '8', '3'), new StaticString('0', 'A', 'B', 'C'), new StaticString('0', 'A', 'B', 'E'), new StaticString('0', 'A', 'C', '5'), new StaticString('0', 'A', 'C', '7'), new StaticString('0', 'A', 'C', '9'), new StaticString('0', 'A', 'C', 'B'), new StaticString('0', 'A', 'C', 'D'), new StaticString('0', 'A', 'E', '2'), new StaticString('0', 'A', 'E', '3'), new StaticString('0', 'A', 'E', '6'), new StaticString('0', 'A', 'E', 'F'), new StaticString('0', 'B', '0', '1'), new StaticString('0', 'B', '0', '3'), new StaticString('0', 'B', '3', 'C'), new StaticString('0', 'B', '3', 'E'), new StaticString('0', 'B', '4', '4'), new StaticString('0', 'B', '4', '7'), new StaticString('0', 'B', '4', '8'), new StaticString('0', 'B', '4', 'B'), new StaticString('0', 'B', '4', 'D'), new StaticString('0', 'B', '5', '6'), new StaticString('0', 'B', '5', '7'), new StaticString('0', 'B', '6', '2'), new StaticString('0', 'B', '6', '3'), new StaticString('0', 'B', '6', '6'), new StaticString('0', 'B', '6', 'F'), new StaticString('0', 'B', '8', '2'), new StaticString('0', 'B', 'B', 'E'), new StaticString('0', 'B', 'C', '2'), new StaticString('0', 'B', 'C', '6'), new StaticString('0', 'B', 'C', '8'), new StaticString('0', 'B', 'C', 'A'), new StaticString('0', 'B', 'C', 'D'), new StaticString('0', 'B', 'D', '7'), new StaticString('0', 'B', 'E', '6'), new StaticString('0', 'B', 'E', 'F'), new StaticString('0', 'C', '0', '1'), new StaticString('0', 'C', '0', '3'), new StaticString('0', 'C', '3', 'E'), new StaticString('0', 'C', '4', '4'), new StaticString('0', 'C', '4', '6'), new StaticString('0', 'C', '4', '8'), new StaticString('0', 'C', '4', 'A'), new StaticString('0', 'C', '4', 'D'), new StaticString('0', 'C', '5', '5'), new StaticString('0', 'C', '5', '6'), new StaticString('0', 'C', '6', '2'), new StaticString('0', 'C', '6', '3'), new StaticString('0', 'C', '6', '6'), new StaticString('0', 'C', '6', 'F'), new StaticString('0', 'C', '8', '2'), new StaticString('0', 'C', '8', '3'), new StaticString('0', 'C', 'B', 'C'), new StaticString('0', 'C', 'B', 'E'), new StaticString('0', 'C', 'C', '4'), new StaticString('0', 'C', 'C', '6'), new StaticString('0', 'C', 'C', '8'), new StaticString('0', 'C', 'C', 'A'), new StaticString('0', 'C', 'C', 'D'), new StaticString('0', 'C', 'D', '5'), new StaticString('0', 'C', 'D', '6'), new StaticString('0', 'C', 'E', '2'), new StaticString('0', 'C', 'E', '3'), new StaticString('0', 'C', 'E', '6'), new StaticString('0', 'C', 'E', 'F'), new StaticString('0', 'D', '0', '2'), new StaticString('0', 'D', '0', '3'), new StaticString('0', 'D', '3', 'E'), new StaticString('0', 'D', '4', '4'), new StaticString('0', 'D', '4', '6'), new StaticString('0', 'D', '4', '8'), new StaticString('0', 'D', '4', 'A'), new StaticString('0', 'D', '4', 'D'), new StaticString('0', 'D', '5', '7'), new StaticString('0', 'D', '6', '2'), new StaticString('0', 'D', '6', '3'), new StaticString('0', 'D', '6', '6'), new StaticString('0', 'D', '6', 'F'), new StaticString('0', 'D', '8', '2'), new StaticString('0', 'D', '8', '3'), new StaticString('0', 'D', 'C', 'A'), new StaticString('0', 'D', 'C', 'F'), new StaticString('0', 'D', 'D', '4'), new StaticString('0', 'D', 'D', '6'), new StaticString('0', 'D', 'D', '8'), new StaticString('0', 'D', 'D', 'F'), new StaticString('0', 'D', 'F', '2'), new StaticString('0', 'D', 'F', '3'), new StaticString('0', 'E', '3', '1'), new StaticString('0', 'E', '3', '4'), new StaticString('0', 'E', '3', 'A'), new StaticString('0', 'E', '4', '7'), new StaticString('0', 'E', '4', 'E'), new StaticString('0', 'E', '5', '0'), new StaticString('0', 'E', '5', '9'), new StaticString('0', 'E', 'B', '1'), new StaticString('0', 'E', 'B', '4'), new StaticString('0', 'E', 'B', '9'), new StaticString('0', 'E', 'B', 'B'), new StaticString('0', 'E', 'B', 'C'), new StaticString('0', 'E', 'C', '8'), new StaticString('0', 'E', 'C', 'D'), new StaticString('0', 'E', 'D', '0'), new StaticString('0', 'E', 'D', '9'), new StaticString('0', 'F', '1', '8'), new StaticString('0', 'F', '1', '9'), new StaticString('0', 'F', '2', '0'), new StaticString('0', 'F', '2', '9'), new StaticString('0', 'F', '3', '5'), new StaticString('0', 'F', '3', '7'), new StaticString('0', 'F', '3', '9'), new StaticString('0', 'F', '3', 'E'), new StaticString('0', 'F', '3', 'F'), new StaticString('0', 'F', '7', '1'), new StaticString('0', 'F', '8', '4'), new StaticString('0', 'F', '8', '6'), new StaticString('0', 'F', '8', '7'), new StaticString('0', 'F', '8', 'D'), new StaticString('0', 'F', '9', '7'), new StaticString('0', 'F', '9', '9'), new StaticString('0', 'F', 'B', 'C'), new StaticString('0', 'F', 'C', '6'), new StaticString('1', '0', '2', 'B'), new StaticString('1', '0', '3', 'E'), new StaticString('1', '0', '4', '0'), new StaticString('1', '0', '4', '9'), new StaticString('1', '0', '5', '6'), new StaticString('1', '0', '5', '9'), new StaticString('1', '0', '5', 'E'), new StaticString('1', '0', '6', '0'), new StaticString('1', '0', '6', '2'), new StaticString('1', '0', '6', '4'), new StaticString('1', '0', '6', '7'), new StaticString('1', '0', '6', 'D'), new StaticString('1', '0', '7', '1'), new StaticString('1', '0', '7', '4'), new StaticString('1', '0', '8', '2'), new StaticString('1', '0', '8', 'D'), new StaticString('1', '0', '8', 'F'), new StaticString('1', '0', '9', 'D'), new StaticString('1', '3', '5', 'D'), new StaticString('1', '3', '5', 'F'), new StaticString('1', '7', '1', '2'), new StaticString('1', '7', '1', '4'), new StaticString('1', '7', '3', '2'), new StaticString('1', '7', '3', '4'), new StaticString('1', '7', '5', '2'), new StaticString('1', '7', '5', '3'), new StaticString('1', '7', '7', '2'), new StaticString('1', '7', '7', '3'), new StaticString('1', '7', 'B', '4'), new StaticString('1', '7', 'D', '3'), new StaticString('1', '7', 'D', 'D'), new StaticString('1', '7', 'E', '0'), new StaticString('1', '7', 'E', '9'), new StaticString('1', '8', '0', 'B'), new StaticString('1', '8', '0', 'D'), new StaticString('1', '8', '1', '0'), new StaticString('1', '8', '1', '9'), new StaticString('1', '8', 'A', '9'), new StaticString('1', '9', '2', '0'), new StaticString('1', '9', '2', 'B'), new StaticString('1', '9', '3', '0'), new StaticString('1', '9', '3', 'B'), new StaticString('1', '9', '4', '6'), new StaticString('1', '9', '4', 'F'), new StaticString('1', '9', 'B', '0'), new StaticString('1', '9', 'C', '0'), new StaticString('1', '9', 'C', '8'), new StaticString('1', '9', 'C', '9'), new StaticString('1', '9', 'D', '0'), new StaticString('1', '9', 'D', '9'), new StaticString('1', 'A', '1', '7'), new StaticString('1', 'A', '1', 'B'), new StaticString('1', 'A', '5', '5'), new StaticString('1', 'A', '5', 'E'), new StaticString('1', 'A', '6', '0'), new StaticString('1', 'A', '7', 'C'), new StaticString('1', 'A', '7', 'F'), new StaticString('1', 'A', '8', '9'), new StaticString('1', 'A', '9', '0'), new StaticString('1', 'A', '9', '9'), new StaticString('1', 'B', '0', '0'), new StaticString('1', 'B', '0', '4'), new StaticString('1', 'B', '3', '4'), new StaticString('1', 'B', '4', '4'), new StaticString('1', 'B', '5', '0'), new StaticString('1', 'B', '5', '9'), new StaticString('1', 'B', '6', 'B'), new StaticString('1', 'B', '7', '3'), new StaticString('1', 'B', '8', '0'), new StaticString('1', 'B', '8', '2'), new StaticString('1', 'B', 'A', '1'), new StaticString('1', 'B', 'A', 'D'), new StaticString('1', 'B', 'B', '0'), new StaticString('1', 'B', 'B', '9'), new StaticString('1', 'B', 'E', '6'), new StaticString('1', 'B', 'F', '3'), new StaticString('1', 'C', '2', '4'), new StaticString('1', 'C', '3', '7'), new StaticString('1', 'C', '4', '0'), new StaticString('1', 'C', '4', '9'), new StaticString('1', 'C', '5', '0'), new StaticString('1', 'C', '5', '9'), new StaticString('1', 'C', 'D', '0'), new StaticString('1', 'C', 'D', '2'), new StaticString('1', 'C', 'D', '4'), new StaticString('1', 'C', 'E', '8'), new StaticString('1', 'C', 'E', 'D'), new StaticString('1', 'C', 'F', '2'), new StaticString('1', 'C', 'F', '4'), new StaticString('1', 'D', 'C', '0'), new StaticString('1', 'D', 'E', '6'), new StaticString('1', 'D', 'F', 'C'), new StaticString('1', 'D', 'F', 'F'), new StaticString('2', '0', '0', 'C'), new StaticString('2', '0', '0', 'D'), new StaticString('2', '0', '3', 'F'), new StaticString('2', '0', '4', '0'), new StaticString('2', '0', '5', '4'), new StaticString('2', '0', 'D', '0'), new StaticString('2', '0', 'D', 'C'), new StaticString('2', '0', 'E', '1'), new StaticString('2', '0', 'E', '5'), new StaticString('2', '0', 'F', '0'), new StaticString('2', 'C', 'E', 'F'), new StaticString('2', 'C', 'F', '1'), new StaticString('2', 'D', '7', 'F'), new StaticString('2', 'D', 'E', '0'), new StaticString('2', 'D', 'F', 'F'), new StaticString('3', '0', '2', 'A'), new StaticString('3', '0', '2', 'F'), new StaticString('3', '0', '9', '9'), new StaticString('3', '0', '9', 'A'), new StaticString('A', '6', '2', '0'), new StaticString('A', '6', '2', '9'), new StaticString('A', '6', '6', 'F'), new StaticString('A', '6', '7', '4'), new StaticString('A', '6', '7', 'D'), new StaticString('A', '6', '9', 'F'), new StaticString('A', '6', 'F', '0'), new StaticString('A', '6', 'F', '1'), new StaticString('A', '8', '0', '2'), new StaticString('A', '8', '0', '6'), new StaticString('A', '8', '0', 'B'), new StaticString('A', '8', '2', '3'), new StaticString('A', '8', '2', '7'), new StaticString('A', '8', '8', '0'), new StaticString('A', '8', '8', '1'), new StaticString('A', '8', 'B', '4'), new StaticString('A', '8', 'C', '4'), new StaticString('A', '8', 'D', '0'), new StaticString('A', '8', 'D', '9'), new StaticString('A', '8', 'E', '0'), new StaticString('A', '8', 'F', '1'), new StaticString('A', '9', '0', '0'), new StaticString('A', '9', '0', '9'), new StaticString('A', '9', '2', '6'), new StaticString('A', '9', '2', 'D'), new StaticString('A', '9', '4', '7'), new StaticString('A', '9', '5', '3'), new StaticString('A', '9', '8', '0'), new StaticString('A', '9', '8', '3'), new StaticString('A', '9', 'B', '3'), new StaticString('A', '9', 'C', '0'), new StaticString('A', '9', 'D', '0'), new StaticString('A', '9', 'D', '9'), new StaticString('A', 'A', '2', '9'), new StaticString('A', 'A', '3', '6'), new StaticString('A', 'A', '4', '3'), new StaticString('A', 'A', '4', 'C'), new StaticString('A', 'A', '4', 'D'), new StaticString('A', 'A', '5', '0'), new StaticString('A', 'A', '5', '9'), new StaticString('A', 'A', '7', 'B'), new StaticString('A', 'A', 'B', '0'), new StaticString('A', 'A', 'B', '2'), new StaticString('A', 'A', 'B', '4'), new StaticString('A', 'A', 'B', '7'), new StaticString('A', 'A', 'B', '8'), new StaticString('A', 'A', 'B', 'E'), new StaticString('A', 'A', 'B', 'F'), new StaticString('A', 'A', 'C', '1'), new StaticString('A', 'A', 'E', 'B'), new StaticString('A', 'A', 'E', 'F'), new StaticString('A', 'A', 'F', '5'), new StaticString('A', 'A', 'F', '6'), new StaticString('A', 'B', 'E', '3'), new StaticString('A', 'B', 'E', 'A'), new StaticString('A', 'B', 'E', 'C'), new StaticString('A', 'B', 'E', 'D'), new StaticString('A', 'B', 'F', '0'), new StaticString('A', 'B', 'F', '9'), new StaticString('F', 'B', '1', 'E'), new StaticString('F', 'E', '0', '0'), new StaticString('F', 'E', '0', 'F'), new StaticString('F', 'E', '2', '0'), new StaticString('F', 'E', '2', '6'), new StaticString('F', 'E', '3', '3'), new StaticString('F', 'E', '3', '4'), new StaticString('F', 'E', '4', 'D'), new StaticString('F', 'E', '4', 'F'), new StaticString('F', 'F', '1', '0'), new StaticString('F', 'F', '1', '9'), new StaticString('F', 'F', '3', 'F')];
      var startCodes    = [new StaticString('0', '0', 'A', 'A'), new StaticString('0', '0', 'B', '5'), new StaticString('0', '0', 'B', 'A'), new StaticString('0', '0', 'C', '0'), new StaticString('0', '0', 'D', '6'), new StaticString('0', '0', 'D', '8'), new StaticString('0', '0', 'F', '6'), new StaticString('0', '0', 'F', '8'), new StaticString('0', '2', 'C', '1'), new StaticString('0', '2', 'C', '6'), new StaticString('0', '2', 'D', '1'), new StaticString('0', '2', 'E', '0'), new StaticString('0', '2', 'E', '4'), new StaticString('0', '2', 'E', 'C'), new StaticString('0', '2', 'E', 'E'), new StaticString('0', '3', '7', '0'), new StaticString('0', '3', '7', '4'), new StaticString('0', '3', '7', '6'), new StaticString('0', '3', '7', '7'), new StaticString('0', '3', '7', 'A'), new StaticString('0', '3', '7', 'D'), new StaticString('0', '3', '8', '6'), new StaticString('0', '3', '8', '8'), new StaticString('0', '3', '8', 'A'), new StaticString('0', '3', '8', 'C'), new StaticString('0', '3', '8', 'E'), new StaticString('0', '3', 'A', '1'), new StaticString('0', '3', 'A', '3'), new StaticString('0', '3', 'F', '5'), new StaticString('0', '3', 'F', '7'), new StaticString('0', '4', '8', '1'), new StaticString('0', '4', '8', 'A'), new StaticString('0', '5', '2', '7'), new StaticString('0', '5', '3', '1'), new StaticString('0', '5', '5', '6'), new StaticString('0', '5', '5', '9'), new StaticString('0', '5', '6', '1'), new StaticString('0', '5', '8', '7'), new StaticString('0', '5', 'D', '0'), new StaticString('0', '5', 'E', 'A'), new StaticString('0', '5', 'F', '0'), new StaticString('0', '5', 'F', '2'), new StaticString('0', '6', '2', '0'), new StaticString('0', '6', '4', 'A'), new StaticString('0', '6', '6', 'E'), new StaticString('0', '6', '6', 'F'), new StaticString('0', '6', '7', '1'), new StaticString('0', '6', 'D', '3'), new StaticString('0', '6', 'D', '5'), new StaticString('0', '6', 'E', '5'), new StaticString('0', '6', 'E', '6'), new StaticString('0', '6', 'E', 'E'), new StaticString('0', '6', 'E', 'F'), new StaticString('0', '6', 'F', 'A'), new StaticString('0', '6', 'F', 'C'), new StaticString('0', '6', 'F', 'F'), new StaticString('0', '7', '1', '0'), new StaticString('0', '7', '1', '2'), new StaticString('0', '7', '2', 'F'), new StaticString('0', '7', '4', 'D'), new StaticString('0', '7', 'A', '5'), new StaticString('0', '7', 'B', '1'), new StaticString('0', '7', 'C', 'A'), new StaticString('0', '7', 'E', 'A'), new StaticString('0', '7', 'F', '4'), new StaticString('0', '7', 'F', '5'), new StaticString('0', '7', 'F', 'A'), new StaticString('0', '8', '0', '0'), new StaticString('0', '8', '1', '5'), new StaticString('0', '8', '1', 'A'), new StaticString('0', '8', '2', '4'), new StaticString('0', '8', '2', '8'), new StaticString('0', '8', '4', '0'), new StaticString('0', '8', '5', '8'), new StaticString('0', '8', 'A', '0'), new StaticString('0', '8', 'A', '2'), new StaticString('0', '8', 'A', 'C'), new StaticString('0', '9', '0', '4'), new StaticString('0', '9', '3', '9'), new StaticString('0', '9', '3', 'D'), new StaticString('0', '9', '5', '0'), new StaticString('0', '9', '5', '8'), new StaticString('0', '9', '6', '1'), new StaticString('0', '9', '7', '1'), new StaticString('0', '9', '7', '7'), new StaticString('0', '9', '7', '9'), new StaticString('0', '9', '7', 'F'), new StaticString('0', '9', '8', '5'), new StaticString('0', '9', '8', 'C'), new StaticString('0', '9', '8', 'F'), new StaticString('0', '9', '9', '0'), new StaticString('0', '9', '9', '3'), new StaticString('0', '9', 'A', '8'), new StaticString('0', '9', 'A', 'A'), new StaticString('0', '9', 'B', '0'), new StaticString('0', '9', 'B', '2'), new StaticString('0', '9', 'B', '6'), new StaticString('0', '9', 'B', '9'), new StaticString('0', '9', 'B', 'D'), new StaticString('0', '9', 'C', 'E'), new StaticString('0', '9', 'D', 'C'), new StaticString('0', '9', 'D', 'D'), new StaticString('0', '9', 'D', 'F'), new StaticString('0', '9', 'E', '1'), new StaticString('0', '9', 'F', '0'), new StaticString('0', '9', 'F', '1'), new StaticString('0', 'A', '0', '5'), new StaticString('0', 'A', '0', 'A'), new StaticString('0', 'A', '0', 'F'), new StaticString('0', 'A', '1', '0'), new StaticString('0', 'A', '1', '3'), new StaticString('0', 'A', '2', '8'), new StaticString('0', 'A', '2', 'A'), new StaticString('0', 'A', '3', '0'), new StaticString('0', 'A', '3', '2'), new StaticString('0', 'A', '3', '3'), new StaticString('0', 'A', '3', '5'), new StaticString('0', 'A', '3', '6'), new StaticString('0', 'A', '3', '8'), new StaticString('0', 'A', '3', '9'), new StaticString('0', 'A', '5', '9'), new StaticString('0', 'A', '5', 'C'), new StaticString('0', 'A', '5', 'E'), new StaticString('0', 'A', '7', '2'), new StaticString('0', 'A', '7', '4'), new StaticString('0', 'A', '8', '5'), new StaticString('0', 'A', '8', 'D'), new StaticString('0', 'A', '8', 'F'), new StaticString('0', 'A', '9', '1'), new StaticString('0', 'A', '9', '3'), new StaticString('0', 'A', 'A', '8'), new StaticString('0', 'A', 'A', 'A'), new StaticString('0', 'A', 'B', '0'), new StaticString('0', 'A', 'B', '2'), new StaticString('0', 'A', 'B', '3'), new StaticString('0', 'A', 'B', '5'), new StaticString('0', 'A', 'B', '9'), new StaticString('0', 'A', 'B', 'D'), new StaticString('0', 'A', 'D', '0'), new StaticString('0', 'A', 'E', '0'), new StaticString('0', 'A', 'E', '1'), new StaticString('0', 'B', '0', '5'), new StaticString('0', 'B', '0', 'C'), new StaticString('0', 'B', '0', 'F'), new StaticString('0', 'B', '1', '0'), new StaticString('0', 'B', '1', '3'), new StaticString('0', 'B', '2', '8'), new StaticString('0', 'B', '2', 'A'), new StaticString('0', 'B', '3', '0'), new StaticString('0', 'B', '3', '2'), new StaticString('0', 'B', '3', '3'), new StaticString('0', 'B', '3', '5'), new StaticString('0', 'B', '3', '9'), new StaticString('0', 'B', '3', 'D'), new StaticString('0', 'B', '5', 'C'), new StaticString('0', 'B', '5', 'D'), new StaticString('0', 'B', '5', 'F'), new StaticString('0', 'B', '6', '1'), new StaticString('0', 'B', '7', '1'), new StaticString('0', 'B', '8', '3'), new StaticString('0', 'B', '8', '5'), new StaticString('0', 'B', '8', 'A'), new StaticString('0', 'B', '8', 'E'), new StaticString('0', 'B', '9', '0'), new StaticString('0', 'B', '9', '2'), new StaticString('0', 'B', '9', '5'), new StaticString('0', 'B', '9', '9'), new StaticString('0', 'B', '9', 'A'), new StaticString('0', 'B', '9', 'C'), new StaticString('0', 'B', '9', 'E'), new StaticString('0', 'B', '9', 'F'), new StaticString('0', 'B', 'A', '3'), new StaticString('0', 'B', 'A', '4'), new StaticString('0', 'B', 'A', '8'), new StaticString('0', 'B', 'A', 'A'), new StaticString('0', 'B', 'A', 'E'), new StaticString('0', 'B', 'B', '9'), new StaticString('0', 'B', 'D', '0'), new StaticString('0', 'C', '0', '5'), new StaticString('0', 'C', '0', 'C'), new StaticString('0', 'C', '0', 'E'), new StaticString('0', 'C', '1', '0'), new StaticString('0', 'C', '1', '2'), new StaticString('0', 'C', '2', '8'), new StaticString('0', 'C', '2', 'A'), new StaticString('0', 'C', '3', '3'), new StaticString('0', 'C', '3', '5'), new StaticString('0', 'C', '3', '9'), new StaticString('0', 'C', '3', 'D'), new StaticString('0', 'C', '5', '8'), new StaticString('0', 'C', '5', '9'), new StaticString('0', 'C', '6', '0'), new StaticString('0', 'C', '6', '1'), new StaticString('0', 'C', '8', '5'), new StaticString('0', 'C', '8', 'C'), new StaticString('0', 'C', '8', 'E'), new StaticString('0', 'C', '9', '0'), new StaticString('0', 'C', '9', '2'), new StaticString('0', 'C', 'A', '8'), new StaticString('0', 'C', 'A', 'A'), new StaticString('0', 'C', 'B', '3'), new StaticString('0', 'C', 'B', '5'), new StaticString('0', 'C', 'B', '9'), new StaticString('0', 'C', 'B', 'D'), new StaticString('0', 'C', 'D', 'E'), new StaticString('0', 'C', 'E', '0'), new StaticString('0', 'C', 'E', '1'), new StaticString('0', 'C', 'F', '1'), new StaticString('0', 'C', 'F', '2'), new StaticString('0', 'D', '0', '5'), new StaticString('0', 'D', '0', 'C'), new StaticString('0', 'D', '0', 'E'), new StaticString('0', 'D', '1', '0'), new StaticString('0', 'D', '1', '2'), new StaticString('0', 'D', '3', 'A'), new StaticString('0', 'D', '3', 'D'), new StaticString('0', 'D', '4', 'E'), new StaticString('0', 'D', '6', '0'), new StaticString('0', 'D', '6', '1'), new StaticString('0', 'D', '7', 'A'), new StaticString('0', 'D', '7', 'F'), new StaticString('0', 'D', '8', '5'), new StaticString('0', 'D', '9', '6'), new StaticString('0', 'D', '9', 'A'), new StaticString('0', 'D', 'B', '1'), new StaticString('0', 'D', 'B', '3'), new StaticString('0', 'D', 'B', 'B'), new StaticString('0', 'D', 'B', 'D'), new StaticString('0', 'D', 'C', '0'), new StaticString('0', 'D', 'C', '6'), new StaticString('0', 'E', '0', '1'), new StaticString('0', 'E', '3', '0'), new StaticString('0', 'E', '3', '2'), new StaticString('0', 'E', '3', '3'), new StaticString('0', 'E', '4', '0'), new StaticString('0', 'E', '4', '6'), new StaticString('0', 'E', '8', '1'), new StaticString('0', 'E', '8', '2'), new StaticString('0', 'E', '8', '4'), new StaticString('0', 'E', '8', '7'), new StaticString('0', 'E', '8', '8'), new StaticString('0', 'E', '8', 'A'), new StaticString('0', 'E', '8', 'D'), new StaticString('0', 'E', '9', '4'), new StaticString('0', 'E', '9', '7'), new StaticString('0', 'E', '9', '9'), new StaticString('0', 'E', '9', 'F'), new StaticString('0', 'E', 'A', '1'), new StaticString('0', 'E', 'A', '3'), new StaticString('0', 'E', 'A', '5'), new StaticString('0', 'E', 'A', '7'), new StaticString('0', 'E', 'A', 'A'), new StaticString('0', 'E', 'A', 'B'), new StaticString('0', 'E', 'A', 'D'), new StaticString('0', 'E', 'B', '0'), new StaticString('0', 'E', 'B', '2'), new StaticString('0', 'E', 'B', '3'), new StaticString('0', 'E', 'B', 'D'), new StaticString('0', 'E', 'C', '0'), new StaticString('0', 'E', 'C', '4'), new StaticString('0', 'E', 'C', '6'), new StaticString('0', 'E', 'D', 'C'), new StaticString('0', 'E', 'D', 'F'), new StaticString('0', 'F', '0', '0'), new StaticString('0', 'F', '4', '0'), new StaticString('0', 'F', '4', '7'), new StaticString('0', 'F', '4', '9'), new StaticString('0', 'F', '6', 'C'), new StaticString('0', 'F', '8', '8'), new StaticString('0', 'F', '8', 'C'), new StaticString('1', '0', '0', '0'), new StaticString('1', '0', '2', 'A'), new StaticString('1', '0', '3', 'F'), new StaticString('1', '0', '5', '0'), new StaticString('1', '0', '5', '5'), new StaticString('1', '0', '5', 'A'), new StaticString('1', '0', '5', 'D'), new StaticString('1', '0', '6', '1'), new StaticString('1', '0', '6', '5'), new StaticString('1', '0', '6', '6'), new StaticString('1', '0', '6', 'E'), new StaticString('1', '0', '7', '0'), new StaticString('1', '0', '7', '5'), new StaticString('1', '0', '8', '1'), new StaticString('1', '0', '8', 'E'), new StaticString('1', '0', 'A', '0'), new StaticString('1', '0', 'C', '5'), new StaticString('1', '0', 'C', '7'), new StaticString('1', '0', 'C', 'D'), new StaticString('1', '0', 'D', '0'), new StaticString('1', '0', 'F', 'A'), new StaticString('1', '0', 'F', 'C'), new StaticString('1', '2', '4', '8'), new StaticString('1', '2', '4', 'A'), new StaticString('1', '2', '4', 'D'), new StaticString('1', '2', '5', '0'), new StaticString('1', '2', '5', '6'), new StaticString('1', '2', '5', '8'), new StaticString('1', '2', '5', 'A'), new StaticString('1', '2', '5', 'D'), new StaticString('1', '2', '6', '0'), new StaticString('1', '2', '8', '8'), new StaticString('1', '2', '8', 'A'), new StaticString('1', '2', '8', 'D'), new StaticString('1', '2', '9', '0'), new StaticString('1', '2', 'B', '0'), new StaticString('1', '2', 'B', '2'), new StaticString('1', '2', 'B', '5'), new StaticString('1', '2', 'B', '8'), new StaticString('1', '2', 'B', 'E'), new StaticString('1', '2', 'C', '0'), new StaticString('1', '2', 'C', '2'), new StaticString('1', '2', 'C', '5'), new StaticString('1', '2', 'C', '8'), new StaticString('1', '2', 'D', '6'), new StaticString('1', '2', 'D', '8'), new StaticString('1', '3', '1', '0'), new StaticString('1', '3', '1', '2'), new StaticString('1', '3', '1', '5'), new StaticString('1', '3', '1', '8'), new StaticString('1', '3', '5', 'A'), new StaticString('1', '3', '8', '0'), new StaticString('1', '3', '8', 'F'), new StaticString('1', '3', 'A', '0'), new StaticString('1', '3', 'F', '4'), new StaticString('1', '4', '0', '1'), new StaticString('1', '6', '6', 'C'), new StaticString('1', '6', '6', 'F'), new StaticString('1', '6', '7', 'F'), new StaticString('1', '6', '8', '1'), new StaticString('1', '6', '9', 'A'), new StaticString('1', '6', 'A', '0'), new StaticString('1', '6', 'E', 'A'), new StaticString('1', '6', 'E', 'E'), new StaticString('1', '6', 'F', '0'), new StaticString('1', '7', '0', '0'), new StaticString('1', '7', '0', 'C'), new StaticString('1', '7', '0', 'E'), new StaticString('1', '7', '1', '1'), new StaticString('1', '7', '2', '0'), new StaticString('1', '7', '3', '1'), new StaticString('1', '7', '4', '0'), new StaticString('1', '7', '5', '1'), new StaticString('1', '7', '6', '0'), new StaticString('1', '7', '6', 'C'), new StaticString('1', '7', '6', 'E'), new StaticString('1', '7', '7', '0'), new StaticString('1', '7', '8', '0'), new StaticString('1', '7', 'B', '3'), new StaticString('1', '7', 'D', '7'), new StaticString('1', '7', 'D', 'C'), new StaticString('1', '8', '2', '0'), new StaticString('1', '8', '7', '7'), new StaticString('1', '8', '8', '0'), new StaticString('1', '8', 'A', '8'), new StaticString('1', '8', 'A', 'A'), new StaticString('1', '8', 'B', '0'), new StaticString('1', '8', 'F', '5'), new StaticString('1', '9', '0', '0'), new StaticString('1', '9', '1', 'C'), new StaticString('1', '9', '5', '0'), new StaticString('1', '9', '6', 'D'), new StaticString('1', '9', '7', '0'), new StaticString('1', '9', '7', '4'), new StaticString('1', '9', '8', '0'), new StaticString('1', '9', 'A', 'B'), new StaticString('1', '9', 'C', '1'), new StaticString('1', '9', 'C', '7'), new StaticString('1', 'A', '0', '0'), new StaticString('1', 'A', '1', '6'), new StaticString('1', 'A', '2', '0'), new StaticString('1', 'A', '5', '4'), new StaticString('1', 'A', 'A', '7'), new StaticString('1', 'B', '0', '5'), new StaticString('1', 'B', '3', '3'), new StaticString('1', 'B', '4', '5'), new StaticString('1', 'B', '4', 'B'), new StaticString('1', 'B', '8', '3'), new StaticString('1', 'B', 'A', '0'), new StaticString('1', 'B', 'A', 'E'), new StaticString('1', 'B', 'A', 'F'), new StaticString('1', 'B', 'B', 'A'), new StaticString('1', 'B', 'E', '5'), new StaticString('1', 'C', '0', '0'), new StaticString('1', 'C', '2', '3'), new StaticString('1', 'C', '4', 'D'), new StaticString('1', 'C', '4', 'F'), new StaticString('1', 'C', '5', 'A'), new StaticString('1', 'C', '7', 'D'), new StaticString('1', 'C', 'E', '9'), new StaticString('1', 'C', 'E', 'C'), new StaticString('1', 'C', 'E', 'E'), new StaticString('1', 'C', 'F', '1'), new StaticString('1', 'C', 'F', '5'), new StaticString('1', 'C', 'F', '6'), new StaticString('1', 'D', '0', '0'), new StaticString('1', 'D', 'B', 'F'), new StaticString('1', 'E', '0', '0'), new StaticString('1', 'F', '1', '5'), new StaticString('1', 'F', '1', '8'), new StaticString('1', 'F', '1', 'D'), new StaticString('1', 'F', '2', '0'), new StaticString('1', 'F', '4', '5'), new StaticString('1', 'F', '4', '8'), new StaticString('1', 'F', '4', 'D'), new StaticString('1', 'F', '5', '0'), new StaticString('1', 'F', '5', '7'), new StaticString('1', 'F', '5', '9'), new StaticString('1', 'F', '5', 'B'), new StaticString('1', 'F', '5', 'D'), new StaticString('1', 'F', '5', 'F'), new StaticString('1', 'F', '7', 'D'), new StaticString('1', 'F', '8', '0'), new StaticString('1', 'F', 'B', '4'), new StaticString('1', 'F', 'B', '6'), new StaticString('1', 'F', 'B', 'C'), new StaticString('1', 'F', 'B', 'E'), new StaticString('1', 'F', 'C', '2'), new StaticString('1', 'F', 'C', '4'), new StaticString('1', 'F', 'C', '6'), new StaticString('1', 'F', 'C', 'C'), new StaticString('1', 'F', 'D', '0'), new StaticString('1', 'F', 'D', '3'), new StaticString('1', 'F', 'D', '6'), new StaticString('1', 'F', 'D', 'B'), new StaticString('1', 'F', 'E', '0'), new StaticString('1', 'F', 'E', 'C'), new StaticString('1', 'F', 'F', '2'), new StaticString('1', 'F', 'F', '4'), new StaticString('1', 'F', 'F', '6'), new StaticString('1', 'F', 'F', 'C'), new StaticString('2', '0', '7', '1'), new StaticString('2', '0', '7', 'F'), new StaticString('2', '0', '9', '0'), new StaticString('2', '0', '9', 'C'), new StaticString('2', '1', '0', '2'), new StaticString('2', '1', '0', '7'), new StaticString('2', '1', '0', 'A'), new StaticString('2', '1', '1', '3'), new StaticString('2', '1', '1', '5'), new StaticString('2', '1', '1', '9'), new StaticString('2', '1', '1', 'D'), new StaticString('2', '1', '2', '4'), new StaticString('2', '1', '2', '6'), new StaticString('2', '1', '2', '8'), new StaticString('2', '1', '2', 'A'), new StaticString('2', '1', '2', 'D'), new StaticString('2', '1', '2', 'F'), new StaticString('2', '1', '3', '9'), new StaticString('2', '1', '3', 'C'), new StaticString('2', '1', '3', 'F'), new StaticString('2', '1', '4', '5'), new StaticString('2', '1', '4', '9'), new StaticString('2', '1', '4', 'E'), new StaticString('2', '1', '6', '0'), new StaticString('2', '1', '8', '8'), new StaticString('2', 'C', '0', '0'), new StaticString('2', 'C', '2', 'E'), new StaticString('2', 'C', '3', '0'), new StaticString('2', 'C', '5', 'E'), new StaticString('2', 'C', '6', '0'), new StaticString('2', 'C', 'E', '4'), new StaticString('2', 'C', 'E', 'B'), new StaticString('2', 'C', 'E', 'E'), new StaticString('2', 'C', 'F', '2'), new StaticString('2', 'C', 'F', '3'), new StaticString('2', 'D', '0', '0'), new StaticString('2', 'D', '2', '5'), new StaticString('2', 'D', '2', '7'), new StaticString('2', 'D', '2', 'D'), new StaticString('2', 'D', '3', '0'), new StaticString('2', 'D', '6', '7'), new StaticString('2', 'D', '6', 'F'), new StaticString('2', 'D', '8', '0'), new StaticString('2', 'D', '9', '6'), new StaticString('2', 'D', 'A', '0'), new StaticString('2', 'D', 'A', '6'), new StaticString('2', 'D', 'A', '8'), new StaticString('2', 'D', 'A', 'E'), new StaticString('2', 'D', 'B', '0'), new StaticString('2', 'D', 'B', '6'), new StaticString('2', 'D', 'B', '8'), new StaticString('2', 'D', 'B', 'E'), new StaticString('2', 'D', 'C', '0'), new StaticString('2', 'D', 'C', '6'), new StaticString('2', 'D', 'C', '8'), new StaticString('2', 'D', 'C', 'E'), new StaticString('2', 'D', 'D', '0'), new StaticString('2', 'D', 'D', '6'), new StaticString('2', 'D', 'D', '8'), new StaticString('2', 'D', 'D', 'E'), new StaticString('2', 'E', '2', 'F'), new StaticString('3', '0', '0', '5'), new StaticString('3', '0', '0', '7'), new StaticString('3', '0', '2', '1'), new StaticString('3', '0', '2', '9'), new StaticString('3', '0', '3', '1'), new StaticString('3', '0', '3', '5'), new StaticString('3', '0', '3', '8'), new StaticString('3', '0', '3', 'C'), new StaticString('3', '0', '4', '1'), new StaticString('3', '0', '9', '6'), new StaticString('3', '0', '9', 'D'), new StaticString('3', '0', '9', 'F'), new StaticString('3', '0', 'A', '1'), new StaticString('3', '0', 'F', 'A'), new StaticString('3', '0', 'F', 'C'), new StaticString('3', '0', 'F', 'F'), new StaticString('3', '1', '0', '5'), new StaticString('3', '1', '2', 'D'), new StaticString('3', '1', '3', '1'), new StaticString('3', '1', '8', 'E'), new StaticString('3', '1', 'A', '0'), new StaticString('3', '1', 'B', 'A'), new StaticString('3', '1', 'F', '0'), new StaticString('3', '1', 'F', 'F'), new StaticString('3', '4', '0', '0'), new StaticString('4', 'D', 'B', '5'), new StaticString('4', 'E', '0', '0'), new StaticString('9', 'F', 'C', 'C'), new StaticString('A', '0', '0', '0'), new StaticString('A', '4', '8', 'C'), new StaticString('A', '4', 'D', '0'), new StaticString('A', '4', 'F', 'D'), new StaticString('A', '5', '0', '0'), new StaticString('A', '6', '0', 'C'), new StaticString('A', '6', '1', '0'), new StaticString('A', '6', '1', 'F'), new StaticString('A', '6', '2', 'A'), new StaticString('A', '6', '2', 'B'), new StaticString('A', '6', '4', '0'), new StaticString('A', '6', '6', 'E'), new StaticString('A', '6', '7', 'F'), new StaticString('A', '6', '9', '7'), new StaticString('A', '6', 'A', '0'), new StaticString('A', '6', 'E', 'F'), new StaticString('A', '7', '1', '7'), new StaticString('A', '7', '1', 'F'), new StaticString('A', '7', '2', '2'), new StaticString('A', '7', '8', '8'), new StaticString('A', '7', '8', 'B'), new StaticString('A', '7', '8', 'E'), new StaticString('A', '7', '9', '0'), new StaticString('A', '7', '9', '3'), new StaticString('A', '7', 'A', '0'), new StaticString('A', '7', 'A', 'A'), new StaticString('A', '7', 'F', '8'), new StaticString('A', '8', '0', '1'), new StaticString('A', '8', '0', '3'), new StaticString('A', '8', '0', '5'), new StaticString('A', '8', '0', '7'), new StaticString('A', '8', '0', 'A'), new StaticString('A', '8', '0', 'C'), new StaticString('A', '8', '2', '2'), new StaticString('A', '8', '4', '0'), new StaticString('A', '8', '7', '3'), new StaticString('A', '8', '8', '2'), new StaticString('A', '8', 'B', '3'), new StaticString('A', '8', 'F', '2'), new StaticString('A', '8', 'F', '7'), new StaticString('A', '8', 'F', 'B'), new StaticString('A', '9', '0', 'A'), new StaticString('A', '9', '2', '5'), new StaticString('A', '9', '3', '0'), new StaticString('A', '9', '4', '6'), new StaticString('A', '9', '6', '0'), new StaticString('A', '9', '7', 'C'), new StaticString('A', '9', '8', '4'), new StaticString('A', '9', 'B', '2'), new StaticString('A', '9', 'C', 'F'), new StaticString('A', 'A', '0', '0'), new StaticString('A', 'A', '2', '8'), new StaticString('A', 'A', '4', '0'), new StaticString('A', 'A', '4', '2'), new StaticString('A', 'A', '4', '4'), new StaticString('A', 'A', '4', 'B'), new StaticString('A', 'A', '6', '0'), new StaticString('A', 'A', '7', '6'), new StaticString('A', 'A', '7', 'A'), new StaticString('A', 'A', '8', '0'), new StaticString('A', 'A', 'A', 'F'), new StaticString('A', 'A', 'B', '1'), new StaticString('A', 'A', 'B', '5'), new StaticString('A', 'A', 'B', '6'), new StaticString('A', 'A', 'B', '9'), new StaticString('A', 'A', 'B', 'D'), new StaticString('A', 'A', 'C', '0'), new StaticString('A', 'A', 'C', '2'), new StaticString('A', 'A', 'D', 'B'), new StaticString('A', 'A', 'D', 'D'), new StaticString('A', 'A', 'E', '0'), new StaticString('A', 'A', 'E', 'A'), new StaticString('A', 'A', 'F', '2'), new StaticString('A', 'A', 'F', '4'), new StaticString('A', 'B', '0', '1'), new StaticString('A', 'B', '0', '6'), new StaticString('A', 'B', '0', '9'), new StaticString('A', 'B', '0', 'E'), new StaticString('A', 'B', '1', '1'), new StaticString('A', 'B', '1', '6'), new StaticString('A', 'B', '2', '0'), new StaticString('A', 'B', '2', '6'), new StaticString('A', 'B', '2', '8'), new StaticString('A', 'B', '2', 'E'), new StaticString('A', 'B', 'C', '0'), new StaticString('A', 'B', 'E', '2'), new StaticString('A', 'C', '0', '0'), new StaticString('D', '7', 'A', '3'), new StaticString('D', '7', 'B', '0'), new StaticString('D', '7', 'C', '6'), new StaticString('D', '7', 'C', 'B'), new StaticString('D', '7', 'F', 'B'), new StaticString('F', '9', '0', '0'), new StaticString('F', 'A', '6', 'D'), new StaticString('F', 'A', '7', '0'), new StaticString('F', 'A', 'D', '9'), new StaticString('F', 'B', '0', '0'), new StaticString('F', 'B', '0', '6'), new StaticString('F', 'B', '1', '3'), new StaticString('F', 'B', '1', '7'), new StaticString('F', 'B', '1', 'D'), new StaticString('F', 'B', '1', 'F'), new StaticString('F', 'B', '2', '8'), new StaticString('F', 'B', '2', 'A'), new StaticString('F', 'B', '3', '6'), new StaticString('F', 'B', '3', '8'), new StaticString('F', 'B', '3', 'C'), new StaticString('F', 'B', '3', 'E'), new StaticString('F', 'B', '4', '0'), new StaticString('F', 'B', '4', '1'), new StaticString('F', 'B', '4', '3'), new StaticString('F', 'B', '4', '4'), new StaticString('F', 'B', '4', '6'), new StaticString('F', 'B', 'B', '1'), new StaticString('F', 'B', 'D', '3'), new StaticString('F', 'D', '3', 'D'), new StaticString('F', 'D', '5', '0'), new StaticString('F', 'D', '8', 'F'), new StaticString('F', 'D', '9', '2'), new StaticString('F', 'D', 'C', '7'), new StaticString('F', 'D', 'F', '0'), new StaticString('F', 'D', 'F', 'B'), new StaticString('F', 'E', '7', '0'), new StaticString('F', 'E', '7', '4'), new StaticString('F', 'E', '7', '6'), new StaticString('F', 'E', 'F', 'C'), new StaticString('F', 'F', '2', '1'), new StaticString('F', 'F', '3', 'A'), new StaticString('F', 'F', '4', '1'), new StaticString('F', 'F', '5', 'A'), new StaticString('F', 'F', '6', '6'), new StaticString('F', 'F', 'B', 'E'), new StaticString('F', 'F', 'C', '2'), new StaticString('F', 'F', 'C', '7'), new StaticString('F', 'F', 'C', 'A'), new StaticString('F', 'F', 'C', 'F'), new StaticString('F', 'F', 'D', '2'), new StaticString('F', 'F', 'D', '7'), new StaticString('F', 'F', 'D', 'A'), new StaticString('F', 'F', 'D', 'C')];
      var stringIndex;
      var stringLength  = string.length;

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
      if (Functions.stringIsIdentifierStart(Functions.stringAt(string, +0))) stringIndex = 1;
      else if (stringIsUnicode(startCodes, +0)) stringIndex = 6;
      else return false;

      while (stringIndex < stringLength) {
        if (Functions.stringIsIdentifierContinue(Functions.stringAt(string, stringIndex))) ++stringIndex;
        else if (stringIsUnicode(continueCodes, stringIndex)) stringIndex += 6;
        else return false
      }

      return true
    };

    Functions.stringIsIdentifierContinue = function stringIsIdentifierContinue(character) /* WARN (Lapys) -> Only covers ASCII characters */ {
      return Functions.stringIsDigit(character) || Functions.stringIsIdentifierStart(character)
    };

    Functions.stringIsIdentifierStart = function stringIsIdentifierStart(character) /* WARN (Lapys) -> Only covers ASCII characters */ {
      return (
        character === 'A' || character === 'B' || character === 'C' || character === 'D' || character === 'E' || character === 'F' || character === 'G' || character === 'H' || character === 'I' || character === 'J' || character === 'K' || character === 'L' || character === 'M' || character === 'N' || character === 'O' || character === 'P' || character === 'Q' || character === 'R' || character === 'S' || character === 'T' || character === 'U' || character === 'V' || character === 'W' || character === 'X' || character === 'Y' || character === 'Z' ||
        character === 'a' || character === 'b' || character === 'c' || character === 'd' || character === 'e' || character === 'f' || character === 'g' || character === 'h' || character === 'i' || character === 'j' || character === 'k' || character === 'l' || character === 'm' || character === 'n' || character === 'o' || character === 'p' || character === 'q' || character === 'r' || character === 's' || character === 't' || character === 'u' || character === 'v' || character === 'w' || character === 'x' || character === 'y' || character === 'z' ||
        character === '_' || character === '$'
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
