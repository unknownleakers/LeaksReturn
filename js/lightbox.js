function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const downloadBtn = document.getElementById('download-btn');
  const shareBtn = document.getElementById('share-btn');

  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
  downloadBtn.href = img.src;

  shareBtn.onclick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this photo',
        url: img.src
      }).catch((err) => console.error('Share failed:', err));
    } else {
      alert('Sharing not supported. Copy this URL:\n' + img.src);
    }
  };
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
