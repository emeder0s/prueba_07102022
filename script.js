//EJERCICIO 1
function ejercicio1(){
 var array =  ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]; 
 var filterArray = array.filter((elemento,index) => index%2 != 0 && (elemento.includes("t") || elemento.includes("a")));
 console.log(filterArray);
}
 // EJERCICIO 2
var empresa = {
    "Empleados": [
    { "Nombre": "John", "Apellido": "Doe"},
    { "Nombre": "Anna", "Apellido": "Smith"},
    { "Nombre": "Pedro", "Apellido": "Jones"}
    ]}
    console.log(empresa);
    localStorage.setItem("empresa",JSON.stringify(empresa))

function añadirUsuario(){
    var empresaLocal = localStorage.getItem("empresa");
    empresaLocal = JSON.parse(empresaLocal)

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;

    empresaLocal.Empleados.push({ "Nombre": nombre, "Apellido": apellidos},)
    localStorage.setItem("empresa",JSON.stringify(empresaLocal))  
}

function modificarUsuario(){
    var empresaLocal = localStorage.getItem("empresa");
    empresaLocal = JSON.parse(empresaLocal)
    console.log(empresaLocal);
    var nombreAbuscar = document.getElementById("nombreAbuscar").value;
    var nombreNuevo = document.getElementById("nombreNuevo").value;
    var apellidosNuevo = document.getElementById("apellidosNuevo").value;
    
    //busco por el nombre, aunque esto en la realidad no serviría ya que se pueden repetir.
    empresaLocal.Empleados.forEach(empleado =>{
        if (empleado.Nombre.toUpperCase()==nombreAbuscar.toUpperCase()){
            if (nombreNuevo){
                empleado.Nombre = nombreNuevo;
            }

            if (apellidosNuevo){
                empleado.Apellido = apellidosNuevo;
            }
        }
    });
    localStorage.setItem("empresa",JSON.stringify(empresaLocal));
    console.log(empresaLocal);
}

//Esta función la cree para ver lo que hay en localstorage desde console.log para pruebas.
function mostrarEmpleados(){
    console.log(localStorage.getItem("empresa"));
}