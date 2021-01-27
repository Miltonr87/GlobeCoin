import React from 'react'

const Currencies = () => {

    const Coins = [ // Coins JSON list from: http://fixer.io //
		{ "initials": "AUD", "description": "Australian Dollar" },
        { "initials": "BRL", "description": "Brazilian Real" },
        { "initials": "BTC", "description": "Bitcoin Cryptocurrency" },
		{ "initials": "CAD", "description": "Canadian Dollar" },
		{ "initials": "CHF", "description": "Swiss Franc" },
		{ "initials": "CNY", "description": "Yuan China" },
		{ "initials": "CZK", "description": "Czech Republic Crown" },
		{ "initials": "DKK", "description": "Danish Crown" },
		{ "initials": "EUR", "description": "Euro" },
		{ "initials": "GBP", "description": "British Pound" },
		{ "initials": "HKD", "description": "Hong Kong Dollar" },
		{ "initials": "IDR", "description": "Indonesian Rupee" },
		{ "initials": "ILS", "description": "Israeli New Shekel" },
		{ "initials": "INR", "description": "Indian Rupee" },
		{ "initials": "JPY", "description": "Japanese Yen" },
		{ "initials": "KRW", "description": "South Korean Won" },
		{ "initials": "MXN", "description": "Mexican Peso" },
		{ "initials": "NZD", "description": "New Zealand Dollar" },
		{ "initials": "SEK", "description": "Sweden Crown" },
		{ "initials": "USD", "description": "United States Dollar " },
		{ "initials": "ZAR", "description": "Rand South Africa" }
	];
    
    // Compare strings to sort the array of coins //
    function compare(coin1, coin2) {
        if (coin1.description < coin2.description) {
            return -1;
        } else if (coin1.description > coin2.description) {
            return 1;
        } 

        return 0;
    }

    return Coins.sort(compare).map(coin => 
        <option value={coin.initials} key={coin.initials}>
            {coin.description}
        </option>);
};

export default Currencies;