import { Box, Modal, Typography } from "@mui/material";
import styles from "../modal.module.css";
const SuccessModal = ({ open, handleClose, onSetStatus }) => {
  const handleSubmit = () => {
    onSetStatus(false);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modal}>
        <Typography
          variant="h6"
          sx={{
            p: 1,
          }}
        >
          Ваша заявка принята
        </Typography>

        <button onClick={() => handleSubmit()}>Закрыть</button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
