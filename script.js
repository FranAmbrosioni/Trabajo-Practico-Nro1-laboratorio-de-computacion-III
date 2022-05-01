window.onload = iniciar;

function iniciar() 
{
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click",clickbtnCalcular);

}

function clickbtnCalcular() 
{
    let Validar = true;
    let Validarvariable;
    let txtNombre = document.getElementById("txtNombre");
    let Nombre = txtNombre.value;

    let txtMonto = document.getElementById("txtMonto");
    let Monto = txtMonto.value;

    let txtCantDias = document.getElementById("txtCantDias");
    let CantDias = txtCantDias.value;
    
    /*---------------------NOMBRE*/
    if(Nombre == "")
    {
        alert(" Vacio");
    }
    else
    {
        alert(Nombre);
    }
    /*------------------------------*/

    /*-----------------------monto*/
    if(isNaN(Monto))
    {
        alert("NaN");
    }
    else
    {
        alert(Monto);
        if(Monto>=1000)
        {
            alert("monto correcto");
        }
        else
        {
            alert("El capital debe ser mayor o igual que $1000");
        }
    }
    /*-----------------------CANTDIAS*/
    if(isNaN(CantDias))
    {
    alert("NaN");
    }
    else
    {
    if(CantDias>=30 )
    {
        alert("Dias correctos");
        Porcentaje();
    }
    else
    {
        alert("La cantidad de dias debe ser mayor o igual que 30 y menor o igual que 360");
    }
    }

    
}

function Porcentaje()
{
    let montoFinal = 0;
    let porcentaje = 0
    if(CantDias >=30 && CantDias<=60)
    {   
        porcentaje = 40;
        montoFinal = Monto + Monto *((CantDias/360) * (porcentaje/100));
    }
    if(CantDias >=61 && CantDias<=120)
    {   
        porcentaje = 45;
        montoFinal = Monto + Monto *((CantDias/360) * (porcentaje/100));
    }
    if(CantDias >=121 && CantDias<=360)
    {   
        porcentaje = 50;
        montoFinal = Monto + Monto *((CantDias/360) * (porcentaje/100));
    }
    if(CantDias >360)
    {   
        porcentaje = 65;
        montoFinal = Monto + Monto *((CantDias/360) * (porcentaje/100));
    }
    


}
/*if (Nombre == '' || Monto<=1000 || CantDias<30)
    {
        alert("Campos Vacios o Incorrectos");

        if(Monto === 'number')
        {
        debugger;
            if(Monto >=1000)
        {
            alert("El monto es: $" + Monto);
        }
            else
        {
            Validar=false;
            alert("El monto debe ser mayor o igual que $1000");
        }
        }
        else
        {
            Validar= false
            alert("El dato ingresado debe ser un numero");
        }
        
        
    
    
    if (CantDias<30)
    {
        alert("La cantidad de dias debe ser igual o superior a 30");
        Validar=false;
    }
    }
    /*if (Validar)
    {
        alert("Los datos Ingresados son Correctos");
    }
    else
    {
        Validar=false;
        
    }*/