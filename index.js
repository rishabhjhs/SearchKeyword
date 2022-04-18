import {InputDataProcessor} from "./src/utils/inputDataProcessor";

const inputDataProcessor = new InputDataProcessor();

inputDataProcessor.addData("P Ford Car Review");
inputDataProcessor.addData("P");
inputDataProcessor.addData("P ");
inputDataProcessor.addData("X ");
inputDataProcessor.addData("X hhh");
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

inputDataProcessor.getProcessedData();
