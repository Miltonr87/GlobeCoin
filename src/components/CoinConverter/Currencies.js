import React from 'react';

const Currencies = () => {
  const Coins = [
    // Coins JSON list from: http://fixer.io //
    { initials: 'BRL', description: '🇧🇷 Brazil Real' },
    { initials: 'BTC', description: '₿ Digital Bitcoin' },
    { initials: 'AUD', description: '🇦🇺 Australlian Dollar' },
    { initials: 'CAD', description: '🇨🇦 Canadian Dollar' },
    { initials: 'CHF', description: '🇨🇭 Swiss Franc' },
    { initials: 'CNY', description: '🇨🇳 Chinese Yuan' },
    { initials: 'CZK', description: '🇨🇿 Czech Koruna' },
    { initials: 'DKK', description: '🇩🇰 Denmark Crown' },
    { initials: 'EUR', description: '💶 Euro' },
    { initials: 'GBP', description: '🇬🇧 UK Pound' },
    { initials: 'HKD', description: '🇭🇰 Hong Kong Dollar' },
    { initials: 'IDR', description: '🇮🇩 Indonesian Rupee' },
    { initials: 'ILS', description: '🇮🇱 Israel New Shekel' },
    { initials: 'INR', description: '🇮🇳 Indian Rupee' },
    { initials: 'JPY', description: '🇯🇵 Japan Yen' },
    { initials: 'KRW', description: '🇰🇷 South Korean Won' },
    { initials: 'MXN', description: '🇲🇽 Mexican Peso' },
    { initials: 'NZD', description: '🇳🇿 New Zealand Dollar' },
    { initials: 'SEK', description: '🇸🇪 Swedish Krona' },
    { initials: 'USD', description: '🇺🇸 American Dollar' },
    { initials: 'ZAR', description: '🇿🇦 South Africa Rand' },
  ];

  function compare(coin1, coin2) {
    if (coin1.description < coin2.description) {
      return -1;
    } else if (coin1.description > coin2.description) {
      return 1;
    }

    return 0;
  }

  return Coins.sort(compare).map((coin) => (
    <option value={coin.initials} key={coin.initials}>
      {coin.description}
    </option>
  ));
};

export default Currencies;
