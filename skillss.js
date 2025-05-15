function calculateNumberOfSkills() {
    const skills = document.querySelectorAll('.skill');
    return skills.length;
}
function calculateSkillPercentage() {
    const skills = document.querySelectorAll('.skill');
    let totalPercentage = 0;
    skills.forEach(skill => {
        const percentage = parseInt(skill.querySelector('.percentage').textContent);
        totalPercentage += percentage;
    });
    return totalPercentage / skills.length;
}
function calculateSkillLevel() {
    const skills = document.querySelectorAll('.skill');
    let totalLevel = 0;
    skills.forEach(skill => {
        const level = parseInt(skill.querySelector('.level').textContent);
        totalLevel += level;
    });
    return totalLevel / skills.length;
}
function calculateSkillProficiency() {
    const skills = document.querySelectorAll('.skill');
    let totalProficiency = 0;
    skills.forEach(skill => {
        const proficiency = parseInt(skill.querySelector('.proficiency').textContent);
        totalProficiency += proficiency;
    });
    return totalProficiency / skills.length;
}