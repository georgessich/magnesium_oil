let lastScrollTime = 0;
let lastScrollDistance = 0;
const minScrollDistance = 50;

document.addEventListener('wheel', function(event) {
    if (event.deltaMode !== 0) {
        event.preventDefault();

        const now = new Date().getTime();
        const deltaTime = now - lastScrollTime;
        lastScrollTime = now;

        const deltaY = event.deltaY;
        const direction = deltaY > 0 ? 'next' : 'prev';
        const scrollDistance = Math.abs(deltaY);

        if (deltaTime > 100 || scrollDistance > lastScrollDistance) {
            // Прокрутка на одну страницу, если прошло достаточно времени
            // или расстояние прокрутки больше минимального значения
            const to = direction === 'next' ? docSlider.getCurrentIndex() + 1 : docSlider.getCurrentIndex() - 1;

            if (to >= 0 && to < docSlider.getElements().pages.length) {
                // Проверка на граничные страницы
                if (direction === 'next') {
                    docSlider.nextPage();
                } else {
                    docSlider.prevPage();
                }
            }
            lastScrollDistance = scrollDistance;
        }
    }
});