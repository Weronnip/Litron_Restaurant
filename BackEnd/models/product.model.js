const products = [];

class Product {
    constructor(id_products, name_product, about_product, provider_product, quantity, price, id_suppliers) {
        this.id_products = id_products;
        this.name_product = name_product;
        this.about_product = about_product;
        this.provider_product = provider_product;
        this.quantity = quantity;
        this.price = price;
        this.id_suppliers = id_suppliers;
    }
    save() {
        Product.push(this);
    }
    static getAll() {
        return Product;
    }
}