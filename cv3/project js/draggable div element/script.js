const wrapper = document.querySelector('.wrapper'),
header = wrapper.querySelector('header');

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left); // get left value of wrapper and parsing string to integer or number
    let top = parseInt(getStyle.top); // get top value of wrapper and parsing string to integer or number
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`

}

header.addEventListener('mousedown', ()=>{
    header.classList.add('active')
    header.addEventListener('mousemove', onDrag);
})
document.addEventListener('mouseup', ()=>{
    header.classList.remove('active')
    header.removeEventListener('mousemove', onDrag);
})