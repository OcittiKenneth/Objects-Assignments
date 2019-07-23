/**/
var books = {
    title: "Chronicles of Narnia", author: "C.S Lewis", publishedDate: 1950 - 56, Genre: "Fantasy",

    copiesSoldWithRating: function (quantitySold) {

        if (quantitySold >= 500000) {
            console.log(books.author, " is Best Seller");
        }
        else {
            console.log(books.author, " is Not Best Seller");
        }
    },

    salesEarn: function (unitprice, quantitySold) {
        var totalSales = unitprice * quantitySold
        return totalSales
    }
}
console.log("Book Title = " + books.title + books.copiesSoldWithRating(951000) + "\n Earning from book Sales = " + books.salesEarn(50000,955000))

var temperature = {intensity:"high/low", 
                  converToCelsius: function(){
                    var fahrenheit = 32
                    var toCelsius = (fahrenheit - 32) * 5/9
                    return toCelsius
                  },

                  converToFahrenheit: function(){
                    var celcius = 100
                    var toFahrenheit = (celcius * 9/5) + 32 
                    return toFahrenheit
                  }
}
console.log(temperature.intensity,temperature.converToCelsius(),temperature.converToFahrenheit())

var taxi = { name: "toyota", color: "yellow",
           request: function(location, kmRadius) {
                    if (location <= 10 && kmRadius <= 5){
                      console.log("Request the Taxi.")
                    }
                    else if ((location >= 10 && location <= 100) && kmRadius >= 5 ){
                       console.log("Look for another Taxi in the Area.")
                    }
                    else{
                      console.log("No Taxi in the area, please try again")
                    }
                    },
           reject: function(time){
                    if (time <= 5)
                    {
                      console.log("Wait for the Person")
                    }
                    else {
                      console.log("Reject the Order from the Person")
                    }
           }
           }
 console.log(taxi.request(10,100),taxi.reject())

var courseUnits = {year: "Fourth", semester: "First",  
              marks: function() {
                     var networking = 70;
                     var mobileComputing = 75;
                     var programming = 80;
                     var gameDev = 85; 

                     var totalMarks = networking + mobileComputing + programming + gameDev                     
                     return totalMarks
              },
              
              grades: function() {
                     var average = courseUnits.totalMarks/4

                     if (average >= 85){
                       console.log("A")
                     }
                     else if (average >= 75 && average <=84){
                       console.log("B")
                     }
                     else if (average >= 60 && average <= 75){
                       console.log("C")
                     }
                     else if (average >= 45 && average <= 59){
                       console.log("D")
                     }
                     else {
                       console.log("F")
                     }
              }             
}

console.log(courseUnits.year, courseUnits.semester,courseUnits.marks(),courseUnits.grades())

var math = {number: "", 
               square: function (num2){
                      var num1 = num2 * num2;
                      return num1
},

    cylinderVolume: function (radius,height){
                var pie = 22/7
                var volume = pie * (radius * radius) * height

                return volume
    }
}

console.log(math.square(9),math.cylinderVolume(2,2))
