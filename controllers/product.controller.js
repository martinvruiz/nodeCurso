import productsServices from "../services/product.services.js";

const getProducts = (req, res) => {
  const products = productsServices.getProducts();
  res.status(200).json(products);
};

const createProduct = (req, res) => {
  const { title, price, description } = req.body;
  if (!title || !price || !description) {
    res.status(401).json({ error: "faltan datos" });
  }
  const newProduct = productsServices.createProduct({
    title,
    price,
    description,
  });
  res.status(201).json(newProduct);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(401).json({ error: "No ingreso un ID valido" });
    }
    const deleteProduct = productsServices.deleteProduct(id);
    if (!deleteProduct) {
      res.status(401).json("No se encontro al producto");
    }
    res.status(201).json("Producto eliminado con exito");
  } catch {
    res.status(501).json("Error interno del servidor");
  }
};

export default { getProducts, createProduct, deleteProduct };
