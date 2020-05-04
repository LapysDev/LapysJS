/* [LapysJS] Main */
+void function LapysJSMain() {
    /* Global > ... */
    var ANY = {};
    var ERROR = {};
    var FLAG;
    var GLOBAL;

    /* Namespace > Lapys (Development Kit, JavaScript) */
    var LapysDevelopmentKit = {
        Assertions: {},
        Functions: {},
        Information: {},
        Mathematics: {},
        Objects: {},
        Storage: {},
        Types: {}
    };
    var LapysJS = {
        author: "LapysDev",
        Components: {
            Accordion: function Accordion() {},
            Carousel: function Carousel() {},
            Dialog: function Dialog() {},
            Hero: function Hero() {},
            Image: function Image() {},
            Menu: function Menu() {},
            NavigationBar: function NavigationBar() {},
            Scrollbar: function Scrollbar() {},
            Table: function Table() {},
            TextReel: function TextReel() {},
            Time: function Time() {},
            Tooltip: function Tooltip() {}
        },
        phase: null, // NOTE (Lapys) -> Initiate, Reset, Terminate, Update
        ready: false, // NOTE (Lapys) -> State of the library.
        version: "0.0.9"
    };

    /* Shorthand */
    var Components = LapysJS.Components;

    var LDK = LapysDevelopmentKit;
    var LDKA = LapysDevelopmentKit.Assertions;
    var LDKF = LapysDevelopmentKit.Functions;
    var LDKI = LapysDevelopmentKit.Information;
    var LDKM = LapysDevelopmentKit.Mathematics;
    var LDKO = LapysDevelopmentKit.Objects;
    var LDKS = LapysDevelopmentKit.Storage;
    var LDKT = LapysDevelopmentKit.Types;

    /* ... --- CHECKPOINT (Lapys) */
    // function abs(number) {}
    // function array(aggregate) {}
    // function assert(expression) {}
    // function ceil(number) {}
    // function check(condition, fail, pass) {}
    // function cbrt(number) {}
    // function clear() {}
    // function floor(number) {}
    // function func(aggregate) {}
    // function exec(source) {}
    // function int(number) {}
    // function interval(handler, delay, immediate) {}
    // function load(url) {}
    // function max(numbers...) {}
    // function min(numbers...) {}
    // function num(object) {}
    // function obj(object) {}
    // function observe(object) {}
    // function onAttributeAdded(element, callback) {}
    // function onAttributeChanged(element, callback) {}
    // function onAttributeCountChanged(element, callback) {}
    // function onAttributeRemoved(element, callback) {}
    // function onDOMNodeAdded(callback) {}
    // function onDOMNodeChanged(callback) {}
    // function onDOMNodeCountChanged(callback) {}
    // function onDOMNodeRemoved(callback) {}
    // function onDOMReady(callback) {}
    // function onElementAdded(element, callback) {}
    // function onElementChanged(element, callback) {}
    // function onElementCountChanged(element, callback) {}
    // function onElementRemoved(element, callback) {}
    // function post(url) {}
    // function pow(number) {}
    // function preload(url) {}
    // function randbool() {}
    // function random(range) {}
    // function randint(range) {}
    // function redirect(url) {}
    // function reload() {}
    // function root(number) {}
    // function round(number) {}
    // function serve(url) {}
    // function sqrt(number) {}
    // function stop() {}
    // function str(object) {}
    // function timeout(handler, delay, immediate) {}
    // function trunc(number) {}
    // function wait(condition, handler) {}
    // function $a(selector) {}
    // function $attr(selector) {}
    // function $c(selector) {}
    // function $d(selector) {}
    // function $i(selector) {}
    // function $n(selector) {}
    // function $p(selector) {}
    // function $t(selector) {}
    // function $$(selector) {}

    // application.audience
    // application.author
    // application.cache
    // application.charset
    // application.color
    // application.compatibility
    // application.copyright
    // application.description
    // application.favicon
    // application.features
    // application.formatDetection
    // application.fragment
    // application.language
    // application.meta --> Contains all these and more
    // application.openGraph
    // application.owner
    // application.pragma
    // application.name
    // application.robots
    // application.scripts
    // application.seo
    // application.stylesheets
    // application.url
    // application.viewport

    // Array.prototype.add()
    // Array.prototype.addToBack()
    // Array.prototype.addToFront()
    // Array.prototype.count()
    // Array.prototype.every()
    // Array.prototype.free()
    // Array.prototype.getRepeated()
    // Array.prototype.getUnique()
    // Array.prototype.has()
    // Array.prototype.remove()
    // Array.prototype.removeFromBack()
    // Array.prototype.removeFromFront()
    // Array.prototype.removeRepeat()
    // Array.prototype.removeRepeatFromBack()
    // Array.prototype.removeRepeatFromFront()
    // Array.prototype.removeRepeats()
    // Array.prototype.replace()
    // Array.prototype.replaceFromBack()
    // Array.prototype.replaceFromFront()
    // Array.prototype.replaceRepeat()
    // Array.prototype.replaceRepeatFromBack()
    // Array.prototype.replaceRepeatFromFront()
    // Array.prototype.replaceRepeats()
    // Array.prototype.resize()
    // Array.prototype.some()

    // Function.prototype.arity
    // Function.getBodySource()
    // Function.getHeadSource()
    // Function.getParameters()
    // Function.getParametersCount()
    // Function.getParametersSource()
    // Function.isDyadic()
    // Function.isMonoadic()
    // Function.isNiladic()
    // Function.isTriadic()
    // Function.isVariadic()
    // Function.prototype.toSource()

    // Object.clone()
    // Object.concat()
    // Object.def()
    // Object.forEach()
    // Object.undef()

    // String.prototype.capitalize()
    // String.prototype.count()
    // String.prototype.getAfter()
    // String.prototype.getAfterChar()
    // String.prototype.getAfterCharFromBack()
    // String.prototype.getAfterCharFromFront()
    // String.prototype.getAfterFromBack()
    // String.prototype.getAfterFromFront()
    // String.prototype.getBefore()
    // String.prototype.getBeforeChar()
    // String.prototype.getBeforeCharFromBack()
    // String.prototype.getBeforeCharFromFront()
    // String.prototype.getBeforeFromBack()
    // String.prototype.getBeforeFromFront()
    // String.prototype.has()
    // String.prototype.randomize()
    // String.prototype.toElement()
    // String.prototype.toHTML()
}();
