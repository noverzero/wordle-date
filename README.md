# wordle-date

Wordle Date! Convert any date to its Wordle Date.  The Wordle Date is the number assigned to that day's Wordle Puzzle... which is the number of days before or after Wordle #0 (June 19, 2021), AKA Wordle Morning, AKA 0 WD.  Dates before 0 WD are represented by a negative number.

 
Look, dating is hard. I mean, well, not that kind of dating, but sure, that kind of dating, too.  This package addresses dates as in the numbers that get assigned to specific chunks of time. I don't think anyone disagree with the fact that the AC/DC dating system is archaic and divisive, highly overrated, and dare I say, outdated?  It's clearly time to update to a date tracking mechanism upon which everyone can agree. Enter Wordle Date. Days after 0 WD are positive integers aligining with the current Wordle puzzle number.  Days before 0 WD are representated with a negative integer. 

For example the first day of the old system (AD) would be 1/1/0000.  That same day in the Wordle-Date system is simply, -738325 WD. No more trying to make sense of why it goes mm/dd/yyyy in the US and dd/mm/yyyy in Europe.  No more trying to remember the names of months or if there is an extra "r" in Febuary or not.  Now, each day just gets a number. Its Wordle Puzzle Number.  So Simple. Each day after 0 WD aligns with the actual Wordle # that corresponds to said date.  

Special thanks to The Creator, Josh Wardle, the New York Times, and of course Tracy Bennett. God bless you forever Ms. Bennett for your important, important work.

Incidently, this package also contains a calculate function which can be used to calculate the number of days, hours, minutes, seconds, or other outputUnit (default is days) away from any set moment (default is Wordle #0 June 19, 2021), given any supplied moment. The elapsed time after the set moment will be represented as a positive number, while the elapsed time prior to the set moment will be represented as a negative number.

Thank you for your installs, stars, pull requests, and love.  Together we can make this the most mildly popular dating program since Ben Awad's vsinder.

## Installation

```bash
npm install wordle-date
```
## Usage

### With import syntax (ECMAScript modules):
note: scroll down for common JS 'Require' synatx.

import { toWordleDate, calculate } from 'wordle-date';

#### toWordleDate(

//Basic conversion function takes a single argument of the target date (date you would like to see converted to its Wordle Date) and returns the Wordle Date.

const wordleDate = toWordleDate('2022-03-17')
console.log(`Target date as Wordle Date: ${wd}`);

#### calculate(
//Calculates time elapsed between any 2 moments in any unit.  Takes three agruments: referenceMoment, targetMoment, outputUnit (String: "years", "days", "hours", "minutes", ), 

// Set your reference moment (defaults to '2022-06-19T00:00:00Z' aka 0 WD)
const referenceMoment = '2022-06-19T00:00:00Z';

// Input a moment to compare with the reference moment (defaults to Date.now() )
const targetMoment = '2023-03-16T00:00:00Z';

// Calculate the number of days away from the reference moment
const wd = calculate(referenceMoment, targetMoment);
console.log(`Target date as Wordle Date: ${wd}`);


### API
toWordleDate(targetMoment)
calculate(referenceMoment, targetMoment, outputUnit)
referenceMoment: (string | Date | number) - The reference moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
targetMoment: (string | Date | number) - The target moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
outputUnit: (string) - Optional. The desired output unit for the result. Default is 'days'. Available options are: 'years', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'.
Returns:

A number representing the elapsed time between the target moment and the reference moment, in the specified output unit.

### Example

const referenceMoment = '0000-01-01T00:00:00Z';
const targetMoment = '2022-06-19T00:00:00Z';
const outputUnit = 'hours';

const hours = calculate(referenceMoment, targetMoment, outputUnit);
console.log(`Hours away from reference moment: ${hours}`);


### With require syntax (CommonJS):

const wordleDate = require('wordle-date');

// Set your reference moment (defaults to 0 WD AKA '2022-06-19T00:00:00Z')
const referenceMoment = '2022-06-19T00:00:00Z';

// Input a moment to compare with the reference moment
// Note: if no argument is supplied, defaults to today as new Date().toISOString().split('T')[0] )
const targetMoment = '2023-03-16T00:00:00Z';

// Calculate the number of days away from the reference moment
const wd = wordleDate.toWordleDate(targetMoment);
console.log(`Target date as Wordle Date: ${wd}`);

#### .calculate

const wordleDate = require('wordle-date');

// Set your reference moment (defaults to 0 WD AKA '2022-06-19T00:00:00Z')
const referenceMoment = '2022-06-19T00:00:00Z';

// Input a moment to compare with the reference moment (defaults to Date.now() )
const targetMoment = '2023-03-16T00:00:00Z';

// Calculate the number of days away from the reference moment
const wd = wordleDate.calculate(referenceMoment, targetMoment);
console.log(`Target date as Wordle Date: ${wd}`);


### API

wordleDate.calculate(referenceMoment, targetMoment, outputUnit)
referenceMoment: (string | Date | number) - The reference moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
targetMoment: (string | Date | number) - The target moment, represented in any standard JavaScript or query language format (e.g., ISO-8601 string, Date object, or Unix timestamp).
outputUnit: (string) - Optional. The desired output unit for the result. Default is 'days'. Available options are: 'years, 'days', 'hours', 'minutes', 'seconds', 'milliseconds'.
Returns:

A number representing the elapsed time between the target moment and the reference moment, in the specified output unit.

### Example

const referenceMoment = '0000-01-01T00:00:00Z';
const targetMoment = '2022-06-19T00:00:00Z';
const outputUnit = 'hours';

const hours = wordleDate.calculate(referenceMoment, targetMoment, outputUnit);
console.log(`Hours away from reference moment: ${hours}`);

## License
MIT