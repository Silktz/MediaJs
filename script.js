let media1 = prompt('Digite a sua primeira nota');
let media2 = prompt('Digite a sua segunda nota');
let media3 = prompt('Digite a sua terceira nota');
let media4 = prompt('Digite a sua quarta nota');

medianota = (Number(media1) + Number(media2) + Number(media3) + Number(media4)) / 4;



if (media1 < 0 || media1 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (media2 < 0 || media2 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (media3 < 0 || media3 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (media4 < 0 || media4 > 10) {
    alert('Digite notas entre 0 e 10');
}

else if (medianota < 5) {
    alert('Reprovado!')
}

else if (medianota) {
    alert('Aprovado!')
}

alert(`A média entre as notas foi: ${medianota}`)