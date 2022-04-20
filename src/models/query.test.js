import {Query} from "./query";


describe('Query Model', () => {
    it('should create query object with data passed', () => {
        // when
        const query = new Query(1, ['Ford', 'Car']);

        //then
        expect(query.getQueryNumber()).toEqual(1);
        expect(query.getQueryWithValue()).toEqual({'Ford': 8, "Car": 7});
    });
})
