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
        var o = this.productService.all();
        console.log(o);
        o.subscribe(function (products) {
            _this.products = products;
            console.log('got products', products);
        });
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'kmt-home',
            template: "<header> \t<div class=\"container\"> \t\t<h1 id=\"page-title\">Kennametal DVD & Poster Order Form</h1> \t\t<p> \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue dictum, accumsan quam id, rhoncus ipsum. Mauris vitae libero tellus. Cras hendrerit feugiat nisi vel sagittis. Phasellus sit amet ullamcorper dui. Donec lobortis leo ac tellus sodales, nec tempor quam imperdiet. Vivamus maximus, elit at feugiat euismod, dolor ipsum gravida magna, non feugiat libero arcu at quam. In hac habitasse platea dictumst. Donec efficitur erat iaculis turpis dictum, at congue nunc lacinia. Curabitur dignissim sapien ut sem vestibulum euismod. Aenean quis ex magna.  \t\tPraesent semper eros sit amet orci cursus, sed convallis leo faucibus. Sed tellus sem, rutrum vel imperdiet varius, fringilla ac turpis. Sed a molestie arcu. Etiam interdum leo neque, non posuere odio convallis id. Nulla quis gravida tellus. Sed pulvinar pulvinar diam, vel pretium lorem cursus vitae. Mauris et nibh euismod ante tristique ullamcorper sed suscipit sapien. Nulla vulputate lacus ut turpis lobortis dapibus. Aenean sodales nisl ac nunc congue, vel pharetra massa rhoncus. Praesent imperdiet enim at orci imperdiet tristique. \t\t</p> \t</div> </header> <div id=\"content\" class=\"container\"> \t<ul> \t <li *ngFor=\"#product of products\"> \t \t{{ product | json }} \t </li> \t</ul>  \t<kmt-order-form> \t</kmt-order-form> </div>",
            styles: [":host{display:block;padding:0 16px}input{width:250px}ul{list-style-type:none;padding:0 0 0 8px} /*# sourceMappingURL=home.component.css.map */"],
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, order_form_component_1.OrderFormComponent],
        }), 
        __metadata('design:paramtypes', [index_1.ProductService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
