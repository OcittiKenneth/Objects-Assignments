/*
This is an assignment where a learner creates  objects and methods . 
For each of the object created, it must have attributes and methods(functions)

*/
//OBJECT 1 (DOG)

//This object creates a dog object and gives it a method "bark" and "feed"
var dog = {
    name :"Killer",
    breed :"Alsatian",
    colour : "Black",
//This creates a method named "bark"
    bark: function(){
        var shout = "whoooooaaaaa"

        return shout
    },
//This creates a method named "feed"
    feed: function()
    {
        var eat = "eat like a champ"

        return eat
    }
}
//The lines below are for testing the attributes and methods for a "dog" object.
console.log(dog.name)
console.log(dog.breed)
console.log(dog.colour)
console.log(dog.bark())
console.log(dog.feed())

//OBJECT 2("SOLDIER")

//This object creates an object "Soldier" and gives it methods "fight" and "defend"
var soldier = {
    name : "Okia",
    age : 32,
    yearofBirth: 1987,
//This creates a method named "fight"
    fight: function(){
        var shoot = "tutututututut!"
        return shoot
    },
//This creates a method named "defend"
    defend : function(){
        var protect = "guard the Nation"
        return protect
    }
}
//The lines below are for testing the attributes and methods for a "Soldier" object.
console.log(soldier.name)
console.log(soldier.age)
console.log(soldier.fight())
console.log(soldier.defend())

//OBJECT 3(FARMER)

//This object creates a farmer and gives it methods "Dig" and "harvest"

var farmer = {
    name : "Faith",
    occupation : "farmer",
    location : "Kampala",
//This creates a method named "dig"
    dig: function(){
        var clearGarden = "farm like a donkey"
        return clearGarden
    },
//This creates a method named "harvest"
    harvest: function(){
        var reap = "pick everything from the garden"
        return reap
    }
}
//The lines below are for testing the attributes and methods for a "Farmer" object.
console.log(farmer.name)
console.log(farmer.occupation)
console.log(farmer.location)
console.log(farmer.harvest())

//OBJECT 4(PARLIAMENTARIAN)

//This object creates an object "Parliamentarian" and gives it methods "amend" and "legislate"
 var parliamentarian = {
     name: "Okia",
     age : 20,
     constituency :"Kanyum",
     district : "Kumi",
//This creates a method named amend
     amend: function(){
         var debate = "change the laws"
         return debate
     },
//This creates a method named legislate
     legislate : function(){
         var talk = "discuss laws"
         return talk
     }
 }
 //The lines below are for testing the attributes and methods for a "parliament" object.
 console.log(parliamentarian.name)
 console.log(parliamentarian.constituency)
 console.log(parliamentarian.amend())

 //OBJECT 5
//creates a bull object and gives it method "feed" and "plough"
 var bull = {
     name :"emong",
     height : 2.5,
     colour: "white",
//  This creates a method named "feed"
     feed: function(){
         var eat = "eat all the grass"
         return eat
     },
//This creates a method named "plough"
    plough: function(){
        var dig = "plough the garden"
        return dig
    }
 }
//The lines below are for testing the attributes and methods for a "bull" object.
 console.log(bull.name)
 console.log(bull.height)
 console.log(bull.plough())
