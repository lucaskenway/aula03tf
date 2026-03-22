// tf-04.js - Demonstração de conceitos centrais sobre funções em JavaScript

console.log("=== Uso básico de funções ===");
// Definindo uma função simples
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Chamando a função
console.log(saudacao("João"));
console.log(saudacao("Maria"));

console.log("\n=== Função como valor em constante ===");
// Atribuindo uma função a uma constante
const multiplicar = function(a, b) {
    return a * b;
};

// Chamando a função através da constante
console.log(`2 * 3 = ${multiplicar(2, 3)}`);
console.log(`5 * 4 = ${multiplicar(5, 4)}`);

console.log("\n=== Uso de função em objeto como método ===");
// Criando um objeto com um método
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
};

// Chamando os métodos do objeto
console.log(`5 + 3 = ${calculadora.somar(5, 3)}`);
console.log(`10 - 4 = ${calculadora.subtrair(10, 4)}`);

console.log("\n=== Exemplo de callback ===");
// Usando uma função como callback em um array
const numeros = [1, 2, 3, 4, 5];

// Função callback para dobrar cada número
function dobrar(num) {
    return num * 2;
}

// Usando forEach com callback
console.log("Números originais:", numeros);
console.log("Números dobrados:");
numeros.forEach(function(num) {
    console.log(dobrar(num));
});

// Outro exemplo com setTimeout (callback assíncrono)
console.log("\nAguardando 1 segundo para mostrar callback assíncrono...");
setTimeout(function() {
    console.log("Callback executado após 1 segundo!");
}, 1000);