import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import './searchModal.scss'; // Import tệp SCSS

const SearchModal = ({ open, handleClose }) => {
  const handleSearch = () => {
    // Thực hiện hành động tìm kiếm tại đây
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="search-modal-title"
      aria-describedby="search-modal-description"
    >
      <Box className="search-modal">
        <Box className="modal-content">
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Box className="search-input-container">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              className="search-input"
            />
            <SearchIcon className="search-icon" />
          </Box>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;