import { Broswer } from "./interface";


class openChrome implements Broswer{
    browserName: string = "Chrome";
    startApp(): void {
        this.browserName;
        console.log("Launch Browser")
    }
    loginCredentials(username: string, password: string): string {
        return username+ " "+ password;
    }
    getStatus(): boolean {
    return true;
    }
}

const myChrome = new openChrome();
myChrome.startApp();
console.log(myChrome.browserName);
console.log(myChrome.loginCredentials("Demosales","crmsfa"));
console.log(myChrome.getStatus());