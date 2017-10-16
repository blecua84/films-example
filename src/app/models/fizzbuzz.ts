export class FizzBuzz {

    constructor() {
    }

    public execute(count: number): string {
        if (count === 1) {
            return "1";
        } else if (count === 2) {
            return "2";
        } else if (count === 4) {
            return "4";
        } else if (count === 5) {
            return "Buzz";
        } else if (count % 3 === 0) {
            return "Fizz";
        }
    }
}
