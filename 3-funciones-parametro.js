class Persona{
    constructor(pNombre, pApellido, pEdad){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    saludar(fn){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);

        if(fn){
            fn(this.nombre, this.apellido);
        }
    }
} 

class Programador extends Persona{

    constructor(pNombre, pApellido, pEdad, pSabeIngles){
        super(pNombre, pApellido, pEdad)
        this.sabeIngles = pSabeIngles;
    }

    //SOBREESCRIBIR
    saludar(fn){

        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy programador/a`);
        if(this.sabeIngles)
        {
            console.log(`también se inglés`);
        }
        
        if(fn){
            // pNombre, pApellido, pSabeIngles
            fn(this.nombre, this.apellido, this.sabeIngles);
        }
    }    
}

var javier = new Persona("Javier", "Collazos", 21);
var laura = new Programador("Laura", "Robledo", 15, false);

javier.saludar(responderSaludo);
laura.saludar(responderSaludo);

function responderSaludo( pNombre, pApellido, pSabeIngles){
    console.log(`Mucho gusto ${pNombre} ${pApellido}, que agradable conocerte.`);

    if(pSabeIngles){
        console.log(`Ah, sabes ingles? great!`);
    }
}