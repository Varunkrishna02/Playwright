

//Classes are template or Blueprint
class Bicycle {

    //properties
   
    brand: string = 'Hero';
    weight: number = 200;
    isElectic: Boolean = true;
    isGearless: Boolean = false;

    //method -- Actions performed by Class
    //syntax -- accessmodifier methodName: returnType

    brake(): void{

        let brakeModel = 2023;
        console.log(`The BrakeModel is ${brakeModel}`);
        console.log(`The cycleWeight is ${this.weight}`); // "This" keyword is used to call Global variables
        console.log(`The isElectic is ${this.isElectic}`); 
        console.log(`The isGearless is ${this.isGearless}`); 
    }
  
}

    //Calling the Method
    //Syntax -->const objectName = new className();

    const myInstance = new Bicycle();
    myInstance.brake();