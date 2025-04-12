import './style.css'

// Countdown Timer Functionality
function updateCountdown() {
    const countdownContainer = document.querySelector('.countdown');
    if (!countdownContainer) return;

    const countdownElements = countdownContainer.querySelectorAll('span[style*="--value"]');
    if (!countdownElements.length) return;

    // Set the target date (7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    function updateTimer() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdownElements.forEach(el => {
                el.textContent = '00';
                el.setAttribute('aria-label', '00');
                el.style.setProperty('--value', '0');
            });
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update the countdown elements
        countdownElements[0].textContent = days.toString().padStart(2, '0');
        countdownElements[0].setAttribute('aria-label', days.toString().padStart(2, '0'));
        countdownElements[0].style.setProperty('--value', days.toString());

        countdownElements[1].textContent = hours.toString().padStart(2, '0');
        countdownElements[1].setAttribute('aria-label', hours.toString().padStart(2, '0'));
        countdownElements[1].style.setProperty('--value', hours.toString());

        countdownElements[2].textContent = minutes.toString().padStart(2, '0');
        countdownElements[2].setAttribute('aria-label', minutes.toString().padStart(2, '0'));
        countdownElements[2].style.setProperty('--value', minutes.toString());

        countdownElements[3].textContent = seconds.toString().padStart(2, '0');
        countdownElements[3].setAttribute('aria-label', seconds.toString().padStart(2, '0'));
        countdownElements[3].style.setProperty('--value', seconds.toString());
    }

    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
});
