//__________________________________________________________________________
// Funcoes.
//__________________________________________________________________________

// Declaracao de funcao.
function add(num1, num2) {
    return num1 + num2;
}

// Expressao de funcao (atribui um valor de funcao a variavel). 
/* Deve ser definida antes de ser utilizada */
var add = function(num1, num2) {
    return num1 + num2;
};


// Funcoes como valores.
/* Funcoes podem ser atribuidos como qualquer outro objeto */
function sayHi() {
    console.log('Hi!');
}
sayHi();    // Hi!

var sayHi2 = sayHi;
sayHi2();   // Hi!


// Passando uma funcao para outra funcao como argumento.
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];

numbers.sort();         // A funcao sort() convert todos os itens do array para string antes de efetuar a comparacao.
console.log(numbers);   // [ 1, 10, 2, 4, 5, 6, 7, 8 ]

numbers.sort(function(first, second){   // Funcao para ordenar um array numerico de modo preciso.
    return first - second;
});
console.log(numbers);   // [ 1, 2, 4, 5, 6, 7, 8, 10 ]


// Parametros.
/* O numero de argumentos passados para a funcao nao tem efeito sobre a aridade exibida */
function reflect(value) {
    return value;
}

console.log(reflect('Hi!'));        // Hi!
console.log(reflect('Hi!', 25));    // Hi!
console.log(reflect.length);        // 1

reflect = function() {
    return arguments[0];
};

console.log(reflect('Hi!'));        // Hi!
console.log(reflect('Hi!', 25));    // Hi!
console.log(reflect.length);        // 0

/* Uso de arguments quando nao sabemos quantos parametros serao necessarios. */
function sum() {    // aceita qualquer quantidade de parametros.
    var result = 0, 
        i = 0, 
        len = arguments.length;

    while (i < len) {
        result += arguments[i];
        i++;
    }

    return result;
}

console.log(sum(1, 2));         // 3
console.log(sum(3, 4, 5, 6));   // 18
console.log(sum(50));           // 50
console.log(sum());             // 0


// Sobrecarga.
    /* 
        Em javaScript quando varias funcoes sao definidas com o mesmo nome, 
        a funcao que aparecer por ultimo no codigo, sera a funcao a ser chamada 
    */
function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log('Default message');
}

sayMessage('Hello!!');  // exibe 'Default message'.

/* Para imitar o comportamento da sobrecarga, utiliza-se o objeto 'arguments' para validar o numero de parametros passados */
function sayMessage(message) {
    if (arguments.length === 0) {
        message = 'Default message';
    }

    console.log(message);
}

sayMessage('Hello!');   // Hello!
sayMessage();           // Default message


// Metodos de objetos
var person = {
    name: 'Nicolas',
    sayName: function() {
        console.log(person.name);
    }
};
person.sayName();

// Objetos this.
var person = {
    name: 'Nicolas',
    sayName: function() {
        console.log(this.name);
    }
};
person.sayName();

function sayNameForAll() {
    console.log(this.name); 
} 
var person1 = { name: "Nicholas", sayName: sayNameForAll }; 
var person2 = { name: "Greg", sayName: sayNameForAll }; 
var name = "Michael"; 

person1.sayName();  // Nicholas
person2.sayName();  // Greg
sayNameForAll();    // Michael


// Metodo call().
/* O primeiro parametro de call() é o valor que this deve ter quando a funcao for executada. 
    Os parametros seguintes correspondem aos parametros passados/esperados pela funcao */
function sayNameForAll(label) {
    console.log(label + ':' + this.name);
}

var name = 'Michael';
var person1 = { name: 'Nicolas' };
var person2 = { name: 'Greg' };

sayNameForAll.call(this, 'global');     // global:Michael
sayNameForAll.call(person1, 'objperson1');  // objperson1:Nicolas


// Metodo apply().
/* Funciona como metodo call(), no entanto so aceita  parametros this e um array ou objeto semelhante a array,
    desse modo ao inves de nomear individualmente cada parametros usando call, voce pode passar arrays para apply() */
function sayNameForAll(label) {
    console.log(label + ':' + this.name);
}

var name = 'Michael';
var person1 = { name: 'Nicolas' };
var person2 = { name: 'Greg' };

sayNameForAll.apply(this, ['global']);      // global:Michael 
sayNameForAll.apply(person1, ['obj1']);     // obj1:Nicolas 
sayNameForAll.apply(person2, ['obj2']);     // obj2:Greg
    

// Metodo bind().
/* O primeiro argumento de bind() corresponde ao valor de this para a nova funcao. Todos os demais argumentos representam 
    parametros nomeados que devem ser definidos permanentemente na nova funcao. */
function sayNameForAll(label) {
    console.log(label + ':' + this.name);
}

var person1 = { name: 'Nicolas' };
var person2 = { name: 'Greg' };

/* cria uma funcao somente para person1. */
var sayNameForPerson1 = sayNameForAll.bind(person1); 
sayNameForPerson1('person1');  // person1:Nicolas

/* cria uma funcao somente para person2 */ 
var sayNameForPerson2 = sayNameForAll.bind(person2, 'person2'); 
sayNameForPerson2();  // person2:Greg

/* associar um metodo a um objeto nao altera 'this' */ 
person2.sayName = sayNameForPerson1; 
person2.sayName('person2');  // person2:Nicolas
