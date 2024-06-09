export const calculateMaxPotency = (berries) => {
    let maxValue = 0;
  
    const values = Object.values(berries);
  
    values.forEach((el) => {
      const valueFromObject = el.potency;
      maxValue = Math.max(maxValue, valueFromObject);
    });
  
    return maxValue;
  };
  
  export const filterBerriesByPotency = (berries, maxValue) => {
    return berries.filter((item) => item.potency === maxValue);
  };