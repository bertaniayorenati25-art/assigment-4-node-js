const cart = {
  items: [],
  addProduct(product) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += product.quantity;
    } else {
      this.items.push({ ...product });
    }
  },
  removeProduct(id) {
    this.items = this.items.filter(item => item.id !== id);
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
};

cart.addProduct({ id: 1, name: "Baju", price: 100000, quantity: 1 });
cart.addProduct({ id: 1, name: "Baju", price: 100000, quantity: 2 });
cart.addProduct({ id: 2, name: "Celana", price: 150000, quantity: 1 });


console.log("Keranjang:", cart.items);
console.log("Total:", cart.getTotal());

cart.removeProduct(1);
console.log("Setelah Hapus ID 1:", cart.items);