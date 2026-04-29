formValidation(){
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    if(emailInput.value.trim() === '' || passwordInput.value.trim() === ''){
        alert('Please fill in both email and password fields.');
        return false;
    }

    return true;

}