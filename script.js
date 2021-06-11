class Animal{

  constructor(name="default"){
    this.name = name;
  }

  printName(){
    console.log(this.name);
  }
}

var dog = new Animal("sam");
dog.printName();
//instance variables
//methods


// function greet(text="default greeting"){
//   console.log(text);
// }


// greet("good morning nigeria");
// greet();