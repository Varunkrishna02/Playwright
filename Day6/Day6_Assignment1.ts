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

class UserAuthenticator {
    
    login(username:String,  password: String , phone?:number){

        console.log(`The username & password ${username} and ${password}`);
     
    }

    passswordReset(){

        console.log("Successfully PW changed"); 
    }

    logout(){

        console.log("Successfully Logged out");    
    }

}

const myUserinfo = new UserAuthenticator();
myUserinfo.login("Demosales","crmsfa");
myUserinfo.passswordReset();
myUserinfo.logout();

