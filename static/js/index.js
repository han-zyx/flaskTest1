
    // JavaScript code for the slideshow
    const slideshow = document.querySelector('.slideshow');
    const slides = slideshow.getElementsByTagName('img');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = '';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'active';
    }
