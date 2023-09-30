const diceEl = document.querySelector('.dice')
if (diceEl) {
let side = 1;
const changeSide = () => {
    if (side > 5) {
        side = 1;
    } else {
        side += 1;
    }
    diceEl.src = `img/side${side}.svg`;
};
document.addEventListener('keydown', changeSide);
}
