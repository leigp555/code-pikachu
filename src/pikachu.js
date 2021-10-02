import string from './css.js'

const player = {
    id: undefined,
    n: 0,
    time: 100,
    init: () => {
        player.play()
        player.bindEvents()
    },
    ui: {
        demo: document.querySelector("#demo"),
        style: document.querySelector("#style")
    },
    events: {
        "#demoPause": "pause",
        "#demoPlay": "play",
        "#demoFast": "fast",
        "#demoNormal": "normal",
        "#demoSlowly": "slow"
    },
    bindEvents: () => {
        for (const key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }

    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.style.innerHTML = string.substr(0, player.n);
        player.ui.demo.scrollTop = 9990
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => window.clearInterval(player.id),
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    }
}
player.init()

