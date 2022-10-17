document.addEventListener('DOMContentLoaded', function () {
    gsap.from(".hero__btn", { opacity: 0, y: 500, ease: "power3.out", duration: 1 });
    gsap.from(".hero__title", { opacity: 0, y: 500, ease: "power3.out", duration: 1 });
    gsap.from(".hero__descr", { delay: 0.8, opacity: 0, ease: "power3.out", duration: 1 });
    gsap.from(".photos-wrap__one", { scale: 0.5, delay: 1.3, opacity: 0, ease: "power3.out", duration: 1 });
    gsap.from(".photos-wrap__two", { scale: 0.5, delay: 1.6, opacity: 0, ease: "power3.out", duration: 1 });
    gsap.from(".photos-wrap__three", { scale: 0.5, delay: 1.9, opacity: 0, ease: "power3.out", duration: 1 });
    gsap.from(".photos__author", { delay: 2.2, opacity: 0, ease: "power3.out", duration: 2 });



    var tl = gsap.timeline(/* { pause: true } */);
    tl.from(".menu", { opacity: 0, y: 500, ease: "power1.out", duration: 0.5 })
        .from(".menu__top", { opacity: 0, y: -100, ease: "power1.out", duration: 0.2 })
        .from(".menu__nav", { opacity: 0, y: 500, ease: "power1.out", duration: 0.5 })
        .from(".social", { opacity: 0, y: 500, ease: "power1.out", duration: 0.5 })
        .from(".menu__right", { opacity: 0, y: 500, ease: "power1.out", duration: 0.5 });

    tl.reverse();
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    let close = document.querySelector('.close');

    burger.addEventListener('click', () => {
        menu.classList.add('menu--open');
        tl.play();
    })

    close.addEventListener('click', () => {
        tl.reverse();
    })
})