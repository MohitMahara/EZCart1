import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/adminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Select, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");

  // get all categoriess

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // create product

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();

      productData.append("name", name);
      productData.append("description", description);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("price", price);
      productData.append("category", category);

      const { data } =  await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/create-product`,
        productData
      );


      if (data?.success) {
        toast.success(data.message);
 
        setTimeout(() =>{
          navigate("/dashboard/admin/products");
        }, 2000)

      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard- Create Product"}>
      <div className="container-fluid p-3 ">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-3 ps-5">
            <h1>Products</h1>
            <div className="m-1 w-75">
              <Select
                variant={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) =>{
                   setCategory(value)
                }}
              >
                {categories?.map((cat) => 
                   (
                      <Option key={cat._id} value={cat._id}>
                        {cat.name}
                      </Option>
                  )
                )}
              </Select>

              <div className="mb-3 w-100">
                <label className="btn btn-outline-secondary w-100">
                  {photo ? photo.name : "Upload photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>

                {photo && (
                  <>
                    <Button
                      type="primary"
                      onClick={() => setIsModalOpen(true)}
                      className="mt-3"
                    >
                      View
                    </Button>
                    <Modal
                      footer={null}
                      onCancel={() => setIsModalOpen(false)}
                      open={isModalOpen}
                      width={800}
                    >
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        className="img img-responsive"
                        style={{
                          width: "100%",
                          maxHeight: "70vh",
                          objectFit: "contain",
                        }}
                      />
                    </Modal>
                  </>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter product name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Enter product price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={quantity}
                  placeholder="Enter product quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <Select
                  variant={false}
                  placeholder="Select Shipping"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => setShipping(value)}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="mb-3">
                <textarea
                  value={description}
                  rows={5}
                  cols={30}
                  placeholder="Write product description"
                  className="form-control"
                  style={{ resize: "none" }}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3">
                <button
                  className="btn btn-dark w-100"
                  onClick={handleCreateProduct}
                >
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
