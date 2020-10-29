const API_URL = "https://rickandmortyapi.com/api/";
const CHARACTER_URL = "character/:id"
const opts = {crossDomain: true};

/* const onResponse = function(personaje){
    console.log(`Hola, soy ${personaje.name} (${personaje.id})`);
}

function obtenerPersonajePorId(id){
    let url = `${API_URL}${CHARACTER_URL.replace(":id", id)}`;
    $.get(url, opts, onResponse);
}

obtenerPersonajePorId(520)
obtenerPersonajePorId(521)
obtenerPersonajePorId(522)
obtenerPersonajePorId(523)
obtenerPersonajePorId(524) *///Shift + alt + a


/* 
function obtenerPersonajePorId(id, fn){
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

//Que pasa si ocurre un error
function obtenerPersonajePorId(id){
    let url = `${API_URL}${CHARACTER_URL.replace(":id", id)}`;

    $
    .get(url, opts, function(personaje){
        console.log(`Hola, soy ${personaje.name} (${personaje.id})`);
    })
    .fail(() => console.log(`El personaje con el ID(${id}) no se pudo obtener.`));
}

obtenerPersonajePorId(519651981);