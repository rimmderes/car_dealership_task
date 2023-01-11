const {Car} = require('./car.js');
let car;


beforeEach(() => {
    car = new Car("BMW", 10000, "Petrol");
})

describe ('test manufacturer', () => {
    test('assign manufacturer to car', () => {
        expect(car.manufacturer).toBe("BMW");
    });
});