import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/adminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/form/categoryForm";
import { Button, Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        { name }
      );

      if (data.success) {
        toast.success(`${data.category.name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // update Category

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName } );

      if (data.success) {
        toast.success(data.message);
      }

      setSelected(null);
      setUpdatedName("");
      setIsModalOpen(false);
      getAllCategory();

    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // delete Category
  
  const handleDelete = async (pid) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pid}`);

      if (data.success) {
        toast.success(data.message);
      }
      getAllCategory();
      
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
      <Layout title={"Dashboard- Create Category"}>
        <div className="container-fluid p-3">
          <div className="row flex" style={{ justifyContent: "space-between" }}>
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9 mt-3 ps-5">
              <h1>Manage Categories</h1>

              <div className="p-3">
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>

              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((cat) => {
                      return (
                        <>
                          <tr key={cat._id}>
                            <td>{cat.name}</td>
                            <td>
                              <Button
                                type="primary"
                                onClick={() => {
                                  setIsModalOpen(true);
                                  setUpdatedName(cat.name);
                                  setSelected(cat);
                                }}>
                                Edit
                              </Button>
                              <button className="btn btn-danger ms-3" onClick={() => handleDelete(cat._id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <Modal
              onCancel={() => setIsModalOpen(false)}
              open={isModalOpen}
              footer={null}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </Layout>
  );
};

export default CreateCategory;
