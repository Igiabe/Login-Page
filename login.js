console.log('hello');
document.addEventListener("DomContentLoaded", ()=>{

    const loginForm = document.querySelector('#login');
const createAccountForm = document.querySelector('#createAccount');

document.querySelector('#createAccount').addEventListener
 ('click', e => {
     e.preventDefault();
loginForm.classList.add('formHiden');
createAccountForm.classList.remove('formHiden');
});
document.querySelector('#login').addEventListener
 (click, e => {
     e.preventDefault();
loginForm.classList.remove('formHiden');
createAccountForm.classList.add('formHiden');
});
}
);
