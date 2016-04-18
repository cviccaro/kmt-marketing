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
var index_1 = require('../../shared/index');
var OrderFormComponent = (function () {
    function OrderFormComponent() {
        this.submission = new index_1.Submission();
    }
    OrderFormComponent.prototype.ngAfterViewInit = function () {
        console.log('OrderFormComponent view initialized.', this);
    };
    OrderFormComponent.prototype.onSubmit = function () {
        console.log('on submit!', this);
    };
    OrderFormComponent = __decorate([
        core_1.Component({
            selector: 'kmt-order-form',
            moduleId: module.id,
            templateUrl: './order-form.component.html',
            styleUrls: [
                './order-form.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL29yZGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsc0JBQXlCLG9CQUFvQixDQUFDLENBQUE7QUFVOUM7SUFpQkM7UUFGTyxlQUFVLEdBQWUsSUFBSSxrQkFBVSxFQUFFLENBQUM7SUEwQmpELENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF6REY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUU7Z0JBQ1YsNEJBQTRCO2FBQzVCO1NBQ0QsQ0FBQzs7MEJBQUE7SUFtREYseUJBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLDBCQUFrQixxQkFrRDlCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2NvbXBvbmVudHMvb3JkZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nRm9ybSwgQ29udHJvbCwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtTdWJtaXNzaW9ufSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdrbXQtb3JkZXItZm9ybScsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9vcmRlci1mb3JtLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vb3JkZXItZm9ybS5jb21wb25lbnQuY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRm9ybUNvbXBvbmVudCB7XG5cdC8vIHB1YmxpYyBuYW1lOiBDb250cm9sO1xuXHQvLyBwdWJsaWMgam9iVGl0bGU6IENvbnRyb2w7XG5cdC8vIHB1YmxpYyBkZXBhcnRtZW50OiBDb250cm9sO1xuXHQvLyBwdWJsaWMgZW1haWw6IENvbnRyb2w7XG5cdC8vIHB1YmxpYyBwaG9uZTogQ29udHJvbDtcblx0Ly8gcHVibGljIGFkZHJlc3M6IENvbnRyb2w7XG5cdC8vIHB1YmxpYyBjaXR5OiBDb250cm9sO1xuXHQvLyBwdWJsaWMgc3RhdGU6IENvbnRyb2w7XG5cdC8vIHB1YmxpYyB6aXA6IENvbnRyb2w7XG5cdC8vIHB1YmxpYyBjb3N0Q2VudGVyTnVtYmVyOiBDb250cm9sO1xuXHQvLyBwdWJsaWMgZW1wbG95ZWVJRDogQ29udHJvbDtcblxuXHQvLyBwdWJsaWMgZm9ybTogQ29udHJvbEdyb3VwO1xuXG5cdHB1YmxpYyBzdWJtaXNzaW9uOiBTdWJtaXNzaW9uID0gbmV3IFN1Ym1pc3Npb24oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvLyB0aGlzLm5hbWUgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cdFx0Ly8gdGhpcy5qb2JUaXRsZSA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblx0XHQvLyB0aGlzLmRlcGFydG1lbnQgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cdFx0Ly8gdGhpcy5lbWFpbCA9IG5ldyBDb250cm9sKCdlLmcuIGxhc3RuYW1lLmZpcnN0bmFtZUBrZW5uYW1ldGFzZGFzZHNhbC5jb20nLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblx0XHQvLyB0aGlzLnBob25lID0gbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdC8vIHRoaXMuc3RhdGUgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cdFx0Ly8gdGhpcy56aXAgPSBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cdFx0Ly8gdGhpcy5jb3N0Q2VudGVyTnVtYmVyID0gbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdC8vIHRoaXMuZW1wbG95ZWVJRCA9IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblxuXHRcdC8vIHRoaXMuZm9ybSA9IGJ1aWxkZXIuZ3JvdXAoe1xuXHRcdC8vIFx0bmFtZTogdGhpcy5uYW1lLFxuXHRcdC8vIFx0am9iVGl0bGU6IHRoaXMuam9iVGl0bGUsXG5cdFx0Ly8gXHRkZXBhcnRtZW50OiB0aGlzLmRlcGFydG1lbnQsXG5cdFx0Ly8gXHRlbWFpbDogdGhpcy5lbWFpbCxcblx0XHQvLyBcdHBob25lOiB0aGlzLnBob25lLFxuXHRcdC8vIFx0YWRkcmVzczogdGhpcy5hZGRyZXNzLFxuXHRcdC8vIFx0Y2l0eTogdGhpcy5jaXR5LFxuXHRcdC8vIFx0c3RhdGU6IHRoaXMuc3RhdGUsXG5cdFx0Ly8gXHR6aXA6IHRoaXMuemlwLFxuXHRcdC8vIFx0Y29zdENlbnRlck51bWJlcjogdGhpcy5jb3N0Q2VudGVyTnVtYmVyLFxuXHRcdC8vIFx0ZW1wbG95ZWVJRDogdGhpcy5lbXBsb3llZUlEXG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ09yZGVyRm9ybUNvbXBvbmVudCB2aWV3IGluaXRpYWxpemVkLicsIHRoaXMpO1xuXHR9XG5cblx0b25TdWJtaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ29uIHN1Ym1pdCEnLCB0aGlzKTtcblx0fVxufVxuIl19
