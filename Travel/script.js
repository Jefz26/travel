//JavaScript for responsive nav menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListerner("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

//JavaScript for video nav slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var slideNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListerner("click", () => {
        slideNav(i);
    })
})
