
export function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number') {
      throw new Error('Invalid input: percent and number must be numbers');
    }
  
    return number / 100 * percent;
  }