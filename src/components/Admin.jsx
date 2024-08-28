
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  updateProduct,
  deleteProduct,
  addUser,
  updateUser,
  deleteUser,
} from '../features/admin/adminSlice';

function Admin() {
  const dispatch = useDispatch();
  const { products, users } = useSelector((state) => state.admin);


  const [productForm, setProductForm] = useState({ id: '', name: '', price: '', image: null });
  const [userForm, setUserForm] = useState({ id: '', name: '', email: '' });
  const [editingProduct, setEditingProduct] = useState(null); 
  const [editingUser, setEditingUser] = useState(null); 

  
  const handleProductChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProductForm({ ...productForm, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUserChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ ...productForm, id: Date.now() }));
    setProductForm({ id: '', name: '', price: '', image: null });
    setEditingProduct(null); 
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct(productForm));
    setProductForm({ id: '', name: '', price: '', image: null });
    setEditingProduct(null); 
  };

  const handleEditProduct = (product) => {
    setProductForm(product);
    setEditingProduct(product.id); 
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const handleAddUser = () => {
    dispatch(addUser({ ...userForm, id: Date.now() }));
    setUserForm({ id: '', name: '', email: '' });
    setEditingUser(null); 
  };

  const handleUpdateUser = () => {
    dispatch(updateUser(userForm));
    setUserForm({ id: '', name: '', email: '' });
    setEditingUser(null); 
  };

  const handleEditUser = (user) => {
    setUserForm(user);
    setEditingUser(user.id); 
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Manage Products</h3>
        <div className="flex flex-col space-y-2 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productForm.name}
            onChange={handleProductChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="price"
            placeholder="Product Price"
            value={productForm.price}
            onChange={handleProductChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded w-full"
          />
          {productForm.image && (
            <img
              src={productForm.image}
              alt="Product Preview"
              className="w-full h-64 object-cover mb-4 rounded"
            />
          )}
          {editingProduct ? (
            <button
              onClick={handleUpdateProduct}
              className="bg-yellow-500 text-white p-2 rounded"
            >
              Update Product
            </button>
          ) : (
            <button
              onClick={handleAddProduct}
              className="bg-green-500 text-white p-2 rounded"
            >
              Add Product
            </button>
          )}
        </div>

        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <span>{product.name} - PKR{product.price}</span>
                {product.image && (
                  <div>
                    <img src={product.image} alt={product.name} className="w-16 h-16 mt-2" />
                  </div>
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-yellow-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
        <div className="flex flex-col space-y-2 mb-4">
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={userForm.name}
            onChange={handleUserChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="User Email"
            value={userForm.email}
            onChange={handleUserChange}
            className="border p-2 rounded w-full"
          />
          {editingUser ? (
            <button
              onClick={handleUpdateUser}
              className="bg-yellow-500 text-white p-2 rounded"
            >
              Update User
            </button>
          ) : (
            <button
              onClick={handleAddUser}
              className="bg-green-500 text-white p-2 rounded"
            >
              Add User
            </button>
          )}
        </div>

        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <span>{user.name} - {user.email}</span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
