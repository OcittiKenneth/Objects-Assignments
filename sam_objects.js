/* declaring the object books and defining it with keys and its values */
var books = {
    title: "Chronicles of Narnia", author: "C.S Lewis", publishedDate: 1950 - 56, Genre: "Fantasy",
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
console.log("Book Title = " + books.title + "\nRated = " + books.copiesSoldWithRating(956000) + "\nEarning from book Sales = Shs." + books.salesEarn(50000, 955000))

/** =============================================================================================================================================================================== */

/* declaring the object temperature and defining it with keys and its values */
var temperature = {
    intensity: "high/low", humidity: "low",
    //declaring converToCelcius method/function and declaring a parameter fahrenheit
    converToCelsius: function (fahrenheit) {
        // formula for converting Fahrenheit to Celcius
        var toCelsius = (fahrenheit - 32) * 5 / 9

        // returning the value of Celcius
        return toCelsius
    },
    //declaring converFahrenheit method/function and declaring a parameter celcius
    converToFahrenheit: function (celcius) {
        // formula for converting Celcius to Fahrenheit
        var toFahrenheit = (celcius * 9 / 5) + 32

        // returning the value of Fahrenheit
        return toFahrenheit
    }
}
// printing out the values to the console by passing the appropriate arguments
console.log("Temperature Intensity = " + temperature.intensity + "\nCelcius = " + temperature.converToCelsius(32) + "C" + "\nFahrenheit = " + temperature.converToFahrenheit(100) + "F")

/**================================================================================================================================================================================ */

/* declaring the object math and defining it with keys and its values */
var math = {
    number: "",
    // declaring the method/function square and its parameter num2
    square: function (num2) {
        // formula for squaring 2 numbers
        var num1 = num2 * num2;

        //returning the value num1
        return num1
    },
    // declaring the method(function) cylinderVolume and its parameters radius and height
    cylinderVolume: function (radius, height) {
        // the constant value of Pi
        var pie = 22 / 7

        // the formula for finding the volume of a cylinder
        var volume = pie * (radius * radius) * height

        // returns the volume
        return volume
    }
}
// prints out the values by passing arguments
console.log("Square = " + math.square(9) + " units" + "\nVolume of Cylinder = " + math.cylinderVolume(2, 2) + " units")

/**================================================================================================================================================================================ */

/* declaring the object taxi and defining it with keys and its values */
var taxi = {
    name: "toyota", color: "yellow", numberPlate: "UAX24J",
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
    year: "Fourth", semester: "First",
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
