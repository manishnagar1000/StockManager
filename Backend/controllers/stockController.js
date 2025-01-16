const Stock = require('../models/Stock');

// Helper function to calculate stock rating

const calculateRating = (stockData) => {
  let rating = 0;

  if (stockData.peRatio && stockData.peRatio < 10) rating += 1;
  if (stockData.roe && stockData.roe > 15) rating += 1;

  return rating;
};

// Function to filter stocks based on user inputs
const filterStocks = async (req, res) => {
  try {
    const filters = req.body; // Get filters from request body

    const query = {};

    // Apply filters for PE Ratio
    if (filters.peRatio) query.peRatio = { $lt: filters.peRatio };

    // Apply filters for Promoter Holding
    if (filters.promoterHolding) query.promoterHolding = { $gte: filters.promoterHolding };  // Assuming you want to filter for values greater than or equal

    // Apply filters for ROE (Return on Equity)
    if (filters.roe) query.roe = { $gte: filters.roe };  // Assuming ROE needs to be greater than or equal to the value provided

    // Apply filters for ROCE (Return on Capital Employed)
    if (filters.roce) query.roce = { $gte: filters.roce };  // Assuming ROCE needs to be greater than or equal to the value provided

    // Apply filters for Face Value
    if (filters.faceValue) query.faceValue = { $gte: filters.faceValue };  // Assuming Face Value needs to be greater than or equal to the value provided

    // Apply filters for Sector
    if (filters.sector) query.sector = filters.sector;  // Exact match for sector

    // Apply filters for Cap Size
    if (filters.capSize) query.capSize = filters.capSize;  // Exact match for cap size

    console.log(query); // For debugging

    // Fetch stocks using the filters
    const stocks = await Stock.find(query);

    return res.json({ stocks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Function to create a new stock
const createStock = async (req, res) => {
  try {
    const stockData = req.body;
    stockData.rating = calculateRating(stockData);

    const newStock = new Stock(stockData);
    await newStock.save();

    return res.status(201).json({ message: 'Stock created successfully!', stock: newStock });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Stock with this company name already exists!' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Error creating stock' });
  }
};

const getAllStocks = async (req, res) => {
    try {
      const stocks = await Stock.find();
      return res.status(200).json(stocks);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching stocks' });
    }
  };

  // controllers/stockController.js

// Delete a stock by ID
const deleteStock = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find and delete the stock
      const deletedStock = await Stock.findByIdAndDelete(id);
  
      if (!deletedStock) {
        return res.status(404).json({ success: false, message: 'Stock not found' });
      }
  
      res.status(200).json({ success: true, message: 'Stock deleted successfully' });
    } catch (error) {
      console.error('Error deleting stock:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  
  // controllers/stockController.js

// Update stock details
const updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    updates.rating = calculateRating(updates);

    const updatedStock = await Stock.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedStock) {
      return res.status(404).json({ success: false, message: 'Stock not found' });
    }

    res.status(200).json({ success: true, message: 'Stock updated successfully', data: updatedStock });
  } catch (error) {
    console.error('Error updating stock:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
  
  const getStockById = async (req, res) => {
    try {
        const { id } = req.params; // Get stock ID from the request parameters

        console.log(id)
        
        // Find the stock by ID
        const stock = await Stock.findById(id);

        // Check if the stock was found
        if (!stock) {
            return res.status(404).json({ success: false, message: 'Stock not found' });
        }

        // Send the stock details in the response
        res.status(200).json({ success: true, message: 'Stock fetched successfully', data: stock });
    } catch (error) {
        console.error('Error fetching stock:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


// Helper function to get market cap size limit
const getMarketCapSizeLimit = (capSize) => {
  switch (capSize) {
    case 'Small Cap':
      return 1000; // Market cap in crore (example)
    case 'Mid Cap':
      return 10000;
    case 'Large Cap':
      return 50000;
    case 'Micro Cap':
      return 500;
    default:
      return Infinity; // No limit
  }
};

module.exports = { filterStocks, createStock , getAllStocks , deleteStock ,updateStock ,getStockById};
