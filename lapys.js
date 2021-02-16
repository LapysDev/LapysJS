; /* ...
    NOTE (Lapys) -> Used native features are shimmed.
    WARN (Lapys) -> All code must be universally supported in all standardized versions of JavaScript.
*/

/* Global > ... */
function LapysDevelopmentKit() { /* [private code] */ return '[' + LapysJS.version + "]: " + LapysJS.description }
var LapysJS = {};

/* ...
    --- NOTE (Lapys) -> Library SDK configuration (Private Interface)
    --- WARN (Lapys) -> Publicly communicates private data via the `prototype` property.
*/
/* LapysDevelopmentKit */ void function() {
    /* Polyfill */
    var Infinity = 1 / +0;
    var NaN = +0 / +0;
    var undefined = void 0;

    /* Shorthand --- WARN (Lapys) -> Do not forget to hide this critical interface. */
    var LDK = (LapysDevelopmentKit.prototype = {
        Assertions: {
            ObjectDefinePropertyDOMOnlyImplementation: false,
            ObjectGetOwnPropertyDescriptorDOMOnlyImplementation: false,
            StringSubscriptAvailable: false
        },

        Constants: { // NOTE (Lapys) -> Defined on declaration.
            FeatureRequestFlags: {ONEXCEPTION: 0x1, ONMISSING: 0x2, ONMODIFIED: 0x4},
            JavaScriptLinefeeds: null,
            JavaScriptWhitespaces: null,
            NativeFunctionObfuscatedSourceCode: null
        },

        Directives: {
            ANY: {}, // NOTE (Lapys) -> Represents a non-unique value; though its value is distinct.
            CURRENT: null, // NOTE (Lapys) -> Represents the current object (a local temporary) synchronously interfacing with the library.
            ERROR: {message: "", toString: function toString() { return LDKD.ERROR.message }, valueOf: function valueOf() { return LDKD.ERROR.message }},
            FLAG: null, // NOTE (Lapys) -> Identifies default arguments to functions; default parameters are not available in all JavaScript versions.
            GLOBAL: "undefined" == typeof(self) ? ("undefined" == typeof(window) ? ("undefined" == typeof(global) ? (function() { return this })() : global) : window) : self,
            STOP: false // NOTE (Lapys) -> Used to terminate certain procedures generally.
        },

        Errors: {error: null,
            MISSING_REQUIRED_FEATURE: 0x1,
            MODIFIED_REQUIRED_FEATURE: 0x2
        },

        Functions: {
            defineProperty: null,
            getPropertyDescriptor: null,
            getSource: null,
            hasProperty: null,
            inspectNativeFeature: null,
            isArray: null,
            isBigInt: null, isBoolean: null,
            isFunction: null,
            isNativeConstructor: null, isNativeFunction: null, isNull: null, isNumber: null,
            isObject: null,
            isRegularExpression: null,
            isString: null, isSymbol: null,
            isVoid: null,
            putProperty: null,
            sourceIsNativeFunction: null,
            stringAt: null
        },

        Mathematics: {
            abs: null,
            acos: null,
            acosh: null,
            asin: null,
            asinh: null,
            atan: null,
            atan2: null,
            atanh: null,
            cbrt: null,
            ceil: null,
            clon: null,
            clz: null,
            cos: null,
            cosh: null,
            exp: null,
            floor: null,
            imul: null,
            log: null,
            max: null,
            min: null,
            pow: null,
            random: null,
            root: null,
            round: null,
            sign: null,
            sin: null,
            sinh: null,
            sqrt: null,
            tan: null,
            tanh: null,
            trunc: null
        },

        Natives: {
            Array: null,
            Element$defineProperty: null,
            Function$prototype$toString: null,

            Math$abs: null,
            Math$acos: null,
            Math$acosh: null,
            Math$asin: null,
            Math$asinh: null,
            Math$atan: null,
            Math$atan2: null,
            Math$atanh: null,
            Math$cbrt: null,
            Math$ceil: null,
            Math$clon: null,
            Math$clz: null,
            Math$cos: null,
            Math$cosh: null,
            Math$exp: null,
            Math$floor: null,
            Math$imul: null,
            Math$log: null,
            Math$max: null,
            Math$min: null,
            Math$pow: null,
            Math$random: null,
            Math$root: null,
            Math$round: null,
            Math$sign: null,
            Math$sin: null,
            Math$sinh: null,
            Math$sqrt: null,
            Math$tan: null,
            Math$tanh: null,
            Math$trunc: null,

            Object: null,
            Object$defineProperty: null,
            Object$getOwnPropertyDescriptor: null,
            Object$hasOwnProperty: null,
            Object$propertyIsEnumerable: null,
            Object$prototype$__defineGetter__: null,
            Object$prototype$__defineSetter__: null,
            Object$prototype$__lookupGetter__: null,
            Object$prototype$__lookupSetter__: null,

            String$prototype$charAt: null
        },
        UserInterface: {Accordion: null, Breadcrumb: null, Button: null, Carousel: null, Dropdown: null, DynamicText: null, DynamicTime: null, Hero: null, Image: null, Pagination: null, Picker: null, ProgressBar: null, Slider: null, Table: null, Toggle: null, Tooltip: null}
    });
    var LDKA = LDK.Assertions;
    var LDKC = LDK.Constants;
    var LDKD = LDK.Directives;
    var LDKE = LDK.Errors;
    var LDKF = LDK.Functions;
    var LDKM = LDK.Mathematics;
    var LDKN = LDK.Natives;
    var LDKU = LDK.UserInterface;

    var Components = LDKU;

    /* Modification > Lapys Development Kit > ... */
    with (LDK) { with (Directives) {
        /* Assertions */
        Assertions.ObjectDefinePropertyDOMOnlyImplementation = false;
        Assertions.ObjectGetOwnPropertyDescriptorDOMOnlyImplementation = false;
        Assertions.StringSubscriptAvailable = '\0' === '\0'[+0];

        /* Components --- CHECKPOINT (Lapys) */
        Components.Accordion = function Accordion() {};
        Components.Breadcrumb = function Breadcrumb() {};
        Components.Button = function Button() { /* NOTE (Lapys) -> Just for fun. */ };
        Components.Carousel = function Carousel() {};
        Components.Dropdown = function Dropdown() {};
        Components.DynamicText = function DynamicText() {};
        Components.DynamicTime = function DynamicTime() {};
        Components.Hero = function Hero() {};
        Components.Image = function Image() { /* NOTE (Lapys) -> Responsive; uses `<picture>` if available. */ };
        Components.Pagination = function Pagination() {};
        Components.Picker = function Picker() { /* NOTE (Lapys) -> Date Picker. */ };
        Components.ProgressBar = function ProgressBar() { /* NOTE (Lapys) -> May return `<progress>` if available. */ };
        Components.Slider = function Slider() { /* NOTE (Lapys) -> May return `<range>` if available. */ };
        Components.Table = function Table() {};
        Components.Toggle = function Toggle() { /* NOTE (Lapys) -> ON | OFF. */ };
        Components.Tooltip = function Tooltip() {};

        /* Constants */
        Constants.JavaScriptLinefeeds = ['\u000A', '\u000D'];
        Constants.JavaScriptWhitespaces = ['\u0009', '\u000B', '\u000C', '\u0020'];
        Constants.NativeFunctionObfuscatedSourceCode = [
            /* NOTE (Lapys) -> Prevent ambiguity between the subscript operator (`[]`) & `String.prototype.charAt` utility. */
            /* -> "[Command Line API]"*/ ['[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'],
            /* -> "[native code]"*/      ['[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']']
        ];

        /* Errors */
        Errors.error = function throwError(type, message) {
            // Logic > ... > Modification > Error > Message
            if (LDKF.isString(type)) ERROR.message = "[Error]: " + type;
            else with (Errors) switch (type) {
                case MISSING_REQUIRED_FEATURE: ERROR.message = "[MissingFeatureError]"; break;
                case MODIFIED_REQUIRED_FEATURE: ERROR.message = "[ModifiedFeatureError]"; break;
                default: ERROR.message = "[Error]"; break
            } ERROR.message = ((arguments.length || 1) == 1 ? ERROR.message : ERROR.message + ": " + message) + '\0';

            // Error
            throw ERROR
        };

        /* Functions */ {
            // Define Property --- CHECKPOINT (Lapys) -> Returns boolean determining if it failed.
            Functions.defineProperty = function defineProperty() {};

            // Get Property Descriptor --- CHECKPOINT (Lapys)
            Functions.getPropertyDescriptor = function getPropertyDescriptor() {};

            // Get Source
            Functions.getSource = function getSource(routine) { return LDKN.Function$prototype$toString === routine.toString ? routine.toString() : LDKE.error(LDKE.MODIFIED_REQUIRED_FEATURE, "Native `Function.prototype.toString` implementation is required") };

            // Has Property --- CHECKPOINT (Lapys)
            Functions.hasProperty = function hasProperty() {};

            // Is ...
            Functions.isArray = function isArray(argument) { /* CHECKPOINT (Lapys) */ };
            Functions.isBigInt = function isBigInt(argument) { return "bigint" == typeof(argument) };
            Functions.isBoolean = function isBoolean(argument) { return "boolean" == typeof(argument) };
            Functions.isFunction = function isFunction(argument) { return "function" == typeof(argument) || (/* CHECKPOINT (Lapys) */ false) };
            Functions.isNull = function isNull(argument) { return null === argument };
            Functions.isNumber = function isNumber(argument) { return "number" == typeof(argument) };
            Functions.isObject = function isObject(argument) { return "object" == typeof(argument) };
            Functions.isRegularExpression = function isRegularExpression(argument) { /* CHECKPOINT (Lapys) */ };
            Functions.isString = function isString(argument) { return "string" == typeof(argument) };
            Functions.isSymbol = function isSymbol(argument) { return "symbol" == typeof(argument) };
            Functions.isVoid = function isVoid(argument) { return undefined === argument /* CHECKPOINT (Lapys) -> `HTMLAllCollection` */ };

            // Is Native (Constructor, Function)
            Functions.isNativeConstructor = function isNativeConstructor(argument) { return LDKF.isNativeFunction(argument) };
            Functions.isNativeFunction = function isNativeFunction(argument) { return "function" == typeof(argument) && LDKF.sourceIsNativeFunction(LDKF.getSource(argument)) };

            // Put Property --- NOTE (Lapys) -> Attempts to add a property onto an object. --- REDACT (Lapys)
            Functions.putProperty = function putProperty(object, identifier, descriptor) {
                if (false == Functions.defineProperty(object, identifier, descriptor))
                object[identifier] = "value" in descriptor ? descriptor.value : undefined
            };

            // Inspect Native Feature --> LDKF.inspectNativeFeature(...).assert(function() { ... }).request()
            Functions.inspectNativeFeature = function inspectNativeFeature(object, identifier, fallback, states, name) {
                // Evaluation > Data
                var data = LDKF.inspectNativeFeature.prototype;

                // Modification > Data > ... --- NOTE (Lapys) -> Setup the arguments to `request()` the "inspected" feature.
                data.exceptionStates = LDKF.isVoid(states) ? 0x0 : states;
                data.fallbackFeature = LDKF.isVoid(fallback) ? ERROR : fallback;
                data.featureName = LDKF.isVoid(name) ? identifier : name;
                data.featureValidator = null;
                data.object = object;
                data.objectPropertyIdentifier = identifier;

                // Return
                return data
            }; Functions.inspectNativeFeature.prototype = {
                assert: function assert(validator) { LDKF.inspectNativeFeature.prototype.featureValidator = validator; return LDKF.inspectNativeFeature.prototype },
                request: function request() { with (LDKF.inspectNativeFeature.prototype) {
                    // Logic > ...
                    if (
                        false == ("function" == typeof(object) || "object" == typeof(object)) ||
                        objectPropertyIdentifier in object
                    ) {
                        // Evaluation > Feature
                        var feature;

                        // (Error Handling > )Update > Feature
                        try { feature = object[objectPropertyIdentifier] }
                        catch (error) { feature = exceptionStates & LDKC.FeatureRequestFlags.ONEXCEPTION ? ERROR : fallbackFeature }

                        (
                            ERROR !== feature &&
                            (null !== featureValidator && false == featureValidator(feature, object, objectPropertyIdentifier))
                        ) && (feature = exceptionStates & LDKC.FeatureRequestFlags.ONMODIFIED ? ERROR : fallbackFeature);

                        // Error
                        (ERROR === feature) &&
                        LDKE.error(LDKE.MODIFIED_REQUIRED_FEATURE, "Native `" + featureName + "` implementation is required");

                        // Return
                        return feature
                    } else if (exceptionStates & LDKC.FeatureRequestFlags.ONMISSING) LDKE.error(LDKE.MISSING_REQUIRED_FEATURE, "Native `" + featureName + "` feature is required");

                    // Return
                    return ERROR
                } },

                exceptionStates: 0x0,
                fallbackFeature: ANY,
                featureName: null,
                featureValidator: null,
                object: null,
                objectPropertyIdentifier: null
            };

            /* Source Is Native Function
                    --- NOTE (Lapys) -> Asserts by searching for obfuscated code (e.g.: `[native code]`)
                    --- WARN (Lapys) -> Parses code even within comments & string literals.
            */
            Functions.sourceIsNativeFunction = function sourceIsNativeFunction(source) {
                // Loop --- NOTE (Lapys) -> Check registry of obfuscated code on every iterated character.
                for (var length = source.length, iterator = length - 1; ~iterator; --iterator)
                for (
                    var obfuscatedSourcesLength = LDKC.NativeFunctionObfuscatedSourceCode.length, obfuscatedSourcesIterator = obfuscatedSourcesLength - 1;
                    ~obfuscatedSourcesIterator; --obfuscatedSourcesIterator
                ) {
                    // Initialization > Obfuscated Source ...
                    var obfuscatedSource = LDKC.NativeFunctionObfuscatedSourceCode[obfuscatedSourcesIterator];
                    var obfuscatedSourceIterator = obfuscatedSource.length - 1;

                    // Logic > Loop --- NOTE (Lapys) -> Does the current sequence of characters match the registry of obfuscated code?
                    if (obfuscatedSource[obfuscatedSourceIterator--] == LDKF.stringAt(source, iterator))
                    for (var subiterator = iterator - 1; ~subiterator; --subiterator) {
                        // Logic > (Terminate | Return)
                        if (obfuscatedSource[obfuscatedSourceIterator--] != LDKF.stringAt(source, subiterator)) break;
                        else if (+0 == ~obfuscatedSourceIterator) return true
                    }
                }

                // Return
                return false
            };

            /* String At */
            LDKA.StringSubscriptAvailable && (Functions.stringAt = function stringAt(string, index) { return string[index] })
        }

        /* Mathematics --- CHECKPOINT (Lapys) --- NOTE (Lapys) -> Used in the public interface. */
        Mathematics.abs = function abs(number) { return number < +0 ? -number : number };
        Mathematics.acos = function acos(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.acosh = function acosh(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.asin = function asin(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.asinh = function asinh(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.atan = function atan(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.atan2 = function atan2(y, x) { /* CHECKPOINT (Lapys) */ };
        Mathematics.atanh = function atanh(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.cbrt = function cbrt(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.ceil = function ceil(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.clon = function clon(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.clz = function clz(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.cos = function cos(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.cosh = function cosh(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.exp = function exp(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.floor = function floor(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.imul = function imul(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.log = function log(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.max = function max(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.min = function min(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.pow = function pow(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.random = function random(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.root = function root(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.round = function round(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.sign = function sign(number) { return ((number > +0) - (number < +0)) || +number; };
        Mathematics.sin = function sin(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.sinh = function sinh(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.sqrt = function sqrt(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.tan = function tan(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.tanh = function tanh(number) { /* CHECKPOINT (Lapys) */ };
        Mathematics.trunc = function trunc(number) { /* CHECKPOINT (Lapys) */ };

        /* Natives */ with (LDKC.FeatureRequestFlags) {
            /* String > Prototype > Character At */ if (LDKF.isNull(LDKF.stringAt)) {
                Natives.String$prototype$charAt = LDKF.inspectNativeFeature((""), "charAt", null, FLAG = ONEXCEPTION | ONMISSING | ONMODIFIED, FLAG = "String.prototype.charAt").assert(function(feature) {
                    var source;

                    try { source = "" + feature } catch (error) { source = false } // NOTE (Lapys) -> `Function.prototype.toString` not validated yet..
                    return LDKF.isString(source) && ( // WARN (Lapys) -> Hacky with limited-case assertion here, but functionally works.
                        source === "function charAt() { [native code] }" ||
                        source === "function charAt() {\n    [native code]\n}" ||
                        source === "\nfunction charAt() {\n    [native code]\n}\n"
                    )
                }).request();

                // ...
                LDKF.stringAt = function stringAt(string, index) { return LDKN.String$prototype$charAt === string.charAt ? string.charAt(index) : LDKE.error(LDKE.MODIFIED_REQUIRED_FEATURE, "Native `String.prototype.charAt` implementation is required") }
            }

            // Function > Prototype > To String --- WARN (Lapys) -> Requires the `String.prototype.charAt` feature for a lesser limited assertion..
            Natives.Function$prototype$toString = LDKF.inspectNativeFeature((function() {}), "toString", null, FLAG = ONEXCEPTION | ONMISSING | ONMODIFIED, FLAG = "Function.prototype.toString").assert(function(feature) {
                var source;

                try { source = "" + feature } catch (error) { source = false }
                return LDKF.isString(source) && LDKF.sourceIsNativeFunction(source)
            }).request();

            // Object --- CHECKPOINT (Lapys)
            Natives.Object = LDKF.inspectNativeFeature(GLOBAL, "Object", null, FLAG = ONEXCEPTION | ONMISSING | ONMODIFIED).assert(LDKF.isNativeConstructor).request();
                // Create
                Natives.Object$create = LDKF.inspectNativeFeature(LDKN.Object, "create", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.create").assert(LDKF.isNativeFunction).request();

                /* Define Property */ if (LDKA.StringSubscriptAvailable) {
                    Natives.Object$defineProperty = LDKF.inspectNativeFeature(LDKN.Object, "defineProperty", null, FLAG = ONEXCEPTION | ONMISSING | ONMODIFIED, FLAG = "Object.defineProperty").assert(function(feature) {
                        if (LDKF.isNativeFunction(feature)) {
                            try { var dummy = {}; feature(dummy, "", {value: undefined}); return "" in dummy }
                            catch (error) { LDKA.ObjectDefinePropertyDOMOnlyImplementation = true; LDKN.Element$defineProperty = feature }

                            return true
                        } return false
                    }).request()
                } else Natives.Object$defineProperty = ERROR;

                // Define (Getter, Setter)
                Natives.Object$prototype$__defineGetter__ = LDKF.inspectNativeFeature({}, "__defineGetter__", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.prototype.__defineGetter__").assert(LDKF.isNativeFunction).request();
                Natives.Object$prototype$__defineSetter__ = LDKF.inspectNativeFeature({}, "__defineSetter__", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.prototype.__defineSetter__").assert(LDKF.isNativeFunction).request();

                /* Get Own Property Descriptor */ if (LDKA.StringSubscriptAvailable) {
                    Natives.Object$getOwnPropertyDescriptor = LDKF.inspectNativeFeature(LDKN.Object, "getOwnPropertyDescriptor", null, FLAG = ONEXCEPTION | ONMISSING | ONMODIFIED, FLAG = "Object.getOwnPropertyDescriptor").assert(function(feature) {
                        if (LDKF.isNativeFunction(feature)) {
                            try { var evaluation = feature({"": undefined}, ""); return false == LDKF.isVoid(evaluation) }
                            catch (error) { LDKA.ObjectGetOwnPropertyDescriptorDOMOnlyImplementation = true; LDKN.Element$getOwnPropertyDescriptor = feature }

                            return true
                        } return false
                    }).request()
                } else Natives.Object$getOwnPropertyDescriptor = ERROR;

                // Has Own Property
                Natives.Object$hasOwnProperty = LDKF.inspectNativeFeature({}, "hasOwnProperty", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.prototype.hasOwnProperty").assert(LDKF.isNativeFunction).request();

                // Lookup (Getter, Setter)
                Natives.Object$prototype$__lookupGetter__ = LDKF.inspectNativeFeature({}, "__lookupGetter__", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.prototype.__lookupGetter__").assert(LDKF.isNativeFunction).request();
                Natives.Object$prototype$__lookupSetter__ = LDKF.inspectNativeFeature({}, "__lookupSetter__", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.prototype.__lookupSetter__").assert(LDKF.isNativeFunction).request();

                // Property Is Enumerable
                Natives.Object$propertyIsEnumerable = LDKF.inspectNativeFeature({}, "propertyIsEnumerable", null, FLAG = ONEXCEPTION | ONMODIFIED, FLAG = "Object.prototype.propertyIsEnumerable").assert(LDKF.isNativeFunction).request();

            // Document > Create Element
            // Element
                // Attributes
                // Child Nodes
                // /* Define Property */ if (LDKA.StringSubscriptAvailable) {
                //     function inspect() {
                //         var dummy = document.createElement('_');

                //         try { LDKN.Element$defineProperty(dummy, "", {value: undefined}); return true }
                //         catch (error) {
                //             LDKN.Element$defineProperty = ERROR;
                //             LDKA.ObjectDefinePropertyDOMOnlyImplementation = false
                //         }

                //         return false
                //     }

                //     if (null !== LDKN.Element$defineProperty) inspect() || LDKE.error(LDKE.MODIFIED_REQUIRED_FEATURE, "Native `Object.defineProperty` implementation is required");
                //     else if (ERROR !== LDKN.Object$defineProperty) { LDKN.Element$defineProperty = LDKN.Object$defineProperty; inspect() }
                // } else LDKN.Element$defineProperty = ERROR;

                // /* Get Own Property Descriptor */ if (LDKA.StringSubscriptAvailable) {
                //     var dummy = document.createElement('_');

                //     function inspect() {
                //         try { LDKN.Element$getOwnPropertyDescriptor(dummy, "") }
                //         catch (error) {
                //             LDKN.Element$getOwnPropertyDescriptor = ERROR;
                //             LDKA.ObjectGetOwnPropertyDescriptorDOMOnlyImplementation = false
                //         }
                //     }

                //     if (null !== LDKN.Element$getOwnPropertyDescriptor) inspect() || LDKE.error(LDKE.MODIFIED_REQUIRED_FEATURE, "Native `Object.getOwnPropertyDescriptor` implementation is required");
                //     else if (ERROR !== LDKN.Object$getOwnPropertyDescriptor) { LDKN.Element$getOwnPropertyDescriptor = LDKN.Object$getOwnPropertyDescriptor; inspect() }
                // } else LDKN.Element$getOwnPropertyDescriptor = ERROR;

            Functions.createObject = ERROR === LDKN.Object$create ? function createObject() { return {} } : function createObject() { return LDKN.Object$create(null) };
            Functions.defineProperty = function defineProperty(object, identifier, descriptor) {};
            Functions.elementDefineProperty = function elementDefineProperty(element, identifier, descriptor) {
                delete element[identifier];
                /*
                    - Reconfiguration requires deletion first, otherwise does not occur.
                    - {configurable: true, enumerable: true, writable: true} for data descriptor.
                    - {configurable: true, enumerable: false} for accessor descriptor.
                */
            };
            Functions.describeProperty = function describeProperty(object, identifier) {};
            Functions.getProperty = function getProperty(object, identifier) { return object[identifier] }
            Functions.getPropertyAccessor = function getPropertyAccessor(object, identifier) {};
            Functions.getPropertyMutator = function getPropertyMutator(object, identifier) {};
            Functions.getPropertyValue = function getPropertyValue(object, identifier) {};
            Functions.hasOwnProperty = function hasOwnProperty(object, identifier) {};
            Functions.hasProperty = function hasProperty(object, identifier) { return identifier in object };
            Functions.isEnumerableProperty = function isEnumerableProperty(object, identifier) {};
            Functions.putProperty = function putProperty(object, identifier) { with (LDKF.putProperty.prototype) {
                // Careful of defineProperty
                if (ERROR !== LDKN.Object$defineProperty) LDKN.Object$defineProperty(object, identifier, DESCRIPTOR);
                else if (ERROR !== LDKN.Object$prototype$__defineGetter__) LDKN.Object$prototype$__defineGetter__(object, identifier, ACCESSOR);
                else LDKF.setProperty(object, identifier, undefined)
            } }; Functions.putProperty.prototype = {ACCESSOR: function() {}, DESCRIPTOR: {configurable: true, enumerable: true, value: undefined, writable: true}};
            Functions.removeProperty = function removeProperty() {};
            Functions.setProperty = function setProperty(object, identifier, value) { return (object[identifier] = value) };
            Functions.setPropertyAccessor = function setPropertyAccessor(object, identifier, accessor) {};
            Functions.setPropertyMutator = function setPropertyMutator(object, identifier, mutator) {};
            Functions.setPropertyValue = function setPropertyValue(object, identifier, value) {};

            // Document
                // Document Element
        }
    } }
}();

/* ... --- NOTE (Lapys) -> Library object (Public Interface) */
LapysJS = new (
    (function(prototype) {
        function LapysJS() {}
        LapysJS.prototype = prototype;

        return LapysJS
    })({
        author: "",
        description: "",
        version: "",

        Components: {
            Accordion: function Accordion() { return new LapysDevelopmentKit.prototype.UserInterface.Accordion(/* CHECKPOINT (Lapys) */) },
            Breadcrumb: function Breadcrumb() { return new LapysDevelopmentKit.prototype.UserInterface.Breadcrumb(/* CHECKPOINT (Lapys) */) },
            Button: function Button() { return new LapysDevelopmentKit.prototype.UserInterface.Button(/* CHECKPOINT (Lapys) */) },
            Carousel: function Carousel() { return new LapysDevelopmentKit.prototype.UserInterface.Carousel(/* CHECKPOINT (Lapys) */) },
            Dropdown: function Dropdown() { return new LapysDevelopmentKit.prototype.UserInterface.Dropdown(/* CHECKPOINT (Lapys) */) },
            DynamicText: function DynamicText() { return new LapysDevelopmentKit.prototype.UserInterface.DynamicText(/* CHECKPOINT (Lapys) */) },
            DynamicTime: function DynamicTime() { return new LapysDevelopmentKit.prototype.UserInterface.DynamicTime(/* CHECKPOINT (Lapys) */) },
            Hero: function Hero() { return new LapysDevelopmentKit.prototype.UserInterface.Hero(/* CHECKPOINT (Lapys) */) },
            Image: function Image() { return new LapysDevelopmentKit.prototype.UserInterface.Image(/* CHECKPOINT (Lapys) */) },
            Pagination: function Pagination() { return new LapysDevelopmentKit.prototype.UserInterface.Pagination(/* CHECKPOINT (Lapys) */) },
            Picker: function Picker() { return new LapysDevelopmentKit.prototype.UserInterface.Picker(/* CHECKPOINT (Lapys) */) },
            ProgressBar: function ProgressBar() { return new LapysDevelopmentKit.prototype.UserInterface.ProgressBar(/* CHECKPOINT (Lapys) */) },
            Slider: function Slider() { return new LapysDevelopmentKit.prototype.UserInterface.Slider(/* CHECKPOINT (Lapys) */) },
            Table: function Table() { return new LapysDevelopmentKit.prototype.UserInterface.Table(/* CHECKPOINT (Lapys) */) },
            Toggle: function Toggle() { return new LapysDevelopmentKit.prototype.UserInterface.Toggle(/* CHECKPOINT (Lapys) */) },
            Tooltip: function Tooltip() { return new LapysDevelopmentKit.prototype.UserInterface.Tooltip(/* CHECKPOINT (Lapys) */) }
        }
    })
);

/* Modification */
with (LapysDevelopmentKit.prototype)
void function(GLOBAL, LDKF, LDKM, LDKN) {
    /* Global > ... */
    LDKF.putProperty(GLOBAL, "abs", {value: ERROR === LDKN.Math$abs ? LDKM.abs : function abs(number) { with (LDKN.Math) return LDKN.Math$abs(number) }});
    LDKF.putProperty(GLOBAL, "acos", {value: ERROR === LDKN.Math$acos ? LDKM.acos : function acos(number) { with (LDKN.Math) return LDKN.Math$acos(number) }});
    LDKF.putProperty(GLOBAL, "acosh", {value: ERROR === LDKN.Math$acosh ? LDKM.acosh : function acosh(number) { with (LDKN.Math) return LDKN.Math$acosh(number) }});
    LDKF.putProperty(GLOBAL, "append", {value: function append() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "array", {value: function array() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "asin", {value: ERROR === LDKN.Math$asin ? LDKM.asin : function asin(number) { with (LDKN.Math) return LDKN.Math$asin(number) }});
    LDKF.putProperty(GLOBAL, "asinh", {value: ERROR === LDKN.Math$asinh ? LDKM.asinh : function asinh(number) { with (LDKN.Math) return LDKN.Math$asinh(number) }});
    LDKF.putProperty(GLOBAL, "assert", {value: function assert() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "atan", {value: ERROR === LDKN.Math$atan ? LDKM.atan : function atan(number) { with (LDKN.Math) return LDKN.Math$atan(number) }});
    LDKF.putProperty(GLOBAL, "atan2", {value: ERROR === LDKN.Math$atan2 ? LDKM.atan2 : function atan2(y, x) { with (LDKN.Math) return LDKN.Math$atan2(y, x) }});
    LDKF.putProperty(GLOBAL, "atanh", {value: ERROR === LDKN.Math$atanh ? LDKM.atanh : function atanh(number) { with (LDKN.Math) return LDKN.Math$atanh(number) }});
    LDKF.putProperty(GLOBAL, "bool", {value: function bool() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "cbrt", {value: ERROR === LDKN.Math$cbrt ? LDKM.cbrt : function cbrt(number) { with (LDKN.Math) return LDKN.Math$cbrt(number) }});
    LDKF.putProperty(GLOBAL, "ceil", {value: ERROR === LDKN.Math$ceil ? LDKM.ceil : function ceil(number) { with (LDKN.Math) return LDKN.Math$ceil(number) }});
    LDKF.putProperty(GLOBAL, "check", {value: function check() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "clon", {value: LDKM.clon});
    LDKF.putProperty(GLOBAL, "clz", {value: ERROR === LDKN.Math$clz ? LDKM.clz : function clz(number) { with (LDKN.Math) return LDKN.Math$clz(number) }});
    LDKF.putProperty(GLOBAL, "cos", {value: ERROR === LDKN.Math$cos ? LDKM.cos : function cos(number) { with (LDKN.Math) return LDKN.Math$cos(number) }});
    LDKF.putProperty(GLOBAL, "cosh", {value: ERROR === LDKN.Math$cosh ? LDKM.cosh : function cosh(number) { with (LDKN.Math) return LDKN.Math$cosh(number) }});
    LDKF.putProperty(GLOBAL, "createAttribute", {value: function createAttribute() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createComment", {value: function createComment() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createDocument", {value: function createDocument() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createDocumentFragment", {value: function createDocumentFragment() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createDocumentType", {value: function createDocumentType() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createElement", {value: function createElement() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createEvent", {value: function createEvent() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "createTextNode", {value: function createTextNode() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "def", {value: function def() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "emulate", {value: function emulate() { /* CHECKPOINT (Lapys) -> Fire an event */ }});
    LDKF.putProperty(GLOBAL, "error", {value: function error() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "exp", {value: ERROR === LDKN.Math$exp ? LDKM.exp : function exp(number) { with (LDKN.Math) return LDKN.Math$exp(number) }});
    LDKF.putProperty(GLOBAL, "floor", {value: ERROR === LDKN.Math$floor ? LDKM.floor : function floor(number) { with (LDKN.Math) return LDKN.Math$floor(number) }});
    LDKF.putProperty(GLOBAL, "imul", {value: ERROR === LDKN.Math$imul ? LDKM.imul : function imul(number) { with (LDKN.Math) return LDKN.Math$imul(number) }});
    LDKF.putProperty(GLOBAL, "info", {value: function info() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "int", {value: function int(argument) { return LDKM.trunc(LDKF.toNumber(argument)) }});
    LDKF.putProperty(GLOBAL, "interval", {value: function interval() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "iterate", {value: function iterate() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "log", {value: function log() { /* CHECKPOINT (Lapys) -> console || Math */ }});
    LDKF.putProperty(GLOBAL, "max", {value: function max() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "min", {value: function min() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "num", {value: function num() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "obj", {value: function obj() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "observe", {value: function observe() { /* CHECKPOINT (Lapys) -> Not available on non-sync */ }});
    LDKF.putProperty(GLOBAL, "onDOMReady", {value: function onDOMReady() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onDOMUpdated", {value: function onDOMUpdated() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onElementAdded", {value: function onElementAdded() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onElementCountChanged", {value: function onElementCountChanged() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onElementRemoved", {value: function onElementRemoved() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onElementUpdated", {value: function onElementUpdated() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onNodeAdded", {value: function onNodeAdded() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onNodeCountChanged", {value: function onNodeCountChanged() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onNodeRemoved", {value: function onNodeRemoved() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "onNodeUpdated", {value: function onNodeUpdated() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "point", {value: function point() { /* CHECKPOINT (Lapys) -> MouseEvent | PointerEvent */ }});
    LDKF.putProperty(GLOBAL, "pow", {value: ERROR === LDKN.Math$pow ? LDKM.pow : function pow(number, exponent) { with (LDKN.Math) return LDKN.Math$pow(number, exponent) }});
    LDKF.putProperty(GLOBAL, "preload", {value: function preload() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "randbool", {value: function randbool() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "randint", {value: function randint() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "random", {value: function random() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "randstr", {value: function randstr() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "range", {value: function range() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "redirect", {value: function redirect() { /* CHECKPOINT (Lapys) -> Can also go back to previous page */ }});
    LDKF.putProperty(GLOBAL, "reload", {value: function reload() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "remove", {value: function remove() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "request", {value: function request() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "root", {value: ERROR === LDKN.Math$root ? LDKM.root : function root(number, exponent) { with (LDKN.Math) return LDKN.Math$pow(number, 1 / exponent) }});
    LDKF.putProperty(GLOBAL, "round", {value: ERROR === LDKN.Math$round ? LDKM.round : function round(number) { with (LDKN.Math) return LDKN.Math$round(number) }});
    LDKF.putProperty(GLOBAL, "sign", {value: ERROR === LDKN.Math$sign ? LDKM.sign : function sign(number) { with (LDKN.Math) return LDKN.Math$sign(number) }});
    LDKF.putProperty(GLOBAL, "sin", {value: ERROR === LDKN.Math$sin ? LDKM.sin : function sin(number) { with (LDKN.Math) return LDKN.Math$sin(number) }});
    LDKF.putProperty(GLOBAL, "sinh", {value: ERROR === LDKN.Math$sinh ? LDKM.sinh : function sinh(number) { with (LDKN.Math) return LDKN.Math$sinh(number) }});
    LDKF.putProperty(GLOBAL, "sqrt", {value: ERROR === LDKN.Math$sqrt ? LDKM.sqrt : function sqrt(number) { with (LDKN.Math) return LDKN.Math$sqrt(number) }});
    LDKF.putProperty(GLOBAL, "step", {value: function step() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "stop", {value: function stop() { /* CHECKPOINT (Lapys) -> waitforrepaint(), without context stop loading the page */ }});
    LDKF.putProperty(GLOBAL, "str", {value: function str() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "sym", {value: function sym() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "tan", {value: ERROR === LDKN.Math$tan ? LDKM.tan : function tan(number) { with (LDKN.Math) return LDKN.Math$tan(number) }});
    LDKF.putProperty(GLOBAL, "tanh", {value: ERROR === LDKN.Math$tanh ? LDKM.tanh : function tanh(number) { with (LDKN.Math) return LDKN.Math$tanh(number) }});
    LDKF.putProperty(GLOBAL, "timeout", {value: function timeout() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "trunc", {value: ERROR === LDKN.Math$trunc ? LDKM.trunc : function trunc(number) { with (LDKN.Math) return LDKN.Math$trunc(number) }});
    LDKF.putProperty(GLOBAL, "undef", {value: function undef() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "unstop", {value: function unstop() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "wait", {value: function wait() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "waitforrepaint", {value: function waitforrepaint() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "warn", {value: function warn() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "write", {value: function write() { /* CHECKPOINT (Lapys) */ }});
    LDKF.putProperty(GLOBAL, "$a", {value: function $a() { /* CHECKPOINT (Lapys) -> All | Ancestor */ }});
    LDKF.putProperty(GLOBAL, "$c", {value: function $c() { /* CHECKPOINT (Lapys) -> Class */ }});
    LDKF.putProperty(GLOBAL, "$d", {value: function $d() { /* CHECKPOINT (Lapys) -> Descendant */ }});
    LDKF.putProperty(GLOBAL, "$i", {value: function $i() { /* CHECKPOINT (Lapys) -> ID */ }});
    LDKF.putProperty(GLOBAL, "$n", {value: function $n() { /* CHECKPOINT (Lapys) -> Next Sibling */ }});
    LDKF.putProperty(GLOBAL, "$p", {value: function $p() { /* CHECKPOINT (Lapys) -> Previous Sibling */ }});
    LDKF.putProperty(GLOBAL, "$t", {value: function $t() { /* CHECKPOINT (Lapys) -> Tag Name */ }});
    LDKF.putProperty(GLOBAL, "$$", {value: function $$() { /* CHECKPOINT (Lapys) -> Selector */ }});

    /* ... --- CHECKPOINT (Lapys) -> Polyfill missing features in `LapysDevelopmentKit.Natives`. */
}(Directives.GLOBAL, Functions, Mathematics, Natives);

/* Deletion --- NOTE (Lapys) -> Hide the critical interface of the LDK. */
LapysDevelopmentKit.prototype = { /* [private code] */ };
