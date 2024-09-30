// Get carousel items and buttons
const carouselItems = document.querySelectorAll('.slider__carousel-items .item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.getElementById('slider'); // Get the slider element

let currentIndex = 0;

// Function to update active slide and background image
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
            // Change background image of the slider
            slider.style.backgroundImage = `url(${item.src})`;
        }
    });
}

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

// Auto-play functionality (optional)
let autoPlay = setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}, 5000);

// Pause auto-play on hover (optional)
carouselItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        clearInterval(autoPlay);
    });
    item.addEventListener('mouseout', () => {
        autoPlay = setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }, 5000);
    });
});

// Initialize the slider background with the first image
updateCarousel();
