

import "./addCategory.css";
import AddCategoryForm from "./AddCategoryForm";
import ModalAddCategory from "./ModalAddCategory";
import {
  getCategories,
  createCategory,
} from "../../../service/categoryServices";
import Swal from "sweetalert2";
import { uploadFile } from "../../../service/awsUtils";
const AddCategoryContainer = ({
  open,
  selectCategory,
  setCategories,
  from,
}) => {
  const saveCategory = async (data) => {
    console.log(
      "🚀 ~ file: AddCategoryContainer.jsx:19 ~ saveCategory ~ data:",
      data
    );

    if (typeof data?.zoom !== "string") {
      data.zoom = await uploadFile(data.zoom.image, data.title + "/zoom/");
    }
    if (typeof data?.logo !== "string") {
      data.logo = await uploadFile(data.logo.image, data.title + "/logo/");
    }
    const create = await createCategory(data);
    if (create.status === 200) {
      if (from !== undefined) {
        getCategories().then((res) => {
          setCategories(res.data);
          selectCategory(create.data.id);
        });
      }
      Swal.fire("Se creó correctamente la Categoria");
    }
  };

  return (
    <>
      {from !== undefined ? (
        <ModalAddCategory
          open={open}
          saveCategory={saveCategory}
          handleClose={() => selectCategory("0")}
        />
      ) : (
        <AddCategoryForm saveCategory={saveCategory} />
      )}
    </>
  );
};
export default AddCategoryContainer;
