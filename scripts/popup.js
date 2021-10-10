function showPopup(n){
    const elem = document.getElementById('member'+n);
    elem.classList.remove('invisible');
    elem.classList.add('visible');
    const background = document.querySelector('#popupHider');
    background.classList.remove('invisible');
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