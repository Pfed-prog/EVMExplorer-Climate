type AddressDovuRaw = {
  data: AddressDovu;
};

export type AddressDovu = {
  account: string;
  address_carbon_emissions: number;
  address_gas_used: number;
  address_transaction_count: number;
  dov_per_kg: number;
  dov_price: number;
  dov_to_buy: number;
};

type PriceDovuRaw = {
  data: PriceDovu;
};

export type PriceDovu = {
  currency: string;
  price: number;
  quote_created_at: string;
  ticker_symbol: string;
};

export type MarketDebtDovu = {
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

export async function fetchAddressDovu(address: string) {
  const data = await fetch(
    `https://api.dovu.earth/api/addresses/${address}/offset`,
  );
  const dataJson = (await data.json()) as AddressDovuRaw;
  return dataJson.data;
}

export async function fetchPriceDovu() {
  const data = await fetch(`https://api.dovu.earth/api/carbon/price`);
  const dataJson = (await data.json()) as PriceDovuRaw;
  return dataJson.data;
}

export async function fetchMarketDebtDovu() {
  const data = await fetch(`https://api.dovu.earth/api/market/debt`);
  const dataJson = await data.json();
  if (Array.isArray(dataJson) && dataJson.length > 0) {
    return dataJson[0] as MarketDebtDovu;
  }
}
