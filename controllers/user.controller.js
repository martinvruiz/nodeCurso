import userServices from "../services/user.services.js";

const getUsers = async (req, res) => {
  const users = await userServices.getUsers();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(401).json({ error: "faltan datos" });
  }
  const newUser = await userServices.createUser({ name, email });
  res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  try {
    if (!id) {
      res.status(401).json({ error: "No ingreso un ID valido" });
    }
    const user = await userServices.updateUser(id, name);
    if (!user) {
      res.status(401).json("No se encontro al usuario");
    }

    res.status(201).json(user);
    return user;
  } catch {
    res.status(501).json("Error interno del servidor");
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(401).json({ error: "No ingreso un ID valido" });
    }
    const deleteUser = await userServices.deleteUser(id);
    if (!deleteUser) {
      res.status(401).json("No se encontro al usuario");
    }
    res.status(201).json("Usuario eliminado con exito");
  } catch {
    res.status(501).json("Error interno del servidor");
  }
};

export default { getUsers, createUser, updateUser, deleteUser };
