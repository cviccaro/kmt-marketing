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
var index_1 = require('../../index');
var PosterDesignComponent = (function () {
    function PosterDesignComponent() {
        this.qtyChange = new core_1.EventEmitter();
        this.quantities = {};
    }
    PosterDesignComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ids = this.product.variations.map(function (variation) {
            return variation.id;
        });
        ids.forEach(function (id) { return _this.quantities[id] = ''; });
    };
    PosterDesignComponent.prototype.ngAfterViewInit = function () {
        console.log('PosterDesignComponent view initialized.', this);
    };
    PosterDesignComponent.prototype.qtyChanged = function (variation) {
        this.qtyChange.emit({
            product: this.product,
            variation: variation,
            qty: this.quantities[variation.id]
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Product)
    ], PosterDesignComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PosterDesignComponent.prototype, "qtyChange", void 0);
    PosterDesignComponent = __decorate([
        core_1.Component({
            selector: 'kmt-poster-design',
            templateUrl: 'app/shared/components/poster-design/poster-design.component.html',
            styleUrls: ['app/shared/components/poster-design/poster-design.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PosterDesignComponent);
    return PosterDesignComponent;
}());
exports.PosterDesignComponent = PosterDesignComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9wb3N0ZXItZGVzaWduL3Bvc3Rlci1kZXNpZ24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEUsZUFBZSxDQUFDLENBQUE7QUFDNUYsc0JBQXdDLGFBQWEsQ0FBQyxDQUFBO0FBT3REO0lBQUE7UUFHVyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFJLEVBQUUsQ0FBQztJQXFCekIsQ0FBQztJQW5CQSx3Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTO1lBQy9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsU0FBMkI7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXZCRDtRQUFDLFlBQUssRUFBRTs7MERBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7NERBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxrRUFBa0U7WUFDL0UsU0FBUyxFQUFFLENBQUMsaUVBQWlFLENBQUM7U0FDOUUsQ0FBQzs7NkJBQUE7SUEyQkYsNEJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLDZCQUFxQix3QkEwQmpDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3Rlci1kZXNpZ24vcG9zdGVyLWRlc2lnbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9kdWN0LCBQcm9kdWN0VmFyaWF0aW9ufSBmcm9tICcuLi8uLi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2ttdC1wb3N0ZXItZGVzaWduJyxcblx0dGVtcGxhdGVVcmw6ICdhcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdGVyLWRlc2lnbi9wb3N0ZXItZGVzaWduLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2FwcC9zaGFyZWQvY29tcG9uZW50cy9wb3N0ZXItZGVzaWduL3Bvc3Rlci1kZXNpZ24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RlckRlc2lnbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cblx0QE91dHB1dCgpIHF0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgcXVhbnRpdGllczogPSB7fTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR2YXIgaWRzID0gdGhpcy5wcm9kdWN0LnZhcmlhdGlvbnMubWFwKCh2YXJpYXRpb24pID0+IHtcblx0XHRcdHJldHVybiB2YXJpYXRpb24uaWQ7XG5cdFx0fSk7XG5cdFx0aWRzLmZvckVhY2goaWQgPT4gdGhpcy5xdWFudGl0aWVzW2lkXSA9ICcnKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnUG9zdGVyRGVzaWduQ29tcG9uZW50IHZpZXcgaW5pdGlhbGl6ZWQuJywgdGhpcyk7XG5cdH1cblxuXHRxdHlDaGFuZ2VkKHZhcmlhdGlvbjogUHJvZHVjdFZhcmlhdGlvbikge1xuXHRcdHRoaXMucXR5Q2hhbmdlLmVtaXQoe1xuXHRcdFx0cHJvZHVjdDogdGhpcy5wcm9kdWN0LFxuXHRcdFx0dmFyaWF0aW9uOiB2YXJpYXRpb24sXG5cdFx0XHRxdHk6IHRoaXMucXVhbnRpdGllc1t2YXJpYXRpb24uaWRdXG5cdFx0fSk7XG5cdH1cblxufSJdfQ==
