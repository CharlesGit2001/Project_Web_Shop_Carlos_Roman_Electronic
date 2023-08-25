console.log("¡Hola Mundo!");
/*Programa de cambiar imagenes*/
window.onload=function() {
  //Se obtiene el codigo siguiente 
  //Se va  adelante Monitor1
  var siguienteMonitor1 = document.getElementById("adelanteMonitor1");
  //Se registra el evento
  siguienteMonitor1.addEventListener("click",verSiguienteMonitor1);

  //Funcion que maneja el cambio de imagenes
  //Cuando el usuario da click en el icono siguiente
  function verSiguienteMonitor1() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto1")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor1/MSIMONITOR.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor1/MSIMONITOR.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor1/MSIMONITOR.jpg";
  }
    //Se obtiene el codigo siguiente 
  //Se va atras Monitor1
  var atrasMonitor1 = document.getElementById("atrasMonitor1");
  //Se registra el evento
  atrasMonitor1.addEventListener("click",veratrasMonitor1);
  //Funcion
    function veratrasMonitor1() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto1")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor1/MSIMONITOR.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor1/MSI1.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor1/MSIMONITOR.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor1/MSIMONITOR.jpg";
  }

//---------------------MONITOR2----------------

    var siguienteMonitor2 = document.getElementById("adelanteMonitor2");
  //Se registra el evento
  siguienteMonitor2.addEventListener("click",verSiguienteMonitor2);

  //Funcion que maneja el cambio de imagenes
  //Cuando el usuario da click en el icono siguiente
  function verSiguienteMonitor2() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto2")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor2/MONITORSAMSUNG1.0.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor2/MONITORSAMSUNG1.0.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor2/MONITORSAMSUNG1.0.jpg";
  }
    //Se obtiene el codigo siguiente 
  //Se va atras Monitor1
  var atrasMonitor2 = document.getElementById("atrasMonitor2");
  //Se registra el evento
  atrasMonitor2.addEventListener("click",veratrasMonitor2);
  //Funcion
    function veratrasMonitor2() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto2")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor2/MONITORSAMSUNG1.0.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor2/SAMSUNG2.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor2/MONITORSAMSUNG1.0.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor2/MONITORSAMSUNG1.0.jpg";
  }
  
//----MONITOR3--------

    var siguienteMonitor3 = document.getElementById("adelanteMonitor3");
  //Se registra el evento
  siguienteMonitor3.addEventListener("click",verSiguienteMonitor3);

  //Funcion que maneja el cambio de imagenes
  //Cuando el usuario da click en el icono siguiente
  function verSiguienteMonitor3() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto3")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor3/Spectre.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor3/Spectre.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor3/Spectre.jpg";
  }
    //Se obtiene el codigo siguiente 
  //Se va atras Monitor1
  var atrasMonitor3 = document.getElementById("atrasMonitor3");
  //Se registra el evento
  atrasMonitor3.addEventListener("click",veratrasMonitor3);
  //Funcion
    function veratrasMonitor3() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto3")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor3/Spectre.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor3/SCEPTRE3.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor3/Spectre.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor3/Spectre.jpg";
  }
  

//-------MONITOR4-------------
  

    var siguienteMonitor4 = document.getElementById("adelanteMonitor4");
  //Se registra el evento
  siguienteMonitor4.addEventListener("click",verSiguienteMonitor4);

  //Funcion que maneja el cambio de imagenes
  //Cuando el usuario da click en el icono siguiente
  function verSiguienteMonitor4() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto4")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor4/Gigabyte.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor4/Gigabyte.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor4/Gigabyte.jpg";
  }
    //Se obtiene el codigo siguiente 
  //Se va atras Monitor1
  var atrasMonitor4 = document.getElementById("atrasMonitor4");
  //Se registra el evento
  atrasMonitor4.addEventListener("click",veratrasMonitor4);
  //Funcion
    function veratrasMonitor4() {
      //Aqui va el codigo de la función
    var aux = document.getElementById("producto4")
    var ruta = aux.src;
    if (ruta.includes('imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor4/Gigabyte.jpg'))
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.2.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.2.jpg'))  
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.3.jpg"; 
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.3.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.4.jpg";
else if(ruta.includes('imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Monitores/Monitor4/GIGA4.4.jpg')) 
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor4/Gigabyte.jpg";
else
aux.src="imagenes/2daPagina(TIENDA)/Categorias/Monitores/Monitor4/Gigabyte.jpg";
  }
  

//LAPTOP1

document.getElementById("laptop_1.1").addEventListener("click", function () { cambiarPrecio2_Laptop1(this); } );
document.getElementById("laptop_1.2").addEventListener("click", function () { cambiarPrecio2_Laptop1(this); } );

function cambiarPrecio2_Laptop1(objeto) 
{
 var gb_laptop_1= document.getElementById("gb_laptop_1");
  
 switch (objeto.id) {
   case 'laptop_1.1':
   gb_laptop_1.innerHTML="$8,000.00"
   break;    
default:
   gb_laptop_1.innerHTML="$9,500.00"
 }
}
  
//LAPTOP2

document.getElementById("laptop_2.1").addEventListener("click", function () { cambiarPrecio2_Laptop2(this); } );
document.getElementById("laptop_2.2").addEventListener("click", function () { cambiarPrecio2_Laptop2(this); } );

