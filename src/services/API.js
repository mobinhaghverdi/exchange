import axios from "axios";

export const getData = () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    {
      headers: {
        "Content-Type": "Application/json",
      },
    }
  );
};
