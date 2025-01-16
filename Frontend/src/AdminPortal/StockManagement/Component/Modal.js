import React, { useState , useEffect} from "react";
import { Modal, Backdrop, Fade, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const StockFilterModal = ({ isOpen, onClose, onApplyFilters, modalTitle, editingStock, stockData  }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    capSize: "",
    investmentStatus: "",
    buyDate: "",
    soldOutDate: "",
    investmentPeriod: "",
    dividendSchedule: "",
    roe: "",
    roce: "",
    pledgedShares: "",
    sector: "",
    peRatio:"",
    buyingPrice: "",
    sellingPrice: "",
    faceValue: "",
    highStock: "",
    lowStock: "",
    buyingPoints: "",
    promoterHolding: "",
    fiiDiiInvested: "",
    debtToEquity: "",
    salesGrowth: "",
    profitGrowth: "",
    opm: "",
    performance:"",
    valuation:"",
    growth:"",
    profitability:"",
    entrypoint:"",
    redflag:"",
    forcastratings:"",

  });

   // Populate formData when editingStock is true
   useEffect(() => {
    if (editingStock && stockData) {
      setFormData({
        ...formData,
        id: stockData.id || "",
        companyName: stockData.companyName || "",
        capSize: stockData.capSize || "",
        investmentStatus: stockData.investmentStatus || "",
        buyDate: stockData.buyDate || "",
        soldOutDate: stockData.soldOutDate || "",
        investmentPeriod: stockData.investmentPeriod || "",
        dividendSchedule: stockData.dividendSchedule || "",
        roe: stockData.roe || "",
        roce: stockData.roce || "",
        pledgedShares: stockData.pledgedShares || "",
        sector: stockData.sector || "",
        peRatio:stockData.peRatio || "",
        buyingPrice: stockData.buyingPrice || "",
        sellingPrice: stockData.sellingPrice || "",
        faceValue: stockData.faceValue || "",
        highStock: stockData.highStock || "",
        lowStock: stockData.lowStock || "",
        buyingPoints: stockData.buyingPoints || "",
        promoterHolding: stockData.promoterHolding || "",
        fiiDiiInvested: stockData.fiiDiiInvested || "",
        debtToEquity: stockData.debtToEquity || "",
        salesGrowth: stockData.salesGrowth || "",
        profitGrowth: stockData.profitGrowth || "",
        opm: stockData.opm || "",
        performance: stockData.performance || "",
        valuation: stockData.valuation || "",
        growth: stockData.growth || "",
        profitability: stockData.profitability || "",
        entrypoint: stockData.entrypoint || "",
        redflag: stockData.redflag || "",
        forcastratings: stockData.forcastratings || "",
      });
    }
  }, [editingStock, stockData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingStock) {
      onApplyFilters({ ...formData, id: stockData.id });
  } else {
      onApplyFilters(formData);
  }
    onClose();
    setFormData({
      companyName: "",
      capSize: "",
      investmentStatus: "",
      buyDate: "",
      soldOutDate: "",
      investmentPeriod: "",
      dividendSchedule: "",
      roe: "",
      roce: "",
      pledgedShares: "",
      sector: "",
      peRatio:"",
      buyingPrice: "",
      sellingPrice: "",
      faceValue: "",
      highStock: "",
      lowStock: "",
      buyingPoints: "",
      promoterHolding: "",
      fiiDiiInvested: "",
      debtToEquity: "",
      salesGrowth: "",
      profitGrowth: "",
      opm: "",
      performance:"",
      valuation:"",
      growth:"",
      profitability:"",
      entrypoint:"",
      redflag:"",
      forcastratings:"",
    })
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
    >
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-auto max-h-[80vh]">
          <div className="w-full p-6">
            <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="e.g., TCS, Reliance"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Market Cap Size</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="capSize"
                      value={formData.capSize}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Market Cap Size</em>
                      </MenuItem>
                      <MenuItem value="Small Cap">Small Cap</MenuItem>
                      <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                      <MenuItem value="Large Cap">Large Cap</MenuItem>
                      <MenuItem value="Micro Cap">Micro Cap</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Investment Status</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="investmentStatus"
                      value={formData.investmentStatus}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Investment Status</em>
                      </MenuItem>
                      <MenuItem value="Invested">Invested</MenuItem>
                      <MenuItem value="Not Invested">Not Invested</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Buying Date</label>
                  <input
                    type="date"
                    name="buyDate"
                    value={formData.buyDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Sold Out Date</label>
                  <input
                    type="date"
                    name="soldOutDate"
                    value={formData.soldOutDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Investment Period</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="investmentPeriod"
                      value={formData.investmentPeriod}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Investment Period</em>
                      </MenuItem>
                      <MenuItem value="1-3">1-3 Years</MenuItem>
                      <MenuItem value="3-6">3-6 Years</MenuItem>
                      <MenuItem value="6-15">6-15 Years</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Dividend Schedule (Year)</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="dividendSchedule"
                      value={formData.dividendSchedule}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Dividend Schedule</em>
                      </MenuItem>
                      <MenuItem value="Jan">January</MenuItem>
                      <MenuItem value="Feb">February</MenuItem>
                      <MenuItem value="Mar">March</MenuItem>
                      <MenuItem value="Apr">April</MenuItem>
                      <MenuItem value="May">May</MenuItem>
                      <MenuItem value="Jun">June</MenuItem>
                      <MenuItem value="Jul">July</MenuItem>
                      <MenuItem value="Aug">August</MenuItem>
                      <MenuItem value="Sep">September</MenuItem>
                      <MenuItem value="Oct">October</MenuItem>
                      <MenuItem value="Nov">November</MenuItem>
                      <MenuItem value="Dec">December</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">ROE</label>
                  <input
                    type="number"
                    name="roe"
                    value={formData.roe}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Should be less than 10"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">ROCE</label>
                  <input
                    type="number"
                    name="roce"
                    value={formData.roce}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 233"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Sector</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Sector/Industry</em>
                      </MenuItem>
                      <MenuItem value="Oil">Oil</MenuItem>
                      <MenuItem value="Refineries">Refineries</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="IT - Software">IT - Software</MenuItem>''
                      <MenuItem value="Mining & Mineral products">Mining & Mineral products</MenuItem>''
                      <MenuItem value="Metals">Metals</MenuItem>''
                      <MenuItem value="Paper">Paper</MenuItem>''
                      <MenuItem value="Tyres">Tyres</MenuItem>''
                      <MenuItem value="Steel">Steel</MenuItem>''
                      <MenuItem value="Banks">Banks</MenuItem>''
                      <MenuItem value="Electric Equipment">Electric Equipment</MenuItem>''
                      <MenuItem value="Aerospace & Defence">Aerospace & Defence</MenuItem>''
                      <MenuItem value="Construction">Construction</MenuItem>''
                      <MenuItem value="AutoMobile">AutoMobile</MenuItem>''
                      <MenuItem value="Utilities">Utilities</MenuItem>''
                      <MenuItem value="Fertilizers">Fertilizers</MenuItem>''
                      <MenuItem value="FMCG">FMCG</MenuItem>''
                      <MenuItem value="Pharmaceuticals">Pharmaceuticals</MenuItem>''
                       
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Pledged Share</label>
                  <input
                    type="number"
                    name="pledgedShares"
                    value={formData.pledgedShares}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 233"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">PE Ratio</label>
                  <input
                    type="number"
                    name="peRatio"
                    value={formData.peRatio}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Should be less than 10"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Buying Price</label>
                  <input
                    type="number"
                    name="buyingPrice"
                    value={formData.buyingPrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 233"
                  />
                </div>
              </div>

           

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Selling Price</label>
                  <input
                    type="number"
                    name="sellingPrice"
                    value={formData.sellingPrice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 244"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Face Value (Greater than 5)</label>
                  <input
                    type="number"
                    name="faceValue"
                    value={formData.faceValue}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 10"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">High Stock</label>
                  <input
                    type="number"
                    name="highStock"
                    value={formData.highStock}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 250"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Low Stock</label>
                  <input
                    type="number"
                    name="lowStock"
                    value={formData.lowStock}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., 230"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700">Buying Points (Comma Separated)</label>
                <input
                  type="text"
                  name="buyingPoints"
                  value={formData.buyingPoints}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="e.g., 233,244"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Promoter Holding (%)</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="promoterHolding"
                      value={formData.promoterHolding}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Promoter Holding</em>
                      </MenuItem>
                      <MenuItem value="40">40%</MenuItem>
                      <MenuItem value="50">50%</MenuItem>
                      <MenuItem value="60">60%</MenuItem>
                      <MenuItem value="70">70%</MenuItem>
                      <MenuItem value="80">80%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">FII & DII Invested</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="fiiDiiInvested"
                      value={formData.fiiDiiInvested}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose FII & DII Investment Status</em>
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Debt to Equity</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="debtToEquity"
                      value={formData.debtToEquity}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Debt to Equity Ratio</em>
                      </MenuItem>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">Less than 1</MenuItem>
                      <MenuItem value="2">Less than 2</MenuItem>
                      <MenuItem value="3">Greater than 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Sales Growth (3 Years)</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="salesGrowth"
                      value={formData.salesGrowth}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Sales Growth</em>
                      </MenuItem>
                      <MenuItem value="10">Less than 10%</MenuItem>
                      <MenuItem value="12">Greater than 12%</MenuItem>
                      <MenuItem value="15">Greater than 15%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Profit Growth</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="profitGrowth"
                      value={formData.profitGrowth}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose Profit Growth</em>
                      </MenuItem>
                      <MenuItem value="10">less than 10%</MenuItem>
                      <MenuItem value="15">Greater than 15%</MenuItem>
                      <MenuItem value="20">Greater than 20%</MenuItem>
                      <MenuItem value="30">Greater than 30%</MenuItem>
                      <MenuItem value="40">Greater than 40%</MenuItem>
                      <MenuItem value="50">Greater than 50%</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="flex-1">
                  <label className="block font-medium text-gray-700">OPM</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="opm"
                      value={formData.opm}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Choose OPM</em>
                      </MenuItem>
                      <MenuItem value="5">Less than 10%</MenuItem>
                      <MenuItem value="10">Greater than 10%</MenuItem>
                      <MenuItem value="20">Greater than 20%</MenuItem>
                      <MenuItem value="30">Greater than 30%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
              <div className="flex-1">
                  <label className="block font-medium text-gray-700">Performance</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="performance"
                      value={formData.performance}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Performance</em>
                      </MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Avg">Avg</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Valuation</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="valuation"
                      value={formData.valuation}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Valuation</em>
                      </MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Avg">Avg</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
              <div className="flex-1">
                  <label className="block font-medium text-gray-700">Growth</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="growth"
                      value={formData.growth}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Growth</em>
                      </MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Avg">Avg</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Profitability</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="profitability"
                      value={formData.profitability}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Profitability</em>
                      </MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Avg">Avg</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
              <div className="flex-1">
                  <label className="block font-medium text-gray-700">Entrypoint</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="entrypoint"
                      value={formData.entrypoint}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Entrypoint</em>
                      </MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Avg">Avg</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block font-medium text-gray-700">Red Flag</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="redflag"
                      value={formData.redflag}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Red Flag</em>
                      </MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Avg">Avg</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex gap-4">
              <div className="flex-1">
                  <label className="block font-medium text-gray-700">Forcast Ratings</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="forcastratings"
                      value={formData.forcastratings}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select Forcast Ratings</em>
                      </MenuItem>
                      <MenuItem value="10">10%</MenuItem>
                      <MenuItem value="20">20%</MenuItem>
                      <MenuItem value="30">30%</MenuItem>
                      <MenuItem value="40">40%</MenuItem>
                      <MenuItem value="50">50%</MenuItem>
                      <MenuItem value="60">60%</MenuItem>
                      <MenuItem value="70">70%</MenuItem>
                      <MenuItem value="80">80%</MenuItem>
                      <MenuItem value="90">90%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                {/* <div className="flex-1">
                  <label className="block font-medium text-gray-700">Rating</label>
                  <FormControl fullWidth variant="outlined">
                    <Select
                    size="small"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      displayEmpty
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <MenuItem value="">
                        <em>Select rating</em>
                      </MenuItem>
                      <MenuItem value="10">10%</MenuItem>
                      <MenuItem value="20">20%</MenuItem>
                      <MenuItem value="30">30%</MenuItem>
                      <MenuItem value="40">40%</MenuItem>
                      <MenuItem value="50">50%</MenuItem>
                      <MenuItem value="60">60%</MenuItem>
                      <MenuItem value="70">70%</MenuItem>
                      <MenuItem value="80">80%</MenuItem>
                      <MenuItem value="90">90%</MenuItem>
                    </Select>
                  </FormControl>
                </div> */}
              </div>

            </form>

            <div className="mt-6 flex justify-end gap-4">
                <Button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:text-white"
                >
                    {editingStock?"Update the Stock":"Save the Stock  "}   
               </Button>
              </div>
            </div>
          </div>
        </div>
    </Modal>
  );
};

export default StockFilterModal;
