let isWorking = false; // Flag to track work status
let locationEnabled = false; // Flag for tracking location

// Simulated Projects (these will be dynamically fetched from the backend later)
const projects = [
    { name: 'Project 1', status: 'In Progress' },
    { name: 'Project 2', status: 'Completed' },
    { name: 'Project 3', status: 'Pending' },
];

// Initialize the project list
function populateProjects() {
    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.name} - Status: ${project.status}`;
        projectsList.appendChild(li);
    });
}

// Toggle Work Status Button (Start Work / Sign Off)
function toggleWorkStatus() {
    isWorking = !isWorking;
    const workStatusButton = document.getElementById('workStatusButton');
    
    if (isWorking) {
        // Start Work
        workStatusButton.textContent = "Sign Off";
        workStatusButton.classList.add('red');
        workStatusButton.classList.remove('green');
        startLocationTracking();
    } else {
        // Sign Off
        workStatusButton.textContent = "Start Work";
        workStatusButton.classList.remove('red');
        workStatusButton.classList.add('green');
        stopLocationTracking();
    }
}

// Start Location Tracking
function startLocationTracking() {
    locationEnabled = true;
    document.getElementById('locationStatus').textContent = 'Tracking...';
    // Here you would implement actual location tracking logic
    // For now, we will simulate location data every 5 seconds
    setInterval(() => {
        if (locationEnabled) {
            getLocation();
        }
    }, 5000); // Update location every 5 seconds
}

// Stop Location Tracking
function stopLocationTracking() {
    locationEnabled = false;
    document.getElementById('locationStatus').textContent = 'Tracking stopped';
    // Stop location tracking logic here
}

// Simulate getting the location
function getLocation() {
    // This is just a simulation. In reality, you'd use the browser's Geolocation API or a native mobile app API
    console.log("Location: Latitude: 40.7128, Longitude: -74.0060");
    // Send location data to the server or local storage
}

// Open Message Form
function openMessageForm() {
    document.getElementById('messageForm').style.display = 'block';
}

// Close Message Form
function closeMessageForm() {
    document.getElementById('messageForm').style.display = 'none';
}

// Send Message
function sendMessage() {
    const message = document.getElementById('messageText').value;
    if (message) {
        alert(`Message sent: ${message}`);
        // Implement backend API call to send the message to the admin
    }
    closeMessageForm();
}

// Open Upload Form
function openUploadForm() {
    document.getElementById('uploadForm').style.display = 'block';
}

// Close Upload Form
function closeUploadForm() {
    document.getElementById('uploadForm').style.display = 'none';
}

// Upload File
function uploadFile() {
    const file = document.getElementById('fileUpload').files[0];
    if (file) {
        alert(`File uploaded: ${file.name}`);
        // Implement backend API call to upload the file
    }
    closeUploadForm();
}

// Populate projects when the page loads
window.onload = function() {
    populateProjects();
};
localStorage.setItem('clientName', 'John Doe');
