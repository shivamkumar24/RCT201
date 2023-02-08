function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const details = new Person("Shivam", "Kumar", 22);
Person.prototype.nationality = "Indian";
console.log(details.nationality);
