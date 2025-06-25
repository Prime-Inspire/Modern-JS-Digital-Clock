const clock = document.querySelector('#clock');

const formatTime = date =>
  date
    .toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // change to true for 12-hour format
    });

const updateClock = () => {
  const now = new Date();
  clock.textContent = formatTime(now);
};

updateClock(); // run once immediately
setInterval(updateClock, 1000); // then every second
