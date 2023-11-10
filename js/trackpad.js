let isScrolling = false;

function detectTrackPad(e) {
  if (!isScrolling) {
    let isTrackpad = false;
    if (e.wheelDeltaY) {
      if (e.wheelDeltaY === (e.deltaY * -3)) {
        isTrackpad = true;
      }
    } else if (e.deltaMode === 0) {
      isTrackpad = true;
    }
    if (isTrackpad) {
      isScrolling = true; 
      console.log("Трекпад работает");
      setTimeout(function () {
        isScrolling = false;
      }, 1000); 
    } else {
      console.log("Колесо мышки работает");
    }
  }
}
document.addEventListener("wheel", detectTrackPad, false);