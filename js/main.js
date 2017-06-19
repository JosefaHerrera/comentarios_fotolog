
//DOM
function dibujarComentario(nombre, comentario) {
    var divCreado = document.createElement('div');
    divCreado.setAttribute('class', 'post-contenido');
    var nombreUser = document.createElement('h4');
    var texto = document.createTextNode(nombre);
    nombreUser.appendChild(texto);
    divCreado.appendChild(nombreUser);
    var post = document.createElement('h6');
    var textoComentario = document.createTextNode(comentario);
    post.appendChild(textoComentario);
    divCreado.appendChild(post);
    return divCreado;
}
// Formulario boton guardar
var btnComentario = document.getElementById('btn-guardar');
btnComentario.addEventListener('click', hacerPost);
if (!window.localStorage.post) {
    window.localStorage.post = '[]';
}

//espacio para mostrar los comentarios
function creandoComentatios() {
    var contenedorPrincipal = document.getElementById('contenido-post');
    var comentariosActuales = datosUser();
    comentariosActuales.forEach(function(post) {
        contenedorPrincipal.appendChild(
            dibujarComentario(post.nombre, post.comentario)
        );
    });
}
creandoComentatios();

// Función para hacer el post
function hacerPost() {
    var nombre = document.getElementById('nombre');
    var comentario = document.getElementById('comentario');
    var contenedorPrincipal = document.getElementById('contenido-post');

    if (nombre.value !== '' && comentario.value !== '') {
        var nuevoDiv = dibujarComentario(nombre.value, comentario.value);
        contenedorPrincipal.appendChild(nuevoDiv);
        guardarComent(nombre.value, comentario.value);
        Limpia();
    } else {
        //validando espacios vacios
        alert('Pokemon, debes ingresar tu nombre o anon');
    }
}

//guardar comentarios
function guardarComent(nombre, comentario) {
    var posts = JSON.parse(window.localStorage.post);
    posts.push({
        nombre: nombre,
        comentario: comentario
    });
    window.localStorage.post = JSON.stringify(posts);
}

//Mostrar el post del pokemon
function datosUser() {
    return JSON.parse(window.localStorage.post);
}
// Limpia campos
function Limpia() {
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
}

var botonLimpiar = document.getElementById('btn-limpiar');
botonLimpiar.addEventListener('click', limpiarcomentarios);

function limpiarcomentarios() {
    var limpiar = document.getElementById('contenido-post');
    window.localStorage.post = '[]';
    limpiar.innerHTML = '';
}