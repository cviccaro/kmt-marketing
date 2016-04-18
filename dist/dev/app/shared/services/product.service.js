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
var index_1 = require('../index');
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.all = function (type) {
        var products = [
            new index_1.Product('Beyond Evolution Overview Poster', 'poster', 'Beyond Evolution Posters', '', 500, 1),
            new index_1.Product('Beyond Evolution EASY Poster - Surface Finish', 'poster', 'Beyond Evolution Posters', '', 600, 2),
            new index_1.Product('Beyond Evolution EASY Poster - Saving Money', 'poster', 'Beyond Evolution Posters', '', 750, 3),
            new index_1.Product('Beyond Evolution EASY Poster - Productivity', 'poster', 'Beyond Evolution Posters', '', 900, 4),
            new index_1.Product('Ethics Poster', 'poster_design', 'Corporate Poster Designs', '', 1000, 5),
            new index_1.Product('CIO100 Award Poster', 'poster_design', 'Corporate Poster Designs', '', 1000, 6),
            new index_1.Product('Beyond Evolution DVD', 'video', 'Beyond Evolution Video', '', 425, 7),
            new index_1.Product('Beyond Evolution Video File', 'video', 'Beyond Evolution Video', '', 0, 7),
        ];
        if (type) {
            products = products.filter(function (product) { return product.type === type; });
        }
        return Observable_1.Observable.create(function (observer) {
            observer.next(products);
        });
    };
    ProductService.prototype.variations = function (product) {
        var variations;
        var product_id = product.id;
        var i = product_id * 100;
        if (product.type === 'poster_design') {
            variations = [
                new index_1.ProductVariation(product_id, 'English', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'English', 'International Standard', 600, '', i++),
            ];
        }
        else if (product.type === 'video') {
            if (product.title === 'Beyond Evolution Video File') {
                variations = [
                    new index_1.ProductVariation(product_id, 'English', '', 425, 'save link as?', i++)
                ];
            }
            else {
                variations = [
                    new index_1.ProductVariation(product_id, 'English', '', 425, '', i++)
                ];
            }
        }
        else if (product.type === 'poster') {
            variations = [
                new index_1.ProductVariation(product_id, 'English', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'English', 'International Standard', 600, '', i++),
                new index_1.ProductVariation(product_id, 'German', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'German', 'International Standard', 600, '', i++),
                new index_1.ProductVariation(product_id, 'Italian', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'Italian', 'International Standard', 600, '', i++),
                new index_1.ProductVariation(product_id, 'Polish', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'Polish', 'International Standard', 600, '', i++),
                new index_1.ProductVariation(product_id, 'Portuguese', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'Portuguese', 'International Standard', 600, '', i++),
                new index_1.ProductVariation(product_id, 'Chinese', 'US Standard', 500, '', i++),
                new index_1.ProductVariation(product_id, 'Chinese', 'International Standard', 600, '', i++),
            ];
        }
        return Observable_1.Observable.create(function (observer) {
            observer.next(variations);
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBd0MsVUFBVSxDQUFDLENBQUE7QUFDbkQscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRzNDO0lBQUE7SUFnRUEsQ0FBQztJQS9EQSw0QkFBRyxHQUFILFVBQUksSUFBYTtRQUNoQixJQUFJLFFBQVEsR0FBYztZQUN6QixJQUFJLGVBQU8sQ0FBQyxrQ0FBa0MsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDakcsSUFBSSxlQUFPLENBQUMsK0NBQStDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzlHLElBQUksZUFBTyxDQUFDLDZDQUE2QyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1RyxJQUFJLGVBQU8sQ0FBQyw2Q0FBNkMsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUcsSUFBSSxlQUFPLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN0RixJQUFJLGVBQU8sQ0FBQyxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDNUYsSUFBSSxlQUFPLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xGLElBQUksZUFBTyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFB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USxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN2RSxJQUFJLHdCQUFnQixDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDbEYsSUFBSSx3QkFBZ0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMzRSxJQUFJLHdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDdEYsSUFBSSx3QkFBZ0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN4RSxJQUFJLHdCQUFnQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNuRixDQUFDO1FBQ0gsQ0FBQztRQUVELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVE7WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFoRUY7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWlFYixxQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksc0JBQWMsaUJBZ0UxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9kdWN0LCBQcm9kdWN0VmFyaWF0aW9ufSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2Uge1xuXHRhbGwodHlwZT86IHN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHZhciBwcm9kdWN0czogUHJvZHVjdFtdID0gW1xuXHRcdFx0bmV3IFByb2R1Y3QoJ0JleW9uZCBFdm9sdXRpb24gT3ZlcnZpZXcgUG9zdGVyJywgJ3Bvc3RlcicsICdCZXlvbmQgRXZvbHV0aW9uIFBvc3RlcnMnLCAnJywgNTAwLCAxKSxcblx0XHRcdG5ldyBQcm9kdWN0KCdCZXlvbmQgRXZvbHV0aW9uIEVBU1kgUG9zdGVyIC0gU3VyZmFjZSBGaW5pc2gnLCAncG9zdGVyJywgJ0JleW9uZCBFdm9sdXRpb24gUG9zdGVycycsICcnLCA2MDAsIDIpLFxuXHRcdFx0bmV3IFByb2R1Y3QoJ0JleW9uZCBFdm9sdXRpb24gRUFTWSBQb3N0ZXIgLSBTYXZpbmcgTW9uZXknLCAncG9zdGVyJywgJ0JleW9uZCBFdm9sdXRpb24gUG9zdGVycycsICcnLCA3NTAsIDMpLFxuXHRcdFx0bmV3IFByb2R1Y3QoJ0JleW9uZCBFdm9sdXRpb24gRUFTWSBQb3N0ZXIgLSBQcm9kdWN0aXZpdHknLCAncG9zdGVyJywgJ0JleW9uZCBFdm9sdXRpb24gUG9zdGVycycsICcnLCA5MDAsIDQpLFxuXHRcdFx0bmV3IFByb2R1Y3QoJ0V0aGljcyBQb3N0ZXInLCAncG9zdGVyX2Rlc2lnbicsICdDb3Jwb3JhdGUgUG9zdGVyIERlc2lnbnMnLCAnJywgMTAwMCwgNSksXG5cdFx0XHRuZXcgUHJvZHVjdCgnQ0lPMTAwIEF3YXJkIFBvc3RlcicsICdwb3N0ZXJfZGVzaWduJywgJ0NvcnBvcmF0ZSBQb3N0ZXIgRGVzaWducycsICcnLCAxMDAwLCA2KSxcblx0XHRcdG5ldyBQcm9kdWN0KCdCZXlvbmQgRXZvbHV0aW9uIERWRCcsICd2aWRlbycsICdCZXlvbmQgRXZvbHV0aW9uIFZpZGVvJywgJycsIDQyNSwgNyksXG5cdFx0XHRuZXcgUHJvZHVjdCgnQmV5b25kIEV2b2x1dGlvbiBWaWRlbyBGaWxlJywgJ3ZpZGVvJywgJ0JleW9uZCBFdm9sdXRpb24gVmlkZW8nLCAnJywgMCwgNyksXG5cdFx0XTtcblxuXHRcdGlmICh0eXBlKSB7XG5cdFx0XHRwcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC50eXBlID09PSB0eXBlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KHByb2R1Y3RzKTtcblx0XHR9KTtcblx0fVxuXG5cdHZhcmlhdGlvbnMocHJvZHVjdDogUHJvZHVjdCkgOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGxldCB2YXJpYXRpb25zOiBQcm9kdWN0VmFyaWF0aW9uW107XG5cdFx0Y29uc3QgcHJvZHVjdF9pZCA9IHByb2R1Y3QuaWQ7XG5cdFx0bGV0IGkgPSBwcm9kdWN0X2lkICogMTAwO1xuXG5cdFx0aWYgKHByb2R1Y3QudHlwZSA9PT0gJ3Bvc3Rlcl9kZXNpZ24nKSB7XG5cdFx0XHR2YXJpYXRpb25zID0gW1xuXHRcdFx0XHRuZXcgUHJvZHVjdFZhcmlhdGlvbihwcm9kdWN0X2lkLCAnRW5nbGlzaCcsICdVUyBTdGFuZGFyZCcsIDUwMCwgJycsIGkrKyksXG5cdFx0XHRcdG5ldyBQcm9kdWN0VmFyaWF0aW9uKHByb2R1Y3RfaWQsICdFbmdsaXNoJywgJ0ludGVybmF0aW9uYWwgU3RhbmRhcmQnLCA2MDAsICcnLCBpKyspLFxuXHRcdFx0XTtcblx0XHR9IGVsc2UgaWYgKHByb2R1Y3QudHlwZSA9PT0gJ3ZpZGVvJykge1xuXHRcdFx0aWYgKHByb2R1Y3QudGl0bGUgPT09ICdCZXlvbmQgRXZvbHV0aW9uIFZpZGVvIEZpbGUnKSB7XG5cdFx0XHRcdHZhcmlhdGlvbnMgPSBbXG5cdFx0XHRcdFx0bmV3IFByb2R1Y3RWYXJpYXRpb24ocHJvZHVjdF9pZCwgJ0VuZ2xpc2gnLCAnJywgNDI1LCAnc2F2ZSBsaW5rIGFzPycsIGkrKylcblx0XHRcdFx0XTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2YXJpYXRpb25zID0gW1xuXHRcdFx0XHRcdG5ldyBQcm9kdWN0VmFyaWF0aW9uKHByb2R1Y3RfaWQsICdFbmdsaXNoJywgJycsIDQyNSwgJycsIGkrKylcblx0XHRcdFx0XTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHByb2R1Y3QudHlwZSA9PT0gJ3Bvc3RlcicpIHtcblx0XHRcdHZhcmlhdGlvbnMgPSBbXG5cdFx0XHRcdG5ldyBQcm9kdWN0VmFyaWF0aW9uKHByb2R1Y3RfaWQsICdFbmdsaXNoJywgJ1VTIFN0YW5kYXJkJywgNTAwLCAnJywgaSsrKSxcblx0XHRcdFx0bmV3IFByb2R1Y3RWYXJpYXRpb24ocHJvZHVjdF9pZCwgJ0VuZ2xpc2gnLCAnSW50ZXJuYXRpb25hbCBTdGFuZGFyZCcsIDYwMCwgJycsIGkrKyksXG5cdFx0XHRcdG5ldyBQcm9kdWN0VmFyaWF0aW9uKHByb2R1Y3RfaWQsICdHZXJtYW4nLCAnVVMgU3RhbmRhcmQnLCA1MDAsICcnLCBpKyspLFxuXHRcdFx0XHRuZXcgUHJvZHVjdFZhcmlhdGlvbihwcm9kdWN0X2lkLCAnR2VybWFuJywgJ0ludGVybmF0aW9uYWwgU3RhbmRhcmQnLCA2MDAsICcnLCBpKyspLFxuXHRcdFx0XHRuZXcgUHJvZHVjdFZhcmlhdGlvbihwcm9kdWN0X2lkLCAnSXRhbGlhbicsICdVUyBTdGFuZGFyZCcsIDUwMCwgJycsIGkrKyksXG5cdFx0XHRcdG5ldyBQcm9kdWN0VmFyaWF0aW9uKHByb2R1Y3RfaWQsICdJdGFsaWFuJywgJ0ludGVybmF0aW9uYWwgU3RhbmRhcmQnLCA2MDAsICcnLCBpKyspLFxuXHRcdFx0XHRuZXcgUHJvZHVjdFZhcmlhdGlvbihwcm9kdWN0X2lkLCAnUG9saXNoJywgJ1VTIFN0YW5kYXJkJywgNTAwLCAnJywgaSsrKSxcblx0XHRcdFx0bmV3IFByb2R1Y3RWYXJpYXRpb24ocHJvZHVjdF9pZCwgJ1BvbGlzaCcsICdJbnRlcm5hdGlvbmFsIFN0YW5kYXJkJywgNjAwLCAnJywgaSsrKSxcblx0XHRcdFx0bmV3IFByb2R1Y3RWYXJpYXRpb24ocHJvZHVjdF9pZCwgJ1BvcnR1Z3Vlc2UnLCAnVVMgU3RhbmRhcmQnLCA1MDAsICcnLCBpKyspLFxuXHRcdFx0XHRuZXcgUHJvZHVjdFZhcmlhdGlvbihwcm9kdWN0X2lkLCAnUG9ydHVndWVzZScsICdJbnRlcm5hdGlvbmFsIFN0YW5kYXJkJywgNjAwLCAnJywgaSsrKSxcblx0XHRcdFx0bmV3IFByb2R1Y3RWYXJpYXRpb24ocHJvZHVjdF9pZCwgJ0NoaW5lc2UnLCAnVVMgU3RhbmRhcmQnLCA1MDAsICcnLCBpKyspLFxuXHRcdFx0XHRuZXcgUHJvZHVjdFZhcmlhdGlvbihwcm9kdWN0X2lkLCAnQ2hpbmVzZScsICdJbnRlcm5hdGlvbmFsIFN0YW5kYXJkJywgNjAwLCAnJywgaSsrKSxcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIubmV4dCh2YXJpYXRpb25zKTtcblx0XHR9KVxuXHR9XG59XG4iXX0=
