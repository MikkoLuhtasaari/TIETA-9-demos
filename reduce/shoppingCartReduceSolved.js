const shoppingCart = [
  {
    name: "toothbrush",
    displayName: "Toothbrush max xClean",
    category: "hygiene",
    price: 2.99
  },
  {
    name: "offBrandCoke",
    displayName: "Not real cola",
    category: "foodAndDrinks",
    price: 0.99
  },
  {
    name: "offBrandHamburger",
    displayName: "Cheap burger for cheap people",
    category: "foodAndDrinks",
    price: 1.49
  },
  {
    name: "offBrandFries",
    displayName: "Not even the worst fries",
    category: "foodAndDrinks",
    price: 1.49
  }
];

// Calculating the total price:

// const totalPrice = shoppingCart.reduce((sum, shoppingItem) => sum + shoppingItem.price, 0);

// console.log(totalPrice);

// ----------------------------------------------------------------------

// Mapping items by their categories:

// const categories = ["hygiene", "foodAndDrinks"];

// const itemsByCategories = categories.map(category => shoppingCart.filter(shoppingItem => shoppingItem.category === category));

// itemsByCategories.map(category => category.map(item => console.log(item.name)));

// ----------------------------------------------------------------------

// Creating objects containing the prices for the different categories

// const pricesByCategory = categories.map(category =>
//   shoppingCart.filter(shoppingItem => shoppingItem.category === category)
//     .reduce((priceObject, shoppingItem) => {
//       priceObject[shoppingItem.category] = (priceObject[shoppingItem.category] || 0) + shoppingItem.price;
//       return priceObject;
//    }, Object.create({ "category": null })));

// pricesByCategory.map(price => console.log(price));