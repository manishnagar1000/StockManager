import React from 'react';
import { Modal, Backdrop, Fade, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const StockViewModal = ({ isOpen, onClose, modalTitle, stockData }) => {
    if (!isOpen) return null;  // If the modal is not open, return nothing.

    return (
        <Modal
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
      >
        <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-auto max-h-[80vh]">
            <div className="w-full p-6 bg-white p-6 rounded-lg  space-y-4">
                <h2 className="text-xl font-bold mb-6">{modalTitle}</h2>

                {/* Company Information Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Company Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold">Company Name</p>
                            <p>{stockData?.companyName || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Cap Size</p>
                            <p>{stockData?.capSize || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Sector</p>
                            <p>{stockData?.sector || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* Investment Information Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Investment Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold">Investment Status</p>
                            <p>{stockData?.investmentStatus || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Buy Date</p>
                            <p>{stockData?.buyDate? new Date(stockData.buyDate).toLocaleDateString() : 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Sold Out Date</p>
                            <p>
                  {stockData.soldOutDate ? new Date(stockData.soldOutDate).toLocaleDateString() : 'N/A'}

                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Investment Period</p>
                            <p>{stockData?.investmentPeriod || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* Stock Performance Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Stock Performance</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold">Buying Price</p>
                            <p>{stockData?.buyingPrice || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Selling Price</p>
                            <p>{stockData?.sellingPrice || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Face Value</p>
                            <p>{stockData?.faceValue || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">High Stock</p>
                            <p>{stockData?.highStock || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Low Stock</p>
                            <p>{stockData?.lowStock || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Additional Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-semibold">ROE</p>
                            <p>{stockData?.roe || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">ROCE</p>
                            <p>{stockData?.roce || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Promoter Holding</p>
                            <p>{stockData?.promoterHolding || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">FII/DII Invested</p>
                            <p>{stockData?.fiiDiiInvested || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Debt to Equity</p>
                            <p>{stockData?.debtToEquity || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Sales Growth</p>
                            <p>{stockData?.salesGrowth || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Profit Growth</p>
                            <p>{stockData?.profitGrowth || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">OPM</p>
                            <p>{stockData?.opm || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 bg-gray-600 text-white rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
        </div>
        </Modal>
    );
};

export default StockViewModal;
