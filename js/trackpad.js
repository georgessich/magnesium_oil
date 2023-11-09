let isScrolling = false;

document.addEventListener('wheel', function (event) {
    if (isScrolling) return;
    isScrolling = true;
    setTimeout(function () {
        isScrolling = false;
    }, 100);

    if (event.deltaMode !== 0) {
        event.preventDefault();
        const maxScrollDelta = 200;
        const deltaY = event.deltaY > 0 ? Math.min(event.deltaY, maxScrollDelta) : Math.max(event.deltaY, -maxScrollDelta);
        const direction = deltaY > 0 ? 'next' : 'prev';
        const to = direction === 'next' ? docSlider.getCurrentIndex() + 1 : docSlider.getCurrentIndex() - 1;
        if ((direction === 'next' && to >= docSlider.getElements().pages.length) ||
            (direction === 'prev' && to < 0)) {
            return;
        }
        if (direction === 'next') {
            docSlider.nextPage();
        } else {
            docSlider.prevPage();
        }
    }
});