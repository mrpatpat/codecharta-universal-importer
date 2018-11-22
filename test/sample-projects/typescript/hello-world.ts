export class HelloWorld {

    public getHello(): string {
        return "Hello World!";
    }

    public sayHello(): void {
        console.log(this.getHello());
    }

}