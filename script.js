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
            img: 'obrazky/pesec.png'
        },
        tlacitko_kun: {
            text: 'Jezdcem se táhne úplně jinak než ostatními figurami...',
            img: 'obrazky/kun.png'
        },
        tlacitko_dama: {
            text: 'Dáma je nejsilnější figura...',
            img: 'obrazky/dama.png'
        },
        tlacitko_vez: {
            text: 'Věž se může pohybovat o libovolný počet polí...',
            img: 'obrazky/vez.png'
        },
        tlacitko_strelec: {
            text: 'Střelec se může pohybovat libovolně daleko...',
            img: 'obrazky/strelec.png'
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
        ["obrazky/london0.jpeg", "obrazky/london1.jpeg", "obrazky/london2.jpeg", "obrazky/london3.jpeg"],
        ["", "d4", "Nf3", "Bf4"],
        "next"
    );
}

function changeImageBack() {
    changeImage("londonIM",
        ["obrazky/london0.jpeg", "obrazky/london1.jpeg", "obrazky/london2.jpeg", "obrazky/london3.jpeg"],
        ["", "d4", "Nf3", "Bf4"],
        "back"
    );
}

function changeImageNextItaly() {
    changeImage("italyIM",
        ["obrazky/italy0.jpeg", "obrazky/italy1.jpeg", "obrazky/italy2.jpeg", "obrazky/italy3.jpeg"],
        ["", "e4", "Jf3", "Sc4"],
        "next"
    );
}

function changeImageBackItaly() {
    changeImage("italyIM",
        ["obrazky/italy0.jpeg", "obrazky/italy1.jpeg", "obrazky/italy2.jpeg", "obrazky/italy3.jpeg"],
        ["", "e4", "Jf3", "Sc4"],
        "back"
    );
}

function changeImageNextFrance() {
    changeImage("franceIM",
        ["obrazky/france0.jpeg", "obrazky/france1.jpeg"],
        ["", "e4-france"],
        "next"
    );
}

function changeImageBackFrance() {
    changeImage("franceIM",
        ["obrazky/france0.jpeg", "obrazky/france1.jpeg"],
        ["", "e4-france"],
        "back"
    );
}
