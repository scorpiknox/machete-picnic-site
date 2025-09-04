
    // Create animated particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (10 + Math.random() * 10) + 's';
      particlesContainer.appendChild(particle);
    }

    // Gallery scroll functionality
    let galleryPosition = 0;
    const galleryTrack = document.getElementById('galleryTrack');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const itemWidth = 33.333;

    function scrollGallery(direction) {
      const maxPosition = -(galleryItems.length - 3) * itemWidth;
      galleryPosition += direction * itemWidth;
      
      if (galleryPosition > 0) galleryPosition = 0;
      if (galleryPosition < maxPosition) galleryPosition = maxPosition;
      
      galleryTrack.style.transform = `translateX(${galleryPosition}%)`;
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
      } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });

    // Mobile menu toggle (for future enhancement)
    // You can add a hamburger menu for mobile devices here

