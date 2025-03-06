import { test, expect } from 'vitest';

import type { AddressDovu, MarketDebtDovu, PriceDovu } from '.';
import { fetchAddressDovu, fetchMarketDebtDovu, fetchPriceDovu } from '.';

test('Get data on Address', async () => {
  const data: AddressDovu = await fetchAddressDovu(
    '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  );
  expect(data.account).toBe('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
  expect(data.address_carbon_emissions).toBe(137465.81604445953);
  expect(data.address_gas_used).toBe(759651963);
  expect(data.address_transaction_count).toBe(1349);
  expect(data.dov_per_kg).toBeGreaterThan(40);
  expect(data.dov_price).toBe(0.02);
  expect(data.dov_to_buy).toBeGreaterThan(2000);
}, 10000);

test('Get data on Price', async () => {
  const data: PriceDovu = await fetchPriceDovu();
  expect(data.currency).toBe('EUR');
  expect(data.price).toBe(64);
  expect(data.quote_created_at).toBe('2021-06-02T15:59:00.000000Z');
  expect(data.ticker_symbol).toBe('ecfz21');
}, 10000);

test('Get data on Market Debt', async () => {
  const data: MarketDebtDovu | undefined = await fetchMarketDebtDovu();
  expect(data?.date).toBe('2022-05-13 00:00:00');
  expect(data?.total_gas).toBe(14454274759282);
  expect(data?.gas_used).toBe(12068858639);
  expect(data?.day_change).toBe(-6506745238);
  expect(data?.percent_day_change).toBe(-35.03);
  expect(data?.total_carbon_debt).toBe(2615630277.9349675);
  expect(data?.day_carbon_debt).toBe(2183967.898909201);
  expect(data?.day_change_carbon_debt).toBe(-1177453.73868674);
  expect(data?.cost_to_offset).toBeGreaterThan(807874);
}, 10000);
