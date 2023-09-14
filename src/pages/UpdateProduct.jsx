import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const UpdateProduct = () => {
  const { state } = useLocation();
  
  const { title } = useParams();
  console.log(title);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(state); //formData nın başlangıç değerine gelen veriyi verdim ki formum dolu olsun

  const handleChange = e => {

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async e => {
    e.preventDefault();

    await axios.put(
    `https://63f4e5583f99f5855db9e941.mockapi.io/products/${state.id}`,
      formData
    ); // submit tetiklendiğinde updte isteğini id ye göre atıyorum.
    navigate(-1); // update başarılı olursa product-list sayfasından geldiğim için o syfaya geri dönüyorum.
  };
  return (
    <div className="container">
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text="Update"
      />
    </div>
  );
};

export default UpdateProduct;