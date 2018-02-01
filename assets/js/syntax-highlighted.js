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

        // Function
            // Highlight CSS Syntax
            global.def('highlightCSSSyntax', {
                // Value
                value: function highlightCSSSyntax(element) {
                    // Modification > Element > Highlighted Code HTML
                    element.highlightedCodeHTML = element.sourceCode;

                    /* Update > Element Highlighted Code HTML
                            --- NOTE ---
                                @lapys: Regular Expression Sequence:
                                    - Trimmed newlines.
                                    - Created operators.
                                    - Created multi-line comments.
                                    - Created strings.
                                    - Created ID selectors.
                                    - Created hexadecimal.
                                    - Created numbers.
                                    - Created classes (pseudo classes as well) selectors.
                                    - Created keywords.
                                    - Created CSS at-rules.
                                    - Created CSS properties.
                                        -- Modified CSS property values.
                                    - Created CSS numeral measurements.
                                    - Corrected numerals.
                                    - Created attribute selectors.
                                    - Created element tag name selectors.
                                    - Created keyword modifiers.
                    */
                    element.highlightedCodeHTML = element.highlightedCodeHTML.trimChar('\n').replace(/%/g, '<span class=highlight-color role=operator>%</span>').replace(/\/\*[^*]{0,}\*\/|\/\*[^\/]{0,}\*\//g, '<span class=highlight-color role=comment>$&</span>').replace(/'[^']{0,}'|"[^"]{0,}"|`[^`]{0,}`/g, '<span class=highlight-color role=string>$&</span>').replace(/\#(\w|\$|_)(\w|\$|_|\-){0,}/g, '<span class=highlight-color role=id>$&</span>').replace(/#[a-fA-F0-9]{1,9}/g, data => {
                        // Return
                        return len(data.slice(len('#'))) == 3 || len(data.slice(len('#'))) == 6 || len(data.slice(len('#'))) == 8 ? `<span class=highlight-color role=hexadecimal>${data}</span>` : data
                    }).replace(/\b([0-9]|\.)([0-9]|\.){0,}/g, data => {
                        // Return
                        return data == '.' ? data : (data.count(/\./g) > 1 ? data : `<span class=highlight-color role=numeral>${data}</span>`)
                    }).replace(/(\.|::|:)(\w|\$|_)(\w|\$|_|\-){0,}/g, '<span class=highlight-color role=class>$&</span>').replace(/\band\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bonly\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/@([a-z]|\-){1,}\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/([a-z]|\-){1,}:[^\n]{1,}/g, data => {
                        // Return
                        return ('<span class=highlight�color role=property>' + data.getBeforeChar(':') + '</span>:<span class=highlight�color role=value>' + (data.getAfterChar(':').trimRight().endsWith(';') || data.getAfterChar(':').trimRight().endsWith(',') || data.getAfterChar(':').trimRight().endsWith('{') ? data.getAfterChar(':').slice(0, -len(',')) : data.getAfterChar(':')) + '</span>' + (data.getAfterChar(':').trimRight().endsWith(';') || data.getAfterChar(':').trimRight().endsWith(',') || data.getAfterChar(':').trimRight().endsWith('{') ? data.lastChar : '')).replace(/\(/g, '<span class=highlight�color role=default>(</span>').replace(/\)/g, '<span class=highlight�color role=default>)</span>').replace(/,/g, '<span class=highlight�color role=default>,</span>').replace(/([a-zA-Z]|\-){1,}<span class=highlight�color role=default>\(<\/span>/g, '<span class=highlight-color role=default>$&</span>').replace(/�/g, '-')
                    }).replace(/[0-9]<\/span>cm/g, data => {
                        // Return
                        return data[0] + `</span><span class=highlight-color role=operator>${data.slice(len('</span>') + 1)}</span>`
                    }).replace(/[0-9]<\/span>em/g, data => {
                        // Return
                        return data[0] + `</span><span class=highlight-color role=operator>${data.slice(len('</span>') + 1)}</span>`
                    }).replace(/[0-9]<\/span>in/g, data => {
                        // Return
                        return data[0] + `</span><span class=highlight-color role=operator>${data.slice(len('</span>') + 1)}</span>`
                    }).replace(/[0-9]<\/span>px/g, data => {
                        // Return
                        return data[0] + `</span><span class=highlight-color role=operator>${data.slice(len('</span>') + 1)}</span>`
                    }).replace(/[0-9]<\/span>vh/g, data => {
                        // Return
                        return data[0] + `</span><span class=highlight-color role=operator>${data.slice(len('</span>') + 1)}</span>`
                    }).replace(/(\-|\.)<span class=highlight\-color role=numeral>[0-9]/g, data => {
                        // Return
                        return '<span class=highlight-color role=numeral>' + data[0] + data.lastChar
                    }).replace(/\[(\w|\$|_)(\w|\$|_|\-){0,}\]/g, data => {
                        // Return
                        return data[0] + '<span class=highlight-color role=attribute>' + data.slice(len('['), -len(']')) + '</span>' + data.lastChar
                    }).replace(/\[(\w|\$|_)(\w|\$|_|\-){0,}(\*|~|\^|)=[^ ]{1,}\]/g, data => {
                        // Return
                        return data[0] + '<span class=highlight-color role=attribute>' + data.slice(len('['), -len(']')).getBeforeChar(data.getBeforeChar('=').lastChar == '*' || data.getBeforeChar('=').lastChar == '~' || data.getBeforeChar('=') == '^' ? '*=' : '=') + `</span><span class=highlight-color role=operator>${data.getBeforeChar('=').lastChar == '*' || data.getBeforeChar('=').lastChar == '~' || data.getBeforeChar('=') == '^' ? '*=': '='}</span><span class=highlight-color role=string>` + data.slice(len('['), -len(']')).getAfterChar(data.getBeforeChar('=').hasText('*') ? '*=' : '=') + '</span>' + data.lastChar
                    }).replace(/\[(\w|\$|_)(\w|\$|_|\-){0,}(\*|~|\^|)=<span class=highlight\-color role=string>.*<\/span>\]/g, data => {
                        // Return
                        return data[0] + '<span class=highlight-color role=attribute>' + data.slice(len('['), -len(']')).getBeforeChar(data.getBeforeChar('=').lastChar == '*' || data.getBeforeChar('=').lastChar == '~' || data.getBeforeChar('=') == '^' ? '*=' : '=') + `</span><span class=highlight-color role=operator>${data.getBeforeChar('=').lastChar == '*' || data.getBeforeChar('=').lastChar == '~' || data.getBeforeChar('=') == '^' ? '*=': '='}</span>` + data.slice(len('['), -len(']')).getAfterChar(data.getBeforeChar('=').hasText('*') ? '*=' : '=') + data.lastChar
                    }).replace(/(}|}<\/span>|\.<\/span>|:<\/span>|#<\/span>| |\n)(\w|\$|_)(\w|\$|_|\-){0,}({|<span class=highlight\-color role=default>{|<span class=highlight\-color role=class>\.|<span class=highlight\-color role=class>:|<span class=highlight\-color role=id>#| )/g, data => {
                        // Initialization > Metadata
                        let metadata = data[0] == '}' || data[0] == ' ' || data[0] == '\n' ? data[0] : '>';

                        // Return
                        return data.getBeforeChar(metadata) + metadata + (data.getAfterChar(metadata).hasText('<span') ? '<span class=highlight-color role=element-tag-name>' + data.getAfterChar(metadata).getBeforeChar('<') + '</span><' + data.getAfterChar(metadata).getAfterChar('<') : '<span class=highlight-color role=element-tag-name>' + data.getAfterChar(metadata).slice(0, -1) + '</span>' + data.lastChar)
                    }).replace(/\ball\b/g, '<span class=highlight-color role=value>$&</span>');

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

                    /* Update > Element Highlighted Code HTML
                            --- NOTE ---
                                @lapys: Regular Expression Sequence:
                                    - Trimmed newlines.
                                    - Created attribute values.
                                    - Modified closing and opening element tag characters.
                                    - Created non-spaced attributes.
                                    - Created document type.
                                    - Created comments.
                                    - Created non-value attributes.
                                    - Created default closing and opening element tags.
                                    - Created single-line attribute modified opening tags.
                                    - Created multi-line attribute modified opening tags.
                    */
                    element.highlightedCodeHTML = element.highlightedCodeHTML.trimChar('\n').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'[^']{0,}'|"[^"]{0,}"/g, data => {
                        // Return
                        return data.hasText('&lt;') && data.hasText('&gt;') ? `✑${data}✒` : data
                    }).replace(/(\w|\$|_)(\w|\$|_|\-){0,}=[^ ]{1,}/g, data => {
                        // Initialization > Metadata
                        let metadata = 'span classhighlight-color roleattribute' + data.getBeforeChar('=') + '/spanspan classhighlight-color rolestring' + data.getAfterChar('=') + '/span';

                        // Return
                        return metadata.slice(0, -len('/span')).trimRight().endsWith('&gt;') ? metadata.slice(0, -len('/span')).trimRightChar(' ', '').trimRightChar('\n', '✐').getBeforeChar('&gt;', true) + '/span&gt;' + metadata.slice(0, -len('/span')).trimRightChar(' ', '').trimRightChar('\n', '✐').getAfterChar('&gt;', true) : metadata
                    }).replace(/!DOCTYPE( html|)/g, data => {
                        // Return
                        return data[0] + `<span class=highlight-color role=element-tag-name>${data.slice(len('!'))}</span>`
                    }).replace(/&lt;!\-\-[^(\-|>)]{0,}\-\-&gt;/g, '<span class=highlight-color role=comment>$&</span>').replace(/&lt;(\w|\$|_)(\w|\$|_|\-){0,}&gt;/g, data => {
                        // Initialization > Data
                        data = data.replace('&lt;', '<').replace('&gt;', '>');

                        // Return
                        return (data[0] + `<span class=highlight-color role=element-tag-name>${data.slice(len('<'), -len('>'))}</span>` + data.lastChar).replace('<', '&lt;').slice(0, -len('>')) + '&gt;'
                    }).replace(/( |\n)(\w|\$|_)(\w|\$|_|\-){0,}( |\n|>)/g, data => {
                        // Return
                        return data[0] + '<span class=highlight-color role=attribute>' + data.slice(len(data[0]), -len(data.lastChar)) + '</span>' + data.lastChar
                    }).replace(/=(\w|\$|_)(\w|\$|_|\-){0,}( |\n|&gt;)/g, data => {
                        // Return
                        return '=' + data.slice(len('='), -len(data.lastChar == ';' ? '&gt;' : data.lastChar)) + (data.lastChar == ';' ? '&gt;' : data.lastChar)
                    }).replace(/&lt;\/(\w|\$|_)(\w|\$|_|\-){0,}&gt;/g, data => {
                        // Initialization > Data
                        data = data.replace('&lt;', '<').replace('&gt;', '>');

                        // Return
                        return (data[0] + `/<span class=highlight-color role=element-tag-name>${data.slice(len('</'), -len('>'))}</span>` + data.lastChar).replace('<', '&lt;').slice(0, -len('>')) + '&gt;'
                    }).replace(/&lt;(\w|\$|_)(\w|\$|_|\-){0,} [^\n]{1,}&gt;/g, data => {
                        // Initialization > Data
                        data = data.replace('&lt;', '<').replace('&gt;', '>');

                        // Return
                        return ('&lt;' + 'span class=highlight-color role=element-tag-name' + data.getBeforeChar(' ').slice(len('<')) + '/span ' + data.getAfterChar(' ')).replace(//g, '<').replace(//g, '>')
                    }).replace(/&lt;(\w|\$|_)(\w|\$|_|\-){0,}\n/g, data => {
                        // Initialization > Data
                        data = data.replace('&lt;', '<').replace('&gt;', '>');

                        // Return
                        return '&lt;' + `<span class=highlight-color role=element-tag-name>${data.slice(len('<')).getBeforeChar('\n')}</span>` + '\n'
                    }).replace(//g, '<').replace(//g, '>').replace(//g, '=').replace(//g, ' ').replace(/✐/g, '\n').replace(/✑/g, '<span class=highlight-color role=string>').replace(/✒/g, '</span>');

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

                    /* Update > Element Highlighted Code HTML
                            --- NOTE ---
                                @lapys: Regular Expression Sequence:
                                    - Trimmed newlines.
                                    - Created operators and commands.
                                    - Created control flow keywords.
                                    - Created single-line comments.
                                    - Created multi-line comments.
                                    - Created strings.
                                    - Created variable declaration keywords.
                                    - Created boolean keywords.
                                    - Created JSON properties.
                                    - Created single-argument function call values.
                                    - Created properties.
                                    - Created functions.
                                    - Created numbers.
                    */
                    element.highlightedCodeHTML = element.highlightedCodeHTML.trimChar('\n').replace(/-/g, 'span class�highlight-color role�operator-/span').replace(/=/g, 'span class=highlight-color role=operator=/span').replace(/�/g, '=').replace(/&lt;/g, '<').replace(/</g, '<span class=highlight-color role=operator�<</span�').replace(/&gt;/g, '>').replace(/>/g, '<span class=highlight-color role=operator>></span>').replace(/�/g, '>').replace(//g, '<').replace(//g, '>').replace(/!/g, '<span class=highlight-color role=operator>!</span>').replace(/\^/g, '<span class=highlight-color role=operator>^</span>').replace(/\b\*\b/g, '<span class=highlight-color role=operator>*</span>').replace(/\b\/\b/g, '<span class=highlight-color role=operator>/</span>').replace(/\+/g, '<span class=highlight-color role=operator>+</span>').replace(/\.\.\./g, '<span class=highlight-color role=operator>...</span>').replace(/&amp;/g, '&').replace(/&/g, '<span class=highlight-color role=operator>&</span>').replace(/~t/g, '&nbsp;&nbsp;&nbsp;&nbsp;').replace(/:/g, '<span class=highlight-color role=operator>:</span>').replace(/\bfor\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bif\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bin\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bnew\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\breturn\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\/\/[^\n]{0,}\n/g, data => {
                        // Return
                        return '<span class=highlight-color role=comment>' + data.slice(0, -len('\n')) + '</span>\n'
                    }).replace(/\/\*[^*]{0,}\*\/|\/\*[^\/]{0,}\*\//g, '<span class=highlight-color role=comment>$&</span>').replace(/'[^']{0,}'|"[^"]{0,}"|`[^`]{0,}`/g, '<span class=highlight-color role=string>$&</span>').replace(/\bconst\b/g, '<span class=highlight-color role=variable-declaration>$&</span>').replace(/\blet\b/g, '<span class=highlight-color role=variable-declaration>$&</span>').replace(/\bvar\b/g, '<span class=highlight-color role=variable-declaration>$&</span>').replace(/\bfalse\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/\btrue\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/(\w|\$|_)(\w|\$|_|\-){0,}<span class=highlight-color role=operator>:/g, data => {
                        // Return
                        return '<span class=highlight-color role=value>' + data.getBeforeChar('<span class=highlight-color role=operator>:') + '</span><span class=highlight-color role=operator>:'
                    }).replace(/(\w|\$|_)(\w|\$|_|\-){0,}\((\w|\$|_)(\w|\$|_|\-){0,}/g, data => {
                        // Return
                        return data.getBeforeChar('(') + '(<span class=highlight-color role=value>' + data.getAfterChar('(') + '</span>'
                    }).replace(/(\w|\$|_)(\w|\$|_|\-){0,}\.(\w|\$|_)(\w|\$|_|\-){0,}/g, data => {
                        // Return
                        return '<span class=highlight-color role=property>' + data.getBeforeChar('.') + '</span>.' + data.getAfterChar('.')
                    }).replace(/(\w|\$|_)(\w|\$|_|\-){0,}\(/g, data => {
                        // Return
                        return data.startsWith('function') ? data : '<span class=highlight-color role=function>' + data.getBeforeChar('(') + '</span>' + data.lastChar
                    }).replace(/function\(/g, '<span class=highlight-color role=value>function</span>(').replace(/\b([0-9]|\.)([0-9]|\.|e){0,}\b/g, data => {
                        // Return
                        return data.count(/\./g) > 1 && data.count(/e/g) > 1 ? data : `<span class=highlight-color role=numeral>${data}</span>`
                    });

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
                    element.highlightedCodeHTML = element.highlightedCodeHTML;

                    // Modification > Element > Inner HTML
                    element.innerHTML = element.highlightedCodeHTML
                },

                // Writable
                writable: false
            });

        /* Update */
        function update() {
            // Index
            index(function(index) {
                // Initialization > Element
                let element = $$('.syntax-highlighted', index);

                // Modification > Element
                    // Language
                    'language' in element || element.def('language', {
                        // Get
                        get: function() {
                            // Return
                            return this.attr('prog-language')
                        }
                    });

                    // Source Code
                    'sourceCode' in element || element.def('sourceCode', {
                        // Value
                        value: element.innerHTML,

                        // Writable
                        writable: false
                    })

                /* Logic
                        Switch case to Element`s programming language.

                    > Highlight (...) Syntax
                */
                switch (element.language) {
                    // CSS
                    case 'css':
                        highlightCSSSyntax(element);
                        break;

                    // HTML
                    case 'html':
                        highlightHTMLSyntax(element);
                        break;

                    // JavaScript
                    case 'javascript':
                        highlightJavaScriptSyntax(element);
                        break;

                    // Plain Text
                    case 'plain-text':
                        highlightPlainTextSyntax(element)
                }
            }, $$('.syntax-highlighted', 'length'), index)
        };

        // On DOM Ready
        onDOMReady(update);

        // On Node Added
        onNodeAdded(document.body, update)
    })
}
