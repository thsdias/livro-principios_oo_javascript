//__________________________________________________________________________
// TIPOS PRIMITIVOS.
//__________________________________________________________________________

// strings.
var name = 'Nicolas';
var selection = "a";

// number.
var cont = 25;
var cost = 1.51;

// boolean.
var found = true;

// null.
var object = null;

// undefined.
var flag = undefined;
var ref;    // undefined atribuido automaticamente


// Cada variavel que contem um valor primitivo usa seu proprio espaco de armazenamento.
var color1 = 'red';
var color2 = color1;
console.log(color1);    // red
console.log(color2);    // red
color1 = 'blue';
console.log(color1);    // blue
console.log(color2);    // red


// Identificando tipos primitivos => typeof:
console.log(typeof 'Nicolas');  // string
console.log(typeof 10);         // number
console.log(typeof 5.1);        // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object


// Metodos primitivos.
var name = 'Nicolas';                       // Nicolas
var lowerCasename = name.toLowerCase();     // nicolas
var firstLetter = name.charAt(0);           // N
var middleofName = name.substring(2, 5);    // col

var count = 10;                             // 10
var fixedCount = count.toFixed(2);          // 10.00
var hexCount = count.toString(16);          // a

var flag = true;                            // true
var stringFlag = flag.toString();           // true

console.log(name);
console.log(lowerCasename);
console.log(firstLetter);
console.log(middleofName);
console.log(count);
console.log(fixedCount);
console.log(hexCount);
console.log(flag);
console.log(stringFlag);


//__________________________________________________________________________
// TIPOS REFERENCIA.
//__________________________________________________________________________

// Criando objetos.
var object = new Object();


// Removendo referencia a objetos.
object = null;


// Adicionando ou removendo propriedades.
var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = 'Awesome!';
console.log(object2.myCustomProperty);  // Aponta para o mesmo objeto que object1 => Awesome!


// Instanciando tipos proprios.
var itens = new Array();
var now = new Date();
var error = new Error('Something bad happened');
var func = new Function(console.log('Hi'));
var objectX = new Object();
var regex = new RegExp('\\d+');


// Literal de objetos.
var book = {
    name: 'Principios de orientacao a objetos em JavaSccript',
    year: 2014
};

var book = { // strings literais para nomes de propriedades.
    "name": "Principios de orientacao a objetos em JavaSccript",
    "year": 2014,
    "name author": "Nicholas C. Zakas"  // define nome de propriedade usando espaco.
};

var book = new Object();
book.name = 'Principios de orientacao a objetos em JavaSccript';
book.year = 2014;


// Literal de arrays.
var colors = ['red', 'blue', 'green'];
console.log(colors[0]); // red.

var colors = new Array('red', 'blue', 'green');
console.log(colors[0]); // red.


// Literais de funcao.
function reflect(value) {
    return value;
}
/* 
semelhante a: 
    var reflect = new Function('value', 'return value');

    obs: atua como caixas pretas, e nao sao reconhecidas pelos debuggers de JavaScript.
*/

// Literais de expressoes regulares (permitem definir expressoes sem usar o construtor RegExp).
var numbers = /\d+/g;
/* 
semelhante a: 
    var numbers = new RegExp('\\d+', 'g');
*/


// Acesso a propriedades.
var arrary = [];
arrary.push(12345); // usando notacao de ponto.

var array = [];
array['push'](12345); // usando notacao de colchetes (permite caracteres especiais em nomes de propriedades).

var arrary = [];
var method = 'push';
arrary[method](12345);  // usando notacao de colchetes com variavel (permite caracteres especiais em nomes de propriedades).


// Identificando tipos de referencia.
var items = [];
var object = {};

function reflect(value) {
    return value;
}

/* Para todos os tipos de referencia que Nao seja funcao, operador typeof retornara 'object' */
console.log(typeof(items)); // object
console.log(typeof(object));  // object
console.log(typeof(reflect)); // function

/* Operador instaceof recebe um objeto e um construtor como parametros e retornara 'true' 
    quando o valor for ums instancia do tipo especificado pelo construtor */
console.log(items instanceof Array);    // true
console.log(object instanceof Object);  // true
console.log(reflect instanceof Function);   // true

/* Operador instanceof pode identificar tipo herdados. */
console.log(items instanceof Object);   // true
console.log(object instanceof Object);  // true
console.log(object instanceof Array);   // false
console.log(reflect instanceof Object); // true


// Identificando arrays.
/* Identifica definitivamente o valor como uma instancia de Array sem se importar com a origem do valor */
var items = [];
console.log(Array.isArray(items));  // true


// Tipos wrapper primitivos.
/* Tres tipos: String, Number, Boolean */
var name = "Nicolas";
var firstChar = name.charAt(0);
console.log(firstChar);
/*
internamente é convertido para:
    var name = "Nicholas"; 
    var temp = new String(name); 
    var firstChar = temp.charAt(0); 
    temp = null; 
    console.log(firstChar);
*/

var name = "Nicholas"; 
var count = 10; 
var found = false; 
console.log(name instanceof String); // false 
console.log(count instanceof Number); // false 
console.log(found instanceof Boolean); // false
