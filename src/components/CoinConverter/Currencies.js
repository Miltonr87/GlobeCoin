import React from "react";

const Currencies = () => {
  const Coins = [
    // Coins JSON list from: http://fixer.io //
    { initials: "AUD", description: "🇦🇺 Dollar" },
    { initials: "BRL", description: "🇧🇷 Real" },
    { initials: "BTC", description: "₿ Bitcoin" },
    { initials: "CAD", description: "🇨🇦 Dollar" },
    { initials: "CHF", description: "🇨🇭 Franc" },
    { initials: "CNY", description: "🇨🇳 Yuan" },
    { initials: "CZK", description: "🇨🇿 Crown" },
    { initials: "DKK", description: "🇩🇰 Crown" },
    { initials: "EUR", description: "💶 Euro" },
    { initials: "GBP", description: "🇬🇧 Pound" },
    { initials: "HKD", description: "🇭🇰 Dollar" },
    { initials: "IDR", description: "🇮🇩 Rupee" },
    { initials: "ILS", description: "🇮🇱 New Shekel" },
    { initials: "INR", description: "🇮🇳 Rupee" },
    { initials: "JPY", description: "🇯🇵 Yen" },
    { initials: "KRW", description: "🇰🇷 Won" },
    { initials: "MXN", description: "🇲🇽 Peso" },
    { initials: "NZD", description: "🇳🇿 Dollar" },
    { initials: "SEK", description: "🇸🇪 Crown" },
    { initials: "USD", description: "🇺🇸 Dollar" },
    { initials: "ZAR", description: "🇿🇦 Rand" },
  ];

  /* Compare strings to sort the array of coins */
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
