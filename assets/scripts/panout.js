const images = document.querySelectorAll('.panning-image');
// const contents = document.querySelectorAll('.image-content');
let currentIndex = 0;
const intervalTime = 5000; // Matches the CSS animation duration

function nextSlide() {
    // Remove 'active' class from current image to start fade out and animation reset
    images[currentIndex].classList.remove('active');
    // contents[currentIndex].classList.remove('active');

    // Move to the next image or loop back to the first
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' class to the next image and its content
    images[currentIndex].classList.add('active');
    // contents[currentIndex].classList.add('active');
}

// Start the sequence when the page loads
images[currentIndex].classList.add('active'); // Activate the first image initially
// contents[currentIndex].classList.add('active');

// Auto-change every 5s
setInterval(nextSlide, intervalTime); // Change image every 5 seconds
