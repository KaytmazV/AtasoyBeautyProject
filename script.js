document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    // Başlangıçta ilk slaytı göster
    slides[currentSlide].classList.add('active');

    function showSlide(index) {
        // Tüm slaytları gizle
        slides.forEach((slide) => {
            slide.classList.remove('active');
            slide.style.display = "none"; // Gizle
        });

        // Slayt döngüsünü sağla
        currentSlide = (index + slides.length) % slides.length;

        // İlgili slaytı göster
        slides[currentSlide].classList.add('active');
        slides[currentSlide].style.display = "block"; // Göster
    }

    prev.addEventListener('click', () => {
        showSlide(currentSlide - 1); // Bir önceki slayta git
    });

    next.addEventListener('click', () => {
        showSlide(currentSlide + 1); // Bir sonraki slayta git
    });

    // Otomatik slayt geçişi
    setInterval(() => {
        showSlide(currentSlide + 1); // Slaytları 5 saniyede bir değiştir
    }, 5000);
});
