const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykNkaWwt_zgeLPHuYgE7reTv000jCzPAjlWPDkygtCIUMe2BEt85oMutAH1EKGPkL6/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message was sent successfully. I'll Attend to you shortly!"
                setTimeout(function (){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
})


