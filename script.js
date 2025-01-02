const carousel = document.querySelector('.carousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

rightArrow.addEventListener('click', () => {
    const itemsToShow = Math.floor(carousel.parentElement.offsetWidth / document.querySelector('.carousel-item').offsetWidth);
    if (currentIndex < carousel.children.length - itemsToShow) {
        currentIndex++;
        updateCarousel();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);

// Initialize carousel
updateCarousel();


document.querySelectorAll('.faqbox').forEach(faq => {
    const toggleBtn = faq.querySelector('.toggle-btn');
    const answer = faq.querySelector('.answer');

    toggleBtn.addEventListener('click', () => {
        // Toggle answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggleBtn.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            toggleBtn.style.transform = 'rotate(45deg)';
        }
    });
});
