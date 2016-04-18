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
var OrderFormComponent = (function () {
    function OrderFormComponent() {
        this.cartTotal = 0;
        this.submission = new index_1.Submission();
    }
    OrderFormComponent.prototype.ngAfterViewInit = function () {
        console.log('OrderFormComponent view initialized.', this);
    };
    OrderFormComponent.prototype.formIsValid = function (orderForm) {
        return orderForm.form.valid && this.submission.cart.length != 0;
    };
    OrderFormComponent.prototype.onSubmit = function () {
        console.log('on submit!', this);
    };
    OrderFormComponent.prototype.updateTotal = function () {
        if (this.submission.cart.length) {
            this.cartTotal = this.submission.cart
                .map(function (item) { return item.cost * item.qty / 100; })
                .reduce(function (prev, val, index) { return prev + val; });
            ;
        }
    };
    OrderFormComponent.prototype.updateCart = function (product, v, qty) {
        console.log('orderForm.updateCart() called with', {
            product: product,
            variation: v,
            qty: qty
        });
        var desc = product.title + " - " + v.lang + " - " + v.size;
        var inCart = this.submission.cart.filter(function (item) { return item.product_id === product.id && item.variation_id === v.id; });
        if (inCart.length) {
            var index = this.submission.cart.indexOf(inCart[0]);
            if (qty === 0) {
                this.submission.cart.splice(index);
            }
            else {
                this.submission.cart[index] = new index_1.CartItem(product.id, v.id, desc, qty, v.price);
            }
        }
        else if (qty > 0) {
            this.submission.cart.push(new index_1.CartItem(product.id, v.id, desc, qty, v.price));
        }
        this.updateTotal();
    };
    OrderFormComponent = __decorate([
        core_1.Component({
            selector: 'kmt-order-form',
            templateUrl: 'app/+home/components/order-form.component.html',
            styleUrls: ['app/+home/components/order-form.component.css'],
            pipes: [common_1.CurrencyPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL29yZGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXNFLGlCQUFpQixDQUFDLENBQUE7QUFDeEYsc0JBQThELG9CQUFvQixDQUFDLENBQUE7QUFRbkY7SUFBQTtRQUNRLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFFZCxlQUFVLEdBQWUsSUFBSSxrQkFBVSxFQUFFLENBQUM7SUEyQ2xELENBQUM7SUF6Q0EsNENBQWUsR0FBZjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUM1QixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtpQkFDbkMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBLENBQUEsQ0FBQSxBQUFDLENBQUE7aUJBQzlDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFBLENBQUEsQ0FBQSxBQUFDLENBQUEsQ0FBQTtZQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNGLENBQUM7SUFFTSx1Q0FBVSxHQUFqQixVQUFrQixPQUFnQixFQUFFLENBQW1CLEVBQUUsR0FBVztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFO1lBQ2pELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osR0FBRyxFQUFFLEdBQUc7U0FDUixDQUFDLENBQUM7UUFDSCxJQUFNLElBQUksR0FBTSxPQUFPLENBQUMsS0FBSyxXQUFNLENBQUMsQ0FBQyxJQUFJLFdBQU0sQ0FBQyxDQUFDLElBQU0sQ0FBQztRQUN4RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRSxFQUE1RCxDQUE0RCxDQUFDLENBQUM7UUFDbkgsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRixDQUFDO1FBQ0YsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQWxERjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7WUFDNUQsS0FBSyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUNyQixDQUFDOzswQkFBQTtJQStDRix5QkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksMEJBQWtCLHFCQThDOUIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvY29tcG9uZW50cy9vcmRlci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdGb3JtLCBDb250cm9sLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIEN1cnJlbmN5UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7U3VibWlzc2lvbiwgUHJvZHVjdCwgUHJvZHVjdFZhcmlhdGlvbiwgQ2FydEl0ZW19IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2ttdC1vcmRlci1mb3JtJyxcblx0dGVtcGxhdGVVcmw6ICdhcHAvK2hvbWUvY29tcG9uZW50cy9vcmRlci1mb3JtLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2FwcC8raG9tZS9jb21wb25lbnRzL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyddLFxuXHRwaXBlczogW0N1cnJlbmN5UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJGb3JtQ29tcG9uZW50IHtcblx0cHVibGljIGNhcnRUb3RhbCA9IDA7XG5cblx0cHVibGljIHN1Ym1pc3Npb246IFN1Ym1pc3Npb24gPSBuZXcgU3VibWlzc2lvbigpO1xuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnT3JkZXJGb3JtQ29tcG9uZW50IHZpZXcgaW5pdGlhbGl6ZWQuJywgdGhpcyk7XG5cdH1cblxuXHRmb3JtSXNWYWxpZChvcmRlckZvcm06IE5nRm9ybSkge1xuXHRcdHJldHVybiBvcmRlckZvcm0uZm9ybS52YWxpZCAmJiB0aGlzLnN1Ym1pc3Npb24uY2FydC5sZW5ndGggIT0gMDtcblx0fVxuXG5cdG9uU3VibWl0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdvbiBzdWJtaXQhJywgdGhpcyk7XG5cdH1cblxuXHR1cGRhdGVUb3RhbCgpIHtcblx0XHRpZiAodGhpcy5zdWJtaXNzaW9uLmNhcnQubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhcnRUb3RhbCA9IHRoaXMuc3VibWlzc2lvbi5jYXJ0XG5cdFx0XHRcdC5tYXAoaXRlbSA9PiByZXR1cm4gaXRlbS5jb3N0ICogaXRlbS5xdHkgLyAxMDApXG5cdFx0XHRcdC5yZWR1Y2UoKHByZXYsIHZhbCwgaW5kZXgpID0+IHJldHVybiBwcmV2ICsgdmFsKSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHVwZGF0ZUNhcnQocHJvZHVjdDogUHJvZHVjdCwgdjogUHJvZHVjdFZhcmlhdGlvbiwgcXR5OiBudW1iZXIpIHtcblx0XHRjb25zb2xlLmxvZygnb3JkZXJGb3JtLnVwZGF0ZUNhcnQoKSBjYWxsZWQgd2l0aCcsIHtcblx0XHRcdHByb2R1Y3Q6IHByb2R1Y3QsXG5cdFx0XHR2YXJpYXRpb246IHYsXG5cdFx0XHRxdHk6IHF0eVxuXHRcdH0pO1xuXHRcdGNvbnN0IGRlc2MgPSBgJHtwcm9kdWN0LnRpdGxlfSAtICR7di5sYW5nfSAtICR7di5zaXplfWA7XG5cdFx0Y29uc3QgaW5DYXJ0ID0gdGhpcy5zdWJtaXNzaW9uLmNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RfaWQgPT09IHByb2R1Y3QuaWQgJiYgaXRlbS52YXJpYXRpb25faWQgPT09IHYuaWQpO1xuXHRcdGlmIChpbkNhcnQubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBpbmRleCA9IHRoaXMuc3VibWlzc2lvbi5jYXJ0LmluZGV4T2YoaW5DYXJ0WzBdKTtcblx0XHRcdGlmIChxdHkgPT09IDApIHtcblx0XHRcdFx0dGhpcy5zdWJtaXNzaW9uLmNhcnQuc3BsaWNlKGluZGV4KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3VibWlzc2lvbi5jYXJ0W2luZGV4XSA9IG5ldyBDYXJ0SXRlbShwcm9kdWN0LmlkLCB2LmlkLCBkZXNjLCBxdHksIHYucHJpY2UpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocXR5ID4gMCkge1xuXHRcdFx0dGhpcy5zdWJtaXNzaW9uLmNhcnQucHVzaChuZXcgQ2FydEl0ZW0ocHJvZHVjdC5pZCwgdi5pZCwgZGVzYywgcXR5LCB2LnByaWNlKSk7XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlVG90YWwoKTtcblx0fVxuXG59XG4iXX0=
