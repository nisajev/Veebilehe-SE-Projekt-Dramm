// Autoriks Ruslan Nišajev
// Valime kõik albumi elemendid, millel on klass "album"
const albums = document.querySelectorAll(".album");

// Käime iga albumi läbi ja lisame klikku kuulates
albums.forEach(album => {

    // Kui kasutaja klikib albumil, käivitatakse see funktsioon
    album.addEventListener("click", function() {

            // Võtame HTML elemendilt data-page atribuudi (selles on lingileht)
        const page = album.dataset.page;

        // Kui albumil on lisatud aadress, liigume sellele lehele
        if (page) {
            window.location.href = page;

        // Kui linki ei ole, teavitame kasutajat
        } else {
            alert("Selle albumi leht ei ole veel tehtud!");
        }
    });
});