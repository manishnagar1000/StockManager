import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Button,
    Grid,
} from "@mui/material";

const StockFilterModal = ({ isOpen, onClose, onApplyFilters }) => {
    const [filters, setFilters] = useState({
        peRatio: "",
        promoterHolding: "",
        sector: "",
        faceValue: "",
        capSize: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleApply = () => {
        onApplyFilters(filters);
        onClose();
    };

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        width: "90%",
        maxWidth: 800,
    };

    return (
        <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
            <Box sx={modalStyle}>
                <Typography id="modal-title" variant="h6" component="h2" mb={2}>
                    Stock Filters
                </Typography>
                <Grid container spacing={3}>
                    {/* PE Ratio */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="PE Ratio"
                            type="number"
                            name="peRatio"
                            value={filters.peRatio}
                            onChange={handleInputChange}
                            placeholder="e.g., 9"
                            fullWidth
                        />
                    </Grid>


                    {/* Promoter Holding */}
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Promoter Holding (%)</InputLabel>
                            <Select
                                name="promoterHolding"
                                value={filters.promoterHolding}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="40">40%</MenuItem>
                                <MenuItem value="50">50%</MenuItem>
                                <MenuItem value="60">60%</MenuItem>
                                <MenuItem value="70">70%</MenuItem>
                                <MenuItem value="80">80%</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Sector */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Sector"
                            name="sector"
                            value={filters.sector}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>

                    {/* Face Value */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Face Value"
                            type="number"
                            name="faceValue"
                            value={filters.faceValue}
                            onChange={handleInputChange}
                            placeholder="e.g., > 5"
                            fullWidth
                        />
                    </Grid>

                    {/* Cap Size */}
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Cap Size</InputLabel>
                            <Select
                                name="capSize"
                                value={filters.capSize}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Small Cap">Small Cap</MenuItem>
                                <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                                <MenuItem value="Large Cap">Large Cap</MenuItem>
                                <MenuItem value="Micro Cap">Micro Cap</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
                    <Button onClick={onClose} variant="outlined" color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleApply} variant="contained" color="primary">
                        Apply Filters
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default StockFilterModal;
