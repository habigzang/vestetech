//const nome = "Marcelo Eltz";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz","Maria Silva","Pedro Silva"];

let pessoas = [
    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "Programador"         
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];

//console.log(pessoas);

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
};

function imprimirPessoas() {
    pessoas.forEach((item) =>{
        console.log("Nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.idade);
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

/*adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "porteiro" 
})

//console.log(pessoas);

adicionarPessoa({
    nome: "Frederico Oliveira",
    idade: "64",
    trabalho: "aposentado" 
})*/

//console.log(pessoas);

//console.log("valor inicial:");
//console.log(nome2);

//nome2 = "Pedro Silva";

//console.log("valor alterado:");
//console.log(nome2);

// function alterarNome() {
//     nome2 = "Maria Silva";
//     console.log("valor alterado:");
//     console.log(nome2);
// }

// function recebeEalteraNome(novoNome) {
//     nome2 = novoNome;
//     console.log("Valor alterado recebendo um nome:");
//     console.log(nome2);
// }

//console.log(nomes[2]); 

//-------------------------------

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

// console.log("1 ------------------");

// imprimirPessoa(pessoaDefault);

// console.log("2 ------------------");

/*imprimirPessoa({
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer"
})*/

// console.log("3 ------------------");

// console.log(pessoa);

// console.log("Nome:");
// console.log("(somente o nome)", pessoa.nome);

// console.log("Idade:");
// console.log("(somente a idade)", pessoa.idade);

// console.log("Trabalho:");
// console.log("(somente a profissão)", pessoa.trabalho);

// recebeEalteraNome("João Silva Pereira");
// recebeEalteraNome("Maria Silva");

// alterarNome();


// ao criar conta na tela de login
// document.getElementById("link-conta").addEventListener("click", function() {
//     console.log("O usuário clicou no link CRIAR CONTA");
// })