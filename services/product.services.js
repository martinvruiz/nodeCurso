import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import db from "../config/db.js";
import { createProductObject } from "../models/product.model.js";

const getProducts = async () => {
  const products = collection(db, "products");
  const getProducts = await getDocs(products);
  return getProducts.docs.map((doc) => {
    const data = doc.data();
    return createProductObject({
      id: doc.id,
      title: data.title,
      price: data.price,
      description: data.description,
    });
  });
};

const createProduct = async (product) => {
  const productCollection = doc(collection(db, "products"));
  await setDoc(productCollection, {
    title: product.title,
    price: product.price,
    description: product.description,
  });
  return createProductObject({
    id: productCollection.id,
    title: product.title,
    price: product.price,
    description: product.description,
  });
};

const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const productDoc = await getDoc(productRef);
  if (!productDoc.exists()) return null;
  await deleteDoc(productRef);
  const data = productDoc.data();
  return createProductObject({
    id: productDoc.id,
    title: data.title,
    price: data.price,
    description: data.description,
  });
};

export default { getProducts, createProduct, deleteProduct };