function cambiarPrecio2_Laptop2(objeto) 
{
 var gb_laptop_2= document.getElementById("gb_laptop_2");
  
 switch (objeto.id) {
   case 'laptop_2.1':
   gb_laptop_2.innerHTML="$5,000.00"
   break;    
default:
   gb_laptop_2.innerHTML="$6,500.00"
 }
}

//LAPTOP3

document.getElementById("laptop_3.1").addEventListener("click", function () { cambiarPrecio2_Laptop3(this); } );
document.getElementById("laptop_3.2").addEventListener("click", function () { cambiarPrecio2_Laptop3(this); } );

function cambiarPrecio2_Laptop3(objeto) 
{
 var grafico_laptop_3= document.getElementById("grafico_laptop_3");
  
 switch (objeto.id) {
   case 'laptop_3.1':
   grafico_laptop_3.innerHTML="$8,700.00"
   break;    
default:
   grafico_laptop_3.innerHTML="$9,500.00"
 }
}

//LAPTOP4

document.getElementById("laptop4_1").addEventListener("click", function () { cambiarPrecio2_Laptop4(this); } );
document.getElementById("laptop4_2").addEventListener("click", function () { cambiarPrecio2_Laptop4(this); } );

function cambiarPrecio2_Laptop4(objeto) 
{
 var core_laptop4= document.getElementById("core_laptop4");
  
 switch (objeto.id) {
   case 'laptop4_1':
   core_laptop4.innerHTML="$14,500.00"
   break;    
default:
   core_laptop4.innerHTML="$15,800.00"
 }
}

//LAPTOP5

document.getElementById("laptop5_1").addEventListener("click", function () { cambiarPrecio2_Laptop5(this); } );
document.getElementById("laptop5_2").addEventListener("click", function () { cambiarPrecio2_Laptop5(this); } );

function cambiarPrecio2_Laptop5(objeto) 
{
 var nvidia_laptop5= document.getElementById("nvidia_laptop5");
  
 switch (objeto.id) {
   case 'laptop5_1':
   nvidia_laptop5.innerHTML="$18,500.00"
   break;    
default:
   nvidia_laptop5.innerHTML="$20,200.00"
 }
}
  
//LAPTOP6

document.getElementById("laptop6_1").addEventListener("click", function () { cambiarPrecio2_Laptop6(this); } );
document.getElementById("laptop6_2").addEventListener("click", function () { cambiarPrecio2_Laptop6(this); } );

function cambiarPrecio2_Laptop6(objeto) 
{
 var ram_laptop6= document.getElementById("ram_laptop6");
  
 switch (objeto.id) {
   case 'laptop6_1':
   ram_laptop6.innerHTML="$17,500.00"
   break;    
default:
   ram_laptop6.innerHTML="$18,200.00"
 }
}

//Laptop7
  
document.getElementById("laptop7_1").addEventListener("click", function () { cambiarPrecio2_Laptop7(this); } );
document.getElementById("laptop7_2").addEventListener("click", function () { cambiarPrecio2_Laptop7(this); } );

function cambiarPrecio2_Laptop7(objeto) 
{
 var rtx_laptop7= document.getElementById("rtx_laptop7");
  
 switch (objeto.id) {
   case 'laptop7_1':
   rtx_laptop7.innerHTML="$13,500.00"
   break;    
default:
   rtx_laptop7.innerHTML="$15,000.00"
 }
}

//Laptop8

document.getElementById("laptop8_1").addEventListener("click", function () { cambiarPrecio2_Laptop8(this); } );
document.getElementById("laptop8_2").addEventListener("click", function () { cambiarPrecio2_Laptop8(this); } );

function cambiarPrecio2_Laptop8(objeto) 
{
 var rtx_laptop7= document.getElementById("ram_laptop8");
  
 switch (objeto.id) {
   case 'laptop8_1':
   rtx_laptop7.innerHTML="$33,500.00"
   break;    
default:
   rtx_laptop7.innerHTML="$35,500.00"
 }
}

//Laptop9

document.getElementById("laptop9_1").addEventListener("click", function () { cambiarPrecio2_Laptop9(this); } );
document.getElementById("laptop9_2").addEventListener("click", function () { cambiarPrecio2_Laptop9(this); } );

function cambiarPrecio2_Laptop9(objeto) 
{
 var SSD_laptop9= document.getElementById("SSD_laptop9");
  
 switch (objeto.id) {
   case 'laptop9_1':
   SSD_laptop9.innerHTML="$10,500.00"
   break;    
default:
   SSD_laptop9.innerHTML="$12,500.00"
 }
}

//Laptop10

document.getElementById("laptop10_1").addEventListener("click", function () { cambiarPrecio2_Laptop10(this); } );
document.getElementById("laptop10_2").addEventListener("click", function () { cambiarPrecio2_Laptop10(this); } );

function cambiarPrecio2_Laptop10(objeto) 
{
 var core_laptop10= document.getElementById("core_laptop10");
  
 switch (objeto.id) {
   case 'laptop10_1':
   core_laptop10.innerHTML="$8,500.00"
   break;    
default:
   core_laptop10.innerHTML="$9,200.00"
 }
}

//Laptop11
  
document.getElementById("laptop11_1").addEventListener("click", function () { cambiarPrecio2_Laptop11(this); } );
document.getElementById("laptop11_2").addEventListener("click", function () { cambiarPrecio2_Laptop11(this); } );

