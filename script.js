const displays = document.querySelectorAll("h1");
const counts = [0, 0, 0];
const stops = [12000, 5000, 7500];
const interval = 1;

displays.forEach((display, index) => {
  const timer = setInterval(() => {
    const increment = stops[index] / (interval * 100);
    counts[index] += increment;
    display.innerText = Math.ceil(counts[index]);
    if (counts[index] >= stops[index]) clearInterval(timer);
  }, interval);
});
