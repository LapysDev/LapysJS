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
            })
}
