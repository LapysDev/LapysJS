/**
    @author: Lapys Dev Team
    @description: LapysJS is a JavaScript library with its independent CSS framework designed to make JavaScript more forgiving and faster to script.
    @version: 0.0.1
*/
(function LapysJSScript(window = window, document = window.document, global, undefined = window.undefined || void 0) {
    /* Window */
        // Absolute
        (typeof window.abs == 'function') || Object.defineProperty(window, 'abs', {
            // Value
            value: (Math || new (function Math() {
                // Modification > Target > Absolute
                this.abs = function abs() {
                    // Return
                    return +String((arguments[0] > -1) || -arguments[0]).replace('true', arguments[0])
                }
            })).abs
        });

        /* Array
                --- NOTE ---
                    @lapys: Made for converting HTMLCollections and NodeLists into arrays,
                        Very similar to the Array function object.
        */
        (typeof window.array == 'function') || Object.defineProperty(window.constructor.prototype, 'array', {
            // Value
            value: function array() {
                // Initialization > Data
                let data = [];

                /* Loop
                        Index all Arguments.
                */
                for (let i = 0; i < arguments.length; i += 1)
                    /* Logic
                            [if:else if:else statement]
                    */
                    if ((arguments[i] || []).constructor === Function)
                        // Update > Data
                        data = data.concat(arguments[i].getArguments());

                    else if (
                        !arguments[i] ||
                        (arguments[i] || []).constructor === Boolean ||
                        (arguments[i] || []).constructor === Number ||
                        (arguments[i] || []).constructor === RegExp
                    )
                        // Update > Data
                        data.push(arguments[i]);

                    else
                        // Error Handling
                        try {
                            // Update > Data
                            data = data.concat(Array.from(arguments[i]))
                        }

                        catch (error) {}

                // Return
                return data
            }
        });

        // Boolean
        (typeof window.bool == 'function') || Object.defineProperty(window.constructor.prototype, 'bool', {
            // Value
            value: function bool() {
                // Return
                return Boolean.apply(this, [...arguments])
            }
        });

        // Cube Root
        (typeof window.cbrt == 'function') || Object.defineProperty(window.constructor.prototype, 'cbrt', {
            // Value
            value: function cbrt() {
                // Return
                return (window.Math || new (function Math(){
                    // Modification > Target > Cube Root
                    this.cbrt = function cbrt() {
                        // Return
                        return arguments[0] ** .3333333333333333
                    }
                })).cbrt.apply(this, [...arguments])
            }
        });

        // Ceiling
        (typeof window.ceil == 'function') || Object.defineProperty(window.constructor.prototype, 'ceil', {
            // Value
            value: function ceil() {
                // Return
                return (window.Math || new (function Math() {
                    // Modification > Target
                        // Ceiling
                        this.ceil = function ceil() {
                            // Return
                            return +String(arguments[0]).getBeforeChar('.').replace(/ /g, '') + 1
                        };

                        // Floor
                        this.floor = function floor() {
                            // Return
                            return +String(arguments[0]).getBeforeChar('.').replace(/ /g, '')
                        }
                }))[String(!!arguments[1] || 'ceil').replace('true', 'floor')](arguments[0])
            }
        });

        // Check
        (typeof window.check == 'function') || Object.defineProperty(window.constructor.prototype, 'check', {
            // Value
            value: function check() {
                // Initialization > Arguments
                let Arguments = [...arguments];

                // Error Handling
                try {
                    // Return
                    return new LapysJSCondition(!!Arguments[0])
                }

                catch (error) {
                    // Return
                    return new (window.LapysJSCondition = function LapysJSCondition() {
                        // Initialization > Arguments, Target
                        let _Arguments = [...arguments],
                            that = this;

                        // Modification > Target
                            // Condition
                            this.condition = _Arguments.length > 0 ? _Arguments[0] : Arguments[0];

                        // Function
                            // Target
                                // On Fail
                                Object.defineProperty(this, 'onfail', {
                                    // Value
                                    value: (function() {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (typeof Arguments[2] == 'function')
                                            return Arguments[2];

                                        else if (typeof _Arguments[2] == 'function')
                                            return Arguments[2];

                                        // Return
                                        return function onfail() {}
                                    })()
                                });

                                // On Success
                                Object.defineProperty(this, 'onsuccess', {
                                    // Value
                                    value: (function() {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (typeof Arguments[1] == 'function')
                                            return Arguments[1];

                                        else if (typeof _Arguments[1] == 'function')
                                            return Arguments[1];

                                        // Return
                                        return function onsuccess() {}
                                    })()
                                });

                            // Set Value
                            function setValue() {
                                // Modification > Target > Value
                                typeof that.condition == 'function' ? that.value = !!that.condition() : that.value = !!that.condition
                            };
                            setValue();

                            // Check Value
                            (function checkValue() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (
                                    (
                                        typeof Arguments[1] == 'function' ||
                                        typeof _Arguments[1] == 'function'
                                    ) ||
                                    (
                                        typeof Arguments[2] == 'function' ||
                                        typeof _Arguments[2] == 'function'
                                    )
                                ) {
                                    // Set Value
                                    setValue();

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (
                                        (typeof that.condition == 'function' ? that.condition() : that.condition) == !!0 &&
                                        that.value == !!0
                                    ) {
                                        // Target > On Fail
                                        (typeof that.onfail != 'function') || that.onfail();

                                        // Request Animation Frame
                                        (window.requestAnimationFrame || window.webkitRequestAnimationFrame)(checkValue);
                                    }

                                    else
                                        // Target > On Success
                                        (typeof that.onsuccess != 'function') || that.onsuccess()
                                }
                            })()
                    })
                }
            }
        });

        // Clear
        (typeof window.clear == 'function') || Object.defineProperty(window.constructor.prototype, 'clear', {value: console.clear});

        // Compare
        (typeof window.compare == 'function') || Object.defineProperty(window.constructor.prototype, 'compare', {
            // Value
            value: function compare() {
                // Return
                return Object.is.apply(this, [...arguments])
            }
        });

        // Copy
        (typeof window.copy == 'function') || Object.defineProperty(window.constructor.prototype, 'copy', {
            // Value
            value: function copy() {
                // Initialization > Data
                let data = document.createElement('textarea');

                // Modification > Data > Value
                data.setAttribute('value', arguments.length > 0 ? String(arguments[0]) : '');
                data.value = arguments.length > 0 ? String(arguments[0]) : '';

                // Insertion
                document.body.appendChild(data);

                // Data > (Focus, Select)
                data.focus();
                data.select();

                // Document > Execute Command
                document.execCommand('copy');

                // Data > Blur
                data.blur();

                // Deletion
                document.body.removeChild(data)
            }
        });

        // Create Document Fragment
        (typeof window.createDocumentFragment == 'function') || Object.defineProperty(window.constructor.prototype, 'createDocumentFragment', {
            // Value
            value: function createDocumentFragment() {
                // Error Handling
                try {
                    // Initialization > Data
                    let data = document.createDocumentFragment();

                    /* Logic
                            If
                                Argument 0 is a String,

                            else if
                                Argument 0 is an Element.
                    */
                    if (typeof arguments[0] == 'string') {
                        // Insertion
                        (document.body || document.documentElement).appendChild(LapysJS.temporaryData = document.createElement('html'));

                        // Modification > (LapysJS > Temporary Data) > Inner HTML
                        LapysJS.temporaryData.innerHTML = arguments[0];

                        /* Loop
                                While
                                    the Temporary Data still has a child element.

                            > Insertion
                        */
                        while (LapysJS.temporaryData.children[0])
                            data.appendChild(LapysJS.temporaryData.children[0]);

                        // Deletion
                        LapysJS.temporaryData.remove()
                    }

                    else if (
                        (arguments[0] || []).constructor.name.indexOf('Element') > -1 ||
                        typeof (arguments[0] || []).tagName == 'string'
                    )
                        // Insertion
                        data.appendChild(arguments[0]);

                    // Return
                    return data
                }

                catch (error) {
                    // LapysJS > Error
                    LapysJS.error(error)
                }
            }
        });

        // Create Element
        (typeof window.createElement == 'function') || Object.defineProperty(window.constructor.prototype, 'createElement', {
            // Value
            value: function createElement() {
                // Error Handling
                try {
                    // Initialization > Data
                    let data = document.createElement(String(arguments[0]));

                    // Modification > Data
                        // CSS Selector
                        data.CSSSelector = String(arguments[1] || '');

                        // Inner HTML
                        data.innerHTML = arguments[2] || '';

                    /* Loop
                            Index all elements of Properties.

                        > Modification > Data > [Argument 3]
                    */
                    for (let i = 0; i < Object.keys(arguments[3] || []).length; i += 1)
                        data[Object.keys(arguments[3])[i]] = arguments[3][Object.keys(arguments[3])[i]];

                    // Return
                    return data
                }

                catch (error) {
                    // LapysJS > Error
                    LapysJS.error(error)
                }
            }
         });

        /* Console > Print
                --- NOTE ---
                    @lapys: A very minor alternative to the 'console.dir' or 'console.log' method.
                        Although later it might have additional purposes.
        */
        (typeof console.print == 'function') || (console.print = function print() {
            /* Loop
                    Index all Arguments.

                > Console > Directory
            */
            for (let i = 0; i < arguments.length; i += 1)
                console.dir(arguments[i])
        });

        /* Event
                --- NOTE ---
                    @lapys: Other properties within this 'event' variable are to prevent
                        errors in some cases.
        */
        window.event = window.event || (typeof document.createEvent == 'function' ? document.createEvent('HTMLEvents') : document.createEventObject()) || new (window.Event || class Event {})('');
            // Code
            event.code = event.code || '';

            // Control Key
            event.ctrlKey = event.ctrlKey;

            /* Fallback
                    --- NOTE ---
                        @lapys: This is to know that this is a fallback Event object.
            */
            !window.Event || (Event.prototype.fallback = !!0);
            event.constructor.prototype.fallback = !0;

            // Meta Key
            event.metaKey = event.metaKey;

            // Key
            event.key = event.key || '';

            // Shift Key
            event.shiftKey = event.shiftKey;

        // Date
        ((window.date || []).constructor == Date) || Object.defineProperty(window, 'date', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function date() {
                // Return
                return window.Date ? new Date : null
            }
        });

        /* Loop
                [for statement]

            > Execution
        */
        for (let i = 0; i < ['dp', 'prec'].length; i += 1)
            eval(`(typeof window.${['dp', 'prec'][i]} == 'function') || Object.defineProperty(window.constructor.prototype, '${['dp', 'prec'][i]}', {` +
                // Value
                `value: function ${['dp', 'prec'][i]}() {` +
                    // Return
                    `return ${['parseFloat', 'String'][i]}(arguments[0] .${['toFixed', 'toPrecision'][i]}((window.Math || new (function Math() {` +
                        // Modification > Target > Absolute
                        `this.abs = function abs() {` +
                            // Return
                            `return +String((arguments[0] > -1) || -arguments[0]).replace('true', arguments[0])` +
                        `}` +
                    `})).abs(+String((arguments[1] < 21) || 20).replace('true', arguments[1]))))` +
                `}` +
            `})`);

        // Float
        (typeof window.float == 'function') || Object.defineProperty(window.constructor.prototype, 'float', {value: Number.parseFloat});

        // Floor
        (typeof window.floor == 'function') || Object.defineProperty(window.constructor.prototype, 'floor', {
            // Value
            value: function floor() {
                // Return
                return (window.Math || new (function Math() {
                    // Modification > Target
                        // Ceiling
                        this.ceil = function ceil() {
                            // Return
                            return +String(arguments[0]).getBeforeChar('.').replace(/ /g, '') + 1
                        };

                        // Floor
                        this.floor = function floor() {
                            // Return
                            return +String(arguments[0]).getBeforeChar('.').replace(/ /g, '')
                        }
                }))[String(!!arguments[1] || 'floor').replace('true', 'ceil')](arguments[0])
            }
        });

        // Function
        (typeof window.func == 'function') || Object.defineProperty(window.constructor.prototype, 'func', {
            // Value
            value: function func() {
                /* Logic
                        If
                            Argument 0 is not a Function.
                */
                if (typeof arguments[0] != 'function') {
                    try {
                        // Execution
                        eval(`LapysJS.temporaryData = (function ${str(arguments[0] || '')}(\n${arguments[1] || ''}\n) {\n${arguments[2] || ''}\n})`);

                        // Return
                        return LapysJS.temporaryData
                    }

                    catch (error) {
                        // Execution
                        eval(`LapysJS.temporaryData['${String(arguments[0] || '').replace(/'/g, `\\'`)}'] = (function(\n${arguments[1] || ''}\n) {\n${arguments[2] || ''}\n})`);

                        // Return
                        return LapysJS.temporaryData[String(arguments[0] || '').replace(/'/g, `\\'`)]
                    }
                }

                // Return
                return arguments[0]
            }
        });

         // Get Query String By Name
        (typeof window.getQueryParameterByName == 'function') || (window.getQueryParameterByName = function getParameterByName(name, url) {
            // Initialization > Arguments
            let Arguments = arguments;

            // Update > Argument 1
            Arguments[1] || (Arguments[1] = location.href);
            Arguments[1] = Arguments[1].replace(/[\[\]]/g, '\\$&');

            // Initialization > (Data, Metadata)
            let data = RegExp(`[?&]${Arguments[0]}(=([^&#]*)|&|#|$)`),
                metadata = data.exec(Arguments[1]);

            if (!metadata)
                return null;

            if (!metadata[2])
                return '';

            return decodeURIComponent(metadata[2].replace(/\+/g, ' '))
        });

        /* Global
                --- NOTE ---
                    @lapys: Allow a reference name for the global object.
        */
        ((window.global || []).constructor == Window) || Object.defineProperty(window.constructor.prototype, 'global', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function global() {
                // Return
                return window
            }
        });

        // Integer
        (typeof window.int == 'function') || Object.defineProperty(window.constructor.prototype, 'int', {value: Number.parseInt});

        // Interval
        (typeof window.interval == 'function') || Object.defineProperty(window.constructor.prototype, 'interval', {
            // Value
            value: function interval() {
                // Initialization > Arguments
                let Arguments = arguments;

                // Function > Interval Function
                let intervalFunction = function() {
                    // Initialization > Data
                    let data = arguments;

                    // Return
                    return function() {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (data[1] === void 0 || data[1]-- > 0) {
                            // Set Timeout
                            setTimeout(intervalFunction, data[0]);

                            // Error Handling
                            try {
                                // Function > Argument 0
                                Arguments[0].call(null)
                            }

                            catch (error) {
                                // Update > Data
                                data[1] = 0;

                                // Throw
                                throw error.toString()
                            }
                        }
                    }
                }(Arguments[1], Arguments[2]);

                // Set Timeout
                setTimeout(intervalFunction, Arguments[1])
            }
        });

        /* Is Object
                --- WARN ---
                    @lapys: This function is meant for development purposes only.
        */
        let isObject = function isObject() {
            // Return
            return (
                (arguments[0] || []).constructor !== Array &&
                (arguments[0] || []).constructor !== Boolean &&
                (arguments[0] || []).constructor !== Function &&
                (arguments[0] || []).constructor !== Number &&
                (arguments[0] || []).constructor !== RegExp &&
                (arguments[0] || []).constructor !== String &&
                (arguments[0] || []).constructor !== Symbol
            ) ? typeof arguments[1] == 'function' ? arguments[1]() : arguments[1] : !!0
        };

        // Length
        (typeof window.len == 'function') || Object.defineProperty(window.constructor.prototype, 'len', {
            // Value
            value: function len() {
                // Return
                return +String((typeof arguments[0] != 'number') || arguments[0]).replace('true', eval(String((typeof (arguments[0] || {length: ''}).length != 'number') || arguments[0].length).replace('true', void 0)))
            }
        });

        // Location > Query Parameters
        !window.Location || (typeof Location.prototype.queryParameters == 'function') || Object.defineProperty(Location.prototype, 'queryParameters', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function queryParameters() {
                // Initialization > Data
                let data = [];

                /* Logic
                        If
                            Location > Search is not "empty".
                */
                if ((this.search || '').trim())
                    /* Loop
                            Index all Query Parameters.
                    */
                    for (let i = 0; i < this.search.replace('?', '').replace(/&/g, ',').split(/,/g).length; i += 1)
                        // Update > Data
                        data.push({
                            // Name
                            name: this.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(0, this.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('=')),

                            // Value
                            value: this.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(this.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('=') + '='.length)
                       });

                // Return
                return data
            }
        });

        // Log
        (typeof window.log == 'function') || (window.log = console.log);

        /* JSON
                --- NOTE ---
                    @lapys: The fallback object is to identify that the JSON object is actually a fallback.
        */
        window.JSON = window.JSON || new (function JSON() {
            // Fallback
            this.fallback = !0;

            // Parse
            this.parse = () => {};

            // Stringify
            this.stringify = () => {}
        });
            /* Fallback
                    --- NOTE ---
                        @lapys: This property is also to define that the default JSON object is not a fallback.
            */
            JSON.fallback || (JSON.fallback = !!0);

        // Math
            /* Evaluate
                    --- UPDATE REQUIRED ---
                        @lapys: Should evaluate strings of math.
            */
            !window.Math || Math.eval || Object.defineProperty(Math, 'eval', {
                // Value
                value: function evaluate() {
                    // Execution
                    eval(String(arguments[0]))
                }
            });

            // Invert
            !window.Math || Math.invert || Object.defineProperty(Math, 'invert', {
                // Value
                value: function invert() {
                    // Return
                    return 1 / arguments[0]
                }
            })

            // Random > Range
            !window.Math || (Math.random || []).range || Object.defineProperty(Math.random, 'range', {
                // Value
                value: function range() {
                    // Initialization > Data
                    let data = this() * (max(parseFloat(arguments[0]), parseFloat(arguments[1])) - min(parseFloat(arguments[0]), parseFloat(arguments[1]))) + min(parseFloat(arguments[0]), parseFloat(arguments[1]));

                    // Return
                    return +String((data < (max(parseFloat(arguments[0]), parseFloat(arguments[1]))) + 1) || max(parseFloat(arguments[0]), parseFloat(arguments[1]))).replace('true', String((data > ~-min(parseFloat(arguments[0]), parseFloat(arguments[1]))) || min(parseFloat(arguments[0]), parseFloat(arguments[1]))).replace('true', data))
                }
            });

            // Root
            !window.Math || Math.root || Object.defineProperty(Math, 'root', {
                // Value
                value: function root() {
                    // Return
                    return parseFloat(arguments[0]) ** (1 / parseFloat(arguments[1]))
                }
            });

        // Maximum
            /* Logic
                    [if:else if:else statement]
            */
            if (!window.max) {
                // Initialization
                Object.defineProperty(window.constructor.prototype, 'max', {
                    // Value
                    value: function max() {
                        /* Initialization > Result
                                --- WARN ---
                                    The Data collected must be strictly an Array.
                        */
                        let result = (arguments[0] || {length: ''}).length || arguments[0];

                        /* Loop
                                Index all Arguments.

                            > Update > Result
                        */
                        for (let i = 0; i < [...arguments].length; i += 1)
                            (result > ~-(([...arguments][i] || {length: ''}).length || [...arguments][i])) || (result = ([...arguments][i] || {length: ''}).length || [...arguments][i]);

                        // Return
                        return result
                    }
                });
                    // Modification > Get Object
                    Object.defineProperty(window.constructor.prototype.max, 'getObject', {
                        // Value
                        value: function getObject() {
                            /* Loop
                                    Index all Arguments.
                            */
                            for (let i = 0; i < arguments.length; i += 1)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (max.apply(this, [...arguments]) === ((arguments[i] || {length: ''}).length || arguments[i])) {
                                    // Return
                                    return arguments[i];

                                    // Break
                                    break
                                }
                        }
                    })
            }

        // Min
            /* Logic
                    [if:else if:else statement]
            */
            if (!window.min) {
                // Initialization
                Object.defineProperty(window.constructor.prototype, 'min', {
                    // Value
                    value: function min() {
                        /* Initialization > Result
                                --- WARN ---
                                    The Data collected must be strictly an Array.
                        */
                        let result = (arguments[0] || {length: ''}).length || arguments[0];

                        /* Loop
                                Index all Arguments.

                            > Update > Result
                        */
                        for (let i = 0; i < [...arguments].length; i += 1)
                            (result < (([...arguments][i] || {length: ''}).length || [...arguments][i]) + 1) || (result = ([...arguments][i] || {length: ''}).length || [...arguments][i]);

                        // Return
                        return result
                    }
                });
                    // Modification > Get Object
                    Object.defineProperty(window.constructor.prototype.min, 'getObject', {
                        // Value
                        value: function getObject() {
                            // Initialization > Data
                            let data = min.apply(this, [...arguments]);

                            /* Loop
                                    Index all Arguments.
                            */
                            for (let i = 0; i < arguments.length; i += 1)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (min.apply(this, [...arguments]) === ((arguments[i] || {length: ''}).length || arguments[i])) {
                                    // Return
                                    return arguments[i];

                                    // Break
                                    break
                                }
                        }
                    })
            }

        // Name
        window.name || (window.name = document.title);

        // Navigator
        window.navigator || (window.navigator = new (function Navigator() {
            // Fallback
            this.constructor.fallback = !0
        }));
            /* Fallback
                    --- NOTE ---
                        @lapys: The same reason used for the JSON.fallback property is applied here as well.
            */
            !window.Navigator || (Navigator.prototype.fallback = !!0);

        // Number
            // Set Timeout
            setTimeout(() => {
                // Initialization
                window.number || Object.defineProperty(window.constructor.prototype, 'number', {
                    // Value
                    value: function number() {
                        // Return
                        return parseNumber.apply(this, [...arguments])
                    }
                });
                    // Modification
                        // Float
                        window.number.float || Object.defineProperty(window.constructor.prototype.number, 'float', {
                            // Value
                            value: function float() {
                                // Return
                                return parseFloat(parseNumber(arguments[0]))
                            }
                        });

                        // Integer
                        window.number.int || Object.defineProperty(window.constructor.prototype.number, 'int', {
                            // Value
                            value: function int() {
                                // Return
                                return parseInt(parseNumber(arguments[0]))
                            }
                        });

                // Definition
                window.num = number
            });

        // Objectify
        (typeof window.objectify == 'function') || Object.defineProperty(window.constructor.prototype, 'objectify', {
            // Value
            value: function objectify() {
                // Return
                return Object.apply(this, arguments)
            }
        });
            // Definition
            window.obj = objectify;

        // On (DOM, Node) Change
            /* Loop
                    [for statement]

                > Execution
            */
            for (let i = 0; i < 2; i += 1)
                eval(
                    `(typeof window.${['onDOMChange', 'onNodeChange'][i]} == 'function') || Object.defineProperty(window.constructor.prototype, '${['onDOMChange', 'onNodeChange'][i]}', {` +
                        // Value
                        `value: function ${['onDOMChange', 'onNodeChange'][i]}() {` +
                            // Error Handling
                            `try {` +
                                // Initialization > (Arguments, Target)
                                `let Arguments = arguments,` +
                                    `that = this;` +

                                // Function > Argument (0 | 1)
                                `${['arguments[0]', 'arguments[1]'][i]}.apply(this, [...arguments].slice(${[1, 2][i]}));` +

                                // Mutation Observer
                                `new MutationObserver(function() {` +
                                    // Function > Argument (0 | 1)
                                    `${['Arguments[0]', 'Arguments[1]'][i]}.apply(this, [...Arguments].slice(${[1, 2][i]}))` +
                                `}).observe(${['document.documentElement', 'Arguments[0]'][i]}, { childList: !0, outerHTML: !0, subtree: !0 })` +
                            `}` +

                            `catch (error) {` +
                                // Initialization > Arguments
                                `let Arguments = arguments;` +

                                /* Logic
                                        If
                                            Argument (0 | 1) is a function.
                                */
                                `if (typeof ${['arguments[0]', 'arguments[1]'][i]} == 'function') {` +
                                    // Initialization > Content
                                    `let currentContent = ${['document.documentElement', 'arguments[0]'][i]}.outerHTML,` +
                                        // Former Content
                                        `formerContent = currentContent;` +

                                    // Update > Content
                                    `currentContent = (${['document.documentElement', 'arguments[0]'][i]} || document.createElement('a')).outerHTML;` +

                                    /* Logic
                                            If
                                                Content is not Former Content.
                                    */
                                    `if (currentContent !== formerContent) {` +
                                        // Function > Argument (0 | 1)
                                        `${['Arguments[0]', 'Arguments[1]'][i]}.apply(this, [...Arguments].slice(${[1, 2][i]}));` +

                                        // Update > Former Content
                                        `formerContent = currentContent` +
                                    `};` +

                                    /* Set Interval
                                            --- NOTE ---
                                                @lapys: Unlike the other On DOM Node * function intervals, this function's is quicker.
                                    */
                                    `setInterval(() => {` +
                                        // Update > Content
                                        `currentContent = (${['document.documentElement', 'arguments[0]'][i]} || document.createElement('a')).outerHTML;` +

                                        /* Logic
                                                If
                                                    Content is not Former Content.
                                        */
                                        `if (currentContent !== formerContent) {` +
                                            // Function > Argument (0 | 1)
                                            `${['Arguments[0]', 'Arguments[1]'][i]}.apply(this, [...Arguments].slice(${[1, 2][i]}));` +

                                            // Update > Former Content
                                            `formerContent = currentContent` +
                                        `}` +
                                    `}, 10)` +
                                `}` +
                            `}` +
                        `}` +
                    `})`
                );

        // On DOM Node (Added, Count Change, Removed)
            /* Loop
                    [for statement]
            */
            for (let i = 0; i < 2; i += 1)
                /* Loop
                        [for statement]

                    > Execution
                */
                for (let j = 0; j < 3; j += 1)
                    eval(
                        `(typeof window.${[['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j]} == 'function') || Object.defineProperty(window.constructor.prototype, '${[['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j]}', {` +
                            // Value
                            `value: function ${[['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j]}() {` +
                                ([['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j] === 'onDOMNodeCountChange' || [['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j] === 'onNodeCountChange' ? `try {` +
                                    // Initialization > (Arguments, Target)
                                    `let Arguments = arguments,` +
                                        `that = this;` +

                                    // Function > Argument (0 | 1)
                                    `${['arguments[0]', 'arguments[1]'][i]}.apply(this, [...arguments].slice(${[1, 2][i]}));` +

                                    // Mutation Observer
                                    `new MutationObserver(function() {` +
                                        // Function > Argument (0 | 1)
                                        `${['Arguments[0]', 'Arguments[1]'][i]}.apply(this, [...Arguments].slice(${[1, 2][i]}))` +
                                    `}).observe(${['document.documentElement', 'arguments[0]'][i]}, { childList: !0, outerHTML: !0, subtree: !0 })` +
                                `}` +
                                `catch (error) {` : '') +

                                /* Logic
                                        If
                                            Argument 0 is a function.
                                */
                                `if (typeof ${['arguments[0]', 'arguments[1]'][i]} == 'function') {` +
                                    // Initialization > DOM Nodes Length
                                    `let DOMNodesLength = ${['document', 'arguments[0]'][i]}.getElementsByTagName('*').length,` +
                                        // Former DOM Nodes Length
                                        `formerDOMNodesLength = DOMNodesLength;` +

                                    // Update > DOM Nodes Length
                                    `DOMNodesLength = ${['document', 'arguments[0]'][i]}.getElementsByTagName('*').length;` +

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    `if (DOMNodesLength ${[['>', '!==', '<'], ['>', '!==', '<']][i][j]} formerDOMNodesLength) {` +
                                        // Function > Argument 0
                                        `${['arguments[0]', 'arguments[1]'][i]}.apply(this, [...arguments].slice(${[1, 2][i]}));` +

                                        // Update > Former DOM Nodes Length
                                        `formerDOMNodesLength = DOMNodesLength` +
                                    `}` +

                                    // Set Interval
                                    `setInterval(() => {` +
                                        // Update > DOM Nodes Length
                                        `DOMNodesLength = ${['document', 'arguments[0]'][i]}.getElementsByTagName('*').length;` +

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        `if (DOMNodesLength ${[['>', '!==', '<'], ['>', '!==', '<']][i][j]} formerDOMNodesLength) {` +
                                            // Function > Argument 0
                                            `${['arguments[0]', 'arguments[1]'][i]}.apply(this, [...arguments].slice(${[1, 2][i]}));` +

                                            // Update > Former DOM Nodes Length
                                            `formerDOMNodesLength = DOMNodesLength` +
                                        `}` +
                                    `}, 100)` +
                                `}` +
                                ([['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j] === 'onDOMNodeCountChange' || [['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'], ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']][i][j] === 'onNodeCountChange' ? '}' : '') +
                            `}` +
                        `})`
                    );

        // On DOM Ready
        (typeof window.onDOMReady == 'function') || Object.defineProperty(window.constructor.prototype, 'onDOMReady', {
            // Value
            value: function onDOMReady() {
                // Set Timeout | Event > Document
                document.readyState === 'complete' && typeof arguments[0] == 'function' ?
                    setTimeout(arguments[0], parseFloat(arguments[1])) :
                    typeof document.addEventListener == 'function' ?
                        // DOM Content Loaded
                        document.addEventListener('DOMContentLoaded', () => {
                            // Set Timeout
                            setTimeout(arguments[0], parseFloat(arguments[1]))
                        }) :

                        // On Ready State Change
                        document.attachEvent('onreadystatechange', () => {
                            // Set Timeout
                            setTimeout(() => {
                                // Function > Argument 0
                                (document.readyState !== 'complete') || arguments[0]()
                            }, parseFloat(arguments[1]))
                        })
            }
        });

        /* Parse Number
                --- NOTE ---
                    @lapys: Useful for converting measurements to raw numbers.
        */
        (typeof window.parseNumber == 'function') || Object.defineProperty(window.constructor.prototype, 'parseNumber', {
            // Value
            value: function parseNumber() {
                // Error Handling
                try {
                    // Return
                    return typeof eval(String(arguments[0])) == 'number' ? eval(String(arguments[0])) : +(String(arguments[0]).replace(/ /g, '').replace(String(arguments[0]).replace(/[0-9]|\./g, ''), '')) || 0
                }

                catch (error) {
                    // Return
                    return +(String(arguments[0]).replace(/ /g, '').replace(String(arguments[0]).replace(/[0-9]|\./g, ''), '')) || 0
                }
            }
        });

        // PI
        (typeof window.PI == 'number') || Object.defineProperty(window.constructor.prototype, 'PI', {value: (Math || new (function Math() { this.PI = 3.141592653589793 })).PI});

        // Power
        (typeof window.pow == 'function') || Object.defineProperty(window.constructor.prototype, 'pow', {
            // Value
            value: function pow() {
                // Return
                return (Math || new (function Math() { this.pow = function pow() { return arguments[0] ** arguments[1] } })).pow(arguments[0], arguments[1])
            }
        });

        // Random
        (typeof window.rand == 'function') || Object.defineProperty(window.constructor.prototype, 'rand', {
            // Value
            value: function random() {
                // Return
                return parseFloat(String(!!arguments[1] || Math.random()).replace('true', Math.random.range(arguments[0], arguments[1])))
            }
        });

        // Redirect
        (typeof window.redirect == 'function') || Object.defineProperty(window.constructor.prototype, 'redirect', {
            // Value
            value: function redirect() {
                // Location > Assign
                !arguments[0] || (location || {assign: () => {}}).assign(String(arguments[0]))
            }
        });

        // Regular Expression
        (typeof window.regex == 'function') || Object.defineProperty(window.constructor.prototype, 'regex', {
            // Value
            value: function regex() {
                // Return
                return RegExp.apply(this, arguments)
            }
        });
            // Definition
            window.reg = regex;

        // Register Element
        (typeof window.registerElement == 'function') || Object.defineProperty(window.constructor.prototype, 'registerElement', {
            // Value
            value: function registerElement() {
                /* Logic
                        If
                            Argument 0 is not an Array
                                and
                            Argument 1 is not an Array,

                        else if
                            Argument 0 is an Array
                                and
                            Argument 1 is an Array.
                */
                if (
                    (arguments[0] || '').constructor !== Array &&
                    (arguments[1] || '').constructor !== Array
                )
                    // Custom Elements > Define
                    (window.customElements || {define: () => {}}).define(String(arguments[0] || ''), arguments[1] || class HTMLCustomElement extends HTMLElement {});

                else if (
                    (arguments[0] || '').constructor === Array &&
                    (arguments[1] || '').constructor === Array
                )
                    /* Loop
                            [for statement]

                        > Custom Elements > Define
                    */
                    for (let i = 0; i < max(arguments[0].length, arguments[1].length); i += 1)
                        (window.customElements || {define: () => {}}).define(String(arguments[0][i] || ''), arguments[1][i] || class HTMLCustomElement extends HTMLElement {})
            }
        });

        // Reload
        (typeof window.reload == 'function') || Object.defineProperty(window.constructor.prototype, 'reload', {
            // Value
            value: function reload() {
                // Location > Reload
                location.reload.apply(location, [...arguments])
            }
        });

        /* Round
                --- WARN ---
                    Should be defined after 'ceil' and 'floor' functions.
        */
        (typeof window.round == 'function') || Object.defineProperty(window.constructor.prototype, 'round', {
            // Value
            value: (Math || new (function Math() {
                // Modification > Target > Round
                this.round = function round() {
                    // Return
                    return +String((String(arguments[0]).getAfterChar('.')[0] < 5) || ceil(arguments[0])).replace('true', floor(arguments[0]))
                }
            })).round
        });

        // Square Root
        (typeof window.sqrt == 'function') || Object.defineProperty(window.constructor.prototype, 'sqrt', {
            // Value
            value: function sqrt() {
                // Return
                return arguments[0] ** .5
            }
        });

        // String
        (typeof window.str == 'function') || Object.defineProperty(window.constructor.prototype, 'str', {
            // Value
            value: function str() {
                // Return
                return (arguments[0] || []).constructor === RegExp ? String(arguments[0]).slice('/'.length, -'/'.length) : (String(((arguments[0] || []).constructor !== Object) || JSON.stringify(arguments[0]).slice('{'.length, -'}'.length)).replace('true', String(arguments[0])))
            }
        });

        // Timeout
        (typeof window.timeout == 'function') || Object.defineProperty(window.constructor.prototype, 'timeout', {
            // Value
            value: function timeout() {
                setTimeout(arguments[0], parseNumber(arguments[1]) || void 0)
            }
        });

        // Warn
        (typeof window.warn == 'function') || (window.warn = console.warn);

        // Write
        (typeof window.write == 'function') || (window.write = function write() {
            // Document > Write
            document.write.apply(document, [...arguments])
        });

    /* Custom Data */
        /* LapysJS */
            // Initialization
            window.LapysJS = new (function LapysJS() {
                // Initialization > Version Number
                let VER_NUMBER = '0.0.1';

                // Author
                Object.defineProperty(this, 'author', {value: 'Lapys Dev Team'});

                // Console
                Object.defineProperty(this, 'console', {
                    // Value
                    value: new (function Console() {
                        // Modification > Target
                            // Clear
                            Object.defineProperty(this, 'clear', {
                                // Value
                                value: function clear() {
                                    // Console > Clear
                                    console.clear();

                                    // Console > Print
                                    console.print.apply(this, arguments)
                                }
                            });

                            // Directory
                            Object.defineProperty(this, 'dir', {
                                // Value
                                value: function dir() {
                                    /* Loop
                                            Index all Arguments.

                                        > Console > Directory
                                    */
                                    for (let i = 0; i < arguments.length; i += 1)
                                        console.dir(arguments[i])
                                }
                            });

                            // Error
                            Object.defineProperty(this, 'error', {value: console.error});

                            // Log
                            Object.defineProperty(this, 'log', {
                                // Value
                                value: function log() {
                                    /* Loop
                                            Index all Arguments.

                                        > Console > Log
                                    */
                                    for (let i = 0; i < arguments.length; i += 1)
                                        console.log(arguments[i])
                                }
                            });

                            // Print
                            Object.defineProperty(this, 'print', {value: console.print});

                            // Warn
                            Object.defineProperty(this, 'warn', {value: console.warn})
                    })
                });

                // Component
                Object.defineProperty(this.constructor.prototype, 'component', {
                    // Value
                    value: new (function LapysJSComponentsObject() {
                        /* Modification > Target
                                --- UPDATE REQUIRED ---
                                    @lapys: Do plugins need to be components.
                        */
                            /* Badge, Card, Dialog, Jumbotron, Pane, Thumbnail
                                    --- CODE ---
                                        @lapys:
                                            new LapysJS.component.[...]('Hello, World!', {property: value})

                                    --- NOTE ---
                                        @lapys: Returns a specified component.
                            */
                                /* Loop
                                        Iterate six times.

                                    > Execution
                                */
                                for (let i = 0; i < 6; i += 1)
                                    eval(`Object.defineProperty(this, '${['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i][0].toUpperCase() + ['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i].slice(['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i][0].length)}', {` +
                                        // Value
                                        `value: class LapysJS${['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i][0].toUpperCase() + ['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i].slice(['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i][0].length)} {` +
                                            // Constructor
                                            `constructor() {` +
                                                // Initialization > Data
                                                `let data = document.createElement(String((arguments[1] || []).tagName || 'div'));` +

                                                // Modification > Data-Event-based
                                                    // Class
                                                    `data.setAttribute('class', '${['badge', 'card', 'dialog', 'jumbotron', 'pane', 'thumbnail'][i].toLowerCase()}');` +

                                                    // Inner HTML
                                                    `data.innerHTML = arguments.length > 0 ? (typeof arguments[0] == 'string' ? arguments[0] : Object(arguments[0]).innerHTML) : '';` +

                                                /* Loop
                                                        Iterate twice.
                                                */
                                                `for (let i = 0; i < 2; i += 1)` +
                                                    /* Logic
                                                            If
                                                                Argument [Loop Counter] is an Object.
                                                    */
                                                    `if (isObject(arguments[i], !0))` +
                                                        /* Loop
                                                                Index Argument [Loop Counter]

                                                            > Modification > Data > [Argument [Loop Counter]]
                                                        */
                                                        `for (let j = 0; j < Object.keys(arguments[i]).length; j += 1)` +
                                                            `data[Object.keys(arguments[i])[j]] = arguments[i][Object.keys(arguments[i])[j]];` +

                                                // Return
                                                `return data` +
                                            `}` +
                                        `}` +
                                    `})`);

                            /* Block List
                                    --- CODE ---
                                        @lapys:
                                            new LapysJS.component.BlockList(['Hello, World!', {CSSSelector: '.bg-c-r', innerHTML: 'Lorem, ipsum'}], 'no-order | order')

                                    --- NOTE ---
                                        @lapys: Returns a Block List component.
                            */
                            Object.defineProperty(this, 'BlockList', {
                                // Value
                                value: class LapysJSBlockList {
                                    // Constructor
                                    constructor() {
                                        // Initialization > (Data, Metadata)
                                        let data = document.createElement(arguments[1] === 'no-order' ? 'ul' : arguments[1] === 'order' ? 'ol' : 'ul'),
                                            metadata = createDocumentFragment();

                                        /* Logic
                                                If
                                                    Argument 0 is an Array,

                                                else if
                                                    Argument 0 is a String.
                                        */
                                        if ((arguments[0] || '').constructor === Array)
                                            /* Loop
                                                    Index Argument 0.

                                                > Insertion
                                            */
                                            for (let i = 0; i < arguments[0].length; i += 1)
                                                metadata.appendChild(createElement('li', '', (arguments[0][i] || {innerHTML: void 0}).innerHTML || arguments[0][i], isObject(arguments[0][i], !0) ? arguments[0][i] : {}));

                                        else if (typeof arguments[0] == 'string')
                                            // Insertion
                                            metadata.appendChild(createElement('li', '', arguments[0]));

                                        /* Logic
                                                If
                                                    Argument 2 is an Object.
                                        */
                                        if (isObject(arguments[2], !0))
                                            /* Loop
                                                    Index Argument 2.

                                                > Modification > Data > [Argument 2]
                                            */
                                            for (let i = 0; i < Object.keys(arguments[2]).length; i += 1)
                                                data[Object.keys(arguments[2])[i]] = arguments[2][Object.keys(arguments[2])[i]];

                                        // Modification > Data > Class
                                        data.setAttribute('class', 'block-list');

                                        // Insertion
                                        data.appendChild(metadata);

                                        // Return
                                        return data
                                    }
                                }
                            });

                            /* Image
                                    --- CODE ---
                                        @lapys:
                                            new LapysJS.component.Image('#') // returns <img src=#>
                                            new LapysJS.component.Image('#', 'picture') // returns <picture> <img src=#> </picture>

                                    --- NOTE ---
                                        @lapys: Returns an <img> or <picture> element.
                            */
                            Object.defineProperty(this, 'Image', {
                                // Value
                                value: class LapysJSImage {
                                    // Constructor
                                    constructor() {
                                        // Initialization > Data
                                        let data;

                                        /* Logic
                                                Switch
                                                    case to Argument 1.

                                            > Update > Data
                                        */
                                        switch (arguments[1]) {
                                            // Image
                                            case 'image':
                                                data = new Image();
                                                break;

                                            // Picture
                                            case 'picture':
                                                data = document.createElement('picture');
                                                break;

                                            // [Default]
                                            default:
                                                data = new Image()
                                        }

                                        /* Logic
                                                If
                                                    Argument 0 is an Object,

                                                else if
                                                    Argument 0 is a String.
                                        */
                                        if ((arguments[0] || []).constructor === Object)
                                            /* Loop
                                                    Index all Argument 0's keys.
                                            */
                                            for (let i = 0; i < Object.keys(arguments[0]).length; i += 1) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (
                                                    Object.keys(arguments[0])[i] === 'image' &&
                                                    (
                                                        typeof String(arguments[0][Object.keys(arguments[0])[i]]) == 'boolean' ||
                                                        typeof String(arguments[0][Object.keys(arguments[0])[i]]) == 'number' ||
                                                        typeof String(arguments[0][Object.keys(arguments[0])[i]]) == 'string'
                                                    )
                                                )
                                                    // Set Timeout
                                                    setTimeout(() => {
                                                        // Insertion
                                                        data.appendChild(createElement('img', '', '', {src: arguments[0][Object.keys(arguments[0])[i]]}))
                                                    });

                                                else if (
                                                    Object.keys(arguments[0])[i] === 'sources' &&
                                                    (arguments[0][Object.keys(arguments[0])[i]] || '').constructor === Array
                                                )
                                                    /* Loop
                                                            Index all elements of the Argument.
                                                    */
                                                    for (let j = 0; j < arguments[0][Object.keys(arguments[0])[i]].length; j += 1) {
                                                        /* Logic
                                                                If
                                                                    the Argument's value is an Object,

                                                                else if
                                                                    the Argument's value is a String.
                                                        */
                                                        if ((arguments[0][Object.keys(arguments[0])[i]][j] || []).constructor === Object) {
                                                            // Insertion
                                                            data.appendChild(document.createElement('source'));

                                                            /* Loop
                                                                    Index all elements of the Argument's Object.
                                                            */
                                                            for (let k = 0; k < Object.keys(arguments[0][Object.keys(arguments[0])[i]][j]).length; k += 1)
                                                                /* Logic
                                                                        If
                                                                            the Argument's Object's key is 'src'.

                                                                    > Update > Data
                                                                */
                                                                if (Object.keys(arguments[0][Object.keys(arguments[0])[i]][j])[k] === 'src')
                                                                    data.querySelectorAll('source')[~-data.querySelectorAll('source').length].srcset = arguments[0][Object.keys(arguments[0])[i]][j][Object.keys(arguments[0][Object.keys(arguments[0])[i]][j])[k]];

                                                                else
                                                                    data.querySelectorAll('source')[~-data.querySelectorAll('source').length][Object.keys(arguments[0][Object.keys(arguments[0])[i]][j])[k]] = arguments[0][Object.keys(arguments[0])[i]][j][Object.keys(arguments[0][Object.keys(arguments[0])[i]][j])[k]]
                                                        }

                                                        else if (typeof arguments[0][Object.keys(arguments[0])[i]][j] == 'string')
                                                            // Insertion
                                                            data.appendChild(createElement('source', '', '', {srcset: arguments[0][Object.keys(arguments[0])[i]][j]}))
                                                    }

                                                else
                                                    // Update > Data
                                                    data[Object.keys(arguments[0])[i]] = arguments[0][Object.keys(arguments[0])[i]]
                                            }

                                        else if (typeof arguments[0] == 'string')
                                            // Modification > Data > Source
                                            data.constructor === HTMLImageElement ? data.src = arguments[0] : data.appendChild(createElement('img', '', '', {src: arguments[0]}));

                                        // Return
                                        return data
                                    }
                                }
                            });

                            /* Table
                                    --- CODE ---
                                        @lapys:
                                            new  LapysJS.component.Table({
                                                body: [1, 0, 1]
                                            }) // returns <table> ... </table>

                                    --- NOTE ---
                                        @lapys: Returns a <table> element.
                            */
                            Object.defineProperty(this, 'Table', {
                                // Value
                                value: class LapysJSTable {
                                    // Constructor
                                    constructor() {
                                        // Initialization > Data
                                        let data = document.createElement('table');

                                        // Modification > Data
                                            // Add Part
                                            Object.defineProperty(data, 'addPart', {
                                                // Value
                                                value: function addPart() {
                                                    /* Logic
                                                            If
                                                                Argument 0 is 'body'
                                                                    or
                                                                Argument 0 is 'foot'
                                                                    or
                                                                Argument 0 is 'head'.
                                                    */
                                                    if (
                                                        !arguments[0] ||
                                                        (
                                                            arguments[0] === 'body' ||
                                                            arguments[0] === 'foot' ||
                                                            arguments[0] === 'head'
                                                        )
                                                    )
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (this.querySelector(`t${arguments[0]}`))
                                                            // Modification > <t(body, foot, head)> > Inner HTML
                                                            this.querySelector(`t${arguments[0]}`).innerHTML = arguments[1] || '';

                                                        else
                                                            // Insertion
                                                            this.appendChild(createElement(`t${arguments[0]}`, '', arguments[1] || ''));

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(`'${arguments[0]}' is not a valid option for this method.`)
                                                }
                                            });

                                            // Body
                                            Object.defineProperty(data, 'body', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function getBody() {
                                                    // Initialization > Data
                                                    let data = [];

                                                    /* Logic
                                                            If
                                                                the Target's <tbody> or Target has a <tr>.
                                                    */
                                                    if ((this.querySelector('tbody') || this)._$('tr'))
                                                        /* Loop
                                                                Index all <tr>'s.
                                                        */
                                                        for (let i = 0; i < (this.querySelector('tbody') || this)._$('tr').length; i += 1) {
                                                            // Initialization > Array
                                                            let array = [];

                                                            /* Loop
                                                                    Index all <td>'s and <th>'s.

                                                                > Update > Array
                                                            */
                                                            for (let j = 0; j < (this.querySelector('tbody') || this)._$('tr', i)._$('td, th').length; j += 1)
                                                                array.push((this.querySelector('tbody') || this)._$('tr', i)._$('td, th', j).innerHTML);

                                                            // Update > Data
                                                            data.push(array)
                                                        }

                                                    else
                                                        /* Loop
                                                                Index all the Target's <tbody> or Target's <td>'s and <th>'s.

                                                            > Update > Array
                                                        */
                                                        for (let i = 0; i < (this.querySelector('tbody') || this)._$('td, th').length; i += 1) {
                                                            // Initialization > Array
                                                            let array = [];

                                                            // Update > Array
                                                            array.push((this.querySelector('tbody') || this)._$('td, th', i).innerHTML);

                                                            // Update > Data
                                                            data.push([array])
                                                        }

                                                    // Return
                                                    return data
                                                },

                                                // Set
                                                set: function setBody() {
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Array.

                                                            else if
                                                                Argument 0 is a String.
                                                    */
                                                    if ((arguments[0] || '').constructor === Array) {
                                                        // Insertion
                                                        this.querySelector('tbody') || this.appendChild(document.createElement('tbody'));

                                                        // Modification > Target > <tbody> > Inner HTML
                                                        this.querySelector('tbody').innerHTML = '';

                                                        /* Logic
                                                                Index all Argument 0's elements.
                                                        */
                                                        for (let i = 0; i < arguments[0].length; i += 1) {
                                                            // Insertion
                                                            (this.querySelector('tbody') || this).appendChild('tr'.html);

                                                            /* Logic
                                                                    If
                                                                        the Argument is an Array.
                                                            */
                                                            if ((arguments[0][i] || '').constructor === Array)
                                                                /* Loop
                                                                            Index all elements of the Argument.

                                                                    > Insertion
                                                                */
                                                                for (let j = 0; j < arguments[0][i].length; j += 1)
                                                                    this.querySelectorAll('tr')[~-this.querySelectorAll('tr').length].appendChild(createElement('td', '', String(arguments[0][i][j])));

                                                            else {
                                                                /* Loop
                                                                        Index all Argument 0's elements.
                                                                */
                                                                for (let j = 0; j < arguments[0].length; j += 1)
                                                                    // Modification > Target > <tr> > Inner HTML
                                                                    this.querySelectorAll('tr')[~-this.querySelectorAll('tr').length].innerHTML += `<td>${arguments[0][j]}</td>`;

                                                                // Deletion
                                                                (this.querySelectorAll('tr')[1] || document.createElement('tr')).remove()
                                                            }
                                                        }
                                                    }

                                                    else if (typeof arguments[0] == 'string') {
                                                        // Insertion
                                                        this.querySelector('tbody') || this.appendChild(document.createElement('tbody'));

                                                        // Modification > Target > <tbody> > Inner HTML
                                                        this.querySelector('tbody').innerHTML = `<tr><td>${arguments[0]}</td></tr>`
                                                    }
                                                }
                                            });

                                            // Columns
                                            Object.defineProperty(data, 'columns', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function getColumns() {
                                                    // Return
                                                    return +(this.querySelector('tbody') || this)._$('tr', 'length')
                                                },

                                                // Set
                                                set: function setColumns() {
                                                    // Initialization > Target
                                                    let that = this;

                                                    // Set Timeout
                                                    setTimeout(() => {
                                                        /* Loop
                                                                Index all Target's Rows
                                                        */
                                                        for (let i = 0; i < that.rows.length; i += 1)
                                                            /* Logic
                                                                    While
                                                                        the Row's <td>'s and <th>'s are greater in number than Argument 0.

                                                                > Deletion
                                                            */
                                                            while (that.rows[i]._$('td, th', 'array').length > parseFloat(arguments[0]))
                                                                that.rows[i].removeChild(that.rows[i].lastElementChild)
                                                    })
                                                }
                                            });

                                            // Data Table
                                            data.setAttribute('data-table', '');

                                            // Delete Part
                                            Object.defineProperty(data, 'delPart', {
                                                // Value
                                                value: function delPart() {
                                                    /* Logic
                                                            If
                                                                Argument 0 is 'body'
                                                                    or
                                                                Argument 0 is 'foot'
                                                                    or
                                                                Argument 0 is 'head'.
                                                    */
                                                    if (
                                                        !arguments[0] ||
                                                        (
                                                            arguments[0] === 'body' ||
                                                            arguments[0] === 'foot' ||
                                                            arguments[0] === 'head'
                                                        )
                                                    )
                                                        // Deletion
                                                        (this.querySelector(`t${arguments[0]}`) || document.createElement('a')).remove();

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(`'${arguments[0]}' is not a valid option for this method.`)
                                                }
                                            });

                                            // Foot
                                            Object.defineProperty(data, 'foot', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function getFoot() {
                                                    // Return
                                                    return [this.querySelector('tfoot').innerHTML]
                                                },

                                                // Set
                                                set: function setFoot() {
                                                    // Target > Create TFoot
                                                    this.createTFoot();

                                                    /* Logic
                                                            If
                                                                Argument 0 is an Array,

                                                            else if
                                                                Argument 0 is a String.
                                                    */
                                                    if ((arguments[0] || '').constructor === Array) {
                                                        this.querySelector('tfoot').insertChild('begin', createElement('tr', '[data-table-footer-row=""]'));

                                                        /* Loop
                                                                Index all elements of Argument 0.

                                                            > Insertion
                                                        */
                                                        for (let i = 0; i < arguments[0].length; i += 1)
                                                            this.querySelector('tfoot > tr').appendChild(createElement('td', '', String(arguments[0][i])))
                                                    }

                                                    else if (typeof arguments[0] == 'string')
                                                        this.querySelector('tfoot').insertChild('begin', createElement('tr', '[data-table-footer-row=""]', `<td>${arguments[0]}</td>`))
                                                }
                                            });

                                             // Get Part
                                            Object.defineProperty(data, 'getPart', {
                                                // Value
                                                value: function getPart() {
                                                    // Return
                                                    return this.part.apply(this, [...arguments])
                                                }
                                            });

                                            // Head
                                            Object.defineProperty(data, 'head', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function getHead() {
                                                    // Initialization > Data
                                                    let data = [];

                                                    /* Loop
                                                            Index all <th>'s.

                                                        > Update > Data
                                                    */
                                                    for (let i = 0; i < (this.querySelector('thead') || document.createElement('thead')).querySelectorAll('td, th').length; i += 1)
                                                        data.push((this.querySelector('thead') || document.createElement('thead')).querySelectorAll('td, th')[i].innerHTML);

                                                    // Return
                                                    return data
                                                },

                                                // Set
                                                set: function setHead() {
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Array,

                                                            else if
                                                                Argument 0 is a String.
                                                    */
                                                    if ((arguments[0] || '').constructor === Array) {
                                                        // Target > Create THead
                                                        this.createTHead();

                                                        // Insertion
                                                        this.querySelector('thead').insertChild('begin', document.createElement('tr'));

                                                        /* Loop
                                                                Index all Arguments.

                                                            > Insertion
                                                        */
                                                        for (let i = 0; i < arguments[0].length; i += 1)
                                                            this.querySelector('thead').querySelector('tr').appendChild(createElement('th', '', String(arguments[0][i])))
                                                    }

                                                    else if (typeof arguments[0] == 'string') {
                                                        // Target > Create THead
                                                        this.createTHead();

                                                        // Modification > Target > <thead> > Inner HTML
                                                        this.querySelector('thead').innerHTML = `<tr><th>${arguments[0]}</th></tr>`
                                                    }
                                                }
                                            });

                                            // Part
                                            Object.defineProperty(data, 'part', {
                                                // Value
                                                value: function part() {
                                                    /* Logic
                                                            If
                                                                Argument 0 is 'body'
                                                                    or
                                                                Argument 0 is 'foot'
                                                                    or
                                                                Argument 0 is 'head'.
                                                    */
                                                    if (
                                                        !arguments[0] ||
                                                        (
                                                            arguments[0] === 'body' ||
                                                            arguments[0] === 'foot' ||
                                                            arguments[0] === 'head'
                                                        )
                                                    )
                                                        // Return
                                                        return this.querySelector(`t${arguments[0]}`);

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(`'${arguments[0]}' is not a valid option for this method.`)
                                                }
                                            });

                                        /* Logic
                                                If
                                                    Argument 0 is an Object.
                                        */
                                        if ((arguments[0] || []).constructor === Object)
                                            /* Loop
                                                    Index all keys of Argument 0.
                                            */
                                            for (let i = 0; i < Object.keys(arguments[0]).length; i += 1)
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (
                                                    Object.keys(arguments[0])[i] === 'caption' &&
                                                    (
                                                        typeof String(arguments[0][Object.keys(arguments[0])[i]]) == 'boolean' ||
                                                        typeof String(arguments[0][Object.keys(arguments[0])[i]]) == 'number' ||
                                                        typeof String(arguments[0][Object.keys(arguments[0])[i]]) == 'string'
                                                    )
                                                ) {
                                                    // Data > Create Caption
                                                    data.createCaption();

                                                    // Data > <caption> > Inner HTML
                                                    data.querySelector('caption').innerHTML = arguments[0][Object.keys(arguments[0])[i]]
                                                }

                                                else if (
                                                    String(Object.keys(arguments[0])[i]) === 'rows' &&
                                                    (
                                                        typeof String(Object.values(arguments[0])[i]) == 'boolean' ||
                                                        typeof String(Object.values(arguments[0])[i]) == 'number' ||
                                                        typeof String(Object.values(arguments[0])[i]) == 'string'
                                                    )
                                                )
                                                    // Set Timeout
                                                    setTimeout(() => {
                                                        /* Logic
                                                                While
                                                                    [do:while statement]

                                                            > Deletion
                                                        */
                                                        while (data.querySelectorAll('tr:not([data-table-footer-row])').length + 1 > arguments[0][Object.keys(arguments[0])[i]])
                                                            data.querySelectorAll('tr:not([data-table-footer-row])')[~-data.querySelectorAll('tr:not([data-table-footer-row])').length].parentElement.removeChild(data.querySelectorAll('tr:not([data-table-footer-row])')[~-data.querySelectorAll('tr:not([data-table-footer-row])').length])
                                                    });

                                                else
                                                    // Update > Data
                                                    data[Object.keys(arguments[0])[i]] = arguments[0][Object.keys(arguments[0])[i]];

                                        /* Logic
                                                If
                                                    Data's cells are expanded.
                                        */
                                        if (data.expandCells) {
                                            // Initialization > Column Lengths
                                            let columnLengths = [];

                                            /* Loop
                                                    Index all Data's rows.

                                                > Update > Column Lengths
                                            */
                                            for (let i = 0; i < data.rows.length; i += 1)
                                                columnLengths.push(data.rows[i]._$('td, th', 'array').length);

                                            /* Loop
                                                    Index all Data's rows.

                                                > Modification > (Data > Row) > Column Span
                                            */
                                            for (let i = 0; i < data.rows.length; i += 1)
                                                (data.rows[i]._$('td, th', 'array').length > ~-max.apply(max, columnLengths)) || (data.rows[i]._$('td, th', 'array')[~-data.rows[i]._$('td, th', 'array').length] || document.createElement('td')).setAttribute('colspan', (max.apply(max, columnLengths) - data.rows[i]._$('td, th', 'array').length) + 1)
                                        }

                                        // On DOM Node Count Change
                                        onDOMNodeCountChange(data => {
                                            /* Loop
                                                    Index all Argument 0's <tbody>'s, <tfoot>'s and <thead>'s.'
                                            */
                                            for (let i = 0; i < data.querySelectorAll('tbody, tfoot, thead').length; i += 1) {
                                                // Modification > <t(body, foot, head)>
                                                    // Add Row
                                                    data.querySelectorAll('tbody, tfoot, thead')[i].addRow || Object.defineProperty(data.querySelectorAll('tbody, tfoot, thead')[i], 'addRow', {
                                                        // Value
                                                        value: function addRow() {
                                                            /* Logic
                                                                    If
                                                                        Target is a <tbody>
                                                                            or
                                                                        Target is a <thead>,

                                                                    else if
                                                                        Target is a <tfoot>.

                                                                > Insertion
                                                            */
                                                            if (
                                                                this.tagName === 'TBODY' ||
                                                                this.tagName === 'THEAD'
                                                            )
                                                                this.appendChild(createElement('tr', `[data-id='${arguments[0]}']`));

                                                            else if (this.tagName === 'TFOOT')
                                                                this.querySelector('tr') || this.insertChild('begin', document.createElement('tr'))
                                                        }
                                                    });

                                                    // Delete Row
                                                    data.querySelectorAll('tbody, tfoot, thead')[i].delRow || Object.defineProperty(data.querySelectorAll('tbody, tfoot, thead')[i], 'delRow', {
                                                        // Value
                                                        value: function delRow() {
                                                            /* Logic
                                                                    If
                                                                        Argument 0 is given.

                                                                > Deletion
                                                            */
                                                            if (arguments.length > 0)
                                                                (this.querySelectorAll(`tr[data-id='${arguments[0]}']`)[~-this.querySelectorAll(`tr[data-id='${arguments[0]}']`).length] || document.createElement('tr')).remove();

                                                            else
                                                                this.querySelectorAll('tr')[~-this.querySelectorAll('tr').length].remove()
                                                        }
                                                    });

                                                    // Delete Rows
                                                    data.querySelectorAll('tbody, tfoot, thead')[i].delRows || Object.defineProperty(data.querySelectorAll('tbody, tfoot, thead')[i], 'delRows', {
                                                        // Value
                                                        value: function delRows() {
                                                            /* Loop
                                                                    While
                                                                        Target still has a Row.

                                                                > Deletion
                                                            */
                                                            while (this.querySelector('tr'))
                                                                this.querySelectorAll('tr')[~-this.querySelectorAll('tr').length].remove()
                                                        }
                                                    });

                                                    // Get Rows
                                                    data.querySelectorAll('tbody, tfoot, thead')[i].getRows || Object.defineProperty(data.querySelectorAll('tbody, tfoot, thead')[i], 'getRows', {
                                                        // Value
                                                        value: function getRows() {
                                                            // Return
                                                            return this.querySelectorAll(`tr${arguments[0] ? `[data-id='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments[0] ? `']` : ''}`)
                                                        }
                                                    });
                                            }

                                            /* Loop
                                                    Index all Target's Rows.
                                            */
                                            for (let i = 0; i < data.rows.length; i += 1) {
                                                // Modification > Row
                                                    // Add Cell
                                                    data.rows[i].addCell || Object.defineProperty(data.rows[i], 'addCell', {
                                                        // Value
                                                        value: function addCell() {
                                                            /* Logic
                                                                    If
                                                                        Argument 1 is 'expand'.
                                                            */
                                                            if (arguments[1] === 'expand') {
                                                                // Initialization > Column Lengths
                                                                let columnLengths = [];

                                                                /* Loop
                                                                        [for statement]

                                                                    > Update > Column Lengths
                                                                */
                                                                for (let i = 0; i < this.parentElement.parentElement.querySelectorAll('tr').length; i += 1)
                                                                    columnLengths.push(this.parentElement.parentElement.querySelectorAll('tr')[i]._$('td, th', 'array').length);

                                                                // Insertion
                                                                this.appendChild(createElement(`${this.parentElement.tagName === 'THEAD' ? 'th' : 'td'}`, '', arguments.length > 0 ? String(arguments[0]) : ''));

                                                                // Modification > (Target > (<td>, <th>)) > Column Span
                                                                (this.querySelectorAll('td, th').length > ~-max.apply(max, columnLengths)) || this.querySelectorAll('td, th')[~-this.querySelectorAll('td, th').length].setAttribute('colspan', (max.apply(max, columnLengths) - this.querySelectorAll('td, th').length) + 1)
                                                            }

                                                            else
                                                                // Insertion
                                                                this.appendChild(createElement(`${this.parentElement.tagName === 'THEAD' ? 'th' : 'td'}`, arguments.length > 1 ? `[colspan='${arguments[1]}']` : '', arguments.length > 0 ? String(arguments[0]) : ''))
                                                        }
                                                    });

                                                    // Delete Cell
                                                    data.rows[i].delCell || Object.defineProperty(data.rows[i], 'delCell', {
                                                        // Value
                                                        value: function delCell() {
                                                            /* Logic
                                                                    If
                                                                        Argument 0 is 'expanded'.

                                                                > Deletion
                                                            */
                                                            if (arguments[0] === 'expanded')
                                                                (+this.querySelectorAll('td[colspan], th[colspan]')[~-this.querySelectorAll('td[colspan], th[colspan]').length].getAttribute('colspan') < 1) || this.querySelectorAll('td[colspan], th[colspan]')[~-this.querySelectorAll('td[colspan], th[colspan]').length].remove();

                                                            else
                                                                (this.querySelectorAll(`td${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}, th${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}`)[~-this.querySelectorAll(`td${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}, th${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}`).length] || document.createElement('td')).remove()
                                                        }
                                                    });

                                                    // Delete Cells
                                                    data.rows[i].delCells || Object.defineProperty(data.rows[i], 'delCells', {
                                                        // Value
                                                        value: function delCells() {
                                                            /* Logic
                                                                    If
                                                                        Argument 0 is 'expanded'.
                                                            */
                                                            if (arguments[0] === 'expanded')
                                                                /* Loop
                                                                        Index all Target's column-spanned <td>'s and <th>'s.

                                                                    > Deletion
                                                                */
                                                                for (let i = 0; i < this.querySelectorAll('td[colspan], th[colspan]').length; i += 1)
                                                                    (+this.querySelectorAll('td[colspan], th[colspan]')[i].getAttribute('colspan') < 1) || this.querySelectorAll('td[colspan], th[colspan]')[i--].remove();

                                                            else
                                                                /* Loop
                                                                        While
                                                                            The specified query is still a child of Target.

                                                                    > Deletion
                                                                */
                                                                while (this.querySelector(`td${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}, th${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}`))
                                                                    this.querySelectorAll(`td${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}, th${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}`)[~-this.querySelectorAll(`td${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}, th${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}`).length].remove()
                                                        }
                                                    });

                                                    // Get Cells
                                                    data.rows[i].getCells || Object.defineProperty(data.rows[i], 'getCells', {
                                                        // Value
                                                        value: function getCells() {
                                                            /* Logic
                                                                    If
                                                                        Argument 0 is 'expanded'.
                                                            */
                                                            if (arguments[0] === 'expanded') {
                                                                // Initialization > Array
                                                                let array = [];

                                                                /* Loop
                                                                        Index all Target's column-spanned <td>'s and <th>'s.

                                                                    > Update > Array
                                                                */
                                                                for (let i = 0; i < this.querySelectorAll('td[colspan], th[colspan]').length; i += 1)
                                                                    (+this.querySelectorAll('td[colspan], th[colspan]')[i].getAttribute('colspan') < 1) || array.push(this.querySelectorAll('td[colspan], th[colspan]')[i]);

                                                                // Return
                                                                return array
                                                            }

                                                            else
                                                                // Return
                                                                return this.querySelectorAll(`td${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}, th${arguments.length > 0 ? `[colspan='` : ''}${arguments.length > 0 ? arguments[0] : ''}${arguments.length > 0 ? `']` : ''}`)
                                                        }
                                                    })
                                            }
                                        }, data);

                                        // Return
                                        return data
                                    }
                                }
                            })
                    })
                });

                /* Debug
                        --- NOTE --
                            @lapys: For debugging purposes only.
                */
                Object.defineProperty(this.constructor.prototype, 'debug', {
                    // Configurable
                    configurable: !0,

                    // Enumerable
                    enumerable: !0,

                    // Get
                    get: function debug() {
                        // Return
                        return new (function LapysJSDebugObject() {
                            // Modification > Target
                                // Log 1
                                this.log1 = (function() {
                                    // Log
                                    log(1)
                                });

                                // Log 2
                                this.log2 = (function() {
                                    // Log
                                    log(2)
                                });

                                // (Log ')Hello(, World!')
                                this.hello = (function() {
                                    // Log
                                    log('Hello, World!');

                                    return 'Hello, World!'
                                });

                                // Insert Child
                                this.insertChild = (function() {
                                    // Insertion
                                    document.body.appendChild('div'.html);

                                    // Return
                                    return $$('div', $$('div', '~length'))
                                });

                                // Left Trim
                                this.ltrim = (function() {
                                    // Return
                                    return str(arguments[0] || '').trimLeft()
                                });

                                // Right Trim
                                this.rtrim = (function() {
                                    // Return
                                    return str(arguments[0] || '').trimRight()
                                });

                                // Trim
                                this.trim = (function() {
                                    // Return
                                    return str(arguments[0] || '').trim()
                                })
                        })
                    }
                });

                // [Dollar Object]
                Object.defineProperty(this.constructor.prototype, '$', {
                    // Value
                    value: new (function LapysJSDollarObject() {
                        // Modification > Target
                            /* Anchor
                                    --- NOTE ---
                                        @lapys: This function simulates the click event of
                                            a generic but usually modified hypertext link.
                            */
                            Object.defineProperty(this, 'anchor', {
                                // Value
                                value: function anchor() {
                                    // Initialization > Data
                                    let data = document.createElement('a');

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (arguments.length > 0) {
                                        // Modification > Data > Hyperlink Reference
                                        data.href = String(arguments[0]);

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if ((arguments[1] || []).constructor == Object)
                                            /* Loop
                                                    [for statement]

                                                > Modification > Data > [Argument 1]
                                            */
                                            for (let i = 0; i < Object.keys(arguments[1]).length; i += 1)
                                                data[Object.keys(arguments[1])] = arguments[1][Object.keys(arguments[1])]
                                    }

                                    data.click()
                                }
                            });

                            /* Import
                                    --- NOTE ---
                                        @lapys: This function serves as a means of importing
                                            available data from external (local or online) sources
                                                or
                                            for inserting Nodes into the DOM.
                            */
                            Object.defineProperty(this, 'import', {
                                // Value
                                value: function Import() {
                                    // Update > Arguments 1
                                    (typeof arguments[1] == 'object') || (arguments[1] = {});

                                    /* Logic
                                            Switch case to Argument 0.
                                    */
                                    switch (String(arguments[0])) {
                                        // Font
                                        case 'font':
                                            // CSS > Style
                                            css.style('CSSFont', `@font-face {` +
                                                ('name' in arguments[1] ? `font-family: ${String(arguments[1].name || '').indexOf(' ') > -1 ? `'${arguments[1].name}'` : arguments[1].name};` : '') +
                                                `src: ${'url' in arguments[1] ? `url('${arguments[1].url}') ` : ''}${'format' in arguments[1] ? `format('${arguments[1].format}')` : ''}` +
                                            `}`)
                                    }
                                }
                            });

                            /* Request
                                    --- NOTE ---
                                        @lapys: This function is or getting data from CORS requests,
                                            it serves as an alternative to the Fetch API.
                            */
                            Object.defineProperty(this, 'request', {
                                // Value
                                value: function request() {
                                    /* Initialization > XML HTTP Request
                                            --- NOTE ---
                                                @lapys: Create a new CORS request.
                                    */
                                    let _XMLHttpRequest = new XMLHttpRequest();

                                    /* Logic
                                            If
                                                the Request has credentials,

                                            else if
                                                the XDomainRequest exists.
                                    */
                                    if ('withCredentials' in _XMLHttpRequest)
                                        // XML HTTP Request > Open
                                        _XMLHttpRequest.open(String(arguments[0]), String(arguments[1]), !0);

                                    else if (window.XDomainRequest) {
                                        // Update > XML HTTP Request
                                        _XMLHttpRequest = new XDomainRequest();

                                        // XML HTTP Request > Open
                                        _XMLHttpRequest.open(String(arguments[0]), String(arguments[1]))
                                    }

                                    else {
                                        // Update > XML HTTP Request
                                        _XMLHttpRequest = null;

                                        // Set Timeout
                                        setTimeout(() => {
                                            // LapysJS > Warn
                                            LapysJS.warn('CORS is not supported by this browser.')
                                        })
                                    }

                                    /* Logic
                                            If
                                                Argument 2 is an Object.
                                    */
                                    if ((arguments[2] || []).constructor === Object)
                                        /* Loop
                                                Index Argument 2.

                                            > Update > XML HTTP Request.
                                        */
                                        for (let i = 0; i < Object.keys(arguments[2]).length; i += 1)
                                            _XMLHttpRequest[Object.keys(arguments[2])[i]] = arguments[2][Object.keys(arguments[2])[i]];

                                    /* Set Timeout
                                            --- NOTE ---
                                                @lapys: Automated request parsing.
                                    */
                                    setTimeout(() => {
                                        // XML HTTP Request > Send
                                        _XMLHttpRequest.send()
                                    }, +String(arguments[3]).replace(/ /g, '') || 0);

                                    // Return
                                    return _XMLHttpRequest
                                }
                            });

                            // [Set Timeout]
                            setTimeout(() => {
                                // Descendant Query Selector (All)
                                Object.defineProperty(this, '_', {
                                    // Value
                                    value: _$
                                });

                                // Query Selector (All)
                                Object.defineProperty(this, '$', {
                                    // Value
                                    value: $$
                                })
                            })
                    })
                });

                // Error
                Object.defineProperty(this, 'error', {
                    // Value
                    value: function error() {
                        // Throw
                        throw new (class LapysJSScriptError extends Error {
                            constructor() {
                                // Super
                                super([...arguments]);

                                // Error > Capture Stack Trace
                                Error.captureStackTrace(this, LapysJSScriptError)
                            }
                        })(`\n\t[LapysJS v${VER_NUMBER}] => ${arguments[0]}\r`)
                    }
                });

                // Execute
                Object.defineProperty(this, 'exec', {
                    // Value
                    value: function execute() {
                        // Error Handling
                        try {
                            // Execution > Apply
                            eval.apply(window || this, [...arguments])
                        }

                        catch (error) {
                            // Target > Error
                            this.error(String(error))
                        }
                    }
                });

                // Executed
                this.executed = !!0;

                // Experimental Features
                Object.defineProperty(this, 'experimentalFeatures', {value: ['data-focus', 'element-index', 'html-javascript', 'style-attributes']});
                    // Modification > (All, Null)
                    Object.defineProperty(this.experimentalFeatures, 'all', {value: 'all'});
                    Object.defineProperty(this.experimentalFeatures, 'null', {value: 'null'});

                // Name (Title)
                Object.defineProperty(this, 'name', {value: 'LapysJS'});

                // LapysJS
                Object.defineProperty(this.constructor.prototype, 'LapysJS', {value: this});

                // Permanent Data
                Object.defineProperty(this.constructor.prototype, 'permanentData', {value: {}});

                /* Script
                        --- WARN ---
                            This property can easily be voided by file modifications.

                            The 'data-enable' attribute that comes with the <script> element is
                            not dynamic and must be pre-decided for now.
                */
                Object.defineProperty(this, 'script', {value: document.querySelector("script[src*='lapys.'][src*='.js']") || ((document.scripts || [])[~-(document.scripts || [0]).length] || document.querySelectorAll('script')[~-document.querySelectorAll('script').length])});
                    // Data Enable
                    ((this.script.getAttribute('data-enable') || '').indexOf('null') < 0) || this.script.removeAttribute('data-enable');

                    // Disable
                    Object.defineProperty(this.script.constructor.prototype, 'disable', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Set
                        set: function disable() {
                            /* Loop
                                    Index all elements of Argument 0.

                                > Modification > Target > Data Enable
                            */
                            for (let i = 0; i < arguments[0].split(/ /g).length; i += 1)
                                ((this.getAttribute('data-enable') || '').indexOf(arguments[0].split(/ /g)[i]) < 0) || this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').replace(RegExp(arguments[0].split(/ /g)[i], 'g'), '').trim());

                            // Modification > Target > Data Enable
                            this.getAttribute('data-enable') || this.removeAttribute('data-enable')
                        }
                    });

                    // Enable
                    Object.defineProperty(this.script.constructor.prototype, 'enable', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Set
                        set: function enable() {
                            // Initialization > (Array, Error, Repeated Element)
                            let array = `${(this.getAttribute('data-enable') || '')} ${arguments[0]}`.split(/ /g),
                                error = !!0,
                                repeatedElements = array.getRepeatedElements();

                            // Update > Array
                            array = array.removeFalsyElements().removeRepeatedElements();

                            /* Loop
                                    Index all elements of Repeated Elements.

                                > Update > Array
                            */
                            for (let i = 0; i < repeatedElements.length; i += 1)
                                array = array.addElementToFront(repeatedElements[i]);

                            /* Loop => [Array Validation]
                                    --- NOTE ---
                                        Index all experimental features of LapysJS.
                            */
                            arrayValidation:
                            for (let i = 0; i < LapysJS.experimentalFeatures.concat(['all', 'null']).length; i += 1)
                                /* Loop
                                        Index all elements of Array.
                                */
                                for (let j = 0; j < array.length; j += 1)
                                    /* Logic
                                            If
                                                a member of Array is not in LapysJS Experimental Features.
                                    */
                                    if (LapysJS.experimentalFeatures.concat(['all', 'null']).indexOf(array[j]) < 0) {
                                        // LapysJS > Error
                                        LapysJS.error(`'${array[j]}' is not an experimental feature of LapysJS.`);

                                        // Update > Error
                                        error = !0;

                                        // Break
                                        break arrayValidation
                                    };

                            // Modification > Target > Data Enable
                            error || this.setAttribute('data-enable', String(array.sort()).replace(/,/g, ' ').trim())
                        }
                    });

                    // Enabled
                    Object.defineProperty(this.script.constructor.prototype, 'enabled', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function enabled() {
                            // Return
                            return (this.getAttribute('data-enable') || '').split(/ /g).removeFalsyElements().removeRepeatedElements()
                        }
                    });

                // Version
                Object.defineProperty(this, 'version', {value: VER_NUMBER});

                // Warn
                Object.defineProperty(this, 'warn', {
                    // Value
                    value: function warn() {
                        // Console > Warn
                        console.warn(`[LapysJS v${VER_NUMBER}] => ${arguments[0]}`)
                    }
                });

                // Ready
                this.ready = !!0;

                // Temporary Data
                    /* Set Interval
                            --- NOTE ---
                                @lapys: Every minute, the the Temporary Data
                                becomes undefined.
                    */
                    setInterval(() => {
                        // Update > LapysJS > Temporary Data
                        !LapysJS.temporaryData || (LapysJS.temporaryData = void 0)
                    }, 6e4)
            });

    /* Array Data */
        // Add Element
        (typeof Array.prototype.addElement == 'function') || Object.defineProperty(Array.prototype, 'addElement', {
            // Value
            value: function addElement() {
                /* Loop
                        Index all Arguments of Element.

                    > Update > Array.
                */
                for (let i = ~-arguments.length; i > -1; i -= 1)
                    this.unshift(arguments[i]);

                // Return
                return this
            }
        });

        // Add Element To Back
        (typeof Array.prototype.addElementToBack == 'function') || Object.defineProperty(Array.prototype, 'addElementToBack', {
            // Value
            value: function addElementToBack() {
                /* Loop
                        Index all Arguments of Element.

                    > Update > Array.
                */
                for (let i = ~-arguments.length; i > -1; i -= 1)
                    this.unshift(arguments[i]);

                // Return
                return this
            }
        });

        // Add Element To Front
        (typeof Array.prototype.addElementToFront == 'function') || Object.defineProperty(Array.prototype, 'addElementToFront', {
            // Value
            value: function addElementToFront() {
                /* Loop
                        Index all Arguments of Element.

                    > Update > Target.
                */
                for (let i = 0; i < arguments.length; i += 1)
                    this.push(arguments[i]);

                // Return
                return this
            }
        });

        // Get Common Element
        (typeof Array.prototype.getCommonElement == 'function') || Object.defineProperty(Array.prototype, 'getCommonElement', {
            // Value
            value: function getCommonElement() {
                // Initialization > (Data, Limit, Result)
                let data = {},
                    limit = 1,
                    result = this[0];

                /* Logic
                        [if:else if:else statement]

                    > Return
                */
                if (
                    !this.length ||
                    (
                        this.length === 2 &&
                        this[0] !== this[1]
                    )
                )
                    return null;

                else if (this.length === 1)
                    return this[0];

                /* Loop
                        Index all elements of Target.
                */
                for (let i = 0; i < this.length; i += 1) {
                    // Update > Data
                    data[this[i]] ? data[this[i]] += 1 : data[this[i]] = 1;

                    /* Logic
                            If
                                Data's Target Element count is greater than the Limit.

                        > Update
                    */
                    if (data[this[i]] > limit) {
                        // Result
                        result = this[i];

                        // Limit
                        limit = data[this[i]]
                    }
                }

                // Return
                return result
            }
        });

        // Get Repeated Elements
        (typeof Array.prototype.getRepeatedElements == 'function') || Object.defineProperty(Array.prototype, 'getRepeatedElements', {
            // Value
            value: function getRepeatedElements() {
                // Initialization > Repeated Elements
                let repeatedElements = [];

                /* Loop
                        Index all members of the Target.
                */
                for (let i = 0; i < ~-this.length; i += 1)
                    // Update > Repeated Elements
                    (this.slice().sort()[i + 1] !== this.slice().sort()[i]) || repeatedElements.push(this.slice().sort()[i]);

                // Return
                return repeatedElements
            }
        });

         // Has Element
         (typeof Array.prototype.hasElement == 'function') || Object.defineProperty(Array.prototype, 'hasElement', {
            // Value
            value: function hasElement() {
                // Initialization > Has Element
                let _hasElement = [];

                /* Loop
                        Index all Arguments.

                    > Update > Has Element
                */
                for (let i = 0; i < arguments.length; i += 1)
                    _hasElement.push(this.indexOf(arguments[i]) > -1);

                // Return
                return _hasElement.indexOf(!!0) < 0
            }
         });

        /* Index Of
                --- NOTE ---
                    Build for Internet Explorer 7 and 8.
        */
        (typeof Array.prototype.indexOf == 'function') || Object.defineProperty(Array.prototype, 'indexOf', {
            // Value
            value: function indexOf() {
                /* --- NOTE ---
                        This is a minified polyfill version of 'indexOf' in non-supporting browsers.
                */
                if(this===null)throw TypeError(`'this' is null or not defined`);var a,c=Object(this),b=c.length>>>0;if(0===b)return -1;a=parseFloat(arguments[1])||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return -1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===arguments[0])return a;a += 1}return -1
            }
        });

        /* Last Index Of
                --- NOTE ---
                    Build for Internet Explorer 7 and 8.
        */
        (typeof Array.prototype.lastIndexOf == 'function') || Object.defineProperty(Array.prototype, 'lastIndexOf', {
            // Value
            value: function lastIndexOf() {
                /* --- NOTE ---
                        This is a minified polyfill version of 'lastIndexOf' in non-supporting browsers.
                */
                if(this===void 0||this===null)throw TypeError();var n,k,t=Object(this),len=t.length>>>0;if(len===0){return -1}n=len-1;if(arguments.length>1){n=Number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==(1/0)&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}}for(k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k -= 1){if(k in t&&t[k]===arguments[0]){return k}}return -1
            }
        });

        // Remove Common Elements
        (typeof Array.prototype.removeCommonElements == 'function') || Object.defineProperty(Array.prototype, 'removeCommonElements', {
            // Value
            value: function removeCommonElements() {
                // Return
                return this.removeElements(this.getCommonElement())
            }
        });

        /* Remove Element
                --- NOTE ---
                    Removes the first instance specified element of an array.
        */
        (typeof Array.prototype.removeElement == 'function') || Object.defineProperty(Array.prototype, 'removeElement', {
            // Value
            value: function removeElement() {
                /* Loop
                        Index all Arguments.
                */
                for (let i = 0; i < arguments.length; i += 1)
                    // Update > Target
                    (this.indexOf(arguments[i]) < 0) || this.splice(this.indexOf(arguments[i]), 1);

                // Return
                return this
            }
        });

        // Remove Element From Back
        (typeof Array.prototype.removeElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'removeElementFromBack', {
            // Value
            value: function removeElementFromBack() {
                /* Loop
                        Index all Arguments.
                */
                for (let i = 0; i < arguments.length; i += 1)
                    // Update > Target
                    (this.indexOf(arguments[i]) < 0) || this.splice(this.indexOf(arguments[i]), 1);

                // Return
                return this
            }
        });

        /* Remove Element From Front
                --- NOTE ---
                    Removes the last instance specified element of an array.
        */
         (typeof Array.prototype.removeElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'removeElementFromFront', {
            // Value
            value: function removeElementFromFront() {
                /* Loop
                        Index all Arguments.
                */
                for (let i = 0; i < arguments.length; i += 1)
                    // Update > Target
                    (this.lastIndexOf(arguments[i]) < 0) || this.splice(this.lastIndexOf(arguments[i]), 1);

                // Return
                return this
            }
         });

        // Remove Elements
        (typeof Array.prototype.removeElements == 'function') || Object.defineProperty(Array.prototype, 'removeElements', {
            // Value
            value: function removeElements() {
                // Initialization > (Arguments, Target)
                let Arguments = [...arguments],
                    that = this;

                // Function > Remove Element
                function removeElement() {
                    /* Loop
                            Index all elements of Element.
                    */
                    for (let i = 0; i < Arguments.length; i += 1) {
                        // Update > Target
                        (that.indexOf(Arguments[0]) < 0) || that.splice(that.indexOf(Arguments[0]), 1);

                        // Break
                        break
                    };

                    // Function > Remove Element
                    (that.indexOf(Arguments[0]) < 0) || removeElement()
                };
                removeElement();

                // Return
                return this
            }
        });

        // Remove Falsy Elements
        (typeof Array.prototype.removeFalsyElements == 'function') || Object.defineProperty(Array.prototype, 'removeFalsyElements', {
            // Value
            value: function removeFalsyElements() {
                // Return
                return this.filter(Boolean)
            }
         });

        // Remove Repeated Elements
         (typeof Array.prototype.removeRepeatedElements == 'function') || Object.defineProperty(Array.prototype, 'removeRepeatedElements', {
            // Value
            value: function removeRepeatedElements() {
                // Initialization > (Target, Scanned Element, Delete Elements)
                    let that = this,
                        scannedElement = [new (function LapysJSMiscellaneousObject() {})],
                        deleteElements = [];

                /* Loop
                        Index all elements of Target.
                */
                for (let i = 0; i < this.length; i += 1) {
                    /* Loop
                            Index all elements of Scanned Element.
                    */
                    for (let j = 0; j < scannedElement.length; j += 1)
                        // Update > Delete Elements
                        !(scannedElement[j] === this[i] && deleteElements.indexOf(this[i]) < 0) || deleteElements.push(this[i]);

                    // Update > Scanned Elements
                    scannedElement.push(this[i])
                };

                /* Loop
                        Index all elements of Delete Elements
                */
                for (let i = 0; i < deleteElements.length; i += 1)
                    // Update > Target
                    this.removeElements(deleteElements[i]);

                // Return
                return this
            }
         });

        // Remove Truthy Elements
        (typeof Array.prototype.removeTruthyElements == 'function') || Object.defineProperty(Array.prototype, 'removeTruthyElements', {
            // Value
            value: function removeTruthyElements() {
                // Return
                return this.filter(data => {
                    // Return
                    return !data
                })
            }
         });

        // Replace Common Elements
        (typeof Array.prototype.replaceCommonElements == 'function') || Object.defineProperty(Array.prototype, 'replaceCommonElements', {
            // Value
            value: function replaceCommonElements() {
                // Initialization > Data
                let data = this.getCommonElement().clone();

                /* Loop
                        Index all Target's elements.

                    > Update > Target
                */
                for (let i = 0; i < this.length; i += 1)
                    (this[i] !== data) || (this[i] = arguments[0]);

                // Return
                return this
            }
        });

        // Replace Element
        (typeof Array.prototype.replaceElement == 'function') || Object.defineProperty(Array.prototype, 'replaceElement', {
            // Value
            value: function replaceElement() {
                /* Logic
                        If
                            the Argument 0 is within the Array.
                */
                if (this.indexOf(arguments[0]) > -1) {
                    // Target > Splice
                    this.splice(this.indexOf(arguments[0]), 0, arguments[1]);
                    this.splice(this.indexOf(arguments[0]), 1)
                }

                // Return
                return this
            }
        });

        // Replace Element From Back
        (typeof Array.prototype.replaceElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'replaceElementFromBack', {
            // Value
            value: function replaceElementFromBack() {
                /* Logic
                        If
                            the Argument 0 is within the Array.
                */
                if (this.indexOf(arguments[0]) > -1) {
                    // Target > Splice
                    this.splice(this.indexOf(arguments[0]), 0, arguments[1]);
                    this.splice(this.indexOf(arguments[0]), 1)
                }

                // Return
                return this
            }
        });

        // Replace Element From Front
        (typeof Array.prototype.replaceElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'replaceElementFromFront', {
            // Value
            value: function replaceElementFromFront() {
                /* Logic
                        If
                            the Argument 0 is within the Array.
                */
                if (this.lastIndexOf(arguments[0]) > -1) {
                    // Target > Splice
                    this.splice(this.lastIndexOf(arguments[0]), 0, arguments[1]);
                    this.splice(this.lastIndexOf(arguments[0]), 1)
                }

                // Return
                return this
            }
        });

        // Replace Elements
        (typeof Array.prototype.replaceElements == 'function') || Object.defineProperty(Array.prototype, 'replaceElements', {
            // Value
            value: function replaceElements() {
                /* Loop
                        While
                            The Argument 0 is still detected.

                    > Update > Target
                */
                while (this.indexOf(arguments[0]) > -1) {
                    // Target > Splice
                    this.splice(this.indexOf(arguments[0]), 0, arguments[1]);
                    this.splice(this.indexOf(arguments[0]), 1)
                }

                // Return
                return this
            }
        });

        // Replace Falsy Elements
        (typeof Array.prototype.replaceFalsyElements == 'function') || Object.defineProperty(Array.prototype, 'replaceFalsyElements', {
            // Value
            value: function replaceFalsyElements() {
                // Initialization > Array
                let array = this.clone();

                /* Loop
                        Index all elements of Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    array[i] = !!array[i];

                /* Loop
                        While
                            A 'truthy' value is still detected.
                */
                while (array.indexOf(!!0) > -1) {
                    /* Update > (Target, Array)
                            --- WARN ---
                                @lapys: Update the Array after the Target to prevent logical runtime errors and to prevent an infinite loop.
                    */
                    this.splice(array.indexOf(!!0), 1);
                    this.splice(array.indexOf(!!0), 0, arguments[0]);
                    array[array.indexOf(!!0)] = !0
                }

                // Return
                return this
            }
        });

        // Replace Repeated Elements
        (typeof Array.prototype.replaceRepeatedElements == 'function') || Object.defineProperty(Array.prototype, 'replaceRepeatedElements', {
            // Value
            value: function replaceRepeatedElements() {
                // Initialization > Array
                let array = this.clone();

                /* Loop
                        Index all members of Array.

                    > Update > Target
                */
                for (let i = 0; i < array.getRepeatedElements().length; i += 1)
                    this.replaceElements(array.getRepeatedElements()[i], arguments[0]);

                // Return
                return this
            }
        });

        // Replace Truthy Elements
        (typeof Array.prototype.replaceTruthyElements == 'function') || Object.defineProperty(Array.prototype, 'replaceTruthyElements', {
            // Value
            value: function replaceTruthyElements() {
                // Initialization > Array
                let array = this.clone();

                /* Loop
                        Index all elements of Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    array[i] = !!array[i];

                /* Loop
                        While
                            A 'truthy' value is still detected.
                */
                while (array.indexOf(!0) > -1) {
                    /* Update > (Target, Array)
                            --- WARN ---
                                Update the Array after the Target to prevent logical runtime errors.
                                Update the Array as well to prevent an infinite loop.
                    */
                    this.splice(array.indexOf(!0), 1);
                    this.splice(array.indexOf(!0), 0, arguments[0]);
                    array[array.indexOf(!0)] = !!0
                }

                // Return
                return this
            }
        });

    /* Function Data */
        /* Get Arguments
                --- UPDATE REQUIRED ---
                    @lapys: Needs improvement on syntax encoding.

                --- WARN ---
                    @lapys: This function is not meant to be used in production environments, yet...
        */
        (typeof Function.prototype.getArguments == 'function') || (Function.prototype.getArguments = function getArguments() {
            // Initialization > (Random, Data)
            let random = rand(),
                data = `${String(this).replace(/\.\.\./g, `lapysjs_horizontal-ellipsis${String(random).slice(2)}`).replace(/\/\*([a-z]|[A-Z]|[0-9]|[\:\[\]\<\=\>\'\"\`\?\@\!\#\%\&\(\)\+\,\-\.\;\$\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\*\//, '').replace(/('|"|`)([a-z]|[A-Z]|[0-9]|[\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}('|"|`)/g, data => {
                    // Return
                    return data[0] + data.slice(data[0].length, -data[~-data.length].length).replace(/()/g, `::lapysjs_*${random}::`).replace(/,/g, `::lapysjs_comma${random}::`) + data[~-data.length]
                })}`.split(/,/g);

            /* Loop
                    Index all Data.

                > Update > Data
            */
            for (let i = 0; i < data.length; i += 1)
                data[i] = data[i].replace(RegExp(`::lapysjs_comma${random}::`, 'g'), ',').replace(RegExp(`::lapysjs_\\*${random}::`, 'g'), '').trim();

            // Update > Data
            data[0] = `${data[0]}-`.getAfterChar('(').replace(/  /g, ' ').replace(/  /g, ' ').getBeforeChar(',').getBeforeChar('-');
            !data[0].replace(/ /g, '').startsWith(')=>') || (data[0] = data[0].getBeforeChar(') =>'));
            !data[0].replace(/ /g, '').startsWith('){') || (data[0] = data[0].getBeforeChar(') {'));

            /* Error Handling
                    --- NOTE ---
                        This particular module is only for special cases
                        of the first argument being parsed not being valid.
            */
            try {
                // Execution
                eval(`let ${data[0]}`)
            }

            catch (error) {
                // Update > Data
                data[0] = data[0].getBeforeChar(')')
            }

            /* Update > Data
                    --- NOTE ---
                        The last argument parsed through in Data
                        has issues when the function is not an arrow function.
            */
            (data[0].indexOf('=>') < 0) || (data[0] = (data[0].getBeforeChar('=>') + '=>' + data[0].getAfterChar('=>').getBeforeChar('}') + '}').getBeforeChar('}') + '}');
            !data[1] || (data[~-data.length] = data[~-data.length].replace(/  /g, ' ').replace(/  /g, ' ').getBeforeChar(') {', !0).getBeforeChar(') =>', !0));

            // Error Handling
            try {
                // Execution
                eval(`let ${data[~-data.length]}`)
            }

            catch (error) {
                // Initialization
                let string = String(this);

                /* Loop
                        Index all cloned.Data.

                    > Update > String
                */
                for (let i = 0; i < [...data].slice(2).length; i += 1)
                    string = string.replace(',', '');

                // Update > Data
                data[~-data.length] = string.getAfterChar(',').replace(/ /g, `::lapysjs_${random}::`).getBeforeChar(`)::lapysjs_${random}::{`).replace(RegExp(`::lapysjs_${random}::`, 'g'), ' ').trim()
            }

            /* Loop
                    Index all Data.

                > Update > Data
            */
            for (let i = 0; i < data.length; i += 1)
                data[i] = data[i].replace(RegExp(`lapysjs_horizontal-ellipsis${String(random).slice(2)}`, 'g'), '...');

            // Return
            return data
        });

        /* Get Body
                --- UPDATE REQUIRED ---
                    @lapys: Needs improvement on syntax encoding.

                --- WARN ---
                    @lapys: This function is not meant to be used in production environments, yet...
        */
        (typeof Function.prototype.getBody == 'function') || (Function.prototype.getBody = function getBody() {
            // Initialization > Data
            let data = String(this).replace(/,( ){0,}/g, ',').replace(String(this.getArguments()), '');

            // Update > Data
            !data.replace(/\{([a-z]|[A-Z]|[0-9]|[\:\[\]\<\=\>\'\"\`\?\@\!\*\/\#\%\&\(\)\+\,\-\.\;\$\^\_\|\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\«\»\ ]|){0,}/g, '{}').match(/=\>( ){0,}([a-z]|_|\$|\{)/g) || (data = data.getAfterChar('=>').trim());
            data = String((data[0] === '{') || '{').replace('true', '') + data + String((data[~-data.length] === '}') || '}').replace('true', '');

            if (data.slice(data[0].length).startsWith('function')) {
                data = data.getAfterChar('{');
                data = `{${data.getAfterChar('{')}`
            }

            // Return
            return data.slice(data[0].length, -data[~-data.length].length).trim()
        });

    /* Object Data */
        // Clone
        (typeof Object.prototype.clone == 'function') || Object.defineProperty(Object.prototype, 'clone', {
            // Value
            value: function clone() {
                // Initialization > Target
                let that = this || window;

                /* Logic
                        [if:else if:else statement]
                */
                if (
                    (that || []).constructor === Array ||
                    (that || []).constructor === HTMLCollection ||
                    (that || []).constructor === NodeList
                )
                    /* Logic
                            If
                                Argument 0 is !!0.

                        > Return
                    */
                    if (!arguments[0])
                        return [...that];

                    else {
                        // Initialization > Array
                        let array = [];

                        /* Loop
                                Index all Target.

                            > Update > Array
                        */
                        for (let i = 0; i < that.length; i += 1)
                            array.push(that);

                        // Return
                        return array
                    }

                else if ((that || []).constructor === Boolean)
                    // Return
                    return !!that;

                else if ((that || []).constructor === Function) {
                    /* Logic
                            If
                                Argument 0 is !!0.
                    */
                    if (!arguments[0])
                        // Error Handling
                        try {
                            // Return
                            return that.bind({})
                        }

                        catch (error) {}

                    // Return
                    return func(that.name || String(that).getBeforeChar('(').trim().replace(/[a-z]{0,} /g, '').replace(/\bfunction\b/, ''), that.getArguments(), that.getBody())
                }

                else if (
                    (
                        (that || []).constructor.name.startsWith('HTML') &&
                        (that || []).constructor.name.endsWith('Element')
                    ) ||
                    ((that || []).outerHTML || 'l')[0] === '<'
                ) {
                    // Initialization > Clone
                    let clone = that.cloneNode(!!0);

                    /* Logic
                            If
                                the Target has Events.
                    */
                    if (that.getEvents())
                        /* Loop
                                [for statement]
                        */
                        for (let i = 0; i < Object.keys(that.getEvents()).length; i += 1)
                            /* Loop
                                    [for statement]

                                > Event > Clone > [Target > Get Event]
                            */
                            for (let j = 0; j < that.getEvents()[Object.keys(that.getEvents())[i]].length; j += 1)
                                clone.setEvent(
                                    Object.keys(that.getEvents())[i],
                                    that.getEvents()[Object.keys(that.getEvents())[i]][j].listener,
                                    that.getEvents()[Object.keys(that.getEvents())[i]][j].useCapture,
                                    that.getEvents()[Object.keys(that.getEvents())[i]][j].wantsUntrusted
                                );

                    // Modification > Clone > Inner HTML
                    clone.innerHTML = that.innerHTML;

                    /* Loop
                            Index all the element's attributes.

                        > Modification > Clone > [...]
                    */
                    for (let i = 0; i < that.attributes.length; i += 1)
                        clone.setAttributeNode(that.attributes[i].cloneNode(!0));

                    // Return
                    return clone
                }

                else if ((that || []).constructor === Number)
                    // Return
                    return +String(that);

                else if ((that || []).constructor === RegExp)
                    // Return
                    return RegExp(String(that).slice('/'.length, -'/'.length));

                else if ((that || []).constructor === String)
                    // Return
                    return ` ${that}`.slice(' '.length);

                else if (
                    (that || []).constructor === Object ||
                    (that || []).__proto__.__proto__.constructor === Object ||
                    isObject(that, !0)
                ) {
                    // Error Handling
                    try {
                        // Return
                        return Object.assign(that, {})
                    }

                    catch (error) {
                        // Error Handling
                        try {
                            // Initialization > Clone
                            let clone = {};

                            /* Loop
                                    Index all elements of the Target.

                                > Update > Clone
                            */
                            for (let i = 0; i < Object.keys(that).length; i += 1)
                                clone[Object.keys(that)[i]] = that[Object.keys(that)[i]];

                            // Return
                            return clone
                        }

                        catch (error) {
                            // Error Handling
                            try {
                                /* Logic
                                        If
                                            Target is not Date.

                                    > Return
                                */
                                if ((that || []).constructor.name !== 'Date')
                                    return JSON.parse(JSON.stringify(that));

                                else
                                    return new Date(JSON.parse(JSON.stringify(that)))
                            }

                            catch (error) {
                                // Lapys JS > Error
                                LapysJS.error(`The 'clone' method cannot process that object.`)
                            }
                        }
                    }
                }

                else
                    // Lapys JS > Error
                    LapysJS.error(`The 'clone' method only clones primitive values.`)
            }
        });

        // Concatenate
        (typeof Object.prototype.concat == 'function') || Object.defineProperty(Object.prototype, 'concat', {
            // Value
            value: function concat() {
                /*
                        --- NOTE ---
                            @lapys: Minified polyfill for the 'Object.assign' method.
                */
                (typeof Object.assign=='function')||Object.defineProperty(Object,'assign',{configurable:!0,value:function assign(){'use strict';if(arguments[0]==null)throw TypeError('Cannot convert undefined or null to object');var to=Object(arguments[0]);for(var index=1;index<arguments.length;index+=1){var nextSource=arguments[index];if(nextSource!=null)for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey))to[nextKey]=nextSource[nextKey]}return to}},writable: !0});

                // Return
                return Object.assign(this, arguments[0] || {});
            }
        });

        // Define
        (typeof Object.prototype.def == 'function') || Object.defineProperty(Object.prototype, 'def', {
            // Value
            value: function defineProperty() {
                /* Initialization > (Arguments, Data)
                        --- NOTE ---
                            @lapys: Data (Argument 0) might still need to be altered.
                */
                let Arguments = [...arguments],
                    data = arguments[0];

                // Update > Data
                (typeof data != 'number') || (data = String(data));

                /* Logic
                        If
                            Argument 2 is undefined.

                        > Object > Define Property
                */
                if (!arguments[2])
                    Object.defineProperty(this || window, String(data), new (function Object() {
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (
                            (Arguments[1] || []).get ||
                            (Arguments[1] || []).set
                        ) {
                            // Modification > Target
                                // Configurable
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (
                                        (Arguments[1] || []).configurable !== undefined ||
                                        (Arguments[1] || []).get ||
                                        (Arguments[1] || []).set
                                    )
                                        this.configurable = (Arguments[1] || []).configurable;

                                    else
                                        this.configurable = !0;

                                // Enumerable
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (
                                        (Arguments[1] || []).enumerable !== undefined ||
                                        (Arguments[1] || []).get ||
                                        (Arguments[1] || []).set
                                    )
                                        this.enumerable = (Arguments[1] || []).enumerable;

                                    else
                                        this.enumerable = !0;

                                // Get
                                this.get = (Arguments[1] || []).get;

                                // Set
                                this.set = (Arguments[1] || []).set
                        }

                        else if (Arguments.length > 0) {
                            // Error Handling
                            try {
                                // Value
                                this.value = 'value' in Arguments[1] ? (Arguments[1] || []).value : Arguments[1]
                            }

                            catch (error) {
                                // Value
                                this.value = Arguments[1]
                            }

                            // Writable
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ((Arguments[1] || []).writable !== undefined)
                                    this.writable = (Arguments[1] || []).writable;

                                else
                                    this.writable = !0
                        }
                    }));

                else
                    Object.defineProperty(this || window, data, arguments[1]);

                // Return
                return (this || window)[String(data)]
            }
        });

        // Empty
        (typeof Object.prototype.empty == 'function') || Object.defineProperty(Object.prototype, 'empty', {
            // Value
            value: function empty() {
                // Return
                return typeof this == 'number' ? !this : !Object.keys(this)[0] || !!0
            }
        });

        // Keys
        (typeof Object.prototype.keys == 'function') || Object.defineProperty(Object.prototype, 'keys', {
            // Value
            value: function keys() {
                // Return
                return arguments.length > 0 ? Object.keys(this || window)[+String(arguments[0]).replace(/ /g, '')] : Object.keys(this || window)
            }
        });

        // Name
        Object.prototype.__name__ || Object.defineProperty(Object.prototype, '__name__', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function __name__() {
                // Return
                return this.constructor.name
            },

            /* Set
                    -- CONSIDER --
                        @lapys: Create a 'setter' for SaveFrom.Net`s tampermonkey`s web browser extension.
            */
            set: function __name__() {}
        });

        // Undefine
        (typeof Object.prototype.undef == 'function') || Object.defineProperty(Object.prototype, 'undef', {
            // Value
            value: function undefine() {
                /* Initialization > Data
                        --- NOTE ---
                            @lapys: Data could still be manipulated later on.
                */
                let data = String(arguments[0]);

                // Error Handling
                try {
                    // Deletion
                    delete (this || window)[data];
                    !(this || window)[data] || ((this || window)[data] = void 0)
                }

                catch (error) {
                    // Deletion
                    (this || window)[data] = void 0
                }
            }
        });

        // Values
        (typeof Object.prototype.values == 'function') || Object.defineProperty(Object.prototype, 'values', {
            // Value
            value: function values() {
                // Return
                return arguments.length > 0 ? Object.values(this || window)[+String(arguments[0]).replace(/ /g, '')] : Object.values(this || window)
            }
        });

        /* Lapys
                --- UPDATE REQUIRED ---
                    This property should return the caller of
                    a Function just as
                    the 'event' parameter returns the Event of an event handler/ listener.
        */
        Object.defineProperty(Function.prototype, 'lapys', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function lapys() {
                // Return
                return this.caller || window
            }
        });

    /* String Data */
        // Capitalize
        (typeof String.prototype.capital == 'function') || Object.defineProperty(String.prototype, 'capital', {
            // Value
            value: function capital() {
                // Return
                return this.replace(/\b\w/g, data => {
                    // Return
                    return data.toUpperCase()
                })
            }
        });

        // Count
        (typeof String.prototype.count == 'function') || Object.defineProperty(String.prototype, 'count', {
            // Value
            value: function count() {
                // Return
                return !!this ? ((this.match(RegExp(String(arguments[0]).replace(/(\(|\)|\{|\}|\:|\<|\>|\[|\]|\.|\+|\*|\?|\\|\-|&|\$)/g, '\\$&'), 'g')) || []).length || 0) : NaN
            }
        });

        // First Character
        String.prototype.firstChar || Object.defineProperty(String.prototype, 'firstChar', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function firstChar() {
                // Return
                return this[0]
            }
        });

        // Get After Character/ Text
        (typeof String.prototype.getAfterChar == 'function') || (String.prototype.getAfterChar = function getAfterChar() {
            /* Logic
                    Switch Argument 0 data type case to
                        'number' and 'string'.
            */
            switch (typeof arguments[0]) {
                // Number
                case 'number':
                    // Return
                    return this.slice(arguments[0]);
                    break;

                // String
                case 'string':
                    // Return
                    return (arguments[1] ? this.lastIndexOf : this.indexOf).call(this, arguments[0]) > -1 ? this.slice((arguments[1] ? this.lastIndexOf : this.indexOf).call(this, arguments[0]) + arguments[0].length) : ''
            }
        });

        // Get Before Character/ Text
        (typeof String.prototype.getBeforeChar == 'function') || (String.prototype.getBeforeChar = function getBeforeChar() {
            /* Logic
                    Switch Argument 0 data type case to
                        'number' and 'string'.

                > Return
            */
            switch (typeof arguments[0]) {
                // Number
                case 'number':
                    return this.slice(0, arguments[0]);
                    break;

                // String
                case 'string':
                    // Return
                    return (arguments[1] ? this.lastIndexOf : this.indexOf).call(this, arguments[0]) > -1 ? this.slice(0, (arguments[1] ? this.lastIndexOf : this.indexOf).call(this, arguments[0])) : this
            }
        });

        // Has Text
        (typeof String.prototype.hasText == 'function') || Object.defineProperty(String.prototype, 'hasText', {
            // Value
            value: function hasText() {
                // Initialization > Data
                let data = [];

                /* Loop
                        Index all Arguments.

                    > Update > Data
                */
                for (let i = 0; i < arguments.length; i += 1)
                    data.push(!((this.indexOf(str(arguments[i])) < 0) || !!0));

                // Return
                return data.indexOf(!!0) < 0
            }
        });

        // HTML
        String.prototype.html || Object.defineProperty(String.prototype, 'html', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function html() {
                /* Error Handling
                        --- WARN ---
                            @lapys: This is necessary. Trust me.
                */
                try {
                    // Return
                    return document.createElement(this)
                }

                catch (error) {
                    // LapysJS > Error
                    LapysJS.error(error)
                }
            }
        });

        /* Is Registered
                --- NOTE ---
                    @lapys: Check if an Element is registered.
        */
        String.prototype.isRegistered || Object.defineProperty(String.prototype, 'isRegistered', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function isRegistered() {
                // Return
                return document.createElement(this).toString().slice(0, -']'.length).endsWith('Element') &&
                    (document.createElement(this).toString().indexOf('HTMLUnknownElement') < 0) &&
                    (document.createElement(this).constructor !== HTMLElement)
            }
        });

        // Last Character
        String.prototype.lastChar || Object.defineProperty(String.prototype, 'lastChar', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function getLastChar() {
                // Return
                return this[~-this.length]
            }
        });

        /* Lower
                --- NOTE ---
                    @lapys: Shorter form of 'String.toLowerCase' method.
        */
        (typeof String.prototype.lower == 'function') || (String.prototype.lower = function lower() {
            // Return
            return this.toLowerCase()
        });

        // Reverse
        (typeof String.prototype.reverse == 'function') || Object.defineProperty(String.prototype, 'reverse', {
            // Value
            value: function reverse() {
                // Return
                return [...this].reverse().join('')
            }
        });

        // Remove Character/ Text
        (typeof String.prototype.removeChar == 'function') || Object.defineProperty(String.prototype, 'removeChar', {
            // Value
            value: function removeChar() {
                // Return
                let data = ` ${this}`.slice(' '.length);

                /* Logic
                        If there are Arguments.
                */
                if (arguments[0] && arguments.length > 0)
                    /* Loop
                            Index all Arguments.

                        > Update > Data
                    */
                    for (let i = 0; i < arguments.length; i += 1)
                        data = data.replace(arguments[i].constructor === RegExp ? arguments[i] : RegExp(arguments[i]), '');

                // Return
                return data
            }
        });

        // To Array
        (typeof String.prototype.toArray == 'function') || Object.defineProperty(String.prototype, 'toArray', {
            // Value
            value: function toArray() {
                // Initialization > Random
                let random = rand();

                // Error Handling
                try {
                    // Return
                    return eval(`[${this.replace(/,/g, `::lapysjs_comma${random}::`).replace(RegExp(arguments[0] || ',', 'g'), ',').replace(RegExp(`::lapysjs_comma${random}::`, 'g'), ',')}]`)
                }

                catch (error) {
                    // Error Handling
                    try {
                        // LapysJS > Warn
                        LapysJS.warn(error);

                        // Initialization > Data
                        let data = this.replace(/\'([a-z]|[A-Z]|[0-9]|[\"\`\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}\'/g, data => {
                            // Return
                            return data.replace(/,/g, `::lapysjs_comma${random}::`)
                        }).replace(/\"([a-z]|[A-Z]|[0-9]|[\'\`\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}\"/g, data => {
                            // Return
                            return data.replace(/,/g, `::lapysjs_comma${random}::`)
                        }).replace(/\`([a-z]|[A-Z]|[0-9]|[\'\"\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}\`/g, data => {
                            // Return
                            return data.replace(/,/g, `::lapysjs_comma${random}::`)
                        }).replace(/, /g, ',').split(/,/g).map(data => {
                            // Return
                            return data.toString().replace(/[0-9]/g, '').replace(/\./g, '') === '' ? Number(data) : (data => {
                                // Error Handling
                                try {
                                    // Return
                                    return eval(data).constructor(data)
                                }

                                catch (error) {
                                    // Return
                                    return String(data)
                                }
                            })(data)
                        });

                        /* Loop
                                Index all Data.

                            > Update > Data
                        */
                        for (let i = 0; i < data.length; i += 1)
                            typeof data[i] == 'string' ? data[i] = data[i].replace(RegExp(`::lapysjs_comma${random}::`, 'g'), ',') : !!0;

                        // Return
                        return data
                    }

                    catch (error) {
                        LapysJS.error(error)
                    }
                }
            }
        });

        /* To Object
                --- UPDATE REQUIRED ---
                    Should be able to parse more complex JSON objects.
        */
        (typeof String.prototype.toObject == 'function') || Object.defineProperty(String.prototype, 'toObject', {
            // Value
            value: function toObject() {
                // Error Handling
                try {
                    // Initialization > Target
                    let that = ` ${this}`.slice(' '.length);

                    /* Logic
                            [if:else if:else statement]

                            --- NOTE ---
                                Basically correcting any syntax errors
                                with the basic JSON Object structure.

                        > Update > Data
                    */
                    if (
                        this.indexOf('{') > -1 &&
                        this.indexOf('}') > ~-this.indexOf('{') &&
                        this.indexOf(':') > -1
                    )
                        that = that.slice('{'.length, -'}'.length);

                    else if (
                        this.indexOf('{') > -1 &&
                        this.indexOf(':') > -1
                    )
                        that = that.slice('{'.length);

                    else if (
                        this.indexOf('}') > -1 &&
                        this.indexOf(':') > -1
                    )
                        that = that.slice(0, -'}'.length);

                    // Return
                    return JSON.parse(`{${(() => {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all ',' characters in That.

                                > Update > Array
                            */
                            for (let i = 0; i < that.split(/,/g).length; i += 1)
                                array.push(`'${that.split(/,/g)[i].trim().getBeforeChar(':').replace(/\'/g, '')}':${that.split(/,/g)[i].trim().getAfterChar(':')}`);

                            /* Logic
                                    If
                                        [if:else if:else statement]

                                > Return
                            */
                            if (array[0] !== '\'\':')
                                return String(array).replace(/'/g, '"');

                            // Return
                            return ''
                        })()}}`)
                }

                catch (error) {
                    // Error Handling
                    try {
                        // Return
                        return JSON.parse(this)
                    }

                    catch (error) {
                        // Lapys JS > Error
                        LapysJS.error(error)
                    }
                }
            }
        });

        // To String Array
        (typeof String.prototype.toStringArray == 'function') || Object.defineProperty(String.prototype, 'toStringArray', {
            // Value
            value: function toStringArray() {
                // Initialization > Random
                let random = rand();

                // Return
                return this.replace(/\'([a-z]|[A-Z]|[0-9]|[\"\`\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}\'/g, data => {
                    // Return
                    return data.replace(RegExp(String(arguments[0]) || ',', 'g'), `::lapysjs_comma${random}::`)
                }).replace(/\"([a-z]|[A-Z]|[0-9]|[\'\`\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}\"/g, data => {
                    // Return
                    return data.replace(RegExp(String(arguments[0]) || ',', 'g'), `::lapysjs_comma${random}::`)
                }).replace(/\`([a-z]|[A-Z]|[0-9]|[\'\"\:\[\]\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){1,}\`/g, data => {
                    // Return
                    return data.replace(RegExp(String(arguments[0]) || ',', 'g'), `::lapysjs_comma${random}::`)
                }).replace(RegExp(`${arguments[0] || ','} `, 'g'), arguments[0] || ',').replace(RegExp(`::lapysjs_comma${random}::`, 'g'), arguments[0] || ',').split(RegExp(String(arguments[0]) || ',', 'g'));
            }
        });

        // Trim Character
        (typeof String.prototype.trimChar == 'function') || Object.defineProperty(String.prototype, 'trimChar', {
            // Value
            value: function trimChar() {
                // Initialization > Data
                let data = (' ' + this).slice(1);

                /* Logic
                        [if:else if:else statement]
                */
                if (arguments.length > 0) {
                    /* Loop
                            [do:while statement]

                        > Update > Data
                    */
                    while (data.startsWith(String(arguments[0])))
                        data = data.slice(String(arguments[0]).length);

                    /* Loop
                            [do:while statement]

                        > Update > Data
                    */
                    while (data.endsWith(String(arguments[0])))
                        data = data.slice(0, -String(arguments[0]).length)
                }

                // Return
                return String(data)
            }
        });

        // Trim Left Character
        (typeof String.prototype.trimLeftChar == 'function') || Object.defineProperty(String.prototype, 'trimLeftChar', {
            // Value
            value: function trimLeftChar() {
                // Initialization > Data
                let data = (' ' + this).slice(1);

                /* Logic
                        [if:else if:else statement]
                */
                if (arguments.length > 0) {
                    /* Loop
                            [do:while statement]

                        > Update > Data
                    */
                    while (data.startsWith(String(arguments[0])))
                        data = data.slice(String(arguments[0]).length)
                }

                // Return
                return String(data)
            }
        });

        // Trim Right Character
        (typeof String.prototype.trimRightChar == 'function') || Object.defineProperty(String.prototype, 'trimRightChar', {
            // Value
            value: function trimRightChar() {
                // Initialization > Data
                let data = (' ' + this).slice(1);

                /* Logic
                        [if:else if:else statement]
                */
                if (arguments.length > 0) {
                    /* Loop
                            [do:while statement]

                        > Update > Data
                    */
                    while (data.endsWith(String(arguments[0])))
                        data = data.slice(0, -String(arguments[0]).length)
                }

                // Return
                return String(data)
            }
        });

        /* Upper
                --- NOTE ---
                    @lapys: Shorter form of 'String.toUpperCase' method.
        */
        (typeof String.prototype.upper == 'function') || (String.prototype.upper = function upper() {
            // Return
            return this.toUpperCase()
        });

    /* Global Object Test
            Logic
                [if:else if:else statement]
    */
    if (
        window &&
        !LapysJS.executed &&
        (
            document.querySelector('script[src*="lapys.js"') ||
            document.querySelector('script[src*="lapys.min.js"')
        )
    ) {
        /* Function */
            /* Create Random Alphanumeric String
                    --- NOTE ---
                        @lapys: Used for creating random String sets.
                            Mostly used in Regular Expressions within the following modules.
            */
            let createRandomAlphaNumericString=function createRandomAlphaNumericString(length=1,allowSpecialCharacters=!!0,allowNumericCharacters=!!0){if(!allowSpecialCharacters){let characterArray='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`-=[]\\;\',./*!@#$%^&()_+{}|:"<>?',string='';for(let i=0;i<length;i+=1)string+=characterArray[parseInt(Math.random()*characterArray.length)];return string}else if(allowSpecialCharacters&&!allowNumericCharacters){let characterArray='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',string='';for(let i=0;i<length;i+=1)string+=characterArray[parseInt(Math.random()*characterArray.length)];return string}else{let characterArray='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',string='';for(let i=0;i<length;i+=1)string+=characterArray[parseInt(Math.random()*characterArray.length)];return string}},

            /* Run Interval
                    --- NOTE ---
                        @lapys: Used for executing functions within a repeating interval of time like the 'setInterval'
                            function but also invokes the function parsed to it before the interval clocks.

                            Also, it's mostly used for the Dynamic Time elements.
            */
            runInterval=function runInterval(){if(typeof arguments[0]=='function'){arguments[0]();setInterval(arguments[0],parseFloat(arguments[1]))}},

        /* Initialization */
            // (Complete, Random, Alphabet) String
            completeString = '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/0123456789\:\;\<\=\>\?\@\A\B\C\D\E\F\G\H\I\J\K\L\M\N\O\P\Q\R\S\T\U\V\W\X\Y\Z\[\]\^\_\`\ab\c\d\e\f\g\h\i\j\k\l\m\n\o\p\q\r\s\tu\vwx\y\z\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\$\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ',
                randomString = `lapysjs${createRandomAlphaNumericString(parseInt(Math.abs('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`-[]/;,.*!@#$%^&()_+{}|:<>?'.length - ((new Date).getMilliseconds() / 10))))}`.replace(/\\/g, ''),
                alphabetString = randomString.replace(/[`\-=\[\]\\;',\./\*!@#\$%^\&\(\)_\+\{\}|\:"\<\>?]/g, '');

        /* Custom Data */
            /* App
                    --- NOTE ---
                        @lapys: Unless the Application is explicitly made not to be defined, it is.
            */
            !(!constructor.prototype.app && !document.isNotApp) || Object.defineProperty(constructor.prototype, 'app', {
                // Value
                value: new (function ApplicationInformation() {
                    // Initialization > (Name, Version)
                    let name = '',
                        version = '0.0.1';

                    // Modification > Target
                        // App
                        this.constructor.prototype.app = this;

                        // Author
                        Object.defineProperty(this.constructor.prototype, 'author', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getAuthor() {
                                // Return
                                return (document.querySelector('meta[name=author') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setAuthor() {
                                // Modification
                                (document.querySelector('meta[name=author') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[name=author') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' name=author>`)
                            }
                        });

                        // Cache Control
                        Object.defineProperty(this.constructor.prototype, 'cacheControl', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getCacheControl() {
                                // Return
                                return (document.querySelector('meta[http-equiv=cache-control') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setCacheControl() {
                                // Modification
                                (document.querySelector('meta[http-equiv=cache-control') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[http-equiv=cache-control') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' http-equiv=cache-control>`)
                            }
                        });

                        // Character Set
                        Object.defineProperty(this.constructor.prototype, 'charset', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getCharset() {
                                // Return
                                return (document.querySelector('meta[charset') || document.createElement('meta')).getAttribute('charset') || document.characterSet || ''
                            },

                            // Set
                            set: function setCharset() {
                                // Modification
                                (document.querySelector('meta[charset') || document.createElement('meta')).setAttribute('charset', arguments[0]);
                                document.querySelector('meta[charset') || (document.head.innerHTML += `\r<meta charset='${arguments[0]}'>`)
                            }
                        });

                        // Connection
                        !navigator.connection || Object.defineProperty(this.constructor.prototype, 'connection', {value: navigator.connection});

                        // Cookies
                        this.cookies = document.cookie;

                        // Copyright
                        Object.defineProperty(this.constructor.prototype, 'copyright', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getCopyright() {
                                // Return
                                return (document.querySelector('meta[name=copyright') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setCopyright() {
                                // Modification
                                (document.querySelector('meta[name=copyright') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[name=copyright') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' name=copyright>`)
                            }
                        });

                        // Description
                        Object.defineProperty(this.constructor.prototype, 'description', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getDescription() {
                                // Return
                                return (document.querySelector('meta[name=description') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setDescription() {
                                // Modification
                                (document.querySelector('meta[name=description') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[name=description') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' name=description>`)
                            }
                        });

                        // Device Pixel Ratio
                        window.devicePixelRatio || (this.dpRatio = devicePixelRatio);

                        // Do Not Track
                        !navigator.doNotTrack || (this.doNotTrack = navigator.doNotTrack);

                        // Keywords
                        Object.defineProperty(this.constructor.prototype, 'keywords', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getKeywords() {
                                // Return
                                return (document.querySelector('meta[name=keywords') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setKeywords() {
                                // Modification
                                (document.querySelector('meta[name=keywords') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[name=keywords') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' name=keywords>`)
                            }
                        });

                        // Name
                        Object.defineProperty(this.constructor.prototype, 'name', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getName() {
                                // Return
                                return window.name || document.title
                            },

                            // Set
                            set: function setName() {
                                // Modification > Window > Name
                                window.name = arguments[0]
                            }
                        });

                        // Navigator
                        Object.defineProperty(this.constructor.prototype, 'navigator', {value: navigator});

                        // Languages
                        this.lang = navigator.languages || [];

                        // Online
                        !navigator.onLine || Object.defineProperty(this, 'online', {value: navigator.onLine});

                        // Platform
                        Object.defineProperty(this, 'platform', {value: navigator.platform});

                        // Plug-Ins
                        Object.defineProperty(this, 'plugins', {value: navigator.plugins});

                        // Robots
                        Object.defineProperty(this.constructor.prototype, 'robots', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getRobots() {
                                // Return
                                return (document.querySelector('meta[name=robots') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setRobots() {
                                // Modification
                                (document.querySelector('meta[name=robots') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[name=robots') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' name=robots>`)
                            }
                        });

                        // Theme Color
                        Object.defineProperty(this.constructor.prototype, 'themeColor', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getThemeColor() {
                                // Return
                                return (document.querySelector('meta[name=theme-color') || document.createElement('meta')).content
                            },

                            // Set
                            set: function setThemeColor() {
                                // Modification
                                (document.querySelector('meta[name=theme-color') || document.createElement('meta')).content = arguments[0];
                                document.querySelector('meta[name=theme-color') || (document.head.innerHTML += `\r<meta content='${arguments[0]}' name=theme-color>`)
                            }
                        });

                        // User Agent
                        Object.defineProperty(this, 'userAgent', {value: navigator.userAgent});

                        // Vendor
                        Object.defineProperty(this, 'vendor', {value: navigator.vendor});

                        // Viewport
                        Object.defineProperty(this, 'viewport', {value: {}});
                            // Height
                            Object.defineProperty(this.viewport, 'height', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getHeight() {
                                    // Return
                                    return ((document.querySelector('meta[name=viewport') || document.createElement('meta')).content || '').getAfterChar('height').getBeforeChar(',').replace('=', '') || ''
                                },

                                // Set
                                set: function setHeight() {
                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'height' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/height( |){0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += `, height=${arguments[0]}`;

                                            else
                                                document.querySelector('meta[name=viewport').content = `height=${arguments[0]}`;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/height( |){0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, `height=${arguments[0]}`);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content='height=${arguments[0]}' name=viewport>`
                                }
                            });

                            // Initial Scale
                            Object.defineProperty(this.viewport, 'initialScale', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getInitialScale() {
                                    // Return
                                    return parseFloat(((document.querySelector('meta[name=viewport') || document.createElement('meta')).content || '').getAfterChar('initial-scale').getBeforeChar(',').replace('=', '')) || ''
                                },

                                // Set
                                set: function setInitialScale() {
                                    // Update > Data
                                    !arguments[0] .toFixed || (arguments[0] = arguments[0] .toFixed(1) || arguments[0]);
                                    arguments[0] = String(arguments[0]);

                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'initial-scale' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/initial-scale( |){0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += `, initial-scale=${arguments[0]}`;

                                            else
                                                document.querySelector('meta[name=viewport').content = `initial-scale=${arguments[0]}`;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/initial-scale( |){0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, `initial-scale=${arguments[0]}`);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content='initial-scale=${arguments[0]}' name=viewport>`
                                }
                            });

                            // Maximum Scale
                            Object.defineProperty(this.viewport, 'maximumScale', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getMaximumScale() {
                                    // Return
                                    return parseFloat(((document.querySelector('meta[name=viewport') || document.createElement('meta')).content || '').getAfterChar('maximum-scale').getBeforeChar(',').replace('=', '')) || ''
                                },

                                // Set
                                set: function setMaximumScale() {
                                    // Update > Data
                                    !arguments[0] .toFixed || (arguments[0] = arguments[0] .toFixed(1) || arguments[0]);
                                    arguments[0] = String(arguments[0]);

                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'maximum-scale' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/maximum-scale( |){0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += `, maximum-scale=${arguments[0]}`;

                                            else
                                                document.querySelector('meta[name=viewport').content = `maximum-scale=${arguments[0]}`;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/maximum-scale( |){0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, `maximum-scale=${arguments[0]}`);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content='maximum-scale=${arguments[0]}' name=viewport>`
                                }
                            });

                            // Minimal UI
                            Object.defineProperty(this.viewport, 'minimalUI', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getMinimalUI() {
                                    /* Return
                                            --- UPDATE REQUIRED ---
                                                This still needs a bit of tweaking.
                                    */
                                    return (document.querySelector('meta[name=viewport') || document.createElement('meta')).content.indexOf('minimal-ui') > -1
                                },

                                // Set
                                set: function setMinimalUI() {
                                    // Initialization > Data
                                    let data = !!arguments[0];

                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    Data is 'true'
                                                        and
                                                    the Element does not have a 'minimal-ui' content value.
                                        */
                                        if (
                                            data &&
                                            (document.querySelector('meta[name=viewport').content.match(/minimal-ui/g) || []).length < 1
                                        )
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', minimal-ui';

                                            else
                                                document.querySelector('meta[name=viewport').content = 'minimal-ui';

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = String(document.querySelector('meta[name=viewport').content.replace('minimal-ui', '').split(/,/g).removeFalsyElements().removeElements(' '));

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content=minimal-ui name=viewport>`
                                }
                            });

                            // Minimum Scale
                            Object.defineProperty(this.viewport, 'minimumScale', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getMinimumScale() {
                                    // Return
                                    return parseFloat(((document.querySelector('meta[name=viewport') || document.createElement('meta')).content || '').getAfterChar('minimum-scale').getBeforeChar(',').replace('=', '')) || ''
                                },

                                // Set
                                set: function setMinimumScale() {
                                    // Update > Data
                                    !arguments[0] .toFixed || (arguments[0] = arguments[0] .toFixed(1) || arguments[0]);
                                    arguments[0] = String(arguments[0]);

                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'minimum-scale' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/minimum-scale( |){0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += `, minimum-scale=${arguments[0]}`;

                                            else
                                                document.querySelector('meta[name=viewport').content = `minimum-scale=${arguments[0]}`;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/minimum-scale( |){0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, `minimum-scale=${arguments[0]}`);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content='minimum-scale=${arguments[0]}' name=viewport>`
                                }
                            });

                            // Target Density DPI
                            Object.defineProperty(this.viewport, 'targetDensityDPI', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getTargetDensityDPI() {
                                    // Return
                                    return parseFloat((document.querySelector('meta[name=viewport') || document.createElement('meta')).getAttribute('target-densitydpi'))
                                },

                                set: function setTargetDensityDPI() {
                                    // Modification > Viewport Metadata Element > Target Density DPI
                                    (document.querySelector('meta[name=viewport') || document.createElement('meta')).setAttribute('target-densitydpi', arguments[0])
                                }
                            });

                            // User Scalable
                            Object.defineProperty(this.viewport, 'userScalable', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getUserScalable() {
                                    // Return
                                    return ((document.querySelector('meta[name=viewport') || document.createElement('meta')).content || '').getAfterChar('user-scalable').getBeforeChar(',').replace('=', '') || ''
                                },

                                // Set
                                set: function setUserScalable() {
                                    // Initialization > Data
                                    let data = arguments[0];

                                    // Update > Data
                                    typeof data != 'string' ? (!!data ? data = 'yes' : data = 'no') : (data !== 'yes' && data !== 'no') ? data = 'yes' : !!0;

                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'user-scalable' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/user-scalable( |){0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += `, user-scalable=${data}`;

                                            else
                                                document.querySelector('meta[name=viewport').content = `user-scalable=${data}`;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/user-scalable( |){0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, `user-scalable=${data}`);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content='user-scalable=${data}' name=viewport>`
                                }
                            });

                            // Width
                            Object.defineProperty(this.viewport, 'width', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getWidth() {
                                    // Return
                                    return ((document.querySelector('meta[name=viewport') || document.createElement('meta')).content || '').getAfterChar('width').getBeforeChar(',').replace('=', '') || ''
                                },

                                // Set
                                set: function setWidth() {
                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'width' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/width( |){0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += `, width=${arguments[0]}`;

                                            else
                                                document.querySelector('meta[name=viewport').content = `width=${arguments[0]}`;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/width( |){0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, `width=${arguments[0]}`);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += `<meta content='width=${arguments[0]}' name=viewport>`
                                }
                            });

                        // Version
                        Object.defineProperty(this, 'version', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getVersion() {
                                // Return
                                return version
                            },

                            // Set
                            set: function setVersion() {
                                // Update > Version
                                version = arguments[0]
                            }
                        })
                })()
            });

            // Browser
            constructor.prototype.browser || Object.defineProperty(constructor.prototype, 'browser', {
                // Value
                value: new (function BrowserInformation() {
                    // Modification > Target
                        // Chrome
                        Object.defineProperty(this, 'chrome', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function chrome() {
                                // Return
                                return !!(!!window.chrome && !!window.chrome.webstore)
                            }
                        });

                        // Firefox
                        Object.defineProperty(this, 'firefox', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function firefox() {
                                // Return
                                return !!(typeof InstallTrigger != 'undefined')
                            }
                        });

                        // Internet Explorer
                        Object.defineProperty(this, 'internetExplorer', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function internetExplorer() {
                                // Return
                                return !!(/*@cc_on!@*/ !!0 || !!document.documentMode)
                            }
                        });

                        // Opera
                        Object.defineProperty(this, 'opera', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function opera() {
                                // Return
                                return !!((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf('OPR/') > -1)
                            }
                        });

                        // Safari
                        Object.defineProperty(this, 'safari', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function safari() {
                                // Return
                                return !!(/constructor/i.test(window.HTMLElement) || (data => {
                                    // Return
                                    return data.toString() === '[object SafariRemoteNotification]'
                                })(!window['safari'] || safari.pushNotification))
                            }
                        })
                })
            });

            // CSS
            constructor.prototype.css || Object.defineProperty(constructor.prototype, 'css', {
                // Value
                value: new (function CSSImportObject() {
                    // Modification > Target
                        // Link
                        this.link = function link() {
                            // Insertion
                            document.head.appendChild(LapysJS.permanentData.HTMLLinkElement = createElement('link', `[data-id='${arguments[0]}']`));

                            /* Logic
                                    If
                                        Argument 1 is an Object,

                                    else if
                                        Argument 1 is a String.
                            */
                            if (typeof arguments[1] == 'object')
                                /* Loop
                                        Index all key-values of Argument 1.

                                    > Modification > (LapysJS > Permanent Data > HTML Link Element) > [Argument 1]
                                */
                                for (let i = 0; i < Object.keys(arguments[1]).length; i += 1)
                                    LapysJS.permanentData.HTMLLinkElement.setAttribute(Object.keys(arguments[1])[i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return `-${data.toLowerCase()}`
                                    }), arguments[1][Object.keys(arguments[1])[i]]);

                            else if (typeof arguments[1] == 'string')
                                // Modification > (LapysJS > Permanent Data > HTML Link Element) > Hyperlink Reference
                                LapysJS.permanentData.HTMLLinkElement.setAttribute('href', arguments[1])
                        };

                        // Style
                        this.style = function style() {
                            // Insertion
                            document.head.appendChild(createElement('style', `[data-id='${arguments[0]}'][media=all][type=text/css`, String(arguments[1])))
                        }
                })
            });

            // File
            constructor.prototype.file || Object.defineProperty(constructor.prototype, 'file', {
                // Value
                value: new (function File() {
                    // Modification > Target
                        // Full Name
                        Object.defineProperty(this, 'fullName', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function fullName() {
                                // Return
                                return (location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('/') > -1 ? null : location.pathname.split('/').pop() || location.pathname.split('#').shift()
                            }
                        });

                        // Name
                        Object.defineProperty(this, 'name', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function name() {
                                // Return
                                return (location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('/') > -1 ? null : (location.pathname.split('/').pop() || location.pathname.split('#').shift()).slice(0, (location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('.'));
                            }
                        });

                        // Type
                        Object.defineProperty(this, 'type', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function type() {
                                // Return
                                return (location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('/') > -1 ? null : (location.pathname.split('/').pop() || location.pathname.split('#').shift()).split('.').pop()
                            }
                        })
                })
            });

            // HTML Document Type
            constructor.prototype.HTMLDoctype || Object.defineProperty(constructor.prototype, 'HTMLDoctype', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function HTMLDoctype() {
                    // Return
                    return String(!document.doctype || String((`<!DOCTYPE ${(document.doctype.name)}${(document.doctype.publicId ? ` PUBLIC '${document.doctype.publicId}'` : '') + ((!document.doctype.publicId && document.doctype.systemId) ? ' SYSTEM' : '') + (document.doctype.systemId ? ` '${document.doctype.systemId}'` : '')}>`))).replace('true', '')
                }
            });

            // JavaScript
            constructor.prototype.js || Object.defineProperty(constructor.prototype, 'js', {
                // Value
                value: new (function JavaScriptImportObject() {
                    // Modification > Target
                        // Script
                        this.script = function script() {
                            // Insertion
                            document.head.appendChild(createElement('script', `[data-id='${arguments[0]}'][language=javascript][type=text/javascript`, String(arguments[1])))
                        };

                        // Source
                        this.src = function source() {
                            // Insertion
                            document.head.appendChild(LapysJS.permanentData.HTMLScriptElement = createElement('script', `[data-id='${arguments[0]}'][language=javascript][type=text/javascript`));

                            /* Logic
                                    If
                                        Argument 1 is an Object,

                                    else if
                                        Argument 1 is a String.
                            */
                            if (typeof arguments[1] == 'object')
                                /* Loop
                                        Index all key-values of Argument 1.

                                    > Modification > (LapysJS > Permanent Data > HTML Script Element) > [Argument 1]
                                */
                                for (let i = 0; i < Object.keys(arguments[1]).length; i += 1)
                                    LapysJS.permanentData.HTMLScriptElement.setAttribute(Object.keys(arguments[1])[i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return `-${data.toLowerCase()}`
                                    }), arguments[1][Object.keys(arguments[1])[i]]);

                            else if (typeof arguments[1] == 'string')
                                // Modification > (LapysJS > Permanent Data > HTML Script Element) > Source
                                LapysJS.permanentData.HTMLScriptElement.setAttribute('src', arguments[1])
                    }
                })
            });

            // Operating System
            constructor.prototype.operatingSystem || Object.defineProperty(constructor.prototype, 'operatingSystem', {
                // Value
                value: new (function OperatingSystemInformation() {
                    // Modification > Target
                        // Macintosh
                        Object.defineProperty(this, 'macintosh', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function macintosh() {
                                // Return
                                return (navigator || []).appVersion.indexOf('Mac') > -1
                            }
                        });

                        // Linux
                        Object.defineProperty(this, 'linux', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function linux() {
                                // Return
                                return (navigator || []).appVersion.indexOf('Linux') > -1
                            }
                        });

                        // Unix
                        Object.defineProperty(this, 'unix', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function unix() {
                                // Return
                                return (navigator || []).appVersion.indexOf('X11') > -1
                            }
                        });

                        // Windows
                        Object.defineProperty(this, 'windows', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function windows() {
                                // Return
                                return (navigator || []).appVersion.indexOf('Win') > -1
                            }
                        })
                })
            });

        /* Document */
            // Fav Icon
            Document.prototype.favicon || (Object.defineProperty(Document.prototype, 'favicon', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function getFavicon() {
                    // Return
                    return [...document.querySelectorAll(`link[href][rel=icon][type], link[href][rel='shortcut icon']`)]
                },

                // Set
                set: function setFavicon() {
                    // Insertion
                    document.head.appendChild(createDocumentFragment(`<link href='${arguments[0]}' rel=icon type=image/png><br><link href='${arguments[0]}' rel='shortcut icon'>`))
                }
            }));

            // Main
            Document.prototype.main || Object.defineProperty(Document.prototype, 'main', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function main() {
                    // Return
                    return document.querySelector('main')
                }
            });

            // Title (Element)
            Document.prototype.titleElement || Object.defineProperty(Document.prototype, 'titleElement', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function title() {
                    // Return
                    return document.querySelector('title')
                }
            });

        /* DOM Elements */
            /* Data Focus */
                /* Logic
                        If
                            the LapysJS script has 'all' enabled
                                or
                            the LapysJS script has 'data-focus' enabled.
                */
                if (
                    LapysJS.script.enabled.indexOf('all') > -1 ||
                    LapysJS.script.enabled.indexOf('data-focus') > -1
                )
                    // On DOM Ready
                    onDOMReady(() => {
                        // Event > <body> > Mouse Up
                        document.body.setEvent('mouseup', function LapysJSDataFocusFeatureEvent(event) {
                            /* Loop
                                    While
                                        there is a Data Focus element left.

                                > Modification > Data Focus Element > Data Focus
                            */
                            while (document.querySelector('[data-focus'))
                                document.querySelector('[data-focus').removeAttribute('data-focus');

                            // Modification > Event Path > Data Focus
                            event.path[0].setAttribute('data-focus', '')
                        })
                    });

            /* HTML JavaScript */
                /* Logic
                        If
                            the LapysJS script has 'all' enabled
                                or
                            the LapysJS script has 'html-javascript' enabled.
                */
                if (
                    LapysJS.script.enabled.indexOf('all') > -1 ||
                    LapysJS.script.enabled.indexOf('html-javascript') > -1
                ) {
                    /* <access-value>
                            --- NOTE ---
                                @lapys: Outputs evaluated JavaScript values to the DOM.
                    */
                        // On DOM Ready
                        onDOMReady(() => {
                            // On DOM Node Count Change
                            onDOMNodeCountChange(() => {
                                // Registration
                                (!window.customElements || (document.createElement('access-value').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('access-value', class HTMLAccessValueElement extends HTMLElement {}));

                                // Modification > <access-value> > Value
                                Object.defineProperty(new (document.createElement('access-value')).constructor().constructor.prototype, 'value', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getValue() {
                                        // Return
                                        return this.getAttribute('value')
                                    },

                                    // Set
                                    set: function setValue() {
                                        // Modification > Target > Value
                                        this.setAttribute('value', arguments[0])
                                    }
                                });

                                /* Loop
                                        While
                                            There is an <access-value> element left.
                                */
                                while (document.querySelector('access-value'))
                                    // Error Handling
                                    try {
                                        // Update > <access-value> > Outer HTML
                                        document.querySelector('access-value').outerHTML = eval(document.querySelector('access-value').value)
                                    }

                                    catch (error) {
                                        // Update > <access-value> > Outer HTML
                                        document.querySelector('access-value').outerHTML = `[LapysJS ${LapysJS.version}] => SyntaxError: Error evaluating parsed value.`
                                    }
                            })
                        });

                    // <key-command>
                        // Registration
                        (!window.customElements || (document.createElement('key-command').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('key-command', class HTMLKeyCommandElement extends HTMLElement {}));

                        // On DOM Ready
                        onDOMReady(() => {
                            /* Loop
                                    Index all <key-command> elements.
                            */
                            for (let i = 0; i < document.getElementsByTagName('key-command').length; i += 1) {
                                // Event > <html> > Key Down
                                !document.getElementsByTagName('key-command')[i].getAttribute('data-event-key') || document.documentElement.setEvent('keydown', function HTMLKeyCommandElementEvent(event) {
                                    // Execution
                                    (event.code !== document.getElementsByTagName('key-command')[i].getAttribute('data-event-key')) || eval(`(function(event) {${document.getElementsByTagName('key-command')[i].getAttribute('data-event-function')}})()`)
                                });

                                /* Modification > <key-command> > Hidden
                                        --- NOTE ---
                                            @lapys: Sadly, we can't delete off the <key-command> elements, yet...
                                */
                                document.getElementsByTagName('key-command')[i].hidden = !0
                            }
                        });

                        // Modification
                            // Function
                            Object.defineProperty(new (document.createElement('key-command')).constructor().constructor.prototype, 'function', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getFunction() {
                                    // Return
                                    return this.getAttribute('data-event-function')
                                },

                                // Set
                                set: function setFunction(data) {
                                    // Modification > Target > Data Event Function
                                    this.setAttribute('data-event-function', data)
                                }
                            });

                            // Key
                            Object.defineProperty(new (document.createElement('key-command')).constructor().constructor.prototype, 'key', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getKey() {
                                    // Return
                                    return this.getAttribute('data-event-key')
                                },

                                // Set
                                set: function setKey(data) {
                                    // Modification > Target > Data Event Key
                                    this.setAttribute('data-event-key', data)
                                }
                            });

                    // <lorem-ipsum>
                        // Registration
                        (!customElements ||  (document.createElement('lorem-ipsum').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('lorem-ipsum', class HTMLLoremIpsumElement extends HTMLElement {}));

                        // Modification > Length
                        Object.defineProperty(new (document.createElement('lorem-ipsum')).constructor().constructor.prototype, 'len', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getLength() {
                                // Return
                                return +this.getAttribute('length').replace(/ /g, '')
                            },

                            set: function setLength() {
                                // Modification > Target > Length
                                this.setAttribute('length', String(arguments[0]).replace(/ /g, ''))
                            }
                        });

                        // On DOM Node Count Change
                        onDOMNodeCountChange(() => {
                            /* Loop
                                    While
                                        there is a <lorem-ipsum> element left.
                            */
                            while (document.querySelector('lorem-ipsum'))
                                // Modification > <lorem-ipsum> > Outer HTML
                                    /* Logic
                                            Switch case to <lorem-ipsum> Length.
                                    */
                                    switch (document.querySelector('lorem-ipsum').len) {
                                        // 1
                                        case 1:
                                            document.querySelector('lorem-ipsum').outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
                                            break;

                                        // 2
                                        case 2:
                                            document.querySelector('lorem-ipsum').outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';
                                            break;

                                        // 3
                                        case 3:
                                            document.querySelector('lorem-ipsum').outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';
                                            break;

                                        // 4
                                        case 4:
                                            document.querySelector('lorem-ipsum').outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';
                                            break;

                                        // 5
                                        case 5:
                                            document.querySelector('lorem-ipsum').outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.';
                                            break;

                                        // [Default]
                                        default:
                                            document.querySelector('lorem-ipsum').outerHTML = ''
                                    }
                        });

                    // <fav-icon>
                        // Registration
                        (!window.customElements || (document.createElement('fav-icon').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('fav-icon', class HTMLFavIconElement extends HTMLElement {}));

                        // Modification > Source
                        Object.defineProperty(new (document.createElement('fav-icon')).constructor().constructor.prototype, 'src', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function getSrc() {
                                // Return
                                return this.getAttribute('src')
                            },

                            // Set
                            set: function setSrc() {
                                // Modification > Target > Source
                                this.setAttribute('src', String(arguments[0]))
                            }
                        });

                        // Insertion
                        !document.querySelector('fav-icon[src]') || document.head.appendChild(createDocumentFragment(`<link href='${document.querySelector('fav-icon').src}' rel='icon' type='image/png'><br><link href='${document.querySelector('fav-icon').src}' rel='shortcut icon'>`))

                        // On DOM Node Count Change
                        onDOMNodeCountChange(() => {
                            /* Loop
                                    While
                                        there is a <fav-icon> element left.

                                > Deletion
                            */
                            while (document.querySelector('fav-icon'))
                                document.querySelector('fav-icon').remove()
                        });

                    /* Detect Scroll Overflow */
                        // On DOM Ready
                        onDOMReady(() => {
                            // Function > Modify Detect Scroll Overflow Elements
                            let modifyDetectScrollOverflowElements = function modifyDetectScrollOverflowElements() {
                                /* Loop
                                        Index all Detect Scroll Overflow Elements.

                                    > Modification > Data Scroll Overflow
                                */
                                for (let i = 0; i < document.getElementsByClassName('detect-scroll-overflow').length; i += 1)
                                    document.getElementsByClassName('detect-scroll-overflow')[i].setAttribute('data-scroll-overflow', document.getElementsByClassName('detect-scroll-overflow')[i].scrollHeight > document.getElementsByClassName('detect-scroll-overflow')[i].getBoundingClientRect().height)
                            };
                            onDOMChange(modifyDetectScrollOverflowElements);
                            setEvent('resize', modifyDetectScrollOverflowElements)
                        })
                }

            /* <br>, <wbr> */
                // On DOM Node Added
                onDOMNodeAdded(() => {
                    /* Loop
                            Index all <br>, <wbr> elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('br, wbr').length; i += 1)
                        /* Logic
                                [if:else if:else statement]

                            > Modification > Outer HTML
                        */
                        if (
                            document.querySelectorAll('br, wbr')[i].getAttribute('length') == 2 ||
                            document.querySelectorAll('br, wbr')[i].hasAttribute('2') ||
                            document.querySelectorAll('br, wbr')[i].len == 2
                        ) {
                            document.querySelectorAll('br, wbr')[i].outerHTML = '<br> <br>';

                            i -= 1
                        }

                        else if (
                            document.querySelectorAll('br, wbr')[i].getAttribute('length') == 3 ||
                            document.querySelectorAll('br, wbr')[i].hasAttribute('3') ||
                            document.querySelectorAll('br, wbr')[i].len == 3
                        ) {
                            document.querySelectorAll('br, wbr')[i].outerHTML = '<br> <br> <br>';

                            i -= 1
                        }
                });

            /* <html> */
                // Modification > Language
                (document.documentElement || {}).lang = document.documentElement.lang || ((document.documentElement || {lang: 0}).lang || String((navigator || []).languages || '').replace(/, /, ',').replace(/,/g, ', '));

            /* <img>, Lazy Script
                    --- NOTE ---
                        @lapys: A bit more consistency between the
                            Lazy Scripts and Script elements would be nice
                            in terms of parsing their JavaScript.

                            P.S.: The Script currently has the updated parser.
            */
                // On DOM Ready
                onDOMReady(() => {
                    // Invoke Event
                    invokeEvent('resize scroll', function lazyScript() {
                        /* Loop
                                Index all 'lazy' <img> elements.

                            > Logic
                                    If
                                        the <img> is in view.
                        */
                        for (let i = 0; i < document.querySelectorAll('img[lazy-load').length; i += 1)
                            if ((window.innerHeight + window.scrollY) > ~-document.querySelectorAll('img[lazy-load')[i].getBoundingClientRect().top) {
                                // Modification > <img> > (Lazy Loaded, Source)
                                document.querySelectorAll('img[lazy-load')[i].setAttribute('lazy-loaded', '');
                                document.querySelectorAll('img[lazy-load')[i].src = document.querySelectorAll('img[lazy-load')[i].getAttribute('lazy-load')
                            };

                        /* Loop
                                Index all "lazy" <img> elements.

                            > Logic
                                    If
                                        the <img> is in view.

                            > Modification > <img> > Lazy Load
                        */
                        for (let i = 0; i < document.querySelectorAll('img[lazy-load').length; i += 1)
                            ((window.innerHeight + window.scrollY) < document.querySelectorAll('img[lazy-load')[i].getBoundingClientRect().top) || document.querySelectorAll('img[lazy-load')[i--].removeAttribute('lazy-load');

                        /* Loop
                                Index all 'lazily scripted' elements.
                        */
                        for (let i = 0; i < document.querySelectorAll('[lazy-script').length; i += 1) {
                            // Modification > Element
                                // Lazy Script
                                document.querySelectorAll('[lazy-script')[i].setAttribute(
                                    'lazy-script',

                                    document.querySelectorAll('[lazy-script')[i].getAttribute('lazy-script').replace(/this( |){1,}\.( |){1,}outerHTML = /g, data => {
                                        // Return
                                        return `this['LapysJS outerHTML'] = `
                                    }).replace(/('|"|`|\/).*('|"|`|\/)/g, data => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            data.slice('"'.length, -'"'.length).indexOf(data[0]) > -1 &&
                                            data.slice('"'.length, -'"'.length).indexOf('\\') < 0
                                        )
                                            return data;

                                        // Return
                                        return data[0] + data.slice('"'.length, -'"'.length).replace(/(?:)/g, `::lapysjs_${alphabetString}::`) + data[0]
                                    }).replace(/this( |){1,}(\.|\[( |){1,}('|"|`))/g, data => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (data[~-data.length] === '.')
                                            return `document.querySelector('[${alphabetString}${i}').`;

                                        // Return
                                        return `document.querySelector('[${alphabetString}${i}')[${data.getAfterChar('[')}`
                                    }).replace(RegExp(`::lapysjs_${alphabetString}::`, 'g'), '')
                                );

                                // [Random String]
                                document.querySelectorAll('[lazy-script')[i].setAttribute(`${alphabetString}${i}`, `${alphabetString}${i}`);

                                // Remove
                                document.querySelectorAll('[lazy-script')[i]['LapysJS remove'] = document.querySelectorAll('[lazy-script')[i].remove.clone();
                                document.querySelectorAll('[lazy-script')[i].remove = () => { document.querySelectorAll('[lazy-script')[i]['LapysJS toBeRemoved'] = !0 }
                        };

                        /* Loop
                                Index all 'lazily scripted' elements.

                            > Logic
                                    If
                                        the element is in view.
                        */
                        for (let i = 0; i < document.querySelectorAll('[lazy-script').length; i += 1)
                            if ((window.innerHeight + window.scrollY) > ~-document.querySelectorAll('[lazy-script')[i].getBoundingClientRect().top) {
                                // Modification > Element > Lazy Scripted
                                document.querySelectorAll('[lazy-script')[i].setAttribute('lazy-scripted', '');

                                // Execution
                                LapysJS.exec(document.querySelectorAll('[lazy-script')[i].getAttribute('lazy-script'));

                                // Update > Loop Counter
                                document.querySelectorAll('[lazy-script')[i] || i--
                            };

                        /* Loop
                                Index all 'lazily scripted' elements.
                        */
                        for (let i = 0; i < document.querySelectorAll('[lazy-script').length; i += 1) {
                            // Modification > Element > Outer HTML
                            !document.querySelectorAll('[lazy-script')[i]['LapysJS outerHTML'] || (document.querySelectorAll('[lazy-script')[i].outerHTML = document.querySelectorAll('[lazy-script')[i--]['LapysJS outerHTML']);

                            // Deletion
                            !document.querySelectorAll('[lazy-script')[i]['LapysJS toBeRemoved'] || (document.querySelectorAll('[lazy-script')[i--].outerHTML = '')
                        };

                        /* Loop
                                Index all "lazily-scripted" elements.

                            > Modification > Element > Lazy Script
                        */
                        for (let i = 0; i < document.querySelectorAll('[lazy-script').length; i += 1)
                            ((window.innerHeight + window.scrollY) < document.querySelectorAll('[lazy-script')[i].getBoundingClientRect().top) || document.querySelectorAll('[lazy-script')[i--].removeAttribute('lazy-script');
                    })
                }, !0);

            /* <input> */
                /* Loop
                        [do:while statement]
                */
                while (document.querySelector('input[type=meter]:not([min]), input[type=number]:not([min]), input[type=range]:not([min])'))
                    document.querySelector('input[type=meter]:not([min]), input[type=number]:not([min]), input[type=range]:not([min])').min = 0;

            /* <option> */
                /* Loop
                        While
                            there is an <option> element without a label left.

                    > Modification > <option> > Label
                */
                while (document.querySelector('option:not([label])'))
                    document.querySelector('option:not([label])').label = document.querySelector('option:not([label])').innerText.trim()

            /* <time> */
                // On DOM Ready
                onDOMReady(() => {
                    /* On DOM Change
                            --- NOTE ---
                                @lapys: The 'onDOMChange' function can also be used here,
                                    actually it's more subtle.
                    */
                    setInterval(() => {
                        /* Loop
                                Index all Dynamic Time.
                        */
                        for (let i = 0; i < document.querySelectorAll('time.dynamic-time').length; i += 1)
                            /* Logic
                                    Switch case to Dynamic Time's Data Format.
                            */
                            switch (document.querySelectorAll('time.dynamic-time')[i].getAttribute('data-format').replace(/ /g, '')) {
                                // Day
                                case 'day':
                                    (element => {
                                        /* Logic
                                                If
                                                    Dynamic Time specified the UTC Format.
                                        */
                                        if (element.hasAttribute('data-utc-format'))
                                            /* Logic
                                                    [switch:case:default statement]

                                                > Modification > Dynamic Time > Inner Text
                                            */
                                            switch ((new Date).getDay()) {
                                                // Sunday
                                                case 0:
                                                    element.innerText = 'Monday';
                                                    break;

                                                // Monday
                                                case 1:
                                                    element.innerText = 'Monday';
                                                    break;

                                                // Tuesday
                                                case 2:
                                                    element.innerText = 'Tuesday';
                                                    break;

                                                // Wednesday
                                                case 3:
                                                    element.innerText = 'Wednesday';
                                                    break;

                                                // Thursday
                                                case 4:
                                                    element.innerText = 'Thursday';
                                                    break;

                                                // Friday
                                                case 5:
                                                    element.innerText = 'Friday';
                                                    break;

                                                // Saturday
                                                case 6:
                                                    element.innerText = 'Saturday';
                                                    break;

                                                // Sunday
                                                case 7:
                                                    element.innerText = 'Sunday'
                                            }

                                        else
                                            // Modification > Dynamic Time > Inner Text
                                            element.innerText = (new Date).getDay()
                                    })(document.querySelectorAll('time.dynamic-time')[i]);
                                    break;

                                // Date
                                case 'date':
                                    document.querySelectorAll('time.dynamic-time')[i].innerText = Date();
                                    break;

                                // ISO
                                case 'iso':
                                    (element => {
                                        // Modification > Dynamic Time > Inner Text
                                        element.innerText = (new Date).toISOString();

                                        // Set Timeout
                                        setTimeout(() => { element.innerText = (new Date).toISOString() }, 10)
                                    })(document.querySelectorAll('time.dynamic-time')[i])
                                    break;

                                // [Default]
                                default:
                                    // Error Handling
                                    try {
                                        // Initialization > Element
                                        let element = document.querySelectorAll('time.dynamic-time')[i];

                                        // Modification > Dynamic Time > Inner Text
                                        element.innerText = (new Date)['get' + (element.hasAttribute('data-utc-format') ? 'UTC' : '') + element.getAttribute('data-format').replace(/ /g, '')[0].toUpperCase() + element.getAttribute('data-format').replace(/ /g, '').replace(/\-[a-z]/g, data => {
                                            return data[1].toUpperCase()
                                        }).slice(element.getAttribute('data-format').replace(/ /g, '')[0].length)]();

                                        // Set Timeout
                                        setTimeout(() => {
                                            element.innerText = (new Date)['get' + (element.hasAttribute('data-utc-format') ? 'UTC' : '') + element.getAttribute('data-format').replace(/ /g, '')[0].toUpperCase() + element.getAttribute('data-format').replace(/ /g, '').replace(/\-[a-z]/g, data => {
                                                return data[1].toUpperCase()
                                            }).slice(element.getAttribute('data-format').replace(/ /g, '')[0].length)]()
                                        }, 10)
                                    }

                                    catch (error) {
                                        // Modification > Dynamic Time > Inner Text
                                        document.querySelectorAll('time.dynamic-time')[i].innerText = `[LapysJS ${LapysJS.version}] => SyntaxError: Error evaluating parsed value.`
                                    }
                            }
                    }, 10)
                });

            /* Script
                    --- UPDATE REQUIRED ---
                        @lapys: Better parsing of the 'script' attribute.
            */
                // On Node Added
                onNodeAdded(document.body, () => {
                    /* Loop
                            Index all Script Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('[script').length; i += 1)
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!document.querySelectorAll('[script')[i]['LapysJS script']) {
                            // Modification > Script > Script, Random Attribute Value
                            document.querySelectorAll('[script')[i].setAttribute('script', (document.querySelectorAll('[script')[i].getAttribute('script') || '').replace(/[^:]\/\/(.*[^\n])\n/g, '').replace(/\n/g, ''));

                            // Set Interval
                            setInterval(() => {
                                /* Logic
                                        If
                                            the Script exists.
                                */
                                if (document.querySelectorAll('[script')[i])
                                    /* Logic
                                            [if:else if:else statements].
                                    */
                                    if (document.querySelectorAll('[script')[i].getAttribute('script') !== document.querySelectorAll('[script')[i]['LapysJS script']) {
                                        // Modification
                                            // Script > Script, Script Element ID
                                            document.querySelectorAll('[script')[i]['LapysJS script'] = document.querySelectorAll('[script')[i].getAttribute('script');
                                            document.querySelectorAll('[script')[i]['LapysJS scriptElementID'] || (document.querySelectorAll('[script')[i]['LapysJS scriptElementID'] = Math.random());

                                            // LapysJS > Permanent Data > Script Element
                                            LapysJS.permanentData[`scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}`] = document.querySelectorAll('[script')[i];

                                        // Execution
                                        eval(`try { (document.querySelector('[script="${document.querySelectorAll('[script')[i].getAttribute('script')}"') || LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}'])['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] = (function() {var global = window;\n${document.querySelectorAll('[script')[i].getAttribute('script') ? document.querySelectorAll('[script')[i].getAttribute('script') : ''}\n}); (document.querySelector('[script="${document.querySelectorAll('[script')[i].getAttribute('script')}"') || LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}'])['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'](); delete (document.querySelector('[script="${document.querySelectorAll('[script')[i].getAttribute('script')}"') || LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}'])['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] } catch (error) { LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}']['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] = (function() {var global = window;\n${document.querySelectorAll('[script')[i].getAttribute('script') ? document.querySelectorAll('[script')[i].getAttribute('script') : ''}\n}); LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}']['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'](); delete LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}']['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] }`)
                                    }
                            });

                            // Modification > Script > Script
                            (typeof document.querySelectorAll('[script')[i].script == 'string') || Object.defineProperty(document.querySelectorAll('[script')[i], 'script', {
                                // Configurable
                                configurable: !0,

                                // Enumerable
                                enumerable: !0,

                                // Get
                                get: function getScript() {
                                    // Return
                                    return this.getAttribute('script')
                                },

                                set: function setScript() {
                                    // Modification > Target > Script
                                    this.setAttribute('script', arguments[0] || '')
                                }
                            })
                        }
                });

            /* Modification */
                // Element, EventTarget, HTML Collection, HTML (*) Element, Node, NodeList
                    /* Has Class
                            --- WARN ---
                                @lapys: Should be defined before the 'Element.addClass' and 'Element.delClass' methods.
                    */
                    Element.prototype.hasClass || Object.defineProperty(Element.prototype, 'hasClass', {
                        // Value
                        value: function hasClass() {
                            // Initialization > Arguments
                            let Arguments = [...arguments] || [];

                            /* Logic
                                    If
                                        the Target has a class.
                            */
                            if (this.getAttribute('class')) {
                                /* Loop
                                        Index all Arguments.
                                */
                                for (let i = 0; i < Arguments.length; i += 1)
                                    // Update > Name
                                    Arguments[i] = String(Arguments[i]);

                                // Initialization > (Has Class, Input Class)
                                let hasClass = [],
                                    inputClass = Arguments;

                                /* Loop
                                        Index all Arguments.
                                */
                                for (let i = 0; i < Arguments.length; i += 1)
                                    /* Logic
                                            If
                                                the the Argument has white-space.
                                    */
                                    if (Arguments[i].split(/ /g).length > 1)
                                        /* Loop
                                                Index all split elements of that Argument.
                                        */
                                        for (let j = 0; j < Arguments[i].split(/ /g).length; j += 1)
                                            // Update > Input Class
                                            inputClass.push(Arguments[i].split(/ /g)[j]);

                                // Update > Input Class
                                inputClass = inputClass.removeRepeatedElements().filter(data => {
                                    // Return
                                    return data.indexOf(' ') < 0
                                });

                                /* Loop
                                        Index all elements of Input Class.
                                */
                                for (let i = 0; i < inputClass.length; i += 1)
                                    // Update > Has Class
                                    hasClass.push(this.getAttribute('class').trim().split(/ /g).indexOf(inputClass[i]) > -1);

                                // Return
                                return hasClass.indexOf(!!0) < 0
                            }

                            // Return
                            return !!0
                        }
                    });

                    // Add Class
                    Element.prototype.addClass || Object.defineProperty(Element.prototype, 'addClass', {
                        // Value
                        value: function addClass() {
                            // Initialization > Arguments
                            let Arguments = [...arguments];

                            /* Loop
                                    Index all Arguments.
                            */
                            for (let i = 0; i < Arguments.length; i += 1) {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Iterate over the number of white-spaces Name has.
                                */
                                for (let j = 0; j < Arguments[i].split(/ /g).length; j += 1)
                                    // Update > Name
                                    ((this.getAttribute('class') || '').trim().split(/ /g).indexOf(Arguments[i].split(/ /g)[j]) < 0) || (Arguments[i] = Arguments[i].replace(Arguments[i].split(/ /g)[j], ''));

                                // Update > Arguments
                                Arguments[i] = Arguments[i].trim();

                                // Modification > Target > Class
                                (
                                    this.hasClass(Arguments[i]) ||
                                    (() => {
                                        /* Logic
                                                If
                                                    the Target has a class value.
                                        */
                                        if (that.getAttribute('class'))
                                            /* Logic
                                                    If
                                                        there are multiple class values.

                                                > Return
                                            */
                                            if (that.getAttribute('class').indexOf(' ') > -1)
                                                return (that.getAttribute('class').indexOf(Arguments[i]) > -1);

                                            else
                                                return that.hasClass(Arguments[i]);

                                        else
                                            // Return
                                            return that.hasClass(Arguments[i])
                                    })()
                                ) ||
                                this.setAttribute(
                                    'class',
                                    (`${(this.getAttribute('class') || '')} ${Arguments[i]}`).trim()
                                );
                                (Arguments[i] !== '' && void Arguments[i] === !!0) || (this.getAttribute('class') || this.removeAttribute('class'))
                            }
                        }
                    });

                    // Change Element Tag
                    Element.prototype.changeElementTag || Object.defineProperty(Element.prototype, 'changeElementTag', {
                        // Value
                        value: function changeElementTag() {
                            /* Logic
                                    If
                                        an Argument is provided.
                            */
                            if (arguments.length) {
                                // Error Handling
                                try {
                                    // Initialization > (Data, Random)
                                    let data = this.getEvents().clone(),
                                        random = rand();

                                    // Modification > Target
                                        // LapysJS Random Attribute
                                        this.setAttribute('lapysjs-random-attribute', random);

                                        // Outer HTML
                                        this.outerHTML = this.outerHTML.replace(`<${this.tagName.toLowerCase()}`, `<${arguments[0]}`).replace(`<${this.tagName}`, `<${arguments[0]}`).replace(`</${this.tagName.toLowerCase()}>`, `</${arguments[0]}>`).replace(`</${this.tagName}>`, `</${arguments[0]}>`);

                                    // Initialization > Element
                                    let element = document.querySelector(`[lapysjs-random-attribute='${random}'`);

                                    /* Loop
                                            [for statement]
                                    */
                                    for (let i = 0; i < Object.keys(data).length; i += 1)
                                        /* Loop
                                                [for statement]

                                            > Event > Element > [Data]
                                        */
                                        for (let j = 0; j < data[Object.keys(data)[i]].length; j += 1)
                                            element.setEvent(Object.keys(data)[i], data[Object.keys(data)[i]][j].listener, data[Object.keys(data)[i]][j].useCapture);

                                    // Modification > Element > LapysJS Random Attribute
                                    element.removeAttribute('lapysjs-random-attribute')
                                }

                                catch (error) {
                                    // LapysJS > Error
                                    LapysJS.error(error)
                                }
                            }

                            else
                                LapysJS.error(`Uncaught TypeError: Failed to execute 'changeElementTag' on 'Element': 1 argument required, but only 0 present.`)
                        }
                    });

                    // Close
                    Element.prototype.close || Object.defineProperty(Element.prototype, 'close', {
                        // Value
                        value: function close() {
                            // Modification > Target
                                // Data Close
                                this.setAttribute('data-close', !0);

                                // Data Open
                                this.setAttribute('data-open', !!0)
                        }
                    });

                    // Delete Attribute
                    Element.prototype.delAttr ||  Object.defineProperty(Element.prototype, 'delAttr', {
                        // Value
                        value: function delAttr() {
                            if ((arguments[0] || []).constructor !== window.Attr)
                                /* Logic
                                        If
                                            Argument is '_all'
                                                and
                                            the Target has no '_all' attribute.
                                */
                                if (
                                    [...arguments][0] === '_all' &&
                                    !this.hasAttribute('_all')
                                )
                                    /* Loop
                                            Index all the Target"s attributes.

                                        > Modification > Target > [Name]
                                    */
                                    for (let i = 0; i < this.attributes.length; i += 1)
                                        this.removeAttribute(this.attributes[i--].name);

                                else
                                    /* Loop
                                            Index all Names.

                                        > Modification > Target > [Name]
                                    */
                                    for (let i = 0; i < [...arguments].length; i += 1)
                                        this.removeAttribute([...arguments][i]);

                            else
                                // Error Handling
                                try {
                                    // Modification > Target > Argument 0
                                    this.removeAttributeNode(arguments[0])
                                }

                                catch (error) {
                                    // LapysJS > Warn
                                    LapysJS.warn(error);

                                    // Modification > Target > Argument 0
                                    this.removeAttribute(arguments[0].name)
                                }
                        }
                    });

                    // Delete Class
                    Element.prototype.delClass || Object.defineProperty(Element.prototype, 'delClass', {
                        // Value
                        value: function delClass() {
                            /* Loop
                                    Index all elements of Data.
                            */
                            for (let i = 0; i < [...arguments].length; i += 1)
                                /* Logic
                                        If
                                            Target has a class.
                                */
                                if (this.getAttribute('class')) {
                                    // Target
                                        /* Logic
                                                If
                                                    Data is '_all'
                                                        and
                                                    Target does not have the '_all' class,

                                                else if
                                                    Data is a 'number'

                                                else if
                                                    Data is a 'string'.
                                        */
                                        if (
                                            [...arguments][i] === '_all' &&
                                            this.getAttribute('class').split(/ /g).indexOf('_all') < 0
                                        )
                                            this.removeAttribute('class');

                                        else if (typeof [...arguments][i] == 'number') {
                                            /* Logic
                                                    If
                                                        the element has a single class only.

                                                > Modification > Target > Class
                                            */
                                            if (
                                                this.getAttribute('class').indexOf(' ') < 0 &&
                                                [...arguments][i] == 0
                                            )
                                                this.removeAttribute('class');

                                            else
                                                this.setAttribute('class', String(this.getAttribute('class').trim().split(/ /g).removeElement(this.getAttribute('class').trim().split(/ /g)[[...arguments][i]])).replace(/,/g, ' ').trim())
                                        }

                                        else if (typeof [...arguments][i] == 'string')
                                            /* Loop
                                                    Index all Data class values.

                                                > Modification > Target > Class
                                            */
                                            for (let j = 0; j < [...arguments][i].trim().split(/ /g).length; j += 1)
                                                this.setAttribute('class', String(this.getAttribute('class').trim().split(/ /g).removeElement([...arguments][i].trim().split(/ /g)[j])).replace(/,/g, ' ').trim());

                                        // Modification > Target > Class
                                        this.getAttribute('class') || this.removeAttribute('class')
                                }
                        }
                    });

                    // Delete (Inline) Style
                    Element.prototype.delStyle || Object.defineProperty(Element.prototype, 'delStyle', {
                        // Value
                        value: function delStyle() {
                            /* Loop
                                    Index all Arguments.
                            */
                            for (let i = 0; i < [...arguments].length; i += 1) {
                                /* Logic
                                        If
                                            Argument is '_all'
                                                and
                                            Target does not have an '_all' CSS property.
                                */
                                if (
                                    [...arguments][i] === '_all' &&
                                    !this.style._all
                                )
                                    // Modification > Target > Style
                                    this.removeAttribute('style');

                                else {
                                    /* Logic
                                            If
                                                the element has the 'style' attribute.
                                    */
                                    if (this.hasAttribute('style')) {
                                        // Initialization > Target
                                        let that = this;

                                        /* Logic
                                                [if:else if:else] statement.

                                            > Modification > Style
                                        */
                                        if (
                                            ([...arguments][i] !== 'animation' && that.getAttribute('style').indexOf('animation') < 0) &&
                                            ([...arguments][i] !== 'background' && that.getAttribute('style').indexOf('background') < 0) &&
                                            ([...arguments][i] !== 'border' && that.getAttribute('style').indexOf('border') < 0) &&
                                            ([...arguments][i] !== 'flex' && that.getAttribute('style').indexOf('flex') < 0) &&
                                            ([...arguments][i] !== 'font' && that.getAttribute('style').indexOf('font') < 0) &&
                                            ([...arguments][i] !== 'overflow' && that.getAttribute('style').indexOf('overflow') < 0) &&
                                            ([...arguments][i] !== 'transition' && that.getAttribute('style').indexOf('transition') < 0)
                                        )
                                            this.style = this.getAttribute('style').replace(
                                                /* --- NOTE ---
                                                        Modify the element's 'style' attribute.
                                                */
                                                that.getAttribute('style').slice(
                                                    /* --- NOTE ---
                                                            The first construct of the style.
                                                    */
                                                        // [property]
                                                        that.getAttribute('style').indexOf([...arguments][i]),

                                                    /* --- NOTE ---
                                                            The length of the style and its value.
                                                    */
                                                        // [property: value]
                                                        (() => {
                                                            /* Logic
                                                                    If
                                                                        [property: value],

                                                                    else if
                                                                        [property:value],

                                                                    else if
                                                                        [property :value],

                                                                    else if
                                                                        [property : value].
                                                            */
                                                            if (that.getAttribute('style').indexOf(`${[...arguments][i]}: ${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String(`${[...arguments][i]}: ${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`).length);

                                                            else if (that.getAttribute('style').indexOf(`${[...arguments][i]}:${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String(`${[...arguments][i]}:${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`).length);

                                                            else if (that.getAttribute('style').indexOf(`${[...arguments][i]} :${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String(`${[...arguments][i]} :${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`).length);

                                                            else if (that.getAttribute('style').indexOf(`${[...arguments][i]} : ${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String(`${[...arguments][i]} : ${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}`).length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })() +

                                                        // [value;]
                                                        (() => {
                                                            /* Logic
                                                                    If
                                                                        [value; ],

                                                                    else if
                                                                        [value ;],

                                                                    else if
                                                                        [value;],

                                                                    else if
                                                                        [value ; ].
                                                            */
                                                            if (that.getAttribute('style').indexOf(`${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))}; `) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + '; '.length);

                                                            else if (that.getAttribute('style').indexOf(`${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))} ;`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + ' ;'.length);

                                                            else if (that.getAttribute('style').indexOf(`${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))};`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + ';'.length);

                                                            else if (that.getAttribute('style').indexOf(`${(that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))} ; `) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + ' ; '.length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })()
                                                ),

                                                /* --- NOTE ---
                                                        Replace with nothing.
                                                */
                                                ''
                                            );

                                        else
                                            this.style[[...arguments][i]] = ''
                                    };

                                    // Error Handling
                                    try {
                                        /* Modification > Target > Style
                                                --- NOTE ---
                                                    This following line is executed twice just
                                                    for consistency.
                                        */
                                        that.getAttribute('style') || that.removeAttribute('style');
                                        that.getAttribute('style') || that.removeAttribute('style')
                                    }

                                    catch (error) {}
                                }
                            }
                        }
                    });

                    // Get Attribute
                    Element.prototype.getAttr || Object.defineProperty(Element.prototype, 'getAttr', {
                        // Value
                        value: function getAttr() {
                            // Initialization > (Target, Attributes)
                            let that = this,
                                Attributes = [];

                            /* Loop
                                    Index all Arguments.
                            */
                            for (let i = 0; i < [...arguments].length; i += 1) {
                                /* Logic
                                        If
                                            Argument data type is a 'number',

                                        else if
                                            Argument data type is a 'object',

                                        else if
                                            Argument data type is a 'string'.
                                */
                                if (typeof [...arguments][i] == 'number')
                                    // Update > Attributes
                                    Attributes.push(that.getAttribute((that.attributes[[...arguments][i]] || document.createElement('a')).name));

                                else if (typeof [...arguments][i] == 'string')
                                    /* Logic
                                            If
                                                Argument is '_all' and
                                                the element does not have an '_all' attribute,

                                            else if
                                                Argument does not have a comma.
                                    */
                                    if (
                                        [...arguments][0] === '_all' &&
                                        !that.hasAttribute('_all')
                                    )
                                        /* Loop
                                                Index all the Target's attributes.

                                            > Update > Attributes
                                        */
                                        for (let j = 0; j < that.attributes.length; j += 1)
                                            Attributes = Attributes.concat(that.attributes[j].value);

                                    else
                                        // Update > Attributes
                                        Attributes.push(that.getAttribute([...arguments][i]))
                            }

                            /* Logic
                                    If
                                        Attributes has more than 1 member.

                                > Return
                            */
                            if (Attributes[1])
                                return Attributes;

                            // Return
                            return Attributes[0]
                        }
                    });

                    // Get CSS
                    Element.prototype.getCSS || Object.defineProperty(Element.prototype, 'getCSS', {
                        // Value
                        value: function getCSS() {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all elements of Property.
                            */
                            for (let i = 0; i < [...arguments].length; i += 1)
                                // Return
                                array.push(
                                    this.style[[...arguments][i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return `-${data.toLowerCase()}`
                                    })] || getComputedStyle(this).getPropertyValue([...arguments][i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return `-${data.toLowerCase()}`
                                    }))
                                );

                            // Return
                            return array[1] ? array : array[0]
                        }
                    });

                    // Has Attribute
                    Element.prototype.hasAttr || Object.defineProperty(Element.prototype, 'hasAttr', {
                        // Value
                        value: function hasAttr() {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all Arguments.
                            */
                            for (let i = 0; i < arguments.length; i += 1)
                                // Update > Array
                                array.push(this.hasAttribute(arguments[i]));

                            // Return
                            return array[1] ? array : array[0]
                        }
                    });

                    // Has Child (Element)
                    Element.prototype.hasChild || Object.defineProperty(Element.prototype, 'hasChild', {
                        // Value
                        value: function hasChild() {
                            // Return
                            return this.contains(arguments[0])
                        }
                    });

                    // Has Child (Element) By Query Selector
                    Element.prototype.hasChildByQuerySelector || Object.defineProperty(Element.prototype, 'hasChildByQuerySelector', {
                        // Value
                        value: function hasChildByQuerySelector() {
                            // Return
                            return !!this.querySelector(arguments[0])
                        }
                    });

                    // Has Direct Descendant
                    Element.prototype.hasDirectDescendant || Object.defineProperty(Element.prototype, 'hasDirectDescendant', {
                        // Value
                        value: function hasDirectDescendant() {
                            // Return
                            return [...this.children].indexOf(arguments[0]) > -1
                        }
                    });

                    // Has Direct Descendant By Query Selector
                    Element.prototype.hasDirectDescendantByQuerySelector || Object.defineProperty(Element.prototype, 'hasDirectDescendantByQuerySelector', {
                        // Value
                        value: function hasDirectDescendantByQuerySelector() {
                            // Return
                            return !!this._$(arguments[0])
                        }
                    });

                    // HTML
                    Element.prototype.html || Object.defineProperty(Element.prototype, 'html', {
                        // Value
                        value: function html() {
                            // Modification > Target > Inner HTML
                            this.innerHTML = arguments.length > 0 ? arguments[0] : ''
                        }
                    });

                    /* In View
                            --- NOTE ---
                                @lapys: Returns whether or not the element can be
                                    seen in the viewport.
                    */
                    Element.prototype.inView || Object.defineProperty(Element.prototype, 'inView', {
                        // Value
                        value: function inView() {
                            // Initialization > (Left, Top)
                            let left = this.offsetLeft,
                                top = this.offsetTop;

                            /* Loop
                                Index all parents of Target.

                               > Update > (Left, Top)
                            */
                            for (let i = 0; i < this.parentPath; i += 1) {
                                left += this.parentPath[i];
                                top += this.parentPath[i]
                            }

                            // Return
                            return !arguments[0] == !!0 ? left < (innerWidth + pageXOffset) && pageXOffset < (left + this.offsetWidth) && pageYOffset < (this.offsetHeight + top) && top < (innerHeight + pageYOffset) : left > ~-pageXOffset && (left + this.offsetWidth) < (pageXOffset + innerWidth + 1) && top > ~-pageYOffset && (this.offsetHeight + top) < (pageYOffset + innerHeight + 1)
                        }
                    });

                    // Insert Adjacent Comment
                    Element.prototype.insertAdjacentComment || Object.defineProperty(Element.prototype, 'insertAdjacentComment', {
                        // Value
                        value: function insertAdjacentComment() {
                            // Target > Insert Adjacent HTML
                            this.insertAdjacentHTML(String(arguments[0]), `<!--${arguments[1]}-->`, [...arguments].slice(2))
                        }
                    });

                    // Open
                    Element.prototype.open || Object.defineProperty(Element.prototype, 'open', {
                        // Value
                        value: function open() {
                            // Modification > Target
                                // Data Close
                                this.setAttribute('data-close', !!0);

                                // Data Open
                                this.setAttribute('data-open', !0)
                        }
                    });

                    // Replace Attribute
                    Element.prototype.replaceAttribute || Object.defineProperty(Element.prototype, 'replaceAttribute', {
                        // Value
                        value: function replaceAttribute() {
                            // Modification > Target > [Argument (0, 1)]
                            !this[arguments[0]] || (this[arguments[0]] = '');
                            this.removeAttribute(arguments[0]);
                            this.setAttribute(arguments[1], arguments[2] || '')
                        }
                    });

                    /* Set Attribute
                            --- UPDATE REQUIRED ---
                                @lapys: Should also apply to String-value-based attributes such as
                                    attribute-name='"Hello, World!" is a String, right?'
                    */
                    Element.prototype.setAttr || Object.defineProperty(Element.prototype, 'setAttr', {
                        // Value
                        value: function setAttr() {
                            /* Logic
                                    If
                                        Argument 0 is not an Attribute.
                            */
                            if ((arguments[0] || []).constructor !== window.Attr) {
                                // Initialization > Arguments
                                let Arguments = [...arguments];

                                // Update > (Name, Value)
                                Arguments[0] = String(Arguments[0]);
                                Arguments[1] = String(Arguments[1]).replace(/\\,/g, `::lapysjs_${alphabetString}::`);
                                Arguments[3] = [...String(Arguments.slice(2))].removeElements(',');

                                /* Logic
                                        If
                                            there is a second Argument.
                                */
                                if (arguments.length > 1) {
                                    /* Loop
                                            Index all Names.

                                        > Modification > Target > [Name]
                                    */
                                    for (let i = 0; i < max(Arguments[0].split(/,/g), Arguments[1].split(/,/g).concat(Arguments[3])); i += 1)
                                        Arguments[0].split(/,/g)[i] ? this.setAttribute(Arguments[0].split(/,/g)[i].trim(), String((Arguments[1].split(/,/g).concat(Arguments[3]) || [])[i] || '').replace(RegExp(`::lapysjs_${alphabetString}::`, 'g'), ',').trim()) : this.setAttribute(Arguments[0].split(/,/g)[~-Arguments[0].split(/,/g).length].trim(), String((Arguments[1].split(/,/g).concat(Arguments[3]) || [])[i] || '').replace(RegExp(`::lapysjs_${alphabetString}::`, 'g'), ',').trim())
                                }

                                else
                                    /* Loop
                                            Index all Names.

                                        > Modification > Target > [Name]
                                    */
                                    for (let i = 0; i < max(Arguments[0].split(/,/g), Arguments[1].split(/,/g).concat(Arguments[3])); i += 1)
                                        Arguments[0].split(/,/g)[i] ? this.setAttribute(Arguments[0].split(/,/g)[i].trim(), '') : this.setAttribute(Arguments[0].split(/,/g)[~-Arguments[0].split(/,/g).length].trim(), '');

                                // Modification > Target > [Name]
                                !(Arguments[0] === 'class' || Arguments[0] === 'style') || this.setAttribute(Arguments[0], this.getAttribute(Arguments[0]).trim())
                            }

                            else
                                // Modification > Target > Argument 0
                                this.setAttributeNode(arguments[0].cloneNode(!0))
                        }
                    });

                    /* Attribute
                            --- WARN ---
                                This method can only be defined after the 'Element.getAttr' and 'Element.setAttr' method.
                    */
                    Element.prototype.attr || Object.defineProperty(Element.prototype, 'attr', {
                        // Value
                        value: function attr() {
                            // Modification > Target > [Argument 0]
                            (arguments.length < 2) || this.setAttr(arguments[0], arguments[1]);
                            ((arguments[0] || []).constructor !== window.Attr) || this.setAttr(arguments[0]);

                            // Return
                            return this.getAttr(arguments[0].name || arguments[0])
                        }
                    });

                    /* Set CSS
                            --- NOTE ---
                                @lapys: The object encoder needs update.
                    */
                    Element.prototype.setCSS || Object.defineProperty(Element.prototype, 'setCSS', {
                        // Value
                        value: function setCSS() {
                            // Initialization > Arguments
                            let Arguments = [...arguments];

                            // Update > Argument (0, 1)
                            isObject(Arguments[0], !0) || ((Arguments[0] || '').constructor === Array) || (Arguments[0] = [Arguments[0]]);
                            isObject(Arguments[0], !0) || ((Arguments[1] || '').constructor === Array) || (Arguments[1] = [Arguments[1]]);

                            /* Logic
                                    If
                                        Argument 0 is an Object.
                            */
                            if (isObject(Arguments[0], !0)) {
                                // Initialization > Data, Metadata
                                let data = [],
                                    metadata = [];

                                /* Loop
                                        Index Argument 0.
                                */
                                for (let i = 0; i < Object.keys(Arguments[0]).length; i += 1) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (isObject(Arguments[0][Object.keys(Arguments[0])[i]], !0))
                                        /* Loop
                                                [for statement]

                                            > Update > Data
                                        */
                                        for (let j = 0; j < Object.keys(Arguments[0][Object.keys(Arguments[0])[i]]).length; j += 1)
                                            data.push(`${Object.keys(Arguments[0])[i]}-${Object.keys(Arguments[0][Object.keys(Arguments[0])[i]])[j]}`);

                                    else if (typeof Object.keys(Arguments[0])[i] == 'string')
                                        // Update > Data
                                        data.push(Object.keys(Arguments[0])[i].replace(/[A-Z]/g, data => {
                                            // Return
                                            return `-${data.toLowerCase()}`
                                        }));

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (typeof Arguments[0][Object.keys(Arguments[0])[i]] == 'string')
                                        // Metadata > Push
                                        metadata.push(Arguments[0][Object.keys(Arguments[0])[i]]);

                                    else if (isObject(Arguments[0][Object.keys(Arguments[0])[i]], !0))
                                        /* Loop
                                                [for statement]

                                            > Metadata > Push
                                        */
                                        for (let j = 0; j < Object.keys(Arguments[0][Object.keys(Arguments[0])[i]]).length; j += 1)
                                            metadata.push(Arguments[0][Object.keys(Arguments[0])[i]][Object.keys(Arguments[0][Object.keys(Arguments[0])[i]])[j]])
                                }

                                // Update > Arguments
                                Arguments = Arguments.slice(1);
                                Arguments.unshift(data, metadata)
                            }

                            /* Loop
                                    Index Argument 0.
                            */
                            for (let i = 0; i < Arguments[0].length; i += 1)
                                /* Logic
                                        If
                                            Argument 0 and Argument 1 exist.
                                */
                                if (
                                    (
                                        Arguments[0][i] !== null ||
                                        Arguments[0][i] !== void 0
                                    ) &&
                                    (
                                        Arguments[1][i] !== null ||
                                        Arguments[1][i] !== void 0
                                    )
                                )
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (String(Arguments[1][i]).indexOf('!important') < 0)
                                        // Style > Target > [Argument 0]
                                        this.style[
                                            Arguments[0][i].replace(/[A-Z]/g, data => {
                                                // Return
                                                return `-${data.toLowerCase()}`
                                            })
                                        ] = String(String(Arguments[1][i]));

                                    else if (String(Arguments[1][i]).indexOf('!important') > -1) {
                                        // Target > Delete Style
                                        this.delStyle(Arguments[0][i].replace(/[A-Z]/g, data => {
                                            // Return
                                            return `-${data.toLowerCase()}`
                                        }));

                                        // Style > Target > [Argument 0]
                                        this.setAttribute('style', `${this.getAttribute('style') || ''}${Arguments[0][i].replace(/[A-Z]/g, data => {
                                            // Return
                                            return `-${data.toLowerCase()}`
                                        })}: ${String(Arguments[1][i])}`)
                                    }
                        }
                    });

                    // Add Event
                    EventTarget.prototype.addEvent || Object.defineProperty(EventTarget.prototype, 'addEvent', {
                        // Value
                        value: function addEvent() {
                            /* Logic
                                    If
                                        Argument 1 is a Function.
                            */
                            if (typeof arguments[1] == 'function')
                                /* Loop
                                        Index all modified Arguments.
                                */
                                for (let i = 0; i < Object.values([...arguments].slice(1)).length; i += 1)
                                    /* Loop
                                            Index all Listeners.
                                    */
                                    for (let j = 0; j < String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g).length; j += 1) {
                                        // Modification > Target > Custom Events
                                        (this || window).customEvents = (this || window).customEvents || {fallback: !0};
                                            // [Argument 0]
                                            (this || window).customEvents[String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j]] = typeof document.createEvent == 'function' ? document.createEvent('Event') : document.createEventObject();
                                                // [Argument 0] > Initialize Event
                                                typeof (this || window).customEvents[String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j]].initEvent == 'function' ? (this || window).customEvents[String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j]].initEvent(String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j], !0, !0) : !!0;

                                        // Event > Target > [Argument 0]
                                        (this || window).setEvent(String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j], Object.values([...arguments].slice(1))[i], !!0)
                                }
                        }
                    });

                    // Delete Event
                    EventTarget.prototype.delEvent || Object.defineProperty(EventTarget.prototype, 'delEvent', {
                        // Value
                        value: function delEvent() {
                            /* Logic
                                    If
                                        Argument 1 exists.
                            */
                            if (arguments.length > 1)
                                /* Loop
                                        Index all Events in Argument 0.
                                */
                                for (let i = 0; i < String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g).length; i += 1)
                                    /* Loop
                                            Index all Listeners in Argument 1.

                                        > Error Handling
                                    */
                                    for (let j = 0; j < Object.values([...arguments].slice(1)).length; j += 1)
                                        try {
                                            // Deletion
                                            document.removeEventListener ?
                                                (this || window).removeEventListener(String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i], Object.values([...arguments].slice(1))[j]) :
                                                (this || window).detachEvent(`on${String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i]}`, Object.values([...arguments].slice(1))[j])
                                        }

                                        catch (error) {
                                            // LapysJS > Error
                                            LapysJS.error(error)
                                        }

                            else
                                /* Loop
                                        Index all Target's Event of the specified type.

                                    > Deletion
                                */
                                for (let i = 0; i < (this || window).getEvents()[String(arguments[0])].length; i += 1)
                                    document.removeEventListener ?
                                        (this || window).removeEventListener((this || window).getEvents()[String(arguments[0])][i].type, (this || window).getEvents()[String(arguments[0])][i].listener) :
                                        (this || window).detachEvent(`on${(this || window).getEvents()[String(arguments[0])][i].type}`, (this || window).getEvents()[String(arguments[0])][i].listener)
                        }
                    });

                    // Events
                    EventTarget.prototype['LapysJS events'] = new (function LapysJSEventMap() {});

                    // Get Event
                    EventTarget.prototype.getEvent || Object.defineProperty(EventTarget.prototype, 'getEvent', {
                        // Value
                        value: function getEvent() {
                            // Initialization > Target
                            let that = this;

                            // Return
                            return (
                                typeof window.getEventListeners == 'function' ?
                                    (new (function LapysJSEventMap() {
                                        /* Loop
                                                Index all Event Listeners.

                                            > Modification > Target > [Event Listener]
                                        */
                                        for (let i = 0; i < Object.keys(getEventListeners(that || window)).length; i += 1)
                                            this[Object.keys(getEventListeners(that || window))[i]] = getEventListeners(that || window)[Object.keys(getEventListeners(that || window))[i]]
                                    }))[String(arguments[0])] :
                                    ((this || window)['LapysJS events'] || new (function LapysJSEventMap() {}))[String(arguments[0])]
                                ) || null
                        }
                    });

                    // Get Events
                    EventTarget.prototype.getEvents || Object.defineProperty(EventTarget.prototype, 'getEvents', {
                        // Value
                        value: function getEvents() {
                            // Initialization > Target
                            let that = this,
                                metadata;

                            /* Initialization > Data
                                    --- NOTE ---
                                        @lapys: If Meta Data is truthy, then there is no
                                            need to track down Event handlers and add them to the Data.

                                    --- UPDATE REQUIRED ---
                                        @lapys: Fallback should be able to track Event handlers.
                            */
                            let data = typeof window.getEventListeners == 'function' ?
                                new (function LapysJSEventMap() {
                                    // Update > Meta Data
                                    metadata = !0;

                                    /* Loop
                                            Index all Event Listeners.

                                        > Modification > Target > [Event Listener]
                                    */
                                    for (let i = 0; i < Object.keys(getEventListeners(that || window)).length; i += 1)
                                        this[Object.keys(getEventListeners(that || window))[i]] = getEventListeners(that || window)[Object.keys(getEventListeners(that || window))[i]]
                                }) :
                                (this || window)['LapysJS events'] || new (function LapysJSEventMap() {});

                            // Return
                            return data
                        }
                    });

                    // Invoke Event
                    EventTarget.prototype.invokeEvent || Object.defineProperty(EventTarget.prototype, 'invokeEvent', {
                        // Value
                        value: function invokeEvent() {
                            // Target > (Add, Run) Event
                            (this || window).addEvent.apply(this || window, [...arguments]);
                            (this || window).runEvent.apply(this || window, [...arguments])
                        }
                    });

                    // Invoke Full Screen
                    EventTarget.prototype.invokeFullscreen || Object.defineProperty(EventTarget.prototype, 'invokeFullscreen', {
                        // Value
                        value: function invokeFullscreen() {
                            // Initialization > Target
                            let that = this === window ? document.documentElement : (this || document.documentElement);

                            // Error Handling
                            try {
                                /* Logic
                                        If
                                            the document is in Fullscreen.

                                    > <html> > ((| Mozilla | Microsoft | Webkit) Request Fullscreen | Alert | Modification > Target > Data Fullscreen)
                                */
                                if (
                                    screen.height !== innerHeight &&
                                    !this.hasAttribute('data-fullscreen')
                                ) {
                                    !!arguments[0] || alert(`[LapysJS ${LapysJS.version}] => Press the 'Esc' key to exit fullscreen.`);

                                    that.setAttribute('data-fullscreen', '');

                                    (typeof that.requestFullscreen != 'function') || that.requestFullscreen();
                                    (typeof that.mozRequestFullScreen != 'function') || that.mozRequestFullScreen();
                                    (typeof that.msRequestFullscreen != 'function') || that.msRequestFullscreen();
                                    (typeof that.webkitRequestFullScreen != 'function') || that.webkitRequestFullScreen()
                                }

                                else {
                                    that.removeAttribute('data-fullscreen');

                                    (typeof document.exitFullscreen != 'function') || document.exitFullscreen();
                                    (typeof document.mozCancelFullScreen != 'function') || document.mozCancelFullScreen();
                                    (typeof document.msExitFullscreen != 'function') || document.msExitFullscreen();
                                    (typeof document.webkitCancelFullScreen != 'function') || document.webkitCancelFullScreen()
                                }
                            }

                            catch (error) {
                                // LapysJS > Error
                                LapysJS.error(error)
                            }
                        }
                    });

                    // Observe Event
                    EventTarget.prototype.observeEvent || Object.defineProperty(EventTarget.prototype, 'observeEvent', {
                        // Value
                        value: function observeEvent() {
                            // Initialization > (Data, Metadata, Target)
                            let data = (arguments[0] || '').constructor === Array ? arguments[0] : [arguments[0]],
                                metadata = [...arguments].slice(1),
                                that = this;

                            // Event > Target > [Metadata 0]
                            !(
                                (data[0] || []).constructor.name.indexOf('Element') > -1 ||
                                typeof (data[0] || []).tagName == 'string'
                            ) || this.setEvent(String(metadata[0]), function observeEvent(event) {
                                // Function > Metadata 1
                                (data.indexOf(event.path[0]) < 0) || metadata[1].call(that, event)
                            }, metadata[2], metadata[3])
                        }
                    });

                    // Observe Event By Query Selector
                    EventTarget.prototype.observeEventByQuerySelector || Object.defineProperty(EventTarget.prototype, 'observeEventByQuerySelector', {
                        // Value
                        value: function observeEventByQuerySelector() {
                            // Initialization > (Data, Metadata, Target)
                            let data = String(arguments[0]),
                                metadata = [...arguments].slice(1),
                                that = this;

                            // Event > Target > [Metadata 0]
                            this.setEvent(String(metadata[0]), function observeEvent(event) {
                                // Function > Metadata 1
                                ([...document.querySelectorAll(data)].indexOf(event.path[0]) < 0) || metadata[1].call(that, event)
                            }, metadata[2], metadata[3])
                        }
                    });

                    // [Query Selector (All)]
                    EventTarget.prototype.$$ || Object.defineProperty(EventTarget.prototype, '$$', {
                        // Value
                        value: function LapysJSQuerySelector() {
                            /* Logic
                                    If
                                        Argument 1 is not 0.
                            */
                            if (arguments[1] != 0) {
                                /* Logic
                                        Switch case to Argument 1.
                                */
                                switch (arguments[1]) {
                                    // Array
                                    case 'array':
                                        // Return
                                        return [...((this === window ? document : this) || document).querySelectorAll(String(arguments[0]))];
                                        break;

                                    // Length
                                    case 'length':
                                        // Return
                                        return ((this === window ? document : this) || document).querySelectorAll(String(arguments[0])).length;
                                        break;

                                    // ~Length
                                    case '~length':
                                        // Return
                                        return ~-((this === window ? document : this) || document).querySelectorAll(String(arguments[0])).length
                                }

                                /* Logic
                                        If
                                            Argument 1 is a Number,

                                        else if
                                            Argument 1's query selection does not have a second node.

                                    > Return
                                */
                                if (typeof arguments[1] == 'number')
                                    return ((this === window ? document : this) || document).querySelectorAll(String(arguments[0]))[parseInt(arguments[1])];

                                else if (!((this === window ? document : this) || document).querySelectorAll(String(arguments[0]))[1])
                                    return ((this === window ? document : this) || document).querySelector(String(arguments[0]));

                                else
                                    return ((this === window ? document : this) || document).querySelectorAll(String(arguments[0]))
                            }

                            else
                                // Return
                                return ((this === window ? document : this) || document).querySelector(String(arguments[0]))
                        }
                    });
                        /* [Descendant Element Query Selector (All)]
                                --- NOTE ---
                                    @lapys: There might be some minor bugs (emphasis on the word, 'might').
                        */
                        EventTarget.prototype._$ || Object.defineProperty(EventTarget.prototype, '_$', {
                            // Value
                            value: function LapysJSQuerySelector() {
                                // Error Handling
                                try {
                                    // Initialization > (Target, Result)
                                    let that = (this === window || !this ? document : this).cloneNode(!0),
                                        result;

                                    /* Loop
                                            Index all child elements of Target.

                                        > Modification > Target > Child Element > Inner HTML
                                    */
                                    for (let i = 0; i < that.children.length; i += 1)
                                        that.children[i].innerHTML = '';

                                    /* Logic
                                            [if:else if:else statement]

                                        > Update > Result
                                    */
                                    if ((that.$$.apply(that, [...arguments])[0] || document.head).tagName === document.documentElement.tagName)
                                        result = [document.documentElement.clone(!0)];

                                    else if (
                                        (that.$$.apply(that, [[...arguments][0]])[0] || that.$$.apply(that, [[...arguments][0]])).tagName === document.documentElement.tagName &&
                                        typeof that.$$.apply(that, [...arguments]) == 'number'
                                    )
                                        result = [...arguments].indexOf('~length') > -1 ? 0 : 1;

                                    else
                                        result = (that.$$.apply(that, [...arguments])[0] || document.head).tagName === document.documentElement.tagName ? [document.documentElement.clone(!0)] : that.$$.apply(that, [...arguments]);

                                    /* Loop
                                            Index all Target's children.
                                    */
                                    for (let i = ~-this.children.length; i > -1; i -= 1)
                                        /* Logic
                                                If
                                                    the Target child is probably the same as the Result.
                                        */
                                        if (this.children[i].CSSSelector === result.CSSSelector) {
                                            // Update > Result
                                            result = this.children[i];

                                            // Break
                                            break
                                        }

                                    // Return
                                    return result || null
                                }

                                catch (error) {
                                    // Return
                                    return null
                                }
                            }
                        });

                    // Run Event
                    EventTarget.prototype.runEvent || (EventTarget.prototype.runEvent = function runEvent() {
                        // Initialization > Arguments
                        let Arguments = [];

                        /* Loop
                                Index all Arguments.

                            > Update > Arguments
                        */
                        for (let i = 0; i < arguments.length; i += 1)
                            Arguments = Arguments.concat(String(arguments[i]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g));

                        /* Loop
                                Index all Arguments.
                        */
                        for (let i = 0; i < Arguments.length; i += 1)
                            // Error Handling
                            try {
                                // Target > (DIspatch | Fire) Event
                                document.createEvent ? (this || window).dispatchEvent((this || window).customEvents[String(Arguments[i])]) : (this || window).fireEvent(`on ${Arguments[i]}`, (this || window).customEvents[String(Arguments[i])])
                            }

                            catch (error) {
                                /* Logic
                                        If
                                            Document.prototype.createEvent is defined.
                                */
                                if (typeof document.createEvent == 'function') {
                                    // Initialization > Event
                                    let event = document.createEvent('HTMLEvents');

                                    // Event > Initialize Event
                                    event.initEvent(String(Arguments[i]), !!0, !0);

                                    // Target > Dispatch Event
                                    (this || window).dispatchEvent(event)
                                }

                                else
                                    // Target > Fire Event
                                    (this || window).fireEvent(`on ${Arguments[i]}`)
                            }
                    });
                        // Trigger
                        EventTarget.prototype.trigger || Object.defineProperty(EventTarget.prototype, 'trigger', {value: EventTarget.prototype.runEvent});

                    // Set Event
                    EventTarget.prototype.setEvent ||  Object.defineProperty(EventTarget.prototype, 'setEvent', {
                        // Value
                        value: function setEvent() {
                            // Initialization > Data
                            let data = String(arguments[0]);

                            /* Loop
                                    Index all Data.
                            */
                            for (let i = 0; i < String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g).length; i += 1) {
                                // Update > Data
                                (String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, '') !== '_focus') || (data = data.replace('_focus', 'blur focus'));
                                (String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, '') !== '_hover') || (data = data.replace('_hover', 'mouseleave mouseover'));
                                (String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, '') !== '_key') || (data = data.replace('_key', 'keydown, keypress keyup'));
                                (String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, '') !== '_mouse') || (data = data.replace('_mouse', 'mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel'));
                                (String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, '') !== '_seek') || (data = data.replace('_seek', 'seeked seeking'));
                                (String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, '') !== '_update') || (data = data.replace('_update', 'change input'))
                            }

                            // Modification > Target > Events
                            (this || window)['LapysJS events'] = (this || window)['LapysJS events'] || new (function LapysJSEventMap() {});

                            /* Loop
                                    Index all Data.
                            */
                            for (let i = 0; i < String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g).length; i += 1) {
                                // Update > Target > Events
                                (this || window)['LapysJS events'][
                                    (index => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '') !== 'online' &&
                                            String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '').startsWith('on')
                                        )
                                            return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '').replace('on', '');

                                        else
                                            return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '')
                                    })(i)
                                ] = (this || window)['LapysJS events'][
                                    (index => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '') !== 'online' &&
                                            String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '').startsWith('on')
                                        )
                                            return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '').replace('on', '');

                                        else
                                            return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '')
                                    })(i)
                                ] || [];

                                (this || window)['LapysJS events'][
                                    (index => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '') !== 'online' &&
                                            String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '').startsWith('on')
                                        )
                                            return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '').replace('on', '');

                                        else
                                            return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '')
                                    })(i)
                                ].push({
                                    // Listener
                                    listener: arguments[1],

                                    // Type
                                    type: (index => {
                                        // Return
                                        return String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[index].replace(/ /g, '')
                                    })(i),

                                    // Use Capture
                                    useCapture: !!arguments[2],

                                    // Wants Untrusted
                                    wantsUntrusted: !!arguments[3]
                                });

                                // Event > Target > [Data]
                                typeof document.addEventListener == 'function' ?
                                    (this || window).addEventListener(String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, ''), arguments[1], !!arguments[2], !!arguments[3]) :
                                    (this || window).attachEvent(String(data).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[i].replace(/ /g, ''), arguments[1], !!arguments[2], !!arguments[3])
                            }
                        }
                    });

                    // Delete
                    Node.prototype.delete || (Node.prototype.delete = function Delete() {
                        // Error Handling
                        try {
                            // Deletion
                            this.remove()
                        }

                        catch (error) {
                            // Initialization > Target
                            let that = this;

                            // Set Timeout
                            setTimeout(() => {
                                // Error Handling
                                try {
                                    try {
                                        // Deletion
                                        that.remove()
                                    }

                                    catch (error) {
                                        // Error Handling
                                        try {
                                            // Deletion
                                            that.parentNode.removeChild(that)
                                        }

                                        catch (error) {
                                            // LapysJS > Error
                                            LapysJS.error(error)
                                        }
                                    }
                                }

                                catch (error) {}
                            })
                        }
                    });

                    // Insert Child
                    Node.prototype.insertChild || Object.defineProperty(Node.prototype, 'insertChild', {
                        // Value
                        value: function insertChild() {
                            /*
                                    --- NOTE ---
                                        Minified polyfill for the 'ParentNode.prepend' method.
                            */
                            (function(arr){arr.forEach(function(item){if(item.hasOwnProperty('prepend'))return;Object.defineProperty(item,'prepend',{configurable:!0,enumerable:!0,value:function prepend(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)))});this.insertBefore(docFrag,this.firstChild)},writable:!0})})})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

                            // Insertion > Element
                            this[(str((arguments[0] !== 'begin') || str((!this.prepend || 'prepend')).replace('true', 'cloneNode')).replace('true', str((arguments[0] !== 'end') || str((!this.append || 'append')).replace('true', 'appendChild')).replace('true', '')) || 'cloneNode')](arguments[1])
                        }
                    });

                    /* CSS Selector
                            --- WARN ---
                                @lapys: Strings should not be placed as values in CSS attributes.
                    */
                    Element.prototype.CSSSelector || Object.defineProperty(Element.prototype, 'CSSSelector', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function getCSSSelector() {
                            // Initialization
                                // CSS Selector, Target
                                let CSSSelector = '',
                                    that = this;

                            // Update > CSS Selector
                            CSSSelector = (
                                that.tagName.toLowerCase() +
                                (() => {
                                    // Initialization > Classes
                                    let Classes = '';

                                    /* Logic
                                            If the Target has a class.
                                    */
                                    if (that.getAttribute('class'))
                                        /* Loop
                                                Index all the Target's class nodes.
                                        */
                                        for (let i = 0; i < that.getAttribute('class').split(/ /g).length; i += 1)
                                            /* Logic
                                                    If
                                                        the class node has any 'unusual''characters.

                                                > Update > Classes
                                            */
                                            if (that.getAttribute('class').split(/ /g)[i].replace(/[a-z]|[A-Z]|[0-9]|-|_|\$/g, '').trim() !== '')
                                                Classes += `[class='${that.getAttribute('class').split(/ /g)[i]}']`;

                                            else
                                                Classes += `.${that.getAttribute('class').split(/ /g)[i]}`;

                                    // Return
                                    return Classes
                                })() +

                                // ID
                                (() => {
                                    /* Logic
                                            If
                                                the Target has an ID.
                                    */
                                    if (that.id)
                                        /* Logic
                                                If
                                                    the Target ID has any 'unusual''characters.

                                            > Return
                                        */
                                        if (that.id.replace(/[a-z]|[A-Z]|[0-9]|-|_|\$/g, '').trim() !== '')
                                            return `[id='${that.id}']`;

                                        else
                                            // Return
                                            return `#${that.id}`;

                                    // Return
                                    return ''
                                })() +

                                // Attributes
                                (() => {
                                    // Initialization > Attributes
                                    let thatAttributes = '';

                                    /* Loop
                                            Index the element"s attributes.
                                    */
                                    for (let i = 0; i < that.attributes.length; i += 1)
                                        /* Logic
                                                If
                                                    the attribute name is not 'class' and 'id'.
                                        */
                                        if (
                                            that.attributes[i].name !== 'class' &&
                                            that.attributes[i].name !== 'id'
                                        )
                                            // Update > Attributes
                                            thatAttributes += `[${that.attributes[i].name}='${(that.attributes[i].value || '').replace(/'/g, "\"")}']`;

                                    // Return
                                    return thatAttributes
                                })()
                            );

                            // Return
                            return CSSSelector.replace(/=\'\'/g, '')
                        },

                        /* Set
                                --- WARN ---
                                    *@lapys: The CSSSelector parameter is necessary, trust me,
                        */
                        set: function setCSSSelector(CSSSelector) {
                            /* Update > CSS Selector
                                    --- WARN ---
                                        Regular expression to fix strings like
                                            "[name=viewport" into "[name='viewport']"
                                            required.
                            */
                            CSSSelector += ' ';
                            CSSSelector = CSSSelector.replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\'\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\{\}\«\»\ ]|){0,}\.([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\'\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\{\}\«\»\ ]|){0,}\]/g, data => {
                                // Return
                                return data.replace(/\./g, `::lapysjs_period${alphabetString}::`)
                            }).replace(/\.([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}/g, data => {
                                // Return
                                return `[class='${data.slice('.'.length)}']`
                            }).replace(RegExp(`::lapysjs_period${alphabetString}::`, 'g'), '.').replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\$\%\&\'\(\)\*\+\,\;\-\.\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\{\}\«\»\ ]|){0,}\]/g, data => {
                                // Return
                                return data.replace(/#/g, `::lapysjs_hash${alphabetString}::`)
                            }).replace(/#([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}/g, data => {
                                // Return
                                return `[id='${data.slice('.'.length)}']`
                            }).replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\[/g, data => {
                                // Return
                                return `[${data.slice('['.length).getBeforeChar('[')}][`
                            }).replace(RegExp(`::lapysjs_hash${alphabetString}::`, 'g'), '#').replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}(\]| )/g, data => {
                                // Return
                                return `${data.getBeforeChar('=')}='${data.getAfterChar('=').slice(0, -']'.length)}'${data.lastChar.trim() || ']'}`
                            }).trim();

                            /* String Data > Match
                                    --- WARN ---
                                        This is a temporary cover-up for the String 'match' method.
                            */
                            String.prototype['LapysJS match'] = function match() {
                                // Return
                                return this.match.apply(this, arguments) || []
                            };

                            /* Loop
                                    Index all 'classes' in the CSS Selector.

                                > Modification > Target > Class
                            */
                            for (let i = 0; i < CSSSelector['LapysJS match'](/\[class='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g).length; i += 1)
                                this.addClass(CSSSelector['LapysJS match'](/\[class='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g)[i].slice(`[class='`.length, -`']`.length));

                            // Modification > Target > Class
                            this.getAttribute('class') || this.removeAttribute('class');

                            // Modification > Target > ID
                            this.id = (CSSSelector['LapysJS match'](/\[id='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g)[~-CSSSelector['LapysJS match'](/\[id='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g).length] || []).slice(`[id='`.length, -`']`.length);
                            this.id || this.removeAttribute('id');

                            /* Loop
                                    Index all attributes in the CSS Selector.
                            */
                            for (let i = 0; i < (CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g)) || []).length; i += 1)
                                /* Logic
                                        If
                                            the attribute is not a 'class'
                                                and
                                            the attribute is not an 'id'.
                                */
                                if (
                                    !CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].startsWith(`[class='`) &&
                                    !CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].startsWith(`[id='`)
                                )
                                    /* Logic
                                            If
                                                the attribute is a string property of the Target.

                                        > Modification > Target > [CSS Selector]
                                    */
                                    if ((this[CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].slice('['.length).getBeforeChar('=').replace(/data-/g, 'dataset.').replace(/-[a-z]/g, data => { return data[1].toUpperCase() })] || []).constructor.name === 'String')
                                        this[CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].slice('['.length).getBeforeChar('=').replace(/data-/g, 'dataset.').replace(/-[a-z]/g, data => { return data[1].toUpperCase() })] = CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].getAfterChar('=').slice(`'`.length, -`']`.length);

                                    else
                                        this.setAttribute(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].getBeforeChar('=').slice('['.length), CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].getAfterChar('=').slice(`'`.length, -`']`.length));

                            // Deletion
                            delete String.prototype['LapysJS match']
                        }
                    });

                    // Parent
                    Element.prototype.parent || Object.defineProperty(Element.prototype, 'parent', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function parent() {
                            // Return
                            return this.parentElement || this.parentNode
                        }
                    });

                    // Parent Path
                    document.createElement('a').parentPath || Object.defineProperty(Element.prototype, 'parentPath', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function parentPath() {
                            // Initialization
                                // Target
                                let that = this;

                                // Parent Nodes
                                let parents = [];

                            /* Logic
                                    While
                                        the Target is still defined.
                            */
                            while (that) {
                                // Update
                                    // Parent Nodes
                                    parents.push(that);

                                    // Target
                                    that = that.parentNode || that.parentElement
                            };

                            // Update > Parent Nodes
                            parents.push(window);

                            // Return
                            return parents
                        }
                    });

                    // Previous Element Siblings
                    Element.prototype.previousElementSiblings || Object.defineProperty(Element.prototype, 'previousElementSiblings', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function previousElementSiblings() {
                            // Initialization > Result
                            let result = [];

                            /* Loop
                                    [for statement]

                                > Update > Result
                            */
                            for (let i = 0; i < [...(this.parentElement || this.parentNode || {children: []}).children].length; i += 1)
                                ([...(this.parentElement || this.parentNode || {children: []}).children].indexOf([...(this.parentElement || this.parentNode || {children: []}).children][i]) > ~-[...(this.parentElement || this.parentNode || {children: []}).children].indexOf(this)) || result.push([...(this.parentElement || this.parentNode || {children: []}).children][i]);

                            // Return
                            return result.length > 0 ? result : null
                        }
                    });

                    // Next Element Siblings
                    Element.prototype.nextElementSiblings || Object.defineProperty(Element.prototype, 'nextElementSiblings', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function nextElementSiblings() {
                            // Initialization > Result
                            let result = [];

                            /* Loop
                                    [for statement]

                                > Update > Result
                            */
                            for (let i = 0; i < [...(this.parentElement || this.parentNode || {children: []}).children].length; i += 1)
                                ([...(this.parentElement || this.parentNode || {children: []}).children].indexOf([...(this.parentElement || this.parentNode || {children: []}).children][i]) < ([...(this.parentElement || this.parentNode || {children: []}).children].indexOf(this)) + 1) || result.push([...(this.parentElement || this.parentNode || {children: []}).children][i]);

                            // Return
                            return result
                        }
                    });

                    // Role
                    Element.prototype.role || Object.defineProperty(Element.prototype, 'role', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function getRole() {
                            // Return
                            return this.getAttribute('role') || ''
                        },

                        // Set
                        set: function setRole() {
                            // Modification > Target > Role
                            this.setAttribute('role', arguments[0])
                        }
                    });

                    // Siblings
                    Element.prototype.siblings || Object.defineProperty(Element.prototype, 'siblings', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function getSiblings() {
                            // Initialization > (Target, Array)
                            let that = this,
                                array = [];

                            /* Loop
                                    Index all Target's Parent's Children.
                            */
                            for (let i = 0; i < this.parentElement.children.length; i += 1)
                                array.push(this.parentElement.children[i]);

                            // Return
                            return array.filter(data => {
                                // Return
                                return data !== that
                            })
                        }
                    });

                    // Height
                    Element.prototype.height || Object.defineProperty(HTMLElement.prototype, 'height', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function getHeight() {
                            // Return
                            return this.getBoundingClientRect().height
                        },

                        // Set
                        set: function setHeight(number) {
                            // Target > Style > Height
                            this.style.height = `${number}px`
                        }
                    });

                    // Offset
                    Element.prototype.offset || (Object.defineProperty(HTMLElement.prototype, 'offset', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function offset() {
                            // Return
                            return this.getBoundingClientRect()
                        }
                    }));

                    // Pseudo
                    Element.prototype.__pseudo__ || Object.defineProperty(HTMLElement.prototype, '__pseudo__', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function getPseudo() {
                            // Initialization > Target
                            let that = this;

                            // Return
                            return new (function LapysJSPseudoAttributesList() {
                                // Initialization > LapysJS Pseudo Attributes List
                                let _LapysJSPseudoAttributesList = new (function LapysJSPseudoAttributesList() {});

                                /* Loop
                                        Index all Target's data sets.
                                */
                                for (let i = 0; i < Object.keys(that.dataset).length; i += 1)
                                    /* Logic
                                            [if:else if:else statement]

                                        > Update > LapysJS Pseudo Attributes List
                                    */
                                    if (
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('slide') > -1 && ((that.parentElement || {getAttribute: () => {}}).getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'active') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'buttons') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'buttonsLeftHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'buttonsRightHtml') ||
                                        Object.keys(that.dataset)[i] === 'close' ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1 && Object.keys(that.dataset)[i] === 'description') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'direction') ||
                                        (that === LapysJS.script && Object.keys(that.dataset)[i] === 'enable') ||
                                        (that.tagName === 'KEY-COMMAND' && Object.keys(that.dataset)[i] === 'eventKey') ||
                                        Object.keys(that.dataset)[i] === 'eventFunction' ||
                                        Object.keys(that.dataset)[i] === 'eventType' ||
                                        Object.keys(that.dataset)[i] === 'focus' ||
                                        (((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-time') > -1 || that.getAttribute('data-id') === 'media-controls-panel-timeline') && Object.keys(that.dataset)[i] === 'format') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media') > -1 && Object.keys(that.dataset)[i] === 'fullscreenButtonHtml') ||
                                        Object.keys(that.dataset)[i] === 'id' ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'indicators') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'indicatorsHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] === 'interval') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media') > -1 && Object.keys(that.dataset)[i] === 'loadButtonHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1 && Object.keys(that.dataset)[i] === 'mediaFormat') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media') > -1 && Object.keys(that.dataset)[i] === 'muteButtonHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1 && Object.keys(that.dataset)[i] === 'name') ||
                                        Object.keys(that.dataset)[i] === 'open' ||
                                        (that.tagName === 'INPUT' && Object.keys(that.dataset)[i] === 'placeholder') ||
                                        (that.tagName === 'TEXTAREA' && Object.keys(that.dataset)[i] === 'placeholder') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media') > -1 && Object.keys(that.dataset)[i] === 'playButtonHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media') > -1 && Object.keys(that.dataset)[i] === 'playpauseButtonHtml') ||
                                        Object.keys(that.dataset)[i] === 'selected' ||
                                        (((that.parentElement.parentElement || {getAttribute: () => {}}).getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && (that.getAttribute('class') || '').split(/ /g).indexOf('indicator') > -1 && Object.keys(that.dataset)[i] === 'slideIndex') ||
                                        (((that.parentElement.parentElement || {getAttribute: () => {}}).getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && (that.getAttribute('class') || '').split(/ /g).indexOf('slide') > -1 && Object.keys(that.dataset)[i] === 'slideIndex') ||
                                        (
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'text') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textCursorPosition') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textFormat') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textFunction') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textFunctionDelay') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textFunctionDuration') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textFunctionInitialDelay') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] === 'textFunctionSeparator')
                                        ) ||
                                        Object.keys(that.dataset)[i] === 'title' ||
                                        Object.keys(that.dataset)[i] === 'titleClass' ||
                                        Object.keys(that.dataset)[i] === 'titleCoordinate' ||
                                        Object.keys(that.dataset)[i] === 'titleStyle' ||
                                        Object.keys(that.dataset)[i] === 'toast' ||
                                        Object.keys(that.dataset)[i] === 'toastDelay' ||
                                        Object.keys(that.dataset)[i] === 'toastDuration' ||
                                        Object.keys(that.dataset)[i] === 'unknown' ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-time') > -1 && Object.keys(that.dataset)[i] === 'utcFormat')
                                    )
                                        _LapysJSPseudoAttributesList[Object.keys(that.dataset)[i].replace(/(h|H)(t|T)(m|M)(l|L)/g, 'HTML')] = that.dataset[Object.keys(that.dataset)[i]];

                                // Modification > LapysJS Pseudo Attributes List
                                Object.defineProperty(_LapysJSPseudoAttributesList, '__pseudo__', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function __pseudo__() {
                                        // Return
                                        return this
                                    }
                                });

                                /* Loop
                                        Index all LapysJS Pseudo Attributes List's elements.

                                    > Modification > Target > [LapysJS Pseudo Attributes List > Element]
                                */
                                for (let i = 0; i < Object.keys(_LapysJSPseudoAttributesList).length; i += 1)
                                    Object.defineProperty(this, Object.keys(_LapysJSPseudoAttributesList)[i], {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function getPseudo() {
                                            // Return
                                            return _LapysJSPseudoAttributesList[Object.keys(_LapysJSPseudoAttributesList)[i]]
                                        },

                                        // Set
                                        set: function setPseudo() {
                                            // Modification > Target > [Data...]
                                            that.setAttribute(`data-${Object.keys(_LapysJSPseudoAttributesList)[i].replace(/[A-Z]/g, data => {
                                                return `-${data.toLowerCase()}`
                                            })}`, arguments[0])
                                        }
                                    })
                            })
                        }
                    });

                    // Width
                    Element.prototype.width || Object.defineProperty(HTMLElement.prototype, 'width', {
                        // Configurable
                        configurable: !0,

                        // Enumerable
                        enumerable: !0,

                        // Get
                        get: function getWidth() {
                            // Return
                            return this.getBoundingClientRect().width
                        },

                        // Set
                        set: function setWidth(number) {
                            // Target > Style > Width
                            this.style.width = `${number}px`
                        }
                    });

                    /* Convert Frame to Image
                            --- UPDATE REQUIRED ---
                                @lapys: There has to be a better way for this to be done.

                                    The main goal is to return an <img> element whose source is
                                    directed to the specified frame.
                    */
                    HTMLVideoElement.prototype.convertFrameToImage || Object.defineProperty(HTMLVideoElement.prototype, 'convertFrameToImage', {
                        // Value
                        value: function convertFrameToImage() {
                            // Initialization > (Data(, Context), Metadata, Target)
                            let data = document.createElement('canvas'),
                                dataContext = data.getContext('2d'),
                                metadata = createElement('video', '', '', {src: this.src || decodeURIComponent(this.currentSrc)}),
                                that = this;

                            // Modification > Data > (Height, Width)
                            data.height = this.offset.height;
                            data.width = this.offset.width;

                            // Event > Metadata > Seeked
                            metadata.setEvent('seeked', function() {
                                // Data Context > Draw Image
                                dataContext.drawImage(metadata, 0, 0, that.offset.width, that.offset.height);

                                // Update > (LapysJS > Permanent Data) > Framed Image
                                LapysJS.permanentData.framedImage = data
                            });

                            // Modification > Metadata > Current Time
                            metadata.currentTime = parseInt(arguments[0]) || 0
                        }
                    });

        /* Components
                --- NOTE ---
                    @lapys: The 'LapysJS isModified' property helps the loop know which
                        Components have not been modified.
        */
            // On DOM Ready
            onDOMReady(function LapysJSScriptPlugIns() {
                // Accordion
                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewAccordion() {
                            // Initialization > Accordion
                            let accordion = document.querySelectorAll('.accordion:not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)');

                            /* Loop
                                    Index all Accordions.
                            */
                            for (let i = 0; i < accordion.length; i += 1)
                                /* Logic
                                        If
                                            the Accordion is not modified.
                                */
                                if (!accordion[i]['LapysJS isModified']) {
                                    // Function > Accordion
                                        // Close
                                        (typeof accordion[i]['LapysJS close'] == 'function') || Object.defineProperty(accordion[i], 'LapysJS close', {
                                            // Value
                                            value: function close() {
                                                // Modification > Target
                                                    // Data Close
                                                    this.setAttribute('data-close', !0);

                                                    // Data Open
                                                    this.setAttribute('data-open', !!0)
                                            }
                                        });
                                        accordion[i]['LapysJS close']();

                                        // Open
                                        (typeof accordion[i]['LapysJS open'] == 'function') || Object.defineProperty(accordion[i], 'LapysJS open', {
                                            // Value
                                            value: function open() {
                                                // Modification > Target
                                                    // Data Close
                                                    this.setAttribute('data-close', !!0);

                                                    // Data Open
                                                    this.setAttribute('data-open', !0)
                                            }
                                        });

                                    /* Logic
                                            If
                                                the Accordion has at least a Content
                                                    and
                                                the Accordion has at least a Header.
                                    */
                                    if (
                                        accordion[i].querySelector('[data-id=content') &&
                                        accordion[i].querySelector('[data-id=header')
                                    )
                                        // Modification > Accordion
                                            // Content
                                            Object.defineProperty(accordion[i], 'content', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function content() {
                                                    // Return
                                                    return [...this.querySelectorAll('[data-id=content')]
                                                }
                                            });

                                            // Header
                                            Object.defineProperty(accordion[i], 'header', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function header() {
                                                    // Return
                                                    return this.querySelector('[data-id=header')
                                                }
                                            });
                                                /* Loop
                                                        Index all Content and Header.

                                                    > Modification > (Content, Header) > Accordion
                                                */
                                                for (let j = 0; j < accordion[i].children.length; j += 1)
                                                    !(accordion[i].children[j].getAttribute('data-id') === 'content' || accordion[i].children[j].getAttribute('data-id') === 'header') || Object.defineProperty(accordion[i].children[j], 'accordion', {
                                                        // Configurable
                                                        configurable: !0,

                                                        // Enumerable
                                                        enumerable: !0,

                                                        // Get
                                                        get: function accordion() {
                                                            // Initialization > Data
                                                            let data;

                                                            /* Loop
                                                                    Index all the Target's parents.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Target Parent is an Accordion.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('accordion') > -1) {
                                                                    // Update > Data
                                                                    data = this.parentPath[i];

                                                                    // Break
                                                                    break
                                                                }

                                                            // Return
                                                            return data || this.parentElement
                                                        }
                                                    });

                                    // Event > Accordion > Click
                                    accordion[i].setEvent((accordion[i].getAttribute('data-event-type') || 'click').trim(), function toggleAccordion() {
                                        // Toggle
                                        this['LapysJS toggle'] ? this['LapysJS close']() : this['LapysJS open']();
                                        this['LapysJS toggle'] = !this['LapysJS toggle']
                                    });

                                    // Modification > Accordion > Is Modified
                                    accordion[i]['LapysJS isModified'] = !0
                                }
                    });

                // Carousel
                (function LapysJSScriptCarousel() {
                    // Initialization > Carousel
                    let carousel = document.querySelectorAll('.carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)');

                    /* Loop
                            Index all Carousel.

                        > Insertion
                    */
                    for (let i = 0; i < carousel.length; i += 1)
                        carousel[i].children[0] || carousel[i].appendChild(document.createElement('div'));

                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewCarousel() {
                        /* Loop
                                Index all Carousel.
                        */
                        for (let i = 0; i < carousel.length; i += 1)
                            /* Logic
                                    If
                                        the Carousel is not modified.
                            */
                            if (!carousel[i]['LapysJS isModified']) {
                                // Initialization > Toggle Slide Interval
                                let toggleSlideInterval = 0;

                                // Modification > Carousel
                                    // Active Slide
                                    Object.defineProperty(carousel[i], 'activeSlide', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function activeSlide() {
                                            // Return
                                            return this.containers.slides.querySelector('[data-active') || this.slides[0]
                                        }
                                    });

                                    // Buttons
                                    Object.defineProperty(carousel[i], 'buttons', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function buttons() {
                                            // Initialization > (Data, Target)
                                            let data = [...(this.containers.buttons || {children: []}).children],
                                                that = this;

                                                // Left
                                                Object.defineProperty(data, 'left', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getLeft() {
                                                        // Return
                                                        return data[0] || null
                                                    },

                                                    // Set
                                                    set: function setLeft() {
                                                        // Modification > Target > Data Buttons Left HTML
                                                        that.setAttribute('data-buttons-left-html', arguments[0].innerHTML || arguments[0])
                                                    }
                                                });

                                                // Right
                                                Object.defineProperty(data, 'right', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function getRight() {
                                                        // Return
                                                        return data[~-data.length] || null
                                                    },

                                                    // Set
                                                    set: function setRight() {
                                                        // Modification > Target > Data Buttons Right HTML
                                                        that.setAttribute('data-buttons-right-html', arguments[0].innerHTML || arguments[0])
                                                    }
                                                });

                                            // Return
                                            return data
                                        }
                                    });

                                    // Containers
                                    Object.defineProperty(carousel[i], 'containers', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function containers() {
                                            // Initialization > Data
                                            let data = [...this.children];
                                                // Buttons
                                                data.buttons = data[data.indexOf(this.querySelector('[data-id=buttons-container'))] || null;

                                                // Indicators
                                                data.indicators = data[data.indexOf(this.querySelector('[data-id=indicators-container'))] || null;

                                                // Slides
                                                data.slides = data[0] || null;

                                            // Return
                                            return data
                                        }
                                    });

                                    // Direction
                                    Object.defineProperty(carousel[i], 'direction', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function getDirection() {
                                            // Return
                                            return String(this.getAttribute('data-direction') || '')
                                        },

                                        // Set
                                        set: function setDirection() {
                                            // Modification > Target > Data Direction
                                            this.setAttribute('data-direction', String(arguments[0] || ''))
                                        }
                                    });

                                    // Indicators
                                    Object.defineProperty(carousel[i], 'indicators', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function getIndicators() {
                                            // Return
                                            return (this.containers.indicators || document.createElement('a')).children
                                        },

                                        // Set
                                        set: function setIndicators() {
                                            // Modification > Target > Data Indicators HTML
                                            this.setAttribute('data-indicators-html', arguments[0].innerHTML || arguments[0])
                                        }
                                    });

                                    // Interval
                                    Object.defineProperty(carousel[i], 'interval', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function getInterval() {
                                            // Return
                                            return +(this.getAttribute('data-interval') || '').replace(/ /g, '')
                                        },

                                        // Set
                                        set: function setInterval() {
                                            // Modification > Target > Data Interval
                                            this.setAttribute('data-interval', +String(arguments[0]).replace(/ /g, ''))
                                        }
                                    });

                                    // Slides
                                    Object.defineProperty(carousel[i], 'slides', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function slides() {
                                            // Return
                                            return this.containers.slides.children
                                        }
                                    });

                                    // Toggle Next Slide
                                    Object.defineProperty(carousel[i], 'toggleNextSlide', {
                                        // Value
                                        value: function toggleNextSlide() {
                                            // Modification > Target > Toggle Slide
                                            this.toggleSlide(this.slides[+this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') + 1] ? +this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') + 1 : 0)
                                        }
                                    });

                                    // Toggle Previous Slide
                                    Object.defineProperty(carousel[i], 'togglePreviousSlide', {
                                        // Value
                                        value: function togglePreviousSlide() {
                                            // Modification > Target > Toggle Slide
                                            this.toggleSlide(this.slides[+this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') - 1] ? +this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') - 1 : ~-this.slides.length)
                                        }
                                    });

                                    // Toggle Slide
                                    Object.defineProperty(carousel[i], 'toggleSlide', {
                                        // Value
                                        value: function toggleSlide() {
                                            // Initialization > Data
                                            let data = parseNumber(String(arguments[0]).replace(/ /g, ''));

                                            /* Loop
                                                    Index all Target's Slides.
                                            */
                                            for (let i = 0; i < this.slides.length; i += 1) {
                                                // Modification > Slide > Data Active
                                                this.slides[i].removeAttribute('data-active');

                                                // Style > Slide
                                                    // Display
                                                    (this.slides[i].getCSS('display').indexOf('inline') < 0) || (this.slides[i].setCSS('display', this.slides[i].getCSS('display').replace('inline-', '') + ' !important'));

                                                    // Left
                                                    (i > ~-data) || this.slides[i].setCSS('left', `-${this.offset.left - this.slides[i].offset.width}px`);
                                                    (i !== data) || this.slides[i].setCSS('left', `0px`);
                                                    (i < data + 1) || this.slides[i].setCSS('left', `${this.offset.right}px`);

                                                    // Top
                                                    this.slides[i].setCSS('top', `-${this.slides[i].offset.height * i}px`)
                                                }

                                            // Modification > Slide > Data Active
                                            this.slides[data].setAttribute('data-active', '')
                                        },

                                        // Writable
                                        writable: !0
                                    });

                            /* Loop
                                    Index all the Carousel's children.

                                > Modification > Carousel child
                            */
                            for (let j = 0; j < carousel[i].children.length; j += 1) {
                                // Class
                                carousel[i].children[j].addClass(`slide slide-${j}`);

                                // Data Slide Index
                                carousel[i].children[j].setAttribute('data-slide-index', j)
                            }

                            // Initialization > Data
                            let data = createElement('div', '.container[data-id=slides-container');
                                /* Insertion
                                        --- NOTE ---
                                            @lapys: This represents the Carousel's Slides Container.
                                */
                                data.appendChild(createDocumentFragment(carousel[i].innerHTML));

                            // Modification > Carousel > Inner HTML
                            carousel[i].innerHTML = data.outerHTML;

                            /* Insertion
                                    --- NOTE ---
                                        @lapys: This represents the Carousel's Buttons Container.
                            */
                            !carousel[i].hasAttribute('data-buttons') || carousel[i].appendChild(createElement('div', '.container[data-id=buttons-container'));
                                // Error Handling
                                try {
                                    // Insertion
                                    carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment(
                                        (carousel[i].getAttribute('data-buttons-left-html') || `<button class='button button-0' data-id=left-button>&larr;</button>`) +
                                        (carousel[i].getAttribute('data-buttons-right-html') || `<button class='button button-1' data-id=right-button>&rarr;</button>`)
                                    ))
                                }

                                catch (error) {
                                    // Insertion
                                    carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment(`<button class='button button-0' data-id=left-button>&larr;</button><button class='button button-1' data-id=right-button>&rarr;</button>`))
                                }

                            /* Insertion
                                    --- NOTE ---
                                        @lapys: This represents the Carousel's Indicators Container.
                            */
                            !carousel[i].hasAttribute('data-indicators') || carousel[i].appendChild(createElement('div', '.container[data-id=indicators-container'));
                                // Error Handling
                                try {
                                    // Insertion
                                    carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment(
                                        (element => {
                                            // Initialization > Data
                                            let data = '';

                                            /* Loop
                                                    Iterate over the Element's length of slides.

                                                > Update > Data
                                            */
                                            for (let i = 0; i < element.slides.length; i += 1)
                                                data += element.getAttribute('data-indicators-html') || `<a class='indicator indicator-${i}' data-slide-index=${i}> </a>`;

                                            // Return
                                            return data
                                        })(carousel[i])
                                    ))
                                }

                                catch (error) {
                                    // Insertion
                                    carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment(
                                        (element => {
                                            // Initialization > Data
                                            let data = '';

                                            /* Loop
                                                    Iterate over the Element's length of slides.

                                                > Update > Data
                                            */
                                            for (let i = 0; i < element.slides.length; i += 1)
                                                data += `<a class='indicator indicator-${i}' data-slide-index=${i}> </a>`;

                                            // Return
                                            return data
                                        })(carousel[i])
                                    ))
                                }

                            // Event > Carousel
                                // ([Data Event Type] | Click)
                                carousel[i].setEvent((carousel[i].getAttribute('data-event-type') || 'click').trim(), function carouselFocusEvent() {
                                    // Modification > Target > Data Selected
                                    this.setAttribute('data-selected', '')
                                });

                                // Mouse Down, Touch Start
                                carousel[i].setEvent('mousedown touchstart', function carouselUserGesture_SwipeToggleSlide(event) {
                                    // Modification > Target > Cursor Position X
                                    (carousel[i].getAttribute('class').trim().split(/ /g).indexOf('no-swipe') > -1) || (this['LapysJS eventPositionX'] = event.clientX || event.changedTouches[0].clientX)
                                });

                                // Mouse Up, Touch End
                                carousel[i].setEvent('mouseup touchend', function carouselUserGesture_SwipeToggleSlide(event) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (carousel[i].getAttribute('class').trim().split(/ /g).indexOf('no-swipe') < 0)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (event.constructor === window.MouseEvent) {
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Target > Toggle (Previous, Next) Slide
                                            */
                                            if (event.clientX < this['LapysJS eventPositionX'] - (innerWidth * (45 / 100)))
                                                this.togglePreviousSlide();

                                            else if (event.clientX > this['LapysJS eventPositionX'] + (innerWidth * (45 / 100)))
                                                this.toggleNextSlide()
                                        }

                                        else if (event.constructor === window.TouchEvent)
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Target > Toggle (Previous, Next) Slide
                                            */
                                            if (event.changedTouches[0].clientX > this['LapysJS eventPositionX'] + (innerWidth * (45 / 100)))
                                                this.togglePreviousSlide();

                                            else if (event.changedTouches[0].clientX < this['LapysJS eventPositionX'] - (innerWidth * (45 / 100)))
                                                this.toggleNextSlide()
                                });

                            /* Set Interval
                                    --- NOTE ---
                                        @lapys: This default interval allows the Carousel's speed to changed
                                        over time.
                            */
                            !(carousel[i].direction && carousel[i].interval) || setInterval(() => {
                                /* Logic
                                        If
                                            Toggle Slide Interval is greater than the Carousel's Interval
                                                and
                                            the Carousel still has a Direction.
                                */
                                if (
                                    toggleSlideInterval > carousel[i].interval &&
                                    carousel[i].direction.replace(/ /g, '')
                                ) {
                                    // Carousel > Toggle (Previous | Next) Slide
                                    carousel[i][`toggle${carousel[i].direction.replace(/ /g, '').replace('left', 'Previous').replace('right', 'Next')}Slide`]();

                                    // Update > Toggle Slide Interval
                                    toggleSlideInterval = 0
                                }

                                // Update > Toggle Slide Interval
                                toggleSlideInterval += .01
                            }, 10);

                            // Carousel > Toggle Slide
                            carousel[i].toggleSlide(0);

                            // Modification > Carousel > Is Modified
                            carousel[i]['LapysJS isModified'] = !0
                        }
                    });

                    /* Set Timeout
                            --- WARN ---
                                @lapys: The On DOM Change function
                                    processes quicker than the On DOM Node Added function.

                                    Therefore if these functions execute before their former,
                                    the browser will be stuck processing an infinite loop.
                    */
                    setTimeout(() => {
                        // On Node Change
                        onNodeChange(document.body, function LapysJSScriptCorrectCarousel() {
                            /* Loop
                                        Index all Carousel.
                                */
                                for (let i = 0; i < carousel.length; i += 1) {
                                    /* Loop
                                            While
                                                the Carousel has Buttons
                                                    and
                                                the Carousel does not have its Buttons Container.

                                        > Insertion
                                    */
                                    while (
                                        carousel[i].hasAttribute('data-buttons') &&
                                        !(carousel[i].containers || []).buttons
                                    )
                                        carousel[i].appendChild(createElement('div', '.container[data-id=buttons-container'));

                                    /* Loop
                                            While
                                                the Carousel has Indicators
                                                    and
                                                the Carousel does not have its Indicators Container.

                                        > Insertion
                                    */
                                    while (
                                        carousel[i].hasAttribute('data-indicators') &&
                                        !(carousel[i].containers || []).indicators
                                    )
                                        carousel[i].appendChild(createElement('div', '.container[data-id=indicators-container'));

                                    /* Loop
                                            While
                                                the Carousel does not have its Buttons
                                                    and
                                                the Carousel has its Buttons Container.
                                    */
                                    while (
                                        !carousel[i].hasAttribute('data-buttons') &&
                                        [...carousel[i].children].indexOf(carousel[i].querySelector('[data-id=buttons-container')) > -1
                                    )
                                        /* Loop
                                                Index all the Carousel's child elements.
                                        */
                                        for (let j = 0; j < carousel[i].children.length; j += 1)
                                            /* Logic
                                                    If
                                                        the child's Data ID is 'buttons-container'.
                                            */
                                            if (carousel[i].children[j].getAttribute('data-id') === 'buttons-container') {
                                                // Deletion
                                                carousel[i].children[j].remove();

                                                // Break
                                                break
                                            }

                                    /* Loop
                                            While
                                                the Carousel does not have its Indicators
                                                    and
                                                the Carousel has its Indicators Container.
                                    */
                                    while (
                                        !carousel[i].hasAttribute('data-indicators') &&
                                        [...carousel[i].children].indexOf(carousel[i].querySelector('[data-id=indicators-container')) > -1
                                    )
                                        /* Loop
                                                Index all the Carousel's child elements.
                                        */
                                        for (let j = 0; j < carousel[i].children.length; j += 1)
                                            /* Logic
                                                    If
                                                        the child's Data ID is 'indicators-container'.
                                            */
                                            if (carousel[i].children[j].getAttribute('data-id') === 'indicators-container') {
                                                // Remove
                                                carousel[i].children[j].remove();

                                                // Break
                                                break
                                            }

                                    /* Loop
                                            While
                                                the Carousel's first child element is not a Container.
                                    */
                                    while ([...carousel[i].children].indexOf(carousel[i].querySelector(':first-child:not(.container)')) > -1) {
                                        // Initialization > Loop Counter
                                        let j = i;

                                        // Insertion
                                        carousel[i].appendChild(carousel[i].children[0]);

                                        // Set Timeout
                                        setTimeout(() => {
                                            /* Loop
                                                    Index all the Carousel's Slides.
                                            */
                                            for (let i = 0; i < carousel[j].slides.length; i += 1) {
                                                // Modification > Slide
                                                    // Class
                                                    carousel[j].slides[i].delClass(`slide slide-${i}`);
                                                    carousel[j].slides[i].addClass(`slide slide-${i + 1}`);

                                                    // Data Slide Index
                                                    carousel[j].slides[i].setAttribute('data-slide-index', i + 1)
                                            }

                                            // Modification > (Carousel > Slide)
                                                // Class
                                                carousel[j].slides[~-carousel[j].slides.length].delClass(`slide slide-${carousel[j].slides[~-carousel[j].slides.length].getAttribute('data-slide-index')}`);
                                                carousel[j].slides[~-carousel[j].slides.length].addClass(`slide slide-0`);

                                                // Data Slide Index
                                                carousel[j].slides[~-carousel[j].slides.length].setAttribute('data-slide-index', 0);

                                            // Insertion
                                            carousel[j].containers.slides.insertBefore(carousel[j].slides[~-carousel[j].slides.length], carousel[j].slides[0]);

                                            // Carousel > Toggle Slide
                                            carousel[j].toggleSlide(carousel[j].activeSlide)
                                        })
                                    }

                                    // Insertion
                                    carousel[i].slides[0] || carousel[i].containers.slides.appendChild(document.createElement('div'));

                                    /* Loop {Inject New Slide}
                                            [do:while statement]
                                    */
                                    injectNewSlide: while (
                                        [...carousel[i].children].indexOf(carousel[i].querySelector(':not(.container)')) > -1 ||
                                        [...carousel[i].children].indexOf(carousel[i].querySelectorAll(':not(.container)')[~-carousel[i].querySelectorAll(':not(.container)').length]) > -1
                                    )
                                        /* Loop
                                                Pre-index all the Carousel's children.
                                        */
                                        for (let j = carousel[i].children.length - 1; j > -1; j -= 1)
                                            /* Logic
                                                    If
                                                        the child is not a Container
                                                            and
                                                        the child is not the first child,

                                                    else if
                                                        the child is the first child.
                                            */
                                            if (
                                                !carousel[i].children[j].hasClass('container') &&
                                                carousel[i].children[j] !== carousel[i].children[0]
                                            ) {
                                                // Insertion
                                                carousel[i].containers.slides.appendChild(carousel[i].children[j]);

                                                // Break
                                                break;
                                                break injectNewSlide
                                            }

                                            else if (carousel[i].children[j] === carousel[i].children[0]) {
                                                // Break
                                                break;
                                                break injectNewSlide
                                            }

                                    /* Logic
                                            If
                                                the Carousel's 'data-buttons-left-html' is not the Carousel's Left Button's outer HTML.
                                    */
                                    if (carousel[i].getAttribute('data-buttons-left-html') !== (carousel[i].buttons.left || {outerHTML: carousel[i].getAttribute('data-buttons-left-html')}).outerHTML) {
                                        // Modification
                                            // Carousel > Buttons > Left
                                                // Outer HTML
                                                carousel[i].buttons.left.outerHTML = carousel[i].getAttribute('data-buttons-left-html') || carousel[i].buttons.left.outerHTML;

                                                // Class
                                                carousel[i].buttons.left.addClass('button button-0');

                                                // Data ID
                                                carousel[i].buttons.left.setAttribute('data-id', 'left-button');

                                            // Carousel > Data Buttons Left HTML
                                            carousel[i].setAttribute('data-buttons-left-html', carousel[i].buttons.left.outerHTML)
                                    }

                                    /* Logic
                                            If
                                                the Carousel's 'data-buttons-right-html' is not the Carousel's Right Button's outer HTML.
                                    */
                                    if (carousel[i].getAttribute('data-buttons-right-html') !== (carousel[i].buttons.right || {outerHTML: carousel[i].getAttribute('data-buttons-right-html')}).outerHTML) {
                                        // Modification
                                            // Carousel > Buttons > Right
                                                // Outer HTML
                                                carousel[i].buttons.right.outerHTML = carousel[i].getAttribute('data-buttons-right-html') || carousel[i].buttons.right.outerHTML;

                                                // Class
                                                carousel[i].buttons.right.addClass('button button-1');

                                                // Data ID
                                                carousel[i].buttons.right.setAttribute('data-id', 'right-button');

                                            // Carousel > Data Buttons Right HTML
                                            carousel[i].setAttribute('data-buttons-right-html', carousel[i].buttons.right.outerHTML)
                                    }

                                    /* Logic
                                            If
                                                the Carousel has its Indicators Container
                                                    and
                                                the Carousel has an Indicator.
                                    */
                                    if (
                                        carousel[i].containers.indicators &&
                                        carousel[i].indicators[0]
                                    )
                                        /* Logic
                                                If
                                                    the Carousel's 'data-indicators-html' is not the Carousel's first Indicator's outer HTML.
                                        */
                                        if (carousel[i].getAttribute('data-indicators-html') !== carousel[i].indicators[0].outerHTML) {
                                            /* Loop
                                                    Index all the Carousel's indicators.
                                            */
                                            for (let j = 0; j < carousel[i].indicators.length; j += 1) {
                                                // Modification > (Carousel > Indicators)
                                                    // Outer HTML
                                                    carousel[i].indicators[j].outerHTML = carousel[i].getAttribute('data-indicators-html') || carousel[i].indicators[j].outerHTML;

                                                    // Class
                                                    carousel[i].indicators[j].addClass(`indicator indicator-${j}`);

                                                    // Data Slide Index
                                                    carousel[i].indicators[j].setAttribute('data-slide-index', j)
                                            }

                                        // Modification > Carousel > Data Indicators HTML
                                        carousel[i].setAttribute('data-indicators-html', carousel[i].indicators[0].outerHTML);
                                    }

                                    /* Loop
                                            Index all Carousel Buttons.
                                    */
                                    for (let j = 0; j < carousel[i].buttons.length; j += 1) {
                                        // Modification > Button > Carousel
                                        carousel[i].buttons[j].carousel || Object.defineProperty(carousel[i].buttons[j], 'carousel', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function carousel() {
                                                // Initialization > Data
                                                let data;

                                                /* Loop
                                                        Index all the Target's parents.
                                                */
                                                for (let i = 0; i < this.parentPath.length; i += 1)
                                                    /* Logic
                                                            If
                                                                the Target Parent is a Carousel.
                                                    */
                                                    if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1) {
                                                        // Update > Data
                                                        data = this.parentPath[i];

                                                        // Break
                                                        break
                                                    }

                                                // Return
                                                return data || this.parentElement.parentElement
                                            }
                                        });

                                        // Event > Button > [Carousel > Data Buttons Event Type] | Click
                                        carousel[i].buttons[j]['LapysJS carouselSlideToggleEventSet'] || carousel[i].buttons[j].setEvent((carousel[i].getAttribute('data-buttons-event-type') || 'click').trim(), function toggleCarouselSlide() {
                                             /* Logic
                                                    If
                                                        Target is the Left Button,

                                                    else if
                                                        Target is the Right Button/
                                            */
                                            if (this.hasClass('button-0'))
                                                // Target > Carousel > Toggle Previous Slide
                                                this.carousel.togglePreviousSlide();

                                            else if (this.hasClass('button-1'))
                                                // Target > Carousel > Toggle Next Slide
                                                this.carousel.toggleNextSlide()
                                        });
                                        carousel[i].buttons[j]['LapysJS carouselSlideToggleEventSet'] = !0
                                    }

                                    /* Logic
                                            If
                                                the Carousel has its Indicators Container.
                                    */
                                    if (carousel[i].containers.indicators)
                                        /* Loop
                                                Index all Carousel Indicators.
                                        */
                                        for (let j = 0; j < carousel[i].indicators.length; j += 1) {
                                            // Modification > Indicator > Carousel
                                            carousel[i].indicators[j].carousel || Object.defineProperty(carousel[i].indicators[j], 'carousel', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function carousel() {
                                                    // Initialization > Data
                                                    let data;

                                                    /* Loop
                                                            Index all the Target's parents.
                                                    */
                                                    for (let i = 0; i < this.parentPath.length; i += 1)
                                                        /* Logic
                                                                If
                                                                    the Target Parent is a Carousel.
                                                        */
                                                        if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1) {
                                                            // Update > Data
                                                            data = this.parentPath[i];

                                                            // Break
                                                            break
                                                        }

                                                    // Return
                                                    return data || this.parentElement.parentElement
                                                }
                                            });

                                            // Event > Indicator > [Carousel > Data Buttons Event Type] | Click
                                            carousel[i].indicators[j]['LapysJS carouselSlideToggleEventSet'] || carousel[i].indicators[j].setEvent((carousel[i].getAttribute('data-buttons-event-type') || 'click').trim(), function toggleCarouselSlide() {
                                                // Target > Carousel > Toggle Slide
                                                this.carousel.toggleSlide(+(this.getAttribute('data-slide-index') || '').replace(/ /g, ''))
                                            });
                                            carousel[i].indicators[j]['LapysJS carouselSlideToggleEventSet'] = !0
                                        }

                                    /* Loop
                                            While
                                                the Carousel has no Active Slides.

                                        > Carousel > Toggle Slide
                                    */
                                    while (!carousel[i].activeSlide)
                                        carousel[i].toggleSlide(0);

                                    /* Logic
                                            If
                                                the Carousel has its Buttons Container.
                                    */
                                    if (carousel[i].containers.buttons) {
                                        /* Loop
                                                While
                                                    the Carousel has an extra Left Button.

                                            > Deletion
                                        */
                                        while (carousel[i].containers.buttons.querySelectorAll('.button-0')[1])
                                            carousel[i].containers.buttons.querySelectorAll('.button-0')[1].remove();

                                        /* Loop
                                                While
                                                    the Carousel has an extra Right Button.

                                            > Deletion
                                        */
                                        while (carousel[i].containers.buttons.querySelectorAll('.button-1')[1])
                                            carousel[i].containers.buttons.querySelectorAll('.button-1')[1].remove();

                                        /* Loop
                                                While
                                                    the Carousel has an extra 'button' that's not a button.

                                            > Deletion
                                        */
                                        while (carousel[i].containers.buttons.querySelector(':not(.button-0):not(.button-1)'))
                                            carousel[i].containers.buttons.querySelector(':not(.button-0):not(.button-1)').remove();

                                        /* Loop
                                                While
                                                    the Carousel's Button Container does not have a Button.
                                        */
                                        while (!carousel[i].containers.buttons.querySelector('.button'))
                                            // Error Handling
                                            try {
                                                // Modification > (Carousel > Container > Buttons) > Inner HTM
                                                carousel[i].containers.buttons.innerHTML += (carousel[i].getAttribute('data-buttons-left-html') || `<button class='button button-0' data-id=left-button>&larr;</button>`) + (carousel[i].getAttribute('data-buttons-right-html') || `<button class='button button-1' data-id=right-button>&rarr;</button>`)
                                            }

                                            catch (error) {
                                                // Modification > (Carousel > Container > Buttons) > Inner HTM
                                                carousel[i].containers.buttons.innerHTML += `<button class='button button-0' data-id=left-button>&larr;</button><button class='button button-1' data-id=right-button>&rarr;</button>`
                                            }
                                    }

                                    /* Logic
                                            If
                                                the Carousel's has its Indicators Container.
                                    */
                                    if (carousel[i].containers.indicators) {
                                        /* Loop
                                                While
                                                    the Carousel has an Indicator without a Slide Index.

                                            > Deletion
                                        */
                                        while (carousel[i].containers.indicators.querySelector('.indicator:not([data-slide-index])'))
                                            carousel[i].containers.indicators.querySelector('.indicator:not([data-slide-index])').remove();

                                        /* Loop
                                                Index all the Carousel's Indicators.
                                        */
                                        for (let j = 0; j < carousel[i].indicators.length; j += 1)
                                            /* Loop
                                                    While
                                                        there is a duplicate Indicator.

                                                > Modification > Indicator > Class
                                            */
                                            while (carousel[i].containers.indicators.querySelectorAll(`.indicator-${j}`)[1])
                                                carousel[i].containers.indicators.querySelectorAll(`.indicator-${j}`)[1].delClass(`indicator-${j}`);

                                        /* Loop
                                                While
                                                    the Carousel has a greater number of Indicators than Slides.

                                            > Deletion
                                        */
                                        while (carousel[i].slides.length < carousel[i].indicators.length)
                                            carousel[i].indicators[~-carousel[i].indicators.length].remove();
                                    }


                                    /* Loop
                                            While
                                                the Carousel has a greater number of Slides than Indicators.
                                    */
                                    while (
                                        carousel[i].slides.length > carousel[i].indicators.length &&
                                        carousel[i].containers.indicators
                                    )
                                        /* Logic
                                                If
                                                    the Carousel has an Indicator.
                                        */
                                        if (carousel[i].indicators[0]) {
                                            // Initialization > Data
                                            let data = document.createElement(carousel[i].indicators[~-carousel[i].indicators.length].tagName);

                                            /* Loop
                                                    Index all the Carousel's last Indicator's attributes.

                                                > Modification > Data > [Carousel > Indicator > Attribute > Name]
                                            */
                                            for (let j = 0; j < carousel[i].indicators[~-carousel[i].indicators.length].attributes.length; j += 1)
                                                data.setAttribute(carousel[i].indicators[~-carousel[i].indicators.length].attributes[j].name, carousel[i].indicators[~-carousel[i].indicators.length].attributes[j].value);

                                            // Insertion
                                            carousel[i].containers.indicators.appendChild(data);

                                            // Modification > Data > Class
                                            data.delClass(`indicator-${carousel[i].indicators[~-carousel[i].indicators.length].getAttribute('data-slide-index')}`);
                                            data.addClass(`indicator-${(element => {
                                                // Initialization > Loop Counter
                                                let k;

                                                /* Loop
                                                        Index all Element's siblings.
                                                */
                                                for (k = 0; k < element.siblings.length; k += 1)
                                                    /* Logic
                                                            If
                                                                the sibling's 'data-slide-index' attribute is not the Loop Counter.
                                                    */
                                                    if (element.siblings[k].getAttribute('data-slide-index') != k) {
                                                        // Modification > Element > Data Slide Index
                                                        element.setAttribute('data-slide-index', k);

                                                        // Return
                                                        return k;

                                                        // Break
                                                        break
                                                    }

                                                // Modification > Element > Data Slide Index
                                                (element.getAttribute('data-slide-index') == k) || element.setAttribute('data-slide-index', element.siblings.length);

                                                // Return
                                                return element.siblings.length
                                            })(data)}`)
                                        }

                                        else
                                            // Error Handling
                                            try {
                                                // Modification > (Carousel > Containers > Indicators) > Inner HTML
                                                carousel[i].containers.indicators.innerHTML += carousel[i].getAttribute('data-indicators-html') || `<a class='indicator indicator-0' data-slide-index=0> </a>`;
                                            }

                                            catch (error) {
                                                // Modification > (Carousel > Containers > Indicators) > Inner HTML
                                                carousel[i].containers.indicators.innerHTML += `<a class='indicator indicator-0' data-slide-index=0> </a>`;
                                            }

                                    /* Loop
                                            Index all the Carousel's Slides.
                                    */
                                    for (let j = 0; j < carousel[i].slides.length; j += 1)
                                        /* Logic
                                                If
                                                    the Carousel's 'Slide' is not a Slide.

                                            > Modification > (Carousel > Slide)
                                        */
                                        if (
                                            !carousel[i].slides[j].hasClass(`slide slide-${j}`) &&
                                            !carousel[i].slides[j].getAttribute('data-slide-index')
                                        ) {
                                            // Class
                                            carousel[i].slides[j].addClass(`slide slide-${j}`);

                                            // Data Slide Index
                                            carousel[i].slides[j].setAttribute('data-slide-index', j)
                                        }
                                }
                        });

                        // On Node Change
                        onNodeChange(document.body, function LapysJSScriptCorrectCarousel() {
                            /* Loop
                                    Index all Carousel.
                            */
                            for (let i = 0; i < carousel.length; i += 1)
                                // Error Handling
                                try {
                                    /* Loop
                                            [while statement]

                                        > Deletion
                                    */
                                    while (carousel[i].containers.slides.querySelector('.button, .indicator'))
                                        carousel[i].containers.slides.querySelector('.button, .indicator').remove()
                                }

                                catch (error) {}
                        })
                    }, LapysJS.permanentData.pluginScriptDelay = 3e3)
                })();

                // Dropdown
                    // On Node Added
                    onDOMNodeAdded(document.body, function LapysJSScriptNewDropdown() {
                        // Initialization
                        let dropdown = document.querySelectorAll('.dropdown:not(.accordion):not(.carousel):not(.dynamic-text):not(.media):not(input):not(textarea)');

                        /* Loop
                                Index all Dropdowns.
                        */
                        for (let i = ~-dropdown.length; i > -1; i -= 1)
                            /* Logic
                                    If
                                        the Dropdown is not modified.
                            */
                            if (!dropdown[i]['LapysJS isModified']) {
                                // Function > Dropdown
                                    // Close
                                    (typeof dropdown[i]['LapysJS close'] == 'function') || Object.defineProperty(dropdown[i], 'LapysJS close', {
                                        // Value
                                        value: function close() {
                                            // Modification > Target
                                                // Data Close
                                                this.setAttribute('data-close', !0);

                                                // Data Open
                                                this.setAttribute('data-open', !!0);

                                            /* Loop
                                                    [for statement]

                                                > Modification > (Dropdown > Content) > Hidden
                                            */
                                            for (let i = 0; i < document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`).length; i += 1)
                                                document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`)[i].hidden = !0;

                                            // Modification > Target > Hidden
                                            this.hidden = !!0
                                        }
                                    });
                                    dropdown[i]['LapysJS close']();

                                    // Open
                                    (typeof dropdown[i]['LapysJS open'] == 'function') || Object.defineProperty(dropdown[i], 'LapysJS open', {
                                        // Value
                                        value: function open() {
                                            // Modification > Target
                                                // Data Close
                                                this.setAttribute('data-close', !!0);

                                                // Data Open
                                                this.setAttribute('data-open', !0);

                                            /* Loop
                                                    [for statement]

                                                > Modification > (Dropdown > Content) > Hidden
                                            */
                                            for (let i = 0; i < document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`).length; i += 1)
                                                document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`)[i].hidden = !!0
                                        }
                                    });

                                // Event > Dropdown > ([Data Event Type] | Click)
                                dropdown[i].setEvent((dropdown[i].getAttribute('data-event-type') || 'click').trim(), function toggleDropdown() {
                                    // Modification > Target > Toggle
                                    (this.getAttribute('data-open') !== 'true') || (this['LapysJS toggle'] = !0);

                                    // Toggle
                                    this['LapysJS toggle'] ? this['LapysJS close']() : this['LapysJS open']();
                                    this['LapysJS toggle'] = !this['LapysJS toggle']
                                });

                                // Modification > Dropdown > Is Modified
                                dropdown[i]['LapysJS isModified'] = !0
                            }
                    });

                /* Dynamic Text
                        --- CONSIDER ---
                            @lapys: A 'text-unhighlighting' function would be nice to work with.

                        --- UPDATE REQUIRED ---
                            @lapys: Multiple Dynamic Texts on the page should not cause errors as it does now.
                */
                    // On Node Change
                    onNodeChange(document.body, function LapysJSScriptNewDynamicText() {
                        /* Loop
                                Index all Dynamic Texts.
                        */
                        for (let i = 0; i < document.getElementsByClassName('dynamic-text').length; i += 1) {
                            // Modification > Dynamic Text
                                // Data Text Cursor Position
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-cursor-position', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-cursor-position') || 0);

                                // Data Text Format
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-format', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-format') || '');

                                // Data Text Function
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-function', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-function') || '');

                                // Data Text Function Delay
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-function-delay', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-function-delay') || 2);

                                // Data Text Function Duration
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-function-duration', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-function-duration') || 3);

                                // Data Text Function Separator
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-function-separator', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-function-separator') || ';');

                                // Data Text Separator
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-separator', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-separator') || ',');

                                // Data Text
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text', (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text') || '').replace(RegExp(`\\\\${document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-separator')}`, 'g'), randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')));
                                    // Data Text Format
                                        /* Pre-format
                                                --- NOTE ---
                                                    Removes all newlines within the Dynamic Text's 'data-text' attribute.
                                        */
                                        (` ${document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-format')} `.indexOf(' pre ') < 0) || document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text').replace(/\n/g, ''));

                                        /* Trim
                                                --- NOTE ---
                                                    Removes all trailing white-spaces at the beginning and end of each
                                                    text within the Dynamic Text's 'data-text' attribute.
                                        */
                                            // Initialization > Array
                                            let array = [];

                                            /* Logic
                                                    If
                                                        the Dynamic Text's format's 'trim' option is active.
                                            */
                                            if (` ${document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-format')} `.indexOf(' trim ') > -1) {
                                                /* Loop
                                                        [for statement]

                                                    > Update > Array
                                                */
                                                for (let j = 0; j < document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text').split(RegExp(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-separator'), 'g')).length; j += 1)
                                                    array.push(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text').split(RegExp(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-separator'), 'g'))[j].replace(/,/g, `::lapysjs_comma${randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')}::`).trim());

                                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text', String(array).replace(/,/g, document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-separator')).replace(RegExp(`::lapysjs_comma${randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')}::`, 'g'), ','))
                                            }

                                // Data Text
                                document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text', document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text').replace(RegExp(randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, ''), 'g'), `\\${document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-separator')}`));

                                // Backwards Delete
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS backwardsDelete'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS backwardsDelete', {
                                    // Value
                                    value: function backwardsDelete() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Deletion
                                        this.querySelector('span[data-id*=cursor').previousElementSibling.remove()
                                    }
                                });

                                // Backwards Insert
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS backwardsInsert'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS backwardsInsert', {
                                    // Value
                                    value: function backwardsInsert() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Insertion
                                        this.querySelector('span[data-id*=cursor').insertAdjacentHTML('beforebegin', `<span>${String(arguments[0])}</span>`)
                                    }
                                });

                                // Clear All
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS clearAll'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS clearAll', {
                                    // Value
                                    value: function clearAll() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Modification > Target > Inner HTML
                                        this.innerHTML = '<span data-id=cursor> </span>'
                                    }
                                });

                                // Forwards Delete
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS forwardsDelete'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS forwardsDelete', {
                                    // Value
                                    value: function forwardsDelete() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Deletion
                                        this.querySelector('span[data-id*=cursor').nextElementSibling.remove()
                                    }
                                });

                                // Forwards Insert
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS forwardsInsert'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS forwardsInsert', {
                                    // Value
                                    value: function forwardsInsert() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Insertion
                                        this.querySelector('span[data-id*=cursor').insertAdjacentHTML('afterend', `<span>${String(arguments[0])}</span>`)
                                    }
                                });

                                // Highlight
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS highlight'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS highlight', {
                                    // Value
                                    value: function highlight() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Initialization > Data
                                        let data = this.querySelector('[data-id*=cursor');

                                        // Error Handling
                                        try {
                                            /* Logic
                                                    If
                                                        Argument 0 is 'backward',

                                                    else if
                                                        Argument 0 is 'forward'.
                                            */
                                            if (arguments[0] === 'backward') {
                                                // Update > Data
                                                data = data.previousElementSibling;

                                                /* Loop
                                                        While
                                                            Data is not highlighted
                                                                and
                                                            Data is not its parent's first child.

                                                    > Update > Data
                                                */
                                                while (
                                                    (data.getAttribute('data-id') || '').indexOf('highlighted') > -1 &&
                                                    data !== data.parentElement.querySelector('span')
                                                )
                                                    data = data.previousElementSibling || data.parentElement.querySelector('span')
                                            }

                                            else if (arguments[0] === 'forward') {
                                                // Update > Data
                                                data = data.nextElementSibling;

                                                /* Loop
                                                        While
                                                            Data is not highlighted
                                                                and
                                                            Data is not its parent's last child.

                                                    > Update > Data
                                                */
                                                while (
                                                    (data.getAttribute('data-id') || '').indexOf('highlighted') > -1 &&
                                                    data !== data.parentElement.querySelectorAll('span')[~-data.parentElement.querySelectorAll('span').length]
                                                )
                                                    data = data.nextElementSibling || data.parentElement.querySelectorAll('span')[~-data.parentElement.querySelectorAll('span').length]
                                            }

                                            // Modification > Data > Data ID
                                            ((data.getAttribute('data-id') || '').indexOf('highlighted') > 0) || data.setAttribute('data-id', (data.getAttribute('data-id') || '') + (data.getAttribute('data-id') ? ' highlighted' : 'highlighted'))
                                        }

                                        catch (error) {
                                            // LapysJS > Error
                                            LapysJS.error(error)
                                        }
                                    }
                                });

                                // Highlight All
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS highlightAll'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS highlightAll', {
                                    // Value
                                    value: function highlightAll() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        /* Loop
                                                Index all Target's <span>'s.

                                            > Modification > <span> > Data ID
                                        */
                                        for (let i = 0; i < this.getElementsByTagName('span').length; i += 1)
                                            this.getElementsByTagName('span')[i].setAttribute('data-id', (this.getElementsByTagName('span')[i].getAttribute('data-id') || '') + (this.getElementsByTagName('span')[i].getAttribute('data-id') ? ' highlighted' : 'highlighted'))
                                    }
                                });

                                // Insert Newline
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS insertNewline'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS insertNewline', {
                                    // Value
                                    value: function insertNewline() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        /* Logic
                                                If
                                                    Argument 0 is 'forward',

                                                else if
                                                    Argument 0 is 'backward'.
                                        */
                                        if (arguments[0] === 'forward')
                                            // Insertion
                                            this.querySelector('span[data-id*=cursor').insertAdjacentHTML('afterend', `<span data-id=newline style='display: block !important'><br></span>`);

                                        else if (arguments[0] === 'backward')
                                            // Insertion
                                            this.querySelector('span[data-id*=cursor').insertAdjacentHTML('beforebegin', `<span data-id=newline style='display: block !important'><br></span>`);

                                        else {
                                            // Modification > Target > Inner HTML
                                            this.innerHTML += `<span data-id=newline style='display: block !important'><br></span>`;

                                            /* Loop
                                                    While
                                                        The Target's last child element is not the cursor.

                                                > Target > Navigate Cursor
                                            */
                                            while (this.querySelectorAll('span')[~-this.querySelectorAll('span').length] !== this.querySelector('span[data-id*=cursor'))
                                                this['LapysJS navigateCursor']('forward')
                                        }
                                    }
                                });

                                // Navigate Cursor
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS navigateCursor'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS navigateCursor', {
                                    // Value
                                    value: function navigateCursor() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Error Handling
                                        try {
                                            /* Logic
                                                    Switch case to Argument 0.

                                                > Insertion
                                            */
                                            switch (String(arguments[0])) {
                                                // Backward
                                                case 'backward':
                                                    this.insertBefore(this.querySelector('[data-id*=cursor'), this.querySelector('[data-id*=cursor').previousElementSibling);
                                                    break;

                                                // Forward
                                                case 'forward':
                                                    this.insertBefore(this.querySelector('[data-id*=cursor').nextElementSibling, this.querySelector('[data-id*=cursor'))
                                            }
                                        }

                                        catch (error) {
                                            /* Logic
                                                    If
                                                        Argument 0 is 'forward',

                                                    else if
                                                        Argument 0 is 'backward'.

                                                > (Deletion, Insertion)
                                            */
                                            if (arguments[0] === 'forward') {
                                                this.querySelector('[data-id*=cursor').remove();
                                                this.appendChild(createElement('span', '[data-id=cursor]'))
                                            }

                                            else if (arguments[0] === 'backward') {
                                                this.querySelector('[data-id*=cursor').remove();
                                                this.insertChild('begin', createElement('span', '[data-id=cursor]'))
                                            }
                                        }
                                    }
                                });

                                // Pause
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS pause'] || Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS pause', {
                                    // Value
                                    value: function pause() {
                                        // Insertion
                                        this.querySelector('span[data-id*=cursor') || this.insertChild('begin', createElement('span', '[data-id=cursor'))
                                    }
                                });

                                // Text
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS text', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getText() {
                                        // Initialization > Array
                                        let array = this.getAttribute('data-text').replace(RegExp(`\\\\${this.getAttribute('data-text-separator')}`, 'g'), randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')).split(RegExp(this.getAttribute('data-text-separator'), 'g'));

                                        /* Loop
                                                Index all elements of the Array.

                                            > Update > Array
                                        */
                                        for (let i = 0; i < array.length; i += 1)
                                            array[i] = array[i].replace(RegExp(randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, ''), 'g'), this.getAttribute('data-text-separator'));

                                        // Return
                                        return array
                                    },

                                    // Set
                                    set: function setText() {
                                        /* Logic
                                                If
                                                    Argument 0 is an Object.
                                        */
                                        if ((arguments[0] || []).constructor === Object)
                                            // Error Handling
                                            try {
                                                // Update > Argument 0
                                                arguments[0] = Object.values(arguments[0])
                                            }

                                            catch (error) {}

                                        /* Logic
                                                If
                                                    Argument 0 is a String,

                                                else if
                                                    Argument 0 is an Array.
                                        */
                                        if (typeof arguments[0] == 'string')
                                            // Modification > Target > Data Text
                                            this.setAttribute('data-text', arguments[0]);

                                        else if ((arguments[0] || '').constructor === Array) {
                                            // Initialization > Array
                                            let array = arguments[0];

                                            /* Loop
                                                    Index all elements of Array.

                                                > Update > Array
                                            */
                                            for (let i = 0; i < array.length; i += 1)
                                                array[i] = array[i].replace(/,/g, `::lapysjs_comma${randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')}::`);

                                            // Modification > Target > Data Text
                                            this.setAttribute('data-text', String(array).replace(RegExp(`\\\\${this.getAttribute('data-text-separator')}`, 'g'), randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')).replace(/,/g, this.getAttribute('data-text-separator')).replace(RegExp(`::lapysjs_comma${randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')}::`, 'g'), ',').replace(RegExp(randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, ''), 'g'), `\\${this.getAttribute('data-text-separator')}`))
                                        }
                                    }
                                });

                                // Text Cursor Position
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textCursorPosition', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextCursorPosition() {
                                        // Return
                                        return [...this.querySelectorAll('span')].indexOf(this.querySelector('[data-id*=cursor'))
                                    },

                                    // Set
                                    set: function setTextCursorPosition() {
                                        // Modification > Target > Data Text Cursor Position
                                        this.setAttribute('data-text-cursor-position', String(arguments[0]).replace(/ /g, ''))
                                    }
                                });

                                // Text Format
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textFormat', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextFormat() {
                                        // Initialization > Array
                                        let array = this.getAttribute('data-text-format').trim().replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g);

                                        /* Loop
                                                Index all elements of the Array.

                                            > Update > Array
                                        */
                                        for (let i = 0; i < array.length; i += 1)
                                            array[i] = array[i].replace(/ /g, '');

                                        // Return
                                        return array
                                    },

                                    set: function setTextFormat() {
                                        // Modification > Target > Data Text Format
                                        this.setAttribute('data-text-format', String(arguments[0]).replace(/,/g, ' ').trim().replace(/  /g, ' ').replace(/  /g, ' '))
                                    }
                                });

                                // Text Function
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textFunction', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextFunction() {
                                        // Initialization > Data
                                        let data = this.getAttribute('data-text-function').replace(/delete/g, 'backwardsDelete').replace(/insertNewline/g, `::lapysjs_i-n${randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')}::`).replace(/insert/g, 'forwardsInsert').replace(RegExp(`::lapysjs_i-n${randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')}::`, 'g'), 'insertNewline').replace(/type/g, 'backwardsInsert').replace(/ /g, '').replace(/\n/g, '').split(RegExp(this.getAttribute('data-text-function-separator'), 'g'));

                                        /* Loop
                                                Index all Data.
                                        */
                                        for (let i = 0; i < data.length; i += 1) {
                                            // Update > Data
                                            data[i] = data[i].split(RegExp(this.getAttribute('data-text-separator'), 'g'));

                                            /* Loop
                                                    Index all Data's elements.

                                                > Update > Data
                                            */
                                            for (let j = 0; j < data[i].length; j += 1)
                                                data[i][j] = {
                                                    // Length
                                                    length: +data[i][j].getAfterChar('=') || ((element, index, miscellaneous) => {
                                                        // Initialization > Data
                                                        let data = element.getAttribute('data-text').replace(RegExp(`\\\\${element.getAttribute('data-text-separator')}`, 'g'), randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, '')).split(RegExp(element.getAttribute('data-text-separator'), 'g'));

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Data
                                                        */
                                                        for (let i = 0; i < data.length; i += 1)
                                                            data[i] = data[i].replace(RegExp(randomString.replace(/[~!@#$%^&\*\(\)_\+\{\}|:"'\<\>?`\-=\[\]\\;,\.\/]/g, ''), 'g'), element.getAttribute('data-text-separator'));

                                                        // Return
                                                        return miscellaneous === 'clearAll' || miscellaneous === 'highlightAll' || miscellaneous === 'insertNewline' ? 1 : data[index].length
                                                    })(this, i, data[i][j]),

                                                    // Name
                                                    name: data[i][j].getBeforeChar('=')
                                                }
                                        }

                                        // Return
                                        return data
                                    },

                                    // Set
                                    set: function setTextFunction() {
                                        /* Logic
                                                If
                                                    Argument 0 is a String,

                                                else if
                                                    Argument 0 is an Array.
                                        */
                                        if (typeof arguments[0] == 'string')
                                            // Modification > Target > Data Text Function
                                            this.setAttribute('data-text-function', arguments[0]);

                                        else if (
                                            (arguments[0] || '').constructor === Array &&
                                            (arguments[0][0] || '').constructor === Array
                                        ) {
                                            // Initialization > Data
                                            let data = '';

                                            /* Loop
                                                    Index all Argument 0's elements.
                                            */
                                            for (let i = 0; i < arguments[0].length; i += 1) {
                                                /* Loop
                                                        Index all Argument 0's elements' elements.
                                                */
                                                for (let j = 0; j < arguments[0][i].length; j += 1)
                                                    /* Logic
                                                            If
                                                                the element is a String,

                                                            else if
                                                                the element is an Object.

                                                        > Update > Data
                                                    */
                                                    if (typeof arguments[0][i][j] == 'string')
                                                        data += arguments[0][i][j] + this.getAttribute('data-text-separator');

                                                    else if ((arguments[0][i][j] || []).constructor === Object)
                                                        data += arguments[0][i][j].name + arguments[0][i][j].length ? '=' : '' + (arguments[0][i][j].length || '') + this.getAttribute('data-text-separator');

                                                // Update > Data
                                                data += this.getAttribute('data-text-function-separator')
                                            }

                                            // Modification > Target > Data Text Function
                                            this.setAttribute('data-text-function', data.slice(0, -this.getAttribute('data-text-function-separator').length))
                                        }
                                    }
                                });

                                // Text Function Delay
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textFunctionDelay', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextFunctionDelay() {
                                        // Return
                                        return +this.getAttribute('data-text-function-delay').replace(/ /g, '')
                                    },

                                    // Set
                                    set: function setTextFunctionDelay() {
                                        // Modification > Target > Data Text Function Delay
                                        this.setAttribute('data-text-function-delay', String(arguments[0]))
                                    }
                                });

                                // Text Function Duration
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textFunctionDuration', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextFunctionDuration() {
                                        // Return
                                        return +this.getAttribute('data-text-function-duration').replace(/ /g, '')
                                    },

                                    // Set
                                    set: function setTextFunctionDuration() {
                                        // Modification > Target > Data Text Function Duration
                                        this.setAttribute('data-text-function-duration', String(arguments[0]))
                                    }
                                });

                                // Text Function Separator
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textFunctionSeparator', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextFunctionSeparator() {
                                        // Return
                                        return this.getAttribute('data-text-function-separator').replace(/ /g, '')
                                    },

                                    // Set
                                    set: function setTextFunctionSeparator() {
                                        // Modification > Target > Data Text Function Separator
                                        this.setAttribute('data-text-function-separator', String(arguments[0]).replace(/ /g, '')[0])
                                    }
                                });

                                // Text Separator
                                Object.defineProperty(document.getElementsByClassName('dynamic-text')[i].constructor.prototype, 'LapysJS textSeparator', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function getTextSeparator() {
                                        // Return
                                        return this.getAttribute('data-text-separator').replace(/ /g, '')
                                    },

                                    // Set
                                    set: function setTextSeparator() {
                                        // Modification > Target > Data Text Separator
                                        this.setAttribute('data-text-separator', String(arguments[0]).replace(/ /g, '')[0])
                                    }
                                });

                            /* Logic
                                    If
                                        the Dynamic Text has not been altered once.

                                    --- NOTE ---
                                        This is used to allow this module run only once.
                            */
                            if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS once']) {
                                /* Initialization > Interval Counter
                                        --- NOTE ---
                                            - Interval Counter acts with the 'setInterval' function as an alternative form of time interval.
                                            - The words 'Indexer' or 'Iterator' are inter-changed.
                                */
                                let textIndexer = 0,
                                    currentText = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][textIndexer || 0],
                                    currentTextCharacterIterator = 0,
                                    currentTextFunctionIndexer = 0,
                                    currentTextFunctionSequenceIterator = 0,
                                    currentTextFunction = document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'][currentTextFunctionSequenceIterator || 0][currentTextFunctionIndexer || 0],
                                    intervalCounter = 0,
                                    textModifiedCounter = 0;

                                /* Loop
                                        While
                                            The Dynamic Text's texts and text functions do not have equal number of sets.
                                */
                                while (document.getElementsByClassName('dynamic-text')[i]['LapysJS text'].length !== document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'].length)
                                    /* Logic
                                            If
                                                the culprit is the texts,

                                            else if
                                                the culprit is the text functions.

                                        > Modification > Dynamic Text > (Data Text) Function
                                    */
                                    if (typeof min.getObject(document.getElementsByClassName('dynamic-text')[i]['LapysJS text'], document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'])[0] == 'string')
                                        document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text', (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text') || '') + document.getElementsByClassName('dynamic-text')[i]['LapysJS textSeparator']);

                                    else if ((min.getObject(document.getElementsByClassName('dynamic-text')[i]['LapysJS text'], document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'])[0] || '').constructor === Array)
                                        document.getElementsByClassName('dynamic-text')[i].setAttribute('data-text-function', (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-function') || '') + document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunctionSeparator'] + 'pause');

                                // Set Timeout
                                setTimeout(() => {
                                    /* Set Interval
                                            --- NOTE ---
                                                @lapys: This interval is set to twentieth of a second to simulate real-time
                                                    for each Dynamic Text.
                                    */
                                    setInterval(() => {
                                        /* Loop
                                                Index all Dynamic Texts.
                                        */
                                        for (let i = 0; i < document.getElementsByClassName('dynamic-text').length; i += 1)
                                            /* Logic
                                                    If
                                                        the Dynamic Text is in delay.
                                            */
                                            if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS isInDelay']) {
                                                /* Logic
                                                        If
                                                            Interval Counter is greater than the Dynamic Text's text function duration divided by the current text function's length.
                                                */
                                                if (intervalCounter > document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunctionDuration'] / currentTextFunction.length) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (
                                                        String(currentTextFunction.name).indexOf('highlightB') < 0 &&
                                                        String(currentTextFunction.name).indexOf('highlightF') < 0 &&
                                                        String(currentTextFunction.name).indexOf('navigateCursor') < 0
                                                    )
                                                        // Dynamic Text > [...]
                                                        document.getElementsByClassName('dynamic-text')[i][`LapysJS ${String(currentTextFunction.name)}`](currentText[currentTextCharacterIterator]);

                                                    else if (String(currentTextFunction.name) === 'highlightBackwards')
                                                        // Dynamic Text > Highlight
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS highlight']('backward');

                                                    else if (String(currentTextFunction.name) === 'highlightForwards')
                                                        // Dynamic Text > Highlight
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS highlight']('forward');

                                                    else if (String(currentTextFunction.name) === 'navigateCursorBackwards')
                                                        // Dynamic Text > Navigate Cursor
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS navigateCursor']('backward');

                                                    else if (String(currentTextFunction.name) === 'navigateCursorForwards')
                                                        // Dynamic Text > Navigate Cursor
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS navigateCursor']('forward');

                                                    // Update
                                                        // Current Text Character Iterator
                                                        currentTextCharacterIterator += 1;

                                                        // Text Modified Counter
                                                        textModifiedCounter += 1;

                                                    /* Logic
                                                            If
                                                                the Text Modified Counter is greater than the current text function's length
                                                                    or
                                                                the Text Modified Counter is equal to the current text function's length.
                                                    */
                                                    if (textModifiedCounter > ~-currentTextFunction.length) {
                                                        // Dynamic Text > Update > Is In Delay
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS isInDelay'] = !0;

                                                        // Update > Current Text Character Iterator
                                                        currentTextCharacterIterator = intervalCounter = 0
                                                    }
                                                }
                                            }

                                            else {
                                                /* Logic
                                                        If
                                                            the Interval Counter is greater than the Dynamic Text's text function delay.
                                                */
                                                if (intervalCounter > ~-document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunctionDelay']) {
                                                    // Update
                                                        // Current Text Function Indexer
                                                        currentTextFunctionIndexer += 1;

                                                        // Current Text Function Sequence Iterator
                                                        (currentTextFunctionSequenceIterator < document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'].length) || (currentTextFunctionSequenceIterator = 0);

                                                    /* Logic
                                                            If
                                                                the Current Text Function Indexer is greater than the Dynamic Text's text function's length.
                                                    */
                                                    if (currentTextFunctionIndexer > ~-document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'][currentTextFunctionSequenceIterator].length) {
                                                        // Update
                                                            // Current Text Function Indexer
                                                            currentTextFunctionIndexer = 0;

                                                            // Current Text Function Sequence Iterator
                                                            currentTextFunctionSequenceIterator += 1;

                                                            // Text Indexer
                                                            textIndexer += 1
                                                    }

                                                    // Update
                                                        // Current Text Function Sequence Iterator
                                                        (currentTextFunctionSequenceIterator < document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'].length) || (currentTextFunctionSequenceIterator = 0);

                                                        // Current Text Function
                                                        currentTextFunction = document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunction'][currentTextFunctionSequenceIterator][currentTextFunctionIndexer];

                                                        // Text Indexer
                                                        (textIndexer < document.getElementsByClassName('dynamic-text')[i]['LapysJS text'].length) || (textIndexer = 0);

                                                        // Current Text
                                                        currentText = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][textIndexer];

                                                    // Dynamic Text > Update > Is In Delay
                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS isInDelay'] = !!0;

                                                    // Update > Interval Counter
                                                    intervalCounter = 0
                                                }

                                                // Update > Text Modified Counter
                                                textModifiedCounter = 0
                                            }

                                        /* Update > Interval Counter
                                                --- NOTE ---
                                                    The Interval Counter has to be updated after
                                                    all but the last modules within the interval are run.
                                        */
                                        intervalCounter += .1
                                    }, 50)
                                }, (+(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-function-initial-delay') || '').replace(/ /g, '') * 1e3) || (document.getElementsByClassName('dynamic-text')[i]['LapysJS textFunctionDelay'] * 1e3));

                                // Modification > Dynamic Text > Once
                                document.getElementsByClassName('dynamic-text')[i]['LapysJS once'] = !0
                            }
                        }
                    });

                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptCorrectDynamicText() {
                        /* Loop
                                Index all Dynamic Texts.
                        */
                        for (let i = 0; i < document.getElementsByClassName('dynamic-text').length; i += 1) {
                            // Insertion
                            document.getElementsByClassName('dynamic-text')[i].querySelector('span[data-id*=cursor') || document.getElementsByClassName('dynamic-text')[i].appendChild(createElement('span', '[data-id=cursor]'));

                            /* Deletion
                                    --- NOTE ---
                                        @lapys: This allows the Dynamic Text only contain <span> elements.
                            */
                            !document.getElementsByClassName('dynamic-text')[i].querySelector(':not(span)') || document.getElementsByClassName('dynamic-text')[i].querySelector(':not(span)').remove()
                        }
                    });

                // Media Playlist
                (function LapysJSScriptMediaPlaylist() {
                    // Initialization > Media Playlist
                    let mediaPlaylist = document.querySelectorAll('.media-playlist:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)');

                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewMediaPlaylist() {
                        // Update > Media Playlist
                        mediaPlaylist = document.querySelectorAll('.media-playlist:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)');

                        /* Loop
                                Index all Media Playlist.
                        */
                        for (let i = 0; i < mediaPlaylist.length; i += 1)
                            /* Logic
                                    If
                                        the Media Playlist is not modified.
                            */
                            if (!mediaPlaylist[i]['LapysJS isModified']) {
                                // Function > Media Playlist
                                    // Toggle Previous Media
                                    (typeof mediaPlaylist[i].togglePreviousMedia == 'function') || Object.defineProperty(mediaPlaylist[i], 'togglePreviousMedia', {
                                        // Value
                                        value: function togglePreviousMedia() {
                                            // Initialization > Data
                                            let data;

                                            /* Loop
                                                    Index all the Target's Sources.
                                            */
                                            for (let i = 0; i < this.sources.length; i += 1)
                                                /* Logic
                                                        If
                                                            the Target's Media Containers contains the indexed Source.
                                                */
                                                if (decodeURIComponent(this.containers.media.content.querySelector('[data-id=media').src).indexOf(decodeURIComponent(this.sources[i].src)) > -1) {
                                                    // Update > Data
                                                    data = !0;

                                                    // Target > Toggle Media
                                                    this.sources[i - 1] ? this.toggleMedia(i - 1) : this.toggleMedia(~-this.sources.length);

                                                    // Break
                                                    break
                                                }

                                            // Target > Toggle Media
                                            data || this.toggleMedia(~-this.sources.length)
                                        }
                                    });

                                    // Toggle Next Media
                                    (typeof mediaPlaylist[i].toggleNextMedia == 'function') || Object.defineProperty(mediaPlaylist[i], 'toggleNextMedia', {
                                        // Value
                                        value: function toggleNextMedia() {
                                            // Initialization > Data
                                            let data;

                                            /* Loop
                                                    Index all the Target's Sources.
                                            */
                                            for (let i = 0; i < this.sources.length; i += 1)
                                                /* Logic
                                                        If
                                                            the Target's Media Containers contains the indexed Source.
                                                */
                                                if (decodeURIComponent(this.containers.media.content.querySelector('[data-id=media').src).indexOf(decodeURIComponent(this.sources[i].src)) > -1) {
                                                    // Update > Data
                                                    data = !0;

                                                    // Target > Toggle Media
                                                    this.sources[i + 1] ? this.toggleMedia(i + 1) : this.toggleMedia(0);

                                                    // Break
                                                    break
                                                }

                                            // Target > Toggle Media
                                            data || this.toggleMedia(0)
                                        }
                                    });

                                    // Toggle Media
                                    (typeof mediaPlaylist[i].toggleMedia == 'function') || Object.defineProperty(mediaPlaylist[i], 'toggleMedia', {
                                        // Value
                                        value: function toggleMedia() {
                                            // Initialization > Data
                                            let data = +String(arguments[0]).replace(/ /g, '');

                                            // Modification > (Target > Media Container > Content > Media) > Source
                                            this.sources[data] ? this.containers.media.content.querySelector('[data-id=media').src = this.sources[data].src : this.containers.media.content.querySelector('[data-id=media').src = this.sources[0].src;

                                            /* Loop
                                                    Index all Target's Sources.

                                                > Modification > (Target > Source) > Data Selected
                                            */
                                            for (let i = 0; i < this.sources.length; i += 1)
                                                this.sources[i].removeAttribute('data-selected');

                                            // Modification
                                                // (Target > Source) > Data Selected
                                                (this.sources[data] || this.sources[0]).setAttribute('data-selected', '');

                                                // (Target > Media Container > Information > Description) > Inner HTML
                                                !this.sources[0].hasAttribute('data-description') || ((this.containers.media.information.querySelector('[data-id=description') || []).innerHTML = this.sources[data] ? (this.sources[data].getAttribute('data-description') || '&nbsp;') : (this.sources[0].getAttribute('data-description') || '&nbsp;'))
                                        }
                                    });

                                // Function > Media Playlist
                                    // Containers
                                    Object.defineProperty(mediaPlaylist[i], 'containers', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function containers() {
                                            // Initialization > Data
                                            let data = [...this.children];
                                                // Media
                                                data.media = data[data.indexOf(this.querySelector('[data-id=media-container'))];

                                                // Source
                                                data.source = data[data.indexOf(this.querySelector('[data-id=source-container'))];

                                            // Return
                                            return data
                                        }
                                    });

                                    // Media
                                    Object.defineProperty(mediaPlaylist[i], 'media', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function media() {
                                            // Return
                                            return this.containers.media.querySelector('[data-id=media')
                                        }
                                    });

                                    // Sources
                                    Object.defineProperty(mediaPlaylist[i], 'sources', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function sources() {
                                            // Return
                                            return [...this.containers.source.children]
                                        }
                                    });

                                /* Loop
                                        Index all the Media Playlist's child elements.

                                    > Modification > (Media Playlist > Child Element) > Outer HTML
                                */
                                for (let j = 0; j < mediaPlaylist[i].children.length; j += 1)
                                    mediaPlaylist[i].children[j].outerHTML =  `<div class=media-playlist-source ${(mediaPlaylist[i].children[j].getAttribute('data-src') || mediaPlaylist[i].children[j].getAttribute('src')) ? `data-src=${mediaPlaylist[i].children[j].getAttribute('data-src') || mediaPlaylist[i].children[j].getAttribute('src')}` : ''}${mediaPlaylist[i].children[j].getAttribute('data-description') ? ` data-description='${mediaPlaylist[i].children[j].getAttribute('data-description')}'` : ''}${mediaPlaylist[i].children[j].getAttribute('data-thumbnail') ? ` style='background-image: url("${mediaPlaylist[i].children[j].getAttribute('data-thumbnail')}")'` : ''}> </div>`;

                                /* Loop
                                        Index all the Media Playlist's child elements.

                                    > Deletion
                                */
                                for (let j = 0; j < mediaPlaylist[i].children.length; j += 1)
                                    mediaPlaylist[i].children[j].hasAttribute('data-src') || mediaPlaylist[i].children[j].remove();

                                // Initialization > Data
                                let data = createElement('div', '.container[data-id=source-container');
                                    /* Insertion
                                            --- NOTE ---
                                                @lapys: This represents the Media Playlist's Source Container.
                                    */
                                    data.appendChild(createDocumentFragment(mediaPlaylist[i].innerHTML));

                                // Modification > Media Playlist > Inner HTML
                                mediaPlaylist[i].innerHTML = data.outerHTML;

                                // On DOM Ready
                                onDOMReady(() => {
                                    // Media Playlist > Toggle Media
                                    mediaPlaylist[i].toggleMedia(0)
                                }, 3e3);

                                // Modification > Media Playlist > Is Modified
                                mediaPlaylist[i]['LapysJS isModified'] = !0
                            }
                    });

                    // SetTimeout
                    setTimeout(() => {
                        // On Node Change
                        onNodeChange(document.body, function LapysJSScriptCorrectMediaPlaylist() {
                            /* Loop
                                    Index all Media Playlist.
                            */
                            for (let i = 0; i < mediaPlaylist.length; i += 1) {
                                /* Function > Insert Media Container
                                        --- NOTE ---
                                            @lapys:
                                                - This represents the Media Playlist's Media Container.
                                                - The Media Playlist parameter is for the sake of simplicity.
                                */
                                function insertMediaContainer(mediaPlaylist) {
                                    /* Loop
                                            While
                                                the Media Playlist does not have Media Container.
                                    */
                                    while (!mediaPlaylist[i].containers.media) {
                                        // Insertion
                                        mediaPlaylist[i].containers.media || mediaPlaylist[i].insertChild('begin', createElement(
                                            'div', '.container[data-id=media-container',

                                            /* Media Content */
                                            `<div data-id=media-content>` +
                                                /* Media */
                                                `<video ${mediaPlaylist[i].getAttribute('data-media-format') ? `class='${mediaPlaylist[i].getAttribute('data-media-format')}' ` : ''}controls data-id=media> </video>` +
                                            `</div>` +

                                            /* Media Information */
                                            `<div data-id=media-information>` +
                                                /* Name */
                                                `<a data-id=name> ${mediaPlaylist[i].getAttribute('data-name') || '&nbsp;'} </a>` +

                                                /* Description
                                                        --- NOTE ---
                                                            @lapys: The Description is only inserted into the DOM based on specific conditions.
                                                */
                                                (mediaPlaylist[i].hasAttribute('data-description') ? `<p data-id=description> ${(mediaPlaylist[i].sources[0] || document.createElement('a')).getAttribute('data-description') || mediaPlaylist[i].getAttribute('data-description')} </p>` : '') +
                                            `</div>` +

                                            /* Media Console */
                                            `<div data-id=media-console>` +
                                                /* Previous */
                                                `<button data-id=previous data-title=Previous data-title-coordinate=top> &blacktriangleleft;&blacktriangleleft; </button>` +

                                                /* Play-Pause */
                                                `<button data-id=play-pause data-title='Play/ Pause' data-title-coordinate=top> &blacktriangleright; </button>` +

                                                /* Load */
                                                `<button data-id=load data-title=Stop data-title-coordinate=top> &bull; </button>` +

                                                /* Next */
                                                `<button data-id=next data-title=Next data-title-coordinate=top> &blacktriangleright;&blacktriangleright; </button>` +
                                            `</div>`
                                        ));

                                        // Modification > (Media Playlist > Media Container)
                                            // Content
                                            mediaPlaylist[i].containers.media.content || Object.defineProperty(mediaPlaylist[i].containers.media, 'content', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function content() {
                                                    // Return
                                                    return this.children[[...this.children].indexOf(this.querySelector('[data-id=media-content'))];
                                                }
                                            });

                                            // Information
                                            mediaPlaylist[i].containers.media.information || Object.defineProperty(mediaPlaylist[i].containers.media, 'information', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function information() {
                                                    // Return
                                                    return this.children[[...this.children].indexOf(this.querySelector('[data-id=media-information'))];
                                                }
                                            });

                                            // Console
                                            mediaPlaylist[i].containers.media.console || Object.defineProperty(mediaPlaylist[i].containers.media, 'console', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function console() {
                                                    // Return
                                                    return this.children[[...this.children].indexOf(this.querySelector('[data-id=media-console'))];
                                                }
                                            });

                                        // Event
                                            // Media Playlist > Media Container
                                                // Console
                                                    // Load
                                                        // Click
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=load')['LapysJS loadMediaPlaylistCurrentMediaEventSet'] || mediaPlaylist[i].containers.media.console.querySelector('[data-id=load').setEvent('click', function load() {
                                                            /* Loop
                                                                    Index all Target's parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Target > Parent Element > Media Container > Content > Media > Load
                                                                    this.parentPath[i].containers.media.content.querySelector('[data-id=media').load();

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=load')['LapysJS loadMediaPlaylistCurrentMediaEventSet'] = !0;

                                                    // Next
                                                        // Click
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=next')['LapysJS toggleNextMediaEventSet'] || mediaPlaylist[i].containers.media.console.querySelector('[data-id=next').setEvent('click', function toggleNextMedia() {
                                                            /* Loop
                                                                    Index all the Target's parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Target > Parent Element > Toggle Next Media
                                                                    this.parentPath[i].toggleNextMedia();

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=next')['LapysJS toggleNextMediaEventSet'] = !0;

                                                    // Previous
                                                        // Click
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=previous')['LapysJS togglePreviousMediaEventSet'] || mediaPlaylist[i].containers.media.console.querySelector('[data-id=previous').setEvent('click', function togglePreviousMedia() {
                                                            /* Loop
                                                                    Index all the Target's parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Target > Parent Element > Toggle Previous Media
                                                                    this.parentPath[i].togglePreviousMedia();

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=previous')['LapysJS togglePreviousMediaEventSet'] = !0;

                                                    // Play-Pause
                                                        // Click
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=play-pause')['LapysJS togglePlayPauseStateMediaPlaylistCurrentMediaEventSet'] || mediaPlaylist[i].containers.media.console.querySelector('[data-id=play-pause').setEvent('click', function togglePlayPauseState() {
                                                            /* Loop
                                                                    Index all the Target's parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Modification > Target > Inner HTML
                                                                    this.parentPath[i].containers.media.content.querySelector('[data-id=media').paused ? this.innerHTML = '&#10074;&#10074;' : this.innerHTML = '&blacktriangleright;';

                                                                    // Target > Parent Element > Media Container > Content > Media > (Toggle Play-Pause State | (Play | Pause))
                                                                    typeof this.parentPath[i].containers.media.content.querySelector('[data-id=media')['LapysJS togglePlayPauseState'] == 'function' ? this.parentPath[i].containers.media.content.querySelector('[data-id=media')['LapysJS togglePlayPauseState']() : (this.parentPath[i].containers.media.content.querySelector('[data-id=media').paused ? this.parentPath[i].containers.media.content.querySelector('[data-id=media').play() : this.parentPath[i].containers.media.content.querySelector('[data-id=media').pause());

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.console.querySelector('[data-id=play-pause')['LapysJS togglePlayPauseStateMediaPlaylistCurrentMediaEventSet'] = !0;

                                                // Content
                                                    // Media
                                                        // Double Click
                                                        ((mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').getAttribute('class') || '').trim().split(/ /g).indexOf('media') < 0) || mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS double-clickEventSet'] || (typeof mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS toggleScreenState'] == 'function') || mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').setEvent('dblclick', mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').invokeFullscreen);
                                                        ((mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').getAttribute('class') || '').trim().split(/ /g).indexOf('media') < 0) || (mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS double-clickEventSet'] = !0);

                                                        // Ended
                                                        mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS endedEventSet'] || mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').setEvent('ended', function() {
                                                            /* Loop
                                                                    Index all the Target' parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Modification > (Target > Parent Element > Media Container > Console > Play-Pause) > Inner HTML
                                                                    this.parentPath[i].containers.media.console.querySelector('[data-id=play-pause').innerHTML = '&#8635;';

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS endedEventSet'] = !0;

                                                        // Pause
                                                        mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS pauseEventSet'] || mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').setEvent('pause', function() {
                                                            /* Loop
                                                                    Index all the Target' parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Modification > (Target > Parent Element > Media Container > Console > Play-Pause) > Inner HTML
                                                                    this.parentPath[i].containers.media.console.querySelector('[data-id=play-pause').innerHTML = '&blacktriangleright;';

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS pauseEventSet'] = !0;

                                                        // Playing
                                                        mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS playingEventSet'] || mediaPlaylist[i].containers.media.content.querySelector('[data-id=media').setEvent('playing', function() {
                                                            /* Loop
                                                                    Index all the Target' parent elements.
                                                            */
                                                            for (let i = 0; i < this.parentPath.length; i += 1)
                                                                /* Logic
                                                                        If
                                                                            the Parent Element is a Media Playlist.
                                                                */
                                                                if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                                    // Modification > (Target > Parent Element > Media Container > Console > Play-Pause) > Inner HTML
                                                                    this.parentPath[i].containers.media.console.querySelector('[data-id=play-pause').innerHTML = '&#10074;&#10074;';

                                                                    // Break
                                                                    break
                                                                }
                                                        });
                                                        mediaPlaylist[i].containers.media.content.querySelector('[data-id=media')['LapysJS playingEventSet'] = !0
                                    }
                                };

                                // Insert Media Container
                                insertMediaContainer(mediaPlaylist);

                                /* Loop
                                        Index all the Media Playlist's Sources.
                                */
                                for (let j = 0; j < mediaPlaylist[i].sources.length; j += 1) {
                                    // Event > (Media Playlist > Source) > Click
                                    mediaPlaylist[i].sources[j]['LapysJS mediaPlaylistToggleMediaEventSet'] || mediaPlaylist[i].sources[j].setEvent('click', function mediaPlaylistToggleMediaEventSet() {
                                        /* Loop
                                                Index all the Target' parent elements.
                                        */
                                        for (let i = 0; i < this.parentPath.length; i += 1)
                                            /* Logic
                                                    If
                                                        the Parent Element is a Media Playlist.
                                            */
                                            if ((this.parentPath[i].getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1) {
                                                // Target > Parent Element > Toggle Media
                                                this.parentPath[i].toggleMedia([...this.parentElement.children].indexOf(this));

                                                // Break
                                                break
                                            }
                                    });
                                    mediaPlaylist[i].sources[j]['LapysJS mediaPlaylistToggleMediaEventSet'] = !0;

                                    // Modification > Media Playlist > Source
                                        // Description
                                        (typeof mediaPlaylist[i].sources[j].description == 'string') || Object.defineProperty(mediaPlaylist[i].sources[j], 'description', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function getSource() {
                                                // Return
                                                return this.getAttribute('data-description') || ''
                                            },

                                            // Set
                                            set: function setSource() {
                                                // Modification > Target > Data Source
                                                this.setAttribute('data-description', arguments[0])
                                            }
                                        });

                                        // Source
                                        (typeof mediaPlaylist[i].sources[j].src == 'string') || Object.defineProperty(mediaPlaylist[i].sources[j], 'src', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function getSource() {
                                                // Return
                                                return this.getAttribute('data-src') || ''
                                            },

                                            // Set
                                            set: function setSource() {
                                                // Modification > Target > Data Source
                                                this.setAttribute('data-src', arguments[0])
                                            }
                                        })
                                }

                                /* Loop
                                        While
                                            the Media Playlist's Media Container's Content is non-existent.
                                */
                                while (!mediaPlaylist[i].containers.media.content) {
                                    // Initialization > (Data, Media Playlist)
                                    let data = [...mediaPlaylist[i].sources].indexOf(mediaPlaylist[i].containers.source.querySelector('[data-selected')),
                                        MediaPlaylist = mediaPlaylist[i];

                                    // Insertion
                                    !mediaPlaylist[i].containers.media.insertChild('begin', createElement('div', '[data-id=media-content', `<video ${mediaPlaylist[i].getAttribute('data-media-format') ? `class='${mediaPlaylist[i].getAttribute('data-media-format')}' ` : ''}controls data-id=media> </video>`));

                                    // Set Timeout
                                    setTimeout(() => {
                                        // Media Playlist > Toggle Media
                                        MediaPlaylist.toggleMedia(data)
                                    })
                                }

                                /* Loop
                                        While
                                            the Media Playlist's Media Container's Console is non-existent
                                                or
                                            the Media Playlist's Media Container's Information is non-existent.
                                */
                                while (
                                    !mediaPlaylist[i].containers.media.console ||
                                    !mediaPlaylist[i].containers.media.information
                                ) {
                                    // Initialization > (Data, Media Playlist)
                                    let data = [...mediaPlaylist[i].sources].indexOf(mediaPlaylist[i].containers.source.querySelector('[data-selected')),
                                        MediaPlaylist = mediaPlaylist[i];

                                    // Deletion
                                    mediaPlaylist[i].containers.media.remove();

                                    // Insert Media Container
                                    insertMediaContainer(mediaPlaylist);

                                    // Set Timeout
                                    setTimeout(() => {
                                        // Media Playlist > Toggle Media
                                        MediaPlaylist.toggleMedia(data)
                                    })
                                }

                                /* Loop
                                        While
                                            the Media Playlist's Source Container contains a non-Media Playlist Source.

                                    > Modification > (Media Playlist > Source Container > [Element]) > Class
                                */
                                while (mediaPlaylist[i].containers.source.querySelector(':not(.media-playlist-source)'))
                                    mediaPlaylist[i].containers.source.querySelector(':not(.media-playlist-source)').addClass('media-playlist-source');

                                /* Loop
                                        While
                                            the Media Playlist's Source Container contains a non-Sourced Element.

                                    > Deletion
                                */
                                while (mediaPlaylist[i].containers.source.querySelector(':not([data-src])'))
                                    mediaPlaylist[i].containers.source.querySelector(':not([data-src])').remove();

                                /* Loop
                                        While
                                            the Media Playlist's Media Container's Content does not have a Media.

                                    > Insertion
                                */
                                while (!mediaPlaylist[i].containers.media.content.querySelector('[data-id=media'))
                                    mediaPlaylist[i].containers.media.content.appendChild(createElement('video', `[controls=''][data-id=media`, '', new (function Object() {
                                        // Modification > Target > Class
                                        mediaPlaylist[i].getAttribute('data-media-format') ? this.className = mediaPlaylist[i].getAttribute('data-media-format') : !!0
                                    })))
                            }
                        })
                    }, LapysJS.permanentData. pluginScriptDelay = 3e3)
                })();

                /* Media
                        --- WARN ---
                            @lapys: All Media must be modified after all Media Playlists are constructed.

                        --- UPDATE REQUIRED ---
                            @lapys:
                                - Maybe we could do with less intervals and less lagging?
                                - The fullscreen functionality could use a little more work.
                */
                    // On Node Change
                    onNodeChange(document.body, function LapysJSScriptCorrectMedia() {
                        /* Loop
                                Index all Media Control Panels.
                        */
                        for (let i = 0; i < document.querySelectorAll('[data-id=media-controls-panel').length; i += 1) {
                            // Modification > Media Control Panel > To Be Deleted
                            document.querySelectorAll('[data-id=media-controls-panel')[i]['LapysJS toBeDeleted'] = [];

                            /* Loop
                                    Index all the Media Control Panel's previous element siblings.

                                > Modification > Media Control Panel > To Be Deleted
                            */
                            for (let j = 0; j < document.querySelectorAll('[data-id=media-controls-panel')[i].previousElementSiblings.length; j += 1)
                                document.querySelectorAll('[data-id=media-controls-panel')[i]['LapysJS toBeDeleted'].push((document.querySelectorAll('[data-id=media-controls-panel')[i].previousElementSiblings[j].getAttribute('class') || '').trim().split(/ /g).indexOf('media') > -1);

                            // Deletion
                            (document.querySelectorAll('[data-id=media-controls-panel')[i]['LapysJS toBeDeleted'].indexOf(!0) > -1) || document.querySelectorAll('[data-id=media-controls-panel')[i].remove()
                        }
                    });

                    (function LapysJSScriptMedia() {
                         // Initialization > Media
                        let media = document.querySelectorAll('.media:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(input):not(textarea)');

                        // On Node Added
                        onNodeAdded(document.body, function LapysJSScriptNewMedia() {
                            // Update > Media
                            media = document.querySelectorAll('.media:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(input):not(textarea)');

                            /* Loop
                                    Index all Media.
                            */
                            for (let i = 0; i < media.length; i += 1)
                                /* Logic
                                        If
                                            the Media is not modified.
                                */
                                if (!media[i]['LapysJS isModified']) {
                                    // Modification > Media
                                        // Controls Panel
                                        (typeof (media[i].controlsPanel || []).tagName == 'string' && isObject(media[i].controlsPanel, !!0)) || Object.defineProperty(media[i], 'controlsPanel', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function controlsPanel() {
                                                /* Loop
                                                        Index all the Target's next element siblings.
                                                */
                                                for (let i = 0; i < this.nextElementSiblings.length; i += 1)
                                                    /* logic
                                                            If
                                                                the Next Element Sibling is a Media Controls Panel.
                                                    */
                                                    if (this.nextElementSiblings[i].getAttribute('data-id') === 'media-controls-panel') {
                                                        // Return
                                                        return this.nextElementSiblings[i];

                                                        // Break
                                                        break
                                                    }
                                            }
                                        });

                                        // End Time
                                        (typeof media[i].endTime == 'number') || Object.defineProperty(media[i], 'endTime', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function endTime() {
                                                // Return
                                                return this.duration
                                            }
                                        });

                                        // Start Time
                                        (typeof media[i].startTime == 'number') || Object.defineProperty(media[i], 'startTime', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function startTime() {
                                                // Return
                                                return 0
                                            }
                                        });

                                    // Function > Media
                                        // Get Volume
                                        Object.defineProperty(media[i], 'getVolume', {
                                            // Value
                                            value: function getVolume() {
                                                // Return
                                                return this.volume || +this.getAttribute('volume').replace(/ /g, '')
                                            }
                                        });

                                        // Invoke Fullscreen
                                        Object.defineProperty(media[i], 'LapysJS invokeFullscreen', {
                                            // Value
                                            value: function invokeFullscreen() {
                                                // (Target > Controls Panel > Components > Fullscreen) > Click
                                                this.controlsPanel.components.fullscreen.click()
                                            }
                                        });

                                        // Load
                                        Object.defineProperty(media[i], 'LapysJS load', {
                                            // Value
                                            value: function load() {
                                                // Initialization > Target
                                                let that = this;

                                                // Function > Check Target Is Playing
                                                function checkTargetIsPlaying() {
                                                    /* Logic
                                                            If
                                                                the Target is playing.
                                                    */
                                                    if (
                                                        that.currentTime > 0 &&
                                                        !that.paused &&
                                                        that.readyState > 2
                                                    ) {
                                                        // Clear Interval
                                                        clearInterval(checkTargetIsPlayingInterval);

                                                        // Modification > Target > Current Time
                                                        that.currentTime = 0;

                                                        // Target > Pause
                                                        that.pause()
                                                    }
                                                }

                                                // Initialization > Check Target Is Playing Interval
                                                let checkTargetIsPlayingInterval = setInterval(checkTargetIsPlaying)
                                            }
                                        });

                                        // Set Volume
                                        Object.defineProperty(media[i], 'setVolume', {
                                            // Value
                                            value: function setVolume() {
                                                // Modification > Target > Volume
                                                this.setAttribute('volume', parseNumber(arguments[0]));
                                                this.volume = parseNumber(arguments[0])
                                            }
                                        });

                                        // Toggle Play-Pause State
                                        Object.defineProperty(media[i], 'LapysJS togglePlayPauseState', {
                                            // Value
                                            value: function togglePlayPauseState() {
                                                // Target > (Play | Pause)
                                                this.paused ? this.play() : this.pause()
                                            }
                                        });

                                    // Event > Media
                                        // Double Click
                                        media[i].setEvent('dblclick', function() {
                                            // (Target > Controls Panel > Components > Fullscreen) > Click
                                            this.controlsPanel.components.fullscreen.click()
                                        });

                                        // Ended
                                        media[i].setEvent('ended', function() {
                                            // Modification > (Target > Controls Panel > Components > Play-Pause Reload) > Inner HTML
                                            this.controlsPanel.components.playPauseReload.innerHTML = this.getAttribute('data-playpause-button-html') || '&#8635;';
                                            this.controlsPanel.components.play.hidden = !!0
                                        });

                                        // Loaded Data
                                        media[i].setEvent('loadeddata', function() {
                                            // Target > Current Time
                                            this.currentTime = 0
                                        });

                                        // Paused
                                        media[i].setEvent('pause', function() {
                                            // Modification > (Target > Controls Panel > Components > Play) > Hidden
                                            this.controlsPanel.components.play.hidden = !!0
                                        });

                                        // Playing
                                        media[i].setEvent('playing', function() {
                                            // Modification > (Target > Controls Panel > Components > Play) > Hidden
                                            this.controlsPanel.components.play.hidden = !0
                                        });

                                        // Seeking
                                        media[i].setEvent('seeking', function() {
                                            // Modification > (Target > Controls Panel > Components > Play-Pause Reload) > Inner HTML
                                            !this.controlsPanel || (this.controlsPanel.components.playPauseReload.innerHTML = this.getAttribute('data-playpause-button-html') || '&#10074;&#10074;')
                                        });

                                    // Set Interval
                                    setInterval(() => {
                                        // Modification > (Target > Controls Panel > Components > (Play-Pause Reload, Timeline > Seeker)) > (Inner HTML, Value)
                                        (parseInt(media[i].currentTime) !== parseInt(media[i].duration)) || (media[i].controlsPanel.components.playPauseReload.innerHTML = media[i].getAttribute('data-playpause-button-html') || '&#8635;');
                                        !media[i].controlsPanel || (media[i].controlsPanel.components.timeline.seeker.value = parseInt(media[i].currentTime));

                                        // (Target > Controls Panel > Components > Fullscreen) > Click
                                        !(screen.height !== innerHeight && (document.documentElement.hasAttribute('data-fullscreen') && (media[i].getCSS('height') === '100%' && media[i].getCSS('left') === '0px' && media[i].getCSS('position') === 'fixed' && media[i].getCSS('right') === '0px' && media[i].getCSS('width') === '100%' && media[i].getCSS('z-index') == 2147483643))) || media[i].controlsPanel.components.fullscreen.click();

                                        // Style > (Media > Controls Panel (> Components > Play)) > Margin (Left, Top)
                                        !media[i].controlsPanel || media[i].controlsPanel.components.play.setCSS('margin-top', `-${((media[i].offset.height - media[i].controlsPanel.components.play.offset.height) / 2) + 50}px`);
                                        !media[i].controlsPanel || media[i].controlsPanel.setCSS('margin-left', `${media[i].offset.left}px`);

                                        /* Loop
                                                Index all Media Controls Panel.

                                            > Modification > (Media Control Panel > <style>) > Inner HTML
                                        */
                                        !media[i].controlsPanel || ((media[i].controlsPanel.querySelector('style') || []).innerHTML = (
                                            `[data-id=media-controls-panel][lapysjs-random-attribute='${media[i].controlsPanel.getAttribute('lapysjs-random-attribute')}'] {` +
                                                `width: ${media[i].getCSS('width')}`+
                                            `}`
                                        ))
                                    }, 500);

                                    // Set Timeout
                                    setTimeout(() => {
                                        // Initialization > Data
                                        let data = media[i].controlsPanel.components.timeline.format;

                                        /* Loop
                                                [while statement]

                                            > Update > Data
                                        */
                                        while (
                                            data.length &&
                                            (
                                                data[0] !== 'segmented' &&
                                                data[0] !== 'standard'
                                            )
                                        )
                                            data = data.removeElement(data[0]);

                                        // Set Interval
                                        !data[0] || setInterval(() => {
                                            /* Logic
                                                    If
                                                        the Media exists.

                                                    --- NOTE ---
                                                        @lapys: This is important because if the Media gets deleted
                                                            it should be recognized within this interval.

                                                            Any better solution to this recursive problem would be appreciated.
                                            */
                                            if (
                                                media[i] &&
                                                (media[i] || []).controlsPanel
                                            )
                                                /* Logic
                                                        If
                                                            the Media's Controls Panel's Components exists.
                                                */
                                                if (media[i].controlsPanel.components)
                                                    /* Logic
                                                            [if:else if:else statement]

                                                            --- CONSIDER ---
                                                                @lapys: A 'switch' statement might not be necessary for future updates.
                                                    */
                                                    if (data[0] === 'segmented') {
                                                        /* Modification > (Media > Controls Panel > Components > Timeline > (Current Time, Duration)) > Inner HTML
                                                                --- NOTE ---
                                                                    @lapys: This is the syntax logic used:
                                                                        let Data = <number>;
                                                                        [Math.floor(parseInt(Data, 10) / 3600) % 24, Math.floor(parseInt(Data, 10) / 60) % 60, parseInt(Data, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':')
                                                        */
                                                        media[i].controlsPanel.components.timeline.currentTime.innerHTML = [Math.floor(parseInt(media[i].currentTime, 10) / 3600) % 24, Math.floor(parseInt(media[i].currentTime, 10) / 60) % 60, parseInt(media[i].currentTime, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':').length > 5 ? [Math.floor(parseInt(media[i].currentTime, 10) / 3600) % 24, Math.floor(parseInt(media[i].currentTime, 10) / 60) % 60, parseInt(media[i].currentTime, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':') : `00:${[Math.floor(parseInt(media[i].currentTime, 10) / 3600) % 24, Math.floor(parseInt(media[i].currentTime, 10) / 60) % 60, parseInt(media[i].currentTime, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':')}`;
                                                        media[i].controlsPanel.components.timeline.duration.innerHTML = [Math.floor(parseInt(media[i].duration, 10) / 3600) % 24, Math.floor(parseInt(media[i].duration, 10) / 60) % 60, parseInt(media[i].duration, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':').length > 5 ? [Math.floor(parseInt(media[i].duration, 10) / 3600) % 24, Math.floor(parseInt(media[i].duration, 10) / 60) % 60, parseInt(media[i].duration, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':') : `00:${[Math.floor(parseInt(media[i].duration, 10) / 3600) % 24, Math.floor(parseInt(media[i].duration, 10) / 60) % 60, parseInt(media[i].duration, 10) % 60].map(data => data < 10 ? '0' + data : data).filter((data, index) => data !== '00' || index > 0).join(':')}`
                                                    }

                                                    else if (data[0] === 'standard') {
                                                        // Modification > (Media > Controls Panel > Components > Timeline > (Current Time, Duration)) > Inner HTML
                                                        media[i].controlsPanel.components.timeline.currentTime.innerHTML = data.indexOf('integer') > -1 ? parseInt(media[i].currentTime) : media[i].currentTime;
                                                        media[i].controlsPanel.components.timeline.duration.innerHTML = data.indexOf('integer') > -1 ? parseInt(media[i].duration) : media[i].duration
                                                    }
                                        }, 100)
                                    }, 200);

                                    // Modification > Media > Is Modified
                                    media[i]['LapysJS isModified'] = !0
                                }
                        });

                        // On Node Change
                        onNodeChange(document.body, function LapysJSScriptCorrectMedia() {
                            /* Loop
                                    Index all Media.
                            */
                            for (let i = 0; i < media.length; i += 1)
                                /* Set Timeout
                                        --- WARN ---
                                            @lapys: The timeout prevents the duration of the Media
                                                from being miscalculated.
                                */
                                setTimeout(() => {
                                    /* Loop
                                            While
                                                the Media does not have a Controls Panel.
                                    */
                                    while (!media[i].controlsPanel) {
                                        // Initialization > Random
                                        let random = rand();

                                        // Insertion
                                        media[i].insertAdjacentHTML(
                                            'afterend',

                                            /* Media Controls Panel */
                                            `<div data-id=media-controls-panel lapysjs-random-attribute='${random}'>` +
                                                `<style hidden type=text/css>` +
                                                    `[data-id=media-controls-panel][lapysjs-random-attribute='${random}'] {` +
                                                        `width: ${media[i].getCSS('width')}`+
                                                    `}` +
                                                `</style>` +

                                                /* Play */
                                                `<button data-id=media-controls-panel-play> ${media[i].getAttribute('data-play-button-html') || '&blacktriangleright;'} </button>` +

                                                /* Play-Pause Reload */
                                                `<button data-id=media-controls-panel-playPauseReload> ${media[i].getAttribute('data-playpause-button-html') || '&blacktriangleright;'} </button>` +

                                                /* Timeline */
                                                `<div data-format='segmented' data-id=media-controls-panel-timeline>` +
                                                    /* Current Time */
                                                    `<div data-id=media-controls-panel-currenttime> --:-- </div>` +

                                                    /* Seeker */
                                                    `<input data-id=media-controls-panel-seeker${media[i].duration ? ` max=${parseInt(media[i].duration)}` : ''} min=0 type=range value=0>` +

                                                    /* Duration */
                                                    `<div data-id=media-controls-panel-duration> --:-- </div>` +
                                                `</div>` +

                                                /* Volume */
                                                `<div data-id=media-controls-panel-volume>` +
                                                    /* Mute */
                                                    `<button data-id=media-controls-panel-mute> ${media[i].getAttribute('data-mute-button-html') || '&#128266;'} </button>` +

                                                    /* Volume Bar */
                                                    `<input data-id=media-controls-panel-volumeBar max=100 min=0 type=range value=${parseNumber(media[i].getAttribute('volume')) * 100 || 0}>` +
                                                `</div>` +

                                                /* Fullscreen */
                                                `<button data-id=media-controls-panel-fullscreen> ${media[i].getAttribute('data-fullscreen-button-html') || '&#9645;'} </button>` +
                                            `</div>`
                                        );

                                        // Modification > (Media > Controls Panel)
                                            // Components
                                            Object.defineProperty(media[i].controlsPanel, 'components', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function components() {
                                                    // Initialization > Data
                                                    let data = new (function LapysJSMediaControlsPanelComponentList() {});
                                                        // Fullscreen
                                                        data.fullscreen = this.querySelector('[data-id=media-controls-panel-fullscreen');

                                                        // Play
                                                        data.play = this.querySelector('[data-id=media-controls-panel-play');

                                                        // Play-Pause Reload
                                                        data.playPauseReload = this.querySelector('[data-id=media-controls-panel-playPauseReload');

                                                        // Timeline
                                                        data.timeline = this.querySelector('[data-id=media-controls-panel-timeline');
                                                            // Current Time
                                                            data.timeline.currentTime = data.timeline.querySelector('[data-id=media-controls-panel-currenttime');

                                                            // Duration
                                                            data.timeline.duration = data.timeline.querySelector('[data-id=media-controls-panel-duration');

                                                            // Format
                                                            Object.defineProperty(data.timeline, 'format', {
                                                                // Configurable
                                                                configurable: !0,

                                                                // Enumerable
                                                                enumerable: !0,

                                                                // Get
                                                                get: function format() {
                                                                    // Return
                                                                    return (this.getAttribute('data-format') || '').trim().split(/ /g)
                                                                }
                                                            });

                                                            // Seeker
                                                            data.timeline.seeker = data.timeline.querySelector('[data-id=media-controls-panel-seeker');

                                                        // Volume
                                                        data.volume = this.querySelector('[data-id=media-controls-panel-volume');
                                                            // (Volume) Bar
                                                            data.volume.bar = data.volume.querySelector('[data-id=media-controls-panel-volumeBar');

                                                            // Mute
                                                            data.volume.mute = data.volume.querySelector('[data-id=media-controls-panel-mute');

                                                    // Return
                                                    return data
                                                }
                                            });

                                            // Media
                                            Object.defineProperty(media[i].controlsPanel, 'media', {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function media() {
                                                    /* Loop
                                                            Index all the Target's Previous Element Siblings.
                                                    */
                                                    for (let i = 0; i < this.previousElementSiblings.length; i += 1)
                                                        /* Logic
                                                                If
                                                                    the Previous Element Sibling is a Media.
                                                        */
                                                        if ((this.previousElementSiblings[i].getAttribute('class') || '').trim().split(/ /g).indexOf('media') > -1) {
                                                            // Return
                                                            return this.previousElementSiblings[i];

                                                            // Break
                                                            break
                                                        }
                                                }
                                            });

                                        // Event > (Media > Controls Panel > Components)
                                            // Fullscreen
                                                // Click
                                                media[i].controlsPanel.components.fullscreen.setEvent('click', function toggleFullscreen() {
                                                    /* Logic
                                                            If
                                                                <html> is on Fullscreen.
                                                    */
                                                    if (document.documentElement.hasAttribute('data-fullscreen')) {
                                                        // Style > (Target > Parent Element > Media) > (Height, Left, Position, Top, Width, Z-Index)
                                                        this.parentElement.media.delStyle('height', 'left', 'position', 'top', 'width', 'z-index');

                                                        // Modification > (Target > Parent Element > Media) > Style
                                                        this.parentElement.media.getAttribute('style') || this.parentElement.media.removeAttribute('style');

                                                        // Style > (Target > Parent Element) > (Bottom, Left, Position, Width, Z-Index)
                                                        this.parentElement.delStyle('bottom', 'left', 'position', 'width', 'z-index');

                                                        // Modification > (Target > Parent Element) > Style
                                                        this.parentElement.getAttribute('style') || this.parentElement.removeAttribute('style');
                                                    }

                                                    else {
                                                        /* Set Timeout
                                                                --- NOTE ---
                                                                    @lapys: This timeout is here for legitimate reasons I cannot remember, honestly.
                                                        */
                                                        setTimeout(() => {
                                                            // Style > (Target > Parent Element > Media) > (Height, Left, Position, Top, Width, Z-Index)
                                                            this.parentElement.media.setCSS('height', '100% !important');
                                                            this.parentElement.media.setCSS('left', '0 !important');
                                                            this.parentElement.media.setCSS('position', 'fixed !important');
                                                            this.parentElement.media.setCSS('top', '0 !important');
                                                            this.parentElement.media.setCSS('width', '100% !important');
                                                            this.parentElement.media.setCSS('z-index', '2147483643 !important');

                                                            // Style > (Target > Parent Element) > (Bottom, Left, Position, Width, Z-Index)
                                                            this.parentElement.setCSS('bottom', '0 !important');
                                                            this.parentElement.setCSS('left', '0 !important');
                                                            this.parentElement.setCSS('position', 'fixed !important');
                                                            this.parentElement.setCSS('width', '100% !important');
                                                            this.parentElement.setCSS('z-index', '2147483644 !important')
                                                        }, 100)
                                                    }

                                                    /* <html> Invoke Fullscreen
                                                            --- NOTE ---
                                                                @lapys: The  '1' there is a truthy value which will prevent
                                                                    LapysJS from alerting the browser from alerting the user about fullscreen mode.
                                                    */
                                                    document.documentElement.invokeFullscreen(1)
                                                });

                                            // Play
                                                // Click
                                                media[i].controlsPanel.components.play.setEvent('click', function togglePlayState() {
                                                    // (Target > Parent Element > Media > Controls Panel > Components > Play-Pause-Reload) > Click
                                                    this.parentElement.media.controlsPanel.components.playPauseReload.click();

                                                    // Modification > Target > Hidden
                                                    !this.paused ? this.hidden = !0 : this.hidden = !!0
                                                });

                                            // Play-Pause-Reload
                                                // Click
                                                media[i].controlsPanel.components.playPauseReload.setEvent('click', function togglePlayPauseState() {
                                                    // Modification > (Target > Parent Element > Media) > Current Time
                                                    !(this.parentElement.media.ended || parseInt(this.parentElement.media.currentTime) === parseInt(this.parentElement.media.duration)) || (this.parentElement.media.currentTime = 0);

                                                    // (Target > Parent Element > Media) > Toggle Play-Pause State
                                                    this.parentElement.media['LapysJS togglePlayPauseState']();

                                                    // Modification > Target > Inner HTML
                                                    this.parentElement.media.paused ? this.innerHTML = '&blacktriangleright;' : this.innerHTML = '&#10074;&#10074;';
                                                    !this.parentElement.hasAttribute('data-playpause-button-html') || (this.innerHTML = this.parentElement.media.getAttribute('data-playpause-button-html'))
                                                });

                                            // Timeline > Seeker
                                                // Update
                                                media[i].controlsPanel.components.timeline.seeker.setEvent('_update', function toggleVolume() {
                                                    // Modification > (Target > Parent Element > Parent Element > Media) > cURRENT tIME
                                                    this.parentElement.parentElement.media.currentTime = this.value
                                                });

                                            // Volume > Bar
                                                // Mouse Leave
                                                media[i].controlsPanel.components.volume.bar.setEvent('mouseleave', function toggleVolume() {
                                                    // Target > Close
                                                    this.close()
                                                });

                                                // Mouse Over
                                                media[i].controlsPanel.components.volume.bar.setEvent('mouseover', function toggleVolume() {
                                                    // Target > Open
                                                    this.open()
                                                });

                                                // Update
                                                media[i].controlsPanel.components.volume.bar.setEvent('_update', function toggleVolume() {
                                                    // (Target > Parent Element > Parent Element > Media) > Set Volume
                                                    this.parentElement.parentElement.media.setVolume(this.value / 100)
                                                });

                                            // Volume > Mute
                                                // Click
                                                media[i].controlsPanel.components.volume.mute.setEvent('click', function toggleMutedState() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (this.parentElement.parentElement.media.getVolume()) {
                                                        // Modification > (Target > Parent Element > Parent Element > Media) > Former Volume
                                                        this.parentElement.parentElement.media['LapysJS formerVolume'] = this.parentElement.parentElement.media.getVolume() || 1;

                                                        // (Target > Parent Element > Parent Element > Media) > Set Volume
                                                        this.parentElement.parentElement.media.setVolume(0)
                                                    }

                                                    else
                                                        // (Target > Parent Element > Parent Element > Media) > Set Volume
                                                        this.parentElement.parentElement.media.setVolume(this.parentElement.parentElement.media['LapysJS formerVolume']);

                                                    // Modification > (Target > Next Element Sibling) > Value
                                                    this.nextElementSibling.value = this.parentElement.parentElement.media.getVolume() * 100
                                                });

                                                // Mouse Leave
                                                media[i].controlsPanel.components.volume.mute.setEvent('mouseleave', function displayVolumeBar() {
                                                    // (Target > Next Element Sibling) > Close
                                                    this.nextElementSibling.close()
                                                });

                                                // Mouse Over
                                                media[i].controlsPanel.components.volume.mute.setEvent('mouseover', function displayVolumeBar() {
                                                    // (Target > Next Element Sibling) > Open
                                                    this.nextElementSibling.open()
                                                });

                                        /* Set Timeout
                                                --- NOTE ---
                                                    @lapys: This timeout tests if the Media is too small
                                                        for a Controls Panel and reduces the UI components of the Control Panel.
                                        */
                                        setTimeout(() => {
                                            /* Logic
                                                    If
                                                        the Media's Control Panel's scroll width is greater than the Media's width.
                                            */
                                            if (media[i].controlsPanel.scrollWidth > media[i].offset.width) {
                                                // Modification > (Media > Controls Panel > Components)
                                                    // Fullscreen > Hidden
                                                    media[i].controlsPanel.components.fullscreen.hidden = !0;

                                                    // Current Time > Hidden
                                                    media[i].controlsPanel.components.timeline.currentTime.hidden = !0;

                                                    // Duration > Hidden
                                                    media[i].controlsPanel.components.timeline.duration.hidden = !0
                                            }
                                        }, 500)
                                    }

                                    // Modification > Media > Controls
                                    !media[i].controls || (media[i].controls = !!0);

                                    // Media > Set Volume
                                    media[i].getVolume() || media[i].setVolume(media[i].controlsPanel.components.volume.bar.value / 100);

                                    // Modification > Media > Former Volume
                                    media[i]['LapysJS formerVolume'] || (media[i]['LapysJS formerVolume'] = media[i].getVolume());

                                    /* Logic
                                            If
                                                Media is muted.
                                    */
                                    if (media[i].muted) {
                                        // Modification > Media > Muted
                                        media[i].muted = !!0;
                                        media[i].removeAttribute('muted');

                                        // Media > Set Volume
                                        media[i].setVolume(0)
                                    }
                                }, 100)
                        })
                    })();

                // Placeholder
                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewPlaceholder() {
                        // Initialization > Placeholder
                        let placeholder = document.querySelectorAll('input[data-placeholder]:not(.accordion):not(.carousel):not(.dynamic-text):not(.media), textarea[data-placeholder]:not(.accordion):not(.carousel):not(.dynamic-text):not(.media)');

                        /* Loop
                                Index all Placeholders.
                        */
                        for (let i = 0; i < placeholder.length; i += 1)
                            /* Logic
                                    If
                                        the Placeholder is not modified.
                            */
                            if (!placeholder[i]['LapysJS isModified']) {
                                // Modification > Placeholder > Placeholder Element
                                Object.defineProperty(placeholder[i], 'placeholderElement', {
                                    // Configurable
                                    configurable: !0,

                                    // Enumerable
                                    enumerable: !0,

                                    // Get
                                    get: function placeholderElement() {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (!this.hasAttribute('data-placeholder'))
                                            return;

                                        else if (!this.previousElementSibling)
                                            return null;

                                        else if (this.previousElementSibling.getAttribute('data-id') === 'placeholder')
                                            return this.previousElementSibling;

                                        // Return
                                        return null
                                    }
                                });

                                // Insertion
                                placeholder[i].insertAdjacentHTML('beforebegin', `<div data-id=placeholder style='position: absolute'>${placeholder[i].getAttribute('data-placeholder')}</div>`);

                                // Event > Placeholder
                                    // Blur
                                    placeholder[i].setEvent('blur', function deselectPlaceholder() {
                                        // Modification > (Target > Previous Element Sibling) > Data Selected
                                        !this.previousElementSibling || (this.previousElementSibling.getAttribute('data-id') !== 'placeholder') || this.previousElementSibling.removeAttribute('data-selected')
                                    });

                                    // Focus
                                    placeholder[i].setEvent('focus', function selectPlaceholder() {
                                        // Modification > (Target > Previous Element Sibling) > Data Selected
                                        !this.previousElementSibling || (this.previousElementSibling.getAttribute('data-id') !== 'placeholder') || this.previousElementSibling.setAttribute('data-selected', '')
                                    });

                                // Modification > Placeholder > Is Modified
                                placeholder[i]['LapysJS isModified'] = !0
                            }

                        // Initialization > Placeholder Element
                        let placeholderElement = document.querySelectorAll('[data-id=placeholder');

                        /* Loop
                                Index all Placeholder Elements.
                        */
                        for (let i = 0; i < placeholderElement.length; i += 1) {
                            // Style > Placeholder Element
                                // Opacity
                                ((placeholderElement[i].nextElementSibling || {}).value === '') || (placeholderElement[i].style.opacity = 0);

                                // Opacity, Position
                                placeholderElement[i].hasAttribute('data-selected') ? placeholderElement[i].delStyle('opacity', 'position') : placeholderElement[i].style.position = 'absolute';

                            // Deletion
                            (placeholderElement[i].nextElementSibling || {hasAttribute: () => { return !!0 }}).hasAttribute('data-placeholder') || placeholderElement[i].remove()
                        }
                    });

                // Screen Tip
                    // Registration
                    (!window.customElements || (document.createElement('screen-tip').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('screen-tip', class HTMLScreenTipElement extends HTMLElement {}));

                    // Initialization > (Screen Tip, Title Element)
                    let screenTip = document.createElement('screen-tip'),
                        titleElement = document.querySelectorAll('[data-title');

                    // Function
                        // Conceal
                        screenTip.conceal || Object.defineProperty(screenTip, 'conceal', {
                            // Value
                            value: function conceal() {
                                // Initialization > Target
                                let that = screen.tip || document.screenTip || this;

                                /* Logic
                                        If
                                            Argument 0 is an Element
                                                and
                                            Argument 0 has a LapysJS title.

                                    > Modification > Argument 0 > Title
                                */
                                if (
                                    (
                                        (arguments[0] || []).tagName &&
                                        !isObject(arguments[0], !!0)
                                    ) &&
                                    (arguments[0] || [])['LapysJS title']
                                ) {
                                    arguments[0].title = arguments[0]['LapysJS title'];
                                    arguments[0]['LapysJS title'] = void 0
                                }

                                // Style > Target > (Opacity, Pointer Events)
                                that.delStyle('opacity');
                                that.delStyle('pointer-events');

                                // Set Timeout
                                setTimeout(() => {
                                    // Modification > Target > Inner HTML
                                    that.innerHTML = '';

                                    // Style > Target > (Left, Top)
                                    that.delStyle('left');
                                    that.delStyle('top');

                                    // Modification > Target > (Class, Style)
                                    that.removeAttribute('class');
                                    that.removeAttribute('style')
                                }, (parseNumber(this.getCSS('transition-delay')) + parseNumber(this.getCSS('transition-duration'))) * 1e3)
                            }
                        });

                        // Display
                        screenTip.display || Object.defineProperty(screenTip, 'display', {
                            // Value
                            value: function display() {
                                /* Logic
                                        If
                                            Argument 0 is an Element.
                                */
                                if (
                                    typeof (arguments[0] || []).tagName == 'string' &&
                                    !isObject(arguments[0], !!0)
                                ) {
                                    // Initialization > (Arguments, Target)
                                    let Arguments = arguments,
                                        that = screen.tip || document.screenTip || this;

                                    // Set Timeout
                                    setTimeout(() => {
                                        /* Logic
                                                If
                                                    Argument 0 had a title.

                                            > Modification > Argument 0 > Title
                                        */
                                        if (Arguments[0].title) {
                                            Arguments[0]['LapysJS title'] = Arguments[0].title;
                                            Arguments[0].removeAttribute('title')
                                        }

                                        // Target > Inner HTML
                                        that.innerHTML = Arguments[0].getAttribute('data-title');

                                        // Initialization > (Coordinates, Left, Top)
                                        let coordinates = (Arguments[0].getAttribute('data-title-coordinate') || '').trim().replace((Arguments[0].getAttribute('data-title-coordinate') || '').replace(/ /g, '').replace(/bottom/g, '').replace(/center/g, '').replace(/left/g, '').replace(/right/g, '').replace(/top/g, ''), '').replace(/  /g, ' ').replace(/  /g, ' ').trim().split(/ /g),
                                            left = Arguments[1].constructor.name.indexOf('Event') > -1 ? LapysJS.permanentData.mouseCoordinateX + ((int(rand(1, 10)) > 5 ? -1 : 1) * rand(1, 5)) : Arguments[0].offset.left,
                                            top = Arguments[1].constructor.name.indexOf('Event') > -1 ? LapysJS.permanentData.mouseCoordinateY + ((int(rand(1, 10)) > 5 ? -1 : 1) * rand(1, 5)) + 20 : Arguments[0].offset.top;

                                        // Update > Coordinates
                                        (coordinates.length < 3) || (coordinates.length = 2);

                                        /* Logic
                                                If
                                                    Argument 0 has the 'data-title-coordinate' attribute.
                                        */
                                        if (Arguments[0].getAttribute('data-title-coordinate')) {
                                            /* Logic
                                                    If
                                                        the Coordinate indexes Bottom,

                                                    else if
                                                        the Coordinate indexes Center,

                                                    else if
                                                        the Coordinate indexes Left,

                                                    else if
                                                        the Coordinate indexes Right,

                                                    else if
                                                        the Coordinate indexes Top.

                                                > Update > (Left (| ,) Top)
                                            */
                                            if (coordinates.indexOf('bottom') > -1)
                                                top = Arguments[0].offset.bottom + parseNumber(Arguments[0].getCSS('margin-bottom'));

                                            else if (coordinates.indexOf('left') > -1) {
                                                left = Arguments[0].offset.left - that.offset.width;
                                                top -= (20 + (that.offset.height / 2))
                                            }

                                            else if (coordinates.indexOf('right') > -1) {
                                                left = Arguments[0].offset.right;
                                                top -= (20 + (that.offset.height / 2))
                                            }

                                            else if (coordinates.indexOf('top') > -1)
                                                top = Arguments[0].offset.top - parseNumber(Arguments[0].getCSS('margin-top')) - that.offset.height;

                                            else if (coordinates.indexOf('center') > -1) {
                                                left = ((Arguments[0].offset.right + parseNumber(Arguments[0].getCSS('margin-left'))) - that.offset.width) / 2;
                                                top = Arguments[0].offset.top + ((Arguments[0].offset.height / 2) - (that.offset.height / 2))
                                            }

                                            /* Logic
                                                    [if:else if:else statement]

                                                > Update > (Left | Top)
                                            */
                                            if (
                                                (
                                                    coordinates.indexOf('bottom') > -1 ||
                                                    coordinates.indexOf('top') > -1
                                                ) &&
                                                coordinates.indexOf('center') > -1
                                            )
                                                left = ((Arguments[0].offset.right + parseNumber(Arguments[0].getCSS('margin-left'))) - that.offset.width) / 2;

                                            else if (
                                                (
                                                    coordinates.indexOf('left') > -1 ||
                                                    coordinates.indexOf('right') > -1
                                                ) &&
                                                coordinates.indexOf('center') > -1
                                            )
                                                top = Arguments[0].offset.top + ((Arguments[0].offset.height / 2) - (that.offset.height / 2));

                                            else if (
                                                coordinates.indexOf('bottom') > -1 &&
                                                coordinates.indexOf('left') > -1
                                            ) {
                                                left = Arguments[0].offset.left - that.offset.width;
                                                top = Arguments[0].offset.bottom + parseNumber(Arguments[0].getCSS('margin-bottom'))
                                            }

                                            else if (
                                                coordinates.indexOf('bottom') > -1 &&
                                                coordinates.indexOf('right') > -1
                                            ) {
                                                left = Arguments[0].offset.right;
                                                top = Arguments[0].offset.bottom + parseNumber(Arguments[0].getCSS('margin-bottom'))
                                            }

                                            else if (
                                                coordinates.indexOf('top') > -1 &&
                                                coordinates.indexOf('left') > -1
                                            ) {
                                                left = Arguments[0].offset.left - that.offset.width;
                                                top = Arguments[0].offset.top - parseNumber(Arguments[0].getCSS('margin-top')) - that.offset.height
                                            }

                                            else if (
                                                coordinates.indexOf('top') > -1 &&
                                                coordinates.indexOf('right') > -1
                                            ) {
                                                left = Arguments[0].offset.right;
                                                top = Arguments[0].offset.top - parseNumber(Arguments[0].getCSS('margin-top')) - that.offset.height
                                            }
                                        }

                                        /* Update > (Left, Top)
                                                --- NOTE ---
                                                    @lapys: This prevents the tool-tip from spilling out the screen.
                                        */
                                        (left + that.offset.width < innerWidth + 1) || (left = innerWidth - that.offset.width);
                                        (left > -1) || (left = that.offset.width);
                                        (top + that.offset.height < innerHeight + 1) || (top = innerHeight - that.offset.height);
                                        (top > -1) || (top = that.offset.height);

                                        // Modification > Target > Style
                                        that.setAttribute('style', `left: ${left}px !important; pointer-events: none !important; opacity: 1 !important; top: ${top}px !important`);

                                        // Modification > Target > (Class, Style)
                                        !Arguments[0].hasAttribute('data-title-class') || that.setAttribute('class', Arguments[0].getAttribute('data-title-class'));
                                        !Arguments[0].hasAttribute('data-title-style') || that.setAttribute('style', (that.getAttribute('style') || '') + (that.getAttribute('style') ? ';' : '') + Arguments[0].getAttribute('data-title-style'))
                                    }, 300 + parseNumber(that.getCSS('transition-delay')) + parseNumber(that.getCSS('transition-duration')))
                                }
                            }
                        });

                    // On Node Change
                    onNodeChange(document.body, function LapysJSScriptNewScreenTip() {
                        /* Loop
                                Index all Titled Elements.
                        */
                        for (let i = 0; i < titleElement.length; i += 1)
                            /* Logic
                                    If
                                        the Titled Element is not Data Titled.
                            */
                            if (!titleElement[i]['LapysJS isDataTitled']) {
                                // Event > Titled Element
                                    // Click, Mouse Enter
                                    titleElement[i].setEvent('click mouseenter', function displayScreenTip(event) {
                                        // Initialization > Target
                                        let that = this;

                                        setTimeout(() => {
                                            // Screen Tip > Display
                                            screenTip.display(that, event)
                                        })
                                    });

                                    // Mouse Leave
                                    titleElement[i].setEvent('mouseleave', function concealScreenTip() {
                                        // Screen Tip > Conceal
                                        screenTip.conceal(this)
                                    });

                                // Modification > Titled Element > Is Data Titled
                                titleElement[i]['LapysJS isDataTitled'] = !0
                            }

                        /* Loop
                                While
                                    there is another Screen Tip.

                            > Deletion
                        */
                        while (document.querySelectorAll('screen-tip')[1])
                            document.querySelectorAll('screen-tip')[1].remove();

                        // Insertion
                        document.querySelector('screen-tip') || document.body.appendChild(screenTip || document.createElement('screen-tip'));

                        // Modification > (Screen > Tip | Document > Screen Tip)
                        Object.defineProperty(window.screen ? screen : document, window.screen ? 'tip' : 'screenTip', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function() {
                                // Return
                                return document.querySelector('screen-tip')
                            },

                            // Set
                            set: () => {}
                        })
                    });

                // Select Box
                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewSelectBox() {
                        // Initialization > Select Box
                        let selectBox = document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]');

                        /* Loop
                                Index all Select Boxes.
                        */
                        for (let i = 0; i < selectBox.length; i += 1)
                            /* Logic
                                    If
                                        the Select Box is not modified.
                            */
                            if (!selectBox[i]['LapysJS isModified']) {
                                // Function > Select Box
                                    // Conceal Option Box
                                    Object.defineProperty(selectBox[i], 'concealOptionBox', {
                                        // Value
                                        value: function concealOptionBox() {
                                            // Modification > Target > Data Selected
                                            this.removeAttribute('data-selected');

                                            // Style > (Target > Option Box) > (Opacity, Pointer Events, Position)
                                            this.optionBox.style.opacity = 0;
                                            this.optionBox.style.pointerEvents = 'none';
                                            this.optionBox.style.position = 'absolute'
                                        }
                                    });

                                    // Display Option Box
                                    Object.defineProperty(selectBox[i], 'displayOptionBox', {
                                        // Value
                                        value: function displayOptionBox() {
                                            // Modification > Target > Data Selected
                                            this.setAttribute('data-selected', '');

                                            // Style > (Target > Option Box) > (Opacity, Pointer Events, Position)
                                            this.optionBox.delStyle('opacity', 'pointer-events', 'position')
                                        }
                                    });

                                    // Toggle Next Option
                                    Object.defineProperty(selectBox[i], 'toggleNextOption', {
                                        // Value
                                        value: function toggleNextOption() {
                                            // Target > Toggle Option
                                            this.toggleOption([...this.optionBox.children].indexOf(this.currentSelectedOption) === ~-this.optionBox.children.length ? 0 : [...this.optionBox.children].indexOf(this.currentSelectedOption) + 1)
                                        }
                                    });

                                    // Toggle Previous Option
                                    Object.defineProperty(selectBox[i], 'togglePreviousOption', {
                                        // Value
                                        value: function togglePreviousOption() {
                                            // Target > Toggle Option
                                            this.toggleOption([...this.optionBox.children].indexOf(this.currentSelectedOption) === 0 ? ~-this.optionBox.children.length : [...this.optionBox.children].indexOf(this.currentSelectedOption) - 1)
                                        }
                                    });

                                    // Toggle Option
                                    Object.defineProperty(selectBox[i], 'toggleOption', {
                                        // Value
                                        value: function toggleOption() {
                                            // Initialization > Data
                                            let data = parseNumber(String(arguments[0]).replace(/ /g, ''));

                                            // Update > Data
                                            this.optionBox.children[data] ? data : data = 0;

                                            /* Loop
                                                    Index all Target's Option Box's children.

                                                > (Target > Option Box > Child Element) > Data Active
                                            */
                                            for (let i = 0; i < this.optionBox.children.length; i += 1)
                                                this.optionBox.children[i].removeAttribute('data-active');

                                            // Modification > (Target > Option Box > Child Element) > Data Active
                                            this.optionBox.children[data].setAttribute('data-active', '')
                                        }
                                    });

                                // Modification > Select Box
                                    // Current Selected Option
                                    Object.defineProperty(selectBox[i], 'currentSelectedOption', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function currentSelectedOption() {
                                            /* Loop
                                                    [for statement]
                                            */
                                            for (let i = 0; i < document.querySelector(`[data-id='${this.getAttribute('data-id')}']:not(input):not(textarea)`).children.length; i += 1)
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (document.querySelector(`[data-id='${this.getAttribute('data-id')}']:not(input):not(textarea)`).children[i].hasAttribute('data-active')) {
                                                    // Return
                                                    return document.querySelector(`[data-id='${this.getAttribute('data-id')}']:not(input):not(textarea)`).children[i];

                                                    // Break
                                                    break
                                                }
                                        }
                                    });

                                    // Option Box
                                    Object.defineProperty(selectBox[i], 'optionBox', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function optionBox() {
                                            // Return
                                            return document.querySelector(`[data-id='${this.getAttribute('data-id')}']:not(input):not(textarea)`)
                                        }
                                    });
                                        // Options
                                        Object.defineProperty(selectBox[i].optionBox, 'options', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function options() {
                                                // Return
                                                return [...this.children]
                                            }
                                        });

                                        // Select Box
                                        Object.defineProperty(selectBox[i].optionBox, 'selectBox', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function optionBox() {
                                                // Return
                                                return document.querySelector(`input[data-id='${this.getAttribute('data-id')}'], textarea[data-id='${this.getAttribute('data-id')}']`)
                                            }
                                        });

                                    // Options
                                    Object.defineProperty(selectBox[i], 'options', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function options() {
                                            // Return
                                            return this.optionBox.options
                                        }
                                    });

                                // Select Box > Conceal Option Box
                                selectBox[i].concealOptionBox();

                                // Style > (Select Box > Option Box) > Transition
                                selectBox[i].optionBox.style.transition = '.3s ease-in-out';

                                // Select Box > Toggle Option
                                selectBox[i].toggleOption(0);

                                // Event > Select Box > Blur
                                selectBox[i].setEvent('blur', function concealOptionBox() {
                                    // Initialization > Target
                                    let that = this;

                                    // Set Timeout
                                    setTimeout(() => {
                                        /* Logic
                                                If
                                                    the Target is blurred,

                                                else if
                                                    the Target is not blurred.
                                        */
                                        if (
                                            !that.optionBox.hasAttribute('data-selected') &&
                                            !that.hasAttribute('data-do-not-blur')
                                        )
                                            // Target > Conceal Option Box
                                            that.concealOptionBox();

                                        else if (that.getAttribute('data-do-not-blur') == 'true')
                                            // Modification > Target > Data Do Not Blur
                                            that.removeAttribute('data-do-not-blur')
                                    }, (((parseNumber(this.optionBox.getCSS('transition-delay')) + parseNumber(this.optionBox.getCSS('transition-duration'))) * 1e3) || 0) + 1e3)
                                });

                                // Event
                                    // Select Box
                                        // Focus
                                        selectBox[i].setEvent('focus', selectBox[i].displayOptionBox);

                                        // Key Down
                                        selectBox[i].setEvent('keydown', function optionBoxOptionToggle(event) {
                                            // Initialization > Target
                                            let that = this;

                                            /* Logic
                                                    If
                                                        the Event Code contains 'Shift'.
                                            */
                                            if (event.code.indexOf('Shift') > -1) {
                                                // Modification > Target > Data Do Not Blur
                                                this.setAttribute('data-do-not-blur', !0);

                                                // Set Timeout
                                                setTimeout(() => {
                                                    // Target > Focus
                                                    that.focus()
                                                })
                                            };

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (event.code === 'Tab') {
                                                // Modification > Target > Data Do Not Blur
                                                this.setAttribute('data-do-not-blur', !0);

                                                // Target > Toggle (Previous | Next) Option
                                                (this['LapysJS formerKeyPressed'] || '').indexOf('Shift') > -1 ? this.togglePreviousOption() : this.toggleNextOption();

                                                // Set Timeout
                                                setTimeout(() => {
                                                    // Target > Focus
                                                    that.focus()
                                                })
                                            }

                                            else if (event.code === 'Escape')
                                                // Target > Blur
                                                that.blur();

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                event.code === 'ArrowDown' ||
                                                event.code === 'ArrowLeft' ||
                                                event.code === 'ArrowRight' ||
                                                event.code === 'ArrowUp' ||
                                                event.code === 'Enter' ||
                                                event.code === 'Escape' ||
                                                event.code === 'Tab' ||
                                                (
                                                    parseNumber(event.code) == 0 ||
                                                    parseNumber(event.code) == 1 ||
                                                    parseNumber(event.code) == 2 ||
                                                    parseNumber(event.code) == 3 ||
                                                    parseNumber(event.code) == 4 ||
                                                    parseNumber(event.code) == 5 ||
                                                    parseNumber(event.code) == 6 ||
                                                    parseNumber(event.code) == 7 ||
                                                    parseNumber(event.code) == 8 ||
                                                    parseNumber(event.code) == 9
                                                )
                                            )
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (
                                                    event.code === 'ArrowLeft' ||
                                                    event.code === 'ArrowUp'
                                                )
                                                    // Target > Toggle Previous Option
                                                    this.togglePreviousOption();

                                                else if (
                                                    event.code === 'ArrowDown' ||
                                                    event.code === 'ArrowRight' ||
                                                    event.code === 'Tab'
                                                )
                                                    // Target > Toggle Next Option
                                                    this.toggleNextOption();

                                                else if (event.code === 'Escape')
                                                    // Target > Conceal Option Box
                                                    this.concealOptionBox();

                                                else if (event.code === 'Enter') {
                                                    // Target > Toggle Option
                                                    this.toggleOption([...this.optionBox.children].indexOf(this.currentSelectedOption));

                                                    // Modification > Target > Value
                                                    this.value = this.optionBox.children[[...this.optionBox.children].indexOf(this.currentSelectedOption)].getAttribute('data-value') || this.optionBox.children[[...this.optionBox.children].indexOf(this.currentSelectedOption)].innerHTML
                                                }

                                                else
                                                    // Target > Toggle Option
                                                    this.toggleOption(parseNumber(event.code))
                                        });

                                        // Key Up
                                        selectBox[i].setEvent('keyup', function(event) {
                                            // Modification > Target > Former Key Pressed
                                            this['LapysJS formerKeyPressed'] = event.code
                                        });

                                    // Option Box
                                        // Click
                                        selectBox[i].optionBox.setEvent('click', function selectBoxValue() {
                                            // Target > Data Selected
                                            this.setAttribute('data-selected', '');

                                            // Modification > (Target > Select Box) > Value
                                            ([...this.children].indexOf(event.path[0]) < 0) || (this.selectBox.value = this.children[[...this.children].indexOf(event.path[0])].getAttribute('data-value') || this.children[[...this.children].indexOf(event.path[0])].innerHTML)
                                        });

                                        // Mouse Move
                                        selectBox[i].optionBox.setEvent('mousemove', function displayOptionBox() {
                                            // Target > Select Box > Display Option Box
                                            this.selectBox.displayOptionBox()
                                        });

                                // Modification > Select Box > Is Modified
                                selectBox[i]['LapysJS isModified'] = !0
                            }
                    });

                /* Toast
                        --- NOTE ---
                            @lapys: For messaging users in a subtle non-distracting method.
                */
                    // Registration
                    (!window.customElements || (document.createElement('screen-toast').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('screen-toast', class HTMLToastElement extends HTMLElement {}));

                    // Initialization > (Toast, Toast Element)
                    let toast = document.createElement('screen-toast'),
                        toastElement = document.querySelectorAll('[data-toast');

                    // Function > Toast
                        // Conceal
                        toast.conceal || Object.defineProperty(toast, 'conceal', {
                            // Value
                            value: function conceal() {
                                // Initialization > Target
                                let that = screen.toast || document.screenToast || this;

                                // Set Timeout
                                setTimeout(() => {
                                    // Style > Target > Bottom
                                    that.delStyle('bottom');

                                    // Set Timeout
                                    setTimeout(() => {
                                        // Modification > Target > (Inner HTML, Class, Style)
                                        that.innerHTML = '';
                                        that.removeAttribute('class');
                                        that.removeAttribute('style')
                                    }, 1e3)
                                }, +(String(!(typeof (arguments[0] || []).tagName == 'string' && !isObject(arguments[0], !!0)) || arguments[0].getAttribute('data-toast-delay')).replace('true', '0') || '0').replace(/ /g, '') * 1e3)
                            }
                        });

                        // Display
                        toast.display || Object.defineProperty(toast, 'display', {
                            // Value
                            value: function display() {
                                // Initialization > (Data, Target)
                                let data = arguments[0],
                                    that = screen.toast || document.screenToast || this;

                                // Set Timeout
                                setTimeout(() => {
                                    // Style > Target > Bottom
                                    that.style.bottom = '20px';

                                    /* Logic
                                            If
                                                Data is an Element.
                                    */
                                    if (
                                        typeof (data || []).tagName == 'string' &&
                                        !isObject(data, !!0)
                                    ) {
                                        // Modification > Target
                                            // Inner HTML
                                            that.innerHTML = data.getAttribute('data-toast');

                                            // Class
                                            data.hasAttribute('data-toast-class') || that.setAttribute('class', data.getAttribute('data-toast-class') || '');

                                            // Style
                                            data.hasAttribute('data-toast-style') || that.setAttribute('style', (that.getAttribute('style') || '') + (that.getAttribute('style') ? ';' : '') + data.getAttribute('data-toast-style'))
                                    }
                                }, +(String(!(typeof (arguments[0] || []).tagName == 'string' && !isObject(arguments[0], !!0)) || arguments[0].getAttribute('data-toast-delay')).replace('true', '0') || '0').replace(/ /g, '') * 1e3)
                            }
                        });

                    // Event > Toast > Click
                    (typeof toast.onclick == 'function') || (toast.onclick = function conceal() {
                        // Target > Conceal
                        this.conceal(createElement('div', '[data-toast-delay=.1][data-toast-duration=.3'))
                    });

                    // On Node Change
                    onNodeChange(document.body, function LapysJSScriptNewToast() {
                        /* Loop
                                Index all Toast Elements.
                        */
                        for (let i = 0; i < toastElement.length; i += 1)
                            /* Logic
                                    If
                                        the Toast Element is not modified.
                            */
                            if (!toastElement[i]['LapysJS isModified']) {
                                // Event > Toast Element > ([Data Event Type] | Click)
                                toastElement[i].setEvent((toastElement[i].getAttribute('data-event-type') || 'click').trim(), function toggleToast() {
                                    // Initialization > Target
                                    let that = this;

                                    // Toast > Display
                                    toast.display(this);

                                    // Set Timeout
                                    setTimeout(() => {
                                        // Toast > Conceal
                                        toast.conceal(that)
                                    }, +(this.getAttribute('data-toast-duration') || '3').replace(/ /g, '') * 1e3)
                                });

                                // Modification > Toast Element > Is Modified
                                toastElement[i]['LapysJS isModified'] = !0
                            }

                        /* Loop
                                While
                                    there is another Screen Toast.

                            > Deletion
                        */
                        while (document.querySelectorAll('screen-toast')[1])
                            document.querySelectorAll('screen-toast')[1].remove();

                        // Insertion
                        document.querySelector('screen-toast') || document.body.appendChild(toast || document.createElement('screen-toast'));

                        // Modification > (Screen > Toast | Document > Screen Toast)
                        Object.defineProperty(window.screen ? screen : document, window.screen ? 'toast' : 'screenToast', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function() {
                                // Return
                                return document.querySelector('screen-toast')
                            },

                            // Set
                            set: Function()
                        })
                    })
            });

        /* Event */
            // Window
                // Blur, Resize, Scroll
                setEvent('blur resize scroll', function plugInConcealEventSet() {
                    // Screen Tip > Conceal
                    (((window.screen || []).tip || document.screenTip) || {conceal: () => {}}).conceal();

                    // Toast > Click
                    (((window.screen || []).toast || document.screenToast) || {click: () => {}}).click();

                    // Set Timeout
                    setTimeout(() => {
                        /* Loop
                                Index all Select Boxes.

                            > Select Box > Conceal Option Box
                        */
                        for (let i = 0; i < document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]').length; i += 1)
                            (document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].concealOptionBox !== 'function') || document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].concealOptionBox()
                    }, 100)
                }, !0);

                // Key Down, Key Up
                setEvent('keydown keyup', function plugInConcealEventSet() {
                    // Screen Tip > Conceal
                    (((window.screen || []).tip || document.screenTip) || {conceal: () => {}}).conceal();

                    // Toast > Click
                    (((window.screen || []).toast || document.screenToast) || {click: () => {}}).click()
                });

                // Mouse Move
                setEvent('click mousemove', function screenTipMouseCoordinatesEventSet(event) {
                    // Modification > Target > Mouse Coordinate (X, Y)
                    LapysJS.permanentData.mouseCoordinateX = event.clientX;
                    LapysJS.permanentData.mouseCoordinateY = event.clientY
                });

                // Resize
                setEvent('resize', function resizeMediaControlsPanel() {
                    /* Loop
                            Index all Carousel.

                        > Carousel > Toggle Slide.
                    */
                    for (let i = 0; i < document.querySelectorAll('.carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)').length; i += 1)
                        !document.querySelectorAll('.carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)')[i].activeSlide || document.querySelectorAll('.carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)')[i].toggleSlide(+document.querySelectorAll('.carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(input):not(textarea)')[i].activeSlide.getAttribute('data-slide-index'));

                    /* Loop
                            Index all Media Controls Panel.

                        > Modification > (Media Control Panel > <style>) > Inner HTML
                    */
                    for (let i = 0; i < document.querySelectorAll('div[data-id=media-controls-panel').length; i += 1)
                        (document.querySelectorAll('div[data-id=media-controls-panel')[i].querySelector('style') || []).innerHTML = (
                            `[data-id=media-controls-panel][lapysjs-random-attribute='${document.querySelectorAll('div[data-id=media-controls-panel')[i].getAttribute('lapysjs-random-attribute')}'] {` +
                                `width: ${document.querySelectorAll('div[data-id=media-controls-panel')[i].media.getCSS('width')}`+
                            `}`
                        )
                });

            // <body>, <html>
                // Click
                (document.body || document.documentElement).setEvent('click', function selectBoxDelayBlurEventSet() {
                    // Screen Tip > Conceal
                    (((window.screen || []).tip || document.screenTip) || {conceal: () => {}}).conceal(this);

                    /* Loop
                            Index all Select Boxes.
                    */
                    for (let i = 0; i < document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]').length; i += 1) {
                        // Initialization > Loop Counter
                        let j = i;

                        // Set Timeout
                        setTimeout(() => {
                            // Modification > (Select Box > Option Box) > Data Selected
                            !document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[j].optionBox || document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[j].optionBox.removeAttribute('data-selected')
                        }, (((parseNumber((document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].optionBox || {getCSS: () => { return 0 }}).getCSS('transition-delay')) + parseNumber((document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].optionBox || {getCSS: () => { return 0 }}).getCSS('transition-duration'))) * 1e3) || 0) + 300)
                    }
                });

                (document.body || document.documentElement).observeEventByQuerySelector('button[href', 'click', function buttonHyperlinkEventSet(event) {
                    // Initialization > Data
                    let data = document.createElement('a');

                    /* Loop
                            Index Target's attributes.

                        > Modification > Data > [Event Path > Attribute > Name]
                    */
                    for (let i = 0; i < event.path[0].attributes.length; i += 1)
                        data.setAttribute(event.path[0].attributes[i].name, event.path[0].attributes[i].value);

                    // Data > Click
                    data.click()
                });

                // Key Down, Mouse Up
                (document.body || document.documentElement).setEvent('keydown mouseup', function carouselSelectionEvent(event) {
                    // Initialization > Data
                    let data = event.code;

                    /* Logic
                            If
                                the Event is a MouseEvent.
                    */
                    if (event.constructor === MouseEvent)
                        /* Loop
                                While
                                    there is a Selected Carousel.

                            > Modification > Selected Carousel > Data Selected
                        */
                        while (document.querySelector('.carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media)'))
                            document.querySelector('.carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media)').removeAttribute('data-selected');

                    // Set Timeout
                    setTimeout(() => {
                        // Initialization > Carousel
                        let carousel = (document.querySelector('.carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media)') || {togglePreviousSlide: () => {}, toggleNextSlide: () => {}});

                        /* Logic
                                If
                                    the Data is 'ArrowLeft',

                                else if
                                    the Data is 'ArrowRight'.

                            > Selected Carousel > Toggle (Previous, Next) Slide
                        */
                        if (data === 'ArrowLeft')
                            carousel.togglePreviousSlide();

                        else if (data === 'ArrowRight')
                            carousel.toggleNextSlide()
                    }, 10)
                });

        /* Modification */
            /* LapysJS */
                /* Executed
                        --- WARN ---
                            @lapys: The LapysJS Script function must run only once.
                */
                LapysJS.executed = !0;

                // Ready
                LapysJS.ready = LapysJS.executed
    }

    else if (!window)
        // LapysJS > Error
        LapysJS.error(`LapysJS does not function without the global 'window' object.`)
})(window, document, void 0, void 0)
