document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.bg1, .bg2');

    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.5;
        const yOffset = window.pageYOffset * speed;
        el.style.backgroundPositionY = `${-yOffset}px`;
    });
});
