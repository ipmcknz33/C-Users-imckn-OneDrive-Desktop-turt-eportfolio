//template_xyczash
//service_njecpim
//0Mtkr8IFmq5-KtZG2

<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "0Mtkr8IFmq5-KtZG2",
      });
   })();
</script>

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('modal__overy--loading');
    const success = document.querySelector('modal__overlay--success');
    loading.classList += " modal__overlay--visable";

emailjs 
     .sendForm(
        'service_njecpim',
        'template_xyczash',
        event.target,
        'user_0Mtkr8IFmq5-KtZG2'
   ).then(() => {
     loading.classList.remove("modal__overlay--visable");
    success.classList += " modal__overlay--visable";
   }).catch(() =>{
     loading.classList.remove("modal__overlay--visable");
     alert(
        "The email service is temporarily unavailible. Please contact me directly on i.p.mcknz33@gmail.com"
     );
   })
}


