window.onload = function() {
    // Show popup and disable scrolling & animations
    document.getElementById("popup-overlay").style.display = "flex";
    document.body.classList.add("no-scroll", "no-animate");
};

document.getElementById("alert-btn").addEventListener("click", function() {
    var music = document.getElementById("bg-music");

    // Try to play music
    music.play().then(() => {
        music.muted = false; // Unmute after playing starts
    }).catch((error) => {
        console.log("Autoplay blocked:", error);
    });

    // Hide the popup, enable scrolling & resume animations
    document.getElementById("popup-overlay").style.display = "none";
    document.body.classList.remove("no-scroll", "no-animate");
});



    function dates() {
        var x = new Date("May 12 2023 18:32:00");
        var y = new Date();
        let seconds = Math.abs(x - y)/1000;

        var day = seconds / (24 * 3600);

        hh = seconds % (24 * 3600);
        var hour = hh / 3600;
    
        hh %= 3600;
        var minutes = hh / 60 ;
    
        hh %= 60;
        var rseconds = hh;

        document.getElementById('days').innerHTML = parseInt(day);
        document.getElementById('hours').innerHTML = parseInt(hour);
        document.getElementById('minutes').innerHTML = parseInt(minutes);
        document.getElementById('seconds').innerHTML = parseInt(rseconds);
    }

    setInterval(dates, 1000);

    function cardSelected(selectedCard) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (card === selectedCard) {
                card.classList.remove('fade-out');
                card.classList.add('show');
            } else {
                card.classList.add('fade-out'); 
                card.classList.remove('show');
            }
        });
    }