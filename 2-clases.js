//Prototipo
/* function Persona(pNombre, pApellido, pEdad){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
}

Persona.prototype.saludar = function() {
    debugger    
    return `Hola, soy ${this.nombre} ${this.apellido}`;
} */

//"""CLASE""" 


/* class Hija extends Persona{
    
    constructor(pNombre, pApellido, pEdad, pAltura){
        super(pNombre, pApellido, pEdad)
        this.altura = pAltura;
    }

    esAlta(){
        return this.altura >= 180;
    }

    saludar(){
        return `Hola, soy ${this.nombre} y soy una hija`;
    }
}

var maria = new Hija("Maria", "Gona", 15, 150);
var pepe = new Persona("Pepe", "Tomate", 21);

console.log(pepe.saludar());
console.log(maria.saludar());
console.log(maria.esAlta());
 */

// CLASES
class Persona{
    constructor(pNombre, pApellido, pEdad){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    saludar(){
        return `Hola, soy ${this.nombre} ${this.apellido}`;
    }
} 

class Programador extends Persona{

    constructor(pNombre, pApellido, pEdad){
        super(pNombre, pApellido, pEdad);        
    }

    //SOBREESCRIBIR
    saludar(){
        return `Hola, soy ${this.nombre} ${this.apellido} y soy programador/a`;
    }    
}

var javier = new Persona("Javier", "Collazos", 21);
var laura = new Programador("Laura", "Robledo", 15, true);

console.log(javier.saludar());
console.log(laura.saludar());