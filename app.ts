function greet(name:string){
  return "Hello," + name;
}
console.log(greet("Zee"));
 function petShop(pet:Pet){

 }
 //Base/parent class
 class Animal{
   type : string;
   noise : string;
   constructor(type, noise){
     this.type = type;
     this.noise = noise;
   }
   who():string{
     return `${this.type} says ${this.noise}`;
   }
 }

 //expected attributes and behaviours within an object
interface Pet {
  petName: string;
  sound(): string;
}

//inheritance
class Cat extends Animal implements Pet{
  petName: string;
constructor(petName,noise,type){
  super(type,noise);
  this.petName = petName;
}
  sound() : string{
    return this.noise;
  }
  who(){
    return `I am ${this.petName}:`+ super.who()
  }
}

class Dog extends Animal implements Pet{
  petName: string;
  constructor(petName,type,noise){
    super(type,noise);
    this.petName = petName;
  }
  sound():string{
    return 'waarf';
  }
}

function getName(pet: Pet){
  console.log(pet.petName)
}


var cow = new Animal('cow', 'moew');
console.log(cow.who());

var cat = new Cat('Mittens','miaaaw','Cat');
console.log(cat.who());
getName(cat);
