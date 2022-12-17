const menuToggle =  document.querySelector('.menu_toggle')
const navigation =  document.querySelector('.navigation')

menuToggle.onclick = function(){
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}

navigation.addEventListener('click', function(){
	navigation.classList.remove('active');
	menuToggle.classList.remove('active');
})

window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
})