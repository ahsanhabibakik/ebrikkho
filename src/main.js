import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Countdown Timer Functionality
function updateCountdown() {
    const countdownElements = document.querySelectorAll('.countdown span');
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
        countdownElements[1].textContent = hours.toString().padStart(2, '0');
        countdownElements[1].setAttribute('aria-label', hours.toString().padStart(2, '0'));
        countdownElements[2].textContent = minutes.toString().padStart(2, '0');
        countdownElements[2].setAttribute('aria-label', minutes.toString().padStart(2, '0'));
        countdownElements[3].textContent = seconds.toString().padStart(2, '0');
        countdownElements[3].setAttribute('aria-label', seconds.toString().padStart(2, '0'));
    }

    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
});
