document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const imageFolder = 'grid-gallery-images/';

    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `${imageFolder}${image}`;
                imgElement.alt = 'Gallery Image';

                imgElement.onload = () => {
                    imgElement.classList.add('loaded'); // Add 'loaded' class when image is loaded
                    
                    // Check if the image is portrait
                    if (imgElement.naturalHeight > imgElement.naturalWidth) {
                        imgElement.classList.add('portrait');
                    }
                };

                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
