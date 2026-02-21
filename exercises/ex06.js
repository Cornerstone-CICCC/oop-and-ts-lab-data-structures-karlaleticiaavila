// Create a function called storeCatalog that returns an object with 3 properties:
// - products (object with product names as keys and no. of instances of the product)
// - totalPrice
// - mostExpensive
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function storeCatalog(queue) {
  const catalog = {
    products: {},
    totalPrice: 0,
    mostExpensive: null
  };

  const tempQueue = new Queue();
  let maxPrice = -Infinity;

  while (!queue.isEmpty()) {
    const item = queue.dequeue();   
    tempQueue.enqueue(item);        

  
    catalog.totalPrice += item.price;

    
    if (catalog.products[item.product]) {
      catalog.products[item.product]++;
    } else {
      catalog.products[item.product] = 1;
    }

    
    if (item.price > maxPrice) {
      maxPrice = item.price;
      catalog.mostExpensive = item.product;
    }
  }

  
  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }

  return catalog;
}

const store = new Queue();
store.enqueue({ product: 'Milk', price: 10 })
store.enqueue({ product: 'Soap', price: 5 })
store.enqueue({ product: 'Cereal', price: 12 })
store.enqueue({ product: 'Milk', price: 10 })
store.enqueue({ product: 'Shampoo', price: 7 })
store.enqueue({ product: 'Broom', price: 25 })
store.enqueue({ product: 'Cereal', price: 9 })

const result = storeCatalog(store)
console.log(result)
// {
//   products: {
//     "Milk": 2,
//     "Soap": 1,
//     "Cereal": 2,
//     "Shampoo": 1,
//     "Broom": 1
//   },
//   totalPrice: 78,
//   mostExpensive: "Broom"
// }