function cambiarPrecio2_Laptop11(objeto) 
{
 var gb_laptop11= document.getElementById("gb_laptop11");
  
 switch (objeto.id) {
   case 'laptop11_1':
   gb_laptop11.innerHTML="$5,800.00"
   break;    
default:
   gb_laptop11.innerHTML="$7,000.00"
 }
}

//Laptop12

document.getElementById("laptop12_1").addEventListener("click", function () { cambiarPrecio2_Laptop12(this); } );
document.getElementById("laptop12_2").addEventListener("click", function () { cambiarPrecio2_Laptop12(this); } );

function cambiarPrecio2_Laptop12(objeto) 
{
 var core_laptop12= document.getElementById("core_laptop12");
  
 switch (objeto.id) {
   case 'laptop12_1':
   core_laptop12.innerHTML="$5,850.00"
   break;    
default:
   core_laptop12.innerHTML="$7,000.00"
 }
}
  
//Laptop13

document.getElementById("laptop13_1").addEventListener("click", function () { cambiarPrecio2_Laptop13(this); } );
document.getElementById("laptop13_2").addEventListener("click", function () { cambiarPrecio2_Laptop13(this); } );

function cambiarPrecio2_Laptop13(objeto) 
{
 var vs_laptop13= document.getElementById("vs_laptop13");
  
 switch (objeto.id) {
   case 'laptop13_1':
   vs_laptop13.innerHTML="$15,791.00"
   break;    
default:
   vs_laptop13.innerHTML="$16,100.00"
 }
}

//Laptop14

document.getElementById("laptop14_1").addEventListener("click", function () { cambiarPrecio2_Laptop14(this); } );
document.getElementById("laptop14_2").addEventListener("click", function () { cambiarPrecio2_Laptop14(this); } );

function cambiarPrecio2_Laptop14(objeto) 
{
 var vs_laptop13= document.getElementById("ram_laptop14");
  
 switch (objeto.id) {
   case 'laptop14_1':
   vs_laptop13.innerHTML="$22,500.00"
   break;    
default:
   vs_laptop13.innerHTML="$23,800.00"
 }
}


//BOCINA4 

document.getElementById("azulbocina4").addEventListener("click", function () { cambiarImagenBocina4(this); } );
document.getElementById("grisbocina4").addEventListener("click", function () { cambiarImagenBocina4(this); } );
document.getElementById("negrobocina4").addEventListener("click", function () { cambiarImagenBocina4(this); } );
document.getElementById("rojobocina4").addEventListener("click", function () { cambiarImagenBocina4(this); } );
document.getElementById("verdebocina4").addEventListener("click", function () { cambiarImagenBocina4(this); } );

function cambiarImagenBocina4(objeto) 
{
 var aux = document.getElementById("producto31");
 switch (objeto.id) {
   case 'azulbocina4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina4/JBLAZUL4.2.jpg"
   break;
 
   case 'grisbocina4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina4/JBLGRIS4.3.jpg"
   break;
     
   case 'negrobocina4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina4/JBLNEGRO4.4.jpg"
   break;
   case 'rojobocina4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina4/JBLROJO4.5.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina4/JBLVERDE4.6.jpg"  
 }
}

//BOCINA5

document.getElementById("negrobocina5").addEventListener("click", function () { cambiarImagenBocina5(this); } );
document.getElementById("azulbocina5").addEventListener("click", function () { cambiarImagenBocina5(this); } );
document.getElementById("grisbocina5").addEventListener("click", function () { cambiarImagenBocina5(this); } );
document.getElementById("rojobocina5").addEventListener("click", function () { cambiarImagenBocina5(this); } );
document.getElementById("verdebocina5").addEventListener("click", function () { cambiarImagenBocina5(this); } );

function cambiarImagenBocina5(objeto) 
{
 var aux = document.getElementById("producto32");
 switch (objeto.id) {
   case 'negrobocina5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina5/JBLNEGRO5.2.jpg"
   break;
 
   case 'azulbocina5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina5/JBLAZUL5.3.jpg"
   break;
     
   case 'grisbocina5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina5/JBLGRIS5.4.jpg"
   break;
   case 'rojobocina5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina5/JBLROJO5.5.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina5/JBLVERDE5.6.jpg"  
 }
}

//BOCINA6

document.getElementById("blancobocina6").addEventListener("click", function () { cambiarImagenBocina6(this); } );
document.getElementById("azulbocina6").addEventListener("click", function () { cambiarImagenBocina6(this); } );
document.getElementById("rojobocina6").addEventListener("click", function () { cambiarImagenBocina6(this); } );
document.getElementById("negrobocina6").addEventListener("click", function () { cambiarImagenBocina6(this); } );
document.getElementById("grisbocina6").addEventListener("click", function () { cambiarImagenBocina6(this); } );
document.getElementById("verdebocina6").addEventListener("click", function () { cambiarImagenBocina6(this); } );

function cambiarImagenBocina6(objeto) 
{
 var aux = document.getElementById("producto33");
 switch (objeto.id) {
   case 'blancobocina6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina6/JBLBLANCO6.2.jpg"
   break;
 
   case 'azulbocina6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina6/JBLAZUL6.3.jpg"
   break;
     
   case 'rojobocina6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina6/JBLROJO6.4.jpg"
   break;
   case 'negrobocina6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina6/JBLNEGRO6.5.jpg"
   break;
  case 'grisbocina6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina6/JBLGRIS6.6.jpg"
   break;  
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina6/JBLVERDE6.7.jpg"  
 }
}

