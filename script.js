window.onload = iniciar;

function iniciar() 
{
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click",clickbtnCalcular);

}

function clickbtnCalcular() 
{
    let Validar = true;
    let txtNombre = document.getElementById("txtNombre");
    let Nombre = txtNombre.value;

    let txtMonto = document.getElementById("txtMonto");
    let Monto = txtMonto.value;

    let txtCantDias = document.getElementById("txtCantDias");
    let CantDias = txtCantDias.value;
    
    /*if (Nombre == '' || Monto<=1000 || CantDias<30)
    {
        alert("Campos Vacios o Incorrectos");

    }*/
    if (Monto <=1000)
    {
        alert("El monto debe ser mayor o igual que $1000");
        Validar=false;
        
    }
    if (CantDias<30)
    {
        alert("La cantidad de dias debe ser igual o superior a 30");
        Validar=false;
    }
    if (Validar)
    {
        alert("Los datos Ingresados son Correctos");
    }
    else
    {
        Validar=false;
        
    }
}
