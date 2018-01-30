/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    // Check
    check(function() {
        // Return
        return getType(global.index) == 'function'
    }, function() {
        // Global Data
            // CSS
                // Link
                css.link('syntaxHighlightedStylesheet', {href: decodeURIComponent((document.currentScript || $$(`script[src*='syntax-highlighted.'][src*='.js']`, 0) || $$('[data-id=syntaxHighlightedScript')).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

            // Random
            let random = '::' + str(rand()).removeChar(/\./) + '::';

            // String
                // Parse Highlighting
                String.prototype.def('parseHighlighting', {
                    // Value
                    value: function parseHighlighting(language) {
                        // Initialization > Boolean
                        let boolean = !!0;

                        // Return
                        return this.replace(/([^\\]|\b)~c(\-[0-9]|)/g, data => {
                            // Update > Boolean
                            boolean = !boolean;

                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (boolean)
                                /* Logic
                                        [switch:case:default statement]

                                    > Return
                                */
                                switch (language) {
                                    // CSS
                                    case 'CSS':
                                        return data.firstChar + '/*';
                                        break;

                                    // HTML
                                    case 'HTML':
                                        return data.firstChar + '&lt;!--';
                                        break;

                                    // JavaScript
                                    case 'JavaScript':
                                        return data.firstChar + (data.lastChar == '1' ? '/*' : '//');
                                        break;

                                    // Plain Text
                                    case 'PlainText':
                                        return data.firstChar
                                }

                            else
                                /* Logic
                                        [switch:case:default statement]

                                    > Return
                                */
                                switch (language) {
                                    // CSS
                                    case 'CSS':
                                        return data.firstChar + '*/';
                                        break;

                                    // HTML
                                    case 'HTML':
                                        return data.firstChar + '--&gt;';
                                        break;

                                    // JavaScript
                                    case 'JavaScript':
                                        return data.firstChar + (data.lastChar == '1' ? '*/' : '');
                                        break;

                                    // Plain Text
                                    case 'PlainText':
                                        return data.firstChar
                                }

                            // Return
                            return data
                        }).replace(/([^\\]|\b)~t(\-[0-9]|)/g, data => {
                            // Return
                            return (`${random}-tab-space`.repeat(+data.lastChar || 4))
                        }).replace(/( |\n|~w)~([a-z]){2,}=([^(=|~)]){1,}( |\n|~w)/g, data => {
                            // Return
                            return (data.startsWith('~w') ? '~w' : data.firstChar) + (`��${random}-command:${data.getAfterChar(data.startsWith('~w') ? '~w' : data.firstChar).getBeforeChar(data.endsWith('~w') ? '~w' : data.lastChar, !0)}��`) + (data.endsWith('~w') ? '~w' : data.lastChar)
                        }).replace(/~w/g, '')
                    },

                    // Writable
                    writable: false
                });

                // Parse Highlighted Code
                String.prototype.def('parseHighlightedCode', {
                    // Value
                    value: function parseHighlightedCode() {
                        // Initialization > (Boolean, Data)
                        let boolean = false,
                            data = createDocumentFragment(`<div>${this}</div>`, 'div');

                        /* Loop
                                [for statement]
                        */
                        for (let i = 0; i < data.$$('[role=comment', 'length'); i += 1)
                            /* Loop
                                    [for statement]

                                > Error Handling
                            */
                            for (let j = ~-data.$$('[role=comment', i).$$('*', 'length'); j > -1; j -= 1)
                                try {
                                    // Modification > (Metadata > [Element]) > Outer HTML
                                    data.$$('[role=comment', i).$$('*', j).outerHTML = data.$$('[role=comment', i).$$('*', j).innerHTML
                                }

                                catch (error) {}

                        // Return
                        return data.$$('*', 0).innerHTML.replace(reg(`${random}-tab-space`, 'g'), ' ').replace(reg(`��${random}\\-command:~([^�]){1,}��`, 'g'), data => {
                            // Boolean
                            boolean = !boolean;

                            // Return
                            return boolean ? '<span ' + data.getAfterChar(`��${random}-command:~`).getBeforeChar('��', !0) + '>' : '</span>'
                        })
                    },

                    // Writable
                    writable: false
                });

        // Function
            // Highlight CSS Syntax
            global.def('highlightCSSSyntax', {
                // Value
                value: function highlightCSSSyntax(element) {
                    // Modification > Element > Highlighted Code HTML
                    element.highlightedCodeHTML = element.sourceCode;

                    // Update > Element Highlighted Code HTML
                    element.highlightedCodeHTML = element.highlightedCodeHTML.parseHighlighting(element.language).parseHighlightedCode();

                    // Modification > Element > Inner HTML
                    element.innerHTML = element.highlightedCodeHTML
                },

                // Writable
                writable: false
            });

            // Highlight HTML Syntax
            global.def('highlightHTMLSyntax', {
                // Value
                value: function highlightHTMLSyntax(element) {
                    // Modification > Element > Highlighted Code HTML
                    element.highlightedCodeHTML = element.sourceCode;

                    // Update > Element Highlighted Code HTML
                    element.highlightedCodeHTML = element.highlightedCodeHTML.parseHighlighting(element.language).parseHighlightedCode();

                    // Modification > Element > Inner HTML
                    element.innerHTML = element.highlightedCodeHTML
                },

                // Writable
                writable: false
            });

            // Highlight JavaScript Syntax
            global.def('highlightJavaScriptSyntax', {
                // Value
                value: function highlightJavaScriptSyntax(element) {
                    // Modification > Element > Highlighted Code HTML
                    element.highlightedCodeHTML = element.sourceCode;

                    // Update > Element Highlighted Code HTML
                    element.highlightedCodeHTML = element.highlightedCodeHTML.parseHighlighting(element.language).parseHighlightedCode();

                    // Modification > Element > Inner HTML
                    element.innerHTML = element.highlightedCodeHTML
                },

                // Writable
                writable: false
            });

            // Highlight Plain Text Syntax
            global.def('highlightPlainTextSyntax', {
                // Value
                value: function highlightPlainTextSyntax(element) {
                    // Modification > Element > Highlighted Code HTML
                    element.highlightedCodeHTML = element.sourceCode;

                    // Update > Element Highlighted Code HTML
                    element.highlightedCodeHTML = element.highlightedCodeHTML.parseHighlighting(element.language).parseHighlightedCode();

                    // Modification > Element > Inner HTML
                    element.innerHTML = element.highlightedCodeHTML
                },

                // Writable
                writable: false
            });

        // On Node Added
        onNodeAdded(document.body, function() {
            // Index
            index(function(index) {
                // Initialization > Element
                let element = $$('.syntax-highlighted', index);

                // Modification > Element
                    // Highlighted Code HTML
                    ('highlightedCodeHTML' in element) || element.def('highlightedCodeHTML', '');

                    // Highlight Syntax
                    (getType(element.highlightSyntax) == 'function') || element.def('highlightSyntax', {
                        // Value
                        value: function highlightSyntax(element) {
                            // Global > [Function]
                            global[`highlight${element.language}Syntax`](element || this)
                        },

                        // Writable
                        writable: false
                    });

                    // (Programming) Language
                    ('language' in element) || element.def('language', {
                        // Get
                        get: function getProgrammingLanguage() {
                            // Initialization > Data
                            let data = this.attr('prog-language').trim().removeChar(/[^a-z]/g).lower();

                            /* Logic
                                    [switch:case:default statement]

                                > Update > Data
                            */
                            switch (data) {
                                // CSS
                                case 'css':
                                    data = 'CSS';
                                    break;

                                // HTML
                                case 'html':
                                    data = 'HTML';
                                    break;

                                // JavaScript
                                case 'javascript':
                                    data = 'JavaScript';
                                    break;

                                // JavaScript
                                case 'js':
                                    data = 'JavaScript';
                                    break;

                                // [Default]
                                default:
                                    data = 'PlainText'
                            }

                            // Return
                            return data
                        },

                        // Set
                        set: function setProgrammingLanguage() {
                            // Modification > Target > Programming Language
                            this.setAttr('prog-language', str(arguments[0]).trim().removeChar(/[^a-z]/g).lower())
                        }
                    });

                    // Source Code
                    (getType(element.sourceCode) == 'string') || element.def('sourceCode', {
                        // Value
                        value: element.innerHTML,

                        // Writable
                        writable: false
                    });

                // Element > Highlight Syntax
                element.highlightSyntax(element)
            }, $$('.syntax-highlighted', 'length'), index)
        })
    })
}
