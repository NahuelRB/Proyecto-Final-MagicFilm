import "./addCategory.css";
import { Modal } from "@mui/material";
import AddCategoryForm from "./AddCategoryForm";


const ModalAddCategory = ({ open, saveCategory, handleClose }) => {
  return (
    <>
      <Modal disableEnforceFocus open={open} onClose={handleClose}>
        <AddCategoryForm saveCategory={saveCategory} />
      </Modal>
    </>
  );
};

export default ModalAddCategory;
