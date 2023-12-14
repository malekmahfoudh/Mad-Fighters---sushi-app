
export async function getProductsWithQuantity(data) {
  const count = {};
  for(let product of data) {
      if(count[product.title]) {
          // if the product is already in the object, add 1 to the quantity
          count[product.title].quantity += 1;
      } else {
          // if not, add the product to the object and set the quantity to 1
          // also store the whole product object
          count[product.title] = { product, quantity: 1 };
      }
  }
  //return an array of objects with the product and the quantity
  return Object.values(count);
}