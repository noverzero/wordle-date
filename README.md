# wordle-date

Translate any date to its Wordle date... a number of days before or after Wordle-Day Eve, AKA Wordle #0, AKA June 10, 2021, AKA 0 WD. Why are we still using the divisive outdated archaic BC/AD date-tracking system? It's clearly time to update to Wordle Date. Days after 0 WD are positive integers aligining with the current Wordle puzzle number.  Days before 0 WD are representated with a negative integer. For example, if we say that New Year's Day after Jesus' birth is 1/1/0000, then Jesus was born on -738970 WD.  Each day after 0 WD aligns with the actual Wordle # that corresponds to said date.  Special thanks to The Creator, Josh Wardle, the New York Times, and of course Tracy Bennett. God bless you forever Ms. Bennett for your important, important work.

Incidently, this package can also be used to calculate the number of days, hours, minutes, seconds, or other outputUnit (default is days) away from any set moment (default is Wordle #0 June 18, 2021), given any supplied moment. The elapsed time after the set moment will be represented as a positive number, while the elapsed time prior to the set moment will be represented as a negative number.

## Installation

```bash
npm install wordle-date

## Usage

const wordleDate = require('wordle-date');

// Set your reference moment
const referenceMoment = '2022-06-18T00:00:00Z';

// Input a moment to compare with the reference moment
const targetMoment = '2023-03-16T00:00:00Z';

// Calculate the number of days away from the reference moment
const wd = wordleDate.calculate(referenceMoment, targetMoment);

console.log(`Target date as Wordle Date: ${wd}`);


## API

wordleDate.calculate(referenceMoment, targetMoment, outputUnit)
referenceMoment: (string | Date | number) - The reference moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
targetMoment: (string | Date | number) - The target moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
outputUnit: (string) - Optional. The desired output unit for the result. Default is 'days'. Available options are: 'days', 'hours', 'minutes', 'seconds', 'milliseconds'.
Returns:

A number representing the elapsed time between the target moment and the reference moment, in the specified output unit.

## Example

const referenceMoment = '0000-01-01T00:00:00Z';
const targetMoment = '2022-06-18T00:00:00Z';
const outputUnit = 'hours';

const hours = wordleDate.calculate(referenceMoment, targetMoment, outputUnit);
console.log(`Hours away from reference moment: ${hours}`);

## License
MIT