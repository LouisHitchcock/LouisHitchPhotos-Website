document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" alt="Fullscreen Image">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Close lightbox function
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        // Re-enable body scroll and restore position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    // Open lightbox function
    const openLightbox = (imgSrc) => {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
        // Scroll to top and prevent body scroll
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`;
    };

    // Close on click outside image or close button
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Touch gesture support for mobile (swipe down to close)
    let touchStartY = 0;
    let touchEndY = 0;

    lightboxImg.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightboxImg.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
        const swipeDistance = touchEndY - touchStartY;
        // If swiped down more than 100px, close lightbox
        if (swipeDistance > 100) {
            closeLightbox();
        }
    };

    // Fetch the images.json file
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            // Create the Intersection Observer for lazy loading
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.onload = () => img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '0px 0px 50px 0px',
                threshold: 0.01
            });

            images.forEach((imageFile) => {
                const img = document.createElement('img');
                img.dataset.src = `./grid-gallery-images/${imageFile}`;
                img.alt = 'Gallery Image';
                img.classList.add('lazy-load'); // Add class for lazy load

                // Add click event to open lightbox
                img.addEventListener('click', () => {
                    openLightbox(img.src);
                });

                // Load a temporary image to check the aspect ratio
                const tempImg = new Image();
                tempImg.src = img.dataset.src;
                tempImg.onload = () => {
                    const imgAspect = tempImg.naturalHeight / tempImg.naturalWidth;
                    if (imgAspect > 1) {
                        img.classList.add('portrait');
                    }
                    gallery.appendChild(img);
                    observer.observe(img);
                };
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});
