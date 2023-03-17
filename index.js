function parseDate(date) {
    return typeof date === 'string' ? new Date(date) : new Date(date.valueOf());
  }
  
  function calculate(referenceMoment, targetMoment, outputUnit = 'days') {
    const ref = parseDate(referenceMoment);
    const target = parseDate(targetMoment);
  
    let unitMultiplier;
  
    switch (outputUnit) {
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
  };
  


  