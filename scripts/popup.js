function showPopup(n){
    const elem = document.querySelectorAll('.popup')[n-1];
    elem.classList.add('visible');
    const background = document.getElementById('popupHider');
    background.classList.add('visible');
    console.log('popup');
}

function hidePopup(){
    const elem = document.querySelector('.visiblePopup');
    elem.classList.remove('visible');
    const background = document.getElementById('popupHider');
    background.classList.remove('visible');
    console.log('popup-');
}