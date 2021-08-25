import axios from "axios";

const baseURL = "http://189.2.192.188:8080";

// http://189.2.192.188:8080/produto
// http://189.2.192.188:8080/categoria
// http://189.2.192.188:8080/empresa
// http://189.2.192.188:8080/estado
// http://189.2.192.188:8080/cidade

const api = axios.create({
  baseURL: baseURL,
});

export default api;
