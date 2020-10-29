
//https://rickandmortyapi.com/api/character/5
//    url    opts   cb
$.get("https://rickandmortyapi.com/api/character/5", {crossDomain: true}, function(personaje){
    console.log(personaje.name);
    console.table([personaje])
});