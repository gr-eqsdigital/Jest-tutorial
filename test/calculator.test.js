//to run the test: npm test
//"test": "jest --watchAll" » watchAll implements autorun to npm test uppon changes being saved

const {mathOperations} = require('../calculator');

describe('Calculator testes', () => {   // description block.
    test('adding 1+2 should return 3', () => {  // test block, represents a single test.
        expect(mathOperations.sum(1,2)).toBe(3); // expect block, an assertion.
        /* could also be done like this: 
            // arrange and act
            var result = mathOperations.sum(1,2)
            // asset
            expect(result).toBe(3);  */
    });

    test('subtracting 3-1 should return 2', () => {
    //expect(mathOperations.diff(3,1)).toBe(2);
    var result = mathOperations.diff(3,1)
    expect(result).toBe(2);
    expect(result).not.toBeNull; //can remove "not" to check if null pass
    expect(result).toBeGreaterThan(1); // result > 1
    expect(result).toBeLessThanOrEqual(3); // result <= 3
    expect(result).toBeGreaterThanOrEqual(2); // result >= 2
    });

    test('product of 1*2 should return 2', () => {
        expect(mathOperations.product(1,2)).toBe(2);    //equality check
        expect(mathOperations.product(1,2)).not.toBe(3);    //inequality check
    });

    test("Truthy/Falsy matchers", () => {
        const val = mathOperations.sum(2,3)
        expect(val).toBe(5)
        expect(val).toBeTruthy

        const val2 = mathOperations.sum(2,3)
        expect(val2).not.toBeTruthy
        expect(val2).toBeFalsy

        expect(true).toBeTruthy
        expect(false).toBeFalsy
    });

    test('sum of 2 numbers', () => {
        expect(2+2).toBe(4);
        expect(2-2).not.toBe(4);
    });
})

describe('String testing', () => {
    test('string match test', () => {
        const fName = 'mike tester'
        expect(fName).toMatch(/mike/)
        expect(fName).toMatch(/m*/)
        expect(fName).not.toMatch(/coisa/)
        expect(fName).not.toMatch(/co*/)
    })
})

describe('Hooks testing', () => {
    var a = 0
    var b = 0

    beforeAll(() => {
        console.log("beforeAll called");
        a = 1;
        b = 2;
    });

    afterAll(() => {
        console.log("afterAll called");
    });

    // beforeEach(() => {
    //     console.log("beforeEach called");
    //     a = 1;
    //     b = 2;
    // });

    // afterEach(() => {
    //     console.log("afterEach called");
    // });

    test('1 + 2 should return 3', () => {
        expect(mathOperations.sum(a,b)).toBe(3);
    });
})