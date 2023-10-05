function  edad(){
    const fecha= new Date();
    const añoActual = fecha.getFullYear();
    const mesActual=fecha.getMonth()+1;
    const aNacimiento = 1994;
    const mNacimiento=5;
    let ed = añoActual-aNacimiento;
    if (mesActual<mNacimiento){
       ed= ed-1;
    } 
    return ed;
}

function copyphone(){
    telefono.addEventListener('click',function(){
        const text ="0342155576311";
        navigator.clipboard.writeText(text);
        alert("Numero de telefono copiado al portapales");
       });
}

function copyEmail(){
    correo.addEventListener('click',function(){
        const text ="andres.juan.lopez@gmail.com";
        navigator.clipboard.writeText(text);
        alert("Correo electronico copiado en el portapales");
       });
}

window.addEventListener('load', function() {
    /** se almacena en una variable el resultado de la funcion y se escribe en una etiqueta span */
   const ed= edad();
   document.getElementById("edad").innerHTML = ed;
   /**---------------------------------------------------------------------------- */
   /** Funcion para copiar telefono haciendo click en el icono*/
   copyphone();   
    /** Funcion para copiar el correo haciendo click en el icono*/
    copyEmail();
   });
   