/*object with properties and values*/ 
var company={
    name:'Teltech',
    location:'Ntinda',
    yearsOfExistance:10,
    numberOfWorkers:75,
    
    updateWorkers:function(){
        var workers='We are happy'
        return workers
    }
}
console.log(company.numberOfWorkers);



var animal={
     name:'Donkey',
     color:'grey',
     age:28,
     updateAnimalAge:function(){
         var animalAge="The donkey is still young"
         return animalAge;
        
    }

 }
 console.log(animal.age);

 
var bird={
name:'Hen',
sex:"female",
breed:'exotic',
numberOfEggsLaid:37,

 eggs=function(){
   var eggsPresent="Hello we collect 37 eggs everyday "
}
}
console.log(bird.breed);

var person={
name:'Daniel',
age:23,
 eyeColor:'brown',

 personAge =function(){
 var old="I am older guys"
 return old
 }
}
console.log(person.age);
