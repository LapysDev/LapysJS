/**
    @author: Lapys Dev Team
    @description: Interval JS is a JavaScript plug-in that accurately measures time.
    @version: 0.0.1

    --- WARN ---
        @lapys: Current issues to fix:
            - This script requires the LapysJS library to function,
*/
(function IntervalJSScript(window = window, document = window.document, global = window, undefined = window.undefined || void 0) {
    /* Logic
            [if:else if:else statement]
    */
    if ('ready' in window.LapysJS) {
        /* Polyfills */
            /* Date */
                // Now
                Date.now||(Date.now=function(){return new Date().getTime()});

            /* Performance */
                // Now
                (function(){if(!1=="performance"in window&&(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!1=="now"in window.performance){var a=Date.now();performance.timing&&performance.timing.navigationStart&&(a=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-a}}})();
                performance.now=function(){return performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow||function(){return new Date().getTime()}}();

            /* Set Immediate */
            (function(a,b){"use strict";function c(t){"function"!=typeof t&&(t=new Function(""+t));for(var u=Array(arguments.length-1),v=0;v<u.length;v++)u[v]=arguments[v+1];var w={callback:t,args:u};return o[n]=w,r(n),n++}function d(t){delete o[t]}function e(t){var u=t.callback,v=t.args;switch(v.length){case 0:u();break;case 1:u(v[0]);break;case 2:u(v[0],v[1]);break;case 3:u(v[0],v[1],v[2]);break;default:u.apply(b,v)}}function f(t){if(p)setTimeout(f,0,t);else{var u=o[t];if(u){p=!0;try{e(u)}finally{d(t),p=!1}}}}function g(){r=function(t){process.nextTick(function(){f(t)})}}function h(){if(a.postMessage&&!a.importScripts){var t=!0,u=a.onmessage;return a.onmessage=function(){t=!1},a.postMessage("","*"),a.onmessage=u,t}}function j(){var t="setImmediate$"+Math.random()+"$",u=function(v){v.source===a&&"string"==typeof v.data&&0===v.data.indexOf(t)&&f(+v.data.slice(t.length))};a.addEventListener?a.addEventListener("message",u,!1):a.attachEvent("onmessage",u),r=function(v){a.postMessage(t+v,"*")}}function k(){var t=new MessageChannel;t.port1.onmessage=function(u){var v=u.data;f(v)},r=function(u){t.port2.postMessage(u)}}function l(){var t=q.documentElement;r=function(u){var v=q.createElement("script");v.onreadystatechange=function(){f(u),v.onreadystatechange=null,t.removeChild(v),v=null},t.appendChild(v)}}function m(){r=function(t){setTimeout(f,0,t)}}if(!a.setImmediate){var r,n=1,o={},p=!1,q=a.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(a);s=s&&s.setTimeout?s:a,"[object process]"==={}.toString.call(a.process)?g():h()?j():a.MessageChannel?k():q&&"onreadystatechange"in q.createElement("script")?l():m(),s.setImmediate=c,s.clearImmediate=d}})("undefined"==typeof self?"undefined"==typeof global?this:global:self);

        /* Function */
            /* Immediate */
            function immediate() {
                // Return
                return setImmediate.apply(this || window, arguments)
            };

        /* Interval JS */
        def('IntervalJS', {
            // Value
            value: new (function IntervalJS() {
                // Initialization > Version Number
                let VER_NUMBER = '0.0.1';

                // Modification > Target
                    /* Author */
                    this.def('author', {
                        // Value
                        value: 'Lapys Dev Team',

                        // Writable
                        writable: false
                    });

                    /* Delay */
                    this.def('delay', {
                        // Value
                        value: function delay() {
                            // Initialization > (Callback, Delay, Parameters)
                            let callback = arguments[0],
                                _delay = arguments[1],
                                parameters = Array.from(arguments).slice(2);

                            // Initialization > (Data, Metadata, Success)
                            let data = performance.now(),
                                metadata = function timestamp() {
                                    // Return
                                    return performance.now()
                                },
                                success = !1;

                            // Update > Delay
                            _delay = abs(_delay) || 0;

                            // Function > On Success
                            function onsuccess() {
                                /* Logic
                                        If
                                            Success if falsy.
                                */
                                if (!success) {
                                    // Update > Success
                                    success = !0;

                                    /* Logic
                                            Switch case to
                                                Callback`s data type.
                                    */
                                    switch (getType(callback)) {
                                        // Function
                                        case 'function':
                                            // Immediate
                                            immediate(function() {
                                                // Callback
                                                callback.apply(this || global, parameters)
                                            });
                                            break;

                                        // String
                                        case 'string':
                                            // Immediate
                                            immediate(function() {
                                                // Execution
                                                eval(`(function(...args) { ${callback} }).apply(this || global, parameters)`)
                                            })
                                    }
                                }
                            }

                            /* Check
                                    --- NOTE ---
                                        @lapys: Automated timeout;
                                            May be a bit slower and less accurate
                                            but is a good fallback.

                                            This is also the fastest function when the condition is
                                            a static value.
                            */
                            check(_delay === 0 ? !0 : function() {
                                // Return
                                return metadata() - data >= _delay
                            }, onsuccess);

                            /* Set Timeout
                                    --- NOTE ---
                                        @lapys: Manual timeout.
                            */
                            setTimeout(onsuccess, _delay)
                        }
                    });

                    // Executed
                    this.executed = false;

                    /* Name */
                    this.def('name', {
                        // Value
                        value: this.constructor.name,

                        // Writable
                        writable: false
                    });

                    // Ready
                    this.ready = false;

                    /* Script */
                    this.def('script', {
                        // Value
                        value: document.currentScript || $$(`script[src*='date.'][src*='.js']`) || $t('script', $t('script', '~length')),

                        // Writable
                        writable: false
                    });

                    /* Version */
                    this.def('version', {
                        // Value
                        value: VER_NUMBER,

                        // Writable
                        writable: false
                    })
            }),

            // Writable
            writable: false
        });

        // Update
            // Interval JS
                // Executed
                IntervalJS.executed = true;

                // Ready
                IntervalJS.ready = IntervalJS.executed
    }

    else {
        /* Initialization > (Data, Metadata)
                --- NOTE ---
                    @lapys: Prevent compressors and minifiers from redacting the name of the Error.
        */
        let data = 'IntervalJSScriptError',
            metadata = `Can not find the 'LapysJSScript' module.\n\tPlease download the library if missing at 'https://github.com/LapysDev/LapysJS'`;

        // Error Handling
        try {
            // Execution
            eval(`throw new (class ${data} extends Error {constructor(){super([...arguments]);Error.captureStackTrace(this,${data})}})('[App JS] => ${metadata}\r')`)
        }

        catch (error) {
            // Error Handling
            try {
                // Execution
                eval(`throw new (class ${data} extends Error {})('\n[App JS] => ${metadata}\r')`)
            }

            catch (error) {
                // Error Handling
                try {
                    // Throw
                    throw new (class IntervalJSScriptError extends Error {
                        // Constructor
                        constructor() {
                            // Super
                            super([...arguments]);

                            // Error > Capture Stack Trace
                            Error.captureStackTrace(this, IntervalJSScriptError)
                        }
                    })(`[App JS] => ${metadata}\r`)
                }

                catch (error) {
                    // Error Handling
                    try {
                        // Throw
                        throw new (class IntervalJSScriptError extends Error {})(`[App JS] => ${metadata}\r`)
                    }

                    catch (error) {
                        // Console > Error
                        console.error(`[App JS] => ${metadata}\r`)
                    }
                }
            }
        }
    }
})(window, document, window.global || null, void 0)
