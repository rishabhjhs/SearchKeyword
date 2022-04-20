import {Page} from "./page";

describe('Page Model', () => {
    it('should create page object with data passed', () => {
        // when
        const page = new Page(1, ['Ford', 'Car']);

        //then
        expect(page.getPageNumber()).toEqual(1);
        expect(page.getWords()).toEqual(['Ford', 'Car']);
    });

    it('should assign words its strength when page is created', () => {
        // when
        const page = new Page(1, ['Ford', 'Car']);

        //then
        expect(page.getValueForWord('Ford')).toEqual(8);
        expect(page.getValueForWord('Car')).toEqual(7);
    });
})
