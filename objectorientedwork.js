<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        /*
function house(location,type,color,rooftype,norooms){
    this.location = location;
    this.type = type;
    this.color = color;
    this.rooftype = rooftype; 
    this. norooms = norooms;

}
var house1 = new house("vegas","flat","grey","red tiled","4");
// document.write(house1.location);

document.write(house1.type); 
document.write(house1.color);
document.write(house1.rooftype);
document.write(house1.norooms);

for(let key in house1)  {
    // document.write('<p> <b>'+ house1[key]+'</b><p>');
}
*/

// function showing its oject and there instances
function pen(brand,color,length,size,radius){
    this.brand = brand;
    this.color = color;
    this.length = length;
    this.size = size;
    this.type = type;
}// pen 1,2&3 are instances of the object above 
var pen1 = new pen("bic","black",10,"small","ballpoint");
var pen2 = new pen("nice","blue",12,"big","fountain");
var pen2 = new pen("ceilo","red",14,"medium","ballpoint");
//the 3 loops are created to iterate in the three created instances
for(let key in pen1) {
    document.write("<p> <b>"+ pen1[key]+ "</b><p>");
}
// object 2 function showing its object and there instances
function cup(size,color,shape,type){
    this.size = size;
    this.color = color;
    this.shape = shape;
    this.type = type;
}
// cup 1,2&3 are instances of the object above
    var cup1 = new cup("small","blue","circular","metallic");
   var cup2 = new cup("medium","red","square","plastic");
   var cup3 = new cup("big","black","oval","metallic");
   // the 3 loops are created to iterate in the created instances
for(let key in cup1) {
    document.write("<p><b>" + cup1[key]+ "</b><p>");
}




    </script>
</body>
</html>