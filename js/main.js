const main = document.querySelector('#fullpage');
const header = document.querySelector('#header');
const preloader = document.querySelector('.preloader');
const sections = document.querySelectorAll('section');
const register = document.querySelector('#register');
const registerBtn = document.querySelector('#registerBtn');
const registerClose = document.querySelector('#registerClose');
const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menuBtn');
const menuClose = document.querySelector('#menuClose');
const sectionNav = document.querySelectorAll("#sectionNav ul li");
const registerToday = document.querySelector("#registerToday");

let index = 0;
const animationDuration = 1000;
let lastTime = 0;

// SECTION NAVIGATION
sectionNav.forEach(item =>{
    item.addEventListener('click', (e) =>{
        for(let i = 0; i < sectionNav.length; i++){
            sectionNav[i].classList.remove("active");
        }
        item.classList.add("active");
        sections.forEach((section, i) =>{
            if (section.id === item.id){
                section.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
});

// MOUSE SCROLL TO NEXT SECTION
window.addEventListener('wheel', (e) => {
    const delta = e.wheelDelta;
    const currenTime = new Date().getTime();

    if(currenTime - lastTime < animationDuration){
        e.preventDefault();
        return;
    }

    if (delta < 0){
        if (index > 4) return;
        index++;

        // GSAP ANIMATION
        let tl = new TimelineMax();

        tl.staggerFrom('.location-title, .location-p, .see-all, .entertainment li', 1, {
            opacity: 0,
            y: -50,
            ease: Power2.easeIn,
        }, .2);
        tl.from('.location-img', 1, {
            opacity: 0,
            x: 300,
            ease: Power2.easeInOut,
        }, .2);

        let uncommonAni = new TimelineMax();

        uncommonAni.staggerFrom('.uncommon-img', 1.5, {
            opacity: 0,
            x: -200,
            ease: Power2.In,
        }, .2);
        uncommonAni.staggerFrom('.uncommon-title, .uncommon-p', 2, {
            opacity: 0,
            x: -100,
            ease: Power2.In,
        }, .25);
        uncommonAni.staggerFrom('.view-models', 1, {
            opacity: 0,
            scale: .5,
            ease: Power2.Out,
        }, 0.2, "-=1");

        let selectAni = new TimelineMax();
        selectAni.staggerFrom('.box1, .box2, .box3', 2, {
            opacity: 0,
            y: -50,
            ease: Power2.easeInOut,
        }, .25);
        selectAni.staggerFrom('.box4', 2, {
            opacity: 0,
            x: 50,
            ease: Power2.easeInOut,
        }, .25, "-=1");
        selectAni.staggerFrom('.next-photo', 2, {
            opacity: 0,
            x: 50,
            ease: Power2.easeInOut,
        }, .25, "-=1.5");

        sections.forEach((section, i) =>{
            if(i === index){
                section.scrollIntoView({behavior: 'smooth'});
            } 
        })
    }else{
        if (index < 1) return;
        index--;

        sections.forEach((section, i) =>{
            if(i === index){
                section.scrollIntoView({behavior: 'smooth'});
            }
        })
    }
    lastTime = currenTime;
})

// REGISTRATION
registerBtn.addEventListener('click', () => {
    let tl = new TimelineMax();

    tl.staggerFrom('#registerToday, #headerGsap', 2, {
        opacity: 0,
        y: -100,
        ease: Elastic.easeInOut,
    }, .2);

    $(register).slideDown( "slow", () => {
        $(register).css({"display": "block"});
    });
})
registerClose.addEventListener('click', () => {
    $(register).slideUp( "slow", () => {
        $(register).css({"display": "none"});
    });
})

// MENU
menuBtn.addEventListener('click', () => {
    let tl = new TimelineMax();

    tl.staggerFrom('.menu-wrapper ul li', 2, {
        opacity: 0,
        y: -100,
        ease: Elastic.easeInOut,
    }, .2);
    tl.staggerFrom('.social-icons i', 2, {
        opacity: 0,
        scale: 0.5,
        ease: Power2.In,
    }, .2, "-=1");


    $(menu).slideDown( "slow", () => {
        $(menu).css({"display": "block"});
    });
})
menuClose.addEventListener('click', () => {
    $(menu).slideUp( "slow", () => {
        $(menu).css({"display": "none"});
    });
})

// GSAP ANIMATION
document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function(e) {
        main.style.display = 'block';
        header.style.display = 'block';
        preloader.style.display = 'none';
        let tl = new TimelineMax();

        tl.staggerFrom('main .history .vid img', 2, {
            opacity: 0,
            x: 500,
            ease: Power2.easeInOut,
        }, 0.2);
        tl.staggerFrom('.fa-play, .explore', 1, {
            opacity: 0,
            scale: .5,
            ease: Power2.Out,
        }, 0.2,);
        tl.from('.history-luxury, .history-p', 2, {
            opacity: 0,
            scale: .5,
            ease: Power2.Out,
        }, 0.2);
        tl.from('.logo, .register-menu', 2, {
            opacity: 0,
            y: -40,
            ease: Power2.In,
        }, 0.2);
        tl.from('.section-nav', 2, {
            opacity: 0,
            x: -40,
            ease: Power2.In,
        }, 0.2);
    }, false);
});

//AOS ANIMATION
AOS.init();