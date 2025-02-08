import { test, expect } from 'vitest';

import type { DataEnergy, EthereumEnergy } from '.';
import { fetchBitcoin, fetchEthereum } from '.';

test('Get data on Bitcoin', async () => {
  const data: DataEnergy | undefined = await fetchBitcoin('20180101');
  expect(data?.['24hr_kWh']).toBe('100808360');
  expect(data?.['24hr_kgCO2']).toBe('48213614');
  expect(data?.Output_kWh).toBe('122.8');
  expect(data?.Output_kgCO2).toBe('58.7318');
}, 10000);

test('Get data on Bitcoin 2025', async () => {
  const data: DataEnergy | undefined = await fetchBitcoin('20250101');
  expect(Number(data?.['24hr_kWh'])).toBeGreaterThan(100808360);
  expect(Number(data?.['24hr_kgCO2'])).toBeGreaterThan(48213614);
  expect(Number(data?.Output_kWh)).toBeGreaterThan(122.8);
  expect(Number(data?.Output_kgCO2)).toBeGreaterThan(58.7318);
}, 10000);

test('Get data on Ethereum', async () => {
  const data: EthereumEnergy | undefined = await fetchEthereum('20180101');
  expect(Number(data?.['24hr_kWh'])).toBe(26332782);
  expect(Number(data?.['24hr_kgCO2'])).toBe(12594180);
  expect(Number(data?.Gas_unit_Wh)).toBe(0.660365);
  expect(Number(data?.Gas_unit_gCO2)).toBe(0.315833);
}, 10000);

test('Get data on Ethereum 2025', async () => {
  const data: EthereumEnergy | undefined = await fetchEthereum('20250101');
  expect(Number(data?.['24hr_kWh'])).toBeLessThan(26332782);
  expect(Number(data?.['24hr_kWh'])).toBe(1818);
  expect(Number(data?.['24hr_kgCO2'])).toBeLessThan(12594180);
  expect(Number(data?.['24hr_kgCO2'])).toBe(1014);
  expect(Number(data?.Gas_unit_Wh)).toBeLessThan(0.660365);
  expect(Number(data?.Gas_unit_Wh)).toBe(0.00020155);
  expect(Number(data?.Gas_unit_gCO2)).toBeLessThan(0.315833);
  expect(Number(data?.Gas_unit_gCO2)).toBe(0.000112416);
}, 10000);
