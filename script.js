document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar", "navbar.html");
  loadComponent("footer", "footer.html");
});

function loadComponent(componentId, url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(componentId).innerHTML = html;
    })
    .catch((err) => console.error("gagal:", err));
}

function handleTickInit(tick) {
    const targetDate = new Date('2025-04-26T00:00:00');
    Tick.helper.interval(function () {
        var now = new Date();
        var timeDiff = targetDate - now;

        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        tick.value = {
            sep: ':',
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    });
}


// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("menu-toggle");
//     const menu = document.getElementById("menu");

//     menuToggle.addEventListener("click", function () {
//         menu.classList.toggle("hidden");
//     });
// });




