
//tipos primitivos: boolean, number, string  

let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 20;
let altura: number = 1.9;

//Undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void 
let retorno:void = undefined;
let retornoView:any = "bruno";

//objeto - sem previsibilidade 
let produto:object = {
    name:"bruno",
    idade:19,
    cidade:"Umuarama"
};

//objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: ProdutoLoja = {
    nome: "Blusa",
    preco: 29.99,
    unidades: 6
};


/**
 * arrays
 */

let dados: string[] = ["bruno", "ana", "trevor"];
let dados2: Array<string> = ["bruno", "ana", "trevor"];

let infos: (string | number)[] = ["bruno",30,"trevor","ana"];

/**
 * tuplas
 */

let boleto:[string,number,number] = ["bruno",19.9,3454567];

/**
 * arrays métodos
 */

dados.filter
dados.map
dados.push
dados.forEach

//funções

function addNumber(x:number, y:number): number {
    return x + y;
}

//função que aceita mais de um tipo ao mesmo tempo

function CallToPhone(phone: number | string): any {
    return phone;
}

console.log(CallToPhone("ligando"));

//funções assincronas 

async function getDatabase(id: number): Promise<string> {
    return "bruno";
}



let soma: number = addNumber(5,5);

console.log(soma);

//interfaces (type x interface)

type robot = {
    id: number;
    name: string;
};

interface robot2 {
    id: number;
    name: string;
}

const bot1: robot = {
    id:1,
    name:"megabot",
};

const bot2: robot2 = {
    id:1,
    name:"megabot",
};

console.log(bot1);
console.log(bot2);

