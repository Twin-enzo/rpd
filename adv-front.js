adv-front.js
document.getElementById('downloadReportBtn').addEventListener('click', () => {
    window.open('/api/reports?format=pdf');
});
