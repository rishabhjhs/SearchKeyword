import {Search} from "./search";
import {Query} from "./query";
import {Page} from "./page";

describe('Search Model', () => {

    it('should search query and provide page number when present', () => {
        // given
        const search = new Search([new Page(1,['Car', 'Review'])], new Query(1, ['Review']));

        // when
        const response = search.getSearchResult();

        //
        expect(response).toEqual(["1"])
    });

    it('should search query and return empty array when not found', () => {
        // given
        const search = new Search([new Page(1,['Car'])], new Query(1, ['Review']));

        // when
        const response = search.getSearchResult();

        //
        expect(response).toEqual([])
    });

    it('should return sorted top five pages with maximum strength when query keyword is present in page', () => {
        // given
        const pageObjectArray = [
            new Page(1,['Car', 'Review']),
            new Page(2,['Review']),
            new Page(3,['Ford', 'Car', 'Review']),
            new Page(4,['Review', 'Car', 'Ford']),
            new Page(5,['Ford', 'Review', 'Car']),
            new Page(6,['Review', 'Toyota', 'Car', 'Ford']),
        ]
        const search = new Search(pageObjectArray, new Query(1, ['Review']));

        // when
        const response = search.getSearchResult();

        //
        expect(response).toEqual(["2", "4", "6", "1", "5"]);
    });
})
