/*=========================================
GALLERY PAGE JS
=========================================*/

// ==============================
// Music Button
// ==============================

const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (window.bgMusic) {

            if (window.bgMusic.paused) {

                window.bgMusic.play();
                musicBtn.textContent = "⏸ Pause";

            } else {

                window.bgMusic.pause();
                musicBtn.textContent = "🎵 Music";

            }

        } else {

            alert("Music system not connected yet.");

        }

    });

}

// ==============================
// Fade In Animation
// ==============================

const cards = document.querySelectorAll(".gallery-card");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

cards.forEach(function(card){

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);

});

/*=========================================
END
=========================================*/