# wordle-date

A simple npm package to calculate the number of days away from a set moment, given a supplied moment. The elapsed time after the set moment will be represented as a positive number, while the elapsed time prior to the set moment will be represented as a negative number.

## Installation

```bash
npm install wordle-date

## Usage

javascript
Copy code
const wordleDate = require('wordle-date');

// Set your reference moment
const referenceMoment = '2023-01-01T00:00:00Z';

// Input a moment to compare with the reference moment
const targetMoment = '2022-12-25T00:00:00Z';

// Calculate the number of days away from the reference moment
const wd = wordleDate.calculate(referenceMoment, targetMoment);

console.log(`Days away from reference moment: ${wd}`);


## API

wordleDate.calculate(referenceMoment, targetMoment, outputUnit)
referenceMoment: (string | Date | number) - The reference moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
targetMoment: (string | Date | number) - The target moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
outputUnit: (string) - Optional. The desired output unit for the result. Default is 'days'. Available options are: 'days', 'hours', 'minutes', 'seconds', 'milliseconds'.
Returns:

A number representing the elapsed time between the target moment and the reference moment, in the specified output unit.

## Example
javascript
Copy code
const referenceMoment = '2023-01-01T00:00:00Z';
const targetMoment = '2022-12-25T00:00:00Z';
const outputUnit = 'hours';

const hours = wordleDate.calculate(referenceMoment, targetMoment, outputUnit);
console.log(`Hours away from reference moment: ${hours}`);

## License
MIT