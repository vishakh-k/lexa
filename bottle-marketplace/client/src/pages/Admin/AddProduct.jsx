import React, { useState } from "react";
import { adminAPI } from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "sports", // default category
    images: [],
    colors: [{ name: "", hexCode: "" }],
    specifications: {
      capacity: "",
      material: "",
      dimensions: "",
      weight: "",
      features: [""],
    },
    stock: "",
    featured: false,
    isNew: true,
    onSale: false,
    salePrice: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await adminAPI.addProduct(productData);
      navigate("/admin/products");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleColorChange = (index, field, value) => {
    const newColors = [...productData.colors];
    newColors[index] = { ...newColors[index], [field]: value };
    setProductData({ ...productData, colors: newColors });
  };

  const addColor = () => {
    setProductData({
      ...productData,
      colors: [...productData.colors, { name: "", hexCode: "" }],
    });
  };

  const addFeature = () => {
    setProductData({
      ...productData,
      specifications: {
        ...productData.specifications,
        features: [...productData.specifications.features, ""],
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Product Name</label>
            <input
              type="text"
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Description</label>
            <textarea
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Price (₹)</label>
              <input
                type="number"
                value={productData.price}
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Category</label>
              <select
                value={productData.category}
                onChange={(e) =>
                  setProductData({ ...productData, category: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              >
                <option value="sports">Sports</option>
                <option value="travel">Travel</option>
                <option value="kids">Kids</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div>
          <label className="block mb-2">Colors</label>
          {productData.colors.map((color, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                placeholder="Color name"
                value={color.name}
                onChange={(e) =>
                  handleColorChange(index, "name", e.target.value)
                }
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Color code (hex)"
                value={color.hexCode}
                onChange={(e) =>
                  handleColorChange(index, "hexCode", e.target.value)
                }
                className="w-1/2 p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addColor}
            className="text-blue-600 hover:text-blue-800"
          >
            + Add Color
          </button>
        </div>

        {/* Specifications */}
        <div className="space-y-4">
          <h3 className="font-semibold">Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Capacity (ml)</label>
              <input
                type="number"
                value={productData.specifications.capacity}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    specifications: {
                      ...productData.specifications,
                      capacity: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Material</label>
              <input
                type="text"
                value={productData.specifications.material}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    specifications: {
                      ...productData.specifications,
                      material: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-2">Stock Quantity</label>
          <input
            type="number"
            value={productData.stock}
            onChange={(e) =>
              setProductData({ ...productData, stock: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Options */}
        <div className="space-y-2">
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={productData.featured}
                onChange={(e) =>
                  setProductData({ ...productData, featured: e.target.checked })
                }
                className="mr-2"
              />
              Featured Product
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={productData.isNew}
                onChange={(e) =>
                  setProductData({ ...productData, isNew: e.target.checked })
                }
                className="mr-2"
              />
              New Arrival
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
