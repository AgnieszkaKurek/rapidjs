var project = new Object();
project.name = 'Project Phoenix';
project.securityLevel = 15;
project.updateDueDate = function () {
    return true;
};
console.log(project.updateDueDate());