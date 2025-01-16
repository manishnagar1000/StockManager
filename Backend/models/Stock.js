const mongoose = require('mongoose');

// Define the Stock schema with all the necessary fields
const stockSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,  // Ensure companyName is unique
    trim: true
  },
  capSize: {
    type: String,
    // enum: ['Small', 'Mid', 'Large'],
  },
  investmentStatus: {
    type: String,
    // enum: ['Active', 'Sold Out'],
  },
  buyDate: {
    type: Date,
  },
  soldOutDate: {
    type: Date,
    required: function () { return this.investmentStatus === 'Sold Out'; }
  },
  investmentPeriod: {
    type: String,
    // enum: ['1-3', '3-6', '6-15'],
  },
  dividendSchedule: {
    type: String,
    // enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  roe: {
    type: String,
  },
  roce: {
    type: String,
  },
  pledgedShares: {
    type: String,
  },
  sector: {
    type: String,
  },
  peRatio: {
    type: String,
  },
  buyingPrice: {
    type: String,
  },
  sellingPrice: {
    type: String,
  },
  faceValue: {
    type: String,
    // min: 5  // Ensure face value is greater than 5
  },
  highStock: {
    type: String,
  },
  lowStock: {
    type: String,
  },
  buyingPoints: {
    type: [String],  // Comma-separated buying points
  },
  promoterHolding: {
    type: String,
    // enum: [40, 50, 60, 70, 80],
  },
  fiiDiiInvested: {
    type: String,
  },
  debtToEquity: {
    type: String,
  },
  salesGrowth: {
    type: String,
  },
  profitGrowth: {
    type: String,
  },
  opm: {
    type: String,
  },
  performance: {
    type: String,
  },
  valuation: {
    type: String,
  },
  growth: {
    type: String,
  },
  profitability: {
    type: String,
  },
  entrypoint: {
    type: String,
  },
  redflag: {
    type: String,
  },
  forcastratings: {
    type: String,
  },
  rating:{
    type:Number
  }
}, { timestamps: true });

// Create and export the Stock model
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
