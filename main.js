function showDescription() {
    const elem = document.querySelector('.section');
    const showText = document.querySelector('.section__about')
    const showSkills = document.querySelector('.section__skills');
    const projects = document.querySelector('.section__projects');
    const my_info = document.querySelector('.section__my-info');


    elem.addEventListener('click', (e) => {
        if(e.target.closest('.about')) {
            showText.classList.toggle('active');
        } else if(e.target.closest('.skills')){
            showSkills.classList.toggle('active');
        } else if(e.target.closest('.projects')) {
            projects.classList.toggle('active');
        } else if(e.target.closest('.my-info')) {
            my_info.classList.toggle('active')
        }
    })  

}

showDescription()