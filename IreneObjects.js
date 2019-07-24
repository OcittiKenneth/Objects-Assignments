/* 
  declaration of an object cat with its different properties
  as defined below
*/
var cat = {
    name:"Kitty",
    gender:"female",
    color:"black",
    DoB:2018,
    food:"milk",

    // declaration of a function feed with a return statement
    feed:function(){
        var meal = "Kitty likes milk and meat!";
        return meal;
    },
    // declaration of a function sleep with a return statement
    sleep:function(){
        var nap = "Kitty normally sleeps at 2pm everyday";
        return nap;
    }
}

//printing the out put of the methods to the console
console.log("What is Kitty's best meal: "+cat.feed());
console.log("What time does kitty sleep: "+cat.sleep());


/* 
  declaration of an object pen with its different properties
  as defined below
*/
var pen = {
    name:"silver wave",
    color:"blue",
    brand: "smile",
    DoM:"2018",
    shape: "pointed",

    // declaration of a function write with a return statement
    write:function(){
        var noSkip = "My pen writes without skipping";
        return noSkip;
    },
    // declaration of a function break with a return statement
    break:function(){
        var work = "I can not use my pen because it is broken";
        return work;
    }
}
//printing the out put of the methods to the console
console.log(pen.write());
console.log(pen.break());


/* 
  declaration of an object puppy with its different properties
  as defined below
*/
var puppy ={
    name:"Tommy",
    gender:"male",
    color:"brown",
    DoB:2019,
    hobby:"wagging its tail",

    // declaration of a function play with a return statement
    play:function(){
      var jump = "My puppy jumps so high while playing";
      return jump;
    },
    // declaration of a function bark with a return statement
    bark:function(){
        var tough = "barks so much at strangers, it is a tough puppy";
        return tough;
    }
}
//printing the out put of the methods to the console
console.log(puppy.play());
console.log(puppy.name+" "+puppy.bark()); 
console.log("The name of my puppy is "+puppy.name+ "."+" It is a  "+puppy.gender+" "+puppy.color+ " "+"born of "+puppy.DoB+ " "+"and likes "+puppy.hobby);


/* 
  declaration of an object donkey with its different properties
  as defined below
*/
var donkey ={
    name:"Jayde",
    gender:"female",
    color:"gray",
    DoB:2017,
    origin:"Kenya",

    // declaration of a function eat with a return statement
    eat:function(){
        var diet = "likes hay and water";
        return diet;
    },
    // declaration of a function work with a return statement
    work:function(){
        var job = "transports all the laggage from the garden";
        return job;
    }
}
//printing the out put of the methods to the console
console.log(donkey.name+" "+donkey.eat());
console.log(donkey.name+" "+donkey.work());


/* 
  declaration of an object cow with its different properties
  as defined below
*/
var cow ={
    name:"Bihogo",
    gender:"female",
    color:"spotted",
    DoB:2017,
    owner:"Irene",
    
    // declaration of a function graze with a return statement
    graze:function(){
        var feeds = "likes feeding on grass";
        return feeds;
    },
    // declaration of a function run with a return statement
    run:function(){
        var sprint = "can run faster than all the cows";
        return sprint;
    }
}
//printing the out put of the methods to the console
console.log(cow.name+" "+"is a "+cow.gender+" "+cow.color+" cow born in  "+cow.DoB+"."+"It is owned by  "+cow.owner+ " "+"and "+cow.graze());
console.log(cow.name+" "+cow.run());
  
