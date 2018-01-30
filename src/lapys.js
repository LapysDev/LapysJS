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

                // Return
                return new (function LapysJSCondition() {
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
                                    (typeof that.condition == 'function' ? that.condition() : that.condition) == !1 &&
                                    that.value == !1
                                ) {
                                    // Target > On Fail
                                    (typeof that.onfail != 'function') || that.onfail();

                                    // Request Animation Frame
                                    requestAnimationFrame(checkValue);
                                }

                                else
                                    // Target > On Success
                                    (typeof that.onsuccess != 'function') || that.onsuccess()
                            }
                        })()
                })
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

        // Console
            /* Print
                    --- NOTE ---
                        @lapys: A somewhat major alternative to the 'console.dir' and 'console.log' methods.
            */
            (typeof console.print == 'function') || (console.print = function print() {
                // Initialization > Data
                let data = arguments[0];

                /* Logic
                        [if:else if:else statement]
                */
                if (typeof data == 'string' && arguments.length > 1)
                    /* Loop
                            [for statement]

                        > Update > Data
                    */
                    for (let i = 0; i < [...arguments].slice(1).length; i += 1)
                        data = data.replace(`{${i}}`, [...arguments].slice(1)[i]);

                // Console > Log
                console.log(data)
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
                        (document.body || document.documentElement).appendChild(LapysJS.temporaryData = document.createElement(typeof arguments[1] == 'string' ? arguments[1] : 'html'));

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

        // Create Object
        (typeof window.createObject == 'function') || Object.defineProperty(window.constructor.prototype, 'createObject', {
            // Value
            value: function createObject() {
                // Initialization > (Data, Metadata)
                let data = arguments.length > 0 ? arguments[0] : {},
                    metadata = typeof arguments[1] == 'object' ? arguments[1] : {};

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < Object.keys(metadata).length; i += 1)
                    // Error Handling
                    try {
                        data[Object.keys(metadata)[i]] = metadata[Object.keys(metadata)[i]];
                    }

                    catch (error) {
                        // LapysJS > Warn
                        LapysJS.warn(error)
                    }

                // Return
                return data
            }
        });

        /* Custom Elements
                --- NOTE ---
                    @lapys: This serves as a pseudo polyfill for the Custom Elements v1 standardization.
        */
        (typeof window.customElements == 'object') || (window.customElements = window.customElements || {define: document.registerElement});

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
            !window.Event || (Event.prototype.fallback = !1);
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
        (typeof window.getQueryParameterByName == 'function') || (window.getQueryParameterByName = function getParameterByName() {
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

                // Function
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (arguments.length > 2) {
                        // Interval Function
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

                    else
                        // Set Timeout
                        setTimeout(function intervalFunction() {
                            // Function > Arguments 0
                            Arguments[0].call(null);

                            // Request Animation Frame
                            requestAnimationFrame(function() {
                                // Set Timeout
                                setTimeout(intervalFunction, Arguments[1])
                            })
                        }, Arguments[1])
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
            ) ? typeof arguments[1] == 'function' ? arguments[1]() : arguments[1] : !1
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

        // Log Line
        (typeof window.logl == 'function') || (window.logl = console.logLine);

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
            JSON.fallback || (JSON.fallback = !1);

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
            !window.Navigator || (Navigator.prototype.fallback = !1);

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
                                `}).observe(${['document.documentElement', 'Arguments[0]'][i]}, { attributes: !0, childList: !0, outerHTML: !0, subtree: !0 })` +
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
                        [if:else if:else statement]
                */
                if (arguments.length > 0) {
                    // Initialization > Data
                    let data = arguments[0];

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
                        (arguments[0] || '').constructor != Array &&
                        (arguments[1] || '').constructor != Array
                    )
                        // Initialization > Metadata
                        'define' in window.customElements ? window.customElements.define(String(arguments[0]), arguments[1] || class HTMLCustomElement extends HTMLElement {}) : (typeof document.registerElement == 'function' ? document.registerElement(String(arguments[0]), arguments[1] || class HTMLCustomElement extends HTMLElement {}) : LapysJS.error(`'${data}' could not be added to the customElementRegistry because CustomElements v1 is not yet supported in this browser.`));

                    else if (
                        (arguments[0] || '').constructor == Array &&
                        (arguments[1] || '').constructor == Array
                    )
                        /* Loop
                                [for statement]

                            > Custom Elements > Define
                        */
                        for (let i = 0; i < max(arguments[0].length, arguments[1].length); i += 1)
                            'define' in window.customElements ? window.customElements.define(String(arguments[0][i]), arguments[1][i] || class HTMLCustomElement extends HTMLElement {}) : (typeof document.registerElement == 'function' ? document.registerElement(String(arguments[0][i]), arguments[1][i] || class HTMLCustomElement extends HTMLElement {}) : LapysJS.error(`'${data}' could not be added to the customElementRegistry because CustomElements v1 is not yet supported in this browser.`))
                }

                // Return
                return !!window.CustomElementRegistry
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

        // Repeat
        (typeof window.repeat == 'function') || Object.defineProperty(window.constructor.prototype, 'repeat', {
            // Value
            value: function repeat() {
                /* Logic
                        [if:else if:else statement]
                */
                if (
                    typeof arguments[0] == 'function' &&
                    typeof arguments[1] == 'number'
                )
                    /* Loop
                            [for statement]

                        > Function > Argument 0
                    */
                    for (let i = 0; i < arguments[1]; i += 1)
                        arguments[0].apply(this, [...arguments].slice(2));

                else if (
                    typeof arguments[0] == 'function' &&
                    arguments.length < 2
                )
                    // Request Animation Frame
                    requestAnimationFrame(arguments[0]);
            }
        });

        // Request Animation Frame
        window.constructor.prototype.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

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

        // Screen
            // Size
            !window.screen || (typeof screen.size == 'number') || Object.defineProperty(screen.constructor.prototype, 'size', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function size() {
                    // Return
                    return Math.sqrt(Math.pow(screen.height, 2) + Math.pow(screen.width, 2))
                }
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
                return (arguments[0] || []).constructor === RegExp ? String(arguments[0]).slice('/'.length, -('/'.length + arguments[0].flags.length)) : (String(((arguments[0] || []).constructor !== Object) || JSON.stringify(arguments[0]).slice('{'.length, -'}'.length)).replace('true', String(arguments[0])))
            }
        });

        // Timeout
        (typeof window.timeout == 'function') || Object.defineProperty(window.constructor.prototype, 'timeout', {
            // Value
            value: function timeout() {
                // Set Timeout
                setTimeout(arguments[0], parseNumber(arguments[1]) || void 0)
            }
        });

        // (Get) Type (Of)
        (typeof window.getType == 'function') || Object.defineProperty(window.constructor.prototype, 'getType', {
            // Value
            value: function getType() {
                /* Logic
                        If
                            there is an Argument.
                */
                if (
                    arguments.length > 0 &&
                    arguments[0] !== null &&
                    arguments[0] !== void 0
                ) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (arguments[0].constructor.constructor == Function)
                        // Return
                        return arguments[0].constructor.name.replace(/([A-Z]){2,}/g, data => {
                            // Return
                            return `${data.toLowerCase().slice(0, -1)}-${data[~-data.length].toLowerCase()}`
                        }).replace(/[A-Z]/g, data => {
                            // Return
                            return `-${data.toLowerCase()}`
                        }).trimChar('-').replace('lapysj-s', 'lapys-js').replace('reg-exp', 'regex')
                }

                else if (arguments[0] === null)
                    // Return
                    return 'null';

                // Return
                return 'undefined'
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
                                            metadata = createDocumentFragment('', 'div');

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

                                    // Insertion
                                    document.body.appendChild(data);

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

                                    // Data > Click
                                    data.click();

                                    // Deletion
                                    document.body.removeChild(data)
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

                                // Query Selector
                                Object.defineProperty(this, 'querySelector', {
                                    // Value
                                    value: $$
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
                        /* Initialization > Data
                                --- NOTE ---
                                    @lapys: Prevent compressors and minifiers from redacting the name
                                        of the Error.
                        */
                        let data = 'LapysJSScriptError';

                        // Error Handling
                        try {
                            // Execution
                            eval(`throw new (class ${data} extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,${data})}})('[LapysJS v${VER_NUMBER}] => ${arguments[0]}\r')`)
                        }

                        catch (error) {
                            // Error Handling
                            try {
                                // Execution
                                eval(`throw new (class ${data} extends Error {})('\n[LapysJS v${VER_NUMBER}] => ${arguments[0]}\r')`)
                            }

                            catch (error) {
                                // Error Handling
                                try {
                                    // Throw
                                    throw new (class LapysJSScriptError extends Error {
                                        // Constructor
                                        constructor() {
                                            // Super
                                            super([...arguments]);

                                            // Error > Capture Stack Trace
                                            Error.captureStackTrace(this, LapysJSScriptError)
                                        }
                                    })(`[LapysJS v${VER_NUMBER}] => ${arguments[0]}\r`)
                                }

                                catch (error) {
                                    // Error Handling
                                    try {
                                        // Throw
                                        throw new (class LapysJSScriptError extends Error {})(`[LapysJS v${VER_NUMBER}] => ${arguments[0]}\r`)
                                    }

                                    catch (error) {
                                        // Console > Error
                                        console.error(`[LapysJS v${VER_NUMBER}] => ${arguments[0]}\r`)
                                    }
                                }
                            }
                        }
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
                this.executed = !1;

                // Experimental Features
                Object.defineProperty(this, 'experimentalFeatures', {value: ['data-focus']});

                // Name (Title)
                Object.defineProperty(this, 'name', {value: 'LapysJS'});

                // LapysJS
                Object.defineProperty(this.constructor.prototype, 'LapysJS', {value: this});

                // Permanent Data
                Object.defineProperty(this.constructor.prototype, 'permanentData', {value: {}});

                // Script
                Object.defineProperty(this, 'script', {
                    // Value
                    value: document.currentScript || document.querySelector("script[src*='lapys.'][src*='.js']") || document.getElementsByTagName('script')[~-document.getElementsByTagName('script').length]
                });
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
                            this.setAttribute('data-enable', this.getAttribute('data-enable').replace(RegExp(`\b${arguments[0]}\b`, 'g'), '').replace(/  /g, ' ').replace(/  /g, ' ').trim().split(/ /g).removeRepeatedElements().join(' '))
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
                            /* Logic
                                    [if:else if:else statement]

                                > Modification > (LapysJS > Script) > Data Enable
                            */
                            if (typeof arguments[0] == 'string')
                                this.setAttribute('data-enable', arguments[0].replace(/  /g, ' ').replace(/  /g, ' ').trim().split(/ /g).removeRepeatedElements().join(' '));

                            else if ((arguments[0] || []).constructor == Array)
                                this.setAttribute('data-enable', arguments[0].join(' ').trim().replace(/  /g, ' ').replace(/  /g, ' ').trim().split(/ /g).removeRepeatedElements().join(' '))
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
                this.ready = !1;

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
                        this.length == 2 &&
                        this[0] !== this[1]
                    )
                )
                    return null;

                else if (this.length == 1)
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

        // Get Duplicated Elements
        (typeof Array.prototype.getDuplicatedElements == 'function') || Object.defineProperty(Array.prototype, 'getDuplicatedElements', {
            // Value
            value: function getDuplicatedElements() {
                // Initialization > Duplicated Elements
                let duplicatedElements = [];

                /* Loop
                        Index all members of the Target.
                */
                for (let i = 0; i < ~-this.length; i += 1)
                    // Update > Duplicated Elements
                    (this.slice().sort()[i + 1] !== this.slice().sort()[i]) || duplicatedElements.push(this.slice().sort()[i]);

                // Return
                return duplicatedElements.removeDuplicatedElements()
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
                return _hasElement.indexOf(!1) < 0
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

        // Randomize
        (typeof Array.prototype.randomize == 'function') || Object.defineProperty(Array.prototype, 'randomize', {
            // Value
            value: function randomize() {
                // Initialization > (Data, Metadata)
                let data = [],
                    metadata = [...this];

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < this.length; i += 1) {
                    // Initialization > Random
                    let random = parseInt(rand(0, metadata.length));

                    // Update > Data
                    data.push(metadata[random]);

                    // Deletion
                    metadata.removeElement(metadata[random])
                }

                // Return
                return data
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

        /* Remove Duplicated Element
                --- NOTE ---
                    @lapys: Removes repeats of an element in a given array.
        */
        (typeof Array.prototype.removeDuplicatedElement == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElement', {
            // Value
            value: function removeDuplicatedElement() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElement(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.removeElement(data[i])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Remove Duplicated Element From Back
        (typeof Array.prototype.removeDuplicatedElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementFromBack', {
            // Value
            value: function removeDuplicatedElementFromBack() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromBack(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.removeElementFromBack(data[i])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Remove Duplicated Element From Front
        (typeof Array.prototype.removeDuplicatedElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementFromFront', {
            // Value
            value: function removeDuplicatedElementFromFront() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromFront(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.removeElementFromFront(data[i])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Remove Duplicated Elements
        (typeof Array.prototype.removeDuplicatedElements == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElements', {
            // Value
            value: function removeDuplicatedElements() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElement(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.removeElements(data[i])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Remove Duplicated Elements From Back
        (typeof Array.prototype.removeDuplicatedElementsFromBack == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementsFromBack', {
            // Value
            value: function removeDuplicatedElementsFromBack() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromBack(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.removeElements(data[i])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Remove Duplicated Elements From Front
        (typeof Array.prototype.removeDuplicatedElementsFromFront == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementsFromFront', {
            // Value
            value: function removeDuplicatedElementsFromFront() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromFront(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.removeElements(data[i])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
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

        // Replace Duplicated Element
        (typeof Array.prototype.replaceDuplicatedElement == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElement', {
            // Value
            value: function replaceDuplicatedElement() {
                // Initialization > (Array, Data, Once)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements(),
                    once = !1;

                /* Loop
                        Index Data.

                    > Update > (Array, Once)
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElement(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    once || (array = array.replaceElement(data[i], arguments[0]));
                    once = !0
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Replace Duplicated Element From Back
        (typeof Array.prototype.replaceDuplicatedElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementFromBack', {
            // Value
            value: function replaceDuplicatedElementFromBack() {
                // Initialization > (Array, Data, Once)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements(),
                    once = !1;

                /* Loop
                        Index Data.

                    > Update > (Array, Once)
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromBack(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    once || (array = array.replaceElementFromBack(data[i], arguments[0]));
                    once = !0
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Replace Duplicated Element From Front
        (typeof Array.prototype.replaceDuplicatedElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementFromFront', {
            // Value
            value: function replaceDuplicatedElementFromFront() {
                // Initialization > (Array, Data, Once)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements(),
                    once = !1;

                /* Loop
                        Index Data.

                    > Update > (Array, Once)
                */
                for (let i = 0; i < data.length; i += 1) {
                    array = array.replaceElementFromFront(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    once || (array = array.replaceElementFromFront(data[i], arguments[0]));
                    once = !0
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Replace Duplicated Elements
        (typeof Array.prototype.replaceDuplicatedElements == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElements', {
            // Value
            value: function replaceDuplicatedElements() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElement(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.replaceElements(data[i], arguments[0])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Replace Duplicated Elements From Back
        (typeof Array.prototype.replaceDuplicatedElementsFromBack == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementsFromBack', {
            // Value
            value: function replaceDuplicatedElementsFromBack() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromBack(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.replaceElements(data[i], arguments[0])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
            }
        });

        // Replace Duplicated Elements From Front
        (typeof Array.prototype.replaceDuplicatedElementsFromFront == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementsFromFront', {
            // Value
            value: function replaceDuplicatedElementsFromFront() {
                // Initialization > (Array, Data)
                let array = this.clone(),
                    data = this.clone().getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Array
                */
                for (let i = 0 ; i < data.length; i += 1) {
                    array = array.replaceElementFromFront(data[i], new (function LapysJSObject() { this.value = data[i] }));
                    array = array.replaceElements(data[i], arguments[0])
                }

                /* Loop
                        Index Array.

                    > Update > Array
                */
                for (let i = 0; i < array.length; i += 1)
                    (array[i].constructor.name != 'LapysJSObject') || (array[i] = array[i].value);

                // Return
                return array
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
                while (array.indexOf(!1) > -1) {
                    /* Update > (Target, Array)
                            --- WARN ---
                                @lapys: Update the Array after the Target to prevent logical runtime errors and to prevent an infinite loop.
                    */
                    this.splice(array.indexOf(!1), 1);
                    this.splice(array.indexOf(!1), 0, arguments[0]);
                    array[array.indexOf(!1)] = !0
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
                    array[array.indexOf(!0)] = !1
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
                // Initialization > (Data, Deep, Target)
                let data,
                    deep = arguments.length > 0 ? arguments[0] : false,
                    that = this || window;

                /* Logic
                        If
                            Target is a clone-able node.
                */
                if (typeof that.cloneNode == 'function')
                    // Update > Data
                    data = that.cloneNode(deep);

                else
                    /* Logic
                            Switch case to
                                Target's data type.
                    */
                    switch (getType(that)) {
                        // Array
                        case 'array':
                            // Update > Data
                            data = [];
                            break;

                        // Boolean
                        case 'boolean':
                            // Update > Data
                            data = !!that;
                            break;

                        // Function
                        case 'function':
                            // Update > Data
                            data = that.bind({});
                            break;

                        // Number
                        case 'number':
                            // Update > Data
                            data = +(that + '');
                            break;

                        // Object
                        case 'object':
                            // {Update Data}
                            (function updateData() {
                                /*
                                        --- NOTE ---
                                            @lapys: Minified polyfill for the 'Object.assign' method.
                                */
                                (typeof Object.assign=='function')||Object.defineProperty(Object,'assign',{configurable:!0,value:function assign(){'use strict';if(arguments[0]==null)throw TypeError('Cannot convert undefined or null to object');var to=Object(arguments[0]);for(var index=1;index<arguments.length;index+=1){var nextSource=arguments[index];if(nextSource!=null)for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey))to[nextKey]=nextSource[nextKey]}return to}},writable: !0});

                                // Update > Data
                                data = Object.assign(that, {})
                            })();
                            break;

                        // Regular Expression
                        case 'regex':
                            // Update > Data
                            data = RegExp(String(that).slice('/'.length, -('/'.length + that.flags.length)));
                            break;

                        // String
                        case 'string':
                            // Update > Data
                            data = (' ' + that).slice(' '.length);
                            break;

                        // [Default]
                        default:
                            // Update > Data
                            data = that !== null && that !== void 0 ? eval(`new (function ${that.constructor.name}() {})`) : that
                    }

                /* Logic
                        If
                            Data exists.
                */
                if (data !== null && data !== void 0)
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (typeof data.cloneNode != 'function') {
                        /* Loop
                                Index Target properties.

                            > Error Handling
                        */
                        for (let i = 0; i < Object.keys(that).length; i += 1)
                            try {
                                // Update > Data
                                data[Object.keys(that)[i]] = that[Object.keys(that)[i]];
                            }

                            catch (error) {}

                        /* Loop
                                Index Target`s constructor properties.

                            > Error Handling
                        */
                        for (let i = 0; i < Object.keys(that.constructor.prototype).length; i += 1)
                            try {
                                // Update > Data
                                data[Object.keys(that.constructor.prototype)[i]] = that.constructor.prototype[Object.keys(that.constructor.prototype)[i]]
                            }

                            catch (error) {}
                    }

                // Return
                return data
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
                return typeof this == 'number' ? !this : !Object.keys(this)[0] || !1
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
        (typeof ({}).__name__ == 'string') || Object.defineProperty(Object.prototype, '__name__', {
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
                        @lapys: Create a 'setter' for vendor scripts.
            */
            set: function __name__() {}
        });

        // Values
        (typeof Object.prototype.values == 'function') || Object.defineProperty(Object.prototype, 'values', {
            // Value
            value: function values() {
                // Return
                return arguments.length > 0 ? Object.values(this || window)[+String(arguments[0]).replace(/ /g, '')] : Object.values(this || window)
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
                return typeof this == 'string' ? (!!this ? ((this.match(RegExp(String(arguments[0]).replace(/(\(|\)|\{|\}|\:|\<|\>|\[|\]|\.|\+|\*|\?|\\|\-|&|\$)/g, '\\$&'), 'g')) || []).length || 0) : NaN) : (this.match(arguments[0]) || []).length
            }
        });

        // First Character
        'firstChar' in String.prototype || Object.defineProperty(String.prototype, 'firstChar', {
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
                    data.push(!((this.indexOf(str(arguments[i])) < 0) || !1));

                // Return
                return data.indexOf(!1) < 0
            }
        });

        // HTML
        'html' in String.prototype || Object.defineProperty(String.prototype, 'html', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function html() {
                // Return
                return this != '' ? document.createElement(this) : null
            }
        });

        /* Is Registered
                --- NOTE ---
                    @lapys: Check if an Element is registered.
        */
        'isRegistered' in String.prototype || Object.defineProperty(String.prototype, 'isRegistered', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function isRegistered() {
                /* Return
                        --- NOTE ---
                            Error Handling is not safe here.
                */
                return this != '' ? document.createElement(this).toString().slice(0, -']'.length).endsWith('Element') &&
                    (document.createElement(this).toString().indexOf('HTMLUnknownElement') < 0) &&
                    (document.createElement(this).constructor !== HTMLElement) : false
            }
        });

        // Last Character
        'lastChar' in String.prototype || Object.defineProperty(String.prototype, 'lastChar', {
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
                            typeof data[i] == 'string' ? data[i] = data[i].replace(RegExp(`::lapysjs_comma${random}::`, 'g'), ',') : !1;

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

                            // Return
                            return array[0] !== '\'\':' ? String(array).replace(/'/g, '"').replace(/`/g, '"') : ''
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
            let createRandomAlphaNumericString=function createRandomAlphaNumericString(length=1,allowSpecialCharacters=!1,allowNumericCharacters=!1){if(!allowSpecialCharacters){let characterArray='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`-=[]\\;\',./*!@#$%^&()_+{}|:"<>?',string='';for(let i=0;i<length;i+=1)string+=characterArray[parseInt(Math.random()*characterArray.length)];return string}else if(allowSpecialCharacters&&!allowNumericCharacters){let characterArray='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',string='';for(let i=0;i<length;i+=1)string+=characterArray[parseInt(Math.random()*characterArray.length)];return string}else{let characterArray='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',string='';for(let i=0;i<length;i+=1)string+=characterArray[parseInt(Math.random()*characterArray.length)];return string}},

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
                                    typeof data != 'string' ? (!!data ? data = 'yes' : data = 'no') : (data !== 'yes' && data !== 'no') ? data = 'yes' : !1;

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
                                return !!(/*@cc_on!@*/ !1 || !!document.documentMode)
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
            // Favorite Icon
            Document.prototype.favicon || (Object.defineProperty(Document.prototype, 'favicon', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function getFavicon() {
                    // Return
                    return [...document.querySelectorAll(`link[href][rel*='icon']`)]
                },

                // Set
                set: function setFavicon() {
                    // Insertion
                    document.head.appendChild(createDocumentFragment(`<link href='${arguments[0]}' rel=icon type=image/${String(arguments[0]).getAfterChar('.', !0) || 'x-icon'}><link href='${arguments[0]}' rel='shortcut icon'><link href='${arguments[0]}' rel=icon type=image/vnd.microsoft.icon><link href='${arguments[0]}' rel=apple-touch-icon-precomposed>`, `div`))
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
                // Set Timeout
                setTimeout(function() {
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
                                (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).setAttribute('data-focus', '')
                            })
                        })
                });

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
                                        eval(`try { (document.querySelector('[script="${document.querySelectorAll('[script')[i].getAttribute('script')}"') || LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}'])['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] = (function() {var global = window;\n${document.querySelectorAll('[script')[i].getAttribute('script') || ''}\n}); (document.querySelector('[script="${document.querySelectorAll('[script')[i].getAttribute('script')}"') || LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}'])['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'](); delete (document.querySelector('[script="${document.querySelectorAll('[script')[i].getAttribute('script')}"') || LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}'])['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] } catch (error) { LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}']['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] = (function() {var global = window;\n${document.querySelectorAll('[script')[i].getAttribute('script') || ''}\n}); LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}']['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'](); delete LapysJS.permanentData['scriptElement:${document.querySelectorAll('[script')[i]['LapysJS scriptElementID']}']['${randomString.replace(/'/g, '\\`').replace(/\\u/g, data => { return data.slice('\\'.length) })}'] }`)
                                    }
                            });

                            // Modification > Script > Script
                            ('script' in document.querySelectorAll('[script')[i]) || Object.defineProperty(document.querySelectorAll('[script')[i], 'script', {
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
                    (typeof Element.prototype.hasClass == 'function') || Object.defineProperty(Element.prototype, 'hasClass', {
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
                                return hasClass.indexOf(!1) < 0
                            }

                            // Return
                            return !1
                        }
                    });

                    // Add Class
                    (typeof Element.prototype.addClass == 'function') || Object.defineProperty(Element.prototype, 'addClass', {
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
                                (Arguments[i] !== '' && void Arguments[i] === !1) || (this.getAttribute('class') || this.removeAttribute('class'))
                            }
                        }
                    });

                    // Change Element Tag
                    (typeof Element.prototype.changeElementTag == 'function') || Object.defineProperty(Element.prototype, 'changeElementTag', {
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
                    (typeof Element.prototype.close == 'function') || Object.defineProperty(Element.prototype, 'close', {
                        // Value
                        value: function close() {
                            // Modification > Target
                                // Data Close
                                this.setAttribute('data-close', !0);

                                // Data Open
                                this.setAttribute('data-open', !1)
                        }
                    });

                    // Delete Attribute
                    (typeof Element.prototype.delAttr == 'function') ||  Object.defineProperty(Element.prototype, 'delAttr', {
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
                                // Modification > Target > Argument 0
                                this.removeAttribute(arguments[0].name)
                        }
                    });

                    // Delete Class
                    (typeof Element.prototype.delClass == 'function') || Object.defineProperty(Element.prototype, 'delClass', {
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
                    (typeof Element.prototype.delStyle == 'function') || Object.defineProperty(Element.prototype, 'delStyle', {
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
                    (typeof Element.prototype.getAttr == 'function') || Object.defineProperty(Element.prototype, 'getAttr', {
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
                    (typeof Element.prototype.getCSS == 'function') || Object.defineProperty(Element.prototype, 'getCSS', {
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

                    // Get Element By ID
                    (typeof Element.prototype.getElementById == 'function') || Object.defineProperty(Element.prototype, 'getElementById', {
                        // Value
                        value: function getElementById() {
                            // Return
                            return this.querySelector(`#${String(arguments[0])}`) || null
                        }
                    });

                    // Has Attribute
                    (typeof Element.prototype.hasAttr == 'function') || Object.defineProperty(Element.prototype, 'hasAttr', {
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
                    (typeof Element.prototype.hasChild == 'function') || Object.defineProperty(Element.prototype, 'hasChild', {
                        // Value
                        value: function hasChild() {
                            // Return
                            return this.contains(arguments[0])
                        }
                    });

                    // Has Child (Element) By Query Selector
                    (typeof Element.prototype.hasChildByQuerySelector == 'function') || Object.defineProperty(Element.prototype, 'hasChildByQuerySelector', {
                        // Value
                        value: function hasChildByQuerySelector() {
                            // Return
                            return !!this.querySelector(arguments[0])
                        }
                    });

                    // Has Direct Descendant
                    (typeof Element.prototype.hasDirectDescendant == 'function') || Object.defineProperty(Element.prototype, 'hasDirectDescendant', {
                        // Value
                        value: function hasDirectDescendant() {
                            // Return
                            return [...this.children].indexOf(arguments[0]) > -1
                        }
                    });

                    // Has Direct Descendant By Query Selector
                    (typeof Element.prototype.hasDirectDescendantByQuerySelector == 'function') || Object.defineProperty(Element.prototype, 'hasDirectDescendantByQuerySelector', {
                        // Value
                        value: function hasDirectDescendantByQuerySelector() {
                            // Return
                            return !!this._$(arguments[0])
                        }
                    });

                    // HTML
                    (typeof Element.prototype.html == 'function') || Object.defineProperty(Element.prototype, 'html', {
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
                    (typeof Element.prototype.inView == 'function') || Object.defineProperty(Element.prototype, 'inView', {
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
                            return !arguments[0] == !1 ? left < (innerWidth + pageXOffset) && pageXOffset < (left + this.offsetWidth) && pageYOffset < (this.offsetHeight + top) && top < (innerHeight + pageYOffset) : left > ~-pageXOffset && (left + this.offsetWidth) < (pageXOffset + innerWidth + 1) && top > ~-pageYOffset && (this.offsetHeight + top) < (pageYOffset + innerHeight + 1)
                        }
                    });

                    // Insert Adjacent Comment
                    (typeof Element.prototype.insertAdjacentComment == 'function') || Object.defineProperty(Element.prototype, 'insertAdjacentComment', {
                        // Value
                        value: function insertAdjacentComment() {
                            // Target > Insert Adjacent HTML
                            this.insertAdjacentHTML(String(arguments[0]), `<!--${arguments[1]}-->`, [...arguments].slice(2))
                        }
                    });

                    // Open
                    (typeof Element.prototype.open == 'function') || Object.defineProperty(Element.prototype, 'open', {
                        // Value
                        value: function open() {
                            // Modification > Target
                                // Data Close
                                this.setAttribute('data-close', !1);

                                // Data Open
                                this.setAttribute('data-open', !0)
                        }
                    });

                    // Replace Attribute
                    (typeof Element.prototype.replaceAttribute == 'function') || Object.defineProperty(Element.prototype, 'replaceAttribute', {
                        // Value
                        value: function replaceAttribute() {
                            // Modification > Target > [Argument (0, 1)]
                            !this[arguments[0]] || (this[arguments[0]] = '');
                            this.removeAttribute(arguments[0]);
                            this.setAttribute(arguments[1], arguments[2] || '')
                        }
                    });

                    // Set Attribute
                    (typeof Element.prototype.setAttr == 'function') || Object.defineProperty(Element.prototype, 'setAttr', {
                        // Value
                        value: function setAttr() {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (typeof arguments[0] == 'string')
                                // Modification > Target > [Argument 0]
                                this.setAttribute(arguments[0], arguments.length > 1 ? arguments[1] : '');

                            else if ((arguments[0] || '').constructor == Array)
                                /* Loop
                                        [for statement]
                                */
                                for (let i = 0; i < arguments[0].length; i += 1)
                                    // Modification > Target > [Argument 0]
                                    this.setAttribute(arguments[0][i], arguments[1][i]);

                            else if (isObject(arguments[0]))
                                /* Loop
                                        [for statement]
                                */
                                for (let i = 0; i < Object.keys(arguments[0]).length; i += 1)
                                    // Modification > Target > [Argument 0]
                                    this.setAttribute(Object.keys(arguments[0])[i], arguments[0][Object.keys(arguments[0])[i]]);

                            else if ((arguments[0] || '').constructor == window.Attr)
                                // Modification > Target > [Argument 0]
                                this.setAttribute(arguments[0].name, arguments[0].value)
                        }
                    });

                    /* Attribute
                            --- WARN ---
                                This method can only be defined after the 'Element.getAttr' and 'Element.setAttr' method.
                    */
                    (typeof Element.prototype.attr == 'function') || Object.defineProperty(Element.prototype, 'attr', {
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
                    (typeof Element.prototype.setCSS == 'function') || Object.defineProperty(Element.prototype, 'setCSS', {
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

                    // Write
                    (typeof Element.prototype.write == 'function') || Object.defineProperty(Element.prototype, 'write', {
                        // Value
                        value: function write() {
                            // Modification > Target > Inner HTML
                            this.innerHTML = arguments[0]
                        }
                    });

                    // Add Event
                    (typeof EventTarget.prototype.addEvent == 'function') || Object.defineProperty(EventTarget.prototype, 'addEvent', {
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
                                                typeof (this || window).customEvents[String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j]].initEvent == 'function' ? (this || window).customEvents[String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j]].initEvent(String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j], !0, !0) : !1;

                                        // Event > Target > [Argument 0]
                                        (this || window).setEvent(String(arguments[0]).replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g)[j], Object.values([...arguments].slice(1))[i], !1)
                                }
                        }
                    });

                    // Delete Event
                    (typeof EventTarget.prototype.delEvent == 'function') || Object.defineProperty(EventTarget.prototype, 'delEvent', {
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
                    (typeof EventTarget.prototype.getEvent == 'function') || Object.defineProperty(EventTarget.prototype, 'getEvent', {
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
                    (typeof EventTarget.prototype.getEvents == 'function') || Object.defineProperty(EventTarget.prototype, 'getEvents', {
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
                    (typeof EventTarget.prototype.invokeEvent == 'function') || Object.defineProperty(EventTarget.prototype, 'invokeEvent', {
                        // Value
                        value: function invokeEvent() {
                            // Target > (Add, Run) Event
                            (this || window).addEvent.apply(this || window, [...arguments]);
                            (this || window).runEvent.apply(this || window, [...arguments])
                        }
                    });

                    // Invoke Full Screen
                    (typeof EventTarget.prototype.invokeFullscreen == 'function') || Object.defineProperty(EventTarget.prototype, 'invokeFullscreen', {
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
                    (typeof EventTarget.prototype.observeEvent == 'function') || Object.defineProperty(EventTarget.prototype, 'observeEvent', {
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
                                (data.indexOf((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement))) < 0) || metadata[1].call(that, event)
                            }, metadata[2], metadata[3])
                        }
                    });

                    // Observe Event By Query Selector
                    (typeof EventTarget.prototype.observeEventByQuerySelector == 'function') || Object.defineProperty(EventTarget.prototype, 'observeEventByQuerySelector', {
                        // Value
                        value: function observeEventByQuerySelector() {
                            // Initialization > (Data, Metadata, Target)
                            let data = String(arguments[0]),
                                metadata = [...arguments].slice(1),
                                that = this;

                            // Event > Target > [Metadata 0]
                            this.setEvent(String(metadata[0]), function observeEvent(event) {
                                // Function > Metadata 1
                                ([...document.querySelectorAll(data)].indexOf((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement))) < 0) || metadata[1].call(that, event)
                            }, metadata[2], metadata[3])
                        }
                    });

                    // [Query Selector (All)]
                    (typeof EventTarget.prototype.$$ == 'function') || Object.defineProperty(EventTarget.prototype, '$$', {
                        // Value
                        value: function LapysJSQuerySelector() {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (arguments.length > 0) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (arguments.length > 1)
                                    /* Logic
                                            [if:else if:else statement]

                                        > Return
                                    */
                                    switch (arguments[1]) {
                                        // Array
                                        case 'array':
                                            return [...((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || ''))];
                                            break;

                                        // Class
                                        case 'c':
                                            return typeof window.$c == 'function' ? $c.apply(this || window, [...arguments].removeElement('c')) : null;
                                            break;

                                        // Class
                                        case 'class':
                                            return typeof window.$c == 'function' ? $c.apply(this || window, [...arguments].removeElement('class')) : null;
                                            break;

                                        // ID
                                        case 'i':
                                            return typeof window.$i == 'function' ? $i.apply(this || window, [...arguments].removeElement('i')) : null;
                                            break;

                                        // ID
                                        case 'id':
                                            return typeof window.$i == 'function' ? $i.apply(this || window, [...arguments].removeElement('id')) : null;
                                            break;

                                        // Tag Name
                                        case 't':
                                            return typeof window.$t == 'function' ? $t.apply(this || window, [...arguments].removeElement('t')) : null;
                                            break;

                                        // Tag Name
                                        case 'tag':
                                            return typeof window.$t == 'function' ? $t.apply(this || window, [...arguments].removeElement('tag')) : null;
                                            break;

                                        // Tag Name
                                        case 'tag-name':
                                            return typeof window.$t == 'function' ? $t.apply(this || window, [...arguments].removeElement('tag-name')) : null;
                                            break;

                                        // Length
                                        case 'length':
                                            return 'length' in ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || '')) ? ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || '')).length : NaN;
                                            break;

                                        // ~Length
                                        case '~length':
                                            return 'length' in ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || '')) ? (((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || '')).length - 1) : NaN;
                                    }

                                /* Logic
                                        [if:else if:else statement]

                                    > Return
                                */
                                if (typeof arguments[1] == 'number')
                                    return ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || ''))[arguments[1]] || null;

                                else if (arguments.length < 2 && ('length' in ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || '')) ? ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || '')).length : NaN) < 2)
                                    return ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || ''))[0] || null;

                                // Return
                                return ((this === window ? document : this) || document).querySelectorAll(String(arguments[0] || ''))
                            }
                        }
                    });
                        // [Get Elements By Class Name]
                        (typeof EventTarget.prototype.$c == 'function') || Object.defineProperty(EventTarget.prototype, '$c', {
                            // Value
                            value: function LapysJSGetElementsByClassName() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (arguments.length > 0) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (arguments.length > 1)
                                        /* Logic
                                                [switch:case:default statement]

                                            > Return
                                        */
                                        switch (arguments[1]) {
                                            // Array
                                            case 'array':
                                                return [...document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`))];
                                                break;

                                            // Length
                                            case 'length':
                                                return 'length' in document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`)) ? document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`)).length : NaN;
                                                break;

                                            // Decremented Length
                                            case '~length':
                                                return 'length' in document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`)) ? document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`)).length - 1 : NaN
                                        }

                                    // Return
                                    return typeof arguments[1] == 'number' ? (document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`))[arguments[1]] || null) : (document.querySelectorAll(((arguments[0] || '').constructor == Array) ? (`.${arguments[0].join('.')}`) : (String(arguments[0]).indexOf(' ') > -1 ? `.${String(arguments[0]).getAfterChar(' ', !0)}` : `.${String(arguments[0])}`)))
                                }
                            }
                        });

                        // [Get Element By ID]
                        (typeof EventTarget.prototype.$i == 'function') || Object.defineProperty(EventTarget.prototype, '$i', {
                            // Value
                            value: function LapysJSGetElementByID() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (arguments.length > 0) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (arguments.length > 1)
                                        /* Logic
                                                [switch:case:default statement]

                                            > Return
                                        */
                                        switch (arguments[1]) {
                                            // Array
                                            case 'array':
                                                // Error Handling
                                                try {
                                                    return [...((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))]
                                                }

                                                catch (error) {
                                                    return [((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))]
                                                }
                                                break;

                                            // Length
                                            case 'length':
                                                return 'length' in ((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length : ('id' in ((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? 1 : NaN);
                                                break;

                                            // Decremented Length
                                            case '~length':
                                                return 'length' in ((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length - 1 : ('id' in ((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? 0 : NaN)
                                        }

                                    // Return
                                    return typeof arguments[1] == 'number' ? ([((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))][arguments[1]] || null) : (((this === window ? document : this) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])))
                                }
                            }
                        });

                        // [Get Elements By Tag Name]
                        (typeof EventTarget.prototype.$t == 'function') || Object.defineProperty(EventTarget.prototype, '$t', {
                            // Value
                            value: function LapysJSGetElementsByTagName() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (arguments.length > 0) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (arguments.length > 1)
                                        /* Logic
                                                [switch:case:default statement]

                                            > Return
                                        */
                                        switch (arguments[1]) {
                                            // Array
                                            case 'array':
                                                return [...((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))];
                                                break;

                                            // Length
                                            case 'length':
                                                return 'length' in ((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length : NaN;
                                                break;

                                            // Decremented Length
                                            case '~length':
                                                return 'length' in ((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length - 1 : NaN
                                        }

                                    // Return
                                    return typeof arguments[1] == 'number' ? (((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))[arguments[1]] || null) : (((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length < 2 ? ((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))[0] : ((this === window ? document : this) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])))
                                }
                            }
                        });

                        /* [Descendant Element Query Selector (All)]
                                --- NOTE ---
                                    @lapys: There might be some minor bugs (emphasis on the word, 'might').
                        */
                        (typeof EventTarget.prototype_$ == 'function') || Object.defineProperty(EventTarget.prototype, '_$', {
                            // Value
                            value: function LapysJSQuerySelector() {
                                // Initialization > (Data, Metadata)
                                let data = this.$$(arguments[0], 'array'),
                                    metadata = [];

                                /* Logic
                                        Switch case to Argument 1.

                                    > Update > Data
                                */
                                switch (arguments[1]) {
                                    // Class
                                    case 'c':
                                        data = this.$c(arguments[0], 'array');
                                        break;

                                    // ID
                                    case 'i':
                                        data = this.$i(arguments[0], 'array');
                                        break;

                                    // Tag Name
                                    case 't':
                                        data = this.$t(arguments[0], 'array')
                                }

                                /* Loop
                                        Index Data.

                                    > Update > Metadata
                                */
                                for (let i = 0; i < data.length; i += 1)
                                    ([...(this.children || document.children)].indexOf(data[i]) < 0) || metadata.push(data[i]);

                                /* Logic
                                        Switch case to Argument 1.

                                    > Return
                                */
                                switch (arguments[1]) {
                                    case 'array':
                                        return metadata;
                                        break;

                                    case 'length':
                                        return metadata.length;
                                        break;

                                    case '~length':
                                        return ~-metadata.length
                                }

                                // Return
                                return metadata.length > 1 ? metadata : metadata[0]
                            }
                        });

                        // [Document (Fragment) > Prototype] > ([Query Selector (All)], [Get Elements By Class Name], [Get Element By ID], [Get Elements By Tag Name], [Descendant Element Query Selector (All)])
                        (typeof Document.prototype.$$ == 'function') || Object.defineProperty(Document.prototype, '$$', {value: $$});
                        (typeof DocumentFragment.prototype.$$ == 'function') || Object.defineProperty(DocumentFragment.prototype, '$$', {value: $$});

                        (typeof Document.prototype.$c == 'function') || Object.defineProperty(Document.prototype, '$c', {value: $c});
                        (typeof DocumentFragment.prototype.$c == 'function') || Object.defineProperty(DocumentFragment.prototype, '$c', {value: $c});

                        (typeof Document.prototype.$i == 'function') || Object.defineProperty(Document.prototype, '$i', {value: $i});
                        (typeof DocumentFragment.prototype.$i == 'function') || Object.defineProperty(DocumentFragment.prototype, '$i', {value: $i});

                        (typeof Document.prototype.$t == 'function') || Object.defineProperty(Document.prototype, '$t', {value: $t});
                        (typeof DocumentFragment.prototype.$t == 'function') || Object.defineProperty(DocumentFragment.prototype, '$t', {value: $t});

                        (typeof Document.prototype._$ == 'function') || Object.defineProperty(Document.prototype, '_$', {value: _$});
                        (typeof DocumentFragment.prototype._$ == 'function') || Object.defineProperty(DocumentFragment.prototype, '_$', {value: _$});

                    // Run Event
                    (typeof EventTarget.prototype.runEvent == 'function') || (EventTarget.prototype.runEvent = function runEvent() {
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
                                    event.initEvent(String(Arguments[i]), !1, !0);

                                    // Target > Dispatch Event
                                    (this || window).dispatchEvent(event)
                                }

                                else
                                    // Target > Fire Event
                                    (this || window).fireEvent(`on ${Arguments[i]}`)
                            }
                    });
                        // Trigger
                        (typeof EventTarget.prototype.trigger == 'function') || Object.defineProperty(EventTarget.prototype, 'trigger', {value: EventTarget.prototype.runEvent});

                    // Set Event
                    (typeof EventTarget.prototype.setEvent == 'function') || Object.defineProperty(EventTarget.prototype, 'setEvent', {
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
                    (typeof Node.prototype.delete == 'function') || (Node.prototype.delete = function Delete() {
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
                    (typeof Node.prototype.insertChild == 'function') || Object.defineProperty(Node.prototype, 'insertChild', {
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
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this != Element.prototype) {
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
                            }

                            // Return
                            return null
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
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this != Element.prototype)
                                // Return
                                return this.parentElement || this.parentNode;

                            // Return
                            return null
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
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this != Element.prototype) {
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

                            // Return
                            return null
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
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this != Element.prototype) {
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

                            // Return
                            return null
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
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this != Element.prototype)
                                // Return
                                return this.getAttribute('role') || '';

                            // Return
                            return null
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
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (this != Element.prototype) {
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

                            // Return
                            return null
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
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'buttons') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'buttonsLeftHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'buttonsRightHtml') ||
                                        Object.keys(that.dataset)[i] == 'close' ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('media-playlist') > -1 && Object.keys(that.dataset)[i] == 'description') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'direction') ||
                                        (that == LapysJS.script && Object.keys(that.dataset)[i] == 'enable') ||
                                        (that.tagName == 'KEY-COMMAND' && Object.keys(that.dataset)[i] == 'eventKey') ||
                                        Object.keys(that.dataset)[i] == 'eventFunction' ||
                                        Object.keys(that.dataset)[i] == 'eventType' ||
                                        Object.keys(that.dataset)[i] == 'focus' ||
                                        (((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-time') > -1) && Object.keys(that.dataset)[i] == 'format') ||
                                        Object.keys(that.dataset)[i] == 'id' ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'indicators') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'indicatorsHtml') ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && Object.keys(that.dataset)[i] == 'interval') ||
                                        Object.keys(that.dataset)[i] == 'open' ||
                                        (that.tagName == 'INPUT' && Object.keys(that.dataset)[i] == 'placeholder') ||
                                        (that.tagName == 'TEXTAREA' && Object.keys(that.dataset)[i] == 'placeholder') ||
                                        Object.keys(that.dataset)[i] == 'selected' ||
                                        (((that.parentElement.parentElement || {getAttribute: () => {}}).getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && (that.getAttribute('class') || '').split(/ /g).indexOf('indicator') > -1 && Object.keys(that.dataset)[i] == 'slideIndex') ||
                                        (((that.parentElement.parentElement || {getAttribute: () => {}}).getAttribute('class') || '').split(/ /g).indexOf('carousel') > -1 && (that.getAttribute('class') || '').split(/ /g).indexOf('slide') > -1 && Object.keys(that.dataset)[i] == 'slideIndex') ||
                                        (
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'text') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textCursorPosition') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFormat') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunction') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunctionDelay') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunctionDuration') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunctionInit') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunctionInitialDelay') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunctionIterationCount') ||
                                            ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-text') > -1 && Object.keys(that.dataset)[i] == 'textFunctionSeparator')
                                        ) ||
                                        Object.keys(that.dataset)[i] == 'title' ||
                                        Object.keys(that.dataset)[i] == 'titleClass' ||
                                        Object.keys(that.dataset)[i] == 'titleCoordinate' ||
                                        Object.keys(that.dataset)[i] == 'titleStyle' ||
                                        Object.keys(that.dataset)[i] == 'toast' ||
                                        Object.keys(that.dataset)[i] == 'toastDelay' ||
                                        Object.keys(that.dataset)[i] == 'toastDuration' ||
                                        Object.keys(that.dataset)[i] == 'unknown' ||
                                        ((that.getAttribute('class') || '').split(/ /g).indexOf('dynamic-time') > -1 && Object.keys(that.dataset)[i] == 'utcFormat')
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
                    (typeof HTMLVideoElement.prototype.convertFrameToImage == 'function') || Object.defineProperty(HTMLVideoElement.prototype, 'convertFrameToImage', {
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
                                                this.setAttribute('data-open', !1)
                                        }
                                    });
                                    accordion[i]['LapysJS close']();

                                    // Open
                                    (typeof accordion[i]['LapysJS open'] == 'function') || Object.defineProperty(accordion[i], 'LapysJS open', {
                                        // Value
                                        value: function open() {
                                            // Modification > Target
                                                // Data Close
                                                this.setAttribute('data-close', !1);

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
                                            let data = Array.from((this.containers.buttons || {children: []}).children),
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
                                            let data = Array.from(this.children);
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
                                    (typeof carousel[i].toggleNextSlide == 'function') || Object.defineProperty(carousel[i], 'toggleNextSlide', {
                                        // Value
                                        value: function toggleNextSlide() {
                                            // Modification > Target > Toggle Slide
                                            this.toggleSlide(this.slides[+this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') + 1] ? +this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') + 1 : 0)
                                        }
                                    });

                                    // Toggle Previous Slide
                                    (typeof carousel[i].togglePreviousSlide == 'function') || Object.defineProperty(carousel[i], 'togglePreviousSlide', {
                                        // Value
                                        value: function togglePreviousSlide() {
                                            // Modification > Target > Toggle Slide
                                            this.toggleSlide(this.slides[+this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') - 1] ? +this.activeSlide.getAttribute('data-slide-index').replace(/ /g, '') - 1 : ~-this.slides.length)
                                        }
                                    });

                                    // Toggle Slide
                                    (typeof carousel[i].toggleSlide == 'function') || Object.defineProperty(carousel[i], 'toggleSlide', {
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
                                data.appendChild(createDocumentFragment(carousel[i].innerHTML, 'div'));

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
                                        (carousel[i].getAttribute('data-buttons-right-html') || `<button class='button button-1' data-id=right-button>&rarr;</button>`),
                                        'div'
                                    ))
                                }

                                catch (error) {
                                    // Insertion
                                    carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment(`<button class='button button-0' data-id=left-button>&larr;</button><button class='button button-1' data-id=right-button>&rarr;</button>`, 'div'))
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
                                        })(carousel[i]), 'div'
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
                                        })(carousel[i]), 'div'
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
                                        Array.from(carousel[i].children).indexOf(carousel[i].querySelector('[data-id=buttons-container')) > -1
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
                                        Array.from(carousel[i].children).indexOf(carousel[i].querySelector('[data-id=indicators-container')) > -1
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
                                    while (Array.from(carousel[i].children).indexOf(carousel[i].querySelector(':first-child:not(.container)')) > -1) {
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
                                        Array.from(carousel[i].children).indexOf(carousel[i].querySelector(':not(.container)')) > -1 ||
                                        Array.from(carousel[i].children).indexOf(carousel[i].querySelectorAll(':not(.container)')[~-carousel[i].querySelectorAll(':not(.container)').length]) > -1
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
                    }, LapysJS.permanentData.pluginScriptDelay = typeof LapysJS.permanentData.pluginScriptDelay == 'number' ? LapysJS.permanentData.pluginScriptDelay : 3e3)
                })();

                // Dropdown
                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewDropdown() {
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
                                                this.setAttribute('data-open', !1);

                                            /* Loop
                                                    [for statement]

                                                > Modification > (Dropdown > Content) > Hidden
                                            */
                                            for (let i = 0; i < document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`).length; i += 1)
                                                document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`)[i].hidden = !0;

                                            // Modification > Target > Hidden
                                            this.hidden = !1
                                        }
                                    });
                                    dropdown[i]['LapysJS close']();

                                    // Open
                                    (typeof dropdown[i]['LapysJS open'] == 'function') || Object.defineProperty(dropdown[i], 'LapysJS open', {
                                        // Value
                                        value: function open() {
                                            // Modification > Target
                                                // Data Close
                                                this.setAttribute('data-close', !1);

                                                // Data Open
                                                this.setAttribute('data-open', !0);

                                            /* Loop
                                                    [for statement]

                                                > Modification > (Dropdown > Content) > Hidden
                                            */
                                            for (let i = 0; i < document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`).length; i += 1)
                                                document.querySelectorAll(`[data-id='${this.getAttribute('data-id')}']`)[i].hidden = !1
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
                        --- UPDATE REQUIRED ---
                            @lapys:
                                - A proper delay attribute and property that functions.
                                - Dynamic Text should be very toggle-able (whether it automates or not).
                */
                (function LapysJSScriptDynamicText() {
                    // On Node Added
                    onNodeAdded(document.body, function LapysJSScriptNewDynamicText() {
                        // Initialization
                        let dynamicText = document.querySelectorAll('.dynamic-text:not(.accordion):not(.carousel):not(.dropdown):not(.media):not(input):not(textarea)');

                        /* Loop
                                Index all Dynamic Text.
                        */
                        for (let i = 0; i < dynamicText.length; i += 1)
                            /* Logic
                                    If
                                        the Dynamic Text is not Modified.
                            */
                            if (!dynamicText[i]['LapysJS isModified']) {
                                /* Initialization > Getter Property Limit
                                        --- NOTE ---
                                            @lapys: This defines the limit of quantity of data items
                                                to be iterated over whilst processing the Dynamic Text.
                                */
                                let getterPropertyLimit = 7;

                                // Modification > Dynamic Text
                                    // Automating
                                    dynamicText[i].automating = !1;

                                    // Characters
                                    Object.defineProperty(dynamicText[i], 'characters', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function characters() {
                                            // Return
                                            return [...this.children]
                                        }
                                    });

                                    // Cursor
                                    Object.defineProperty(dynamicText[i], 'cursor', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function cursor() {
                                            // Return
                                            return this.querySelector(`span[data-id*='cursor'`)
                                        }
                                    });

                                    // Cursor Position
                                    Object.defineProperty(dynamicText[i], 'cursorPosition', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function getCursorPosition() {
                                            // Return
                                            return [...this.children].indexOf(this.cursor)
                                        },

                                        // Set
                                        set: function setCursorPosition() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (this.children[parseNumber(arguments[0])])
                                                /* Loop
                                                        [do:while statement]
                                                */
                                                while (this.cursorPosition != parseNumber(arguments[0]))
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (this.cursorPosition < parseNumber(arguments[0])) {
                                                        // Insertion
                                                        this.children[parseNumber(arguments[0])].insertAdjacentHTML('afterend', '<span data-id=cursor></span>');

                                                        // Deletion
                                                        this.querySelector(`span[data-id*='cursor'`).remove()
                                                    }

                                                    else if (this.cursorPosition > parseNumber(arguments[0]))
                                                        // Insertion
                                                        this.insertBefore(this.cursor, this.children[parseNumber(arguments[0])])
                                        }
                                    });

                                    // Data Text Format
                                    dynamicText[i].setAttribute('data-text-format', dynamicText[i].getAttribute('data-text-format') || 'normal');

                                    // Data Text
                                    dynamicText[i].setAttribute('data-text', createDocumentFragment(`<span>${dynamicText[i].getAttribute('data-text') || ''}</span>`, 'div').querySelector('span').textContent || createDocumentFragment(`<span>${dynamicText[i].getAttribute('data-text') || ''}</span>`, 'div').querySelector('span').innerText || '');
                                        // Text
                                        ((dynamicText[i].getAttribute('data-text') || '').match(RegExp(dynamicText[i].getAttribute('data-text-separator'), 'g')) || []).length > getterPropertyLimit ? (function(element) {
                                            // Function > Text
                                            function text(element) {
                                                // Modification > Element > Text
                                                element['LapysJS text'] = (function(element) {
                                                    // Initialization > (Data, Metadata, Array)
                                                    let data = ` ${element.getAttribute('data-text')}`.slice(' '.length).replace(RegExp(`\\\\${element.getAttribute('data-text-separator')}`, 'g'), alphabetString),
                                                        metadata = [],
                                                        array = [];

                                                    /* Loop
                                                            [for statement]
                                                    */
                                                    for (let i = 0; i < data.split(RegExp(element.getAttribute('data-text-separator'), 'g')).length; i += 1) {
                                                        // Initialization > Result
                                                        let result = data.split(RegExp(element.getAttribute('data-text-separator'), 'g'))[i];

                                                        // Update > Result
                                                        (element.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('no-white-space') < 0) || (result = result.replace(/ /g, ''));
                                                        (element.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('pre') < 0) || (result = result.trimChar('\n'));
                                                        (element.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('trim') < 0) || (result = result.trim());
                                                        (element.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('trim-left') < 0) || (result = result.trimLeft());
                                                        (element.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('trim-right') < 0) || (result = result.trimRight());

                                                        // Update
                                                            // Result
                                                            result = result.replace(RegExp(alphabetString, 'g'), element.getAttribute('data-text-separator'));

                                                            // Metadata
                                                            metadata.push(result)
                                                    }

                                                    /* Loop
                                                            [for statement]

                                                        > Update > Array
                                                    */
                                                    for (let i = 0; i < metadata.length; i += 1)
                                                        array.push(metadata[i].split(/(?:)/g));

                                                    // Return
                                                    return array
                                                })(element)
                                            };
                                            text(element);

                                            // {Text} > Mutation Observe
                                            new MutationObserver(function() { text(element) }).observe(element, { attributes: !0 })
                                        })(dynamicText[i]) : Object.defineProperty(dynamicText[i], 'LapysJS text', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function text() {
                                                // Initialization > (Data, Metadata, Array)
                                                let data = ` ${this.getAttribute('data-text')}`.slice(' '.length).replace(RegExp(`\\\\${this.getAttribute('data-text-separator')}`, 'g'), alphabetString),
                                                    metadata = [],
                                                    array = [];

                                                /* Loop
                                                        [for statement]
                                                */
                                                for (let i = 0; i < data.split(RegExp(this.getAttribute('data-text-separator'), 'g')).length; i += 1) {
                                                    // Initialization > Result
                                                    let result = data.split(RegExp(this.getAttribute('data-text-separator'), 'g'))[i];

                                                    // Update > Result
                                                    (this.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('no-white-space') < 0) || (result = result.replace(/ /g, ''));
                                                    (this.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('pre') < 0) || (result = result.trimChar('\n'));
                                                    (this.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('trim') < 0) || (result = result.trim());
                                                    (this.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('trim-left') < 0) || (result = result.trimLeft());
                                                    (this.getAttribute('data-text-format').replace(/  /g, ' ').trim().split(/ /g).indexOf('trim-right') < 0) || (result = result.trimRight());

                                                    // Update
                                                        // Result
                                                        result = result.replace(RegExp(alphabetString, 'g'), this.getAttribute('data-text-separator'));

                                                        // Metadata
                                                        metadata.push(result)
                                                }

                                                /* Loop
                                                        [for statement]

                                                    > Update > Array
                                                */
                                                for (let i = 0; i < metadata.length; i += 1)
                                                    array.push(metadata[i].split(/(?:)/g));

                                                // Return
                                                return array
                                            }
                                        });

                                    // Data Text Function
                                    dynamicText[i].setAttribute('data-text-function', (dynamicText[i].getAttribute('data-text-function') || 'pause').replace(/\bclear\b/g, 'deleteAll').replace(/\bclearAll\b/g, 'deleteAll').replace(/\bdelete\b/g, 'deleteBackwards').replace(/\binsert\b/g, 'insertForwards').replace(/\binsertNewline\b/g, 'insertNewlineBackwards').replace(/\btype\b/g, 'insertBackwards').replace(/\bunshift\b/g, 'deleteForwards'));
                                        // Text Function
                                        (((dynamicText[i].getAttribute('data-text-function') || '').match(RegExp(dynamicText[i].getAttribute('data-text-separator'), 'g')) || []).length > (getterPropertyLimit * 2) || ((dynamicText[i].getAttribute('data-text-function') || '').match(RegExp(dynamicText[i].getAttribute('data-text-function-separator'), 'g')) || []).length > getterPropertyLimit) ? (function(element) {
                                            // Function > Text Function
                                            function textFunction(element) {
                                                // Modification > Element > Text Function
                                                element['LapysJS textFunction'] = (function(element) {
                                                    // Initialization > (Data, Metadata, Array)
                                                    let data =  element.getAttribute('data-text-function').replace(/ /g, '').replace(/\n/g, ''),
                                                        metadata = [],
                                                        array = [];

                                                    /* Loop
                                                            [for statement]

                                                        > Update > Metadata
                                                    */
                                                    for (let i = 0; i < data.split(RegExp(element.getAttribute('data-text-function-separator'), 'g')).length; i += 1)
                                                        metadata.push(data.split(RegExp(element.getAttribute('data-text-function-separator'), 'g'))[i]);

                                                    /* Loop
                                                            [for statement]

                                                        > Update > Array
                                                    */
                                                    for (let i = 0; i < metadata.length; i += 1)
                                                        array.push([metadata[i]]);

                                                    /* Loop
                                                            [for statement]

                                                        > Update > Array
                                                    */
                                                    for (let i = 0; i < array.length; i += 1) {
                                                        array[i] = array[i].concat(array[i][0].split(RegExp(element.getAttribute('data-text-separator'), 'g'))).slice(1);

                                                        /* Loop
                                                                [for statement]

                                                            > Update > Array
                                                        */
                                                        for (let j = 0; j < array[i].length; j += 1)
                                                            array[i][j] = {
                                                                // Length
                                                                length: (function(that) {
                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Return
                                                                    */
                                                                    if (array[i][j].hasText('='))
                                                                        return parseNumber(array[i][j].getAfterChar('=')) || that['LapysJS text'][i].length;

                                                                    else if (
                                                                        array[i][j].getBeforeChar('=') == 'deleteAll' ||
                                                                        array[i][j].getBeforeChar('=') == 'highlightAllCharacters' ||
                                                                        array[i][j].getBeforeChar('=') == 'insertNewlineBackwards' ||
                                                                        array[i][j].getBeforeChar('=') == 'insertNewlineForwards' ||
                                                                        array[i][j].getBeforeChar('=') == 'navigateCursorToEnd' ||
                                                                        array[i][j].getBeforeChar('=') == 'navigateCursorToStart' ||
                                                                        array[i][j].getBeforeChar('=') == 'unhighlightAllCharacters'
                                                                    )
                                                                        return 1;

                                                                    else if (array[i][j].getBeforeChar('=') == 'pause')
                                                                        return parseNumber(that['LapysJS text'][i].length / 2);

                                                                    // Return
                                                                    return that['LapysJS text'][i].length
                                                                })(element),

                                                                // Name
                                                                name: String(array[i][j].getBeforeChar('=')),

                                                                // Special
                                                                special: (function(that) {
                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Return
                                                                    */
                                                                    if (
                                                                        array[i][j].getBeforeChar('=') == 'navigateCursor' ||
                                                                        array[i][j].getBeforeChar('=') == 'navigateCursorToPosition'
                                                                    )
                                                                        return true;

                                                                    // Return
                                                                    return false
                                                                })(element)
                                                            }
                                                    }

                                                    // Return
                                                    return array
                                                })(element)
                                            };
                                            textFunction(element);

                                            // {Text Function} > Mutation Observe
                                            new MutationObserver(function() { textFunction(element) }).observe(dynamicText[i], { attributes: !0 })
                                        })(dynamicText[i]) :  Object.defineProperty(dynamicText[i], 'LapysJS textFunction', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textFunction() {
                                                // Initialization > (Data, Metadata, Array)
                                                let data =  this.getAttribute('data-text-function').replace(/ /g, '').replace(/\n/g, ''),
                                                    metadata = [],
                                                    array = [];

                                                /* Loop
                                                        [for statement]

                                                    > Update > Metadata
                                                */
                                                for (let i = 0; i < data.split(RegExp(this.getAttribute('data-text-function-separator'), 'g')).length; i += 1)
                                                    metadata.push(data.split(RegExp(this.getAttribute('data-text-function-separator'), 'g'))[i]);

                                                /* Loop
                                                        [for statement]

                                                    > Update > Array
                                                */
                                                for (let i = 0; i < metadata.length; i += 1)
                                                    array.push([metadata[i]]);

                                                /* Loop
                                                        [for statement]

                                                    > Update > Array
                                                */
                                                for (let i = 0; i < array.length; i += 1) {
                                                    array[i] = array[i].concat(array[i][0].split(RegExp(this.getAttribute('data-text-separator'), 'g'))).slice(1);

                                                    /* Loop
                                                            [for statement]

                                                        > Update > Array
                                                    */
                                                    for (let j = 0; j < array[i].length; j += 1)
                                                        array[i][j] = {
                                                            // Length
                                                            length: (function(that) {
                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Return
                                                                */
                                                                if (array[i][j].hasText('='))
                                                                    return parseNumber(array[i][j].getAfterChar('=')) || that['LapysJS text'][i].length;

                                                                else if (
                                                                    array[i][j].getBeforeChar('=') == 'deleteAll' ||
                                                                    array[i][j].getBeforeChar('=') == 'highlightAllCharacters' ||
                                                                    array[i][j].getBeforeChar('=') == 'insertNewlineBackwards' ||
                                                                    array[i][j].getBeforeChar('=') == 'insertNewlineForwards' ||
                                                                    array[i][j].getBeforeChar('=') == 'navigateCursorToEnd' ||
                                                                    array[i][j].getBeforeChar('=') == 'navigateCursorToStart' ||
                                                                    array[i][j].getBeforeChar('=') == 'unhighlightAllCharacters'
                                                                )
                                                                    return 1;

                                                                else if (array[i][j].getBeforeChar('=') == 'pause')
                                                                    return parseNumber(that['LapysJS text'][i].length / 2);

                                                                // Return
                                                                return that['LapysJS text'][i].length
                                                            })(this),

                                                            // Name
                                                            name: String(array[i][j].getBeforeChar('=')),

                                                            // Special
                                                            special: (function(that) {
                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Return
                                                                */
                                                                if (
                                                                    array[i][j].getBeforeChar('=') == 'navigateCursor' ||
                                                                    array[i][j].getBeforeChar('=') == 'navigateCursorToPosition'
                                                                )
                                                                    return true;

                                                                // Return
                                                                return false
                                                            })(this)
                                                        }
                                                }

                                                // Return
                                                return array
                                            }
                                        });

                                    // Data Text Function Delay
                                    dynamicText[i].setAttribute('data-text-function-delay', dynamicText[i].getAttribute('data-text-function-delay') || '0');
                                        // Text Function Delay
                                        Object.defineProperty(dynamicText[i], 'LapysJS textFunctionDelay', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textFunctionDelay() {
                                                // Return
                                                return +this.getAttribute('data-text-function-delay').replace(/ /g, '').replace(/\n/g, '')
                                            }
                                        });

                                    // Data Text Function Duration
                                    dynamicText[i].setAttribute('data-text-function-duration', dynamicText[i].getAttribute('data-text-function-duration') || '0');
                                        // Text Function Duration
                                        Object.defineProperty(dynamicText[i], 'LapysJS textFunctionDuration', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textFunctionDuration() {
                                                // Return
                                                return +this.getAttribute('data-text-function-duration').replace(/ /g, '').replace(/\n/g, '')
                                            }
                                        });

                                    // Data Text Function Initialize
                                    dynamicText[i].setAttribute('data-text-function-init', dynamicText[i].getAttribute('data-text-function-init') || (!!dynamicText[i].getAttribute('data-text') && dynamicText[i].getAttribute('data-text-function') != 'pause' && dynamicText[i].getAttribute('data-text-function-delay') != '0' && dynamicText[i].getAttribute('data-text-function-duration') != '0' && dynamicText[i].getAttribute('data-text-function-iteration-count') != '0' ? 'true' : 'false'));
                                        // Text Function Initialize
                                        Object.defineProperty(dynamicText[i], 'LapysJS textFunctionInit', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function getTextFunctionInit() {
                                                /* Logic
                                                        [switch:case:default statement]

                                                    > Return
                                                */
                                                switch (this.getAttribute('data-text-function-init')) {
                                                    // False
                                                    case 'false':
                                                        return false;
                                                        break;

                                                    // True
                                                    case 'true':
                                                        return true
                                                }
                                            },

                                            // Set
                                            set: function setTextFunctionInit() {
                                                // Modification > Target > Data Text Function Initialize
                                                this.setAttribute('data-text-function-init', !!arguments[0])
                                            }
                                        });

                                    // Data Text Function Initial Delay
                                    dynamicText[i].setAttribute('data-text-function-initial-delay', dynamicText[i].getAttribute('data-text-function-initial-delay') || '0');
                                        // Text Function Initial Delay
                                        Object.defineProperty(dynamicText[i], 'LapysJS textFunctionInitialDelay', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textFunctionInitialDelay() {
                                                // Return
                                                return +this.getAttribute('data-text-function-initial-delay').replace(/ /g, '').replace(/\n/g, '')
                                            }
                                        });

                                    // Data Text Function Iteration Count
                                    dynamicText[i].setAttribute('data-text-function-iteration-count', dynamicText[i].getAttribute('data-text-function-iteration-count') || 'infinite');
                                        // Text Function Iteration Count
                                        Object.defineProperty(dynamicText[i], 'LapysJS textFunctionIterationCount', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textFunctionIterationCount() {
                                                // Initialization > Data
                                                let data = !this.getAttribute('data-text-function-iteration-count').replace(/[0-9]/g, '') ? +this.getAttribute('data-text-function-iteration-count').replace(/ /g, '').replace(/\n/g, '') : this.getAttribute('data-text-function-iteration-count');

                                                // Return
                                                return typeof data == 'number' ? data : (function(data) {
                                                    /* Logic
                                                            [switch:case:default statement]

                                                        > Return
                                                    */
                                                    switch (data) {
                                                        // Infinite
                                                        case 'infinite':
                                                            return Infinity
                                                    }
                                                })(data)
                                            }
                                        });

                                    // Data Text Function Separator
                                    dynamicText[i].setAttribute('data-text-function-separator', dynamicText[i].getAttribute('data-text-function-separator') || ';');
                                        // Text Function Separator
                                        Object.defineProperty(dynamicText[i], 'LapysJS textFunctionSeparator', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textFunctionSeparator() {
                                                // Return
                                                return this.getAttribute('data-text-function-separator')[0]
                                            }
                                        });

                                    // Data Text Separator
                                    dynamicText[i].setAttribute('data-text-separator', dynamicText[i].getAttribute('data-text-separator') || ',');
                                        // Text Separator
                                        Object.defineProperty(dynamicText[i], 'LapysJS textSeparator', {
                                            // Configurable
                                            configurable: !0,

                                            // Enumerable
                                            enumerable: !0,

                                            // Get
                                            get: function textSeparator() {
                                                // Return
                                                return this.getAttribute('data-text-separator')[0]
                                            }
                                        });

                                    // Highlighted Characters
                                    Object.defineProperty(dynamicText[i], 'highlightedCharacters', {
                                        // Configurable
                                        configurable: !0,

                                        // Enumerable
                                        enumerable: !0,

                                        // Get
                                        get: function getCharacters() {
                                            // Initialization > Data
                                            let data = [];

                                            /* Loop
                                                    Index Target's child elements.

                                                > Update > Data
                                            */
                                            for (let i = 0; i < this.children.length; i += 1)
                                                ((this.children[i].getAttribute('data-id') || '').indexOf('highlighted') < 0) || data.push(this.children[i]);

                                            // Return
                                            return data
                                        }
                                    });

                                    // Inner HTML
                                    dynamicText[i].innerHTML = '';

                                    // In Pause
                                    dynamicText[i]['LapysJS inPause'] = false;

                                    // Current Text Function Index
                                    dynamicText[i]['LapysJS currentTextFunctionIndex'] =

                                    // Current Text Function Sequence Index
                                    dynamicText[i]['LapysJS currentTextFunctionSequenceIndex'] =

                                    // Current Text Index
                                    dynamicText[i]['LapysJS currentTextIndex'] =

                                    // Current Text Character Index
                                    dynamicText[i]['LapysJS currentTextCharacterIndex'] =

                                    // Text Function Character Length Limit
                                    dynamicText[i]['LapysJS textFunctionCharacterLengthLimit'] =

                                    // Text Function Iteration Count Index
                                    dynamicText[i]['LapysJS textFunctionIterationCountIndex'] =

                                    // Text Animation Interval
                                    dynamicText[i]['LapysJS textAnimationInterval'] = 0;

                                    /* On Automate
                                            --- NOTE ---
                                                @lapys: The following are pseudo event handlers & listeners.
                                                    - This is called when the Dynamic Text begins automation.
                                    */
                                    dynamicText[i].onautomate = dynamicText[i].onautomate || null;

                                    /* On Function Change
                                            --- NOTE ---
                                                @lapys: This is called when the Dynamic Text changes function.
                                    */
                                    dynamicText[i].onfunctionchange = dynamicText[i].onfunctionchange || null;

                                    /* On Sequence Change
                                            --- NOTE ---
                                                @lapys: This is called when the Dynamic Text changes function sequence or text.
                                    */
                                    dynamicText[i].onsequencechange = dynamicText[i].onsequencechange || null;

                                    /* On Type
                                            --- NOTE ---
                                                @lapys: Would have been called 'keyin' or 'onkeyin'.
                                                    - This is called when the Dynamic Text 'types'.
                                    */
                                    dynamicText[i].ontype = dynamicText[i].ontype || null;

                                // Function
                                    // Dynamic Text
                                        // Pause
                                        (typeof dynamicText[i].pause == 'function') || Object.defineProperty(dynamicText[i], 'pause', {
                                            // Value
                                            value: function pause() {}
                                        });

                                        // Delete All (Characters)
                                        (typeof dynamicText[i].deleteAll == 'function') || Object.defineProperty(dynamicText[i], 'deleteAll', {
                                            // Value
                                            value: function deleteAll() {
                                                // Modification > Target > Inner HTML
                                                this.innerHTML = `<span data-id=cursor></span>`
                                            }
                                        });

                                        // Delete (Character) Backwards
                                        (typeof dynamicText[i].deleteBackwards == 'function') || Object.defineProperty(dynamicText[i], 'deleteBackwards', {
                                            // Value
                                            value: function deleteBackwards() {
                                                // Deletion
                                                !this.cursor.previousElementSibling || this.cursor.previousElementSibling.delete()
                                            }
                                        });

                                        // Delete Backwards (Overflow)
                                        (typeof dynamicText[i].deleteBackwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'deleteBackwardsOverflow', {
                                            // Value
                                            value: function deleteBackwardsOverflow() {
                                                // Target > Delete (Backwards | Forwards)
                                                !this.querySelector(`:not([data-id*='cursor'])`) || this.cursor.previousElementSibling ? this.deleteBackwards() : this.deleteForwards()
                                            }
                                        });

                                        // Delete (Character) Forwards
                                        (typeof dynamicText[i].deleteForwards == 'function') || Object.defineProperty(dynamicText[i], 'deleteForwards', {
                                            // Value
                                            value: function deleteForwards() {
                                                // Deletion
                                                !this.cursor.nextElementSibling || this.cursor.nextElementSibling.delete()
                                            }
                                        });

                                        // Delete Forwards (Overflow)
                                        (typeof dynamicText[i].deleteForwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'deleteForwardsOverflow', {
                                            // Value
                                            value: function deleteForwardsOverflow() {
                                                // Target > Delete (Forwards | Backwards)
                                                !this.querySelector(`:not([data-id*='cursor'])`) || this.cursor.nextElementSibling ? this.deleteForwards() : this.deleteBackwards()
                                            }
                                        });

                                        // Highlight All Characters
                                        (typeof dynamicText[i].highlightAllCharacters == 'function') || Object.defineProperty(dynamicText[i], 'highlightAllCharacters', {
                                            // Value
                                            value: function highlightAllCharacters() {
                                                /* Loop
                                                        [do:while statement]

                                                    > Modification > [Element] > Data ID
                                                */
                                                while (this.querySelector(`:not([data-id*='highlighted'])`))
                                                    this.querySelector(`:not([data-id*='highlighted'])`).setAttribute('data-id', this.querySelector(`:not([data-id*='highlighted'])`).getAttribute('data-id') ? this.querySelector(`:not([data-id*='highlighted'])`).getAttribute('data-id') + ' highlighted' : 'highlighted')
                                            }
                                        });

                                        // Highlight Character Backwards
                                        (typeof dynamicText[i].highlightCharacterBackwards == 'function') || Object.defineProperty(dynamicText[i], 'highlightCharacterBackwards', {
                                            // Value
                                            value: function highlightCharacterBackwards() {
                                                // Initialization > Data
                                                let data = this.cursor.previousElementSibling;

                                                // Function > Check Previous Element Sibling
                                                (function checkPreviousElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') < 0) {
                                                            // Modification
                                                                // Data > Data ID
                                                                data.setAttribute('data-id', data.getAttribute('data-id') ? data.getAttribute('data-id') + ' highlighted' : 'highlighted');

                                                                // Target > Cursor Position
                                                                that.cursorPosition -= 1
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.previousElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkPreviousElementSibling)
                                                        }
                                                })(this)
                                            }
                                        });

                                        // Highlight Character Backwards (Overflow)
                                        (typeof dynamicText[i].highlightCharacterBackwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'highlightCharacterBackwardsOverflow', {
                                            // Value
                                            value: function highlightCharacterBackwardsOverflow() {
                                                // Initialization > Data
                                                let data = this.cursor.previousElementSibling;

                                                // Function > Check Previous Element Sibling
                                                (function checkPreviousElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') < 0) {
                                                            // Modification > Data > Data ID
                                                            data.setAttribute('data-id', data.getAttribute('data-id') ? data.getAttribute('data-id') + ' highlighted' : 'highlighted');

                                                            // Target > Cursor Position
                                                            !that.children || (that.cursorPosition = Array.from(that.children).indexOf(data))
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.previousElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkPreviousElementSibling)
                                                        }

                                                    else {
                                                        // Update > Data
                                                        data = that.lastElementChild != that.cursor ? that.lastElementChild : that.lastElementChild.previousElementSibling;

                                                        // Request Animation Frame
                                                        (data == null) || requestAnimationFrame(checkPreviousElementSibling)
                                                    }
                                                })(this)
                                            }
                                        });

                                        // Highlight Character Forwards
                                        (typeof dynamicText[i].highlightCharacterForwards == 'function') || Object.defineProperty(dynamicText[i], 'highlightCharacterForwards', {
                                            // Value
                                            value: function highlightCharacterForwards() {
                                                // Initialization > Data
                                                let data = this.cursor.nextElementSibling;

                                                // Function > Check Next Element Sibling
                                                (function checkNextElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') < 0) {
                                                            // Modification > Data > Data ID
                                                            data.setAttribute('data-id', data.getAttribute('data-id') ? data.getAttribute('data-id') + ' highlighted' : 'highlighted');

                                                            // Target > Cursor Position
                                                            that.cursorPosition += 1
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.nextElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkNextElementSibling)
                                                        }
                                                })(this)
                                            }
                                        });

                                        // Highlight Character Forwards (Overflow)
                                        (typeof dynamicText[i].highlightCharacterForwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'highlightCharacterForwardsOverflow', {
                                            // Value
                                            value: function highlightCharacterForwardsOverflow() {
                                                // Initialization > Data
                                                let data = this.cursor.nextElementSibling;

                                                // Function > Check Next Element Sibling
                                                (function checkNextElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') < 0) {
                                                            // Modification > Data > Data ID
                                                            data.setAttribute('data-id', data.getAttribute('data-id') ? data.getAttribute('data-id') + ' highlighted' : 'highlighted');

                                                            // Target > Cursor Position
                                                            !that.children || (that.cursorPosition = Array.from(that.children).indexOf(data))
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.nextElementSibling;

                                                            // Check Previous Element Sibling
                                                            requestAnimationFrame(checkNextElementSibling)
                                                        }

                                                    else {
                                                        // Update > Data
                                                        data = that.firstElementChild != that.cursor ? that.firstElementChild : that.firstElementChild.nextElementSibling;

                                                        // Request Animation Frame
                                                        (data == null) || requestAnimationFrame(checkNextElementSibling)
                                                    }
                                                })(this)
                                            }
                                        });

                                        // Insert (Character) Backwards
                                        (typeof dynamicText[i].insertBackwards == 'function') || Object.defineProperty(dynamicText[i], 'insertBackwards', {
                                            // Value
                                            value: function insertBackwards() {
                                                // Insertion
                                                (arguments.length < 1) || this.cursor.insertAdjacentHTML('beforebegin', `<span>${arguments[0]}</span>`)
                                            }
                                        });

                                        // Insert (Character) Forwards
                                        (typeof dynamicText[i].insertForwards == 'function') || Object.defineProperty(dynamicText[i], 'insertForwards', {
                                            // Value
                                            value: function insertForwards() {
                                                // Insertion
                                                (arguments.length < 1) || this.cursor.insertAdjacentHTML('afterend', `<span>${arguments[0]}</span>`)
                                            }
                                        });

                                        // Insert Newline Backwards
                                        (typeof dynamicText[i].insertNewlineBackwards == 'function') || Object.defineProperty(dynamicText[i], 'insertNewlineBackwards', {
                                            // Value
                                            value: function insertNewlineBackwards() {
                                                // Insertion
                                                this.cursor.insertAdjacentHTML('beforebegin', `<span><br></span>`)
                                            }
                                        });

                                        // Insert Newline Forwards
                                        (typeof dynamicText[i].insertNewlineForwards == 'function') || Object.defineProperty(dynamicText[i], 'insertNewlineForwards', {
                                            // Value
                                            value: function insertNewlineForwards() {
                                                // Insertion
                                                this.cursor.insertAdjacentHTML('afterend', `<span><br></span>`)
                                            }
                                        });

                                        // Navigate Cursor
                                        (typeof dynamicText[i].navigateCursor == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursor', {
                                            // Value
                                            value: function navigateCursor() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (arguments.length > 0)
                                                    /* Logic
                                                            [if:else if:else statement]

                                                        > Modification > Target > Cursor Position
                                                    */
                                                    if (this.cursorPosition < parseNumber(arguments[0]))
                                                        this.cursorPosition += 1;

                                                    else if (this.cursorPosition > parseNumber(arguments[0]))
                                                        this.cursorPosition -= 1
                                            }
                                        });

                                        // Navigate Cursor Backwards
                                        (typeof dynamicText[i].navigateCursorBackwards == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorBackwards', {
                                            // Value
                                            value: function navigateCursorBackwards() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition -= 1
                                            }
                                        });

                                        // Navigate Cursor Backwards (Overflow)
                                        (typeof dynamicText[i].navigateCursorBackwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorBackwardsOverflow', {
                                            // Value
                                            value: function navigateCursorBackwardsOverflow() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition == 0 ? this.cursorPosition = ~-this.characters.length : this.cursorPosition -= 1
                                            }
                                        });

                                        // Navigate Cursor Forwards
                                        (typeof dynamicText[i].navigateCursorForwards == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorForwards', {
                                            // Value
                                            value: function navigateCursorForwards() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition += 1
                                            }
                                        });

                                        // Navigate Cursor Forwards (Overflow)
                                        (typeof dynamicText[i].navigateCursorForwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorForwardsOverflow', {
                                            // Value
                                            value: function navigateCursorForwardsOverflow() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition == ~-this.characters.length ? this.cursorPosition = 0 : this.cursorPosition += 1
                                            }
                                        });

                                        // Navigate Cursor To End
                                        (typeof dynamicText[i].navigateCursorToEnd == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorToEnd', {
                                            // Value
                                            value: function navigateCursorToEnd() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition = ~-this.characters.length
                                            }
                                        });

                                        // Navigate Cursor To Position
                                        (typeof dynamicText[i].navigateCursorToPosition == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorToPosition', {
                                            // Value
                                            value: function navigateCursorToPosition() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition = parseNumber(arguments[0])
                                            }
                                        });

                                        // Navigate Cursor To Start
                                        (typeof dynamicText[i].navigateCursorToStart == 'function') || Object.defineProperty(dynamicText[i], 'navigateCursorToStart', {
                                            // Value
                                            value: function navigateCursorToStart() {
                                                // Modification > Target > Cursor Position
                                                this.cursorPosition = 0
                                            }
                                        });

                                        // Unhighlight All Characters
                                        (typeof dynamicText[i].unhighlightAllCharacters == 'function') || Object.defineProperty(dynamicText[i], 'unhighlightAllCharacters', {
                                            // Value
                                            value: function unhighlightAllCharacters() {
                                                /* Loop
                                                        [do:while statement]

                                                    > Modification > Target > [Element] > Data ID
                                                */
                                                while (this.querySelector(`[data-id*='highlighted'`))
                                                    this.querySelector(`[data-id*='highlighted'`).setAttribute('data-id', this.querySelector(`[data-id*='highlighted'`).getAttribute('data-id').replace('highlighted', '').trim())
                                            }
                                        });

                                        // Unhighlight Character Backwards
                                        (typeof dynamicText[i].unhighlightCharacterBackwards == 'function') || Object.defineProperty(dynamicText[i], 'unhighlightCharacterBackwards', {
                                            // Value
                                            value: function unhighlightCharacterBackwards() {
                                                // Initialization > Data
                                                let data = this.cursor.previousElementSibling;

                                                // Function > Check Previous Element Sibling
                                                (function checkPreviousElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') > -1) {
                                                            // Modification > Data > Data ID
                                                            data.removeAttribute('data-id');

                                                            // Target > Cursor Position
                                                            that.cursorPosition -= 1
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.previousElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkPreviousElementSibling)
                                                        }
                                                })(this)
                                            }
                                        });

                                        // Unhighlight Character Backwards (Overflow)
                                        (typeof dynamicText[i].unhighlightCharacterBackwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'unhighlightCharacterBackwardsOverflow', {
                                            // Value
                                            value: function unhighlightCharacterBackwardsOverflow(that) {
                                                // Initialization > Data
                                                let data = this.cursor.previousElementSibling;

                                                // Function > Check Previous Element Sibling
                                                (function checkPreviousElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') > -1) {
                                                            // Modification > Data > Data ID
                                                            data.removeAttribute('data-id');

                                                            // Target > Cursor Position
                                                            !that.children || (that.cursorPosition = Array.from(that.children).indexOf(data))
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.previousElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkPreviousElementSibling)
                                                        }

                                                    else {
                                                        // Update > Data
                                                        data = this.cursor != this.lastElementChild ? this.lastElementChild : this.lastElementChild.previousElementSibling;

                                                        // Request Animation Frame
                                                        (data == null) || requestAnimationFrame(checkPreviousElementSibling)
                                                    }
                                                })(this)
                                            }
                                        });

                                        // Unhighlight Character Forwards
                                        (typeof dynamicText[i].unhighlightCharacterForwards == 'function') || Object.defineProperty(dynamicText[i], 'unhighlightCharacterForwards', {
                                            // Value
                                            value: function unhighlightCharacterForwards(that) {
                                                // Initialization > Data
                                                let data = this.cursor.nextElementSibling;

                                                // Function > Check Next Element Sibling
                                                (function checkNextElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') > -1) {
                                                            // Modification > Data > Data ID
                                                            data.removeAttribute('data-id');

                                                            // Target > Cursor Position
                                                            that.cursorPosition += 1
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.nextElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkNextElementSibling)
                                                        }
                                                })(this)
                                            }
                                        });

                                        // Unhighlight Character Forwards (Overflow)
                                        (typeof dynamicText[i].unhighlightCharacterForwardsOverflow == 'function') || Object.defineProperty(dynamicText[i], 'unhighlightCharacterForwardsOverflow', {
                                            // Value
                                            value: function unhighlightCharacterForwardsOverflow(that) {
                                                // Initialization > Data
                                                let data = this.cursor.nextElementSibling;

                                                // Function > Check Next Element Sibling
                                                (function checkNextElementSibling(that) {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (data != null)
                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if ((data.getAttribute('data-id') || '').indexOf('highlighted') > -1) {
                                                            // Modification > Data > Data ID
                                                            data.removeAttribute('data-id');

                                                            // Target > Cursor Position
                                                            !that.children || (that.cursorPosition = Array.from(that.children).indexOf(data))
                                                        }

                                                        else {
                                                            // Update > Data
                                                            data = data.nextElementSibling;

                                                            // Request Animation Frame
                                                            requestAnimationFrame(checkNextElementSibling)
                                                        }

                                                    else {
                                                        // Update > Data
                                                        data = this.cursor != this.firstElementChild ? this.firstElementChild : this.firstElementChild.nextElementSibling;

                                                        // Request Animation Frame
                                                        (data == null) || requestAnimationFrame(checkNextElementSibling)
                                                    }
                                                })(this)
                                            }
                                        });

                                    // Pause
                                    function pause(element = dynamicText[i], timeout = 0) {
                                        // Update > Element > In Pause
                                        element['LapysJS inPause'] = true;

                                        // sSet Timeout
                                        setTimeout(function() {
                                            // Update > Element > In Pause
                                            element['LapysJS inPause'] = false
                                        }, timeout)
                                    };

                                    // Automate
                                    function automate(element = dynamicText[i]) {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (element['LapysJS textFunctionInit']) {
                                            // Modification > Element > Automating
                                            element.automating = !0;

                                            // Execution
                                            !element.hasAttribute('onautomate') || eval(`(function(event = createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element})) {\n${element.getAttribute('onautomate')}\n})()`);

                                            // Element > On Automate
                                            (typeof element.onautomate != 'function') || element.onautomate(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (element.getEvent('automate') != null)
                                                /* Loop
                                                        [for statement]

                                                    > (Element > Get Event > Automate) > Listener
                                                */
                                                for (let i = 0; i < element.getEvent('automate').length; i += 1)
                                                    element.getEvent('automate')[i].listener(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                            /* Function > Type */
                                            !(element.getAttribute('data-text') != ' ' && element.getAttribute('data-text-function') != 'pause') || (function type() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (dynamicText[i]['LapysJS textFunctionInit']) {
                                                    // Execution
                                                    !element.hasAttribute('ontype') || eval(`(function(event = createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element})) {\n${element.getAttribute('ontype')}\n})()`);

                                                    // Element > On Automate
                                                    (typeof element.ontype != 'function') || element.ontype(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (element.getEvent('type') != null)
                                                        /* Loop
                                                                [for statement]

                                                            > (Element > Get Event > Automate) > Listener
                                                        */
                                                        for (let i = 0; i < element.getEvent('type').length; i += 1)
                                                            element.getEvent('type')[i].listener(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                    /* Update > Dynamic Text > Text Animation Interval
                                                            --- NOTE ---
                                                                @lapys: Increments the Text Animation Interval to
                                                                    match up real-time milliseconds-seconds to determine how
                                                                    long to process each function depending on the current text accessed.
                                                    */
                                                    element['LapysJS inPause'] || (element['LapysJS textAnimationInterval'] += (1 / 60));

                                                    /* Logic
                                                            [if:else if:else statement]

                                                            --- NOTE ---
                                                                @lapys: Change the character.
                                                    */
                                                    if (element['LapysJS textAnimationInterval'] >= (element['LapysJS textFunctionDuration'] / element['LapysJS text'][element['LapysJS currentTextIndex']].length)) {
                                                        // Execution
                                                        !element.hasAttribute('oncharacterchange') || eval(`(function(event = createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element})) {\n${element.getAttribute('oncharacterchange')}\n})()`);

                                                        // Element > On Character Change
                                                        (typeof element.oncharacterchange != 'function') || element.oncharacterchange(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                        if (element.getEvent('characterchange') != null)
                                                            /* Loop
                                                                    [for statement]

                                                                > (Element > Get Event > Character Change) > Listener
                                                            */
                                                            for (let i = 0; i < element.getEvent('characterchange').length; i += 1)
                                                                element.getEvent('characterchange')[i].listener(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                        // Pause
                                                        !(
                                                            element['LapysJS textFunctionCharacterLengthLimit'] > element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].length - 2 &&
                                                            !(element['LapysJS textFunctionCharacterLengthLimit'] > ~-element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].length)
                                                        ) || pause(element, element['LapysJS textFunctionDelay'] * 1e3);

                                                        // Update > Dynamic Text
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                    --- NOTE ---
                                                                        @lapys: Change the function.
                                                            */
                                                            if (element['LapysJS textFunctionCharacterLengthLimit'] > ~-element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].length) {
                                                                // Execution
                                                                !element.hasAttribute('onfunctionchange') || eval(`(function(event = createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element})) {\n${element.getAttribute('onfunctionchange')}\n})()`);

                                                                // Element > On Function Change
                                                                (typeof element.onfunctionchange != 'function') || element.onfunctionchange(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (element.getEvent('functionchange') != null)
                                                                    /* Loop
                                                                            [for statement]

                                                                        > (Element > Get Event > Function Change) > Listener
                                                                    */
                                                                    for (let i = 0; i < element.getEvent('functionchange').length; i += 1)
                                                                        element.getEvent('functionchange')[i].listener(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                                // Update > Element > Current Text Function Index
                                                                element['LapysJS currentTextFunctionIndex'] += 1;

                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                        --- NOTE ---
                                                                            @lapys: Change the Function Sequence.
                                                                */
                                                                if (element['LapysJS currentTextFunctionIndex'] > ~-element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']].length) {
                                                                    // Execution
                                                                    !element.hasAttribute('onsequencechange') || eval(`(function(event = createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element})) {\n${element.getAttribute('onsequencechange')}\n})()`);

                                                                    // Element > On Sequence Change
                                                                    (typeof element.onsequencechange != 'function') || element.onsequencechange(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                                    /* Logic
                                                                            [if:else if:else statement]
                                                                    */
                                                                    if (element.getEvent('sequencechange') != null)
                                                                        /* Loop
                                                                                [for statement]

                                                                            > (Element > Get Event > Sequence Change) > Listener
                                                                        */
                                                                        for (let i = 0; i < element.getEvent('sequencechange').length; i += 1)
                                                                            element.getEvent('sequencechange')[i].listener(createObject(new (class AutomationEvent extends Event {})(''), {currentTarget: element, path: element.parentPath, srcElement: element, target: element}));

                                                                    // Update > Element > Current Text Function Sequence Index
                                                                    element['LapysJS currentTextFunctionSequenceIndex'] += 1;

                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Update > Element
                                                                    */
                                                                    if (element['LapysJS currentTextFunctionSequenceIndex'] > ~-element['LapysJS textFunction'].length) {
                                                                        // Current Text Function Sequence Index
                                                                        element['LapysJS currentTextFunctionSequenceIndex'] = 0;

                                                                        // Text Function Iteration CountIndex
                                                                        element['LapysJS textFunctionIterationCountIndex'] += .5
                                                                    }

                                                                    // Update > Element > Current Text Index
                                                                    element['LapysJS currentTextIndex'] += 1;

                                                                    /* Logic
                                                                            [if:else if:else statement]

                                                                        > Update > Element
                                                                    */
                                                                    if (element['LapysJS currentTextIndex'] > ~-element['LapysJS text'].length) {
                                                                        // Current Text Index
                                                                        element['LapysJS currentTextIndex'] = 0;

                                                                        // Text Function Iteration Count Index
                                                                        element['LapysJS textFunctionIterationCountIndex'] += .5
                                                                    }

                                                                    // Update > Element > Current Text Function Index
                                                                    element['LapysJS currentTextFunctionIndex'] = 0
                                                                }

                                                                // Update > Element > Text Function Character Length Limit
                                                                element['LapysJS textFunctionCharacterLengthLimit'] = 0
                                                            }

                                                            // Element > [Text Function]
                                                            element[element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].name](element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].special ? element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].length : element['LapysJS text'][element['LapysJS currentTextIndex']][element['LapysJS currentTextCharacterIndex']]);

                                                            /* Current Text Character Index
                                                                    --- NOTE ---
                                                                        @lapys: Increment the next character to be used.
                                                            */
                                                            (element['LapysJS currentTextCharacterIndex'] < element['LapysJS text'][element['LapysJS currentTextIndex']].length) || (element['LapysJS currentTextCharacterIndex'] = 0);
                                                            !(element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].name == 'insertBackwards' || element['LapysJS textFunction'][element['LapysJS currentTextFunctionSequenceIndex']][element['LapysJS currentTextFunctionIndex']].name == 'insertForwards') || (element['LapysJS currentTextCharacterIndex'] += 1);
                                                            (element['LapysJS currentTextCharacterIndex'] < element['LapysJS text'][element['LapysJS currentTextIndex']].length) || (element['LapysJS currentTextCharacterIndex'] = 0);

                                                            /* Text Function Character Length Limit
                                                                    --- NOTE ---
                                                                        @lapys: Determine how many characters the function
                                                                            will be called for.
                                                            */
                                                            element['LapysJS textFunctionCharacterLengthLimit'] += 1;

                                                            /* Text Animation Interval
                                                                    --- NOTE ---
                                                                        @lapys: Reset the Typing animation.
                                                            */
                                                            element['LapysJS textAnimationInterval'] = 0
                                                    }

                                                    // Modification > Element > Data Text Function
                                                    (element['LapysJS textFunctionIterationCount'] == Infinity) || (element['LapysJS textFunctionIterationCountIndex'] > element['LapysJS textFunctionIterationCount']) || element.getAttribute('data-text-function').startsWith('pause') || (element.setAttribute('data-text-function', 'pause, ' + element.getAttribute('data-text-function')));

                                                    // Request Animation Frame
                                                    (element['LapysJS textFunctionIterationCountIndex'] > element['LapysJS textFunctionIterationCount'] - 1) || requestAnimationFrame(type)
                                                }
                                            })()
                                        }
                                    };

                                    // Update
                                    function update() {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (
                                            !dynamicText[i].automating &&
                                            dynamicText[i]['LapysJS textFunctionInit']
                                        ) {
                                            // Automate
                                            automate(dynamicText[i]);

                                            // Request Animation Frame
                                            requestAnimationFrame(update)
                                        }
                                    };

                                    // Main
                                    (function main() {
                                        /* Loop
                                                [do:while statement]

                                            > Deletion
                                        */
                                        while (dynamicText[i].querySelectorAll(`span[data-id*='cursor'`)[1])
                                            dynamicText[i].querySelectorAll(`span[data-id*='cursor'`)[1].remove();

                                        // Insertion
                                        dynamicText[i].querySelector(`span[data-id*='cursor'`) || dynamicText[i].insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Modification > Dynamic Text > Cursor > Data ID
                                        dynamicText[i].cursor.setAttribute('data-id', dynamicText[i].cursor.getAttribute('data-id').replace('highlighted', '').trim());

                                        /* Loop
                                                [do:while statement]

                                            > Modification > Dynamic Text > [Element] > Data ID
                                        */
                                        while (dynamicText[i].querySelector(`[data-id=''`))
                                            dynamicText[i].querySelector(`[data-id=''`).removeAttribute('data-id');

                                        /* Loop
                                                [do:while statement]

                                            > Deletion
                                        */
                                        while (dynamicText[i].querySelector(':not(br):not(span)'))
                                            dynamicText[i].querySelector(':not(br):not(span)').delete();

                                        // Request Animation Frame
                                        requestAnimationFrame(main)
                                    })();

                                    // {Initialize} Timeout
                                    setTimeout(function init() {
                                        // Function > Check Initialize
                                        function checkInit() {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                dynamicText[i]['LapysJS textFunctionInit'] &&
                                                dynamicText[i]['LapysJS textFunctionInit'] !== dynamicText[i]['LapysJS formerTextFunctionInit']
                                            ) {
                                                // Modification > Dynamic Text
                                                    // Former Text Function Initialize
                                                    dynamicText[i]['LapysJS formerTextFunctionInit'] = dynamicText[i]['LapysJS textFunctionInit'];

                                                    // Inner HTML
                                                    dynamicText[i].innerHTML = '<span data-id=cursor></span>';

                                                    // In Pause
                                                    dynamicText[i]['LapysJS inPause'] = false;

                                                    // Current Text Function Index
                                                    dynamicText[i]['LapysJS currentTextFunctionIndex'] =

                                                    // Current Text Function Sequence Index
                                                    dynamicText[i]['LapysJS currentTextFunctionSequenceIndex'] =

                                                    // Current Text Index
                                                    dynamicText[i]['LapysJS currentTextIndex'] =

                                                    // Current Text Character Index
                                                    dynamicText[i]['LapysJS currentTextCharacterIndex'] =

                                                    // Text Function Character Length Limit
                                                    dynamicText[i]['LapysJS textFunctionCharacterLengthLimit'] =

                                                    // Text Function Iteration Count Index
                                                    dynamicText[i]['LapysJS textFunctionIterationCountIndex'] =

                                                    // Text Animation Interval
                                                    dynamicText[i]['LapysJS textAnimationInterval'] = 0;

                                                    // Cursor > Delete
                                                    dynamicText[i].cursor.delete = Function();

                                                // Update | Request Animation Frame
                                                typeof +dynamicText[i].getAttribute('data-text-function-iteration-count') == 'number' && dynamicText[i].getAttribute('data-text-function-iteration-count') != 'infinite' ? repeat(update, +dynamicText[i].getAttribute('data-text-function-iteration-count')) : ((dynamicText[i].getAttribute('data-text-function-iteration-count') != 'infinite') || requestAnimationFrame(update));

                                                // {Update} Mutation Observer
                                                ('formerTextFunctionInit' in dynamicText[i]) || new MutationObserver(function() { (typeof +dynamicText[i].getAttribute('data-text-function-iteration-count') != 'number') || repeat(update, +dynamicText[i].getAttribute('data-text-function-iteration-count')) }).observe(dynamicText[i], {attributes: !0})
                                            }

                                            else
                                                // Request Animation Frame
                                                requestAnimationFrame(checkInit)
                                        };

                                        // Check Initialize
                                        checkInit();

                                        /* {Detect Text Function Initialize} Mutation Observer
                                                --- NOTE ---
                                                    @lapys: This is to detect whether or not the Dynamic Text
                                                        is being toggled.
                                        */
                                        new MutationObserver(function detectTextFunctioninit() {
                                            // Check Initialize
                                            checkInit();

                                            // Update > Dynamic Text > Former Text Function Initialize
                                            dynamicText[i]['LapysJS formerTextFunctionInit'] = dynamicText[i]['LapysJS textFunctionInit']
                                        }).observe(dynamicText[i], {attributes: !0});
                                    }, dynamicText[i]['LapysJS textFunctionInitialDelay'] * 1e3);

                                // Modification > Dynamic Text > Is Modified
                                dynamicText[i]['LapysJS isModified'] = !0
                            }
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
                            (placeholderElement[i].nextElementSibling || {hasAttribute: () => { return !1 }}).hasAttribute('data-placeholder') || placeholderElement[i].remove()
                        }
                    });

                // Screen Tip
                    // Registration
                    ((typeof window.customElements != 'function') || (typeof document.registerElement != 'function') || (document.createElement('screen-tip').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('screen-tip', class HTMLScreenTipElement extends HTMLElement {}));

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
                                        !isObject(arguments[0], !1)
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
                                    !isObject(arguments[0], !1)
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
                                            ([...this.children].indexOf((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement))) < 0) || (this.selectBox.value = this.children[[...this.children].indexOf((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)))].getAttribute('data-value') || this.children[[...this.children].indexOf((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)))].innerHTML)
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
                    ((typeof window.customElements != 'function') || (typeof document.registerElement != 'function') || (document.createElement('screen-toast').constructor !== HTMLElement) || (customElements || {define: () => {}}).define('screen-toast', class HTMLToastElement extends HTMLElement {}));

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
                                }, +(String(!(typeof (arguments[0] || []).tagName == 'string' && !isObject(arguments[0], !1)) || arguments[0].getAttribute('data-toast-delay')).replace('true', '0') || '0').replace(/ /g, '') * 1e3)
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
                                        !isObject(data, !1)
                                    ) {
                                        // Modification > Target
                                            // Inner HTML
                                            that.innerHTML = data.getAttribute('data-toast');

                                            // Class
                                            data.hasAttribute('data-toast-class') || that.setAttribute('class', data.getAttribute('data-toast-class') || '');

                                            // Style
                                            data.hasAttribute('data-toast-style') || that.setAttribute('style', (that.getAttribute('style') || '') + (that.getAttribute('style') ? ';' : '') + data.getAttribute('data-toast-style'))
                                    }
                                }, +(String(!(typeof (arguments[0] || []).tagName == 'string' && !isObject(arguments[0], !1)) || arguments[0].getAttribute('data-toast-delay')).replace('true', '0') || '0').replace(/ /g, '') * 1e3)
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

                    // Insertion
                    document.body.appendChild(data);

                    /* Loop
                            Index Target's attributes.

                        > Modification > Data > [Event Path > Attribute > Name]
                    */
                    for (let i = 0; i < (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).attributes.length; i += 1)
                        data.setAttribute((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).attributes[i].name, (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).attributes[i].value);

                    // Data > Click
                    data.click();

                    // Deletion
                    document.body.removeChild(data)
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
