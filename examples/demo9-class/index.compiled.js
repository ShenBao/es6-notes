'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.infos = [];
    }

    _createClass(Animal, [{
        key: 'drink',

        // type = 'water'这里的意思是当type未传值的时候默认是'water'
        value: function drink() {
            var _this = this;

            var type = arguments.length <= 0 || arguments[0] === undefined ? 'water' : arguments[0];

            // 使用了箭头函数
            setInterval(function () {
                // 模板字符串
                console.log(_this.name + ' want to drink ' + type);
            }, 1000);
        }

        // static 不需要 new 实例化类就可以用

    }, {
        key: 'info',
        get: function get() {
            return this.infos;
        },
        set: function set(i) {
            this.infos.push(i);
        }
    }], [{
        key: 'eat',
        value: function eat(food) {
            console.log(food);
        }
    }]);

    return Animal;
}();

var Pig = function (_Animal) {
    _inherits(Pig, _Animal);

    function Pig(name) {
        _classCallCheck(this, Pig);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Pig).call(this, name));
    }

    return Pig;
}(Animal);

var pig = new Pig('猪八戒');

pig.drink();

var bull = new Animal();

console.log(bull.info = 'aa');

Animal.eat('草');