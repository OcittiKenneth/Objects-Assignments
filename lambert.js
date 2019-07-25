//first object car
var car={
    model: "toyota",
    brand: "vitz",
    type: "saloon",

 moves: function(){
     //method description
    document.write(car.brand+" can move 230km a day"+"<br/>");
    document.write(car.brand+" is a "+ car.type+" car and its really fast. <br />");
 }

}
//method invokation
car.moves();

// second object baby
var baby={
    name:"Eve",
    skinColor:"brown",
    age:3,

    cry: function(){    
        //function definition
        document.write("<br />The name of the baby is "+ baby.name +" and it is "+baby.skinColor +" aged "+ baby.age);
        document.write(". The baby only cries when it is hungry.");
    },
    feed: function(){
        if (baby.age<2){
            document.write(baby.name +"feeds on milk alone and ");
        }else{
            document.write(baby.name +" can feed on any other soft food <br />");
        }

    }
}
//object method invokation
baby.cry();
baby.feed();

//third object bicycle
var bicycle={
    type:"sports byke",
    numberOfWheels:2,
    brakes:2,
    gears:6,
    
    accelerate: function(){   
         //function definition
        document.write("<br />This is a "+ bicycle.type +". It has "+bicycle.numberOfWheels +"and can accelerate at 25km/hr.");
        document.write(" However, the braking system is not good since it has only "+ bicycle.brakes +
        " brakes");
    },
    changingGears: function(){
        document.write("<br /> The "+bicycle.type+" has a maximum of "+ bicycle.gears+ 
        " and all gears have differnt roles. "+"<br />");
        }
}
//object method invokation
bicycle.accelerate();
bicycle.changingGears();

//fourth object eagle
var eagle={
    beak:"a strong beak",
    wings:2,
    age:3,
    claws:10,
    eyes:2,

    fly: function(){    
        //function definition
        document.write("<br />The eagle has "+ eagle.wings +" that it uses to fly very high. ");
         },
    eat: function(){    
        //function definition
        document.write(" An eagle views its prey 5km away using its "+eagle.eyes +
        "and its strong "+eagle.claws+" claws to catch the prey and eat. <br />");
            },
    pluckOffFeathers: function(){
        //function definition
        if (eagle.age>2){
            document.write("The eagle plucks off its feathers, "+
            " beak and claws on rocks and bears new ones <br />");
        }else{
            document.write("the eagle flies higher in the skies <br />");
        }

    }
}
//object method invokation
eagle.fly();
eagle.eat();
eagle.pluckOffFeathers();

//fifth object soccerTeam
var soccerTeam={
    name:"Barcelona",
    players:15,
    coach:3,
    sponsor:1,
    
    playMatches: function(){   
         //function definition
        document.write("<br />"+soccerTeam.name+" plays over 300 matches annually. <br />");
        },
    entertainment: function(){   
         //function definition
        document.write(soccerTeam.players+" players are in barca and has ");
        document.write(soccerTeam.coach +" coaches.");
    },
    training: function(){
        document.write(" The team trains on tuesday, wednesday and friday.");
    }
}
//object method invokation
soccerTeam.playMatches();
soccerTeam.entertainment();
soccerTeam.training();
