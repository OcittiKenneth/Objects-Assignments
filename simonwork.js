//Write 5 different objects with 5 attributes each with 2 methods.

var airPlane = {
    size   : "big",
    tires  : "black",
    pilot  : 2,
    wings  : 2,
    engine : 1,

    // above is the object airPlane with its 5 attributes

    fly : function(){
        var flight = "We need to go now";
        var speed = "What we need to soar";
        return [flight, speed];
        
        // above are the 2 methods flight and speed
    }
}
document.write(airPlane.wings)
document.write("<br/>")
document.write(airPlane.fly())


var house = {
    window : "2",
    door   : "3",
    wall   : "4",
    room   : "2",
    floor  : "marble",

    // object house with the 5 attributes

    build : function(){
        var workers = "only 6 will do";
        var materials = "very expensive";
        return [workers, materials];

        //the method build with its 2 behaviours
    }
}
document.write(house.wall)

var kingdom = {
    king    : "male",
    queen   : "female",
    gaurds  : 1000,
    gold    : "alot",
    servant : 100,

    //object is kingdom with its 5 attributes

    rule : function(){
        var people = "we need many subjects";
        var walls = "we need many of these";
        return [people, walls];
    }


}
document.write(kingdom.servant)

var guitar = {
    strings : 6,
    neck    : 1,
    head    : 1,
    body    : 1,
    frets   : 10,

//object is guitar with 5 attributes

    playIng : function(){
        var practice = "a lot of it";
        var time = "set it apart";
        return [practice, time];

        //the method playIng with 2 behaviours
    }
}
document.write(guitar.frets)

var concert = {
    artiste : "Simon",
    band    : "rocNation",
    place   : "stadium",
    seat    : 500,
    mike    : 10,

    //object is concert with 5 attributes

    perform : function(){
        var ticket = "sell as many as possible";
        var songs = "only the popular ones";
        return [ticket, songs];


        // the method is perfom with 2 behaviours
    }

}
document.write(concert.seat)