//BOCINA7

document.getElementById("verdebocina7").addEventListener("click", function () { cambiarImagenBocina7(this); } );
document.getElementById("azulbocina7").addEventListener("click", function () { cambiarImagenBocina7(this); } );
document.getElementById("grisbocina7").addEventListener("click", function () { cambiarImagenBocina7(this); } );
document.getElementById("negrobocina7").addEventListener("click", function () { cambiarImagenBocina7(this); } );

function cambiarImagenBocina7(objeto) 
{
 var aux = document.getElementById("producto34");
 switch (objeto.id) {
   case 'verdebocina7':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina7/JBLVERDE7.2.jpg"
   break;
 
   case 'azulbocina7':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina7/JBLAZUL7.3.jpg"
   break;
     
   case 'grisbocina7':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina7/JBLGRIS7.4.jpg"
   break; 
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina7/JBLNEGRO7.5.jpg"  
 }
}

//BOCINA8

document.getElementById("rojobocina8").addEventListener("click", function () { cambiarImagenBocina8(this); } );
document.getElementById("azulbocina8").addEventListener("click", function () { cambiarImagenBocina8(this); } );
document.getElementById("grisbocina8").addEventListener("click", function () { cambiarImagenBocina8(this); } );
document.getElementById("negrobocina8").addEventListener("click", function () { cambiarImagenBocina8(this); } );

function cambiarImagenBocina8(objeto) 
{
 var aux = document.getElementById("producto35");
 switch (objeto.id) {
   case 'rojobocina8':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina8/ULTIMATEROJO8.2.jpg"
   break;
 
   case 'azulbocina8':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina8/ULTIMATEAZUL8.3.jpg"
   break;
     
   case 'grisbocina8':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina8/ULTIMATEGRIS8.4.jpg"
   break; 
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina8/ULTIMATENEGRO8.5.jpg"  
 }
}

//BOCINA9

document.getElementById("silverbocina9").addEventListener("click", function () { cambiarImagenBocina9(this); } );
document.getElementById("azulbocina9").addEventListener("click", function () { cambiarImagenBocina9(this); } );
document.getElementById("negrobocina9").addEventListener("click", function () { cambiarImagenBocina9(this); } );

function cambiarImagenBocina9(objeto) 
{
 var aux = document.getElementById("producto36");
 switch (objeto.id) {
   case 'silverbocina9':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina9/SONYSILVER9.2.jpg"
   break;
 
   case 'azulbocina9':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina9/SONYBLUE9.3.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Bocinas/Bocina9/SONYBLACK9.4.jpg"  
 }
}

//SMART1

document.getElementById("negrosmart1").addEventListener("click", function () { cambiarImagenSmart1(this); } );
document.getElementById("azulsmart1").addEventListener("click", function () { cambiarImagenSmart1(this); } );


function cambiarImagenSmart1(objeto) 
{
 var aux = document.getElementById("producto37");
 switch (objeto.id) {
   case 'negrosmart1':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART1/SMARTBLACK1.2.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART1/SMARTBLUE1.3.jpg"  
 }
}

//SMART2

document.getElementById("negrosmart2").addEventListener("click", function () { cambiarImagenSmart2(this); } );
document.getElementById("cafesmart2").addEventListener("click", function () { cambiarImagenSmart2(this); } );


function cambiarImagenSmart2(objeto) 
{
 var aux = document.getElementById("producto38");
 switch (objeto.id) {
   case 'negrosmart2':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART2/HONORBLACK2.2.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART2/HONORBROWN2.3.jpg"  
 }
}

//SMART3

document.getElementById("negrosmart3").addEventListener("click", function () { cambiarImagenSmart3(this); } );
document.getElementById("cafesmart3").addEventListener("click", function () { cambiarImagenSmart3(this); } );


function cambiarImagenSmart3(objeto) 
{
 var aux = document.getElementById("producto39");
 switch (objeto.id) {
   case 'negrosmart3':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART3/AMAZBLACK3.2.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART3/AMAZBROWN3.3.jpg"  
 }
}

//SMART4

document.getElementById("negrosmart4").addEventListener("click", function () { cambiarImagenSmart4(this); } );
document.getElementById("blancosmart4").addEventListener("click", function () { cambiarImagenSmart4(this); } );


function cambiarImagenSmart4(objeto) 
{
 var aux = document.getElementById("producto40");
 switch (objeto.id) {
   case 'negrosmart4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART4/QZBLACK4.2.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART4/QZWHITE4.3.jpg"  
 }
}

//SMART5

document.getElementById("negrosmart5").addEventListener("click", function () { cambiarImagenSmart5(this); } );
document.getElementById("blancosmart5").addEventListener("click", function () { cambiarImagenSmart5(this); } );


function cambiarImagenSmart5(objeto) 
{
 var aux = document.getElementById("producto41");
 switch (objeto.id) {
   case 'negrosmart5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART5/FRESHBLACK5.2.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART5/FRESHWHITE5.3.jpg"  
 }
}

//SMART6

document.getElementById("blancosmart6").addEventListener("click", function () { cambiarImagenSmart6(this); } );
document.getElementById("blacksmart6").addEventListener("click", function () { cambiarImagenSmart6(this); } );


