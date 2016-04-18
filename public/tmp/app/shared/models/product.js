"use strict";
var Product = (function () {
    function Product(title, type, category, image, price, id) {
        this.title = title;
        this.type = type;
        this.category = category;
        this.image = image;
        this.price = price;
        this.id = id;
    }
    return Product;
}());
exports.Product = Product;
