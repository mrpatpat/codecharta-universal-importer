export class HelloUniverse {

    public getHello(): string {
        return "Hello Universe!";
    }

    public sayHello(): void {
        console.log(this.getHello());
    }

}