function ejercicio1(){
 var array =  ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]; 
 var filterArray = array.filter((elemento,index) => index%2 != 0 && (elemento.includes("t") || elemento.includes("a")))
 console.log(array);
 console.log(filterArray);
}

ejercicio1();

function ejercicio2(){
    var empleados = {
        "Empleados": [
        { "Nombre": "John", "Apellido": "Doe"},
        { "Nombre": "Anna", "Apellido": "Smith"},
        { "Nombre": "Pedro", "Apellido": "Jones"}
        ]}
}