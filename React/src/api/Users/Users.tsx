import instance from "../config";

const getUsers = () => {
  return instance.get("/user");
};
const getUser = (id: string) => {
  return instance.get("/user/" + id);
};
const addUser = (data) => {
  return instance.post("/user", data);
};
const editUser = (id: string, data) => {
  return instance.put("/user/" + id, data);
};
const removeUser = (id: string) => {
  return instance.delete("/user/" + id);
};
export { editUser, removeUser, addUser, getUser, getUsers };
