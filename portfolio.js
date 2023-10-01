//Responsive Menu
const bar = document.querySelector('.bar');
const nav = document.getElementById('nav');

bar.addEventListener('click', function () {

    nav.classList.toggle('active');
    bar.classList.toggle('active');
})


//Typing text function
const textElement = document.getElementById('typing-text');
const textsToType = ["Dimas Nur Wicaksono"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (textIndex < textsToType.length) {
        if (charIndex < textsToType[textIndex].length) {
            textElement.textContent += textsToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }
}

function erase() {
    if (charIndex > 0) {
        const currentText = textsToType[textIndex];
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex++;
        if (textIndex >= textsToType.length) {
            textIndex = 0;
        }
        setTimeout(type, 1000);
    }
}

type();