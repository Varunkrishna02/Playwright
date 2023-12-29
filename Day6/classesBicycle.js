//Classes are template or Blueprint
var Bicycle = /** @class */ (function () {
    function Bicycle() {
        //properties
        this.brand = 'Hero';
        this.weight = 200;
        this.isElectic = true;
        this.isGearless = false;
    }
    //method -- Actions performed by Class
    //syntax -- accessmodifier methodName: returnType
    Bicycle.prototype.brake = function () {
        var brakeModel = 2023;
        console.log("The BrakeModel is ".concat(brakeModel));
        console.log("The cycleWeight is ".concat(this.weight)); // "This" keyword is used to call Global variables
        console.log("The isElectic is ".concat(this.isElectic));
        console.log("The isGearless is ".concat(this.isGearless));
    };
    return Bicycle;
}());
//Calling the Method
//Syntax -->const objectName = new className();
var myInstance = new Bicycle();
myInstance.brake();
