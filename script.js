
$(document).ready(function(){
    $('.header').height($(window).height());
});

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})


window.addEventListener('DOMContentLoaded', () => {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color2: 0xff00f0,
        wingSpan: 40.00,
        separation: 100.00,
        alignment: 77.00,
        cohesion: 5.00,
        quantity: 2.00,
        backgroundAlpha: 0.0
      })
})