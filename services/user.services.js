import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { createUserObject } from "../models/user.model.js";
import db from "../config/db.js";

const getUsers = async () => {
  const users = collection(db, "users");
  const getUsers = await getDocs(users);
  return getUsers.docs.map((doc) => {
    const data = doc.data();
    return createUserObject({ id: doc.id, name: data.name, email: data.email });
  });
};

const getByID = async (id) => {
  const findUser = await getDoc(doc(db, "users", id));
  if (!findUser.exists()) return null;
  const data = findUser.data();
  return createUserObject({ id: doc.id, name: data.name, email: data.email });
};

const createUser = async (user) => {
  const userCollection = doc(collection(db, "users"));
  await setDoc(userCollection, { name: user.name, email: user.email });
  return createUserObject({
    id: userCollection.id,
    name: user.name,
    email: user.email,
  });
};

const updateUser = async (id, name) => {
  const userRef = doc(db, "users", id);
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) return null;
  await setDoc(userRef, { ...userDoc.data(), name }, { merge: true });
  const updated = await getDoc(userRef);
  const data = updated.data();
  return createUserObject({
    id: updated.id,
    name: data.name,
    email: data.email,
  });
};

const deleteUser = async (id) => {
  const userRef = doc(db, "users", id);
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) return null;
  await deleteDoc(userRef);
  const data = userDoc.data();
  return createUserObject({
    id: userDoc.id,
    name: data.name,
    email: data.email,
  });
};

export default { createUser, getUsers, updateUser, deleteUser, getByID };
