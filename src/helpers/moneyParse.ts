const moneyParse = (value: number): string => {
  const formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formater.format(value);
}

export default moneyParse;
