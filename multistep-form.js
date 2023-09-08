const form = document.querySelector('form');
const formStepsElements = form.querySelectorAll('.form-step');
const nextFormStepButton = form.querySelector('#multistep-next-step-button');
const previousFormStepButton = form.querySelector('#multistep-previous-step-button');
const submitFormButton = form.querySelector('#multistep-form-submit-button');

nextFormStepButton.addEventListener('click', nextFormStepEventHandler);

previousFormStepButton.addEventListener('click', previousFormStepEventHandler);

let formSteps = formStepsElements.length;
let currentFormStep = 0;

function setup() {
    formStepsElements[currentFormStep].style.display.add('form-step-active');
    submitFormButton.style.display = "none";
    previousFormStepButton.style.display = "none";
}

function nextFormStepEventHandler(event) {
    event.preventDefault();
    next();
}

function previousFormStepEventHandler(event) {
    event.preventDefault();
    previous();
}

function next() {
    if (currentFormStep + 1 === formSteps) return;
    formStepsElements[currentFormStep].classList.remove('form-step-active');
    currentFormStep++;
    formStepsElements[currentFormStep].classList.add('form-step-active');

    if (currentFormStep + 1 != formSteps) {
        submitFormButton.style.display = "none";
        previousFormStepButton.style.display = "inline";
    }

    if (currentFormStep + 1 === formSteps) {
        submitFormButton.style.display = "inline";
        nextFormStepButton.style.display = "none";
    }
}

function previous() {
    if (currentFormStep === 0) return;
    formStepsElements[currentFormStep].classList.remove('form-step-active');
    currentFormStep--;
    formStepsElements[currentFormStep].classList.add('form-step-active');

    if (currentFormStep + 1 != formSteps) {
        submitFormButton.style.display = "none";
    }

    if (nextFormStepButton.style.display === "none") {
        nextFormStepButton.style.display = "inline";
    }

    if (currentFormStep === 0) {
        previousFormStepButton.style.display = "none";
    }
}

setup();