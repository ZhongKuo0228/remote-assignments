function avg(data) {
    let totalPrice = 0;
    for (i = 0; i < data.size; i++){
      totalPrice = totalPrice + data.products[i].price;
    }

    let avgPrice = totalPrice/data.size;
    return avgPrice;
}
console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
  ); // should print the average price of all products