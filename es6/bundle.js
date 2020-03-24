"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Diego';
    return _this;
  }

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novoTudo').onclick = function () {
  MinhaLista.add('Novo tudo');
}; // Constantes


var usuario = {
  nome: 'diego'
};
usuario.nome = 'Jilcimar';
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

console.log(teste(10)); // Operações em Array

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0; //retornando os pares do array
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //Arrow functions

var newTeste = arr.map(function (item) {
  return item * 2;
});
console.log(newTeste);

var testeArrowFunction = function testeArrowFunction() {
  return {
    nome: 'Jil'
  };
};

console.log(testeArrowFunction); //Valores Padrão

function somaDefault() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(somaDefault(1));
console.log(somaDefault());

var somaDefaultArrow = function somaDefaultArrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(somaDefault(1));
console.log(somaDefault()); //Desestruturação

var user = {
  nome: 'jil',
  idade: 22,
  endereco: {
    cidade: 'rio',
    estado: 'rj'
  }
};
console.log(user);
var nome = user.nome,
    idade = user.idade,
    cidade = user.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); //Operadores Rest/Spread

var estado = {
  nomeEstado: 'rn',
  idadeEstado: 100
};

var nomeEstado = estado.nomeEstado,
    resto = _objectWithoutProperties(estado, ["nomeEstado"]);

console.log(nomeEstado);
console.log(estado); //SPREAD

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar3 = [].concat(ar1, ar2);
console.log(ar3); //Template Literals

var nome1 = 'jil';
var idade1 = 22; // console.log('Meu nome é ' + nome1 +'e tenho ' + idade1 + ' anos');

console.log("meu nome \xE9 ".concat(nome1, " e tenho ").concat(idade1, " anos."));
