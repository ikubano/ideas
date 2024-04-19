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

const scriptURL = 'https://script.google.com/macros/s/AKfycbykNkaWwt_zgeLPHuYgE7reTv000jCzPAjlWPDkygtCIUMe2BEt85oMutAH1EKGPkL6/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(Response => alert("Message sent successfully! Thank you!"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

