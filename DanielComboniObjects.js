/**
 * @author Daniel Comboni
 */

/**
 * ********************************************************************************
 * object item
 * ********************************************************************************
 */

let item = {

  id: 0,
  name: '',
  category: '',
  subCategory: '',
  barcode: '',

  /**
   * creates/adds a new item.
   * @param {Number} itemId.
   * @param {String} itemName.
   * @param {String} itemCategory.
   * @param {String} itemSubcategory.
   * @param {String} itemBarcode.
   * @param {Array} theList.
   * @returns {item} item
   */

  addNewItem: function(itemId, itemName, itemCategory, itemSubcategory, itemBarcode, theList) {

    // defining an item to add to the list of items
    let anItem = {
      id: itemId,
      name: itemName,
      category: itemCategory,
      subCategory: itemSubcategory,
      barcode: itemBarcode
    }

    // adding the defined item (anItem) to the list
    theList.push(anItem);

    return anItem;
  },


  /**
   * updates/edits an item.
   * @param {item} oldItem.
   * @param {item} newItem.
   * @param {Array} theList.
   * @returns newItem.
   */
  updateItem: function(oldItem, newItem, theList) {

    // checking if the list contains the item to be replaced
    if (theList.includes(oldItem)) {

      // replacing the old item from the list with the new item
      theList.splice(theList.indexOf(oldItem), 1, newItem);
    }

    return newItem;
  },

  /**
   * 
   */

  /**
   * printing out all the items in stock
   * @param {Array} theList
   */
  printAllItems: function(theList) {

    for (let i = 0; i < theList.length; i += 1) {
      console.log(theList[i]);
    }

  }

} // end object item

/**
 * ********************************************************************************
 * object purchase 
 * ********************************************************************************
 */

let purchase = {

  id: 0,
  itemId: 0,
  unitCost: 0,
  quantity: 0,
  totalCost: 0,

  /**
   * calculates the total cost for the purchase.
   * @param {Number} oldItem.
   * @param {Number} newItem.
   * @returns total cost (theQuantity * theUnitCost).
   */
  calculateTotalCost: function(theQuantity, theUnitCost) {
    return theQuantity * theUnitCost;
  },


  /**
   * makes a purchase
   * @param {Number} thePurchaseId.
   * @param {Number} theItemId.
   * @param {Number} theUnitCost.
   * @param {Number} theQuantity.
   * @returns purchase.
   */
  purchaseItem: function(thePurchaseId, theItemId, theUnitCost, theQuantity, theList) {

    // defining a new purchase object
    let aNewPurchase = {
      id: thePurchaseId,
      itemId: theItemId,
      unitCost: theUnitCost,
      quantity: theQuantity,
      totalCost: purchase.calculateTotalCost(theQuantity, theUnitCost)
    }

    theList.push(aNewPurchase);
    return aNewPurchase;
  },


  /**
   * printing out all the purchases made
   * @param {Array} theList
   */
  printAllPurchases: function(theList) {

    for (let i = 0; i < theList.length; i += 1) {
      console.log(theList[i]);
    }

  }

} // end of purchase object


/**
 * ********************************************************************************
 * object pricing
 * ********************************************************************************
 */
let pricing = {

  id: 0,
  itemId: 0,
  price: 0,
  dateSet: '',
  timeSet: '',

  /**
   * sets price for a given item
   * @param {Number} theId.
   * @param {Number} theItemId.
   * @param {Number} theActualPrice.
   * @param {Date} dateOfSettingPrice.
   * @param {Time} timeOfSettingPrice.
   * @returns pricing.
   */

  setPrice: function(theId, theItemId, theActualPrice, dateOfSettingPrice, timeOfSettingPrice, theList) {

    let newPrice = {
      id: theId,
      itemId: theItemId,
      price: theActualPrice,
      dateSet: dateOfSettingPrice,
      timeSet: timeOfSettingPrice
    }

    theList.push(newPrice);

    return newPrice;
  },

  /**
   * printing out all the prices
   * @param {Array} theList
   */
  printAllPrices: function(theList) {

    for (let i = 0; i < theList.length; i += 1) {
      console.log(theList[i]);
    }

  }

}// end object pricing

/**
 * ********************************************************************************
 * object sale
 * ********************************************************************************
 */
