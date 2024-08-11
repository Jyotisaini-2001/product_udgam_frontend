/** @format */

import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Input } from "../components/input";
import axios from "axios";

const Form = () => {
  const [openModal, setOpenModal] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setCategory("");
    setBrand("");
    setPrice("");
    setDescription("");
    setPhotos("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const productData = {
      name,
      category,
      brand,
      price,
      description,
      photos,
    };

    axios
      .post("https://product-udgam-backend.onrender.com/add-product", productData)
      .then((response) => {
        console.log("Product added:", response.data);
        onCloseModal();
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      });
  }

  return (
    <>
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center">
            <div className="relative flex w-full max-w-screen-lg">
              <div className="bg-whit w-full lg:max-w-md ml-0 lg:ml-10 lg:mt-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Add Product
                </h3>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <Input
                    label="Product Name"
                    id="productName"
                    placeholder="Enter product name"
                    FieldName={name}
                    setFieldName={setName}
                  />
                  <Input
                    label="Category"
                    id="category"
                    placeholder="Enter Category"
                    FieldName={category}
                    setFieldName={setCategory}
                  />
                  <Input
                    label="Brand Name"
                    id="BrandName"
                    placeholder="Enter Brand name"
                    FieldName={brand}
                    setFieldName={setBrand}
                  />
                  <Input
                    label="Price"
                    id="price"
                    placeholder="Enter price"
                    FieldName={price}
                    setFieldName={setPrice}
                  />
                  <Input
                    label="Description"
                    id="description"
                    placeholder="Enter description"
                    FieldName={description}
                    setFieldName={setDescription}
                  />
                  <Input
                    label="Image"
                    id="image"
                    placeholder="Enter image URL"
                    FieldName={photos}
                    setFieldName={setPhotos}
                  />
                  <div className="flex justify-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Form;
