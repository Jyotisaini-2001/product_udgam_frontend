
import React, { useState } from "react";
import { AdminPanel } from "../components/AdminPanel";
import { HiPlusCircle } from "react-icons/hi";
import Form from "./form";
import ProductList from "./productList";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);

  const handleIconClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container mx-auto bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <AdminPanel />
        </div>
        <div className="md:col-span-3 py-3">
          <h1 className="text-2xl font-bold mb-4 text-start px-4">Admin</h1>
          <div className="flex items-center px-4">
            <div
              className="bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
              onClick={handleIconClick}
            >
              <span className="mr-2">Add New Product</span>
              <HiPlusCircle className="text-white text-3xl" />
            </div>
          </div>
          {showForm && <Form />}
          <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
