const utils = require('./utils');
const expect = require('expect');


describe('Utils', () => {
    describe('#sync tests', () => {

        it('should add two numbers', () => {
            var res = utils.add(5, 2);
            if (res != 7) {
                throw new Error(`Expected 7, but got ${res}`)
            }
        });


        it('expect: should add two numbers', () => {
            var res = utils.add(5, 3);
            expect(res).toBe(8);
        });

        it('should square a number', () => {
            var res = utils.square(5);
            if (res != 25) {
                throw new Error(`Expected 25, but got ${res}`)
            }
        });

    });

    describe('#async test', () => {
        it('expect async: should add two numbers', (done) => {
            utils.asyncAdd(5, 5, (sum) => {
                expect(sum)
                    .toBe(10);
                done();
            });

        })

        it('expect async: should square a number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBe(9);
                done();
            });

        })
    })

})