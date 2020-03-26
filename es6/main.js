class List {
    constructor () {
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List {
    constructor () {
        super();
        this.usuario  = 'Diego';
    }
}

var MinhaLista = new TodoList();

document.getElementById('novoTudo').onclick = function () {
    MinhaLista.add('Novo tudo');
}

// Constantes

const usuario = {nome: 'diego'};
usuario.nome = 'Jilcimar';

console.log(usuario);

function teste (x) {
    let y = 2;
    if(x> 5) {
        console.log(x,y);
    }
}

console.log(teste(10));

// Operações em Array

const arr = [1,2,3,4,5,6,7,8];

const  newArr = arr.map(function(item){
    return item*2;
});
console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;

});
console.log(sum);


const filter = arr.filter(function(item){
    return item%2===0; //retornando os pares do array
});
console.log(filter);


const find = arr.find(function(item){
    return item === 4;
});
console.log(find);

//Arrow functions

const newTeste = arr.map((item)=>item*2);

console.log(newTeste);

const testeArrowFunction = () => ({nome:'Jil'});

console.log(testeArrowFunction);


//Valores Padrão

function somaDefault(a = 3 ,b = 6) {
    return a+b;
}

console.log(somaDefault(1));
console.log(somaDefault());

const somaDefaultArrow = (a=3, b= 6)=> a+b;

console.log(somaDefault(1));
console.log(somaDefault());

//Desestruturação

const user = {
    nome: 'jil',
    idade:22,
    endereco: {
        cidade: 'rio',
        estado: 'rj',
    },
};

console.log(user);

const {nome, idade , endereco:{cidade}} = user;

console.log(nome);
console.log(idade);
console.log(cidade);

//Operadores Rest/Spread

const estado = {
    nomeEstado: 'rn',
    idadeEstado:100
}

const {nomeEstado, ...resto} = estado;

console.log(nomeEstado);
console.log(estado);

//SPREAD

const ar1 = [1,2,3];
const ar2 = [4,5,6];

const ar3 = [...ar1,...ar2];

console.log(ar3);

//Template Literals

const nome1 = 'jil';
const idade1 = 22;

// console.log('Meu nome é ' + nome1 +'e tenho ' + idade1 + ' anos');

console.log(`meu nome é ${nome1} e tenho ${idade1} anos.`);


import {somafunc} from './funcoes';

console.log(somafunc(2,2));

