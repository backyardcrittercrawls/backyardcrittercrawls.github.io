// Add subtle parallax effect to floating beetles
document.addEventListener('mousemove', (e) => {
    const beetles = document.querySelectorAll('.beetle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    beetles.forEach((beetle, index) => {
        const speed = (index + 1) * 0.3;
        const x = (mouseX - 0.5) * speed * 15;
        const y = (mouseY - 0.5) * speed * 15;
        
        // Apply parallax effect
        beetle.style.transform = `translate(${x}px, ${y}px)`;
        
        // Add extra segment animation on mouse movement
        const segments = beetle.querySelectorAll('.segment');
        segments.forEach((segment, segmentIndex) => {
            const segmentSpeed = (segmentIndex + 1) * 0.1;
            const segmentX = (mouseX - 0.5) * segmentSpeed * 3;
            segment.style.transform = `translateX(${segmentX}px) scaleX(1.05)`;
        });
        
        // Add antenna movement
        const antennas = beetle.querySelectorAll('.antenna');
        antennas.forEach((antenna, antennaIndex) => {
            const antennaSpeed = (antennaIndex + 1) * 0.15;
            const antennaAngle = (mouseX - 0.5) * antennaSpeed * 10;
            if (antenna.classList.contains('antenna-left')) {
                antenna.style.transform = `rotate(${-15 + antennaAngle}deg)`;
            } else {
                antenna.style.transform = `rotate(${15 + antennaAngle}deg)`;
            }
        });
    });
});


// Smooth scroll for same-page navigation only
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 