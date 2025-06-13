import userServices from '../services/user.services.js'

const getUsers = (req, res) => {
  const users = userServices.getUsers()
  res.status(200).json(users)
}

const createUser = (req, res) => {
  const { name, email } = req.body
  if (!name || !email) {
    res.status(401).json({ error: 'faltan datos' })
  }
  const newUser = userServices.createUser({ name, email })
  res.status(201).json(newUser)
}

const updateUser = (req, res) => {
  const { name } = req.body
  const { id } = req.params
  try {
    if (!id) {
      res.status(401).json({ error: 'No ingreso un ID valido' })
    }
    const user = userServices.updateUser(id, name)
    if (!user) {
      res.status(401).json('No se encontro al usuario')
    }

    res.status(201).json(user)
    return user
  } catch {
    res.status(501).json('Error interno del servidor')
  }
}

const deleteUser = (req, res) => {
  const { id } = req.params
  try {
    if (!id) {
      res.status(401).json({ error: 'No ingreso un ID valido' })
    }
    const deleteUser = userServices.deleteUser(id)
    if (!deleteUser) {
      res.status(401).json('No se encontro al usuario')
    }
    res.status(201).json('Usuario eliminado con exito')
  } catch {
    res.status(501).json('Error interno del servidor')
  }
}

export default { getUsers, createUser, updateUser, deleteUser }
