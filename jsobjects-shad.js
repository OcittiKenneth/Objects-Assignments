/* this piece of code describes a house object*/
var house = {
    paint: "red",
    doors: 5,
    vents: 20,
    windows:15,
    rooms:30,


    /* in this object has 2 methods*/
    visit:function() {
        var enter="your most welcome";
        return enter;
        // we want to return "enter" behevior
    },
    come:function() {
        var entry="please come in a";
        return entry;
        // here we return "entry" behavior
    }
};

document.write(house.visit());
document.write("<br/>");
document.write(house.come());
document.write("<br/>");
document.write(house.paint);
document.write("<br/>");
document.write(house.doors);
document.write("<br/>");
document.write(house.vents);
document.write("<br/>");
document.write(house.windows);
document.write("<br/>");
document.write(house.rooms);


document.write("<br/>");
document.write("<br/>");
document.write("<br/>");





/* this piece of code shows the properties and methods of a shirt object*/
var shirt = {
    color: "blue",
    buttons: 5,
    sleev: "long",
    cola: "small",
    design:"chacked",

    /* in this object has 2 methods*/
    nice:function() {
        var ware="nice to put on";
        return ware;
        // we want to return "ware" behevior
    },
    clean:function() {
        var wash="easy to clean";
        return wash;
        // here we return "wash" behavior
    }
};

document.write(shirt.nice());
document.write("<br/>");
document.write(shirt.clean());
document.write("<br/>");
document.write(shirt.color);
document.write("<br/>");
document.write(shirt.buttons);
document.write("<br/>");
document.write(shirt.sleev);
document.write("<br/>");
document.write(shirt.cola);
document.write("<br/>");
document.write(shirt.design);



document.write("<br/>");
document.write("<br/>");
document.write("<br/>");





/* this piece of code shows the properties and methods of a projector object*/
var projector = {
    color: "white",
    buttons: 5,
    lens: "big",
    stand: "small",
    design:"double",

    /* in this object has 2 methods*/
   view:function() {
        var see="has a clear picture";
        return see;
        // we want to return "see" behevior
    },
    maintainance:function() {
        var repair="easy to repair";
        return repair;
        // here we return "wash" behavior
    }
};

document.write(projector.view());
document.write("<br/>");
document.write(projector.maintainance());
document.write("<br/>");
document.write(projector.color);
document.write("<br/>");
document.write(projector.buttons);
document.write("<br/>");
document.write(projector.lens);
document.write("<br/>");
document.write(projector.stand);
document.write("<br/>");
document.write(projector.design);




document.write("<br/>");
document.write("<br/>");
document.write("<br/>");





/* this piece of code shows the properties and methods of a garage object*/
var garage = {
    car: "22",
    bikes: 34,
    trucks: "33",
    spair: "many",
    tools:"few",
   
    /* in this object has 2 methods*/
   make:function() {
        var fix="we put your car back to the road";
        return fix;
        // we want to return "see" behevior
    },
    park:function() {
        var bay="we shower your car and find it clean";
        return bay;
        // here we return "wash" behavior
    }
};

document.write(garage.make());
document.write("<br/>");
document.write(garage.park());
document.write("<br/>");
document.write(garage.car);
document.write("<br/>");
document.write(garage.bikes);
document.write("<br/>");
document.write(garage.trucks);
document.write("<br/>");
document.write(garage.spair);
document.write("<br/>");
document.write(garage.tools);



