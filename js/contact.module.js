export class Contact {
    constructor() {
        document.getElementById('contact').addEventListener('click', () => {
            event.preventDefault();
            $('.contact').removeClass('d-none');
            $('.ingredients').addClass('d-none');
            $('.area').addClass('d-none');
            $('.categories').addClass('d-none');
            $('.searchSection').addClass('d-none');
            $('.categoryMeals').addClass('d-none');
            $('.home').addClass('d-none');
            $('.details').addClass('d-none');
            $('.areaMeals').addClass('d-none');
            $('.ingMeals').addClass('d-none');
            $('.sidenav').animate({ left: '-260px' }, 500);
            $('#hide').css('display', 'none');
            $('#view').css('display', 'block');
        })

        this.nameInput = document.querySelector('.name-input');
        this.nameAlert = document.querySelector('.name-alert');
        this.nameRegex = /^[A-Za-z\s]+$/;
        this.nameValidation();

        this.phoneInput = document.querySelector('.phone-input');
        this.phoneAlert = document.querySelector('.phone-alert');
        this.phoneRegex = /^(010|011|012)\d{8}$/;
        this.phoneValidation();

        this.passwordInput = document.querySelector('.password-input');
        this.passwordAlert = document.querySelector('.password-alert');
        this.passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        this.passwordValidation();

        this.emailInput = document.querySelector('.email-input');
        this.emailAlert = document.querySelector('.email-alert');
        this.emailRegex = /^\S+@\S+\.\S+$/;
        this.emailValidation();

        this.ageInput = document.querySelector('.age-input');
        this.ageAlert = document.querySelector('.age-alert');
        this.ageRegex = /^[0-9]+$/;
        this.ageValidation();

        this.repasswordInput = document.querySelector('.repassword-input');
        this.repasswordAlert = document.querySelector('.repassword-alert');
        this.repasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        this.repasswordValidation();

        this.submitValidation();
    }

    nameValidation() {
        this.nameInput.addEventListener('input', () => {
            if (this.nameRegex.test(this.nameInput.value)) {
                this.nameAlert.classList.add('d-none');
            } else {
                this.nameAlert.classList.remove('d-none');
            }
            this.submitValidation();
        });
    }

    phoneValidation() {
        this.phoneInput.addEventListener('input', () => {
            if (this.phoneRegex.test(this.phoneInput.value)) {
                this.phoneAlert.classList.add('d-none');
            } else {
                this.phoneAlert.classList.remove('d-none');
            }
            this.submitValidation();
        });
    }

    passwordValidation() {
        this.passwordInput.addEventListener('input', () => {
            if (this.passwordRegex.test(this.passwordInput.value)) {
                this.passwordAlert.classList.add('d-none');
            } else {
                this.passwordAlert.classList.remove('d-none');
            }
            this.submitValidation();
        });
    }

    emailValidation() {
        this.emailInput.addEventListener('input', () => {
            if (this.emailRegex.test(this.emailInput.value)) {
                this.emailAlert.classList.add('d-none');
            } else {
                this.emailAlert.classList.remove('d-none');
            }
            this.submitValidation();
        });
    }

    ageValidation() {
        this.ageInput.addEventListener('input', () => {
            if (this.ageRegex.test(this.ageInput.value)) {
                this.ageAlert.classList.add('d-none');
            } else {
                this.ageAlert.classList.remove('d-none');
            }
            this.submitValidation();
        });
    }

    repasswordValidation() {
        this.repasswordInput.addEventListener('input', () => {
            if (this.repasswordRegex.test(this.repasswordInput.value)) {
                this.repasswordAlert.classList.add('d-none');
            } else {
                this.repasswordAlert.classList.remove('d-none');
            }
            this.submitValidation();
        });
    }

    submitValidation() {
        const submitButton = document.getElementById('submit');
        if (
            this.nameRegex.test(this.nameInput.value) &&
            this.phoneRegex.test(this.phoneInput.value) &&
            this.passwordRegex.test(this.passwordInput.value) &&
            this.emailRegex.test(this.emailInput.value) &&
            this.ageRegex.test(this.ageInput.value) &&
            this.repasswordRegex.test(this.repasswordInput.value)
        ) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }
}
