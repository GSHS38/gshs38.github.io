
var slide_index=0;
function slidenext(){
    slide_index++;
    if(slide_index>=4)slide_index=0;
    slideupdate();
}


function slideprev(){
    slide_index--;
    if(slide_index<0) slide_index=3;
    slideupdate();
}


function slideupdate(){
    var slides= document.getElementsByClassName("slide");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slide_index].style.display="block";
}


slideupdate();