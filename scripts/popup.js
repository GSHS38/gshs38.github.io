function showPopup(n){
    const elem = document.querySelectorAll('.popup')[n-1];
    elem.classList.add('visible');
    const background = document.querySelector('#popupHider');
    background.classList.add('visible');
}

function hidePopup(){
    const elem = document.querySelector('.visible.popup');
    elem.classList.remove('visible');
    elem.classList.add('invisible');
    const background = document.querySelector('#popupHider');
    background.classList.remove('visible');
    background.classList.add('invisible');
}