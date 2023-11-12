 
document.addEventListener('wheel', function (event) {
    const normalized = normalizeWheel(event);
 
    console.log(normalized.pixelX, normalized.pixelY);
});

