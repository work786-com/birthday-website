/*=========================================
COMMON MUSIC.JS
Works On All Pages
=========================================*/

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {

    // Restore previous state
    if (localStorage.getItem("musicPlaying") === "true") {

        bgMusic.play().catch(() => {});

        musicBtn.innerHTML = "⏸ Pause";

    } else {

        musicBtn.innerHTML = "🎵 Music";

    }

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.innerHTML = "⏸ Pause";

            localStorage.setItem("musicPlaying", "true");

        } else {

            bgMusic.pause();

            musicBtn.innerHTML = "🎵 Music";

            localStorage.setItem("musicPlaying", "false");

        }

    });

}