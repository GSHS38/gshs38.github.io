let interval;
let slideIndex=0;
const slides= document.getElementsByClassName("slide");
const slideCount = slides.length;

function keydown(e){
    if(e.code=='ArrowLeft'){
        slideprev();
    }
    if(e.code=='ArrowRight'){
        slidenext();
    }
}

function slidenext(){
    slides[slideIndex].classList.remove('show');
    slides[slideIndex].classList.add('hide');
    slideIndex++;
    if(slideIndex>=slideCount){
        slideIndex=0;
        for(let i=0;i<slideCount;i++){
            slides[i].classList.remove('hide');
        }
    }
    slides[slideIndex].classList.add('show');

    resetTimer();
}


function slideprev(){
    slides[slideIndex].classList.remove('show');

    slideIndex--;
    if(slideIndex<0) {
        slideIndex=slideCount-1;
        for(let i=0;i<slideCount;i++){
            slides[i].classList.add('hide');
        }
    }
    slides[slideIndex].classList.add('show');
    slides[slideIndex].classList.remove('hide');

    resetTimer();
}


function resetTimer(){
    clearInterval(interval);
    interval=setInterval(slidenext,10000);
}


interval=setInterval(slidenext,10000);