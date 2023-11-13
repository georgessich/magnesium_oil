// document.addEventListener("wheel", function (event) {
//   const normalized = normalizeWheel(event);

//   console.log(normalized.pixelX, normalized.pixelY);
// });

var hammer = new Hammer(document.body);
var swipeInProgress = false;

hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

hammer.on('panleft panright panup pandown press tap swipe', function (e) {
    if (!swipeInProgress) {
        e.preventDefault();


        console.log('Enabling docSlider before swipe');
        docSlider.enable(true);

     
        console.log('Swiped!');

      
        swipeInProgress = true;

      
        setTimeout(function () {
            swipeInProgress = false;

           
            console.log('Disabling docSlider after swipe');
            docSlider.enable(false);

      
            setTimeout(function () {
            
                console.log('Enabling docSlider after timeout');
                docSlider.enable(true);
            }, 1000);
        }, 500);
    }
});