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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var index_1 = require('../../shared/index');
var order_form_component_1 = require('./order-form.component');
var HomeComponent = (function () {
    function HomeComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.all().subscribe(function (products) {
            _this.setProducts('poster', 'posters', products);
            _this.setProducts('poster_design', 'posterDesigns', products);
            _this.setProducts('video', 'videos', products);
            console.log(_this);
        });
    }
    HomeComponent.prototype.getVariations = function (products) {
        var _this = this;
        products.forEach(function (product) {
            _this.productService.variations(product).subscribe(function (variations) {
                product.variations = variations;
            });
        });
    };
    HomeComponent.prototype.setProducts = function (type, propName, products) {
        this[propName] = products.filter(function (product) { return product.type === type; });
        this.getVariations(this[propName]);
    };
    HomeComponent.prototype.qtyChange = function (opts) {
        console.log('qtyChange()', opts, this);
        this.orderForm.updateCart(opts.product, opts.variation, opts.qty);
    };
    __decorate([
        core_1.ViewChild('orderForm'), 
        __metadata('design:type', order_form_component_1.OrderFormComponent)
    ], HomeComponent.prototype, "orderForm", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'kmt-home',
            templateUrl: 'app/+home/components/home.component.html',
            styleUrls: ['app/+home/components/home.component.css'],
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, order_form_component_1.OrderFormComponent, index_1.PosterComponent, index_1.PosterDesignComponent],
        }), 
        __metadata('design:paramtypes', [index_1.ProductService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUMsZUFBZSxDQUFDLENBQUE7QUFDbkQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFFakUsc0JBQWlILG9CQUFvQixDQUFDLENBQUE7QUFDdEkscUNBQWlDLHdCQUF3QixDQUFDLENBQUE7QUFRMUQ7SUFRRSx1QkFBbUIsY0FBOEI7UUFSbkQsaUJBa0NDO1FBMUJvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQzNDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLFFBQW1CO1FBQWpDLGlCQU1DO1FBTEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsVUFBVTtnQkFDM0QsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxJQUFrRTtRQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBM0JEO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O29EQUFBO0lBWnpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDdEQsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLHlDQUFrQixFQUFFLHVCQUFlLEVBQUUsNkJBQXFCLENBQUM7U0FDM0csQ0FBQzs7cUJBQUE7SUFtQ0Ysb0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHFCQUFhLGdCQWtDekIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2UsIFByb2R1Y3RTZXJ2aWNlLCBQcm9kdWN0LCBQcm9kdWN0VmFyaWF0aW9uLCBQb3N0ZXJDb21wb25lbnQsIFBvc3RlckRlc2lnbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7T3JkZXJGb3JtQ29tcG9uZW50fSBmcm9tICcuL29yZGVyLWZvcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna210LWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLytob21lL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgT3JkZXJGb3JtQ29tcG9uZW50LCBQb3N0ZXJDb21wb25lbnQsIFBvc3RlckRlc2lnbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBuZXdOYW1lOiBzdHJpbmc7XG4gIHBvc3RlcnM6IFByb2R1Y3RbXTtcbiAgcG9zdGVyRGVzaWduczogUHJvZHVjdFtdO1xuICB2aWRlb3M6IFByb2R1Y3RbXTtcblxuICBAVmlld0NoaWxkKCdvcmRlckZvcm0nKSBvcmRlckZvcm06IE9yZGVyRm9ybUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5wcm9kdWN0U2VydmljZS5hbGwoKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnNldFByb2R1Y3RzKCdwb3N0ZXInLCAncG9zdGVycycsIHByb2R1Y3RzKTtcbiAgICAgIHRoaXMuc2V0UHJvZHVjdHMoJ3Bvc3Rlcl9kZXNpZ24nLCAncG9zdGVyRGVzaWducycsIHByb2R1Y3RzKTtcbiAgICAgIHRoaXMuc2V0UHJvZHVjdHMoJ3ZpZGVvJywgJ3ZpZGVvcycsIHByb2R1Y3RzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH0pO1xuICB9XG4gIFxuICBnZXRWYXJpYXRpb25zKHByb2R1Y3RzOiBQcm9kdWN0W10pIHtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLnZhcmlhdGlvbnMocHJvZHVjdCkuc3Vic2NyaWJlKCh2YXJpYXRpb25zKSA9PiB7XG4gICAgICAgIHByb2R1Y3QudmFyaWF0aW9ucyA9IHZhcmlhdGlvbnM7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJvZHVjdHModHlwZTogc3RyaW5nLCBwcm9wTmFtZTogc3RyaW5nLCBwcm9kdWN0czogUHJvZHVjdFtdKSB7XG4gICAgdGhpc1twcm9wTmFtZV0gPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnR5cGUgPT09IHR5cGUpO1xuICAgIHRoaXMuZ2V0VmFyaWF0aW9ucyh0aGlzW3Byb3BOYW1lXSk7XG4gIH1cblxuICBxdHlDaGFuZ2Uob3B0czoge3Byb2R1Y3Q6IFByb2R1Y3QsIHZhcmlhdGlvbjogUHJvZHVjdFZhcmlhdGlvbiwgcXR5OiBudW1iZXJ9KSB7XG4gICAgY29uc29sZS5sb2coJ3F0eUNoYW5nZSgpJywgb3B0cywgdGhpcyk7XG4gICAgdGhpcy5vcmRlckZvcm0udXBkYXRlQ2FydChvcHRzLnByb2R1Y3QsIG9wdHMudmFyaWF0aW9uLCBvcHRzLnF0eSk7XG4gIH1cbn1cbiJdfQ==
