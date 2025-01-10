local-storage.js
// Login Form Submission (Handle JWT in frontend)
function loginUser() {
  const credentials = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };
  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('authToken', data.token);  // Store token
    window.location.href = '/staff-dashboard';       // Redirect to staff dashboard
  })
  .catch(err => console.error(err));
}

// Sending JWT token in API requests (for authorized routes)
const token = localStorage.getItem('authToken');
fetch('http://localhost:5000/staff-dashboard', {
  method: 'GET',
  headers: { 'Authorization': `Bearer ${token}` }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
