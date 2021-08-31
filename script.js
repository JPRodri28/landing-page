function expandir() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnseta = document.getElementById("btnseta");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnseta.innerHTML = "⬇";
        
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnseta.innerHTML = "⬆";
    }
    
}