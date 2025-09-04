    // Gallery images array for lightbox
    
    const galleryImages = [
      {
        src: '/assets/images/devon_live.jpg',
        alt: 'Devon Live'
      },
      {
        src: '/assets/images/Machete Picnic Studio.jpg',
        alt: 'Studio Session'
      },
      {
        src: '/assets/images/aaron_live.jpg',
        alt: 'Aaron Live'
      },
      {
        src: '/assets/images/masa_live.jpg',
        alt: 'Masa Live'
      }
    ];

    let currentLightboxIndex = 0;

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

    // Lightbox functionality
    function openLightbox(index) {
      currentLightboxIndex = index;
      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightboxImage');
      
      lightboxImage.src = galleryImages[index].src;
      lightboxImage.alt = galleryImages[index].alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox(event) {
      if (event && event.target !== event.currentTarget) return;
      
      const lightbox = document.getElementById('lightbox');
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    function changeLightboxImage(direction) {
      currentLightboxIndex += direction;
      
      if (currentLightboxIndex >= galleryImages.length) {
        currentLightboxIndex = 0;
      } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = galleryImages.length - 1;
      }
      
      const lightboxImage = document.getElementById('lightboxImage');
      lightboxImage.src = galleryImages[currentLightboxIndex].src;
      lightboxImage.alt = galleryImages[currentLightboxIndex].alt;
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
      const lightbox = document.getElementById('lightbox');
      if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          changeLightboxImage(-1);
        } else if (e.key === 'ArrowRight') {
          changeLightboxImage(1);
        }
      }
    });

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
