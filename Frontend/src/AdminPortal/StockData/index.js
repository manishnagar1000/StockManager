import React, { useState } from "react";

const StockData = () => {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStockData = async (stockSymbol) => {
    const API_KEY = "PY4RKP4ZQ6OO9ZDY"; // Replace with your API key
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${API_KEY}`;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data. Check the stock symbol or try again later.");
      }
      const data = await response.json();
      if (data.Note) {
        throw new Error("API limit reached. Please wait a minute before trying again.");
      }
      if (Object.keys(data).length === 0) {
        throw new Error("No data found. Please enter a valid stock symbol.");
      }
      setStockData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchData = () => {
    if (!symbol.trim()) {
      setError("Please enter a stock symbol.");
      return;
    }
    fetchStockData(symbol);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Data Fetcher</h1>
      <div className="mb-4">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter Stock Symbol (e.g., AAPL)"
          className="border p-2 w-64 mr-2"
        />
        <button
          onClick={handleFetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fetch Data
        </button>
      </div>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {stockData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">{stockData.Name}</h2>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Field</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Symbol</td>
                <td className="border px-4 py-2">{stockData.Symbol}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Sector</td>
                <td className="border px-4 py-2">{stockData.Sector}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">PE Ratio</td>
                <td className="border px-4 py-2">{stockData.PERatio}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ROE</td>
                <td className="border px-4 py-2">{stockData.ReturnOnEquityTTM}%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ROCE</td>
                <td className="border px-4 py-2">{stockData.ReturnOnAssetsTTM}%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Dividend Yield</td>
                <td className="border px-4 py-2">{stockData.DividendYield}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StockData;
