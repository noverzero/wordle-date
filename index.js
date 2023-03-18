function parseDate(date) {
    return typeof date === 'string' ? new Date(date) : new Date(date.valueOf());
  }

  function adjustForTimezone(suppliedDate){
    let yourDate = new Date(suppliedDate)
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    const offsetDate = yourDate.toISOString().split('T')[0]
    return offsetDate;
}

  function toWordleDate(targetMoment = new Date()) {
    const referenceMoment = '2021-06-19T00:00:00Z'
    const ref = parseDate(referenceMoment);
    const target = parseDate(adjustForTimezone(parseDate(targetMoment)));

    const elapsed = (target - ref) / (1000 * 60 * 60 * 24);
  
    return elapsed;
  }
  
  function calculate(referenceMoment = '2021-06-19T00:00:00Z', targetMoment = new Date(), outputUnit = 'days') {
    const ref = parseDate(referenceMoment);
    const target = parseDate(adjustForTimezone(parseDate(targetMoment)));

    let unitMultiplier;
  
    switch (outputUnit) {
      case 'years':
        unitMultiplier = 1/365;
      case 'days':
        unitMultiplier = 1;
        break;
      case 'hours':
        unitMultiplier = 24;
        break;
      case 'minutes':
        unitMultiplier = 24 * 60;
        break;
      case 'seconds':
        unitMultiplier = 24 * 60 * 60;
        break;
      case 'milliseconds':
        unitMultiplier = 24 * 60 * 60 * 1000;
        break;
      default:
        throw new Error('Invalid output unit');
    }
  
    const elapsed = (target - ref) / (1000 * 60 * 60 * 24);
  
    return elapsed * unitMultiplier;
  }
  

  module.exports = {
    calculate,
    toWordleDate
  };



  