"use strict";
var Submission = (function () {
    function Submission(name, jobTitle, department, email, phone, address, city, state, zip, costCenterNumber, employeeID, timestamp, cart) {
        if (name === void 0) { name = ''; }
        if (jobTitle === void 0) { jobTitle = ''; }
        if (department === void 0) { department = ''; }
        if (email === void 0) { email = ''; }
        if (phone === void 0) { phone = ''; }
        if (address === void 0) { address = ''; }
        if (city === void 0) { city = ''; }
        if (state === void 0) { state = ''; }
        if (zip === void 0) { zip = ''; }
        if (costCenterNumber === void 0) { costCenterNumber = ''; }
        if (employeeID === void 0) { employeeID = ''; }
        if (timestamp === void 0) { timestamp = null; }
        if (cart === void 0) { cart = []; }
        this.name = name;
        this.jobTitle = jobTitle;
        this.department = department;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.costCenterNumber = costCenterNumber;
        this.employeeID = employeeID;
        this.timestamp = timestamp;
        this.cart = cart;
    }
    return Submission;
}());
exports.Submission = Submission;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3N1Ym1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBQ0Msb0JBQ1EsSUFBaUIsRUFDakIsUUFBcUIsRUFDckIsVUFBdUIsRUFDdkIsS0FBa0IsRUFDbEIsS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsSUFBaUIsRUFDakIsS0FBa0IsRUFDbEIsR0FBZ0IsRUFDaEIsZ0JBQTZCLEVBQzdCLFVBQXVCLEVBQ3ZCLFNBQXFCLEVBQ3JCLElBQXFCO1FBWjVCLG9CQUF3QixHQUF4QixTQUF3QjtRQUN4Qix3QkFBNEIsR0FBNUIsYUFBNEI7UUFDNUIsMEJBQThCLEdBQTlCLGVBQThCO1FBQzlCLHFCQUF5QixHQUF6QixVQUF5QjtRQUN6QixxQkFBeUIsR0FBekIsVUFBeUI7UUFDekIsdUJBQTJCLEdBQTNCLFlBQTJCO1FBQzNCLG9CQUF3QixHQUF4QixTQUF3QjtRQUN4QixxQkFBeUIsR0FBekIsVUFBeUI7UUFDekIsbUJBQXVCLEdBQXZCLFFBQXVCO1FBQ3ZCLGdDQUFvQyxHQUFwQyxxQkFBb0M7UUFDcEMsMEJBQThCLEdBQTlCLGVBQThCO1FBQzlCLHlCQUE0QixHQUE1QixnQkFBNEI7UUFDNUIsb0JBQTRCLEdBQTVCLFNBQTRCO1FBWnJCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBYTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBaUI7SUFDMUIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQkFBVSxhQWdCdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy9zdWJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXJ0SXRlbX0gZnJvbSAnLi4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgU3VibWlzc2lvbiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgam9iVGl0bGU6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyBkZXBhcnRtZW50OiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgZW1haWw6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyBwaG9uZTogc3RyaW5nID0gJycsXG5cdFx0cHVibGljIGFkZHJlc3M6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyBjaXR5OiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgc3RhdGU6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyB6aXA6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyBjb3N0Q2VudGVyTnVtYmVyOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgZW1wbG95ZWVJRDogc3RyaW5nID0gJycsXG5cdFx0cHVibGljIHRpbWVzdGFtcDogYW55ID0gbnVsbCxcblx0XHRwdWJsaWMgY2FydDogQ2FydEl0ZW1bXSA9IFtdXG5cdCkge31cbn1cbiJdfQ==
