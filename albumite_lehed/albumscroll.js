// Autoriks Ruslan Nišajev
// Ootab kuni veebileht on täielikult laaditud
window.addEventListener('load', function() {

    // Otsib elemendi, mille klass on "album-page"
    const albumSection = document.querySelector('.album-page');

    // Kui see element eksisteerib, skrollitakse leht automaatselt selle osani
    if (albumSection) {
        albumSection.scrollIntoView({ 
            behavior: 'smooth', // Skrollimine toimub sujuvalt
            block: 'start' // Skrollitakse nii, et element jääb lehe ülemisse ossa
        });
    }
});