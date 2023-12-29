export interface Broswer{
 
    browserName: string ;

    startApp(): void;
    loginCredentials(username:string , password:string):string;
    getStatus(): boolean;
    

}