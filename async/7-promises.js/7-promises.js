const API_URL = "https://rickandmortyapi.com/api/";
const CHARACTER_URL = "character/:id"
const opts = {crossDomain: true};

/* function obtenerPersonajePorId(id, fn){
    let url = `${API_URL}${CHARACTER_URL.replace(":id", id)}`;

    $.get(url, opts, function(personaje){
        console.log(`Hola, soy ${personaje.name} (${personaje.id})`);

        if(fn){
            fn();
        }
    });
}

//CALLBACK HELL
obtenerPersonajePorId(520, function(){
    obtenerPersonajePorId(521, function(){
        obtenerPersonajePorId(522, function(){
            obtenerPersonajePorId(523, function(){
                obtenerPersonajePorId(524, function(){
                    obtenerPersonajePorId(525, function(){
                        obtenerPersonajePorId(526, function(){
                            obtenerPersonajePorId(527, function(){
                                obtenerPersonajePorId(528)
                            })
                        })
                    })
                })
            })
        })
    })
})
 */
//Promesas
//estructura

new Promise(function(resolve, reject){
    //......lógica
}).then(function(value){
    // :) 
}).catch(function(err){
    // :( 
})

function obtenerPersonajePorId(id){
    return new Promise(function(resolve, reject){

        let url = `${API_URL}${CHARACTER_URL.replace(":id", id)}`;

        $.get(url, opts, function(data){
            resolve(data);
        })
        .fail(function(){
            reject(id);
        })
    })
}

//10,11,12,13,14

const saludarPersonaje = personaje => console.log(`Hola, soy ${personaje.name} (${personaje.id})`);     
const onError = id => console.log(`Ocurrió un error mientras se consultaba al personaje: ${id}`);

/* obtenerPersonajePorId(10)
    .then(function(personaje){
        saludarPersonaje(personaje);
        return obtenerPersonajePorId(11);
    })
    .then(function(personaje){
        saludarPersonaje(personaje);
        return obtenerPersonajePorId(12);
    })
    .then(function(personaje){
        saludarPersonaje(personaje);
        return obtenerPersonajePorId(651519);
    })
    .then(function(personaje){
        saludarPersonaje(personaje);
        return obtenerPersonajePorId(14);
    })
    .then(function(personaje){
        saludarPersonaje(personaje);
    })
    .catch(onError) */


//Qué pasa si queremos peticiones en paralelo
/* var ids = [ 20 , 21 , 22 , 23 , 24 ]

var promesas = ids.map(function(id){
    return obtenerPersonajePorId(id);
})

Promise
    .all(promesas)
    .then(function(personajes){
        console.table(personajes)
    })
    .catch(onError);
 */
////Tarea
//fetch de Javascript <- promesa
//Hace la page con un input y un botón. ---> info del personaje


////////
//async-await
async function obtenerPersonajes(){
    var ids = [ 20 , 21 , 22 , 23 , 24 ]
    var promesas = ids.map(id => obtenerPersonajePorId(id));

    try{
        var personajes = await Promise.all(promesas);
        console.table(personajes)
    }
    catch(id){
        onError(id);
    }
}

obtenerPersonajes();






