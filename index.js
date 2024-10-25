// ESCREVENDO AS CLASSES DE UM JOGO
// Desafio proposto pelo Professor Felipe Aguiar, da DIO para o curso GFT Start 6 - Lógica de Programação

// Declarando o comando prompt-sync

const PromptSync = require("prompt-sync");

//Declarando a constante prompt e a variável ataque
let ataque = "";
const prompt = PromptSync();

//Declarando a classe heroi

class heroi{
    // definindo o método construtor da classe, com as propriedades de nome, idade e tipo do herói
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Definindo o método para definição do tipo de ataque do herói de acordo com sua classe/tipo
    AttackType(){
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shurikens";
                break;
            default:
                console.log("Informe um tipo de herói válido!"); // se o usuário informar um tipo de herói diferente dos outros, o programa informará um erro
                return false;
        }
        return true; // caso dê tudo certo, o método retorna como verdadeiro
    }
    // Definindo um método para dar uma mensagem de saída com o tipo do herói e o seu respectivo tipo de ataque
    mensagemSaida(){
        console.log(`O herói do tipo ${this.tipo} atacou usando ${ataque}`);
    }
}

// Definindo uma variável para armazenar as respostas do usuário
let AtaqueHeroi = new heroi(prompt('Qual o seu nome?'), prompt('Qual a sua idade?'), prompt('Qual seu tipo de herói?'));
let tipoAtaque = AtaqueHeroi.AttackType(); // Uma variável para armazenar o valor booleano e o valor do tipo de ataque também

//Condição final para mensagem de saída
if(tipoAtaque === true){
    AtaqueHeroi.mensagemSaida(); // se tudo der certo, o método da mensagem de saída sairá perfeitamente
} else{
    console.log("Não se pode prosseguir sem o tipo de herói válido! Tente novamente!") // Caso o método AttackType() retorne false, essa mensagem de erro é exibida
}

