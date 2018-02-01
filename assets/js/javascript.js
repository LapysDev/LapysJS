/* Logic
        If
            LapysJS is Ready.
*/
if ('ready' in window.LapysJS) {
    /* Global Data */
        /* Document */
            // Title
            document.title += ' | JavaScript';

        /* Allow Document Sheet Model */
            // Check
            check(function() {
                // Return
                return 'ALLOW_DOCUMENT_SHEET_MODEL' in global
            }, function() {
                ALLOW_DOCUMENT_SHEET_MODEL = true
            });

        /* Document Sheet Model */
            // Check
            check(function() {
                // Return
                return 'ALLOW_DOCUMENT_SHEET_MODEL' in global && 'DOCUMENT_SHEET_MODEL' in global
            }, function() {
                // Modification > Document Sheet Model
                    // Format Options
                    DOCUMENT_SHEET_MODEL.formatOptions = ['full-page'];

                    // Shortcut Access Links
                    DOCUMENT_SHEET_MODEL.shortcutAccessLinks = {
                        // Title
                        title: 'Navigation'
                    };

                    // Sub Title
                    DOCUMENT_SHEET_MODEL.subtitle = 'Simplifying Manipulation with JavaScript';

                    // Title
                    DOCUMENT_SHEET_MODEL.title = document.title
            });

    /* Functions */
        /* Check
                --- NOTE ---
                    @lapys: To make up for any edge cases where
                        the On DOM Ready function can not perform,
                        we shall use the Check function to determine when the document is loaded.
        */
        check(function() {
            // Return
            return document.readyState == 'complete'
        }, function() {
            // Timeout
            timeout(function() {
                // Initialization > Data
                let data = [];

                /* Loop
                        [for statement]
                */
                for (let i = 0; i < len(DOCUMENT_SHEET_MODEL.sections.title); i += 1) {
                    // Modification > [Title] > Script
                    DOCUMENT_SHEET_MODEL.sections.title[i].delAttr('script');

                    // Update > Data
                    data.push(DOCUMENT_SHEET_MODEL.sections.title[i].innerText);
                }

                // Update > Data
                data = data.sort();

                /* Loop
                        Index Data.

                    > Document Sheet Model > Add Link
                */
                for (let i = 0; i < len(data); i += 1)
                    DOCUMENT_SHEET_MODEL.addLink('end', data[i], DOCUMENT_SHEET_MODEL.sections.title[i].parent.attr('anchor'))
            }, 1e3)
        })
}
