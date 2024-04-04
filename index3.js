document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const bigImg = document.querySelector('.big-img');
    const bigImgSrc = bigImg.getAttribute('src');
    const bigImgAlt = bigImg.getAttribute('alt');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const src = thumbnail.getAttribute('src');
        const alt = thumbnail.getAttribute('alt');
        const currentBigImgSrc = bigImg.getAttribute('src');
        const currentBigImgAlt = bigImg.getAttribute('alt');
        
        bigImg.setAttribute('src', src);
        bigImg.setAttribute('alt', alt);
        thumbnail.setAttribute('src', currentBigImgSrc);
        thumbnail.setAttribute('alt', currentBigImgAlt);
      });
    });
  
    const backButton = document.getElementById('nazad-btn');
  
    backButton.addEventListener('click', () => {
      bigImg.setAttribute('src', bigImgSrc);
      bigImg.setAttribute('alt', bigImgAlt);
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.setAttribute('src', `slika${index + 2}.jpg`);
        thumbnail.setAttribute('alt', `Slika ${index + 2}`);
      });
  
      window.location.href = 'index.html';
    });
  });