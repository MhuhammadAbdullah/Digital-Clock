function updateCalendar() {
    const now = new Date();

    // Arrays for day and month names
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = daysOfWeek[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update elements with names and values
    document.getElementById('day').textContent = day;
    document.getElementById('date').textContent = date;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the calendar and clock every second
setInterval(updateCalendar, 1000);

// Initial call to display immediately
updateCalendar();