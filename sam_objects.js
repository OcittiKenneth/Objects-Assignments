
/* declaring the object books and defining it with keys and its values */

var book = {
    title: "Chronicles of Narnia", 
    author: "C.S Lewis", 
    publishedDate: 1950 - 56, 
    Genre: "Fantasy",
    publisher: "Penguin",
    
    // method/function declaration for number of copies sold along with author ratings
    copiesSoldWithRating: function (quantitySold) {
        //conditional statement to check quantity of booksSold
        if (quantitySold >= 500000) {
            //returning the value of the function 
            return books.author + " is Best Seller" + "\nCopies Sold = " + quantitySold
        }
        else {
            return books.author + " is Not Best Seller"
        }
    },
    // method/function declaration to calculate the profit from the sales
    salesEarn: function (unitprice, quantitySold) {
        var totalSales = unitprice * quantitySold
        // returns a value totalSales
        return totalSales
    }
}
//print out the Book Title, Copies sold, Rating and Profit made from the sales
console.log("Book Title = " + book.title + "\nRated = " + book.copiesSoldWithRating(956000) + "\nEarning from book Sales = Shs." + book.salesEarn(50000, 955000))

/** =============================================================================================================================================================================== */

/* declaring the object temperature and defining it with keys and its values */
var weather = {
    intensity: "high/low", 
    humidity: "low",
    pressure: "high",
    hurricane: "medium",
    thunderstorm: "high"
    
    //declaring converToCelcius method/function and declaring a parameter fahrenheit
    highTemperature: function () {
        //assigning value to the variable heat
        var heat = "Heatwave Expected in the coming few weeks."

        // returning the value of heat
        return heat
    },
    //declaring converFahrenheit method/function and declaring a parameter celcius
    lowTemperature: function () {
        //assigning value to the variable cold
        var cold = "Very cold weather expected"

        // returning the value of cold
        return cold
    }
}
// printing out the values to the console by passing the appropriate arguments
console.log("Temperature Intensity = " + temperature.intensity + "\n" + temperature.highTemperature + "\n " + temperature.lowTemperature)

/**================================================================================================================================================================================ */

/* declaring the object math and defining it with keys and its values */
var fish = {
    name: "Willy",
    type: "Dolphin",
    gender: "Male",
    age: 5,
    weight: 50,
    
    // declaring the method/function swim
    swim: function () {
        //assigning value to the variable move
        var move = "swims very fast";

        //returning the value move
        return move
    },
    // declaring the method(function) sound
    sound: function () {
        // the constant value of Pi
        var pie = "makes a beautiful sound"

        // returns the volume
        return volume
    }
}
// prints out the values by passing arguments
console.log(fish.swim, fish.sound)

/**================================================================================================================================================================================ */

/* declaring the object taxi and defining it with keys and its values */
var taxi = {
    name: "toyota", 
    color: "yellow", 
    numberPlate: "UAX24J",
    seats: "4 seater",
    engineType: "XR4",
    
    //declaring method/function request and declaring two parameters
    request: function (location, kmRadius) {
        // conditional statement to check the exact location(longitude/lattitude) and kilometer radius of the Taxi
        if (location <= 10 && kmRadius <= 5) {
            //returns a value 
            return "Request the Taxi."
        }
        else if ((location >= 10 && location <= 100) && kmRadius >= 5) {
            return "Look for another Taxi in the Area."
        }
        else {
            return "No Taxi in the area, please try again"
        }
    },
    //declaring method/function reject and declaring one parameter            
    reject: function (time) {
        // condition to check whether the person arrives on time or not(unit is in minutes)
        if (time <= 5) {
            return "Wait for the Person"
        }
        else {
            return "\nReject the Order from the Person"
        }
    }
}
// printing to the console by passing the appropriate arguments to the functions
console.log(taxi.request(10, 100), taxi.reject(7))

/**================================================================================================================================================================================ */

/* declaring the object courseUnits and defining it with keys and its values */
var courseUnits = {
    year: "Fourth", 
    semester: "First",
    duration: "4 months",
    type: "accelerated learning",
    difficulty: "intermediate",
    
    //declaring the function marks and passing it 4 parameters
    marks: function (networking, mobileComputing, programming, gameDev) {
        // adding all the marks and assigning their sum to a variable totalMarks
        var totalMarks = networking + mobileComputing + programming + gameDev
        return totalMarks
    },

    // declaring the method/function grades
    grades: function (totalMarks) {
        var average = courseUnits.totalMarks / 4
        // grading with conditional statements
        if (average >= 85) {
            return "A"
        }
        else if (average >= 75 && average <= 84) {
            return "B"
        }
        else if (average >= 60 && average <= 75) {
            return "C"
        }
        else if (average >= 45 && average <= 59) {
            return "D"
        }
        else {
            return "F"
        }
    }
}
// printing the values by passing the correct arguments 
console.log("Academic Year = " + courseUnits.year, "\nSemester = " + courseUnits.semester, "\nTotal Marks = " + courseUnits.marks(80, 80, 80, 80), "\nGrade = " + courseUnits.grades())

/** =============================================================================================================================================================================== */
