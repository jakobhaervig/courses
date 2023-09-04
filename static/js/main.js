Reveal.initialize({
    width: 1920, // 1460
    height: 1080, // 1050
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    center: true,
    slideNumber: slide => {return [ 'Topic '+Reveal.getIndices( slide ).h+','+Reveal.getIndices( slide ).v]},
    history: true,
    pdfSeparateFragments: false,
    fragments: true,
    fragmentInURL: true,
    fsfx: {
        baseclass: 'fsbutton',
        hideifnofs: true,
        nofsfxCss: 'display: none;',
        compatibility: true,
        auto: {
            generate: true,
            color: 'var(--r-main-color)',
            oppositecolor: 'black',
            position: {
                right: '20px',
                top: '20px'
            }
        },
        debugfsdisabled: false
    },
    plugins: [
        RevealMarkdown,
        RevealMath.KaTeX,
        RevealAudioSlideshow,
        RevealSearch,
        RevealHighlight,
        FsFx
    ],
    katex: {
        version: 'latest',
        delimiters: [{
                left: '$$',
                right: '$$',
                display: true
            },
            {
                left: '$',
                right: '$',
                display: false
            },
            {
                left: '\\(',
                right: '\\)',
                display: false
            },
            {
                left: '\\[',
                right: '\\]',
                display: true
            }
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    },
    audio: {
        autoplay: true,
        playerStyle: 'position: fixed; bottom: 0.7em; left: 25%; width: 50%; height:2em; z-index: 33;',
        defaultAudios: true,
        prefix: 'media/audio/main/',
        suffix: ".mp3",
        defaultDuration: 600
    },
    dependencies: [
        // other dependencies
        { src: '../static/js/quiz.js', async: true, callback: function() { prepareQuizzes({skipStartButton: true, disableRanking: true}); } }
        // other dependencies
    ]

    })

    window.addEventListener("load", function() {
        revealDiv = document.querySelector("body div.reveal")
        footer = document.getElementById("footer");
        revealDiv.appendChild(footer);
    });