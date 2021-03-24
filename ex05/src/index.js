class Microsoft {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  occupation() {
    return this._name + " is a philantropist!";
  }
  occupation() {
    let henry = "William Henry Gates III";
    return henry;
  }
}
class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  studentAge() {
    return this._name + " " + this.age;
  }
  occupation() {
    let elliot = "Mark Zuckerberg";
    return elliot.occupation;
  }
  studentAge() {
    let elliot = 23;
    return elliot.studentAge;
  }
}

console.log(henry.occupation());
module.exports = {
  Microsoft,
  Facebook,
};
