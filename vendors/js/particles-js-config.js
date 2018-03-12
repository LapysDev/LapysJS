/* Error Handling
      --- NOTE ---
        @lapys: This is to prevent any errors
          from popping up.
          We want this vendor as silent as possible.
*/
try {
    /* Function */
        /* Particles JS */
        particlesJS('particles-js', {
            // Configuration Demo
            config_demo: {
                // Background Color
                background_color: app.themeColor,

                // Background Image
                background_image: '',

                // Background Position
                background_position: '50% 50%',

                // Background Repeat
                background_repeat: 'no-repeat',

                // Background Size
                background_size: 'cover',

                 // Hide Card
                hide_card: true
            },

            // Interactivity
            interactivity: {
                // Detect On
                detect_on: 'canvas',

                // Events
                events: {
                    // On Click
                    onclick: {
                        /* Enable
                                --- NOTE ---
                                    @lapys: Default = True
                        */
                        enable: false,

                        // Mode
                        mode: 'push'
                    },

                    // On Hover
                    onhover: {
                        /* Enable
                                --- NOTE ---
                                    @lapys: Default = True
                        */
                        enable: false,

                        // Mode
                        mode: 'repulse'
                    },

                    // Resize
                    resize: true
                },

                // Modes
                modes: {
                    // Bubble
                    bubble: {
                        // Distance
                        distance: 400,

                        // Duration
                        duration: 2,

                        // Opacity
                        opacity: 8,

                        // Size
                        size: 40,

                        // Speed
                        speed: 3
                    },

                    // Grab
                    grab: {
                        // Distance
                        distance: 50,

                        // Line Linked
                        line_linked: {
                            // Opacity
                            opacity: 1
                        }
                    },

                    // Repulse
                    repulse: {
                        // Distance
                        distance: 25
                    },

                    // Push
                    push: {
                        // Number of Particles
                        particles_nb: 10
                    },

                    // Remove
                    remove: {
                        // Number of Particles
                        particles_nb: 2
                    }
                }
            },

            // Particles
            particles: {
                // Color
                color: {
                    // Value
                    value: '#FFFFFF'
                },

                // Line Linked
                line_linked: {
                    // Color
                    color: '#FFFFFF',

                    // Distance
                    distance: 55,

                    // Enable
                    enable: true,

                    // Opacity
                    opacity: .4,

                    // Width
                    width: 1
                },

                // Move
                move: {
                    // Attract
                    attract: {
                        // Enable
                        enable: false,

                        // Rotate X
                        rotateX: 600,

                        // Rotate Y
                        rotateY: 1200
                    },

                    // Enable
                    enable: true,

                    // Speed
                    speed: 3,

                    // Direction
                    direction: 'none',

                    // Out Mode
                    out_mode: 'out',

                    // Random
                    random: false,

                    // Straight
                    straight: false
                },

                // Number
                number: {
                    // Value
                    value: 80,

                    // Density
                    density: {
                        // Enable
                        enable: true,

                        // Value Are
                        value_area: 800
                    }
                },

                // Opacity
                opacity: {
                    // Animation
                    anim: {
                        // Enable
                        enable: false,

                        // Speed
                        speed: .75,

                        // Minimum Opacity
                        opacity_min: .1,

                        // Synchronized
                        sync: false
                    },

                    // Random
                    random: false,

                    // Value
                    value: .625
                },

                // Shape
                shape: {
                    // Image
                    image: {
                        // Height
                        height: 100,

                        // Source
                        src: 'img/github.svg',

                        // Width
                        width: 100
                    },

                    // Polygon
                    polygon: {
                        // Number of Sides
                        nb_sides: 5
                    },

                    // Stroke
                    stroke: {
                        // Color
                        color: 'rgba(0, 0, 0, 0)',

                        // Width
                        width: 0
                    },

                    // Type
                    type: 'circle'
                },

                // Size
                size: {
                    // Animation
                    anim: {
                        // Enable
                        enable: false,

                        // Speed
                        speed: 40,

                        // Minimum Size
                        size_min: .1,

                        // Synchronized
                        sync: false
                    },

                    // Value
                    value: 5,

                    // Random
                    random: true
                }
            },

            // Retina Detect
            retina_detect: true
        })
}

catch (error) {
    // Information Manager > Log
    !(typeof info == 'object' && typeof (window.info || {}).log == 'function') || info.log('Error found in vendor script `particles-js-config.js`')
}
