// api.js - Fetch countries data from REST Countries API

const API = {
    baseURL: 'https://restcountries.com/v3.1',
    cache: null,

    async fetchCountries() {
        if (this.cache) {
            return this.cache;
        }

        try {
            const response = await fetch(`${this.baseURL}/all`);
            if (!response.ok) throw new Error('Failed to fetch countries');

            const data = await response.json();
            this.cache = this.normalizeCountries(data);
            return this.cache;
        } catch (error) {
            console.error('Error fetching countries:', error);
            return this.getFallbackData();
        }
    },

    normalizeCountries(data) {
        return data
            .filter(country => country.flags && country.name && country.currencies)
            .map(country => ({
                name: country.name.common,
                flag: country.flags.svg || country.flags.png,
                currencies: country.currencies ? Object.keys(country.currencies) : [],
                currencyNames: country.currencies ? 
                    Object.values(country.currencies).map(c => c.name) : []
            }))
            .filter(country => country.currencies.length > 0);
    },

    getFallbackData() {
        // Fallback data in case API fails
        return [
            { name: 'India', flag: 'https://flagcdn.com/in.svg', currencies: ['INR'], currencyNames: ['Indian rupee'] },
            { name: 'United States', flag: 'https://flagcdn.com/us.svg', currencies: ['USD'], currencyNames: ['United States dollar'] },
            { name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg', currencies: ['GBP'], currencyNames: ['British pound'] },
            { name: 'Japan', flag: 'https://flagcdn.com/jp.svg', currencies: ['JPY'], currencyNames: ['Japanese yen'] },
            { name: 'China', flag: 'https://flagcdn.com/cn.svg', currencies: ['CNY'], currencyNames: ['Chinese yuan'] },
            { name: 'Russia', flag: 'https://flagcdn.com/ru.svg', currencies: ['RUB'], currencyNames: ['Russian ruble'] },
            { name: 'Brazil', flag: 'https://flagcdn.com/br.svg', currencies: ['BRL'], currencyNames: ['Brazilian real'] },
            { name: 'South Korea', flag: 'https://flagcdn.com/kr.svg', currencies: ['KRW'], currencyNames: ['South Korean won'] },
            { name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg', currencies: ['CHF'], currencyNames: ['Swiss franc'] },
            { name: 'Sweden', flag: 'https://flagcdn.com/se.svg', currencies: ['SEK'], currencyNames: ['Swedish krona'] },
            { name: 'Turkey', flag: 'https://flagcdn.com/tr.svg', currencies: ['TRY'], currencyNames: ['Turkish lira'] },
            { name: 'Thailand', flag: 'https://flagcdn.com/th.svg', currencies: ['THB'], currencyNames: ['Thai baht'] },
            { name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg', currencies: ['SAR'], currencyNames: ['Saudi riyal'] },
            { name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg', currencies: ['AED'], currencyNames: ['UAE dirham'] },
            { name: 'South Africa', flag: 'https://flagcdn.com/za.svg', currencies: ['ZAR'], currencyNames: ['South African rand'] },
            { name: 'Philippines', flag: 'https://flagcdn.com/ph.svg', currencies: ['PHP'], currencyNames: ['Philippine peso'] },
            { name: 'Israel', flag: 'https://flagcdn.com/il.svg', currencies: ['ILS'], currencyNames: ['Israeli new shekel'] },
            { name: 'European Union', flag: 'https://flagcdn.com/eu.svg', currencies: ['EUR'], currencyNames: ['Euro'] }
        ];
    }
};
