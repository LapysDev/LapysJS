/** Main
    @author: Lapys Dev Team
    @description: LapysJS is a general-purpose, semantic and universal JavaScript library
    @version: 0.0.9
    @url: https://www.github.com/LapysDev/LapysJS

    --- NOTE ---
        #Lapys:
            - Details:
                -- Average Cumulative Processing Duration: 0ms
                -- Average File Upload Speed: 0ms
                -- Average Phase Processing Duration: 0ms
                -- Supported Development Environments:
                        --- Android (browser)
                        --- Internet Explorer 5 - 11 (browser)
                        --- Google Chrome (browser)
                        --- Microsoft Edge (browser)
                        --- Mozilla Firefox (browser)
                        --- Netscape Navigator 9
                        --- Node.js (runtime)
                        --- Safari (browser)

                -- Supported Environment Standards:
                    --- ECMAScript 2, 3rd Edition (1999) - current...
                    --- JavaScript v1.3 - current...

            - Notes:
                -- The library makes an effort to use only native features of JavaScript to allow for universal compatibility with legacy & modern host environments.

                    It also avoids liberal use of vendor-specific (or environment-restricted) features & APIs.
                    This is mainly due to subtle inconsistencies in the adaptation of the ECMAScript standard for JavaScript in consumer software and custom runtimes
                    (Hence the need for conditional comments (by Microsoft), fallbacks, polyfills, shims & shivs (by John Resig and Sam Ruby) and so on).

                    Of course, this supports the concept of spoof-proofing [https://en.m.wikipedia.org/wiki/Spoofing_attack] which is a prevention discipline that prevents
                    data being masqueraded and falsified.
                    Unfortunately, the JavaScript language adoption is limited in the context of its everyday-use APIs and spoofing;
                    which leads to most versions of the language being impossible to spoof-proof.

                    Conversely, this decision supports the design standards of the Lapys Development Kit into JavaScript such as:
                        --- software to be executed has four phases: Initiate, Update, Reset, Terminate (also known as RIUT),
                        --- private and public features are independent & separate but still communicate between each other (private being the main authority),
                        --- multiple solutions (often special-purpose) are deferred in favor of a single general-purpose solution when feasible,
                        --- and so on...

    --- RULES ---
        #Lapys:
            - All expressions/ statements/ values must be intentional (avoid the methodologies of Sloppy Mode in JavaScript [https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode]).
            - All features must be alphabetically defined & ordered for readability if feasible.
            - All non-universal features are banned (e.g.: Arrow functions, class objects, REST parameters and so on).
            - Avoid naming an object property `constructor`, instead defer to `constructorRoutine`.
            - Avoid naming an object property `function`, instead defer to `routine`.
            - Due to the ECMAScript standard supporting multiple zero types, it is a rule to explicitly & strictly differentiate between each of those values (e.g.: `-0` and `+0`) except in special cases.
            - Inline function expressions are only allowed in:
                -- Defining the `Main` function or
                -- Defining a phase: `Initiate`, `Update`, `Reset` or `Terminate` or
                -- If the alternative is less efficient/ preferable.

                This is to keep the language somewhat universally readable and similar to other programming languages.

    --- UPDATE REQUIRED ---
        #Lapys:
            - Target development environments (these may lack a core (and/ or modern) JavaScript feature or not work for unknown reasons...):
                -- Internet Explorer 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- Netscape Navigator 2 - 4 (browser) --- NOTE (Lapys) -> Deprecated.
                -- others...
*/
+(function Main() {
    /* Constants > ... */
    var AUTHOR = "Lapys";
    var DESCRIPTION = "LapysJS is a general-purpose, semantic and universal JavaScript library";
    var URL = "https://www.github.com/LapysDev/LapysJS";
    var VERSION = "0.0.9";

    /* Global > ... */
    var ANY = {}; // NOTE (Lapys) -> Represents non-unique data; Can also represent the result of a failed process.
    var GLOBAL = this; // NOTE (Lapys) -> The global namespace of the current environment --- WARN (Lapys) -> May not reference the global object (e.g.: `global`, `window` e.t.c.)).
    var STRICT = {}; // NOTE (Lapys) -> Represents an argument to a logical or non-essential function parameter; Also known as an Argument Flag.

    /* Polyfills > ... */
    var undefined = void +0; // NOTE (Lapys) -> Should not be allowed but it is.

    /* Namespace > ... */
    var LapysDevelopmentKit = new (function LapysDevelopmentKit() {
        // Constant > Lapys Development Kit
        var LapysDevelopmentKit = this;

        // Modification > Lapys Development Kit
            // Constants
            LapysDevelopmentKit.Constants = new (function Constants() {});
                // ...
                LapysDevelopmentKit.Constants.Assertions = {};
                LapysDevelopmentKit.Constants.Keywords = {};
                LapysDevelopmentKit.Constants.Numbers = {};
                LapysDevelopmentKit.Constants.Objects = {};
                LapysDevelopmentKit.Constants.Strings = {};

            /* Data
                    --- NOTE (Lapys) -> Namespace for custom-defined data types.
                    --- WARN (Lapys) -> Type assertion & exception handling will not be utilized for speed in performance.
            */
            LapysDevelopmentKit.Data = new (function Data() {});

            // Environment --- NOTE (Lapys) -> Data container about the current host environment/ runtime.
            LapysDevelopmentKit.Environment = new (function Environment() {});

            // Functions
            LapysDevelopmentKit.Functions = new (function Functions() {});

            // Information
            LapysDevelopmentKit.Information = new (function Information() {});
                // Messages
                LapysDevelopmentKit.Information.Messages = {Debugging: {}, Error: {}};

                // Settings --- NOTE (Lapys) -> Compile-time directives that influence the code.
                LapysDevelopmentKit.Information.Settings = {DebugMode: false, IgnoreMissingFeatures: false};

            // Mathematics
            LapysDevelopmentKit.Mathematics = new (function Mathematics() {});

            // Objects --- NOTE (Lapys) -> Native structures & values.
            LapysDevelopmentKit.Objects = new (function Objects() {});

            // Storage
            LapysDevelopmentKit.Storage = new (function Storage() {});
                // ...
                LapysDevelopmentKit.Storage.Records = {};
                LapysDevelopmentKit.Storage.Registry = {};

        // Return
        return LapysDevelopmentKit
    });

    /* Shorthands */
    var LDK = LapysDevelopmentKit;
    var LDKC = LapysDevelopmentKit.Constants;
    var LDKD = LapysDevelopmentKit.Data;
    var LDKE = LapysDevelopmentKit.Environment;
    var LDKF = LapysDevelopmentKit.Functions;
    var LDKI = LapysDevelopmentKit.Information;
    var LDKM = LapysDevelopmentKit.Mathematics;
    var LDKO = LapysDevelopmentKit.Objects;
    var LDKS = LapysDevelopmentKit.Storage;

    /* Modification */
        /* Lapys Development Kit */
            /* Functions --- NOTE (Lapys) -> Fortunately, these objects manage their own properties; They are spoof-proof. */
                // Arguments > Prototype > (Argument At, Callee, Length)
                LapysDevelopmentKit.Functions.argumentsPrototypeArgumentAt = function argumentsPrototypeArgumentAt(argumentListObject, index) { return argumentListObject[index] };
                LapysDevelopmentKit.Functions.argumentsPrototypeCallee = function argumentsPrototypeCallee(argumentListObject) { return argumentListObject.callee };
                LapysDevelopmentKit.Functions.argumentsPrototypeLength = function argumentsPrototypeLength(argumentListObject) { return argumentListObject.length };

                // Array > Prototype > (Element At, Length)
                LapysDevelopmentKit.Functions.arrayPrototypeElementAt = function arrayPrototypeElementAt(array, index) { return array[index] };
                LapysDevelopmentKit.Functions.arrayPrototypeLength = function arrayPrototypeLength(array) { return array.length };

                // Function > Prototype > Prototype
                LapysDevelopmentKit.Functions.functionPrototypePrototype = function functionPrototypePrototype(routine) { return routine.prototype };

                // Object > Prototype > ((Delete, Get, Has, Set) Property, Is Of Constructor)
                LapysDevelopmentKit.Functions.objectPrototypeDeleteProperty = function objectPrototypeDeleteProperty(object, propertyIdentifier, SILENCE_EXCEPTIONS) { try { return delete object[propertyIdentifier] } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };
                LapysDevelopmentKit.Functions.objectPrototypeGetProperty = function objectPrototypeGetProperty(object, propertyIdentifier, SILENCE_EXCEPTIONS) { try { return object[propertyIdentifier] } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };
                LapysDevelopmentKit.Functions.objectPrototypeHasProperty = function objectPrototypeHasProperty(object, propertyIdentifier, SILENCE_EXCEPTIONS) { try { return propertyIdentifier in object } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };
                LapysDevelopmentKit.Functions.objectPrototypeIsOfConstructor = function objectPrototypeGetProperty(object, constructor, SILENCE_EXCEPTIONS) { try { return object instanceof constructor } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY }
                LapysDevelopmentKit.Functions.objectPrototypeSetProperty = function objectPrototypeSetProperty(object, propertyIdentifier, propertyValue, SILENCE_EXCEPTIONS) { try { return object[propertyIdentifier] = propertyValue } catch (error) { SILENCE_EXCEPTIONS || LDKF.throwError(error) } return ANY };

                // String > Prototype > Length
                LapysDevelopmentKit.Functions.stringPrototypeLength = function stringPrototypeLength(string) { return string.length };

                // Throw Error
                LapysDevelopmentKit.Functions.throwError = function throwError(error) { throw error };

            /* Data */
                // Safe String --- NOTE (Lapys) -> String type that does not rely on the `String.prototype.charAt` method to be universally compatible. --- MINIFY (Lapys)
                LapysDevelopmentKit.Data.SafeString = function SafeString() { var argumentsIterator = LDKF.argumentsPrototypeLength(arguments); var safeString = this; safeString.length = argumentsIterator; while (argumentsIterator) safeString[argumentsIterator -= 1] = LDKF.argumentsPrototypeArgumentAt(arguments, argumentsIterator); return safeString };

            /* Constants */
                // Numbers > ...
                LapysDevelopmentKit.Constants.Numbers.FrameRate = 1000 / 60; // NOTE (Lapys) -> Lock-time controlled asynchronous processes to 60 frames a second.
                LapysDevelopmentKit.Constants.Numbers.Infinity = 1 / +0;
                LapysDevelopmentKit.Constants.Numbers.IntegerSize = 32; // NOTE (Lapys) -> 32-bits for JavaScript engines, but most implementations use 53 bits.
                LapysDevelopmentKit.Constants.Numbers.NaN = +0 / +0;
                LapysDevelopmentKit.Constants.Numbers.PointerSize = 4; // NOTE (Lapys) -> Assumed size of pointers/ referrers in JavaScript (e.g.: object properties).

                // Keywords --- NOTE (Lapys) -> Utilize
                LapysDevelopmentKit.Constants.Keywords["extends"] = new LDKD.SafeString('e', 'x', 't', 'e', 'n', 'd', 's');

                // Strings > ...
                GLOBAL.a = LapysDevelopmentKit.Constants.Strings;
                LapysDevelopmentKit.Constants.Strings.Alphabets = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];
                LapysDevelopmentKit.Constants.Strings.ASCIICharacters = ['\0', '\2', '\3', '\4', '\5', '\6', '\7', '\x08', '\t', '\n', '', '', '', '', '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '', '', '', '', '', '', ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', '', '€', '\x81', '‚', '\u0192', '„', '\u2026', '\u2020', '\u2021', 'ˆ', '\u2030', '\u0160', '\u2039', '\u0152', '', 'Ž', '', '\x90', '\u2018', '\u2019', '“', '”', '\u2022', '\u2013', '\u2014', '˜', '\u2122', '\u0161', '›', '\u0153', '', 'ž', '\u0178', ' ', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '­', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ'];
                LapysDevelopmentKit.Constants.Strings.BinaryDigits = ['0', '1'];
                LapysDevelopmentKit.Constants.Strings.CSSCharacterSequences = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "\\!", "\\\"", "\\#", "\\$", "\\%", "\\&", "\\'", "\\(", "\\)", "\\*", "\\+", "\\,", "\\.", "\\/", "\\0", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\\8", "\\9", "\\:", "\\:", "\\;", "\\<", "\\=", "\\>", "\\?", "\\@", "\\A", "\\B", "\\C", "\\D", "\\E", "\\F", "\\G", "\\H", "\\I", "\\J", "\\K", "\\L", "\\M", "\\N", "\\O", "\\P", "\\Q", "\\R", "\\S", "\\T", "\\U", "\\V", "\\W", "\\X", "\\Y", "\\Z", "\\[", "\\\\", "\\]", "\\^", "\\_", "\\`", "\\a", "\\b", "\\c", "\\d", "\\e", "\\f", "\\g", "\\h", "\\i", "\\j", "\\k", "\\l", "\\m", "\\n", "\\o", "\\p", "\\q", "\\r", "\\s", "\\t", "\\u", "\\v", "\\w", "\\x", "\\y", "\\z", "\\{", "\\|", "\\}", "\\~", '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                LapysDevelopmentKit.Constants.Strings.DecimalDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                LapysDevelopmentKit.Constants.Strings.HexadecimalDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];
                LapysDevelopmentKit.Constants.Strings.HTMLElementTagNames = ['a', "address", 'b', "blockquote", "body", "br", "cite", "code", "dd", "dl", "dt", "em", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "html", 'i', "img", "input", "kbd", "li", "link", "meta", "ol", "option", 'p', "pre", "select", "strong", "textarea", "title", "ul", "var"];
                LapysDevelopmentKit.Constants.Strings.LanguageCodes = ["aa", "aar", "ab", "abk", "ace", "ach", "ada", "ady", "ae", "af", "afa", "afh", "afr", "ain", "ak", "aka", "akk", "alb", "ale", "alt", "am", "amh", "an", "ang", "anp", "apa", "ar", "ara", "arc", "arg", "arm", "arn", "arp", "art", "arw", "as", "asm", "ast", "ath", "aus", "av", "ava", "ave", "awa", "ay", "aym", "az", "aze", "ba", "bad", "bai", "bak", "bal", "bam", "ban", "baq", "bas", "bat", "be", "bej", "bel", "bem", "ben", "ber", "bg", "bh", "bho", "bi", "bih", "bik", "bis", "bla", "bm", "bn", "bnt", "bo", "bod", "bos", "br", "bra", "bre", "bs", "btk", "bua", "bug", "bul", "bur", "byn", "ca", "cad", "cai", "car", "cat", "cau", "ce", "ceb", "cel", "ces", "ch", "cha", "chb", "che", "chg", "chi", "chk", "chm", "chn", "cho", "chp", "chr", "chu", "chv", "chy", "cmc", "cnr", "co", "cop", "cor", "cos", "cpe", "cpf", "cpp", "cr", "cre", "crh", "crp", "cs", "csb", "cu", "cus", "cv", "cy", "cym", "cze", "da", "dak", "dan", "dar", "day", "de", "del", "den", "deu", "dgr", "din", "div", "doi", "dra", "dsb", "dua", "dum", "dut", "dv", "dyu", "dz", "dzo", "ee", "efi", "egy", "eka", "el", "ell", "elx", "en", "eng", "enm", "eo", "epo", "es", "est", "et", "eu", "eus", "ewe", "ewo", "fa", "fan", "fao", "fas", "fat", "ff", "fi", "fij", "fil", "fin", "fiu", "fj", "fo", "fon", "fr", "fra", "fre", "frm", "fro", "frr", "frs", "fry", "ful", "fur", "fy", "ga", "gaa", "gay", "gba", "gd", "gem", "geo", "ger", "gez", "gil", "gl", "gla", "gle", "glg", "glv", "gmh", "gn", "goh", "gon", "gor", "got", "grb", "grc", "gre", "grn", "gsw", "gu", "guj", "gv", "gwi", "ha", "hai", "hat", "hau", "haw", "he", "heb", "her", "hi", "hil", "him", "hin", "hit", "hmn", "hmo", "ho", "hr", "hrv", "hsb", "ht", "hu", "hun", "hup", "hy", "hye", "hz", "ia", "iba", "ibo", "ice", "id", "ido", "ie", "ig", "ii", "iii", "ijo", "ik", "iku", "ile", "ilo", "ina", "inc", "ind", "ine", "inh", "io", "ipk", "ira", "iro", "is", "isl", "it", "ita", "iu", "ja", "jav", "jbo", "jpn", "jpr", "jrb", "jv", "ka", "kaa", "kab", "kac", "kal", "kam", "kan", "kar", "kas", "kat", "kau", "kaw", "kaz", "kbd", "kg", "kha", "khi", "khm", "kho", "ki", "kik", "kin", "kir", "kj", "kk", "kl", "km", "kmb", "kn", "ko", "kok", "kom", "kon", "kor", "kos", "kpe", "kr", "krc", "krl", "kro", "kru", "ks", "ku", "kua", "kum", "kur", "kut", "kv", "kw", "ky", "la", "lad", "lah", "lam", "lao", "lat", "lav", "lb", "lezlim", "lg", "li", "lin", "lit", "ln", "lo", "lol", "loz", "lt", "ltz", "lu", "lua", "lub", "lug", "lui", "lun", "luo", "lus", "lv", "mac", "mad", "mag", "mah", "mai", "mak", "mal", "man", "mao", "map", "mar", "mas", "may", "mdf", "mdr", "men", "mg", "mga", "mh", "mi", "mic", "min", "mis", "mk", "mkd", "mkh", "ml", "mlg", "mlt", "mn", "mnc", "mnl", "mno", "moh", "mon", "mos", "mr", "mri", "ms", "msa", "mt", "mul", "mun", "mus", "mwl", "mwr", "my", "mya", "myn", "myv", "na", "nah", "nai", "nap", "nau", "nav", "nb", "nbl", "nd", "nde", "ndo", "nds", "ne", "nep", "new", "ng", "nia", "nic", "niu", "nl", "nld", "nn", "nno", "no", "nob", "nog", "non", "nor", "nqo", "nr", "nso", "nub", "nv", "nwc", "ny", "nya", "nym", "nyn", "nyo", "nzi", "oc", "oci", "oj", "oji", "om", "or", "ori", "orm", "os", "osa", "oss", "ota", "oto", "pa", "paa", "pag", "pal", "pam", "pan", "pap", "pau", "pcm", "peo", "per", "phi", "phn", "pi", "pl", "pli", "pol", "pon", "por", "pra", "pro", "ps", "pt", "pus", "qaa", "qtz", "qu", "que", "raj", "rap", "rar", "rm", "rn", "ro", "roa", "roh", "rom", "ron", "ru", "rum", "run", "rup", "rus", "rw", "sa", "sad", "sag", "sah", "sai", "sal", "sam", "san", "sas", "sat", "sc", "scn", "sco", "sd", "sel", "sem", "sg", "sga", "sgn", "shn", "si", "sid", "sin", "sio", "sit", "sk", "sl", "sla", "slk", "slo", "slv", "sm", "sma", "sme", "smi", "smj", "smn", "smo", "sms", "sn", "sna", "snd", "snk", "so", "sog", "som", "son", "sot", "spa", "sq", "sqi", "sr", "srd", "srp", "srr", "ss", "ssa", "ssw", "st", "su", "suk", "sun", "sus", "sux", "sv", "sw", "swa", "swe", "sws", "syc", "syr", "ta", "tah", "tai", "tam", "tat", "te", "tel", "tem", "ter", "tet", "tg", "tgk", "tgl", "th", "tha", "ti", "tib", "tig", "tir", "tiv", "tk", "tkl", "tl", "tlh", "tli", "tmh", "tn", "to", "tog", "ton", "tpi", "tr", "ts", "tsi", "tsn", "tso", "tt", "tuk", "tum", "tup", "tur", "tut", "tvl", "tw", "twi", "ty", "tyv", "udm", "ug", "uga", "uig", "uk", "ukr", "umb", "und", "ur", "urd", "uz", "uzb", "vai", "venve", "vi", "vie", "vo", "vol", "vot", "wa", "wak", "wal", "war", "was", "wel", "wen", "wln", "wo", "wol", "xal", "xh", "xho", "yao", "yap", "yi", "yid", "yo", "yor", "ypk", "za", "zap", "zbl", "zen", "zgh", "zh", "zha", "zho", "znd", "zu", "zul", "zun", "zxx", "zza"];
                LapysDevelopmentKit.Constants.Strings.LowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                LapysDevelopmentKit.Constants.Strings.NativeFunctionCodes = [new LDKD.SafeString('[', 'C', 'o', 'm', 'm', 'a', 'n', 'd', ' ', 'L', 'i', 'n', 'e', ' ', 'A', 'P', 'I', ']'), new LDKD.SafeString('[', 'n', 'a', 't', 'i', 'v', 'e', ' ', 'c', 'o', 'd', 'e', ']')];
                LapysDevelopmentKit.Constants.Strings.Octal = ['0', '1', '2', '3', '4', '5', '6', '7'];
                LapysDevelopmentKit.Constants.Strings.TrimmableCharacters = ['\0', '\n', ' '];
                LapysDevelopmentKit.Constants.Strings.UppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                LapysDevelopmentKit.Constants.Strings.SortableCharacters = ['_', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '[', ']', '{', '}', '<', '>', '«', '»', '\\', '/', '+', '-', '×', '÷', '=', '@', '\'', '"', '*', '#', '$', '%', '&', '|'];
                LapysDevelopmentKit.Constants.Strings.VariableCharacters = ['$', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            /* Data */
                // Clock --- NOTE (Lapys) -> Structure type for asynchronous and multi-threaded processes.
                LapysDevelopmentKit.Data.Clock = function Clock() { var CLOCK = this; CLOCK.timed = false; CLOCK.timeElapsed = +0; return CLOCK };
                    // Prototype
                    LapysDevelopmentKit.Data.ClockPrototype = LapysDevelopmentKit.Data.Clock.prototype;
                        // Check
                        LapysDevelopmentKit.Data.ClockPrototype.check = function check(condition, ontrue, onfalse) { var evaluation, id; try { evaluation = condition() } catch (error) {} id = LDKF.functionPrototypeCall(LDKD.ClockPrototype.wind, this, function() { if (evaluation) { LDKF.functionPrototypeCall(LDKD.ClockPrototype.stop, id); ontrue() } else onfalse() }); return id };

                        // Measure
                        LapysDevelopmentKit.Data.ClockPrototype.measure = function measure() { return LDKC.Assertions.has_Performance_Constructor ? LDKF.functionPrototypeCall(LDKO.performancePrototypeNow, LDKC.Objects.performance) : LDKF.functionPrototypeCall(LDKO.dateNow, LDKO.date) };

                        // Stop
                        LapysDevelopmentKit.Data.ClockPrototype.stop = function stop(id) {
                            // Logic
                            if (id) {
                                // Constant > Clock Data Index
                                var CLOCK_DATA_INDEX = LDKF.arrayPrototypeIndex(LDKS.Registry.ClockData, id, STRICT = function(clockData) { return clockData.id });

                                // Logic
                                if (~CLOCK_DATA_INDEX) {
                                    // Constant > Clock Data
                                    var CLOCK_DATA = LDKS.Registry.ClockData[CLOCK_DATA_INDEX];

                                    // Logic > ...
                                    if (CLOCK_DATA.hasDelay) LDKF.clearInterval(CLOCK_DATA.referenceID);
                                    else if (CLOCK_DATA.hasInterval) LDKF.clearTimeout(CLOCK_DATA.referenceID);
                                    else CLOCK_DATA.requestHandler = function() { LDKF.cancelAnimationFrame(CLOCK_DATA.referenceID) };

                                    // Update > (... > Clock Data)
                                    LDKF.arrayPrototypeCutAt(LDKS.Registry.ClockData, CLOCK_DATA_INDEX);

                                    // Return
                                    return true
                                }
                            }

                            // Return
                            return false
                        };

                        // Thread --- UPDATE REQUIRED (Lapys) -> More abstraction and features.
                        LapysDevelopmentKit.Data.ClockPrototype.thread = function thread(handler) {
                            // Constant > (Handler, Worker File) Source
                            var HANDLER_SOURCE = handler + "",
                                WORKER_FILE_SOURCE = "self.onmessage = function onmessage(event) { (" + HANDLER_SOURCE + ").call(self, event) }";

                            // Constant > Worker (File (URL))
                            var WORKER_FILE = new LDKO.file([WORKER_FILE_SOURCE], "", {type: "text/javascript"}),
                                WORKER_FILE_URL = LDKF.urlCreateObjectURL(WORKER_FILE),
                                WORKER = new LDKO.worker(WORKER_FILE_URL);

                            // Worker > Post Message
                            LDKF.workerPrototypePostMessage(WORKER, {})
                        };

                        // Tick
                        LapysDevelopmentKit.Data.ClockPrototype.tick = function tick(handler, delay) {
                            // Constant > Clock Data
                            var CLOCK_DATA = {
                                id: LDKS.Registry.ClockDataLength + 1,
                                hasDelay: (LDKF.argumentsPrototypeLength(arguments) || 1) == 1,
                                referenceID: null
                            };

                            // Update > (... > Clock Data)
                            LDKS.Registry.ClockData[(LDKS.Registry.ClockDataLength += 1) - 1] = CLOCK_DATA;

                            // Logic
                            if (CLOCK_DATA.hasDelay)
                                // Modification > Clock Data > Reference ID
                                CLOCK_DATA.referenceID = LDKF.setTimeout(function() { LDKF.clearTimeout(CLOCK_DATA.referenceID); handler() }, delay || +0);

                            else {
                                // Modification > Clock Data > (Request Handler, Reference ID)
                                CLOCK_DATA.requestHandler = function() { handler() };
                                CLOCK_DATA.referenceID = LDKF.requestAnimationFrame(function() { LDKF.cancelAnimationFrame(CLOCK_DATA.referenceID); CLOCK_DATA.requestHandler() });
                            }

                            // Return
                            return CLOCK_DATA.id
                        };

                        // Timestamp --- NOTE (Lapys) -> Measures time (in milliseconds) elapsed between each call; Every next succeeding call resets the timer.
                        LapysDevelopmentKit.Data.ClockPrototype.timestamp = function timestamp() {
                            // Constant > Clock
                            var CLOCK = this;

                            // Modification > Clock > Timed
                            CLOCK.timed = !CLOCK.timed;

                            // Logic
                            if (CLOCK.timed) {
                                // Clock > Check
                                LDKF.functionPrototypeCall(LDKD.ClockPrototype.check, CLOCK, function() { return !CLOCK.timed }, function() {}, function() { CLOCK.timeElapsed += LDKC.Constants.Number.FrameRate })

                                // Return
                                return true
                            }

                            else {
                                // Constant > Clock Time Elapsed
                                var CLOCK_TIME_ELAPSED = CLOCK.timeElapsed;

                                // Modification > Clock > Time Elapsed
                                CLOCK.timeElapsed = +0;

                                // Return
                                return CLOCK_TIME_ELAPSED
                            }
                        };

                        // Wind
                        LapysDevelopmentKit.Data.ClockPrototype.wind = function wind(handler, interval) {
                            // Constant > Clock Data
                            var CLOCK_DATA = {
                                id: LDKS.Registry.ClockDataLength + 1,
                                hasInterval: (LDKF.argumentsPrototypeLength(arguments) || 1) == 1,
                                referenceID: null
                            };

                            // Update > (... > Clock Data)
                            LDKS.Registry.ClockData[(LDKS.Registry.ClockDataLength += 1) - 1] = CLOCK_DATA;

                            // Logic
                            if (CLOCK_DATA.hasInterval)
                                // Modification > Clock Data > Reference ID
                                CLOCK_DATA.referenceID = LDKF.setInterval(function() { handler() }, interval || +0);

                            else {
                                // Initialization > Evaluate Handler
                                var evaluateHandler = false;

                                // Modification > Clock Data > Request Handler
                                CLOCK_DATA.requestHandler = function() {
                                    // Cancel Animation Frame
                                    LDKF.cancelAnimationFrame(CLOCK_DATA.referenceID);

                                    // Modification > Clock Data > Reference ID; ...
                                    CLOCK_DATA.referenceID = LDKF.requestAnimationFrame(CLOCK_DATA.requestHandler);
                                    evaluateHandler ? handler() : evaluateHandler = true
                                };

                                // Clock Data > Request Handler
                                CLOCK_DATA.requestHandler()
                            }

                            // Return
                            return CLOCK_DATA.id
                        };

                // Iterator --- NOTE (Lapys) -> Semantic type for repetition-based function handlers.
                LapysDevelopmentKit.Data.Iterator = function Iterator() {};

                // Pseudo Integer --- NOTE (Lapys) -> Infinite width integer type.
                LapysDevelopmentKit.Data.PseudoInteger = function PseudoInteger() {};

                // Pseudo Number --- NOTE (Lapys) -> Infinite width decimal type.
                LapysDevelopmentKit.Data.PseudoNumber = function PseudoNumber() {};

                // Ranged Number --- NOTE (Lapys) -> Fixed-width number type.
                LapysDevelopmentKit.Data.RangedNumber = function RangedNumber() {};

                // Safe Array --- NOTE (Lapys) -> Infinite-length array type.
                LapysDevelopmentKit.Constants.Numbers.SafeArrayLengthBreak = 5 - 1;
                GLOBAL.SafeArray = LapysDevelopmentKit.Data.SafeArray = function SafeArray() {
                    var SAFE_ARRAY = this;

                    SAFE_ARRAY.depth = 1;
                    SAFE_ARRAY.length = +0;
                    SAFE_ARRAY.width = +0;

                    Object.defineProperty(SAFE_ARRAY, "slice", {value: function slice() {}, writable: 1});
                    Object.defineProperty(SAFE_ARRAY, "splice", {value: function splice() {}, writable: 1});

                    return SAFE_ARRAY
                };
                    // Prototype
                    LapysDevelopmentKit.Data.SafeArrayPrototype = LapysDevelopmentKit.Data.SafeArray.prototype;
                        // Element At
                        LapysDevelopmentKit.Data.SafeArrayPrototype.elementAt = function elementAt(index) {
                            // while ()
                        };

                        // Push
                        LapysDevelopmentKit.Data.SafeArrayPrototype.push = function push(element) {
                            var SAFE_ARRAY = this;

                            // OVERFLOW
                            if (SAFE_ARRAY.length && !(SAFE_ARRAY.length % LDKC.Numbers.SafeArrayLengthBreak)) {
                                // DEPTH INCREASE
                                if (SAFE_ARRAY.length == (SAFE_ARRAY.width ** SAFE_ARRAY.depth)) {
                                    // PARENT IS FULL
                                    var safeArrayFirst = SAFE_ARRAY[+0], safeArrayIterator = SAFE_ARRAY.width;

                                    SAFE_ARRAY[+0] = new LDKD.SafeArray;
                                    SAFE_ARRAY[+0][+0] = safeArrayFirst;
                                    SAFE_ARRAY[+0].depth = SAFE_ARRAY.depth;
                                    SAFE_ARRAY[+0].length = safeArrayIterator ** SAFE_ARRAY.depth;
                                    SAFE_ARRAY[+0].width = safeArrayIterator;
                                    while (safeArrayIterator -= 1) { SAFE_ARRAY[+0][safeArrayIterator] = SAFE_ARRAY[safeArrayIterator]; LDKF.objectPrototypeDeleteProperty(SAFE_ARRAY, safeArrayIterator) }

                                    // INCREASE THE DEPTH
                                    SAFE_ARRAY.depth += 1
                                }

                                SAFE_ARRAY.width = +0
                            }

                            if (SAFE_ARRAY.depth == 1)
                                SAFE_ARRAY[SAFE_ARRAY.length] = element;

                            else {
                                var evaluation = true, safeArrayIndex = +0;

                                while (evaluation) {
                                    var safeSubarray;

                                    if (LDKF.objectPrototypeHasProperty(SAFE_ARRAY, safeArrayIndex)) {
                                        safeSubarray = SAFE_ARRAY[safeArrayIndex];

                                        if (safeSubarray.length ^ (LDKC.Numbers.SafeArrayLengthBreak ** safeSubarray.depth)) {
                                            evaluation = false;
                                            safeSubarray.push(element)
                                        }

                                        else
                                            safeArrayIndex += 1
                                    }

                                    else {
                                        var safeArrayDepth = SAFE_ARRAY.depth - 1;

                                        evaluation = false;

                                        safeSubarray = new LDKD.SafeArray;
                                        SAFE_ARRAY[safeArrayIndex] = safeSubarray;

                                        safeSubarray.depth = safeArrayDepth;
                                        while (safeArrayDepth -= 1) {
                                            safeSubarray[+0] = new LDKD.SafeArray;
                                            safeSubarray[+0].depth = safeArrayDepth;
                                            safeSubarray = safeSubarray[+0]
                                        }

                                        SAFE_ARRAY[safeArrayIndex].push(element)
                                    }
                                }
                            }

                            SAFE_ARRAY.length += 1;
                            SAFE_ARRAY.width += 1
                        };

                        // Set Index
                        LapysDevelopmentKit.Data.SafeArrayPrototype.setIndex = function setIndex(index, element) {};

                // Safe Integer --- NOTE (Lapys) -> Performant `PseudoInteger` type.
                LapysDevelopmentKit.Data.SafeInteger = function SafeInteger() {};

                // Safe Number --- NOTE (Lapys) -> Performant `PseudoNumber` type.
                LapysDevelopmentKit.Data.SafeNumber = function SafeNumber() {};

                // Scope --- NOTE (Lapys) -> Semantic type for context-based storage.
                LapysDevelopmentKit.Data.Scope = function Scope() {};

                // Vendor --- NOTE (Lapys) -> Container for data about third-party JavaScript software.
                LapysDevelopmentKit.Data.Vendor = function Vendor(name, namespace) {};

            /* Functions */
                // Array > Prototype
                    // Index
                    LapysDevelopmentKit.Functions.arrayPrototypeIndex = function arrayPrototypeIndex(array, element, IMPERATIVE) {};

                    // Sort --- NOTE (Lapys) -> ASCII sort, custom sort, native sort?

                // Is Null
                LapysDevelopmentKit.Functions.isNull = function isNull(argument) { return argument === null };

            /* Storage */
                // Registry
                    // Clock Data ...
                    LapysDevelopmentKit.Storage.Registry.ClockData = [];
                    LapysDevelopmentKit.Storage.Registry.ClockDataLength = +0;
    // Return
    return +0
})();
