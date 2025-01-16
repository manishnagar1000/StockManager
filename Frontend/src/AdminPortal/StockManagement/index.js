import React, { useState ,useEffect } from 'react';
import StockEditModal from './Component/Modal';
import Table from './Component/Table';
import StockViewModal from './Component/StockViewModal';
import StockFilterModal from './Component/StockFilterModal';
import axios from 'axios';

const StockManagement = () => {
    const [stocks, setStocks] = useState([]);
    const [editingStock, setEditingStock] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen,setIsViewModalOpen]= useState(false)
    const [selectedStock, setSelectedStock] = useState(null); // Add state for selectedStock
    const [stockDetails, setStockDetails] = useState(null); // For storing stock details in modal
    const [editingStockId, setEditingStockId] = useState(null);
    const [filters, setFilters] = useState({});
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);


    // Fetch stocks with filters
    const fetchStocks = async (appliedFilters = {}) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/api/stocks/filter`, appliedFilters);  // Use POST instead of GET
        setStocks(response.data.stocks);  // Assuming the response contains a 'stocks' field
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };
    
  useEffect(() => {
    fetchStocks(filters);
}, [filters]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/api/stocks`)
          .then(response => {
            console.log(response.data)
            setStocks(response.data);
          })
          .catch(error => {
            console.error('Error fetching stocks:', error);
          });
      }, []);

      const handleApplyFilters = (appliedFilters) => {
        console.log("Filters Applied:", appliedFilters);
        setFilters(appliedFilters); // Update filters
    };

      const handleSaveData = async (filters) => {
        console.log("Filters Applied:", filters);
      
        if (editingStock) {
          try {
            // Send POST request to backend to create stock
            const response = await axios.put(`${process.env.REACT_APP_URL}/api/stocks/${editingStockId}`, filters);
      
            if (response.status === 201) {
              // Stock created successfully, close modal and reset form
              alert(response.data)
              console.log("Stock created successfully:", response.data);
              fetchStocks()
            }
          } catch (error) {
            if (error.response && error.response.status === 400) {
              // Display error message from backend (if stock already exists)
              console.error("Backend Error:", error.response.data.message);
            } else {
              console.error("An error occurred:", error.message);
            }
          }
          // Handle editing stock logic here (if required)
        } else {
          try {
            // Send POST request to backend to create stock
            const response = await axios.post(`${process.env.REACT_APP_URL}/api/stocks/create`, filters);
      
            if (response.status === 201) {
              // Stock created successfully, close modal and reset form
              console.log("Stock created successfully:", response.data);
              fetchStocks()
            }
          } catch (error) {
            if (error.response && error.response.status === 400) {
              // Display error message from backend (if stock already exists)
              console.error("Backend Error:", error.response.data.message);
            } else {
              console.error("An error occurred:", error.message);
            }
          }
        }
      };
      

      const handleDeleteStock = async (id) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_URL}/api/stocks/${id}`, {
            method: 'DELETE',
          });
      
          const data = await response.json();
      
          if (data.success) {
            alert('Stock deleted successfully');
            // Refresh stock list or remove from state
            setStocks((prevStocks) => prevStocks.filter((stock) => stock._id !== id));
          } else {
            alert(data.message || 'Failed to delete stock');
          }
        } catch (error) {
          console.error('Error deleting stock:', error);
          alert('An error occurred. Please try again.');
        }
      };

      const handleViewStock = async (id) => {
        console.log(id)
        try {
            // Fetch the stock details by ID
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/stocks/${id}`);

            setStockDetails(response.data.data);  // Set the stock details to state
            setIsViewModalOpen(true);  // Open the modal
        } catch (error) {
            console.error('Error fetching stock details:', error);
        }
    };

      const handleEditStock = async (id) => {
        setEditingStockId(id); // Store ID separately

        try {
            // Make an API call to fetch stock details
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/stocks/${id}`);
            
            if (response.status === 200) {
                setSelectedStock(response.data.data); // Set the stock details to selectedStock
                setEditingStock(true); // Set editing mode
                setIsModalOpen(true); // Open the modal
            } else {
                console.error('Error fetching stock data:', response.status);
            }
        } catch (error) {
            console.error('Error fetching stock:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-20">
            <div className='flex justify-between align-center'>
            <h1 className="mb-6 text-2xl font-bold">Stock Management <span className='text-blue-500 text-sm'>({stocks.length})</span></h1>
            <button
                    onClick={() => setIsFilterModalOpen(true)}
                    className="px-4 py-2 text-white bg-blue-600 rounded mb-4"
                >
                    Advanced Filters
                </button>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 text-white bg-green-600 rounded mb-4"
            >
                Add Stock
            </button>
            </div>
        
            <Table
                stocks={stocks}
                onEdit={handleEditStock}
                onView={handleViewStock}
                onDelete={handleDeleteStock}
            />
           <StockEditModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onApplyFilters={handleSaveData}
  modalTitle={editingStock ? "Edit Stock" : "Add Stock"}  // Dynamic title
  editingStock={editingStock} // boolean to check if it's an edit action
  stockData={editingStock ? selectedStock : null} 
/>

<StockViewModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                modalTitle="Stock Details"
                stockData={stockDetails} // Pass stock data to modal
            />

<StockFilterModal
    isOpen={isFilterModalOpen}
    onClose={() => setIsFilterModalOpen(false)}
    onApplyFilters={handleApplyFilters}
/>
        </div>
    );
};

export default StockManagement;
