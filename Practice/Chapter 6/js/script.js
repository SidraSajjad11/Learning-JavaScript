let product = {
  name: 'jeans',
  size: 'S',
  fit: 'Slim Fit',
  'delivery-time': 'Same day delivery',
};
let copyProduct = product;
console.log(product);
copyProduct.size = 'M';
console.log(product);
copyProduct.fit = 'Regular fit';
console.log(product);

console.log(product['delivery-time']);

let obj = {
  message: 'Good Job',
  status: 'Compelete',
};
console.log(obj);
let {message, status} = obj;
console.log(message);
console.log(status);
function isIdenticalProduct(product1, product2) {
  if (typeof product1 !== 'object' || typeof product2 !== 'object') {
    console.warn('Parameter passed was not an object');
    return false;
  }
  if (product1 == product2){
    return true;
  }
  if(product1.name === product2.name && 
    product1.size === product2.size && 
    product1.fit === product2.fit){
    return true;
  } else {
    return false;
  }
}
let product2 = {
  name: 'jeans',
  size: 'M',
  fit: 'Slim Fit',
  'delivery-time': 'Same day delivery',
};
let product3 = {
  name: 'jeans',
  size: 'M',
  fit: 'Slim Fit',
  'delivery-time': 'Same day delivery',
};
console.log(isIdenticalProduct(product, ''));
console.log(isIdenticalProduct(product, product));
console.log(isIdenticalProduct(product, product2));
console.log(isIdenticalProduct(product2, product3));
console.log(isIdenticalProduct(product3, product2));