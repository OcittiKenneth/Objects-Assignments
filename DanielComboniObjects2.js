/**
 * @author Daniel Comboni
 */

/**
 * object item
 */

let item = {

    id: 1,
    name: 'fanta',
    category: 'soft drink',
    subCategory: 'soda',
    barcode: '12345',
  
    /**
     * creates/adds a new item.
     * @returns {String} message
     */
    addNewItem: function() {
  
      // adding a new item to stock
      let message = 'a new item ' + item.name + ' has been added';
  
      return message;
    },
  
    /**
     * sets the price of an item
     * @returns {String} message
     */
    setItemPrice: function() {
  
      // setting price of the item
      let message = 'the price of the item ' + item.name + ' has been set to 1000';
      return message;
    }
  
  }
  
  console.log(item.addNewItem());
  console.log(item.setItemPrice());
  
  
  let purchase = {
  
    id: 1,
    itemId: 1,
    unitCost: 1000,
    quantity: 2,
    totalCost: 2000,
  
    /**
     * calculates the total cost for the purchase.
     * @returns {Number} totalCost.
     */
    calculateTotalCost: function() {
  
      // calculating the total cost
      let totalCostOfTheItem = purchase.totalCost;
      return 'the total cost is: ' + totalCostOfTheItem;
    },
  
  
    /**
     * makes a purchase
     * @returns {String} message.
     */
    purchaseItem: function() {
  
      // purchasing a new item
      let message = 'a new item has been purchased';
      return message;
    }
  }
  
  console.log(purchase.calculateTotalCost());
  console.log(purchase.purchaseItem());
  
  /**
   *  object employee
   */
  
  let employee = {
  
    name: 'Mamboleo',
    email: 'mamboleo@gmail.com',
    password: 'the password',
    title: 'Manager',
    salary: '10,000,000',
  
    /**
     * attending meeting
     * @returns {String} message.
     */
  
    attendMeeting: function() {
      let message = 'the ' + employee.title + ' attended the meeting';
      return message;
    },
  
    /**
     * receive salary
     * @returns {String} message.
     */
    receiveSalary: function() {
      let message = 'the ' + employee.title + ' received salary of ' + employee.salary;
      return message;
    }
  
  }
  
  console.log(employee.attendMeeting());
  console.log(employee.receiveSalary());
  
  
  /**
   * object screen
   */
  
  let screen = {
  
    manufacturer: 'samsung',
    type: 'LCD',
    size: '32 inch',
    isTouch: false,
    curvature: 'curve',
  
    start: function() {
      let message = 'the screen is starting up';
      return message;
    },
  
    shutDown: function() {
      let message = 'screen is shutting down';
      return message;
    }
  
  }
  
  /**
   * object vehicle
   */
  
  // for the first assignment
  let vehicle = {
  
    model: 'X5',
    color: 'gray',
    yearOfMake: '2016',
    manufacturer: 'BMW',
    type: 'SUV',
  
  
    ignite: function() {
      let message = 'the vehicle is igniting...';
      return message;
    },
  
    accelerate: function() {
      let message = 'the vehicle is accelerating...';
      return message;
    }
  
  }
  
  console.log(vehicle.ignite());
  console.log(vehicle.accelerate());
  
  