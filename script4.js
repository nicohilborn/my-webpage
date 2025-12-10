const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");

document.querySelectorAll(".gallery img, .gallery video").forEach(item => {
    item.addEventListener("click", () => {

        const src = item.getAttribute("src");

        if (src.endsWith(".mp4")) {
            lightboxImg.style.display = "none";
            lightboxVideo.style.display = "block";

            lightboxVideo.src = src;
            lightboxVideo.play();

        } else {
            lightboxVideo.style.display = "none";
            lightboxImg.style.display = "block";

            lightboxImg.src = src;
        }

        lightbox.style.display = "flex";
    });
});
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";


    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
});
