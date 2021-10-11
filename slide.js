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
    
    updateRound();
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

    updateRound();
    resetTimer();
}

function slideGoto(n){
    n--;
    while(slideIndex>n){
        slideprev();
    }
    while(slideIndex<n){
        slidenext();
    }

    
}

function resetTimer(){
    clearInterval(interval);
    interval=setInterval(slidenext,10000);
}

function updateRound(){
    const rounds=document.querySelectorAll(".round");
    for(let i=0;i<slideCount;i++){
        if(i==slideIndex){
            rounds[i].classList.add('selected');
        }
        else{
            rounds[i].classList.remove('selected');
        }
    }
}

interval=setInterval(slidenext,10000);
