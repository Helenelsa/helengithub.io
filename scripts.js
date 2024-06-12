document.addEventListener("DOMContentLoaded", function() {
    // Image Slider
    const slides = document.querySelectorAll(".slider img");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlide(currentSlide); // Show the first slide
});
