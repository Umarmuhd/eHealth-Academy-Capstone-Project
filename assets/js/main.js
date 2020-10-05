var workExperience = document.getElementById('work-experience');
var education = document.getElementById('education');
var skillsInterest = document.getElementById('skillsInterests');
var projects = document.getElementById('projects')

var workExperienceContainer = document.querySelector('.work-experience')
var educationContainer = document.querySelector('.education')
var skillsInterestContainer = document.querySelector('.skills-interests')
var projectsContainer = document.querySelector('.projects')

workExperience.addEventListener('click', () => {
    //Container remover
    skillsInterestContainer.classList.remove('active')
    educationContainer.classList.remove('active')
    projectsContainer.classList.remove('active')
    workExperienceContainer.classList.add('active')

    //Tab remover
    education.parentElement.parentElement.classList.remove('active_menu')
    skillsInterest.parentElement.parentElement.classList.remove('active_menu')
    projects.parentElement.parentElement.classList.remove('active_menu')
    workExperience.parentElement.parentElement.classList.add('active_menu')
})

education.addEventListener('click', () => {
    skillsInterestContainer.classList.remove('active')
    workExperienceContainer.classList.remove('active')
    projectsContainer.classList.remove('active')
    educationContainer.classList.add('active')

    //Tab remover
    workExperience.parentElement.parentElement.classList.remove('active_menu')
    skillsInterest.parentElement.parentElement.classList.remove('active_menu')
    projects.parentElement.parentElement.classList.remove('active_menu')
    education.parentElement.parentElement.classList.add('active_menu')
})

skillsInterest.addEventListener('click', () => {
    educationContainer.classList.remove('active')
    workExperienceContainer.classList.remove('active')
    projectsContainer.classList.remove('active')
    skillsInterestContainer.classList.add('active')

    //Tab remover
    education.parentElement.parentElement.classList.remove('active_menu')
    workExperience.parentElement.parentElement.classList.remove('active_menu')
    projects.parentElement.parentElement.classList.remove('active_menu')
    skillsInterest.parentElement.parentElement.classList.add('active_menu')
})

projects.addEventListener('click', () => {
    educationContainer.classList.remove('active')
    workExperienceContainer.classList.remove('active')
    skillsInterestContainer.classList.remove('active')
    projectsContainer.classList.add('active')

    //Tab remover
    education.parentElement.parentElement.classList.remove('active_menu')
    workExperience.parentElement.parentElement.classList.remove('active_menu')
    skillsInterest.parentElement.parentElement.classList.remove('active_menu')
    projects.parentElement.parentElement.classList.add('active_menu')
})

// Light mode
var lightModeToggler = () => {
    var wrapper = document.querySelector(".wrapper")
    var bodyElement = document.body
    var lightSVG = document.querySelector('.light-mode-toggler')

    bodyElement.classList.toggle("light-theme")
    wrapper.classList.toggle("light-theme");
    lightSVG.classList.toggle('dark')
}

const lightBtn = document.querySelector("#light");
lightBtn.addEventListener("click", lightModeToggler);

// Explore for mobile
var exploreBtn = document.getElementById('explore')
exploreBtn.addEventListener('click', () => {
    document.querySelector('.left').classList.add('hidden')
    document.querySelector('.right').classList.remove('hidden')

    //If explore btn is clicked all containers should be close except for work experience
    projectsContainer.classList.remove('active')
    skillsInterestContainer.classList.remove('active')
    educationContainer.classList.remove('active')
    workExperienceContainer.classList.add('active')

    //This makes home btn visible on education page
    homeBtnContainer.classList.remove('hidden')

    //This ensures only education btn is visible on experience page(page after explore)
    projectsBtn.classList.add('hidden')
    skillInterestBtn.classList.add('hidden')
    skillInterestsLeftbtn.classList.add('hidden')
    educationLeftBtn.classList.add('hidden')
    experienceLeftBtn.classList.add('hidden')
    educationBtn.classList.remove('hidden')
})

