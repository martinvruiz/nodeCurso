import crypto from "crypto";
import Product from "../models/product.model.js";
import db from "../config/db.js";

const getProducts = () => {
  return db.products;
};

const getByID = (id) => {
  const findProduct = products.find((product) => product.id === id);
  if (!findProduct) return null;
  return findProduct;
};

const createProduct = (product) => {
  const newProduct = new Product(
    crypto.randomUUID(),
    product.title,
    product.price,
    product.description
  );
  db.products.push(newProduct);
  return newProduct;
};

const deleteProduct = (id) => {
  const index = db.products.findIndex((product) => product.id === id);
  if (index === -1) return null;
  const deleted = db.products.splice(index, 1)[0];
  return deleted;
};

export default { getByID, getProducts, createProduct, deleteProduct };
