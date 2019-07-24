/* Assignment One*/
var student = {
name:"osman",
gender:"both",
"dob": 1977,
greet:function()
{
var hey ="hey darling";
return hey;
}
}
document.write(student.greet());
/*End of assignment one*/

/*Beginning of Assignment Two*/
var car = {
make:"Mercedes",
model:"ML",
yom:2012,
color:"silver",
enginesize:3000,
availablity: "sold",
/* This first function, that will advertise the attributes of the object*/ 
advert:function()
{
console.log (car.make);
console.log (car.model);
console.log (car.yom);
console.log (car.enginesize);
    
},
/* This second function will inform if the vehicle is available or sold*/ 

updateadvert: function(){
if (car.availablity!="available")
{
    console.log("The car has been sold");
}
}
}
car.advert();
car.updateadvert();
/*End of assignment Two*/

/*Begining of assignment Three*/
var patient ={
firstName:"Doubting",
lastName: "Thomas",
diagnosis: "malaria",
weightkgs: 80,
pressure: "normal",
temp: 38,
medication: "quoatum",

/* a decision to admit or discharge patient depends on diagnosis and temperature*/
treatment:function(){
console.log(patient.diagnosis);
console.log(patient.temp);
},
message:function(){
if(patient.temp>36){
console.log("You have been admitted");
}
else{
console.log("you have been discharged");
}
}
}
patient.treatment();
patient.message();

/*End of Assignment Three*/

/*Beginnning of Assignment Four*/

var restaurant = {
Name: "Paradiso",
Location: "Muyenga",
Cusine: "Ethiopian",
Servicing: "Alcarte",
Amenties: "Sauna&Steam",

menuPrices(){
var pizza=30000;
var njera=20000;
var beer=5000;
var soda=3000;
var totalbill=(pizza+njera+beer+soda);

},
paymentMethod(){
if (restaurant.totalbill>50000){
    console.log("VISA accepted");
}
else{
    console.log("Cash only accepted")
}
}
}
restaurant.menuPrices();
restaurant.paymentMethod();
/*End of Assignment Three*/

/* Beginning of Assignment Five */
var houseHelp = {
var johnMatovu = 1,
var janeNamusoke = 2,
var robinaNaki = 3,
var boscoMusoke = 4,
var saraNambi = 5,

AssignID()
for(i=0; i>=5; i++)
{
console.log(houseHelp),
}



}












}
