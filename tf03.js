// tf03.js
// Exercício: demonstrar conceitos de objeto com array, iterações, cópia e JSON

// objeto principal com propriedades simples e um array interno
const pessoa = {
    nome: "Maria",
    idade: 28,
    profissao: "Desenvolvedora",
    habilidades: ["JavaScript", "HTML", "CSS"]
};

console.log("Objeto inicial:", pessoa);

// criação e uso de object já demonstrado acima
// uso de array dentro de object é a propriedade 'habilidades'

// iteração nas propriedades do objeto com for...in
console.log("\nIterando propriedades com for...in:");
for (let chave in pessoa) {
    console.log(chave, ':',     git add tf03.js
    git commit -m "Restaurada versão detalhada de tf03.js"
    git pushpessoa[chave]);
}

// iteração nos itens do array com for...of
console.log("\nIterando array de habilidades com for...of:");
for (let habilidade of pessoa.habilidades) {
    console.log(habilidade);
}

// comparação entre tipos de referência
const outraPessoa = pessoa; // copia por referência
console.log("\nCópia por referência (outraPessoa = pessoa):");
console.log("outraPessoa === pessoa?", outraPessoa === pessoa);

// exemplo de cópia com spread operator (shallow)
const copiaPessoa = {...pessoa};
console.log("\nCópia com spread operator (shallow):");
console.log("copiaPessoa === pessoa?", copiaPessoa === pessoa);

// modificação em uma propriedade simples e no array para observar comportamentos
copiaPessoa.nome = "João";
console.log("Depois de alterar copiaPessoa.nome:", copiaPessoa.nome, pessoa.nome);

// modificando o array interno para ver que o spread não clonou o array
copiaPessoa.habilidades.push('Node.js');
console.log("Depois de alterar copiaPessoa.habilidades:");
console.log("copiaPessoa.habilidades", copiaPessoa.habilidades);
console.log("pessoa.habilidades", pessoa.habilidades);

// transformação do objeto em JSON
const json = JSON.stringify(pessoa);
console.log("\nObjeto transformado em JSON:", json);

// final do exercício
console.log("\nExercício concluído com tf03.js");
