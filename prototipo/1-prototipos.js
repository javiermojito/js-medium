//método constructor
function Persona(pNombre, pApellido, pEdad){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
}

debugger

Persona.prototype.saludar = function() {
    debugger    
    return `Hola, soy ${this.nombre} ${this.apellido}`;
}

Persona.prototype.saludar2 = () => {
    debugger
    return `Hola de nuevo, soy ${this.nombre} ${this.apellido}`;
}

var javier = new Persona("Javier", "Collazos", 21);
var laura = new Persona("Laura", "Robledo", 15);

console.log(javier.saludar());
console.log(laura.saludar2());


//Tarea:
//Crear la función 'soyMayor'. Si es así : "#nombre# es mayor de edad";

//Tarea: 
//Cómo hacer herencia prototipal con javascript.
