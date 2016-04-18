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
            templateUrl: 'app/+home/components/home.component.html',
            styleUrls: ['app/+home/components/home.component.css'],
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, order_form_component_1.OrderFormComponent],
        }), 
        __metadata('design:paramtypes', [index_1.ProductService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFHakUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQscUNBQWlDLHdCQUF3QixDQUFDLENBQUE7QUFRMUQ7SUFJRSx1QkFBbUIsY0FBOEI7UUFKbkQsaUJBWUM7UUFSb0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1lBQ3RELFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsRUFBRSx5Q0FBa0IsQ0FBQztTQUNuRSxDQUFDOztxQkFBQTtJQWFGLG9CQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxxQkFBYSxnQkFZekIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbmltcG9ydCB7TmFtZUxpc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7T3JkZXJGb3JtQ29tcG9uZW50fSBmcm9tICcuL29yZGVyLWZvcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna210LWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLytob21lL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgT3JkZXJGb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIG5ld05hbWU6IHN0cmluZztcbiAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gICAgdmFyIG8gPSB0aGlzLnByb2R1Y3RTZXJ2aWNlLmFsbCgpO1xuICAgIGNvbnNvbGUubG9nKG8pO1xuICAgIG8uc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgY29uc29sZS5sb2coJ2dvdCBwcm9kdWN0cycsIHByb2R1Y3RzKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
