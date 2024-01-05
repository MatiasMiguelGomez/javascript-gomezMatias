const libreria = [];
const usuarios = [];
const sorteoSemanal = [];

class IngresoLibro {
  constructor(nombreLibro, fechaPublicacion, autor) {
    this.id = libreria.length + 1;
    this.nombreLibro = nombreLibro;
    this.fechaPublicacion = fechaPublicacion;
    this.autor = autor;
    this.disponible = true;
  }

  agregarLibreria() {
    libreria.push(this);
    console.log(`El libro ${this.nombreLibro} se agrego correctamente.`)
  }

  marcarNoDisponible() {
    this.disponibilidad = false;
    console.log(`${this.nombreLibro} ya no estara disponible.`)
  }
}

class IngresoUsuarios {
  constructor(nombreUsuario, edad, documento) {
    this.id = usuarios.length + 1;
    this.nombreUsuario = nombreUsuario;
    this.edad = edad;
    this.documento = documento;
  }

  agregarUsuario() {
    usuarios.push(this);
    console.log(`Bienvenido ${this.nombreUsuario}, ahora eres parte de nuestra comunidad.`)
  }
}

let nombreUsuario;
let edad;
let documento;
let nombreLibro;
let fechaPublicacion;
let autor;
let cantidadLibros;
let cantidadUsuarios;

cantidadLibros = prompt(`Ingrese la cantidad de libros que desea agregar.`);
while (isNaN(cantidadLibros) || cantidadLibros < 0) {
  alert(`Usted no ingreso un numero valido.`);
  cantidadLibros = prompt(`Ingrese la cantidad de libros que desea agregar.`);
}

for (let i = 0; i < cantidadLibros; i++) {
  nombreLibro = prompt(`Ingrese el nombre del libro.`);
  fechaPublicacion = prompt(`ingrese la fecha de publicacion del libro.`)
  while (isNaN(fechaPublicacion)) {
    alert(`Usted no ingreso un numero valido.`);
    fechaPublicacion = prompt(`Ingrese la cantidad de libros que desea agregar.`);
  }
  autor = prompt(`Ingrese el autor del libro.`);

  const libro = new IngresoLibro(nombreLibro, fechaPublicacion, autor);
  libro.agregarLibreria();
}

cantidadUsuarios = prompt(`Ingrese la cantidad de usuarios que desea agregar.`);
while (isNaN(cantidadUsuarios)) {
  alert(`Usted no ingreso un numero valido.`);
  cantidadUsuarios = prompt(`Ingrese la cantidad de usuarios que desea agregar.`);
}

for (let i = 0; i < cantidadUsuarios; i++) {
  nombreUsuario = prompt(`Ingrese el nombre del usuario.`);
  edad = prompt(`Ingrese la edad del usuario.`);
  while (isNaN(edad)) {
    alert(`Usted no ingreso un numero valido.`);
    edad = prompt(`Ingrese la edad del usuario.`);
  }
  documento = prompt(`Ingrese el numero de documento del usuario.`);
  while (isNaN(documento)) {
    alert(`Usted no ingreso un numero valido.`);
    documento = prompt(`Ingrese el numero de documento.`);
  }

  const usuario = new IngresoUsuarios(nombreUsuario, edad, documento);
  usuario.agregarUsuario();
}



alert(`A continuacion se hara un sorteo de 3 libros para los usuarios, donde podrán tener el libro 15 dias habiles tras el sorteo.
Para este sorteo solo participaran los usuarios mayores de edad.`);

const usuariosMayores = usuarios.filter(usuarios => usuarios.edad >= 18);

while (sorteoSemanal.length < 3) {
  let premio = Math.floor(Math.random() * libreria.length);
  let ganador = Math.floor(Math.random() * usuariosMayores.length);

  if (premio < libreria.length && ganador < usuariosMayores.length) {
    if (libreria[premio].disponible === true) {
      libreria[premio]. marcarNoDisponible();

      const premioDescripcion = [{premio:libreria[premio]},{ganador:usuariosMayores[ganador]}];
      sorteoSemanal.push(premioDescripcion);
    }
  }
}

sorteoSemanal.forEach(elemento => {
  console.log(elemento)
});
console.log(sorteoSemanal);
console.log(libreria);
console.log(usuarios);