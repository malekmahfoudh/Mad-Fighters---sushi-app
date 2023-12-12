export async function getProductsWithQuantity(data) {
    const count = {};
    for(let product of data) {
      // count the duplicates and add them to the object "COUNT" 
      // if the product is already in the object, add 1 to the quantity
      // if not, add the product to the object and set the quantity to 1
      //count[product.title] is the key of the object and the value is the quantity
      count[product.title] = (count[product.title] || 0) + 1; 
    }

    //return an array of objects with the product and the quantity
    //map(( [product,quantity] ) distructures the array into the product and the quantity
    return  Object.entries(count).map(([title,quantity] )=>  ({ title,quantity}));
}

