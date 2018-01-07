/* Components */
    /* Initialization */
        // Loader Screen
        let loaderScreen = document.createElement('div');

    /* Modification */
        // <body> > Style Overflow Y
        document.body['LapysJS styleOverflowY'] = (typeof window.getComputedStyle === 'function' ? getComputedStyle(document.body).getPropertyValue('overflow-y') : '') || document.body.style.overflowY || 'visible';

        // Loader Screen
            // Data ID
            loaderScreen.setAttribute('data-id', 'loaderScreen');

            // Inner HTML
            loaderScreen.innerHTML = (
                /* Loader */
                `<div data-id=loader data-title='<small> Still Loading&hellip; </small>'> </div>` +

                /* Document Style */
                `<style media=all type=text/css>` +
                    /* Components > Loader Screen > Loader */
                    `[data-id=loaderScreen] > [data-id=loader] {` +
                        `animation: completeForwardRotation 1s ease-in-out 0s infinite backwards;` +
                        `border: 7.5px solid #000000;` +
                        `border-radius: 50%;` +
                        `border-top-color: #0056FF;` +
                        `display: inline-block;` +
                        `height: 75px;` +
                        `opacity: .75;` +
                        `width: 75px` +
                    `}` +
                        /* @keyframes > Complete Forward Rotation */
                        `@keyframes completeForwardRotation {` +
                            `0% {` +
                                `transform: rotate(0deg)` +
                            `}` +

                            `to {` +
                                `transform: rotate(360deg)` +
                            `}` +
                        `}` +
                `</style>` +

                `<div style='color: #CFCFCF; font-size: 14px; margin-top: 25px'> Loading, please wait&hellip; </div>`
            );

            // Style
            loaderScreen.setAttribute('style',
                `align-items: center;` +
                `background-color: #FFFFFF;` +
                `display: flex;` +
                `flex-direction: column;` +
                `height: 100%;` +
                `left: 0;` +
                `justify-content: center;` +
                `position: fixed;` +
                `text-align: center;` +
                `top: 0;` +
                `transition: .3s ease-in-out;` +
                `user-select: none;` +
                `width: 100%;` +
                `z-index: 2147483647 !important`
            );

    /* Style */
        // <body> > Overflow Y
        document.body.style.overflowY = 'hidden';

    /* Insertion */
    document.body.appendChild(loaderScreen);

    // Function
        /* On DOM Ready
                --- NOTE ---
                    @lapys: This is a minified version of the On DOM Ready function in LapysJS.
        */
        let onDOMReady=function onDOMReady(){document.readyState==='complete'&&typeof arguments[0]==='function'?setTimeout(arguments[0],parseFloat(arguments[1])):typeof document.addEventListener==='function'?document.addEventListener('DOMContentLoaded',()=>{setTimeout(arguments[0],parseFloat(arguments[1]))}):document.attachEvent('onreadystatechange',()=>{setTimeout(()=>{(document.readyState!=='complete')||arguments[0]()},parseFloat(arguments[1]))})},

        // Remove Loader Screen
        removeLoaderScreen = function removeLoaderScreen() {
            // Style
                // <body>
                !document.body['LapysJS styleOverflowY'] || (document.body.style.overflowY = document.body['LapysJS styleOverflowY']);

                // Loader Screen > Opacity
                !document.querySelector('[data-id=loaderScreen') || (document.querySelector('[data-id=loaderScreen').style.opacity = 0);

            // Deletion
            delete document.body['LapysJS styleOverflowY'];

            // Set Timeout
            setTimeout(() => {
                // Deletion
                !document.querySelector('[data-id=loaderScreen') || document.querySelector('[data-id=loaderScreen').remove()
            }, +String(arguments[1]).replace(/ /g, '') / (Math.random() * 10 > 5 ? 3 : 4) || 3000)
        };

    // On DOM Ready
    onDOMReady(removeLoaderScreen, 1500);

    // Set Timeout
    setTimeout(removeLoaderScreen, 6000)
