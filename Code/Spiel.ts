const C = document.getElementById("CPU");
const U = document.getElementById("User");
const q = document.getElementById("res");
const rundeButton = document.getElementById('rundeButton');
const meineSection = document.getElementById('meineSection');
const glu = document.getElementById("Glumanda");
const Schi = document.getElementById("Schiggy");
const Bis = document.getElementById("Bisasam");


let Computerwins = 0;
let wins = 0;
let result: string;
function wählen(wahl : string) {
    const choices = ['Feuer', 'Pflanze', 'Wasser'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (wahl == computerChoice) {
        result = "Unentschieden!";
    } else if ((wahl == 'Feuer' && computerChoice == 'Pflanze') ||
        (wahl == 'Wasser' && computerChoice == 'Feuer') ||
        (wahl == 'Pflanze' && computerChoice == 'Wasser')) {
        result = "Du hast gewonnen!";
        wins += 1;
    } else {
        result = "Der Computer hat gewonnen!";
        Computerwins += 1;
    }
    if(q != null) {
        q.textContent = " Wahl vom Computer ist : " + computerChoice + "  " + result;
        if (U != null) {
            U.textContent = `User-Wins:${wins}`;
        }
        if (C != null) {
            C.textContent = `CPU-Wins:${Computerwins}`;
        }
        if (meineSection)
            if (meineSection.style.display == 'none') {
                meineSection.style.display = 'block';
            }
    }
}
if (rundeButton)
rundeButton.addEventListener('click', () => {
    if (meineSection) {
        meineSection.style.display = 'none';
    }
    if (glu != null && Bis != null && Schi != null) {
        if (glu.style.display == 'none') {
            glu.style.display = 'block';
        }
        if (Bis.style.display == 'none') {
            Bis.style.display = 'block';
        }
        if (Schi.style.display == 'none') {
            Schi.style.display = 'block';
        }
    }
});






