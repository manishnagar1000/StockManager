const express = require('express');
const { filterStocks, createStock ,getAllStocks , deleteStock ,updateStock, getStockById} = require('../controllers/stockController');

const router = express.Router();

// Route to filter stocks based on criteria
router.post('/filter', filterStocks);

router.get('/', getAllStocks);
router.get('/:id', getStockById);

router.delete('/:id', deleteStock);
// Route to create a new stock
router.post('/create', createStock);

router.put('/:id', updateStock);
module.exports = router;
