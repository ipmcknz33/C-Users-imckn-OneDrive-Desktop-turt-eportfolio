//template_xyczash
//service_njecpim
//0Mtkr8IFmq5-KtZG2
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const BoolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * BoolInt}px, ${y * BoolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');


  function contact(event) {
    event.preventDefault();
    loading.classList.add("modal__overlay--visible");

emailjs 
     .sendForm(
        'service_njecpim',
        'template_xyczash',
        event.target,
        '0Mtkr8IFmq5-KtZG2'
   ).then(() => {
     loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
   }).catch(() =>{
     loading.classList.remove("modal__overlay--visible");
     alert(
        "The email service is temporarily unavailible. Please contact me directly on i.p.mcknz33@gmail.com"
     );
   })
}

function toggleModal() { 
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;  
    document.body.classList += " modal--open";
}
