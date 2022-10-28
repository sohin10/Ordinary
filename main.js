//Intro Section vid + the text
const intro =  document.querySelector(".intro");
const video =  intro.querySelector("video");
const text = intro.querySelector("h1");

//intro section ordinary text
// const ordinary = document.querySelector(".ordinary");
const text2 = intro.querySelector("h2");

//Intro Product button
const Explore = document.querySelector(".explore");
const ExBtn = document.querySelector("a");

//Product Section
// const section = document.querySelector("section");
// const end = section.querySelector("h2");


//ScrollMagic
const controller = new ScrollMagic.Controller();

//scenes
const scene = new ScrollMagic.Scene({
    duration: 20000,
    triggerElement: intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

//update video
scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);

    video.currentTime =  scrollpos;
}, 33.3);


//Text animation
const textAnimation = TweenMax.fromTo(text, 5, {opacity:0}, {opacity:1});


//intro text
let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook:0
})
.setTween(textAnimation)
.addTo(controller);



//para animation
const ordinaryAnimation = TweenMax.fromTo(text2, 5, {opacity:0}, {opacity:1});


//intro text
let scene3 = new ScrollMagic.Scene({
    duration: 22000,
    triggerElement: intro,
    triggerHook:0
})
.setTween(ordinaryAnimation)
.addTo(controller);




//button animation
const BtnAnimation = TweenMax.fromTo(ExBtn);


//intro button
let scene4 = new ScrollMagic.Scene({
    // duration: 20,
    triggerElement: Explore,
    triggerHook:1
})
.setTween(BtnAnimation)
.addTo(controller);





