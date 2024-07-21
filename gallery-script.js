document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

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
