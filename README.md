# EVMExplorer-Climate

[EVM Explorer](https://evmexplorer.com) TypeScript Climate SDK.

This repository provides TypeScript types and functions for fetching data regarding energy consumption and carbon emissions related to popular cryptocurrencies such as Bitcoin, Ethereum, and Dogecoin, as well as Dovu carbon credit data.

## Types

- BitcoinDogeEnergy
- EthereumEnergy
- AddressDovu
- PriceDovu
- MarketDebtDovu

## Functions

- fetchBitcoin(date: string): Promise
- fetchDogecoin(date: string): Promise
- fetchEthereum(date: string): Promise
- fetchAddressDovu(address: string): Promise
- fetchPriceDovu(): Promise
- fetchMarketDebtDovu(): Promise

## 📚 Install

```bash
npm install @evmexplorer/climate
```

or

```bash
yarn add @evmexplorer/climate
```

## Usage

### Fetching Energy Data

To fetch energy-related data for Bitcoin, Ethereum, or Dogecoin, you can use the respective fetch functions:

```js
import { fetchBitcoin } from '@evmexplorer/climate';

// Example to fetch Bitcoin data for a specific date
const bitcoinData = await fetchBitcoin('20250301');
console.log(bitcoinData);
```

### Fetching Dovu Data

To fetch carbon credit data related to specific addresses or general market debt:

```js
import {
  fetchAddressDovu,
  fetchPriceDovu,
  fetchMarketDebtDovu,
} from '@evmexplorer/climate';

// Example to fetch the Dovu carbon compensation data for an address
const addressDovu = await fetchAddressDovu(
  '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
);
console.log(addressDovu);

// Fetch the current price of Dovu carbon credits
const dovuPrice = await fetchPriceDovu();
console.log(dovuPrice);

// Fetch market debt details of Dovu
const marketDebt = await fetchMarketDebtDovu();
console.log(marketDebt);
```

## Types Overview

### BitcoinDogeEnergy

```typescript
type BitcoinDogeEnergy = {
  '24hr_kWh': string;
  '24hr_kgCO2': string;
  Output_kWh: string;
  Output_kgCO2: string;
};
```

### EthereumEnergy

```typescript
type EthereumEnergy = {
  '24hr_kWh': string;
  '24hr_kgCO2': string;
  Gas_unit_Wh: string;
  Gas_unit_gCO2: string;
};
```

### AddressDovu

```typescript
type AddressDovu = {
  account: string;
  address_carbon_emissions: number;
  address_gas_used: number;
  address_transaction_count: number;
  dov_per_kg: number;
  dov_price: number;
  dov_to_buy: number;
};
```

### PriceDovu

```typescript
type PriceDovu = {
  currency: string;
  price: number;
  quote_created_at: string;
  ticker_symbol: string;
};
```

### MarketDebtDovu

```typescript
type MarketDebtDovu = {
  date: string;
  total_gas: number;
  gas_used: number;
  day_change: number;
  percent_day_change: number;
  total_carbon_debt: number;
  day_carbon_debt: number;
  day_change_carbon_debt: number;
  cost_to_offset: number;
};
```

## More information

[EVM Explorer Climate Smart Contracts Page](https://evmexplorer.com/climate)

[EVM Explorer - Tracking Smart Contract Transaction Data](https://dspyt.com/evmexplorer)

[Digiconomist API Documentation](https://digiconomist.net/api-documentation/)

[DOVU carbon API](https://docs.dovu.market/)
