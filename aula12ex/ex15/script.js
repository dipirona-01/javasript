function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    // Criança
                    img.setAttribute('src', 'bebeh.png')
                } else if (idade < 50) {
                    // Jovem
                    img.setAttribute('src', 'homem.png')
                } else if (idade < 400) {
                    // Adulto
                    img.setAttribute('src', 'idoso.png')
                }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 50) {
                // Jovem
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 400) {
                // Adulto
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
