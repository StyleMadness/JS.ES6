class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi it's ${this.name}`);
  }
}

class ProtoStudent {
  university = "MIT";
}

const student = Reflect.construct(Student, ["Sanya"]);

// console.log(student.__proto__ === ProtoStudent.prototype);

Reflect.apply(student.greet, { name: "Kishy" }, []);
console.log(Reflect.ownKeys(student));
Reflect.preventExtensions(student);

student.age = 25;
console.log(student);

console.log(Reflect.isExtensible(student));
