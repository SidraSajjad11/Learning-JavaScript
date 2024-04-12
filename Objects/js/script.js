let product = {
  company : "Mango",
  price : 861,
  item_name: "T_Shirt",
};
console.log(product);
console.log(product.company);
console.log(product.price);
console.log(product.item_name);
product.company = 'Banana';
console.log(product);

delete product.company;
console.log(product)