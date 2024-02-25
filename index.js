import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi(
  'fca_live_uXz2NfecVMvuAc8gdPlSr7z6VeZne8CD7wSOX3IC'
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = res.data[toCurrency];
  return multiplier * units
}

// convertCurrency("USD", "INR", 3)
