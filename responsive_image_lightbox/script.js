//selecting all required elements
const gallery = document.querySelectorAll('.gallery .image'),
previewBox = document.querySelector('.preview-box'),
previewImg = previewBox.querySelector('img'),
closeIcon = previewBox.querySelector('.icon'),
currentImg = previewBox.querySelector('.current-img'),
totalImg = previewBox.querySelector('.total-img'),
shadow = document.querySelector('.shadow');


window.onload = () => { //once window loaded
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; // passing gallery images length to totalImg
        let newIndex = i; // passing i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            
            clickImgIndex = newIndex; //passing clicked img index to clickImgIndex variable
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg
                let selectedImgUrl = gallery[newIndex].querySelector('img').src //getting user clicked image url
                previewImg.src = selectedImgUrl //passing user clicked img url to previewImg source
                
            }

            // work on previous and next 
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            if(newIndex == 0){
                prevBtn.style.display = 'none';
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = 'none';
            }
            prevBtn.onclick = ()=>{
                newIndex--; //decrement newIntexvalue
                if(newIndex == 0){
                    preview(); //calling again above function to update image
                    prevBtn.style.display = 'none';
                }else{
                    preview(); //calling again above function to update image
                    nextBtn.style.display = 'block';
                }
            }

            nextBtn.onclick = ()=>{
                newIndex++; //increment newIntexvalue
                if(newIndex >= gallery.length - 1){
                    preview(); //calling again above function to update image
                    nextBtn.style.display = 'none';
                }else{
                    preview(); //calling again above function to update image
                    prevBtn.style.display = 'block';
                }
            }

            preview() //calling above function
            previewBox.classList.add('show')
            shadow.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';

            closeIcon.onclick =()=>{
                newIndex = clickImgIndex; //assining user first click ing index to newIndex variable
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
                previewBox.classList.remove('show')
                shadow.style.display = 'none';
                document.querySelector('body').style.overflow = 'auto';
            }
        }
    }
}
