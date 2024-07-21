
# LouisHitchPhotos Website

This is the official website for Louis Hitchcock's photography portfolio. The website showcases a gallery of images dynamically loaded from a JSON file and includes features like lazy loading for improved performance.

## Website
Visit the live website: [LouisHitchPhotos](https://louishitchcock.photos/)

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Responsive design that adapts to different screen sizes.
- Dynamically loaded gallery from `images.json`.
- Lazy loading of images for better performance.
- Consistent spacing between portrait and landscape images.

## Project Structure
```
LouisHitchPhotos-Website/
│
├── css/
│   ├── gallery-style.css
│   └── style.css
│
├── images/
│   ├── LogoScaled.png
│   ├── image (1).jpg
│   ├── image (2).jpg
│   └── ... (other images)
│
├── js/
│   └── gallery-script.js
│
├── index.html
├── images.json
└── README.md
```

## Setup and Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/LouisHitchcock/LouisHitchPhotos-Website.git
   cd LouisHitchPhotos-Website
   ```

2. **Open the project in your preferred code editor.**

3. **Ensure all dependencies are installed (for development with a server):**
   - You can use a simple HTTP server like `http-server` for local development:
     ```bash
     npm install -g http-server
     http-server
     ```

4. **Open `index.html` in your web browser to view the website.**

## Usage
- **Navigation**: The website features a menu with links to Louis Hitchcock's GitHub and Instagram profiles.
- **Gallery**: Images are loaded dynamically from `images.json` and displayed in a responsive grid layout. The gallery supports lazy loading to optimize performance.
- **Styling**: Custom styles are applied through `gallery-style.css` and `style.css`.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -m "Description of your changes"
   ```
5. Push to the branch:
   ```bash
   git push origin feature-name
   ```
6. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Contact
For any inquiries, please contact Louis Hitchcock:
- GitHub: [LouisHitchcock](https://github.com/LouisHitchcock)
- Instagram: [louishitchphotos](https://instagram.com/louishitchphotos)
