let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
    if (navlist.classList.contains("open")) {
        navlist.style.backgroundColor = "rgb(4, 4, 29)"; // Legger til mørke blå bakgrunn
    } else {
        navlist.style.backgroundColor = ""; // Fjerner bakgrunnsfargen
    }
}

const productSelect = document.getElementById("product");
const fileUploadContainer = document.getElementById("file-upload-container");
const fileInput = document.getElementById("file-upload");
const fileNameDisplay = document.getElementById("selected-file-name");

// Vis fil-opplasting når 3D Print er valgt
productSelect.addEventListener("change", function () {
    if (productSelect.value === "3D Print") {
        fileUploadContainer.style.display = "block";
    } else {
        fileUploadContainer.style.display = "none";
        fileInput.value = "";
        fileNameDisplay.textContent = "";
    }
});

// Vis filnavn når en fil er valgt
fileInput.addEventListener("change", function() {
    if (this.files && this.files.length > 0) {
        const file = this.files[0];
        fileNameDisplay.textContent = "Valgt fil: " + file.name;
    } else {
        fileNameDisplay.textContent = "";
    }
});

// Hent elementer
const fileUpload = document.getElementById('file-upload');
const fileInfo = document.querySelector('.file-info');
const selectedFileName = document.getElementById('selected-file-name');
const removeFileBtn = document.getElementById('remove-file');

// Vis filnavn når en fil er valgt
fileUpload.addEventListener('change', function() {
    if (this.files.length > 0) {
        selectedFileName.textContent = this.files[0].name;
        fileInfo.style.display = 'flex';
    } else {
        fileInfo.style.display = 'none';
    }
});

// Fjern fil når X klikkes
removeFileBtn.addEventListener('click', function() {
    fileUpload.value = ''; // Tømmer fil-inputen
    fileInfo.style.display = 'none';
    selectedFileName.textContent = '';
});

// Hent quantity input
const quantityInput = document.getElementById('quantity');

// Valider at antallet ikke kan være 0 eller negativt
quantityInput.addEventListener('change', function() {
    if (this.value <= 0) {
        this.value = 1;
    }
});

// Hindre at brukeren kan skrive inn negative tall
quantityInput.addEventListener('keypress', function(e) {
    if (e.key === '-' || e.key === '+') {
        e.preventDefault();
    }
});



productSelect.addEventListener('change', function() {
     this.options[0].disabled = true; // Deaktiverer "Velg et produkt" etter valg
});

function validateForm() {
    if (productSelect.value === "" || productSelect.value === "Velg et produkt") {
         alert("Vennligst velg et produkt før du sender inn skjemaet.");
         return false; // Forhindrer innsending av skjemaet
        }
        return true; // Tillater innsending av skjemaet
        }