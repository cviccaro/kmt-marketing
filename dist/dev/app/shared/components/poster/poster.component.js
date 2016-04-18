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
var index_1 = require('../../../shared/index');
var PosterComponent = (function () {
    function PosterComponent() {
        this.qtyChange = new core_1.EventEmitter();
        this.quantities = {};
    }
    PosterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ids = this.product.variations.map(function (variation) {
            return variation.id;
        });
        ids.forEach(function (id) { return _this.quantities[id] = ''; });
    };
    PosterComponent.prototype.ngAfterViewInit = function () {
        console.log('PosterComponent view initialized.', this);
    };
    PosterComponent.prototype.qtyChanged = function (variation) {
        this.qtyChange.emit({
            product: this.product,
            variation: variation,
            qty: this.quantities[variation.id]
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Product)
    ], PosterComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PosterComponent.prototype, "qtyChange", void 0);
    PosterComponent = __decorate([
        core_1.Component({
            selector: 'kmt-poster',
            templateUrl: 'app/shared/components/poster/poster.component.html',
            styleUrls: ['app/shared/components/poster/poster.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PosterComponent);
    return PosterComponent;
}());
exports.PosterComponent = PosterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRFLGVBQWUsQ0FBQyxDQUFBO0FBQzVGLHNCQUF3Qyx1QkFBdUIsQ0FBQyxDQUFBO0FBT2hFO0lBQUE7UUFHVyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQW9CeEIsQ0FBQztJQWxCQSxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTO1lBQy9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsU0FBMkI7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXZCRDtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7c0RBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDO1NBQ2hFLENBQUM7O3VCQUFBO0lBMEJGLHNCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx1QkFBZSxrQkF5QjNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvZHVjdCwgUHJvZHVjdFZhcmlhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAna210LXBvc3RlcicsXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cblx0QE91dHB1dCgpIHF0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgcXVhbnRpdGllcyA9IHt9O1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdHZhciBpZHMgPSB0aGlzLnByb2R1Y3QudmFyaWF0aW9ucy5tYXAoKHZhcmlhdGlvbikgPT4ge1xuXHRcdFx0cmV0dXJuIHZhcmlhdGlvbi5pZDtcblx0XHR9KTtcblx0XHRpZHMuZm9yRWFjaChpZCA9PiB0aGlzLnF1YW50aXRpZXNbaWRdID0gJycpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdQb3N0ZXJDb21wb25lbnQgdmlldyBpbml0aWFsaXplZC4nLCB0aGlzKTtcblx0fVxuXG5cdHF0eUNoYW5nZWQodmFyaWF0aW9uOiBQcm9kdWN0VmFyaWF0aW9uKSB7XG5cdFx0dGhpcy5xdHlDaGFuZ2UuZW1pdCh7XG5cdFx0XHRwcm9kdWN0OiB0aGlzLnByb2R1Y3QsXG5cdFx0XHR2YXJpYXRpb246IHZhcmlhdGlvbixcblx0XHRcdHF0eTogdGhpcy5xdWFudGl0aWVzW3ZhcmlhdGlvbi5pZF1cblx0XHR9KTtcblx0fVxufVxuIl19
