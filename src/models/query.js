class Query {
    #query

    constructor(query) {
        this.#query = query;
        this.queryWithValue = {};
        this.#query.forEach((q, i) => {
            this.queryWithValue[q] = 8 - i;
        });
    }

    getQueryWithValue() {
        return this.queryWithValue;
    }
}

export { Query }
