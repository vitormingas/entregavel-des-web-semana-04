let nomes = ["João", "Maria", "Pedro"];
nomes.forEach(n => console.log("Olá, " + n + "!"));

let nomesMaiusculos = nomes.map(n => n.toUpperCase());

let precos = [10, 25, 40, 5, 60];
let precosCaros = precos.filter(p => p > 20);
let somaPrecos = precos.reduce((acc, p) => acc + p, 0);

let produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 4 },
    { nome: "Mochila", preco: 80 }
];

let nomesProdutos = produtos.map(p => p.nome);
let produtosBaratos = produtos.filter(p => p.preco < 50);
let somaProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);
produtos.forEach(p => console.log(`Nome: R$ ${p.preco}`));

let titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Vitor Gabriel";

let paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

let lista = document.querySelector("#lista");
lista.innerHTML = lista.innerHTML + "<li>Item innerHTML 1</li><li>Item innerHTML 2</li>";

let liNovo = document.createElement("li");
liNovo.textContent = "Terceiro item";
lista.append(liNovo);

liNovo.classList.add("destaque");
console.log(liNovo.classList.contains("destaque"));

let tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(t => {
    let liTarefa = document.createElement("li");
    liTarefa.textContent = t;
    lista.append(liTarefa);
});

document.querySelector("li").classList.add("feito");
console.log(document.querySelectorAll("li").length);

let botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

let inputNome = document.querySelector("#nome");
inputNome.addEventListener("keyup", () => {
    console.log(inputNome.value);
});

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

let liTeste = document.createElement("li");
liTeste.textContent = "Item de teste JS pro clique";
lista.append(liTeste);

let form = document.querySelector("#formulario");
let inputTarefa = document.querySelector("#tarefa");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let texto = inputTarefa.value.trim();
    
    if (texto !== "") {
        let novoLi = document.createElement("li");
        novoLi.textContent = texto;
        lista.append(novoLi);
        inputTarefa.value = "";
    }
});