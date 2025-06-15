document.addEventListener('DOMContentLoaded', function () {
    rozsvitTlacitko();
});

function rozsvitTlacitko() {
    document.getElementById("tlacitko_pesec").style.backgroundColor = "red";
}

function changeMoveImage(button) {
    const imageElement = document.getElementById("moves_img");
    const targetText = document.getElementById('moves_text');
    const elements = document.querySelectorAll('.tlacitko');

    elements.forEach(el => el.style.backgroundColor = "white");
    button.style.backgroundColor = "red";

    const pieces = {
        tlacitko_pesec: {
            text: 'Pěšci jsou neobvyklí v tom, že se pohybují jinak...',
            img: 'images/pesec.png'
        },
        tlacitko_kun: {
            text: 'Jezdcem se táhne úplně jinak než ostatními figurami...',
            img: 'images/kun.png'
        },
        tlacitko_dama: {
            text: 'Dáma je nejsilnější figura...',
            img: 'images/dama.png'
        },
        tlacitko_vez: {
            text: 'Věž se může pohybovat o libovolný počet polí...',
            img: 'images/vez.png'
        },
        tlacitko_strelec: {
            text: 'Střelec se může pohybovat libovolně daleko...',
            img: 'images/strelec.png'
        }
    };

    const selected = pieces[button.id];
    if (selected) {
        targetText.innerText = selected.text;
        imageElement.src = selected.img;
    }
}

function resetColors(selectors) {
    selectors.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.color = "black";
    });
}

function setColor(id) {
    const el = document.getElementById(id);
    if (el) el.style.color = "red";
}

function changeImage(galleryId, imageArray, moveIds, direction) {
    const imageElement = document.getElementById(galleryId);
    const currentSrc = imageElement.getAttribute("src");
    const currentIndex = imageArray.indexOf(currentSrc);

    if (currentIndex === -1) return;

    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= imageArray.length) newIndex = imageArray.length - 1;

    resetColors(moveIds);
    if (moveIds[newIndex]) setColor(moveIds[newIndex]);
    imageElement.src = imageArray[newIndex];
}

// Konkrétní galerie

function changeImageNext() {
    changeImage("londonIM",
        ["images/london0.jpeg", "images/london1.jpeg", "images/london2.jpeg", "images/london3.jpeg"],
        ["", "d4", "Nf3", "Bf4"],
        "next"
    );
}

function changeImageBack() {
    changeImage("londonIM",
        ["images/london0.jpeg", "images/london1.jpeg", "images/london2.jpeg", "images/london3.jpeg"],
        ["", "d4", "Nf3", "Bf4"],
        "back"
    );
}

function changeImageNextItaly() {
    changeImage("italyIM",
        ["images/italy0.jpeg", "images/italy1.jpeg", "images/italy2.jpeg", "images/italy3.jpeg"],
        ["", "e4", "Jf3", "Sc4"],
        "next"
    );
}

function changeImageBackItaly() {
    changeImage("italyIM",
        ["images/italy0.jpeg", "images/italy1.jpeg", "images/italy2.jpeg", "images/italy3.jpeg"],
        ["", "e4", "Jf3", "Sc4"],
        "back"
    );
}

function changeImageNextFrance() {
    changeImage("franceIM",
        ["images/france0.jpeg", "images/france1.jpeg"],
        ["", "e4-france"],
        "next"
    );
}

function changeImageBackFrance() {
    changeImage("franceIM",
        ["images/france0.jpeg", "images/france1.jpeg"],
        ["", "e4-france"],
        "back"
    );
}
