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

// Total price

// let totalPrice = 0;

// for (let i = 0; i < shoppingCart.length; i++) {
//   totalPrice = totalPrice + shoppingCart[i].price;
// }

// console.log(totalPrice);

// ----------------------------------------------------------------------

// By category option 1

// let hygienePrice = 0;
// let foodAndDrinksPrice = 0;

// for (let i = 0; i < shoppingCart.length; i++) {
//   if (shoppingCart[i].category === "foodAndDrinks") {
//     foodAndDrinksPrice = foodAndDrinksPrice + shoppingCart[i].price;
//   } else if (shoppingCart[i].category === "hygiene") {
//     hygienePrice = hygienePrice + shoppingCart[i].price;
//   }
// }

// console.log(`Hygiene price: ${hygienePrice}`);
// console.log(`Food and drinks price: ${foodAndDrinksPrice}`);

// ----------------------------------------------------------------------

// By category option 2

// const priceByCategory = (array, category) => {
//   let totalPrice = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].category === category) {
//       totalPrice = totalPrice + array[i].price;
//     }
//   }
//   return totalPrice;
// };

// const categories = ["foodAndDrinks", "hygiene"];

// for (let i = 0; i < categories.length; i++) {
//   console.log(
//     `${categories[i]} price: ${priceByCategory(shoppingCart, categories[i])}`
//   );
// }
