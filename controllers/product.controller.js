import productsServices from "../services/product.services.js";

const getProducts = async (req, res) => {
  const products = await productsServices.getProducts();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "No ingreso un ID valido" });
  }
  try {
    const getProduct = await productsServices.getByID(id);
    if (!getProduct) {
      return res.status(404).json("No se encontro al producto");
    }
    return res.status(200).json(getProduct);
  } catch (error) {
    return res.status(500).json("Error interno del servidor");
  }
};

const createProduct = async (req, res) => {
  const { title, price, description } = req.body;
  if (!title || !price || !description) {
    return res.status(401).json({ error: "faltan datos" });
  }
  const newProduct = await productsServices.createProduct({
    title,
    price,
    description,
  });
  return res.status(201).json(newProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(401).json({ error: "No ingreso un ID valido" });
    }
    const deleteProduct = await productsServices.deleteProduct(id);
    if (!deleteProduct) {
      res.status(401).json("No se encontro al producto");
    }
    return res.status(201).json("Producto eliminado con exito");
  } catch {
    return res.status(501).json("Error interno del servidor");
  }
};

export default { getProducts, createProduct, deleteProduct, getById };
