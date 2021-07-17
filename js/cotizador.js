document.getElementById("calcular").addEventListener('click', resumen);

function resumen() {

    //Obtengo todos los valores, calculo los totales y los almaceno en variables para usarlos luego

    // Leo cantidad y precio de los pases por dia
    var totalPaseDia = document.getElementById("pase_dia").value * document.getElementsByName("boletos[un_dia][precio]")[0].value;

    // Leo cantidad y precio de los pases completos
    var totalPaseCompleto = document.getElementById("pase_completo").value * document.getElementsByName("boletos[completo][precio]")[0].value;

    // Leo cantidad y precio de los pases por dos dia
    var totalPaseDosDias = document.getElementById("pase_dosdias").value * document.getElementsByName("boletos[2dias][precio]")[0].value;

    // Leo cantidad y precio del extra camisa y aplico el descuento del 7%
    var totalExtraCamisa = (document.getElementById("camisa_evento").value * (document.getElementsByName("pedido_extra[camisas][precio]")[0].value) * .93);

    // Leo cantidad y precio del extra etiquetas
    var totalExtraEtiquetas = document.getElementById("etiquetas").value * document.getElementsByName("pedido_extra[etiquetas][precio]")[0].value;

    // Leo el regalo seleccionado
    var extraRegalo = document.getElementById("regalo").options[regalo.selectedIndex].text;

    // Calcuto el total de la compra
    var total = totalPaseDia + totalPaseCompleto + totalPaseDosDias + totalExtraCamisa + totalExtraEtiquetas;

    // Limpio el resumen para poder carlcular nuevamente si se realizan cambios sin refescar la pagina

    document.getElementById("ticket1").textContent = '';
    document.getElementById("ticket2").textContent = '';
    document.getElementById("ticket3").textContent = '';
    document.getElementById("camisa").textContent = '';
    document.getElementById("etiqueta").textContent = '';
    document.getElementById("obsequio").textContent = '';

    // Escribo el resumen y el total.

    // Resumen de la compra

    // Tickets de un dia
    if (totalPaseDia != 0) {
        document.getElementById("ticket1").textContent = document.getElementsByClassName("pases")[0].textContent + ': $' + totalPaseDia;
    }

    // Tickets completos
    if (totalPaseCompleto != 0) {
        document.getElementById("ticket2").textContent = document.getElementsByClassName("pases")[1].textContent + ': $' + totalPaseCompleto;
    }

    // Tickets de dos dias
    if (totalPaseDosDias != 0) {
        document.getElementById("ticket3").textContent = document.getElementsByClassName("pases")[2].textContent + ': $' + totalPaseDosDias;
    }

    // Camisas de acuerdo a la cantidad presento cantidad en plural o singular
    if (totalExtraCamisa != 0) {

        if (totalExtraCamisa == (document.getElementsByName("pedido_extra[camisas][precio]")[0].value) * .93) {

            document.getElementById("camisa").textContent = 'Camisa del Evento: $' + totalExtraCamisa;
        }

        else {

            document.getElementById("camisa").textContent = 'Camisas del Evento: $' + totalExtraCamisa;
        }
    }

    // Etiquetas
    if (totalExtraEtiquetas != 0) {
        document.getElementById("etiqueta").textContent = 'Paquete de 10 etiquetas: $' + totalExtraEtiquetas;
    }

    // Filtro el regalo para recordar que debe elegir uno
    if (total != 0) {
        if (document.getElementById("regalo").options[regalo.selectedIndex].value == 0) {

            document.getElementById("obsequio").textContent = 'Regalo seleccionado: Ninguno. No se entregara un regalo'
        }
        else {

            document.getElementById("obsequio").textContent = 'Regalo seleccionado: ' + extraRegalo;

        }
    }
    // Total
    document.getElementById("suma-total").textContent = '$ ' + total.toFixed(2);

}

