const order = {
    items: [
        {name: "laptop", price: 10000000, quantity: 1},
        {name: "Mouse", price: 200000, quantity: 2}
        
    ],
    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity),0);
    }
};

console.log("Total Pesanan: ", order.calculateTotal());
