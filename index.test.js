const {searchPageByQuery} = require("./index");
const {InputDataProcessor} = require("./src/utils/inputDataProcessor");

jest.mock('./src/utils/inputDataProcessor');

describe('searchPageByQuery', () => {
    it('should add data and process it', () => {
        // given
        const inputDataProcessorInstanceMock = InputDataProcessor.mock.instances[0];
        const addDataMock = inputDataProcessorInstanceMock.addData;
        const getProcessedDataMock = inputDataProcessorInstanceMock.getProcessedData;

        // when
        searchPageByQuery();

        // then
        expect(InputDataProcessor).toHaveBeenCalled();
        expect(addDataMock).toHaveBeenCalledTimes(16);
        expect(getProcessedDataMock).toHaveBeenCalledTimes(1);
    });
})
