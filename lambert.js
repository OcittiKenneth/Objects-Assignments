/*Assignment one
Create five objects with 5 properties and two methods*/
//first object car
var car={
    model: "Toyota",
    brand: "Vitz",
    type: "saloon",
    price:"5 million",

 moves: function(){
     //method description
    document.write(car.brand+" can move 230km a day"+"<br/>");
    document.write(car.brand+" is a "+ car.type+" car and its really fast. <br />");
 }
 lift:function(){
    document.write("This " +car.price + " saloon car can also lift luggage if loaded. <br />")
 }

}
//method invokation
car.moves();
car.lift();

// second object baby
var baby={
    name:"Eve",
    skinColor:"brown",
    age:3,
    weight:"35kg",

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
    name:"Gurney's eagle",
    length:"30cm",
    color:"dark brown",
    weight:"3.06kg", 
    location:"Australia",
    age:35,
    
    fly: function(){    
        //function definition
        document.write("<br />" +eagle.name+ " has wings that it uses to fly very high. ");
         },
    eat: function(){    
        //function definition
        document.write(" It views its prey 5km away using its eyes and uses its strong"+ 
        " claws to catch the prey and eat. <br />");
            },
    rebirth: function(){
        //function definition
        if (eagle.age>30){
            document.write(" The eagle plucks off its feathers, "+
            " beak and claws on rocks and bears new ones. <br />");
        }else{
            document.write(" It is still young and fresh. <br />");
        }

    }
}
//object method invokation
eagle.fly();
eagle.eat();
eagle.rebirth();

//fifth object soccerTeam
var soccerTeam={
    name:"Barcelona",
    players:15,
    coach:3,
    sponsor:1,
    
    engageInCompetitions: function(){   
         //function definition
        document.write("<br />"+soccerTeam.name+" plays over 300 matches annually. <br />");
        },
    entertainment: function(){   
         //function definition
         document.write(soccerTeam.players+" players are in barca and there are only ");
        document.write(soccerTeam.coach +" coaches.");
    },
    training: function(){
        document.write(" The team trains on tuesday, wednesday and friday.");
    }
}
//object method invokation
soccerTeam.engageInCompetitions();
soccerTeam.entertainment();
soccerTeam.training();
