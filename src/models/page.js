class Page {
    #pageNumber;
    #words

    constructor(pageNumber, words) {
        this.#pageNumber = pageNumber;
        this.#words = words;
        this.wordWithValue = {};
        words.forEach((word, i) => {
            this.wordWithValue[word] = 8 - i;
        });
    }

    getPageNumber() {
        return this.#pageNumber;
    }

    getWords() {
        return this.#words;
    }

    getValueForWord(word) {
        return this.wordWithValue[word] ? this.wordWithValue[word] : 0;
    }
}

export { Page }
