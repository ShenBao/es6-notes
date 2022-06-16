class Animal {
  constructor(type) {
    this.type = type;
  }
  eat() {
    Animal.walk();
    console.log('i am food');
  }
  static walk() {
    console.log('i am flying');
  }
}
class Dog extends Animal {
  constructor(type) {
    super(type);
    this.age = 2;
  }
}
let dog = new Dog('dog');
dog.eat();

{
  class Animal {
    constructor(type) {
      this.type = type;
    }
    eat() {
      Animal.walk();
      console.log('i am food');
    }
    static walk() {
      console.log('i am flying');
    }
  }
  let dog = new Animal('dog');
  dog.eat();
}
