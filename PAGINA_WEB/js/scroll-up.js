document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector(".video-scroll");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        video.style.top = -scrollPosition * 0.5 + "px"; // Ajusta el factor según tus preferencias
    });
});
