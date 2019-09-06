// creo una variable que contenga un tipo de dato numero en 1
let slideIndex = 1;
// la funcion slideIndex recibe como parametro slideIndex
displaySlides(slideIndex);


let dot1 = document.getElementById('dots1');



function displaySlides(n) {
    let sliders = document.getElementsByClassName('sliders');
    if (n > sliders.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = sliders.length}
    for(i = 0; i < sliders.length; i ++) {
        sliders[i].style.display = 'none';
    }

    sliders[slideIndex - 1].style.display = 'block';
}



