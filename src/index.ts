
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
    sayHello(): string;
}

const bot1: robot = {
    id:1,
    name:"megabot",
};

const bot2: robot2 = {
    id: 1,
    name: "megabot",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot {
    id: number;
    name: string;

    constructor(id,name) {
        this.id= id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
    
}
const p = new Pessoa(1, "bruno");

// classes

class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    protected attack(): void {
        console.log(`atacando com ${this.skill} pontos`);
    }
}

//Character:superclass
//Magician:subclass
class Magician extends Character {
    magicPoints:number;
    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

/* 
    data modifiers
    public
    private
    protected
*/

const p1 = new Character("Batman",10, 98);
const p2 = new Magician("mago", 09, 30, 100);
console.log(p1);

//generics  
function concatArray<T>(...itens: T[]):T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["bruno","mendonça"],["gusmão"]);
console.log(numArray);
console.log(stgArray);

function apiVersion(version: string) {
    return (target) => {
        Object.assign(target.prototype, {__version__: version, __name__: "bruno"});
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();

console.log(api);

