"use strict";
var ProductVariation = (function () {
    function ProductVariation(product_id, lang, domestic, price, variation_id) {
        this.product_id = product_id;
        this.lang = lang;
        this.domestic = domestic;
        this.price = price;
        this.variation_id = variation_id;
    }
    return ProductVariation;
}());
exports.ProductVariation = ProductVariation;
