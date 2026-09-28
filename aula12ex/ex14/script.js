function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'pexels-tomfisk-27629635.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'pexels-maria-fernanda-fotografia-333886702-14527157.jpg';
        document.body.style.background = '#dd841d';
    } else {
        // Boa noite!
        img.src = 'pexels-adem-albayrak-383796555-39618470.jpg';
        document.body.style.background = '#181953';
    }
}
