import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const CustomModal = ({ open, handleClose, character }) => {
    if (!character) return null;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Details for {character.name}
                </Typography>
                <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={character.image} alt={character.name} style={{ width: '300px', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
                    <Typography id="modal-description">
                        <p><strong>Status:</strong> {character.status}</p>
                        <p><strong>Gender:</strong> {character.gender}</p>
                        <p><strong>Species:</strong> {character.species}</p>
                        <p><strong>Origin:</strong> {character.origin.name}</p>
                        <p><strong>Location:</strong> {character.location.name}</p>
                    </Typography>
                    <Button onClick={handleClose} sx={{ marginTop: 2 }}>Close</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CustomModal;