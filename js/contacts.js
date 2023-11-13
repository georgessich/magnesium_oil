
const contactsSection = document.getElementById('contacts');


function checkScreenWidth() {
    const docSliderInner = document.querySelector('#fullpage');
    if (window.innerWidth > 725) {
       
        if (contactsSection.parentNode) {
            contactsSection.parentNode.removeChild(contactsSection);
        }
    } else {
    
        if (!contactsSection.parentNode) {
            
            docSliderInner.appendChild(contactsSection);
        }
    }
}


checkScreenWidth();


window.addEventListener('resize', checkScreenWidth);

// function initDocSlider() {
    
//     if (typeof docSlider === 'undefined') {
      
//         docSlider.init();
//     }
// }


// function checkContactsAvailability() {
//     const contactsSection = document.getElementById('contacts');
//     if (contactsSection) {
       
//         initDocSlider();
//     }
// }


document.addEventListener('DOMContentLoaded', checkContactsAvailability);