//Mobile Controllers

//Selects the Buttons (Left)
var experienceLeftBtn = document.getElementById('experience-Lbtn')
var educationLeftBtn = document.getElementById('education-Lbtn')
var skillInterestsLeftbtn = document.getElementById('skillInterests-Lbtn')

//Selects the Buttons (Right)
var experienceBtn = document.querySelector('.experience-btn')
var educationBtn = document.getElementById('education-Rbtn')
var projectsBtn = document.getElementById('projects-Rbtn')
var skillInterestBtn = document.getElementById('skillInterests-Rbtn')

var homeBtn = document.querySelector('.home-btn');
var homeBtnContainer = document.querySelector('.home-controller')

//Checks if work experience page is active & remove all btns except for Home and Education
if (workExperienceContainer.classList.contains('active')) {
    educationBtn.classList.remove('hidden')
    skillInterestBtn.classList.add('hidden')
    projectsBtn.classList.add('hidden')
}

educationBtn.addEventListener('click', () => {
    //On Education page, skills all containers are removed except education container
    skillsInterestContainer.classList.remove('active')
    workExperienceContainer.classList.remove('active')
    projectsContainer.classList.remove('active')
    educationContainer.classList.add('active')

    //This ensures home btn is visble on Skills and interest page
    homeBtnContainer.classList.remove('hidden')
    //Add Experience left btn to education page
    experienceLeftBtn.classList.remove('hidden')
    //Removes education btn from skills and interest page
    educationBtn.classList.add('hidden')
    //Adds skills and interest btn to education page
    skillInterestBtn.classList.remove('hidden')
})

homeBtn.addEventListener('click', () => {
    //Returns You to Home 
    document.querySelector('.right').classList.add('hidden')
    document.querySelector('.left').classList.remove('hidden')
})

skillInterestBtn.addEventListener('click', () => {
    workExperienceContainer.classList.remove('active')
    educationContainer.classList.remove('active')
    skillsInterestContainer.classList.add('active')

    skillInterestBtn.classList.add('hidden')
    experienceLeftBtn.classList.add('hidden')
    projectsBtn.classList.remove('hidden')
    educationLeftBtn.classList.remove('hidden')
})

projectsBtn.addEventListener('click', () => {
    skillsInterestContainer.classList.remove('active')
    projectsContainer.classList.add('active')

    projectsBtn.classList.add('hidden')
    educationLeftBtn.classList.add('hidden')
    skillInterestsLeftbtn.classList.remove('hidden')
})

//Left btn controller
experienceLeftBtn.addEventListener('click', () => {
    educationContainer.classList.remove('active')
    skillsInterestContainer.classList.remove('active')
    workExperienceContainer.classList.add('active')

    experienceLeftBtn.classList.add('hidden')
    skillInterestBtn.classList.add('hidden')
    educationBtn.classList.remove('hidden')
    experienceLeftBtn.classList.add('hidden')
})

educationLeftBtn.addEventListener('click', () => {
    educationContainer.classList.add('active')
    skillsInterestContainer.classList.remove('active')
    workExperienceContainer.classList.remove('active');
    projectsContainer.classList.remove('active')

    if (educationContainer.classList.contains('active')) {
        skillInterestBtn.classList.remove('hidden')
    };

    projectsBtn.classList.add('hidden')
    educationLeftBtn.classList.add('hidden');
    experienceLeftBtn.classList.remove('hidden');
    skillInterestBtn.classList.add('hidden');

    if (educationContainer.classList.contains('active')) {
        skillInterestBtn.classList.remove('hidden')
    };
})

skillInterestsLeftbtn.addEventListener('click', () => {
    educationContainer.classList.remove('active')
    workExperienceContainer.classList.remove('active');
    projectsContainer.classList.remove('active')

    skillsInterestContainer.classList.add('active')

    skillInterestsLeftbtn.classList.add('hidden')
    educationLeftBtn.classList.remove('hidden')
    projectsBtn.classList.remove('hidden')
})