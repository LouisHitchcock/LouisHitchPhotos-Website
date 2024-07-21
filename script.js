document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('gallery-grid');
    const imageFolder = './gallery-grid-images/';
    const imageExtensions = ['.jpg', '.jpeg', '.png'];

    fetchImages(imageFolder);

    function fetchImages(folder) {
        fetch(folder)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const imageElements = htmlDoc.querySelectorAll('a');

                imageElements.forEach(imageElement => {
                    const imageUrl = imageElement.href;
                    if (imageExtensions.some(ext => imageUrl.endsWith(ext))) {
                        addImageToGrid(imageUrl);
                    }
                });
            });
    }

    function addImageToGrid(imageUrl) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.style.opacity = '0';

        const img = document.createElement('img');
        img.src = imageUrl;

        img.onload = () => {
            galleryItem.style.opacity = '1';
        };

        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    }
});
