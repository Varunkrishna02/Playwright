"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openChrome = /** @class */ (function () {
    function openChrome() {
        this.browserName = "Chrome";
    }
    openChrome.prototype.startApp = function () {
        this.browserName;
        console.log("Launch Browser");
    };
    openChrome.prototype.loginCredentials = function (username, password) {
        return username + " " + password;
    };
    openChrome.prototype.getStatus = function () {
        return true;
    };
    return openChrome;
}());
var myChrome = new openChrome();
myChrome.startApp();
console.log(myChrome.browserName);
console.log(myChrome.loginCredentials("Demosales", "crmsfa"));
console.log(myChrome.getStatus());
