var listul  = document.querySelector('#app ul');
var input  = document.querySelector('#app input');
var buttonElement  = document.querySelector('#app button');

items = [
    'Fazer curso',
    'Desenvolver App',
    'Fazer freela'
]

function renderItens () {
    listul.innerHTML = '';
    for(item of items ) {
        console.log(item);
        var itemElemento = document.createElement('li');
        var texto = document.createTextNode(item);
        
        itemElemento.appendChild(texto);
        listul.appendChild(itemElemento);
    }
}

renderItens();

function addItem() {
    var texto = input.value;
    items.push(texto);
    input.value = '';
    renderItens();
}
console.log(listul);