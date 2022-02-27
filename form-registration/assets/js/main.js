function stepForm() {
    const steps = document.querySelectorAll('.form__step')
    const prevBtn = document.querySelector('.prev__step')
    const nextBtn = document.querySelector('.next__step')
    const form = document.querySelector('.steps__form')
    const stepNumbers = document.querySelectorAll('.step__number')
    const progress = document.querySelector('.progress__success')

    form.addEventListener('submit', e => e.preventDefault())

    let formStep = 0;

    prevBtn.addEventListener('click', () => {
        formStep--;

        if(stepNumbers[formStep + 1] !== undefined) {
            stepNumbers[formStep + 1].classList.remove('active__number')
        }

        updateFormSteps()
    })
    nextBtn.addEventListener('click', () => {
        formStep++;
        updateFormSteps()
    })

    function updateFormSteps() {
        steps.forEach(step => {
            step.classList.contains('active') && step.classList.remove('active')
        })

        if(stepNumbers[formStep] !== undefined) {
            stepNumbers[formStep].classList.add('active__number');
            const actives = document.querySelectorAll('.active__number')
            const percent = ((actives.length -1) / (stepNumbers.length -1)) * 100 + '%';
            progress.style.width = percent;
        } 

        steps[formStep].classList.add('active');
        
        if(formStep === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if(formStep === steps.length - 1) {
            nextBtn.innerHTML = 'Finish';
            success__registration.classList.add('active')
        } else {
            nextBtn.innerHTML = 'Next';        
        }
    }



    updateFormSteps()
}

stepForm()