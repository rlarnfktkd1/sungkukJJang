const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide-item:first-child");
const secondSlide = document.querySelector(".slide-item:nth-child(2)");
const thirdSlide = document.querySelector(".slide-item:nth-child(3)");
const forthSlide = document.querySelector(".slide-item:nth-child(4)");
const lastSlide = document.querySelector(".slide-item:nth-child(5)");
const button = document.querySelector(".button");
// const prevBtn = button.querySelector(".prevBtn");
// const nextBtn = button.querySelector(".nextBtn");
const Container = document.querySelector("#Container");
const heroNav0 = Container.querySelector("#heroNav0");
const heroNav1 = Container.querySelector("#heroNav1");
const heroNav2 = Container.querySelector("#heroNav2");
const heroNav3 = Container.querySelector("#heroNav3");
const heroNav4 = Container.querySelector("#heroNav4");


const handleNav0 = (num) => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    // console.log(currentSlide);
    currentSlide.classList.remove(SHOWING_CLASS);
    firstSlide.classList.add(SHOWING_CLASS);
}

const handleNav1 = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    const secondSlide = document.querySelector(".slide-item:nth-child(2)");
    secondSlide.classList.add(SHOWING_CLASS);
}

const handleNav2 = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    const thirdSlide = document.querySelector(".slide-item:nth-child(3)");
    thirdSlide.classList.add(SHOWING_CLASS);
}

const handleNav3 = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    const forthSlide = document.querySelector(".slide-item:nth-child(4)");
    forthSlide.classList.add(SHOWING_CLASS);
}

const handleNav4 = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    lastSlide.classList.add(SHOWING_CLASS);
}

// const handleNext = () => {
//     const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
//     console.log(currentSlide)
//     currentSlide.classList.remove(SHOWING_CLASS);
//     const nextSlide = currentSlide.nextElementSibling.classList.contains('button') ? false: currentSlide.nextElementSibling;
//     if(nextSlide){
//         nextSlide.classList.add(SHOWING_CLASS);
//     } else {
//         firstSlide.classList.add(SHOWING_CLASS);
//     }
// }

// const handlePrev = () => {
//     const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
//     currentSlide.classList.remove(SHOWING_CLASS);
//     const prevSlide = currentSlide.previousElementSibling;
//     if(prevSlide){
//         prevSlide.classList.add(SHOWING_CLASS);
//     } else {
//         lastSlide.classList.add(SHOWING_CLASS);
//     }
// }



const slide = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){

    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}


heroNav0.addEventListener("click", handleNav0);
heroNav1.addEventListener("click", handleNav1);
heroNav2.addEventListener('click', handleNav2);
heroNav3.addEventListener('click', handleNav3);
heroNav4.addEventListener('click', handleNav4);
// prevBtn.addEventListener("click", handlePrev);
// nextBtn.addEventListener("click", handleNext);

slide();
