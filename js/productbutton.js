const buttonLeft = document.getElementById('button-left')
const buttonRight = document.getElementById('button-right')
const itemSteps = document.querySelector('.production__item-steps')


buttonLeft.addEventListener('click', () => {
    itemSteps.classList.toggle('process__active')
})

buttonRight.addEventListener('click', () => {
    itemSteps.classList.toggle('process__active')
})