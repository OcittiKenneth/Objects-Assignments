//declaring object house with its properties 
var house = {
    location:"Gayaza",
    estate:"Jumia", 
    street:"Luwum",
    plot:120,
//declaring function construction basing on the number of peolple who worked in the building
    construction:function()
    {
        //asigning a value to the variable builder
        var builder ="The house was constructed by one plus one construction company" ;
        //returning the value of builder
        return builder;
    },
    
    work:function()
{
  var mason ="There were ninty four mason at the site";
  return mason
}

}
//printing out to the console
console.log(house.construction());
console.log(house.work());




//declaring object animal with its properties 
var animal = {
    name:"Cow",
    sex:"male",
    type:"crossbreed",
    cry:"moooooooo",
//declaring function country
    country:function(){
// asigning a value to the variable size
        var size="The cows were big in size from Germany";
        //returning the value of size
        return size;
    },

    resistence:function(){
        var quality ="High feeding animals of pastures"
        return quality;
    }

}
//printing out to the console
console.log(animal.country())
console.log(animal.resistence())
//declaring object plane with its properties 
var plane = {
    name:"Airline",
    model:"Boeing",
    manufacturer:"China",
    industry:"aircraft",
//declaring function distance
    distance:function() {
        //asigning a value to the variable speed
        var speed ="The plane travels at a very high speed per hour";
        //returning  the value of speed
        return speed;
    },

    seat:function(){
        var space ="It has a very wide capacity to carry so many people";
        return space;
    }


}
//printing out to the console
console.log(plane.distance())
console.log(plane.seat())
//declaring object school with its properties 
var school = {
    class:"form two",
    block:200,
    floor:"third",
    level:"Four",

//declaring function school
    Location:function(){
        //asigning a value to the variable distance
        var distance ="The school is not far from town centre";
        //returning the value of distance
        return distance;
    },

uniform:function(){
    var population ="The school has got a high population of students from senior oe to six class ";
    return population;
}

}
//printing out to the console
console.log(school.Location())
console.log(school.uniform())
//declaring object shoe with its properties 
var shoe = {
    name:"Levis",
    model:"sniker",
    size:42,
    colour:"Blue",
//declaring function manufacturer 
    manufacturer:function()
    {
        //asigning a value to the variable shoeless
        var shoeless ="This shoe is designed with two shoeless which make it flexible when walking with it";
        //returning the value of shoeless
        return shoeless;
    },

    height:function(){
        var fashion ="Yah this shoe has the latest design which is trending in this generation";
        return fashion;

    }

}
//printing out to the console
console.log(shoe.manufacturer())
console.log(shoe.height())
