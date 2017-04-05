var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function greet(name) {
    return "Hello," + name;
}
console.log(greet("Zee"));
function petShop(pet) {
}
//Base/parent class
var Animal = (function () {
    function Animal(type, noise) {
        this.type = type;
        this.noise = noise;
    }
    Animal.prototype.who = function () {
        return this.type + " says " + this.noise;
    };
    return Animal;
}());
//inheritance
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(petName, noise, type) {
        _super.call(this, type, noise);
        this.petName = petName;
    }
    Cat.prototype.sound = function () {
        return this.noise;
    };
    Cat.prototype.who = function () {
        return ("I am " + this.petName + ":") + _super.prototype.who.call(this);
    };
    return Cat;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(petName, type, noise) {
        _super.call(this, type, noise);
        this.petName = petName;
    }
    Dog.prototype.sound = function () {
        return 'waarf';
    };
    return Dog;
}(Animal));
function getName(pet) {
    console.log(pet.petName);
}
var cow = new Animal('cow', 'moew');
console.log(cow.who());
var cat = new Cat('Mittens', 'miaaaw', 'Cat');
console.log(cat.who());
getName(cat);
