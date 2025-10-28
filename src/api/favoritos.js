import axios from "axios";

const favoritosAPI = axios.create({
  baseURL: "http://localhost:7474/favoritos",
});

async function getFavoritos() {
  const response = await favoritosAPI.get("/");

  return response.data;
}

async function cadastrarFavorito(id) {
  await favoritosAPI.post(`/${id}`);
}

async function excluirFavorito(id) {
  await favoritosAPI.delete(`/${id}`);
}

export { getFavoritos, cadastrarFavorito, excluirFavorito };
