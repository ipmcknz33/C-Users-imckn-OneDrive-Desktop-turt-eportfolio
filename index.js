//template_xyczash
//service_njecpim
//0Mtkr8IFmq5-KtZG2
emailjs.init("0Mtkr8IFmq5-KtZG2");

document.getElementById("contact__form").addEventListener("submit", (e) => {
  e.preventDefault();
  emailjs.sendForm("service_njecpim", "template_xyczash", "#contact__form");
});

function contact() {
   console.log ('it worked')
}