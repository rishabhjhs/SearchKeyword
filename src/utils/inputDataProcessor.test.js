import {InputDataProcessor} from "./inputDataProcessor";

const logSpy = jest.spyOn(console, 'log');

describe('InputDataProcessor', () => {
    describe('addData' , () => {
        it('should not add data if input is not string', () => {
            // given
            const inputDataProcessor = new InputDataProcessor();

            // when
            inputDataProcessor.addData(1);

            // then
            expect(logSpy).toHaveBeenCalledWith('Input data should be string');
        });

        it('should not add data if input string do not start with P or Q', () => {
            // given
            const inputDataProcessor = new InputDataProcessor();

            // when
            inputDataProcessor.addData("Z hello");

            // then
            expect(logSpy).toHaveBeenCalledWith('Input data should start with P or Q');
        });

        it('should not add data if input string start with P or Q but not followed by a space', () => {
            // given
            const inputDataProcessor = new InputDataProcessor();

            // when
            inputDataProcessor.addData("Phello");

            // then
            expect(logSpy).toHaveBeenCalledWith('Input data should have a P or Q separated by space');
        });

        it('should not add data if input string do not have keywords with it', () => {
            // given
            const inputDataProcessor = new InputDataProcessor();

            // when
            inputDataProcessor.addData("P ");

            // then
            expect(logSpy).toHaveBeenCalledWith('Input data should have some keywords');
        });

        it('should add data if all validations are passed', () => {
            // given
            const inputDataProcessor = new InputDataProcessor();

            // when
            inputDataProcessor.addData("P Ford");

            // then
            expect(logSpy).toHaveBeenCalled();
            expect(inputDataProcessor.getData().length).toEqual(1);
        });
    });

    describe('getProcessedData', () => {
        it('should return processed data as per page and query', () => {
            // given
            const inputDataProcessor = new InputDataProcessor();

            inputDataProcessor.addData("P Ford Car Review");
            inputDataProcessor.addData("P Review Car");
            inputDataProcessor.addData("P Review Ford");
            inputDataProcessor.addData("P Toyota Car");
            inputDataProcessor.addData("P Honda Car");
            inputDataProcessor.addData("P Car");
            inputDataProcessor.addData("Q Ford");
            inputDataProcessor.addData("Q Car");
            inputDataProcessor.addData("Q Review");
            inputDataProcessor.addData("Q Ford Review");
            inputDataProcessor.addData("Q Ford Car");
            inputDataProcessor.addData("Q cooking French");

            // when
            inputDataProcessor.getProcessedData();

            // then
            expect(logSpy).toHaveBeenCalledWith("Q1:", ["1", "3"])
            expect(logSpy).toHaveBeenCalledWith("Q2:", ["6", "1", "2", "4", "5"])
            expect(logSpy).toHaveBeenCalledWith("Q3:", ["2", "3", "1"])
            expect(logSpy).toHaveBeenCalledWith("Q4:", ["3", "1", "2"])
            expect(logSpy).toHaveBeenCalledWith("Q5:", ["1", "3", "6", "2", "4" ])
            expect(logSpy).toHaveBeenCalledWith("Q6:")
        })

    })
});

