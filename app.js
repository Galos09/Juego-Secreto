//codigo 1
/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Bienvenido al juego';

let instruccion = document.querySelector('p');
instruccion.innerHTML = 'Ingresa un numero';
//Se crea la funcion intentoUsuario que se mandara a llamar en el index//boton 
function intentoUsuario(){
    alert('click del boton');
}
 */

//codigo 2
/* 
let numSecret = generaNumSecret(); 
let instruccion = document.querySelector('p');
instruccion.innerHTML = 'Ingresa un numero';

function validarIntento(){
    let numUsuario = parseInt(document.getElementById('ValorUsuario').value);
    console.log(numUsuario);
    //console.log(typeof(numUsuario)); 
    console.log(numSecret);
    //console.log(typeof(numSecret));
    console.log(numSecret == numUsuario);
    return;
    }


function asignarTexto(elemento, tex){
    let variableHtml = document.querySelector(elemento);
    variableHtml.innerHTML = tex;
    return;
    }


function generaNumSecret (){
    return Math.floor(Math.random()*10)+1; // retorna el valos que se esta dando
    }

asignarTexto('h1','Juego numero Secreto'); //Se manda a llamar a la funcion y se anexan los parametros que se asignaran a la funcion 
asignarTexto('p','Indica un numero...'); // se reutiliza el codigo para reasignar en un elemento diferente'p' y el texto que se agrega a ese elemento
 */


/* //codigo 3 
// ingresar condiciones mayor y menor
// Limpiar la caja 
// activar boton nuevo juego

let numSecret = generaNumSecret(); 
let instruccion = document.querySelector('p');
let intento = 0;
instruccion.innerHTML = 'Ingresa un numero';


function validarIntento(){
    let numUsuario = parseInt(document.getElementById('ValorUsuario').value);  
    if (numSecret == numUsuario){
        asignarTexto('p',`Muy Bien Acetaste el numero en ${intento} ${(intento == 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    }else {
        if (numUsuario > numSecret){
        asignarTexto('p','El numero es menor');
        }else {
        asignarTexto('p','El numero es mayor');
        }
        intento ++;
        limpiar();
    }
        return;
    }

function limpiar(){
    // document.querySelector('#ValorUsuario').value ='' ; // Estecodigo reduce las 2 siguientes lineas
    let valorCaja = document.querySelector('#ValorUsuario');
    valorCaja.value = '';
}

function asignarTexto(elemento, tex){
    let variableHtml = document.querySelector(elemento);
    variableHtml.innerHTML = tex;
    return;
    }

function generaNumSecret (){
    return Math.floor(Math.random()*10)+1; // retorna el valos que se esta dando
    }

function condicionInicial(){
    asignarTexto('h1','Juego del Numero Secreto');
    asignarTexto('p','Indica un numero del 1 al 10');
    numSecret = generaNumSecret(); 
    console.log(numSecret);
    intento = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiar();
    // indicar mensaje de intervalo de numeros
    // Generar numero aleatorio
    // inicializar numero de intentos 
    condicionInicial();
    //Deshabilitar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionInicial();

// Mensajes iniciales se agregan a un funcion llamada condicionInicial
// asignarTexto('h1','Juego numero Secreto'); //Se manda a llamar a la funcion y se anexan los parametros que se asignaran a la funcion 
// asignarTexto('p','Indica un numero...'); // se reutiliza el codigo para reasignar en un elemento diferente'p' y el texto que se agrega a ese elemento

 */



// Codigo 4
// agregamos una lista para evitar que el numero sorteado se repita  funcion push
// se agrega  variable numMaximo para controlar el bucle y el tamaño del arreglo
// 


let numSecret; 
let instruccion = document.querySelector('p');
let intento = 0;
let listaSorteo = [];
let numMaximo = 10;


function validarIntento(){
    let numUsuario = parseInt(document.getElementById('ValorUsuario').value);  
    if (numSecret == numUsuario){
        asignarTexto('p',`Muy Bien Acertaste el numero en ${intento} ${(intento == 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    }else {
        if (numUsuario > numSecret){
        asignarTexto('p','El numero es menor');
        }else {
        asignarTexto('p','El numero es mayor');
        }
        intento ++;
        limpiar();
    }
        return;
    }

function limpiar(){
   document.querySelector('#ValorUsuario').value ='' ; 
   }

function asignarTexto(elemento, tex){
    let variableHtml = document.querySelector(elemento);
    variableHtml.innerHTML = tex;
    return;
    }

function generaNumSecret (){
    let numeroGenerado = Math.floor(Math.random()*numMaximo)+1;
    console.log(numeroGenerado)
    if (listaSorteo.length == numMaximo){ // compara el tamaño de la lista con el numero maximo 
        asignarTexto('p', `Ya se han sorteado los ${numMaximo} numeros que existen`);
    }else {
        if (listaSorteo.includes(numeroGenerado)){ // recorre la lista en busca del parametro indicado
            return generaNumSecret();
        }else{ // si el numero no aparece en la lista se inserta 
            listaSorteo.push(numeroGenerado);
            return numeroGenerado;
            }
        }
    }

function condicionInicial(){
    asignarTexto('h1','Juego del Numero Secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numMaximo}`);
    numSecret = generaNumSecret(); 
    intento = 1;
    }

function reiniciarJuego(){
    limpiar();
    condicionInicial();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    }
    
condicionInicial();


















