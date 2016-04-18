"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var product_1 = require('../models/product');
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.all = function () {
        var products = [
            new product_1.Product('Beyond Evolution Overview Poster', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 5000, 1),
            new product_1.Product('Beyond Evolution EASY Poster - Surface Finish', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 6000, 2),
            new product_1.Product('Beyond Evolution EASY Poster - Saving Money', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 7500, 3),
            new product_1.Product('Beyond Evolution EASY Poster - Productivity', 'poster', 'Beyond Evolution Posters', '', 'eng', true, 9000, 4),
        ];
        return Observable_1.Observable.create(function (observer) {
            observer.next(products);
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
