// let isScrolling = false;

// function detectTrackPad(e) {
//   if (!isScrolling) {
//     let isTrackpad = false;
//     if (e.wheelDeltaY) {
//       if (e.wheelDeltaY === (e.deltaY * -3)) {
//         isTrackpad = true;
//       }
//     } else if (e.deltaMode === 0) {
//       isTrackpad = true;
//     }
//     if (isTrackpad) {
//       isScrolling = true; 
//       console.log("Трекпад работает");
//       setTimeout(function () {
//         isScrolling = false;
//       }, 1000); 
//     } else {
//       console.log("Колесо мышки работает");
//     }
//   }
// }
// document.addEventListener("wheel", detectTrackPad, false);

// let isScrolling = false;
// let startX;

// document.addEventListener('touchstart', function (e) {
//   startX = e.touches[0].clientX;
//   console.log('Touch Start: X=' + startX);
// });

// document.addEventListener('touchmove', function (e) {
//   let currentX = e.touches[0].clientX;
//   let distance = Math.abs(currentX - startX);

//   console.log('Touch Move: X=' + currentX + ', Distance=' + distance);

//   if (!isScrolling && distance > 10) {

//     console.log('Прокрутка на тачпаде начата');

//     docSlider.enable(false)

//     setTimeout(function () {
//       isScrolling = false;
      
//       console.log('Прокрутка на тачпаде завершена');
//     }, 5000);
//     docSlider.enable(true)
//   }



//   startX = currentX;
// });

document.addEventListener('touchmove', async function (e) {
  let currentX = e.touches[0].clientX;
  let distance = Math.abs(currentX - startX);

  console.log('Touch Move: X=' + currentX + ', Distance=' + distance);

  if (!isScrolling && distance > 10) {
    console.log('Прокрутка на тачпаде начата');
    
    // Блокировка
    docSlider.enable(false);

    // Асинхронная задержка
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Разблокировка
    docSlider.enable(true);

    isScrolling = false;
    console.log('Прокрутка на тачпаде завершена');
  }

  startX = currentX;
});