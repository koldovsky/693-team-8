(function() {
    const clock = document.querySelector('.clock');
    function updateClock() {
        clock.innerHTML = new Date().toLocaleTimeString();
        // clock.style.color = 'red';
        // clock.classList.add('select');
    }
    setInterval(updateClock, 1000);
})();