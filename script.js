document.addEventListener('DOMContentLoaded', function () {
    loadComponent('navbar', 'navbar.html');
    loadComponent('footer', 'footer.html');
});

function loadComponent(componentId, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(componentId).innerHTML = html;
        })
        .catch(err => console.error('gagal:', err));
}

// Countdown Timer
function countdown() {
    const countToDate = new Date('April 26, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(countdown, 1000);
