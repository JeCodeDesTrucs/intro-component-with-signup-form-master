const ctaFreeTrial = document.getElementById('cta-free-trial');

const inputFirstName = document.getElementById('input-first-name');
const errorFirstName = document.getElementById('error-first-name');

const inputLastName = document.getElementById('input-last-name');
const errorLastName = document.getElementById('error-last-name');

const inputEmail = document.getElementById('input-email');
const errorEmail = document.getElementById('error-email');

const inputPassword = document.getElementById('input-password');
const errorPassword = document.getElementById('error-password');

ctaFreeTrial.addEventListener('click', () =>{

    let firstNameValue = inputFirstName.value;
    let lastNameValue = inputLastName.value;
    let emailValue = inputEmail.value;
    let passwordValue = inputPassword.value;

    if(firstNameValue.length == 0){
        document.querySelector('.input-first-name').classList.add('active-input');
        errorFirstName.classList.add('active-error');
    }else{
        document.querySelector('.input-first-name').classList.remove('active-input');
        errorFirstName.classList.remove('active-error');
    }

    if(lastNameValue.length == 0){
        document.querySelector('.input-last-name').classList.add('active-input');
        errorLastName.classList.add('active-error');
    }else{
        document.querySelector('.input-last-name').classList.remove('active-input');
        errorLastName.classList.remove('active-error');
    }

    if(emailValue != null && !emailValue.includes("@") || !emailValue.includes(".com")){
        document.querySelector('.input-email').classList.add('active-input');
        errorEmail.classList.add('active-error');
    }else{
        document.querySelector('.input-email').classList.remove('active-input');
        errorEmail.classList.remove('active-error');
    }

    if(passwordValue.length == 0){
        document.querySelector('.input-password').classList.add('active-input');
        errorPassword.classList.add('active-error');
    }else{
        document.querySelector('.input-password').classList.remove('active-input');
        errorPassword.classList.remove('active-error');
    }


});

