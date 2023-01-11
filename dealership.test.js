const {Car} = require('./car');
const {Dealership} = require('./dealership');

let dealership;
let car;

beforeEach(() => {
    dealership = new Dealership("Rimm's Drivin Crazy", );
    car1 = new Car("BMW", 23000, "B1");
    car2 = new Car("Rolls Royce", 100000, "RR1");
    car3 = new Car("Ferrari", 250000, "FE1");
    car4 = new Car("Ford", 12000, "F1");
    car5 = new Car("BMW", 18000, "B2");
    car6 = new Car("McLauren", 300000, "MC1");
    car7 = new Car("BMW", 60000, "B3");
    dealership.addCarsToStock(car1);
    dealership.addCarsToStock(car2);
    dealership.addCarsToStock(car3);
    dealership.addCarsToStock(car4);
    dealership.addCarsToStock(car5);
    dealership.addCarsToStock(car6);
    dealership.addCarsToStock(car7);
})

    test('count cars in stock', () => {
        const actual = dealership.countCars();
        const expected = 7;
        expect(actual).toBe(expected);
    });

    test('add new car into', () => {
        car8 = new Car("Ferrari", 900000, "F2");
        dealership.addCarsToStock(car8);
        const actual = dealership.inStock.length;
        const expected = 8;
        expect(actual).toBe(expected);
    })

    // test('add new car until max is passed', () => {
    //     car8 = new Car("Honda", 7000, "H1");
    //     let maxCars = 7; 
    //     dealership.addCarsToStock(car8);
    //     const actual = dealership.countCars();
    //     const expected = 7;
    //     expect(actual).toBe(expected);
    // })

    // test ('car manufacturers array', () => {
    //     const actual = dealership.carManufacturuers();
    //     const expected = ["BMW", "Rolls Royce", "Ferrari", "Ford", "BMW", "McLauren", "BMW"];
    //     expect(actual).toStrictEqual(expected);
    // })





