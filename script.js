// Set the target date (3 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2);

// Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownTimerEl = document.getElementById('countdown-timer');
const expiredMessageEl = document.getElementById('expired-message');

// Update countdown function
function updateCountdown() {
  // Get current time
  const currentTime = new Date();
  
  // Calculate the time difference in milliseconds
  const difference = targetDate - currentTime;
  
  // Check if countdown has expired
  if (difference <= 0) {
    // Hide countdown timer
    countdownTimerEl.style.display = 'none';
    // Show expired message
    expiredMessageEl.style.display = 'block';
    // Clear interval
    clearInterval(interval);
    return;
  }
  
  // Calculate time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  // Update DOM with padded values
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
  
  // Add intense animation when time is running low (less than 1 hour)
  if (difference < 3600000) {
    document.querySelectorAll('.time-value').forEach(el => {
      el.classList.add('urgent');
    });
  }
}

// Initial call to set values immediately
updateCountdown();

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

