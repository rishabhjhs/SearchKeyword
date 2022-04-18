class Search{
    #pages
    #query
    #pageQueryResult

    constructor(pages, query) {
        this.#pages = pages;
        this.#query = query;
        this.#pageQueryResult = {};
    }

     #getStrengthOfQueryForPage(queryWithValue, page) {
        let strength = 0;
        Object.entries(queryWithValue).forEach(([key,val]) => {
            if(page.getWords().includes(key)) {
                strength = strength + (val * page.getValueForWord(key));
            }
        });
        return strength;
    }

    #getSortedResultByValueAndKey() {
        return Object.entries(this.#pageQueryResult)
            .sort((a, b) =>
                a[1] !== b[1] ?
                    b[1] - a[1] :
                    b[0] < a[0] ? 1 : -1
            ).map(e => e[0]);
    }

    #calculateSearchResult() {
        this.#pages.forEach((page) => {
            const queryWithValue = this.#query.getQueryWithValue();
            const strength = this.#getStrengthOfQueryForPage(queryWithValue, page);
            if(strength > 0) {
                this.#pageQueryResult[page.getPageNumber()] = strength;
            }
        });
        return this.#getSortedResultByValueAndKey();
    }

    getSearchResult(){
        const sortedData = this.#calculateSearchResult();
        return sortedData.slice(0,5);
    }
}

export { Search }
