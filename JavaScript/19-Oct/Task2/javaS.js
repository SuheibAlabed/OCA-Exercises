class person {
  constructor(fName, lName, age, gender, Address) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.gender = gender;
    this.Address = Address;
  }

  setPerson(fName, lName, age, gender, Address) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.gender = gender;
    this.Address = Address;
  }
  getPerson() {
    return this.setperson(
      this.fName,
      this.lName,
      this.age,
      this.gender,
      this.Address
    );
  }
}

class person_1 extends person {
  constructor(fName, lName, age, gender, Address) {
    super(fName, lName, age, gender, Address);
  }
}

const perosn1 = new person();
const perosn2 = new person_1();

//perosn2.setPerson("Ahmad", "abdallah", "34", "Male", "Irbid");
console.log(person.jobs.jobName);

class car {
  constructor(Model, color, year) {
    this.Model = Model;
    this.color = color;
    this.year = year;
  }
}

class animal {
  constructor(Name, age, gender) {
    this.Name = Name;
    this.age = age;
    this.gender = gender;
  }
}
