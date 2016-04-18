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
        if (cart === void 0) { cart = {}; }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3N1Ym1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0Msb0JBQ1EsSUFBaUIsRUFDakIsUUFBcUIsRUFDckIsVUFBdUIsRUFDdkIsS0FBa0IsRUFDbEIsS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsSUFBaUIsRUFDakIsS0FBa0IsRUFDbEIsR0FBZ0IsRUFDaEIsZ0JBQTZCLEVBQzdCLFVBQXVCLEVBQ3ZCLFNBQXFCLEVBQ3JCLElBQWM7UUFackIsb0JBQXdCLEdBQXhCLFNBQXdCO1FBQ3hCLHdCQUE0QixHQUE1QixhQUE0QjtRQUM1QiwwQkFBOEIsR0FBOUIsZUFBOEI7UUFDOUIscUJBQXlCLEdBQXpCLFVBQXlCO1FBQ3pCLHFCQUF5QixHQUF6QixVQUF5QjtRQUN6Qix1QkFBMkIsR0FBM0IsWUFBMkI7UUFDM0Isb0JBQXdCLEdBQXhCLFNBQXdCO1FBQ3hCLHFCQUF5QixHQUF6QixVQUF5QjtRQUN6QixtQkFBdUIsR0FBdkIsUUFBdUI7UUFDdkIsZ0NBQW9DLEdBQXBDLHFCQUFvQztRQUNwQywwQkFBOEIsR0FBOUIsZUFBOEI7UUFDOUIseUJBQTRCLEdBQTVCLGdCQUE0QjtRQUM1QixvQkFBcUIsR0FBckIsU0FBcUI7UUFaZCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWE7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVU7SUFDbkIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQkFBVSxhQWdCdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy9zdWJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1Ym1pc3Npb24ge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgbmFtZTogc3RyaW5nID0gJycsXG5cdFx0cHVibGljIGpvYlRpdGxlOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgZGVwYXJ0bWVudDogc3RyaW5nID0gJycsXG5cdFx0cHVibGljIGVtYWlsOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgcGhvbmU6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgY2l0eTogc3RyaW5nID0gJycsXG5cdFx0cHVibGljIHN0YXRlOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgemlwOiBzdHJpbmcgPSAnJyxcblx0XHRwdWJsaWMgY29zdENlbnRlck51bWJlcjogc3RyaW5nID0gJycsXG5cdFx0cHVibGljIGVtcGxveWVlSUQ6IHN0cmluZyA9ICcnLFxuXHRcdHB1YmxpYyB0aW1lc3RhbXA6IGFueSA9IG51bGwsXG5cdFx0cHVibGljIGNhcnQ6IGFueSA9IHt9XG5cdCkge31cbn1cbiJdfQ==
