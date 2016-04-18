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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFHM0M7SUFBQTtJQWFBLENBQUM7SUFaQSw0QkFBRyxHQUFIO1FBQ0MsSUFBSSxRQUFRLEdBQWM7WUFDekIsSUFBSSxpQkFBTyxDQUFDLGtDQUFrQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQy9HLElBQUksaUJBQU8sQ0FBQywrQ0FBK0MsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1SCxJQUFJLGlCQUFPLENBQUMsNkNBQTZDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUgsSUFBSSxpQkFBTyxDQUFDLDZDQUE2QyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzFILENBQUM7UUFFRixNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBYkY7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWNiLHFCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxzQkFBYyxpQkFhMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcblx0YWxsKCkgOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHZhciBwcm9kdWN0czogUHJvZHVjdFtdID0gW1xuXHRcdFx0bmV3IFByb2R1Y3QoJ0JleW9uZCBFdm9sdXRpb24gT3ZlcnZpZXcgUG9zdGVyJywgJ3Bvc3RlcicsICdCZXlvbmQgRXZvbHV0aW9uIFBvc3RlcnMnLCAnJywgJ2VuZycsIHRydWUsIDUwMDAsIDEpLFxuXHRcdFx0bmV3IFByb2R1Y3QoJ0JleW9uZCBFdm9sdXRpb24gRUFTWSBQb3N0ZXIgLSBTdXJmYWNlIEZpbmlzaCcsICdwb3N0ZXInLCAnQmV5b25kIEV2b2x1dGlvbiBQb3N0ZXJzJywgJycsICdlbmcnLCB0cnVlLCA2MDAwLCAyKSxcblx0XHRcdG5ldyBQcm9kdWN0KCdCZXlvbmQgRXZvbHV0aW9uIEVBU1kgUG9zdGVyIC0gU2F2aW5nIE1vbmV5JywgJ3Bvc3RlcicsICdCZXlvbmQgRXZvbHV0aW9uIFBvc3RlcnMnLCAnJywgJ2VuZycsIHRydWUsIDc1MDAsIDMpLFxuXHRcdFx0bmV3IFByb2R1Y3QoJ0JleW9uZCBFdm9sdXRpb24gRUFTWSBQb3N0ZXIgLSBQcm9kdWN0aXZpdHknLCAncG9zdGVyJywgJ0JleW9uZCBFdm9sdXRpb24gUG9zdGVycycsICcnLCAnZW5nJywgdHJ1ZSwgOTAwMCwgNCksXG5cdFx0XTtcblxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcblx0XHRcdG9ic2VydmVyLm5leHQocHJvZHVjdHMpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=
