import React, { FC } from 'react';
import { style } from './style';
import { Box, Modal } from '@mui/material';


type modalType = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}


const ModalComp: FC<modalType> = ({children, open, onClose}) => {
  return (
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus
            disableEnforceFocus
            disableScrollLock
            open={open}
            onClose={onClose}
            >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
  )
}

export default ModalComp;