let sale = {

  id: 0,
  itemId: 0,
  price: 0,
  quantity: 0,
  totalCost: 0,

  /**
   * calculates the total cost of the sale
   * @param {Number} theQuantity.
   * @param {Number} thePrice.
   * @returns {Number} total cost (theQuantity * thePrice).
   */
  calculateTotalCost: function(theQuantity, thePrice) {
    return theQuantity * thePrice;
  },


  /**
   * makes a new sale
   * @param {Number} theId.
   * @param {Number} theItemId.
   * @param {Number} thePrice.
   * @param {Number} theQuantity.
   * @returns {sale} sale.
   */
  makeASale: function(theId, theItemId, thePrice, theQuantity, theList) {

    let aNewSale = {
      id: theId,
      itemId: theItemId,
      price: thePrice,
      quantity: theQuantity,
      totalCost: sale.calculateTotalCost(theQuantity, thePrice),
    }

    theList.push(aNewSale);

    return aNewSale;
  },

  /**
   * printing out all the sales
   * @param {Array} theList
   */
  printAllSales: function(theList) {

    for (let i = 0; i < theList.length; i += 1) {
      console.log(theList[i]);
    }

  }

} // end object sale

/**
 * ********************************************************************************
 * object user
 * ********************************************************************************
 */

let user = {
  id: 0,
  email: '',
  password: '',
  name: '',
  role: '',

  /**
   * create a new user
   * @param {Number} theId.
   * @param {String} theEmail.
   * @param {String} thePassword.
   * @param {String} theName.
   * @param {String} theRole.
   * @param {Array} theList.
   * @returns {user} theNewUser.
   */
  createNewUser: function(theId, theEmail, thePassword, theName, theRole, theList) {

    let theNewUser = {

      id: theId,
      email: theEmail,
      password: thePassword,
      name: theName,
      role: theRole
    }

    theList.push(theNewUser);

    return theNewUser;
  },

  /**
   * printing out all the users
   * @param {Array} theList
   */
  viewAllUsers: function(theList) {

    for (let i = 0; i < theList.length; i += 1) {
      console.log(theList[i]);
    }

  }


} // end object user


/**
 * ***********************************************************
 * 
 * below the tests of each object and its respective methods
 * 
 * ***********************************************************
 */

// creating a new item and storing it in an array
let itemList = [];

// adding sample items to the item list
let itemOne = item.addNewItem(1, 'fanta', 'soft drink', 'soda', '11', itemList);
let itemTwo = item.addNewItem(2, 'passion juice', 'soft drink', 'casual', '12', itemList);

console.log('\nbefore making any update to any item in the list\n================================================')
// printing out the items before making an update to any item
item.printAllItems(itemList);

console.log()

// defining an item to update / replace one of the items in the list
let newItemOne = {
  id: 5,
  name: 'Coke',
  category: 'Soft Drink',
  subCategory: 'Soda',
  barcode: '4545'
}

// updating an item from the list
item.updateItem(itemList[1], newItemOne, itemList);

console.log('\nafter making an update\n======================');
// printing out the items after making a change
item.printAllItems(itemList);


// delcare the purchase array
let purchaseList = [];

// making new purchases
let purchaseOne = purchase.purchaseItem(1, 1, 1000, 2, purchaseList);
let purchaseTwo = purchase.purchaseItem(1, 5, 1500, 5, purchaseList);


console.log('\nprinting out records of all purchases\n=====================================');
// printing purchases before making any change to any single purchase made
purchase.printAllPurchases(purchaseList);

// declaring the pricing array
let pricingList = [];

// setting new prices
let date = new Date();
let pricingOne = pricing.setPrice(1, 1, 1500, `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`, `${date.getHours()}:${date.getMinutes()}`, pricingList);
let pricingTwo = pricing.setPrice(1, 5, 2000, `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`, `${date.getHours()}:${date.getMinutes()}`, pricingList);

// printing out prices
console.log('\nprinting out the prices of the items\n====================================');
pricing.printAllPrices(pricingList);


// declare the sale array
let saleList = [];

// creating and adding new sales made, to the sale list
let saleOne = sale.makeASale(1, itemList[0].id, pricingList[0].price, 10, saleList);
let saleTwo = sale.makeASale(2, itemList[1].id, pricingList[1].price, 5, saleList);

// printing out the sales
console.log('\nprinting out the list of all sales made\n=================================')
sale.printAllSales(saleList);

// declare the user array
let userList = [];

// creating and adding new users to the user list
let userOne = user.createNewUser(1, 'combo93@gmail.com', 'letalone', 'Combo', 'cleaner', userList);
let userTwo = user.createNewUser(2, 'daniyo@gmail.com', 'rebuff', 'Daniyo', 'guard', userList);

// printing out users
console.log('\nprinting out the list of all users\n==================================');
user.viewAllUsers(userList);