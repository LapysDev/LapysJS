/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    /* Global Data */
        /* Allow Document Sheet Model */
            // Check
            check(function() {
                // Return
                return 'DOCUMENT_SHEET_MODEL' in global
            }, function() {
                def('ALLOW_DOCUMENT_SHEET_MODEL', new (function Object() {
                    // Initialization > (Data, Once)
                    let data = false,
                        once = false;

                    // Modification
                        // Target
                            // Get
                            this.get = function() {
                                // Return
                                return data
                            };

                            // Set
                            this.set = function() {
                                // Update > Data
                                (getType(arguments[0]) != 'boolean') || (data = arguments[0]);

                                // Insertion
                                (getType(document.main) == 'html-element') || document.body.insertChild('end', 'main'.html);

                                // Initialization > Metadata
                                let metadata = `
                                    <!-- Document Sheet Jumbotron -->
                                    <jumbotron-element id=jumbotron>
                                        <!-- Header -->
                                        <h1 data-id=header role=title> ${document.title} </h1>

                                        <!-- Description -->
                                        <h2 data-id=description role=subtitle> Hello, World! </h2>
                                    </jumbotron-element>

                                    <!-- Document Sheet Section -->
                                    <section class='col-grp flex reverse' role=container>
                                        <!-- Document Sheet Shortcut Access Links -->
                                        <aside class='col-1 m-del max-grid-2 min-grid-4 t-del' id=shortcutAccessLinks>
                                            <!-- Title -->
                                            <h1 role=title> <small> Title </small> </h1>

                                            <!-- Link Container -->
                                            <ul data-id=linkContainer role=container> </ul>
                                        </aside>

                                        <!-- Document Sheet Sections -->
                                        <article class='col-3 min-grid-2' id=sections role=container>
                                            ${'formerContent' in document.main ? document.main.formerContent : document.main.innerHTML}
                                        </article>
                                    </section>

                                    <!-- Document Sheet Footer -->
                                    <footer data-id=footer> </footer>
                                `.removeChar('\n', /                                    /g).trim();

                                // Modification > <main>
                                    // Former Content
                                    (document.main.innerHTML == metadata) || (document.main.formerContent = document.main.innerHTML);

                                    // Inner HTML
                                    document.main.innerHTML = data ? metadata : document.main.formerContent;

                                    /* Logic
                                            If
                                                Data is true.
                                    */
                                    if (data) {
                                        // Footer
                                        ('footer' in document.main) || document.main.def('footer', {
                                            // Get
                                            get: function() {
                                                // Return
                                                return this.$$('[data-id=footer', 0)
                                            },

                                            // Set
                                            set: function() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (this.footer) {
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Element.
                                                    */
                                                    if (getType(arguments[0]).hasText('element')) {
                                                        // Modification > Argument 0 > Data ID
                                                        arguments[0].attr('data-id', 'footer');

                                                        // Insertion
                                                        this.footer.insertChild('begin', arguments[0]);

                                                        // Modification > Target > Outer HTML
                                                        this.footer.outerHTML = this.footer.children[0].outerHTML
                                                    }

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                                }

                                                else
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Element.
                                                    */
                                                    if (getType(arguments[0]).hasText('element')) {
                                                        // Modification > Argument 0 > Data ID
                                                        arguments[0].attr('data-id', 'footer');

                                                        // Insertion
                                                        this.insertChild('end', arguments[0]);
                                                    }

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                            }
                                        });
                                            // Content
                                            ('content' in document.main.footer) || document.main.footer.def('content', {
                                                // Get
                                                get: function() {
                                                    // Initialization > (Data, Target)
                                                    let data = document.createDocumentFragment(),
                                                        that = this;

                                                    // Index
                                                    index(function(index) {
                                                        // Insertion
                                                        data.insertChild('end', that.childNodes[index].clone(true))
                                                    }, len(this.childNodes));

                                                    // Return
                                                    return data
                                                },

                                                // Set
                                                set: function() {
                                                    // Modification > Target > Inner HTML
                                                    this.innerHTML = arguments[0]
                                                }
                                            });

                                        // Jumbotron
                                        ('jumbotron' in document.main) || document.main.def('jumbotron', {
                                            // Get
                                            get: function() {
                                                // Return
                                                return this.$i('jumbotron', 0)
                                            },

                                            // Set
                                            set: function() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (this.jumbotron) {
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Element.
                                                    */
                                                    if (getType(arguments[0]).hasText('element')) {
                                                        // Modification > Argument 0 > ID
                                                        arguments[0].id = 'jumbotron';

                                                        // Insertion
                                                        this.jumbotron.insertChild('begin', arguments[0]);

                                                        // Modification > Target > Outer HTML
                                                        this.jumbotron.outerHTML = this.jumbotron.children[0].outerHTML;
                                                    }

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                                }

                                                else
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Element.
                                                    */
                                                    if (getType(arguments[0]).hasText('element')) {
                                                        // Modification > Argument 0 > ID
                                                        arguments[0].id = 'jumbotron';

                                                        // Insertion
                                                        this.insertChild('begin', arguments[0]);
                                                    }

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                            }
                                        });
                                            // Header
                                            ('header' in document.main) || document.main.def('header', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.jumbotron
                                                },

                                                // Set
                                                set: function() {
                                                    // Modification > Target > Shortcut Access Links
                                                    this.jumbotron = arguments[0]
                                                }
                                            });

                                            // Header
                                            ('header' in document.main.jumbotron) || document.main.jumbotron.def('header', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('[data-id=header', 0)
                                                },

                                                set: function() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (this.jumbotron.header) {
                                                        /* Logic
                                                                If
                                                                    Argument 0 is an Element.
                                                        */
                                                        if (getType(arguments[0]).hasText('element')) {
                                                            // Deletion
                                                            !this.jumbotron.header || this.jumbotron.header.delete();

                                                            // Insertion
                                                            this.jumbotron.insertChild('begin', createElement('h1', '[data-id=header][role=title', arguments[0].innerHTML));
                                                        }

                                                        else
                                                            // Modification > Target > Jumbotron > Header > Inner HTML
                                                            (arguments.length < 1) || (this.jumbotron.header.innerHTML = arguments[0])
                                                    }

                                                    else
                                                        /* Logic
                                                                If
                                                                    Argument 0 is an Element.
                                                        */
                                                        if (getType(arguments[0]).hasText('element'))
                                                            // Insertion
                                                            this.jumbotron.insertChild('begin', createElement('h1', '[data-id=header][role=title', arguments[0].innerHTML));

                                                        else
                                                            // Insertion
                                                            this.jumbotron.insertChild('begin', createElement('h1', '[data-id=header][role=title', str(arguments[0])))
                                                }
                                            });

                                            // Description
                                            ('description' in document.main.jumbotron) || document.main.jumbotron.def('description', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('[data-id=description', 0)
                                                },

                                                // Set
                                                set: function() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (this.jumbotron.description) {
                                                        /* Logic
                                                                If
                                                                    Argument 0 is an Element.
                                                        */
                                                        if (getType(arguments[0]).hasText('element')) {
                                                            // Deletion
                                                            !this.jumbotron.description || this.jumbotron.description.delete();

                                                            // Insertion
                                                            this.jumbotron.insertChild('end', createElement('h2', '[data-id=description][role=subtitle', arguments[0].innerHTML));
                                                        }

                                                        else
                                                            // Modification > Target > Jumbotron > Description > Inner HTML
                                                            (arguments.length < 1) || (this.jumbotron.description.innerHTML = arguments[0])
                                                    }

                                                    else
                                                        /* Logic
                                                                If
                                                                    Argument 0 is an Element.
                                                        */
                                                        if (getType(arguments[0]).hasText('element'))
                                                            // Insertion
                                                            this.jumbotron.insertChild('end', createElement('h2', '[data-id=description][role=subtitle', arguments[0].innerHTML));

                                                        else
                                                            // Insertion
                                                            this.jumbotron.insertChild('end', createElement('h2', '[data-id=description][role=subtitle', str(arguments[0])))
                                                }
                                            });

                                        // Sections
                                        ('sections' in document.main) || document.main.def('sections', new (function Object() {
                                            // Initialization > Format Options
                                            let formatOptions = [];

                                            // Get
                                            this.get = function() {
                                                // Initialization > Result
                                                let result = [...(document.main.$$('section[role=container', 0) || 'section'.html).$i('sections').$$('section', 'array')];
                                                    // Add Section
                                                    ('addSection' in result) || result.def('addSection', {
                                                        // Value
                                                        value: function addSection() {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Update > Argument 0
                                                            */
                                                            if (arguments[0] == 'begin')
                                                                arguments[0] = 0;

                                                            else if (arguments[0] == 'end')
                                                                arguments[0] = ~-len(document.main.$$('section[role=container', 0).$i('sections').children)

                                                            /* Logic
                                                                    If
                                                                        Argument 1 is an element.
                                                            */
                                                            if (getType(arguments[1]).hasText('element')) {
                                                                // Insertion
                                                                document.main.$$('section[role=container', 0).$i('sections').insertChild('end', arguments[1]);
                                                                !document.main.$$('section[role=container', 0).$i('sections').$$('section', arguments[0]) || document.main.$$('section[role=container', 0).$i('sections').insertBefore(document.main.$$('section[role=container', 0).$i('sections').$$('section', arguments[0]), arguments[1])
                                                            }

                                                            else
                                                                // LapysJS > Error
                                                                LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                                        },

                                                        // Writable
                                                        writable: false
                                                    });

                                                    // Content
                                                    ('content' in result) || result.def('content', {
                                                        // Get
                                                        get: function() {
                                                            // Initialization > Data
                                                            let data = [];

                                                            /* Loop
                                                                    Index Target.

                                                                > Update > Data
                                                            */
                                                            for (let i = 0; i < len(this); i += 1)
                                                                data.push(this[i].$$('p[data-id=text][role=content', 0));

                                                            // Return
                                                            return data
                                                        },

                                                        // Set
                                                        set: function() {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Loop
                                                                        [for statement]

                                                                    > Modification > Target > [Section] > [Header] > Inner HTML
                                                            */
                                                            if (getType(arguments[0]) == 'array')
                                                                for (let i = 0; i < len(arguments[0]); i += 1)
                                                                    !this[i] || (this[i].$$('p[data-id=text][role=content', 0) ? this[i].$$('p[data-id=text][role=content', 0).innerHTML = arguments[0][i] : this[i].insertChild('begin', createElement('p', '[data-id=text][role=content', arguments[0])));

                                                            else if (getType(arguments[0]) == 'string')
                                                                for (let i = 0; i < len(this); i += 1)
                                                                    !this[i] || !this[i].$$('p[data-id=text][role=content', 0) || (this[i].$$('p[data-id=text][role=content', 0).innerHTML = arguments[0])
                                                        }
                                                    });

                                                    // Delete Section
                                                    ('delSection' in result) || result.def('delSection', {
                                                        // Value
                                                        value: function delSection() {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Update > Argument 0
                                                            */
                                                            if (arguments[0] == 'begin')
                                                                arguments[0] = 0;

                                                            else if (arguments[0] == 'end')
                                                                arguments[0] = ~-len(document.main.$$('section[role=container', 0).$i('sections').children)

                                                            // Deletion
                                                            !document.main.$$('section[role=container', 0).$i('sections').$$('section', arguments[0]) || document.main.$$('section[role=container', 0).$i('sections').$$('section', arguments[0]).delete()
                                                        },

                                                        // Writable
                                                        writable: false
                                                    });

                                                    // Format Options
                                                    ('formatOptions' in result) || result.def('formatOptions', new (function Object() {
                                                        // Modification > Target
                                                            // Get
                                                            this.get = function() {
                                                                // Return
                                                                return formatOptions
                                                            };

                                                            // Set
                                                            this.set = function() {
                                                                // Initialization > Metadata
                                                                let metadata = ['full-page'];

                                                                /* Logic
                                                                        [if:else if:else statement]

                                                                    > Update > Data
                                                                */
                                                                if (getType(arguments[0]) == 'string')
                                                                    arguments[0] = arguments[0].split(/ /g);

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (getType(arguments[0]) == 'array') {
                                                                    // Update > Data
                                                                    formatOptions = arguments[0];

                                                                    /* Loop
                                                                            Index Metadata.

                                                                        > Update > Data
                                                                    */
                                                                    for (let i = 0; i < len(metadata); i += 1)
                                                                        !arguments[0].hasElement(metadata[i]) || (formatOptions = formatOptions.addElementToFront(metadata[i]).removeDuplicatedElements())
                                                                }

                                                                /* Logic
                                                                        [if:else if:else statement]
                                                                */
                                                                if (formatOptions.hasElement('full-page'))
                                                                    /* Loop
                                                                            Index <main>`s Sections.

                                                                        > Modification > <main> > [Section] > Class
                                                                    */
                                                                    for (let i = 0; i < len(result); i += 1)
                                                                        document.main.sections[i].hasClass('full-page') || document.main.sections[i].addClass('full-page');

                                                                // Return
                                                                return formatOptions
                                                            }
                                                    }));

                                                    // Hyperlink
                                                    ('hyperlink' in result) || result.def('hyperlink', {
                                                        // Get
                                                        get: function() {
                                                            // Initialization > Data
                                                            let data = [];

                                                            /* Loop
                                                                    Index Target.

                                                                > Update > Data
                                                            */
                                                            for (let i = 0; i < len(this); i += 1)
                                                                data.push(this[i].$$(`h1[data-id=header][onclick*='LapysJS.$.anchor'][role=title`, 0));

                                                            // Return
                                                            return data
                                                        },

                                                        // Set
                                                        set: function() {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Loop
                                                                        [for statement]

                                                                    > Modification > Target > [Section] > [Sub Header] > Inner HTML
                                                            */
                                                            if (getType(arguments[0]) == 'array')
                                                                for (let i = 0; i < len(arguments[0]); i += 1)
                                                                    !this[i] || !this[i].$$('h1[data-id=header][role=title', 0) || (this[i].$$('h1[data-id=header][role=title', 0).setAttr('onclick', `LapysJS.$.anchor('${arguments[0][i]}')`));

                                                            else if (getType(arguments[0]) == 'string')
                                                                for (let i = 0; i < len(this); i += 1)
                                                                    !this[i] || !this[i].$$('h1[data-id=header][role=title', 0) || (this[i].$$('h1[data-id=header][role=title', 0).setAttr('onclick', `LapysJS.$.anchor('${arguments[0]}')`))
                                                        }
                                                    });

                                                    // Sub Title
                                                    ('subtitle' in result) || result.def('subtitle', {
                                                        // Get
                                                        get: function() {
                                                            // Initialization > Data
                                                            let data = [];

                                                            /* Loop
                                                                    Index Target.

                                                                > Update > Data
                                                            */
                                                            for (let i = 0; i < len(this); i += 1)
                                                                data.push(this[i].$$('h2[data-id=subheader][role=subtitle', 0));

                                                            // Return
                                                            return data
                                                        },

                                                        // Set
                                                        set: function() {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Loop
                                                                        [for statement]

                                                                    > (| Logic >) (Modification > Target > [Section] > [Sub Header] > Inner HTML | Insertion)
                                                            */
                                                            if (getType(arguments[0]) == 'array')
                                                                for (let i = 0; i < len(arguments[0]); i += 1) {
                                                                    if (this[i])
                                                                        if (this[i].$$('h2[data-id=subheader][role=subtitle', 0))
                                                                            this[i].$$('h2[data-id=subheader][role=subtitle', 0).innerHTML = arguments[0][i];

                                                                        else {
                                                                            this[i].insertChild('begin', createElement('h2', '[data-id=subheader][role=subtitle', arguments[0]));
                                                                            !this[i].$$('h1[data-id=header][role=title', 0) || this[i].insertBefore(this[i].$$('h1[data-id=header][role=title', 0), this[i].$$('h2[data-id=subheader][role=subtitle', 0))
                                                                        }
                                                                }

                                                            else if (getType(arguments[0]) == 'string')
                                                                for (let i = 0; i < len(this); i += 1)
                                                                    !this[i] || !this[i].$$('h2[data-id=subheader][role=subtitle', 0) || (this[i].$$('h2[data-id=subheader][role=subtitle', 0).innerHTML = arguments[0])
                                                        }
                                                    });

                                                    // Title
                                                    ('title' in result) || result.def('title', {
                                                        // Get
                                                        get: function() {
                                                            // Initialization > Data
                                                            let data = [];

                                                            /* Loop
                                                                    Index Target.

                                                                > Update > Data
                                                            */
                                                            for (let i = 0; i < len(this); i += 1)
                                                                data.push(this[i].$$('h1[data-id=header][role=title', 0));

                                                            // Return
                                                            return data
                                                        },

                                                        // Set
                                                        set: function() {
                                                            /* Logic
                                                                    [if:else if:else statement]

                                                                > Loop
                                                                        [for statement]

                                                                    > Modification > Target > [Section] > [Header] > Inner HTML
                                                            */
                                                            if (getType(arguments[0]) == 'array')
                                                                for (let i = 0; i < len(arguments[0]); i += 1)
                                                                    !this[i] || (this[i].$$('h1[data-id=header][role=title', 0) ? this[i].$$('h1[data-id=header][role=title', 0).innerHTML = arguments[0][i] : this[i].insertChild('begin', createElement('h1', '[data-id=header][role=title', arguments[0])));

                                                            else if (getType(arguments[0]) == 'string')
                                                                for (let i = 0; i < len(this); i += 1)
                                                                    !this[i] || !this[i].$$('h1[data-id=header][role=title', 0) || (this[i].$$('h1[data-id=header][role=title', 0).innerHTML = arguments[0])
                                                        }
                                                    });

                                                // Return
                                                return result
                                            }
                                        }));
                                            // Body
                                            ('body' in document.main) || document.main.def('body', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return document.main.sections
                                                }
                                            });

                                        // Shortcut Access Links
                                        ('shortcutAccessLinks' in document.main) || document.main.def('shortcutAccessLinks', {
                                            // Get
                                            get: function() {
                                                // Return
                                                return document.main.$i('shortcutAccessLinks', 0)
                                            },

                                            // Set
                                            set: function() {
                                                /* Logic
                                                        [if:else if:else statement]
                                                */
                                                if (this.shortcutAccessLinks) {
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Element.
                                                    */
                                                    if (getType(arguments[0]).hasText('element')) {
                                                        // Modification > Argument 0 > ID
                                                        arguments[0].id = 'shortcutAccessLinks';

                                                        // Insertion
                                                        this.shortcutAccessLinks.insertChild('begin', arguments[0]);

                                                        // Modification > Target > Outer HTML
                                                        this.shortcutAccessLinks.outerHTML = this.shortcutAccessLinks.children[0].outerHTML
                                                    }

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                                }

                                                else
                                                    /* Logic
                                                            If
                                                                Argument 0 is an Element.
                                                    */
                                                    if (getType(arguments[0]).hasText('element')) {
                                                        // Modification > Argument 0 > ID
                                                        arguments[0].id = 'shortcutAccessLinks';

                                                        // Insertion
                                                        !!this.$$('section[role=container]', 0) ? this.$$('section[role=container]', 0).insertChild('end', arguments[0]) : this.insertChild(createElement('section', '.col-grp.flex.reverse[role=container', arguments[0].outerHTML));
                                                    }

                                                    else
                                                        // LapysJS > Error
                                                        LapysJS.error(new TypeError(`${arguments[0]} is not an element.`))
                                            }
                                        });
                                            // Add Link
                                            ('addLink' in document.main.shortcutAccessLinks) || document.main.shortcutAccessLinks.def('addLink', {
                                                // Value
                                                value: function addLink() {
                                                    // Initialization > Data
                                                    let data = createElement('li', `[onclick='smoothScrollTo($$(\`[anchor="${arguments[2]}"\`))'][role=link`, arguments[1]);

                                                    /* Logic
                                                            [if:else if:else statement]

                                                        > Modification > Argument 0
                                                    */
                                                    if (arguments[0] == 'begin')
                                                        arguments[0] = 0;

                                                    else if (arguments[0] == 'end')
                                                        arguments[0] = ~-len(this.$$('[data-id=linkContainer', 0).children);

                                                    // Insertion
                                                    this.$$('[data-id=linkContainer', 0).insertChild('end', data);
                                                    !this.$$('[data-id=linkContainer', 0).children[arguments[0]] || this.$$('[data-id=linkContainer', 0).insertBefore(this.$$('[data-id=linkContainer', 0).children[arguments[0]], data)
                                                },

                                                // Writable
                                                writable: false
                                            });

                                            // Delete Link
                                            ('delLink' in document.main.shortcutAccessLinks) || document.main.shortcutAccessLinks.def('delLink', {
                                                // Value
                                                value: function delLink() {
                                                    /* Logic
                                                            [if:else if:else statement]

                                                        > Modification > Argument 0
                                                    */
                                                    if (arguments[0] == 'begin')
                                                        arguments[0] = 0;

                                                    else if (arguments[0] == 'end')
                                                        arguments[0] = ~-len(this.$$('[data-id=linkContainer', 0).children);

                                                    // Deletion
                                                    !this.$$('[data-id=linkContainer', 0).children[arguments[0]] || this.$$('[data-id=linkContainer', 0).children[arguments[0]].delete()
                                                },

                                                // Writable
                                                writable: false
                                            });

                                            // Head
                                            ('head' in document.main) || document.main.def('head', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.shortcutAccessLinks
                                                },

                                                // Set
                                                set: function() {
                                                    // Modification > Target > Shortcut Access Links
                                                    this.shortcutAccessLinks = arguments[0]
                                                }
                                            });

                                            // Links
                                            ('links' in document.main.shortcutAccessLinks) || document.main.shortcutAccessLinks.def('links', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return [...this.$$('[data-id=linkContainer', 0).children]
                                                }
                                            });

                                            // Title (Element)
                                            ('titleElement' in document.main.shortcutAccessLinks) || document.main.shortcutAccessLinks.def('titleElement', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('[role=title', 0)
                                                },

                                                // Set
                                                set: function() {
                                                    /* Logic
                                                            [if:else if:else statement]
                                                    */
                                                    if (this.titleElement) {
                                                        /* Logic
                                                                If
                                                                    Argument 0 is an Element.
                                                        */
                                                        if (getType(arguments[0]).hasText('element')) {
                                                            // Deletion
                                                            !this.titleElement || this.titleElement.delete();

                                                            // Insertion
                                                            this.insertChild('end', createElement('h1', '[role=title', arguments[0].innerHTML));
                                                        }

                                                        else
                                                            // Modification > Target > Jumbotron > Description > Inner HTML
                                                            (arguments.length < 1) || (this.titleElement.innerHTML = `<small>${arguments[0]}</small>`)
                                                    }

                                                    else
                                                        /* Logic
                                                                If
                                                                    Argument 0 is an Element.
                                                        */
                                                        if (getType(arguments[0]).hasText('element'))
                                                            // Insertion
                                                            this.insertChild('end', createElement('h1', '[role=title', arguments[0].innerHTML));

                                                        else
                                                            // Insertion
                                                            this.insertChild('end', createElement('h1', '[role=title', `<small>${arguments[0]}</small>`))
                                                }
                                            })
                                    }

                                    else {
                                        // Deletion
                                        delete document.main.footer;
                                        delete document.main.jumbotron;
                                        delete document.main.sections;
                                        delete document.main.shortcutAccessLinks
                                    }

                                // On Node Added
                                once || !data || onNodeAdded(document.documentElement, function() {
                                    // Index
                                    index(function(index) {
                                        // Modification > [Section]
                                            // Anchor
                                            ('anchor' in document.main.sections[index]) || document.main.sections[index].def('anchor', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$(`h1[data-id=header][onclick*='LapysJS.$.anchor'][role=title`, 0)
                                                }
                                            });

                                            // Citation
                                            ('citation' in document.main.sections[index]) || document.main.sections[index].def('citation', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('cite[data-id=cite][role=citation', 0)
                                                }
                                            });

                                            // Content
                                            ('content' in document.main.sections[index]) || document.main.sections[index].def('content', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('p[data-id=text][role=content', 0)
                                                }
                                            });

                                            // Header
                                            ('header' in document.main.sections[index]) || document.main.sections[index].def('header', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('h1[data-id=header][role=title', 0)
                                                }
                                            });

                                            // Sub Header
                                            ('subheader' in document.main.sections[index]) || document.main.sections[index].def('subheader', {
                                                // Get
                                                get: function() {
                                                    // Return
                                                    return this.$$('h2[data-id=subheader][role=subtitle', 0)
                                                }
                                            })
                                    }, len(document.main.sections))
                                });

                                // Update > Once
                                once = true
                            }
                }))
            });

        /* Document Sheet Model */
        def('DOCUMENT_SHEET_MODEL', {
            // Value
            value: new (function DocumentSheetModel() {
                // Modification > Target
                    // Add Link
                    this.def('addLink', {
                        // Value
                        value: function addLink() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.shortcutAccessLinks.addLink.apply(document.main.shortcutAccessLinks, [...arguments]) : null
                        },

                        // Writable
                        writable: false
                    });

                    // Add Section
                    this.def('addSection', {
                        // Value
                        value: function addSection() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.sections.addSection.apply(document.main.sections, [...arguments]) : null
                        },

                        // Writable
                        writable: false
                    });

                    // Delete Link
                    this.def('delLink', {
                        // Value
                        value: function delLink() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.shortcutAccessLinks.delLink.apply(document.main.shortcutAccessLinks, [...arguments]) : null
                        },

                        // Writable
                        writable: false
                    });

                    // Delete Section
                    this.def('delSection', {
                        // Value
                        value: function delSection() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.sections.delSection.apply(document.main.sections, [...arguments]) : null
                        },

                        // Writable
                        writable: false
                    });

                    // Format Options
                    this.def('formatOptions', {
                        // Get
                        get: function() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.sections.formatOptions : null
                        },

                        // Set
                        set: function() {
                            // Modification > <main> > Sections > Format Options
                            global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.sections.formatOptions = arguments[0] : null
                        }
                    });

                    // Sections
                    this.def('sections', {
                        // Get
                        get: function() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.sections : null
                        }
                    });

                    // Shortcut Access Links
                    this.def('shortcutAccessLinks', {
                        // Get
                        get: function() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.shortcutAccessLinks : null
                        },

                        // Set
                        set: function() {
                            /* Logic
                                    [if:else if:else statement]
                            */
                            if (global.ALLOW_DOCUMENT_SHEET_MODEL) {
                                /* Logic
                                        [if:else if:else statement]
                                */
                                if (getType(arguments[0]) == 'object') {
                                    // Modification > <main> > Shortcut Access Links
                                        // Title Element
                                        !('title' in arguments[0]) || (document.main.shortcutAccessLinks.titleElement = arguments[0].title);

                                    // Return
                                    return arguments[0]
                                }

                                // Return
                                return
                            }

                            else
                                // Return
                                return null
                        }
                    });

                    // Sub Title
                    this.def('subtitle', {
                        // Get
                        get: function() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.jumbotron.description.textContent : null
                        },

                        // Set
                        set: function() {
                            // Modification > (Document > Main > Jumbotron > Header) > Inner HTML
                            !global.ALLOW_DOCUMENT_SHEET_MODEL || (document.main.jumbotron.description.innerHTML = arguments[0])
                        }
                    });

                    // Title
                    this.def('title', {
                        // Get
                        get: function() {
                            // Return
                            return global.ALLOW_DOCUMENT_SHEET_MODEL ? document.main.jumbotron.header.textContent : null
                        },

                        // Set
                        set: function() {
                            // Modification > (Document > Main > Jumbotron > Header) > Inner HTML
                            !global.ALLOW_DOCUMENT_SHEET_MODEL || (document.main.jumbotron.header.innerHTML = arguments[0])
                        }
                    })
            }),

            // Writable
            writable: false
        });

        /* Element */
            // Clear HTML
            (typeof Element.prototype.clearHTML == 'function') || Element.prototype.def('clearHTML', {
                // Value
                value: function clearHTML() {
                    // Modification > Target > Inner HTML
                    (typeof this.tagName != 'string') || (this.innerHTML = '')
                },

                // Writable
                writable: false
            });

        /* LapysJS */
            // JavaScript > Source
                // Timeout
                !$$('.syntax-highlighted', 0) || timeout(function() {
                    js.src('syntaxHighlightedScript', {src: `${DYNAMIC_ASSETS_URL}assets/js/syntax-highlighted.js`, type: 'text/javascript'})
                }, 100);

    /* Functions */
        /* Index */
        global.index = function index() {
            /* Loop
                    Index Argument 1.
            */
            for (let i = 0; i < len(arguments[1]); i += 1)
                /* Logic
                        [switch:case:default statement]
                */
                switch (typeof arguments[0]) {
                    // Function
                    case 'function':
                        // Argument 0
                        arguments[0].apply(this, [...arguments].slice(2).addElementToBack(i));
                        break;

                    // String
                    case 'string':
                        // Execution
                        eval(`(function() {let index = ${i};\n${arguments[0]}\n})()`)
                }
        };

        /* Smooth Scroll To */
        global.smoothScrollTo = function smoothScrollTo(element = 'div'.html) {
            // Initialization > (Data, Scroll Speed)
            let data = element.offset.top,
                scrollSpeed = (abs(int(scrollY - data)) - innerHeight) > innerHeight ? 12 : 9;

            // Interval
            !$$('*', 'array').hasElement(element) || interval(function() {
                // Scroll By
                scrollBy.apply(global, scrollY > data ? [0, -scrollSpeed] : [0, scrollSpeed])
            }, 0, abs(int(scrollY - data)) - innerHeight)
        };

    /* Components */
        /* Header Navigation Bar */
            // Index
            index(function(index) {
                // Modification > Header Navigation Bar > Script
                $$('[role=header-navigation-bar', index).setAttr('script');

                /* Check
                        --- NOTE ---
                            @lapys: The runtime of the Script attribute to the Script property
                                has a slight delay which must be accounted for.
                */
                check(function() {
                    // Return
                    return 'script' in $$('[role=header-navigation-bar', index)
                }, function() {
                    // Timeout
                    timeout(function() {
                        // Modification > Header Navigation Bar > Script
                        $$('[role=header-navigation-bar', index).script =
                            'this.clearHTML();' +
                            'index(function(index, that) {' +
                                'that.innerHTML += `<a class="button-0 center col-1 single-line smooth transparent-button upper" href="${NAVIGATION_LINKS[index].href}" target=${NAVIGATION_LINKS[index].target} title="${NAVIGATION_LINKS[index].title}">${NAVIGATION_LINKS[index].textContent}</a>`' +
                            '}, len(NAVIGATION_LINKS), this)'
                    }, 100)
                })
            }, $$('[role=header-navigation-bar', 'length'))
}
