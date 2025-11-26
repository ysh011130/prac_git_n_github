class Person {
	name : string;
	age : number;
	constructor(name : string, age : number) {
		this.name = name;
		this.age = age;
	}

	myName() {
		console.log("My name is " + this.name);
	}
	myAge() {
		console.log("I'm " + this.age + "years old");
	}
}
