//Selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const registration = document.getElementById('registration');

form.addEventListener('submit', (e) => {
    //prevent form to submittingg
    e.preventDefault();

    //Validate our form
    validateInputs();
});

/* -------------- Functions -------------- */
//Set Function
const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorMessage = formControl.querySelector('.error');
    errorMessage.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');
}

const setSuccess = (element) => {
    const formControl = element.parentElement;
    const errorMessage = formControl.querySelector('.error');
    errorMessage.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(String(email).toLowerCase());
}


//Validate function
const validateInputs = () => {
    // get the value of all input field and trim it
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

    //apply condition to check either valid or not
    //Username
    if(usernameValue === ''){
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }

    //Email
    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Email is not valid');
    }else{
        setSuccess(email);
    }

    //Password
    if(passwordValue === ''){
        setError(password, 'Password is required')
    }else if(passwordValue.length < 6){
        setError(password, 'Password should be at least 6 character')
    }else{
        setSuccess(password);
    }

    //Confirm password
    if(passwordConfirmValue === ''){
        setError(passwordConfirm, 'Confirm password is required')
    }else if(passwordValue !== passwordConfirmValue ){
        setError(passwordConfirm, "Password doesn't match")
    }else{
        setSuccess(passwordConfirm)
    }
}