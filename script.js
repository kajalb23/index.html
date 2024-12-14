
const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the difference between the current time and the target time
    const distance = newYearDate - now;

    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (distance <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Happy New Year!";
        document.getElementById('Happy_New.html').click();
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
