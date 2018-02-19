/**
    @author: Lapys Dev Team
    @description: LapysJS is a JavaScript library with its independent CSS framework designed to make JavaScript more forgiving and faster to script.
    @version: 0.0.1

    --- UPDATE ---
        @lapys: A few updates such as:
            - DOM Element caching
            - Unnecessary mini-polyfills
            - Unnecessary lumps of string characters as a fallback to regular expression negation
                (e.g.: The CSSSelector property`s regular expression matching).
*/
(function LapysJSScript(window = window, document = window.document, global = window.global || null, undefined = window.undefined || void 0) {
    /* Polyfills
            --- NOTE ---
                @lapys: All polyfills are minified.
                    Thanks to MDN and other developers who made these polyfills free and available for use.
    */
        /* Array */
            // From
            (typeof Array.from=='function')||(Array.from=function(){var a=Object.prototype.toString,b=function(f){return'function'==typeof f||'[object Function]'===a.call(f)},c=function(f){var g=+f;return isNaN(g)?0:0!=g&&isFinite(g)?(0<g?1:-1)*Math.floor(Math.abs(g)):g},d=Math.pow(2,53)-1,e=function(f){var g=c(f);return Math.min(Math.max(g,0),d)};return function(g){var h=this,i=Object(g);if(null==g)throw new TypeError('Array.from requires an array-like object - not null or undefined');var l,j=1<arguments.length?arguments[1]:void 0;if('undefined'!=typeof j){if(!b(j))throw new TypeError('Array.from: when provided, the second argument must be a function');2<arguments.length&&(l=arguments[2])}for(var p,m=e(i.length),n=b(h)?Object(new h(m)):Array(m),o=0;o<m;)p=i[o],n[o]=j?'undefined'==typeof l?j(p,o):j.call(l,p,o):p,o+=1;return n.length=m,n}}());

            // Index Of
            (typeof Array.prototype.indexOf=='function')||Object.defineProperty(Array.prototype,'indexOf',{value:function indexOf(){if(this===null)throw TypeError("'this' is null or not defined");var a,c=Object(this),b=c.length>>>0;if(0===b)return -1;a=parseFloat(arguments[1])||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return -1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===arguments[0])return a;a += 1}return -1}});

            // Last Index Of
            (typeof Array.prototype.lastIndexOf=='function')||Object.defineProperty(Array.prototype,'lastIndexOf',{value:function lastIndexOf(){if(this===void 0||this===null)throw TypeError();var n,k,t=Object(this),len=t.length>>>0;if(len===0){return -1}n=len-1;if(arguments.length>1){n=Number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==(1/0)&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}}for(k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k -= 1){if(k in t&&t[k]===arguments[0]){return k}}return -1}});

        /* Math */
            // Cube Root
            Math.cbrt||(Math.cbrt=function(a){var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b});

        /* Object */
            // Assign
            (typeof Object.assign=='function')||Object.defineProperty(Object,'assign',{configurable:!0,value:function assign(){'use strict';if(arguments[0]==null)throw TypeError('Cannot convert undefined or null to object');var to=Object(arguments[0]);for(var index=1;index<arguments.length;index+=1){var nextSource=arguments[index];if(nextSource!=null)for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey))to[nextKey]=nextSource[nextKey]}return to}},writable: !0});

            // Is
            (typeof Object.is=='function')||(Object.is=function(a,b){return a===b?0!==a||1/a==1/b:a!==a&&b!==b});

    /* {Window} Global Data */
        // Absolute
        (typeof abs == 'function') || (window.abs = Math.abs);

        /* Add Class List
                --- NOTE ---
                    @lapys: Store a set of re-usable class names
                        for DOM elements.
        */
        (typeof addClassList == 'function') || Object.defineProperty(Window.prototype, 'addClassList', {
            // Value
            value: function addClassList() {
                // Initialization > Arguments
                let args = [...arguments];

                // Modification > LapysJS > Permanent Data > Class List > [Argument 0]
                classList[String(args[0])] = (args[1] || '').constructor == Array ? LapysJS.debug.formatText(args[1].join(' '), 1) : LapysJS.debug.formatText(String(args[1]), 1);

                // Return
                return classList[String(args[0])]
            }
        });

        /* Array
                --- NOTE ---
                    @lapys: Made for converting HTMLCollections and NodeLists into arrays,
                        Very similar to the Array function object.
        */
        Object.defineProperty(Window.prototype, 'array', {
            // Value
            value: function array() {
                // Initialization > (Arguments, Data)
                let args = [...arguments],
                    data = [];

                /* Loop
                        Index Arguments.
                */
                for (let i of args)
                    /* Logic
                            [if:else if:else statement]
                    */
                    if ((i || new (function LapysJSObject() {})).constructor == Function)
                        // Update > Data
                        data = data.concat(i.getArguments());

                    else if (!i || (i || new (function LapysJSObject() {})).constructor == Boolean || (i || new (function LapysJSObject() {})).constructor == Number || (i || new (function LapysJSObject() {})).constructor == RegExp)
                        // Update > Data
                        data.push(i);

                    else
                        // Error Handling
                        try {
                            // Update > Data
                            data = data.concat(Array.from(i))
                        }

                        catch (error) {}

                // Return
                return data
            }
        });

        // Average
        (typeof avg == 'function') || (window.avg = function average() {
            // Return
            return Math.avg.apply(Math, [...arguments])
        });

        // Initialization > Define
        var def = Object.defineProperty;

        /* Base
                --- NOTE ---
                    @lapys: Base object containing
                        vital information.
        */
        var base = new (function Object() {
            // Initialization > Target
            let that = this;

            // Modification > Target
                // Plug-In
                def(that, 'plugins', {
                    // Value
                    value: new (function Object() {
                        // Initialization > Target
                        let that = this;

                        // Modification > Target
                            // Accordion
                            def(that, 'accordion', {
                                // Get
                                get: function accordion() {
                                    // Return
                                    return document.querySelectorAll(".accordion:not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Carousel
                            def(that, 'carousel', {
                                // Get
                                get: function carousel() {
                                    // Return
                                    return document.querySelectorAll(".carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Drag Element
                            def(that, 'dragElement', {
                                // Get
                                get: function dragElement() {
                                    // Initialization > (Data, Metadata)
                                    let data = [...document.querySelectorAll("[data-id*='drag-element']:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drop-element']):not(input):not(textarea)")],
                                        metadata = [];

                                    /* Loop
                                            Index Data

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        !(i.getAttribute('data-id') || '').hasText(/\bdrag\-element\b/) || metadata.push(i);

                                    // Return
                                    return metadata
                                }
                            });

                            // Drop Element
                            def(that, 'dropElement', {
                                // Get
                                get: function dropElement() {
                                    // Initialization > (Data, Metadata)
                                    let data = [...document.querySelectorAll("[data-id*='drop-element']:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not(input):not(textarea)")],
                                        metadata = [];

                                    /* Loop
                                            Index Data

                                        > Update > Metadata
                                    */
                                    for (let i of data)
                                        !(i.getAttribute('data-id') || '').hasText(/\bdrop\-element\b/) || metadata.push(i);

                                    // Return
                                    return metadata
                                }
                            });

                            // Dropdown
                            def(that, 'dropdown', {
                                // Get
                                get: function dropdown() {
                                    // Return
                                    return document.querySelectorAll(".dropdown:not(.accordion):not(.carousel):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Dynamic Text
                            def(that, 'dynamicText', {
                                // Get
                                get: function dynamicText() {
                                    // Return
                                    return document.querySelectorAll(".dynamic-text:not(.accordion):not(.carousel):not(.dropdown):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Media
                            def(that, 'media', {
                                // Get
                                get: function media() {
                                    // Return
                                    return document.querySelectorAll(".media:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Media Playlist
                            def(that, 'mediaPlaylist', {
                                // Get
                                get: function mediaPlaylist() {
                                    // Return
                                    return document.querySelectorAll(".media-playlist:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Placeholder
                            def(that, 'placeholder', {
                                // Get
                                get: function placeholder() {
                                    // Return
                                    return document.querySelectorAll("input[data-placeholder]:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element']), textarea[data-placeholder]:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.roulette):not([data-id*='drag-element']):not([data-id*='drop-element'])")
                                }
                            });

                            // Roulette
                            def(that, 'roulette', {
                                // Get
                                get: function roulette() {
                                    // Return
                                    return document.querySelectorAll(".roulette:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element']):not([data-id*='drop-element']):not(input):not(textarea)")
                                }
                            });

                            // Select Box
                            def(that, 'selectBox', {
                                // Get
                                get: function selectBox() {
                                    // Return
                                    return document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')
                                }
                            })
                })
            })
        });

        // Boolean
        Object.defineProperty(Window.prototype, 'bool', {
            // Value
            value: function boolean() {
                // Initialization > (Arguments, Data)
                let args = [...arguments],
                    data = [];

                /* Loop
                        Index Arguments.

                    > Update > Data
                */
                for (let i of args)
                    data.push(!!i);

                // Return
                return data.length > 0 ? data.indexOf(!1) < 0 : !1
            }
        });

        // Cube Root
        (typeof cbrt == 'function') || (window.cbrt = function cbrt() {
            // Return
            return Math.cbrt.apply(Math, [...arguments])
        });

        // Ceiling
        (typeof ceil == 'function') || (window.ceil = function ceil() {
            // Initialization > Arguments
            let args = [...arguments];

            // Return
            return Math[String(!args[1] || 'floor').replace('true', 'ceil')].apply(Math, args.slice(2).addElement(args[0]))
        });

        /* Check
                --- NOTE ---
                    @lapys: Similar to a Bernoulli distribution trial
                        with exclusive or exhaustive results from an outcome.
        */
        (typeof check == 'function') || Object.defineProperty(Window.prototype, 'check', {
            // Value
            value: function check() {
                // Initialization > Arguments
                let args = [...arguments];

                // Update > Argument (1, 2)
                (typeof args[1] != 'string') || (args[1] = func('', '', args[1]));
                (typeof args[2] != 'string') || (args[2] = func('', '', args[2]));

                // Return
                return new (function LapysJSCondition() {
                    // Initialization > (Arguments, Target)
                    let _args = [...arguments],
                        that = this;

                    // Modification > Target > Condition
                    that.condition = _args.length > 0 ? _args[0] : args[0];

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
                                    if (typeof args[2] == 'function')
                                        return args[2];

                                    else if (typeof _args[2] == 'function')
                                        return args[2];

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
                                    if (typeof args[1] == 'function')
                                        return args[1];

                                    else if (typeof _args[1] == 'function')
                                        return args[1];

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
                                    typeof args[1] == 'function' ||
                                    typeof _args[1] == 'function'
                                ) ||
                                (
                                    typeof args[2] == 'function' ||
                                    typeof _args[2] == 'function'
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

        // Class List
        ((window.classList || new (function LapysJSObject() {})).constructor.name == 'ClassListRegistry') || Object.defineProperty(Window.prototype, 'classList', new (function Object() {
            // Initialization > Data
            let data = new (function ClassListRegistry() {});

            // Modification > Target
                // Configurable
                this.configurable = !1;

                // Enumerable
                this.enumerable = !1;

                // Get
                this.get = function classList() {
                    // Return
                    return data
                }
        }));

        // Clear
        (typeof clear == 'function') || (window.clear = console.clear);

        // Cooler
            // Definition
            ((window.cooler || new (function LapysJSObject() {})).constructor.name == 'LapysJSCooler') || Object.defineProperty(Window.prototype, 'cooler', new (function Object() {
                // Initialization > Data
                let data = new (function LapysJSCooler() {
                    let that = this;

                    // Modification > Target
                        // Freeze
                        def(that.constructor.prototype, 'freeze', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: function freeze() {
                                // Initialization > Metadata
                                let metadata = that[String(arguments[0])];

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (!(String(arguments[0]) in LapysJS.perm.cooledItems)) {
                                    // Initialization > Alpha
                                    let alpha = getType(that[String(arguments[0])]);

                                    // Deletion
                                    delete that[String(arguments[0])];

                                    /* Logic
                                            [switch:case:default statement]

                                        > Update > Target > [Argument 0]
                                    */
                                    switch (alpha) {
                                        // Array
                                        case 'array':
                                            that[String(arguments[0])] = Array();
                                            break;

                                        case 'boolean':
                                            that[String(arguments[0])] = Boolean();
                                            break;

                                        case 'function':
                                            that[String(arguments[0])] = Function();
                                            break;

                                        case 'number':
                                            that[String(arguments[0])] = Number();
                                            break;

                                        case 'object':
                                            that[String(arguments[0])] = Object();
                                            break;

                                        case 'regex':
                                            that[String(arguments[0])] = RegExp();
                                            break;

                                        case 'string':
                                            that[String(arguments[0])] = String();
                                            break;

                                        case 'symbol':
                                            that[String(arguments[0])] = Symbol();
                                            break;

                                        default:
                                            that[String(arguments[0])] = eval('new (function ' + metadata.constructor.name + '() {})')
                                    }
                                }

                                LapysJS.perm.cooledItems[String(arguments[0])] = metadata
                            }
                        });

                        // Melt
                        def(that.constructor.prototype, 'melt', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Value
                            value: function melt() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (String(arguments[0]) in LapysJS.perm.cooledItems) {
                                    // Modification > Target > [Argument 0]
                                    that[String(arguments[0])] = LapysJS.perm.cooledItems[String(arguments[0])];

                                    // Deletion
                                    delete LapysJS.perm.cooledItems[String(arguments[0])]
                                }
                            }
                        })
                });

            // Modification > Target
                // Configurable
                this.configurable = !1;

                // Enumerable
                this.enumerable = !1;

                // Get
                this.get = function classList() {
                    // Return
                    return data
                }
        }));

        // Compare
        (typeof compare == 'function') || Object.defineProperty(Window.prototype, 'compare', {
            // Value
            value: function compare() {
                // Return
                return Object.is.apply(Object, [...arguments])
            }
        });

        // Console
            /* Print
                    --- NOTE ---
                        @lapys: A somewhat major alternative to the 'console.dir' and 'console.log' methods.
            */
            (typeof console.print == 'function') || (console.print = function print() {
                // Initialization > Arguments
                let args = [...arguments];

                /* Logic
                        If
                            there is an Argument.
                */
                if (args.length > 0) {
                    // Initialization > Data
                    let data = args[0];

                    /* Logic
                            [if:else if:else statement]
                    */
                    if (typeof data == 'string' && args.length > 1)
                        /* Loop
                                [for statement]

                            > Update > Data
                        */
                        for (let i in args.slice(1))
                            data = data.replace('{' + i + '}', args.slice(1)[i]);

                    // Console > Log
                    console.log(data + '\0')
                }

                else
                    // Console > Log
                    console.log('\0')
            });

        // Copy
        (typeof copy == 'function') || Object.defineProperty(Window.prototype, 'copy', {
            // Value
            value: function copy() {
                /* Logic
                        [if:else if:else statement]

                        --- NOTE ---
                            @lapys: A conditional may be needed.
                */
                if (!0 || document.queryCommandEnabled('copy')) {
                    // Initialization > Design Mode
                    let designMode = document.designMode;

                    // Modification > Document > Design Mode
                    document.designMode = 'on';

                    /* Initialization > (Data, Arguments)
                            --- NOTE ---
                                @lapys: We use a <textarea> because it can contain some
                                    additional characters that an <input> element just can not (e.g.: newlines).
                    */
                    let data = document.createElement('textarea'),
                        args = [...arguments];

                    // Modification > Data
                        // Content Editable
                        data.contentEditable = !0;

                        // Inner HTML
                        !('innerHTML' in data) || (data.innerHTML = data.innerHTML || '');

                        // Value
                        data.setAttribute('value', args.length > 0 ? String(args[0]) : '');
                        !('value' in data) || (data.value = args.length > 0 ? String(args[0]) : '');

                    // Insertion
                    document.body.appendChild(data);

                    // Data > (Focus, Select)
                    data.focus();
                    select(data);

                    // Document > Execute Command
                    document.execCommand('copy', !1, null);

                    // Data > Blur
                    data.blur();

                    // Deletion
                    document.body.removeChild(data);

                    // Modification > Document > Design Mode
                    document.designMode = designMode
                }
            }
        });

        // Cut
        (typeof cut == 'function') || Object.defineProperty(Window.prototype, 'cut', {
            // Value
            value: function cut() {
                /* Logic
                        [if:else if:else statement]

                        --- NOTE ---
                            @lapys: A conditional may be needed.
                */
                if (!0 || document.queryCommandEnabled('cut')) {
                    // Initialization > Design Mode
                    let designMode = document.designMode;

                    // Modification > Document > Design Mode
                    document.designMode = 'on';

                    // Initialization > Data
                    let data = arguments[0];

                    // Modification > Data
                        // Content Editable
                        data.contentEditable = !0;

                        // Inner HTML
                        !('innerHTML' in data) || (data.innerHTML = data.innerHTML || '');

                        // Value
                        !('value' in data) || (data.value = data.value || '');

                    // Data > (Focus, Select)
                    data.focus();
                    select(data);

                    // Document > Execute Command
                    document.execCommand('cut', !1, null);

                    // Data > Blur
                    data.blur();

                    // Modification > Document > Design Mode
                    document.designMode = designMode
                }
            }
        });

        // Create Document Fragment
        (typeof createDocumentFragment == 'function') || Object.defineProperty(Window.prototype, 'createDocumentFragment', {
            // Value
            value: function createDocumentFragment() {
                // Error Handling
                try {
                    // Initialization > (Arguments, Data)
                    let args = [...arguments],
                        data = document.createDocumentFragment();

                    /* Logic
                            If
                                Argument 0 is a String,

                            else if
                                Argument 0 is an Element.
                    */
                    if (typeof args[0] == 'string') {
                        // Insertion
                        (document.body || document.documentElement).appendChild(LapysJS.tmp = document.createElement(typeof args[1] == 'string' ? args[1] : 'html'));

                        // Modification > (LapysJS > Temporary Data) > Inner HTML
                        LapysJS.tmp.innerHTML = args[0];

                        /* Loop
                                While
                                    the Temporary Data still has a child element.

                            > Insertion
                        */
                        while (LapysJS.tmp.children[0])
                            data.appendChild(LapysJS.tmp.children[0]);

                        // Deletion
                        LapysJS.tmp.remove()
                    }

                    else if ((args[0] || new (function LapysJSObject() {})).nodeType == 1)
                        // Insertion
                        data.appendChild(args[0]);

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
        (typeof createElement == 'function') || Object.defineProperty(Window.prototype, 'createElement', {
            // Value
            value: function createElement() {
                // Error Handling
                try {
                    // Initialization > (Arguments, Data)
                    let args = [...arguments],
                        data = document.createElement(args[0]);

                    // Modification > Data
                        // CSS Selector
                        data.CSSSelector = String(args[1] || '');

                        // Inner HTML
                        data.innerHTML = args[2] || '';

                    /* Loop
                            [for statement]
                    */
                    for (let i in (args.length > 2 ? args[3] : 0))
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (isObject(args[3][i]) && !args[4])
                            /* Loop
                                    [for statement]

                                > Update > Data
                            */
                            for (let j in args[3][i])
                                data[i][j] = args[3][i][j];

                        else
                            // Update > Data
                            data[i] = args[3][i];

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
        (typeof createObject == 'function') || Object.defineProperty(Window.prototype, 'createObject', {
            // Value
            value: function createObject() {
                // Initialization > (Arguments, Data, Metadata)
                let args = [...arguments],
                    data = args.length > 0 ? args[0] : {},
                    metadata = typeof args[1] == 'object' ? args[1] : {};

                if (args.length > 1)
                    /* Loop
                            [for statement]
                    */
                    for (let i in metadata)
                        // Error Handling
                        try {
                            // Update > Data
                            data[i] = metadata[i]
                        }

                        catch (error) {
                            // LapysJS > Error
                            LapysJS.error(error)
                        }

                else
                    data = Object(args[0]);

                // Return
                return data
            }
        });

        /* Delete Class List
                --- NOTE ---
                    @lapys: Remove a set of re-usable class names
                        for DOM elements.
        */
        (typeof delClassList == 'function') || Object.defineProperty(Window.prototype, 'delClassList', {
            // Value
            value: function delClassList() {
                // Initialization > Arguments
                let args = [...arguments];

                /* Logic
                        If
                            there are less than 2 Arguments.
                */
                if (args.length < 2)
                    // Deletion
                    delete classList[String(args[0])];

                else
                    /* Logic
                            If
                                Argument 1 is an element.
                    */
                    if ((args[1] || new (function LapysJSObject() {})).nodeType == 1)
                        /* Loop
                                Index the requested Class List.

                            > Modification > [Argument 1] > Class
                        */
                        for (let i of classList[String(args[0])].split(/ /g))
                            args[1].delClass(i);

                    else
                        // LapysJS > Error
                        LapysJS.error('$c$element_1', args[1]);

                // Return
                return args.length < 2 ? classList : args[1]
            }
        });

        // Date
        ((window.date || new (function LapysJSObject() {})).constructor == Date) || Object.defineProperty(Window.prototype, 'date', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function date() {
                // Return
                return window.Date ? new Date : null
            }
        });

        // Decimal Point, Precision
            // Initialization > Temporary Data
            let temporaryData = ['dp', 'prec'];

            /* Loop
                    [for statement]
            */
            for (let i in temporaryData) {
                // Initialization > Data
                let data = temporaryData[i];

                // Execution
                eval(
                    // Definition > (Decimal Point, Precision)
                    "(typeof " + data + " == 'function') || Object.defineProperty(window, '" + data + "', {" +
                        // Value
                        "value: function " + data + "() {" +
                            // Initialization > Arguments
                            'let args = [...arguments];' +

                            // Return
                            'return ' + ['parseFloat', 'String'][i] + '(args[0] .' + ['toFixed', 'toPrecision'][i] + "(Math.abs(+String((args[1] < 21) || 20).replace('true', args[1]))))" +
                        '}' +
                    '})'
                )
            }

        /* Event
                --- NOTE ---
                    @lapys: Other properties within this 'event' variable are to prevent
                        errors in some cases.
        */
        var event = window.event || (typeof document.createEvent == 'function' ? document.createEvent('HTMLEvents') : document.createEventObject()) || new (window.Event || class Event {})('');
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

        // Execute Command
        (typeof execCommand == 'function') || Object.defineProperty(Window.prototype, 'execCommand', {
            // Value
            value: function execCommand() {
                // Return
                return document.execCommand.apply(document, [...arguments])
            }
        });

        // Float
        (typeof float == 'function') || Object.defineProperty(Window.prototype, 'float', {value: Number.parseFloat});

        // Floor
        (typeof floor == 'function') || (window.floor = function floor() {
            // Initialization > Arguments
            let args = [...arguments];

            // Return
            return Math[String(!args[1] || 'ceil').replace('true', 'floor')].apply(Math, args.slice(2).addElement(args[0]))
        });

        /* Function
                --- WARN ---
                    @lapys: The 'args' variable must not be used here as the 'eval' function
                        allows private data to be accessed.
        */
        Object.defineProperty(Window.prototype, 'func', {
            // Value
            value: function func() {
                // Update > LapysJS > Temporary Data
                LapysJS.tmp = Math.random();

                /* Logic
                        If
                            Argument 0 is not a Function.

                    > Error Handling
                */
                if (typeof arguments[0] != 'function')
                    try {
                        // Execution
                        eval('LapysJS.permanentData["function:' + LapysJS.tmp + '"] = (function ' + (arguments[0] || '') + '(' + (arguments[1] || '') + ') {' + (arguments[2] || '') + '})')
                    }

                    catch (error) {
                        // Error Handling
                        try {
                            // Execution
                            eval('LapysJS.permanentData["function:' + LapysJS.tmp + '"] = (function ' + (arguments[0] || '') + '(' + (arguments[1] || '') + '\n) {' + (arguments[2] || '') + '})')
                        }

                        catch (error) {
                            // Error Handling
                            try {
                                // Execution
                                eval('LapysJS.permanentData["function:' + LapysJS.tmp + '"] = (function ' + (arguments[0] || '') + '(' + (arguments[1] || '') + ') {' + (arguments[2] || '') + '\n})')
                            }

                            catch (error) {
                                // Execution
                                eval('LapysJS.permanentData["function:' + LapysJS.tmp + '"] = (function ' + (arguments[0] || '') + '(' + (arguments[1] || '') + '\n) {' + (arguments[2] || '') + '\n})')
                            }
                        }
                    }

                // Set Timeout
                setTimeout(function() {
                    // Deletion
                    delete LapysJS.permanentData['function:' + String(LapysJS.tmp)]
                });

                // Return
                return LapysJS.permanentData['function:' + String(LapysJS.tmp)] || null
            }
        });

         // Get Class List
        (typeof getClassList == 'function') || Object.defineProperty(Window.prototype, 'getClassList', {
            // Value
            value: function getClassList() {
                // Initialization > Arguments
                let args = [...arguments];

                // Return
                return new (function ClassList() {
                    // Initialization > Target
                    let that = this;

                    // Modification > Target
                        // Primitive Value
                        that['[[PrimitiveValue]]'] = classList[String(args[0])];

                        // To String
                        Object.defineProperty(that, 'toString', {
                            // Value
                            value: function toString() {
                                // Return
                                return String(that['[[PrimitiveValue]]'])
                            }
                        });

                        // Value Of
                        Object.defineProperty(that, 'valueOf', {
                            // Value
                            value: function valueOf() {
                                // Return
                                return that['[[PrimitiveValue]]']
                            }
                        })
                })
            }
        });

        // Get Query String By Name
        (typeof getQueryParameterByName == 'function') || Object.defineProperty(Window.prototype, 'getQueryParameterByName', {
            // Value
            value: function getQueryParameterByName() {
                // Initialization > Arguments
                let args = [...arguments];

                // Initialization > (Data, Metadata)
                let data = RegExp('[?&]' + args[0] + '(=([^&#]*)|&|#|$)'),
                    metadata = data.exec((args[1] || location.href).replace(/[\[\]]/g, '\\$&'));

                /* Logic
                        [if:else if:else statement]

                    > Return
                */
                if (!metadata)
                    return null;

                else if (!metadata[2])
                    return '';

                // Return
                return decodeURIComponent(metadata[2].replace(/\+/g, ' '))
            }
        });

        /* Global
                --- CHECKPOINT ---
                    @lapys: Continuing improving the best way you can from here.
                        I believe in you. :)

                --- NOTE ---
                    @lapys: Allow a reference name for the global object.
        */
        ((window.global || new (function LapysJSObject() {})).constructor == Window) || Object.defineProperty(Window.prototype, 'global', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function global() {
                // Return
                return window
            }
        });

        // Integer
        (typeof int == 'function') || Object.defineProperty(Window.prototype, 'int', {value: Number.parseInt});

        // Interval
        (typeof interval == 'function') || Object.defineProperty(Window.prototype, 'interval', {
            // Value
            value: function interval() {
                // Initialization > Arguments
                let args = [...arguments];

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
                                        args[0].call(null)
                                    }

                                    catch (error) {
                                        // Update > Data
                                        data[1] = 0;

                                        // LapysJS > Error
                                        LapysJS.error(error)
                                    }
                                }
                            }
                        }(args[1], args[2]);

                        // Set Timeout
                        setTimeout(intervalFunction, args[1])
                    }

                    else
                        // Set Timeout
                        setTimeout(function intervalFunction() {
                            // Function > args 0
                            args[0].call(null);

                            // Request Animation Frame
                            requestAnimationFrame(function() {
                                // Set Timeout
                                setTimeout(intervalFunction, args[1])
                            })
                        }, args[1])
            }
        });

        /* Is Object
                --- NOTE ---
                    @lapys: This function is meant for development purposes only.
                        It evaluates a value on if it is an object or not
                        and either calls a given function or alternative value.
        */
        var isObject = function isObject() {
            // Initialization > (Arguments, Data, Metadata)
            let args = [...arguments],
                data = args[0],
                metadata;

            // Error Handling
            try {
                // Update > Metadata
                metadata = typeof args[1] == 'function' ? args[1]() : args[1]
            }

            catch (error) {
                // LapysJS > Warn
                LapysJS.warn(error);

                // Update > Metadata
                metadata = args[1]
            }

            /* Logic
                    [if:else if:else statement]

                > Return
            */
            if (data === null || data === void 0)
                return metadata;

            // Return
            return (
                data.constructor !== Array &&
                data.constructor !== Boolean &&
                data.constructor !== Function &&
                data.constructor !== Number &&
                data.constructor !== RegExp &&
                data.constructor !== String &&
                data.constructor !== window.Symbol
            ) ? (metadata || !0) : !1
        };

        // Length
        (typeof len == 'function') || Object.defineProperty(Window.prototype, 'len', {
            // Value
            value: function len() {
                // Initialization > Arguments
                let args = [...arguments];

                // Return
                return (args[0] || new (function LapysJSObject() {})).constructor == HTMLAllCollection ? args[0].length : (+String((typeof args[0] != 'number') || args[0]).replace('true', eval(String((typeof (args[0] || {length: ''}).length != 'number') || args[0].length).replace('true', void 0))))
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
                // Initialization > (Data, Target)
                let data = [],
                    that = this;

                /* Logic
                        [if:else if:else statement]
                */
                if ((that.search || '').trim()) {
                    // Initialization > Metadata
                    let metadata = that.search.replace('?', '').replace(/&/g, ',').split(/,/g);

                    /* Loop
                            [for statement]
                    */
                    for (let i of metadata)
                        // Update > Data
                        data.push({
                            // Name
                            name: i.slice(0, i.indexOf('=')),

                            // Value
                            value: i.slice(i.indexOf('=') + '='.length)
                       });
                }

                // Return
                return data
            }
        });

        // Log
        (typeof log == 'function') || (window.log = console.log);

        // Log Line
        (typeof logl == 'function') || (window.logl = console.print);

        /* JSON
                --- NOTE ---
                    @lapys: The fallback object is to identify that the JSON object is actually a fallback.
        */
        var JSON = window.JSON || new (function JSON() {
            // Fallback
            this.fallback = !0;

            // Parse
            this.parse = function() {};

            // Stringify
            this.stringify = function() {}
        });
            /* Fallback
                    --- NOTE ---
                        @lapys: This property is also to define that the default JSON object is not a fallback.
            */
            JSON.fallback || (JSON.fallback = !1);

        // Math
            // Average
            !window.Math || (typeof Math.avg == 'function') || Object.defineProperty(Math, 'avg', {
                // Value
                value: function average() {
                    // Return
                    return Math.stat.aMean.apply(Math.stat, [...arguments])
                }
            });

            /* Evaluate
                    --- UPDATE REQUIRED ---
                        @lapys: Should evaluate strings of deeper math.
            */
            !window.Math || (typeof Math.eval == 'function') || Object.defineProperty(Math, 'eval', {
                // Value
                value: function evaluate() {
                    // Execution
                    eval(String(arguments[0]))
                }
            });

            // Invert
            !window.Math || (typeof Math.invert == 'function') || Object.defineProperty(Math, 'invert', {
                // Value
                value: function invert() {
                    // Return
                    return 1 / arguments[0]
                }
            });

            // Invert
            !window.Math || Object.defineProperty(Math, 'stat', {
                // Value
                value: new (function MathStatistics() {
                    // Modification > Object
                        // Arithmetic Mean
                        (typeof this.constructor.prototype.aMean == 'function') || Object.defineProperty(this.constructor.prototype, 'aMean', {
                            // Value
                            value: function arithmeticMean() {
                                // Initialization > (Arguments, Data)
                                let args = [...arguments],
                                    data = 0;

                                /* Loop
                                        [for statement]

                                    > Update > Data
                                */
                                for (let i of args)
                                    data += i;

                                // Return
                                return data / args.length
                            }
                        });

                        // Coefficient of Skewness
                        (typeof this.constructor.prototype.skewCoeff == 'function') || Object.defineProperty(this.constructor.prototype, 'skewCoeff', {
                            // Value
                            value: function coefficientOfSkewness() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                // Return
                                return [(that.aMean.apply(that, args) - that.mode.apply(that, args)) / that.sDev.apply(that, args), (3 * (that.aMean.apply(that, args) - that.median.apply(that, args))) / that.sDev.apply(that, args)]
                            }
                        });

                        // Coefficient of Variation
                        (typeof this.constructor.prototype.varCoeff == 'function') || Object.defineProperty(this.constructor.prototype, 'varCoeff', {
                            // Value
                            value: function coefficientOfVariation() {
                                // Initialization > (Arguments, Target)
                                let args = [...arguments],
                                    that = this;

                                // Return
                                return (that.var.apply(that, args) / that.aMean.apply(that, args)) * 100
                            }
                        });

                        // Geometric Mean
                        (typeof this.constructor.prototype.gMean == 'function') || Object.defineProperty(this.constructor.prototype, 'gMean', {
                            // Value
                            value: function geometricMean() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 1,
                                    metadata = args.length;

                                /* Loop
                                        [for statement]

                                    > Update > Data
                                */
                                for (let i of args)
                                    data *= i;

                                // Return
                                return Math.pow(data, 1 / metadata)
                            }
                        });

                        // Harmonic Mean
                        (typeof this.constructor.prototype.hMean == 'function') || Object.defineProperty(this.constructor.prototype, 'hMean', {
                            // Value
                            value: function harmonicMean() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 0;

                                /* Loop
                                        [for statement]

                                    > Update > Data
                                */
                                for (let i of args)
                                    data += 1 / i;

                                // Return
                                return args.length / data
                            }
                        });

                        // Mean Absolute Deviation
                        (typeof this.constructor.prototype.mad == 'function') || Object.defineProperty(this.constructor.prototype, 'mad', {
                            // Value
                            value: function meanAbsoluteDeviation() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 0,
                                    metadata = this.aMean.apply(this, args);

                                /* Loop
                                        [for statement]

                                    > Update > Data
                                */
                                for (let i of args)
                                    data += Math.abs(i - metadata);

                                // Return
                                return data / args.length
                            }
                        });

                        // Median
                        (typeof this.constructor.prototype.median == 'function') || Object.defineProperty(this.constructor.prototype, 'median', {
                            // Value
                            value: function median() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // Return
                                return args.sort()[parseInt(args.length / 2)]
                            }
                        });

                        // Mode
                        (typeof this.constructor.prototype.mode == 'function') || Object.defineProperty(this.constructor.prototype, 'mode', {
                            // Value
                            value: function mode() {
                                // Return
                                return [...arguments].getCommonElement()
                            }
                        });

                        // Standard Deviation
                        (typeof this.constructor.prototype.sDev == 'function') || Object.defineProperty(this.constructor.prototype, 'sDev', {
                            // Value
                            value: function standardDeviation() {
                                // Return
                                return Math.sqrt(this.var.apply(this, [...arguments]))
                            }
                        });

                        // Variance
                        (typeof this.constructor.prototype.var == 'function') || Object.defineProperty(this.constructor.prototype, 'var', {
                            // Value
                            value: function variance() {
                                // Initialization > (Arguments, Data, Metadata)
                                let args = [...arguments],
                                    data = 0,
                                    metadata = this.aMean.apply(this, args);

                                /* Loop
                                        [for statement]

                                    > Update > Data
                                */
                                for (let i of args)
                                    data += Math.pow(i - metadata, 2);

                                // Return
                                return data / ~-args.length
                            }
                        })
                })
            });

            // Random > Range
            !window.Math || (typeof (Math.random || new (function LapysJSObject() {})).range == 'function') || Object.defineProperty(Math.random, 'range', {
                // Value
                value: function range() {
                    // Initialization > (Arguments, Data)
                    let args = [...arguments],
                        data = this() * (max(parseFloat(args[0]), parseFloat(args[1])) - min(parseFloat(args[0]), parseFloat(args[1]))) + min(parseFloat(args[0]), parseFloat(args[1]));

                    // Return
                    return +String((data < (max(parseFloat(args[0]), parseFloat(args[1]))) + 1) || max(parseFloat(args[0]), parseFloat(args[1]))).replace('true', String((data > ~-min(parseFloat(args[0]), parseFloat(args[1]))) || min(parseFloat(args[0]), parseFloat(args[1]))).replace('true', data))
                }
            });

            // Range
            !window.Math || (typeof Math.range == 'function') || Object.defineProperty(Math, 'range', {
                // Value
                value: function range() {
                    // Initialization > Arguments
                    let args = [...arguments];

                    // Return
                    return max.apply(window, args) - min.apply(window, args)
                }
            });

            // Root
            !window.Math || (typeof Math.root == 'function') || Object.defineProperty(Math, 'root', {
                // Value
                value: function root() {
                    // Initialization > Arguments
                    let args = [...arguments];

                    // Return
                    return Math.pow(parseFloat(args[0]), (1 / parseFloat(args[1])))
                }
            });

        // Maximum
            // Initialization
            Object.defineProperty(Window.prototype, 'max', {
                // Value
                value: function max() {
                    /* Initialization > Result
                            --- WARN ---
                                @lapys: The Data collected must be strictly an Array.
                    */
                    let args = [...arguments],
                        result = (args[0] || {length: ''}).length || args[0];

                    /* Loop
                            Index Arguments.

                        > Update > Result
                    */
                    for (let i of args)
                        (result > ~-((i || {length: ''}).length || i)) || (result = (i || {length: ''}).length || i);

                    // Return
                    return result
                }
            });
                // Modification > Get Object
                Object.defineProperty(Window.prototype.max, 'getObject', {
                    // Value
                    value: function getObject() {
                        // Initialization > Arguments
                        let args = [...arguments];

                        /* Loop
                                Index Arguments.
                        */
                        for (let i in args)
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (max.apply(this, args) === ((args[i] || {length: ''}).length || args[i])) {
                                // Return
                                return args[i];

                                // Break
                                break
                            }
                    }
                });

        // Min
            // Initialization
            Object.defineProperty(Window.prototype, 'min', {
                // Value
                value: function min() {
                    /* Initialization > (Arguments, Result)
                            --- WARN ---
                                @lapys: The Data collected must be strictly an Array.
                    */
                    let args = [...arguments],
                        result = (args[0] || {length: ''}).length || args[0];

                    /* Loop
                            Index Arguments.

                        > Update > Result
                    */
                    for (let i of args)
                        (result < ((i || {length: ''}).length || i) + 1) || (result = (i || {length: ''}).length || i);

                    // Return
                    return result
                }
            });
                // Modification > Get Object
                Object.defineProperty(Window.prototype.min, 'getObject', {
                    // Value
                    value: function getObject() {
                        // Initialization > (Arguments, Data)
                        let args = [...arguments],
                            data = min.apply(this, args);

                        /* Loop
                                Index Arguments.
                        */
                        for (let i in args)
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (min.apply(this, args) === ((args[i] || {length: ''}).length || args[i])) {
                                // Return
                                return args[i];

                                // Break
                                break
                            }
                    }
                });

        // Name
        (typeof name == 'string') || (window.name = document.title);

        /* Parse Number
                --- NOTE ---
                    @lapys: Useful for converting measurements to raw numbers.
        */
        (typeof parseNumber == 'function') || Object.defineProperty(Window.prototype, 'parseNumber', {
            // Value
            value: function parseNumber() {
                // Initialization > Arguments
                let args = [...arguments];

                // Return
                return +(String(args[0]).replace(/ /g, '').replace(String(args[0]).replace(/[0-9]|\.|\-/g, ''), '').replace('-', '*').replace(/\-/g, '').replace('*', '-')) || 0
            }
        });

        // Number
            // Initialization
            Object.defineProperty(Window.prototype, 'number', {
                // Value
                value: function number() {
                    // Return
                    return parseNumber.apply(this, [...arguments])
                }
            });
                // Modification
                    // Float
                    (typeof number.float == 'function') || Object.defineProperty(Window.prototype.number, 'float', {
                        // Value
                        value: function float() {
                            // Return
                            return parseFloat(parseNumber(arguments[0]))
                        }
                    });

                    // Integer
                    (typeof number.int == 'function') || Object.defineProperty(Window.prototype.number, 'int', {
                        // Value
                        value: function int() {
                            // Return
                            return parseInt(parseNumber(arguments[0]))
                        }
                    });

                // Definition
                window.num = number.bind({});
                    // Deletion
                    delete num.float;
                    delete num.int;

            /* Percent */
            (typeof Number.prototype.perc == 'function') || Object.defineProperty(Number.prototype, 'perc', {
                // Value
                value: function percent() {
                    // Initialization > Arguments
                    let args = [...arguments];

                    // Return
                    return args.length > 0 ? this * (args[0] / 100) : 0
                }
            });

        // Object
        Object.defineProperty(Window.prototype, 'obj', {
            // Value
            value: function object() {
                // Return
                return Object.apply(this, [...arguments])
            }
        });

        // On (DOM, Node) Change
            // Update > Temporary Data
            temporaryData = ['onDOMChange', 'onNodeChange'];

            /* Loop
                    Index Temporary Data.
            */
            for (let i in temporaryData) {
                // Initialization > Data
                let data = temporaryData[i];

                // Execution
                eval(
                    '(typeof ' + data + " == 'function') || Object.defineProperty(Window.prototype, '" + data + "', {" +
                        // Value
                        'value: function ' + data + '() {' +
                            // Initialization > Arguments
                            'let args = [...arguments];' +

                            // Update > Argument 0
                            "(typeof args[0] != 'string') || (args[0] = func('', '', '(function() {var args=void 0;\\n' + args[0] + '\\n})()'));" +

                            // Error Handling
                            'try {' +
                                // Initialization > Target
                                'let that = this;' +

                                // Function > Argument (0 | 1)
                                ['args[0]', 'args[1]'][i] + '.apply(that, args.slice(' + [1, 2][i] + '));' +

                                // Mutation Observer
                                'new MutationObserver(function() {' +
                                    // Argument (0 | 1)
                                    ['args[0]', 'args[1]'][i] + '.apply(that, args.slice(' + [1, 2][i] + '))' +
                                '}).observe(' + ['document.documentElement', 'args[0]'][i] + ', { attributes: !0, childList: !0, outerHTML: !0, subtree: !0 })' +
                            '}' +

                            'catch (error) {' +
                                /* Logic
                                        If
                                            Argument (0 | 1) is a function.
                                */
                                'if (typeof ' + ['args[0]', 'args[1]'][i] + " == 'function') {" +
                                    // Initialization > (Data, Metadata)
                                    'let data = ' + ['document.documentElement', 'args[0]'][i] + '.outerHTML,' +
                                        'metadata = data;' +

                                    // Update > Data
                                    'data = (' + ['document.documentElement', 'args[0]'][i] + "|| {outerHTML: ''}).outerHTML;" +

                                    // Function
                                        // Test
                                        'function test() {' +
                                            /* Logic
                                                    If
                                                        Data is not Metadata
                                            */
                                            'if (data != metadata) {' +
                                                // Argument (0 | 1)
                                                ['args[0]', 'args[1]'][i] + '.apply(this, args.slice(' + [1, 2][i] + '));' +

                                                // Update > Metadata
                                                'metadata = data' +
                                            '}' +
                                        '};' +
                                        'test();' +

                                        // Update
                                        '(function update() {' +
                                            // Test
                                            'test();' +

                                            // Request Animation Frame
                                            'requestAnimationFrame(update)' +
                                        '})()' +
                                '}' +
                            '}' +
                        '}' +
                    '})'
                )
            }

        // On DOM Node (Added, Count Change, Removed)
            // Update > Data
            temporaryData = [
                ['onDOMNodeAdded', 'onDOMNodeCountChange', 'onDOMNodeRemoved'],
                ['onNodeAdded', 'onNodeCountChange', 'onNodeRemoved']
            ];

            /* Loop
                    Index Temporary Data.
            */
            for (let i in temporaryData) {
                // Initialization > Data
                let data = temporaryData[i];

                /* Loop
                        Index Data.
                */
                for (let j in data) {
                    // Initialization > Metadata
                    let metadata = data[j];

                    // Execution
                    eval(
                        '(typeof ' + metadata + " == 'function') || Object.defineProperty(Window.prototype, '" + metadata + "', {" +
                            // Value
                            'value: function ' + metadata + '() {' +
                                // Initialization > Arguments
                                'let args = [...arguments];' +

                                // Update > Argument 0
                                "(typeof args[" + (metadata.startsWith('onNode') ? 1 : 0) + "] != 'string') || (args[" + (metadata.startsWith('onNode') ? 1 : 0) + "] = func('', '', '(function() {var args=void 0;\\n' + args[" + (metadata.startsWith('onNode') ? 1 : 0) + "] + '\\n})()'));" +

                                (metadata == 'onDOMNodeCountChange' || metadata == 'onNodeCountChange' ? 'try {' +
                                    // Initialization > Target
                                    'let that = this;' +

                                    // Argument (0 | 1)
                                    ['args[0]', 'args[1]'][i] + '.apply(this, args.slice(' + [1, 2][i] + '));' +

                                    // Mutation Observer
                                    'new MutationObserver(function() {' +
                                        ['args[0]', 'args[1]'][i] + '.apply(this, args.slice(' + [1, 2][i] + '))' +
                                    '}).observe(' + ['document.documentElement', 'args[0]'][i] + ', { childList: !0, outerHTML: !0, subtree: !0 })' +
                                '}' +
                                'catch(error) {' : '') +

                                /* Logic
                                        If
                                            Argument 0 is a function.
                                */
                                'if (typeof ' + ['args[0]', 'args[1]'][i] + " == 'function') {" +
                                    // Initialization > (Data, Metadata)
                                    'let data = ' + ['document', 'args[0]'][i] + ".getElementsByTagName('*').length," +
                                        'metadata = data;' +

                                    // Function
                                        // Test
                                        'function test() {' +
                                            // Update > Data
                                            'data = ' + ['document', 'args[0]'][i] + ".getElementsByTagName('*').length;" +

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            'if (data ' + [['>', '!=', '<'], ['>', '!=', '<']][i][j] + ' metadata) {' +
                                                // Argument 0
                                                ['args[0]', 'args[1]'][i] + '.apply(this, args.slice(' + [1, 2][i] + '));' +

                                                // Update > Metadata
                                                'metadata = data' +
                                            '}' +
                                        '};' +
                                        'test();' +

                                        // Update
                                        '(function update() {' +
                                            // Test
                                            'test();' +

                                            // Request Animation Frame
                                            'requestAnimationFrame(update)' +
                                        '})()' +
                                '}' +
                                (metadata === 'onDOMNodeCountChange' || metadata === 'onNodeCountChange' ? '}' : '') +
                            '}' +
                        '})'
                    )
                }
            }

        // On DOM Ready
        (typeof Window.prototype.onDOMReady == 'function') || Object.defineProperty(Window.prototype, 'onDOMReady', {
            // Value
            value: function onDOMReady() {
                // Initialization > (Argument, Data, Metadata)
                let args = [...arguments],
                    data = parseFloat(args[1]),
                    metadata = typeof args[0] == 'string' ? func('', '', '(function() {var args = void 0;\n' + args[0] + '\n})()') : args[0];

                // Function > Main
                function main() {
                    // Argument 0( | Set Timeout)
                    !arguments[0] ? ((document.readyState != 'complete') || metadata()) : (data > 0 ? setTimeout(metadata, data) : metadata())
                };

                // (Set Timeout | Main) | (Event > Document)
                document.readyState == 'complete' && typeof metadata == 'function' ?
                    main(!0) :

                    // DOM Content Loaded | On Ready State Change
                    typeof document.addEventListener == 'function' ?
                        document.addEventListener('DOMContentLoaded', function() {
                            // Set Timeout | Main
                            main(!0)
                        }) :
                        document.attachEvent('onreadystatechange', function() {
                            // Set Timeout | Main
                            data > 0 ? setTimeout(main, data) : main()
                        })
            }
        });

        /* Paste
                --- UPDATE REQUIRED ---
                    @lapys: Should actually work.
        */
        (typeof paste == 'function') || Object.defineProperty(Window.prototype, 'paste', {
            // Value
            value: function paste() {
                /* Logic
                        [if:else if:else statement]
                */
                if (document.queryCommandEnabled('paste')) {
                    // Initialization > Design Mode
                    let designMode = document.designMode;

                    // Modification > Document > Design Mode
                    document.designMode = 'on';

                    // Initialization > Data
                    let data = arguments[0];

                    // Modification > Data
                        // Content Editable
                        data.contentEditable = !0;

                        // Inner HTML
                        !('innerHTML' in data) || (data.innerHTML = (data.innerHTML || '') + (window.clipboardData || {getData: String}).getData('Text'));

                        // Value
                        !('value' in data) || (data.value = (data.value || '') + (window.clipboardData || {getData: String}).getData('Text'));

                    // Data > (Focus, Select)
                    data.focus();
                    select(data);

                    // Document > Execute Command
                    document.execCommand('paste', !1, null);

                    // Data > Blur
                    data.blur();

                    // Modification > Document > Design Mode
                    document.designMode = designMode
                }
            }
        });

        // Percent
        (typeof perc == 'function') || Object.defineProperty(Window.prototype, 'perc', {
            // Value
            value: function percent() {
                // Return
                return parseNumber(arguments[0]).perc(arguments[1])
            }
        });

        // PI
        (typeof PI == 'number') || Object.defineProperty(Window.prototype, 'PI', {
            // Value
            value: Math.PI
        });

        // Power
        (typeof pow == 'function') || Object.defineProperty(Window.prototype, 'pow', {
            // Value
            value: function pow() {
                // Return
                return Math.pow(arguments[0], arguments[1])
            }
        });

        // Process
        (typeof process == 'function') || Object.defineProperty(Window.prototype, 'process', {
            // Value
            value: function process() {
                // Return
                return parseNumber(arguments[0]).perc(arguments[1])
            }
        });

        // Random
        (typeof rand == 'function') || Object.defineProperty(Window.prototype, 'rand', {
            // Value
            value: function random() {
                // Initialization > Arguments
                let args = [...arguments];

                /* Logic
                        [if:else if:else statement]

                    > Update > (Argument 0, Arguments)
                */
                if (args.length == 1) {
                    args.push(args[0] + 1);
                    args[0] -= 1
                }

                // Return
                return args.length > 2 ? (function() {
                    /* Logic
                            [switch:case:default statement]

                        > Return
                    */
                    switch (args[2]) {
                        // Boolean
                        case 'bool':
                            return (Math.random() * 10) > 5 ? parseNumber(args[0]) : parseNumber(args[1]);

                        // [Default]
                        default:
                            return parseFloat(String(!!args[1] || Math.random()).replace('true', Math.random.range(args[0], args[1])))
                    }
                })() : parseFloat(String(!!args[1] || Math.random()).replace('true', Math.random.range(args[0], args[1])))
            }
        });

        // Range
        (typeof range == 'function') || Object.defineProperty(Window.prototype, 'range', {
            // Value
            value: function range() {
                // Initialization > Arguments
                let args = [...arguments];

                // Return
                return max.apply(window, args) - min.apply(window, args)
            }
        });

        // Redirect
        (typeof redirect == 'function') || Object.defineProperty(Window.prototype, 'redirect', {
            // Value
            value: function redirect() {
                // Location > Assign
                !arguments[0] || (location || {assign: (function() {})}).assign(String(arguments[0]))
            }
        });

        // Regular Expression
        Object.defineProperty(Window.prototype, 'regex', {
            // Value
            value: function regex() {
                // Return
                return RegExp.apply(this, arguments)
            }
        });
            // Definition
            window.reg = regex;

        // Register Element
        (typeof registerElement == 'function') || Object.defineProperty(Window.prototype, 'registerElement', {
            // Value
            value: function registerElement() {
                // Initialization > Arguments
                let args = [...arguments],
                    data = (args[0] || new (function LapysJSObject() {})).constructor == Array ? args[0][0] : args[0];

                // Function > Execute
                function execute() {
                    let metadata = arguments[0];

                    'define' in window.customElements ?
                        customElements.define.apply(customElements, metadata) :
                        (typeof document.registerElement == 'function' ?
                            document.registerElement.apply(document, metadata) :
                            LapysJS.error(data + 'could not be added to the `CustomElementRegistry` because CustomElements are not yet supported in this browser.')
                        )
                };

                /* Logic
                        [if:else if:else statement]
                */
                if (args.length > 0) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (
                        (args[0] || new (function LapysJSObject() {})).constructor != Array &&
                        (args[1] || new (function LapysJSObject() {})).constructor != Array
                    ) {
                        // Initialization > Arguments Set
                        let argsSet = [String(args[0]), args[1] || class HTMLCustomElement extends HTMLElement {}, args[2] || void 0];

                        // Update > Arguments Set
                        argsSet.addElementToFront.apply(argsSet, args.slice(3));

                        // Execute
                        execute(argsSet)
                    }

                    else if (
                        (args[0] || new (function LapysJSObject() {})).constructor == Array &&
                        (args[1] || new (function LapysJSObject() {})).constructor == Array
                    )
                        /* Loop
                                [for statement]
                        */
                        for (let i = 0; i < max(args[0], args[1]); i += 1) {
                            // Initialization > Arguments Set
                            let argsSet = [String(args[0][i]), args[1][i] || class HTMLCustomElement extends HTMLElement {}, (args[2] || [])[i]],
                                metadata = [],
                                alpha = args.slice(3);

                            for (let j in alpha)
                                metadata.push(alpha[j][i]);

                            // Update > Arguments Set
                            argsSet.addElementToFront.apply(argsSet, metadata);

                            // Execute
                            execute(argsSet)
                        }

                    else if (
                        (args[0] || new (function LapysJSObject() {})).constructor == Array &&
                        (args[1] || new (function LapysJSObject() {})).constructor != Array
                    )
                        for (let i in args[0]) {
                            // Initialization > Arguments Set
                            let argsSet = [String(args[0][i]), args[1] || class HTMLCustomElement extends HTMLElement {}, args[2]];

                            // Update > Arguments Set
                            argsSet.addElementToFront.apply(argsSet, args.slice(3));

                            // Execute
                            execute(argsSet)
                        }
                }

                // Return
                return !!window.CustomElementRegistry
            }
        });

        // Reload
        (typeof reload == 'function') || Object.defineProperty(Window.prototype, 'reload', {
            // Value
            value: function reload() {
                // Location > Reload
                location.reload.apply(location, [...arguments])
            }
        });

        // Repeat
        (typeof repeat == 'function') || Object.defineProperty(Window.prototype, 'repeat', {
            // Value
            value: function repeat() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args[0],
                    metadata = args[1],
                    that = this;

                // Update
                    // Metadata
                        // Error Handling
                        try {
                            metadata = typeof metadata == 'function' ? metadata() : parseNumber(metadata)
                        }

                        catch (error) {
                            metadata = parseNumber(metadata)
                        }

                    // Data
                    (typeof data != 'string') || (data = func('', 'index, limit', '(function() {delete args = void 0;' + data + '\n})()'));

                /* Logic
                        [if:else if:else statement]
                */
                if (
                    typeof data == 'function' &&
                    typeof metadata == 'number'
                ) {
                    // Initialization > Alpha
                    let alpha = args.slice(2);

                    // Function > Test
                    function test(index) {
                        // Data
                        data.apply(that, alpha.addElementToBack(index, metadata));

                        // Alpha
                        alpha = alpha.slice(2)
                    };

                    /* Logic
                            [if:else if:else statement]
                    */
                    if (metadata === Infinity) {
                        // Initialization > Count
                        let count = -1;

                        (function update() {
                            // Test
                            test(count += 1);

                            // Request Animation Frame
                            requestAnimationFrame(update)
                        })()
                    }

                    else
                        /* Loop
                                [for statement]
                        */
                        for (let i = 0; i < metadata; i += 1)
                            // Test
                            test(i)
                }
            }
        });

        // Request Animation Frame
        Window.prototype.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

        /* Round
                --- WARN ---
                    Should be defined after 'ceil' and 'floor' functions.
        */
        (typeof round == 'function') || Object.defineProperty(Window.prototype, 'round', {
            // Value
            value: Math.round
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

        // Scroll Height
        (typeof Window.prototype.scrollHeight == 'number') || Object.defineProperty(Window.prototype, 'scrollHeight', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function scrollHeight() {
                // Return
                return (document.scrollingElement || document.documentElement).scrollHeight
            }
        });

        // Scroll Width
        (typeof Window.prototype.scrollWidth == 'number') || Object.defineProperty(Window.prototype, 'scrollWidth', {
            // Configurable
            configurable: !0,

            // Enumerable
            enumerable: !0,

            // Get
            get: function scrollWidth() {
                // Return
                return (document.scrollingElement || document.documentElement).scrollWidth
            }
        });

        /* Set Class List
                --- NOTE ---
                    @lapys: Remove a set of re-usable class names
                        for DOM elements.
        */
        (typeof setClassList == 'function') || Object.defineProperty(Window.prototype, 'setClassList', {
            // Value
            value: function setClassList() {
                // Initialization > Arguments
                let args = [...arguments];

                /* Logic
                        If
                            Argument 1 is an element.
                */
                if ((args[1] || new (function LapysJSObject() {})).nodeType == 1) {
                    // Initialization > Data
                    let data = classList[String(args[0])].split(/ /g);

                    /* Loop
                            Index the requested Class List.

                        > Modification > Argument 1 > Class
                    */
                    for (let i of data)
                        args[1].addClass(i)
                }

                else
                    // LapysJS > Error
                    LapysJS.error('$c$element_1', args[1]);

                // Return
                return args[1]
            }
        });

        // Select
        (typeof select == 'function') || Object.defineProperty(Window.prototype, 'select', {
            // Value
            value: function select() {
                /* Logic
                        If
                            there is an Argument.
                */
                if (arguments.length > 0)
                    /* Logic
                            [if:else if:else statement]
                    */
                    if ((arguments[0] || new (function LapysJSObject() {})).nodeType == 1) {
                        // Initialization > (Data, Metadata)
                        let data = document.createRange(),
                            metadata = getSelection();

                        // Data > Select Node Contents
                        data.selectNodeContents(arguments[0]);

                        // Metadata > (Remove All Ranges, Add Range)
                        metadata.removeAllRanges();
                        metadata.addRange(data);

                        // Argument 0 > Select
                        (typeof arguments[0].select != 'function') || arguments[0].select();

                        // Return
                        return arguments[0]
                    }

                // Return
                return null
            }
        });

        /* Set Immediate
                --- NOTE ---
                    @lapys: This function is gotten from
                        'https://github.com/LapysDev/IntervalJS'
                        in its polyfill form
                            and
                        inspired by multiple third-party developers.
        */
        (function(a,b){"use strict";function c(t){"function"!=typeof t&&(t=new Function(""+t));for(var u=Array(arguments.length-1),v=0;v<u.length;v++)u[v]=arguments[v+1];var w={callback:t,arguments:u};return o[n]=w,r(n),n++}function d(t){delete o[t]}function e(t){var u=t.callback,v=t.arguments;switch(v.length){case 0:u();break;case 1:u(v[0]);break;case 2:u(v[0],v[1]);break;case 3:u(v[0],v[1],v[2]);break;default:u.apply(b,v)}}function f(t){if(p)setTimeout(f,0,t);else{var u=o[t];if(u){p=!0;try{e(u)}finally{d(t),p=!1}}}}function g(){r=function(t){process.nextTick(function(){f(t)})}}function h(){if(a.postMessage&&!a.importScripts){var t=!0,u=a.onmessage;return a.onmessage=function(){t=!1},a.postMessage("","*"),a.onmessage=u,t}}function j(){var t="setImmediate$"+Math.random()+"$",u=function(v){v.source===a&&"string"==typeof v.data&&0===v.data.indexOf(t)&&f(+v.data.slice(t.length))};a.addEventListener?a.addEventListener("message",u,!1):a.attachEvent("onmessage",u),r=function(v){a.postMessage(t+v,"*")}}function k(){var t=new MessageChannel;t.port1.onmessage=function(u){var v=u.data;f(v)},r=function(u){t.port2.postMessage(u)}}function l(){var t=q.documentElement;r=function(u){var v=q.createElement("script");v.onreadystatechange=function(){f(u),v.onreadystatechange=null,t.removeChild(v),v=null},t.appendChild(v)}}function m(){r=function(t){setTimeout(f,0,t)}}if(!a.setImmediate){var r,n=1,o={},p=!1,q=a.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(a);s=s&&s.setTimeout?s:a,"[object process]"==={}.toString.call(a.process)?g():h()?j():a.MessageChannel?k():q&&"onreadystatechange"in q.createElement("script")?l():m(),s.setImmediate=c,s.clearImmediate=d}})("undefined"==typeof self?"undefined"==typeof global?this:global:self);

        // Square Root
        (typeof sqrt == 'function') || Object.defineProperty(Window.prototype, 'sqrt', {
            // Value
            value: function sqrt() {
                // Return
                return Math.sqrt.apply(Math, [...arguments])
            }
        });

        /* Smooth Scroll By
                --- UPDATE REQUIRED ---
                    @lapys: Logic needs improvement.
        */
        (typeof Window.prototype.smoothScrollBy == 'function') || Object.defineProperty(Window.prototype, 'smoothScrollBy', {
            // Value
            value: function smoothScrollBy() {
                let data = typeof arguments[0] == 'number' ? smoothScrollTo({target: scrollY + parseNumber(arguments[0])}) : (isObject(arguments[0]) ? smoothScrollTo(arguments[0]) : LapysJS.error('$c$json_0', arguments[0]));
            }
        });

        /* Smooth Scroll To
                --- UPDATE REQUIRED ---
                    @lapys: Still needs polishing.
        */
        (typeof Window.prototype.smoothScrollTo == 'function') || Object.defineProperty(Window.prototype, 'smoothScrollTo', {
            // Value
            value: function smoothScrollTo() {
                // Initialization > Arguments
                let args = [...arguments];

                /* Logic
                        If
                            Argument 0 is a number.
                */
                if (typeof args[0] == 'number') {
                    /* Logic
                            [if:else if:else statement]

                        > Update > Arguments
                    */
                    if (!args[0])
                        args[0] += 1;

                    else if (args[0] == scrollHeight)
                        args[0] -= 700;

                    args = [{target: args[0]}]
                };

                /* Logic
                        If
                            Argument 0 is not an object.
                */
                if (!isObject(args[0]))
                    // LapysJS > Error
                    LapysJS.error('$c$json_0', args[0]);

                else {
                    /* Initialization > (...)
                            @lapys:
                                SmoothScrollCallbackInformation() {
                                    onsmoothscroll = f();
                                    onsmoothscrollend = f();
                                    onsmoothscrollinterrupt = f();
                                    scrollInterruptDelay = <number>
                                    scrollIntervalLength = <number>
                                    scrollTimingFunction = <string>
                                    scrollType = <string>
                                    target = <element|number>
                                }
                    */
                    let data = createObject(new (function SmoothScrollCallbackInformation() {}), args[0]),
                        alpha = typeof data.onsmoothscrollinterrupt == 'string' ? func('', 'event', data.onsmoothscrollinterrupt) : data.onsmoothscrollinterrupt,
                        beta = typeof data.onsmoothscroll == 'string' ? func('', 'event', data.onsmoothscroll) : data.onsmoothscroll,
                        delta = parseNumber(data.scrollInterruptDelay) || NaN,
                        epsilon = String(data.scrollTimingFunction || 'linear'),
                        gamma = String(data.scrollType || 'vertical'),
                        kappa = data.scrollIntervalLength || 50,
                        omega = typeof data.onsmoothscrollend == 'string' ? func('', 'event', data.onsmoothscrollend) : data.onsmoothscrollend,
                        metadata = data.target;

                    /* Logic
                            [if:else if:else statement]

                            --- NOTE ---
                                @lapys: Remove the chance of any edge cases.

                        > LapysJS > Error
                    */
                    if (!((metadata || new (function LapysJSObject() {})).nodeType == 1 || typeof metadata == 'number'))
                        LapysJS.error('$c$element|number_0', metadata);

                    else if ('onsmoothscroll' in data && typeof beta != 'function')
                        LapysJS.error('$c$function|string_0', beta);

                    else if ('scrollIntervalLength' in data && typeof kappa != 'number')
                        LapysJS.error('$c$number_0', kappa);

                    else if ('onsmoothscrollend' in data && typeof omega != 'function')
                        LapysJS.error('$c$function|string_0', omega);

                    else if ('onsmoothscrollinterrupt' in data && typeof alpha != 'function')
                        LapysJS.error('$c$function|string_0', alpha);

                    // Update > Metadata
                    (typeof metadata != 'number') || (metadata = Math.abs(metadata));

                    /* Logic
                            If
                                Metadata is not hidden via CSS display
                                    or
                                Metadata is a number.
                    */
                    if (
                        (typeof metadata == 'number' ? {getCSS: function() {}} : metadata).getCSS('display') != 'none' ||
                        typeof metadata == 'number'
                    ) {
                        // Initialization > (Arguments Set, Lambda, Zeta, Test)
                        let argsSet = [new (class SmoothScrollEvent { constructor() { this.currentTarget = null; this.path = document.documentElement.parentPath.slice(1); this.__proto__ = window.Event; this.srcElement = document; this.target = document} })],
                            lambda = 0,
                            zeta = (function(gamma) {
                                /* Logic
                                        [switch:case:default statement]

                                    > Return
                                */
                                switch (gamma) {
                                    // Horizontal
                                    case 'horizontal':
                                        return scrollX > metadata;
                                        break;

                                    // Vertical
                                    case 'vertical':
                                        return scrollY > metadata
                                }
                            })(gamma),
                            test = function test() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (typeof metadata != 'number')
                                    /* Logic
                                            [switch:case:default statement]

                                        > Return
                                    */
                                    switch (gamma) {
                                        // Horizontal
                                        case 'horizontal':
                                            return metadata.offset.left > -1 && metadata.offset.left < kappa + 1
                                            break;

                                        // Vertical
                                        case 'vertical':
                                            return metadata.offset.top > -1 && metadata.offset.top < kappa + 1
                                    }

                                else
                                    /* Logic
                                            [switch:case:default statement]

                                        > Return
                                    */
                                    switch (gamma) {
                                        // Horizontal
                                        case 'horizontal':
                                            return zeta ? scrollX < metadata : scrollX > metadata;
                                            break;

                                        // Vertical
                                        case 'vertical':
                                            return zeta ? scrollY < metadata : scrollY > metadata
                                    }

                                // Return
                                return !1
                            };

                        // Set Timeout
                        !('scrollInterruptDelay' in data) || !(data.scrollInterruptDelay === 0 || data.scrollInterruptDelay > 0) || setTimeout(function() {
                            // Update > Test
                            test = function test() { return !0 };

                            // Alpha
                            (typeof alpha != 'function') || alpha.apply(data, argsSet)
                        }, data.scrollInterruptDelay);

                        /* Logic
                                [switch:case:default statement]

                                --- NOTE ---
                                    @lapys: Determine the kind
                                        of transition the smooth scroll will take.

                            > Update > Lambda
                        */
                        switch (epsilon) {
                            // Linear
                            case 'linear':
                                lambda = kappa
                        }

                        /* Logic
                                [if:else if:else statement]

                            > Beta | Check
                        */
                        if (gamma == 'horizontal' || gamma == 'vertical')
                            test() ? ((typeof beta != 'function') || beta.apply(data, argsSet)) : check(test, function() {
                                // Omega
                                (typeof omega != 'function') || omega.apply(data, argsSet)
                            }, function() {
                                // Initialization > PI
                                let pi = lambda < 1 ? 1 : lambda;

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (typeof metadata != 'number')
                                    /* Logic
                                            [switch:case:default statement]

                                        > Update > PI
                                    */
                                    switch (gamma) {
                                        // Horizontal
                                        case 'horizontal':
                                            (metadata.offset.left > 0) || (pi = -pi);
                                            break;

                                        // Vertical
                                        case 'vertical':
                                            (metadata.offset.top > 0) || (pi = -pi)
                                    }

                                else
                                    // Update > PI
                                    !zeta || (pi = -pi);

                                /* Logic
                                        [switch:case:default statement]

                                    > Scroll By
                                */
                                switch (gamma) {
                                    // Horizontal
                                    case 'horizontal':
                                        scrollBy(pi, 0);
                                        break;

                                    // Vertical
                                    case 'vertical':
                                        scrollBy(0, pi)
                                }

                                // Beta
                                (typeof beta != 'function') || beta.apply(data, argsSet)
                            })
                    }
                }
            }
        });

        // String
        Object.defineProperty(Window.prototype, 'str', {
            // Value
            value: function str() {
                // Initialization > Arguments
                let args = [...arguments];

                /* Logic
                        Switch case to Argument 0`s constructor.

                    > Return
                */
                switch (args[0].constructor) {
                    // Document Type
                    case DocumentType:
                        return args[0].stringify();
                        break
                }

                // Return
                return (args[0] || new (function LapysJSObject() {})).constructor === RegExp ? String(args[0]).slice('/'.length, -('/'.length + args[0].flags.length)) : (String(((args[0] || new (function LapysJSObject() {})).constructor !== Object) || JSON.stringify(args[0]).slice('{'.length, -'}'.length)).replace('true', String(args[0])))
            }
        });

        // Symbol
        Object.defineProperty(Window.prototype, 'sym', {
            // Value
            value: function symbol() {
                // Return
                return Symbol.apply(window, [...arguments])
            }
        });

        // Timeout
        (typeof timeout == 'function') || Object.defineProperty(Window.prototype, 'timeout', {
            // Value
            value: function timeout() {
                // Set Timeout
                setTimeout(arguments[0], parseNumber(arguments[1]) || void 0)
            }
        });

        // (Get) Type (Of)
        (typeof getType == 'function') || Object.defineProperty(Window.prototype, 'getType', {
            // Value
            value: function getType() {
                let args = [...arguments];

                /* Logic
                        If
                            there is an Argument.
                */
                if (
                    args.length > 0 &&
                    args[0] !== null &&
                    args[0] !== void 0
                ) {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (args[0].constructor.constructor == Function)
                        // Return
                        return args[0].constructor.name.replace(/([A-Z]){2,}/g, data => {
                            // Return
                            return data.toLowerCase().slice(0, -1) + '-' + data[~-data.length].toLowerCase()
                        }).replace(/[A-Z]/g, data => {
                            // Return
                            return '-' + data.toLowerCase()
                        }).trimChar('-').replace('lapysj-s', 'lapys-js').replace('reg-exp', 'regex')
                }

                else if (args[0] === null)
                    // Return
                    return 'null';

                // Return
                return 'undefined'
            }
        });

        // Warn
        (typeof warn == 'function') || (window.warn = console.warn);

        // Write
        (typeof write == 'function') || (window.write = function write() {
            // Document > Write
            document.write.apply(document, [...arguments])
        });

    /* Custom Data */
        /* LapysJS */
        ((Window.prototype.LapysJS || new (function LapysJSObject() {})).constructor.name == 'LapysJS') || Object.defineProperty(Window.prototype, 'LapysJS', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Value
            value: new (class LapysJS extends (class LapysJS extends (class LapysJS {}) {}) {
                // Constructor
                constructor() {
                    // Initialization > Arguments
                    let args = [...arguments];

                    // {Super} Execution
                    eval((function() {
                        // Initialization > Data
                        let data = 'super(';

                        /* Loop
                                Index Arguments.

                            > Update > Data
                        */
                        for (let i in args)
                            data += 'args[' + i + '], ';

                        // Return
                        return data + ')'
                    })());

                    // Initialization > (Target, Version Number)
                    let that = this,
                        VER_NUMBER = '0.0.1';

                    // Error
                    'error' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'error', {
                        // Value
                        value: function error() {
                            // Initialization > (Data, Metadata)
                            let data = arguments[0],
                                metadata = arguments[1];

                            /* Logic
                                    [if:else if:else statement]

                                > Update > Data
                            */
                            if (data === null || data === void 0)
                                data = '';

                            else if (data.constructor == Error)
                                data = data.message;

                            // Update > Data
                            data = String(data);

                            /* Logic
                                    If
                                        the command section of the
                                        LapysJS error method has been triggered.
                            */
                            if (data.startsWith('$c$')) {
                                // Update > Data
                                data = data.slice('$c$'.length);

                                /* Logic
                                        [if:else if:else statement]

                                    > Update > Data
                                */
                                switch (data) {
                                    // Global Object Test
                                    case 'global-object-test':
                                        data = "LapysJS does not function without the global 'window' object."
                                }

                                /* Logic
                                        [if:else if:else statement]

                                    > Update > Data
                                */
                                if (data.endsWith('_0'))
                                    data = '`' + metadata + '` must be a/an ' +  data.slice(0, -2).replace(/[a-z]{1,}\|[a-z]{1,}/g, data => {
                                        // Return
                                        return data.getBeforeChar('|') + ' or ' + data.getAfterChar('|')
                                    });

                                else if (data.endsWith('_1'))
                                    data = '`' + metadata + '` is not a/an ' +  data.slice(0, -2).replace(/[a-z]{1,}\|[a-z]{1,}/g, data => {
                                        // Return
                                        return data.getBeforeChar('|') + ' or ' + data.getAfterChar('|')
                                    })
                            }

                            // Update > Data
                            data = data.replace(/json/g, 'JSON') + '.';

                            /* Execution
                                    --- NOTE ---
                                        @lapys: Prevent compressors and minifiers from redacting the name
                                            of the Error.
                            */
                            eval("throw new (class LapysJSScriptError extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,LapysJSScriptError)}})('[LapysJS v" + VER_NUMBER + '] => ' + data.replace(/'/g, '"') + "\\r')")
                        }
                    });

                    // Author
                    Object.defineProperty(this.constructor.prototype, 'author', {
                        // Value
                        value: 'Lapys Dev Team'
                    });

                    // Array
                    'array' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'array', {
                        // Value
                        value: class LapysJSArray extends array {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Return
                                return arguments.length > 0 ? this : new (function LapysJSArray() { this.length = 0 })
                            }
                        }
                    });
                        // Definition
                        'LapysJSArray' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSArray', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.array
                            }
                        });
                        window.larray = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSArray(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        };

                    // Boolean
                    'boolean' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'boolean', {
                        // Value
                        value: class LapysJSBoolean extends bool {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Initialization > Target
                                let that = this;

                                // Modification > Target
                                    // Primitive Value
                                    '[[PrimitiveValue]]' in that || Object.defineProperty(that, '[[PrimitiveValue]]', {
                                        // Value
                                        value: bool.apply(window, args)
                                    });

                                    // To String
                                    Object.defineProperty(that, 'toString', {
                                        // Value
                                        value: function toString() {
                                            // Return
                                            return String(that['[[PrimitiveValue]]'])
                                        }
                                    });

                                    // Value Of
                                    Object.defineProperty(that, 'valueOf', {
                                        // Value
                                        value: function valueOf() {
                                            // Return
                                            return that['[[PrimitiveValue]]']
                                        }
                                    });

                                // Return
                                return this
                            }
                        }
                    });
                        // Definition
                        'LapysJSBoolean' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSBoolean', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.boolean
                            }
                        });
                        window.lbool = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSBoolean(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        };

                    // Component
                    'component' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'component', {
                        // Value
                        value: new (function LapysJSComponentsObject() {
                            /* Modification > Target
                                    --- UPDATE REQUIRED ---
                                        @lapys: Do plugins need to be components.
                            */
                                // Image
                                Object.defineProperty(this, 'Image', {
                                    // Value
                                    value: class LapysJSImage {}
                                });

                                // Table
                                Object.defineProperty(this, 'Table', {
                                    // Value
                                    value: class LapysJSTable {}
                                })
                        })
                    });

                    /* Debug
                            --- NOTE ---
                                @lapys: For debugging purposes only.
                    */
                    'debug' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'debug', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function debug() {
                            // Return
                            return new (function LapysJSScriptDebugObject() {
                                // Modification > Target
                                    // Add New Element
                                    this.constructor.prototype.addNewElement = function addNewElement() {
                                        // Insertion
                                        document.body.appendChild('lapysjs-element'.html);

                                        // Return
                                        return document.body.$t('lapysjs-element', $t('lapysjs-element', '~length'))
                                    };

                                    // Delete Old Element
                                    this.constructor.prototype.delOldElement = function delOldElement() {
                                        // Deletion
                                        document.body.$t('lapysjs-element', $t('lapysjs-element', '~length')).delete();

                                        // Return
                                        return null
                                    };

                                    // Format Text
                                    Object.defineProperty(this.constructor.prototype, 'formatText', {
                                        // Value
                                        value: function formatText() {
                                            // Initialization > (Arguments, Data)
                                            let args = [...arguments],
                                                data = String(args[0])

                                            /* Logic
                                                    Switch case to Argument 1.

                                                    --- WARN ---
                                                        @lapys: All cases must be
                                                            labeled via numbers.

                                                > Return
                                            */
                                            switch (args[1]) {
                                                // --- Redacting double-spaced characters.
                                                case 0:
                                                    return data.replace(/  /g, ' ').replace(/  /g, ' ');
                                                    break;

                                                // --- Redact double-spaced characters and trim the text.
                                                case 1:
                                                    return data.replace(/  /g, ' ').replace(/  /g, ' ').trim();
                                                    break;

                                                case 2:
                                                    return data.replace(/  /g, ' ').replace(/  /g, ' ').trim().split(/ /g).join(' ');
                                                    break;

                                                // --- Editing single-spaced items.
                                                case 3:
                                                    return data.replace(/  /g, ' ').replace(/  /g, ' ').split(/ /g);
                                                    break;

                                                // --- Editing single-spaced items after format.
                                                case 4:
                                                    return data.replace(/  /g, ' ').replace(/  /g, ' ').trim().split(/ /g)
                                            }

                                            // Return
                                            return data
                                        }
                                    })
                            })
                        }
                    });

                    // [Dollar Object]
                    '$' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, '$', {
                        // Value
                        value: new (function LapysJSDollarObject() {
                            // Initialization > Target
                            let that = this;

                            // Modification > Target
                                /* Anchor
                                        --- NOTE ---
                                            @lapys: This function simulates the click event of
                                                a generic but usually modified hypertext link.
                                */
                                (typeof this.constructor.prototype.anchor == 'function') || Object.defineProperty(this.constructor.prototype, 'anchor', {
                                    // Value
                                    value: function anchor() {
                                        // Initialization > (Arguments, Data)
                                        let args = [...arguments],
                                            data = document.createElement('a');

                                        // Insertion
                                        document.body.appendChild(data);

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (args.length > 0) {
                                            // Modification > Data > Hyperlink Reference
                                            data.href = String(args[0]);

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if ((args[1] || new (function LapysJSObject() {})).constructor == Object)
                                                /* Loop
                                                        [for statement]

                                                    > Modification > Data > [Argument 1]
                                                */
                                                for (let i in args[1])
                                                    data[i] = args[1][i]
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
                                (typeof this.constructor.prototype.import == 'function') || Object.defineProperty(this.constructor.prototype, 'import', {
                                    // Value
                                    value: function Import() {
                                        // Initialization > Arguments
                                        let args = [...arguments];

                                        // Update > Argument 1
                                        (typeof args[1] == 'object') || (args[1] = {});

                                        /* Logic
                                                Switch case to Argument 0.
                                        */
                                        switch (String(args[0])) {
                                            // Font
                                            case 'font':
                                                // CSS > Style
                                                css.style('CSSFont', '@font-face {' +
                                                    ('name' in args[1] ? ('font-family: ' + (String(args[1].name || '').indexOf(' ') > -1 ? "'" + args[1].name + "'" : args[1].name) + ';') : '') +
                                                    'src: ' + (('url' in args[1] ? "url('" + args[1].url + "') " : '') + ('format' in args[1] ? ("format('" + args[1].format + "')") : '')) +
                                                '}')
                                        }
                                    }
                                });

                                /* Request
                                        --- NOTE ---
                                            @lapys: This function is or getting data from CORS requests,
                                                it serves as an alternative to the Fetch API.
                                */
                                (typeof this.constructor.prototype.request == 'function') || Object.defineProperty(this.constructor.prototype, 'request', {
                                    // Value
                                    value: function request() {
                                        /* Initialization > (Arguments, XML HTTP Request)
                                                --- NOTE ---
                                                    @lapys: Create a new CORS request.
                                        */
                                        let args = [...arguments],
                                            _XMLHttpRequest = new XMLHttpRequest();

                                        /* Logic
                                                If
                                                    the Request has credentials,

                                                else if
                                                    the XDomainRequest exists.
                                        */
                                        if ('withCredentials' in _XMLHttpRequest)
                                            // XML HTTP Request > Open
                                            _XMLHttpRequest.open(String(args[0]), String(args[1]), !0);

                                        else if (window.XDomainRequest) {
                                            // Update > XML HTTP Request
                                            _XMLHttpRequest = new XDomainRequest();

                                            // XML HTTP Request > Open
                                            _XMLHttpRequest.open(String(args[0]), String(args[1]))
                                        }

                                        else {
                                            // Update > XML HTTP Request
                                            _XMLHttpRequest = null;

                                            // Set Timeout
                                            setTimeout(function() {
                                                // LapysJS > Warn
                                                LapysJS.warn('CORS is not supported by this browser.')
                                            })
                                        }

                                        /* Logic
                                                If
                                                    Argument 2 is an Object.
                                        */
                                        if ((args[2] || new (function LapysJSObject() {})).constructor === Object)
                                            /* Loop
                                                    Index Argument 2.

                                                > Update > XML HTTP Request.
                                            */
                                            for (let i in args[2])
                                                _XMLHttpRequest[i] = args[2][i];

                                        /* Set Timeout
                                                --- NOTE ---
                                                    @lapys: Automated request parsing.
                                        */
                                        setTimeout(function() {
                                            // XML HTTP Request > Send
                                            _XMLHttpRequest.send()
                                        }, +String(args[3]).replace(/ /g, '') || new (function LapysJSObject() {}));

                                        // Return
                                        return _XMLHttpRequest
                                    }
                                });

                                // [Set Timeout]
                                !window.LapysJS || setTimeout(function() {
                                    // [First Element Child]
                                    Object.defineProperty(that.constructor.prototype, 'x1', {
                                        // Value
                                        value: $1
                                    });

                                    // Descendant Query Selector (All)
                                    Object.defineProperty(that.constructor.prototype, '_', {
                                        // Value
                                        value: _$
                                    });

                                    // [Get Elements By Class Name]
                                    Object.defineProperty(that.constructor.prototype, 'c', {
                                        // Value
                                        value: $c
                                    });

                                    // [Get Element By ID]
                                    Object.defineProperty(that.constructor.prototype, 'i', {
                                        // Value
                                        value: $i
                                    });

                                    // [Get Elements By Tag Name]
                                    Object.defineProperty(that.constructor.prototype, 't', {
                                        // Value
                                        value: $t
                                    });

                                    // [Last Element Child]
                                    Object.defineProperty(that.constructor.prototype, 'n', {
                                        // Value
                                        value: $n
                                    });

                                    // Penultimate Element Child
                                    Object.defineProperty(that.constructor.prototype, 'n1', {
                                        // Value
                                        value: $n1
                                    });

                                    // Query Selector
                                    Object.defineProperty(that.constructor.prototype, 'querySelector', {
                                        // Value
                                        value: $$
                                    });

                                    // Query Selector (All)
                                    Object.defineProperty(that.constructor.prototype, '$', {
                                        // Value
                                        value: $$
                                    });

                                    // [Query Indexer]
                                    Object.defineProperty(that.constructor.prototype, 'x', {
                                        // Value
                                        value: $x
                                    });

                                    // [Second Element Child]
                                    Object.defineProperty(that.constructor.prototype, 'x2', {
                                        // Value
                                        value: $2
                                    })
                                })
                        })
                    });

                    // Executed
                    this.constructor.prototype.executed = !1;

                    // Experimental Features
                    'experimentalFeatures' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'experimentalFeatures', {
                        // Value
                        value: ['data-focus', 'html-javascript']
                    });

                    // Function
                    'function' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'function', {
                        // Value
                        value: class LapysJSFunction extends func {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                /* Super
                                        --- NOTE ---
                                            @lapys: Yes, there`s a global 'lapys' variable and I am happy. :)
                                */
                                super(String(args.length > 0 ? args[0] : ''), String(args.length > 1 ? args[1] : ''), 'var lapys = [...arguments];\n' + (args.length > 2 ? args[2] : ''));

                                // Return
                                return arguments.length > 0 ? this : new (function LapysJSFunction() {
                                    // Initialization > (Data, Target)
                                    let data,
                                        that = this;

                                    // Update > Data
                                    (function() { data = arguments })();

                                    // Modification > Target
                                        /* Lapys
                                                --- NOTE ---
                                                    @lapys: Preserve the 'lapys' variable.
                                        */
                                        that.lapys = data;

                                        // Primitive Value
                                        that['[[PrimitiveValue]]'] = Function();

                                        // To String
                                        Object.defineProperty(that, 'toString', {
                                            // Value
                                            value: function toString() {
                                                // Return
                                                return String(that['[[PrimitiveValue]]'])
                                            }
                                        });

                                        // Value Of
                                        Object.defineProperty(that, 'valueOf', {
                                            // Value
                                            value: function valueOf() {
                                                // Return
                                                return that['[[PrimitiveValue]]']
                                            }
                                        })
                                })
                            }
                        }
                    });
                        // Definition
                        'LapysJSFunction' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSFunction', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.function
                            }
                        });
                        window.lfunc = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSFunction(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        };

                    // Name (Title)
                    'name' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'name', {
                        // Value
                        value: this.constructor.name || 'LapysJS'
                    });

                    // Number
                    'number' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'number', {
                        // Value
                        value: class LapysJSNumber extends number {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Initialization > Target
                                let that = this;

                                // Modification > Target
                                    // Primitive Value
                                    '[[PrimitiveValue]]' in that || Object.defineProperty(that, '[[PrimitiveValue]]', {
                                        // Value
                                        value: number.apply(window, args)
                                    });

                                    // To String
                                    Object.defineProperty(that, 'toString', {
                                        // Value
                                        value: function toString() {
                                            // Return
                                            return String(that['[[PrimitiveValue]]'])
                                        }
                                    });

                                    // Value Of
                                    Object.defineProperty(that, 'valueOf', {
                                        // Value
                                        value: function valueOf() {
                                            // Return
                                            return that['[[PrimitiveValue]]']
                                        }
                                    });

                                // Return
                                return this
                            }
                        }
                    });
                        // Definition
                        'LapysJSNumber' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSNumber', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.number
                            }
                        });
                        window.lnumber = (window.lnum = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSNumber(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        });

                    // LapysJS
                    'LapysJS' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'LapysJS', {value: this});

                    // Object
                    'object' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'object', {
                        // Value
                        value: class LapysJSObject extends obj {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Return
                                return arguments.length > 0 ? this : new (function LapysJSObject() {})
                            }
                        }
                    });
                        // Definition
                        'LapysJSObject' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSObject', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.object
                            }
                        });
                        window.lobj = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSObject(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        };

                    // Permanent Data
                    'permanentData' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'permanentData', {
                        // Value
                        value: new (function LapysJSScriptPermanentData() {
                            // Modification > Target
                                // Cooled Items
                                (typeof this.constructor.prototype.cooledItems == 'object') || Object.defineProperty(this.constructor.prototype, 'cooledItems', {
                                    // Value
                                    value: new (function LapysJSCooledItemsList() {})
                                });

                                // Data List
                                (typeof this.constructor.prototype.dataList == 'object') || Object.defineProperty(this.constructor.prototype, 'dataList', {value: []});

                                // Mouse Coordinates
                                (typeof this.constructor.prototype.mouseCoordinates == 'object') || Object.defineProperty(this.constructor.prototype, 'mouseCoordinates', {
                                    // Value
                                    value: new (function LapysJSScriptMouseCoordinates() {
                                        // Initialization > (Data, Metadata)
                                        let data = 0,
                                            metadata = 0;

                                        // Modification > Target > (X, Y)
                                        Object.defineProperties(this.constructor.prototype, {
                                            // X
                                            x: {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function() {
                                                    // Return
                                                    return data
                                                },

                                                // Set
                                                set: function() {
                                                    // Update > Data
                                                    data = arguments[0]
                                                }
                                            },

                                            // Y
                                            y: {
                                                // Configurable
                                                configurable: !0,

                                                // Enumerable
                                                enumerable: !0,

                                                // Get
                                                get: function() {
                                                    // Return
                                                    return metadata
                                                },

                                                // Set
                                                set: function() {
                                                    // Update > Metadata
                                                    metadata = arguments[0]
                                                }
                                            }
                                        })
                                    })
                                });

                                // Plug-In Script Delay
                                this.constructor.prototype.pluginScriptDelay = 3e3;

                                // Script Element List
                                (typeof this.constructor.prototype.scriptElementList == 'object') || Object.defineProperty(this.constructor.prototype, 'scriptElementList', {
                                    // Value
                                    value: new (function LapysJSScriptScriptElementList() {})
                                });

                                // Written Elements
                                (typeof this.constructor.prototype.writtenElements == 'object') || Object.defineProperty(this.constructor.prototype, 'writtenElements', {
                                    // Value
                                    value: []
                                });
                        })
                    });
                        // Permanent
                        'perm' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'perm', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return this.permanentData
                            }
                        });

                    // Ready
                    this.constructor.prototype.ready = !1;

                    // Regular Expression
                    'regex' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'regex', {
                        // Value
                        value: class LapysJSRegExp extends regex {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Return
                                return arguments.length > 0 ? this : new (function LapysJSRegExp() {
                                    // Initialization > (Data, Target)
                                    let data = /(?:)/,
                                        that = this;

                                    // Modification > Target > (...)
                                    that.dotAll = data.dotAll;
                                    that.flags = data.flags;
                                    that.global = data.global;
                                    that.ignoreCase = data.ignoreCase;
                                    that.lastIndex = data.lastIndex;
                                    that.multiline = data.multiline;
                                    that.source = data.source;
                                    that.sticky = data.sticky;
                                    that.unicode = data.unicode;
                                    that['[[PrimitiveValue]]'] = data
                                })
                            }
                        }
                    });
                        // Definition
                        'LapysJSRegExp' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSRegExp', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.regex
                            }
                        });
                        window.lregex = (window.lreg = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSRegExp(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        });

                    // Script
                    Object.defineProperty(this, 'script', {
                        // Value
                        value: document.currentScript || document.querySelector("script[src*='lapys.'][src*='.js']") || document.getElementsByTagName('script')[~-document.getElementsByTagName('script').length]
                    });
                        // Data Enable
                        ((this.script.getAttribute('data-enable') || '').indexOf('null') < 0) || this.script.removeAttribute('data-enable');

                        // Disable
                        'disable' in this.script || Object.defineProperty(this.script, 'disable', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Set
                            set: function disable() {
                                // Modification > (LapysJS > Script) > Data Enable
                                this.setAttribute('data-enable', this.getAttribute('data-enable').replace(RegExp('\b' + LapysJS.debug.formatText(arguments[0], 4).removeRepeatedElements().join(' ') + '\b', 'g')))
                            }
                        });

                        // Enable
                        'enable' in this.script || Object.defineProperty(this.script, 'enable', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Set
                            set: function enable() {
                                /* Logic
                                        [if:else if:else statement]

                                    > Modification > (LapysJS > Script) > Data Enable
                                */
                                if (typeof arguments[0] == 'string')
                                    this.setAttribute('data-enable', LapysJS.debug.formatText(arguments[0], 4).removeRepeatedElements().join(' '));

                                else if ((arguments[0] || new (function LapysJSObject() {})).constructor == Array)
                                    this.setAttribute('data-enable', LapysJS.debug.formatText(arguments[0].join(' ').trim(), 4).removeRepeatedElements().join(' '))
                            }
                        });

                        // Enabled
                        'enabled' in this.script || Object.defineProperty(this.script, 'enabled', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function enabled() {
                                // Return
                                return (this.getAttribute('data-enable') || '').split(/ /g).removeFalsyElements().removeRepeatedElements().filter(data => {
                                    // Return
                                    return that.experimentalFeatures.indexOf(data) > -1
                                })
                            }
                        });

                    // String
                    'string' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'string', {
                        // Value
                        value: class LapysJSString extends str {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Initialization > Target
                                let that = this;

                                // Modification > Target
                                    // Primitive Value
                                    '[[PrimitiveValue]]' in that || Object.defineProperty(that, '[[PrimitiveValue]]', {
                                        // Value
                                        value: str.apply(window, args)
                                    });

                                    // To String
                                    Object.defineProperty(that, 'toString', {
                                        // Value
                                        value: function toString() {
                                            // Return
                                            return String(that['[[PrimitiveValue]]'])
                                        }
                                    });

                                    // Value Of
                                    Object.defineProperty(that, 'valueOf', {
                                        // Value
                                        value: function valueOf() {
                                            // Return
                                            return that['[[PrimitiveValue]]']
                                        }
                                    });

                                // Return
                                return this
                            }
                        }
                    });
                        // Definition
                        'LapysJSString' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSString', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.string
                            }
                        });
                        window.lstr = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSString(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        };

                    // Symbol
                    'symbol' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'symbol', {
                        // Value
                        value: class LapysJSSymbol extends sym {
                            // Constructor
                            constructor() {
                                // Initialization > Arguments
                                let args = [...arguments];

                                // {Super} Execution
                                eval((function() {
                                    // Initialization > Data
                                    let data = 'super(';

                                    /* Loop
                                            Index Arguments.

                                        > Update > Data
                                    */
                                    for (let i in args)
                                        data += 'args[' + i + '], ';

                                    // Return
                                    return data + ')'
                                })());

                                // Initialization > Target
                                let that = this;

                                // Modification > Target
                                    // Primitive Value
                                    '[[PrimitiveValue]]' in that || Object.defineProperty(that, '[[PrimitiveValue]]', {
                                        // Value
                                        value: sym.apply(window, args)
                                    });

                                    // To String
                                    Object.defineProperty(that, 'toString', {
                                        // Value
                                        value: function toString() {
                                            // Return
                                            return String(that['[[PrimitiveValue]]'])
                                        }
                                    });

                                    // Value Of
                                    Object.defineProperty(that, 'valueOf', {
                                        // Value
                                        value: function valueOf() {
                                            // Return
                                            return that['[[PrimitiveValue]]']
                                        }
                                    });

                                // Return
                                return this
                            }
                        }
                    });
                        // Definition
                        'LapysJSSymbol' in Window.prototype || Object.defineProperty(Window.prototype, 'LapysJSSymbol', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return that.constructor.prototype.symbol
                            }
                        });
                        window.lsym = function() {
                            // Initialization > Arguments
                            let args = [...arguments];

                            // Return
                            return eval((function() {
                                // Initialization > Data
                                let data = 'new LapysJSSymbol(';

                                /* Loop
                                        Index Arguments.

                                    > Update > Data
                                */
                                for (let i in args)
                                    data += 'args[' + i + '], ';

                                // Return
                                return data + ')'
                            })())
                        };

                    // Temporary Data
                    this.constructor.prototype.temporaryData = void 0;
                        /* Set Interval
                                --- NOTE ---
                                    @lapys: Every minute, the the Temporary Data
                                         becomes undefined.
                        */
                        setInterval(function() {
                            // Update > LapysJS > Temporary Data
                            !LapysJS.tmp || (LapysJS.tmp = void 0)
                        }, 6e4);

                        // Temporary
                        'tmp' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'tmp', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return this.temporaryData
                            },

                            // Set
                            set: function() {
                                // Modification > Target > Temporary Data
                                this.temporaryData = arguments[0]
                            }
                        });

                    // Version
                    'version' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'version', {
                        // Value
                        value: VER_NUMBER
                    });

                    // Warn
                    'warn' in this.constructor.prototype || Object.defineProperty(this.constructor.prototype, 'warn', {
                        // Value
                        value: function warn() {
                            // Console > Warn
                            console.warn('[LapysJS v' + VER_NUMBER + '] => ' + arguments[0])
                        }
                    })
                }
            }),

            writable: !1
        });

    /* Array Data */
        // Add Element
        (typeof Array.prototype.addElement == 'function') || Object.defineProperty(Array.prototype, 'addElement', {
            // Value
            value: function addElement() {
                // Initialization > (Arguments, Target)
                let args =[...arguments],
                    that = this;

                /* Loop
                        Index Arguments of Element.

                    > Update > Array
                */
                for (let i = ~-args.length; i > -1; i -= 1)
                    that.unshift(args[i]);

                // Return
                return that
            }
        });

        // Add Element To Back
        (typeof Array.prototype.addElementToBack == 'function') || Object.defineProperty(Array.prototype, 'addElementToBack', {
            // Value
            value: function addElementToBack() {
                // Initialization > (Arguments, Target)
                let args =[...arguments],
                    that = this;

                /* Loop
                        Index Arguments of Element.

                    > Update > Array
                */
                for (let i = ~-args.length; i > -1; i -= 1)
                    that.unshift(args[i]);

                // Return
                return that
            }
        });

        // Add Element To Front
        (typeof Array.prototype.addElementToFront == 'function') || Object.defineProperty(Array.prototype, 'addElementToFront', {
            // Value
            value: function addElementToFront() {
                // Initialization > (Arguments, Target)
                let args =[...arguments],
                    that = this;

                /* Loop
                        Index Arguments of Element.

                    > Update > Array
                */
                for (let i of args)
                    that.push(i);

                // Return
                return that
            }
        });

        // First Element
        ('firstElement' in Array.prototype) || Object.defineProperty(Array.prototype, 'firstElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function firstElement() {
                // Return
                return this[0]
            }
        });

        // Filled With
        (typeof Array.prototype.filledWith == 'function') || Object.defineProperty(Array.prototype, 'filledWith', {
            // Value
            value: function filledWith() {
                // Initialization > (Arguments, Data)
                let args = [...arguments],
                    data = [];

                /* Loop
                        Index Target.

                    > Update > Data
                */
                for (let i of this)
                    data.push(args.indexOf(i) > -1);

                // Return
                return data.indexOf(!1) < 0
            }
        });

        // Filled With Array Elements
        (typeof Array.prototype.filledWithArrayElements == 'function') || Object.defineProperty(Array.prototype, 'filledWithArrayElements', {
            // Value
            value: function filledWithArrayElements() {
                // Initialization > (Arguments, Data, Metadata)
                let args = [...arguments],
                    data = [],
                    metadata = [];

                /* Loop
                        Index Arguments.

                    > Update > Metadata
                */
                for (let i of args)
                    ((i || new (function LapysJSObject() {})).constructor != Array) || (metadata = metadata.concat(i));

                /* Loop
                        Index Metadata.

                    > Update > Data
                */
                for (let i of this)
                    data.push(metadata.indexOf(i) > -1);

                // Return
                return data.indexOf(!1) < 0
            }
         });

        // Free
        (typeof Array.prototype.free == 'function') || Object.defineProperty(Array.prototype, 'free', {
            // Value
            value: function free() {
                // Modification > Target > Length
                this.length = 0;

                // Return
                return this
            }
        });

        // Get Common Element
        (typeof Array.prototype.getCommonElement == 'function') || Object.defineProperty(Array.prototype, 'getCommonElement', {
            // Value
            value: function getCommonElement() {
                // Initialization > (Data, Limit, Metadata, Target)
                let data = {},
                    limit = 1,
                    metadata = this[0],
                    that = this;

                /* Logic
                        [if:else if:else statement]

                    > Return
                */
                if (!that.length || (that.length == 2 && that[0] !== that[1]))
                    return null;

                else if (that.length == 1)
                    return metadata;

                /* Loop
                        Index elements of Target.
                */
                for (let i of that) {
                    // Update > Data
                    data[i] ? data[i] += 1 : data[i] = 1;

                    /* Logic
                            If
                                Data's Target Element count is greater than the Limit.

                        > Update
                    */
                    if (data[i] > limit) {
                        // Metadata
                        metadata = i;

                        // Limit
                        limit = data[i]
                    }
                }

                // Return
                return metadata
            }
        });

        // Get Duplicated Elements
        (typeof Array.prototype.getDuplicatedElements == 'function') || Object.defineProperty(Array.prototype, 'getDuplicatedElements', {
            // Value
            value: function getDuplicatedElements() {
                // Return
                return this.getRepeatedElements().removeDuplicatedElements()
            }
        });

        // Get Repeated Elements
        (typeof Array.prototype.getRepeatedElements == 'function') || Object.defineProperty(Array.prototype, 'getRepeatedElements', {
            // Value
            value: function getRepeatedElements() {
                // Initialization > (Data, Target)
                let data = [],
                    that = this;

                /* Loop
                        Index members of the Target.
                */
                for (let i = 0; i < ~-that.length; i += 1)
                    // Update > Data
                    (that.slice().sort()[i + 1] !== that.slice().sort()[i]) || data.push(that.slice().sort()[i]);

                // Return
                return data
            }
        });

        // Get Uncommon Element
        (typeof Array.prototype.getUncommonElement == 'function') || Object.defineProperty(Array.prototype, 'getUncommonElement', {
            // Value
            value: function getUncommonElement() {
                // Initialization > (Alpha, Target, Data, Metadata)
                let alpha = {},
                    that = this,
                    data = that.length,
                    metadata = that[0];

                /* Loop
                        Index Target.

                    > Update > Metadata
                */
                for (let i of that)
                    i in alpha ? alpha[i].metadata += 1 : alpha[i] = {data: i, metadata: 1};

                /* Loop
                        Index Alpha.
                */
                for (let i in alpha)
                    /* Logic
                            If
                                Data is greater than Alpha`s element`s metadata.

                        > Update
                    */
                    if (data > alpha[i].metadata) {
                        // Data
                        data = alpha[i].metadata;

                        // Metadata
                        metadata = alpha[i].data
                    }

                // Return
                return metadata
            }
        });

        // Has Array Element
        (typeof Array.prototype.hasArrayElements == 'function') || Object.defineProperty(Array.prototype, 'hasArrayElements', {
            // Value
            value: function hasArrayElements() {
                // Initialization > (Arguments, Data, Metadata)
                let args = [...arguments],
                    data = [],
                    metadata = [];

                /* Loop
                        Index Arguments.

                    > Update > Metadata
                */
                for (let i of args)
                    ((i || new (function LapysJSObject() {})).constructor != Array) || (metadata = metadata.concat(i));

                /* Loop
                        Index Metadata.

                    > Update > Data
                */
                for (let i of metadata)
                    data.push(this.indexOf(i) > -1);

                // Return
                return data.indexOf(!1) < 0
            }
         });

         // Has Element
         (typeof Array.prototype.hasElement == 'function') || Object.defineProperty(Array.prototype, 'hasElement', {
            // Value
            value: function hasElement() {
                // Initialization > (Arguments, Data)
                let args = [...arguments],
                    data = [];

                /* Loop
                        Index Arguments.

                    > Update > Data
                */
                for (let i of args)
                    data.push(this.indexOf(i) > -1);

                // Return
                return data.indexOf(!1) < 0
            }
         });

        // Last Element
        (typeof Array.prototype.lastElement == 'function') || Object.defineProperty(Array.prototype, 'lastElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function lastElement() {
                // Return
                return this[~-this.length]
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
                for (let i in this) {
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

        /* Remove Common Elements
        */
        (typeof Array.prototype.removeCommonElements == 'function') || Object.defineProperty(Array.prototype, 'removeCommonElements', {
            // Value
            value: function removeCommonElements() {
                // Return
                return this.removeElements(this.getCommonElement())
            }
        });

       /* Remove Duplicated Element
                --- UPDATE REQUIRED ---
                    @lapys: Should only remove duplicated values from the back
                        of the target array.
        */
        (typeof Array.prototype.removeDuplicatedElement == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElement', {
            // Value
            value: function removeDuplicatedElement() {
                // Initialization > (Target, Metadata, Data)
                let that = this,
                    metadata = that.getRepeatedElements()[0],
                    data = [...that].replaceElement(metadata, new (function LapysJSTemporaryDataObject() { this.label = 1 })).replaceElement(metadata, new (function LapysJSTemporaryDataObject() { this.label = 2 }));

                /* Loop
                        Index Data

                    > Update > Data
                */
                for (let i in data)
                    !((data[i] || new (function LapysJSObject() {})).constructor.name == 'LapysJSTemporaryDataObject' && (data[i] || new (function LapysJSObject() {})).label == 1) || (data[i] = metadata);

                // Update > Data
                data = data.filter(data => {
                    // Return
                    return !(data.constructor.name == 'LapysJSTemporaryDataObject' && (data || new (function LapysJSObject() {})).label == 2)
                });

                // Modification > Target > Length
                that.length = 0;

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that.push(i);

                // Return
                return that
            }
        });

        /* Remove Duplicated Element From Back
                --- UPDATE REQUIRED ---
                    @lapys: Should only remove duplicated values from the back
                        of the target array.
        */
        (typeof Array.prototype.removeDuplicatedElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementFromBack', {
            // Value
            value: function removeDuplicatedElementFromBack() {
                // Initialization > (Target, Metadata, Data)
                let that = this,
                    metadata = that.getRepeatedElements()[0],
                    data = [...that].replaceElementFromBack(metadata, new (function LapysJSTemporaryDataObject() { this.label = 1 })).replaceElementFromBack(metadata, new (function LapysJSTemporaryDataObject() { this.label = 2 }));

                /* Loop
                        Index Data

                    > Update > Data
                */
                for (let i in data)
                    !((data[i] || new (function LapysJSObject() {})).constructor.name == 'LapysJSTemporaryDataObject' && (data[i] || new (function LapysJSObject() {})).label == 1) || (data[i] = metadata);

                // Update > Data
                data = data.filter(data => {
                    // Return
                    return !(data.constructor.name == 'LapysJSTemporaryDataObject' && (data || new (function LapysJSObject() {})).label == 2)
                });

                // Modification > Target > Length
                that.length = 0;

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that.push(i);

                // Return
                return that
            }
        });

        /* Remove Duplicated Element From Front
                --- UPDATE REQUIRED ---
                    @lapys: Should only remove duplicated values from the front
                        of the target array.
        */
        (typeof Array.prototype.removeDuplicatedElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementFromFront', {
            // Value
            value: function removeDuplicatedElementFromFront() {
                // Initialization > (Target, Metadata, Data)
                let that = this,
                    metadata = that.getRepeatedElements()[0],
                    data = [...that].replaceElementFromFront(metadata, new (function LapysJSTemporaryDataObject() { this.label = 1 })).replaceElementFromFront(metadata, new (function LapysJSTemporaryDataObject() { this.label = 2 }));

                /* Loop
                        Index Data

                    > Update > Data
                */
                for (let i in data)
                    !((data[i] || new (function LapysJSObject() {})).constructor.name == 'LapysJSTemporaryDataObject' && (data[i] || new (function LapysJSObject() {})).label == 1) || (data[i] = metadata);

                // Update > Data
                data = data.filter(data => {
                    // Return
                    return !(data.constructor.name == 'LapysJSTemporaryDataObject' && (data || new (function LapysJSObject() {})).label == 2)
                });

                // Modification > Target > Length
                that.length = 0;

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that.push(i);

                // Return
                return that
            }
        });

        // Remove Duplicated Elements
        (typeof Array.prototype.removeDuplicatedElements == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElements', {
            // Value
            value: function removeDuplicatedElements() {
                // Initialization > (Data, Metadata)
                let data = [...this],
                    metadata = [...this].getRepeatedElements();

                /* Loop
                        Index Metadata.

                    > Update > Data
                */
                for (let i of metadata)
                    data = data.replaceElement(i, new (function LapysJSTemporaryDataObject() { this.value = i })).removeElements(i);

                // Modification > Target > Length
                this.length = 0;

                /* Loop
                        Index Data.

                    > Update
                */
                for (let i = 0; i < data.length; i += 1) {
                    // Data
                    (data[i].constructor.name != 'LapysJSTemporaryDataObject') || (data[i] = data[i].value);

                    // Target
                    this.push(data[i])
                }

                // Return
                return data
            }
        });

        // Remove Duplicated Elements From Back
        (typeof Array.prototype.removeDuplicatedElementsFromBack == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementsFromBack', {
            // Value
            value: function removeDuplicatedElementsFromBack() {
                // Initialization > (Array, Data)
                let data = [...this],
                    metadata = [...this].getRepeatedElements();

                /* Loop
                        Index Metadata.

                    > Update > Data
                */
                for (let i of metadata)
                    data = data.replaceElementFromBack(i, new (function LapysJSTemporaryDataObject() { this.value = i })).removeElements(i);

                // Modification > Target > Length
                this.length = 0;

                /* Loop
                        Index Data.

                    > Update
                */
                for (let i = 0; i < data.length; i += 1) {
                    // Data
                    (data[i].constructor.name != 'LapysJSTemporaryDataObject') || (data[i] = data[i].value);

                    // Target
                    this.push(data[i])
                }

                // Return
                return data
            }
        });

        // Remove Duplicated Elements From Front
        (typeof Array.prototype.removeDuplicatedElementsFromFront == 'function') || Object.defineProperty(Array.prototype, 'removeDuplicatedElementsFromFront', {
            // Value
            value: function removeDuplicatedElementsFromFront() {
                // Initialization > (Data, Metadata)
                let data = this.clone(),
                    metadata = this.clone().getRepeatedElements();

                /* Loop
                        Index Metadata.

                    > Update > Data
                */
                for (let i of metadata)
                    data = data.replaceElementFromFront(i, new (function LapysJSTemporaryDataObject() { this.value = i })).removeElements(i);

                // Modification > Target > Length
                this.length = 0;

                /* Loop
                        Index Data.

                    > Update
                */
                for (let i = 0; i < data.length; i += 1) {
                    // Data
                    (data[i].constructor.name != 'LapysJSTemporaryDataObject') || (data[i] = data[i].value);

                    // Target
                    this.push(data[i])
                }

                // Return
                return data
            }
        });

        /* Remove Element
                --- NOTE ---
                    Removes the first instance specified element of an array.
        */
        (typeof Array.prototype.removeElement == 'function') || Object.defineProperty(Array.prototype, 'removeElement', {
            // Value
            value: function removeElement() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Loop
                        Index Arguments.
                */
                for (let i of args)
                    // Update > Target
                    (that.indexOf(i) < 0) || that.splice(that.indexOf(i), 1);

                // Return
                return that
            }
        });

        // Remove Element From Back
        (typeof Array.prototype.removeElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'removeElementFromBack', {
            // Value
            value: function removeElementFromBack() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Loop
                        Index Arguments.
                */
                for (let i of args)
                    // Update > Target
                    (that.indexOf(i) < 0) || that.splice(that.indexOf(i), 1);

                // Return
                return that
            }
        });

        /* Remove Element From Front
                --- NOTE ---
                    Removes the last instance specified element of an array.
        */
         (typeof Array.prototype.removeElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'removeElementFromFront', {
            // Value
            value: function removeElementFromFront() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Loop
                        Index Arguments.
                */
                for (let i of args)
                    // Update > Target
                    (that.lastIndexOf(i) < 0) || that.splice(that.lastIndexOf(i), 1);

                // Return
                return that
            }
         });

        // Remove Elements
        (typeof Array.prototype.removeElements == 'function') || Object.defineProperty(Array.prototype, 'removeElements', {
            // Value
            value: function removeElements() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                // Function > Remove Element
                (function removeElement() {
                    /* Loop
                            Index elements of Element.
                    */
                    for (let i in args) {
                        // Update > Target
                        (that.indexOf(args[0]) < 0) || that.splice(that.indexOf(args[0]), 1);

                        // Break
                        break
                    };

                    // Function > Remove Element
                    (that.indexOf(args[0]) < 0) || removeElement()
                })();

                // Return
                return that
            }
        });

        // Remove Falsy Elements
        (typeof Array.prototype.removeFalsyElements == 'function') || Object.defineProperty(Array.prototype, 'removeFalsyElements', {
            // Value
            value: function removeFalsyElements() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.filter(Boolean);

                // Modification > Target > Length
                that.length = 0;

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that.push(i);

                // Return
                return that
            }
         });

        // Remove Repeated Elements
         (typeof Array.prototype.removeRepeatedElements == 'function') || Object.defineProperty(Array.prototype, 'removeRepeatedElements', {
            // Value
            value: function removeRepeatedElements() {
                // Initialization > (Target, Data, Metadata)
                    let that = this,
                        data = [new (function LapysJSObject() {})],
                        metadata = [];

                /* Loop
                        Index elements of Target.
                */
                for (let i of that) {
                    /* Loop
                            Index elements of Data.
                    */
                    for (let j of data)
                        // Update > Metadata
                        !(j === i && metadata.indexOf(i) < 0) || metadata.push(i);

                    // Update > Data
                    data.push(i)
                };

                /* Loop
                        Index Metadata.
                */
                for (let i = 0; i < metadata.length; i += 1)
                    // Update > Target
                    that.removeElements(metadata[i]);

                // Return
                return that
            }
         });

        // Remove Truthy Elements
        (typeof Array.prototype.removeTruthyElements == 'function') || Object.defineProperty(Array.prototype, 'removeTruthyElements', {
            // Value
            value: function removeTruthyElements() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.filter(data => {
                        // Return
                        return !data
                    });

                // Modification > Target > Length
                that.length = 0;

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that.push(i);

                // Return
                return that
            }
         });

        // Repeat Element
        (typeof Array.prototype.repeatElement == 'function') || Object.defineProperty(Array.prototype, 'repeatElement', {
            // Value
            value: function repeatElement() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args[0],
                    metadata = parseNumber(args[1]),
                    that = this;

                /* Loop
                        [for statement]

                    > Update > Target
                */
                for (let i = 0; i < metadata; i += 1)
                    that.unshift(data);

                // Return
                return that
            }
         });

        // Repeat Element To Back
        (typeof Array.prototype.repeatElementToBack == 'function') || Object.defineProperty(Array.prototype, 'repeatElementToBack', {
            // Value
            value: function repeatElementToBack() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args[0],
                    metadata = parseNumber(args[1]),
                    that = this;

                /* Loop
                        [for statement]

                    > Update > Target
                */
                for (let i = 0; i < metadata; i += 1)
                    that.unshift(data);

                // Return
                return that
            }
         });

        // Repeat Element To Front
        (typeof Array.prototype.repeatElementToFront == 'function') || Object.defineProperty(Array.prototype, 'repeatElementToFront', {
            // Value
            value: function repeatElementToFront() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args[0],
                    metadata = parseNumber(args[1]),
                    that = this;

                /* Loop
                        [for statement]

                    > Update > Target
                */
                for (let i = 0; i < metadata; i += 1)
                    that.push(data);

                // Return
                return that
            }
         });

        // Repeat Element Set
        (typeof Array.prototype.repeatElementSet == 'function') || Object.defineProperty(Array.prototype, 'repeatElementSet', {
            // Value
            value: function repeatElementSet() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args.slice(0, -1),
                    metadata = parseNumber(arguments[~-args.length]),
                    that = this;

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < metadata; i += 1)
                    /* Loop
                            [for statement]

                        > Update > Target
                    */
                    for (let j = ~-data.length; j > -1; j -= 1)
                        that.unshift(data[j]);

                // Return
                return that
            }
         });

        // Repeat Element Set To Back
        (typeof Array.prototype.repeatElementSetToBack == 'function') || Object.defineProperty(Array.prototype, 'repeatElementSetToBack', {
            // Value
            value: function repeatElementSetToBack() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args.slice(0, -1),
                    metadata = parseNumber(arguments[~-args.length]),
                    that = this;

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < metadata; i += 1)
                    /* Loop
                            [for statement]

                        > Update > Target
                    */
                    for (let j = ~-data.length; j > -1; j -= 1)
                        that.unshift(data[j]);

                // Return
                return that
            }
         });

        // Repeat Element Set To Front
        (typeof Array.prototype.repeatElementSetToFront == 'function') || Object.defineProperty(Array.prototype, 'repeatElementSetToFront', {
            // Value
            value: function repeatElementSetToFront() {
                // Initialization > (Arguments, Data, Metadata, Target)
                let args = [...arguments],
                    data = args.slice(0, -1),
                    metadata = parseNumber(arguments[~-args.length]),
                    that = this;

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < metadata; i += 1)
                    /* Loop
                            [for statement]

                        > Update > Target
                    */
                    for (let j = 0; j < data.length; j += 1)
                        that.push(data[j]);

                // Return
                return that
            }
         });

        // Replace Common Elements
        (typeof Array.prototype.replaceCommonElements == 'function') || Object.defineProperty(Array.prototype, 'replaceCommonElements', {
            // Value
            value: function replaceCommonElements() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.getCommonElement();

                /* Loop
                        Index Target's elements.

                    > Update > Target
                */
                for (let i = 0; i < that.length; i += 1)
                    (that[i] !== data) || (that[i] = arguments[0]);

                // Return
                return that
            }
        });

        // Replace Duplicated Element
        (typeof Array.prototype.replaceDuplicatedElement == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElement', {
            // Value
            value: function replaceDuplicatedElement() {
                // Initialization > (Target, Data, Metadata)
                let that = this,
                    data = that.getRepeatedElements(),
                    metadata = !1;

                /* Loop
                        Index Data.

                    > Update > (Target, Metadata)
                */
                for (let i of data) {
                    that = that.replaceElement(i, new (function LapysJSTemporaryDataObject() { this.value = i }));
                    metadata || (that = that.replaceElement(i, arguments[0]));
                    metadata = !0
                }

                /* Loop
                        Index Target.

                    > Update > Target
                */
                for (let i in that)
                    (that[i].constructor.name != 'LapysJSTemporaryDataObject') || (that[i] = that[i].value);

                // Return
                return that
            }
        });

        // Replace Duplicated Element From Back
        (typeof Array.prototype.replaceDuplicatedElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementFromBack', {
            // Value
            value: function replaceDuplicatedElementFromBack() {
                // Initialization > (Target, Data, Metadata)
                let that = this,
                    data = this.getRepeatedElements(),
                    metadata = !1;

                /* Loop
                        Index Data.

                    > Update > (Target, Metadata)
                */
                for (let i of data) {
                    that = that.replaceElementFromBack(i, new (function LapysJSTemporaryDataObject() { this.value = i }));
                    metadata || (that = that.replaceElementFromBack(i, arguments[0]));
                    metadata = !0
                }

                /* Loop
                        Index Target.

                    > Update > Target
                */
                for (let i in that)
                    (that[i].constructor.name != 'LapysJSTemporaryDataObject') || (that[i] = that[i].value);

                // Return
                return that
            }
        });

        // Replace Duplicated Element From Front
        (typeof Array.prototype.replaceDuplicatedElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementFromFront', {
            // Value
            value: function replaceDuplicatedElementFromFront() {
                // Initialization > (Target, Data, Metadata)
                let that = this,
                    data = this.getRepeatedElements(),
                    metadata = !1;

                /* Loop
                        Index Data.

                    > Update > (Target, Metadata)
                */
                for (let i of data) {
                    that = that.replaceElementFromFront(i, new (function LapysJSTemporaryDataObject() { this.value = i }));
                    metadata || (that = that.replaceElementFromFront(i, arguments[0]));
                    metadata = !0
                }

                /* Loop
                        Index Target.

                    > Update > Target
                */
                for (let i in that)
                    (that[i].constructor.name != 'LapysJSTemporaryDataObject') || (that[i] = that[i].value);

                // Return
                return that
            }
        });

        // Replace Duplicated Elements
        (typeof Array.prototype.replaceDuplicatedElements == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElements', {
            // Value
            value: function replaceDuplicatedElements() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that = that.replaceElement(i, new (function LapysJSTemporaryDataObject() { this.value = i })).replaceElements(i, arguments[0]);

                /* Loop
                        Index Target.

                    > Update > Target
                */
                for (let i in that)
                    (that[i].constructor.name != 'LapysJSTemporaryDataObject') || (that[i] = that[i].value);

                // Return
                return that
            }
        });

        // Replace Duplicated Elements From Back
        (typeof Array.prototype.replaceDuplicatedElementsFromBack == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementsFromBack', {
            // Value
            value: function replaceDuplicatedElementsFromBack() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that = that.replaceElementFromBack(i, new (function LapysJSTemporaryDataObject() { this.value = i })).replaceElements(i, arguments[0]);

                /* Loop
                        Index Target.

                    > Update > Target
                */
                for (let i in that)
                    (that[i].constructor.name != 'LapysJSTemporaryDataObject') || (that[i] = that[i].value);

                // Return
                return that
            }
        });

        // Replace Duplicated Elements From Front
        (typeof Array.prototype.replaceDuplicatedElementsFromFront == 'function') || Object.defineProperty(Array.prototype, 'replaceDuplicatedElementsFromFront', {
            // Value
            value: function replaceDuplicatedElementsFromFront() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.getRepeatedElements();

                /* Loop
                        Index Data.

                    > Update > Target
                */
                for (let i of data)
                    that = that.replaceElementFromFront(i, new (function LapysJSTemporaryDataObject() { this.value = i })).replaceElements(i, arguments[0]);

                /* Loop
                        Index Target.

                    > Update > Target
                */
                for (let i in that)
                    (that[i].constructor.name != 'LapysJSTemporaryDataObject') || (that[i] = that[i].value);

                // Return
                return that
            }
        });

        // Replace Element
        (typeof Array.prototype.replaceElement == 'function') || Object.defineProperty(Array.prototype, 'replaceElement', {
            // Value
            value: function replaceElement() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Logic
                        If
                            the Argument 0 is within the Array.

                    > Target > Update
                */
                if (that.indexOf(args[0]) > -1) {
                    that.splice(that.indexOf(args[0]), 0, args[1]);
                    that.splice(that.indexOf(args[0]), 1)
                }

                // Return
                return that
            }
        });

        // Replace Element From Back
        (typeof Array.prototype.replaceElementFromBack == 'function') || Object.defineProperty(Array.prototype, 'replaceElementFromBack', {
            // Value
            value: function replaceElementFromBack() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Logic
                        If
                            the Argument 0 is within the Array.

                    > Target > Update
                */
                if (that.indexOf(args[0]) > -1) {
                    that.splice(that.indexOf(args[0]), 0, args[1]);
                    that.splice(that.indexOf(args[0]), 1)
                }

                // Return
                return that
            }
        });

        // Replace Element From Front
        (typeof Array.prototype.replaceElementFromFront == 'function') || Object.defineProperty(Array.prototype, 'replaceElementFromFront', {
            // Value
            value: function replaceElementFromFront() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Logic
                        If
                            the Argument 0 is within the Array.

                    > Target > Update
                */
                if (that.lastIndexOf(args[0]) > -1) {
                    that.splice(that.lastIndexOf(args[0]), 0, args[1]);
                    that.splice(that.lastIndexOf(args[0]), 1)
                }

                // Return
                return that
            }
        });

        // Replace Elements
        (typeof Array.prototype.replaceElements == 'function') || Object.defineProperty(Array.prototype, 'replaceElements', {
            // Value
            value: function replaceElements() {
                // Initialization > (Arguments, Target)
                let args = [...arguments],
                    that = this;

                /* Loop
                        While
                            The Argument 0 is still detected.

                    > Update > Target
                */
                while (that.indexOf(args[0]) > -1) {
                    that.splice(that.indexOf(args[0]), 0, args[1]);
                    that.splice(that.indexOf(args[0]), 1)
                }

                // Return
                return that
            }
        });

        // Replace Falsy Elements
        (typeof Array.prototype.replaceFalsyElements == 'function') || Object.defineProperty(Array.prototype, 'replaceFalsyElements', {
            // Value
            value: function replaceFalsyElements() {
                // Initialization > (Arguments, Target, Data)
                let args = [...arguments],
                    that = this,
                    data = [...that];

                /* Loop
                        Index elements of Data.

                    > Update > Data
                */
                for (let i in data)
                    data[i] = !!data[i];

                /* Loop
                        While
                            A 'truthy' value is still detected.
                */
                while (data.indexOf(!1) > -1) {
                    /* Update > (Target, Data)
                            --- WARN ---
                                @lapys: Update the Data after the Target to prevent logical runtime errors and to prevent an infinite loop.
                    */
                    that.splice(data.indexOf(!1), 1);
                    that.splice(data.indexOf(!1), 0, args[0]);
                    data[data.indexOf(!1)] = !0
                }

                // Return
                return that
            }
        });

        // Replace Repeated Elements
        (typeof Array.prototype.replaceRepeatedElements == 'function') || Object.defineProperty(Array.prototype, 'replaceRepeatedElements', {
            // Value
            value: function replaceRepeatedElements() {
                // Initialization > (Arguments, Target, Data)
                let args = [...arguments],
                    that = this,
                    data = that.getRepeatedElements();

                /* Loop
                        Index members of Data.

                    > Update > Target
                */
                for (let i in data)
                    that.replaceElements(data[i], args[0]);

                // Return
                return that
            }
        });

        // Replace Truthy Elements
        (typeof Array.prototype.replaceTruthyElements == 'function') || Object.defineProperty(Array.prototype, 'replaceTruthyElements', {
            // Value
            value: function replaceTruthyElements() {
                // Initialization > (Arguments, Target, Data)
                let args = [...arguments],
                    that = this,
                    data = [...that];

                /* Loop
                        Index elements of Data.

                    > Update > Data
                */
                for (let i in data)
                    data[i] = !!data[i];

                /* Loop
                        While
                            A 'truthy' value is still detected.
                */
                while (data.indexOf(!0) > -1) {
                    /* Update > (Target, Data)
                            --- WARN ---
                                @lapys:
                                    - Update the Data after the Target to prevent logical runtime errors.
                                    - Update the Data as well to prevent an infinite loop.
                    */
                    that.splice(data.indexOf(!0), 1);
                    that.splice(data.indexOf(!0), 0, args[0]);
                    data[data.indexOf(!0)] = !1
                }

                // Return
                return that
            }
        });

        // Replace Uncommon Elements
        (typeof Array.prototype.replaceUncommonElements == 'function') || Object.defineProperty(Array.prototype, 'replaceUncommonElements', {
            // Value
            value: function replaceUncommonElements() {
                // Initialization > (Target, Data)
                let that = this,
                    data = that.getUncommonElement();

                /* Loop
                        Index Target's elements.

                    > Update > Target
                */
                for (let i in that)
                    (that[i] !== data) || (that[i] = arguments[0]);

                // Return
                return that
            }
        });

        // Stretch
        (typeof Array.prototype.stretch == 'function') || Object.defineProperty(Array.prototype, 'stretch', {
            // Value
            value: function stretch() {
                // Initialization > Data
                let data = parseNumber(arguments[0]);

                // Modification > Target > Length
                data < 0 && this.length + data < 0 ? this.length = 0 : this.length += data;

                // Return
                return this
            }
        });

    /* Document Type */
        // Stringify
        (typeof DocumentType.prototype.stringify == 'function') || Object.defineProperty(DocumentType.prototype, 'stringify', {
            // Value
            value: function stringify() {
                // Return
                return String(!this || String(('<!DOCTYPE ' + this.name + (this.publicId ? (" PUBLIC '" + this.publicId + "'") : '') + (!this.publicId && this.systemId ? ' SYSTEM' : '') + (this.systemId ? (" '" + this.systemId + "'") : '') + '>'))).replace('true', '')
            }
        });

    /* Function Data */
        /* Get Arguments
                --- UPDATE REQUIRED ---
                    @lapys: Needs improvement on syntax encoding.

                --- WARN ---
                    @lapys: This function is not meant to be used in production environments, yet...
        */
        (typeof Function.prototype.getArguments == 'function') || Object.defineProperty(Function.prototype, 'getArguments', {
            // Value
            value: function getArguments() {
                // Initialization > (Data, Target)
                let data = String(this).replace(/\/\/[^\n]{0,}\n/g, '\n').replace(/\/\*[^*]{0,}\*\/|\/\*[^\/]{0,}\*\//g, ''),
                    that = this;

                /* Update > Data
                        --- NOTE ---
                            @lapys: Convert all named functions to nameless functions.
                */
                !data.startsWith('function') || (data = data.replace(/function {0,}(\w|\$|_)(\w|\$|_|\-){0,}/, 'function'));

                /* Update > Data
                        --- NOTE ---
                            @lapys: Ignore all strings.

                        --- WARN ---
                            @lapys: The data must be trimmed for all arguments.
                */
                data = data.replace(/'[^']{0,}'/g, data => {
                    // Return
                    return [...data].join('⯀')
                }).replace(/"[^"]{0,}"/g, data => {
                    // Return
                    return [...data].join('⯀')
                }).replace(/`[^`]{0,}`/g, data => {
                    // Return
                    return [...data].join('⯀')
                }).trim();

                /* Logic
                        If
                            Data is an arrow function,
                            convert it to a default function.
                */
                if (!data.startsWith('function')) {
                    // Single-line Arrow Function
                    if (
                        data.indexOf('{') < data.indexOf('=>') ||
                        data.indexOf('{') < 0
                    )
                        data = 'function (' + (data.getBeforeChar('=>').indexOf('(') > -1 && data.getBeforeChar('=>').indexOf(')') > -1 ? data.getBeforeChar('=>') : '(' + data.getBeforeChar('=>') + ')').trim().slice('('.length, -')'.length).trim() + ') {' + data.getAfterChar('=>').trim() + '}';

                    // Single Argument, Confirmed Body Set
                    // Single Argument with parenthesis, Confirmed Body Set
                    // Multiple Arguments, Confirmed Body Set
                }

                /* Logic
                        If
                            Data is a default function instance.
                */
                if (data.startsWith('function'))
                    // Null Argument
                    if (data.slice('function'.length).getAfterChar('(').trim()[0] == ')')
                        data = [];

                    // Single Argument, Confirmed Body Set

                    // Single Argument, Unconfirmed Body Set
                    else if (that.length == 1 || data.slice('function').getAfterChar('(').trim()[0].hasText(/(\w|\$|_|\.)/))
                        data = [data.slice('function'.length).getAfterChar('(').replace(/\) {0,}\{/g, data => {
                            // Return
                            return '�' + data.slice(')'.length, -'{'.length) + ''
                        }).replace(/()([^()]*)$/, '').replace(/� {0,}/g, '').getBeforeChar('', !0).replace(/�/g, ')').replace(//g, '{')];

                    // Multiple Arguments, Confirmed Body Set

                    // Multiple Arguments, Unconfirmed Body Set

                    // Unconfirmed Argument Set, Unconfirmed Body Set
                    else
                        data = [null];

                /* Update > Data
                        --- NOTE ---
                            @lapys: Fix all strings.
                */
                !(data.length > 0 && data[0] !== null && typeof data[0] == 'string') || (data[0] = data[0].replace(/'[^']{0,}'/g, data => {
                    // Return
                    return data.replace(/⯀/g, '')
                }).replace(/"[^"]{0,}"/g, data => {
                    // Return
                    return data.replace(/⯀/g, '')
                }).replace(/`[^`]{0,}`/g, data => {
                    // Return
                    return data.replace(/⯀/g, '')
                }));

                // Return
                return data
            }
        });

        /* Get Body
                --- UPDATE REQUIRED ---
                    @lapys: Needs improvement on syntax encoding.

                --- WARN ---
                    @lapys: This function is not meant to be used in production environments, yet...
        */
        (typeof Function.prototype.getBody == 'function') || Object.defineProperty(Function.prototype, 'getBody', {
            // Value
            value: function getBody() {
                // Initialization > Data
                let data = String(this);

                // Return
                return data
            }
        });

    /* HTMLAllCollection Data */
        // First Element
        ('firstElement' in HTMLAllCollection.prototype) || Object.defineProperty(HTMLAllCollection.prototype, 'firstElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function firstElement() {
                // Return
                return this[0]
            }
        });

        // Last Element
        ('lastElement' in HTMLAllCollection.prototype) || Object.defineProperty(HTMLAllCollection.prototype, 'lastElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function lastElement() {
                // Return
                return this[~-this.length]
            }
        });

    /* HTMLCollection Data */
        // First Element
        ('firstElement' in HTMLCollection.prototype) || Object.defineProperty(HTMLCollection.prototype, 'firstElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function firstElement() {
                // Return
                return this[0]
            }
        });

        // Last Element
        ('lastElement' in HTMLCollection.prototype) || Object.defineProperty(HTMLCollection.prototype, 'lastElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function lastElement() {
                // Return
                return this[~-this.length]
            }
        });

    /* NodeList Data */
        // First Element
        ('firstElement' in NodeList.prototype) || Object.defineProperty(NodeList.prototype, 'firstElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function firstElement() {
                // Return
                return this[0]
            }
        });

        // Last Element
        ('lastElement' in NodeList.prototype) || Object.defineProperty(NodeList.prototype, 'lastElement', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function lastElement() {
                // Return
                return this[~-this.length]
            }
        });

    /* Object Data */
        // Clone
        (typeof Object.prototype.clone == 'function') || Object.defineProperty(Object.prototype, 'clone', {
            // Value
            value: function clone() {
                // Initialization > (Data, Deep, Target)
                let data,
                    deep = arguments.length > 0 ? arguments[0] : false,
                    that = this == document.all ? this : (this || window);

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
                            data = Object.assign(that, {});
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
                            data = that !== null && that !== void 0 ? eval('new (function ' + that.constructor.name + '() {})') : that
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
                        for (let i in that)
                            try {
                                // Update > Data
                                data[i] = that[i];
                            }

                            catch (error) {}

                        /* Loop
                                Index Target`s constructor properties.

                            > Error Handling
                        */
                        for (let i in that.constructor.prototype)
                            try {
                                // Update > Data
                                data[i] = that.constructor.prototype[i]
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
                let args = [...arguments],
                    data = arguments[0];

                // Update > Data
                (typeof data != 'number') || (data = String(data));

                /* Logic
                        [if:else if:else statement]
                */
                if (!arguments[2])
                    // Error Handling
                    try {
                        /* Logic
                                [if:else if:else statement]

                            > Return
                        */
                        if ('get' in args[1])
                            return Object.defineProperty(this || window, String(data), new (function Object() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (
                                    (args[1] || new (function LapysJSObject() {})).get ||
                                    (args[1] || new (function LapysJSObject() {})).set
                                ) {
                                    // Modification > Target
                                        // Configurable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).configurable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.configurable = (args[1] || new (function LapysJSObject() {})).configurable;

                                            else
                                                this.configurable = !0;

                                        // Enumerable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).enumerable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.enumerable = (args[1] || new (function LapysJSObject() {})).enumerable;

                                            else
                                                this.enumerable = !0;

                                        // Get
                                        !args[1].get || (this.get = args[1].get);

                                        // Set
                                        !args[1].set || (this.set = args[1].set)
                                }

                                else if (args.length > 0) {
                                    // Error Handling
                                    try {
                                        // Value
                                        this.value = 'value' in args[1] ? (args[1] || new (function LapysJSObject() {})).value : args[1]
                                    }

                                    catch (error) {
                                        // Value
                                        this.value = args[1]
                                    }

                                    // Writable
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if ((args[1] || new (function LapysJSObject() {})).writable !== void 0)
                                            this.writable = (args[1] || new (function LapysJSObject() {})).writable;

                                        else
                                            this.writable = !0
                                }
                            }));

                        else
                            Object.defineProperty(this || window, String(data), new (function Object() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (
                                    (args[1] || new (function LapysJSObject() {})).get ||
                                    (args[1] || new (function LapysJSObject() {})).set
                                ) {
                                    // Modification > Target
                                        // Configurable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).configurable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.configurable = (args[1] || new (function LapysJSObject() {})).configurable;

                                            else
                                                this.configurable = !0;

                                        // Enumerable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).enumerable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.enumerable = (args[1] || new (function LapysJSObject() {})).enumerable;

                                            else
                                                this.enumerable = !0;

                                        // Get
                                        !args[1].get || (this.get = args[1].get);

                                        // Set
                                        !args[1].set || (this.set = args[1].set)
                                }

                                else if (args.length > 0) {
                                    // Error Handling
                                    try {
                                        // Value
                                        this.value = 'value' in args[1] ? (args[1] || new (function LapysJSObject() {})).value : args[1]
                                    }

                                    catch (error) {
                                        // Value
                                        this.value = args[1]
                                    }

                                    // Writable
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if ((args[1] || new (function LapysJSObject() {})).writable !== void 0)
                                            this.writable = (args[1] || new (function LapysJSObject() {})).writable;

                                        else
                                            this.writable = !0
                                }
                            }));

                        // Return
                        return (this || window)[String(data)]
                    }

                    catch (error) {
                        /* Logic
                                [if:else if:else statement]

                            > Return
                        */
                        if (args[1].get)
                            return Object.defineProperty(this || window, String(data), new (function Object() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (
                                    (args[1] || new (function LapysJSObject() {})).get ||
                                    (args[1] || new (function LapysJSObject() {})).set
                                ) {
                                    // Modification > Target
                                        // Configurable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).configurable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.configurable = (args[1] || new (function LapysJSObject() {})).configurable;

                                            else
                                                this.configurable = !0;

                                        // Enumerable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).enumerable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.enumerable = (args[1] || new (function LapysJSObject() {})).enumerable;

                                            else
                                                this.enumerable = !0;

                                        // Get
                                        !args[1].get || (this.get = args[1].get);

                                        // Set
                                        !args[1].set || (this.set = args[1].set)
                                }

                                else if (args.length > 0) {
                                    // Error Handling
                                    try {
                                        // Value
                                        this.value = 'value' in args[1] ? (args[1] || new (function LapysJSObject() {})).value : args[1]
                                    }

                                    catch (error) {
                                        // Value
                                        this.value = args[1]
                                    }

                                    // Writable
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if ((args[1] || new (function LapysJSObject() {})).writable !== void 0)
                                            this.writable = (args[1] || new (function LapysJSObject() {})).writable;

                                        else
                                            this.writable = !0
                                }
                            }));

                        else
                            Object.defineProperty(this || window, String(data), new (function Object() {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (
                                    (args[1] || new (function LapysJSObject() {})).get ||
                                    (args[1] || new (function LapysJSObject() {})).set
                                ) {
                                    // Modification > Target
                                        // Configurable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).configurable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.configurable = (args[1] || new (function LapysJSObject() {})).configurable;

                                            else
                                                this.configurable = !0;

                                        // Enumerable
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (
                                                (args[1] || new (function LapysJSObject() {})).enumerable !== void 0 ||
                                                (args[1] || new (function LapysJSObject() {})).get ||
                                                (args[1] || new (function LapysJSObject() {})).set
                                            )
                                                this.enumerable = (args[1] || new (function LapysJSObject() {})).enumerable;

                                            else
                                                this.enumerable = !0;

                                        // Get
                                        !args[1].get || (this.get = args[1].get);

                                        // Set
                                        !args[1].set || (this.set = args[1].set)
                                }

                                else if (args.length > 0) {
                                    // Error Handling
                                    try {
                                        // Value
                                        this.value = 'value' in args[1] ? (args[1] || new (function LapysJSObject() {})).value : args[1]
                                    }

                                    catch (error) {
                                        // Value
                                        this.value = args[1]
                                    }

                                    // Writable
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if ((args[1] || new (function LapysJSObject() {})).writable !== void 0)
                                            this.writable = (args[1] || new (function LapysJSObject() {})).writable;

                                        else
                                            this.writable = !0
                                }
                            }));

                        // Return
                        return (this || window)[String(data)]
                    }

                else
                    return Object.defineProperty(this || window, data, arguments[1])
            }
        });

        // Free
        (typeof Object.prototype.free == 'function') || Object.defineProperty(Object.prototype, 'free', {
            // Value
            value: function free() {
                /* Loop
                        Index Target.

                    > Deletion
                */
                for (let i in this)
                    delete this[i]
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

        // Get (Property)
        (typeof Object.prototype.getProperty == 'function') || Object.defineProperty(Object.prototype, 'getProperty', {
            // Value
            value: function getProperty() {
                // Return
                return String(arguments[0]) in this ? this[String(arguments[0])] : void 0
            }
        });

        // Has Property
        (typeof Object.prototype.hasProperty == 'function') || Object.defineProperty(Object.prototype, 'hasProperty', {
            // Value
            value: function hasProperty() {
                // Return
                return String(arguments[0]) in this
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
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function get__name__() {
                // Return
                return this.constructor.name
            },

            /* Set
                    -- CONSIDER --
                        @lapys: Create a 'setter' for vendor scripts.
            */
            set: function set__name__() {}
        });

        // Set (Property)
        (typeof Object.prototype.setProperty == 'function') || Object.defineProperty(Object.prototype, 'setProperty', {
            // Value
            value: function setProperty() {
                // Return
                return this[String(arguments[0])] = arguments[1]
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
                return typeof this == 'string' ? (!this ? NaN : ((this.match(RegExp(String(arguments[0]).replace(/(\(|\)|\{|\}|\:|\<|\>|\[|\]|\.|\+|\*|\?|\\|\-|&|\$)/g, '\\$&'), 'g')) || new (function LapysJSObject() {})).length || new (function LapysJSObject() {}))) : (this.match(arguments[0]) || new (function LapysJSObject() {})).length
            }
        });

        // First Character
        'firstChar' in String.prototype || Object.defineProperty(String.prototype, 'firstChar', {
            // Configurable
            configurable: !1,

            // Enumerable
            enumerable: !1,

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
                // Initialization > (Arguments, Data)
                let args = [...arguments],
                    data = [];

                /* Loop
                        Index Arguments.

                    > Update > Data
                */
                for (let i in args) {
                    ((args[i] || new (function LapysJSObject() {})).constructor !== RegExp) || data.push(this.match(args[i]) !== null ? ('index' in this.match(args[i]) ? this.match(args[i]).index > -1 : this.match(args[i]).length > 0) : !1);
                    (typeof args[i] != 'string') || data.push(!((this.indexOf(args[i]) < 0) || !1));
                }

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
            configurable: !1,

            // Enumerable
            enumerable: !1,

            // Get
            get: function isRegistered() {
                // Initialization > Target
                let that = this;

                /* Return
                        --- NOTE ---
                            Error Handling is not safe here.
                */
                return that != '' ? document.createElement(that).toString().slice(0, -']'.length).endsWith('Element') &&
                    (document.createElement(that).toString().indexOf('HTMLUnknownElement') < 0) &&
                    (document.createElement(that).constructor !== HTMLElement) : !1
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

        // Randomize
        (typeof String.prototype.randomize == 'function') || Object.defineProperty(String.prototype, 'randomize', {
            // Value
            value: function randomize() {
                let data = '',
                    metadata = this.clone(!0);

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < this.length; i += 1) {
                    // Initialization > Random
                    let random = parseInt(rand(0, metadata.length));

                    // Update > Data
                    data += metadata[random];

                    // Deletion
                    metadata = metadata.removeChar(metadata[random])
                }

                // Return
                return data
            }
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
                // Initialization > (Arguments, Data)
                let args = [...arguments],
                    data = this.clone(!1);

                /* Logic
                        If there are Arguments.
                */
                if (args[0] && args.length > 0)
                    /* Loop
                            Index Arguments.

                        > Update > Data
                    */
                    for (let i in args)
                        data = data.replace(args[i].constructor === RegExp ? args[i] : RegExp(args[i]), '');

                // Return
                return data
            }
        });

        // To Array
        (typeof String.prototype.toArray == 'function') || Object.defineProperty(String.prototype, 'toArray', {
            // Value
            value: function toArray() {
                // Initialization > (Arguments, Target, Alpha, Data, Metadata)
                let args = [...arguments],
                    that = String(this),
                    alpha = String(that).trim(),
                    data = String(args.length > 0 ? args[0] : ',').trim()[0],
                    metadata = !args[1];

                // Update > Target
                !(alpha.endsWith(']') && alpha.startsWith('[')) || (that = that.slice('['.length, -']'.length));

                // Return
                return metadata == !1 ? array(that) : (function main(args, that, data, metadata) {
                    // Initialization > (Beta, Epsilon, Alpha, Test, Delta)
                    let beta = data.replace(',', '�'),
                        epsilon = beta.replace('�', ','),
                        alpha = '[',
                        test = function test(data) {
                            // Return
                            return data.replace(//g, '').replace(RegExp(epsilon, 'g'), '')
                        },
                        delta = that.replace(/([^\}]*\}[^\}]*)\}/g, '$1}').replace(/\{[^]{0,}\}/g, data => {
                            // Return
                            return test(data)
                        }).replace(/\{[^\}]{0,}\}/g, data => {
                            // Return
                            return test(data)
                        }).replace(RegExp('\\\\' + epsilon + '|' + '\\\\'), '').split(RegExp(epsilon, 'g'));

                    /* Loop
                            Index Delta.

                        > Update > Alpha
                    */
                    for (let i in delta)
                        alpha += (data => {
                            // Update > Data
                            data = data.replace(RegExp('\\\\' + epsilon + '|' + '\\\\'), '').replace(//g, epsilon).trim();
                            !((data.endsWith('}') && data.startsWith('function')) || data.endsWith('}') && data.startsWith('{')) || (data = '(' + data + ')');

                            // Initialization > Metadata
                            let metadata = data.clone(!1);

                            // Error Handling
                            try {
                                // Update > Data
                                data = eval(data.replace(//g, epsilon));
                            }

                            catch (error) {
                                // Update > Data
                                data = '"' + data.replace(/"/g, '\\"').replace(//g, epsilon) + '"'
                            }

                            /* Logic
                                    [switch:case:default statement]

                                > Update > Data
                            */
                            switch (getType(data)) {
                                // Object
                                case 'object':
                                    data = metadata.slice('('.length, -')'.length);
                                    break;

                                // String
                                case 'string':
                                    (data.endsWith('"') && data.startsWith('"')) || (data = '"' + data.replace(/"/g, '\\"') + '"');
                                    break;

                                // [Default]
                                default:
                                    data = metadata
                            }

                            // Return
                            return data.replace(//g, epsilon).replace(//g, epsilon)
                        })(delta[i]) + ', ';

                    // Update > Alpha
                    alpha = alpha.slice(0, - ', '.length) + ']';

                    try {
                        // Return
                        return eval(alpha)
                    }

                    catch (error) {
                        // LapysJS > Error
                        LapysJS.error(error)
                    }
                })(args, that, data, metadata)
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
                    let that = this.clone(!1);

                    /* Logic
                            [if:else if:else statement]

                        > Error Handling
                    */
                    if (!that.hasText(':'))
                        try {
                            // Return
                            return Object(eval(that))
                        }

                        catch (error) {
                            // Return
                            return Object(that)
                        }

                    /* Logic
                            [if:else if:else statement]

                            --- NOTE ---
                                @lapys: Basically correcting any syntax errors
                                    with the basic JSON Object structure.

                        > Update > Target
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
                    return JSON.parse('{' + (function() {
                        // Initialization > Array
                        let array = [];

                        /* Loop
                                Index ',' characters in Target
                        */
                        for (let i of that.split(/,/g)) {
                            // Initialization > Data
                            let data = i.trim();

                            // Update > Array
                            array.push("'" + data.getBeforeChar(':').replace(/\'/g, '') + "':" + data.getAfterChar(':'));
                        }

                        // Return
                        return array[0] !== '\'\':' ? String(array).replace(/'/g, '"').replace(/`/g, '"') : ''
                    })() + '}')
                }

                catch (error) {
                    // Error Handling
                    try {
                        // Return
                        return JSON.parse(this)
                    }

                    catch (error) {
                        // LapysJS > Error
                        LapysJS.error(error)
                    }
                }
            }
        });

        // To String Array
        (typeof String.prototype.toStringArray == 'function') || Object.defineProperty(String.prototype, 'toStringArray', {
            // Value
            value: function toStringArray() {
                // Return
                return this.split(RegExp('\\' + (arguments.length > 0 ? arguments[0] : ','), 'g'))
            }
        });

        // Trim Character
        (typeof String.prototype.trimChar == 'function') || Object.defineProperty(String.prototype, 'trimChar', {
            // Value
            value: function trimChar() {
                /* Initialization > Data
                        --- WARN ---
                            @lapys: Apparently in this case
                                Data can not be cloned.
                */
                let data = (' ' + this).slice(' '.length);

                /* Logic
                        [if:else if:else statement]
                */
                if (arguments.length > 0) {
                    // Initialization > (Left, Right) Counter
                    let leftCounter = 0,
                        rightCounter = 0;

                    /* Loop
                            [do:while statement]

                        > Update > (Data, Left Counter)
                    */
                    while (data.startsWith(String(arguments[0]))) {
                        data = data.slice(String(arguments[0]).length);
                        leftCounter += 1
                    }

                    /* Logic
                            If
                                Argument 1 is a string.
                    */
                    if (typeof arguments[1] == 'string')
                        /* Loop
                                Iterate over Left Counter.

                            > Update > Data
                        */
                        for (let i = 0; i < leftCounter; i += 1)
                            data = arguments[1] + data;

                    /* Loop
                            [do:while statement]

                        > Update > Data, Right Counter
                    */
                    while (data.endsWith(String(arguments[0]))) {
                        data = data.slice(0, -String(arguments[0]).length);
                        rightCounter += 1
                    }

                    /* Logic
                            If
                                Argument 1 is a string.
                    */
                    if (typeof arguments[1] == 'string')
                        /* Loop
                                Iterate over Right Counter.

                            > Update > Data
                        */
                        for (let i = 0; i < rightCounter; i += 1)
                            data = data + arguments[1];
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
                    // Initialization > Left Counter
                    let leftCounter = 0;

                    /* Loop
                            [do:while statement]

                        > Update > Data, Left Counter
                    */
                    while (data.startsWith(String(arguments[0]))) {
                        data = data.slice(String(arguments[0]).length);
                        leftCounter += 1
                    }

                    /* Logic
                            If
                                Argument 1 is a string.
                    */
                    if (typeof arguments[1] == 'string')
                        /* Loop
                                Iterate over Left Counter.

                            > Update > Data
                        */
                        for (let i = 0; i < leftCounter; i += 1)
                            data = arguments[1] + data;
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
                    // Initialization > Right Counter
                    let rightCounter = 0;

                    /* Loop
                            [do:while statement]

                        > Update > Data, Right Counter
                    */
                    while (data.endsWith(String(arguments[0]))) {
                        data = data.slice(0, -String(arguments[0]).length);
                        rightCounter += 1
                    }

                    /* Logic
                            If
                                Argument 1 is a string.
                    */
                    if (typeof arguments[1] == 'string')
                        /* Loop
                                Iterate over Right Counter.

                            > Update > Data
                        */
                        for (let i = 0; i < rightCounter; i += 1)
                            data = data + arguments[1];
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

    /* {Global Object Test} Logic
            [if:else if:else statement]
    */
    if (window && !LapysJS.executed && (LapysJS.script || new (function LapysJSObject() {})).nodeType == 1) {
        /* Global Data */
            // Alphabet String
            let alphabetString = 'abcdefghijklmnopqrstuvwxyz'.randomize(),
                def = Object.defineProperty;

            /* App
                    --- NOTE ---
                        @lapys: Unless the Application is explicitly made not to be defined, it is.
            */
            !(!Window.prototype.app && !document.isNotApp) || Object.defineProperty(Window.prototype, 'app', {
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
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getAuthor() {
                                // Return
                                return (document.querySelector('meta[name=author') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setAuthor() {
                                // Modification
                                (document.querySelector('meta[name=author') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[name=author') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' name=author>")
                            }
                        });

                        // Cache Control
                        Object.defineProperty(this.constructor.prototype, 'cacheControl', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getCacheControl() {
                                // Return
                                return (document.querySelector('meta[http-equiv=cache-control') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setCacheControl() {
                                // Modification
                                (document.querySelector('meta[http-equiv=cache-control') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[http-equiv=cache-control') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' http-equiv=cache-control>")
                            }
                        });

                        // Character Set
                        Object.defineProperty(this.constructor.prototype, 'charset', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getCharset() {
                                // Return
                                return (document.querySelector('meta[charset') || new (function LapysJSObject() {})).getAttribute('charset') || document.characterSet || ''
                            },

                            // Set
                            set: function setCharset() {
                                // Modification
                                (document.querySelector('meta[charset') || new (function LapysJSObject() {})).setAttribute('charset', arguments[0]);
                                document.querySelector('meta[charset') || (document.head.innerHTML += "\r<meta charset='" + arguments[0] + "'>")
                            }
                        });

                        // Connection
                        !navigator.connection || Object.defineProperty(this.constructor.prototype, 'connection', {value: navigator.connection});

                        // Cookies
                        this.cookies = document.cookie;

                        // Copyright
                        Object.defineProperty(this.constructor.prototype, 'copyright', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getCopyright() {
                                // Return
                                return (document.querySelector('meta[name=copyright') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setCopyright() {
                                // Modification
                                (document.querySelector('meta[name=copyright') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[name=copyright') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' name=copyright>")
                            }
                        });

                        // Description
                        Object.defineProperty(this.constructor.prototype, 'description', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getDescription() {
                                // Return
                                return (document.querySelector('meta[name=description') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setDescription() {
                                // Modification
                                (document.querySelector('meta[name=description') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[name=description') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' name=description>")
                            }
                        });

                        // Device Pixel Ratio
                        window.devicePixelRatio || (this.dpRatio = devicePixelRatio);

                        // Do Not Track
                        !navigator.doNotTrack || (this.doNotTrack = navigator.doNotTrack);

                        // Keywords
                        Object.defineProperty(this.constructor.prototype, 'keywords', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getKeywords() {
                                // Return
                                return (document.querySelector('meta[name=keywords') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setKeywords() {
                                // Modification
                                (document.querySelector('meta[name=keywords') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[name=keywords') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' name=keywords>")
                            }
                        });

                        // Name
                        Object.defineProperty(this.constructor.prototype, 'name', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getName() {
                                // Return
                                return window.short_name || window.name || document.title
                            },

                            // Set
                            set: function setName() {
                                // Modification
                                    // Document > Title
                                    document.title = arguments[0];

                                    // Window
                                        // Name
                                        window.name = arguments[0];

                                        // Short Name
                                        window.short_name = arguments[0]
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
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getRobots() {
                                // Return
                                return (document.querySelector('meta[name=robots') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setRobots() {
                                // Modification
                                (document.querySelector('meta[name=robots') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[name=robots') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' name=robots>")
                            }
                        });

                        // Theme Color
                        Object.defineProperty(this.constructor.prototype, 'themeColor', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function getThemeColor() {
                                // Return
                                return (document.querySelector('meta[name=theme-color') || new (function LapysJSObject() {})).content
                            },

                            // Set
                            set: function setThemeColor() {
                                // Modification
                                (document.querySelector('meta[name=theme-color') || new (function LapysJSObject() {})).content = arguments[0];
                                document.querySelector('meta[name=theme-color') || (document.head.innerHTML += "\r<meta content='" + arguments[0] + "' name=theme-color>")
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
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getHeight() {
                                    // Return
                                    return ((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content || '').getAfterChar('height').getBeforeChar(',').replace('=', '') || ''
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
                                        if ((document.querySelector('meta[name=viewport').content.match(/height {0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', height=' + arguments[0];

                                            else
                                                document.querySelector('meta[name=viewport').content = 'height=' + arguments[0];

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/height {0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, 'height=' + arguments[0]);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += "\r<meta content='height=" + arguments[0] + "' name=viewport>"
                                }
                            });

                            // Initial Scale
                            Object.defineProperty(this.viewport, 'initialScale', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getInitialScale() {
                                    // Return
                                    return parseFloat(((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content || '').getAfterChar('initial-scale').getBeforeChar(',').replace('=', '')) || ''
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
                                        if ((document.querySelector('meta[name=viewport').content.match(/initial-scale {0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', initial-scale=' + arguments[0];

                                            else
                                                document.querySelector('meta[name=viewport').content = 'initial-scale=' + arguments[0];

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/initial-scale {0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, 'initial-scale=' + arguments[0]);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += "\r<meta content='initial-scale=" + arguments[0] + "' name=viewport>"
                                }
                            });

                            // Maximum Scale
                            Object.defineProperty(this.viewport, 'maximumScale', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getMaximumScale() {
                                    // Return
                                    return parseFloat(((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content || '').getAfterChar('maximum-scale').getBeforeChar(',').replace('=', '')) || ''
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
                                        if ((document.querySelector('meta[name=viewport').content.match(/maximum-scale {0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', maximum-scale=' + arguments[0];

                                            else
                                                document.querySelector('meta[name=viewport').content = 'maximum-scale=' + arguments[0];

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/maximum-scale {0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, 'maximum-scale=' + arguments[0]);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += "\r<meta content='maximum-scale=" + arguments[0] + "' name=viewport>"
                                }
                            });

                            // Minimal UI
                            Object.defineProperty(this.viewport, 'minimalUI', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getMinimalUI() {
                                    /* Return
                                            --- UPDATE REQUIRED ---
                                                This still needs a bit of tweaking.
                                    */
                                    return (document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content.indexOf('minimal-ui') > -1
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
                                        document.head.innerHTML += '<meta content=minimal-ui name=viewport>'
                                }
                            });

                            // Minimum Scale
                            Object.defineProperty(this.viewport, 'minimumScale', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getMinimumScale() {
                                    // Return
                                    return parseFloat(((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content || '').getAfterChar('minimum-scale').getBeforeChar(',').replace('=', '')) || ''
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
                                        if ((document.querySelector('meta[name=viewport').content.match(/minimum-scale {0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', minimum-scale=' + arguments[0];

                                            else
                                                document.querySelector('meta[name=viewport').content = 'minimum-scale=' + arguments[0];

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/minimum-scale {0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, 'minimum-scale=' + arguments[0]);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += "\r<meta content='minimum-scale=" + arguments[0] + "' name=viewport>"
                                }
                            });

                            // Target Density DPI
                            Object.defineProperty(this.viewport, 'targetDensityDPI', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getTargetDensityDPI() {
                                    // Return
                                    return parseFloat((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).getAttribute('target-densitydpi'))
                                },

                                set: function setTargetDensityDPI() {
                                    // Modification > Viewport Metadata Element > Target Density DPI
                                    (document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).setAttribute('target-densitydpi', arguments[0])
                                }
                            });

                            // User Scalable
                            Object.defineProperty(this.viewport, 'userScalable', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getUserScalable() {
                                    // Return
                                    return ((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content || '').getAfterChar('user-scalable').getBeforeChar(',').replace('=', '') || ''
                                },

                                // Set
                                set: function setUserScalable() {
                                    // Initialization > Data
                                    let data = arguments[0];

                                    // Update > Data
                                    typeof data != 'string' ? (!data ? data = 'no' : data = 'yes') : (data != 'yes' && data != 'no') ? data = 'yes' : !1;

                                    /* Logic
                                            If
                                                a Viewport Metadata Element exists.
                                    */
                                    if (document.querySelector('meta[name=viewport'))
                                        /* Logic
                                                If
                                                    the Element does not have a 'user-scalable' content value.
                                        */
                                        if ((document.querySelector('meta[name=viewport').content.match(/user-scalable {0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', user-scalable=' + data;

                                            else
                                                document.querySelector('meta[name=viewport').content = 'user-scalable=' + data;

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/user-scalable {0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, 'user-scalable=' + data);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += "\r<meta content='user-scalable=" + arguments[0] + "' name=viewport>"
                                }
                            });

                            // Width
                            Object.defineProperty(this.viewport, 'width', {
                                // Configurable
                                configurable: !1,

                                // Enumerable
                                enumerable: !1,

                                // Get
                                get: function getWidth() {
                                    // Return
                                    return ((document.querySelector('meta[name=viewport') || new (function LapysJSObject() {})).content || '').getAfterChar('width').getBeforeChar(',').replace('=', '') || ''
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
                                        if ((document.querySelector('meta[name=viewport').content.match(/width {0,}=/g) || []).length < 1)
                                            /* Logic
                                                    If
                                                        the Element has a content value.

                                                > Update > Element > Content
                                            */
                                            if (document.querySelector('meta[name=viewport').content.indexOf('=') > -1)
                                                document.querySelector('meta[name=viewport').content += ', width=' + arguments[0];

                                            else
                                                document.querySelector('meta[name=viewport').content = 'width=' + arguments[0];

                                        else
                                            // Update > Element > Content
                                            document.querySelector('meta[name=viewport').content = document.querySelector('meta[name=viewport').content.replace(/width {0,}=([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\;\$\@\!\"\#\%\&\'\(\)\*\+\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\[\]\{\}\«\»\ ]|){1,}/, 'width=' + arguments[0]);

                                    else
                                        // Update > <head> > Inner HTML
                                        document.head.innerHTML += "\r<meta content='width=" + arguments[0] + "' name=viewport>"
                                }
                            });

                        // Version
                        Object.defineProperty(this, 'version', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

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
            Window.prototype.browser || Object.defineProperty(Window.prototype, 'browser', {
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
                                return (typeof InstallTrigger != 'undefined')
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
            Window.prototype.css || Object.defineProperty(Window.prototype, 'css', {
                // Value
                value: new (function CSSImportObject() {
                    /* Modification > Target
                            --- NOTE ---
                                @lapys: All properties defined here are volatile
                                    out of consideration for users.
                    */
                        // Link
                        this.constructor.prototype.link = function link() {
                            // Insertion
                            document.head.appendChild(LapysJS.perm.HTMLLinkElement = createElement('link', "[data-id='" + arguments[0] + "'"));

                            /* Logic
                                    If
                                        Argument 1 is an Object,

                                    else if
                                        Argument 1 is a String.
                            */
                            if (typeof arguments[1] == 'object')
                                /* Loop
                                        Index key-values of Argument 1.

                                    > Modification > (LapysJS > Permanent Data > HTML Link Element) > [Argument 1]
                                */
                                for (let i in arguments[1])
                                    LapysJS.perm.HTMLLinkElement.setAttribute(i.replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    }), arguments[1][i]);

                            else if (typeof arguments[1] == 'string')
                                // Modification > (LapysJS > Permanent Data > HTML Link Element) > Hyperlink Reference
                                LapysJS.perm.HTMLLinkElement.setAttribute('href', arguments[1])
                        };

                        // Style
                        this.constructor.prototype.style = function style() {
                            // Insertion
                            document.head.appendChild(createElement('style', "[data-id='" + arguments[0] + "'][media=all][type=text/css", String(arguments[1])))
                        }
                })
            });

            // File
            Window.prototype.file || Object.defineProperty(Window.prototype, 'file', {
                // Value
                value: new (function FileInformation() {
                    // Modification > Target
                        // Full Name
                        Object.defineProperty(this.constructor.prototype, 'fullName', {
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
                        Object.defineProperty(this.constructor.prototype, 'name', {
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
                        Object.defineProperty(this.constructor.prototype, 'type', {
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

            // JavaScript
            Window.prototype.js || Object.defineProperty(Window.prototype, 'js', {
                // Value
                value: new (function JavaScriptImportObject() {
                    /* Modification > Target
                            --- NOTE ---
                                @lapys: All properties defined here are volatile
                                    out of consideration for users.
                    */
                        // Script
                        this.constructor.prototype.script = function script() {
                            // Insertion
                            document.head.appendChild(createElement('script', "[data-id='" + arguments[0] + "'][language=javascript][type=text/javascript", String(arguments[1])))
                        };

                        // Source
                        this.constructor.prototype.src = function source() {
                            // Insertion
                            document.head.appendChild(LapysJS.perm.HTMLScriptElement = createElement('script', "[data-id='" + arguments[0] + "'][language=javascript][type=text/javascript"));

                            /* Logic
                                    If
                                        Argument 1 is an Object,

                                    else if
                                        Argument 1 is a String.
                            */
                            if (typeof arguments[1] == 'object')
                                /* Loop
                                        Index key-values of Argument 1.

                                    > Modification > (LapysJS > Permanent Data > HTML Script Element) > [Argument 1]
                                */
                                for (let i in arguments[1])
                                    LapysJS.perm.HTMLScriptElement.setAttribute(i.replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    }), arguments[1][i]);

                            else if (typeof arguments[1] == 'string')
                                // Modification > (LapysJS > Permanent Data > HTML Script Element) > Source
                                LapysJS.perm.HTMLScriptElement.setAttribute('src', arguments[1])
                    }
                })
            });

            // Operating System
            Window.prototype.os || Object.defineProperty(Window.prototype, 'os', {
                // Value
                value: new (function OperatingSystemInformation() {
                    // Modification > Target
                        // Macintosh
                        Object.defineProperty(this.constructor.prototype, 'macintosh', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function macintosh() {
                                // Return
                                return navigator.appVersion.indexOf('Mac') > -1
                            }
                        });

                        // Linux
                        Object.defineProperty(this.constructor.prototype, 'linux', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function linux() {
                                // Return
                                return navigator.appVersion.indexOf('Linux') > -1
                            }
                        });

                        // Unix
                        Object.defineProperty(this.constructor.prototype, 'unix', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function unix() {
                                // Return
                                return navigator.appVersion.indexOf('X11') > -1
                            }
                        });

                        // Windows
                        Object.defineProperty(this.constructor.prototype, 'windows', {
                            // Configurable
                            configurable: !0,

                            // Enumerable
                            enumerable: !0,

                            // Get
                            get: function windows() {
                                // Return
                                return navigator.appVersion.indexOf('Win') > -1
                            }
                        })
                })
            });

        /* Document */
            // Favorite Icon
            ('favicon' in Document.prototype) || (Object.defineProperty(Document.prototype, 'favicon', {
                // Configurable
                configurable: !0,

                // Enumerable
                enumerable: !0,

                // Get
                get: function getFavicon() {
                    // Return
                    return [...(document.querySelectorAll("link[href][rel*='icon'") || [null])]
                },

                // Set
                set: function setFavicon() {
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (
                        [...(document.querySelectorAll("link[href][rel*='icon'") || [null])][0] === null ||
                        [...(document.querySelectorAll("link[href][rel*='icon'") || [null])][0] === void 0
                    )
                        // Insertion
                        document.head.appendChild(createDocumentFragment("<link href='" + arguments[0] + "' rel=icon type=image/" + (String(arguments[0]).getAfterChar('.', !0) || 'x-icon') + "><link href='" + arguments[0] + "' rel='shortcut icon'><link href='" + arguments[0] + "' rel=icon type=image/vnd.microsoft.icon><link href='" + arguments[0] + "' rel=apple=touch-icon-precomposed>", 'div'));

                    else
                        /* Loop
                                [for statement]

                            > Modification > [Element] > (Hyperlink Reference, Type)
                        */
                        for (let i = 0; i < [...(document.querySelectorAll("link[href][rel*='icon'") || [null])].length; i += 1) {
                            [...(document.querySelectorAll("link[href][rel*='icon'") || [null])][i].href = arguments[0];
                            !([...(document.querySelectorAll("link[href][rel*='icon'") || [null])][i].getAttribute('type') || '').startsWith('type') || ([...(document.querySelectorAll("link[href][rel*='icon'") || null)].type = 'image/' + (String(arguments[0]).getAfterChar('.', !0) || 'x-icon'))
                        }
                }
            }));

            // Main
            Document.prototype.main || Object.defineProperty(Document.prototype, 'main', {
                // Configurable
                configurable: !1,

                // Enumerable
                enumerable: !1,

                // Get
                get: function main() {
                    // Return
                    return document.getElementsByTagName('main')[0]
                }
            });

            // Title (Element)
            Document.prototype.titleElement || Object.defineProperty(Document.prototype, 'titleElement', {
                // Configurable
                configurable: !1,

                // Enumerable
                enumerable: !1,

                // Get
                get: function title() {
                    // Return
                    return document.querySelector('title')
                }
            });

        /* DOM Elements */
            /* <br>, <wbr> */
                // On DOM Node Added
                onDOMNodeAdded(function() {
                    /* Loop
                            Index <br>, <wbr> elements.
                    */
                    for (let i of document.querySelectorAll('br, wbr'))
                        /* Logic
                                [if:else if:else statement]

                            > Modification > (<br>, <wbr>) > (...)
                        */
                        if (
                            i.getAttribute('length') == 2 ||
                            i.hasAttribute('2') ||
                            i.len == 2
                        ) {
                            i.removeAttribute('length');
                            i.removeAttribute('2');
                            i.outerHTML = i.outerHTML.repeat(2)
                        }

                        else if (
                            i.getAttribute('length') == 3 ||
                            i.hasAttribute('3') ||
                            i.len == 3
                        ) {
                            i.removeAttribute('length');
                            i.removeAttribute('3');
                            i.outerHTML = i.outerHTML.repeat(3)
                        }
                });

            /* <html> */
                // Modification > Language
                (document.documentElement || {}).lang = document.documentElement.lang || ((document.documentElement || {lang: 0}).lang || String(navigator.languages || '').replace(/, /, ',').replace(/,/g, ', '));

            /* <img>, Lazy Script
                    --- NOTE ---
                        @lapys: A bit more consistency between the
                            Lazy Scripts and Script elements would be nice
                            in terms of parsing their JavaScript.

                            P.S.: The Script currently has the updated parser.
            */
                // On DOM Ready
                onDOMReady(function() {
                    // Invoke Event
                    invokeEvent('resize scroll', function lazyScript() {
                        /* Loop
                                Index 'lazy' <img> elements.

                            > Logic
                                    If
                                        the <img> is in view.
                        */
                        for (let i of document.querySelectorAll('img[lazy-load'))
                            if ((window.innerHeight + window.scrollY) > ~-i.getBoundingClientRect().top) {
                                // Modification > <img> > (Lazy Loaded, Source)
                                i.setAttribute('lazy-loaded', '');
                                i.src = i.getAttribute('lazy-load')
                            };

                        /* Loop
                                Index "lazy" <img> elements.

                            > Logic
                                    If
                                        the <img> is in view.

                            > Modification > <img> > Lazy Load
                        */
                        for (let i = 0; i < document.querySelectorAll('img[lazy-load').length; i += 1)
                            ((window.innerHeight + window.scrollY) < document.querySelectorAll('img[lazy-load')[i].getBoundingClientRect().top) || document.querySelectorAll('img[lazy-load')[i--].removeAttribute('lazy-load');

                        /* Loop
                                Index 'lazily scripted' elements.
                        */
                        for (let i = 0; i < document.querySelectorAll('[lazy-script').length; i += 1) {
                            // Modification > Element
                                // Lazy Script
                                document.querySelectorAll('[lazy-script')[i].setAttribute(
                                    'lazy-script',

                                    document.querySelectorAll('[lazy-script')[i].getAttribute('lazy-script').replace(/this( |){1,}\.( |){1,}outerHTML = /g, data => {
                                        // Return
                                        return "this['LapysJS outerHTML'] = "
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
                                        return data[0] + data.slice('"'.length, -'"'.length).replace(/(?:)/g, '::lapysjs_' + alphabetString + '::') + data[0]
                                    }).replace(/this( |){1,}(\.|\[( |){1,}('|"|`))/g, data => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (data[~-data.length] === '.')
                                            return "document.querySelector('[" + alphabetString + i + "').";

                                        // Return
                                        return "document.querySelector('[" + alphabetString + i + "')[" + data.getAfterChar('[')
                                    }).replace(RegExp('::lapysjs_' + alphabetString + '::', 'g'), '')
                                );

                                // [Random String]
                                document.querySelectorAll('[lazy-script')[i].setAttribute(alphabetString + i, alphabetString + i);

                                // Remove
                                document.querySelectorAll('[lazy-script')[i]['LapysJS remove'] = document.querySelectorAll('[lazy-script')[i].remove.clone();
                                document.querySelectorAll('[lazy-script')[i].remove = function() { document.querySelectorAll('[lazy-script')[i]['LapysJS toBeRemoved'] = !0 }
                        };

                        /* Loop
                                Index 'lazily scripted' elements.

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
                                Index 'lazily scripted' elements.
                        */
                        for (let i = 0; i < document.querySelectorAll('[lazy-script').length; i += 1) {
                            // Modification > Element > Outer HTML
                            !document.querySelectorAll('[lazy-script')[i]['LapysJS outerHTML'] || (document.querySelectorAll('[lazy-script')[i].outerHTML = document.querySelectorAll('[lazy-script')[i--]['LapysJS outerHTML']);

                            // Deletion
                            !document.querySelectorAll('[lazy-script')[i]['LapysJS toBeRemoved'] || (document.querySelectorAll('[lazy-script')[i--].outerHTML = '')
                        };

                        /* Loop
                                Index "lazily-scripted" elements.

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
                    document.querySelector('option:not([label])').label = document.querySelector('option:not([label])').innerText.trim();

            /* <time> */
                // On DOM Ready
                onDOMReady(function() {
                    /* On DOM Change
                            --- NOTE ---
                                @lapys: The 'onDOMChange' function can also be used here,
                                    actually it's more subtle.
                    */
                    setInterval(function() {
                        /* Loop
                                Index Dynamic Time.
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
                                        setTimeout(function() {
                                            element.innerText = (new Date)['get' + (element.hasAttribute('data-utc-format') ? 'UTC' : '') + element.getAttribute('data-format').replace(/ /g, '')[0].toUpperCase() + element.getAttribute('data-format').replace(/ /g, '').replace(/\-[a-z]/g, data => {
                                                return data[1].toUpperCase()
                                            }).slice(element.getAttribute('data-format').replace(/ /g, '')[0].length)]()
                                        }, 10)
                                    }

                                    catch (error) {
                                        // Modification > Dynamic Time > Inner Text
                                        document.querySelectorAll('time.dynamic-time')[i].innerText = '[LapysJS ' + LapysJS.version + '] => SyntaxError: Error evaluating parsed value.'
                                    }
                            }
                    }, 10)
                });

            // Script
                // On DOM Node Count Change
                onDOMNodeCountChange(function() {
                    /* Loop
                            Index Script Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('[script').length; i += 1)
                        /* Logic
                                [if:else if:else statement]
                        */
                        if (!document.querySelectorAll('[script')[i]['LapysJS script']) {
                            // Modification > Script
                                // Script
                                document.querySelectorAll('[script')[i].setAttribute('script', document.querySelectorAll('[script')[i].getAttribute('script') || '');

                                // Script Element ID
                                document.querySelectorAll('[script')[i]['LapysJS scriptElementID'] = String(Math.random());

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

                                // Set
                                set: function setScript() {
                                    // Modification > Target > Script
                                    this.setAttribute('script', arguments[0] || '')
                                }
                            });

                            // On Node Change
                            onNodeChange(document.querySelectorAll('[script')[i], data => {
                                /* Set Timeout
                                        --- NOTE ---
                                            @lapys: The element`s script attribute update can not be read accurately
                                                without a delay.
                                */
                                setTimeout(function() {
                                    /* Logic
                                            If
                                                the element no longer has a script attribute,

                                            else if
                                                the element`s script attribute is different from its script property.
                                    */
                                    if (!data.hasAttribute('script')) {
                                        // Deletion
                                        delete data['LapysJS script']
                                        delete data['LapysJS scriptElementID']
                                        delete data.script
                                    }

                                    else if (data.getAttribute('script') != data['LapysJS script']) {
                                        // Modification
                                            // Script > Script
                                            data['LapysJS script'] = data.getAttribute('script');

                                            // LapysJS > (Permanent Data > Script Element List) > [Script > Script Element ID]
                                            LapysJS.perm.scriptElementList[data['LapysJS scriptElementID']] || (LapysJS.perm.scriptElementList[data['LapysJS scriptElementID']] = data);

                                        // Execution
                                        eval('(function(...args) {\n' + data.script.replace(/[^:]\/\/(.*[^\n])\n/g, '$&\n').trim() + "\n}).call(LapysJS.perm.scriptElementList['" + data['LapysJS scriptElementID'] + "'], LapysJS.perm.scriptElementList['" + data['LapysJS scriptElementID'] + "'], '" + data['LapysJS script'] + "', window, window.document, window.global || null, window.undefined || void 0)")
                                    }
                                })
                            }, document.querySelectorAll('[script')[i])
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
                            // Initialization > (Arguments, Target)
                            let args = [...arguments] || [],
                                that = this;

                            /* Logic
                                    If
                                        the Target has a class.
                            */
                            if (that.getAttribute('class')) {
                                /* Loop
                                        Index Arguments.

                                    > Update > Arguments
                                */
                                for (let i in args)
                                    args[i] = String(args[i]);

                                // Initialization > (Data, Metadata)
                                let data = [],
                                    metadata = [...args];

                                /* Loop
                                        Index Arguments.
                                */
                                for (let i in args) {
                                    // Initialization > Alpha
                                    let alpha = args[i].split(/ /g);

                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (alpha.length > 1)
                                        /* Loop
                                                Index split elements of that Argument.

                                            > Update > Metadata
                                        */
                                        for (let i of alpha)
                                            metadata.push(i)
                                }

                                // Update > Metadata
                                metadata = metadata.removeRepeatedElements().filter(data => {
                                    // Return
                                    return data.indexOf(' ') < 0
                                });

                                /* Loop
                                        Index elements of Input Class.

                                    > Update > Data
                                */
                                for (let i of metadata)
                                    data.push(LapysJS.debug.formatText(that.getAttribute('class'), 4).indexOf(i) > -1);

                                // Return
                                return data.indexOf(!1) < 0
                            }

                            // Return
                            return !1
                        }
                    });

                    // Add Class
                    (typeof Element.prototype.addClass == 'function') || Object.defineProperty(Element.prototype, 'addClass', {
                        // Value
                        value: function addClass() {
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Loop
                                    Index Arguments.
                            */
                            for (let i in args) {
                                // Initialization > (Data, Metadata)
                                let data = args[i],
                                    metadata = data.split(/ /g);

                                /* Loop
                                        Iterate over the number of white-spaces the Argument has.
                                */
                                for (let j of metadata)
                                    // Update > Name
                                    (LapysJS.debug.formatText(that.getAttribute('class') || '', 4).indexOf(j) < 0) || (data = data.replace(j, ''));

                                // Update > Arguments
                                data = data.trim();

                                // Modification > Target > Class
                                (that.hasClass(data) || (function() {
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
                                            return (that.getAttribute('class').indexOf(data) > -1);

                                        else
                                            return that.hasClass(data);

                                    // Return
                                    return that.hasClass(data)
                                })()) || that.setAttribute('class', LapysJS.debug.formatText(((that.getAttribute('class') || '') + ' ' + data), 4).removeDuplicatedElements().join(' ').trim());
                                (data != '' && void data == !1) || (that.getAttribute('class') || that.removeAttribute('class'))
                            }

                            // Return
                            return that.attributes.class || null
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
                                    let data = this.getEvents().clone(true),
                                        random = rand();

                                    // Modification > Target
                                        // LapysJS Random Attribute
                                        this.setAttribute('lapysjs-random-attribute', random);

                                        // Outer HTML
                                        this.outerHTML = this.outerHTML.replace('<' + this.tagName.toLowerCase(), '<' + arguments[0]).replace('<' + this.tagName, '<' + arguments[0]).replace('</' + this.tagName.toLowerCase() + '>', '</' + arguments[0] + '>').replace('</' + this.tagName + '>', '</' + arguments[0] + '>');

                                    // Initialization > Element
                                    let element = document.querySelector("[lapysjs-random-attribute='" + random + "'");

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
                                LapysJS.error("Uncaught TypeError: Failed to execute 'changeElementTag' on 'Element': 1 argument required, but only 0 present.")
                        }
                    });

                    // [Query Indexer]
                    (typeof Element.prototype.$x == 'function') || Object.defineProperty(Element.prototype, '$x', {
                        // Value
                        value: function() {
                            // Return
                            return (this === window || this === document ? document.documentElement : this).children[arguments[0]] || null
                        }
                    });
                        (typeof Element.prototype.$x != 'function') || (typeof $x == 'function') || Object.defineProperty(Window.prototype, '$x', {value: Element.prototype.$x});
                        (typeof Element.prototype.$x != 'function') || (typeof document.$x == 'function') || Object.defineProperty(Document.prototype, '$x', {value: Element.prototype.$x});

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
                            if ((arguments[0] || new (function LapysJSObject() {})).constructor !== window.Attr)
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
                                            Index the Target"s attributes.

                                        > Modification > Target > [Name]
                                    */
                                    for (let i = 0; i < this.attributes.length; i += 1)
                                        this.removeAttribute(this.attributes[i--].name);

                                else
                                    /* Loop
                                            Index Names.

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
                                    Index elements of Data.
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
                                            LapysJS.debug.formatText(this.getAttribute('class'), 4).indexOf('_all') < 0
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
                                                this.setAttribute('class', String(LapysJS.debug.formatText(this.getAttribute('class'), 4).removeElement(LapysJS.debug.formatText(this.getAttribute('class'), 4)[[...arguments][i]])).replace(/,/g, ' ').trim())
                                        }

                                        else if (typeof [...arguments][i] == 'string')
                                            /* Loop
                                                    Index Data class values.

                                                > Modification > Target > Class
                                            */
                                            for (let j = 0; j < LapysJS.debug.formatText([...arguments][i], 4).length; j += 1)
                                                this.setAttribute('class', String(this.getAttribute('class').trim().split(/ /g).removeElement(LapysJS.debug.formatText([...arguments][i], 4)[j])).replace(/,/g, ' ').trim());

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
                                    Index Arguments.
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
                                                        (function() {
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

                                                            if (that.getAttribute('style').indexOf([...arguments][i] + ': ' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String([...arguments][i] + ': ' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))).length);

                                                            else if (that.getAttribute('style').indexOf([...arguments][i] + ':' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String([...arguments][i] + ':' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))).length);

                                                            else if (that.getAttribute('style').indexOf([...arguments][i] + ' :' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String([...arguments][i] + ' :' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))).length);

                                                            else if (that.getAttribute('style').indexOf([...arguments][i] + ' : ' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + String([...arguments][i] + ' : ' + (that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i]))).length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })() +

                                                        // [value;]
                                                        (function() {
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
                                                            if (that.getAttribute('style').indexOf((that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i])) + '; ') > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + '; '.length);

                                                            else if (that.getAttribute('style').indexOf((that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i])) + ' ;') > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + ' ;'.length);

                                                            else if (that.getAttribute('style').indexOf((that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i])) + ';') > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf([...arguments][i]) + ';'.length);

                                                            else if (that.getAttribute('style').indexOf((that.style[[...arguments][i]] || getComputedStyle(that).getPropertyValue([...arguments][i])) + ' ; ') > -1)
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

                    // [First Element Child]
                    '$1' in Element.prototype || Object.defineProperty(Element.prototype, '$1', temporaryData = {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function() {
                            // Return
                            return (this === window || this === document ? document.documentElement : this).firstElementChild
                        }
                    });
                        !('$1' in Element.prototype) || '$1' in window || Object.defineProperty(Window.prototype, '$1', temporaryData);
                        !('$1' in Element.prototype) || '$1' in document || Object.defineProperty(Document.prototype, '$1', temporaryData);

                    // Get Attribute
                    (typeof Element.prototype.getAttr == 'function') || Object.defineProperty(Element.prototype, 'getAttr', {
                        // Value
                        value: function getAttr() {
                            // Initialization > (Target, Attributes)
                            let that = this,
                                Attributes = [];

                            /* Loop
                                    Index Arguments.
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
                                                Index the Target's attributes.

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
                                    Index elements of Property.
                            */
                            for (let i = 0; i < [...arguments].length; i += 1)
                                // Return
                                array.push(
                                    this.style[[...arguments][i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    })] || getComputedStyle(this).getPropertyValue([...arguments][i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
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
                            return this.querySelector('#' + String(arguments[0])) || null
                        }
                    });

                    // Has Attribute
                    (typeof Element.prototype.hasAttr == 'function') || Object.defineProperty(Element.prototype, 'hasAttr', {
                        // Value
                        value: function hasAttr() {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index Arguments.
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
                                Index parents of Target.

                               > Update > (Left, Top)
                            */
                            for (let i = 0; i < this.parentPath; i += 1) {
                                left += this.parentPath[i];
                                top += this.parentPath[i]
                            }

                            // Return
                            return this.getCSS('display') == 'none' ? !1 : (!arguments[0] == !1 ? left < (innerWidth + pageXOffset) && pageXOffset < (left + this.offsetWidth) && pageYOffset < (this.offsetHeight + top) && top < (innerHeight + pageYOffset) : left > ~-pageXOffset && (left + this.offsetWidth) < (pageXOffset + innerWidth + 1) && top > ~-pageYOffset && (this.offsetHeight + top) < (pageYOffset + innerHeight + 1))
                        }
                    });

                    // Insert Adjacent Comment
                    (typeof Element.prototype.insertAdjacentComment == 'function') || Object.defineProperty(Element.prototype, 'insertAdjacentComment', {
                        // Value
                        value: function insertAdjacentComment() {
                            // Target > Insert Adjacent HTML
                            this.insertAdjacentHTML(String(arguments[0]), '<!--' + arguments[1] + '-->', [...arguments].slice(2))
                        }
                    });

                    // [Last Element Child]
                    '$n' in Element.prototype || Object.defineProperty(Element.prototype, '$n', temporaryData = {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function() {
                            // Return
                            return (this === window || this === document ? document.documentElement : this).lastElementChild
                        }
                    });
                        !('$n' in Element.prototype) || '$n' in window || Object.defineProperty(Window.prototype, '$n', temporaryData);
                        !('$n' in Element.prototype) || '$n' in document || Object.defineProperty(Document.prototype, '$n', temporaryData);

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

                    // [Penultimate Element Child]
                    '$n1' in Element.prototype || Object.defineProperty(Element.prototype, '$n1', temporaryData = {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function() {
                            // Return
                            return (this === window || this === document ? document.documentElement : this).children[(this === window || this === document ? document.documentElement : this).children.length - 2] || null
                        }
                    });
                        !('$n1' in Element.prototype) || '$n1' in window || Object.defineProperty(Window.prototype, '$n1', temporaryData);
                        !('$n1' in Element.prototype) || '$n1' in document || Object.defineProperty(Document.prototype, '$n1', temporaryData);

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

                    // [Second Element Child]
                    '$2' in Element.prototype || Object.defineProperty(Element.prototype, '$2', temporaryData = {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function() {
                            // Return
                            return (this === window || this === document ? document.documentElement : this).children[1] || null
                        }
                    });
                        !('$2' in Element.prototype) || '$2' in window || Object.defineProperty(Window.prototype, '$2', temporaryData);
                        !('$2' in Element.prototype) || '$2' in document || Object.defineProperty(Document.prototype, '$2', temporaryData);

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
                            ((arguments[0] || new (function LapysJSObject() {})).constructor !== window.Attr) || this.setAttr(arguments[0]);

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
                            // Initialization > (Arguments, Data, Metadata)
                            let args = [...arguments],
                                data = [],
                                metadata = [];

                            // Function > Test
                            function test(temporaryData, _metadata) {
                                // Update > Data
                                !(
                                    _metadata == 'animation-delay' || _metadata == 'animation-duration' ||
                                    _metadata == 'transition-delay' || _metadata == 'transition-duration'
                                ) || String(temporaryData).endsWith('s') || (temporaryData = temporaryData + 's');

                                !(
                                    _metadata == 'background-position-x' || _metadata == 'background-position-y' || _metadata == 'block-size' || _metadata == 'border-bottom-left-radius' || _metadata == 'border-bottom-right-radius' || _metadata == 'border-bottom-width' || _metadata == 'border-image-outset' || _metadata == 'border-left-width' || _metadata == 'border-right-width' || _metadata == 'border-top-left-radius' || _metadata == 'border-top-right-radius' || _metadata == 'border-top-width' || _metadata == 'border-width' || _metadata == 'bottom' ||
                                    _metadata == 'column-rule-width' ||
                                    _metadata == 'font-size' ||
                                    _metadata == 'grid-column-gap' || _metadata == 'grid-row-gap' ||
                                    _metadata == 'height' ||
                                    _metadata == 'inline-size' ||
                                    _metadata == 'left' || _metadata == 'line-height-step' ||
                                    _metadata == 'margin' || _metadata == 'margin-bottom' || _metadata == 'margin-left' || _metadata == 'margin-right' || _metadata == 'margin-top' || _metadata == 'max-block-size' || _metadata == 'max-height' || _metadata == 'max-inline-size' || _metadata == 'max-width' || _metadata == 'min-block-size' || _metadata == 'min-height' || _metadata == 'min-inline-size' || _metadata == 'min-width' ||
                                    _metadata == 'padding' || _metadata == 'padding-bottom' || _metadata == 'padding-left' || _metadata == 'padding-right' || _metadata == 'padding-top' || _metadata == 'perspective' || _metadata == 'perspective-origin' ||
                                    _metadata == 'r' || _metadata == 'rx' || _metadata == 'ry' || _metadata == 'right' ||
                                    _metadata == 'shape-margin' || _metadata == 'stroke-dash-offset' || _metadata == 'stroke-width' ||
                                    _metadata == 'text-indent' || _metadata == 'top' ||
                                    _metadata == 'x' ||
                                    _metadata == 'y' ||
                                    _metadata == 'width'
                                ) || String(temporaryData).endsWith('px') || (temporaryData = temporaryData + 'px');

                                // Return
                                return temporaryData
                            };

                            // Modification > Target > Style
                            this.setAttribute('style', this.getAttribute('style') || '');

                            /* Logic
                                    If
                                        Argument 0 is an object
                                            and
                                        there is only a single Argument,

                                    else if
                                        Argument 0 is an array
                                            and
                                        Argument 1 is an array,

                                    else if
                                        Argument 0 is an array
                                            and
                                        Argument 1 is a string,

                                    else if
                                        Argument 0 is a string
                                            and
                                        Argument 1 is an array,

                                    else if
                                        Argument 0 is a string
                                            and
                                        there are multiple Arguments,

                                    else if
                                        Argument 0 is a string
                                            and
                                        there is only a single Argument.
                            */
                            if (isObject(args[0]) && args.length == 1) {
                                // Initialization > Property (Name, Value)
                                let propertyName = '',
                                    propertyValue = '';

                                /* Loop
                                        Index Argument 0.
                                */
                                for (let i = 0; i < Object.keys(args[0]).length; i += 1) {
                                    /* Logic
                                            If
                                                Argument 0`s value is an object.
                                    */
                                    if (isObject(args[0][Object.keys(args[0])[i]], !0)) {
                                        /* Loop
                                                Index Argument 0`s value.
                                        */
                                        for (let j = 0; j < Object.keys(args[0][Object.keys(args[0])[i]]).length; j += 1) {
                                            /* Logic
                                                    If
                                                        Argument 0`s value`s value is an object.
                                            */
                                            if (isObject(args[0][Object.keys(args[0])[i]][Object.keys(args[0][Object.keys(args[0])[i]])[j]], !0)) {
                                                /* Loop
                                                        Index Argument 0`s value`s value.
                                                */
                                                for (let k = 0; k < Object.keys(args[0][Object.keys(args[0])[i]][Object.keys(args[0][Object.keys(args[0])[i]])[j]]).length; k += 1) {
                                                    // Update > Property (Name, Value)
                                                    propertyName = (
                                                        Object.keys(args[0])[i] + '-' +
                                                        Object.keys(args[0][Object.keys(args[0])[i]])[j] + '-' +
                                                        Object.keys(args[0][Object.keys(args[0])[i]][Object.keys(args[0][Object.keys(args[0])[i]])[j]])[k]
                                                    ).replace(/[A-Z]/g, data => {
                                                        // Return
                                                        return '-' + data.toLowerCase()
                                                    });
                                                    propertyValue = test(args[0][Object.keys(args[0])[i]][Object.keys(args[0][Object.keys(args[0])[i]])[j]][Object.keys(args[0][Object.keys(args[0])[i]][Object.keys(args[0][Object.keys(args[0])[i]])[j]])[k]], propertyName);

                                                    // Update > (Data, Metadata)
                                                    data.push(propertyName);
                                                    metadata.push(propertyValue)
                                                }
                                            }

                                            else {
                                                // Update > Property (Name, Value)
                                                propertyName = (
                                                    Object.keys(args[0])[i] + '-' +
                                                    Object.keys(args[0][Object.keys(args[0])[i]])[j]
                                                ).replace(/[A-Z]/g, data => {
                                                    // Return
                                                    return '-' + data.toLowerCase()
                                                });
                                                propertyValue = test(args[0][Object.keys(args[0])[i]][Object.keys(args[0][Object.keys(args[0])[i]])[j]], propertyName);

                                                // Update > (Data, Metadata)
                                                data.push(propertyName);
                                                metadata.push(propertyValue)
                                            }
                                        }
                                    }

                                    else {
                                        // Update > Property (Name, Value)
                                        propertyName = Object.keys(args[0])[i].replace(/[A-Z]/g, data => {
                                            // Return
                                            return '-' + data.toLowerCase()
                                        });
                                        propertyValue = test(args[0][Object.keys(args[0])[i]], propertyName);

                                        // Update > (Data, Metadata)
                                        data.push(propertyName);
                                        metadata.push(propertyValue)
                                    }
                                }
                            }

                            else if ((args[0] || '').constructor == Array && (args[1] || '').constructor == Array) {
                                // Initialization > Property (Name, Value)
                                let propertyName = '',
                                    propertyValue = '';

                                /* Loop
                                        Index Argument 0.
                                */
                                for (let i = 0; i < args[0].length; i += 1) {
                                    // Update > Property (Name, Value)
                                    propertyName = args[0][i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    });
                                    propertyValue = test(args[1][i], propertyName);

                                    // Update > (Data, Metadata)
                                    data.push(propertyName);
                                    metadata.push(propertyValue)
                                }
                            }

                            else if ((args[0] || '').constructor == Array && typeof args[1] == 'string') {
                                // Initialization > Property (Name, Value)
                                let propertyName = '',
                                    propertyValue = '';

                                for (let i = 0; i < args[0].length; i += 1) {
                                    // Update > Property (Name, Value)
                                    propertyName = args[0][i].replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    });
                                    propertyValue = test(args[1], propertyName);

                                    // Update > (Data, Metadata)
                                    data.push(propertyName);
                                    metadata.push(propertyValue)
                                }
                            }

                            else if (typeof args[0] == 'string' && (args[1] || '').constructor == Array) {
                                // Initialization > Property (Name, Value)
                                let propertyName = '',
                                    propertyValue = '';

                                // Update > Property (Name, Value)
                                propertyName = args[0].replace(/[A-Z]/g, data => {
                                    // Return
                                    return '-' + data.toLowerCase()
                                });
                                propertyValue = test(args[1][~-args[1].length], propertyName);

                                // Update > (Data, Metadata)
                                data.push(propertyName);
                                metadata.push(propertyValue)
                            }

                            else if (typeof args[0] == 'string' && args.length > 1) {
                                // Initialization > Property (Name, Value)
                                let propertyName = '',
                                    propertyValue = '';

                                // Update > Property (Name, Value)
                                propertyName = args[0].replace(/[A-Z]/g, data => {
                                    // Return
                                    return '-' + data.toLowerCase()
                                });
                                propertyValue = test((function(data, metadata) {
                                    // Update > Metadata
                                    metadata = metadata.trim().replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    }).trimChar('-');

                                    /* Logic
                                            If
                                                Data is a number.

                                        > Update > Data
                                    */
                                    (typeof data != 'number') || (data = test(data, metadata));

                                    // Return
                                    return String(data)
                                })(args[1], propertyName), propertyName);

                                // Update > (Data, Metadata)
                                data.push(propertyName);
                                metadata.push(propertyValue)
                            }

                            else if (typeof args[0] == 'string' && args.length == 1) {
                                // Initialization > Alpha, Property (Name, Value)
                                let alpha = args[0],
                                    propertyName = '',
                                    propertyValue = '';

                                /* Update > Data
                                        --- NOTE ---
                                            @lapys: Ignore all strings.
                                */
                                alpha = alpha.replace(/'[^']{0,}'/g, data => {
                                    // Return
                                    return [...data].join('⯀').replace(/:/g, '�').replace(/;/g, '')
                                }).replace(/"[^"]{0,}"/g, data => {
                                    // Return
                                    return [...data].join('⯀').replace(/:/g, '�').replace(/;/g, '')
                                });

                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (alpha.hasText(':')) {
                                    // Update > Alpha
                                    alpha.trim().endsWith(';') || (alpha = alpha.trim() + ';');
                                    alpha = alpha.split(/;/g).removeFalsyElements();

                                    /* Loop
                                            Index Alpha.
                                    */
                                    for (let i in alpha)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (alpha[i].trim()) {
                                            // Update > Alpha
                                            alpha[i] = alpha[i].trim();

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (alpha[i].split(/:/g).length > 1) {
                                                // Update > Property (Name, Value)
                                                propertyName = alpha[i].split(/:/g)[0].trim().replace(//g, ';').replace(/�/g, ':').replace(/⯀/g, '');
                                                propertyValue = alpha[i].split(/:/g)[1].trim().replace(//g, ';').replace(/�/g, ':').replace(/⯀/g, '');

                                                // Update > (Data, Metadata)
                                                data.push(propertyName);
                                                metadata.push(propertyValue)
                                            }
                                        }
                                }

                                else {
                                    // Update > Property (Name, Value)
                                    propertyName = args[0].replace(/[A-Z]/g, data => {
                                        // Return
                                        return '-' + data.toLowerCase()
                                    });
                                    propertyValue = 'initial';

                                    // Update > (Data, Metadata)
                                    data.push(propertyName.replace(//g, ';').replace(/�/g, ':').replace(/⯀/g, ''));
                                    metadata.push(propertyValue.replace(//g, ';').replace(/�/g, ':').replace(/⯀/g, ''))
                                }
                            }

                            /* Loop
                                    Index Data

                                > Update > Data
                            */
                            for (let i = 0; i < data.length; i += 1)
                                data[i] = String(data[i]).trim().trimChar('-').toLowerCase();

                            /* Loop
                                    Index Metadata

                                > Update > Metadata
                            */
                            for (let i = 0; i < metadata.length; i += 1)
                                metadata[i] = str(metadata[i]).trim();

                            /* Loop
                                    Index Data

                                > Style > Target > [Data]
                            */
                            for (let i = 0; i < data.length; i += 1)
                                this.style[data[i].replace(/\-[a-z]/g, data => {
                                    // Return
                                    return data.slice('-'.length).toUpperCase()
                                })] = metadata[i].replace(/(!importantpx)([^(!importantpx)]*)$|(!importants)([^(!importants)]*)$/, '!important').trimRightChar('!important').trim();

                            // Modification > Target > Style
                            this.setAttribute('style', (this.getAttribute('style') || '').endsWith(';') ? (this.getAttribute('style') || '') : (this.getAttribute('style') === null ? '' : this.getAttribute('style') + ';'));
                            this.setAttribute('style', (this.getAttribute('style') || '').replace(/'[^']{1,}'|"[^"]{1,}"/g, data => {
                                // Return
                                return data.split(/(?:)/g).join('�')
                            }).replace(/ {0,}: {0,}[^;]{1,};/g, data => {
                                // Return
                                return data.replace(/ {0,}: {0,}/, ': ')
                            }).replace(/'[^']{1,}'|"[^"]{1,}"/g, data => {
                                // Return
                                return data.replace(/�/g, '')
                            }));

                            /* Loop
                                    Index Data

                                    --- NOTE ---
                                        @lapys: For `!important` values.
                            */
                            for (let i = 0; i < data.length; i += 1) {
                                // Update > Metadata
                                metadata[i] = metadata[i].replace(/(!importantpx)([^(!importantpx)]*)$|(!importants)([^(!importants)]*)$/, '!important');

                                // Modification > Target > Style
                                !metadata[i].endsWith('!important') || this.setAttribute('style',
                                    (this.getAttribute('style') || '').replace(RegExp(data[i].replace(/\-/g, '\\$&') + '[^;]{1,};'), data => {
                                        // Return
                                        return data.trim().trimRightChar(';') + ' !important;'
                                    })
                                )
                            }

                            // Modification > Target > Style
                            this.setAttribute('style', (this.getAttribute('style') || '').trim().trimRightChar(';'));
                            this.getAttribute('style') || this.removeAttribute('style');

                            // Return
                            return this.attributes.style || null
                        }
                    });

                    // Write
                    (typeof Element.prototype.write == 'function') || Object.defineProperty(Element.prototype, 'write', {
                        // Value
                        value: function write() {
                            // Modification > Target > Inner HTML
                            this.innerHTML = LapysJS.perm.writtenElements.indexOf(this) < 0 ? arguments[0] : this.innerHTML + arguments[0];

                            // Update > (LapysJS > Permanent Data > Written Elements)
                            (LapysJS.perm.writtenElements.indexOf(this) > -1) || LapysJS.perm.writtenElements.push(this)
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
                                        Index modified Arguments.
                                */
                                for (let i = 0; i < Object.values([...arguments].slice(1)).length; i += 1)
                                    /* Loop
                                            Index Listeners.
                                    */
                                    for (let j = 0; j < LapysJS.debug.formatText(String(arguments[0]), 4).length; j += 1) {
                                        // Modification > Target > Custom Events
                                        (this || window).customEvents = (this || window).customEvents || {fallback: !0};
                                            // [Argument 0]
                                            (this || window).customEvents[LapysJS.debug.formatText(String(arguments[0]), 4)[j]] = typeof document.createEvent == 'function' ? document.createEvent('Event') : document.createEventObject();
                                                // [Argument 0] > Initialize Event
                                                typeof (this || window).customEvents[LapysJS.debug.formatText(String(arguments[0]), 4)[j]].initEvent == 'function' ? (this || window).customEvents[LapysJS.debug.formatText(String(arguments[0]), 4)[j]].initEvent(LapysJS.debug.formatText(String(arguments[0]), 4)[j], !0, !0) : !1;

                                        // Event > Target > [Argument 0]
                                        (this || window).setEvent(LapysJS.debug.formatText(String(arguments[0]), 4)[j], Object.values([...arguments].slice(1))[i], !1)
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
                                        Index Events in Argument 0.
                                */
                                for (let i = 0; i < LapysJS.debug.formatText(String(arguments[0]), 4).length; i += 1)
                                    /* Loop
                                            Index Listeners in Argument 1.

                                        > Error Handling
                                    */
                                    for (let j = 0; j < Object.values([...arguments].slice(1)).length; j += 1)
                                        try {
                                            // Deletion
                                            document.removeEventListener ?
                                                (this || window).removeEventListener(LapysJS.debug.formatText(String(arguments[0]), 4)[i], Object.values([...arguments].slice(1))[j]) :
                                                (this || window).detachEvent('on' + LapysJS.debug.formatText(String(arguments[0]), 4)[i], Object.values([...arguments].slice(1))[j])
                                        }

                                        catch (error) {
                                            // LapysJS > Error
                                            LapysJS.error(error)
                                        }

                            else
                                /* Loop
                                        Index Target's Event of the specified type.

                                    > Deletion
                                */
                                for (let i = 0; i < (this || window).getEvents()[String(arguments[0])].length; i += 1)
                                    document.removeEventListener ?
                                        (this || window).removeEventListener((this || window).getEvents()[String(arguments[0])][i].type, (this || window).getEvents()[String(arguments[0])][i].listener) :
                                        (this || window).detachEvent('on' + (this || window).getEvents()[String(arguments[0])][i].type, (this || window).getEvents()[String(arguments[0])][i].listener)
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
                                                Index Event Listeners.

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
                                            Index Event Listeners.

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
                                    !that.hasAttribute('data-fullscreen')
                                ) {
                                    !!arguments[0] || alert('[LapysJS ' + LapysJS.version + "] => Press the 'Esc' key to exit fullscreen.");

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
                            !((data[0] || new (function LapysJSObject() {})).nodeType == 1) || this.setEvent(String(metadata[0]), function observeEvent(event) {
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
                            // Initialization > (Arguments, Target)
                            let args = [...arguments],
                                that = this;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (arguments.length > 0) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (arguments.length > 1) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (typeof arguments[1] == 'string')
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (arguments[1].startsWith('attr'))
                                            // Return
                                            return typeof arguments[2] == 'number' ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll('[' + arguments[1].slice('attr:'.length) + "='" + (String(arguments[0]) || '') + "'")[arguments[2]] : (function() {
                                                /* Logic
                                                        Switch case to Argument 2.

                                                    > Return
                                                */
                                                switch (args[2]) {
                                                    // Array
                                                    case 'array':
                                                        return [...((that === window ? document : that) || document).querySelectorAll('[' + args[1].slice('attr:'.length) + "='" + (String(args[0]) || '') + "'")];
                                                        break;

                                                    // Length
                                                    case 'length':
                                                        return ((that === window ? document : that) || document).querySelectorAll('[' + args[1].slice('attr:'.length) + "='" + (String(args[0]) || '') + "'").length;
                                                        break;

                                                    // Decremented Length
                                                    case '~length':
                                                        return ~-((that === window ? document : that) || document).querySelectorAll('[' + args[1].slice('attr:'.length) + "='" + (String(args[0]) || '') + "'").length;
                                                        break;

                                                    // [Default]
                                                    default:
                                                        return (((that === window ? document : that) || document).querySelectorAll('[' + args[1].slice('attr:'.length) + "='" + (String(args[0]) || '') + "'") || []).length > 1 ? ((that === window ? document : that) || document).querySelectorAll('[' + args[1].slice('attr:'.length) + "='" + (String(args[0]) || '') + "'") : (((that === window ? document : that) || document).querySelectorAll('[' + args[1].slice('attr:'.length) + "='" + (String(args[0]) || '') + "'") || [null])[0]
                                                }
                                            })();

                                    /* Logic
                                            [switch:case:default statement]

                                        > Return
                                    */
                                    switch (arguments[1]) {
                                        // Array
                                        case 'array':
                                            return [...((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || ''))];
                                            break;

                                        // Class
                                        case 'c':
                                            return typeof window.$c == 'function' ? $c.apply(this || window, [...arguments].removeElement('c')) : null;
                                            break;

                                        // Class
                                        case 'class':
                                            return typeof window.$c == 'function' ? $c.apply(this || window, [...arguments].removeElement('class')) : null;
                                            break;

                                        // CSS
                                        case 'css':
                                            return typeof arguments[2] == 'number' ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll("link[href*='" + arguments[0] + "'")[arguments[2]] : (function() {
                                                /* Logic
                                                        Switch case to Argument 2.

                                                    > Return
                                                */
                                                switch (args[2]) {
                                                    // Array
                                                    case 'array':
                                                        return [...((that === window ? document : that) || document).querySelectorAll("link[href*='" + args[0] + "'")];
                                                        break;

                                                    // Length
                                                    case 'length':
                                                        return ((that === window ? document : that) || document).querySelectorAll("link[href*='" + args[0] + "'").length;
                                                        break;

                                                    // Decremented Length
                                                    case '~length':
                                                        return ~-((that === window ? document : that) || document).querySelectorAll("link[href*='" + args[0] + "'").length;
                                                        break;

                                                    // [Default]
                                                    default:
                                                        return (((that === window ? document : that) || document).querySelectorAll("link[href*='" + args[0] + "'") || []).length > 1 ? ((that === window ? document : that) || document).querySelectorAll("link[href*='" + args[0] + "'") : (((that === window ? document : that) || document).querySelectorAll("link[href*='" + args[0] + "'") || [null])[0]
                                                }
                                            })();
                                            break;

                                        // ID
                                        case 'i':
                                            return typeof window.$i == 'function' ? $i.apply(this || window, [...arguments].removeElement('i')) : null;
                                            break;

                                        // ID
                                        case 'id':
                                            return typeof window.$i == 'function' ? $i.apply(this || window, [...arguments].removeElement('id')) : null;
                                            break;

                                        // JavaScript
                                        case 'js':
                                            return typeof arguments[2] == 'number' ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll("script[src*='" + arguments[0] + "'][type='text/javascript'], script[src*='" + arguments[0] + "']:not([type])")[arguments[2]] : (function() {
                                                /* Logic
                                                        Switch case to Argument 2.

                                                    > Return
                                                */
                                                switch (args[2]) {
                                                    // Array
                                                    case 'array':
                                                        return [...((that === window ? document : that) || document).querySelectorAll("script[src*='" + args[0] + "'][type='text/javascript'], script[src*='" + args[0] + "']:not([type])")];
                                                        break;

                                                    // Length
                                                    case 'length':
                                                        return ((that === window ? document : that) || document).querySelectorAll("script[src*='" + args[0] + "'][type='text/javascript'], script[src*='" + args[0] + "']:not([type])").length;
                                                        break;

                                                    // Decremented Length
                                                    case '~length':
                                                        return ~-((that === window ? document : that) || document).querySelectorAll("script[src*='" + args[0] + "'][type='text/javascript'], script[src*='" + args[0] + "']:not([type])").length;
                                                        break;

                                                    // [Default]
                                                    default:
                                                        return (((that === window ? document : that) || document).querySelectorAll("script[src*='" + args[0] + "'][type='text/javascript'], script[src*='" + args[0] + "']:not([type])") || []).length > 1 ? ((that === window ? document : that) || document).querySelectorAll("script[src*='" + args[0] + "'][type='text/javascript'], script[src*='" + args[0] + "']:not([type])") : (((that === window ? document : that) || document).querySelectorAll("script[src*='" + args[0] + "'][type='text/javascript'], script[src*='" + arguments[0] + "']:not([type])") || [null])[0]
                                                }
                                            })();
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
                                            return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')).length : NaN;
                                            break;

                                        // ~Length
                                        case '~length':
                                            return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')) ? (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')).length - 1) : NaN;
                                    }
                                }

                                /* Logic
                                        [if:else if:else statement]

                                    > Return
                                */
                                if (typeof arguments[1] == 'number')
                                    return ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || ''))[arguments[1]] || null;

                                else if (arguments.length < 2 && ('length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')).length : NaN) < 2)
                                    return ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || ''))[0] || null;

                                // Return
                                return ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(String(arguments[0] || '')) || null
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
                                                return [...((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0])))];
                                                break;

                                            // Length
                                            case 'length':
                                                return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0]))) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0]))).length : NaN;
                                                break;

                                            // Decremented Length
                                            case '~length':
                                                return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0]))) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0]))).length - 1 : NaN
                                        }

                                    // Return
                                    return (typeof arguments[1] == 'number' ? (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0])))[arguments[1]] || null) : ((((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0])))).length > 1 ? (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0])))) : (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).querySelectorAll(((arguments[0] || '').constructor == Array) ? ('.' + arguments[0].join('.')) : (String(arguments[0]).indexOf(' ') > -1 ? ('.' + String(arguments[0]).getAfterChar(' ', !0)) : ('.' + arguments[0]))))[0])) || null
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
                                                    return [...((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))]
                                                }

                                                catch (error) {
                                                    return [((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))]
                                                }
                                                break;

                                            // Length
                                            case 'length':
                                                return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length : ('id' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? 1 : NaN);
                                                break;

                                            // Decremented Length
                                            case '~length':
                                                return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length - 1 : ('id' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? 0 : NaN)
                                        }

                                    // Return
                                    return (typeof arguments[1] == 'number' ? ([((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))][arguments[1]] || null) : (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementById(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])))) || null
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
                                                return [...((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))];
                                                break;

                                            // Length
                                            case 'length':
                                                return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length : NaN;
                                                break;

                                            // Decremented Length
                                            case '~length':
                                                return 'length' in ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])) ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length - 1 : NaN
                                        }

                                    // Return
                                    return typeof arguments[1] == 'number' ? (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))[arguments[1]] || null) : (((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])).length < 2 ? ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0]))[0] : ((this === window ? document : (this.constructor == DocumentFragment ? (this.querySelector('head + body') || this.children[0]) : this)) || document).getElementsByTagName(String(arguments[0]).indexOf(' ') > -1 ? String(arguments[0]).getAfterChar(' ', !0) : String(arguments[0])))
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
                                return (typeof arguments[1] == 'number' ? metadata[arguments[1]] : (metadata.length > 1 ? metadata : metadata[0])) || null
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
                        let args = [];

                        /* Loop
                                Index Arguments.

                            > Update > Arguments
                        */
                        for (let i = 0; i < arguments.length; i += 1)
                            args = args.concat(LapysJS.debug.formatText(String(arguments[i]), 4));

                        /* Loop
                                Index Arguments.
                        */
                        for (let i = 0; i < args.length; i += 1)
                            // Error Handling
                            try {
                                // Target > (DIspatch | Fire) Event
                                document.createEvent ? (this || window).dispatchEvent((this || window).customEvents[String(args[i])]) : (this || window).fireEvent('on ' + args[i], (this || window).customEvents[String(args[i])])
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
                                    event.initEvent(String(args[i]), !1, !0);

                                    // Target > Dispatch Event
                                    (this || window).dispatchEvent(event)
                                }

                                else
                                    // Target > Fire Event
                                    (this || window).fireEvent('on ' + args[i])
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
                                    Index Data.
                            */
                            for (let i = 0; i < LapysJS.debug.formatText(String(data), 4).length; i += 1) {
                                // Update > Data
                                (LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, '') !== '_focus') || (data = data.replace('_focus', 'blur focus'));
                                (LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, '') !== '_hover') || (data = data.replace('_hover', 'mouseleave mouseover'));
                                (LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, '') !== '_key') || (data = data.replace('_key', 'keydown, keypress keyup'));
                                (LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, '') !== '_mouse') || (data = data.replace('_mouse', 'mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel'));
                                (LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, '') !== '_seek') || (data = data.replace('_seek', 'seeked seeking'));
                                (LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, '') !== '_update') || (data = data.replace('_update', 'change input'))
                            }

                            // Modification > Target > Events
                            (this || window)['LapysJS events'] = (this || window)['LapysJS events'] || new (function LapysJSEventMap() {});

                            /* Loop
                                    Index Data.
                            */
                            for (let i = 0; i < LapysJS.debug.formatText(String(data), 4).length; i += 1) {
                                // Update > Target > Events
                                (this || window)['LapysJS events'][
                                    (index => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '') !== 'online' &&
                                            LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '').startsWith('on')
                                        )
                                            return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '').replace('on', '');

                                        else
                                            return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '')
                                    })(i)
                                ] = (this || window)['LapysJS events'][
                                    (index => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '') !== 'online' &&
                                            LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '').startsWith('on')
                                        )
                                            return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '').replace('on', '');

                                        else
                                            return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '')
                                    })(i)
                                ] || [];

                                (this || window)['LapysJS events'][
                                    (index => {
                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (
                                            LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '') !== 'online' &&
                                            LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '').startsWith('on')
                                        )
                                            return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '').replace('on', '');

                                        else
                                            return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '')
                                    })(i)
                                ].push({
                                    // Listener
                                    listener: arguments[1],

                                    // Type
                                    type: (index => {
                                        // Return
                                        return LapysJS.debug.formatText(String(data), 4)[index].replace(/ /g, '')
                                    })(i),

                                    // Use Capture
                                    useCapture: !!arguments[2],

                                    // Wants Untrusted
                                    wantsUntrusted: !!arguments[3]
                                });

                                // Event > Target > [Data]
                                typeof document.addEventListener == 'function' ?
                                    (this || window).addEventListener(LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, ''), arguments[1], !!arguments[2], !!arguments[3]) :
                                    (this || window).attachEvent(LapysJS.debug.formatText(String(data), 4)[i].replace(/ /g, ''), arguments[1], !!arguments[2], !!arguments[3])
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
                            setTimeout(function() {
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
                            // Polyfill
                            (function(arr){arr.forEach(function(item){if(item.hasOwnProperty('prepend'))return;Object.defineProperty(item,'prepend',{configurable:!0,enumerable:!0,value:function prepend(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)))});this.insertBefore(docFrag,this.firstChild)},writable:!0})})})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

                            // Insertion > Element
                            this[(str((arguments[0] !== 'begin') || str((!this.prepend || 'prepend')).replace('true', 'cloneNode')).replace('true', str((arguments[0] !== 'end') || str((!this.append || 'append')).replace('true', 'appendChild')).replace('true', '')) || 'cloneNode')](arguments[1]);

                            // Return
                            return arguments[1]
                        }
                    });

                    /* CSS Selector
                            --- WARN ---
                                @lapys: Strings should not be placed as values in CSS attributes.
                    */
                    Element.prototype.CSSSelector || Object.defineProperty(Element.prototype, 'CSSSelector', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                                    (function() {
                                        // Initialization > Classes
                                        let Classes = '';

                                        /* Logic
                                                If the Target has a class.
                                        */
                                        if (that.getAttribute('class'))
                                            /* Loop
                                                    Index the Target's class nodes.
                                            */
                                            for (let i = 0; i < that.getAttribute('class').split(/ /g).length; i += 1)
                                                /* Logic
                                                        If
                                                            the class node has any 'unusual''characters.

                                                    > Update > Classes
                                                */
                                                if (that.getAttribute('class').split(/ /g)[i].replace(/[a-z]|[A-Z]|[0-9]|-|_|\$/g, '').trim() !== '')
                                                    Classes += "[class='" + that.getAttribute('class').split(/ /g)[i] + "']";

                                                else
                                                    Classes += '.' + that.getAttribute('class').split(/ /g)[i];

                                        // Return
                                        return Classes
                                    })() +

                                    // ID
                                    (function() {
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
                                                return "[id='" + that.id + "']";

                                            else
                                                // Return
                                                return '#' + that.id;

                                        // Return
                                        return ''
                                    })() +

                                    // Attributes
                                    (function() {
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
                                                thatAttributes += '[' + that.attributes[i].name + "='" + (that.attributes[i].value || '').replace(/'/g, '"') + "']";

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
                                    @lapys: The CSSSelector parameter is necessary, trust me,
                        */
                        set: function setCSSSelector(CSSSelector) {
                            // Update > CSS Selector
                            CSSSelector += ' ';
                            CSSSelector = CSSSelector.replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\'\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\{\}\«\»\ ]|){0,}\.([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\'\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\{\}\«\»\ ]|){0,}\]/g, data => {
                                // Return
                                return data.replace(/\./g, '::lapysjs_period' + alphabetString + '::')
                            }).replace(/\.([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}/g, data => {
                                // Return
                                return "[class='" + data.slice('.'.length) + "']"
                            }).replace(RegExp('::lapysjs_period' + alphabetString + '::', 'g'), '.').replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\$\%\&\'\(\)\*\+\,\;\-\.\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\'\(\)\{\}\«\»\ ]|){0,}\]/g, data => {
                                // Return
                                return data.replace(/#/g, '::lapysjs_hash' + alphabetString + '::')
                            }).replace(/#([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}/g, data => {
                                // Return
                                return "[id='" + data.slice('.'.length) + "']"
                            }).replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}\[/g, data => {
                                // Return
                                return '[' + data.slice('['.length).getBeforeChar('[') + ']['
                            }).replace(RegExp('::lapysjs_hash' + alphabetString + '::', 'g'), '#').replace(/\[([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\#\%\&\(\)\*\+\,\-\.\;\$\/\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\(\)\{\}\«\»\ ]|){0,}(\]| )/g, data => {
                                // Return
                                return data.getBeforeChar('=') + "='" + data.getAfterChar('=').slice(0, -']'.length) + "'" + (data.lastChar.trim() || ']')
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
                                    Index 'classes' in the CSS Selector.

                                > Modification > Target > Class
                            */
                            for (let i = 0; i < CSSSelector['LapysJS match'](/\[class='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g).length; i += 1)
                                this.addClass(CSSSelector['LapysJS match'](/\[class='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g)[i].slice("[class='".length, -"']".length));

                            // Modification > Target > Class
                            this.getAttribute('class') || this.removeAttribute('class');

                            // Modification > Target > ID
                            this.id = (CSSSelector['LapysJS match'](/\[id='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g)[~-CSSSelector['LapysJS match'](/\[id='([a-z]|[A-Z]|_|\$)([a-z]|[A-Z]|[0-9]|-|_|\$|){0,}'\]/g).length] || []).slice("[id='".length, -"']".length);
                            this.id || this.removeAttribute('id');

                            /* Loop
                                    Index attributes in the CSS Selector.
                            */
                            for (let i = 0; i < (CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g)) || []).length; i += 1)
                                /* Logic
                                        If
                                            the attribute is not a 'class'
                                                and
                                            the attribute is not an 'id'.
                                */
                                if (
                                    !CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].startsWith("[class='") &&
                                    !CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].startsWith("[id='")
                                )
                                    /* Logic
                                            If
                                                the attribute is a string property of the Target.

                                        > Modification > Target > [CSS Selector]
                                    */
                                    if ((this[CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].slice('['.length).getBeforeChar('=').replace(/data-/g, 'dataset.').replace(/-[a-z]/g, data => { return data[1].toUpperCase() })] || new (function LapysJSObject() {})).constructor.name === 'String')
                                        this[CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].slice('['.length).getBeforeChar('=').replace(/data-/g, 'dataset.').replace(/-[a-z]/g, data => { return data[1].toUpperCase() })] = CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].getAfterChar('=').slice("'".length, -"']".length);

                                    else
                                        this.setAttribute(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].getBeforeChar('=').slice('['.length), CSSSelector['LapysJS match'](/\[([a-z]|-){1,}='([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\"\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\"\(\)\[\]\{\}\«\»\ ]|){0,}'\]/g).concat(CSSSelector['LapysJS match'](/\[([a-z]|-){1,}="([a-z]|[A-Z]|[0-9]|[\:\<\=\>\?\@\!\'\#\%\&\;\$\(\)\*\+\,\-\.\/\[\]\^\_\`\{\|\}\~\Ç\ü\é\â\ä\à\å\ç\ê\ë\è\ï\î\ì\Ä\Å\É\æ\Æ\ô\ö\ò\û\ù\ÿ\Ö\Ü\ø\£\Ø\×\ƒ\á\í\ó\ú\ñ\Ñ\ª\º\¿\®\¬\½\¼\¡\«\»\░\▒\▓\│\┤\Á\Â\À\©\╣\║\╗\╝\¢\¥\┐\└\┴\┬\├\─\┼\ã\Ã\╚\╔\╩\╦\╠\═\╬\¤\ð\Ð\Ê\Ë\È\ı\Í\Î\Ï\┘\┌\█\▄\¦\Ì\▀\Ó\ß\Ô\Ò\õ\Õ\µ\þ\Þ\Ú\Û\Ù\ý\Ý\¯\´\≡\±\‗\¾\¶\§\÷\¸\°\¨\·\¹\³\²\ñ\Ñ\@\¿\?\¡\!\:\/\á\é\í\ó\ú\Á\É\Í\Ó\Ú\ä\ë\ï\ö\ü\Ä\Ë\Ï\Ö\Ü\½\¼\¾\¹\³\²\ƒ\±\×\÷\£\¥\¢\¤\®\©\ª\º\°\'\(\)\[\]\{\}\«\»\ ]|){0,}"\]/g))[i].getAfterChar('=').slice("'".length, -"']".length));

                            // Deletion
                            delete String.prototype['LapysJS match']
                        }
                    });

                    // Parent
                    Element.prototype.parent || Object.defineProperty(Element.prototype, 'parent', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

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
                                        Index Target's Parent's Children.
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
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function getHeight() {
                            // Return
                            return this.getBoundingClientRect().height
                        },

                        // Set
                        set: function setHeight(number) {
                            // Target > Style > Height
                            this.style.height = number + 'px'
                        }
                    });

                    // Offset
                    Element.prototype.offset || (Object.defineProperty(HTMLElement.prototype, 'offset', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function offset() {
                            // Initialization > (Data, Metadata, Target)
                            let data = {},
                                metadata = this.getBoundingClientRect(),
                                that = this;

                            /* Loop
                                    Index Metadata.

                                > Modification > Data > [Property Name]
                            */
                            for (let i in metadata)
                                (typeof metadata[i] != 'number') || Object.defineProperty(data, i, {
                                    // Configurable
                                    configurable: !1,

                                    // Enumerable
                                    enumerable: !1,

                                    // Get
                                    get: function() {
                                        // Return
                                        return metadata[i]
                                    },

                                    // Set
                                    set: function() {
                                        // Style > Target > [Property Name]
                                        that.style[i] = arguments[0] + 'px'
                                    }
                                });

                            // Return
                            return data
                        }
                    }));

                    // Width
                    Element.prototype.width || Object.defineProperty(HTMLElement.prototype, 'width', {
                        // Configurable
                        configurable: !1,

                        // Enumerable
                        enumerable: !1,

                        // Get
                        get: function getWidth() {
                            // Return
                            return this.getBoundingClientRect().width
                        },

                        // Set
                        set: function setWidth(number) {
                            // Target > Style > Width
                            this.style.width = number + 'px'
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
                                LapysJS.perm.framedImage = data
                            });

                            // Modification > Metadata > Current Time
                            metadata.currentTime = parseInt(arguments[0]) || 0
                        }
                    });

        /* Assets, Components
                --- NOTE ---
                    @lapys: The 'LapysJS isModified' property helps the loop know which
                        Components have not been modified.
        */
            // On DOM Ready
            onDOMReady(LapysJS.script.scriptPlugIns = function LapysJSScriptPlugIns() {
                // Accordion
                    // Function > LapysJS Script New Accordion
                    function LapysJSScriptNewAccordion() {
                        /* Loop
                                Index Accordions.
                        */
                        for (let i = 0; i < base.plugins.accordion.length; i += 1)
                            /* Logic
                                    If
                                        the Accordion is not modified.
                            */
                            if (!base.plugins.accordion[i]['LapysJS isModified']) {
                                // Function > Accordion
                                    // Close
                                    (typeof base.plugins.accordion[i]['LapysJS close'] == 'function') || Object.defineProperty(base.plugins.accordion[i], 'LapysJS close', {
                                        // Value
                                        value: function close() {
                                            // Modification > Target
                                                // Data Close
                                                this.setAttribute('data-close', !0);

                                                // Data Open
                                                this.setAttribute('data-open', !1)
                                        }
                                    });
                                    base.plugins.accordion[i]['LapysJS close']();

                                    // Open
                                    (typeof base.plugins.accordion[i]['LapysJS open'] == 'function') || Object.defineProperty(base.plugins.accordion[i], 'LapysJS open', {
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
                                    base.plugins.accordion[i].querySelector('[data-id=content') &&
                                    base.plugins.accordion[i].querySelector('[data-id=header')
                                )
                                    // Modification > Accordion
                                        // Content
                                        Object.defineProperty(base.plugins.accordion[i], 'content', {
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
                                        Object.defineProperty(base.plugins.accordion[i], 'header', {
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
                                                    Index Content and Header.

                                                > Modification > (Content, Header) > Accordion
                                            */
                                            for (let j = 0; j < base.plugins.accordion[i].children.length; j += 1)
                                                !(base.plugins.accordion[i].children[j].getAttribute('data-id') === 'content' || base.plugins.accordion[i].children[j].getAttribute('data-id') === 'header') || Object.defineProperty(base.plugins.accordion[i].children[j], 'accordion', {
                                                    // Configurable
                                                    configurable: !0,

                                                    // Enumerable
                                                    enumerable: !0,

                                                    // Get
                                                    get: function accordion() {
                                                        // Initialization > Data
                                                        let data;

                                                        /* Loop
                                                                Index the Target's parents.
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

                                // Event > (Accordion > Header) > Click
                                base.plugins.accordion[i].header.setEvent((base.plugins.accordion[i].getAttribute('data-event-type') || 'click').trim(), function toggleAccordion() {
                                    // Toggle
                                    this.base.plugins.accordion['LapysJS toggle'] ? this.base.plugins.accordion['LapysJS close']() : this.base.plugins.accordion['LapysJS open']();
                                    this.base.plugins.accordion['LapysJS toggle'] = !this.base.plugins.accordion['LapysJS toggle']
                                });

                                // Modification > Accordion > Is Modified
                                base.plugins.accordion[i]['LapysJS isModified'] = !0
                            }
                    };
                    LapysJS.script.scriptNewAccordion = LapysJSScriptNewAccordion;
                    !!window.DISALLOW_ACCORDION_PLUGIN || LapysJSScriptNewAccordion();
                    !!window.DISALLOW_ACCORDION_PLUGIN || onDOMNodeAdded(LapysJSScriptNewAccordion);

                /* Carousel
                        --- UPDATE REQUIRED ---
                            @lapys: Modularize the Carousel`s code.
                */
                (LapysJS.script.scriptCarousel = function LapysJSScriptCarousel() {
                    // Initialization > Carousel
                    let carousel = [...document.querySelectorAll(".carousel:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not(input):not(textarea)")];

                    /* Loop
                            Index Carousels.

                        > Insertion
                    */
                    for (let i = 0; i < carousel.length; i += 1)
                        carousel[i].children[0] || carousel[i].appendChild(document.createElement('div'));

                    // Function > LapysJS Script New Carousel
                    function LapysJSScriptNewCarousel() {
                        /* Loop
                                Index Carousel.
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
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function activeSlide() {
                                            // Return
                                            return this.containers.slides.querySelector('[data-active') || this.slides[0]
                                        }
                                    });

                                    // Buttons
                                    Object.defineProperty(carousel[i], 'buttons', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function buttons() {
                                            // Initialization > (Data, Target)
                                            let data = Array.from((this.containers.buttons || {children: []}).children),
                                                that = this;

                                                // Left
                                                Object.defineProperty(data, 'left', {
                                                    // Configurable
                                                    configurable: !1,

                                                    // Enumerable
                                                    enumerable: !1,

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
                                                    configurable: !1,

                                                    // Enumerable
                                                    enumerable: !1,

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
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

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
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

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
                                                    Index Target's Slides.
                                            */
                                            for (let i = 0; i < this.slides.length; i += 1) {
                                                // Modification > Slide > Data Active
                                                this.slides[i].removeAttribute('data-active');

                                                // Style > Slide
                                                    // Display
                                                    (this.slides[i].getCSS('display').indexOf('inline') < 0) || (this.slides[i].setCSS('display', this.slides[i].getCSS('display').replace('inline-', '') + ' !important'));

                                                    // Left
                                                    (i > ~-data) || this.slides[i].setCSS('left', -(this.offset.left - this.slides[i].offset.width));
                                                    (i !== data) || this.slides[i].setCSS('left', 0);
                                                    (i < data + 1) || this.slides[i].setCSS('left', this.offset.right);

                                                    // Top
                                                    this.slides[i].setCSS('top', -(this.slides[i].offset.height * i))
                                                }

                                            // Modification > Slide > Data Active
                                            this.slides[data].setAttribute('data-active', '')
                                        },

                                        // Writable
                                        writable: !0
                                    });

                            /* Loop
                                    Index the Carousel's children.

                                > Modification > Carousel child
                            */
                            for (let j = 0; j < carousel[i].children.length; j += 1) {
                                // Class
                                carousel[i].children[j].addClass('slide slide-' + j);

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
                                    !carousel[i].hasAttribute('data-buttons') || carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment(
                                        (carousel[i].getAttribute('data-buttons-left-html') || "<button class='button button-0' data-id=left-button>&larr;</button>") +
                                        (carousel[i].getAttribute('data-buttons-right-html') || "<button class='button button-1' data-id=right-button>&rarr;</button>"),
                                        'div'
                                    ))
                                }

                                catch (error) {
                                    // Insertion
                                    !carousel[i].hasAttribute('data-buttons') || carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment("<button class='button button-0' data-id=left-button>&larr;</button><button class='button button-1' data-id=right-button>&rarr;</button>", 'div'))
                                }

                            /* Insertion
                                    --- NOTE ---
                                        @lapys: This represents the Carousel's Indicators Container.
                            */
                            !carousel[i].hasAttribute('data-indicators') || carousel[i].appendChild(createElement('div', '.container[data-id=indicators-container'));
                                // Error Handling
                                try {
                                    // Insertion
                                    !carousel[i].hasAttribute('data-indicators') || carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment((element => {
                                        // Initialization > Data
                                        let data = '';

                                        /* Loop
                                                Iterate over the Element's length of slides.

                                            > Update > Data
                                        */
                                        for (let i = 0; i < element.slides.length; i += 1)
                                            data += element.getAttribute('data-indicators-html') || "<a class='indicator indicator-" + i + "' data-slide-index=" + i + '> </a>';

                                        // Return
                                        return data
                                    })(carousel[i]), 'div'))
                                }

                                catch (error) {
                                    // Insertion
                                    !carousel[i].hasAttribute('data-indicators') || carousel[i].children[~-carousel[i].children.length].appendChild(createDocumentFragment((element => {
                                        // Initialization > Data
                                        let data = '';

                                        /* Loop
                                                Iterate over the Element's length of slides.

                                            > Update > Data
                                        */
                                        for (let i = 0; i < element.slides.length; i += 1)
                                            data += "<a class='indicator indicator-" + i + "' data-slide-index=" + i + '> </a>';

                                        // Return
                                        return data
                                    })(carousel[i]), 'div'))
                                }

                            // Event > Carousel
                                // [Data Event Type] | Click
                                carousel[i].setEvent((carousel[i].getAttribute('data-event-type') || 'click').trim(), function carouselFocusEvent() {
                                    // Modification > Target > Data Selected
                                    this.setAttribute('data-selected', '')
                                });

                                // Mouse Down, Touch Start
                                carousel[i].setEvent('mousedown touchstart', function carouselUserGesture_SwipeToggleSlide(event) {
                                    // Modification > Target > Cursor Position X
                                    (this.getAttribute('class').trim().split(/ /g).indexOf('no-swipe') > -1) || (this['LapysJS eventPositionX'] = event.clientX || event.changedTouches[0].clientX)
                                });

                                // Mouse Up, Touch End
                                carousel[i].setEvent('mouseup touchend', function carouselUserGesture_SwipeToggleSlide(event) {
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (this.getAttribute('class').trim().split(/ /g).indexOf('no-swipe') < 0)
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (event.constructor == window.MouseEvent) {
                                            /* Logic
                                                    [if:else if:else statement]

                                                > Target > Toggle (Previous, Next) Slide
                                            */
                                            if (event.clientX < this['LapysJS eventPositionX'] - (innerWidth * (45 / 100)))
                                                this.togglePreviousSlide();

                                            else if (event.clientX > this['LapysJS eventPositionX'] + (innerWidth * (45 / 100)))
                                                this.toggleNextSlide()
                                        }

                                        else if (event.constructor == window.TouchEvent)
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
                            !(carousel[i].direction && carousel[i].interval) || setInterval(function() {
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
                                    carousel[i]['toggle' + carousel[i].direction.replace(/ /g, '').replace('left', 'Previous').replace('right', 'Next') + 'Slide']();

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
                    };
                    LapysJS.script.scriptNewCarousel = LapysJSScriptNewCarousel;
                    !!window.DISALLOW_CAROUSEL_PLUGIN || LapysJSScriptNewCarousel();
                    !!window.DISALLOW_CAROUSEL_PLUGIN || onDOMNodeAdded(LapysJSScriptNewCarousel);

                    // Initialization > Data
                    let data = LapysJSScriptNewCarousel;

                    // Set Timeout
                    !!window.DISALLOW_CAROUSEL_PLUGIN || setTimeout(function() {
                        // Function
                            // LapysJS Script Correct Carousel Sequence A
                            function LapysJSScriptCorrectCarouselSequenceA() {
                                /* Loop
                                        Index Carousel.
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
                                        !(carousel[i].containers || new (function LapysJSObject() {})).buttons
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
                                        !(carousel[i].containers || new (function LapysJSObject() {})).indicators
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
                                                Index the Carousel's child elements.
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
                                                Index the Carousel's child elements.
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
                                        setTimeout(function() {
                                            /* Loop
                                                    Index the Carousel's Slides.
                                            */
                                            for (let i = 0; i < carousel[j].slides.length; i += 1) {
                                                // Modification > Slide
                                                    // Class
                                                    carousel[j].slides[i].delClass('slide slide-' + i);
                                                    carousel[j].slides[i].addClass('slide slide-' + (i + 1));

                                                    // Data Slide Index
                                                    carousel[j].slides[i].setAttribute('data-slide-index', i + 1)
                                            }

                                            // Modification > (Carousel > Slide)
                                                // Class
                                                carousel[j].slides[~-carousel[j].slides.length].delClass('slide slide-' + carousel[j].slides[~-carousel[j].slides.length].getAttribute('data-slide-index'));
                                                carousel[j].slides[~-carousel[j].slides.length].addClass('slide slide-0');

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

                                    /* {Inject New Slide} Loop
                                            [do:while statement]
                                    */
                                    injectNewSlide: while (
                                        Array.from(carousel[i].children).indexOf(carousel[i].querySelector(':not(.container)')) > -1 ||
                                        Array.from(carousel[i].children).indexOf(carousel[i].querySelectorAll(':not(.container)')[~-carousel[i].querySelectorAll(':not(.container)').length]) > -1
                                    )
                                        /* Loop
                                                Pre-index the Carousel's children.
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
                                                    Index the Carousel's indicators.
                                            */
                                            for (let j = 0; j < carousel[i].indicators.length; j += 1) {
                                                // Modification > (Carousel > Indicators)
                                                    // Outer HTML
                                                    carousel[i].indicators[j].outerHTML = carousel[i].getAttribute('data-indicators-html') || carousel[i].indicators[j].outerHTML;

                                                    // Class
                                                    carousel[i].indicators[j].addClass('indicator indicator-' + j);

                                                    // Data Slide Index
                                                    carousel[i].indicators[j].setAttribute('data-slide-index', j)
                                            }

                                        // Modification > Carousel > Data Indicators HTML
                                        carousel[i].setAttribute('data-indicators-html', carousel[i].indicators[0].outerHTML);
                                    }

                                    /* Loop
                                            Index Carousel Buttons.
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
                                                        Index the Target's parents.
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
                                                Index Carousel Indicators.
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
                                                            Index the Target's parents.
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
                                                carousel[i].containers.buttons.innerHTML += (carousel[i].getAttribute('data-buttons-left-html') || "<button class='button button-0' data-id=left-button>&larr;</button>") + (carousel[i].getAttribute('data-buttons-right-html') || "<button class='button button-1' data-id=right-button>&rarr;</button>")
                                            }

                                            catch (error) {
                                                // Modification > (Carousel > Container > Buttons) > Inner HTM
                                                carousel[i].containers.buttons.innerHTML += "<button class='button button-0' data-id=left-button>&larr;</button><button class='button button-1' data-id=right-button>&rarr;</button>"
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
                                                Index the Carousel's Indicators.
                                        */
                                        for (let j = 0; j < carousel[i].indicators.length; j += 1)
                                            /* Loop
                                                    While
                                                        there is a duplicate Indicator.

                                                > Modification > Indicator > Class
                                            */
                                            while (carousel[i].containers.indicators.querySelectorAll('.indicator-' + j)[1])
                                                carousel[i].containers.indicators.querySelectorAll('.indicator-' + j)[1].delClass('indicator-' + j);

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
                                                    Index the Carousel's last Indicator's attributes.

                                                > Modification > Data > [Carousel > Indicator > Attribute > Name]
                                            */
                                            for (let j = 0; j < carousel[i].indicators[~-carousel[i].indicators.length].attributes.length; j += 1)
                                                data.setAttribute(carousel[i].indicators[~-carousel[i].indicators.length].attributes[j].name, carousel[i].indicators[~-carousel[i].indicators.length].attributes[j].value);

                                            // Insertion
                                            carousel[i].containers.indicators.appendChild(data);

                                            // Modification > Data > Class
                                            data.delClass('indicator-' + carousel[i].indicators[~-carousel[i].indicators.length].getAttribute('data-slide-index'));
                                            data.addClass('indicator-' + (element => {
                                                // Initialization > Loop Counter
                                                let k;

                                                /* Loop
                                                        Index Element's siblings.
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
                                            })(data))
                                        }

                                        else
                                            // Error Handling
                                            try {
                                                // Modification > (Carousel > Containers > Indicators) > Inner HTML
                                                carousel[i].containers.indicators.innerHTML += carousel[i].getAttribute('data-indicators-html') || "<a class='indicator indicator-0' data-slide-index=0> </a>";
                                            }

                                            catch (error) {
                                                // Modification > (Carousel > Containers > Indicators) > Inner HTML
                                                carousel[i].containers.indicators.innerHTML += "<a class='indicator indicator-0' data-slide-index=0> </a>";
                                            }

                                    /* Loop
                                            Index the Carousel's Slides.
                                    */
                                    for (let j = 0; j < carousel[i].slides.length; j += 1)
                                        /* Logic
                                                If
                                                    the Carousel's 'Slide' is not a Slide.

                                            > Modification > (Carousel > Slide)
                                        */
                                        if (
                                            !carousel[i].slides[j].hasClass('slide slide-' + j) &&
                                            !carousel[i].slides[j].getAttribute('data-slide-index')
                                        ) {
                                            // Class
                                            carousel[i].slides[j].addClass('slide slide-' + j);

                                            // Data Slide Index
                                            carousel[i].slides[j].setAttribute('data-slide-index', j)
                                        }
                                }
                            };
                            LapysJS.script.scriptCorrectCarouselSequenceA = LapysJSScriptCorrectCarouselSequenceA;
                            LapysJSScriptCorrectCarouselSequenceA();
                            onNodeChange(document.body, LapysJSScriptCorrectCarouselSequenceA);

                            // LapysJS Script Correct Carousel Sequence B
                            function LapysJSScriptCorrectCarouselSequenceB() {
                                /* Loop
                                        Index Carousel.
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
                            };
                            LapysJS.script.scriptCorrectCarouselSequenceB = LapysJSScriptCorrectCarouselSequenceB;
                            LapysJSScriptCorrectCarouselSequenceB();
                            onNodeChange(document.body, LapysJSScriptCorrectCarouselSequenceB);

                        // ...
                        LapysJS.script.scriptCarousel = function scriptCarousel() {
                            // Data
                            data();

                            // LapysJS Script Correct Carousel Sequence (A, B)
                            LapysJSScriptCorrectCarouselSequenceA();
                            LapysJSScriptCorrectCarouselSequenceB()
                        }
                    }, LapysJS.perm.constructor.prototype.pluginScriptDelay = typeof LapysJS.perm.pluginScriptDelay == 'number' ? Math.abs(LapysJS.perm.pluginScriptDelay) : 3e3)
                })();

                // Drag and Drop
                    // Function > LapysJS Script New Drag and Drop
                    function LapysJSScriptNewDragAndDrop() {
                        // Initialization
                        let dragElement = [...document.querySelectorAll("[data-id*='drag-element']:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not(input):not(textarea)")],
                            dropElement = [...document.querySelectorAll("[data-id*='drop-element'")];

                        /* Loop
                                Index Drag Elements.
                        */
                        for (let i = 0; i < dragElement.length; i += 1)
                            /* Logic
                                    If
                                        the Drag Element is not modified.
                            */
                            if (!dragElement[i]['LapysJS isModified']) {
                                // Initialization > (Former (Left, Position, Top, Z Index), Random)
                                let formerLeft = dragElement[i].getCSS('left'),
                                    formerPosition = dragElement[i].getCSS('position'),
                                    formerTop = dragElement[i].getCSS('top'),
                                    formerZIndex = dragElement[i].getCSS('z-index'),
                                    random = rand(2, 3);

                                // Modification > Drag Element
                                    // Draggable
                                    dragElement[i].draggable = !1;

                                    // Drop Effect
                                    dragElement[i].dropEffect = 'move';

                                    // Drop Zone Element
                                    dragElement[i].dropzoneElement = null;

                                    // In Drop Zone
                                    dragElement[i].inDropzone = !1;

                                    // Inner HTML
                                    dragElement[i].innerHTML = dragElement[i].innerHTML;

                                // Event > Drag Element
                                    // Click
                                    dragElement[i].setEvent('click', function(event) {
                                        // Update > Drop Element
                                        dropElement = [...document.querySelectorAll("[data-id*='drop-element'")];

                                        // Select
                                        select(this);

                                        // Update > Former (Left, Position, Top, Z Index)
                                        formerLeft = this.getCSS('left');
                                        formerPosition = this.getCSS('position');
                                        formerTop = this.getCSS('top');
                                        formerZIndex = this.getCSS('z-index')
                                    });

                                    // Drag Start
                                    dragElement[i].setEvent('drag dragenter dragexit dragleave dragover touchmove touchstart', function(event) {
                                        // Initialization > (Metadata, Target)
                                        let metadata = document.getElementsByTagName(alphabetString)[0] || document.createElement(alphabetString),
                                            that = this;

                                        // Select
                                        select(this);

                                        /* Logic
                                                If
                                                    Metadata has been modified.
                                        */
                                        if (metadata.getAttribute('data-id') != 'drag-element-placeholder' && metadata.getAttribute('style') == null) {
                                            // Modification > Metadata > Data ID
                                            metadata.setAttribute('data-id', 'drag-element-placeholder');

                                            // Style
                                                // Metadata
                                                    // Border
                                                    metadata.style.border = this.getCSS('border');

                                                    // Bottom
                                                    metadata.style.bottom = this.getCSS('bottom');

                                                    // Display
                                                    metadata.style.display = this.getCSS('display');

                                                    // Float
                                                    metadata.style.float = this.getCSS('float');

                                                    // Height
                                                    metadata.style.height = this.offset.height + 'px';

                                                    // Left
                                                    metadata.style.left = this.getCSS('left');

                                                    // Margin
                                                    metadata.style.margin = this.getCSS('margin');

                                                    // Opacity
                                                    metadata.style.opacity = 0;

                                                    // Padding
                                                    metadata.style.padding = this.getCSS('padding');

                                                    // Right
                                                    metadata.style.right = this.getCSS('right');

                                                    // Top
                                                    metadata.style.top = this.getCSS('top');

                                                    // Transform
                                                    metadata.style.transform = this.getCSS('transform');

                                                    // Width
                                                    metadata.style.width = this.offset.width + 'px';

                                                // Target
                                                    // Position
                                                    this.style.position = 'absolute';

                                                    // Z Index
                                                    this.style.zIndex = 2147483647;

                                            // Insertion
                                            this.parentElement.insertBefore(metadata, this)
                                        }

                                        // Initialization > (Alpha, Beta (X, Y))
                                        let alpha = this.getBoundingClientRect(),
                                            betaX = event.clientX || (event.changedTouches || [{clientX: NaN}])[0].clientX,
                                            betaY = event.clientY || (event.changedTouches || [{clientY: NaN}])[0].clientY - 40;

                                        // Style > Target > (Left, Top)
                                        this.style.left = (betaX - (alpha.width / random)) + 'px';
                                        this.style.top = (betaY - (alpha.height / random)) + 'px';

                                        /* Loop
                                                Index Drop Element.
                                        */
                                        for (let i = 0; i < dropElement.length; i += 1) {
                                            // Initialization > Data
                                            let data = dropElement[i].getBoundingClientRect();

                                            /* Function > Test
                                                    --- NOTE ---
                                                        @lapys:
                                                            If the drop zone element is 'null',
                                                                then the test should be run immediately,
                                                                else it should be with a timeout for the 'dragend' event listener to notice.

                                                            The test determines if the drag element is within a drop zone.
                                            */
                                            function test() {
                                                // Modification > Target
                                                    // In Drop Zone
                                                    that.inDropzone = (data.height > alpha.height && data.width > alpha.width) ?
                                                        (alpha.bottom < data.bottom && alpha.left > data.left && alpha.right < data.right && alpha.top > data.top) :
                                                        (
                                                            (alpha.bottom > data.bottom && alpha.left > data.left && alpha.right < data.right && alpha.top > data.top) ||
                                                            (alpha.bottom < data.bottom && alpha.left > data.left && alpha.right > data.right && alpha.top > data.top)
                                                        );

                                                    // Drop Zone Element
                                                    that.dropzoneElement = that.inDropzone && dropElement[i] != that.parentElement ? dropElement[i] : null
                                            }

                                            // Test | Set Timeout
                                            that.dropzoneElement === null ? test() : setTimeout(test)
                                        }
                                    });

                                    // Drag End
                                    dragElement[i].setEvent('dragend touchcancel touchend', function(event) {
                                        // Initialization > Target
                                        let that = this;

                                        /* Loop
                                                [do:while statement]

                                            > Deletion
                                        */
                                        while (document.querySelector('[data-id=drag-element-placeholder'))
                                            document.querySelector('[data-id=drag-element-placeholder').remove();

                                        /* Logic
                                                If
                                                    the Target has a Drop zone Element.

                                            > Error Handling
                                        */
                                        if (that.dropzoneElement) {
                                            try {
                                                // Insertion
                                                that.dropzoneElement.appendChild(that)
                                            }

                                            catch (error) {
                                                // Insertion
                                                that.dropzoneElement.appendChild(that.cloneNode(true));

                                                // Deletion
                                                that.remove()
                                            }
                                        }

                                        // Style > Target > (Left, Position, Top, Z Index)
                                        that.style.left = formerLeft;
                                        that.style.position = formerPosition;
                                        that.style.top = formerTop;
                                        that.style.zIndex = formerZIndex
                                    });

                                // Modification > Drag Element > Is Modified
                                dragElement[i]['LapysJS isModified'] = !0
                            }
                    };
                    LapysJS.script.scriptNewDragAndDrop = LapysJSScriptNewDragAndDrop;
                    !!window.DISALLOW_DRAG_AND_DROP_PLUGIN || LapysJSScriptNewDragAndDrop();
                    !!window.DISALLOW_DRAG_AND_DROP_PLUGIN || onDOMNodeAdded(LapysJSScriptNewDragAndDrop);

                // Dropdown
                    // Function > LapysJS Script New Dropdown
                    function LapysJSScriptNewDropdown() {
                        // Initialization
                        let dropdown = [...document.querySelectorAll(".dropdown:not(.accordion):not(.carousel):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not(input):not(textarea)")];

                        /* Loop
                                Index Dropdowns.
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
                                            for (let i = 0; i < document.querySelectorAll("[data-id='" + this.getAttribute('data-id') + "']").length; i += 1)
                                                document.querySelectorAll("[data-id='" + this.getAttribute('data-id') + "']")[i].hidden = !0;

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
                                            for (let i = 0; i < document.querySelectorAll("[data-id='" + this.getAttribute('data-id') + "']").length; i += 1)
                                                document.querySelectorAll("[data-id='" + this.getAttribute('data-id') + "']")[i].hidden = !1
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
                    };
                    LapysJS.script.scriptNewDropdown = LapysJSScriptNewDropdown;
                    !!window.DISALLOW_DROPDOWN_PLUGIN || LapysJSScriptNewDropdown();
                    !!window.DISALLOW_DROPDOWN_PLUGIN || onDOMNodeAdded(LapysJSScriptNewDropdown);

                /* Dynamic Text
                        --- UPDATE REQUIRED ---
                            @lapys:
                                - A proper delay attribute and property that functions.
                                - Dynamic Text should be very toggle-able (whether it automates or not).
                */
                (LapysJS.script.scriptDynamicText = function LapysJSScriptDynamicText() {
                    // Function > Script New Dynamic Text
                    function LapysJSScriptNewDynamicText() {
                        // Initialization
                        let dynamicText = [...document.querySelectorAll(".dynamic-text:not(.accordion):not(.carousel):not(.dropdown):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']):not(input):not(textarea)")];

                        /* Loop
                                Index Dynamic Text.
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
                                            return this.querySelector("span[data-id*='cursor'")
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
                                                        this.querySelector("span[data-id*='cursor'").remove()
                                                    }

                                                    else if (this.cursorPosition > parseNumber(arguments[0]))
                                                        // Insertion
                                                        this.insertBefore(this.cursor, this.children[parseNumber(arguments[0])])
                                        }
                                    });

                                    // Data Text Format
                                    dynamicText[i].setAttribute('data-text-format', dynamicText[i].getAttribute('data-text-format') || 'normal');

                                    // Data Text
                                    dynamicText[i].setAttribute('data-text', createDocumentFragment('<span>' + (dynamicText[i].getAttribute('data-text') || '') + '</span>', 'div').querySelector('span').textContent || createDocumentFragment('<span>' + (dynamicText[i].getAttribute('data-text') || '') + '</span>', 'div').querySelector('span').innerText || '');
                                        // Text
                                        ((dynamicText[i].getAttribute('data-text') || '').match(RegExp(dynamicText[i].getAttribute('data-text-separator'), 'g')) || []).length > getterPropertyLimit ? (function(element) {
                                            // Function > Text
                                            function text(element) {
                                                // Modification > Element > Text
                                                element['LapysJS text'] = (function(element) {
                                                    // Initialization > (Data, Metadata, Array)
                                                    let data = (' ' + element.getAttribute('data-text')).slice(' '.length).replace(RegExp('\\\\' + element.getAttribute('data-text-separator'), 'g'), alphabetString),
                                                        metadata = [],
                                                        array = [];

                                                    /* Loop
                                                            [for statement]
                                                    */
                                                    for (let i = 0; i < data.split(RegExp(element.getAttribute('data-text-separator'), 'g')).length; i += 1) {
                                                        // Initialization > Result
                                                        let result = data.split(RegExp(element.getAttribute('data-text-separator'), 'g'))[i];

                                                        // Update > Result
                                                        (LapysJS.debug.formatText(element.getAttribute('data-text-format'), 4).indexOf('no-white-space') < 0) || (result = result.replace(/ /g, ''));
                                                        (LapysJS.debug.formatText(element.getAttribute('data-text-format'), 4).indexOf('pre') < 0) || (result = result.trimChar('\n'));
                                                        (LapysJS.debug.formatText(element.getAttribute('data-text-format'), 4).indexOf('trim') < 0) || (result = result.trim());
                                                        (LapysJS.debug.formatText(element.getAttribute('data-text-format'), 4).indexOf('trim-left') < 0) || (result = result.trimLeft());
                                                        (LapysJS.debug.formatText(element.getAttribute('data-text-format'), 4).indexOf('trim-right') < 0) || (result = result.trimRight());

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
                                                // Initialization > (Element, Data, Metadata, Array)
                                                let element = dynamicText[i],
                                                    data = (' ' + element.getAttribute('data-text')).slice(' '.length).replace(RegExp('\\\\' + element.getAttribute('data-text-separator'), 'g'), alphabetString),
                                                    metadata = [],
                                                    array = [];

                                                /* Loop
                                                        [for statement]
                                                */
                                                for (let i = 0; i < data.split(RegExp(this.getAttribute('data-text-separator'), 'g')).length; i += 1) {
                                                    // Initialization > Result
                                                    let result = data.split(RegExp(this.getAttribute('data-text-separator'), 'g'))[i];

                                                    // Update > Result
                                                    (LapysJS.debug.formatText(this.getAttribute('data-text-format'), 4).indexOf('no-white-space') < 0) || (result = result.replace(/ /g, ''));
                                                    (LapysJS.debug.formatText(this.getAttribute('data-text-format'), 4).indexOf('pre') < 0) || (result = result.trimChar('\n'));
                                                    (LapysJS.debug.formatText(this.getAttribute('data-text-format'), 4).indexOf('trim') < 0) || (result = result.trim());
                                                    (LapysJS.debug.formatText(this.getAttribute('data-text-format'), 4).indexOf('trim-left') < 0) || (result = result.trimLeft());
                                                    (LapysJS.debug.formatText(this.getAttribute('data-text-format'), 4).indexOf('trim-right') < 0) || (result = result.trimRight());

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
                                                this.innerHTML = "<span data-id=cursor></span>"
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
                                                !this.querySelector(":not([data-id*='cursor'])") || this.cursor.previousElementSibling ? this.deleteBackwards() : this.deleteForwards()
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
                                                !this.querySelector(":not([data-id*='cursor'])") || this.cursor.nextElementSibling ? this.deleteForwards() : this.deleteBackwards()
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
                                                while (this.querySelector(":not([data-id*='highlighted'])"))
                                                    this.querySelector(":not([data-id*='highlighted'])").setAttribute('data-id', this.querySelector(":not([data-id*='highlighted'])").getAttribute('data-id') ? this.querySelector(":not([data-id*='highlighted'])").getAttribute('data-id') + ' highlighted' : 'highlighted')
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
                                                (arguments.length < 1) || this.cursor.insertAdjacentHTML('beforebegin', '<span>' + (arguments[0] == ' ' ? '&nbsp;' : arguments[0]) + '</span>')
                                            }
                                        });

                                        // Insert (Character) Forwards
                                        (typeof dynamicText[i].insertForwards == 'function') || Object.defineProperty(dynamicText[i], 'insertForwards', {
                                            // Value
                                            value: function insertForwards() {
                                                // Insertion
                                                (arguments.length < 1) || this.cursor.insertAdjacentHTML('afterend', '<span>' + (arguments[0] == ' ' ? '&nbsp;' : arguments[0]) + '</span>')
                                            }
                                        });

                                        // Insert Newline Backwards
                                        (typeof dynamicText[i].insertNewlineBackwards == 'function') || Object.defineProperty(dynamicText[i], 'insertNewlineBackwards', {
                                            // Value
                                            value: function insertNewlineBackwards() {
                                                // Insertion
                                                this.cursor.insertAdjacentHTML('beforebegin', "<span><br></span>")
                                            }
                                        });

                                        // Insert Newline Forwards
                                        (typeof dynamicText[i].insertNewlineForwards == 'function') || Object.defineProperty(dynamicText[i], 'insertNewlineForwards', {
                                            // Value
                                            value: function insertNewlineForwards() {
                                                // Insertion
                                                this.cursor.insertAdjacentHTML('afterend', "<span><br></span>")
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

                                        /* Reset
                                                --- WARN ---
                                                    @lapys: Use at your own risk.
                                        */
                                        (typeof dynamicText[i].reset == 'function') || Object.defineProperty(dynamicText[i], 'reset', {
                                            // Value
                                            value: function insertForwards() {
                                                // Modification > Target
                                                    // Current Text Function Index
                                                    this['LapysJS currentTextFunctionIndex'] =

                                                    // Current Text Function Sequence Index
                                                    this['LapysJS currentTextFunctionSequenceIndex'] =

                                                    // Current Text Index
                                                    this['LapysJS currentTextIndex'] =

                                                    // Current Text Character Index
                                                    this['LapysJS currentTextCharacterIndex'] =

                                                    // Text Function Character Length Limit
                                                    this['LapysJS textFunctionCharacterLengthLimit'] =

                                                    // Text Function Iteration Count Index
                                                    this['LapysJS textFunctionIterationCountIndex'] =

                                                    // Text Animation Interval
                                                    this['LapysJS textAnimationInterval'] = 0
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
                                                while (this.querySelector("[data-id*='highlighted'"))
                                                    this.querySelector("[data-id*='highlighted'").setAttribute('data-id', this.querySelector("[data-id*='highlighted'").getAttribute('data-id').replace('highlighted', '').trim())
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
                                            !element.hasAttribute('onautomate') || func('', 'element', "(function(event) {" + element.getAttribute('onautomate') + "\n})(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }))")(element);

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
                                                    element.getEvent('automate')[i].listener(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }));

                                            /* Function > Type */
                                            !(element.getAttribute('data-text') != ' ' && element.getAttribute('data-text-function') != 'pause') || (function type() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (dynamicText[i]['LapysJS textFunctionInit']) {
                                                    // Execution
                                                    !element.hasAttribute('ontype') || func('', 'element', "(function(event) {" + element.getAttribute('ontype') + "\n})(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }))")(element);

                                                    // Element > On Automate
                                                    (typeof element.ontype != 'function') || element.ontype(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }));

                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (element.getEvent('type') != null)
                                                        /* Loop
                                                                [for statement]

                                                            > (Element > Get Event > Automate) > Listener
                                                        */
                                                        for (let i = 0; i < element.getEvent('type').length; i += 1)
                                                            element.getEvent('type')[i].listener(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }));

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
                                                        !element.hasAttribute('oncharacterchange') || func('', 'element', "(function(event) {" + element.getAttribute('oncharacterchange') + "\n})(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }))")(element);

                                                        // Element > On Character Change
                                                        (typeof element.oncharacterchange != 'function') || element.oncharacterchange(new (class AutomationEvent { constructor() { this.currentTarget = element; this.path = element.parentPath; this.__proto__ = window.Event; this.srcElement = element; this.target = element} }));

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
                                                                !element.hasAttribute('onfunctionchange') || eval("(function(event = createObject({currentTarget: element, path: element.parentPath, srcElement: element, target: element}, new (class AutomationEvent extends Event {})(''))) {\n" + element.getAttribute('onfunctionchange') + '\n})()');

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
                                                                    !element.hasAttribute('onsequencechange') || eval("(function(event = createObject({currentTarget: element, path: element.parentPath, srcElement: element, target: element}, new (class AutomationEvent extends Event {})(''))) {\n" + element.getAttribute('onsequencechange') + '\n})()');

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
                                        while (dynamicText[i].querySelectorAll("span[data-id*='cursor'")[1])
                                            dynamicText[i].querySelectorAll("span[data-id*='cursor'")[1].remove();

                                        // Insertion
                                        dynamicText[i].querySelector("span[data-id*='cursor'") || dynamicText[i].insertChild('begin', createElement('span', '[data-id=cursor'));

                                        // Modification > Dynamic Text > Cursor > Data ID
                                        dynamicText[i].cursor.setAttribute('data-id', dynamicText[i].cursor.getAttribute('data-id').replace('highlighted', '').trim());

                                        /* Loop
                                                [do:while statement]

                                            > Modification > Dynamic Text > [Element] > Data ID
                                        */
                                        while (dynamicText[i].querySelector("[data-id=''"))
                                            dynamicText[i].querySelector("[data-id=''").removeAttribute('data-id');

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
                                                    dynamicText[i].cursor.delete = (function() {});

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
                    };
                    LapysJS.script.scriptNewDynamicText = LapysJSScriptNewDynamicText;
                    !!window.DISALLOW_DYNAMIC_TEXT_PLUGIN || LapysJSScriptNewDynamicText();
                    !!window.DISALLOW_DYNAMIC_TEXT_PLUGIN || onDOMNodeAdded(LapysJSScriptNewDynamicText)
                })();

                // Media
                    // Function > Script New Media
                    function LapysJSScriptNewMedia() {

                    };
                    LapysJS.script.scriptNewMedia = LapysJSScriptNewMedia;
                    !!window.DISALLOW_MEDIA_PLUGIN || LapysJSScriptNewMedia();
                    !!window.DISALLOW_MEDIA_PLUGIN || onNodeAdded(document.body, LapysJSScriptNewMedia);

                    // Initialization > Alpha
                    let alpha = LapysJS.script.scriptNewMedia;

                    // Set Timeout
                    !!window.DISALLOW_MEDIA_PLUGIN || setTimeout(function() {
                        // Function > LapysJS Script Correct Roulette Sequence
                        function LapysJSScriptCorrectMediaSequence() {
                        }
                        LapysJS.script.scriptCorrectMediaSequence = LapysJSScriptCorrectMediaSequence;
                        onNodeChange(document.body, LapysJSScriptCorrectMediaSequence);

                        // ...
                        LapysJS.script.scriptMedia = function scriptMedia() {
                            // Alpha
                            alpha();

                            // LapysJS Script Correct Roulette Sequence
                            LapysJSScriptCorrectMediaSequence()
                        }
                    }, LapysJS.perm.constructor.prototype.pluginScriptDelay = typeof LapysJS.perm.pluginScriptDelay == 'number' ? Math.abs(LapysJS.perm.pluginScriptDelay) : 3e3);

                // Media Playlist
                    // Function > Script New Media Playlist
                    function LapysJSScriptNewMediaPlaylist() {

                    };
                    LapysJS.script.scriptNewMediaPlaylist = LapysJSScriptNewMediaPlaylist;
                    !!window.DISALLOW_MEDIA_PLAYLIST_PLUGIN || LapysJSScriptNewMediaPlaylist();
                    !!window.DISALLOW_MEDIA_PLAYLIST_PLUGIN || onNodeAdded(document.body, LapysJSScriptNewMediaPlaylist);

                    // Initialization > Beta
                    beta = LapysJS.script.scriptNewMediaPlaylist;

                    // Set Timeout
                    !!window.DISALLOW_MEDIA_PLAYLIST_PLUGIN || setTimeout(function() {
                        // Function > LapysJS Script Correct Roulette Sequence
                        function LapysJSScriptCorrectMediaPlaylistSequence() {
                        }
                        LapysJS.script.scriptCorrectMediaPlaylistSequence = LapysJSScriptCorrectMediaPlaylistSequence;
                        onNodeChange(document.body, LapysJSScriptCorrectMediaPlaylistSequence);

                        // ...
                        LapysJS.script.scriptMediaPlaylist = function scriptMediaPlaylist() {
                            // Beta
                            beta();

                            // LapysJS Script Correct Roulette Sequence
                            LapysJSScriptCorrectMediaPlaylistSequence()
                        }
                    }, LapysJS.perm.constructor.prototype.pluginScriptDelay = typeof LapysJS.perm.pluginScriptDelay == 'number' ? Math.abs(LapysJS.perm.pluginScriptDelay) : 3e3);

                // Placeholder
                    // Function > Script New Placeholder
                    function LapysJSScriptNewPlaceholder() {
                        // Initialization > Placeholder
                        let placeholder = document.querySelectorAll("input[data-placeholder]:not(.accordion):not(.carousel):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element']), textarea[data-placeholder]:not(.accordion):not(.carousel):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element'])");

                        /* Loop
                                Index Placeholders.
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
                                placeholder[i].insertAdjacentHTML('beforebegin', '<div data-id=placeholder style=position:absolute>' + placeholder[i].getAttribute('data-placeholder') + '</div>');

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
                                Index Placeholder Elements.
                        */
                        for (let i = 0; i < placeholderElement.length; i += 1) {
                            // Style > Placeholder Element
                                // Opacity
                                ((placeholderElement[i].nextElementSibling || {}).value === '') || (placeholderElement[i].style.opacity = 0);

                                // Opacity, Position
                                placeholderElement[i].hasAttribute('data-selected') ? placeholderElement[i].delStyle('opacity', 'position') : placeholderElement[i].style.position = 'absolute';

                            // Deletion
                            (placeholderElement[i].nextElementSibling || {hasAttribute: function() { return !1 }}).hasAttribute('data-placeholder') || placeholderElement[i].remove()
                        }
                    };
                    LapysJS.script.scriptNewPlaceholder = LapysJSScriptNewPlaceholder;
                    !!window.DISALLOW_PLACEHOLDER_PLUGIN || LapysJSScriptNewPlaceholder();
                    !!window.DISALLOW_PLACEHOLDER_PLUGIN || onDOMNodeAdded(LapysJSScriptNewPlaceholder);

                /* Roulette
                        --- UPDATE REQUIRED ---
                            @lapys:
                                - Allow the indicators to have event listeners
                                - Continue making the Roulette `unbreakable`.
                                - Fix the Roulette`s outer limits.
                */
                    // Function > Script New Roulette
                    (LapysJS.script.scriptNewRoulette = function LapysJSScriptNewRoulette() {
                        // Initialization > Roulette
                        let roulette = document.querySelectorAll(".roulette:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element']):not(input):not(textarea)");

                        /* Loop
                                Index Roulette.
                        */
                        for (let i = 0; i < roulette.length; i += 1)
                            /* Logic
                                    If
                                        the Roulette is not modified.
                            */
                            if (!roulette[i]['LapysJS isModified']) {
                                // Modification > Roulette
                                    // Data ID
                                    ((roulette[i].getAttribute('data-id') || '').indexOf('drop-element') < 0) || roulette[i].setAttribute('data-id', roulette[i].getAttribute('data-id').replace('drop-element', ''));
                                    roulette[i].getAttribute('data-id') || roulette[i].removeAttribute('data-id');

                                    // Buttons
                                    Object.defineProperty(roulette[i], 'buttons', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function buttons() {
                                            // Initialization > (Data, Target)
                                            let data = Array.from((this.containers.buttons || {children: []}).children),
                                                that = this;

                                                // Left
                                                Object.defineProperty(data, 'left', {
                                                    // Configurable
                                                    configurable: !1,

                                                    // Enumerable
                                                    enumerable: !1,

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
                                                    configurable: !1,

                                                    // Enumerable
                                                    enumerable: !1,

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
                                    Object.defineProperty(roulette[i], 'containers', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function containers() {
                                            // Initialization > Data
                                            let data = [...this.children];

                                            /* Loop
                                                    Index Data.
                                            */
                                            for (let i of data)
                                                /* Logic
                                                        [if:else if:else statement]

                                                    > Update > Data
                                                */
                                                if (LapysJS.debug.formatText(i.getAttribute('class'), 4).indexOf('container') < 0 && (i.getAttribute('data-id') || '').indexOf('-container') < 0)
                                                    data.removeElement(i);

                                            // Modification > Data > (Buttons, Cards, Indicators)
                                            data.buttons = [...this.children].indexOf(this.querySelector('[data-id=buttons-container')) > -1 ? this.querySelector('[data-id=buttons-container') : null;
                                            data.cards = [...this.children].indexOf(this.querySelector("[data-id*=cards-container")) > -1 ? this.querySelector("[data-id*=cards-container") : null;
                                            data.indicators = [...this.children].indexOf(this.querySelector('[data-id=indicators-container')) > -1 ? this.querySelector('[data-id=indicators-container') : null;

                                            // Return
                                            return data
                                        }
                                    });

                                    // Buttons Container
                                    Object.defineProperty(roulette[i], 'buttonsContainer', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function buttonsContainer() {
                                            // Return
                                            return this.containers.buttons
                                        }
                                    });

                                    // Cards
                                    Object.defineProperty(roulette[i], 'cards', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function getIndicators() {
                                            // Return
                                            return (this.containers.cards || document.createElement('a')).children
                                        },

                                        // Set
                                        set: function setIndicators() {
                                            // Modification > Target > Data Cards HTML
                                            this.setAttribute('data-cards-html', arguments[0].innerHTML || arguments[0])
                                        }
                                    });

                                    // Cards Container
                                    Object.defineProperty(roulette[i], 'cardsContainer', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function cardsContainer() {
                                            // Return
                                            return this.containers.cards
                                        }
                                    });

                                    // Direction
                                    Object.defineProperty(roulette[i], 'direction', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function getDirection() {
                                            // Return
                                            return String(this.getAttribute('data-direction') || 'right')
                                        },

                                        // Set
                                        set: function setDirection() {
                                            // Modification > Target > Data Direction
                                            this.setAttribute('data-direction', String(arguments[0] || ''))
                                        }
                                    });

                                    // Indicators
                                    Object.defineProperty(roulette[i], 'indicators', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

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

                                    // Indicators Container
                                    Object.defineProperty(roulette[i], 'indicatorsContainer', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function indicatorsContainer() {
                                            // Return
                                            return this.containers.indicators
                                        }
                                    });

                                    // Scroll Speed
                                    Object.defineProperty(roulette[i], 'scrollSpeed', {
                                        // Configurable
                                        configurable: !1,

                                        // Enumerable
                                        enumerable: !1,

                                        // Get
                                        get: function getScrollSpeed() {
                                            // Return
                                            return parseNumber(this.getAttribute('data-scroll-speed') || '')
                                        },

                                        // Set
                                        set: function setScrollSpeed() {
                                            // Modification > Target > Data Direction
                                            this.setAttribute('data-scroll-speed', parseNumber(arguments[0]))
                                        }
                                    });

                                    // Inner HTML
                                    (roulette[i].children.length > 0) || (roulette[i].innerHTML = '<div></div>');
                                        // Cards
                                        roulette[i].cardsContainer || (roulette[i].innerHTML = "<div class=container data-id='cards-container" + ((roulette[i].getAttribute('data-id') || '').indexOf('drop-element') > -1 ? " drop-element'>" : "'>") + roulette[i].innerHTML + '</div>');

                                        // Buttons
                                        !roulette[i].hasAttribute('data-buttons') || roulette[i].buttonsContainer || (roulette[i].innerHTML +=
                                            '<div data-id=buttons-container>' +
                                                (function() {
                                                    let data = '',
                                                        alpha = createDocumentFragment(roulette[i].getAttribute('data-buttons-left-html') || "<button class='button button-0' data-id=left-button>&larr;</button>", 'div').querySelector('*'),
                                                        beta = createDocumentFragment(roulette[i].getAttribute('data-buttons-right-html') || "<button class='button button-1' data-id=right-button>&rarr;</button>", 'div').querySelector('*');

                                                    alpha.addClass('button', 'button-0');
                                                    roulette[i].setAttribute('data-buttons-left-html', (alpha.getAttribute('data-id') ? alpha.getAttribute('data-id') + ' ' : ' ') + 'left-button');

                                                    beta.addClass('button', 'button-0');
                                                    roulette[i].setAttribute('data-buttons-right-html', (beta.getAttribute('data-id') ? beta.getAttribute('data-id') + ' ' : ' ') + 'left-button');

                                                    data += (roulette[i].dataset.id = alpha.outerHTML);
                                                    data += (roulette[i].dataset.id = beta.outerHTML);

                                                    return data
                                                })() +
                                            '</div>');

                                        // Indicators
                                        !roulette[i].hasAttribute('data-indicators') || roulette[i].indicatorsContainer || (roulette[i].innerHTML +=
                                            '<div data-id=indicators-container>' +
                                                (function() {
                                                    // Initialization > Data
                                                    let data = '';

                                                    /* Loop
                                                            [for statement]

                                                        > Update > Data
                                                    */
                                                    for (let j = 0; j < roulette[i].cardsContainer.children.length; j += 1)
                                                        data +=  "<a class='indicator indicator-" + j + "' data-card-index=" + j + '> </a>';

                                                    // Return
                                                    return data
                                                })() +
                                            '</div>'
                                        );

                                /* Loop
                                        Index the Roulette's children.

                                    > Modification > Roulette child
                                */
                                for (let j = 0; j < roulette[i].cardsContainer.children.length; j += 1) {
                                    // Class
                                    roulette[i].cardsContainer.children[j].addClass('card-' + j);

                                    // Data Slide Index
                                    roulette[i].cardsContainer.children[j].setAttribute('data-card-index', j)
                                }

                                // Function > Roulette
                                    // Slide Left
                                    Object.defineProperty(roulette[i], 'slideLeft', {
                                        // Value
                                        value: function slideLeft() {
                                            // Initialization > (Data, Metadata, Alpha, Target)
                                            let data = 0,
                                                metadata = this.offset.left < 0 ? 0 : this.offset.left,
                                                alpha = arguments[0],
                                                that = this;

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (typeof alpha == 'number' && alpha !== NaN) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (alpha > -1) {
                                                    // Update > Metadata
                                                    metadata += parseNumber(that.cardsContainer.getCSS('border-right-width')) + parseNumber(that.cardsContainer.getCSS('margin-right')) + parseNumber(that.cardsContainer.getCSS('padding-right')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('border-right-width')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('margin-right')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('padding-right')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('border-right-width')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('margin-right')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('padding-right'));

                                                    // Function > Slide
                                                    function slide() {
                                                        // Target > Style > Left
                                                        that.cardsContainer.style.left = (arguments[0] + parseNumber(that.cardsContainer.getCSS('left'))) + 'px'
                                                    };

                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (that.cardsContainer.firstElementChild.offset.left < metadata)
                                                        // Slide
                                                        slide(parseNumber(alpha));

                                                    // Set Timeout
                                                    setTimeout(function() {
                                                        // Slide
                                                        !(that.cardsContainer.firstElementChild.offset.left > metadata) || slide(-parseNumber(alpha))
                                                    }, ((parseNumber(that.cardsContainer.getCSS('transition-delay')) + parseNumber(that.cardsContainer.getCSS('transition-duration'))) * 1e3) + 100)
                                                }

                                                else
                                                    // Target > Slide Right
                                                    that.slideRight(-alpha)
                                            }

                                            // Return
                                            return data
                                        }
                                    });

                                    // Slide Right
                                    Object.defineProperty(roulette[i], 'slideRight', {
                                        // Value
                                        value: function slideRight() {
                                            // Initialization > (Data, Metadata, Alpha, Target)
                                            let data = 0,
                                                metadata = this.offset.right > innerWidth ? innerWidth : this.offset.right,
                                                alpha = arguments[0],
                                                that = this;

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (typeof alpha == 'number' && alpha !== NaN) {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (alpha > -1) {
                                                    // Update > Metadata
                                                    metadata -= parseNumber(that.cardsContainer.getCSS('border-left-width')) + parseNumber(that.cardsContainer.getCSS('margin-left')) + parseNumber(that.cardsContainer.getCSS('padding-left')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('border-left-width')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('margin-left')) + parseNumber(that.cardsContainer.firstElementChild.getCSS('padding-left')) + parseNumber(that.cardsContainer.lastElementChild.getCSS('border-right-width')) + parseNumber(that.cardsContainer.lastElementChild.getCSS('margin-right')) + parseNumber(that.cardsContainer.lastElementChild.getCSS('padding-right'));

                                                    // Function > Slide
                                                    function slide() {
                                                        // Target > Style > Left
                                                        that.cardsContainer.style.left = (arguments[0] + parseNumber(that.cardsContainer.getCSS('left'))) + 'px'
                                                    };

                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (that.cardsContainer.lastElementChild.offset.right > metadata)
                                                        // Slide
                                                        slide(-parseNumber(alpha));

                                                    // Set Timeout
                                                    setTimeout(function() {
                                                        // Slide
                                                        !(that.cardsContainer.lastElementChild.offset.right < metadata) || slide(parseNumber(alpha))
                                                    }, ((parseNumber(that.cardsContainer.getCSS('transition-delay')) + parseNumber(that.cardsContainer.getCSS('transition-duration'))) * 1e3) + 100)
                                                }

                                                else
                                                    // Target > Slide Left
                                                    that.slideLeft(-alpha)
                                            }

                                            // Return
                                            return data
                                        }
                                    });

                                    // Slide To
                                    Object.defineProperty(roulette[i], 'slideTo', {
                                        // Value
                                        value: function slideTo() {
                                            let data = arguments[0],
                                                that = this;

                                            function slide() {
                                                arguments[0] = String(arguments[0]);

                                                that.cardsContainer.style.left = 0;
                                                that['slide' + arguments[0][0].toUpperCase() + arguments[0].slice(arguments[0][0].length)](data)
                                            };

                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (typeof data == 'number' && data !== NaN) {
                                                let metadata = parseNumber(that.cardsContainer.getCSS('left')) < data;

                                                // Slide
                                                metadata ? slide('right') : slide('left');

                                                // Set Timeout
                                                metadata || setTimeout(function() {
                                                    // Slide
                                                    parseNumber(that.cardsContainer.getCSS('left')) < data ? slide('right') : slide('left')
                                                }, ((parseNumber(that.getCSS('transition-delay')) + parseNumber(that.getCSS('transition-duration'))) * 1e3) + 250)
                                            }

                                            // Return
                                            return data
                                        }
                                    });

                                // Function
                                    // Update
                                    !((roulette[i].direction == 'left' || roulette[i].direction == 'right') && roulette[i].scrollSpeed !== 0) || (function update() {
                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (roulette[i].direction == 'left')
                                            // Roulette > Slide Left
                                            roulette[i].slideLeft(roulette[i].scrollSpeed);

                                        else if (roulette[i].direction == 'right')
                                            // Roulette > Slide Right
                                            roulette[i].slideRight(roulette[i].scrollSpeed);

                                        // Request Animation Frame
                                        requestAnimationFrame(update)
                                    })();

                                // Style
                                    // (Roulette > Parent Element) > Overflow
                                    roulette[i].parentElement.setCSS('overflow', 'hidden !important');

                                    // Roulette > Left
                                    roulette[i].cardsContainer.style.left = 0;

                                // Event
                                    // Roulette
                                        // [Data Event Type] | Click
                                        roulette[i].setEvent((roulette[i].getAttribute('data-event-type') || 'click').trim(), function rouletteFocusEvent() {
                                            // Modification > Target > Data Selected
                                            this.setAttribute('data-selected', '')
                                        });

                                        // Mouse Down, Touch Start
                                        roulette[i].setEvent('mousedown touchstart', function(event) {
                                            // Modification > Target > Cursor Position X
                                            (this.getAttribute('class').trim().split(/ /g).indexOf('no-swipe') > -1) || (this['LapysJS eventPositionX'] = event.clientX || event.changedTouches[0].clientX);

                                            // Insertion
                                            document.head.appendChild(createDocumentFragment('<delete-element><style media=all type=text/css>' + this.CSSSelector + ' > [data-id=cards-container] > * { user-select: none !important; }</style></delete-element>', 'div'))
                                        });

                                        // Mouse Up, Touch End
                                        roulette[i].setEvent('mouseup touchend', function(event) {
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (this.getAttribute('class').trim().split(/ /g).indexOf('no-swipe') < 0)
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (event.constructor == window.MouseEvent) {
                                                    /* Logic
                                                            [if:else if:else statement]

                                                        > Target > Toggle (Previous, Next) Slide
                                                    */
                                                    if (event.clientX < this['LapysJS eventPositionX'] - (innerWidth * ((innerWidth > 768 ? 5 : 15) / 100)))
                                                        this.slideRight(this['LapysJS eventPositionX'] - event.clientX);

                                                    else if (event.clientX > this['LapysJS eventPositionX'] + (innerWidth * ((innerWidth > 768 ? 5 : 15) / 100)))
                                                        this.slideLeft(event.clientX - this['LapysJS eventPositionX'])
                                                }

                                                else if (event.constructor == window.TouchEvent && !this.querySelector("[data-id*=drag-element"))
                                                    /* Logic
                                                            [if:else if:else statement]

                                                        > Target > Toggle (Previous, Next) Slide
                                                    */
                                                    if (event.changedTouches[0].clientX > this['LapysJS eventPositionX'] + (innerWidth * ((innerWidth > 768 ? 5 : 15) / 100)))
                                                        this.slideLeft(event.changedTouches[0].clientX - this['LapysJS eventPositionX']);

                                                    else if (event.changedTouches[0].clientX < this['LapysJS eventPositionX'] - (innerWidth * ((innerWidth > 768 ? 5 : 15) / 100)))
                                                        this.slideRight(this['LapysJS eventPositionX'] - event.changedTouches[0].clientX);

                                            /* Loop
                                                    [do:while statement]

                                                > Deletion
                                            */
                                            while (document.querySelector('delete-element'))
                                                document.querySelector('delete-element').remove()
                                        });

                                // Roulette > Slide To
                                roulette[i].slideTo(0);

                                // Modification > Roulette > Is Modified
                                roulette[i]['LapysJS isModified'] = !0
                            }
                    });
                    !!window.DISALLOW_ROULETTE_PLUGIN || LapysJS.script.scriptNewRoulette();
                    !!window.DISALLOW_ROULETTE_PLUGIN || onDOMNodeAdded(LapysJS.script.scriptNewRoulette);

                    // Initialization > Delta
                    let delta = LapysJS.script.scriptNewRoulette;

                    // Set Timeout
                    !!window.DISALLOW_ROULETTE_PLUGIN || setTimeout(function() {
                        // Function > LapysJS Script Correct Roulette Sequence
                        function LapysJSScriptCorrectRouletteSequence() {
                            // Initialization > Roulette
                            let roulette = document.querySelectorAll(".roulette:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element']):not(input):not(textarea)");

                            // Function > Correct
                            function correct(roulette) {
                                // Modification > (Roulette > Content) > Roulette
                                    /* Loop
                                            [for statement]
                                    */
                                    for (let i of array(roulette.containers, roulette.buttons, roulette.cards, roulette.indicators))
                                        // Modification > (Roulette > Content) > Roulette
                                        !i || 'roulette' in i || Object.defineProperty(i, 'roulette', {
                                            // Configurable
                                            configurable: !1,

                                            // Enumerable
                                            enumerable: !1,

                                            // Get
                                            get: function roulette() {
                                                /* Loop
                                                        Index Target`s parent path.
                                                */
                                                for (let i of this.parentPath)
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (LapysJS.debug.formatText(i.getAttribute('class') || '', 4).indexOf('roulette') > -1) {
                                                        // Return
                                                        return i;

                                                        // Break
                                                        break
                                                    }

                                                // Return
                                                return null
                                            }
                                        });

                                // Function
                                    // Create Buttons
                                    function createButtons() {
                                        // Function > Main
                                        function main() {
                                            roulette.buttonsContainer.innerHTML = (function() {
                                                let data = '',
                                                    alpha = createDocumentFragment(roulette.getAttribute('data-buttons-left-html') || "<button class='button button-0' data-id=left-button>&larr;</button>", 'div').querySelector('*'),
                                                    beta = createDocumentFragment(roulette.getAttribute('data-buttons-right-html') || "<button class='button button-1' data-id=right-button>&rarr;</button>", 'div').querySelector('*');

                                                alpha.addClass('button', 'button-0');
                                                roulette.setAttribute('data-buttons-left-html', (alpha.getAttribute('data-id') ? alpha.getAttribute('data-id') + ' ' : ' ') + 'left-button');

                                                beta.addClass('button', 'button-0');
                                                roulette.setAttribute('data-buttons-right-html', (beta.getAttribute('data-id') ? beta.getAttribute('data-id') + ' ' : ' ') + 'left-button');

                                                data += (roulette.dataset.id = alpha.outerHTML);
                                                data += (roulette.dataset.id = beta.outerHTML);

                                                return data
                                            })()
                                        };

                                        /* Logic
                                                [if:else if:else statement]
                                        */
                                        if (roulette.buttonsContainer)
                                            // Main
                                            main();

                                        else {
                                            // Create Buttons Container
                                            createButtonsContainer();

                                            // Main
                                            main()
                                        }
                                    };

                                    // Create Buttons Container
                                    function createButtonsContainer() {

                                    }

                                    // Prime Buttons
                                    function primeButtons() {
                                        /* Loop
                                                [for statement]
                                        */
                                        for (let i of roulette.buttons)
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (!i['LapysJS isModified']) {
                                                // Event > Button > Click
                                                i.setEvent('click', function(event) {
                                                    // Initialization > (Target, Data, Metadata, Alpha)
                                                    let that = this,
                                                        data = that.roulette,
                                                        metadata = (that.getAttribute('data-id') || '').indexOf('left-button') > -1,
                                                        alpha = (that.getAttribute('data-id') || '').indexOf('right-button') > -1;

                                                    // Data > Slide (Left, Right, To)
                                                    data['slide' + (metadata ? 'Left' : (alpha ? 'Right' : 'To'))](parseNumber((metadata ? that.getAttribute('data-slide-left-length') : (alpha ? that.getAttribute('data-slide-right-length') : that.getAttribute('data-slide-length')))) || rand(50))
                                                });

                                                // Modification > Button > Is Modified
                                                i['LapysJS isModified'] = !0
                                            }
                                    };

                                // Event
                                    // Roulette > Buttons
                                        // Click
                                            /* Logic
                                                    [if:else if:else statement]
                                            */
                                            if (roulette.buttons)
                                                // Prime Buttons
                                                primeButtons();

                                            else {
                                                // (Create, Prime) Buttons
                                                createButtons();
                                                primeButtons()
                                            }
                            };

                            /* Loop
                                    [for statement]
                            */
                            for (let i in roulette)
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if ((roulette[i] || new (function LapysJSObject() {})).nodeType == 1)
                                    /* Logic
                                            [if:else if:else statement]
                                    */
                                    if (roulette[i]['LapysJS isModified'])
                                        // Correct
                                        correct(roulette[i]);

                                    else {
                                        // LapysJS > Script > Script New Roulette
                                        LapysJS.script.scriptNewRoulette();

                                        // Correct
                                        correct(roulette[i])
                                    }
                        };
                        LapysJS.script.scriptCorrectRouletteSequence = LapysJSScriptCorrectRouletteSequence;
                        LapysJSScriptCorrectRouletteSequence();
                        onNodeChange(document.body, LapysJSScriptCorrectRouletteSequence);

                        // ...
                        LapysJS.script.scriptRoulette = function scriptRoulette() {
                            // Delta
                            delta();

                            // LapysJS Script Correct Roulette Sequence
                            LapysJSScriptCorrectRouletteSequence()
                        }
                    }, LapysJS.perm.constructor.prototype.pluginScriptDelay = typeof LapysJS.perm.pluginScriptDelay == 'number' ? Math.abs(LapysJS.perm.pluginScriptDelay) : 3e3);

                // Screen Tip
                    // Class > HTML Screen Tip Element
                    (typeof HTMLScreenTipElement == 'object') || Object.defineProperty(Window.prototype, 'HTMLScreenTipElement', {
                        // Value
                        value: class HTMLScreenTipElement extends HTMLElement {}
                    });

                    // Registration
                    !registerElement() || 'screen-tip'.isRegistered || registerElement('screen-tip', HTMLScreenTipElement);

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
                                            Argument 0 is an element
                                                and
                                            Argument 0 has a LapysJS title.

                                    > Modification > Argument 0 > Title
                                */
                                if (
                                    (arguments[0] || new (function LapysJSObject() {})).nodeType == 1 &&
                                    (arguments[0] || new (function LapysJSObject() {}))['LapysJS title']
                                ) {
                                    arguments[0].title = arguments[0]['LapysJS title'];
                                    arguments[0]['LapysJS title'] = void 0
                                }

                                // Style > Target > (Opacity, Pointer Events)
                                that.delStyle('opacity');
                                that.delStyle('pointer-events');

                                // Set Timeout
                                setTimeout(function() {
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
                                            Argument 0 is an element.
                                */
                                if ((arguments[0] || new (function LapysJSObject() {})).nodeType == 1) {
                                    // Initialization > (Arguments, Target)
                                    let args = [...arguments],
                                        that = screen.tip || document.screenTip || this;

                                    // Set Timeout
                                    setTimeout(function() {
                                        /* Logic
                                                If
                                                    Argument 0 had a title.

                                            > Modification > Argument 0 > Title
                                        */
                                        if (args[0].title) {
                                            args[0]['LapysJS title'] = args[0].title;
                                            args[0].removeAttribute('title')
                                        }

                                        // Target > Inner HTML
                                        that.innerHTML = args[0].getAttribute('data-title');

                                        // Initialization > (Coordinates, Left, Top)
                                        let coordinates = LapysJS.debug.formatText((args[0].getAttribute('data-title-coordinate') || '').trim().replace((args[0].getAttribute('data-title-coordinate') || '').replace(/ /g, '').replace(/bottom/g, '').replace(/center/g, '').replace(/left/g, '').replace(/right/g, '').replace(/top/g, ''), ''), 4),
                                            left = args[1].constructor.name.indexOf('Event') > -1 ? LapysJS.perm.mouseCoordinates.x + ((int(rand(1, 10)) > 5 ? -1 : 1) * rand(1, 5)) : args[0].offset.left,
                                            top = args[1].constructor.name.indexOf('Event') > -1 ? LapysJS.perm.mouseCoordinates.y + ((int(rand(1, 10)) > 5 ? -1 : 1) * rand(1, 5)) + 20 : args[0].offset.top;

                                        // Update > Coordinates
                                        (coordinates.length < 3) || (coordinates.length = 2);

                                        /* Logic
                                                If
                                                    Argument 0 has the 'data-title-coordinate' attribute.
                                        */
                                        if (args[0].getAttribute('data-title-coordinate')) {
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
                                                top = args[0].offset.bottom + parseNumber(args[0].getCSS('margin-bottom'));

                                            else if (coordinates.indexOf('left') > -1) {
                                                left = args[0].offset.left - that.offset.width;
                                                top -= (20 + (that.offset.height / 2))
                                            }

                                            else if (coordinates.indexOf('right') > -1) {
                                                left = args[0].offset.right;
                                                top -= (20 + (that.offset.height / 2))
                                            }

                                            else if (coordinates.indexOf('top') > -1)
                                                top = args[0].offset.top - parseNumber(args[0].getCSS('margin-top')) - that.offset.height;

                                            else if (coordinates.indexOf('center') > -1) {
                                                left = ((args[0].offset.right + parseNumber(args[0].getCSS('margin-left'))) - that.offset.width) / 2;
                                                top = args[0].offset.top + ((args[0].offset.height / 2) - (that.offset.height / 2))
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
                                                left = ((args[0].offset.right + parseNumber(args[0].getCSS('margin-left'))) - that.offset.width) / 2;

                                            else if (
                                                (
                                                    coordinates.indexOf('left') > -1 ||
                                                    coordinates.indexOf('right') > -1
                                                ) &&
                                                coordinates.indexOf('center') > -1
                                            )
                                                top = args[0].offset.top + ((args[0].offset.height / 2) - (that.offset.height / 2));

                                            else if (
                                                coordinates.indexOf('bottom') > -1 &&
                                                coordinates.indexOf('left') > -1
                                            ) {
                                                left = args[0].offset.left - that.offset.width;
                                                top = args[0].offset.bottom + parseNumber(args[0].getCSS('margin-bottom'))
                                            }

                                            else if (
                                                coordinates.indexOf('bottom') > -1 &&
                                                coordinates.indexOf('right') > -1
                                            ) {
                                                left = args[0].offset.right;
                                                top = args[0].offset.bottom + parseNumber(args[0].getCSS('margin-bottom'))
                                            }

                                            else if (
                                                coordinates.indexOf('top') > -1 &&
                                                coordinates.indexOf('left') > -1
                                            ) {
                                                left = args[0].offset.left - that.offset.width;
                                                top = args[0].offset.top - parseNumber(args[0].getCSS('margin-top')) - that.offset.height
                                            }

                                            else if (
                                                coordinates.indexOf('top') > -1 &&
                                                coordinates.indexOf('right') > -1
                                            ) {
                                                left = args[0].offset.right;
                                                top = args[0].offset.top - parseNumber(args[0].getCSS('margin-top')) - that.offset.height
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
                                        that.setAttribute('style', 'left: ' + left + 'px !important; pointer-events: none !important; opacity: 1 !important; top: ' + top + 'px !important');

                                        // Modification > Target > (Class, Style)
                                        !args[0].hasAttribute('data-title-class') || that.setAttribute('class', args[0].getAttribute('data-title-class'));
                                        !args[0].hasAttribute('data-title-style') || that.setAttribute('style', (that.getAttribute('style') || '') + (that.getAttribute('style') ? ';' : '') + args[0].getAttribute('data-title-style'))
                                    }, 300 + parseNumber(that.getCSS('transition-delay')) + parseNumber(that.getCSS('transition-duration')))
                                }
                            }
                        });

                    // On DOM Change
                    onDOMChange(function LapysJSScriptNewScreenTip() {
                        /* Loop
                                Index Titled Elements.
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

                                        setTimeout(function() {
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
                        ('tip' in window.screen || 'screenTip' in document) || Object.defineProperty(window.screen ? screen : document, window.screen ? 'tip' : 'screenTip', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return document.querySelector('screen-tip')
                            },

                            // Set
                            set: (function() {})
                        })
                    });

                // Select Box
                    // Function > LapysJS Script New Select Box
                    function LapysJSScriptNewSelectBox() {
                        // Initialization > Select Box
                        let selectBox = document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]');

                        /* Loop
                                Index Select Boxes.
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
                                                    Index Target's Option Box's children.

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
                                            for (let i = 0; i < document.querySelector("[data-id='" + this.getAttribute('data-id') + "']:not(input):not(textarea)").children.length; i += 1)
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (document.querySelector("[data-id='" + this.getAttribute('data-id') + "']:not(input):not(textarea)").children[i].hasAttribute('data-active')) {
                                                    // Return
                                                    return document.querySelector("[data-id='" + this.getAttribute('data-id') + "']:not(input):not(textarea)").children[i];

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
                                            return document.querySelector("[data-id='" + this.getAttribute('data-id') + "']:not(input):not(textarea)")
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
                                                return document.querySelector("input[data-id='" + this.getAttribute('data-id') + "'], textarea[data-id='" + this.getAttribute('data-id') + "']")
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
                                    setTimeout(function() {
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
                                    }, (((parseNumber(this.optionBox.getCSS('transition-delay')) + parseNumber(this.optionBox.getCSS('transition-duration'))) * 1e3) || new (function LapysJSObject() {})) + 1e3)
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
                                                setTimeout(function() {
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
                                                setTimeout(function() {
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
                    };
                    LapysJS.script.scriptNewSelectBox = LapysJSScriptNewSelectBox;
                    !!window.DISALLOW_SELECT_BOX_PLUGIN || LapysJSScriptNewSelectBox();
                    !!window.DISALLOW_SELECT_BOX_PLUGIN || onDOMNodeAdded(LapysJSScriptNewSelectBox);

                /* Toast
                        --- NOTE ---
                            @lapys: For messaging users in a subtle non-distracting method.
                */
                    // Class > HTML Screen Tip Element
                    (typeof HTMLToastElement == 'object') || Object.defineProperty(Window.prototype, 'HTMLToastElement', {
                        // Value
                        value: class HTMLToastElement extends HTMLElement {}
                    });

                    // Registration
                    !registerElement() || 'screen-toast'.isRegistered || registerElement('screen-toast', HTMLToastElement);

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
                                setTimeout(function() {
                                    // Style > Target > Bottom
                                    that.delStyle('bottom');

                                    // Set Timeout
                                    setTimeout(function() {
                                        // Modification > Target > (Inner HTML, Class, Style)
                                        that.innerHTML = '';
                                        that.removeAttribute('class');
                                        that.removeAttribute('style')
                                    }, 1e3)
                                }, +(String(((arguments[0] || new (function LapysJSObject() {})).nodeType != 1) || arguments[0].getAttribute('data-toast-delay')).replace('true', '0') || '0').replace(/ /g, '') * 1e3)
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
                                setTimeout(function() {
                                    // Style > Target > Bottom
                                    that.style.bottom = '20px';

                                    /* Logic
                                            If
                                                Data is an element.
                                    */
                                    if ((data || new (function LapysJSObject() {})).nodeType == 1) {
                                        // Modification > Target
                                            // Inner HTML
                                            that.innerHTML = data.getAttribute('data-toast');

                                            // Class
                                            data.hasAttribute('data-toast-class') || that.setAttribute('class', data.getAttribute('data-toast-class') || '');

                                            // Style
                                            data.hasAttribute('data-toast-style') || that.setAttribute('style', (that.getAttribute('style') || '') + (that.getAttribute('style') ? ';' : '') + data.getAttribute('data-toast-style'))
                                    }
                                }, +(String(((arguments[0] || new (function LapysJSObject() {})).nodeType != 1) || arguments[0].getAttribute('data-toast-delay')).replace('true', '0') || '0').replace(/ /g, '') * 1e3)
                            }
                        });

                    // Event > Toast > Click
                    (typeof toast.onclick == 'function') || (toast.onclick = function conceal() {
                        // Target > Conceal
                        this.conceal(createElement('div', '[data-toast-delay=.1][data-toast-duration=.3'))
                    });

                    // On DOM Change
                    onDOMChange(function LapysJSScriptNewToast() {
                        /* Loop
                                Index Toast Elements.
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
                                    setTimeout(function() {
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
                        ('toast' in window.screen || 'screenToast' in document) || Object.defineProperty(window.screen ? screen : document, window.screen ? 'toast' : 'screenToast', {
                            // Configurable
                            configurable: !1,

                            // Enumerable
                            enumerable: !1,

                            // Get
                            get: function() {
                                // Return
                                return document.querySelector('screen-toast')
                            },

                            // Set
                            set: (function() {})
                        })
                    })
            });

        /* Features */
            /* Data Focus Feature */
                // Check
                !!window.DISALLOW_DATA_FOCUS_FEATURE || check(function DataFocusFeature() {
                    // Return
                    return LapysJS.script.enabled.indexOf('all') > -1 || LapysJS.script.enabled.indexOf('data-focus') > -1
                }, function() {
                    /* Data Focus */
                    function dataFocusAPI() {
                        // Event > <body> > Mouse Up
                        !!document.querySelector('.focusable') ? document.body.setEvent('mouseup', function(event) {
                            /* Loop
                                    While
                                        there is a Data Focus 'focusable'-classed element left.

                                > Modification > Data Focus Element > Data Focus
                            */
                            while (document.querySelector('.focusable[data-focus'))
                                document.querySelector('.focusable[data-focus').removeAttribute('data-focus');

                            // Modification > [Event > (...)] > Data Focus
                            (((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).getAttribute('class') || '').trim().split(/ /g).indexOf('focusable') < 0) || (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).setAttribute('data-focus', '')
                        }) : document.body.setEvent('mouseup', function(event) {
                            /* Loop
                                    While
                                        there is a Data Focus element left.

                                > Modification > Data Focus Element > Data Focus
                            */
                            while (document.querySelector('[data-focus'))
                                document.querySelector('[data-focus').removeAttribute('data-focus');

                            // Modification > [Event > (...)] > Data Focus
                            (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).setAttribute('data-focus', '')
                        })
                    };
                    onDOMReady(dataFocusAPI)
                });

            /* HTML JavaScript Feature */
                // Check
                check(function HTMLJavaScriptFeature() {
                    // Return
                    return LapysJS.script.enabled.indexOf('all') > -1 || LapysJS.script.enabled.indexOf('html-javascript') > -1
                }, function() {
                    /* <access-value> */
                    !!window.DISALLOW_ACCESS_VALUE_FEATURE || (function accessValueAPI() {
                        // Registration
                        !registerElement() || registerElement('access-value', class HTMLAccessValueElement extends HTMLElement {
                            // Constructor
                            constructor() {
                                /* Logic
                                        If
                                            CustomElementRegistry is valid.
                                */
                                if (registerElement()) {
                                    // Super
                                    super();

                                    // Return
                                    return
                                }

                                // Return
                                return 'access-value'.html
                            }
                        });

                        // Function > Evaluate Access Value
                        function evaluateAccessValue() {
                            /* Loop
                                    [do:while statement]
                            */
                            while (document.getElementsByTagName('access-value')[0])
                                // Error Handling
                                try {
                                    // Modification > <access-value> > Outer HTML
                                    document.getElementsByTagName('access-value')[0].outerHTML = eval(document.getElementsByTagName('access-value')[0].value || document.getElementsByTagName('access-value')[0].getAttribute('value') || '')
                                }

                                catch (error) {
                                    document.getElementsByTagName('access-value')[0].outerHTML = "[LapysJS " + LapysJS.version + "] => Error parsing that value:<span style='display: block !important; text-indent: 1%'>\n\t" + error + "</span>"
                                }
                        };

                        evaluateAccessValue();
                        onDOMNodeAdded(evaluateAccessValue)
                    })();

                    /* <script-element> */
                    !!window.DISALLOW_SCRIPT_ELEMENT_FEATURE || (function scriptElementAPI() {
                        // Registration
                        !registerElement() || registerElement('script-element', class HTMLScriptElementAPIElement extends HTMLElement {
                            // Constructor
                            constructor() {
                                /* Logic
                                        If
                                            CustomElementRegistry is valid.
                                */
                                if (registerElement()) {
                                    // Super
                                    super();

                                    // Return
                                    return
                                }

                                // Return
                                return 'script-element'.html
                            }
                        });

                        // Function > Evaluate Script Element
                        function evaluateScriptElement() {
                            /* Loop
                                    [do:while statement]
                            */
                            while (document.getElementsByTagName('script-element')[0]) {
                                // JavaScript
                                    // Script
                                    !document.getElementsByTagName('script-element')[0].innerHTML.trim() || js.script('scriptElement', document.getElementsByTagName('script-element')[0].innerHTML);

                                    // Source
                                    !(document.getElementsByTagName('script-element')[0].getAttribute('src') || document.getElementsByTagName('script-element')[0].src || '').trim() || js.src('scriptElement', new (function Object() {
                                        /* Loop
                                                [for statement]

                                            > Update > Target > [Attribute]
                                        */
                                        for (let i = 0; i < document.getElementsByTagName('script-element')[0].attributes.length; i += 1)
                                            this[document.getElementsByTagName('script-element')[0].attributes[i].name] = document.getElementsByTagName('script-element')[0].attributes[i].value
                                    }));

                                // Deletion
                                document.getElementsByTagName('script-element')[0].remove()
                            }
                        };

                        evaluateScriptElement();
                        onDOMNodeAdded(evaluateScriptElement)
                    })()
                });

        /* Event */
            // Window
                // Blur, Resize, Scroll
                setEvent('blur resize scroll', function plugInConcealEventSet() {
                    // Screen Tip > Conceal
                    (((window.screen || new (function LapysJSObject() {})).tip || document.screenTip) || {conceal: (function() {})}).conceal();

                    // Toast > Click
                    (((window.screen || new (function LapysJSObject() {})).toast || document.screenToast) || {click: (function() {})}).click();

                    // Set Timeout
                    !!window.DISALLOW_SELECT_BOX_PLUGIN || setTimeout(function() {
                        /* Loop
                                Index Select Boxes.

                            > Select Box > Conceal Option Box
                        */
                        for (let i = 0; i < document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]').length; i += 1)
                            (document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].concealOptionBox !== 'function') || document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].concealOptionBox()
                    }, 100)
                }, !0);

                // Key Down, Key Up
                setEvent('keydown keyup', function plugInConcealEventSet() {
                    // Screen Tip > Conceal
                    (((window.screen || new (function LapysJSObject() {})).tip || document.screenTip) || {conceal: (function() {})}).conceal();

                    // Toast > Click
                    (((window.screen || new (function LapysJSObject() {})).toast || document.screenToast) || {click: (function() {})}).click()
                });

                // Mouse Move
                setEvent('mousemove', function mouseCoordinatesEventSet(event) {
                    // Modification > Target > Mouse Coordinate (X, Y)
                    LapysJS.perm.mouseCoordinates.x = event.clientX;
                    LapysJS.perm.mouseCoordinates.y = event.clientY
                });

            // <body>, <html>
                // Click
                !!window.DISALLOW_SELECT_BOX_PLUGIN || (document.body || document.documentElement).setEvent('click', function selectBoxDelayBlurEventSet() {
                    // Screen Tip > Conceal
                    (((window.screen || new (function LapysJSObject() {})).tip || document.screenTip) || {conceal: (function() {})}).conceal(this);

                    /* Loop
                            Index Select Boxes.
                    */
                    for (let i = 0; i < document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]').length; i += 1) {
                        // Initialization > Loop Counter
                        let j = i;

                        // Set Timeout
                        setTimeout(function() {
                            // Modification > (Select Box > Option Box) > Data Selected
                            !document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[j].optionBox || document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[j].optionBox.removeAttribute('data-selected')
                        }, (((parseNumber((document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].optionBox || {getCSS: function() { return 0 }}).getCSS('transition-delay')) + parseNumber((document.querySelectorAll('input.select-box[data-id], textarea.select-box[data-id]')[i].optionBox || {getCSS: function() { return 0 }}).getCSS('transition-duration'))) * 1e3) || new (function LapysJSObject() {})) + 300)
                    }
                });

                !!window.DISALLOW_BUTTON_HYPERLINK || (document.body || document.documentElement).observeEventByQuerySelector('button[href', 'click', function buttonHyperlinkEventSet(event) {
                    // Initialization > Data
                    let data = document.createElement('a');

                    // Insertion
                    document.body.appendChild(data);

                    /* Loop
                            Index Target's attributes.

                        > Modification > Data > [Event Path > Attribute > Name]
                    */
                    for (let i of (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).attributes)
                        data.setAttribute(i.name, i.value);

                    // Data > Click
                    data.click();

                    // Deletion
                    document.body.removeChild(data)
                });

                // Key Down, Mouse Up
                !!window.DISALLOW_CAROUSEL_PLUGIN || (document.body || document.documentElement).setEvent('keydown mouseup', function carouselSelectionEvent(event) {
                    // Initialization > Data
                    let data = event.code;

                    /* Logic
                            If
                                the Event is a MouseEvent.
                    */
                    if (event.constructor === MouseEvent) {
                        /* Loop
                                [do:while statement]

                            > Modification > Selected Carousel > Data Selected
                        */
                        while (document.querySelectorAll(".carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element'])")[1])
                            document.querySelectorAll(".carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element'])")[1].removeAttribute('data-selected');

                        /* Logic
                                [if:else if:else statement]
                        */
                        if (LapysJS.debug.formatText((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).getAttribute('class'), 4).indexOf('carousel') < 0 || (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).parentPath.hasArrayElements([...document.getElementsByClassName('carousel')]))
                            /* Loop
                                    While
                                        there is a Selected Carousel.

                                > Modification > Selected Carousel > Data Selected
                            */
                            while (document.querySelector(".carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element'])"))
                                document.querySelector(".carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element'])").removeAttribute('data-selected');

                        /* Loop
                                [do:while statement]

                            > Modification > Selected Roulette > Data Selected
                        */
                        while (document.querySelectorAll(".roulette[data-selected]:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element'])")[1])
                            document.querySelectorAll(".roulette[data-selected]:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element'])")[1].removeAttribute('data-selected');

                        /* Logic
                                [if:else if:else statement]
                        */
                        if (LapysJS.debug.formatText((typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).getAttribute('class'), 4).indexOf('roulette') < 0 || (typeof event.path == 'object' ? event.path[0] : (event.target || event.srcElement)).parentPath.hasArrayElements([...document.getElementsByClassName('roulette')]))
                            /* Loop
                                    While
                                        there is a Selected Carousel.

                                > Modification > Selected Carousel > Data Selected
                            */
                            while (document.querySelector(".roulette[data-selected]:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element'])"))
                                document.querySelector(".roulette[data-selected]:not(.accordion):not(.carousel):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not([data-id*='drag-element'])").removeAttribute('data-selected')
                    }

                    // Set Timeout
                    setTimeout(function() {
                        // Initialization > Carousel
                        let carousel = (document.querySelector(".carousel[data-selected]:not(.accordion):not(.dropdown):not(.dynamic-text):not(.media):not(.media-playlist):not(.roulette):not([data-id*='drag-element'])") || {togglePreviousSlide: (function() {}), toggleNextSlide: (function() {})});

                        /* Logic
                                If
                                    the Data is 'ArrowLeft',

                                else if
                                    the Data is 'ArrowRight'.

                            > Selected Carousel > Toggle (Previous, Next) Slide
                        */
                        if (data == 'ArrowLeft')
                            carousel.togglePreviousSlide();

                        else if (data == 'ArrowRight')
                            carousel.toggleNextSlide()
                    }, 10)
                });

        /* Modification */
            /* LapysJS */
                /* Executed
                        --- WARN ---
                            @lapys: The LapysJS Script function must run only once.
                */
                LapysJS.executed =

                // Ready
                LapysJS.ready = !0;

        // Console > Log
        console.log('LapysJS.ready', LapysJS.ready)
    }

    else
        // LapysJS > Error
        LapysJS.error('$c$global-object-test')
})(window, window.document, window.global || null, window.undefined || void 0)