function cambiarImagenSmart6(objeto) 
{
 var aux = document.getElementById("producto42");
 switch (objeto.id) {
   case 'blancosmart6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART6/FRESHWHITE6.2.jpg"
   break;
     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/SMARTWATCHES/SMART6/FRESHBLACK6.3.jpg"  
 }
}

//Audifono1

document.getElementById("blancoaudifono1").addEventListener("click", function () { cambiarImagenAudifono1(this); } );
document.getElementById("azulaudifono1").addEventListener("click", function () { cambiarImagenAudifono1(this); } );
document.getElementById("negroaudifono1").addEventListener("click", function () { cambiarImagenAudifono1(this); } );

function cambiarImagenAudifono1(objeto) 
{
 var aux = document.getElementById("producto43");
 switch (objeto.id) {
   case 'blancoaudifono1':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono1/JBLBLANCO1.2.jpg"
   break;
  case 'azulaudifono1':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono1/JBLAZUL1.3.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono1/JBLNEGRO1.4.jpg"  
 }
}

//Audifono2

document.getElementById("negroaudifono2").addEventListener("click", function () { cambiarImagenAudifono2(this); } );
document.getElementById("azulaudifono2").addEventListener("click", function () { cambiarImagenAudifono2(this); } );
document.getElementById("rojoaudifono2").addEventListener("click", function () { cambiarImagenAudifono2(this); } );

function cambiarImagenAudifono2(objeto) 
{
 var aux = document.getElementById("producto44");
 switch (objeto.id) {
   case 'negroaudifono2':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono2/BEATSNEGRO2.2.jpg"
   break;
  case 'azulaudifono2':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono2/BEATSAZUL2.3.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono2/BEATSROJO2.4.jpg"  
 }
}

//Audifono3

document.getElementById("rojoaudifono3").addEventListener("click", function () { cambiarImagenAudifono3(this); } );
document.getElementById("azulaudifono3").addEventListener("click", function () { cambiarImagenAudifono3(this); } );
document.getElementById("negroaudifono3").addEventListener("click", function () { cambiarImagenAudifono3(this); } );

function cambiarImagenAudifono3(objeto) 
{
 var aux = document.getElementById("producto45");
 switch (objeto.id) {
   case 'rojoaudifono3':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono3/SKULLROJO3.2.jpg"
   break;
  case 'azulaudifono3':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono3/SKULLAZUL3.3.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono3/SKULLNEGRO3.4.jpg"  
 }
}

//Audifono4

document.getElementById("negroaudifono4").addEventListener("click", function () { cambiarImagenAudifono4(this); } );
document.getElementById("azulaudifono4").addEventListener("click", function () { cambiarImagenAudifono4(this); } );
document.getElementById("blancoaudifono4").addEventListener("click", function () { cambiarImagenAudifono4(this); } );

function cambiarImagenAudifono4(objeto) 
{
 var aux = document.getElementById("producto46");
 switch (objeto.id) {
   case 'negroaudifono4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono4/SONYNEGRO4.2.jpg"
   break;
  case 'azulaudifono4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono4/SONYAZUL4.3.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono4/SONYBLANCO4.4.jpg"  
 }
}

//Audifono5

document.getElementById("negroaudifono5").addEventListener("click", function () { cambiarImagenAudifono5(this); } );
document.getElementById("blancoaudifono5").addEventListener("click", function () { cambiarImagenAudifono5(this); } );

function cambiarImagenAudifono5(objeto) 
{
 var aux = document.getElementById("producto47");
 switch (objeto.id) {
   case 'negroaudifono5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono5/JBLBLACK5.2.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono5/JBLWHITE5.3.jpg"  
 }
}

//Audifono6

document.getElementById("azulaudifono6").addEventListener("click", function () { cambiarImagenAudifono6(this); } );
document.getElementById("negroaudifono6").addEventListener("click", function () { cambiarImagenAudifono6(this); } );

function cambiarImagenAudifono6(objeto) 
{
 var aux = document.getElementById("producto48");
 switch (objeto.id) {
   case 'azulaudifono6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono6/SONYAZUL6.2.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono6/SONYBLACK6.3.jpg"  
 }
}

//Audifono7

document.getElementById("blancoaudifono7").addEventListener("click", function () { cambiarImagenAudifono7(this); } );
document.getElementById("negroaudifono7").addEventListener("click", function () { cambiarImagenAudifono7(this); } );

function cambiarImagenAudifono7(objeto) 
{
 var aux = document.getElementById("producto49");
 switch (objeto.id) {
   case 'blancoaudifono7':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono7/SONYBLANCO7.2.jpg"
   break;
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono7/SONYNEGRO7.3.jpg"  
 }
}

//Audifono8

document.getElementById("blancoaudifono8").addEventListener("click", function () { cambiarImagenAudifono8(this); } );
document.getElementById("azulaudifono8").addEventListener("click", function () { cambiarImagenAudifono8(this); } );
document.getElementById("verdeaudifono8").addEventListener("click", function () { cambiarImagenAudifono8(this); } );


function cambiarImagenAudifono8(objeto) 
{
 var aux = document.getElementById("producto50");
 switch (objeto.id) {
   case 'blancoaudifono8':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono8/APPLEBLANCO8.2.jpg"
   break;
   case 'azulaudifono8':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono8/APPLEAZUL8.3.jpg"
   break;     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono8/APPLEVERDE8.4.jpg"  
 }
}

