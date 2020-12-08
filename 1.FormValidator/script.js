const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
// Use regex to check if the email is a valid email
function checkEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccess(email)
    }else{
        showError(email, "Email is not valid")
    }

}

// Check Required Fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });
}

// Check the legnth of the value to ensure it is the corerct length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}
// Check if the passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match');
    }
  }

// Returns a capitalized value name
function getFieldName(input){
    return input.id[0].toUpperCase() + input.id.slice(1)
}


// Event Listeners
form.addEventListener('submit', function(e){
    // Stops it from submitting
    e.preventDefault();

    if(!checkRequired([username, email, password, password2])){
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
      }
})