import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  const response = await axios.get(`${apiUrl}`);
  return response.data;
}
/* import axios from "axios";

const apiUrl = "http://localhost:5000";

export async function getMovies() {
  const response = await axios.get(`${apiUrl}/movies`);
  return response.data;
}
export async function addMovies(newItem) {
  const response = await axios.post(`${apiUrl}/movies`, newItem, {
   
  });
  return response;
}
export async function editMovies(id, newItem) {
  const response = await axios.put(`${apiUrl}/movies/${id}`, newItem, {
   
  });
  return response;
}

export async function deleteMovies(id) {
  const response = await axios.delete(`${apiUrl}/movies/${id}`);
  return response;
} */