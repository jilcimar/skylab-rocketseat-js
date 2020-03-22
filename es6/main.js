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

const MinhaLista = new TodoList();

document.getElementById('novoTudo').onclick = function () {
    MinhaLista.add('Novo tudo');
}