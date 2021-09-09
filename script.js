
window.addEventListener("scroll", function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 80);
})

function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

var number = 1;

mostraSlide(number);

function adicionarSlide(n){
    mostraSlide(number += n);
}

function atualSlide (n){
    mostraSlide(number = n);
}

function mostraSlide(n){
    var i;
    var slides = document.getElementsByClassName("mySlidefade");
    var pontos = document.getElementsByClassName("ponto");

    if(n > slides.length ){
        number = 1;
    }

    if(n < 1) {
        number = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0 ; i < pontos.length; i++){
        pontos[i].className = pontos[i].className.replace("active","");
     }
     slides[number-1].style.display = "block";
     pontos[umber-1].className += "active";
}