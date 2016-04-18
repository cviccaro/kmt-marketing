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
            template: "<form (ngSubmit)=\"onSubmit()\" #orderForm=\"ngForm\" novalidate> \t<div class=\"form-pane\"> \t\t<h1>Cart Information</h1> \t\t<div class=\"form-group\">  \t\t</div> \t</div> \t<div class=\"form-pane\"> \t\t<h1>Ordering Information</h1> \t\t<div class=\"form-group\"> \t\t\t<label>Name</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.name\" ngControl=\"name\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Job Title</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.jobTitle\" ngControl=\"jobTitle\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Department</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.department\" ngControl=\"department\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Email Address</label> \t\t\t<input type=\"email\" class=\"form-control email\" required [(ngModel)]=\"submission.email\" ngControl=\"email\" placeholder=\"e.g. lastname.firstname@kennametal.com\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Phone Number</label> \t\t\t<input type=\"phone\" class=\"form-control phone\" required [(ngModel)]=\"submission.phone\" ngControl=\"phone\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Street Address</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.address\" ngControl=\"address\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>City</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.city\" ngControl=\"city\" placeholder=\"e.g. Pittsburgh\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>State</label> \t\t\t<select type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.state\" ngControl=\"state\" placeholder=\"Pick a State\"> \t\t\t\t<option value=\"\">-- Pick a State--</option> \t\t\t\t<option value=\"AL\">Alabama</option> \t\t\t\t<option value=\"AK\">Alaska</option> \t\t\t\t<option value=\"AZ\">Arizona</option> \t\t\t\t<option value=\"AR\">Arkansas</option> \t\t\t\t<option value=\"CA\">California</option> \t\t\t\t<option value=\"CO\">Colorado</option> \t\t\t\t<option value=\"CT\">Connecticut</option> \t\t\t\t<option value=\"DE\">Delaware</option> \t\t\t\t<option value=\"DC\">District Of Columbia</option> \t\t\t\t<option value=\"FL\">Florida</option> \t\t\t\t<option value=\"GA\">Georgia</option> \t\t\t\t<option value=\"HI\">Hawaii</option> \t\t\t\t<option value=\"ID\">Idaho</option> \t\t\t\t<option value=\"IL\">Illinois</option> \t\t\t\t<option value=\"IN\">Indiana</option> \t\t\t\t<option value=\"IA\">Iowa</option> \t\t\t\t<option value=\"KS\">Kansas</option> \t\t\t\t<option value=\"KY\">Kentucky</option> \t\t\t\t<option value=\"LA\">Louisiana</option> \t\t\t\t<option value=\"ME\">Maine</option> \t\t\t\t<option value=\"MD\">Maryland</option> \t\t\t\t<option value=\"MA\">Massachusetts</option> \t\t\t\t<option value=\"MI\">Michigan</option> \t\t\t\t<option value=\"MN\">Minnesota</option> \t\t\t\t<option value=\"MS\">Mississippi</option> \t\t\t\t<option value=\"MO\">Missouri</option> \t\t\t\t<option value=\"MT\">Montana</option> \t\t\t\t<option value=\"NE\">Nebraska</option> \t\t\t\t<option value=\"NV\">Nevada</option> \t\t\t\t<option value=\"NH\">New Hampshire</option> \t\t\t\t<option value=\"NJ\">New Jersey</option> \t\t\t\t<option value=\"NM\">New Mexico</option> \t\t\t\t<option value=\"NY\">New York</option> \t\t\t\t<option value=\"NC\">North Carolina</option> \t\t\t\t<option value=\"ND\">North Dakota</option> \t\t\t\t<option value=\"OH\">Ohio</option> \t\t\t\t<option value=\"OK\">Oklahoma</option> \t\t\t\t<option value=\"OR\">Oregon</option> \t\t\t\t<option value=\"PA\">Pennsylvania</option> \t\t\t\t<option value=\"RI\">Rhode Island</option> \t\t\t\t<option value=\"SC\">South Carolina</option> \t\t\t\t<option value=\"SD\">South Dakota</option> \t\t\t\t<option value=\"TN\">Tennessee</option> \t\t\t\t<option value=\"TX\">Texas</option> \t\t\t\t<option value=\"UT\">Utah</option> \t\t\t\t<option value=\"VT\">Vermont</option> \t\t\t\t<option value=\"VA\">Virginia</option> \t\t\t\t<option value=\"WA\">Washington</option> \t\t\t\t<option value=\"WV\">West Virginia</option> \t\t\t\t<option value=\"WI\">Wisconsin</option> \t\t\t\t<option value=\"WY\">Wyoming</option> \t\t\t</select> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Zip Code</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.zip\" ngControl=\"zip\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Cost Center Number</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.costCenterNumber\" ngControl=\"costCenterNumber\"> \t\t</div> \t\t<div class=\"form-group\"> \t\t\t<label>Employee ID</label> \t\t\t<input type=\"text\" class=\"form-control\" required [(ngModel)]=\"submission.employeeID\" ngControl=\"employeeID\"> \t\t</div> \t</div> \t<div class=\"form-pane form-actions\"> \t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!orderForm.form.valid\">Submit</button> \t</div> </form>",
            styles: [":host{width:100%} /*# sourceMappingURL=order-form.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;
