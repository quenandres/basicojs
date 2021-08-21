// Declarativas

function miFuncion() {
    return 3
}

// Expresión o anonimas
var miFuncion = function(a,b){
    return a + b;
}

miFuncion()

/*

Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.


En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, 
tendríamos que declararla primero, y después mandarla llamar.

Hoisting

La definición de hoisting nos dice que las variables y funciones al ser declaradas se mueven físicamente hacia arriba en el código, es decir, el navegador las lee primero.
Internamente, lo que pasa es lo siguiente: JS pone las variables y funciones declaradas en memoria mientras está en la fase de compilación (eso hace que el navegador las lea primero),
pero en realidad siempre van a estar en el mismo sitio de tu código, nunca se mueven hacia arriba.
*/