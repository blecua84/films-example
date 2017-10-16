import { async } from "@angular/core/testing";

import { expect, assert } from 'chai';
import { FizzBuzz } from './fizzbuzz';
import * as sinon from 'sinon';

describe("Test class for FizzBuzz", () => {

    let fizzBuzz;

    beforeEach(() => {
        this.fizzBuzz = new FizzBuzz();
    });

    it("it should exist", () => {
        assert.isNotNull(this.fizzbuzz);
    });

    it("it should have a public method called \'execute\'", async(() => {
        assert.isDefined(this.fizzBuzz.execute);
    }));

    it("it should print 1 if it receives 1", async(() => {
        const result = this.fizzBuzz.execute(1);

        expect(result).to.be.equals("1");
    }));

    it("it should print 2 if it receives 2", async(() => {
        const result = this.fizzBuzz.execute(2);

        expect(result).to.be.equals("2");
    }));

    it("it should print Fizz if it receives 3", async(() => {
        const result = this.fizzBuzz.execute(3);

        expect(result).to.be.equals("Fizz");
    }));

    it("it should print 4 if it receives 4", async(() => {
        const result = this.fizzBuzz.execute(4);

        expect(result).to.be.equals("4");
    }));

    it("it should print Buzz if it receives 5", async(() => {
        const result = this.fizzBuzz.execute(5);

        expect(result).to.be.equals("Buzz");
    }));

    it("it should print Fizz if it receives 6", async(() => {
        const result = this.fizzBuzz.execute(6);

        expect(result).to.be.equals("Fizz");
    }));
});
