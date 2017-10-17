import { async } from "@angular/core/testing";

import { expect, assert } from "chai";
import { FizzBuzz } from "./fizzbuzz";
import * as sinon from "sinon";

describe("Test class for FizzBuzz", () => {

    let fizzBuzz: FizzBuzz;

    beforeEach(() => {
        this.fizzBuzz = new FizzBuzz();
    });

    it("should exist", () => {
        assert.isNotNull(this.fizzbuzz);
    });

    it("should have a public method called \'execute\'", async(() => {
        assert.isDefined(this.fizzBuzz.execute);
    }));

    it("should print 1 if it receives 1", async(() => {
        const result = this.fizzBuzz.execute(1);

        expect(result).to.be.equals("1");
    }));

    it("should print 2 if it receives 2", async(() => {
        const result = this.fizzBuzz.execute(2);

        expect(result).to.be.equals("2");
    }));

    it("should print Fizz if it receives 3", async(() => {
        const result = this.fizzBuzz.execute(3);

        expect(result).to.be.equals("Fizz");
    }));

    it("should print 4 if it receives 4", async(() => {
        const result = this.fizzBuzz.execute(4);

        expect(result).to.be.equals("4");
    }));

    it("should print Buzz if it receives 5", async(() => {
        const result = this.fizzBuzz.execute(5);

        expect(result).to.be.equals("Buzz");
    }));

    it("should print Fizz if it receives 6", async(() => {
        const result = this.fizzBuzz.execute(6);

        expect(result).to.be.equals("Fizz");
    }));

    it("should print 7 if it receives 7", async(() => {
        const result = this.fizzBuzz.execute(7);

        expect(result).to.be.equals("7");
    }));

    it("should print 8 if it receives 8", async(() => {
        const result = this.fizzBuzz.execute(8);

        expect(result).to.be.equals("8");
    }));

    it("should print Fizz if it receives 9", async(() => {
        const result = this.fizzBuzz.execute(9);

        expect(result).to.be.equals("Fizz");
    }));

    it("should print Buzz if it receives 10", async(() => {
        const result = this.fizzBuzz.execute(10);

        expect(result).to.be.equals("Buzz");
    }));

    it("should print FizzBuzz if it receives 15", async(() => {
        const result = this.fizzBuzz.execute(15);

        expect(result).to.be.equals("FizzBuzz");
    }));

    it("should print FizzBuzz if it receives 30", async(() => {
        const result = this.fizzBuzz.execute(30);

        expect(result).to.be.equals("FizzBuzz");
    }));

    it("should exist a function which execute FizzBuzz 100 times", async(() => {
        const spyExecute = sinon.spy(this.fizzBuzz, "execute");

        this.fizzBuzz.execute100Times();

        assert.isTrue(spyExecute.callCount === 100);
    }));
});
