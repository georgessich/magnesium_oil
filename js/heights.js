document.addEventListener('DOMContentLoaded', function() {
    adjustSectionHeight();
    window.addEventListener('resize', adjustSectionHeight);
  });
  
  function adjustSectionHeight() {
    var section = document.querySelector('.section');
    var contentHeight = document.querySelector('.content').offsetHeight;
    var windowHeight = window.innerHeight;
  
    var image = document.getElementById('dynamic-image');
    var imageHeight = windowHeight - contentHeight;
  
    section.style.height = windowHeight + 'px';
    image.style.height = imageHeight + 'px';
    console.log(imageHeight)
  }