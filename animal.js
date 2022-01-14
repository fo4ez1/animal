function Animal(name) {
    this.name = name;
    this.speed = 0;
}



Animal.prototype.run = function () {
    alert(this.name + " бежит!")
}




function Rabbit(name) {
    Animal.apply(this, arguments); 
}
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
    Animal.prototype.run.apply(this); 
    alert(this.name + " подпрыгивает!"); 

};

let rabbit = new Rabbit('Кролик');
rabbit.run();



function Dog(name) {
    Animal.apply(this, arguments); 
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
    Animal.prototype.run.apply(this); 
    alert(this.name + " виляет хвостом!"); 
};

let dog = new Dog('Пёс');
dog.run();



function Cat(name) {
    Animal.apply(this, arguments); 
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
    Animal.prototype.run.apply(this); 
    alert(this.name + " мурлыкает!"); 
};

let cat = new Cat('Кот');
cat.run();



function Cock(name) {
    Animal.apply(this, arguments); 
}
Cock.prototype = Object.create(Animal.prototype);
Cock.prototype.constructor = Cock;

Cock.prototype.run = function () {
    Animal.prototype.run.apply(this); 
    alert(this.name + " кудахчет!"); 
};

let cock = new Cock('Петух');
cock.run();



function Elephant(name) {
    Animal.apply(this, arguments); 
}
Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

Elephant.prototype.run = function () {
    Animal.prototype.run.apply(this); 
    alert(this.name + " топает!"); 
};

let elephant = new Elephant('Слон');
elephant.run();



function Snake(name) {
    Animal.apply(this, arguments); 
}


Snake.prototype.run = function () {

    alert(this.name + " шипит!"); 
};

let snake = new Snake('Змея');
snake.run();