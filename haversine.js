haversine.js
function calculateDistance(loc1, loc2) {
    const R = 6371; // Earth radius in km
    const φ1 = loc1.latitude * Math.PI / 180;
    const φ2 = loc2.latitude * Math.PI / 180;
    const Δφ = (loc2.latitude - loc1.latitude) * Math.PI / 180;
    const Δλ = (loc2.longitude - loc1.longitude) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in km
}
function sendClockInData() {
  const clockInData = {
    staffId: '12345', // Unique staff ID
    clockInTime: clockInTime,
    location: { latitude: currentLocation.latitude, longitude: currentLocation.longitude },
  };
  fetch('/api/clock-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(clockInData),
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function sendClockOutData() {
  const clockOutData = {
    staffId: '12345', // Unique staff ID
    clockOutTime: new Date(),
    totalWorkHours: calculateTotalHours(clockInTime, new Date()),
  };
  fetch('/api/clock-out', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(clockOutData),
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
