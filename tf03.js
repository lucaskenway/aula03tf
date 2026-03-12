// tf03.js - versão simples
const obj = {
    nome: "Maria",
    idade: 28,
    prof: "Dev",
    skills: ["JS", "HTML", "CSS"]
};

console.log("inicial", obj);

console.log("\nfor...in:");
for (let k in obj) console.log(k, obj[k]);

console.log("\nfor...of:");
for (let s of obj.skills) console.log(s);

const ref = obj;
console.log("\nref === obj?", ref === obj);

const copia = {...obj};
console.log("copia === obj?", copia === obj);

copia.nome = "João";
console.log("nome copia/obj", copia.nome, obj.nome);

copia.skills.push("Node");
console.log("skills copia/obj", copia.skills, obj.skills);

console.log("\njson", JSON.stringify(obj));
