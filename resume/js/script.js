// show menu 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav__link').forEach(n => n.
    addEventListener('click', () =>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))

// show menu end





// scroll section active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// scroll section active link end








// show scroll top

function scrollUp(){
	const scrollUp = document.getElementById('scroll-up')
	// when scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	this.scrollY >= 560 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// show scroll top end






// dark/light theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remote the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

// dark/light theme end







// draggable slider

const cardWrapper = document.querySelector('.card-wrapper')
const widthToScroll = cardWrapper.children[0].offsetWidth
const cardBounding = cardWrapper.getBoundingClientRect()
const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
let currScroll = 0
let initPos = 0
let clicked = false

cardImageAndLink.forEach(item=> {
  item.setAttribute('draggable', false)
})


cardWrapper.onmousedown = function(e) {
  cardWrapper.classList.add('grab')
  initPos = e.clientX - cardBounding.left
  currScroll = cardWrapper.scrollLeft
  clicked = true
}

cardWrapper.onmousemove = function(e) {
  if(clicked) {
    const xPos = e.clientX - cardBounding.left
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
  }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

function mouseUpAndLeave() {
  cardWrapper.classList.remove('grab')
  clicked = false
}

// draggable slider end





// filter
//selecting all required elements
const filterItem = document.querySelector('.portfolio__items');
const filterImg = document.querySelectorAll('.image');

window.onload = () => { // once window loaded
    filterItem.onclick = (selectedItem) => { //when user clicked on filterItem div
        if(selectedItem.target.classList.contains('item')){ //if user click element has .item class
            filterItem.querySelector('.active').classList.remove('active'); //remove the active class which is in the first element
            selectedItem.target.classList.add('active');// add that active class on the user selected element or item
            let filterName = selectedItem.target.getAttribute('data-name'); //getting data name value of the user selected item and storing in filtername variable
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute('data-name'); //getting image data-name value
                // if user selected item data name value is equal to image data-name value
                // or user selected item data name value is equal to 'all'
                if((filterImages == filterName) || filterName == 'all'){
                    image.classList.remove('hide');
                    image.classList.add('show');
                }else{
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            });
        }
    }
}





