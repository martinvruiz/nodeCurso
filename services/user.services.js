import crypto from 'crypto'
import User from '../models/user.model.js'

const users = []

const getUsers = () => {
  return users
}

const getByID = (id) => {
  const findUser = users.find((user) => user.id === id)
  if (!findUser) return null
  return findUser
}

const createUser = (user) => {
  const newUser = new User(crypto.randomUUID(), user.name, user.email)
  users.push(newUser)
  return newUser
}

const updateUser = (id, name) => {
  const findUser = getByID(id)
  if (!findUser) return null
  findUser.name = name
  return findUser
}

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id)
  if (index === -1) return null
  const deleted = users.splice(index, 1)[0]
  return deleted
}

export default { createUser, getUsers, getByID, updateUser, deleteUser }
