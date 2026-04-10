const track = document.querySelector('.marquee-track');
const items = document.querySelectorAll('.marquee-track a');
const itemWidth = items[0].offsetWidth + 49; // logo width + gap
let index = 0;

document.querySelector('.arrow.right').addEventListener('click', () => {
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
});

document.querySelector('.arrow.left').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
});

// Auto loop
setInterval(() => {
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
}, 3000); // change every 3s