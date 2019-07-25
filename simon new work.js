//statement
//statement

function airPlane (size, tires, pilot, wings, engine) {
    
    this.size = size;
    
    this.tires = tires;
    
    this.pilot = pilot;
    
    this.wings = wings;
    
    this.engine = engine;
}

var airPlane1 = new airPlane("big", "black", 2, 2, 1);

var airPlane2 = new airPlane("small", "blue", 3, 2, 2);

var airPlane3 = new airPlane("enormous", "green", 6, 2, 4);

document.write(airPlane1.engine);

for (let license in airPlane2) {
    
    document.write('<p> <b>' + airPlane2[license] + '</b> </p>')

}

function house (window, door, wall, room, floor) {

    this.window = window;
    
    this.door = door;
    
    this.wall = wall;
    
    this.room = room;
    
    this.floor = floor;

}

var houseA = new house(2, 3, 4, 2, "marble");

var houseB = new house(10, 6, 8, 5, "glass");

var houseC = new house(5, 1, 8, 1, "wood");

document.write(houseC.floor);

for (let build in houseC) {

document.write('<p> <b>' + houseC[build] + '</b> </p>');

}

function kingdom ( king, queen, gaurds, gold, servant) {

    this.king = king;

    this.queen = queen;

    this.gaurds = gaurds;

    this.gold = gold;

    this.servant = servant; 

}

var kingdomEast = new kingdom("male", "female", 1000, "kgs", 100);

var kingdomWest = new kingdom("male", "female", 500, "mgs", 10);

var kingdomNorth = new kingdom("male", "female", 10000, "tonnes", 1000);

document.write(kingdomNorth.queen);

for (let war in kingdomEast) {

    document.write('<p> <b>' + kingdomEast[war] + '</b> </p>');
}

function guitar (strings, neck, head, body, frets) {

    this.strings = strings;

    this.neck = neck;

    this.head = head;

    this.body = body;

    this.frets = frets;

}

var guitarElec = new guitar(6, 2, 2, "flat", 10);

var guitarBass = new guitar(4, 1, 1, "wide", 8);

var guitarAcoust = new guitar(6, 1, 1, "hollow", 12);

document.write(guitarBass.frets);

for (let pluck in guitarElec) {

    document.write('<p> <b>' + guitarElec[pluck] + '</b> </p>');
}

function concert (artiste, band, place, seat, mike) {

    this.artiste = artiste;

    this.band = band;

    this.place = place;

    this.seat = seat;

    this.mike = mike;

}

var ACDC = new concert("Evans", "ledZ", "stadium", 50000, 6);

var linkinPark = new concert("Chester", "jayZ", "arena", 30000, 8);

var paramore = new concert("hayley", "twiLight", "hall", 20000, 12); 

document.write(linkinPark.artiste);

for (let sound in paramore) {

    document.write('<p> <b>' + paramore[sound] + '</b> </p>');
}