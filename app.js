function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeTextColor() {
    h1.style.color = generateRandomColor();
}

function checkBg() {
    generateRandomColor();
    changeTextColor();
}
setInterval(checkBg, 1000);

function audio1() {
    document.getElementById('correct-audio').onplay();
}