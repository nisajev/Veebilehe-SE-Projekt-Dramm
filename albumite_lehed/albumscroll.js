window.addEventListener('load', function() {
    const albumSection = document.querySelector('.album-page');
    if (albumSection) {
        albumSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});