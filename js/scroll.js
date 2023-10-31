const sections = document.querySelectorAll('.section');

let currentSection = 0;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
});