//Audifono9

document.getElementById("blancoaudifono9").addEventListener("click", function () { cambiarImagenAudifono9(this); } );
document.getElementById("negroaudifono9").addEventListener("click", function () { cambiarImagenAudifono9(this); } );
document.getElementById("verdeaudifono9").addEventListener("click", function () { cambiarImagenAudifono9(this); } );


function cambiarImagenAudifono9(objeto) 
{
 var aux = document.getElementById("producto51");
 switch (objeto.id) {
   case 'blancoaudifono9':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono9/SKULLBLANCO9.2.jpg"
   break;
   case 'negroaudifono9':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono9/SKULLNEGRO9.3.jpg"
   break;     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono9/SKULLVERDE9.4.jpg"  
 }
}

//Audifono10

document.getElementById("verdeaudifono10").addEventListener("click", function () { cambiarImagenAudifono10(this); } );
document.getElementById("azulaudifono10").addEventListener("click", function () { cambiarImagenAudifono10(this); } );
document.getElementById("rojoaudifono10").addEventListener("click", function () { cambiarImagenAudifono10(this); } );


function cambiarImagenAudifono10(objeto) 
{
 var aux = document.getElementById("producto52");
 switch (objeto.id) {
   case 'verdeaudifono10':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono10/ASTROVERDE10.2.jpg"
   break;
   case 'azulaudifono10':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono10/ASTROAZUL10.3.jpg"
   break;     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono10/ASTROROJO10.4.jpg"  
 }
}

//Audifono11

document.getElementById("whiteaudifono11").addEventListener("click", function () { cambiarImagenAudifono11(this); } );
document.getElementById("verdeaudifono11").addEventListener("click", function () { cambiarImagenAudifono11(this); } );


function cambiarImagenAudifono11(objeto) 
{
 var aux = document.getElementById("producto53");
 switch (objeto.id) {
   case 'whiteaudifono11':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono11/RAZERBLANCO11.2.jpg"
   break;     
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono11/RAZERVERDE11.3.jpg"  
 }
}

//Audifono12

document.getElementById("negroaudifono12").addEventListener("click", function () { cambiarImagenAudifono12(this); } );
document.getElementById("blueaudifono12").addEventListener("click", function () { cambiarImagenAudifono12(this); } );
document.getElementById("blancoaudifono12").addEventListener("click", function () { cambiarImagenAudifono12(this); } );

function cambiarImagenAudifono12(objeto) 
{
 var aux = document.getElementById("producto54");
 switch (objeto.id) {
   case 'negroaudifono12':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono12/LOGITECHNEGRO12.2.jpg"
   break;  
   case 'blueaudifono12':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono12/LOGITECHAZUL12.3.jpg"
   break;       
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono12/LOGITECHBLANCO12.4.jpg"  
 }
}

//Audifono13

document.getElementById("azulaudifono13").addEventListener("click", function () { cambiarImagenAudifono13(this); } );
document.getElementById("negroaudifono13").addEventListener("click", function () { cambiarImagenAudifono13(this); } );

function cambiarImagenAudifono13(objeto) 
{
 var aux = document.getElementById("producto55");
 switch (objeto.id) {
   case 'azulaudifono13':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono13/SKULLAZUL13.2.jpg"
   break;        
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono13/SKULLNEGRO13.3.jpg"  
 }
}

//Audifono14

document.getElementById("negroaudifono14").addEventListener("click", function () { cambiarImagenAudifono14(this); } );
document.getElementById("blancoaudifono14").addEventListener("click", function () { cambiarImagenAudifono14(this); } );
document.getElementById("grisaudifono14").addEventListener("click", function () { cambiarImagenAudifono14(this); } );

function cambiarImagenAudifono14(objeto) 
{
 var aux = document.getElementById("producto56");
 switch (objeto.id) {
   case 'negroaudifono14':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono14/STEELNEGRO14.2.jpg"
   break;  
   case 'blancoaudifono14':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono14/STEELBLANCO14.3.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono14/STEELGRIS14.4.jpg"  
 }
}

//Audifono15

document.getElementById("blueaudifono15").addEventListener("click", function () { cambiarImagenAudifono15(this); } );
document.getElementById("blancoaudifono15").addEventListener("click", function () { cambiarImagenAudifono15(this); } );
document.getElementById("negroaudifono15").addEventListener("click", function () { cambiarImagenAudifono15(this); } );

function cambiarImagenAudifono15(objeto) 
{
 var aux = document.getElementById("producto57");
 switch (objeto.id) {
   case 'blueaudifono15':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono15/JBLAZUL15.2.jpg"
   break;  
   case 'blancoaudifono15':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono15/JBLBLANCO15.3.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono15/JBLNEGRO15.4.jpg"  
 }
}

//Audifono16

document.getElementById("verdeaudifono16").addEventListener("click", function () { cambiarImagenAudifono16(this); } );
document.getElementById("blueaudifono16").addEventListener("click", function () { cambiarImagenAudifono16(this); } );

function cambiarImagenAudifono16(objeto) 
{
 var aux = document.getElementById("producto58");
 switch (objeto.id) {
   case 'verdeaudifono16':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono16/HYPRVERDE16.2.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono16/HYPRAZUL16.3.jpg"  
 }
}

//Audifono17

