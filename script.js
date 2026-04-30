const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-btn');
const loginForm = document.getElementById('login-form');


function formValidation(){
    

    document.getElementById('email-error').hidden = true;
    document.getElementById('password-error').hidden = true;
    let isValidFlag = true;

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailInput.value.trim() === '' ){
        document.getElementById('email-error').hidden = false;
        isValidFlag = false;
    } 
    if(passwordInput.value.trim() === ''){
        document.getElementById('password-error').hidden = false;
        isValidFlag = false;
    } 
    if(!reg.test(emailInput.value)){
        document.getElementById('email-error').hidden = false;
        isValidFlag = false;
    }
    if(passwordInput.value.length < 4){
        document.getElementById('password-error').hidden = false;
        isValidFlag = false;
    }

    

    return isValidFlag;

}


function toggleSubmitButton(){
    if(emailInput.value.trim() === '' || passwordInput.value.trim() === ''){
        submitBtn.disabled = true;
    } 
    else{
        submitBtn.disabled = false;
    }
}

function toggleShowPassword(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';
    }
}


function hideSuccessMessage(){
    document.getElementById('success-login').classList.add('hidden');
}

function handleInputChange(){
    toggleSubmitButton();
    formValidation();
    hideSuccessMessage();
}

submitBtn.addEventListener('click', function(event){
    let isFormValid = formValidation();
    if(!isFormValid){
        document.getElementById('success-login').classList.add('hidden');
        event.preventDefault();
    }

    else{
        emailInput.value = '';
        passwordInput.value = '';
        submitBtn.disabled = true;
        document.getElementById('success-login').classList.remove('hidden');
        event.preventDefault();
    }
});


emailInput.addEventListener('input', handleInputChange);
passwordInput.addEventListener('input', handleInputChange);





