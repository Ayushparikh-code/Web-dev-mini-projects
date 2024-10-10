// Define global variable to store project data
let projectData = [];

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Attach event listener for project search form submission
    document.getElementById('projectForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const topics = document.getElementById('topics').value.trim();
        if (topics === '') {
            alert('Please enter topics to search for projects.');
            return;
        }
        fetchProjects(topics);
    });
});

// Function to show loading bar
function showLoadingBar() {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.transform = 'scaleX(1)';
}

// Function to hide loading bar
function hideLoadingBar() {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.transform = 'scaleX(0)';
}

// Function to fetch projects based on topics
async function fetchProjects(topics) {
    showLoadingBar();
    const apiUrl = `https://api.github.com/search/repositories?q=${topics}&per_page=50`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        projectData = await Promise.all(data.items.map(async project => {
            const prResponse = await fetch(project.pulls_url.replace('{/number}', ''));
            const prData = await prResponse.json();
            const prCount = prData.length;
            return { ...project, prCount };
        }));
        displayProjects(projectData);
    } catch (error) {
        console.error('Error fetching projects:', error);
        alert('Failed to fetch projects. Please try again later.');
    } finally {
        hideLoadingBar();
    }
}

// Function to display projects in the UI
function displayProjects(projects) {
    const resultsDiv = document.getElementById('projects-container');
    resultsDiv.innerHTML = '';
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const title = document.createElement('h3');
        title.textContent = project.name;

        const description = document.createElement('p');
        description.textContent = project.description || 'No description available';

        const prCount = document.createElement('p');
        prCount.textContent = `Pull Requests: ${project.prCount}`;

        const link = document.createElement('a');
        link.href = project.html_url;
        link.target = '_blank';
        link.textContent = 'View on GitHub';

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
        projectDiv.appendChild(prCount);
        projectDiv.appendChild(link);

        resultsDiv.appendChild(projectDiv);
    });
    
}