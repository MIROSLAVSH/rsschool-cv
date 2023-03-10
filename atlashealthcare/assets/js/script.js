// /*=============== SHOW MENU ===============*/

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


// header bg
window.addEventListener('scroll', function(){
	const header = document.querySelector('.header');
	header.classList.toggle('header_active', window.scrollY > 0); 
});
