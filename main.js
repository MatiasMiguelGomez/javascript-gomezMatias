let nombre;
let edad;
let eleccion;
let añoNacimiento;
let artistasRelacionados;

function recopilacionInfo(){ /*Esto es declararla, no invocarla*/
    nombre = prompt("Ingrese su nombre");
    while(nombre === ""){
        alert("no puedes dejar este campo vacio, por favor coloque un nombre");
        nombre = prompt("Ingrese su nombre");
    }
    edad = Number(prompt("Ingrese su edad"));
    while(edad === 0 || edad > 120){
        alert("¿esta seguro que tiene esa edad? por favor corrobore que puso un numero del 1 al 120")
        edad = Number(prompt("Ingrese su edad"));
    }
    añoNacimiento = (2023 - edad);
    eleccion = prompt("Elige entre música, pintura o cine").toLowerCase();

    while(!(eleccion==="musica" || eleccion==="pintura" || eleccion==="cine")){
        alert("por favor elija una opción valida");
        eleccion = prompt("elija entre música pintura o cine");
    }
}
recopilacionInfo(); /* Tenes que invocarla antes de los condicionales, sino primero te lee los condicionales
y siempre van a ser undefined, por ende siempre van al else  final*/ 

if(eleccion==="musica"){
    if(añoNacimiento <= 2023 && añoNacimiento > 2010){
        artistasRelacionados="The Weekend, Taylor Swift, Bad Bunny."
        console.log(`${nombre} te recomendamos estos 3 artistas que te pueden interesar: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 2010 && añoNacimiento > 2000){
        artistasRelacionados="Britney Spears, Jennifer López, Katy Perry."
        console.log(`${nombre} te recomendamos estos 3 artistas que te pueden interesar: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 2000 && añoNacimiento > 1990){  
        artistasRelacionados="BackStreet Boys, NSync, Spice Girls."
        console.log(`${nombre} te recomendamos estos 3 artistas que te pueden interesar: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 1990 && añoNacimiento > 1980){
        artistasRelacionados="Madonna,  Guns N' Roses, Depeche Mode."
        console.log(`${nombre} te recomendamos estos 3 artistas que te pueden interesar: ${artistasRelacionados}`);
    }
    else{
        artistasRelacionados="Freddie Mercury, David Bowie, Led Zeppelin."
        console.log(`${nombre} te recomendamos estos 3 artistas que te pueden interesar: ${artistasRelacionados}`);
    }
}

else if(eleccion==="pintura"){
    if(añoNacimiento <= 2023 && añoNacimiento > 2010){
        artistasRelacionados="Yayoi Kusama, Infinity Mirrored Room."
        console.log(`${nombre} te recomendamos el cuadro mas significativo de la decada del 2010: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 2010 && añoNacimiento > 2000){
        artistasRelacionados="Jean Ranger y Bill Sullivan, The Fabric of Reality."
        console.log(`${nombre} te recomendamos el cuadro mas significativo de la decada del 2000: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 2000 && añoNacimiento > 1990){  
        artistasRelacionados="Omar Schiliro, Batato te entiendo."
        console.log(`${nombre} te recomendamos el cuadro mas significativo de la decada de los 90: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 1990 && añoNacimiento > 1980){
        artistasRelacionados="Nancy Spero. Fleeing Woman and Child, Irradiated."
        console.log(`${nombre} te recomendamos el cuadro mas significativo de la decada de los 80: ${artistasRelacionados}`);
    }
    else{
        artistasRelacionados="Arnulf Rainer. Face Farces."
        console.log(`${nombre} te recomendamos el cuadro mas significativo de la decada de los 70: ${artistasRelacionados}`);
    }
}

else{
    if(añoNacimiento <= 2023 && añoNacimiento > 2010){
        artistasRelacionados="Toy Story 3."
        console.log(`${nombre} te recomendamos la pelicula mas taquillera de la decada del 2010: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 2010 && añoNacimiento > 2000){
        artistasRelacionados="Misión imposible 2."
        console.log(`${nombre} te recomendamos la pelicula mas taquillera de la decada de los 2000: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 2000 && añoNacimiento > 1990){  
        artistasRelacionados="Ghost."
        console.log(`${nombre} te recomendamos la pelicula mas taquillera de la decada de los 90: ${artistasRelacionados}`);
    }
    else if(añoNacimiento <= 1990 && añoNacimiento > 1980){
        artistasRelacionados="Star Wars: Episode V - The Empire Strikes Back."
        console.log(`${nombre} te recomendamos la pelicula mas taquillera de la decada de los 80: ${artistasRelacionados}`);
    }
    else{
        artistasRelacionados="The Godfather."
        console.log(`Te recomendamos la pelicula mas taquillera de la decada de los 70: ${artistasRelacionados}`);
    }
}
console.log("Información recopilada:");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad} años`);
console.log(`Elegiste: ${eleccion}`);
console.log(`Fecha de nacimiento: Año ${añoNacimiento}`);
console.log(`Artistas que te pueden interesar: ${artistasRelacionados}`);
