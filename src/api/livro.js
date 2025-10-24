import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:7474/livros" });

async function getLivros() {
  const response = await livrosAPI.get("/");

  return response.data;
}

export { getLivros };
