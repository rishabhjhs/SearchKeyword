import {Page} from "../models/page";
import {Query} from "../models/query";
import {Search} from "../models/search";

class InputDataProcessor {

    #data
    #pages
    #pageCount
    #queries
    #queryCount

    constructor() {
        this.#data = [];
        this.#pages = [];
        this.#pageCount = 1;
        this.#queryCount = 1;
        this.#queries = [];
    }

    addData(line) {
        if(typeof line !== "string")
            console.log("Input data should be string");
        else if(line[0].toUpperCase() !== "P" && line[0].toUpperCase() !== "Q")
            console.log("Input data should start with P or Q");
        else if(line[1] !== " ")
            console.log("Input data should have a P or Q separated by space");
        else if(line.trim().split(/\s+/).length < 2)
            console.log("Input data should have some keywords");
        else
            this.#data.push(line);
    }

    #processData(){
        this.#data.forEach(d => {
            const keywords = d.split(" ").slice(1);
            if(d[0].toUpperCase() === 'P') {
                const page = new Page(this.#pageCount, keywords)
                this.#pages.push(page);
                this.#pageCount ++;
            } else {
                const query = new Query(this.#queryCount, keywords)
                this.#queries.push(query);
                this.#queryCount ++;
            }
        });
    }

    getData() {
        return this.#data;
    }

    getProcessedData() {
        this.#processData();
        this.#queries.forEach((q, ) => {
            const search = new Search(this.#pages, q);
            const result = search.getSearchResult();
            result.length > 0 ? console.log(`Q${q.getQueryNumber()}:`, result) :
                console.log(`Q${q.getQueryNumber()}:`);
        });
    }
}

export { InputDataProcessor }
