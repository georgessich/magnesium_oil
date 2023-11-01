const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const itemSteps = document.querySelector('.production__item-steps');

let startX = 0;
let endX = 0;

itemSteps.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

itemSteps.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

itemSteps.addEventListener('touchend', () => {
    const deltaX = endX - startX;
    if (deltaX > 50) {
        // Свайп вправо
        itemSteps.classList.remove('process__active');
    } else if (deltaX < -50) {
        // Свайп влево
        itemSteps.classList.add('process__active');
    }
});

buttonLeft.addEventListener('click', () => {
    console.log('click')
    itemSteps.classList.toggle('process__active');
});

buttonRight.addEventListener('click', () => {
    console.log('click')
    itemSteps.classList.toggle('process__active');
});


// Получаем элемент с id "contacts"
const contactsSection = document.getElementById('contacts');

// Функция для проверки ширины экрана и управления видимостью элемента
function checkScreenWidth() {
    const docSliderInner = document.querySelector('.docSlider-inner');
    if (window.innerWidth > 725) {
        // Если ширина больше 725px, удаляем элемент из DOM
        if (contactsSection.parentNode) {
            contactsSection.parentNode.removeChild(contactsSection);
        }
    } else {
        // Если ширина меньше или равна 725px, добавляем элемент обратно в DOM
        if (!contactsSection.parentNode) {
            // Добавляем элемент обратно в конец body (или в другое место, если требуется)
            docSliderInner.appendChild(contactsSection);
        }
    }
}

// Проверяем ширину экрана сразу при загрузке страницы
checkScreenWidth();

// Добавляем обработчик события для изменения размера окна
window.addEventListener('resize', checkScreenWidth);
// Функция для инициализации docSlider.js, когда элемент "contacts" появляется в DOM
function initDocSlider() {
    // Проверяем, что docSlider еще не инициализирован
    if (typeof docSlider === 'undefined') {
        // Здесь вы можете добавить свои настройки инициализации, если необходимо
        docSlider.init();
    }
}

// Функция для проверки, когда элемент "contacts" появляется в DOM
function checkContactsAvailability() {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
        // Если элемент "contacts" существует, инициализируем docSlider.js
        initDocSlider();
    }
}

// Добавляем обработчик события DOMContentLoaded для проверки при загрузке страницы
document.addEventListener('DOMContentLoaded', checkContactsAvailability);

