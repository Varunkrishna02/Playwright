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

import { uiComponent } from "./Day6_Assignment2Interface";

class Button implements uiComponent {

    actionPerformed: string = "PerformBelow" ;
  
    render(): void {
        
        console.log("Click Save");
       
    }
    handleEvent(): void {
        
        console.log("Save is Applied");
    }
}

class TextField implements uiComponent {
    
    actionPerformed: string = "Textfield Operations" ;

    render(): void {
        
        console.log("Enter Text");
       
    }
    handleEvent(): void {
        
        console.log("Text Entered");
    }
}

class Checkbox implements uiComponent {
    
    actionPerformed: string = "CheckBox Operations" ;

    render(): void {
        
        console.log("Select Checkbox");
       
    }
    handleEvent(): void {
        
        console.log("Checkbox Selected");
    }
}

const myButton = new Button();
const myTextField = new TextField();
const myCheckbox = new Checkbox();

console.log(myButton.actionPerformed);
myButton.render();
myButton.handleEvent();

console.log(myTextField.actionPerformed);
myTextField.render();
myTextField.handleEvent();

console.log(myCheckbox.actionPerformed);
myCheckbox.render();
myCheckbox.handleEvent();
