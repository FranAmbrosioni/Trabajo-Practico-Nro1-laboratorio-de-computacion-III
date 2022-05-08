//window.onload = iniciar();
/*iniciar();

function iniciar() 
{
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click",clickbtnCalcular);
    //return false;

}*/

function clickbtnCalcular() {
    let resultadoCalculo = new Array();
    let mF = 0;
    let porcentaje = 0;
    let texto = "";
    //let mF = 0;
    //let porcentaje = 0;
    changeIt1(texto);
    changeIt2(texto);
    changeIt3(texto);

    let txtNombre = document.getElementById("txtNombre");
    let Nombre = txtNombre.value;

    let txtMonto = document.getElementById("txtMonto");
    let Monto = txtMonto.value;

    let txtCantDias = document.getElementById("txtCantDias");
    let CantDias = txtCantDias.value;

    /*---------------------NOMBRE*/
    if (Nombre == "") {
        texto = "Nombre vacío o no válido";
        changeIt1(texto);

    }
   

    /*-----------------------MONTO*/
    if (isNaN(Monto)) {
        texto = "Valor no numérico";
        changeIt2(texto);

    }
    else {

        if (Monto < 1000) {
            texto = "El capital debe ser mayor o igual que $1000";
            changeIt2(texto);

        }
       
    }
    /*-----------------------CANTDIAS*/
    if (isNaN(CantDias)) {
        texto = "Valor no numérico";
        changeIt3(texto);
    }

    if (CantDias < 30) {
        texto = "La cantidad de días debe ser mayor o igual que 30 y menor o igual que 360";
        changeIt3(texto);

    }
    else {

        

        resultadoCalculo = Porcentaje(CantDias, Monto);
        mF = resultadoCalculo[0];
        porcentaje = resultadoCalculo[1];
        

    }

    //-------------------------------
    document.getElementById("tbMonto").style.visibility = 'hidden';
    let tablaReinvertir = document.getElementById("tableBody");
    tablaReinvertir.innerHTML = "";

    if (texto == "") {
        let chkReinvertir = document.getElementById("chkReinvertir");
        let reinvertir = chkReinvertir.checked;

        if (reinvertir == true) {
            document.getElementById("tbMonto").style.visibility = 'visible';
            let cont = 1;
            let interes = 0;

            while (cont < 5) {

                let fila = tablaReinvertir.insertRow();
                let periodo = fila.insertCell(0);
                periodo.innerHTML = cont;
                let mInicial = fila.insertCell(1);
                let mfinal = fila.insertCell(2);

                if (cont == 1) {
                    mInicial.innerHTML = Monto;
                    mfinal.innerHTML = mF.toFixed(2);
                    interes = mF - Monto;
                } else {
                    mInicial.innerHTML = mF.toFixed(2);
                    mF = parseInt(mF);
                    porcentaje = parseInt(porcentaje);
                    interes = parseInt(interes);
                    interes = ((porcentaje / 12) * mF) / 100;
                    mF = mF + interes;
                    mfinal.innerHTML = mF.toFixed(2);
                }
                cont++;
            }
        }
    }
}

function changeIt1(texto) {
    let CambioTexto = texto;
    document.getElementById('txtErrorNombre').innerHTML = CambioTexto;
}
function changeIt2(texto) {
    let CambioTexto = texto;
    document.getElementById('txtErrorMonto').innerHTML = CambioTexto;
}
function changeIt3(texto) {
    let CambioTexto = texto;
    document.getElementById('txtErrorDias').innerHTML = CambioTexto;
}

function Porcentaje(CantDias, Monto) {
    let montoFinal = 0;
    let porcentaje = 0
    Monto = parseInt(Monto);

    if (CantDias >= 30 && CantDias <= 60) {
        porcentaje = 40;
    }
    if (CantDias >= 61 && CantDias <= 120) {
        porcentaje = 45;
    }
    if (CantDias >= 121 && CantDias <= 360) {
        porcentaje = 50;
    }
    if (CantDias > 360) {
        porcentaje = 65;
    }
   
    montoFinal = Monto + Monto * ((CantDias / 360) * (porcentaje / 100)); 
    document.getElementById("PrimerCalculo").innerHTML= "Monto Incial: $" + Monto + "<br>Monto Final: $" + montoFinal + "<br>Con un Interes de: " + porcentaje + "%" + "<br>A " + CantDias + " dias.";
    

    return [montoFinal, porcentaje];


}