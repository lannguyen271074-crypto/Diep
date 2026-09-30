/* =================================
   LOADING
================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document
            .getElementById("loader")
            .classList.add("hidden");

    }, 1200);

});



/* =================================
   SCROLL TO MEMORIES
================================= */

function scrollToMemories() {

    document
        .getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =================================
   LIGHTBOX
================================= */

function openLightbox(image) {

    const lightbox =
        document.getElementById("lightbox");

    const imageElement =
        document.getElementById("lightboxImage");

    imageElement.src = image;

    lightbox.classList.add("active");

}


function closeLightbox() {

    document
        .getElementById("lightbox")
        .classList.remove("active");

}



/* =================================
   ESC TO CLOSE
================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);



/* =================================
   MUSIC
================================= */

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicBtn");

let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function () {

        if (musicPlaying) {

            music.pause();

            musicButton.innerHTML = "🎵";

        }

        else {

            music.play();

            musicButton.innerHTML = "⏸️";

        }

        musicPlaying =
            !musicPlaying;

    }
);



/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(
        ".photo-card, .timeline-item, .section-header"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    function (element) {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "all 1s ease";

        observer.observe(element);

    }
);



/* =================================
   PARALLAX
================================= */

window.addEventListener(
    "scroll",
    function () {

        const hero =
            document.querySelector(".hero");

        const scroll =
            window.scrollY;

        if (
            scroll <
            window.innerHeight
        ) {

            hero.style.backgroundPosition =
                `center ${scroll * 0.4}px`;

        }

    }
);