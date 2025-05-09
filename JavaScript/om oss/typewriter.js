document.addEventListener('DOMContentLoaded', function() {
    const text = "Møt teamet bak Cypada UB";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    
    function typing() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 150); // Endret fra 100 til 150 for å gjøre det tregere
        }
    }
    
    typing();
}); 