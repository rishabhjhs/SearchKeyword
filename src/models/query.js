class Query {
    #query
    #queryNumber

    constructor(queryNumber, query) {
        this.#queryNumber = queryNumber;
        this.#query = query;
        this.queryWithValue = {};
        this.#query.forEach((q, i) => {
            this.queryWithValue[q] = 8 - i;
        });
    }

    getQueryNumber() {
        return this.#queryNumber;
    }

    getQueryWithValue() {
        return this.queryWithValue;
    }
}

export { Query }
