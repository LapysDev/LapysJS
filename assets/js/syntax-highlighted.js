/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    // Check
    check(function() {
        // Return
        return getType(global.repeat) == 'function'
    }, function() {
        // Global Data
            // CSS
                // Link
                css.link('syntaxHighlightedStylesheet', {href: decodeURIComponent((document.currentScript || $$(`script[src*='syntax-highlighted.'][src*='.js']`, 0) || $$('[data-id=syntaxHighlightedScript')).src.replace(/js/g, 'css')), media: 'all', rel: 'stylesheet', type: 'text/css'});

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
                    element.highlightedCodeHTML = element.highlightedCodeHTML.trimChar('\n').replace(/%/g, '<span class=highlight-color role=operator>%</span>').replace(/\/\*[^\*]{0,}\*\/|\/\*[^\/]{0,}\*\//g, '<span class=highlight-color role=comment>$&</span>').replace(/'[^']{0,}'/g, '<span class=highlight-color role=string>$&</span>').replace(/"[^"]{0,}"/g, '<span class=highlight-color role=string>$&</span>').replace(/\#(\w|\$|_)(\w|\$|_|\-){0,}/g, '<span class=highlight-color role=id>$&</span>').replace(/#[a-fA-F0-9]{1,9}/g, data => {
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
                    element.highlightedCodeHTML = element.highlightedCodeHTML.trimChar('\n').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'[^']{0,}'/g, data => {
                        // Return
                        return data.hasText('&lt;') && data.hasText('&gt;') ? `✑${data}✒` : data
                    }).replace(/"[^"]{0,}"/g, data => {
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

                    /* Function > Highlight
                            --- NOTE ---
                                @lapys: Regular Expression Sequence:
                                    - Trimmed newlines.
                                    - Created operators and commands.
                                    - Created control flow keywords.
                                    - Created single-line comments.
                                    - Created flagged regular expressions (might need to be updated).
                                    - Created non-flagged regular expressions (might need to be updated).
                                    - Created multi-line comments.
                                    - Created strings.
                                    - Created template strings.
                                    - Created variable declaration keywords.
                                    - Created boolean keywords.
                                    - Created JSON properties.
                                    - Created single-argument function call values.
                                    - Created properties.
                                    - Created functions.
                                    - Created numbers.
                                    - Created anonymous function variadic arguments.
                                    - Created anonymous function non-variadic arguments.
                                    - Created function variadic arguments.
                                    - Created function non-variadic arguments.
                                    - Created functions.
                    */
                    function highlight(string) {
                        // Return
                        return string.trimChar('\n').replace(/-/g, 'span class�highlight-color role�operator-/span').replace(/=/g, 'span class=highlight-color role=operator=/span').replace(/�/g, '=').replace(/&lt;/g, '<').replace(/</g, '<span class=highlight-color role=operator�<</span�').replace(/&gt;/g, '>').replace(/>/g, '<span class=highlight-color role=operator>></span>').replace(/�/g, '>').replace(//g, '<').replace(//g, '>').replace(/!/g, '<span class=highlight-color role=operator>!</span>').replace(/\^/g, '<span class=highlight-color role=operator>^</span>').replace(/\b\*\b/g, '<span class=highlight-color role=operator>*</span>').replace(/\b\/\b/g, '<span class=highlight-color role=operator>/</span>').replace(/\+/g, '<span class=highlight-color role=operator>+</span>').replace(/\.\.\./g, '<span class=highlight-color role=operator>...</span>').replace(/&amp;/g, '&').replace(/&/g, '<span class=highlight-color role=operator>&</span>').replace(/\|/g, '<span class=highlight-color role=operator>|</span>').replace(/\$h\$/g, '').replace(/\$t\$/g, data => {
                            // Return
                            return data.replace(/\$t\$/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
                        }).replace(/\?/g, '<span class=highlight-color role=operator>?</span>').replace(/:/g, '<span class=highlight-color role=operator>:</span>').replace(/<span class=highlight-color role=operator>=<\/span><span class=highlight-color role=operator>><\/span>/g, '<span class=highlight-color role=value>=></span>').replace(/\bfor\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bif\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bin\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\bnew\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\breturn\b/g, '<span class=highlight-color role=keyword>$&</span>').replace(/\/\/[^\n]{0,}\n/g, data => {
                            // Return
                            return '<span class=highlight-color role=comment>' + data.slice(0, -len('\n')) + '</span>\n'
                        }).replace(/<\/span>/g, '').replace(/\/[^\n]{1,}<span class=highlight-color role=operator>\/[a-z]{0,2}/g, data => {
                            // Update > Data
                            data = data.replace(/\/\//g, '').replace(/\/\*/g, '').replace(/\*\//g, '');

                            // Initialization > (Meta, Alternate) Data
                            let metadata = data[0],
                                alternatedata = data.removeChar(/[a-z]/g).lastChar == '/' ? '/' : ('<span class=highlight-color role=operator>/' + data.getAfterChar('/', true));

                            // Return
                            return (!data.slice(len(metadata), -len(alternatedata)).hasText('/') ? `<span class=highlight-color role=regular-expression>${data}` : data.replace(/\\\//g, '').replace(/\/[^\n]{1,}<span class=highlight-color role=operator>\/[a-z]{0,2}/g, data => {
                                // Return
                                return !data.slice(len(metadata), -len(alternatedata)).hasText('/') ? `<span class=highlight-color role=regular-expression>${data}` : data.replace(/\/[^\/]{1,}<span class=highlight-color role=operator>\/[a-z]{0,2}/g, data => {
                                    // Return
                                    return `<span class=highlight-color role=regular-expression>${data}`
                                })
                            }).replace(//g, '\\/'))
                        }).replace(/\/[^\n]{1,}\/[a-z]{0,2}/g, data => {
                            // Update > Data
                            data = data.replace(/\/\//g, '').replace(/\/\*/g, '').replace(/\*\//g, '');

                            // Initialization > (Meta, Alternate) Data
                            let metadata = data[0],
                                alternatedata = data.removeChar(/[a-z]/g).lastChar == '/' ? '/' : ('<span class=highlight-color role=operator>/' + data.getAfterChar('/', true));

                            // Return
                            return (!data.slice(len(metadata), -len(alternatedata)).hasText('/') ? `<span class=highlight-color role=regular-expression>${data}</span>` : data.replace(/\\\//g, '').replace(/\/[^\n]{1,}\/[a-z]{0,2}/g, data => {
                                // Return
                                return !data.slice(len(metadata), -len(alternatedata)).hasText('/') ? `<span class=highlight-color role=regular-expression>${data}</span>` : data.replace(/\/[^\/]{1,}\/[a-z]{0,2}/g, data => {
                                    // Return
                                    return `<span class=highlight-color role=regular-expression>${data}</span>`
                                })
                            }).replace(//g, '\\/'))
                        }).replace(//g, '//').replace(//g, '/*').replace(//g, '*/').replace(//g, '</span>').replace(/\/\*[^\*]{0,}\*\/|\/\*[^\/]{0,}\*\//g, '<span class=highlight-color role=comment>$&</span>').replace(/'[^']{0,}'/g, '<span class=highlight-color role=string>$&</span>').replace(/"[^"]{0,}"/g, '<span class=highlight-color role=string>$&</span>').replace(/`[^`]{0,}`/g, data => {
                            /* Initialization > (...)
                                    --- NOTE ---
                                        @lapys: Metadata is the conventional modification
                                            while Alternate Data is the modification in edge-case errors.
                            */
                            let metadata = `<span class=highlight-color role=string>${data.replace(/\$\{[^\}]{0,}\}/g, data => {
                                // Return
                                return `</span>${highlight(createElement('div', '', data).textContent)}<span class=highlight-color role=string>`
                            })}</span>`,
                                    metadataClosingTagCount = (metadata.getAfterChar(')}<span class=highlight-color role=string>', true) + '<span class=highlight-color role=string>').count(/<\/span>/g),
                                    metadataOpeningTagCount = (metadata.getAfterChar(')}<span class=highlight-color role=string>', true) + '<span class=highlight-color role=string>').count(/<span/g),

                                alternatedata = `<span class=highlight-color role=string>${data.replace(/\$\{[^\}]{0,}\}/g, data => {
                                    // Return
                                    return `</span>${highlight(createElement('div', '', data).textContent)}` + '<span class=highlight-color role=string>'.repeat(metadataClosingTagCount - metadataOpeningTagCount > 0 ? (metadataClosingTagCount - metadataOpeningTagCount + 1) : 1)
                                })}</span>`;

                            // Return
                            return data.hasText(/[^\\]\$([^\\]|)\{/) ? (metadataClosingTagCount < metadataOpeningTagCount ? metadata : alternatedata) : `<span class=highlight-color role=string>${data}</span>`
                        }).replace(/\bconst\b/g, '<span class=highlight-color role=variable-declaration>$&</span>').replace(/\blet\b/g, '<span class=highlight-color role=variable-declaration>$&</span>').replace(/\bvar\b/g, '<span class=highlight-color role=variable-declaration>$&</span>').replace(/\bfalse\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/\bInfinity\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/\bNaN\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/\bnull\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/\btrue\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/\bundefined\b/g, '<span class=highlight-color role=numeral>$&</span>').replace(/(\w|\$|_)(\w|\$|_|\-){0,}<span class=highlight-color role=operator>:/g, data => {
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
                        }).replace(/function {0,}\(/g, data => {
                            return `<span class=highlight-color role=value>${data.getBeforeChar('(')}</span>(`
                        }).replace(/\b([0-9]|\.)([0-9]|\.|e){0,}\b/g, data => {
                            // Return
                            return data.count(/\./g) > 1 && data.count(/e/g) > 1 ? data : `<span class=highlight-color role=numeral>${data}</span>`
                        }).replace(/<span class=highlight-color role=value>function {0,}<\/span>\( {0,}(<span class=highlight-color role=operator>...<\/span>|) {0,}(<span class=highlight-color role=value>|)(\w|\$|_|)(\w|\$|_|\-){0,}(<\/span>|)(,| |<span class=highlight-color role=operator>...<\/span>|(\w|\$|_|)(\w|\$|_|\-){0,}){0,}\) {0,}{/g, data => {
                            // Return
                            return data.getBeforeChar('(') + '(<span class=highlight-color role=argument>' + data.getAfterChar('(').getBeforeChar(')', true).replace(/,/g, '<span class=highlight-color role=default>,</span>') + '</span>)' + data.getAfterChar(')', true)
                        }).replace(/<span class=highlight-color role=value>function {0,}<\/span>\(<span class=highlight-color role=value>(\w|\$|_|)(\w|\$|_|\-){0,}<\/span>(,| |(\w|\$|_|)(\w|\$|_|\-){0,}){0,}\) {0,}{/g, data => {
                            // Return
                            return data.getBeforeChar('(') + '(<span class=highlight-color role=argument>' + data.getAfterChar('(').getBeforeChar(')', true).replace(/,/g, '<span class=highlight-color role=default>,</span>') + '</span>)' + data.getAfterChar(')', true)
                        }).replace(/function {1,}<span class=highlight-color role=function>(\w|\$|_|)(\w|\$|_|\-){0,}<\/span>\( {0,}(<span class=highlight-color role=operator>...<\/span>|) {0,}(\w|\$|_|)(\w|\$|_|\-){0,}(,| |<span class=highlight-color role=operator>...<\/span>|(\w|\$|_|)(\w|\$|_|\-|){0,}){0,}\) {0,}{/g, data => {
                            // Return
                            return data.getBeforeChar('(') + '(<span class=highlight-color role=argument>' + data.getAfterChar('(').getBeforeChar(')', true).replace(/,/g, '<span class=highlight-color role=default>,</span>') + '</span>)' + data.getAfterChar(')', true)
                        }).replace(/function {1,}<span class=highlight-color role=function>(\w|\$|_|)(\w|\$|_|\-){0,}<\/span>\(<span class=highlight-color role=value>(\w|\$|_|)(\w|\$|_|\-){0,}<\/span>(,| |(\w|\$|_|)(\w|\$|_|\-){0,}){0,}\) {0,}{/g, data => {
                            // Return
                            return data.getBeforeChar('(') + '(<span class=highlight-color role=argument>' + data.getAfterChar('(').getBeforeChar(')', true).replace(/,/g, '<span class=highlight-color role=default>,</span>') + '</span>)' + data.getAfterChar(')', true)
                        }).replace(/function {1,}<span class=highlight-color role=function>/g, data => {
                            // Return
                            return '<span class=highlight-color role=value>' + data.getBeforeChar(' <') + '</span> <' + data.getAfterChar('<')
                        }).replace(//g, '<span class=highlight-color role=operator>...</span>').replace(/÷/g, '<span class=highlight-color role=operator>/</span>').replace(/\$c<span class=highlight-color role=operator>-<\/span>list<span class=highlight-color role=operator>-<\/span>item\$/g, '&#0042;').replace(/\$<span class=highlight-color role=regular-expression>\/\$\$\/<span class=highlight-color[^>]{1,}>\$((\w|\$|_)(\w|\$|_|\-|){0,}|)<\/span>/g, data => {
                            // Return
                            return '//' + data.getAfterChar('>$').getBeforeChar('</span>')
                        }).replace(/\$<span class=highlight-color role=regular-expression>\/\$\$\/<\/span>\$/g, '//').replace(/\$\/\$/g, '/').replace(/<span class=highlight-color role=comment>\/\/<\/span>[^\n]{0,}\n/g, data => {
                            // Return
                            return `<span class=highlight-color role=comment>${data}</span>`
                        })
                    };

                    // Update > Element Highlighted Code HTML
                    element.highlightedCodeHTML = highlight(element.highlightedCodeHTML);

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
            global.highlightSyntax = function highlightSyntax() {
                // Repeat
                repeat(function(index) {
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
                }, $$('.syntax-highlighted', 'length'))
            }
    })
}
