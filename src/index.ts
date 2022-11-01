
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

