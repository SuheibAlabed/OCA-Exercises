class Person {
  #id = "";
  #name = "";
  #age = "";
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  Greeting = () => {
    console.log("Welcome!");
  };

  print = () => {
    console.log("id:" + this.id + "\nName:" + this.name + "\nAge:" + this.age);
  };
}

class Teacher extends Person {}

const Sobhi = new Teacher();
Sobhi.Greeting();

class Car {
  id = "";
  type = "";
  year = "";
  constructor(id, type, year) {
    // super(id);
    this.id = id;
    this.type = type;
    this.year = year;
  }
  star = () => {
    console.log("The Car is Running");
  };

  print = () => {
    console.log(
      "id:" + this.id + "\ntype:" + this.type + "\nYear:" + this.year
    );
  };

  count() {
    console.log("The Price : " + this.#price(2, 5));
  }

  #price(tax, Oprice) {
    return Oprice * tax;
  }
  // print1 = () => {
  //   return `id = ${this.id}, type: ${this.type}, Year: ${this.year}`;
  // };
}

class Animal {
  #id = id;
  #name = name;
  constructor(id, name, isPet) {
    this.id = id;
    this.name = name;
    this.isPet = isPet;

    function homeAnimal() {
      if (isPet) {
        return this;
      }
    }
  }

  print = () => {
    console.log(
      "id:" + this.id + "\nName:" + this.name + "\nisPet:" + this.isPet
    );
  };
}

function braces(obj) {
  console.log(obj);
}

const personObj_1 = new Person(19, "Suheib", 22);
const personObj_2 = new Person(12, "Mohammad", 35);

//braces(personObj_1);

const CarObj_1 = new Car(123, "k1", 1998);
CarObj_1.count();

// const CarObj_2 = new Car(342, "k2", 2011);
// CarObj_1.braces();
// CarObj_2.braces();
// const AnimalObj_1 = new Animal(432, "Cat", true);
// const AnimalObj_2 = new Animal(234, "Dog", false);
// AnimalObj_1.braces();
// AnimalObj_2.braces();

// const Sobhi = new Teacher();
// Sobhi.Greeting();
