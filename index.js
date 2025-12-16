//template_xyczash
//service_njecpim
//0Mtkr8IFmq5-KtZG2


  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add(" .modal__overlay--visible");

emailjs 
     .sendForm(
        'service_njecpim',
        'template_xyczash',
        event.target,
        '0Mtkr8IFmq5-KtZG2'
   ).then(() => {
     loading.classList.remove(".modal__overlay--visible");
    success.classList.add(".modal__overlay--visable");
   }).catch(() =>{
     loading.classList.remove(" .modal__overlay--visible");
     alert(
        "The email service is temporarily unavailible. Please contact me directly on i.p.mcknz33@gmail.com"
     );
   })
}


