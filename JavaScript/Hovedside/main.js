const header = document.querySelector('header');
const velkommenTekst = document.getElementById('velkommen-tekst');

function sjekkOverlapping() {
    const tekstElement = document.getElementById('tekst-element-id'); // Erstatt med riktig ID
    if (!tekstElement) {
        console.warn('Elementet med ID "tekst-element-id" ble ikke funnet.');
        return; // Avslutt funksjonen hvis elementet ikke finnes
    }
    const tekstRect = tekstElement.getBoundingClientRect(); // Henter rektangelet til elementet

    const headerRect = header.getBoundingClientRect();
    const overgangsAvstand = 50; // Juster denne verdien for å endre overgangslengden

    const avstand = tekstRect.top - headerRect.bottom;
    
    if (avstand < overgangsAvstand) {
        const opasitet = avstand / overgangsAvstand;
        velkommenTekst.style.opacity = Math.max(opasitet, 0);
    } else {
        velkommenTekst.style.opacity = '1';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    sjekkOverlapping(); // Kjør ved lasting av siden
    window.addEventListener('scroll', sjekkOverlapping);
    window.addEventListener('resize', sjekkOverlapping);
});

// ... eksisterende kode ...

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const tjenesterOverskrift = document.getElementById('tjenester-overskrift');
    
    function sjekkOverskriftSynlighet() {
        const headerBottom = header.getBoundingClientRect().bottom;
        const overskriftTop = tjenesterOverskrift.getBoundingClientRect().top;
        const avstand = overskriftTop - headerBottom;
        const overgangsAvstand = 100; // Juster denne verdien for å endre overgangslengden
        
        if (avstand < overgangsAvstand) {
            const opasitet = avstand / overgangsAvstand;
            tjenesterOverskrift.style.opacity = Math.max(opasitet, 0);
        } else {
            tjenesterOverskrift.style.opacity = '1';
        }
    }
    
    window.addEventListener('scroll', sjekkOverskriftSynlighet);
    // Kjør funksjonen én gang ved lasting for å sette initial tilstand
    sjekkOverskriftSynlighet();

    
});

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Forhindre standard oppførsel
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Rull til seksjonen med jevn animasjon
}

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
        const acceleration = event.acceleration;
        console.log('Accelerasjon:', acceleration);
    });
} else {
    console.warn('DeviceMotionEvent støttes ikke i denne nettleseren.');
}