// Get all the projects and store them in an array
const projects = document.querySelectorAll('.project');
// Set the current project index to 0
let currentProjectIndex = 0;

// Hide all the projects except the first one
for (let i = 1; i < projects.length; i++) {
    projects[i].style.display = 'none';
}

// Add event listeners to the Next and Previous buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', showPrevProject);
nextBtn.addEventListener('click', showNextProject);

// Function to show the previous project
function showPrevProject() {
    // Hide the current project
    projects[currentProjectIndex].style.display = 'none';
    // Decrement the current project index
    currentProjectIndex--;
    // If the current project index is less than 0, set it to the last project index
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    }
    // Show the new current project
    projects[currentProjectIndex].style.display = 'block';
}

// Function to show the next project
function showNextProject() {
    // Hide the current project
    projects[currentProjectIndex].style.display = 'none';
    // Increment the current project index
    currentProjectIndex++;
    // If the current project index is greater than the last project index, set it to 0
    if (currentProjectIndex > projects.length - 1) {
        currentProjectIndex = 0;
    }
    // Show the new current project
    projects[currentProjectIndex].style.display = 'block';
}