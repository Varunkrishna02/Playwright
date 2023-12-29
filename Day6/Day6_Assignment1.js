/**
 * TypeScript Assignments

### Assignment 1: Automated Testing of a User Authentication System
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator`
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout,
   and password reset.
*/
var UserAuthenticator = /** @class */ (function () {
    function UserAuthenticator() {
    }
    UserAuthenticator.prototype.login = function (username, password, phone) {
        console.log("The username & password ".concat(username, " and ").concat(password));
    };
    UserAuthenticator.prototype.passswordReset = function () {
        console.log("Successfully PW changed");
    };
    UserAuthenticator.prototype.logout = function () {
        console.log("Successfully Logged out");
    };
    return UserAuthenticator;
}());
var myUserinfo = new UserAuthenticator();
myUserinfo.login("Demosales", "crmsfa");
myUserinfo.passswordReset();
myUserinfo.logout();
