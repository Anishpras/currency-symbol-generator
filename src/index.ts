import currencyList from './currencyList';

export const getCurrencySymbol = (currencyCode: string) => {
  if (
    currencyCode === '' ||
    currencyCode === undefined ||
    currencyCode === null ||
    currencyCode === ' '
  ) {
    console.log('Enter a valid currency code');
  } else {
    for (let i = 0; i < currencyList.length; i++) {
      if (currencyList[i].name === currencyCode) {
        return currencyList[i].symbol;
      }
    }
  }
};
