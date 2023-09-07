const sharp = require('sharp');
const path = require('path');

const inputImagePaths = [
    '../../public/imgs/portfolio/ticket.webp',
    '../../public/imgs/portfolio/fraud.webp',
    '../../public/imgs/portfolio/emission.webp'
]; // Replace with your image file paths

const outputDirectory = '../../public/imgs/portfolio/';   // Replace with your desired output directory

const sizes = [
    { width: 416, mediaQuery: '(min-width: 1261px)' },
    { width: 320, mediaQuery: '(max-width: 1260px) and (min-width: 991px)' },
    { width: 696, mediaQuery: '(max-width: 990px)' },
    { width: 486, mediaQuery: '(max-width: 767px)' },
    { width: null, mediaQuery: '' }, // Original size as fallback
];

sharp.cache(false); // Disable sharp's cache for this operation
inputImagePaths.forEach(inputImagePath => {
    const imageName = path.basename(inputImagePath, path.extname(inputImagePath));
    sizes.forEach(({ width, mediaQuery }) => {
      const imageOutputPath = width
        ? path.join(outputDirectory, `${imageName}-${width}.webp`)
        : path.join(outputDirectory, `${imageName}-original.webp`);
  
      const resizeOperation = width ? sharp().resize(width) : sharp();
  
      sharp(inputImagePath)
        .clone() // Clone the original image to avoid resizing conflicts
        .resize({ width, withoutEnlargement: true })
        .toFile(imageOutputPath, (err, info) => {
          if (err) throw err;
          console.log(`Image (${width}px) created:`, info);
        });
  
      const mediaQueryInfo = mediaQuery ? `(${mediaQuery})` : ''; // Include media query if available
      console.log(`@media ${mediaQueryInfo} {`);
      console.log(`  .${imageName}-img {`);
      console.log(`    height: auto;`);
      console.log(`    width: ${width ? `${width}px;` : '100%;'}\n  }`);
      console.log(`}\n`);
    });
  });