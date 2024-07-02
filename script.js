function updateTimeAndDay() {
    const currentTime = new Date();
    document.getElementById('timeUTC').textContent = currentTime.toUTCString();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('dayOfWeek').textContent = days[currentTime.getUTCDay()];
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000); // Update every second
