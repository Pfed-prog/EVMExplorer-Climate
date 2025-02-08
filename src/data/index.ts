export type DataEnergy = {
  '24hr_kWh': string;
  '24hr_kgCO2': string;
  Output_kWh: string;
  Output_kgCO2: string;
};

export type EthereumEnergy = {
  '24hr_kWh': string;
  '24hr_kgCO2': string;
  Gas_unit_Wh: string;
  Gas_unit_gCO2: string;
};

export async function fetchBitcoin(date: string) {
  const data = await fetch(
    `https://digiconomist.net/wp-json/mo/v1/bitcoin/stats/${date}`,
  );
  const dataJson = await data.json();
  if (Array.isArray(dataJson) && dataJson.length > 0) {
    return dataJson[0] as DataEnergy;
  }
}

export async function fetchEthereum(date: string) {
  const data = await fetch(
    `https://digiconomist.net/wp-json/mo/v1/ethereum/stats/${date}`,
  );
  const dataJson = await data.json();
  if (Array.isArray(dataJson) && dataJson.length > 0) {
    return dataJson[0] as EthereumEnergy;
  }
}

export async function fetchDogecoin(date: string) {
  const data = await fetch(
    `https://digiconomist.net/wp-json/mo/v1/dogecoin/stats/${date}`,
  );
  const dataJson = await data.json();
  if (Array.isArray(dataJson) && dataJson.length > 0) {
    return dataJson[0] as DataEnergy;
  }
}
