/* Global Data */
    /* Document */
        // Title
        document.title += ' | Client-Side Web Library';

/* Components */
    /* Jumbotron */
        /* On DOM Ready
                --- NOTE ---
                    @lapys: Reduces the delay when the Dynamic Text gets to its third sequence,
                        and increases it otherwise.
        */
        onDOMReady(() => {
            // Initialization > Jumbotron Headers Container Sub Header
            let jumbotronHeadersContainerSubHeader = $$('#jumbotron > [data-id=headers-container] > [data-id=subheader] .dynamic-text');

            // On DOM Change
            onDOMChange(() => {
                // Modification > Jumbotron Headers Container Sub Header
                    // Data Text Function Delay
                    jumbotronHeadersContainerSubHeader.innerText.hasText('Easier DOM Manipulation') ? jumbotronHeadersContainerSubHeader.dataAttr('text-function-delay', .05) : jumbotronHeadersContainerSubHeader.dataAttr('text-function-delay', .75);

                    // Inner HTML
                    !jumbotronHeadersContainerSubHeader.innerHTML.hasText('<span>D</span><span>O</span><span>M</span>') || (jumbotronHeadersContainerSubHeader.innerHTML = jumbotronHeadersContainerSubHeader.innerHTML.replace('<span>D</span><span>O</span><span>M</span>', `<span abbr='Document Object Model' data-id='dynamicTextAbbreviation' data-title='Document Object Model:<br><br><span style="font-size: 90%; text-indent: 5px">The Document Object Model (D.O.M.) connects web pages to<br>scripts or programming languages.</div><div class=text-align-right>~ Mozila Developer Network</div></span>' data-title-class=small data-title-coordinate=top data-title-style='box-shadow: 0 3px 3px 0 rgba(255, 255, 255, .3); left: 40% !important; margin-top: -7.5px; outline: 1px solid rgba(127, 127, 127, .5)'>DOM</span>`))
            });
        })
