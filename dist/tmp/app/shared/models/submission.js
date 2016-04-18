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
