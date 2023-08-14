Reveal.initialize({
    width: 1920, // 1460
    height: 1080, // 1050
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    center: true,
    slideNumber: true,
    history: true,
    pdfSeparateFragments: false,
    fragments: true,
    fragmentInURL: true,
    plugins: [
        RevealMarkdown,
        RevealMath.KaTeX,
        RevealAudioSlideshow,
        RevealSearch,
        RevealHighlight
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
        autoplay: false,
        playerStyle: 'position: fixed; bottom: 0.7em; left: 25%; width: 50%; height:2em; z-index: 33;',
        defaultAudios: true,
        prefix: 'media/audio/main/',
        suffix: ".mp3",
        defaultDuration: 600
    }
    })

    window.addEventListener("load", function() {
        revealDiv = document.querySelector("body div.reveal")
        footer = document.getElementById("footer");
        revealDiv.appendChild(footer);
    });