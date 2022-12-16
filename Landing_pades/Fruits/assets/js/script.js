let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}

// change image on click
function imgSlider(anything){
    document.querySelector('.fruits').src = anything;
}

// change background on click
function changeBgColor(color){
    const bg = document.querySelector('.bg');
    bg.style.backgroundColor = color;
}


// add active in selected thmbnails
let el = document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++){
    el[i].onclick = function(){
        var c = 0;
        while(c < el.length){
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}