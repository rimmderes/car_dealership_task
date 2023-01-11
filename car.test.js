const {Car} = require('./car');
let car;


beforeEach(() => {
    car = new Car("BMW", 10000, "Petrol");
})

describe ('test manufacturer', () => {
    test('assign manufacturer to car', () => {
        expect(car.manufacturer).toBe("BMW");
    });
});

describe ('test price', () => {
    test('assign price to car', () => {
        expect(car.price).toBe(10000);
    });
    });

    describe ('test eng type', () => {
        test('assign eng type to car', () => {
            expect(car.engineType).toBe("Petrol");
        });
        });