document.getElementById("negroaudifono17").addEventListener("click", function () { cambiarImagenAudifono17(this); } );
document.getElementById("blancoaudifono17").addEventListener("click", function () { cambiarImagenAudifono17(this); } );

function cambiarImagenAudifono17(objeto) 
{
 var aux = document.getElementById("producto59");
 switch (objeto.id) {
   case 'negroaudifono17':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono17/REDRAGONNEGRO17.2.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono17/REDRAGONBLANCO17.3.jpg"  
 }
}

//Audifono18

document.getElementById("negroaudifono18").addEventListener("click", function () { cambiarImagenAudifono18(this); } );
document.getElementById("verdeaudifono18").addEventListener("click", function () { cambiarImagenAudifono18(this); } );

function cambiarImagenAudifono18(objeto) 
{
 var aux = document.getElementById("producto60");
 switch (objeto.id) {
   case 'negroaudifono18':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono18/RAZERNEGRO18.2.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Audifonos/Audifono18/RAZERVERDE18.3.jpg"  
 }
}

//Celular1

document.getElementById("negrocelular1").addEventListener("click", function () { cambiarImagenCelular1(this); } );
document.getElementById("verdecelular1").addEventListener("click", function () { cambiarImagenCelular1(this); } );
document.getElementById("cremacelular1").addEventListener("click", function () { cambiarImagenCelular1(this); } );

function cambiarImagenCelular1(objeto) 
{
 var aux = document.getElementById("producto61");
 switch (objeto.id) {
   case 'negrocelular1':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular1/SAMSUNGNEGRO1.2.jpg"
   break;
   case 'verdecelular1':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular1/SAMSUNGVERDE1.3.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular1/SAMSUNGCREMA1.4.jpg"  
 }
}

//Celular2

document.getElementById("verdecelular2").addEventListener("click", function () { cambiarImagenCelular2(this); } );
document.getElementById("negrocelular2").addEventListener("click", function () { cambiarImagenCelular2(this); } );

function cambiarImagenCelular2(objeto) 
{
 var aux = document.getElementById("producto62");
 switch (objeto.id) {
   case 'verdecelular2':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular2/ONEPLUSGREEN2.2.jpg"
   break;    
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular2/ONEPLUSNEGRO2.3.jpg"  
 }
}

//Celular3

document.getElementById("blancocelular3").addEventListener("click", function () { cambiarImagenCelular3(this); } );
document.getElementById("azulcelular3").addEventListener("click", function () { cambiarImagenCelular3(this); } );

function cambiarImagenCelular3(objeto) 
{
 var aux = document.getElementById("producto63");
 switch (objeto.id) {
   case 'blancocelular3':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular3/HONORBLANCO3.2.jpg"
   break;    
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular3/HONORAZUL3.3.jpg"  
 }
}

//Celular4

document.getElementById("negrocelular4").addEventListener("click", function () { cambiarImagenCelular4(this); } );
document.getElementById("amarillocelular4").addEventListener("click", function () { cambiarImagenCelular4(this); } );
document.getElementById("azulcelular4").addEventListener("click", function () { cambiarImagenCelular4(this); } );

function cambiarImagenCelular4(objeto) 
{
 var aux = document.getElementById("producto64");
 switch (objeto.id) {
   case 'negrocelular4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular4/POCONEGRO4.2.jpg"
   break; 
   case 'amarillocelular4':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular4/POCOAMARILLO4.3.jpg"
   break;      
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular4/POCOAZUL4.4.jpg"  
 }
}

//Celular5

document.getElementById("azulcelular5").addEventListener("click", function () { cambiarImagenCelular5(this); } );
document.getElementById("blancocelular5").addEventListener("click", function () { cambiarImagenCelular5(this); } );
document.getElementById("negrocelular5").addEventListener("click", function () { cambiarImagenCelular5(this); } );
document.getElementById("rojocelular5").addEventListener("click", function () { cambiarImagenCelular5(this); } );

function cambiarImagenCelular5(objeto) 
{
 var aux = document.getElementById("producto65");
 switch (objeto.id) {
   case 'azulcelular5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular5/APPLEAZUL5.2.jpg"
   break;
   case 'blancocelular5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular5/APPLEBLANCO5.3.jpg"
   break;
   case 'negrocelular5':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular5/APPLENEGRO5.4.jpg"
   break;       
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular5/APPLEROJO5.5.jpg"  
 }
}

//Celular6

document.getElementById("negrocelular6").addEventListener("click", function () { cambiarImagenCelular6(this); } );
document.getElementById("azulcelular6").addEventListener("click", function () { cambiarImagenCelular6(this); } );

function cambiarImagenCelular6(objeto) 
{
 var aux = document.getElementById("producto66");
 switch (objeto.id) {
   case 'negrocelular6':
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular6/XAOMINEGRO6.2.jpg"
   break;    
default:
aux.src="imagenes/2daPagina(TIENDA)/IMAGENES_TRANSICION/Celulares/Celular6/XAOMIAZUL6.3.jpg"  
 }
}

//Cable1

document.getElementById("1metro").addEventListener("click", function () { cambiarPrecio1(this); } );
document.getElementById("2metro").addEventListener("click", function () { cambiarPrecio1(this); } );

function cambiarPrecio1(objeto) 
{
 var precio= document.getElementById("precio1");
  
 switch (objeto.id) {
   case '1metro':
   precio1.innerHTML="$199.00"
   break;    
default:
   precio1.innerHTML="$227.00"
 }
}

