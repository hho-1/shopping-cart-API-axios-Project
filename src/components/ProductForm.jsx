import { useState } from "react";

const ProductForm = () => {

  /* const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("") */

  const initialState = {
    name: "",
    image: "",
    price: 0,
    dampingRate: 0.8,
    amount: 0
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {

  }

  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">Product</h1>
      <form className="p-2">
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="add-name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            value={formData.price} onChange={handleChange}
            id="add-price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            value={formData.amount} onChange={handleChange}
            id="add-quantity"
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
