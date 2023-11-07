document.addEventListener('wheel', function(event) {
    if (event.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
        // Событие вызвано прокруткой мыши, а не трекпадом
        console.log('Событие вызвано прокруткой мыши.');
        return;
    }

    // Событие вызвано движением трекпада
    console.log('Событие вызвано движением трекпада.');

    const deltaY = event.deltaY;
    if (deltaY > 0) {
        // Прокрутка вниз
        console.log('Прокрутка вниз');
        docSlider.nextPage();
    } else if (deltaY < 0) {
        // Прокрутка вверх
        console.log('Прокрутка вверх');
        docSlider.prevPage();
    }

    // Предотвращаем дополнительное прокручивание страницы
    event.preventDefault();
});