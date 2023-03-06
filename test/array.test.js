const { default: expect } = require('expect');
const {brands, athletes} = require('../array');

describe('brands array testing', () => {
    test('the array is not null', () => {
        expect(brands()).not.toBeNull();
    });

    test('the brand list has nike on it', () => {
        expect(brands()).toContain('nike');
    });

    test('check the array length', () => {
        expect(brands()).toHaveLength(4);
    });
})

describe('athletes array testing', () => {
    test('check the array length', () => {
        expect(athletes).toHaveLength(3);
    });
    test('check the array length, after removing the last item', () => {
        athletes.pop();
        expect(athletes).toHaveLength(2);
    });
    test('sort the array, and check the first item to confirme sorting', () => {
        console.log(athletes);
        athletes.sort();
        console.log(athletes);
        athletes.reverse();
        console.log(athletes);
    })
})
