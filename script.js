const regForm = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const toc = document.querySelector('#toc');
const output = document.querySelector('#output')

const validate = (input) => {
    switch (input.type) {
        case 'text':
            validateText(input);
            break;
        case 'email':
            validateEmail(input);
            break;
        case 'checkbox':
            validateCheck(input);
    }
}


// const validate = () => {
//     document.querySelectorAll('input').forEach(input => {
//         if (input.type === 'text') {
//             validate(input.id);
//         }
//         if (input.type === 'email') {
//             validateEmail(input.id)
//         }
//     })
// }


const validateText = (input) => {
    if (input.value.trim() === '') {
        setError(input, 'Name cannot be empty')
    } else if (input.value.trim().length < 2) {
        setError(input, 'Name must be atleast 2 characters long')
    } else {
        setSuccess(input)
    }
}

const validateEmail = (input) => {
    let regEx = /^\w+@[a-zA-Z]+?\.[a-zA-Z-]{2,}$/

    if (input.value.trim() === '') {
        setError(input, 'Email address cannot be empty')
    } else if (!regEx.test(input.value)) {
        setError(input, 'Email address is not valid')
    } else {
        setSuccess(input)
    }
}

const validateCheck = input => {
    if (!input.checked) {
        setError(input, 'You must accept the terms and conditions')
    }
    else {
        setSuccess(input)
    }
}




const setError = (input, message) => {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');

    const error = formGroup.querySelector('small');
    error.innerText = message;
}

const setSuccess = input => {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
}

regForm.addEventListener('submit', e => {
    e.preventDefault();

    validateText(firstName)
    validateText(lastName)
    validateEmail(email)
    validate(toc)
})



