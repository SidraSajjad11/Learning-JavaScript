let product = {
  name : 'T-Shirt',
  price: 789,
  rating: {
    stars: 4.5,
    noOfReviews: 453,
  },
};

localStorage.setItem('product', JSON.stringify(product));
let product2 = JSON.parse(localStorage.getItem('product'));
console.log(product2);
localStorage.removeItem('Name');
localStorage.clear();