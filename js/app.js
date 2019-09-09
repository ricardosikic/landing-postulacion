// creo una variable que contenga un tipo de dato numero en 1
let slideIndex = 1;
// la funcion slideIndex recibe como parametro slideIndex
displaySlides(slideIndex);

let icon = document.getElementById('nav-icon');
let nav = document.getElementById('nav');


let dot1 = document.getElementById('dots1');
let dot2 = document.getElementById('dots2');
let dot3 = document.getElementById('dots3');



dot1.addEventListener('click', () => next(1));
dot2.addEventListener('click', () => next1(2));
dot3.addEventListener('click', () => next2(3));


function next(n) {
    displaySlides(slideIndex = n);
}

function next1(n) {
    displaySlides(slideIndex = n);
}


function next2(n) {
    displaySlides(slideIndex = n);
}



function displaySlides(n) {
    let sliders = document.getElementsByClassName('sliders');

    for(i = 0; i < sliders.length; i ++) {
        sliders[i].style.display = 'none';
    }

    sliders[slideIndex - 1].style.display = 'block';
}

// nav icon

icon.addEventListener('click', () => {
    icon.classList.toggle("change");
    nav.classList.toggle("icon-class");
    console.log('click')
  });