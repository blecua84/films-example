export class FizzBuzz {

    constructor() {
    }

    public execute(count: number): string {
        if (this.isFizzBuzz(count)) {
            return "FizzBuzz";
        } else if (this.isFizz(count)) {
            return "Fizz";
        } else if (this.isBuzz(count)) {
            return "Buzz";
        } else {
            return count.toString();
        }
    }

    public isFizzBuzz(count: number) {
        return this.isFizz(count) && this.isBuzz(count);
    }

    public isFizz(count: number) {
        return count % 3 === 0;
    }

    public isBuzz(count: number) {
        return count % 5 === 0;
    }

    public execute100Times() {
        for (let i = 0; i < 100; i++) {
            console.log(this.execute(i));
        }
    }
}
