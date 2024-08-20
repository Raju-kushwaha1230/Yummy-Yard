$(document).ready(function(){
    var $scramble = $(".scramble")
    $scramble.scramble(3000,20,'alphabet',true);
});


var timeline = gsap.timeline();
timeline.to(".loading",{
    opacity : 0,
    delay : 2.6
})
.to(".loader",{
    opacity : 0,
    duration : 1,
    ease : "Expo.easeInOut"
})
.to(".loader",{
    opacity : 0,
    duration : 1,
    ease : "Ease.easeInOut",

})
.to(".loader",{
    y : "-100%",
    duration : 1,
})

document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById('text');
    setTimeout(function() {
        textElement.classList.remove('hidden');
        textElement.classList.add('visible');
    }, 3500); // 3000 milliseconds = 3 seconds
});