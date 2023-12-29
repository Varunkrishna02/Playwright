"use strict";
/*
### Assignment 2: UI Component Library
 
Objective:
Practice creating interfaces and implementing them in classes for a UI component library.
 
Instructions:
1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
3. Implement the methods in each class to simulate rendering and handling events for UI components.
4. Create instances of all UI components  and call all the methods
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.actionPerformed = "PerformBelow";
    }
    Button.prototype.render = function () {
        console.log("Click Save");
    };
    Button.prototype.handleEvent = function () {
        console.log("Save is Applied");
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
        this.actionPerformed = "Textfield Operations";
    }
    TextField.prototype.render = function () {
        console.log("Enter Text");
    };
    TextField.prototype.handleEvent = function () {
        console.log("Text Entered");
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
        this.actionPerformed = "CheckBox Operations";
    }
    Checkbox.prototype.render = function () {
        console.log("Select Checkbox");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Checkbox Selected");
    };
    return Checkbox;
}());
var myButton = new Button();
var myTextField = new TextField();
var myCheckbox = new Checkbox();
console.log(myButton.actionPerformed);
myButton.render();
myButton.handleEvent();
console.log(myTextField.actionPerformed);
myTextField.render();
myTextField.handleEvent();
console.log(myCheckbox.actionPerformed);
myCheckbox.render();
myCheckbox.handleEvent();