//Cable2

document.getElementById("1.5metroCable2").addEventListener("click", function () { cambiarPrecio2(this); } );
document.getElementById("2metroCable2").addEventListener("click", function () { cambiarPrecio2(this); } );

function cambiarPrecio2(objeto) 
{
 var precio= document.getElementById("precio2");
  
 switch (objeto.id) {
   case '1.5metroCable2':
   precio2.innerHTML="$65.00"
   break;    
default:
   precio2.innerHTML="$179.00"
 }
}

//Cable3

document.getElementById("1metroCable3").addEventListener("click", function () { cambiarPrecio3(this); } );
document.getElementById("2metroCable3").addEventListener("click", function () { cambiarPrecio3(this); } );

function cambiarPrecio3(objeto) 
{
 var precio= document.getElementById("precio3");
  
 switch (objeto.id) {
   case '1metroCable3':
   precio3.innerHTML="$198.00"
   break;    
default:
   precio3.innerHTML="$249.00"
 }
}

  
//Monitor1
  
 var btn = document.getElementById("ver");
 btn.addEventListener("click",mostrarEspecificaciones)

 function mostrarEspecificaciones() 
 {
 var text = document.getElementById("datos");
 text.innerHTML="Especificaciones Tecnicas";
 var detalle = document.createElement("h5");
 detalle.innerHTML="MSI G243CV, Monitor para Juegos";
  text.appendChild(detalle);
   var img_instrucciones = document.createElement("img");
img_instrucciones.src="imagenes/2daPagina(TIENDA)/Especificaciones/EspecificacionMonitores/Monitor1.jpg";
   detalle.appendChild(img_instrucciones);
 }

  var btn2 = document.getElementById("ocultar");
 btn2.addEventListener("click",ocultarEspecificaciones)

 function ocultarEspecificaciones() 
 {
   
 var elemento = document.getElementById("datos");
 while (elemento.firstChild){
   elemento.removeChild(elemento.firstChild);
   
 }
 }

 //Monitor2

    
 var btn2monitor2 = document.getElementById("ver2");
btn2monitor2.addEventListener("click",mostrarEspecificacionesmonitor2)

 function mostrarEspecificacionesmonitor2() 
 {
 var text2 = document.getElementById("datos2");
 text2.innerHTML="Especificaciones Tecnicas";
 var detalle = document.createElement("h5");
 detalle.innerHTML="SAMSUNG Monitor Plano 24";
  text2.appendChild(detalle);
   var img_instrucciones2 = document.createElement("img");
img_instrucciones2.src="imagenes/2daPagina(TIENDA)/Especificaciones/EspecificacionMonitores/Monitor2.jpg";
   detalle.appendChild(img_instrucciones2);
 }

  var btn2monitor2 = document.getElementById("ocultar2");
 btn2monitor2.addEventListener("click",ocultarEspecificacionesmonitor2)

 function ocultarEspecificacionesmonitor2() 
 {
   
 var elemento2 = document.getElementById("datos2");
 while (elemento2.firstChild){
   elemento2.removeChild(elemento2.firstChild);
   
 }
 } 

 //Monitor3
    
 var btn2monitor3 = document.getElementById("ver3");
btn2monitor3.addEventListener("click",mostrarEspecificacionesmonitor3)

 function mostrarEspecificacionesmonitor3() 
 {
 var text3 = document.getElementById("datos3");
 text3.innerHTML="Especificaciones Tecnicas";
 var detalle = document.createElement("h5");
 detalle.innerHTML="Sceptre Monitor Curvado";
  text3.appendChild(detalle);
   var img_instrucciones3 = document.createElement("img");
img_instrucciones3.src="imagenes/2daPagina(TIENDA)/Especificaciones/EspecificacionMonitores/Monitor3.png";
   detalle.appendChild(img_instrucciones3);
 }

  var btn2monitor3 = document.getElementById("ocultar3");
 btn2monitor3.addEventListener("click",ocultarEspecificacionesmonitor3)

 function ocultarEspecificacionesmonitor3() 
 {
   
 var elemento3 = document.getElementById("datos3");
 while (elemento3.firstChild){
   elemento3.removeChild(elemento3.firstChild);
   
 }
 } 


 //Monitor4
    
 var btn2monitor4 = document.getElementById("ver4");
btn2monitor4.addEventListener("click",mostrarEspecificacionesmonitor4)

 function mostrarEspecificacionesmonitor4() 
 {
 var text4 = document.getElementById("datos4");
 text4.innerHTML="Especificaciones Tecnicas";
 var detalle = document.createElement("h5");
 detalle.innerHTML="Gigabyte G27F - Monitor de Juego";
  text4.appendChild(detalle);
   var img_instrucciones4 = document.createElement("img");
img_instrucciones4.src="imagenes/2daPagina(TIENDA)/Especificaciones/EspecificacionMonitores/Monitor4.png";
   detalle.appendChild(img_instrucciones4);
 }

  var btn2monitor4 = document.getElementById("ocultar4");
 btn2monitor4.addEventListener("click",ocultarEspecificacionesmonitor4)

 function ocultarEspecificacionesmonitor4() 
 {
   
 var elemento4 = document.getElementById("datos4");
 while (elemento4.firstChild){
   elemento4.removeChild(elemento4.firstChild);
   
 }
 } 
  
  
}
